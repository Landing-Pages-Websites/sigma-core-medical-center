import type { Metadata } from "next";
import { HormoneOptimizationLanding } from "@/components/pages/hormone/hormone-optimization-page";
import { HORMONE_PAGE } from "@/content/pages";

export const metadata: Metadata = {
  title: "Hormone Optimization",
  description: HORMONE_PAGE.intro,
};

export default function HormoneOptimizationRoute(): React.ReactElement {
  return <HormoneOptimizationLanding />;
}
