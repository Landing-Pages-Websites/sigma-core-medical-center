import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NeuropathyHeroNotes } from "./hero-notes";
import { NeuropathyHeroPhoto } from "./hero-photo";
import styles from "./hero.module.css";
import type { ServicePageData } from "@/content/pages";
import { CornerStripes } from "@/components/pages/shared/page-motifs";

type NeuropathyHeroProps = { data: ServicePageData };

export function NeuropathyHero({ data }: NeuropathyHeroProps): React.ReactElement {
  return (
    <section data-mega-section="neuropathy-hero" id="neuropathy-hero" className="relative overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-0 right-0 z-20 hidden w-[23rem] lg:flex" />
      <div className="grid lg:min-h-[47rem] lg:grid-cols-[50fr_50fr]">
        <div className={`${styles.copy} relative z-10 px-6 pt-14 pb-10 sm:px-10 lg:pt-16 lg:pb-0 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]`}>
          <div className={styles.intro}>
            <p className="text-base font-semibold tracking-wide text-[#2f7fe0]">ADVANCED NEUROPATHY CARE | RICHMOND, VIRGINIA</p>
            <h1 className="mt-3 max-w-[38rem] font-heading text-[clamp(2.6rem,4.6vw,4.4rem)] leading-[1] font-bold tracking-[-0.03em]">Tired of Numbness, Tingling, Burning Feet, or Losing Your Balance?</h1>
            <h2 className="mt-5 max-w-[34rem] font-heading text-2xl leading-tight font-semibold text-white">You&apos;ve Tried the Usual Approaches. Now Discover Something Different.</h2>
            <p className="mt-4 max-w-[32rem] text-lg leading-snug text-white/90">If medications, supplements, or previous treatments haven&apos;t given you the improvement you hoped for, you may be wondering what else is available.</p>
            <p className="mt-3 max-w-[32rem] text-lg leading-snug text-white/90">At Sigma Core Medical Center, our Advanced Neuropathy Protocol brings together modern therapeutic technologies and personalized care in a comprehensive approach to neuropathy.</p>
            <p className="mt-3 max-w-[32rem] text-lg leading-snug text-white/90">Discover how our approach is different — and whether it may be right for you.</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="#what-to-expect" className="inline-flex min-h-14 items-center gap-3 bg-royal px-6 text-lg font-semibold text-white transition-colors hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Discover Our Neuropathy Protocol <ArrowRight size={18} aria-hidden />
              </Link>
              <Link data-mega-cta="book-appointment" href="https://go.sigmacoremedicalcenter.com/" className="inline-flex min-h-14 items-center gap-3 border-2 border-white px-6 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Request a Free Consultation <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
          </div>
          <NeuropathyHeroNotes />
        </div>

        <NeuropathyHeroPhoto data={data} />
      </div>
      <div aria-hidden className="h-5 bg-royal lg:h-6" />
    </section>
  );
}
