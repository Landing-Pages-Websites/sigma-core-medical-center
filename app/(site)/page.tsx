import { HeroB } from "@/components/variant-b/hero";
import { NeuropathyB } from "@/components/variant-b/neuropathy";
import { ServicesB } from "@/components/variant-b/services";
import { PlaceOfCareB } from "@/components/variant-b/place-of-care";
import { InformedPathB } from "@/components/variant-b/informed-path";
import { TwoWaysB } from "@/components/variant-b/two-ways";
import { FaqLocationB } from "@/components/variant-b/faq-location";

export default function HomePage(): React.ReactElement {
  return (
    <main>
      <HeroB />
      <NeuropathyB />
      <ServicesB />
      <PlaceOfCareB />
      <InformedPathB />
      <TwoWaysB />
      <FaqLocationB />
    </main>
  );
}
