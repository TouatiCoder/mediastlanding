import { NextResponse } from "next/server";

const BUNDLE_ID = "vinillia-beauty-pack";
const BUNDLE_PRICE_MAD = 1400;

type OrderInput = {
  fullName?: unknown;
  phone?: unknown;
  address?: unknown;
  productBundleId?: unknown;
  quantity?: unknown;
};

function normalizePhone(value: string) {
  return value.replace(/[\s().-]/g, "");
}

export async function POST(request: Request) {
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
    return NextResponse.json({ error: "Nom complet invalide." }, { status: 400 });
  }

  if (!phoneValid) {
    return NextResponse.json({ error: "Numéro de téléphone marocain invalide." }, { status: 400 });
  }

  if (address.length < 8 || address.length > 500) {
    return NextResponse.json({ error: "Adresse de livraison invalide." }, { status: 400 });
  }

  if (body.productBundleId !== BUNDLE_ID || (body.quantity !== undefined && body.quantity !== 1)) {
    return NextResponse.json({ error: "Pack ou quantité invalide." }, { status: 400 });
  }

  // Integration point: persist this verified order to a database or send it
  // to an explicitly configured, authorized order-management provider.
  // This starter route deliberately does not claim to save or send an order.
  // Never trust the price sent by the browser; derive it from trusted config.
  const order = {
    fullName,
    phone,
    address,
    productBundleId: BUNDLE_ID,
    quantity: 1,
    totalMad: BUNDLE_PRICE_MAD,
    status: "pending_integration" as const,
  };

  console.info("Vinillia order endpoint reached but no persistence provider is configured.", {
    productBundleId: order.productBundleId,
    quantity: order.quantity,
    totalMad: order.totalMad,
  });

  return NextResponse.json(
    {
      error: "La réception des commandes n'est pas encore configurée. Veuillez réessayer plus tard.",
    },
    { status: 503 },
  );
}
