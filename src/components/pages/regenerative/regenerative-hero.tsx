import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { REGENERATIVE_PAGE } from "@/content/pages";
import { CornerStripes, TallBracket } from "@/components/pages/shared/page-motifs";

const HERO_NOTES = [
  "Regenerative medicine is a broad care category.",
  "This page offers category-level orientation. Treatment and provider details are unavailable.",
  "No specific product or procedure is offered through this page.",
] as const;

export function RegenerativeHero(): React.ReactElement {
  return (
    <section id="hero" className="relative overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-0 right-0 z-20 hidden w-[24rem] lg:flex" />
      <div className="grid lg:min-h-[45rem] lg:grid-cols-[52fr_48fr]">
        <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <h1 className="max-w-[42rem] font-heading text-[clamp(2.5rem,4.5vw,4.3rem)] leading-[1] font-bold tracking-[-0.03em]">{REGENERATIVE_PAGE.title}</h1>
          <p className="mt-5 max-w-[26rem] text-lg leading-snug text-white/88">A starting point for questions and general information. Online scheduling is not yet available.</p>
          <ul className="mt-6 max-w-[22rem] space-y-4">
            {HERO_NOTES.map((note) => (
              <li key={note} className="relative pl-6 text-sm leading-snug text-white/85">
                <TallBracket className="absolute top-0.5 left-0 h-8 w-2 text-silver" />
                {note}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[26rem] sm:min-h-[32rem] lg:mt-24 lg:mb-6 lg:min-h-0">
          <div className="absolute inset-0 lg:-left-[16%] lg:[clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)]">
            <Image src={REGENERATIVE_PAGE.heroImage} alt={REGENERATIVE_PAGE.heroAlt} fill priority sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover object-[55%_40%]" />
          </div>
          <div aria-hidden className="absolute right-0 bottom-0 h-[38%] w-[70%] bg-royal [clip-path:polygon(32%_0,100%_0,100%_100%,0_100%)]" />
          <Link
            href="/book"
            className="absolute right-6 bottom-8 z-10 inline-flex max-w-full min-h-14 items-center gap-4 border border-white px-6 text-lg font-semibold transition-colors hover:bg-white hover:text-royal sm:right-10 lg:bottom-[12%] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]"
          >
            Check booking status <ArrowRight size={20} aria-hidden className="shrink-0" />
          </Link>
        </div>
      </div>
      <div aria-hidden className="h-6 bg-royal" />
    </section>
  );
}
