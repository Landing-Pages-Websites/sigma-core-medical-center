import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

const PRINCIPLES = [
  { title: "One clear next step.", body: ["We focus on what’s appropriate now", "and guide the next step forward."] },
  { title: "Your care, your conversation.", body: ["Your questions and goals are unique.", "The right plan is built in a care conversation."] },
  { title: "Honest about outcomes.", body: ["Human performance varies.", "We set realistic expectations and", "focus on consistent progress."] },
] as const;

export function CarePrinciples(): React.ReactElement {
  return (
    <section id="care-principles" className="relative overflow-hidden bg-slate text-white">
      <div className="grid lg:grid-cols-[48fr_52fr]">
        <div className="relative z-10 px-6 pt-14 pb-10 sm:px-10 lg:pt-16 lg:pb-60 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <h2 className="flex items-center gap-3 font-heading text-[clamp(2.8rem,5.4vw,4.8rem)] leading-none font-bold tracking-[-0.035em]">
            <TallBracket className="h-16 w-4 text-silver sm:h-20" />
            Care Principles
            <TallBracket side="right" className="h-16 w-4 text-silver sm:h-20" />
          </h2>
          <ul className="mt-8 space-y-7">
            {PRINCIPLES.map((principle) => (
              <li key={principle.title} className="flex gap-6">
                <StairSteps count={4} direction="up" className="mt-1 shrink-0 text-[0.45rem]" />
                <div>
                  <h3 className="font-heading text-xl font-bold sm:text-2xl">{principle.title}</h3>
                  <p className="mt-1.5 text-sm leading-snug text-white/80 sm:text-base">
                    {principle.body.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[20rem] sm:min-h-[26rem] lg:mt-24 lg:min-h-0">
          <div className="absolute inset-0 lg:[clip-path:polygon(18%_0,100%_0,100%_100%,8%_100%,8%_80%,0_80%,0_26%)]">
            <Image src="/images/pages/hormone-orientation-lobby-v3.png" alt="Conceptual clinic reception with a navy feature wall and walnut desk" fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover object-[30%_center]" />
            <Image src="/images/shared/logo.png" alt="" width={240} height={65} className="absolute top-[16%] left-[30%] h-auto w-[38%] drop-shadow-lg" />
          </div>
        </div>
      </div>
      <ReadyToTalk />
    </section>
  );
}

function ReadyToTalk(): React.ReactElement {
  return (
    <div className="relative z-20 grid lg:absolute lg:inset-x-0 lg:bottom-0 lg:grid-cols-[55fr_45fr]">
      <Link
        href="/book"
        className="group block bg-royal px-6 py-8 transition-colors hover:bg-royal-hover sm:px-10 lg:pt-10 lg:pb-8 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:[clip-path:polygon(0_22%,58%_22%,58%_10%,72%_10%,72%_0,86%_0,86%_22%,92%_22%,100%_100%,0_100%)]"
      >
        <span className="flex items-center gap-2 text-xs font-semibold lg:mt-8">
          <TallBracket className="h-5 w-1.5 text-white" /> Ready to talk <TallBracket side="right" className="h-5 w-1.5 text-white" />
        </span>
        <span className="mt-2 flex items-center gap-4 font-heading text-3xl font-bold sm:text-4xl">
          Book an appointment <ArrowRight size={30} className="transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
        <span className="mt-2 block max-w-[20rem] text-sm leading-snug text-white/85">Use the approved GoHighLevel calendar to request your appointment.</span>
      </Link>
      <div className="flex items-end bg-navy px-6 py-5 sm:px-10 lg:mt-auto lg:bg-transparent lg:py-6">
        <p className="relative ml-auto max-w-[24rem] px-6 py-1 text-xs leading-snug text-white/75 lg:bg-navy/85 lg:py-3">
          <TallBracket className="absolute inset-y-0 left-0 w-2 text-silver" />
          General marketing forms do not collect free-text medical history or symptom narratives.
          <TallBracket side="right" className="absolute inset-y-0 right-0 w-2 text-silver" />
        </p>
      </div>
    </div>
  );
}
