"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, Check, Gift, Heart, Menu, Sparkles, X, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import franceFlag from "./france.png";
import arabicFlag from "./flag.png";
import bannerImage from "./banner.png";
import product1 from "./imgprodu/1.png";
import product2 from "./imgprodu/2.png";
import product3 from "./imgprodu/3.png";
import product4 from "./imgprodu/4.png";
import product5 from "./imgprodu/5.png";
import product6 from "./imgprodu/6.png";
import product7 from "./imgprodu/7.png";
import product8 from "./imgprodu/8.png";

const PRICE = 1400;

const translations: Record<string, string> = {
"Skin Care": "Soin de la peau",
"Hair Care": "Soin des cheveux",
"Body Care": "Soin du corps",
"Makeup": "Maquillage",
"Health & Wellness": "Santé & bien-être",
"120+ Produits": "120+ produits",
"95+ Produits": "95+ produits",
"80+ Produits": "80+ produits",
"150+ Produits": "150+ produits",
"90+ Produits": "90+ produits",
"Six essentiels réunis dans une offre exclusive, avec deux produits offerts.": "Explorez nos univers beauté et découvrez le pack Vinillia avec deux produits offerts.",

  "VOTRE RITUEL BEAUTÉ, EN UN SEUL PACK · 2 PRODUITS OFFERTS": "روتين جمالك في باقة واحدة · منتجان مجانًا",
  "Accueil": "الرئيسية",
  "Le pack": "الباقة",
  "Offre spéciale": "عرض خاص",
  "Résultats": "النتائج",
  "La routine": "الروتين",
  "La routine Vinillia": "روتين Vinillia",
  "Les 6 étapes de votre routine": "الخطوات الست لروتين العناية",
  "Retrouvez les six produits de votre pack, numérotés pour les repérer facilement.": "تعرّفي على منتجات باقتكِ الستة، مرقمة لتسهيل التعرّف عليها.",
  "Étape": "الخطوة",
  "Dark Spot Correcting Glow Toner": "تونر تصحيح البقع والإشراقة",
  "Sunday Morning Refreshing Cleansing Foam": "رغوة تنظيف منعشة",
  "Complete No-Stress Physical Sunscreen": "واقي الشمس",
  "New Skin Resolution Gel Mask": "قناع جل للبشرة",
  "Dark Spot Correcting Glow Cream": "كريم الإشراقة وتصحيح البقع",
  "Artichoke Intensive Skin Barrier Ampoule": "أمبول العناية بحاجز البشرة",

  "Commander le pack": "اطلبي الباقة",
  "Votre beauté, notre signature": "جمالكِ هو بصمتنا",
  "Le rituel qui révèle": "روتين يكشف عن",
  "votre éclat.": "إشراقتكِ.",
  "Découvrez l’univers Vinillia avec un pack beauté exclusif : 8 produits, dont 2 offerts, pour accompagner votre routine skincare au quotidien.": "اكتشفي عالم Vinillia مع باقة جمال مميزة تضم 6 منتجات لترافق روتين العناية اليومي ببشرتكِ.",
  "2 PRODUITS OFFERTS": "منتجان مجانًا",
  "Je commande mon pack": "أطلب الباقة",
  "Découvrir le pack": "اكتشفي الباقة",
  "6 produits dans un pack": "6 منتجات في باقة واحدة",
  "8 produits dans un pack": "8 منتجات في باقة واحدة",
  "8 produits dans votre pack": "8 منتجات في باقتكِ",
  "8 produits, dont 2 offerts": "8 منتجات، منها منتجان مجانًا",
  "8 produits · 2 offerts · Quantité : 1": "8 منتجات · منتجان مجانًا · الكمية: 1",
  "8 produits inclus": "8 منتجات في الباقة",
  "Le pack Vinillia — 8 produits": "باقة Vinillia — 8 منتجات",
  "8 produits, dont 2 offerts, pour accompagner votre routine skincare au quotidien.": "8 منتجات، منها منتجان مجانًا، لترافق روتين العناية اليومي ببشرتكِ.",
  "Commande simple": "طلب سهل",
  "Paiement à la livraison si disponible": "الدفع عند الاستلام حسب التوفر",
  "LE PACK": "الباقة",
  "BEAUTY RITUAL": "روتين الجمال",
  "Sélection beauté": "اختيار جمالي مميز",
  "Un pack pensé pour vous": "باقة صُممت لأجلكِ",
  "2 produits offerts": "منتجان هدية",
  "Un cadeau dans votre pack": "هدية ضمن الباقة",
  "Commande facile": "طلب سهل",
  "Coordonnées en quelques étapes": "بياناتك في خطوات بسيطة",
  "Confirmation rapide": "تأكيد سريع",
  "Notre équipe vous recontacte": "سيتواصل معكِ فريقنا",
  "La sélection Vinillia": "اختيارات Vinillia",
  "Le pack beauté qui vous ressemble": "باقة جمال تناسبكِ",
  "Six essentiels réunis dans une offre exclusive, avec deux produits offerts.": "ستة منتجات أساسية ضمن عرض حصري، مع منتجين مجانًا.",
  "OFFERT": "هدية",
  "Votre cadeau": "هديتكِ",
  "Le pack Vinillia — 6 produits": "باقة Vinillia — 6 منتجات",
  "4 produits sélectionnés + 2 produits offerts, selon la composition finale du pack.": "4 منتجات مختارة + منتجان مجانًا، حسب التشكيلة النهائية للباقة.",
  "Je profite du pack": "أستفيد من العرض",
  "OFFRE PACK VINILLIA": "عرض باقة VINILLIA",
  "Une offre pensée pour vous": "عرض مخصص لكِ",
  "Six essentiels.": "ستة منتجات أساسية.",
  "Un seul rituel.": "روتين واحد.",
  "Retrouvez les six produits de votre sélection Vinillia dans un pack au prix unique de 1 400 DH.": "احصلي على منتجات Vinillia الستة ضمن باقة بسعر 1,400 درهم.",
  "6 produits inclus": "6 منتجات في الباقة",
  "Routine à personnaliser": "روتين حسب احتياجاتكِ",
  "Prix du pack complet": "سعر الباقة كاملة",
  "Commander maintenant": "اطلبي الآن",
  "L’univers Vinillia": "عالم Vinillia",
  "Votre peau, votre histoire": "بشرتكِ، حكايتكِ",
  "Un espace dédié aux visuels avant et après authentiques que vous ajouterez à la page.": "مساحة لصور قبل وبعد الحقيقية التي ستضيفينها إلى الصفحة.",
  "AVANT": "قبل",
  "APRÈS": "بعد",
  "Visuels d’ambiance provisoires — remplacez-les par des photos authentiques et autorisées avant de présenter des résultats clients.": "صور مؤقتة للتصميم — استبدليها بصور حقيقية ومصرّح باستخدامها قبل عرض نتائج العملاء.",
  "Simple &amp; agréable": "ببساطة ومتعة",
  "Votre routine en 3 étapes": "روتينكِ في 3 خطوات",
  "Une présentation claire, à adapter aux instructions réelles de vos produits.": "شرح مبسط يُعدّل وفق تعليمات الاستخدام الحقيقية لمنتجاتكِ.",
  "Préparez": "حضّري",
  "Commencez avec le produit de préparation adapté à votre routine.": "ابدئي بمنتج التحضير المناسب لروتينكِ.",
  "Appliquez": "طبّقي",
  "Suivez l’ordre d’application et les conseils indiqués sur chaque produit.": "اتبعي ترتيب الاستخدام والإرشادات الموضحة على كل منتج.",
  "Prenez soin de vous": "اعتني بنفسكِ",
  "Adoptez une routine régulière en respectant les recommandations d’utilisation.": "حافظي على روتين منتظم مع اتباع توصيات الاستخدام.",
  "Votre pack vous attend": "باقتكِ بانتظاركِ",
  "Prête à découvrir Vinillia ?": "هل أنتِ مستعدة لاكتشاف Vinillia؟",
  "Remplissez le formulaire avec vos coordonnées. Votre commande sera prête à être confirmée par l’équipe Vinillia.": "املئي النموذج ببياناتكِ، وسيتواصل معكِ فريق Vinillia لتأكيد الطلب.",
  "Un formulaire simple et rapide": "نموذج بسيط وسريع",
  "6 produits, dont 2 offerts": "6 منتجات، منها منتجان مجانًا",
  "Pack au prix de 1 400 DH": "الباقة بسعر 1,400 درهم",
  "Commander mon pack": "أطلب باقتي",
  "Renseignez vos informations pour préparer votre commande.": "أدخلي معلوماتكِ لتجهيز الطلب.",
  "Pack Vinillia": "باقة Vinillia",
  "6 produits · 2 offerts · Quantité : 1": "6 منتجات · منتجان مجانًا · الكمية: 1",
  "Nom complet *": "الاسم الكامل *",
  "Numéro de téléphone *": "رقم الهاتف *",
  "Adresse de livraison *": "عنوان التوصيل *",
  "Vos informations sont destinées au traitement de votre commande. En envoyant ce formulaire, vous acceptez d’être contacté pour sa confirmation.": "ستُستخدم معلوماتكِ لمعالجة الطلب. بإرسال النموذج، توافقين على التواصل معكِ لتأكيده.",
  "PRÉPARATION…": "جارٍ التجهيز…",
  "CONFIRMER MA COMMANDE": "تأكيد طلبي",
  "✦ BEAUTY &amp; SKINCARE ✦": "✦ الجمال والعناية بالبشرة ✦",
  "Une parenthèse beauté, imaginée autour de votre rituel skincare.": "لحظات من الجمال صُممت لتناسب روتين العناية ببشرتكِ.",
  "Navigation": "التنقل",
  "Avant / Après": "قبل / بعد",
  "Commander": "اطلبي",
  "Informations": "معلومات",
  "Politique de confidentialité": "سياسة الخصوصية",
  "Conditions générales": "الشروط العامة",
  "Contact à configurer": "بيانات التواصل قيد الإعداد",
  "Beauty, with a signature.": "الجمال، ببصمة خاصة.",
  "Veuillez saisir votre nom complet.": "يرجى إدخال الاسم الكامل.",
  "Saisissez un numéro marocain valide.": "يرجى إدخال رقم هاتف مغربي صحيح.",
  "Veuillez saisir votre adresse de livraison.": "يرجى إدخال عنوان التوصيل.",
  "Veuillez vérifier les champs signalés, puis réessayez.": "يرجى مراجعة الحقول المحددة والمحاولة مرة أخرى.",
  "Merci ! Votre demande a été transmise. Notre équipe vous contactera pour confirmer les détails.": "شكرًا لكِ! تم إرسال طلبكِ. سيتواصل معكِ فريقنا لتأكيد التفاصيل.",
  "Le formulaire est prêt, mais le système de réception des commandes n’est pas encore configuré. Connectez la route /api/orders avant la mise en ligne.": "النموذج جاهز، لكن نظام استقبال الطلبات لم يُجهّز بعد. يجب ربط /api/orders قبل نشر الموقع.",
  "Ex. Salma El Amrani": "مثال: سلمى العمراني",
  "Ex. 06 12 34 56 78": "مثال: 06 12 34 56 78",
  "Ville, quartier, rue et détails de l’adresse": "المدينة، الحي، الشارع وتفاصيل العنوان"
};

