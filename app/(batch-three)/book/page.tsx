import type { Metadata } from "next";
import localFont from "next/font/local";
import { BookHero } from "@/components/batch-three/book/hero";
import { BookCalendar } from "@/components/batch-three/book/calendar";
import { BookPrivacy } from "@/components/batch-three/book/privacy";
import "@/components/batch-three/book/book.css";

const bookHeadings = localFont({
  src: [
    { path: "./fonts/SourceSans3-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/SourceSans3-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-book-headings",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Appointment scheduling",
  description: "Online booking is not yet available. Explore Sigma Core service information and contact status.",
  robots: { index: false, follow: true },
};

export default function BookPage(): React.ReactElement {
  return <main className={`book-page ${bookHeadings.variable}`}><BookHero /><BookCalendar /><BookPrivacy /></main>;
}
