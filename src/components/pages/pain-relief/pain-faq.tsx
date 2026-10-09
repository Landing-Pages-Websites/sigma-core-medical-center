import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PAIN_FAQ } from "@/components/pages/pain-relief/content";
import { RisingBars, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

const CONNECT_LINK = "relative flex min-h-11 items-center gap-3 py-2 justify-between px-5 font-heading text-lg font-bold text-white transition-colors hover:text-focus focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]";

export function PainFaq(): React.ReactElement {
  return (
    <section id="faq" className="relative overflow-hidden bg-chalk text-ink">
      <div className="grid lg:grid-cols-[32fr_68fr]">
        <div className="flex flex-col">
          <div className="px-6 pt-14 pb-8 sm:px-10 lg:pt-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
            <h2 className="flex items-start gap-3 font-heading text-[clamp(4.4rem,8vw,7.4rem)] leading-[0.82] font-bold tracking-[-0.05em] text-navy">
              <TallBracket className="h-28 w-6 shrink-0 text-royal" /> Faq
            </h2>
            <p className="mt-5 max-w-[15rem] font-heading text-xl leading-tight font-bold text-navy">Clear answers to common questions about this page and how to get started.</p>
            <RisingBars count={7} className="mt-4 h-10 text-[1.15rem]" />
            <p className="relative mt-6 pl-6 text-xs leading-snug">
              <TallBracket className="absolute inset-y-0 left-0 w-2.5 text-royal" />
              <strong className="block text-sm text-navy">Need something else?</strong>
              Further details are unavailable.
              <br />
              No publication date has been supplied.
            </p>
          </div>
          <div className="relative min-h-52 flex-1">
            <Image src="/images/pages/hormone-faq-lobby-v3.png" alt="Conceptual warm clinic reception and lounge" fill sizes="(min-width: 1024px) 32vw, 100vw" className="object-cover object-[25%_center]" />
            <Image src="/images/shared/logo.png" alt="" width={240} height={65} className="absolute top-[16%] left-[6%] h-auto w-[44%] drop-shadow-lg" />
          </div>
        </div>
        <div className="relative grid gap-0 px-6 py-12 sm:px-10 lg:grid-cols-[1fr_16rem] lg:py-14 lg:pr-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pl-0">
          <div className="space-y-1 lg:z-10">
            <h3 className="grid grid-cols-[4.5rem_1fr] bg-[#dcd8d0] font-heading text-[clamp(1.6rem,2.6vw,2.4rem)] leading-tight font-bold text-navy lg:-mr-24 lg:[clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%)]">
              <span className="flex items-center justify-center bg-navy">
                <TallBracket className="h-16 w-3 text-royal" />
              </span>
              <span className="px-8 py-10 lg:pr-36">{PAIN_FAQ.question}</span>
            </h3>
            {PAIN_FAQ.answers.map((answer) => (
              <p key={answer} className="grid grid-cols-[4.5rem_1fr] bg-[#e4e1db] text-sm leading-snug text-ink/90">
                <span className="flex items-center justify-center bg-navy">
                  <TallBracket className="h-8 w-2 text-royal" />
                </span>
                <span className="px-8 py-5">{answer}</span>
              </p>
            ))}
          </div>
          <div className="relative mt-4 flex flex-col justify-end bg-royal px-4 py-6 lg:mt-14 lg:-mb-14 lg:pt-40">
            <TallBracket side="right" className="absolute top-36 right-4 hidden h-8 w-6 border-b-0 text-white lg:block" />
            <p className="font-heading text-lg font-bold">Availability</p>
            <p className="mt-1 text-xs leading-snug text-white/85">Scheduling and terms are unavailable. These links show their status.</p>
            <div className="mt-4 space-y-3">
              <Link href="/book" className={CONNECT_LINK}>
                <TallBracket className="absolute inset-y-0 left-0 w-2 text-white" /> Check booking status <ArrowRight size={20} aria-hidden className="shrink-0" />
                <TallBracket side="right" className="absolute inset-y-0 right-0 w-2 text-white" />
              </Link>
              <PolicyLink
                label={
                  <>
                    <TallBracket className="absolute inset-y-0 left-0 w-2 text-white" /> Terms status <ArrowRight size={20} aria-hidden className="shrink-0" />
                    <TallBracket side="right" className="absolute inset-y-0 right-0 w-2 text-white" />
                  </>
                }
                className={`${CONNECT_LINK} w-full`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
