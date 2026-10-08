import type { Metadata } from "next";
import { NeuropathyPage as NeuropathyPageView } from "@/components/pages/neuropathy/neuropathy-page";
import { NEUROPATHY_PAGE } from "@/content/pages";

export const metadata: Metadata = {
  title: "Neuropathy Care",
  description: NEUROPATHY_PAGE.intro,
};

export default function NeuropathyPage(): React.ReactElement {
  return <NeuropathyPageView />;
}
