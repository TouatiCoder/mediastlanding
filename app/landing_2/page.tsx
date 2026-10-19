"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import Image, { getImageProps } from "next/image";

import franceFlag from "./assets/france.png";
import arabicFlag from "./assets/flag.png";
import bannerFr from "./assets/banner fr.jpg";
import bannerAr from "./assets/banner ar.jpg";
import banner1Mobile from "./assets/banner1_mobile.png";
import banner2Mobile from "./assets/banner2_mobile.png";
import product1 from "./assets/imgprodu/1.jpg";
import product2 from "./assets/imgprodu/2.jpg";
import product3 from "./assets/imgprodu/3.jpg";
import product4 from "./assets/imgprodu/4.jpg";
import product5 from "./assets/imgprodu/5.jpg";
import product6 from "./assets/imgprodu/6.jpg";
import product7 from "./assets/imgprodu/7.jpg";
import product8 from "./assets/imgprodu/8.jpg";
import offerBanner from "./assets/imgprodu/image.png";

type IconProps = { size?: number; className?: string; "aria-hidden"?: boolean | "true" | "false" };
type IconName = "ArrowRight" | "ArrowLeft" | "Check" | "Gift" | "Heart" | "Menu" | "Sparkles" | "X" | "ShieldCheck" | "Truck" | "Phone" | "MapPin" | "User";

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
      {name === "Phone" && <path {...common} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />}
      {name === "MapPin" && <><path {...common} d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle {...common} cx="12" cy="10" r="3" /></>}
      {name === "User" && <><path {...common} d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle {...common} cx="12" cy="7" r="4" /></>}
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
const Phone = (props: IconProps) => <IconGlyph name="Phone" {...props} />;
const MapPin = (props: IconProps) => <IconGlyph name="MapPin" {...props} />;
const User = (props: IconProps) => <IconGlyph name="User" {...props} />;

const PRICE_MAD = 1400;

