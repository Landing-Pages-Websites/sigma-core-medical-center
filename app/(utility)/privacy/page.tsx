import type { Metadata } from "next";
import { UtilityPage } from "@/components/utility/utility-page";
import { UTILITY_DOCUMENTS } from "@/content/utility-documents";

export const metadata: Metadata = { title: "Website Privacy Policy", description: "The Sigma Core website privacy policy is pending legal approval. Read the publication status and find related pages.", robots: { index: false, follow: true } };

export default function PrivacyPage(): React.ReactElement {
  return <UtilityPage document={UTILITY_DOCUMENTS.privacy} />;
}
