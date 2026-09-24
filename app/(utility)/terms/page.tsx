import type { Metadata } from "next";
import { UtilityPage } from "@/components/utility/utility-page";
import { UTILITY_DOCUMENTS } from "@/content/utility-documents";

export const metadata: Metadata = { title: "Website Terms of Use", description: "Sigma Core website terms and a medical disclaimer await legal and clinical review. See the document status.", robots: { index: false, follow: true } };

export default function TermsPage(): React.ReactElement {
  return <UtilityPage document={UTILITY_DOCUMENTS.terms} />;
}
