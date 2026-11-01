import type { Metadata } from "next";
import { UtilityPage } from "@/components/utility/utility-page";
import { UTILITY_DOCUMENTS } from "@/content/utility-documents";

export const metadata: Metadata = { title: "Accessibility", description: "How to request assistance or report an accessibility barrier on the Sigma Core Medical Center website by phone, email or mail.", robots: { index: false, follow: true } };

export default function AccessibilityPage(): React.ReactElement {
  return <UtilityPage document={UTILITY_DOCUMENTS.accessibility} />;
}