Object.assign(translations, {
  "Produit 01": "المنتج 01", "Produit 02": "المنتج 02", "Produit 03": "المنتج 03", "Produit 04": "المنتج 04", "Produit 05": "المنتج 05", "Produit 06": "المنتج 06",
  "Produit 07": "المنتج 07", "Produit 08": "المنتج 08",
  "Soin du visage": "العناية بالوجه", "Soin hydratant": "العناية بالترطيب", "Soin du corps": "العناية بالجسم", "Soin beauté": "العناية بالجمال", "Soin quotidien": "العناية اليومية", "Soin essentiel": "العناية الأساسية", "Produit offert": "منتج مجاني",
  "Produit inclus dans le pack beauté.": "منتج ضمن باقة الجمال.",
  "8 produits dans votre pack": "8 منتجات في باقتكِ",
  "6 produits sélectionnés + 2 produits offerts.": "6 منتجات مختارة + منتجان مجانًا.",
  "Ajoutez ici le nom et la description réelle du produit.": "أضيفي هنا الاسم والوصف الحقيقي للمنتج.",
  "Un cadeau inclus dans votre pack beauté.": "هدية ضمن باقة الجمال الخاصة بكِ.",
  "La réception des commandes n\u0027est pas encore configurée.": "لم يتم إعداد نظام استقبال الطلبات بعد."
});


