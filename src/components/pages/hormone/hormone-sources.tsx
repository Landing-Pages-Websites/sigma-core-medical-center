import Image from "next/image";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

const SOURCES = [
  { name: "U.S. Food and Drug Administration (FDA)", body: "Information on hormone products, safety communications, and consumer updates.", url: "www.fda.gov" },
  { name: "Endocrine Society", body: "Clinical practice guidelines and position statements on hormone-related conditions.", url: "www.endocrine.org" },
  { name: "The Menopause Society", body: "Evidence-based resources on menopause and hormone therapy.", url: "www.menopause.org" },
] as const;

export function HormoneSources(): React.ReactElement {
  return (
    <section id="medical-sources" className="relative overflow-hidden bg-chalk text-ink">
      <div aria-hidden className="h-2 bg-royal" />
      <div className="mx-auto grid max-w-[90rem] gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[57fr_43fr] lg:gap-2 lg:py-12 lg:pl-[3.5rem]">
        <div className="relative">
          <h2 className="font-heading text-[clamp(2.8rem,5.6vw,5.1rem)] leading-none font-bold tracking-[-0.035em] text-navy">Medical Sources</h2>
          <p className="mt-3 max-w-[22rem] text-lg leading-snug text-ink/85">General further-reading context. Clinical review and source-selection details are unavailable.</p>
          <StairSteps count={3} direction="up" className="absolute top-[34%] right-6 hidden text-[0.75rem] lg:flex" />
          <div className="relative mt-6 lg:mr-6">
            <TallBracket className="absolute top-4 bottom-10 -left-4 w-3 text-silver" />
            <ul className="relative z-10 space-y-3 bg-[#ebe8e2] px-6 py-5 lg:mr-[20%]">
              {SOURCES.map((source) => (
                <li key={source.name}>
                  <h3 className="font-heading text-lg font-bold text-navy">{source.name}</h3>
                  <p className="text-xs leading-snug text-ink/75">{source.body}</p>
                  <p className="text-xs text-royal">{source.url}</p>
                </li>
              ))}
            </ul>
            <div aria-hidden className="hidden h-10 lg:flex lg:items-end lg:justify-end lg:pr-[10%]">
              <span className="-mt-28 block h-36 w-24 bg-gradient-to-b from-[#3a3c40] to-[#1d1f22]" />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative min-h-60 lg:min-h-[19rem]">
            <Image src="/images/pages/hormone-sources-lobby-v3.png" alt="Conceptual bright clinic lounge and reception" fill sizes="(min-width: 1024px) 43vw, 100vw" className="object-cover object-[35%_center]" />
          </div>
          <p className="relative mt-3 ml-auto flex w-fit items-center gap-3 px-2 text-xs text-ink/80">
            <TallBracket className="h-7 w-1.5 text-silver" /> General website information is not medical advice.
            <TallBracket side="right" className="h-7 w-1.5 text-silver" />
          </p>
        </div>
      </div>
    </section>
  );
}
