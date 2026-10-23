import type { Metadata } from "next";
import { PainReliefPage } from "@/components/pages/pain-relief-page";

export const metadata: Metadata = {
  title: "Pain Relief in Richmond, VA",
  description: "Explore Richmond-area pain relief information for knee, low-back, neck, and joint concerns at Sigma Core Medical Center.",
};

export default function PainReliefRoute(): React.ReactElement {
  return <PainReliefPage />;
}
