import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services-page";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Sigma Core services for neuropathy, pain relief, hormone health, pelvic-floor concerns, and regenerative goals.",
};

export default function ServicesRoute(): React.ReactElement {
  return <ServicesPage />;
}