const translations: Record<string, string> = {
  "VOTRE RITUEL BEAUTÉ, EN UN SEUL PACK · 2 PRODUITS OFFERTS": "روتين جمالك في باقة واحدة · منتجان هدية",
  "Accueil": "الرئيسية",
  "Le pack": "الباقة",
  "La routine": "الروتين",
  "Commander le pack": "اطلبي الباقة",
  "Inclus dans le pack VINILLIA": "ضمن باقة VINILLIA",
  "Choisir un produit": "اختاري منتجاً",
  "Commander maintenant": "اطلبي الآن",
  "Contacter sur WhatsApp": "تواصلي معنا عبر واتساب",
  "OFFRE PACK VINILLIA": "عرض باقة VINILLIA",
  "Huit essentiels. Un seul rituel.": "8 منتجات أساسية، روتين واحد لجمالك",
  "Retrouvez 8 essentiels skincare dans un seul pack, avec 2 produits offerts.": "اكتشفي باقة العناية بالبشرة التي تضم 8 منتجات، منها منتجان هدية.",
  "1 400 DH": "1400 درهم",
  "8 produits complets": "8 منتجات متكاملة",
  "6 soins AXIS-Y + 2 cadeaux Vaseline": "6 مستحضرات AXIS-Y + هديتان من فازلين",
  "Paiement à la livraison": "الدفع عند الاستلام",
  "Paiement en espèces à la réception": "أداء نقداً عند استلام الطرد",
  "Commande express": "طلب سريع وسهل",
  "En quelques clics sans carte bancaire": "في ثوانٍ وبدون بطاقة بنكية",
  "Sans carte bancaire": "بدون بطاقة بنكية",
  "Confirmation par appel": "تأكيد عبر الاتصال",
  "Notre équipe vous appelle": "فريقنا سيتصل بك",
  "LA SÉLECTION VINILLIA": "تشكيلة VINILLIA",
  "Le pack beauté qui vous ressemble": "باقة الجمال المتكاملة لروتينك",
  "Une sélection harmonieuse de soins pour nettoyer, équilibrer, nourrir et protéger votre peau au quotidien.": "تشكيلة متناسقة لتنظيف، توازن، ترطيب وحماية بشرتكِ يومياً.",
  "OFFERT": "هدية",
  "Commander mon pack": "أطلب باقتي الآن",
  "LA ROUTINE VINILLIA": "روتين VINILLIA",
  "Votre rituel en 6 étapes": "روتينكِ في 6 خطوات بسيطة",
  "Découvrez les 6 étapes de votre nouvelle routine AXIS-Y pour une peau éclatante et en pleine santé.": "اكتشفي الخطوات الست لروتين AXIS-Y الجديد لبشرة نضرة وصحية.",
  "Nettoyer en douceur": "تنظيف لطيف",
  "Équilibrer et illuminer": "توازن وإشراق",
  "Apaiser et réparer": "تهدئة وإصلاح",
  "Nourrir intensément": "تغذية عميقة",
  "Hydrater et unifier": "ترطيب وتوحيد",
  "Protéger des UV": "حماية من الأشعة",
  "ÉTAPE": "الخطوة",
  "OFFRE SPÉCIALE": "عرض استثنائي",
  "Pourquoi choisir le pack Vinillia ?": "لماذا تختارين باقة Vinillia؟",
  "COMMANDE EXPRESS": "طلب سريع",
  "Recevez votre pack à domicile": "استلمي باقتكِ عند باب منزلكِ",
  "Remplissez ce formulaire pour commander votre pack. Notre équipe vous appellera pour confirmer l'expédition.": "املئي هذا النموذج لطلب باقتك. سيتصل بك فريقنا لتأكيد الإرسال.",
  "Vos coordonnées": "بياناتك",
  "Nom complet *": "الاسم الكامل *",
  "Numéro de téléphone *": "رقم الهاتف *",
  "Adresse de livraison complète *": "عنوان التوصيل الكامل *",
  "CONFIRMER MA COMMANDE": "تأكيد طلبي الآن",
  "CONFIRMATION EN COURS…": "جاري التأكيد…",
  "SÉLECTION": "تشكيلة",
  "Pack Vinillia Beauty & Skincare": "باقة Vinillia للجمال والعناية",
  "Veuillez saisir votre nom complet (au moins 3 caractères).": "يرجى إدخال اسمك الكامل (3 أحرف على الأقل).",
  "Veuillez saisir un numéro de téléphone marocain valide (ex. 06 12 34 56 78).": "يرجى إدخال رقم هاتف مغربي صحيح (مثال: 06 12 34 56 78).",
  "Veuillez saisir votre adresse complète de livraison (au moins 8 caractères).": "يرجى إدخال عنوان التوصيل الكامل (8 أحرف على الأقل).",
  "Veuillez corriger les champs signalés avant de continuer.": "يرجى تصحيح الحقول المحددة قبل المتابعة.",
  "Félicitations ! Votre commande a été enregistrée avec succès.": "تهانينا! تم تسجيل طلبك بنجاح.",
  "Produits": "منتجات",
};

