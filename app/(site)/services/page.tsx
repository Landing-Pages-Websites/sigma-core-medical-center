import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services-page";

import "@/components/batch-three/contact/contact.css";
import "@/components/batch-three/contact/booking.css";

export const metadata: Metadata = {
  title: "Medical Services in Richmond, VA",
  description: "Explore pain relief, neuropathy, hormone, pelvic floor, regenerative, and laser services in Richmond, VA. Start with an informed consultation.",
};

export default function ServicesRoute(): React.ReactElement {
  return <ServicesPage />;
}