Object.assign(translations, {
  "VOTRE RITUEL BEAUTÉ, EN UN SEUL PACK · 2 PRODUITS OFFERTS": "روتين جمالك في باقة واحدة · منتجان مجانًا",
  "8 produits dans un pack": "8 منتجات في باقة واحدة",
  "Paiement à la livraison au Maroc": "الدفع عند الاستلام في المغرب",
  "Paiement à la livraison": "الدفع عند الاستلام",
  "8 produits, dont 2 offerts": "8 منتجات، منها منتجان مجانًا",
  "8 produits · 2 offerts · Quantité : 1": "8 منتجات · منتجان مجانًا · الكمية: 1",
  "8 produits inclus": "8 منتجات في الباقة",
  "Retrouvez les huit produits de votre sélection Vinillia dans un pack au prix unique de 1 400 DH.": "احصلي على منتجات Vinillia الثمانية ضمن باقة بسعر 1,400 درهم.",
  "Huit essentiels.": "ثمانية منتجات أساسية.",
  "Le pack complet": "الباقة كاملة",
  "Étape 1 — Préparez": "الخطوة 1 — حضّري",
  "Étape 2 — Appliquez": "الخطوة 2 — طبّقي",
  "Étape 3 — Continuez": "الخطوة 3 — واصلي",
  "Suivez les instructions indiquées sur vos produits et respectez l’ordre d’utilisation recommandé.": "اتبعي تعليمات المنتجات واحترمي ترتيب الاستخدام الموصى به.",
  "Commande COD au Maroc": "طلب بالدفع عند الاستلام في المغرب",
  "Livraison et paiement à la réception": "التوصيل والأداء عند الاستلام",
  "Votre commande, en 3 étapes simples": "طلبك في 3 خطوات بسيطة",
  "Confirmez vos coordonnées": "أكدي معلوماتك",
  "Notre équipe vous appelle pour confirmer la commande.": "سيتصل بك فريقنا لتأكيد الطلب.",
  "Recevez votre pack": "توصلي بالباقة",
  "Votre pack est livré à l’adresse indiquée.": "سيتم توصيل الباقة إلى العنوان الذي أدخلته.",
  "Payez à la livraison": "أدي عند الاستلام",
  "Réglez votre commande à la réception du colis.": "أدي ثمن الطلب عند استلام الطرد.",
  "Nom complet *": "الاسم الكامل *",
  "Numéro de téléphone *": "رقم الهاتف *",
  "Adresse de livraison *": "عنوان التوصيل *",
  "Produit inclus dans le pack beauté.": "منتج ضمن باقة الجمال."
});


