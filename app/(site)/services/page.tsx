import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/json-ld";
import { ServicesPage } from "@/components/pages/services-page";

import "@/components/batch-three/contact/contact.css";
import "@/components/batch-three/contact/booking.css";

export const metadata: Metadata = {
  title: "Medical Services in Richmond, VA",
  description: "Explore pain relief, neuropathy, hormone, pelvic floor, and regenerative services in Richmond, VA. Start with an informed consultation.",
};

const SERVICES_JSON_LD: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: "https://www.sigmacoremedicalcenter.com/services",
  name: "Medical Services in Richmond, VA | Sigma Core Medical Center",
  description: "Explore Sigma Core services for pain relief, recovery, hormone health, neuropathy, pelvic floor concerns, and regenerative care.",
  about: {
    "@id": "https://www.sigmacoremedicalcenter.com/#organization",
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Explore service categories",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Neuropathy",
        description: "Learn how neuropathy care may support movement, daily function, and independence.",
        item: {
          "@id": "https://www.sigmacoremedicalcenter.com/services/neuropathy",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pain Relief",
        description: "Explore pain, joint, and movement concerns and the questions to bring to a consultation.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hormone Optimization",
        description: "Explore hormone health, energy, recovery, and the questions to discuss in a consultation.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Pelvic Floor & Incontinence",
        description: "Explore pelvic-floor and incontinence concerns with private, respectful information to help you prepare for a conversation.",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Regenerative Medicine",
        description: "Learn about regenerative care, evidence, uncertainty, and questions to discuss with a qualified professional.",
      },
    ],
  },
};

export default function ServicesRoute(): React.ReactElement {
  return (
    <>
      <JsonLd data={SERVICES_JSON_LD} />
      <ServicesPage />
    </>
  );
}
