import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "VINILLIA Beauty — La sélection beauté, 1 400 MAD";
const description =
  "Découvrez la sélection VINILLIA : 6 soins AXIS-Y et 2 cadeaux Vaseline pour 1 400 MAD. Commande simple et paiement à la livraison au Maroc.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "VINILLIA Beauty",
  openGraph: {
    title,
    description,
    type: "website",
    locale: "fr_MA",
    siteName: "VINILLIA Beauty",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f8f3ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