Object.assign(translations, {
  "Découvrez l’univers Vinillia avec un pack beauté exclusif : 8 produits, dont 2 offerts, pour accompagner votre routine skincare au quotidien.": "اكتشفي عالم Vinillia مع باقة جمال مميزة تضم 8 منتجات، منها منتجان مجانًا، لترافق روتين العناية اليومي ببشرتكِ.",
  "8 produits dans un pack": "8 منتجات في باقة واحدة",
  "Paiement à la livraison au Maroc": "الدفع عند الاستلام في المغرب",
  "Huit essentiels.": "ثمانية منتجات أساسية.",
  "8 produits inclus": "8 منتجات في الباقة",
  "8 produits, dont 2 offerts": "8 منتجات، منها منتجان مجانًا",
  "8 produits · 2 offerts · Quantité : 1": "8 منتجات · منتجان مجانًا · الكمية: 1",
  "Votre routine en 3 étapes": "روتينك في 3 خطوات",
  "Simple &amp; agréable": "ببساطة ومتعة",
  "Découvrez les étapes d’utilisation en suivant les instructions propres à chaque produit.": "اتبعي خطوات الاستخدام وفق التعليمات الخاصة بكل منتج.",
  "Produit 01 — Première étape": "المنتج 01 — الخطوة الأولى",
  "Produit 02 — Deuxième étape": "المنتج 02 — الخطوة الثانية",
  "Produit 03 — Troisième étape": "المنتج 03 — الخطوة الثالثة",
  "Utilisez le produit 01 selon les indications figurant sur son emballage.": "استخدمي المنتج 01 حسب الإرشادات الموجودة على العبوة.",
  "Poursuivez avec le produit 02 en respectant les conseils d’utilisation.": "واصلي بالمنتج 02 مع احترام إرشادات الاستخدام.",
  "Terminez avec le produit 03 si l’ordre indiqué sur les emballages le recommande.": "أنهي بالمنتج 03 إذا كان ترتيب الاستخدام على العبوات يوصي بذلك.",
  "Commande COD au Maroc": "الطلب والدفع عند الاستلام في المغرب",
  "Votre commande, en 3 étapes simples": "طلبك في 3 خطوات بسيطة",
  "Livraison et paiement à la réception": "التوصيل والأداء عند الاستلام",
  "Confirmez vos coordonnées": "أكدي معلوماتك",
  "Notre équipe vous appelle pour confirmer la commande.": "سيتصل بك فريقنا لتأكيد الطلب.",
  "Recevez votre pack": "توصلي بالباقة",
  "Votre pack est livré à l’adresse indiquée.": "سيتم توصيل الباقة إلى العنوان الذي أدخلته.",
  "Payez à la livraison": "أدي عند الاستلام",
  "Réglez votre commande à la réception du colis.": "أدي ثمن الطلب عند استلام الطرد.",
  "Commande avec paiement à la livraison": "الطلب مع الدفع عند الاستلام"
});


