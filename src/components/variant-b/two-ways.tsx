import { ArrowRight } from "lucide-react";
import { PENDING, WAYS } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { BracketMark, BracketMarkEnd } from "@/components/variant-b/motifs";
import { inverseButtonB, outlineButtonB } from "@/components/variant-b/buttons";

const CASCADE_BARS = ["ml-40", "ml-32", "ml-24", "ml-16", "ml-8", "ml-0"];

function GuidePanelB(): React.ReactElement {
  return (
    <div data-b-reveal="left" className="relative z-20 mx-auto w-full max-w-xl bg-surface p-7 pb-11 text-ink [clip-path:polygon(0_0,86%_0,86%_8%,94%_8%,94%_16%,100%_16%,100%_92%,92%_92%,83%_100%,0_100%)] sm:p-9 sm:pb-12 md:mr-auto md:ml-0 md:w-[72%] md:max-w-none lg:min-h-[25rem] lg:w-auto lg:p-10 lg:pb-12 lg:[clip-path:polygon(0_0,82%_0,82%_9%,91%_9%,91%_18%,100%_18%,100%_90%,88%_90%,76%_100%,0_100%)] xl:absolute xl:top-[12.4rem] xl:left-0 xl:mx-0 xl:h-[24.5rem] xl:min-h-0 xl:w-[43.5%] xl:px-[clamp(3.75rem,4.2vw,5rem)] xl:py-6 xl:[clip-path:polygon(0_0,73%_0,73%_10%,88%_10%,88%_20%,100%_20%,100%_87%,80%_87%,58%_100%,0_100%)]">
      <p className="flex items-center gap-3 text-sm font-semibold tracking-wide sm:text-base xl:text-lg">
        <BracketMark className="h-8 w-3 text-silver" />
        {WAYS.guide.label}
        <BracketMarkEnd className="h-8 w-3 text-silver" />
      </p>
      <h3 className="mt-4 max-w-sm text-[1.9rem] leading-[1.05] font-semibold tracking-tight sm:text-[2.1rem] xl:text-[2.2rem]">
        {WAYS.guide.headline}
      </h3>
      <p className="mt-4 max-w-sm text-base leading-snug text-charcoal/80 sm:text-lg">{WAYS.guide.body}</p>
      <PendingAction
        label={
          <>
            {WAYS.guide.cta} <ArrowRight size={18} aria-hidden />
          </>
        }
        title={PENDING.guide.title}
        message={PENDING.guide.message}
        className={`${outlineButtonB} mt-5 w-full max-sm:px-3 max-sm:text-sm sm:w-auto lg:min-h-12 lg:px-6 xl:text-lg`}
      />
      <p className="mt-5 max-w-sm border-l-[3px] border-[#a55c32] px-4 text-sm leading-snug text-muted">
        {WAYS.guide.availabilityNote}
      </p>
    </div>
  );
}

function BookingPanelB(): React.ReactElement {
  return (
    <div data-b-reveal="right" data-b-delay="1" className="relative z-20 w-full bg-action p-7 pb-9 text-white sm:p-9 md:-mt-10 md:ml-auto md:w-[72%] md:pt-14 lg:mt-14 lg:min-h-[24rem] lg:w-auto lg:p-10 lg:pt-14 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%,0_12%)] xl:absolute xl:top-[17.9rem] xl:left-[59.8%] xl:mt-0 xl:ml-0 xl:min-h-0 xl:w-[39%] xl:bg-transparent xl:p-0 xl:[clip-path:none]">
      <span aria-hidden className="absolute top-[4.75rem] right-0 hidden h-44 w-5 border-y-[3px] border-r-[3px] border-surface/65 xl:block" />
      <p className="flex items-center gap-3 text-sm font-semibold tracking-wide sm:text-base xl:text-lg">
        <BracketMark className="h-10 w-3 text-surface/75" />
        {WAYS.booking.label}
        <BracketMarkEnd className="h-10 w-3 text-surface/75" />
      </p>
      <h3 className="mt-5 max-w-[20rem] text-[2.65rem] leading-[0.88] font-semibold tracking-[-0.045em] sm:max-w-[24rem] sm:text-[3.3rem] lg:max-w-[23rem] lg:text-[3.6rem] xl:max-w-[34rem] xl:text-[clamp(5.25rem,6.9vw,6.25rem)] xl:tracking-[-0.055em]">
        {WAYS.booking.headline}
      </h3>
      <p className="mt-5 max-w-[23rem] text-base leading-snug sm:text-lg xl:text-xl">{WAYS.booking.body}</p>
      <PendingAction
        label={
          <>
            {WAYS.booking.cta} <ArrowRight size={18} aria-hidden />
          </>
        }
        title={PENDING.booking.title}
        message={PENDING.booking.message}
        className={`${inverseButtonB} mt-5 w-full sm:w-auto xl:min-h-[4.5rem] xl:min-w-[23.75rem] xl:px-9 xl:text-[1.65rem]`}
      />
    </div>
  );
}

export function TwoWaysB(): React.ReactElement {
  return (
    <section id="next-steps" aria-label="Two ways forward" className="relative overflow-hidden bg-ink">
      <div className="relative w-full px-5 py-12 sm:px-8 sm:py-14 lg:min-h-[44rem] lg:px-10 xl:min-h-[45.25rem] xl:px-0 xl:py-0">
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block">
          <span className="absolute inset-0 bg-action [clip-path:polygon(65.25%_28%,100%_28%,100%_100%,32.6%_100%)]" />
          <span className="absolute inset-0 bg-charcoal [clip-path:polygon(60.4%_17.8%,100%_17.8%,100%_28%,65.25%_28%,32.6%_100%,26%_100%,54.5%_38.5%,54.5%_31.5%)]" />
          <span className="absolute top-[42.5%] right-0 h-[38.5%] w-3 bg-charcoal" />
        </div>

        <div data-b-reveal="up" className="relative z-30 xl:absolute xl:top-8 xl:left-[4.1%]">
          <h2 className="max-w-[42rem] text-[2.5rem] leading-[0.98] font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:max-w-none lg:text-[3.25rem] xl:max-w-[42rem] xl:text-[clamp(4rem,5.25vw,4.75rem)]">
            <span>Choose the next</span>
            <br className="hidden xl:block" />
            <span> step that fits today</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 md:gap-0 lg:grid-cols-[1.04fr_0.96fr] lg:items-start xl:contents">
          <GuidePanelB />
          <div aria-hidden data-b-reveal="step" data-b-delay="2" className="absolute top-[19.4rem] left-[29%] z-30 hidden flex-col gap-3.5 xl:flex">
            {CASCADE_BARS.map((bar) => (
              <span key={bar} className={`block h-5 w-[6.5rem] bg-electric ${bar}`} />
            ))}
          </div>
          <BookingPanelB />
        </div>

        <p data-b-reveal="up" data-b-delay="3" className="relative z-30 mt-9 flex max-w-[23rem] items-center gap-3 border-x border-white/35 py-2 text-xs leading-relaxed text-white/70 sm:mt-10 sm:text-sm lg:absolute lg:bottom-7 lg:left-10 lg:mt-0 xl:bottom-11 xl:left-[4.1%]">
          <BracketMark className="h-10 w-3 shrink-0 text-silver" />
          {WAYS.privacyNote}
          <BracketMarkEnd className="h-10 w-3 shrink-0 text-silver" />
        </p>
      </div>
    </section>
  );
}
