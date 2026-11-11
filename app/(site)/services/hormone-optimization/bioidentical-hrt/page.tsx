import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages/service-detail-page";
import { BIOIDENTICAL_HRT_PAGE } from "@/content/bioidentical-hrt";

export const metadata: Metadata = {
  title: { absolute: "Bioidentical HRT in Richmond, VA | Sigma Core" },
  description:
    "Learn about bioidentical hormone replacement therapy in Richmond, VA and Sigma Core's consultation-led evaluation to discuss whether it may fit your goals.",
};

export default function BioidenticalHrtPage(): React.ReactElement {
  return <ServiceDetailPage data={BIOIDENTICAL_HRT_PAGE} />;
}
