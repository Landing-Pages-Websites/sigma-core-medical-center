import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages/service-detail-page";
import { SPINAL_DECOMPRESSION_PAGE } from "@/content/pages";

export const metadata: Metadata = {
  title: "Spinal Decompression Therapy",
  description:
    "Learn how a consultation about spinal decompression therapy may help clarify next steps for back and neck concerns at Sigma Core Medical Center.",
};

export default function SpinalDecompressionPage(): React.ReactElement {
  return <ServiceDetailPage data={SPINAL_DECOMPRESSION_PAGE} />;
}
