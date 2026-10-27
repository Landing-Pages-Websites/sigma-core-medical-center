import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ConsultationCtaProps = Readonly<{ servicesPage?: boolean }>;

export function ConsultationCta({ servicesPage = false }: ConsultationCtaProps = {}): React.ReactElement {
  return (
    <section id="consultation-cta" className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="h-2 bg-action" />
      <div className="mx-auto grid max-w-[90rem] gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-16 lg:px-16 lg:py-20">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-silver uppercase">Your next step</p>
          <h2 className="mt-3 max-w-3xl font-heading text-[clamp(2.8rem,5.6vw,5.2rem)] leading-[0.95] font-bold tracking-[-0.035em]">
            Start with a consultation.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            A consultation can help clarify your goals, questions, and possible next steps with a qualified healthcare professional.
          </p>
          <p className="mt-5 max-w-2xl border-l-2 border-action pl-4 text-sm leading-relaxed text-white/70">
            {servicesPage ? "Review consultation and scheduling information, then decide whether you would like to contact the center. Availability and fit require confirmation." : "Explore the current consultation and scheduling information before you decide whether to request an appointment. Availability and fit require confirmation."}
          </p>
        </div>
        <div className="border border-white/25 bg-white/5 p-7 sm:p-9">
          <p className="text-sm font-semibold tracking-[0.12em] text-silver uppercase">Consultation information</p>
          <p className="mt-4 text-2xl font-semibold leading-tight">Questions first. Informed decisions next.</p>
          <Link
            href="/book"
            className="mt-7 inline-flex min-h-14 items-center gap-4 bg-action px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-hover focus-visible:outline-2 focus-visible:outline-offset-[-4px]"
          >
            {servicesPage ? "Review consultation information" : "Explore consultation options"} <ArrowRight size={22} aria-hidden className="shrink-0" />
          </Link>
          <p className="mt-5 text-xs leading-relaxed text-white/60">Educational information only. A consultation does not establish candidacy or guarantee a result.</p>
        </div>
      </div>
    </section>
  );
}
