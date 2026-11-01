import type { Metadata } from "next";
import { UtilityPage } from "@/components/utility/utility-page";
import { UTILITY_DOCUMENTS } from "@/content/utility-documents";

export const metadata: Metadata = { title: "Website Terms of Use", description: "Terms for using the Sigma Core Medical Center website, including its general-information medical disclaimer, emergency guidance and acceptable use.", robots: { index: false, follow: true } };

export default function TermsPage(): React.ReactElement {
  return <UtilityPage document={UTILITY_DOCUMENTS.terms} />;
}
