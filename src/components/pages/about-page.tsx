import { AboutBookingCta } from "@/components/pages/about-booking-cta";
import { AboutHero } from "@/components/pages/about/about-hero";
import { CarePrinciples } from "@/components/pages/about/care-principles";
import { ClinicPurpose } from "@/components/pages/about/clinic-purpose";
import { FacilityGallery } from "@/components/pages/about/facility-gallery";
import { GroundedPrinciples } from "@/components/pages/about/grounded-principles";
import { DoctorTrustModule } from "@/components/pages/doctor-trust-module";

export function AboutPage(): React.ReactElement {
  return (
    <main className="overflow-hidden bg-navy">
      <AboutHero />
      <ClinicPurpose />
      <GroundedPrinciples />
      <FacilityGallery />
      <CarePrinciples />
      <DoctorTrustModule />
      <AboutBookingCta />
    </main>
  );
}
