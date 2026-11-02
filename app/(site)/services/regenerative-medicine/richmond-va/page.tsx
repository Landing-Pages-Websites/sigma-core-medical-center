import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/json-ld";
import { RichmondRegenerativeMedicinePage } from "@/components/pages/regenerative/richmond-regenerative-medicine-page";
import { serviceJsonLd } from "@/content/seo";

const PAGE_URL = "https://www.sigmacoremedicalcenter.com/services/regenerative-medicine/richmond-va";
const PAGE_DESCRIPTION =
  "Explore regenerative medicine in Richmond, VA with a consultation-led approach to goals, evidence, risks, alternatives, and next steps. Call 804-486-7699.";

export const metadata: Metadata = {
  title: { absolute: "Regenerative Medicine in Richmond, VA | Sigma Core" },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
};

export default function RichmondRegenerativeMedicineRoute(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          slug: "regenerative-medicine/richmond-va",
          name: "Regenerative Medicine in Richmond, VA",
          serviceType: "Regenerative medicine consultation",
          description: PAGE_DESCRIPTION,
        })}
      />
      <RichmondRegenerativeMedicinePage />
    </>
  );
}
