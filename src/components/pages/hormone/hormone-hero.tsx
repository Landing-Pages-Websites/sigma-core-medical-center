import { HormoneHeroNotes } from "./hero-notes";
import { HormoneHeroPhoto } from "./hero-photo";
import styles from "./hero.module.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HORMONE_PAGE } from "@/content/pages";
import { CornerStripes } from "@/components/pages/shared/page-motifs";

export function HormoneHero(): React.ReactElement {
  return (
    <section id="hormone-hero" className="relative isolate overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-6 right-0 z-20 hidden w-[24rem] lg:flex" />
      <div className="grid lg:min-h-[45rem] lg:grid-cols-[55fr_45fr]">
        <div className={`${styles.copy} relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-16 lg:pb-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]`}>
          <div className={styles.intro}>
            <h1 className="max-w-[42rem] font-heading text-[clamp(2.5rem,4.5vw,4.4rem)] leading-[1] font-bold tracking-[-0.03em]">{HORMONE_PAGE.title}</h1>
            <p className="mt-4 max-w-[30rem] text-lg leading-snug text-white/88">Function, energy, recovery, and well-being are possible goals. Online scheduling is unavailable.</p>
            <Link href="/book" className="mt-4 inline-flex max-w-full min-h-14 items-center gap-4 border border-white/80 bg-royal px-6 text-lg font-semibold transition-colors hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
              Check booking status <ArrowRight size={20} aria-hidden className="shrink-0" />
            </Link>
          </div>
          <HormoneHeroNotes />
        </div>
        <HormoneHeroPhoto />
      </div>
      <div aria-hidden className="h-6 bg-royal" />
    </section>
  );
}
