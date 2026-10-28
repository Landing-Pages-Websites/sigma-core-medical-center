import type { Metadata } from "next";
import { ContactHero } from "@/components/batch-three/contact/hero";
import { ContactDetails } from "@/components/batch-three/contact/details";
import { ContactFacility } from "@/components/batch-three/contact/facility";
import { ContactBooking } from "@/components/batch-three/contact/booking";

import "@/components/batch-three/contact/facility.css";
import "@/components/batch-three/contact/booking.css";

export const metadata: Metadata = {
  title: "Contact — Richmond, VA area",
  description: "Contact Sigma Core Medical Center at 9020 Stony Point Pkwy #100, Richmond, VA 23235. Call 804-486-7699 or email front.desk@sigmacoremedicalcenter.com.",
  robots: { index: false, follow: true },
};

export default function ContactPage(): React.ReactElement {
  return <main className="b3 overflow-hidden bg-navy"><ContactHero /><ContactDetails /><ContactFacility /><ContactBooking /></main>;
}
