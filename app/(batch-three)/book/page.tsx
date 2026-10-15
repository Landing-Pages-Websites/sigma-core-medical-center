import type { Metadata } from "next";
import { BookHero } from "@/components/batch-three/book/hero";
import { BookCalendar } from "@/components/batch-three/book/calendar";
import { BookPrivacy } from "@/components/batch-three/book/privacy";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Book your appointment with Sigma Core Medical Center in the Richmond, Virginia area through our secure scheduling calendar.",
  robots: { index: false, follow: true },
};

export default function BookPage(): React.ReactElement {
  return <main className="overflow-hidden bg-navy"><BookHero /><BookCalendar /><BookPrivacy /></main>;
}
