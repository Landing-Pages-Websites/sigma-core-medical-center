import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about-page";

export const metadata: Metadata = {
  title: "About Sigma Core Medical Center | Richmond, VA",
  description: "Meet Dr. Jason Hurst, DC, and learn how Sigma Core Medical Center approaches human performance, pain relief, recovery, regenerative care, hormone optimization, and longevity through a consultation-led process.",
};

export default function AboutRoute(): React.ReactElement {
  return <AboutPage />;
}
