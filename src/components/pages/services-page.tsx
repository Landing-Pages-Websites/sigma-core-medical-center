import { ChooseNextStep } from "@/components/pages/services/choose-next-step";
import { NeuropathyFeature } from "@/components/pages/services/neuropathy-feature";
import { ServiceNavigation } from "@/components/pages/services/service-navigation";
import { ServicesBookingCta } from "@/components/pages/services/services-booking-cta";
import { ServicesHero } from "@/components/pages/services/services-hero";

export function ServicesPage(): React.ReactElement {
  return (
    <main className="overflow-hidden bg-navy">
      <ServicesHero />
      <NeuropathyFeature />
      <ServiceNavigation />
      <ChooseNextStep />
      <ServicesBookingCta />
    </main>
  );
}
