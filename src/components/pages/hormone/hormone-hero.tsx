import { HormoneHeroNotes } from "./hero-notes";
import { HormoneHeroPhoto } from "./hero-photo";
import styles from "./hero.module.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CornerStripes } from "@/components/pages/shared/page-motifs";

export function HormoneHero(): React.ReactElement {
  return (
    <section data-mega-section="hormone-hero" id="hormone-hero" className="relative isolate overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-6 right-0 z-20 hidden w-[24rem] lg:flex" />
      <div className="grid lg:min-h-[45rem] lg:grid-cols-[55fr_45fr]">
        <div className={`${styles.copy} relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-16 lg:pb-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]`}>
          <div className={styles.intro}>
            <p className="text-sm font-semibold tracking-[0.14em] text-[#7fb2f0] sm:text-base">PERSONALIZED HORMONE HEALTH | RICHMOND, VIRGINIA</p>
            <h1 className="mt-3 max-w-[42rem] font-heading text-[clamp(2.1rem,3.8vw,3.6rem)] leading-[1.04] font-bold tracking-[-0.03em]">Tired All the Time? Low Energy? Just Not Feeling Like Yourself Anymore?</h1>
            <h2 className="mt-4 max-w-[34rem] font-heading text-2xl leading-tight font-semibold text-white">Your Hormones Could Be Part of the Picture.</h2>
            <p className="mt-4 max-w-[34rem] text-lg leading-snug text-white/88">If your energy, motivation, strength, or overall vitality aren&apos;t what they used to be, you may be wondering what&apos;s changed.</p>
            <p className="mt-3 max-w-[34rem] text-lg leading-snug text-white/88">Hormonal changes are one possible explanation — and understanding what&apos;s happening is an important first step.</p>
            <p className="mt-3 max-w-[34rem] text-lg leading-snug text-white/88">At Sigma Core Medical Center, we take a personalized approach to hormone health, helping you explore appropriate evaluation and treatment options based on your individual needs.</p>
            <Link data-mega-cta="book-appointment" href="https://go.sigmacoremedicalcenter.com/" className="mt-5 inline-flex max-w-full min-h-14 items-center gap-4 border border-white/80 bg-royal px-6 text-lg font-semibold transition-colors hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
              Request My Free Hormone Consultation <ArrowRight size={20} aria-hidden className="shrink-0" />
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
