import type { Metadata } from "next";
import { PrpInjectionPage } from "@/components/pages/prp-injection-page";

export const metadata: Metadata = {
  title: "PRP Injection Care",
  description:
    "Learn how Sigma Core Medical Center approaches PRP injection conversations for joint, tendon, pain, recovery, and performance goals.",
};

export default function PrpInjectionRoute(): React.ReactElement {
  return <PrpInjectionPage />;
}
