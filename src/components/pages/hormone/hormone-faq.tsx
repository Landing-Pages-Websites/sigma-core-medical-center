import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CornerStripes, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

const FAQ_ROWS = [
  {
    question: "Why does individualized assessment matter?",
    answer: "Your goals, routines, and needs are your own. Individual care decisions require a qualified clinician.",
  },
  {
    question: "Does this page provide medical advice?",
    answer: "No. This site is for general information only and does not provide medical advice. Your care decisions belong in a conversation with a qualified clinician.",
  },
  {
    question: "Is online booking available?",
    answer: "Online scheduling and appointment details are not yet available. The booking page shows current status.",
  },
  {
    question: "Where is the clinic located?",
    answer: "Sigma Core serves the Richmond area. Confirmed address and contact details are unavailable.",
  },
] as const;

const OUTLINE_BUTTON = "inline-flex h-12 w-full items-center justify-between gap-4 border border-white/80 px-5 text-sm font-semibold transition-colors hover:bg-white hover:text-royal focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]";

export function HormoneFaq(): React.ReactElement {
  return (
    <section id="faq" className="relative overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-6 right-0 hidden w-[24rem] lg:flex" />
      <div aria-hidden className="absolute right-0 bottom-0 hidden h-[64%] w-[30%] bg-royal [clip-path:polygon(100%_0,100%_100%,0_100%)] lg:block" />
      <div className="relative grid lg:grid-cols-[33fr_67fr]">
        <div className="flex flex-col pt-14 lg:pt-16">
          <div className="px-6 sm:px-10 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
            <h2 className="font-heading text-[clamp(5rem,10vw,9rem)] leading-[0.8] font-bold tracking-[-0.05em]">Faq</h2>
            <p className="mt-6 max-w-[17rem] text-sm leading-snug text-white/85">Answers about this page and information availability.</p>
            <p className="relative mt-6 max-w-[18rem] pl-6 text-sm leading-snug text-white/85">
              <TallBracket className="absolute top-0 left-0 h-12 w-2 text-silver" />
              Your goals are unique. That’s why individualized assessment matters. This page explains how we approach care, what this site does (and doesn’t) offer, and how to take the next step.
            </p>
          </div>
          <div className="relative mt-8 min-h-52 flex-1 lg:mr-6 lg:[clip-path:polygon(0_0,86%_0,100%_100%,0_100%)]">
            <Image src="/images/pages/hormone-faq-lobby-v3.png" alt="Conceptual warm clinic reception and lounge" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-[25%_center]" />
          </div>
        </div>
        <div className="relative px-6 py-10 sm:px-10 lg:py-24 lg:pr-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pl-4">
          <ul className="space-y-3 lg:max-w-[46rem]">
            {FAQ_ROWS.map((row) => (
              <li key={row.question} className="grid gap-3 bg-slate px-5 py-5 shadow-[0_12px_24px_rgb(0_0_0/0.25)] sm:grid-cols-[1fr_1.15fr] sm:gap-6">
                <h3 className="flex gap-4 font-heading text-lg leading-tight font-bold sm:text-xl">
                  <TallBracket className="h-12 w-2.5 shrink-0 text-silver" /> {row.question}
                </h3>
                <p className="text-xs leading-snug text-white/80">{row.answer}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 sm:ml-auto sm:w-64 lg:absolute lg:right-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:bottom-10 lg:mt-0">
            <Link href="/book" className={OUTLINE_BUTTON}>
              Check booking status <ArrowRight size={18} aria-hidden className="shrink-0" />
            </Link>
            <PolicyLink label={<>Terms status <ArrowRight size={18} aria-hidden className="shrink-0" /></>} className={OUTLINE_BUTTON} />
          </div>
        </div>
      </div>
      <div aria-hidden className="h-10 bg-royal" />
    </section>
  );
}
