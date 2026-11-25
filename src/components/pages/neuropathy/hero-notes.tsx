import { TallBracket } from "@/components/pages/shared/page-motifs";
import styles from "./hero.module.css";

const HERO_STEPS = [
  { label: "Beyond the Usual Approaches", tone: "bg-[#d9d2c4] text-navy", bracket: "text-silver", offset: "lg:left-0 lg:top-0" },
  { label: "Advanced Therapeutic Technologies", tone: "bg-[#2a2c2f] text-white", bracket: "text-silver", offset: "lg:left-[34%] lg:top-[1.75rem]" },
  { label: "Personalized Neuropathy Care", tone: "bg-[#d9d2c4] text-navy", bracket: "text-silver", offset: "lg:left-[68%] lg:top-[3.5rem]" },
] as const;

export function NeuropathyHeroNotes(): React.ReactElement {
  return (
    <div className={styles.notes}>
      <ol className="relative mt-9 grid gap-3 sm:grid-cols-3 lg:block lg:h-44 lg:w-[118%]">
        {HERO_STEPS.map((step) => (
          <li
            key={step.label}
            className={`${step.tone} ${step.offset} flex min-h-24 items-center gap-3 px-5 py-4 shadow-[0_14px_30px_rgb(0_0_0/0.3)] lg:absolute lg:w-[36%]`}
          >
            <TallBracket className={`h-8 w-2 ${step.bracket}`} />
            <span className="font-heading text-lg leading-tight font-bold">{step.label}</span>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-white/60 lg:mt-24">General information only; not medical advice.</p>
    </div>
  );
}
