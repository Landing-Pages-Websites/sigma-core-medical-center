import type { Metadata } from "next";
import { UtilityPage } from "@/components/utility/utility-page";
import { UTILITY_DOCUMENTS } from "@/content/utility-documents";

export const metadata: Metadata = { title: "Notice of Privacy Practices", description: "How Sigma Core Medical Center may use and disclose your medical information, your privacy rights, and how to make a request or complaint.", robots: { index: false, follow: true } };

export default function NoticePage(): React.ReactElement {
  return <UtilityPage document={UTILITY_DOCUMENTS.notice} />;
}
