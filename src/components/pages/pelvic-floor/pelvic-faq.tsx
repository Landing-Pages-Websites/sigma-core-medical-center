import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CornerStripes, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

type FaqRow = { question: string; answer: string; action: { label: string; href?: string; policy?: "/privacy" } };

const FAQ_ROWS: readonly FaqRow[] = [
  {
    question: "Are privacy details available?",
    answer: "Privacy policy and visit confidentiality details are not yet available.",
    action: { label: "Privacy status", policy: "/privacy" },
  },
  {
    question: "Is online booking available?",
    answer: "Online scheduling and request forms are unavailable. Appointment and follow-up details have not been confirmed.",
    action: { label: "Check booking status", href: "/book" },
  },
  {
    question: "Where is the clinic?",
    answer: "Sigma Core serves the Richmond area. Confirmed location and visit details are unavailable.",
    action: { label: "Learn more about us", href: "/about" },
  },
  {
    question: "Why do individual questions require a provider?",
    answer: "Questions about your situation, options, and what may be appropriate need a provider’s professional assessment.",
    action: { label: "Check booking status", href: "/book" },
  },
];

const ROW_ACTION = "inline-flex items-center gap-2 text-sm text-royal hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]";

export function PelvicFaq(): React.ReactElement {
  return (
    <section id="faq" className="relative overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-10 right-0 z-20 hidden w-[20rem] lg:flex" />
      <div className="grid lg:grid-cols-[34fr_66fr]">
        <div className="relative px-6 pt-14 sm:px-10 lg:pt-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          <h2 className="flex items-start gap-4 font-heading text-[clamp(4.4rem,8.4vw,7.6rem)] leading-[0.85] font-bold tracking-[-0.05em]">
            <TallBracket className="h-20 w-4 shrink-0 text-silver" /> Faq
          </h2>
          <p className="mt-6 max-w-[19rem] pl-9 text-base leading-snug text-white/88">
            Here are answers about this page, scheduling availability, and policy status.
          </p>
        </div>
        <div className="relative mx-6 mt-8 min-h-56 sm:mx-10 lg:mx-0 lg:mt-12 lg:mr-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          <Image src="/images/pages/pain-route-panorama-v5.png" alt="Conceptual clinic reception and lounge" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-[30%_center]" />
        </div>
      </div>

      <div className="relative grid lg:grid-cols-[72fr_28fr]">
        <ul className="relative z-10 space-y-2 px-6 pt-6 pb-8 sm:px-10 lg:pr-0 lg:pb-10 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          {FAQ_ROWS.map((row) => (
            <li key={row.question} className="grid sm:grid-cols-[13rem_1fr]">
              <h3 className="flex items-center gap-4 bg-slate px-4 py-4 font-heading text-lg leading-tight font-bold">
                <TallBracket className="h-10 w-2 shrink-0 text-silver" /> {row.question}
              </h3>
              <div className="grid items-center gap-3 bg-[#ecebe7] px-5 py-4 text-ink sm:grid-cols-[1fr_auto] sm:gap-5 lg:[clip-path:polygon(0_0,96%_0,100%_100%,0_100%)] lg:pr-14">
                <p className="text-sm leading-snug">{row.answer}</p>
                <div className="sm:border-l sm:border-ink/15 sm:pl-5">
                  {row.action.href ? (
                    <Link href={row.action.href} className={ROW_ACTION}>
                      {row.action.label} <ArrowRight size={16} aria-hidden className="shrink-0" />
                    </Link>
                  ) : (
                    <PolicyLink href={row.action.policy} label={<>{row.action.label} <ArrowRight size={16} aria-hidden className="shrink-0" /></>} className={ROW_ACTION} />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <PrivacyFirst />
      </div>
      <div aria-hidden className="h-8 bg-royal" />
    </section>
  );
}

function PrivacyFirst(): React.ReactElement {
  return (
    <div className="bg-royal px-6 py-10 sm:px-10 lg:-ml-16 lg:pt-12 lg:pr-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pb-10 lg:pl-[26%] lg:[clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]">
      <p className="flex items-center gap-3 font-heading text-2xl font-bold">
        <TallBracket className="h-8 w-2 text-white" /> Privacy status
      </p>
      <p className="mt-2 text-xs leading-snug text-white/90">
        Privacy policy and Notice of Privacy Practices details are unavailable. The links show their current status.
      </p>
      <PolicyLink
        href="/notice-of-privacy-practices"
        label={<>NPP status <ArrowRight size={16} aria-hidden className="shrink-0" /></>}
        className="mt-4 inline-flex h-11 items-center gap-3 border border-white px-4 text-sm font-semibold transition-colors hover:bg-white hover:text-royal focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]"
      />
      <span aria-hidden className="mt-5 block h-px bg-white/40" />
      <p className="mt-4 font-heading text-xl font-bold">Visit information unavailable</p>
      <p className="mt-1 text-xs leading-snug text-white/90">Treatment, eligibility, insurance, pricing, and timing details are unavailable.</p>
    </div>
  );
}
