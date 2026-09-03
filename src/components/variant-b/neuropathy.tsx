import { ArrowRight } from "lucide-react";
import { NEUROPATHY } from "@/content/site";
import { Reveal } from "@/components/shared/reveal";
import { BracketMark } from "@/components/variant-b/motifs";
import { inkButtonB, primaryButtonB } from "@/components/variant-b/buttons";

/** Stepped-slab staircase descending toward the electric CTA plane (canonical frame 02). */
const SLABS = [
  {
    position: "relative z-10 lg:ml-[24%] lg:w-[76%]",
    tone: "bg-linear-to-br from-[#f4f1ea] to-[#e2ddd1] text-ink",
    cut: "polygon(0 0, 92% 0, 92% 32%, 100% 32%, 100% 100%, 0 100%)",
  },
  {
    position: "relative z-20 lg:-mt-4 lg:ml-[10%] lg:w-[76%]",
    tone: "bg-linear-to-br from-[#2b333b] to-[#191f25] text-white",
    cut: "polygon(0 0, 100% 0, 100% 60%, 96% 60%, 96% 100%, 0 100%)",
  },
  {
    position: "relative z-30 lg:-mt-4 lg:ml-0 lg:w-[76%]",
    tone: "bg-linear-to-br from-[#f4f1ea] to-[#e2ddd1] text-ink",
    cut: "polygon(0 34%, 5% 34%, 5% 0, 100% 0, 100% 100%, 0 100%)",
  },
];

const CASCADE = ["w-40", "mr-6 w-32", "mr-12 w-24", "mr-16 w-16"];

function SlabList(): React.ReactElement {
  return (
    <ul className="space-y-5 lg:space-y-0">
      {NEUROPATHY.orientationPoints.map((point, index) => (
        <li key={point} className={SLABS[index].position}>
          <Reveal from="left" delay={index * 120} className="relative">
            <span
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 bg-black/35"
              style={{ clipPath: SLABS[index].cut }}
            />
            <span
              className={`relative flex items-center gap-4 px-7 py-6 pr-12 ${SLABS[index].tone}`}
              style={{ clipPath: SLABS[index].cut }}
            >
              <BracketMark className="h-7 w-3" />
              <span className="max-w-56 text-2xl leading-tight font-semibold sm:max-w-none">
                {point}
              </span>
            </span>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function NeuropathyB(): React.ReactElement {
  return (
    <section id="neuropathy" aria-label="Neuropathy care" className="overflow-hidden bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:grid lg:grid-cols-[44fr_56fr] lg:gap-16 lg:py-24">
        <Reveal className="flex flex-col">
          <p className="flex items-center gap-3 text-base font-semibold text-focus">
            <span aria-hidden className="h-0.5 w-8 bg-electric" />
            {NEUROPATHY.eyebrow}
          </p>
          <h2 className="mt-4 max-w-lg text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-[2.75rem]">
            {NEUROPATHY.headline}
          </h2>
          <p className="mt-5 max-w-md text-lg text-white/80 sm:text-xl">{NEUROPATHY.body}</p>
          <p className="mt-10 hidden items-center gap-3 text-white/70 lg:flex">
            <BracketMark />
            <span className="font-display text-base italic">{NEUROPATHY.disclaimer}</span>
          </p>
        </Reveal>
        <div className="relative mt-10 lg:mt-0 lg:pt-12">
          <span aria-hidden className="absolute top-0 right-0 hidden flex-col items-end gap-1.5 lg:flex">
            {CASCADE.map((bar) => (
              <span key={bar} className={`block h-1.5 bg-electric ${bar}`} />
            ))}
          </span>
          <SlabList />
          <div className="mt-8 lg:hidden">
            <a href="#services" className={`${primaryButtonB} w-full`}>
              {NEUROPATHY.cta} <ArrowRight size={18} aria-hidden />
            </a>
          </div>
          <div className="relative hidden lg:-mt-16 lg:ml-[16%] lg:block">
            <div
              aria-hidden
              className="absolute inset-0 bg-electric"
              style={{ clipPath: "polygon(0 86%, 12% 78%, 100% 14%, 100% 100%, 0 100%)" }}
            />
            <div className="relative flex h-48 items-end justify-end pr-8 pb-8">
              <a href="#services" className={inkButtonB}>
                {NEUROPATHY.cta} <ArrowRight size={18} aria-hidden />
              </a>
            </div>
          </div>
          <p className="mt-8 flex items-center gap-3 text-white/70 lg:hidden">
            <BracketMark />
            <span className="font-display text-base italic">{NEUROPATHY.disclaimer}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
