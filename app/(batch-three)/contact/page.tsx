import type { Metadata } from "next";
import { ContactHero } from "@/components/batch-three/contact/hero";
import { ContactDetails } from "@/components/batch-three/contact/details";
import { ContactFacility } from "@/components/batch-three/contact/facility";
import { ContactBooking } from "@/components/batch-three/contact/booking";
export const metadata: Metadata = { title: "Contact & Location Updates — Sigma Core Richmond", description: "Sigma Core serves the Richmond, Virginia area. Exact address, contact details, and appointment scheduling are pending verification." };
export default function ContactPage(): React.ReactElement {
  return <main className="b3"><ContactHero /><ContactDetails /><ContactFacility /><ContactBooking /></main>;
}
