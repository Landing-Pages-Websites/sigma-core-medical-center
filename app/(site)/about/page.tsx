import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about-page";
import { medicalBusinessJsonLd } from "@/content/seo";
import { JsonLd } from "@/components/shared/json-ld";

export const metadata: Metadata = {
  title: "About Sigma Core Medical Center | Richmond, VA",
  description: "Meet Dr. Nicholas Fleming, DC, and learn about Sigma Core Medical Center's consultation-led approach to performance, recovery, pain relief, and longevity.",
};

export default function AboutRoute(): React.ReactElement {
  return (
    <>
      <JsonLd data={medicalBusinessJsonLd()} />
      <AboutPage />
    </>
  );
}
