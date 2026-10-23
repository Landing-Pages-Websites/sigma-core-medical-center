import { PelvicHeroPhoto } from "./hero-photo";
import styles from "./hero.module.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CornerStripes, TallBracket } from "@/components/pages/shared/page-motifs";

export function PelvicHero(): React.ReactElement {
  return (
    <section id="hero" className="relative overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-0 right-0 z-20 hidden w-[24rem] lg:flex" />
      <div className="grid lg:min-h-[45rem] lg:grid-cols-[50fr_50fr]">
        <div className={`${styles.copy} relative z-10 flex flex-col justify-center px-6 pt-14 pb-12 sm:px-10 lg:py-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]`}>
          <div className="hidden lg:block"><TallBracket className="mb-6 h-12 w-3 text-silver" /></div>
          <h1 className="font-heading text-[clamp(2.4rem,4.2vw,4rem)] leading-[1.02] font-bold tracking-[-0.03em]">
            Pelvic floor therapy and <span className="block text-[0.86em]">incontinence evaluation</span>
          </h1>
          <p className="mt-5 max-w-[30rem] text-base leading-snug text-white/88">
            General orientation to pelvic floor therapy, incontinence evaluation, and the questions you may want to bring to a provider. This page does not diagnose or promise an outcome.
          </p>
          <Link href="/book" className="mt-7 inline-flex max-w-full min-h-16 w-fit items-center gap-6 border border-white/80 bg-royal px-8 text-xl font-semibold transition-colors hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
            Check evaluation status <ArrowRight size={22} aria-hidden className="shrink-0" />
          </Link>
        </div>

        <PelvicHeroPhoto />
      </div>
      <div aria-hidden className="h-8 bg-royal" />
    </section>
  );
}
