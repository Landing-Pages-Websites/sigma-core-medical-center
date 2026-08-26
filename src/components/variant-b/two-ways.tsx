import { ArrowRight } from "lucide-react";
import { PENDING, WAYS } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { Reveal } from "@/components/shared/reveal";
import { BracketMark, BracketMarkEnd } from "@/components/variant-b/motifs";
import { inverseButtonB, outlineButtonB } from "@/components/variant-b/buttons";

const CASCADE_BARS = ["ml-0 w-24", "ml-8 w-20", "ml-16 w-16", "ml-24 w-12", "ml-32 w-8"];

function GuidePanelB(): React.ReactElement {
  return (
    <Reveal className="max-w-xl bg-paper p-7 text-ink sm:p-9">
      <p className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
        <BracketMark className="h-4" />
        {WAYS.guide.label}
        <BracketMarkEnd className="h-4" />
      </p>
      <h3 className="mt-4 text-3xl leading-[1.1] font-semibold tracking-tight">
        {WAYS.guide.headline}
      </h3>
      <p className="mt-3 max-w-md text-lg text-charcoal/80">{WAYS.guide.body}</p>
      <PendingAction
        label={
          <>
            {WAYS.guide.cta} <ArrowRight size={18} aria-hidden />
          </>
        }
        title={PENDING.guide.title}
        message={PENDING.guide.message}
        className={`${outlineButtonB} mt-7 w-full sm:w-auto`}
      />
      <p className="mt-5 border-l-4 border-electric bg-white/70 p-3 text-sm text-muted">
        The resource title, media, and delivery details are pending customer approval. The guide
        is not yet available.
      </p>
    </Reveal>
  );
}

function BookingPanelB(): React.ReactElement {
  return (
    <Reveal className="bg-action p-7 text-white sm:p-9 lg:bg-transparent lg:p-0">
      <p className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
        <BracketMark className="h-4" />
        {WAYS.booking.label}
        <BracketMarkEnd className="h-4" />
      </p>
      <h3 className="mt-4 max-w-sm text-4xl leading-[1.04] font-semibold tracking-tight lg:text-5xl">
        {WAYS.booking.headline}
      </h3>
      <p className="mt-4 max-w-sm text-lg">{WAYS.booking.body}</p>
      <PendingAction
        label={
          <>
            {WAYS.booking.cta} <ArrowRight size={18} aria-hidden />
          </>
        }
        title={PENDING.booking.title}
        message={PENDING.booking.message}
        className={`${inverseButtonB} mt-8 w-full sm:w-auto`}
      />
    </Reveal>
  );
}

export function TwoWaysB(): React.ReactElement {
  return (
    <section id="next-steps" aria-label="Two ways forward" className="relative overflow-hidden bg-ink">
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 hidden w-[52%] bg-action lg:block"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <Reveal>
          <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-[2.75rem]">
            {WAYS.headline}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-[46fr_8fr_46fr] lg:items-center">
          <GuidePanelB />
          <div aria-hidden className="hidden flex-col gap-2 lg:flex">
            {CASCADE_BARS.map((bar) => (
              <span key={bar} className={`block h-1.5 bg-electric ${bar}`} />
            ))}
          </div>
          <BookingPanelB />
        </div>
        <p className="mt-14 flex max-w-md items-center gap-3 border border-white/25 p-4 text-sm text-white/70">
          <BracketMark className="h-4 shrink-0" />
          {WAYS.privacyNote}
        </p>
      </div>
    </section>
  );
}
