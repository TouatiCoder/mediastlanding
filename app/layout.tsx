import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinillia Beauty & Skincare — Pack Beauté",
  description:
    "Découvrez le pack Vinillia Beauty & Skincare : 8 produits, dont 2 offerts, à 1 400 DH. Paiement à la livraison au Maroc.",
  applicationName: "Vinillia Beauty & Skincare",
  openGraph: {
    title: "Vinillia Beauty & Skincare — Pack Beauté",
    description:
      "Huit produits beauté réunis dans un pack exclusif à 1 400 DH, dont deux produits offerts. Paiement à la livraison au Maroc.",
    type: "website",
    locale: "fr_MA",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
