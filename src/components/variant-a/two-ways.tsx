import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PENDING, WAYS } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { Reveal } from "@/components/shared/reveal";
import { outlineButtonA, primaryButtonA } from "@/components/variant-a/buttons";

function GuideCardA(): React.ReactElement {
  return (
    <article className="flex flex-col overflow-hidden rounded-md bg-surface">
      <div className="relative h-52 lg:h-56">
        <Image
          src="/images/variant-a/lifestyle-reading-guide.jpg"
          alt="Adult reading printed pages in a bright living room"
          fill
          sizes="(min-width: 1024px) 38vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div aria-hidden className="h-1 w-12 bg-electric" />
        <p className="mt-4 text-sm font-semibold tracking-wide text-action uppercase">
          {WAYS.guide.label}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
          {WAYS.guide.headline}
        </h3>
        <p className="mt-3 text-lg text-muted">{WAYS.guide.body}</p>
        <PendingAction
          label={WAYS.guide.cta}
          title={PENDING.guide.title}
          message={PENDING.guide.message}
          className={`${outlineButtonA} mt-6 w-full`}
        />
        <p className="mt-4 rounded-sm border border-silver/70 bg-white/50 p-3 text-sm text-muted">
          The resource title, media, and delivery details are pending customer approval. The
          guide is not yet available.
        </p>
      </div>
    </article>
  );
}

function BookingCardA(): React.ReactElement {
  return (
    <article className="relative overflow-hidden rounded-md border border-white/80 bg-charcoal">
      <Image
        src="/images/variant-a/lifestyle-phone-outdoors.jpg"
        alt="Adult reading a phone at an outdoor table beside a coffee cup and potted plant"
        fill
        sizes="(min-width: 1024px) 66vw, 100vw"
        className="object-cover object-[62%_30%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 via-30% to-transparent to-70% lg:via-25% lg:to-60%"
      />
      <div className="relative flex min-h-96 max-w-md flex-col justify-center p-8 sm:min-h-[26rem] sm:p-10 lg:min-h-[30rem] lg:p-14">
        <div aria-hidden className="h-1 w-12 bg-electric" />
        <p className="mt-6 text-sm font-semibold tracking-wide text-silver uppercase">
          {WAYS.booking.label}
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {WAYS.booking.headline}
        </h3>
        <p className="mt-4 max-w-72 text-lg text-white/85 sm:max-w-xs">{WAYS.booking.body}</p>
        <PendingAction
          label={
            <>
              {WAYS.booking.cta} <ArrowRight size={18} aria-hidden />
            </>
          }
          title={PENDING.booking.title}
          message={PENDING.booking.message}
          className={`${primaryButtonA} mt-10 w-full sm:w-fit sm:px-8`}
        />
      </div>
    </article>
  );
}

export function TwoWaysA(): React.ReactElement {
  return (
    <section id="next-steps" aria-label="Two ways forward" className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl leading-[1.18] font-semibold tracking-tight text-white sm:text-[2.6rem]">
            {WAYS.headline}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[31fr_69fr]">
          <GuideCardA />
          <BookingCardA />
        </div>
        <p className="mt-10 flex items-start gap-3 border-t border-white/10 pt-5 text-base text-white/70">
          <ShieldCheck size={20} aria-hidden className="mt-0.5 shrink-0 text-focus" />
          {WAYS.privacyNote}
        </p>
      </div>
    </section>
  );
}
