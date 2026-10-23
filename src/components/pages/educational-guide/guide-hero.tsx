import Image from "next/image";
import { FileText, ShieldCheck, SquarePlay, UserRound } from "lucide-react";
import { CornerStripes, TallBracket } from "@/components/pages/shared/page-motifs";

const GUIDE_FACTS = [
  { icon: SquarePlay, text: "A 7-minute self-assessment of the sensations you notice." },
  { icon: FileText, text: "A 7-day symptom tracker to bring to a clinician." },
  { icon: UserRound, text: "Request it with your contact details only." },
  { icon: ShieldCheck, text: "The scorecard cannot diagnose neuropathy." },
] as const;

export function GuideHero(): React.ReactElement {
  return (
    <section id="hero" className="relative overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-0 right-0 z-20 hidden w-[25rem] lg:flex" />
      <div className="grid lg:min-h-[23rem] lg:grid-cols-[52fr_48fr]">
        <div className="relative z-10 px-6 pt-14 pb-8 sm:px-10 lg:pt-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <div className="flex items-start gap-4">
            <TallBracket className="mt-2 h-36 w-6 text-silver sm:h-44 lg:h-[12.5rem]" />
            <h1 className="font-heading text-[clamp(2.6rem,5.2vw,4.9rem)] leading-[0.98] font-bold tracking-[-0.035em]">
              The Neuropathy Clarity Scorecard
            </h1>
          </div>
          <p className="mt-5 max-w-[36rem] text-lg leading-snug text-white/90 sm:ml-10">
            A 4-page PDF workbook: a 7-minute self-assessment plus a 7-day symptom tracker to organize what you feel and how it changes your daily life.
          </p>
        </div>
        <div className="relative min-h-[20rem] lg:min-h-0">
          <div className="absolute inset-0 lg:top-[26%] lg:-bottom-[42%] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
            <Image src="/images/pages/hormone-sources-lobby-v3.webp" alt="Conceptual clinic reception corridor with walnut paneling and lounge seating" fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover object-[45%_center]" />
          </div>
          <div className="absolute top-6 left-6 z-10 max-w-[19rem] bg-[#25282d] px-6 py-5 shadow-xl sm:left-10 lg:top-14 lg:left-[2%]">
            <p className="flex items-start gap-3 text-sm font-bold tracking-[0.04em] uppercase">
              <TallBracket className="h-9 w-2 text-silver" /> Free PDF download
            </p>
            <p className="mt-2 pl-5 text-sm leading-snug text-white/70">Available after you share your contact details below.</p>
          </div>
        </div>
      </div>
      <GuideFactsBand />
    </section>
  );
}

function GuideFactsBand(): React.ReactElement {
  return (
    <div className="relative grid lg:grid-cols-[57fr_43fr]">
      <div className="relative z-10">
        <ul className="grid gap-6 bg-royal px-6 py-7 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:gap-0 lg:pr-20 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:[clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%)]">
          {GUIDE_FACTS.map(({ icon: Icon, text }) => (
            <li key={text} className="lg:border-l lg:border-white/35 lg:px-4 lg:first:border-l-0 lg:first:pl-0">
              <span className="flex items-center gap-2">
                <TallBracket className="h-8 w-2 text-white" />
                <Icon size={26} strokeWidth={1.5} aria-hidden />
              </span>
              <p className="mt-3 text-[0.8rem] leading-snug text-white/95">{text}</p>
            </li>
          ))}
        </ul>
        <div className="relative bg-navy px-6 py-6 sm:px-10 lg:mr-[14%] lg:pl-[max(2.5rem,calc((100vw-90rem)/2+4.5rem))] lg:[clip-path:polygon(0_0,96%_0,100%_100%,0_100%)]">
          <TallBracket className="absolute top-6 bottom-6 left-6 w-2.5 text-silver sm:left-10 lg:left-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]" />
          <p className="max-w-[28rem] pl-6 font-display text-sm leading-snug text-white/80 italic">
            Information on this page does not provide diagnosis or individualized medical advice.
          </p>
        </div>
      </div>
      <div className="relative z-10 flex flex-col justify-end bg-royal px-6 py-8 sm:px-10 lg:-ml-[10%] lg:pt-16 lg:pb-8 lg:pl-[18%] lg:[clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]">
        <p className="max-w-[20rem] font-heading text-xl leading-tight font-bold">Request the scorecard with the form below.</p>
        <p className="relative mt-4 max-w-[17rem] border border-white/45 py-3 pr-4 pl-7 text-sm leading-snug">
          <TallBracket className="absolute top-3 bottom-3 left-3 w-1.5 text-white" />
          The form asks for contact details only, never symptoms or medical history.
        </p>
      </div>
    </div>
  );
}
