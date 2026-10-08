import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about-page";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Sigma Core Medical Center, its Richmond-area clinic, mission, facility, and grounded care principles.",
};

export default function AboutRoute(): React.ReactElement {
  return <AboutPage />;
}
