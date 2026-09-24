import type { Metadata } from "next";
import { NeuropathyHero } from "@/components/interior/neuropathy/hero";
import { NeuropathyOrientation } from "@/components/interior/neuropathy/orientation";
import { NeuropathyGoals } from "@/components/interior/neuropathy/goals";
import { NeuropathyExpect } from "@/components/interior/neuropathy/expect";
import { NeuropathyFaq } from "@/components/interior/neuropathy/faq";
import { NeuropathyBooking } from "@/components/interior/neuropathy/booking";
import { NeuropathySources } from "@/components/interior/neuropathy/sources";

export const metadata: Metadata = { title: "Neuropathy Care in Richmond, VA", description: "Learn about neuropathy concerns, personal goals and questions for a care conversation at Sigma Core Medical Center in the Richmond area." };

export default function NeuropathyPage(): React.ReactElement {
  return <main><NeuropathyHero /><NeuropathyOrientation /><NeuropathyGoals /><NeuropathyExpect /><NeuropathyFaq /><NeuropathyBooking /><NeuropathySources /></main>;
}
