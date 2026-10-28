import type { Metadata } from "next";
import { NeuropathyPage as NeuropathyPageView } from "@/components/pages/neuropathy/neuropathy-page";
import { NEUROPATHY_PAGE } from "@/content/pages";
import { JsonLd } from "@/components/shared/json-ld";
import { serviceJsonLd } from "@/content/seo";

export const metadata: Metadata = {
  title: "Richmond Neuropathy Treatment",
  description:
    "Explore neuropathy evaluation and treatment in Richmond, VA. Consultation-led care focused on movement, daily function, and individualized next steps.",
};

export default function NeuropathyPage(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          slug: "neuropathy",
          name: "Neuropathy Treatment & Care",
          serviceType: "Neuropathy treatment and care",
          description: NEUROPATHY_PAGE.intro,
        })}
      />
      <NeuropathyPageView />
    </>
  );
}