Object.assign(translations, {
  "Vaseline Gluta-Hya Serum Burst Lotion": "لوشن فازلين Gluta-Hya",
  "Vaseline Lip Therapy Rosy Lips": "فازلين Lip Therapy Rosy Lips",
  "Les 2 produits Vaseline sont offerts": "منتجا فازلين هدية مجانًا"
});

const slides = [
  { src: bannerImage.src, alt: "Campagne beauté Vinillia avec modèle et produits du pack" },
];

function normalizePhone(value: string) {
  return value.replace(/[\s().-]/g, "");
}

export default function LandingPage1() {
  const [language, setLanguage] = useState<"fr" | "ar">("fr");
  const isArabic = language === "ar";
  const tr = (value: string) => (isArabic ? translations[value] ?? value : value);
  const [menuOpen, setMenuOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [comparisonPosition, setComparisonPosition] = useState(50);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; address?: string }>({});
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [language, isArabic]);

  useEffect(() => {
    setYear(new Date().getFullYear());
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => setSlideIndex((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const orderSection = document.getElementById("commande");
    const mobileCta = document.getElementById("mobileCta");
    if (!orderSection || !mobileCta || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        mobileCta.style.opacity = entry.isIntersecting ? "0" : "1";
        mobileCta.style.pointerEvents = entry.isIntersecting ? "none" : "auto";
      });
    }, { threshold: 0.18 });
    observer.observe(orderSection);
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage("");
    setFormState("idle");
    const nextErrors: typeof errors = {};
    const normalizedPhone = normalizePhone(phone.trim());
    const phoneValid = /^(\+212|00212|0)([5-7]\d{8})$/.test(normalizedPhone);
    if (name.trim().length < 3) nextErrors.name = tr("Veuillez saisir votre nom complet.");
    if (!phoneValid) nextErrors.phone = tr("Saisissez un numéro marocain valide.");
    if (address.trim().length < 8) nextErrors.address = tr("Veuillez saisir votre adresse de livraison.");
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFormState("error");
      setFormMessage(tr("Veuillez vérifier les champs signalés, puis réessayez."));
      return;
    }
    setFormState("loading");
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName: name.trim(), phone: phone.trim(), address: address.trim(), productBundleId: "vinillia-beauty-pack", quantity: 1 }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(tr(result?.error || "La réception des commandes n\u0027est pas encore configurée."));
      setFormState("success");
      setFormMessage(tr("Merci ! Votre demande a été transmise. Notre équipe vous contactera pour confirmer les détails."));
      setName("");
      setPhone("");
      setAddress("");
      setErrors({});
    } catch {
      setFormState("error");
      setFormMessage(tr("Le formulaire est prêt, mais le système de réception des commandes n’est pas encore configuré. Connectez la route /api/orders avant la mise en ligne."));
    }
  }

  return (
    <div className={`page-shell ${isArabic ? "arabic" : ""}`} lang={language} dir={isArabic ? "rtl" : "ltr"}>
      <div className="announcement">{tr("VOTRE RITUEL BEAUTÉ, EN UN SEUL PACK · 2 PRODUITS OFFERTS")}</div>
      <header className="site-header">
        <div className="container nav">
          <a href="#accueil" className="brand" aria-label="Vinillia, accueil" onClick={() => setMenuOpen(false)}><span className="brand-mark"><Sparkles size={23} aria-hidden="true" /></span><span className="brand-copy"><span className="brand-name">Vinillia</span><span className="brand-sub">BEAUTY &amp; SKINCARE</span></span></a>
          
          <nav className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks" aria-label="Navigation principale">
            <a href="#accueil" onClick={() => setMenuOpen(false)}>{tr("Accueil")}</a><a href="#pack" onClick={() => setMenuOpen(false)}>{tr("Le pack")}</a><a href="#offre" onClick={() => setMenuOpen(false)}>{tr("Offre spéciale")}</a><a href="#resultats" onClick={() => setMenuOpen(false)}>{tr("Résultats")}</a><a href="#routine" onClick={() => setMenuOpen(false)}>{tr("La routine")}</a><a className="mobile-nav-order" href="#commande" onClick={() => setMenuOpen(false)}>{tr("Commander le pack")}</a>
          </nav>
          <div className="language-switch nav-language" role="group" aria-label="Choisir la langue"><button type="button" className={!isArabic ? "active" : ""} aria-pressed={!isArabic} onClick={() => setLanguage("fr")}><img src={franceFlag.src} alt="" aria-hidden="true" /> <span>FR</span></button><span aria-hidden="true">|</span><button type="button" className={isArabic ? "active" : ""} aria-pressed={isArabic} onClick={() => setLanguage("ar")}><img src={arabicFlag.src} alt="" aria-hidden="true" /> <span>AR</span></button></div>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </header>

      <main>
        <section className="hero hero-banner-only" id="accueil" aria-label="Bannière beauté Vinillia">
          <div
            className="hero-visual hero-banner-visual"
            aria-label="Bannière Vinillia : produits AXIS-Y et deux cadeaux Vaseline"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={slides[slideIndex].src}
              id="heroImage"
              src={slides[slideIndex].src}
              alt={slides[slideIndex].alt}
              fetchPriority="high"
            />
          </div>
        </section>
        <section className="hero-cta-bar" aria-label="Commander le pack Vinillia">
          <div className="container hero-cta-inner">
            <div className="hero-cta-price">
              <strong>1 400 DH</strong>
              <span className="hero-cta-offer"><Gift size={15} aria-hidden="true" /> {tr("8 produits dans un pack")} · {tr("2 PRODUITS OFFERTS")}</span>
            </div>
            <a href="#commande" className="btn btn-gold">{tr("Je commande mon pack")} <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="value-strip" aria-label="Les points forts du pack"><div className="container value-row"><div className="value-item"><ShieldCheck className="value-icon" size={25} aria-hidden="true" /><span><strong>{tr("Sélection beauté")}</strong><small>{tr("Un pack pensé pour vous")}</small></span></div><div className="value-item"><Gift className="value-icon" size={25} aria-hidden="true" /><span><strong>{tr("2 produits offerts")}</strong><small>{tr("Un cadeau dans votre pack")}</small></span></div><div className="value-item"><Truck className="value-icon" size={25} aria-hidden="true" /><span><strong>{tr("Commande facile")}</strong><small>{tr("Coordonnées en quelques étapes")}</small></span></div><div className="value-item"><RefreshCw className="value-icon" size={25} aria-hidden="true" /><span><strong>{tr("Confirmation rapide")}</strong><small>{tr("Notre équipe vous recontacte")}</small></span></div></div></section>

        <section className="section products-section" id="pack">
          <div className="container">
            <div className="section-heading category-heading"><span className="eyebrow">{tr("La sélection Vinillia")}</span><h2>{tr("Le pack beauté qui vous ressemble")}</h2></div>
            <div className="product-grid pack-eight-grid">
              {[
                { name: "Dark Spot Correcting Glow Toner", type: "Soin du visage", image: product1, alt: "AXIS-Y Dark Spot Correcting Glow Toner", gift: false },
                { name: "Sunday Morning Refreshing Cleansing Foam", type: "Nettoyant visage", image: product2, alt: "AXIS-Y Sunday Morning Refreshing Cleansing Foam", gift: false },
                { name: "Complete No-Stress Physical Sunscreen", type: "Protection solaire", image: product3, alt: "AXIS-Y Complete No-Stress Physical Sunscreen", gift: false },
                { name: "New Skin Resolution Gel Mask", type: "Masque visage", image: product4, alt: "AXIS-Y New Skin Resolution Gel Mask", gift: false },
                { name: "Dark Spot Correcting Glow Cream", type: "Crème visage", image: product5, alt: "AXIS-Y Dark Spot Correcting Glow Cream", gift: false },
                { name: "Artichoke Intensive Skin Barrier Ampoule", type: "Sérum visage", image: product6, alt: "AXIS-Y Artichoke Intensive Skin Barrier Ampoule", gift: false },
                { name: "Vaseline Gluta-Hya Serum Burst Lotion", type: "Produit offert", image: product7, alt: "Vaseline Gluta-Hya Serum Burst Lotion — cadeau offert dans le pack", gift: true },
                { name: "Vaseline Lip Therapy Rosy Lips", type: "Produit offert", image: product8, alt: "Vaseline Lip Therapy Rosy Lips — deuxième cadeau offert dans le pack", gift: true }
              ].map((product) => <article className="product-card pack-product-card" key={product.name}>
                <a className="pack-product-link" href="#commande" aria-label={product.name + " — " + tr("Commander mon pack")}>
                  <div className="product-image">
                    {product.gift && <span className="gift-label">{tr("OFFERT")}</span>}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.image.src} alt={product.alt} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <small>{tr(product.type)}</small>
                    <h3>{product.name}</h3>
                    <p>{product.gift ? tr("Un cadeau inclus dans votre pack beauté.") : tr("Produit inclus dans le pack beauté.")}</p>
                  </div>
                </a>
              </article>)}
            </div>
            <div className="pack-eight-summary">
              <div><strong>{tr("8 produits dans votre pack")}</strong><p>{tr("6 produits sélectionnés + 2 produits offerts.")}</p><small className="gift-note">{tr("Les 2 produits Vaseline sont offerts")}</small></div>
              <a href="#commande" className="btn btn-gold">{tr("Commander mon pack")} <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="offer" id="offre"><div className="container offer-grid">
          <div className="offer-art">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1000&q=85" alt="Ambiance beauté et skincare Vinillia" loading="lazy" /><span className="offer-art-badge">{tr("OFFRE PACK VINILLIA")}</span></div>
          <div className="offer-copy"><span className="eyebrow offer-eyebrow">{tr("Une offre pensée pour vous")}</span><h2>{tr("Huit essentiels.")}<br />{tr("Un seul rituel.")}</h2><p>{tr("Retrouvez les huit produits de votre sélection Vinillia dans un pack au prix unique de 1 400 DH.")}</p><div className="offer-points"><span>{tr("8 produits inclus")}</span><span>{tr("2 produits offerts")}</span><span>{tr("Commande facile")}</span><span>{tr("Routine à personnaliser")}</span></div><div className="offer-final"><strong>1 400 DH</strong><small>{tr("Prix du pack complet")}</small></div><a href="#commande" className="btn btn-gold">{tr("Commander maintenant")} <ArrowRight size={17} aria-hidden="true" /></a></div>
        </div></section>

        <section className="section before-after" id="resultats">
          <div className="container"><div className="section-heading"><span className="eyebrow">{tr("L’univers Vinillia")}</span><h2>{tr("Votre peau, votre histoire")}</h2><p>{tr("Un espace dédié aux visuels avant et après authentiques que vous ajouterez à la page.")}</p></div>
            <div className="ba-comparison" onPointerMove={(event) => { if (event.buttons === 1 || event.pointerType === "touch") { const rect = event.currentTarget.getBoundingClientRect(); setComparisonPosition(Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100))); } }} onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); const rect = event.currentTarget.getBoundingClientRect(); setComparisonPosition(Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100))); }} role="group" aria-label={isArabic ? "مقارنة قبل وبعد. حرّك المؤشر." : "Avant et après. Faites glisser le curseur."}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="ba-image ba-image-after" src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1400&q=85" alt={isArabic ? "صورة بعد — استبدلها بنتيجة حقيقية" : "Image après — à remplacer par un résultat authentique"} loading="lazy" />
              <div className="ba-before-layer" style={{ clipPath: `inset(0 ${100 - comparisonPosition}% 0 0)` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="ba-image" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1400&q=85" alt={isArabic ? "صورة قبل — استبدلها بنتيجة حقيقية" : "Image avant — à remplacer par un résultat authentique"} loading="lazy" />
              </div>
              <span className="ba-label ba-label-before">{tr("AVANT")}</span><span className="ba-label ba-label-after">{tr("APRÈS")}</span>
              <div className="ba-divider" style={{ left: `${comparisonPosition}%` }} aria-hidden="true"><span><i></i><i></i></span></div>
              <input className="ba-range" type="range" min="0" max="100" value={comparisonPosition} onChange={(event) => setComparisonPosition(Number(event.target.value))} aria-label={isArabic ? "قارن بين صور قبل وبعد" : "Comparer les images avant et après"} />
            </div>
            <p className="ba-note">{tr("Visuels d’ambiance provisoires — remplacez-les par des photos authentiques et autorisées avant de présenter des résultats clients.")}</p>
          </div>
        </section>

        <section className="section routine-section" id="routine">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">{tr("La routine Vinillia")}</span>
              <h2>{tr("Les 6 étapes de votre routine")}</h2>
              <p>{tr("Retrouvez les six produits de votre pack, numérotés pour les repérer facilement.")}</p>
            </div>
            <div className="steps-grid routine-products-grid">
              {[
                { number: "01", image: product1, name: "Dark Spot Correcting Glow Toner" },
                { number: "02", image: product2, name: "Sunday Morning Refreshing Cleansing Foam" },
                { number: "03", image: product3, name: "Complete No-Stress Physical Sunscreen" },
                { number: "04", image: product4, name: "New Skin Resolution Gel Mask" },
                { number: "05", image: product5, name: "Dark Spot Correcting Glow Cream" },
                { number: "06", image: product6, name: "Artichoke Intensive Skin Barrier Ampoule" }
              ].map((step) => (
                <article className="step routine-product-step" key={step.number}>
                  <div className="routine-product-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={step.image.src} alt={tr(step.name)} loading="lazy" />
                    <span className="step-number">{step.number}</span>
                  </div>
                  <div className="routine-product-info">
                    <span className="routine-step-label">{tr("Étape")} {step.number}</span>
                    <h3>{tr(step.name)}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section order-section" id="commande"><div className="container order-grid">
          <div className="order-intro"><span className="eyebrow">{tr("Votre pack vous attend")}</span><h2>{tr("Prête à découvrir Vinillia ?")}</h2><p>{tr("Remplissez le formulaire avec vos coordonnées. Votre commande sera prête à être confirmée par l’équipe Vinillia.")}</p><div className="order-trust"><div><b><Check size={16} /></b><span>{tr("Un formulaire simple et rapide")}</span></div><div><b><Heart size={16} /></b><span>{tr("8 produits, dont 2 offerts")}</span></div><div><b><ArrowRight size={16} /></b><span>{tr("Pack au prix de 1 400 DH")}</span></div></div></div>
          <form className="order-card" onSubmit={handleSubmit} noValidate>
            <h3>{tr("Commander mon pack")}</h3><p className="form-sub">{tr("Renseignez vos informations pour préparer votre commande.")}</p><div className="cod-badge"><Truck size={18} aria-hidden="true" /><span>{tr("Commande avec paiement à la livraison")}</span></div>
            <div className="order-summary"><div><strong>{tr("Pack Vinillia")}</strong><small>{tr("8 produits · 2 offerts · Quantité : 1")}</small></div><strong>{PRICE.toLocaleString("fr-FR")} DH</strong></div>
            <div className={`field ${errors.name ? "invalid" : ""}`}><label htmlFor="fullName">{tr("Nom complet *")}</label><input id="fullName" name="fullName" autoComplete="name" placeholder={tr("Ex. Salma El Amrani")} value={name} onChange={(event) => setName(event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} required /><small className="error" id="name-error">{errors.name}</small></div>
            <div className={`field ${errors.address ? "invalid" : ""}`}><label htmlFor="address">{tr("Adresse de livraison *")}</label><textarea id="address" name="address" autoComplete="street-address" placeholder={tr("Ville, quartier, rue et détails de l’adresse")} value={address} onChange={(event) => setAddress(event.target.value)} aria-invalid={Boolean(errors.address)} aria-describedby={errors.address ? "address-error" : undefined} required /><small className="error" id="address-error">{errors.address}</small></div>
            <div className={`field ${errors.phone ? "invalid" : ""}`}><label htmlFor="phone">{tr("Numéro de téléphone *")}</label><input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder={tr("Ex. 06 12 34 56 78")} value={phone} onChange={(event) => setPhone(event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} required /><small className="error" id="phone-error">{errors.phone}</small></div>
            <p className="form-privacy">{tr("Vos informations sont destinées au traitement de votre commande. En envoyant ce formulaire, vous acceptez d’être contacté pour sa confirmation.")}</p>
            <button className="btn btn-gold submit-btn" type="submit" disabled={formState === "loading"}>{formState === "loading" ? "PRÉPARATION…" : "CONFIRMER MA COMMANDE"} <ArrowRight size={17} aria-hidden="true" /></button>
            {formMessage && <div className={`form-message ${formState === "success" ? "success" : "error-msg"}`} role="status" aria-live="polite">{formMessage}</div>}
          </form>
        </div></section>
      </main>

      <footer className="footer"><div className="container"><div className="footer-top">
        <div className="footer-intro"><a href="#accueil" className="brand"><span className="brand-name">Vinillia</span><span className="brand-sub">{tr("✦ BEAUTY &amp; SKINCARE ✦")}</span></a><p>{tr("Une parenthèse beauté, imaginée autour de votre rituel skincare.")}</p></div>
        <div><h4>{tr("Navigation")}</h4><div className="footer-links"><a href="#pack">{tr("Le pack")}</a><a href="#resultats">{tr("Avant / Après")}</a><a href="#routine">{tr("La routine")}</a><a href="#commande">{tr("Commander")}</a></div></div>
        <div><h4>{tr("Informations")}</h4><div className="footer-links"><a href="#confidentialite">{tr("Politique de confidentialité")}</a><a href="#conditions">{tr("Conditions générales")}</a><a href="mailto:contact@vinillia.example">{tr("Contact à configurer")}</a></div></div>
      </div><div className="footer-bottom"><span>© {year ?? "2026"} Vinillia Beauty &amp; Skincare. Tous droits réservés.</span><span>{tr("Beauty, with a signature.")}</span></div></div></footer>
      <div className="mobile-cta" id="mobileCta"><div><span className="mobile-small">{tr("Le pack Vinillia")}</span><span className="mobile-price">1 400 DH</span></div><a className="btn btn-gold" href="#commande">{tr("Commander")} <ArrowRight size={15} aria-hidden="true" /></a></div>
    </div>
  );
}
