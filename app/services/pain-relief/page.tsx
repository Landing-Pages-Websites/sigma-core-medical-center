import type { Metadata } from "next";
import { PainHero } from "@/components/interior/pain-relief/hero";
import { PainNavigation } from "@/components/interior/pain-relief/navigation";
import { PainKnee } from "@/components/interior/pain-relief/knee";
import { PainBack } from "@/components/interior/pain-relief/back";
import { PainNeck } from "@/components/interior/pain-relief/neck";
import { PainDecisions } from "@/components/interior/pain-relief/decisions";
import { PainFaq } from "@/components/interior/pain-relief/faq";
import { PainBooking } from "@/components/interior/pain-relief/booking";
import { PainSources } from "@/components/interior/pain-relief/sources";

export const metadata: Metadata = { title: "Pain Relief Care for Knee, Back & Neck Concerns in Richmond, VA", description: "Explore knee, low-back and neck concerns in one Richmond-area care overview. Learn questions to discuss and how to take an informed next step." };

export default function PainReliefPage(): React.ReactElement {
  return <main><PainHero /><PainNavigation /><PainKnee /><PainBack /><PainNeck /><PainDecisions /><PainFaq /><PainBooking /><PainSources /></main>;
}
