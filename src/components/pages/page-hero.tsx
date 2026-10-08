import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BracketMark, SteppedBars } from "@/components/variant-b/motifs";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  points?: readonly string[];
  /** When provided, replaces the three-point row with a single pull-quote card. */
  quote?: string;
  /** When provided, takes priority over quote/points: renders an inline checklist under the intro instead. */
  bullets?: readonly string[];
};

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  points = ["Understand your goals", "Discuss appropriate options", "Choose an informed next step"],
  quote,
  bullets,
}: PageHeroProps): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <SteppedBars className="absolute top-8 right-6 items-end scale-150 sm:right-12 lg:right-20" />
      <div className="mx-auto grid max-w-[90rem] lg:min-h-[40rem] lg:grid-cols-[48fr_52fr]">
        <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20 lg:py-24 lg:pr-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-focus uppercase">{eyebrow}</p>
          <h1 className="mt-4 max-w-2xl text-4xl leading-[1.02] font-semibold tracking-tight sm:text-5xl lg:text-[4.35rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">{intro}</p>
          {bullets ? (
            <ul className="mt-5 max-w-xl space-y-2.5">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-white/80">
                  <BracketMark className="mt-0.5 h-4 w-3 shrink-0 text-electric" />
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}
          <Link href="/book" className="mt-8 inline-flex h-12 items-center gap-3 border-2 border-focus px-6 font-semibold text-white transition-colors hover:bg-action">
            Book an Appointment <ArrowRight size={18} aria-hidden />
          </Link>
          {bullets ? null : quote ? (
            <div className="mt-10 max-w-xs bg-charcoal p-5 shadow-xl lg:absolute lg:-right-6 lg:bottom-8">
              <BracketMark className="h-8 w-4 text-electric" />
              <p className="mt-2 text-lg leading-snug font-semibold text-white">{quote}</p>
            </div>
          ) : (
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3 lg:absolute lg:-right-28 lg:bottom-8 lg:w-[calc(100%+5rem)]">
              {points.map((point, index) => (
                <div key={point} className={`${index === 1 ? "bg-charcoal" : "bg-paper text-ink"} flex min-h-20 items-center gap-3 p-4 text-sm font-semibold shadow-xl`}>
                  <BracketMark className="text-electric" />
                  {point}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative h-80 sm:h-[30rem] lg:h-auto lg:min-h-[40rem]">
          <div className="absolute inset-0 overflow-hidden lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]">
            <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
          </div>
          <div aria-hidden className="absolute right-0 bottom-0 hidden h-24 w-52 bg-action lg:block [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />
        </div>
      </div>
    </section>
  );
}
