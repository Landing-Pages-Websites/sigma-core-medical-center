import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages/service-detail-page";
import { BIOIDENTICAL_HRT_PAGE } from "@/content/bioidentical-hrt";

export const metadata: Metadata = {
  title: "Bioidentical Hormone Replacement Therapy | Sigma Core",
  description: BIOIDENTICAL_HRT_PAGE.intro,
};

export default function BioidenticalHrtPage(): React.ReactElement {
  return <ServiceDetailPage data={BIOIDENTICAL_HRT_PAGE} />;
}
