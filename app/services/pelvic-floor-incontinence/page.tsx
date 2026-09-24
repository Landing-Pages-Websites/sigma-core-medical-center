import type { Metadata } from "next";
import { PelvicHero } from "@/components/interior/pelvic-floor-incontinence/hero";
import { PelvicOrientation } from "@/components/interior/pelvic-floor-incontinence/orientation";
import { PelvicGoals } from "@/components/interior/pelvic-floor-incontinence/goals";
import { PelvicExpect } from "@/components/interior/pelvic-floor-incontinence/expect";
import { PelvicFaq } from "@/components/interior/pelvic-floor-incontinence/faq";
import { PelvicBooking } from "@/components/interior/pelvic-floor-incontinence/booking";
import { PelvicSources } from "@/components/interior/pelvic-floor-incontinence/sources";
import "./page.css";

export const metadata: Metadata = { title: "Pelvic Floor & Incontinence Care in Richmond, VA", description: "A private, respectful starting point for pelvic-floor and incontinence concerns in the Richmond area.", robots: { index: false, follow: true } };

export default function PelvicPage(): React.ReactElement {
  return <main className="b2 pelvic"><PelvicHero /><PelvicOrientation /><PelvicGoals /><PelvicExpect /><PelvicFaq /><PelvicBooking /><PelvicSources /></main>;
}
