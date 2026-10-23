import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages/service-detail-page";
import { CLASS_IV_LASER_PAGE } from "@/content/pages";

export const metadata: Metadata = {
  title: "Class IV Laser Therapy",
  description: CLASS_IV_LASER_PAGE.intro,
};

export default function ClassIVLaserTherapyPage(): React.ReactElement {
  return <ServiceDetailPage data={CLASS_IV_LASER_PAGE} />;
}
