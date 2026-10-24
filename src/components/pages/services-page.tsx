import { ContactBooking } from "@/components/batch-three/contact/booking";
import { ChooseNextStep } from "@/components/pages/services/choose-next-step";
import { NeuropathyFeature } from "@/components/pages/services/neuropathy-feature";
import { ServiceNavigation } from "@/components/pages/services/service-navigation";
import { ConsultationCta } from "@/components/pages/consultation-cta" from "@/components/pages/services/services-booking-cta";
import { ServicesHero } from "@/components/pages/services/services-hero";

export function ServicesPage(): React.ReactElement {
  return (
    <main className="overflow-hidden bg-navy">
      <ServicesHero />
      <NeuropathyFeature />
      <ServiceNavigation />
      <ChooseNextStep />
      <ConsultationCta />
      <div className="b3">
        <ContactBooking />
      </div>
    </main>
  );
}
