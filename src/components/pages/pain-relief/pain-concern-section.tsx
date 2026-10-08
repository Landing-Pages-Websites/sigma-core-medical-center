import { PainLowBackSection } from "@/components/pages/pain-relief/pain-low-back-section";
import { PainNeckSection } from "@/components/pages/pain-relief/pain-neck-section";

type PainConcernSectionProps = { concern: "low-back" | "neck" };

/** Low-back and neck concerns use distinct layouts in the approved design. */
export function PainConcernSection({ concern }: PainConcernSectionProps): React.ReactElement {
  return concern === "low-back" ? <PainLowBackSection /> : <PainNeckSection />;
}
