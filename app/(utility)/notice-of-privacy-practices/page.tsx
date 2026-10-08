import type { Metadata } from "next";
import { UtilityPage } from "@/components/utility/utility-page";
import { UTILITY_DOCUMENTS } from "@/content/utility-documents";

export const metadata: Metadata = { title: "Notice of Privacy Practices", description: "The official Sigma Core Notice of Privacy Practices is awaiting approval. This page explains its publication status.", robots: { index: false, follow: true } };

export default function NoticePage(): React.ReactElement {
  return <UtilityPage document={UTILITY_DOCUMENTS.notice} />;
}
