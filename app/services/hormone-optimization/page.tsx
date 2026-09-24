import type { Metadata } from "next";
import { HormoneHero } from "@/components/interior/hormone-optimization/hero";
import { HormoneOrientation } from "@/components/interior/hormone-optimization/orientation";
import { HormoneGoals } from "@/components/interior/hormone-optimization/goals";
import { HormoneNextStep } from "@/components/interior/hormone-optimization/next-step";
import { HormoneFaq } from "@/components/interior/hormone-optimization/faq";
import { HormoneBooking } from "@/components/interior/hormone-optimization/booking";
import { HormoneSources } from "@/components/interior/hormone-optimization/sources";
import "./page.css";

export const metadata: Metadata = { title: "Hormone Optimization in Richmond, VA", description: "Explore questions about hormone health, personal goals, and an individualized conversation in the Richmond area.", robots: { index: false, follow: true } };

export default function HormonePage(): React.ReactElement {
  return <main className="b2 hormone"><HormoneHero /><HormoneOrientation /><HormoneGoals /><HormoneNextStep /><HormoneFaq /><HormoneBooking /><HormoneSources /></main>;
}
