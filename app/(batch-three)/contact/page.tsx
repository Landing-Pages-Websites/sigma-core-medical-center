import type { Metadata } from "next";
import { ContactHero } from "@/components/batch-three/contact/hero";
import { ContactDetails } from "@/components/batch-three/contact/details";
import { ContactFacility } from "@/components/batch-three/contact/facility";
import { ContactBooking } from "@/components/batch-three/contact/booking";

export const metadata: Metadata = {
  title: "Contact — Richmond, VA area",
  description: "Visit Sigma Core Medical Center in the Richmond, Virginia area. Final location details are being reconfirmed before opening.",
  robots: { index: false, follow: true },
};

export default function ContactPage(): React.ReactElement {
  return <main className="overflow-hidden bg-navy"><ContactHero /><ContactDetails /><ContactFacility /><ContactBooking /></main>;
}
