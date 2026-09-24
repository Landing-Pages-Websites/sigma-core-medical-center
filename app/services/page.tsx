import type { Metadata } from "next";
import { ServicesHero } from "@/components/interior/services/hero";
import { ServicesNeuropathy } from "@/components/interior/services/neuropathy";
import { ServicesNavigation } from "@/components/interior/services/navigation";
import { ServicesChoose } from "@/components/interior/services/choose";
import { ServicesBooking } from "@/components/interior/services/booking";

export const metadata: Metadata = { title: "Medical Services in Richmond, VA", description: "Explore Sigma Core's Richmond-area care categories, led by neuropathy, with clear information about pain relief and your next step." };

export default function ServicesPage(): React.ReactElement {
  return <main><ServicesHero /><ServicesNeuropathy /><ServicesNavigation /><ServicesChoose /><ServicesBooking /></main>;
}
