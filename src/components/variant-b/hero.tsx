import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BRAND, HERO, PENDING } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { BracketMark, GhostWord, SteppedBars } from "@/components/variant-b/motifs";
import { paperButtonB } from "@/components/variant-b/buttons";

function HeroActionsB(): React.ReactElement {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <PendingAction
        label={
          <>
            <span className="flex items-center gap-3">
              <BracketMark />
              {HERO.primaryCta}
            </span>
            <ArrowRight size={18} aria-hidden />
          </>
        }
        title={PENDING.booking.title}
        message={PENDING.booking.message}
        className={paperButtonB}
      />
      <a href="#neuropathy" className={paperButtonB}>
        <span className="flex items-center gap-3">
          <BracketMark />
          {HERO.secondaryCta}
        </span>
        <ArrowRight size={18} aria-hidden />
      </a>
    </div>
  );
}

export function HeroB(): React.ReactElement {
  return (
    <section id="hero" aria-label="Introduction" className="bg-ink">
      <div className="bg-surface">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-4 sm:px-10">
          <Image
            src="/images/shared/logo.png"
            alt="Sigma Core Medical Center"
            width={300}
            height={81}
            priority
            className="h-12 w-auto sm:h-14"
          />
          <SteppedBars className="items-end" />
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 hidden w-[62%] bg-action lg:block"
          style={{ clipPath: "polygon(0 0, 100% 0, 86% 100%, 0 100%)" }}
        />
        <GhostWord
          word="Movement"
          className="top-[34%] left-2 hidden text-[9.5rem] whitespace-nowrap text-white/15 lg:block xl:text-[10.5rem]"
        />
        <div className="relative mx-auto max-w-[90rem] lg:grid lg:grid-cols-[57fr_43fr]">
          <div className="relative bg-action px-6 py-12 sm:px-10 lg:bg-transparent lg:py-20 lg:pr-20">
            <p className="text-sm font-semibold tracking-[0.22em] text-focus uppercase">
              {HERO.eyebrow}
            </p>
            <h1 className="mt-4 max-w-xl text-[2.7rem] leading-[1.04] font-semibold tracking-tight text-white sm:text-5xl xl:text-[4rem] xl:leading-[1.02]">
              {HERO.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white sm:text-xl">{HERO.body}</p>
            <div className="mt-10 lg:mt-12">
              <HeroActionsB />
            </div>
          </div>
          <div className="lg:flex lg:flex-col">
            <div className="relative h-72 sm:h-96 lg:min-h-0 lg:flex-1">
              <Image
                src="/images/shared/reception-1.png"
                alt="Sigma Core Medical Center reception with illuminated wall logo"
                fill
                priority
                sizes="(min-width: 1024px) 43vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="bg-charcoal px-6 py-5 sm:px-10 lg:px-8">
              <p className="font-display text-lg font-medium text-white italic">
                {BRAND.tagline}
              </p>
              <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-focus uppercase">
                {HERO.locationLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
