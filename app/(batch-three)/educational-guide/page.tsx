import type { Metadata } from "next";
import { GuideHero } from "@/components/batch-three/educational-guide/hero";
import { GuideSummary } from "@/components/batch-three/educational-guide/summary";
import { GuideAvailability } from "@/components/batch-three/educational-guide/availability";
import { GuidePrivacy } from "@/components/batch-three/educational-guide/privacy";
export const metadata: Metadata = { title: "Educational Guide Status — Sigma Core", description: "The Sigma Core educational resource is pending approval and is not available for download. Explore other Richmond-area care information while it is prepared.", robots: { index: false, follow: true } };
export default function EducationalGuidePage(): React.ReactElement {
  return <main className="b3"><GuideHero /><GuideSummary /><GuideAvailability /><GuidePrivacy /></main>;
}
