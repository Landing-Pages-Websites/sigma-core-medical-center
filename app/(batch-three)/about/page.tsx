import type { Metadata } from "next";
import localFont from "next/font/local";
import { AboutHero } from "@/components/batch-three/about/hero";
import { AboutPurpose } from "@/components/batch-three/about/purpose";
import { AboutGallery } from "@/components/batch-three/about/gallery";
import { AboutPrinciples } from "@/components/batch-three/about/principles";
import { AboutTeam } from "@/components/batch-three/about/team";
import { AboutBooking } from "@/components/batch-three/about/booking";
import "./about.css";

const aboutFont = localFont({
  src: [
    { path: "../../fonts/SourceSans3-400.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/SourceSans3-600.woff2", weight: "600", style: "normal" },
    { path: "../book/fonts/SourceSans3-700.woff2", weight: "700", style: "normal" },
    { path: "../book/fonts/SourceSans3-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-about",
  display: "swap",
});

export const metadata: Metadata = {
  title: "About Our Center in Richmond, VA",
  description: "Learn about Sigma Core Medical Center's purpose and care principles for the Richmond area. Team and location details await verification.",
  robots: { index: false, follow: true },
};

export default function AboutPage(): React.ReactElement {
  return <main className={`about-page ${aboutFont.variable}`}><AboutHero /><AboutPurpose /><AboutGallery /><AboutPrinciples /><AboutTeam /><AboutBooking /></main>;
}
