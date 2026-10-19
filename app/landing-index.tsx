"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import landingOnePreview from "./landing_1/assets/banner fr.jpg";
import landingTwoPreview from "./landing_2/assets/banner fr.jpg";
import styles from "./home.module.css";

type Language = "fr" | "ar";

const copy = {
  fr: {
    eyebrow: "ESPACE VINILLIA",
    title: "Vos landing pages, réunies.",
    description: "Choisissez la page que vous souhaitez consulter ou modifier.",
    original: "Version actuelle",
    working: "Nouvelle version",
    originalDescription: "La landing page VINILLIA sauvegardée avec ses images.",
    workingDescription: "Votre copie de travail pour préparer la prochaine campagne.",
    open: "Ouvrir la page",
    language: "Langue",
  },
  ar: {
    eyebrow: "مساحة VINILLIA",
    title: "صفحات الهبوط ديالكم فبلاصة وحدة.",
    description: "اختاري الصفحة اللي بغيتي تشوفي أو تعدّلي.",
    original: "النسخة الحالية",
    working: "النسخة الجديدة",
    originalDescription: "صفحة VINILLIA محفوظة مع الصور ديالها.",
    workingDescription: "نسخة عمل باش توجدي الحملة الجاية.",
    open: "افتحي الصفحة",
    language: "اللغة",
  },
} satisfies Record<Language, Record<string, string>>;

const pages = [
  { id: "landing_1", href: "/landing_1", image: landingOnePreview },
  { id: "landing_2", href: "/landing_2", image: landingTwoPreview },
] as const;

export default function LandingIndexPage() {
  const [language, setLanguage] = useState<Language>("fr");
  const isArabic = language === "ar";
  const text = copy[language];

  useEffect(() => {
    try {
      const saved = localStorage.getItem("vinillia_lang");
      if (saved === "fr" || saved === "ar") setLanguage(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    try {
      localStorage.setItem("vinillia_lang", language);
    } catch {}
  }, [language, isArabic]);

  return (
    <main className={styles.page} lang={language} dir={isArabic ? "rtl" : "ltr"}>
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark} aria-label="VINILLIA">
          VINILLIA<span>BEAUTY</span>
        </Link>
        <div className={styles.languageSwitch} role="group" aria-label={text.language}>
          <button type="button" onClick={() => setLanguage("fr")} aria-pressed={!isArabic}>FR</button>
          <button type="button" onClick={() => setLanguage("ar")} aria-pressed={isArabic}>AR</button>
        </div>
      </header>

      <section className={styles.content} aria-labelledby="landing-index-title">
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{text.eyebrow}</span>
          <h1 id="landing-index-title">{text.title}</h1>
          <p>{text.description}</p>
        </div>

        <div className={styles.cards}>
          {pages.map((page, index) => (
            <article className={styles.card} key={page.id}>
              <Link href={page.href} className={styles.preview} aria-label={`${text.open} ${page.id}`}>
                <Image src={page.image} alt="" fill sizes="(max-width: 760px) 100vw, 46vw" />
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              </Link>
              <div className={styles.cardInfo}>
                <div>
                  <span className={styles.cardLabel}>{index === 0 ? text.original : text.working}</span>
                  <h2>{page.id}</h2>
                  <p>{index === 0 ? text.originalDescription : text.workingDescription}</p>
                </div>
                <Link href={page.href} className={styles.openLink}>
                  {text.open}<span aria-hidden="true">{isArabic ? "←" : "→"}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
