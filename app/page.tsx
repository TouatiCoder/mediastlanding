import type { Metadata } from "next";
import LandingIndexPage from "./landing-index";

export const metadata: Metadata = {
  title: "VINILLIA | Landing Pages",
  description: "Accédez aux landing pages VINILLIA et choisissez votre version.",
  robots: { index: false, follow: false },
};

export default function HomePage() {
  return <LandingIndexPage />;
}