export default function LandingPage() {
  const [language, setLanguage] = useState<"fr" | "ar">("fr");
  const isArabic = language === "ar";
  const tr = (key: string): string => (isArabic ? translations[key] ?? key : key);
  const formattedPrice = isArabic ? String(PRICE_MAD) : PRICE_MAD.toLocaleString("fr-FR");
  const whatsappMessage = encodeURIComponent(isArabic ? "السلام عليكم، أود معرفة المزيد عن باقة VINILLIA." : "Bonjour, je souhaite en savoir plus sur le pack VINILLIA.");
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;
  const mobileHeroImage = isArabic ? banner2Mobile : banner1Mobile;
  const mobileHeroSource = getImageProps({
    src: mobileHeroImage,
    alt: "",
    width: mobileHeroImage.width,
    height: mobileHeroImage.height,
    sizes: "100vw",
    quality: 75,
  }).props;

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState("p1");
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLElement>(null);
  const orderFormRef = useRef<HTMLDivElement>(null);
  const [orderFormVisible, setOrderFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; address?: string }>({});
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const [orderRef, setOrderRef] = useState<string | null>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("vinillia_lang");
    if (savedLang === "ar" || savedLang === "fr") setLanguage(savedLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    try { localStorage.setItem("vinillia_lang", language); } catch {}
  }, [language, isArabic]);

  useEffect(() => {
    const form = orderFormRef.current;
    if (!form || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      setOrderFormVisible(entry.isIntersecting);
    }, { threshold: 0.08 });
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuCloseRef.current?.focus();

    function handleMenuKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !menuPanelRef.current) return;

      const focusable = Array.from(
        menuPanelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleMenuKeyDown);
    return () => {
      document.removeEventListener("keydown", handleMenuKeyDown);
      document.body.style.overflow = previousOverflow;
      menuTriggerRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  function handleLanguageChange(nextLang: "fr" | "ar") {
    setLanguage(nextLang);
    setMenuOpen(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage("");
    setOrderRef(null);
    const nextErrors: typeof errors = {};
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedAddress = address.trim();

    if (trimmedName.length < 3) nextErrors.name = tr("Veuillez saisir votre nom complet (au moins 3 caractères).");
    if (!/^(\+212|00212|0)([5-7]\d{8})$/.test(trimmedPhone.replace(/[\s().-]/g, ""))) {
      nextErrors.phone = tr("Veuillez saisir un numéro de téléphone marocain valide (ex. 06 12 34 56 78).");
    }
    if (trimmedAddress.length < 8) nextErrors.address = tr("Veuillez saisir votre adresse complète de livraison (au moins 8 caractères).");

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
        body: JSON.stringify({ fullName: trimmedName, phone: trimmedPhone, address: trimmedAddress, productBundleId: "vinillia-beauty-pack", quantity: 1 }),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok) throw new Error(data?.error || "Erreur serveur.");

      setFormState("success");
      setOrderRef(data?.orderId || "VIN-CONFIRMED");
      setFormMessage(tr("Félicitations ! Votre commande a été enregistrée avec succès."));
      setName(""); setPhone(""); setAddress(""); setErrors({});
    } catch (err: any) {
      setFormState("error");
      setFormMessage(err?.message || "Le système n'a pas pu traiter votre demande.");
    }
  }

  const products = [
    { id: "p1", name: "Sunday Morning Refreshing Cleansing Foam", brand: "AXIS-Y", type: "Nettoyant visage", image: product1, gift: false },
    { id: "p2", name: "Dark Spot Correcting Glow Toner", brand: "AXIS-Y", type: "Tonique éclat", image: product2, gift: false },
    { id: "p3", name: "New Skin Resolution Gel Mask", brand: "AXIS-Y", type: "Masque gel apaisant", image: product3, gift: false },
    { id: "p4", name: "Artichoke Intensive Skin Barrier Ampoule", brand: "AXIS-Y", type: "Ampoule sérum", image: product4, gift: false },
    { id: "p5", name: "Dark Spot Correcting Glow Cream", brand: "AXIS-Y", type: "Crème hydratante", image: product5, gift: false },
    { id: "p6", name: "Complete No-Stress Physical Sunscreen", brand: "AXIS-Y", type: "Protection solaire", image: product6, gift: false },
    { id: "p7", name: "Vaseline Gluta-Hya Serum Burst Lotion", brand: "Vaseline", type: "Soin corps", image: product7, gift: true },
    { id: "p8", name: "Vaseline Lip Therapy Rosy Lips", brand: "Vaseline", type: "Baume lèvres", image: product8, gift: true },
  ];
  const selectedProduct = products.find((item) => item.id === selectedProductId) ?? products[0];

  const routineSteps = [
    { ...products[0], title: "Nettoyer en douceur", step: "01" },
    { ...products[1], title: "Équilibrer et illuminer", step: "02" },
    { ...products[2], title: "Apaiser et réparer", step: "03" },
    { ...products[3], title: "Nourrir intensément", step: "04" },
    { ...products[4], title: "Hydrater et unifier", step: "05" },
    { ...products[5], title: "Protéger des UV", step: "06" },
  ];
  return (
    <div className={`min-h-screen bg-[#FFF9F6] text-[#292326] ${isArabic ? "arabic" : ""}`} lang={language} dir={isArabic ? "rtl" : "ltr"}>

      {/* Announcement Bar — z-40 حتى لا يتعارض مع الهيدر */}
      <div className="announcement-bar bg-[#702B43] text-white py-2.5 text-xs font-bold tracking-wider text-center flex justify-center items-center gap-2 relative z-40">
        <Sparkles size={14} /> <span>{tr("VOTRE RITUEL BEAUTÉ, EN UN SEUL PACK · 2 PRODUITS OFFERTS")}</span> <Sparkles size={14} />
      </div>

      {/* Header — z-50 أعلى من الـ announcement */}
      <header className="sticky top-0 z-50 glass-panel border-b border-[#ead9d9] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#accueil" className="flex-shrink-0">
            <img src="/landing_2/vinillia-logo.svg" alt="Vinillia Beauty" className="h-8 w-auto" />
          </a>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-[#81777a]">
            <a href="#accueil" className="hover:text-[#702b43] transition-colors">{tr("Accueil")}</a>
            <a href="#routine" className="hover:text-[#702b43] transition-colors">{tr("La routine")}</a>
            <a href="#pack" className="hover:text-[#702b43] transition-colors">{tr("Le pack")}</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex bg-white/50 rounded-full p-1 border border-[#ead9d9]">
              <button onClick={() => handleLanguageChange("fr")} className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 ${!isArabic ? 'bg-white shadow-sm text-[#702b43]' : 'text-[#81777a]'}`}>
                <img src={franceFlag.src} alt="" className="w-4 h-3 rounded-[2px]" /> FR
              </button>
              <button onClick={() => handleLanguageChange("ar")} className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 ${isArabic ? 'bg-white shadow-sm text-[#702b43]' : 'text-[#81777a]'}`}>
                <img src={arabicFlag.src} alt="" className="w-4 h-3 rounded-[2px]" /> AR
              </button>
            </div>
            <a href="#commande" className="hidden md:flex btn-premium px-6 py-2.5 rounded-full text-sm font-bold items-center gap-2">
              {tr("Commander le pack")} {isArabic ? <ArrowLeft size={16}/> : <ArrowRight size={16}/>}
            </a>
            <button
              ref={menuTriggerRef}
              type="button"
              className="mobile-menu-toggle md:hidden"
              aria-label={menuOpen ? (isArabic ? "إغلاق القائمة" : "Fermer le menu") : (isArabic ? "فتح القائمة" : "Ouvrir le menu")}
              aria-expanded={menuOpen}
              aria-controls={menuOpen ? "mobile-menu" : undefined}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        {menuOpen && typeof document !== "undefined" && createPortal(
          <div className="mobile-menu-layer">
            <button
              className="mobile-menu-backdrop"
              type="button"
              aria-label={isArabic ? "إغلاق القائمة" : "Fermer le menu"}
              onClick={() => setMenuOpen(false)}
            />
            <aside
              ref={menuPanelRef}
              id="mobile-menu"
              className="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label={isArabic ? "القائمة الرئيسية" : "Menu principal"}
            >
              <div className="mobile-drawer-heading">
                <span>{isArabic ? "اكتشفي VINILLIA" : "Découvrir VINILLIA"}</span>
                <button
                  ref={menuCloseRef}
                  type="button"
                  className="mobile-menu-close"
                  aria-label={isArabic ? "إغلاق القائمة" : "Fermer le menu"}
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="mobile-drawer-links" aria-label={isArabic ? "التنقل الرئيسي" : "Navigation principale"}>
                <a href="#accueil" onClick={() => setMenuOpen(false)}>{tr("Accueil")}</a>
                <a href="#routine" onClick={() => setMenuOpen(false)}>{tr("La routine")}</a>
                <a href="#pack" onClick={() => setMenuOpen(false)}>{tr("Le pack")}</a>
              </nav>
              <div className="mobile-drawer-languages" aria-label={isArabic ? "اختيار اللغة" : "Choisir la langue"}>
                <button type="button" aria-pressed={!isArabic} onClick={() => handleLanguageChange("fr")}>
                  <img src={franceFlag.src} alt="" /> FR
                </button>
                <button type="button" aria-pressed={isArabic} onClick={() => handleLanguageChange("ar")}>
                  <img src={arabicFlag.src} alt="" /> AR
                </button>
              </div>
              <a href="#commande" className="mobile-drawer-order btn-premium" onClick={() => setMenuOpen(false)}>
                {tr("Commander le pack")} {isArabic ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </a>
            </aside>
          </div>,
          document.body,
        )}
      </header>

      <main>
        {/* ===== Hero Section ===== */}
        <section id="accueil" className="landing-hero relative w-full min-h-[90vh] md:min-h-[85vh] flex flex-col overflow-hidden">

          {/* Background Image Container */}
          <div
            className="landing-hero-art absolute inset-0 w-full h-full z-0"
            style={{ "--hero-mobile-ratio": `${mobileHeroImage.width} / ${mobileHeroImage.height}` } as React.CSSProperties}
          >
            <picture className="landing-hero-picture absolute inset-0 block">
              <source
                media="(max-width: 767px)"
                srcSet={mobileHeroSource.srcSet}
                sizes={mobileHeroSource.sizes}
              />
              <Image
                src={isArabic ? bannerAr : bannerFr}
                alt={isArabic ? "حملة VINILLIA لمنتجات العناية من AXIS-Y وفازلين" : "Campagne VINILLIA présentant les soins AXIS-Y et Vaseline"}
                className="landing-hero-image w-full h-full object-cover object-[15%_100%] md:object-[20%_center]"
                sizes="100vw"
                quality={75}
                loading="eager"
                fetchPriority="high"
                fill
              />
            </picture>
            <div className={`landing-hero-gradient absolute inset-0 bg-gradient-to-b from-[#fff9f6]/95 via-[#fff9f6]/50 to-transparent ${isArabic ? 'md:bg-gradient-to-l md:from-[#fff9f6] md:via-[#fff9f6]/70 md:to-transparent' : 'md:bg-gradient-to-r md:from-[#fff9f6] md:via-[#fff9f6]/70 md:to-transparent'}`}></div>
          </div>

          {/* Text Content over Image */}
          <div className={`landing-hero-copy relative z-10 w-full flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-start md:justify-center pt-[10vh] md:pt-0 pb-10 ${isArabic ? "items-start text-right" : "items-start text-start"}`}>
            <div className={`w-full md:w-3/5 lg:w-1/2 flex flex-col drop-shadow-md ${isArabic ? "items-start text-right" : "items-start text-left"}`}>

              <div className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-[#ead9d9] shadow-sm text-[#702b43] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
                <Gift size={14} /> {tr("OFFRE PACK VINILLIA")}
              </div>

              <h1 className={`w-full text-4xl sm:text-5xl lg:text-7xl text-[#702b43] font-serif-custom leading-[1.15] md:leading-[1.1] mb-3 md:mb-6 drop-shadow-sm ${isArabic ? 'font-extrabold text-right' : 'text-left'}`}>
                {isArabic ? <>8 منتجات أساسية،<br/><span className="text-[#c97f91]">روتين واحد لجمالك</span></> : <>Huit essentiels.<br/><em className="text-[#c97f91] not-italic">Un seul rituel.</em></>}
              </h1>

              <p className={`text-[#4a3f43] font-bold text-sm sm:text-lg lg:text-xl max-w-md mb-6 md:mb-8 leading-relaxed drop-shadow-sm bg-white/30 backdrop-blur-[2px] p-2 rounded-xl md:bg-transparent md:backdrop-blur-none md:p-0 self-start ${isArabic ? "text-right" : "text-left"}`}>
                {tr("Retrouvez 8 essentiels skincare dans un seul pack, avec 2 produits offerts.")}
              </p>

              <div className="hero-price-cta-row w-full flex flex-nowrap items-center justify-start gap-2 md:gap-6 mb-6">
                <div className="flex flex-col shrink-0 bg-white/40 backdrop-blur-[2px] px-3 py-1 rounded-xl md:bg-transparent md:backdrop-blur-none md:px-0 md:py-0">
                  <span className="text-3xl lg:text-5xl font-serif-custom font-bold text-[#702b43] drop-shadow-md whitespace-nowrap">{formattedPrice} {isArabic ? "درهم" : "DH"}</span>
                </div>
                <a href="#commande" className="btn-premium shrink-0 whitespace-nowrap px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold flex justify-center items-center gap-2 shadow-xl">
                  {isArabic ? "اطلبي الباقة الآن" : "Commander le pack"} {isArabic ? <ArrowLeft size={18}/> : <ArrowRight size={18}/>}
                </a>
              </div>

              <div className={`hidden sm:inline-flex glass-panel p-3 px-5 rounded-2xl shadow-xl items-center gap-3 mt-2 border-white/60 ${isArabic ? "self-start" : ""}`}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c97f91] to-[#702b43] flex items-center justify-center text-white shadow-inner">
                  <Sparkles size={16} />
                </div>
                <div className={isArabic ? "text-right" : "text-start"}>
                  <p className="text-[10px] font-bold text-[#81777a] uppercase">{tr("SÉLECTION")}</p>
                  <p className="text-sm font-extrabold text-[#702b43] whitespace-nowrap">8 {tr("Produits")} · 2 {tr("OFFERT")}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Value Reassurance */}
        <section className="trust-strip-section relative z-10" aria-label={isArabic ? "مزايا التسوق" : "Vos garanties"}>
          <div className="trust-strip max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="trust-strip-grid">
              {[
                { icon: ShieldCheck, title: "8 produits complets", desc: "6 soins AXIS-Y + 2 cadeaux Vaseline" },
                { icon: Truck, title: "Paiement à la livraison", desc: "Paiement en espèces à la réception" },
                { icon: Check, title: "Commande express", desc: "Sans carte bancaire" },
                { icon: Phone, title: "Confirmation par appel", desc: "Notre équipe vous appelle" }
              ].map((item, idx) => (
                <div key={idx} className={`trust-strip-card ${isArabic ? "text-right" : ""}`}>
                  <div className="trust-strip-icon">
                    <item.icon size={21} aria-hidden="true" />
                  </div>
                  <div className="trust-strip-copy">
                    <strong>{tr(item.title)}</strong>
                    <span>{tr(item.desc)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION: LA ROUTINE --- */}
        <section id="routine" className="py-20 lg:py-32 bg-[#fff9f6] overflow-hidden border-b border-[#ead9d9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#c97f91] text-xs font-bold uppercase tracking-widest block mb-3">{tr("LA ROUTINE VINILLIA")}</span>
              <h2 className="text-4xl md:text-5xl font-serif-custom text-[#702b43] font-bold mb-6">{tr("Votre rituel en 6 étapes")}</h2>
              <p className="text-[#81777a] text-lg">{tr("Découvrez les 6 étapes de votre nouvelle routine AXIS-Y pour une peau éclatante et en pleine santé.")}</p>
            </div>

            <div className="routine-grid">
              {routineSteps.map((step, idx) => (
                <div
                  key={step.id}
                  className="routine-step-card group relative bg-white rounded-[32px] p-6 lg:p-8 border border-[#ead9d9] shadow-sm hover:shadow-2xl hover:border-[#c97f91]/40 transition-all duration-500 hover:-translate-y-2 cursor-default overflow-hidden flex flex-col justify-between h-full"
                >
                  <div className={`absolute -top-6 ${isArabic ? '-right-6' : '-left-6'} text-[140px] font-black text-[#fff4f5] opacity-80 z-0 select-none group-hover:scale-110 group-hover:text-[#fde2e6] transition-transform duration-700`}>
                    {step.step}
                  </div>

                  <div className={`routine-step-copy relative z-10 ${isArabic ? "text-right" : "text-start"}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="routine-step-number w-8 h-8 rounded-full bg-[#702b43] text-white flex items-center justify-center text-sm font-bold shadow-md">
                        {idx + 1}
                      </span>
                      <span className="text-[#c97f91] text-xs font-bold uppercase tracking-widest">{tr("ÉTAPE")} {idx + 1}</span>
                    </div>

                    <h3 className="text-[#292326] font-bold text-xl md:text-2xl mb-2 leading-tight group-hover:text-[#702b43] transition-colors">{tr(step.title)}</h3>
                    <p className="text-[#81777a] text-sm font-medium mb-6 line-clamp-2">{step.name}</p>
                  </div>

                  <div className="relative z-10 w-full aspect-square bg-[#fff9f6] rounded-2xl p-4 flex items-center justify-center shadow-inner mt-auto border border-[#f5efef]">
                    <Image
                      src={step.image}
                      alt={step.name}
                      className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 group-hover:drop-shadow-xl transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Pack Grid */}
        <section id="pack" className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#c97f91] text-xs font-bold uppercase tracking-widest block mb-3">{tr("LA SÉLECTION VINILLIA")}</span>
              <h2 className="text-4xl md:text-5xl font-serif-custom text-[#702b43] font-bold mb-4">{tr("Le pack beauté qui vous ressemble")}</h2>
            </div>

            <div className={`product-showcase ${isArabic ? "product-showcase-rtl" : ""}`}>
              <div className={`product-showcase-main${selectedProduct.gift ? " product-gallery-gift" : ""}`}>
                <div className={`product-showcase-visual${selectedProduct.gift ? " product-gallery-gift-image" : ""}`}>
                  {selectedProduct.gift && <span className="product-gift-badge product-showcase-badge">{tr("OFFERT")}</span>}
                  <Image
                    key={selectedProduct.id}
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={selectedProduct.image.width}
                    height={selectedProduct.image.height}
                    sizes="(max-width: 767px) 100vw, 55vw"
                    priority
                    className="product-showcase-image"
                  />
                </div>
                <div className="product-showcase-details">
                  <span className="product-showcase-brand">{selectedProduct.brand} · {tr(selectedProduct.type)}</span>
                  <h3>{selectedProduct.name}</h3>
                  <p>{tr("Inclus dans le pack VINILLIA")}</p>
                  <a href="#commande" className="btn-premium product-showcase-order">
                    {tr("Commander le pack")} {isArabic ? <ArrowLeft size={17} /> : <ArrowRight size={17} />}
                  </a>
                </div>
              </div>

              <div className="product-showcase-gallery">
                <p className="product-gallery-label">{tr("Choisir un produit")}</p>
                <div className="product-thumb-grid" role="group" aria-label={tr("Choisir un produit")}>
                  {products.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`product-thumb${selectedProduct.id === item.id ? " is-selected" : ""}${item.gift ? " is-gift" : ""}`}
                      onClick={() => setSelectedProductId(item.id)}
                      aria-pressed={selectedProduct.id === item.id}
                      aria-label={`${item.name}${item.gift ? ` · ${tr("OFFERT")}` : ""}`}
                    >
                      {item.gift && <span className="product-thumb-gift">{tr("OFFERT")}</span>}
                      <Image src={item.image} alt="" sizes="(max-width: 767px) 40vw, 150px" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Form Section */}
        <section id="commande" className="py-20 lg:py-32 bg-[#fff9f6] border-t border-[#ead9d9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
            <div className={isArabic ? "text-right" : "text-start"}>
              <span className="text-[#c97f91] text-xs font-bold uppercase tracking-widest block mb-3">{tr("COMMANDE EXPRESS")}</span>
              <h2 className="text-4xl md:text-5xl font-serif-custom text-[#702b43] font-bold mb-6">{tr("Recevez votre pack à domicile")}</h2>
              <p className="text-[#81777a] text-lg mb-10">{tr("Remplissez ce formulaire pour commander votre pack. Notre équipe vous appellera pour confirmer l'expédition.")}</p>

              <div className="rounded-3xl overflow-hidden border border-[#ead9d9] shadow-soft bg-gradient-to-br from-[#fff9f6] to-white p-6 md:p-10 text-center">
                <Image src={offerBanner} alt="Pack Vinillia" className="w-full h-auto rounded-xl mb-6 shadow-sm" />
                <h3 className="font-bold text-[#702b43] text-xl mb-2">{tr("Pack Vinillia Beauty & Skincare")}</h3>
                <p className="text-[#c97f91] font-semibold">{tr("8 produits complets")}</p>
                <p className="text-3xl font-serif-custom font-bold text-[#702b43] mt-4">{formattedPrice} {isArabic ? "درهم" : "DH"}</p>
              </div>
            </div>

            <div ref={orderFormRef} className={`bg-white rounded-[32px] p-6 md:p-10 shadow-float border border-[#ead9d9] ${isArabic ? "text-right" : "text-start"}`}>
              <h3 className="text-2xl font-bold text-[#702b43] mb-8">{tr("Vos coordonnées")}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-[#292326] mb-2"><User size={16} className="text-[#81777a]"/> {tr("Nom complet *")}</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className={`w-full bg-[#fcf8f8] border ${errors.name ? 'border-red-400' : 'border-[#ead9d9]'} rounded-2xl px-5 py-4 text-[#292326] ${isArabic ? "text-right" : ""}`} />
                  {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-[#292326] mb-2"><Phone size={16} className="text-[#81777a]"/> {tr("Numéro de téléphone *")}</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className={`w-full bg-[#fcf8f8] border ${errors.phone ? 'border-red-400' : 'border-[#ead9d9]'} rounded-2xl px-5 py-4 text-[#292326]`} dir="ltr" />
                  {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone}</p>}
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-[#292326] mb-2"><MapPin size={16} className="text-[#81777a]"/> {tr("Adresse de livraison complète *")}</label>
                  <textarea value={address} onChange={(e) => setAddress(e.target.value)} required rows={3} className={`w-full bg-[#fcf8f8] border ${errors.address ? 'border-red-400' : 'border-[#ead9d9]'} rounded-2xl px-5 py-4 text-[#292326] resize-none ${isArabic ? "text-right" : ""}`}></textarea>
                  {errors.address && <p className="text-red-500 text-xs mt-2">{errors.address}</p>}
                </div>

                <button type="submit" disabled={formState === "loading"} className="w-full btn-premium py-4 rounded-2xl text-base font-bold flex justify-center items-center gap-3 mt-4">
                  {formState === "loading" ? <span className="animate-pulse">{tr("CONFIRMATION EN COURS…")}</span> : <>{tr("CONFIRMER MA COMMANDE")} {isArabic ? <ArrowLeft size={20}/> : <ArrowRight size={20}/>}</>}
                </button>

                {formMessage && (
                  <div className={`p-4 rounded-2xl mt-4 text-sm font-medium border ${formState === 'success' ? 'bg-[#f1f4f0] border-[#7e8c77] text-[#4a5445]' : 'bg-red-50 border-red-200 text-red-700'}`}>
                    {formMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#292326] text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <img src="/vinillia-logo.svg" alt="Vinillia" className="h-10 mx-auto mb-6 brightness-0 invert opacity-90" />
          <p className="text-[#81777a] text-sm">
            {isArabic
              ? `© ${new Date().getFullYear()} Vinillia Beauty & Skincare. جميع الحقوق محفوظة.`
              : `© ${new Date().getFullYear()} Vinillia Beauty & Skincare. Tous droits réservés.`}
          </p>
        </div>
      </footer>
      {!orderFormVisible && (
        <nav className="sticky-purchase-bar" aria-label={isArabic ? "طلب الباقة" : "Commander le pack"}>
          <a href="#commande" className="sticky-purchase-cta">
            {tr("Commander maintenant")} {isArabic ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
          </a>
        </nav>
      )}
      <a
        className={`whatsapp-float${orderFormVisible ? " whatsapp-form-visible" : ""}`}
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tr("Contacter sur WhatsApp")}
        title={tr("Contacter sur WhatsApp")}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.9c0 2.1.55 4.15 1.6 5.95L.12 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.49-8.42ZM12.1 21.78h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.84 9.84 0 0 1-1.52-5.24C2.19 6.44 6.64 2 12.1 2a9.84 9.84 0 0 1 7 2.9A9.84 9.84 0 0 1 22 11.9c0 5.46-4.44 9.89-9.9 9.89Zm5.43-7.4c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"/></svg>
      </a>
    </div>
  );
}
