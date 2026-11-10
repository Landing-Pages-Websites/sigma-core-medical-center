import type { Metadata } from "next";
import { HeroB } from "@/components/variant-b/hero";
import { NeuropathyB } from "@/components/variant-b/neuropathy";
import { ServicesB } from "@/components/variant-b/services";
import { PlaceOfCareB } from "@/components/variant-b/place-of-care";
import { InformedPathB } from "@/components/variant-b/informed-path";
import { TwoWaysB } from "@/components/variant-b/two-ways";
import { FaqLocationB } from "@/components/variant-b/faq-location";
import { SiteFooterB } from "@/components/variant-b/site-footer";
import { medicalBusinessJsonLd } from "@/content/seo";
import { JsonLd } from "@/components/shared/json-ld";

import { ScrollProgress } from "@/components/shared/scroll-progress";
import { BackToTop } from "@/components/shared/back-to-top";

export const metadata: Metadata = {
  title: "Integrative Medical Center in Richmond, VA | Sigma Core",
  description: "Integrative care in Richmond, VA for movement, pain, recovery, hormone health, and longevity. Schedule a consultation to discuss your goals.",
};

export default function HomePage(): React.ReactElement {
  return (
    <>
      <JsonLd data={medicalBusinessJsonLd()} />
      <ScrollProgress />
      <main>
        <HeroB />
        <NeuropathyB />
        <ServicesB />
        <PlaceOfCareB />
        <InformedPathB />
        <TwoWaysB />
        <FaqLocationB />
      </main>
      <SiteFooterB />
      <BackToTop />
    </>
  );
}
