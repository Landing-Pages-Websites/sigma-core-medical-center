import { AboutBookingCta } from "@/components/pages/about-booking-cta";
import { AboutHero } from "@/components/pages/about/about-hero";
import { CarePrinciples } from "@/components/pages/about/care-principles";
import { ClinicPurpose } from "@/components/pages/about/clinic-purpose";
import { FacilityGallery } from "@/components/pages/about/facility-gallery";
import { GroundedPrinciples } from "@/components/pages/about/grounded-principles";
import { TeamPublicationGate } from "@/components/pages/about/team-publication-gate";

export function AboutPage(): React.ReactElement {
  return (
    <main className="overflow-hidden bg-navy">
      <AboutHero />
      <ClinicPurpose />
      <GroundedPrinciples />
      <FacilityGallery />
      <CarePrinciples />
      <TeamPublicationGate />
      <AboutBookingCta />
    </main>
  );
}
