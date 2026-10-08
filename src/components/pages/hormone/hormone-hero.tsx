import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HORMONE_PAGE } from "@/content/pages";
import { CornerStripes, TallBracket } from "@/components/pages/shared/page-motifs";

const HERO_POINTS = [
  "Hormone optimization is an approved Sigma Core service category.",
  "We position the conversation around your function, energy, recovery, and personal goals.",
  "The responsible prescribing provider and credentials are not yet available for publication.",
] as const;

export function HormoneHero(): React.ReactElement {
  return (
    <section id="hormone-hero" className="relative isolate overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-6 right-0 z-20 hidden w-[24rem] lg:flex" />
      <div className="grid lg:min-h-[45rem] lg:grid-cols-[55fr_45fr]">
        <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-16 lg:pb-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <h1 className="max-w-[42rem] font-heading text-[clamp(2.5rem,4.5vw,4.4rem)] leading-[1] font-bold tracking-[-0.03em]">{HORMONE_PAGE.title}</h1>
          <p className="mt-5 max-w-[30rem] text-lg leading-snug text-white/88">{HORMONE_PAGE.intro}</p>
          <Link href="/book" className="mt-6 inline-flex h-14 items-center gap-4 border border-white/80 bg-royal px-6 text-lg font-semibold transition-colors hover:bg-royal-hover">
            Book an Appointment <ArrowRight size={20} aria-hidden />
          </Link>
          <ul className="mt-8 grid max-w-[40rem] gap-4 sm:grid-cols-3 sm:gap-0">
            {HERO_POINTS.map((point) => (
              <li key={point} className="relative pl-6 text-xs leading-snug text-white/85 sm:border-l sm:border-white/25 sm:px-5 sm:first:border-l-0 sm:first:pl-6">
                <TallBracket className="absolute inset-y-0 left-0 w-2 text-silver sm:left-0" />
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-3 font-display text-lg text-white/75 italic">
            <TallBracket className="h-6 w-2 text-silver" /> A conversation designed around your life and goals.
          </p>
        </div>
        <div className="relative min-h-[24rem] sm:min-h-[30rem] lg:mt-20 lg:min-h-0">
          <div className="absolute inset-0 lg:bottom-[2%] lg:[clip-path:polygon(22%_0,100%_0,100%_100%,24%_100%,0_44%)]">
            <Image src={HORMONE_PAGE.heroImage} alt={HORMONE_PAGE.heroAlt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[58%_center]" />
          </div>
          <div aria-hidden className="absolute right-0 bottom-0 h-[28%] w-[72%] bg-royal [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />
        </div>
      </div>
      <div aria-hidden className="h-6 bg-royal" />
    </section>
  );
}
