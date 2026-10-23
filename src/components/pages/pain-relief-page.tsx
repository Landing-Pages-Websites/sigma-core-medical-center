import { PainBooking } from "@/components/pages/pain-relief/pain-booking";
import { PainConcernSection } from "@/components/pages/pain-relief/pain-concern-section";
import { PainDecisionFactors } from "@/components/pages/pain-relief/pain-decision-factors";
import { PainFaq } from "@/components/pages/pain-relief/pain-faq";
import { PainHero } from "@/components/pages/pain-relief/pain-hero";
import { PainKneeSection } from "@/components/pages/pain-relief/pain-knee-section";
import { PainNavigation } from "@/components/pages/pain-relief/pain-navigation";
import { PainSources } from "@/components/pages/pain-relief/pain-sources";
import { DoctorTrustModule } from "@/components/pages/doctor-trust-module";

export function PainReliefPage(): React.ReactElement {
  return (
    <main className="overflow-hidden">
      <PainHero />
      <DoctorTrustModule compact />
      <PainNavigation />
      <PainKneeSection />
      <PainConcernSection concern="low-back" />
      <PainConcernSection concern="neck" />
      <PainDecisionFactors />
      <PainFaq />
      <PainBooking />
      <PainSources />
    </main>
  );
}
