import type { Metadata } from "next";
import { PelvicFloorPage } from "@/components/pages/pelvic-floor/pelvic-floor-page";
import { PELVIC_PAGE } from "@/content/pages";
import { JsonLd } from "@/components/shared/json-ld";
import { serviceJsonLd } from "@/content/seo";

export const metadata: Metadata = {
  title: "Pelvic Floor Therapy & Incontinence Evaluation",
  description: PELVIC_PAGE.intro,
};

export default function PelvicFloorRoute(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          slug: "pelvic-floor-incontinence",
          name: "Pelvic Floor and Incontinence Care",
          serviceType: "Pelvic floor and incontinence care",
          description: PELVIC_PAGE.intro,
        })}
      />
      <PelvicFloorPage />
    </>
  );
}
