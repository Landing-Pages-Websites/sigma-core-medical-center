import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crosshair, MessagesSquare, UserRound } from "lucide-react";
import { PendingAction } from "@/components/shared/pending-action";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";
import { PENDING, WAYS } from "@/content/site";

const CONSIDERATIONS = [
  { title: "Your personal goals", body: "What are you hoping to understand or address? What matters most in your decision?", icon: Crosshair, offset: "lg:mt-0" },
  { title: "Your informed questions", body: "What would you like clarity on? What concerns or unknowns do you want to explore?", icon: MessagesSquare, offset: "lg:mt-6" },
  { title: "Your individualized discussion", body: "A conversation, not a commitment. We will help you sort through options and next steps.", icon: UserRound, offset: "lg:-mt-4" },
] as const;

export function RegenerativeDecisionFactors(): React.ReactElement {
  return (
    <section id="decision-factors" className="relative overflow-hidden bg-slate text-white">
      <div className="absolute inset-y-0 right-0 hidden w-[56%] lg:block">
        <Image src="/images/pages/hormone-faq-lobby-v3.png" alt="" fill sizes="56vw" className="object-cover object-[60%_bottom] opacity-90" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-slate via-slate/40 to-transparent" />
      </div>
      <div className="relative grid lg:min-h-[40rem] lg:grid-cols-[45fr_55fr]">
        <div className="px-6 pt-14 pb-10 sm:px-10 lg:pt-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          <h2 className="font-heading text-[clamp(2.8rem,5.4vw,4.9rem)] leading-none font-bold tracking-[-0.04em]">Decision Factors</h2>
          <p className="mt-4 max-w-[27rem] text-sm leading-snug text-white/88">
            Good decisions start with clarity, not certainty. There is uncertainty in any decision. Alternatives may exist. Your choice should reflect your goals, values, and what matters most to you. We avoid testimonials as clinical substantiation and do not make claims based only on mechanism.
          </p>
          <StairSteps count={6} direction="down" className="mt-4 ml-auto hidden w-fit text-[0.65rem] lg:mr-[-1rem] lg:flex" />
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-[#4f9bf0]">
                <TallBracket className="h-6 w-1.5 text-white/70" /> {WAYS.guide.label} <TallBracket side="right" className="h-6 w-1.5 text-white/70" />
              </p>
              <h3 className="mt-3 font-heading text-xl leading-tight font-bold">{WAYS.guide.headline}</h3>
              <p className="mt-2 text-xs leading-snug text-white/80">{WAYS.guide.body}</p>
              <PendingAction
                label={<>{WAYS.guide.cta} <ArrowRight size={16} aria-hidden /></>}
                title={PENDING.guide.title}
                message={PENDING.guide.message}
                className="mt-4 inline-flex h-10 items-center gap-3 border border-[#4f9bf0] px-4 text-xs font-semibold text-[#4f9bf0] transition-colors hover:bg-[#4f9bf0] hover:text-navy"
              />
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-[#4f9bf0]">
                <TallBracket className="h-6 w-1.5 text-white/70" /> {WAYS.booking.label} <TallBracket side="right" className="h-6 w-1.5 text-white/70" />
              </p>
              <h3 className="mt-3 font-heading text-xl leading-tight font-bold">Book an appointment</h3>
              <p className="mt-2 text-xs leading-snug text-white/80">{WAYS.booking.body}</p>
              <Link href="/book" className="mt-4 inline-flex h-10 items-center gap-3 bg-royal px-4 text-xs font-semibold transition-colors hover:bg-royal-hover">
                {WAYS.booking.cta} <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
          <p className="relative mt-8 max-w-[22rem] px-5 text-xs leading-snug text-white/75">
            <TallBracket className="absolute inset-y-0 left-0 w-2 text-silver" />
            {WAYS.privacyNote}
            <TallBracket side="right" className="absolute inset-y-0 right-0 w-2 text-silver" />
          </p>
        </div>
        <Considerations />
      </div>
      <div className="relative flex justify-end">
        <div className="flex items-center gap-4 bg-royal px-8 py-3 text-xs lg:w-[45%] lg:[clip-path:polygon(4%_0,100%_0,100%_100%,0_100%)] lg:pl-16">
          Learn more about our policies and terms
          <span className="relative ml-auto px-3">
            <TallBracket className="absolute inset-y-0 left-0 w-1.5 text-white" />
            <PolicyLink label="/terms" className="font-semibold hover:underline" />
            <TallBracket side="right" className="absolute inset-y-0 right-0 w-1.5 text-white" />
          </span>
        </div>
      </div>
    </section>
  );
}

function Considerations(): React.ReactElement {
  return (
    <div className="relative px-6 pb-12 sm:px-10 lg:pt-16 lg:pr-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pl-4">
      <h3 className="font-heading text-lg font-bold">Three things to consider before you decide</h3>
      <ul className="mt-5 grid gap-3 sm:grid-cols-3 sm:gap-2">
        {CONSIDERATIONS.map(({ title, body, icon: Icon, offset }) => (
          <li
            key={title}
            className={`${offset} bg-[#1d232c]/95 px-5 pt-6 pb-8 shadow-[0_18px_36px_rgb(0_0_0/0.35)] sm:[clip-path:polygon(0_0,100%_0,100%_86%,82%_100%,0_100%)]`}
          >
            <Icon size={40} strokeWidth={1.4} className="text-[#4f9bf0]" aria-hidden />
            <h4 className="mt-4 font-heading text-base leading-tight font-bold text-[#4f9bf0]">{title}</h4>
            <p className="mt-2 text-xs leading-snug text-white/85">{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
