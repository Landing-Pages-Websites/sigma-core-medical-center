import { ArrowRight } from "lucide-react";
import { NEUROPATHY } from "@/content/site";
import { Reveal } from "@/components/shared/reveal";
import { BracketMark } from "@/components/variant-b/motifs";
import { primaryButtonB } from "@/components/variant-b/buttons";

const SLAB_STYLES = [
  "bg-paper text-ink lg:w-[82%]",
  "bg-charcoal text-white lg:ml-24 lg:w-[82%]",
  "bg-paper text-ink lg:ml-10 lg:w-[82%]",
];

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
          <p className="mt-5 max-w-md text-lg text-white/80">{NEUROPATHY.body}</p>
          <p className="mt-10 hidden items-center gap-3 text-white/70 lg:flex">
            <BracketMark />
            <span className="font-display text-base italic">{NEUROPATHY.disclaimer}</span>
          </p>
        </Reveal>
        <div className="mt-10 lg:mt-0">
          <ul className="space-y-4">
            {NEUROPATHY.orientationPoints.map((point, index) => (
              <li
                key={point}
                className={`flex items-center gap-4 border-r-8 border-black/25 px-6 py-6 ${SLAB_STYLES[index]}`}
              >
                <BracketMark className="h-7 w-3" />
                <span className="max-w-56 text-2xl leading-tight font-semibold sm:max-w-none">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <div className="relative mt-10 flex justify-end">
            <div
              aria-hidden
              className="absolute right-0 bottom-0 hidden h-24 w-48 bg-electric lg:block"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
            />
            <a href="#services" className={`${primaryButtonB} relative w-full sm:w-auto`}>
              {NEUROPATHY.cta} <ArrowRight size={18} aria-hidden />
            </a>
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
