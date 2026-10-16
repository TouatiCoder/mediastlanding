"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, Check, Gift, Heart, Menu, Sparkles, X, ShieldCheck, Truck, RefreshCw } from "lucide-react";

const PRICE = 1400;
const translations: Record<string, string> = {
  "VOTRE RITUEL BEAUTÉ, EN UN SEUL PACK · 2 PRODUITS OFFERTS": "روتين جمالك في باقة واحدة · منتجان مجانًا",
  "Accueil": "الرئيسية",
  "Le pack": "الباقة",
  "Offre spéciale": "عرض خاص",
  "Résultats": "النتائج",
  "La routine": "الروتين",
  "Commander le pack": "اطلبي الباقة",
  "Votre beauté, notre signature": "جمالكِ هو بصمتنا",
  "Le rituel qui révèle": "روتين يكشف عن",
  "votre éclat.": "إشراقتكِ.",
  "Découvrez l’univers Vinillia avec un pack beauté exclusif : 6 produits réunis pour accompagner votre routine skincare au quotidien.": "اكتشفي عالم Vinillia مع باقة جمال مميزة تضم 6 منتجات لترافق روتين العناية اليومي ببشرتكِ.",
  "2 PRODUITS OFFERTS": "منتجان مجانًا",
  "Je commande mon pack": "أطلب الباقة",
  "Découvrir le pack": "اكتشفي الباقة",
  "6 produits dans un pack": "6 منتجات في باقة واحدة",
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
  "Le pack Vinillia": "باقة Vinillia",
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
  "Ajoutez ici le nom et la description réelle du produit.": "أضيفي هنا الاسم والوصف الحقيقي للمنتج.",
  "Un cadeau inclus dans votre pack beauté.": "هدية ضمن باقة الجمال الخاصة بكِ.",
  "La réception des commandes n\u0027est pas encore configurée.": "لم يتم إعداد نظام استقبال الطلبات بعد."
});

