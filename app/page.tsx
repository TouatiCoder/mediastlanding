import type { Metadata } from "next";
import LandingIndexPage from "./landing-index";

export const metadata: Metadata = {
  title: "VINILLIA | Landing pages",
  description: "Choisissez une landing page VINILLIA à consulter ou à modifier.",
};

export default function HomePage() {
  return <LandingIndexPage />;
}
