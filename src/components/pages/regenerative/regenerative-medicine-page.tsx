import { RegenerativeBooking } from "@/components/pages/regenerative/regenerative-booking";
import { RegenerativeDecisionFactors } from "@/components/pages/regenerative/regenerative-decision-factors";
import { RegenerativeFaq } from "@/components/pages/regenerative/regenerative-faq";
import { RegenerativeHero } from "@/components/pages/regenerative/regenerative-hero";
import { RegenerativeOrientation } from "@/components/pages/regenerative/regenerative-orientation";
import { RegenerativeQuestions } from "@/components/pages/regenerative/regenerative-questions";
import { RegenerativeSources } from "@/components/pages/regenerative/regenerative-sources";

export function RegenerativeMedicinePage(): React.ReactElement {
  return (
    <main className="overflow-hidden bg-navy">
      <RegenerativeHero />
      <RegenerativeOrientation />
      <RegenerativeQuestions />
      <RegenerativeDecisionFactors />
      <RegenerativeFaq />
      <RegenerativeBooking />
      <RegenerativeSources />
    </main>
  );
}
