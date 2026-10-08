import { GuideHero } from "@/components/pages/educational-guide/guide-hero";
import { LeadFormSection } from "@/components/pages/educational-guide/lead-form-section";
import { PrivacyNote } from "@/components/pages/educational-guide/privacy-note";
import { ResourceSummary } from "@/components/pages/educational-guide/resource-summary";

export function EducationalGuidePage(): React.ReactElement {
  return (
    <main className="overflow-hidden bg-navy">
      <GuideHero />
      <ResourceSummary />
      <LeadFormSection />
      <PrivacyNote />
    </main>
  );
}