const slides = [
  { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1800&q=90", alt: "Portrait beauté et soin de la peau" },
];

const products = [
  { number: "01", name: "Produit 01", description: "Ajoutez ici le nom et la description réelle du produit.", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=650&q=80", alt: "Visuel provisoire du produit 1" },
  { number: "02", name: "Produit 02", description: "Ajoutez ici le nom et la description réelle du produit.", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=650&q=80", alt: "Visuel provisoire du produit 2" },
  { number: "03", name: "Produit 03", description: "Ajoutez ici le nom et la description réelle du produit.", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=650&q=80", alt: "Visuel provisoire du produit 3" },
  { number: "04", name: "Produit 04", description: "Un cadeau inclus dans votre pack beauté.", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=650&q=80", alt: "Visuel provisoire du produit offert 4", gift: true },
  { number: "05", name: "Produit 05", description: "Un cadeau inclus dans votre pack beauté.", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=650&q=80", alt: "Visuel provisoire du produit offert 5", gift: true },
  { number: "06", name: "Produit 06", description: "Ajoutez ici le nom et la description réelle du produit.", image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=650&q=80", alt: "Visuel provisoire du produit 6" },
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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; address?: string }>({});
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

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
          <div className="language-switch" role="group" aria-label="Language selector"><button type="button" className={!isArabic ? "active" : ""} aria-pressed={!isArabic} onClick={() => setLanguage("fr")}>FR</button><span aria-hidden="true">|</span><button type="button" className={isArabic ? "active" : ""} aria-pressed={isArabic} onClick={() => setLanguage("ar")}>العربية</button></div>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks" aria-label="Navigation principale">
            <a href="#accueil" onClick={() => setMenuOpen(false)}>{tr("Accueil")}</a><a href="#pack" onClick={() => setMenuOpen(false)}>{tr("Le pack")}</a><a href="#offre" onClick={() => setMenuOpen(false)}>{tr("Offre spéciale")}</a><a href="#resultats" onClick={() => setMenuOpen(false)}>{tr("Résultats")}</a><a href="#routine" onClick={() => setMenuOpen(false)}>{tr("La routine")}</a><a className="mobile-nav-order" href="#commande" onClick={() => setMenuOpen(false)}>{tr("Commander le pack")}</a>
          </nav>
          <a className="btn btn-gold nav-cta" href="#commande">{tr("Commander le pack")} <ArrowRight size={16} aria-hidden="true" /></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">{tr("Votre beauté, notre signature")}</span>
              <h1>{tr("Le rituel qui révèle")} <em>{tr("votre éclat.")}</em></h1>
              <p>{tr("Découvrez l’univers Vinillia avec un pack beauté exclusif : 6 produits réunis pour accompagner votre routine skincare au quotidien.")}</p>
              <div className="hero-price"><strong>1 400 DH</strong><span className="gift-pill"><Gift size={14} aria-hidden="true" /> {tr("2 PRODUITS OFFERTS")}</span></div>
              <div className="hero-actions"><a href="#commande" className="btn btn-gold">{tr("Je commande mon pack")} <ArrowRight size={17} aria-hidden="true" /></a><a href="#pack" className="btn btn-outline">{tr("Découvrir le pack")}</a></div>
              <div className="hero-notes"><span>{tr("6 produits dans un pack")}</span><span>{tr("Commande simple")}</span><span>{tr("Paiement à la livraison si disponible")}</span></div>
            </div>
            <div className="hero-visual" aria-label="Visuel de campagne Vinillia">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img key={slides[slideIndex].src} id="heroImage" src={slides[slideIndex].src} alt={slides[slideIndex].alt} fetchPriority="high" />
              <div className="hero-stamp">{tr("LE PACK")}<br /><strong>VINILLIA</strong><br />{tr("BEAUTY RITUAL")}</div>
              <div className="slider-controls" aria-label="Choisir le visuel du hero">
                {slides.map((slide, index) => <button key={slide.src} className={`slider-dot ${slideIndex === index ? "active" : ""}`} type="button" aria-label={`Visuel ${index + 1}`} aria-pressed={slideIndex === index} onClick={() => setSlideIndex(index)} />)}
              </div>
            </div>
          </div>
        </section>

        <section className="value-strip" aria-label="Les points forts du pack"><div className="container value-row"><div className="value-item"><ShieldCheck className="value-icon" size={25} aria-hidden="true" /><span><strong>{tr("Sélection beauté")}</strong><small>{tr("Un pack pensé pour vous")}</small></span></div><div className="value-item"><Gift className="value-icon" size={25} aria-hidden="true" /><span><strong>{tr("2 produits offerts")}</strong><small>{tr("Un cadeau dans votre pack")}</small></span></div><div className="value-item"><Truck className="value-icon" size={25} aria-hidden="true" /><span><strong>{tr("Commande facile")}</strong><small>{tr("Coordonnées en quelques étapes")}</small></span></div><div className="value-item"><RefreshCw className="value-icon" size={25} aria-hidden="true" /><span><strong>{tr("Confirmation rapide")}</strong><small>{tr("Notre équipe vous recontacte")}</small></span></div></div></section>

        <section className="section products-section" id="pack">
          <div className="container">
            <div className="section-heading"><span className="eyebrow">{tr("La sélection Vinillia")}</span><h2>{tr("Le pack beauté qui vous ressemble")}</h2><p>{tr("Six essentiels réunis dans une offre exclusive, avec deux produits offerts.")}</p></div>
            <div className="product-grid">{products.map((product) => <article className="product-card" key={product.number}><div className="product-image">{product.gift && <span className="gift-label">{tr("OFFERT")}</span>}{/* eslint-disable-next-line @next/next/no-img-element */}<img src={product.image} alt={product.alt} loading="lazy" /></div><div className="product-info"><small>{product.gift ? "Votre cadeau" : "Le pack"} · {product.number}</small><h3>{tr(product.name)}</h3><p>{tr(product.description)}</p></div></article>)}</div>
            <div className="bundle-summary"><div><strong>{tr("Le pack Vinillia — 6 produits")}</strong><p>{tr("4 produits sélectionnés + 2 produits offerts, selon la composition finale du pack.")}</p></div><div className="bundle-price">1 400 DH</div><a className="btn btn-gold" href="#commande">{tr("Je profite du pack")} <ArrowRight size={16} aria-hidden="true" /></a></div>
          </div>
        </section>

        <section className="offer" id="offre"><div className="container offer-grid">
          <div className="offer-art">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1000&q=85" alt="Ambiance beauté et skincare Vinillia" loading="lazy" /><span className="offer-art-badge">{tr("OFFRE PACK VINILLIA")}</span></div>
          <div className="offer-copy"><span className="eyebrow offer-eyebrow">{tr("Une offre pensée pour vous")}</span><h2>{tr("Six essentiels.")}<br />{tr("Un seul rituel.")}</h2><p>{tr("Retrouvez les six produits de votre sélection Vinillia dans un pack au prix unique de 1 400 DH.")}</p><div className="offer-points"><span>{tr("6 produits inclus")}</span><span>{tr("2 produits offerts")}</span><span>{tr("Commande facile")}</span><span>{tr("Routine à personnaliser")}</span></div><div className="offer-final"><strong>1 400 DH</strong><small>{tr("Prix du pack complet")}</small></div><a href="#commande" className="btn btn-gold">{tr("Commander maintenant")} <ArrowRight size={17} aria-hidden="true" /></a></div>
        </div></section>

        <section className="section before-after" id="resultats">
          <div className="container"><div className="section-heading"><span className="eyebrow">{tr("L’univers Vinillia")}</span><h2>{tr("Votre peau, votre histoire")}</h2><p>{tr("Un espace dédié aux visuels avant et après authentiques que vous ajouterez à la page.")}</p></div>
            <div className="ba-grid"><div className="ba-card">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80" alt="Visuel skincare à remplacer par une photo avant authentique" loading="lazy" /><span>{tr("AVANT")}</span></div><div className="ba-card">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=80" alt="Visuel skincare à remplacer par une photo après authentique" loading="lazy" /><span>{tr("APRÈS")}</span></div></div>
            <p className="ba-note">{tr("Visuels d’ambiance provisoires — remplacez-les par des photos authentiques et autorisées avant de présenter des résultats clients.")}</p>
          </div>
        </section>

        <section className="section" id="routine"><div className="container"><div className="section-heading"><span className="eyebrow">{tr("Simple &amp; agréable")}</span><h2>{tr("Votre routine en 3 étapes")}</h2><p>{tr("Une présentation claire, à adapter aux instructions réelles de vos produits.")}</p></div><div className="steps-grid"><article className="step"><div className="step-number">01</div><h3>{tr("Préparez")}</h3><p>{tr("Commencez avec le produit de préparation adapté à votre routine.")}</p></article><article className="step"><div className="step-number">02</div><h3>{tr("Appliquez")}</h3><p>{tr("Suivez l’ordre d’application et les conseils indiqués sur chaque produit.")}</p></article><article className="step"><div className="step-number">03</div><h3>{tr("Prenez soin de vous")}</h3><p>{tr("Adoptez une routine régulière en respectant les recommandations d’utilisation.")}</p></article></div></div></section>

        <section className="section order-section" id="commande"><div className="container order-grid">
          <div className="order-intro"><span className="eyebrow">{tr("Votre pack vous attend")}</span><h2>{tr("Prête à découvrir Vinillia ?")}</h2><p>{tr("Remplissez le formulaire avec vos coordonnées. Votre commande sera prête à être confirmée par l’équipe Vinillia.")}</p><div className="order-trust"><div><b><Check size={16} /></b><span>{tr("Un formulaire simple et rapide")}</span></div><div><b><Heart size={16} /></b><span>{tr("6 produits, dont 2 offerts")}</span></div><div><b><ArrowRight size={16} /></b><span>{tr("Pack au prix de 1 400 DH")}</span></div></div></div>
          <form className="order-card" onSubmit={handleSubmit} noValidate>
            <h3>{tr("Commander mon pack")}</h3><p className="form-sub">{tr("Renseignez vos informations pour préparer votre commande.")}</p>
            <div className="order-summary"><div><strong>{tr("Pack Vinillia")}</strong><small>{tr("6 produits · 2 offerts · Quantité : 1")}</small></div><strong>{PRICE.toLocaleString("fr-FR")} DH</strong></div>
            <div className={`field ${errors.name ? "invalid" : ""}`}><label htmlFor="fullName">{tr("Nom complet *")}</label><input id="fullName" name="fullName" autoComplete="name" placeholder={tr("Ex. Salma El Amrani")} value={name} onChange={(event) => setName(event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} required /><small className="error" id="name-error">{errors.name}</small></div>
            <div className={`field ${errors.phone ? "invalid" : ""}`}><label htmlFor="phone">{tr("Numéro de téléphone *")}</label><input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder={tr("Ex. 06 12 34 56 78")} value={phone} onChange={(event) => setPhone(event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} required /><small className="error" id="phone-error">{errors.phone}</small></div>
            <div className={`field ${errors.address ? "invalid" : ""}`}><label htmlFor="address">{tr("Adresse de livraison *")}</label><textarea id="address" name="address" autoComplete="street-address" placeholder={tr("Ville, quartier, rue et détails de l’adresse")} value={address} onChange={(event) => setAddress(event.target.value)} aria-invalid={Boolean(errors.address)} aria-describedby={errors.address ? "address-error" : undefined} required /><small className="error" id="address-error">{errors.address}</small></div>
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
