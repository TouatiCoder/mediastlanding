"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";

import franceFlag from "./france.png";
import arabicFlag from "./flag.png";
import bannerFr from "./banner fr.jpg";
import bannerAr from "./banner ar.jpg";
import product1 from "./imgprodu/1.jpg";
import product2 from "./imgprodu/2.jpg";
import product3 from "./imgprodu/3.jpg";
import product4 from "./imgprodu/4.jpg";
import product5 from "./imgprodu/5.jpg";
import product6 from "./imgprodu/6.jpg";
import product7 from "./imgprodu/7.jpg";
import product8 from "./imgprodu/8.jpg";
import offerBanner from "./imgprodu/image.png";

type IconProps = { size?: number; className?: string; "aria-hidden"?: boolean | "true" | "false" };
type IconName =
  | "ArrowRight"
  | "ArrowLeft"
  | "Check"
  | "Gift"
  | "Heart"
  | "Menu"
  | "Sparkles"
  | "X"
  | "ShieldCheck"
  | "Truck"
  | "RefreshCw"
  | "Phone"
  | "MapPin"
  | "User"
  | "Clock"
  | "SlidersHorizontal";

function IconGlyph({ name, size = 20, className, ...props }: IconProps & { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden={props["aria-hidden"] ?? true} focusable="false">
      {name === "ArrowRight" && <><path {...common} d="M5 12h14" /><path {...common} d="m12 5 7 7-7 7" /></>}
      {name === "ArrowLeft" && <><path {...common} d="M19 12H5" /><path {...common} d="m12 19-7-7 7-7" /></>}
      {name === "Check" && <path {...common} d="m5 12 4 4L19 6" />}
      {name === "Gift" && <><rect {...common} x="3" y="8" width="18" height="13" rx="2" /><path {...common} d="M12 8v13M2 12h20M12 8H7.5a2.5 2.5 0 1 1 2.4-3.2L12 8Zm0 0h4.5a2.5 2.5 0 1 0-2.4-3.2L12 8Z" /></>}
      {name === "Heart" && <path {...common} d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />}
      {name === "Menu" && <><path {...common} d="M4 6h16" /><path {...common} d="M4 12h16" /><path {...common} d="M4 18h16" /></>}
      {name === "Sparkles" && <><path {...common} d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path {...common} d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z" /><path {...common} d="m5 2 .8 2.2L8 5l-2.2.8L5 8l-.8-2.2L2 5l2.2-.8L5 2Z" /></>}
      {name === "X" && <><path {...common} d="m18 6-12 12" /><path {...common} d="m6 6 12 12" /></>}
      {name === "ShieldCheck" && <><path {...common} d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path {...common} d="m9 12 2 2 4-4" /></>}
      {name === "Truck" && <><path {...common} d="M3 6h11v12H3z" /><path {...common} d="M14 10h4l3 3v5h-7z" /><circle {...common} cx="7.5" cy="19" r="2" /><circle {...common} cx="17.5" cy="19" r="2" /></>}
      {name === "RefreshCw" && <><path {...common} d="M20 7v5h-5" /><path {...common} d="M4 17v-5h5" /><path {...common} d="M5.6 9A7 7 0 0 1 17.5 6L20 12M4 12l2.5 6A7 7 0 0 0 18.4 15" /></>}
      {name === "Phone" && <path {...common} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />}
      {name === "MapPin" && <><path {...common} d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle {...common} cx="12" cy="10" r="3" /></>}
      {name === "User" && <><path {...common} d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle {...common} cx="12" cy="7" r="4" /></>}
      {name === "Clock" && <><circle {...common} cx="12" cy="12" r="10" /><path {...common} d="M12 6v6l4 2" /></>}
      {name === "SlidersHorizontal" && <><path {...common} d="M21 4h-7m-4 0H3m18 8h-3m-4 0H3m18 8h-9m-4 0H3" /><circle {...common} cx="12" cy="4" r="2" /><circle {...common} cx="16" cy="12" r="2" /><circle {...common} cx="8" cy="20" r="2" /></>}
    </svg>
  );
}

const ArrowRight = (props: IconProps) => <IconGlyph name="ArrowRight" {...props} />;
const ArrowLeft = (props: IconProps) => <IconGlyph name="ArrowLeft" {...props} />;
const Check = (props: IconProps) => <IconGlyph name="Check" {...props} />;
const Gift = (props: IconProps) => <IconGlyph name="Gift" {...props} />;
const Heart = (props: IconProps) => <IconGlyph name="Heart" {...props} />;
const Menu = (props: IconProps) => <IconGlyph name="Menu" {...props} />;
const Sparkles = (props: IconProps) => <IconGlyph name="Sparkles" {...props} />;
const X = (props: IconProps) => <IconGlyph name="X" {...props} />;
const ShieldCheck = (props: IconProps) => <IconGlyph name="ShieldCheck" {...props} />;
const Truck = (props: IconProps) => <IconGlyph name="Truck" {...props} />;
const RefreshCw = (props: IconProps) => <IconGlyph name="RefreshCw" {...props} />;
const Phone = (props: IconProps) => <IconGlyph name="Phone" {...props} />;
const MapPin = (props: IconProps) => <IconGlyph name="MapPin" {...props} />;
const User = (props: IconProps) => <IconGlyph name="User" {...props} />;

const PRICE_MAD = 1400;

// Centralized bilingual translation dictionary
const translations: Record<string, string> = {
  // Announcement
  "VOTRE RITUEL BEAUTÉ, EN UN SEUL PACK · 2 PRODUITS OFFERTS": "روتين جمالك في باقة واحدة · منتجان هدية",
  
  // Header Navigation
  "Accueil": "الرئيسية",
  "Le pack": "الباقة",
  "La routine": "الروتين",
  "Avant / Après": "قبل / بعد",
  "Commander": "اطلبي",
  "Commander le pack": "اطلبي الباقة",
  "Ouvrir le menu": "فتح القائمة",
  "Fermer le menu": "إغلاق القائمة",

  // Hero Section (Master prompt specifications)
  "OFFRE PACK VINILLIA": "عرض باقة VINILLIA",
  "Huit essentiels. Un seul rituel.": "8 منتجات أساسية، روتين واحد لجمالك",
  "Retrouvez 8 essentiels skincare dans un seul pack, avec 2 produits offerts.": "اكتشفي باقة العناية بالبشرة التي تضم 8 منتجات، منها منتجان هدية.",
  "Sélection beauté": "اختيار مميز للعناية",
  "2 produits offerts": "منتجان هدية",
  "Commande facile": "طلب سهل",
  "1 400 DH": "1400 درهم",

  // Hero badge & visuals
  "8 PRODUITS · 2 OFFERTS": "8 منتجات · منتجان هدية",
  "Bannière de la sélection Vinillia": "بانر باقة فينيليا للعناية بالبشرة",

  // Value strip / Reassurance
  "Paiement à la livraison": "الدفع عند الاستلام",
  "Paiement en espèces à la réception": "أداء نقداً عند استلام الطرد",
  "8 produits complets": "8 منتجات متكاملة",
  "6 soins AXIS-Y + 2 cadeaux Vaseline": "6 مستحضرات AXIS-Y + هديتان من فازلين",
  "Commande express": "طلب سريع وسهل",
  "En quelques clics sans carte bancaire": "في ثوانٍ وبدون بطاقة بنكية",
  "Confirmation par appel": "تأكيد هاتفي سريع",
  "Notre équipe vous appelle sous 24h": "سيتصل بكِ فريقنا خلال 24 ساعة",

  // Pack Section
  "LA SÉLECTION VINILLIA": "تشكيلة VINILLIA",
  "Le pack beauté qui vous ressemble": "باقة الجمال المتكاملة لروتينك",
  "Une sélection harmonieuse de soins pour nettoyer, équilibrer, nourrir et protéger votre peau au quotidien.": "تشكيلة متناسقة لتنظيف، توازن، ترطيب وحماية بشرتكِ يومياً.",
  "OFFERT": "هدية",
  "Cadeau offert dans le pack": "هدية مجانية ضمن الباقة",
  "Soin inclus dans le pack": "مستحضر ضمن باقة الجمال",
  "8 produits dans votre pack": "8 منتجات في باقتكِ",
  "6 soins sélectionnés + 2 soins offerts inclus.": "6 منتجات مختارة بعناية + منتجان هدية مجانية.",
  "Les 2 produits Vaseline sont offerts": "منتجا فازلين مشمولان كهدية مجانية",
  "Commander mon pack": "أطلب باقتي الآن",

  // Product types and names
  "Nettoyant visage": "رغوة تنظيف الوجه",
  "Tonique éclat": "تونر الإشراقة والنضارة",
  "Masque gel apaisant": "قناع جل مهدئ للبشرة",
  "Ampoule sérum barrière": "أمبول تقوية حاجز البشرة",
  "Crème hydratante éclat": "كريم الترطيب والإشراقة",
  "Protection solaire minérale": "واقي شمس معدني",
  "Soin corps éclat": "لوشن إشراقة وترطيب الجسم",
  "Baume à lèvres teinté": "مرطب شفاه بلمسة وردية",

  // Routine Section (3 STAGES)
  "LA ROUTINE VINILLIA": "روتين VINILLIA",
  "Votre rituel en 6 étapes": "روتينكِ في 6 خطوات بسيطة",
  "Une méthode simple et intuitive pour intégrer les soins de votre pack dans votre quotidien.": "طريقة عملية وسلسة لتطبيق منتجات باقتكِ والاستفادة الكاملة منها.",
  "Étape 01": "الخطوة 01",
  "Nettoyer & Préparer": "تنظيف وتهيئة البشرة",
  "Étape 02": "الخطوة 02",
  "Traiter & Hydrater": "عناية وترطيب عميق",
  "Étape 03": "الخطوة 03",
  "Protéger & Sublimer": "حماية ولمسة نضارة",

  // Before / After Section
  "RÉSULTATS & TEXTURES": "النتائج والتجربة",
  "Votre peau, votre rituel": "بشرتكِ، عنايتكِ اليومية",
  "Découvrez la progression visible d'un rituel régulier. Glissez pour comparer l'effet avant et après application.": "اكتشفي التحول الجميل لروتين العناية المنتظم. اسحبي للمقارنة بين قبل وبعد الاستخدام.",
  "AVANT": "قبل",
  "APRÈS": "بعد",
  "Glissez pour comparer": "اسحبي للمقارنة",
  "Visuels authentiques de routine — Résultats observés au fil d'une utilisation régulière.": "مساحة مخصصة لمتابعة تطور الروتين — تظهر النتائج مع الاستخدام المنتظم والمستمر.",

  // Benefits / Highlights Section
  "OFFRE SPÉCIALE": "عرض استثنائي",
  "Pourquoi choisir le pack Vinillia ?": "لماذا تختارين باقة Vinillia؟",
  "Une solution complète et avantageuse pensée pour simplifier votre routine beauté tout en réalisant une économie substantielle.": "حل متكامل صُمم لتبسيط روتينك اليومي مع توفير ملموس ومنتجات أصلية.",
  "Rituel complet en 1 pack": "روتين كامل في باقة واحدة",
  "Plus besoin de chercher des soins compatibles : les 8 formules agissent en parfaite synergie.": "لا داعي للبحث عن منتجات متوافقة: المنتجات الثمانية تعمل معاً بانسجام وتناغم.",
  "2 soins iconiques offerts": "هديتان مميزتان مجاناً",
  "Recevez la lotion Gluta-Hya et le soin pour lèvres Rosy Lips de Vaseline sans frais supplémentaires.": "احصلي على لوشن Gluta-Hya ومرطب الشفاه Rosy Lips من فازلين كهدية مجانية.",
  "Paiement à la livraison au Maroc": "الدفع عند الاستلام بالمغرب",
  "Vous ne payez rien en ligne : réglez votre commande directement au livreur à la réception de votre colis.": "لا تدفعي شيئاً عبر الإنترنت: أدي ثمن طلبكِ مباشرة عند استلام الطرد من الموزع.",
  "Livraison soignée & confirmation rapide": "توصيل آمن وتأكيد سريع",
  "Notre service client basé au Maroc vous contacte par téléphone pour valider votre adresse avant l'envoi.": "يتصل بكِ فريق خدمة العملاء لتأكيد العنوان وتفاصيل التوصيل قبل شحن الطرد.",
  "Commander maintenant": "اطلبي الآن",

  // Order Form
  "COMMANDE EXPRESS": "طلب سريع",
  "Recevez votre pack à domicile": "استلمي باقتكِ عند باب منزلكِ",
  "Remplissez ce formulaire pour commander votre pack. Notre équipe vous appellera pour confirmer l'expédition.": "املئي النموذج لتأكيد طلبكِ. سيتصل بكِ فريقنا لتأكيد الشحن وتحديد موعد التسليم.",
  "Pack Vinillia Beauty & Skincare": "باقة Vinillia للجمال والعناية",
  "8 produits (dont 2 offerts)": "8 منتجات (منها منتجان هدية)",
  "Paiement à la livraison (COD)": "الدفع عند الاستلام (COD)",
  "Nom complet *": "الاسم الكامل *",
  "Numéro de téléphone *": "رقم الهاتف *",
  "Adresse de livraison complète *": "عنوان التوصيل الكامل *",
  "Ex. Salma El Amrani": "مثال: سلمى العمراني",
  "Ex. 06 12 34 56 78 ou 07 00 00 00 00": "مثال: 06 12 34 56 78 أو 07 00 00 00 00",
  "Ville, quartier, numéro de rue / appartement...": "المدينة، الحي، رقم الشارع / العمارة...",
  "Vos informations personnelles sont strictement confidentielles et utilisées uniquement pour la livraison.": "معلوماتك الشخصية سرية تماماً وتُستخدم فقط لتوصيل وتأكيد طلبك.",
  "CONFIRMER MA COMMANDE": "تأكيد طلبي الآن",
  "CONFIRMATION EN COURS…": "جارٍ تأكيد الطلب…",
  "Veuillez saisir votre nom complet (au moins 3 caractères).": "يرجى إدخال اسمكِ الكامل (3 أحرف على الأقل).",
  "Veuillez saisir un numéro de téléphone marocain valide (ex. 06 12 34 56 78).": "يرجى إدخال رقم هاتف مغربي صحيح (مثال: 06 12 34 56 78).",
  "Veuillez saisir votre adresse complète de livraison (au moins 8 caractères).": "يرجى إدخال عنوان التوصيل المفصل (8 أحرف على الأقل).",
  "Veuillez corriger les champs signalés avant de continuer.": "يرجى تصحيح الحقول المحددة قبل المتابعة.",
  "Félicitations ! Votre commande a été enregistrée avec succès.": "تهانينا! تم تسجيل طلبكِ بنجاح.",
  "Notre service client vous contactera sous peu par téléphone pour confirmer la livraison.": "سيتصل بكِ فريق خدمة العملاء قريباً عبر الهاتف لتأكيد موعد التوصيل.",
  "Numéro de commande :": "رقم الطلب:",

  // Footer & Legal
  "Une sélection skincare premium pensée pour sublimer votre éclat naturel au quotidien.": "تشكيلة عناية راقية صُممت لإبراز إشراقتكِ وجمالكِ الطبيعي كل يوم.",
  "Navigation": "روابط سريعة",
  "Garanties": "ضماناتنا",
  "Informations légales": "معلومات",
  "Politique de confidentialité": "سياسة الخصوصية",
  "Conditions de livraison": "شروط التوصيل",
  "Service client Maroc": "خدمة العملاء بالمغرب",
  "Tous droits réservés.": "جميع الحقوق محفوظة.",
  "Le pack Vinillia": "باقة Vinillia",


};

export default function LandingPage() {
  const [language, setLanguage] = useState<"fr" | "ar">("fr");
  const isArabic = language === "ar";
  // Keep Western/Latin digits (0-9) for the Moroccan Arabic storefront.
  const tr = (key: string): string => (isArabic ? translations[key] ?? key : key);
  const formattedPrice = isArabic ? String(PRICE_MAD) : PRICE_MAD.toLocaleString("fr-FR");

  const [menuOpen, setMenuOpen] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; address?: string }>({});
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const [orderRef, setOrderRef] = useState<string | null>(null);
  const [year, setYear] = useState<number | null>(null);

  // Initialize language from localStorage and update document attributes
  useEffect(() => {
    const savedLang = localStorage.getItem("vinillia_lang");
    if (savedLang === "ar" || savedLang === "fr") {
      setLanguage(savedLang);
    }
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    try {
      localStorage.setItem("vinillia_lang", language);
    } catch {
      // ignore storage access issues
    }
  }, [language, isArabic]);

  // Automatically move the six-step routine carousel on mobile, one product at a time.
  useEffect(() => {
    const track = document.querySelector<HTMLElement>(".routine-stages-six");
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mobileQuery = window.matchMedia("(max-width: 768px)");
    let timer: ReturnType<typeof setInterval> | undefined;
    let resumeTimer: ReturnType<typeof setTimeout> | undefined;
    let paused = false;
    let index = 0;

    const cards = () => Array.from(track.querySelectorAll<HTMLElement>(".routine-stage-card"));
    const syncActiveStep = (items: HTMLElement[], activeIndex: number) => {
      items.forEach((card, i) => {
        card.classList.toggle("is-routine-active", i === activeIndex);
        card.querySelector(".stage-number")?.classList.toggle("is-routine-active", i === activeIndex);
      });
    };
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = undefined;
    };
    const moveTo = (nextIndex: number, smooth = true) => {
      const items = cards();
      if (!items.length) return;
      index = (nextIndex + items.length) % items.length;
      syncActiveStep(items, index);
      const trackLeft = track.getBoundingClientRect().left;
      const cardLeft = items[index].getBoundingClientRect().left;
      const targetLeft = Math.max(0, track.scrollLeft + cardLeft - trackLeft);
      track.scrollTo({ left: targetLeft, behavior: smooth ? "smooth" : "auto" });
    };
    const start = () => {
      stop();
      if (!mobileQuery.matches || paused) return;
      const items = cards();
      if (items.length) syncActiveStep(items, index);
      timer = setInterval(() => {
        if (cards().length < 2) return;
        moveTo(index + 1);
      }, 2800);
    };
    const pauseBriefly = () => {
      paused = true;
      stop();
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
        const items = cards();
        if (items.length) {
          const trackLeft = track.getBoundingClientRect().left;
          index = items.reduce((best, card, i) =>
            Math.abs(card.getBoundingClientRect().left - trackLeft) <
            Math.abs(items[best].getBoundingClientRect().left - trackLeft) ? i : best, 0);
          syncActiveStep(items, index);
        }
        start();
      }, 5000);
    };
    const onMediaChange = () => {
      if (!mobileQuery.matches) {
        stop();
        track.scrollTo({ left: 0, behavior: "auto" });
      } else {
        start();
      }
    };

    track.addEventListener("touchstart", pauseBriefly, { passive: true });
    track.addEventListener("pointerdown", pauseBriefly);
    track.addEventListener("wheel", pauseBriefly, { passive: true });
    mobileQuery.addEventListener("change", onMediaChange);
    start();

    return () => {
      stop();
      if (resumeTimer) clearTimeout(resumeTimer);
      track.removeEventListener("touchstart", pauseBriefly);
      track.removeEventListener("pointerdown", pauseBriefly);
      track.removeEventListener("wheel", pauseBriefly);
      mobileQuery.removeEventListener("change", onMediaChange);
    };
  }, []);

  // Hide floating mobile CTA when the order section is visible
  useEffect(() => {
    const orderSection = document.getElementById("commande");
    const mobileCta = document.getElementById("mobileCta");
    if (!orderSection || !mobileCta || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            mobileCta.classList.add("hidden-cta");
          } else {
            mobileCta.classList.remove("hidden-cta");
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(orderSection);
    return () => observer.disconnect();
  }, []);

  function handleLanguageChange(nextLang: "fr" | "ar") {
    setLanguage(nextLang);
    setMenuOpen(false);
  }

  function validateMoroccanPhone(val: string): boolean {
    const normalized = val.replace(/[\s().-]/g, "");
    return /^(\+212|00212|0)([5-7]\d{8})$/.test(normalized);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage("");
    setOrderRef(null);

    const nextErrors: typeof errors = {};
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedAddress = address.trim();

    if (trimmedName.length < 3) {
      nextErrors.name = tr("Veuillez saisir votre nom complet (au moins 3 caractères).");
    }

    if (!validateMoroccanPhone(trimmedPhone)) {
      nextErrors.phone = tr("Veuillez saisir un numéro de téléphone marocain valide (ex. 06 12 34 56 78).");
    }

    if (trimmedAddress.length < 8) {
      nextErrors.address = tr("Veuillez saisir votre adresse complète de livraison (au moins 8 caractères).");
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setFormState("error");
      setFormMessage(tr("Veuillez corriger les champs signalés avant de continuer."));
      return;
    }

    setFormState("loading");

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: trimmedName,
          phone: trimmedPhone,
          address: trimmedAddress,
          productBundleId: "vinillia-beauty-pack",
          quantity: 1,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || "Une erreur est survenue lors de l'envoi de votre commande.");
      }

      setFormState("success");
      setOrderRef(data?.orderId || "VIN-CONFIRMED");
      setFormMessage(
        tr("Félicitations ! Votre commande a été enregistrée avec succès.") +
          " " +
          tr("Notre service client vous contactera sous peu par téléphone pour confirmer la livraison.")
      );

      setName("");
      setPhone("");
      setAddress("");
      setErrors({});
    } catch (err: unknown) {
      setFormState("error");
      const errorObj = err as { message?: string };
      setFormMessage(
        errorObj?.message || "Le système de commande n'a pas pu traiter votre demande. Veuillez réessayer plus tard."
      );
    }
  }

  return (
    <div className={`page-shell ${isArabic ? "arabic" : ""}`} lang={language} dir={isArabic ? "rtl" : "ltr"}>
      {/* Top promotional bar */}
      <div className="announcement-bar" role="region" aria-label="Annonce promotionnelle">
        <div className="container announcement-inner">
          <Sparkles size={14} aria-hidden="true" />
          <span>{tr("VOTRE RITUEL BEAUTÉ, EN UN SEUL PACK · 2 PRODUITS OFFERTS")}</span>
          <Sparkles size={14} aria-hidden="true" />
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className="site-header">
        <div className="container nav">
          <a href="#accueil" className="brand" aria-label="Vinillia Beauty & Skincare — Accueil" onClick={() => setMenuOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo" src="/vinillia-logo.svg" alt="Vinillia Beauty & Skincare" width={154} height={42} />
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks" aria-label="Navigation principale">
            <a href="#accueil" onClick={() => setMenuOpen(false)}>{tr("Accueil")}</a>
            <a href="#pack" onClick={() => setMenuOpen(false)}>{tr("Le pack")}</a>
            <a href="#routine" onClick={() => setMenuOpen(false)}>{tr("La routine")}</a>
            {/* <a href="#resultats" onClick={() => setMenuOpen(false)}>{tr("Avant / Après")}</a> */}
            <a className="mobile-nav-order" href="#commande" onClick={() => setMenuOpen(false)}>
              {tr("Commander le pack")}
            </a>
          </nav>

          <div className="header-actions">
            <div className="language-switch" role="group" aria-label="Choisir la langue">
              <button
                type="button"
                className={!isArabic ? "active" : ""}
                aria-pressed={!isArabic}
                onClick={() => handleLanguageChange("fr")}
                title="Passer en Français"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={franceFlag.src} alt="" aria-hidden="true" width={20} height={14} />
                <span>FR</span>
              </button>
              <span className="lang-divider" aria-hidden="true">|</span>
              <button
                type="button"
                className={isArabic ? "active" : ""}
                aria-pressed={isArabic}
                onClick={() => handleLanguageChange("ar")}
                title="التبديل إلى العربية"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={arabicFlag.src} alt="" aria-hidden="true" width={20} height={14} />
                <span>AR</span>
              </button>
            </div>

            <a href="#commande" className="btn btn-gold nav-cta">
              <span>{isArabic ? "اطلبي الآن" : "Commander"}</span>
              {isArabic ? <ArrowLeft size={15} aria-hidden="true" /> : <ArrowRight size={15} aria-hidden="true" />}
            </a>

            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? tr("Fermer le menu") : tr("Ouvrir le menu")}
              aria-expanded={menuOpen}
              aria-controls="navLinks"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* FULL-WIDTH HERO: keep editable copy and complete image in a unified composition */}
        <section
          className={`hero-section ${isArabic ? "hero-ar" : "hero-fr"}`}
          id="accueil"
          aria-label={isArabic ? "عرض باقة فينيليا للعناية بالبشرة" : "Offre pack beauté Vinillia"}
        >
          <div className="hero-container">
            <div className="hero-copy-col">
              <span className="hero-eyebrow">
                <Gift size={16} aria-hidden="true" />
                <span>{tr("OFFRE PACK VINILLIA")}</span>
              </span>

              <h1 className="hero-title">
                {isArabic ? (
                  <>8 منتجات أساسية،<br /><em>روتين واحد لجمالك</em></>
                ) : (
                  <>Huit essentiels.<br /><em>Un seul rituel.</em></>
                )}
              </h1>

              <p className="hero-description">
                {tr("Retrouvez 8 essentiels skincare dans un seul pack, avec 2 produits offerts.")}
              </p>

              <div className="hero-badges">
                <div className="hero-badge">
                  <Heart size={16} aria-hidden="true" />
                  <span>{tr("Sélection beauté")}</span>
                </div>
                <div className="hero-badge hero-badge-gift">
                  <Sparkles size={16} aria-hidden="true" />
                  <span>{tr("2 produits offerts")}</span>
                </div>
                <div className="hero-badge">
                  <Truck size={16} aria-hidden="true" />
                  <span>{tr("Commande facile")}</span>
                </div>
              </div>

              <div className="hero-action-row">
                <div className="hero-price-tag">
                  <span className="hero-price-value">{isArabic ? "1400 درهم" : "1 400 DH"}</span>
                  {/* <span className="hero-price-currency">{isArabic ? "درهم" : "DH"}</span> */}
                </div>
                <a href="#commande" className="btn btn-gold hero-cta-btn">
                  <span>{isArabic ? "اطلبي الباقة الآن" : "Commander le pack"}</span>
                  {isArabic ? <ArrowLeft size={18} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}
                </a>
              </div>

              <div className="hero-trust-note">
                <ShieldCheck size={16} aria-hidden="true" />
                <span>{tr("Paiement à la livraison")} · {tr("Livraison soignée & confirmation rapide")}</span>
              </div>
            </div>

            <div className="hero-visual-col">
              <div className="hero-banner-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="hero-banner-img"
                  src={(isArabic ? bannerAr : bannerFr).src}
                  alt={tr("Bannière de la sélection Vinillia")}
                  width={(isArabic ? bannerAr : bannerFr).width}
                  height={(isArabic ? bannerAr : bannerFr).height}
                  fetchPriority="high"
                  loading="eager"
                />
                <div className="hero-banner-stamp">
                  <Sparkles size={14} aria-hidden="true" />
                  <span>{tr("8 PRODUITS · 2 OFFERTS")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* VALUE REASSURANCE STRIP */}
        <section className="reassurance-strip" aria-label="Garanties et avantages du pack">
          <div className="container reassurance-grid">
            <div className="reassurance-card">
              <div className="reassurance-icon"><ShieldCheck size={24} aria-hidden="true" /></div>
              <div className="reassurance-text">
                <strong>{tr("8 produits complets")}</strong>
                <small>{tr("6 soins AXIS-Y + 2 cadeaux Vaseline")}</small>
              </div>
            </div>

            <div className="reassurance-card">
              <div className="reassurance-icon"><Truck size={24} aria-hidden="true" /></div>
              <div className="reassurance-text">
                <strong>{tr("Paiement à la livraison")}</strong>
                <small>{tr("Paiement en espèces à la réception")}</small>
              </div>
            </div>

            <div className="reassurance-card">
              <div className="reassurance-icon"><Check size={24} aria-hidden="true" /></div>
              <div className="reassurance-text">
                <strong>{tr("Commande express")}</strong>
                <small>{tr("En quelques clics sans carte bancaire")}</small>
              </div>
            </div>

            <div className="reassurance-card">
              <div className="reassurance-icon"><Phone size={24} aria-hidden="true" /></div>
              <div className="reassurance-text">
                <strong>{tr("Confirmation par appel")}</strong>
                <small>{tr("Notre équipe vous appelle sous 24h")}</small>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT PACK SECTION (8 products: 6 AXIS-Y + 2 Vaseline gifts) */}
        <section className="section pack-section" id="pack">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">{tr("LA SÉLECTION VINILLIA")}</span>
              <h2 className="section-title">{tr("Le pack beauté qui vous ressemble")}</h2>
              <p className="section-subtitle">
                {tr("Une sélection harmonieuse de soins pour nettoyer, équilibrer, nourrir et protéger votre peau au quotidien.")}
              </p>
            </div>

            <div className="products-grid">
              {[
                {
                  id: "p1",
                  name: "Sunday Morning Refreshing Cleansing Foam",
                  brand: "AXIS-Y",
                  type: "Nettoyant visage",
                  image: product1,
                  desc: isArabic
                    ? "ينظف المسام والشوائب بلطف مع الحفاظ على توازن وترطيب البشرة بفضل الشاي الأخضر وخلاصة البتولا."
                    : "Nettoie en douceur les impuretés et l'excès de sébum grâce au bouleau et au thé vert sans tirailler.",
                  gift: false,
                },
                {
                  id: "p2",
                  name: "Dark Spot Correcting Glow Toner",
                  brand: "AXIS-Y",
                  type: "Tonique éclat",
                  image: product2,
                  desc: isArabic
                    ? "تونر مرطب ينعش البشرة ويساعد على توحيد لونها وتجهيزها لاستقبال باقي خطوات الروتين."
                    : "Tonique illuminateur qui prépare la peau, parfait le nettoyage et apporte une première couche d'éclat.",
                  gift: false,
                },
                {
                  id: "p3",
                  name: "New Skin Resolution Gel Mask",
                  brand: "AXIS-Y",
                  type: "Masque gel apaisant",
                  image: product3,
                  desc: isArabic
                    ? "قناع جل غني بالسنتيلا والشاي الأخضر لتهدئة البشرة المتعبة وتجديد حيويتها ونضارتها."
                    : "Masque gel rafraîchissant à la Centella Asiatica pour apaiser les irritations et revitaliser le teint.",
                  gift: false,
                },
                {
                  id: "p4",
                  name: "Artichoke Intensive Skin Barrier Ampoule",
                  brand: "AXIS-Y",
                  type: "Ampoule sérum barrière",
                  image: product4,
                  desc: isArabic
                    ? "أمبول مركّز بخلاصة الخرشوف لتقوية حاجز البشرة وترميمها بعمق لمنحها مرونة وصحة دائمة."
                    : "Sérum intensif à l'artichaut formulé pour restaurer la barrière protectrice cutanée et sceller l'hydratation.",
                  gift: false,
                },
                {
                  id: "p5",
                  name: "Dark Spot Correcting Glow Cream",
                  brand: "AXIS-Y",
                  type: "Crème hydratante éclat",
                  image: product5,
                  desc: isArabic
                    ? "كريم ناعم يساعد على تفتيح مظهر البقع الداكنة وتغذية البشرة لتبدو مشرقة وصافية."
                    : "Crème nourrissante à la texture soyeuse qui estompe l'apparence des taches et offre un fini lumineux.",
                  gift: false,
                },
                {
                  id: "p6",
                  name: "Complete No-Stress Physical Sunscreen",
                  brand: "AXIS-Y",
                  type: "Protection solaire minérale",
                  image: product6,
                  desc: isArabic
                    ? "واقي شمس معدني بعامل حماية +SPF 50 يحمي من الأشعة فوق البنفسجية دون ترك أي أثر أبيض."
                    : "Écran minéral haute tolérance SPF 50+ PA++++ offrant une protection quotidienne fiable sans film blanc.",
                  gift: false,
                },
                {
                  id: "p7",
                  name: "Vaseline Gluta-Hya Serum Burst Lotion",
                  brand: "Vaseline",
                  type: "Soin corps éclat",
                  image: product7,
                  desc: isArabic
                    ? "لوشن سيروم مبتكر بقطرات الهيالورون والـ Gluta-Glow لنعومة وإشراقة استثنائية لكامل الجسم."
                    : "Lotion sérum pour le corps ultra-légère à l'acide hyaluronique pour une peau douce, hydratée et radieuse.",
                  gift: true,
                },
                {
                  id: "p8",
                  name: "Vaseline Lip Therapy Rosy Lips",
                  brand: "Vaseline",
                  type: "Baume à lèvres teinté",
                  image: product8,
                  desc: isArabic
                    ? "بلسم شفاه مغذٍ يرطب الشفاه الجافة ويمنحها لوناً وردياً ناعماً مع لمسة لمعان طبيعية."
                    : "Soin culte pour les lèvres qui répare durablement les lèvres sèches et laisse un voile rose délicat.",
                  gift: true,
                },
              ].map((item) => (
                <a className="product-card-link" href="#commande" key={item.id} aria-label={`${item.name} — ${tr("Commander le pack")}`}>
                <article className={`product-card ${item.gift ? "product-card-gift" : ""}`}>
                  <div className="product-image-container">
                    {item.gift && <span className="gift-badge">{tr("OFFERT")}</span>}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image.src} alt={item.name} loading="lazy" />
                  </div>
                  <div className="product-content">
                    <span className="product-category">{tr(item.type)}</span>
                    <h3 className="product-title">{item.name}</h3>
                    <p className="product-description">{item.desc}</p>
                  </div>
                </article>
                </a>
              ))}
            </div>

            {/* Pack summary card with pricing and direct CTA */}
            <div className="pack-summary-bar">
              <div className="pack-summary-info">
                <span className="pack-summary-tag">{tr("8 produits dans votre pack")}</span>
                <p className="pack-summary-text">{tr("6 soins sélectionnés + 2 soins offerts inclus.")}</p>
                <small className="pack-summary-gift-note">
                  <Gift size={14} aria-hidden="true" />
                  <span>{tr("Les 2 produits Vaseline sont offerts")}</span>
                </small>
              </div>

              <div className="pack-summary-cta">
                <div className="pack-summary-price">
                  <strong>{formattedPrice}</strong>
                  <span>{isArabic ? "درهم" : "DH"}</span>
                </div>
                <a href="#commande" className="btn btn-gold">
                  <span>{tr("Commander mon pack")}</span>
                  {isArabic ? <ArrowLeft size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SKINCARE ROUTINE — THREE STAGES (As specifically mandated in prompt section 10) */}
        <section className="section routine-section" id="routine">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">{tr("LA ROUTINE VINILLIA")}</span>
              <h2 className="section-title">{tr("Votre rituel en 6 étapes")}</h2>
              <p className="section-subtitle">
                {tr("Une méthode simple et intuitive pour intégrer les soins de votre pack dans votre quotidien.")}
              </p>
            </div>

            <div className="routine-stages-grid routine-stages-six">
              <div className="routine-stage-card">
                <div className="stage-header"><span className="stage-number">01</span><span className="stage-eyebrow">{isArabic ? "الخطوة 1" : "Étape 1"}</span></div>
                <div className="stage-visual"><img src={product1.src} alt={isArabic ? "الخطوة 1: تنظيف الوجه" : "Étape 1 : Nettoyer le visage"} loading="lazy" /></div>
                <h3 className="stage-title">{isArabic ? "تنظيف الوجه" : "Nettoyer le visage"}</h3>
                <p className="stage-desc">{isArabic ? "نظفي بشرتكِ بلطف لإزالة الشوائب وتحضيرها لباقي الروتين." : "Nettoyez délicatement votre peau pour éliminer les impuretés et la préparer aux soins."}</p>
              </div>
              <div className="routine-stage-card">
                <div className="stage-header"><span className="stage-number">02</span><span className="stage-eyebrow">{isArabic ? "الخطوة 2" : "Étape 2"}</span></div>
                <div className="stage-visual"><img src={product2.src} alt={isArabic ? "الخطوة 2: التونر" : "Étape 2 : Tonifier"} loading="lazy" /></div>
                <h3 className="stage-title">{isArabic ? "توازن وإشراقة" : "Tonifier & illuminer"}</h3>
                <p className="stage-desc">{isArabic ? "طبقي التونر للمساعدة على إنعاش البشرة وتحضيرها لامتصاص المنتجات التالية." : "Appliquez le tonique pour rafraîchir la peau et la préparer aux soins suivants."}</p>
              </div>
              <div className="routine-stage-card">
                <div className="stage-header"><span className="stage-number">03</span><span className="stage-eyebrow">{isArabic ? "الخطوة 3" : "Étape 3"}</span></div>
                <div className="stage-visual"><img src={product3.src} alt={isArabic ? "الخطوة 3: قناع الجل" : "Étape 3 : Masque gel" } loading="lazy" /></div>
                <h3 className="stage-title">{isArabic ? "تهدئة البشرة" : "Apaiser la peau"}</h3>
                <p className="stage-desc">{isArabic ? "استخدمي قناع الجل عند الحاجة لمنح بشرتكِ إحساساً بالراحة والانتعاش." : "Utilisez le masque gel lorsque nécessaire pour apporter confort et fraîcheur à la peau."}</p>
              </div>
              <div className="routine-stage-card">
                <div className="stage-header"><span className="stage-number">04</span><span className="stage-eyebrow">{isArabic ? "الخطوة 4" : "Étape 4"}</span></div>
                <div className="stage-visual"><img src={product4.src} alt={isArabic ? "الخطوة 4: السيروم" : "Étape 4 : Sérum" } loading="lazy" /></div>
                <h3 className="stage-title">{isArabic ? "تقوية الحاجز" : "Renforcer la barrière"}</h3>
                <p className="stage-desc">{isArabic ? "ضعي الأمبول للمساعدة على دعم حاجز البشرة والحفاظ على ترطيبها." : "Appliquez l’ampoule pour aider à soutenir la barrière cutanée et préserver l’hydratation."}</p>
              </div>
              <div className="routine-stage-card">
                <div className="stage-header"><span className="stage-number">05</span><span className="stage-eyebrow">{isArabic ? "الخطوة 5" : "Étape 5"}</span></div>
                <div className="stage-visual"><img src={product5.src} alt={isArabic ? "الخطوة 5: كريم الترطيب" : "Étape 5 : Crème hydratante" } loading="lazy" /></div>
                <h3 className="stage-title">{isArabic ? "ترطيب عميق" : "Hydrater en profondeur"}</h3>
                <p className="stage-desc">{isArabic ? "أنهي العناية بكريم الترطيب للمساعدة على إبقاء البشرة ناعمة ومريحة." : "Terminez avec la crème hydratante pour garder une peau souple et confortable."}</p>
              </div>
              <div className="routine-stage-card">
                <div className="stage-header"><span className="stage-number">06</span><span className="stage-eyebrow">{isArabic ? "الخطوة 6" : "Étape 6"}</span></div>
                <div className="stage-visual"><img src={product6.src} alt={isArabic ? "الخطوة 6: الحماية الشمسية" : "Étape 6 : Protection solaire" } loading="lazy" /></div>
                <h3 className="stage-title">{isArabic ? "حماية ولمسة نهائية" : "Protéger & sublimer"}</h3>
                <p className="stage-desc">{isArabic ? "في الصباح، استخدمي واقي الشمس، وأضيفي هديتي فازلين للعناية بالشفاه والجسم." : "Le matin, appliquez la protection solaire. Complétez votre rituel avec les deux cadeaux Vaseline pour les lèvres et le corps."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIAL OFFER PROMO SECTION */}
        <section className="section promo-offer-section" id="offre">
          <div className="container promo-grid">
            <div className="promo-visual-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={offerBanner.src} alt="Boutique beauté Vinillia" loading="lazy" />
              <div className="promo-badge">
                <Gift size={16} aria-hidden="true" />
                <span>{tr("OFFRE PACK VINILLIA")}</span>
              </div>
            </div>

            <div className="promo-content">
              <span className="promo-eyebrow">{tr("OFFRE SPÉCIALE")}</span>
              <h2 className="promo-title">{tr("Pourquoi choisir le pack Vinillia ?")}</h2>
              <p className="promo-description">
                {tr("Une solution complète et avantageuse pensée pour simplifier votre routine beauté tout en réalisant une économie substantielle.")}
              </p>

              <div className="promo-features-list">
                <div className="promo-feature-item">
                  <div className="feature-icon"><Check size={18} /></div>
                  <div>
                    <strong>{tr("Rituel complet en 1 pack")}</strong>
                    <p>{tr("Plus besoin de chercher des soins compatibles : les 8 formules agissent en parfaite synergie.")}</p>
                  </div>
                </div>

                <div className="promo-feature-item">
                  <div className="feature-icon"><Gift size={18} /></div>
                  <div>
                    <strong>{tr("2 soins iconiques offerts")}</strong>
                    <p>{tr("Recevez la lotion Gluta-Hya et le soin pour lèvres Rosy Lips de Vaseline sans frais supplémentaires.")}</p>
                  </div>
                </div>

                <div className="promo-feature-item">
                  <div className="feature-icon"><Truck size={18} /></div>
                  <div>
                    <strong>{tr("Paiement à la livraison au Maroc")}</strong>
                    <p>{tr("Vous ne payez rien en ligne : réglez votre commande directement au livreur à la réception de votre colis.")}</p>
                  </div>
                </div>

                <div className="promo-feature-item">
                  <div className="feature-icon"><Phone size={18} /></div>
                  <div>
                    <strong>{tr("Livraison soignée & confirmation rapide")}</strong>
                    <p>{tr("Notre service client basé au Maroc vous contacte par téléphone pour valider votre adresse avant l'envoi.")}</p>
                  </div>
                </div>
              </div>

              <div className="promo-footer-cta">
                <div className="promo-price-block">
                  <span className="promo-price-label">{isArabic ? "السعر الإجمالي للباقة" : "Prix du pack complet"}</span>
                  <strong className="promo-price-amount">
                    {formattedPrice} {isArabic ? "درهم" : "DH"}
                  </strong>
                </div>

                <a href="#commande" className="btn btn-gold">
                  <span>{tr("Commander maintenant")}</span>
                  {isArabic ? <ArrowLeft size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ORDER FORM SECTION — CASH ON DELIVERY (Prompt Section 11) */}
        <section className="section order-section" id="commande">
          <div className="container order-layout">
            {/* Left information column */}
            <div className="order-intro-col">
              <span className="section-eyebrow">{tr("COMMANDE EXPRESS")}</span>
              <h2 className="section-title">{tr("Recevez votre pack à domicile")}</h2>
              <p className="order-intro-text">
                {tr("Remplissez ce formulaire pour commander votre pack. Notre équipe vous appellera pour confirmer l'expédition.")}
              </p>

              <div className="order-reassurance-cards">
                <div className="reassurance-row">
                  <div className="row-icon"><Truck size={20} /></div>
                  <div>
                    <strong>{tr("Paiement à la livraison (COD)")}</strong>
                    <p>{isArabic ? "الدفع نقداً فقط عند الاستلام مع إمكانية فحص الطرد." : "Réglez en espèces à la livraison auprès du transporteur."}</p>
                  </div>
                </div>

                <div className="reassurance-row">
                  <div className="row-icon"><Phone size={20} /></div>
                  <div>
                    <strong>{tr("Confirmation par appel")}</strong>
                    <p>{isArabic ? "سيتصل بكِ فريقنا هاتفياً قبل الشحن لتأكيد العنوان وموعد التسليم." : "Un appel de courtoisie confirme vos détails avant toute expédition."}</p>
                  </div>
                </div>

                <div className="reassurance-row">
                  <div className="row-icon"><ShieldCheck size={20} /></div>
                  <div>
                    <strong>{tr("Pack 8 produits complets")}</strong>
                    <p>{isArabic ? "6 منتجات أساسية بالإضافة إلى منتجين مجاناً من فازلين بسعر 1400 درهم." : "6 soins visage indispensables + 2 soins Vaseline offerts au prix de 1 400 DH."}</p>
                  </div>
                </div>
              </div>

              <div className="order-pack-visual" aria-label={isArabic ? "صورة توضيحية لمحتويات باقة فينيليا" : "Aperçu visuel du pack Vinillia"}>
                <img
                  src={offerBanner.src}
                  alt={isArabic ? "محتويات باقة Vinillia للعناية بالبشرة" : "Aperçu des produits du pack beauté Vinillia"}
                  loading="eager"
                />
                <span className="order-pack-visual-caption">
                  {isArabic ? "شوفي شنو داخل الباقة قبل تأكيد الطلب" : "Visualisez le contenu de votre pack avant de commander"}
                </span>
              </div>
            </div>

            {/* Right form card column */}
            <div className="order-form-card">
              <div className="form-card-header">
                <h3>{tr("Pack Vinillia Beauty & Skincare")}</h3>
                <span className="form-pack-subtitle">{tr("8 produits (dont 2 offerts)")}</span>
              </div>

              {/* Order price summary */}
              <div className="order-summary-box">
                <div className="summary-left">
                  <strong>{tr("Pack Vinillia")}</strong>
                  <span>{isArabic ? "الكمية: 1 باقة كاملة (8 منتجات)" : "Quantité : 1 pack complet (8 soins)"}</span>
                </div>
                <div className="summary-right">
                  <strong>{formattedPrice} {isArabic ? "درهم" : "DH"}</strong>
                  <small>{tr("Paiement à la livraison")}</small>
                </div>
              </div>

              {/* Order submission form */}
              <form onSubmit={handleSubmit} noValidate>
                {/* Full name input */}
                <div className={`form-group ${errors.name ? "has-error" : ""}`}>
                  <label htmlFor="fullName">
                    <User size={15} aria-hidden="true" />
                    <span>{tr("Nom complet *")}</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder={tr("Ex. Salma El Amrani")}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                  />
                  {errors.name && <small className="error-text" id="name-error">{errors.name}</small>}
                </div>

                {/* Phone number input */}
                <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
                  <label htmlFor="phone">
                    <Phone size={15} aria-hidden="true" />
                    <span>{tr("Numéro de téléphone *")}</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder={tr("Ex. 06 12 34 56 78 ou 07 00 00 00 00")}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    required
                  />
                  {errors.phone && <small className="error-text" id="phone-error">{errors.phone}</small>}
                </div>

                {/* Delivery address textarea */}
                <div className={`form-group ${errors.address ? "has-error" : ""}`}>
                  <label htmlFor="address">
                    <MapPin size={15} aria-hidden="true" />
                    <span>{tr("Adresse de livraison complète *")}</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    placeholder={tr("Ville, quartier, numéro de rue / appartement...")}
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      if (errors.address) setErrors((prev) => ({ ...prev, address: undefined }));
                    }}
                    aria-invalid={Boolean(errors.address)}
                    aria-describedby={errors.address ? "address-error" : undefined}
                    rows={3}
                    required
                  />
                  {errors.address && <small className="error-text" id="address-error">{errors.address}</small>}
                </div>

                <p className="form-privacy-note">
                  <ShieldCheck size={14} aria-hidden="true" />
                  <span>{tr("Vos informations personnelles sont strictement confidentielles et utilisées uniquement pour la livraison.")}</span>
                </p>

                <button
                  type="submit"
                  className="btn btn-gold form-submit-btn"
                  disabled={formState === "loading"}
                >
                  {formState === "loading" ? (
                    <>
                      <span className="spinner" aria-hidden="true" />
                      <span>{tr("CONFIRMATION EN COURS…")}</span>
                    </>
                  ) : (
                    <>
                      <span>{tr("CONFIRMER MA COMMANDE")}</span>
                      {isArabic ? <ArrowLeft size={17} aria-hidden="true" /> : <ArrowRight size={17} aria-hidden="true" />}
                    </>
                  )}
                </button>

                {/* Honest Feedback Box */}
                {formMessage && (
                  <div
                    className={`form-alert ${formState === "success" ? "alert-success" : "alert-error"}`}
                    role="alert"
                    aria-live="polite"
                  >
                    {formState === "success" ? (
                      <div>
                        <div className="alert-head">
                          <Check size={18} aria-hidden="true" />
                          <strong>{tr("Félicitations ! Votre commande a été enregistrée avec succès.")}</strong>
                        </div>
                        <p>{tr("Notre service client vous contactera sous peu par téléphone pour confirmer la livraison.")}</p>
                        {orderRef && (
                          <div className="order-ref-badge">
                            <span>{tr("Numéro de commande :")}</span> <strong>{orderRef}</strong>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p>{formMessage}</p>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* MINIMAL FOOTER: logo + legal line + brand signature */}
      <footer className="site-footer minimal-footer">
        <div className="container minimal-footer-inner">
          <a href="#accueil" className="brand footer-logo" aria-label="Vinillia Beauty & Skincare">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/vinillia-logo.svg" alt="Vinillia Beauty & Skincare" width={160} height={44} />
          </a>
          <div className="minimal-footer-bottom">
            <p>© {year ?? 2026} Vinillia Beauty &amp; Skincare. Tous droits réservés.</p>
            <p className="footer-signature">Vinillia · Moroccan Skincare Experience</p>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA BAR */}
      <div className="mobile-sticky-cta" id="mobileCta" aria-hidden="true">
        <div className="mobile-cta-info">
          <span className="mobile-pack-title">{tr("Le pack Vinillia")}</span>
          <span className="mobile-pack-price">{isArabic ? "1400 درهم" : "1 400 DH"}</span>
        </div>
        <a href="#commande" className="btn btn-gold mobile-cta-btn">
          <span>{tr("Commander")}</span>
          {isArabic ? <ArrowLeft size={15} aria-hidden="true" /> : <ArrowRight size={15} aria-hidden="true" />}
        </a>
      </div>
    </div>
  );
}
