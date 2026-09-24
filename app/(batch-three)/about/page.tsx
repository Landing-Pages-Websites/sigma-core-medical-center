import type { Metadata } from "next";
import { AboutHero } from "@/components/batch-three/about/hero";
import { AboutPurpose } from "@/components/batch-three/about/purpose";
import { AboutGallery } from "@/components/batch-three/about/gallery";
import { AboutPrinciples } from "@/components/batch-three/about/principles";
import { AboutTeam } from "@/components/batch-three/about/team";
import { AboutBooking } from "@/components/batch-three/about/booking";
export const metadata: Metadata = { title: "About Sigma Core Medical Center in Richmond, VA", description: "Learn about Sigma Core Medical Center's purpose and care principles for the Richmond area. Team and location details await verification." };
export default function AboutPage(): React.ReactElement {
  return <main className="b3"><AboutHero /><AboutPurpose /><AboutGallery /><AboutPrinciples /><AboutTeam /><AboutBooking /></main>;
}
