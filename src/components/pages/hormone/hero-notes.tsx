import { TallBracket } from "@/components/pages/shared/page-motifs";
import styles from "./hero.module.css";

const HERO_POINTS = [
  "Understand What's Changed",
  "Explore Personalized Options",
  "Rediscover Your Potential",
] as const;

export function HormoneHeroNotes(): React.ReactElement {
  return (
    <div className={styles.notes}>
      <ul className="mt-8 grid max-w-[40rem] gap-4 sm:grid-cols-3 sm:gap-0">
        {HERO_POINTS.map((point) => (
          <li key={point} className="relative pl-6 text-base font-semibold leading-snug text-white sm:border-l sm:border-white/25 sm:px-5 sm:first:border-l-0 sm:first:pl-6">
            <TallBracket className="absolute inset-y-0 left-0 w-2 text-silver sm:left-0" />
            {point}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-base font-semibold text-white/90">Personalized evaluations. Modern approaches. Care focused on you.</p>
      <p className="mt-3 text-xs text-white/60">General information only; not medical advice. A free consultation is a conversation about your symptoms and possible next steps.</p>
    </div>
  );
}
