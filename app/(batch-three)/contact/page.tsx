import type { Metadata } from "next";
import { ContactHero } from "@/components/batch-three/contact/hero";
import { ContactDetails } from "@/components/batch-three/contact/details";
import { ContactFacility } from "@/components/batch-three/contact/facility";
import { ContactBooking } from "@/components/batch-three/contact/booking";
import "@/components/batch-three/contact/facility.css";
import "@/components/batch-three/contact/booking.css";
export const metadata: Metadata = {
  title: "Contact & location status — Richmond, VA area",
  description: "Sigma Core Medical Center serves the Richmond, Virginia area. The public address and direct contact details are pending confirmation.",
  robots: { index: false, follow: true },
};
export default function ContactPage(): React.ReactElement {
  return <main className="b3"><ContactHero /><ContactDetails /><ContactFacility /><ContactBooking /></main>;
}
