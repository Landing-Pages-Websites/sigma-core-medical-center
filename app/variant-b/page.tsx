import type { Metadata } from "next";
import { HeroB } from "@/components/variant-b/hero";
import { NeuropathyB } from "@/components/variant-b/neuropathy";
import { ServicesB } from "@/components/variant-b/services";
import { PlaceOfCareB } from "@/components/variant-b/place-of-care";
import { InformedPathB } from "@/components/variant-b/informed-path";
import { TwoWaysB } from "@/components/variant-b/two-ways";
import { FaqLocationB } from "@/components/variant-b/faq-location";
import { SiteFooterB } from "@/components/variant-b/site-footer";
import { VariantBMotion } from "@/components/variant-b/motion";
import { SITE_DESCRIPTION } from "@/content/site";

export const metadata: Metadata = {
  title: "Direction B — The Forward Standard",
  description: SITE_DESCRIPTION,
};

export default function VariantBPage(): React.ReactElement {
  return (
    <VariantBMotion>
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
    </VariantBMotion>
  );
}
