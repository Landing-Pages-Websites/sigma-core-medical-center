import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { DECISIONS } from "@/components/pages/pain-relief/content";
import { TallBracket } from "@/components/pages/shared/page-motifs";

const HEAD_STEPS = ["w-[28%] ml-[72%]", "w-[44%] ml-[56%]", "w-[60%] ml-[40%]", "w-[76%] ml-[24%]", "w-[60%] ml-[40%]", "w-[44%] ml-[56%]"] as const;
const FOOT_BARS = ["h-2", "h-2.5", "h-3", "h-3.5", "h-4", "h-5", "h-6", "h-7"] as const;

export function PainDecisionFactors(): React.ReactElement {
  return (
    <section id="decision-factors" className="relative overflow-hidden bg-royal text-white">
      <div className="grid lg:grid-cols-[54fr_46fr]">
        <div className="relative px-6 pt-14 pb-10 sm:px-10 lg:pt-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <h2 className="font-heading text-[clamp(2.8rem,5.8vw,5.3rem)] leading-none font-bold tracking-[-0.04em]">Decision Factors</h2>
          <div className="relative mt-6 max-w-[27rem] px-8 py-2">
            <TallBracket className="absolute inset-y-0 left-0 w-4 text-silver" />
            <p className="text-base leading-snug">
              <strong className="font-semibold">A thoughtful consultation starts with the right questions.</strong> Use the considerations below to guide your conversation and evaluate the quality and appropriateness of care.
            </p>
            <TallBracket side="right" className="absolute inset-y-0 right-0 w-4 text-silver" />
          </div>
          <span aria-hidden className="absolute right-0 bottom-6 hidden w-56 flex-col gap-2 lg:flex">
            {HEAD_STEPS.map((step, index) => (
              <span key={`${step}-${index}`} className={`block h-4 bg-navy/75 ${step}`} />
            ))}
          </span>
        </div>
        <div className="relative min-h-[18rem] lg:mt-12 lg:min-h-0">
          <div className="absolute inset-0 lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%,0_32%)]">
            <Image src="/images/pages/pain-decision-interior-v4.png" alt="Conceptual clinic reception with a charcoal feature wall" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover object-[25%_center]" />
            <Image src="/images/shared/logo.png" alt="" width={240} height={65} className="absolute top-[18%] left-[18%] h-auto w-[34%] drop-shadow-lg" />
          </div>
        </div>
      </div>

      <ol className="grid grid-cols-2 bg-royal sm:grid-cols-4 lg:grid-cols-8">
        {DECISIONS.map((question, index) => (
          <li
            key={question}
            className={`${index % 2 === 0 ? "bg-navy text-white" : "bg-[#ecebe7] text-navy"} flex min-h-32 items-center px-7 py-5 text-sm leading-snug font-semibold lg:-mr-4 lg:[clip-path:polygon(14%_0,100%_0,86%_100%,0_100%)] lg:px-8`}
          >
            {question}
          </li>
        ))}
      </ol>

      <div className="bg-navy">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:pl-[3.5rem]">
          <p className="flex items-center gap-3 text-base">
            <TallBracket className="h-8 w-2 text-silver" /> Fill in the answers only after discussion with you and verification by your clinician.
          </p>
          <span aria-hidden className="hidden items-end gap-1 md:flex">
            {FOOT_BARS.map((bar) => (
              <span key={bar} className={`block w-3 bg-silver/80 ${bar}`} />
            ))}
          </span>
        </div>
      </div>
      <div className="bg-chalk">
        <div className="mx-auto flex max-w-[90rem] gap-3 px-6 py-5 sm:px-10 lg:pl-[3.5rem]">
          {[
            { href: "/about", tone: "bg-royal hover:bg-royal-hover" },
            { href: "/book", tone: "bg-navy hover:bg-[#0b2546]" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${link.tone} inline-flex h-14 w-52 items-center justify-between px-8 font-heading text-2xl font-bold text-white transition-colors [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)]`}
            >
              {link.href} <ChevronRight size={26} aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
