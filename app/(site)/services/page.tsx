import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services-page";

import "@/components/batch-three/contact/contact.css";
import "@/components/batch-three/contact/booking.css";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Sigma Core services for neuropathy, pain relief, hormone health, pelvic-floor concerns, and regenerative goals in the Richmond area.",
};

export default function ServicesRoute(): React.ReactElement {
  return <ServicesPage />;
}
