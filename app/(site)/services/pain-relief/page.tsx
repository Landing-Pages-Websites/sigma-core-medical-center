import type { Metadata } from "next";
import { PainReliefPage } from "@/components/pages/pain-relief-page";
import { JsonLd } from "@/components/shared/json-ld";
import { serviceJsonLd } from "@/content/seo";

const PAIN_RELIEF_DESCRIPTION = "Explore Richmond-area pain relief information for knee, low-back, neck, and joint concerns at Sigma Core Medical Center.";

export const metadata: Metadata = {
  title: "Pain Relief in Richmond, VA",
  description: PAIN_RELIEF_DESCRIPTION,
};

export default function PainReliefRoute(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          slug: "pain-relief",
          name: "Pain Relief in Richmond, VA",
          serviceType: "Pain relief care",
          description: PAIN_RELIEF_DESCRIPTION,
        })}
      />
      <PainReliefPage />
    </>
  );
}
