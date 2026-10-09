import { TallBracket } from "@/components/pages/shared/page-motifs";
import styles from "./hero.module.css";

const HERO_POINTS = [
  "Hormone optimization is a care category.",
  "Function, energy, recovery, and personal goals are topics to consider.",
  "The responsible prescribing provider and credentials are not yet available.",
] as const;

export function HormoneHeroNotes(): React.ReactElement {
  return (
    <div className={styles.notes}>
      <ul className="mt-8 grid max-w-[40rem] gap-4 sm:grid-cols-3 sm:gap-0">
        {HERO_POINTS.map((point) => (
          <li key={point} className="relative pl-6 text-xs leading-snug text-white/85 sm:border-l sm:border-white/25 sm:px-5 sm:first:border-l-0 sm:first:pl-6">
            <TallBracket className="absolute inset-y-0 left-0 w-2 text-silver sm:left-0" />
            {point}
          </li>
        ))}
      </ul>
      <p className="mt-6 flex items-center gap-3 font-display text-lg text-white/75 italic">
        <TallBracket className="h-6 w-2 text-silver" /> General information only; not medical advice.
      </p>
    </div>
  );
}
