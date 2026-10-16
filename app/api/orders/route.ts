import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

const BUNDLE_ID = "vinillia-beauty-pack";
const BUNDLE_NAME = "Vinillia Beauty & Skincare — Pack de 8 produits (dont 2 offerts)";
const BUNDLE_PRICE_MAD = 1400;

type OrderInput = {
  fullName?: unknown;
  phone?: unknown;
  address?: unknown;
  productBundleId?: unknown;
  quantity?: unknown;
};

export type SavedOrder = {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  phoneNormalized: string;
  address: string;
  productBundleId: string;
  productName: string;
  quantity: number;
  totalMad: number;
  paymentMethod: "cash_on_delivery";
  status: "new" | "confirmed" | "delivered" | "cancelled";
};

// In-memory rate limiting: max 5 orders per 15 minutes per IP
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + windowMs });
    return false;
  }

  if (entry.count >= 5) {
    return true;
  }

  entry.count += 1;
  return false;
}

function normalizePhone(value: string) {
  return value.replace(/[\s().-]/g, "");
}

const ORDERS_DIR = path.join(process.cwd(), "data");
const ORDERS_FILE = path.join(ORDERS_DIR, "orders.json");

async function persistOrder(order: SavedOrder): Promise<void> {
  await fs.mkdir(ORDERS_DIR, { recursive: true });

  let existingOrders: SavedOrder[] = [];
  try {
    const fileContent = await fs.readFile(ORDERS_FILE, "utf-8");
    existingOrders = JSON.parse(fileContent);
    if (!Array.isArray(existingOrders)) {
      existingOrders = [];
    }
  } catch (err: unknown) {
    // If file does not exist yet or has invalid JSON, start fresh array
    const error = err as NodeJS.ErrnoException;
    if (error.code !== "ENOENT") {
      console.warn("Orders file read warning, creating new container.");
    }
    existingOrders = [];
  }

  existingOrders.push(order);
  await fs.writeFile(ORDERS_FILE, JSON.stringify(existingOrders, null, 2), "utf-8");
}

export async function POST(request: Request) {
  // Extract client IP for rate limiting
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives de commande. Veuillez patienter quelques minutes." },
      { status: 429 }
    );
  }

  let body: OrderInput;
  try {
    body = (await request.json()) as OrderInput;
  } catch {
    return NextResponse.json({ error: "Corps de requête JSON invalide." }, { status: 400 });
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const address = typeof body.address === "string" ? body.address.trim() : "";
  const phoneNormalized = normalizePhone(phone);
  const phoneValid = /^(\+212|00212|0)([5-7]\d{8})$/.test(phoneNormalized);

  if (fullName.length < 3 || fullName.length > 120) {
    return NextResponse.json({ error: "Nom complet invalide (3 à 120 caractères requis)." }, { status: 400 });
  }

  if (!phoneValid) {
    return NextResponse.json({ error: "Numéro de téléphone marocain invalide (ex: 06 12 34 56 78)." }, { status: 400 });
  }

  if (address.length < 8 || address.length > 500) {
    return NextResponse.json({ error: "Adresse de livraison invalide (minimum 8 caractères requis)." }, { status: 400 });
  }

  if (body.productBundleId !== BUNDLE_ID || (body.quantity !== undefined && body.quantity !== 1)) {
    return NextResponse.json({ error: "Pack ou quantité invalide." }, { status: 400 });
  }

  // Create persisted order object with authoritative server price and metadata
  const orderId = `VIN-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const order: SavedOrder = {
    id: orderId,
    createdAt: new Date().toISOString(),
    fullName,
    phone,
    phoneNormalized,
    address,
    productBundleId: BUNDLE_ID,
    productName: BUNDLE_NAME,
    quantity: 1,
    totalMad: BUNDLE_PRICE_MAD,
    paymentMethod: "cash_on_delivery",
    status: "new",
  };

  try {
    await persistOrder(order);
    return NextResponse.json(
      {
        success: true,
        orderId: order.id,
        totalMad: order.totalMad,
        message: "Commande enregistrée avec succès. Notre équipe vous contactera pour la confirmation.",
      },
      { status: 201 }
    );
  } catch (saveError) {
    console.error("Order persistence failed:", saveError);
    return NextResponse.json(
      {
        error: "Une erreur est survenue lors de l'enregistrement de votre commande. Veuillez réessayer plus tard.",
      },
      { status: 500 }
    );
  }
}
