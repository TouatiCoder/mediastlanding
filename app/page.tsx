"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, Check, Gift, Heart, Menu, Sparkles, X, ShieldCheck, Truck, RefreshCw } from "lucide-react";

const PRICE = 1400;
const slides = [
  { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1800&q=90", alt: "Portrait beauté et soin de la peau" },
  { src: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1800&q=90", alt: "Collection de soins beauté" },
  { src: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1800&q=90", alt: "Ambiance premium skincare" },
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
    if (name.trim().length < 3) nextErrors.name = "Veuillez saisir votre nom complet.";
    if (!phoneValid) nextErrors.phone = "Saisissez un numéro marocain valide.";
    if (address.trim().length < 8) nextErrors.address = "Veuillez saisir votre adresse de livraison.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFormState("error");
      setFormMessage("Veuillez vérifier les champs signalés, puis réessayez.");
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
      if (!response.ok) throw new Error(result?.error || "La réception des commandes n'est pas encore configurée.");
      setFormState("success");
      setFormMessage("Merci ! Votre demande a été transmise. Notre équipe vous contactera pour confirmer les détails.");
      setName("");
      setPhone("");
      setAddress("");
      setErrors({});
    } catch {
      setFormState("error");
      setFormMessage("Le formulaire est prêt, mais le système de réception des commandes n’est pas encore configuré. Connectez la route /api/orders avant la mise en ligne.");
    }
  }

  return (
    <>
      <div className="announcement">VOTRE RITUEL BEAUTÉ, EN UN SEUL PACK · 2 PRODUITS OFFERTS</div>
      <header className="site-header">
        <div className="container nav">
          <a href="#accueil" className="brand" aria-label="Vinillia, accueil" onClick={() => setMenuOpen(false)}><span className="brand-mark"><Sparkles size={23} aria-hidden="true" /></span><span className="brand-copy"><span className="brand-name">Vinillia</span><span className="brand-sub">BEAUTY &amp; SKINCARE</span></span></a>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks" aria-label="Navigation principale">
            <a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a><a href="#pack" onClick={() => setMenuOpen(false)}>Le pack</a><a href="#offre" onClick={() => setMenuOpen(false)}>Offre spéciale</a><a href="#resultats" onClick={() => setMenuOpen(false)}>Résultats</a><a href="#routine" onClick={() => setMenuOpen(false)}>La routine</a><a className="mobile-nav-order" href="#commande" onClick={() => setMenuOpen(false)}>Commander le pack</a>
          </nav>
          <a className="btn btn-gold nav-cta" href="#commande">Commander le pack <ArrowRight size={16} aria-hidden="true" /></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Votre beauté, notre signature</span>
              <h1>Le rituel qui révèle <em>votre éclat.</em></h1>
              <p>Découvrez l’univers Vinillia avec un pack beauté exclusif : 6 produits réunis pour accompagner votre routine skincare au quotidien.</p>
              <div className="hero-price"><strong>1 400 DH</strong><span className="gift-pill"><Gift size={14} aria-hidden="true" /> 2 PRODUITS OFFERTS</span></div>
              <div className="hero-actions"><a href="#commande" className="btn btn-gold">Je commande mon pack <ArrowRight size={17} aria-hidden="true" /></a><a href="#pack" className="btn btn-outline">Découvrir le pack</a></div>
              <div className="hero-notes"><span>6 produits dans un pack</span><span>Commande simple</span><span>Paiement à la livraison si disponible</span></div>
            </div>
            <div className="hero-visual" aria-label="Visuel de campagne Vinillia">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img key={slides[slideIndex].src} id="heroImage" src={slides[slideIndex].src} alt={slides[slideIndex].alt} fetchPriority="high" />
              <div className="hero-stamp">LE PACK<br /><strong>VINILLIA</strong><br />BEAUTY RITUAL</div>
              <div className="slider-controls" aria-label="Choisir le visuel du hero">
                {slides.map((slide, index) => <button key={slide.src} className={`slider-dot ${slideIndex === index ? "active" : ""}`} type="button" aria-label={`Visuel ${index + 1}`} aria-pressed={slideIndex === index} onClick={() => setSlideIndex(index)} />)}
              </div>
            </div>
          </div>
        </section>

        <section className="value-strip" aria-label="Les points forts du pack"><div className="container value-row"><div className="value-item"><ShieldCheck className="value-icon" size={25} aria-hidden="true" /><span><strong>Sélection beauté</strong><small>Un pack pensé pour vous</small></span></div><div className="value-item"><Gift className="value-icon" size={25} aria-hidden="true" /><span><strong>2 produits offerts</strong><small>Un cadeau dans votre pack</small></span></div><div className="value-item"><Truck className="value-icon" size={25} aria-hidden="true" /><span><strong>Commande facile</strong><small>Coordonnées en quelques étapes</small></span></div><div className="value-item"><RefreshCw className="value-icon" size={25} aria-hidden="true" /><span><strong>Confirmation rapide</strong><small>Notre équipe vous recontacte</small></span></div></div></section>

        <section className="section products-section" id="pack">
          <div className="container">
            <div className="section-heading"><span className="eyebrow">La sélection Vinillia</span><h2>Le pack beauté qui vous ressemble</h2><p>Six essentiels réunis dans une offre exclusive, avec deux produits offerts.</p></div>
            <div className="product-grid">{products.map((product) => <article className="product-card" key={product.number}><div className="product-image">{product.gift && <span className="gift-label">OFFERT</span>}{/* eslint-disable-next-line @next/next/no-img-element */}<img src={product.image} alt={product.alt} loading="lazy" /></div><div className="product-info"><small>{product.gift ? "Votre cadeau" : "Le pack"} · {product.number}</small><h3>{product.name}</h3><p>{product.description}</p></div></article>)}</div>
            <div className="bundle-summary"><div><strong>Le pack Vinillia — 6 produits</strong><p>4 produits sélectionnés + 2 produits offerts, selon la composition finale du pack.</p></div><div className="bundle-price">1 400 DH</div><a className="btn btn-gold" href="#commande">Je profite du pack <ArrowRight size={16} aria-hidden="true" /></a></div>
          </div>
        </section>

        <section className="offer" id="offre"><div className="container offer-grid">
          <div className="offer-art">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1000&q=85" alt="Ambiance beauté et skincare Vinillia" loading="lazy" /><span className="offer-art-badge">OFFRE PACK VINILLIA</span></div>
          <div className="offer-copy"><span className="eyebrow offer-eyebrow">Une offre pensée pour vous</span><h2>Six essentiels.<br />Un seul rituel.</h2><p>Retrouvez les six produits de votre sélection Vinillia dans un pack au prix unique de 1 400 DH.</p><div className="offer-points"><span>6 produits inclus</span><span>2 produits offerts</span><span>Commande facile</span><span>Routine à personnaliser</span></div><div className="offer-final"><strong>1 400 DH</strong><small>Prix du pack complet</small></div><a href="#commande" className="btn btn-gold">Commander maintenant <ArrowRight size={17} aria-hidden="true" /></a></div>
        </div></section>

        <section className="section before-after" id="resultats">
          <div className="container"><div className="section-heading"><span className="eyebrow">L’univers Vinillia</span><h2>Votre peau, votre histoire</h2><p>Un espace dédié aux visuels avant et après authentiques que vous ajouterez à la page.</p></div>
            <div className="ba-grid"><div className="ba-card">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80" alt="Visuel skincare à remplacer par une photo avant authentique" loading="lazy" /><span>AVANT</span></div><div className="ba-card">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=80" alt="Visuel skincare à remplacer par une photo après authentique" loading="lazy" /><span>APRÈS</span></div></div>
            <p className="ba-note">Visuels d’ambiance provisoires — remplacez-les par des photos authentiques et autorisées avant de présenter des résultats clients.</p>
          </div>
        </section>

        <section className="section" id="routine"><div className="container"><div className="section-heading"><span className="eyebrow">Simple &amp; agréable</span><h2>Votre routine en 3 étapes</h2><p>Une présentation claire, à adapter aux instructions réelles de vos produits.</p></div><div className="steps-grid"><article className="step"><div className="step-number">01</div><h3>Préparez</h3><p>Commencez avec le produit de préparation adapté à votre routine.</p></article><article className="step"><div className="step-number">02</div><h3>Appliquez</h3><p>Suivez l’ordre d’application et les conseils indiqués sur chaque produit.</p></article><article className="step"><div className="step-number">03</div><h3>Prenez soin de vous</h3><p>Adoptez une routine régulière en respectant les recommandations d’utilisation.</p></article></div></div></section>

        <section className="section order-section" id="commande"><div className="container order-grid">
          <div className="order-intro"><span className="eyebrow">Votre pack vous attend</span><h2>Prête à découvrir Vinillia ?</h2><p>Remplissez le formulaire avec vos coordonnées. Votre commande sera prête à être confirmée par l’équipe Vinillia.</p><div className="order-trust"><div><b><Check size={16} /></b><span>Un formulaire simple et rapide</span></div><div><b><Heart size={16} /></b><span>6 produits, dont 2 offerts</span></div><div><b><ArrowRight size={16} /></b><span>Pack au prix de 1 400 DH</span></div></div></div>
          <form className="order-card" onSubmit={handleSubmit} noValidate>
            <h3>Commander mon pack</h3><p className="form-sub">Renseignez vos informations pour préparer votre commande.</p>
            <div className="order-summary"><div><strong>Pack Vinillia</strong><small>6 produits · 2 offerts · Quantité : 1</small></div><strong>{PRICE.toLocaleString("fr-FR")} DH</strong></div>
            <div className={`field ${errors.name ? "invalid" : ""}`}><label htmlFor="fullName">Nom complet *</label><input id="fullName" name="fullName" autoComplete="name" placeholder="Ex. Salma El Amrani" value={name} onChange={(event) => setName(event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} required /><small className="error" id="name-error">{errors.name}</small></div>
            <div className={`field ${errors.phone ? "invalid" : ""}`}><label htmlFor="phone">Numéro de téléphone *</label><input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Ex. 06 12 34 56 78" value={phone} onChange={(event) => setPhone(event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} required /><small className="error" id="phone-error">{errors.phone}</small></div>
            <div className={`field ${errors.address ? "invalid" : ""}`}><label htmlFor="address">Adresse de livraison *</label><textarea id="address" name="address" autoComplete="street-address" placeholder="Ville, quartier, rue et détails de l’adresse" value={address} onChange={(event) => setAddress(event.target.value)} aria-invalid={Boolean(errors.address)} aria-describedby={errors.address ? "address-error" : undefined} required /><small className="error" id="address-error">{errors.address}</small></div>
            <p className="form-privacy">Vos informations sont destinées au traitement de votre commande. En envoyant ce formulaire, vous acceptez d’être contacté pour sa confirmation.</p>
            <button className="btn btn-gold submit-btn" type="submit" disabled={formState === "loading"}>{formState === "loading" ? "PRÉPARATION…" : "CONFIRMER MA COMMANDE"} <ArrowRight size={17} aria-hidden="true" /></button>
            {formMessage && <div className={`form-message ${formState === "success" ? "success" : "error-msg"}`} role="status" aria-live="polite">{formMessage}</div>}
          </form>
        </div></section>
      </main>

      <footer className="footer"><div className="container"><div className="footer-top">
        <div className="footer-intro"><a href="#accueil" className="brand"><span className="brand-name">Vinillia</span><span className="brand-sub">✦ BEAUTY &amp; SKINCARE ✦</span></a><p>Une parenthèse beauté, imaginée autour de votre rituel skincare.</p></div>
        <div><h4>Navigation</h4><div className="footer-links"><a href="#pack">Le pack</a><a href="#resultats">Avant / Après</a><a href="#routine">La routine</a><a href="#commande">Commander</a></div></div>
        <div><h4>Informations</h4><div className="footer-links"><a href="#confidentialite">Politique de confidentialité</a><a href="#conditions">Conditions générales</a><a href="mailto:contact@vinillia.example">Contact à configurer</a></div></div>
      </div><div className="footer-bottom"><span>© {year ?? "2026"} Vinillia Beauty &amp; Skincare. Tous droits réservés.</span><span>Beauty, with a signature.</span></div></div></footer>
      <div className="mobile-cta" id="mobileCta"><div><span className="mobile-small">Le pack Vinillia</span><span className="mobile-price">1 400 DH</span></div><a className="btn btn-gold" href="#commande">Commander <ArrowRight size={15} aria-hidden="true" /></a></div>
    </>
  );
}
