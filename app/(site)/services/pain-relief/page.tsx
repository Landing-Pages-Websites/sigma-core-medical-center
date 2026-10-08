import type { Metadata } from "next";
import { PainReliefPage } from "@/components/pages/pain-relief-page";

export const metadata: Metadata = {
  title: "Pain Relief",
  description: "General orientation for knee, low-back, neck, mobility, and persistent-pain concerns at Sigma Core Medical Center.",
};

export default function PainReliefRoute(): React.ReactElement {
  return <PainReliefPage />;
}
