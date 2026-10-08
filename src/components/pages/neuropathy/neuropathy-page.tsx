import { NEUROPATHY_PAGE } from "@/content/pages";
import { NeuropathyBooking } from "@/components/pages/neuropathy/neuropathy-booking";
import { NeuropathyDecisions } from "@/components/pages/neuropathy/neuropathy-decisions";
import { NeuropathyExpectation } from "@/components/pages/neuropathy/neuropathy-expectation";
import { NeuropathyFaq } from "@/components/pages/neuropathy/neuropathy-faq";
import { NeuropathyHero } from "@/components/pages/neuropathy/neuropathy-hero";
import { NeuropathyOrientation } from "@/components/pages/neuropathy/neuropathy-orientation";
import { NeuropathySources } from "@/components/pages/neuropathy/neuropathy-sources";

export function NeuropathyPage(): React.ReactElement {
  return (
    <main className="overflow-hidden bg-navy">
      <NeuropathyHero data={NEUROPATHY_PAGE} />
      <NeuropathyOrientation />
      <NeuropathyDecisions />
      <NeuropathyExpectation />
      <NeuropathyFaq />
      <NeuropathyBooking />
      <NeuropathySources />
    </main>
  );
}
