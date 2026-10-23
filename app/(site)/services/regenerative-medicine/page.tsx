import type { Metadata } from "next";
import { RegenerativeMedicinePage } from "@/components/pages/regenerative/regenerative-medicine-page";
import { REGENERATIVE_PAGE } from "@/content/pages";
import { JsonLd } from "@/components/shared/json-ld";
import { serviceJsonLd } from "@/content/seo";

export const metadata: Metadata = {
  title: "Regenerative Medicine",
  description: REGENERATIVE_PAGE.intro,
  robots: { index: false, follow: true },
};

export default function RegenerativeMedicineRoute(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          slug: "regenerative-medicine",
          name: "Regenerative Medicine",
          serviceType: "Regenerative medicine consultation",
          description: REGENERATIVE_PAGE.intro,
        })}
      />
      <RegenerativeMedicinePage />
    </>
  );
}
