import type { Metadata } from "next";
import { PelvicFloorPage } from "@/components/pages/pelvic-floor/pelvic-floor-page";
import { PELVIC_PAGE } from "@/content/pages";

export const metadata: Metadata = {
  title: "Pelvic Floor and Incontinence Care",
  description: PELVIC_PAGE.intro,
};

export default function PelvicFloorRoute(): React.ReactElement {
  return <PelvicFloorPage />;
}
