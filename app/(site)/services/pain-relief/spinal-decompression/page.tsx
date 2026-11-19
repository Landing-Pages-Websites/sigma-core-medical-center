import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages/service-detail-page";
import { SPINAL_DECOMPRESSION_PAGE } from "@/content/pages";
import { JsonLd } from "@/components/shared/json-ld";
import { serviceJsonLd } from "@/content/seo";

export const metadata: Metadata = {
  title: "Spinal Decompression Therapy",
  description:
    "Learn how a consultation about spinal decompression therapy may help clarify next steps for back and neck concerns at Sigma Core Medical Center.",
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
