import type { Metadata } from "next";
import { EducationalGuidePage } from "@/components/pages/educational-guide-page";

export const metadata: Metadata = {
  title: "Educational Guide",
  description: "Get the Neuropathy Clarity Scorecard: a 4-page PDF workbook with a 7-minute self-assessment and 7-day symptom tracker, available after you share your contact details.",
  robots: { index: false, follow: true },
};

export default function EducationalGuideRoute(): React.ReactElement {
  return <EducationalGuidePage />;
}
