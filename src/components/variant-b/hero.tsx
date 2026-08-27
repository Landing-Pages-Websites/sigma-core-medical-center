import Image from "next/image";
import { ArrowUpRight, CalendarDays, ChevronRight } from "lucide-react";
import { BRAND, HERO, PENDING } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { GhostWord } from "@/components/variant-b/motifs";

function HeroActionsB(): React.ReactElement {
  return (
    <div className="flex w-full max-w-[27rem] flex-col gap-2.5">
      <PendingAction
        label={
          <>
            <span className="flex items-center gap-3">
              <CalendarDays size={24} strokeWidth={1.8} aria-hidden />
              {HERO.primaryCta}
            </span>
            <ChevronRight size={22} aria-hidden />
          </>
        }
        title={PENDING.booking.title}
        message={PENDING.booking.message}
        className="flex min-h-14 w-full items-center justify-between gap-3 border border-action bg-action px-5 text-left font-semibold text-white transition-colors hover:border-hover hover:bg-hover"
      />
      <a
        href="#neuropathy"
        className="flex min-h-14 w-full items-center justify-between gap-3 border border-ink/70 bg-surface px-5 font-semibold text-ink transition-colors hover:border-action hover:text-action"
      >
        <span className="flex items-center gap-3">
          <span className="flex size-7 items-center justify-center border border-ink/70">
            <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden />
          </span>
          {HERO.secondaryCta}
        </span>
        <ChevronRight size={22} aria-hidden />
      </a>
    </div>
  );
}

function HeroPhotoB(): React.ReactElement {
  return (
    <div
      data-b-enter="photo"
      data-b-delay="1"
      className="absolute inset-x-0 top-0 z-0 lg:top-12 lg:right-0 lg:left-auto lg:w-[55.5%]"
    >
      <div className="relative h-[22rem] sm:h-[27rem] lg:h-[min(44rem,44vw)]">
        <Image
          src="/images/shared/reception-1.png"
          alt="Sigma Core Medical Center reception with illuminated wall logo"
          fill
          priority
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="object-cover object-center lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%,0_34%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,30,51,0.95)_0%,rgba(16,30,51,0.82)_58%,rgba(16,30,51,0.68)_100%)] lg:hidden"
        />
      </div>
      <div className="ml-[14%] hidden bg-ink px-6 py-6 sm:px-8 lg:block lg:min-h-[calc(clamp(50rem,min(56.25vw,100svh),58rem)-3rem-min(44rem,44vw))]">
        <p className="font-display text-lg font-medium text-white italic">{BRAND.tagline}</p>
        <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-focus uppercase">
          {HERO.locationLabel}
        </p>
      </div>
    </div>
  );
}

function HeroCopyB(): React.ReactElement {
  return (
    <div className="relative z-20 px-6 pt-36 sm:px-10 sm:pt-40 lg:w-[48%] lg:px-[3vw] lg:pt-48">
      <p data-b-enter="copy" data-b-delay="2" className="text-sm font-semibold tracking-[0.2em] text-focus uppercase">{HERO.eyebrow}</p>
      <h1 data-b-enter="copy" data-b-delay="3" className="mt-4 max-w-[41rem] text-[2.8rem] leading-[0.98] font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-[clamp(3.75rem,4.65vw,4.75rem)]">
        {HERO.headline}
      </h1>
      <div data-b-enter="panel" data-b-delay="4" className="-mx-6 mt-10 bg-action px-6 pt-8 sm:-mx-10 sm:px-10 lg:mx-0 lg:mt-14 lg:bg-transparent lg:p-0">
        <p className="max-w-xl text-lg leading-relaxed text-white">{HERO.body}</p>
        <div className="-mx-6 mt-5 bg-surface px-6 pt-5 pb-10 sm:-mx-10 sm:px-10 lg:-ml-[3vw] lg:mr-0 lg:min-h-[calc(clamp(50rem,min(56.25vw,100svh),58rem)-38rem)] lg:w-[calc(100%+3vw)] lg:px-[3vw] lg:pt-5 lg:pb-14 [clip-path:polygon(0_0,92%_0,100%_18%,100%_100%,0_100%)]">
          <HeroActionsB />
        </div>
      </div>
    </div>
  );
}

export function HeroB(): React.ReactElement {
  return (
    <section id="hero" aria-label="Introduction" className="overflow-hidden bg-ink">
      <div className="relative min-h-[40rem] w-full sm:min-h-[42rem] lg:min-h-[clamp(50rem,min(56.25vw,100svh),58rem)]">
        <div aria-hidden data-b-enter="shape" data-b-delay="4" className="absolute top-[29rem] bottom-0 left-0 hidden w-[48%] origin-left bg-action lg:block" />
        <GhostWord word="Movement" className="top-[24.5rem] left-0 hidden text-[8rem] text-white/[0.07] lg:block" />
        <Image
          src="/images/shared/logo.png"
          alt="Sigma Core Medical Center"
          width={330}
          height={90}
          priority
          data-b-enter="brand"
          data-b-delay="1"
          className="absolute top-9 left-6 z-30 h-16 w-auto sm:left-10 lg:top-10 lg:left-[3vw] lg:h-28"
        />
        <HeroCopyB />
        <HeroPhotoB />
        <div aria-hidden data-b-enter="shape" data-b-delay="5" className="absolute right-0 bottom-0 hidden h-56 w-44 bg-action lg:block [clip-path:polygon(82%_0,100%_0,100%_100%,0_100%,0_70%,22%_70%,22%_44%,45%_44%,45%_22%,82%_22%)]" />
      </div>
    </section>
  );
}
