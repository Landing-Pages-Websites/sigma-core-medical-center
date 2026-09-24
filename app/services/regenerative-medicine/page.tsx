import type { Metadata } from "next";
import { RegenHero } from "@/components/interior/regenerative-medicine/hero";
import { RegenOrientation } from "@/components/interior/regenerative-medicine/orientation";
import { RegenQuestions } from "@/components/interior/regenerative-medicine/questions";
import { RegenDecisions } from "@/components/interior/regenerative-medicine/decisions";
import { RegenFaq } from "@/components/interior/regenerative-medicine/faq";
import { RegenBooking } from "@/components/interior/regenerative-medicine/booking";
import { RegenSources } from "@/components/interior/regenerative-medicine/sources";
import "./page.css";

export const metadata: Metadata = { title: "Regenerative Medicine Consultation in Richmond, VA", description: "A cautious guide to questions worth asking about regenerative medicine before any individual decision in the Richmond area.", robots: { index: false, follow: true } };

export default function RegenerativePage(): React.ReactElement {
  return <main className="b2 regen"><RegenHero /><RegenOrientation /><RegenQuestions /><RegenDecisions /><RegenFaq /><RegenBooking /><RegenSources /></main>;
}
