import type { Metadata } from "next";
import { PrpInjectionPage } from "@/components/pages/prp-injection-page";
import { JsonLd } from "@/components/shared/json-ld";
import { serviceJsonLd } from "@/content/seo";

export const metadata: Metadata = {
  title: "PRP Injection Care",
  description:
    "Learn how Sigma Core Medical Center approaches PRP injection conversations for joint, tendon, pain, recovery, and performance goals.",
};

export default function PrpInjectionRoute(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          slug: "regenerative-medicine/prp-injection",
          name: "PRP injection care built around your goals",
          serviceType: "Regenerative medicine",
          description:
            "Explore whether platelet-rich plasma may be appropriate for a joint, tendon, pain, recovery, or performance conversation at Sigma Core Medical Center.",
        })}
      />
      <PrpInjectionPage />
    </>
  );
}
