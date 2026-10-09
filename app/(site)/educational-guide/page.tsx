import type { Metadata } from "next";
import { EducationalGuidePage } from "@/components/pages/educational-guide-page";

export const metadata: Metadata = {
  title: "Educational Guide",
  description: "Learn about the planned Sigma Core educational guide and its approval and privacy boundaries.",
  robots: { index: false, follow: true },
};

export default function EducationalGuideRoute(): React.ReactElement {
  return <EducationalGuidePage />;
}
