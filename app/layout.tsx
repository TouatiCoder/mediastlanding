import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinillia Beauty & Skincare — Pack Beauté",
  description:
    "Découvrez le pack Vinillia Beauty & Skincare : 6 produits, dont 2 offerts, à 1 400 DH.",
  applicationName: "Vinillia Beauty & Skincare",
  openGraph: {
    title: "Vinillia Beauty & Skincare — Pack Beauté",
    description:
      "Six essentiels beauté réunis dans un pack exclusif à 1 400 DH, dont deux produits offerts.",
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
