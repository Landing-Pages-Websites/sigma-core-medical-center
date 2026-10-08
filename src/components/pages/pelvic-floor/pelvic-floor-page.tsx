import { PelvicBooking } from "@/components/pages/pelvic-floor/pelvic-booking";
import { PelvicDecisionFactors } from "@/components/pages/pelvic-floor/pelvic-decision-factors";
import { PelvicExpect } from "@/components/pages/pelvic-floor/pelvic-expect";
import { PelvicFaq } from "@/components/pages/pelvic-floor/pelvic-faq";
import { PelvicHero } from "@/components/pages/pelvic-floor/pelvic-hero";
import { PelvicOrientation } from "@/components/pages/pelvic-floor/pelvic-orientation";
import { PelvicSources } from "@/components/pages/pelvic-floor/pelvic-sources";

export function PelvicFloorPage(): React.ReactElement {
  return (
    <main className="overflow-hidden bg-navy">
      <PelvicHero />
      <PelvicOrientation />
      <PelvicDecisionFactors />
      <PelvicExpect />
      <PelvicFaq />
      <PelvicBooking />
      <PelvicSources />
    </main>
  );
}
