import type { Metadata } from "next";
import { UtilityPage } from "@/components/utility/utility-page";
import { UTILITY_DOCUMENTS } from "@/content/utility-documents";

export const metadata: Metadata = { title: "Accessibility", description: "The Sigma Core accessibility statement and assistance contact are pending review and verification. Check their status here.", robots: { index: false, follow: true } };

export default function AccessibilityPage(): React.ReactElement {
  return <UtilityPage document={UTILITY_DOCUMENTS.accessibility} />;
}
