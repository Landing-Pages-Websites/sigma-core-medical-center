import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HormoneConsultationCta(): React.ReactElement {
  return (
    <section data-mega-section="consultation-cta" id="consultation-cta" className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="h-2 bg-action" />
      <div className="mx-auto grid max-w-[90rem] gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-16 lg:px-16 lg:py-20">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-silver uppercase">YOUR NEXT STEP STARTS HERE</p>
          <h2 className="mt-3 max-w-3xl font-heading text-[clamp(2.2rem,4.2vw,3.9rem)] leading-[1.02] font-bold tracking-[-0.03em]">
            Ready to Find Out What&apos;s Really Going On?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            If you&apos;re tired of feeling exhausted, frustrated with changes in your body, or simply not feeling like yourself, it may be time to explore some answers.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            At Sigma Core Medical Center, we&apos;ll help you understand how our personalized approach to hormone health works and whether further evaluation may be right for you.
          </p>
          <p className="mt-5 max-w-2xl border-l-2 border-action pl-4 text-lg font-semibold leading-relaxed text-white">
            You deserve to understand your options. It starts with one conversation.
          </p>
        </div>
        <div className="border border-white/25 bg-white/5 p-7 sm:p-9">
          <p className="text-sm font-semibold tracking-[0.12em] text-silver uppercase">LET&apos;S TALK ABOUT YOUR HEALTH</p>
          <p className="mt-4 text-2xl font-semibold leading-tight">Discover What&apos;s Possible With Personalized Hormone Care.</p>
          <Link data-mega-cta="book-appointment" href="https://go.sigmacoremedicalcenter.com/" className="mt-7 inline-flex min-h-14 items-center gap-4 bg-action px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-hover focus-visible:outline-2 focus-visible:outline-offset-[-4px]">
            Request My Free Hormone Consultation <ArrowRight size={22} aria-hidden className="shrink-0" />
          </Link>
          <p className="mt-5 text-xs leading-relaxed text-white/60">Educational information only. A consultation does not establish candidacy or guarantee a result.</p>
        </div>
      </div>
    </section>
  );
}
