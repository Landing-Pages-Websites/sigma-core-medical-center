import type { Metadata } from "next";
import { PelvicFloorPage } from "@/components/pages/pelvic-floor/pelvic-floor-page";
import { PELVIC_PAGE } from "@/content/pages";

export const metadata: Metadata = {
  alternates: { canonical: "/services/pelvic-floor-incontinence" },
  title: "Pelvic Floor and Incontinence Care",
  description: PELVIC_PAGE.intro,
  robots: { index: false, follow: true },
};

export default function PelvicFloorRoute(): React.ReactElement {
  return <PelvicFloorPage />;
}
