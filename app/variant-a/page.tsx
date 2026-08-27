import type { Metadata } from "next";
import { HeroA } from "@/components/variant-a/hero";
import { NeuropathyA } from "@/components/variant-a/neuropathy";
import { ServicesA } from "@/components/variant-a/services";
import { PlaceOfCareA } from "@/components/variant-a/place-of-care";
import { InformedPathA } from "@/components/variant-a/informed-path";
import { TwoWaysA } from "@/components/variant-a/two-ways";
import { FaqLocationA } from "@/components/variant-a/faq-location";
import { SiteFooterA } from "@/components/variant-a/site-footer";
import { VariantAMotionA } from "@/components/variant-a/variant-a-motion";
import styles from "@/components/variant-a/variant-a.module.css";
import { SITE_DESCRIPTION } from "@/content/site";

export const metadata: Metadata = {
  title: "Direction A — Life in Motion",
  description: SITE_DESCRIPTION,
};

export default function VariantAPage(): React.ReactElement {
  return (
    <div className={styles.motionRoot} data-variant-a-root>
      <VariantAMotionA />
      <main className="overflow-hidden bg-surface">
        <HeroA />
        <NeuropathyA />
        <ServicesA />
        <PlaceOfCareA />
        <InformedPathA />
        <TwoWaysA />
        <FaqLocationA />
      </main>
      <SiteFooterA />
    </div>
  );
}
