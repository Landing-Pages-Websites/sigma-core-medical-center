import { NeuropathyHeroNotes } from "./hero-notes";
import { NeuropathyHeroPhoto } from "./hero-photo";
import styles from "./hero.module.css";
import type { ServicePageData } from "@/content/pages";
import { CornerStripes } from "@/components/pages/shared/page-motifs";

type NeuropathyHeroProps = { data: ServicePageData };

export function NeuropathyHero({ data }: NeuropathyHeroProps): React.ReactElement {
  return (
    <section id="neuropathy-hero" className="relative overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-0 right-0 z-20 hidden w-[23rem] lg:flex" />
      <div className="grid lg:min-h-[47rem] lg:grid-cols-[50fr_50fr]">
        <div className={`${styles.copy} relative z-10 px-6 pt-14 pb-10 sm:px-10 lg:pt-16 lg:pb-0 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]`}>
          <div className={styles.intro}>
            <p className="text-base font-semibold text-[#2f7fe0]">{data.eyebrow}</p>
            <h1 className="mt-3 max-w-[38rem] font-heading text-[clamp(2.6rem,4.6vw,4.4rem)] leading-[1] font-bold tracking-[-0.03em]">{data.title}</h1>
            <p className="mt-4 max-w-[30rem] text-lg leading-snug text-white/90">
              Explore movement, daily function, and independence. Provider details and online scheduling are unavailable.
            </p>
          </div>
          <NeuropathyHeroNotes />
        </div>

        <NeuropathyHeroPhoto data={data} />
      </div>
      <div aria-hidden className="h-5 bg-royal lg:h-6" />
    </section>
  );
}
