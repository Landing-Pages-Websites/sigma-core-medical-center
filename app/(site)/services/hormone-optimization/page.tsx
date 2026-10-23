import type { Metadata } from "next";
import { HormoneOptimizationLanding } from "@/components/pages/hormone/hormone-optimization-page";
import { HORMONE_PAGE } from "@/content/pages";
import { JsonLd } from "@/components/shared/json-ld";
import { serviceJsonLd } from "@/content/seo";

export const metadata: Metadata = {
  title: "Hormone Optimization",
  description: HORMONE_PAGE.intro,
  robots: { index: false, follow: true },
};

export default function HormoneOptimizationRoute(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          slug: "hormone-optimization",
          name: "Hormone Optimization",
          serviceType: "Hormone optimization care",
          description: HORMONE_PAGE.intro,
        })}
      />
      <HormoneOptimizationLanding />
    </>
  );
}
