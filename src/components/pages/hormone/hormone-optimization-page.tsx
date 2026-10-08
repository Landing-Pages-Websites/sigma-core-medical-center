import { HormoneBookingCta } from "@/components/pages/hormone/hormone-booking-cta";
import { HormoneDecisionFactors } from "@/components/pages/hormone/hormone-decision-factors";
import { HormoneFaq } from "@/components/pages/hormone/hormone-faq";
import { HormoneHero } from "@/components/pages/hormone/hormone-hero";
import { HormoneSources } from "@/components/pages/hormone/hormone-sources";
import { ResponsibleNextStep } from "@/components/pages/hormone/responsible-next-step";
import { VisitorOrientation } from "@/components/pages/hormone/visitor-orientation";

export function HormoneOptimizationLanding(): React.ReactElement {
  return (
    <main className="overflow-hidden bg-surface text-ink">
      <HormoneHero />
      <VisitorOrientation />
      <HormoneDecisionFactors />
      <ResponsibleNextStep />
      <HormoneFaq />
      <HormoneBookingCta />
      <HormoneSources />
    </main>
  );
}
