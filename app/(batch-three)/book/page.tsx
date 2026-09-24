import type { Metadata } from "next";
import { BookHero } from "@/components/batch-three/book/hero";
import { BookCalendar } from "@/components/batch-three/book/calendar";
import { BookPrivacy } from "@/components/batch-three/book/privacy";
export const metadata: Metadata = { title: "Appointment Booking Status", description: "Sigma Core's scheduling calendar is not yet connected. Check the current booking status and explore Richmond-area care information.", robots: { index: false, follow: true } };
export default function BookPage(): React.ReactElement {
  return <main className="b3"><BookHero /><BookCalendar /><BookPrivacy /></main>;
}
