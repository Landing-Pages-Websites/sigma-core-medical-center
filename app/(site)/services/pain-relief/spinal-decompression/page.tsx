import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages/service-detail-page";
import { SPINAL_DECOMPRESSION_PAGE } from "@/content/pages";
import { JsonLd } from "@/components/shared/json-ld";
import { serviceJsonLd } from "@/content/seo";

export const metadata: Metadata = {
  title: { absolute: "Spinal Decompression Therapy in Richmond, VA | Sigma Core" },
  description:
    "Explore spinal decompression therapy in Richmond, VA through a consultation about back and neck concerns, goals, risks, and next steps at Sigma Core Medical Center.",
};

export default function SpinalDecompressionPage(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          slug: "pain-relief/spinal-decompression",
          name: "Spinal decompression therapy",
          serviceType: "Spinal decompression therapy",
          description: SPINAL_DECOMPRESSION_PAGE.intro,
        })}
      />
      <ServiceDetailPage data={SPINAL_DECOMPRESSION_PAGE} />
    </>
  );
}
