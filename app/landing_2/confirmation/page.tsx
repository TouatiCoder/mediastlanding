import Link from "next/link";

type ConfirmationPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const { lang } = await searchParams;
  const isArabic = lang === "ar";

  return (
    <main
      lang={isArabic ? "ar" : "fr"}
      dir={isArabic ? "rtl" : "ltr"}
      className="flex min-h-screen items-center justify-center bg-[#fff9f6] px-4 py-12 text-[#292326]"
    >
      <section className="w-full max-w-xl rounded-[32px] border border-[#ead9d9] bg-white px-6 py-10 text-center shadow-float sm:px-12 sm:py-14">
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#f1f4f0] text-[#65745e]">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c97f91]">
          VINILLIA BEAUTY
        </p>
        <h1 className="mb-4 font-serif-custom text-3xl font-bold text-[#702b43] sm:text-4xl">
          {isArabic ? "شكراً على طلبك!" : "Merci pour votre commande !"}
        </h1>
        <p className="mx-auto max-w-md text-base leading-8 text-[#81777a]">
          {isArabic
            ? "تم تسجيل طلبك بنجاح. سيتصل بك فريقنا قريباً لتأكيد التفاصيل."
            : "Votre commande a bien été enregistrée. Notre équipe vous appellera bientôt pour confirmer les détails."}
        </p>
        <p className="mt-3 text-sm font-semibold text-[#702b43]">
          {isArabic ? "الأداء عند الاستلام" : "Paiement à la livraison"}
        </p>

        <Link
          href="/landing_2"
          className="btn-premium mt-9 inline-flex items-center justify-center rounded-2xl px-7 py-4 text-sm font-bold"
        >
          {isArabic ? "العودة إلى الصفحة الرئيسية" : "Retour à la page d’accueil"}
        </Link>
      </section>
    </main>
  );
}
