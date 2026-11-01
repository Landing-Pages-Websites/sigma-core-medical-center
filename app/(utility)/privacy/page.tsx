import type { Metadata } from "next";
import { UtilityPage } from "@/components/utility/utility-page";
import { UTILITY_DOCUMENTS } from "@/content/utility-documents";

export const metadata: Metadata = { title: "Website Privacy Policy", description: "How Sigma Core Medical Center collects, uses and shares information from its website, including inquiry forms, cookies and analytics.", robots: { index: false, follow: true } };

export default function PrivacyPage(): React.ReactElement {
  return <UtilityPage document={UTILITY_DOCUMENTS.privacy} />;
}
