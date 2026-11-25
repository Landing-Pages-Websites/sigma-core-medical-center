import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BRAND, HERO } from "@/content/site";
import { BracketMark, GhostWord } from "@/components/variant-b/motifs";
import { paperButtonB } from "@/components/variant-b/buttons";

function HeroActionsB(): React.ReactElement {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Link href="https://go.sigmacoremedicalcenter.com/" data-mega-cta="book-consultation" className={paperButtonB}>
        <span className="flex items-center gap-3">
          <BracketMark />
          {HERO.primaryCta}
        </span>
        <ArrowRight size={18} aria-hidden />
      </Link>
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
    <section data-mega-section="hero" id="hero" aria-label="Introduction" className="bg-ink">
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
            <h1 className="mt-0 max-w-2xl text-[2.4rem] leading-[1.06] font-semibold tracking-tight text-white sm:text-5xl xl:text-[3.6rem] xl:leading-[1.04]">
              What If There Were More Options for Your Health Than You&apos;ve Been Told?
            </h1>
            <h2 className="mt-6 max-w-2xl text-2xl leading-snug font-semibold text-white sm:text-3xl">
              Discover a Different Approach to Feeling Better, Moving Better, and Living Better.
            </h2>
            <p className="mt-6 max-w-2xl text-xl text-white sm:text-2xl">
              At Sigma Core Medical Center, we bring together advanced medical technologies, innovative therapies, and personalized integrative care to help people explore new possibilities for persistent pain, neuropathy, hormone health, and more.
            </p>
            <div className="mt-10 lg:mt-12">
              <HeroActionsB />
            </div>
          </div>
          <div className="lg:flex lg:flex-col">
            <div className="relative h-72 sm:h-96 lg:min-h-0 lg:flex-1">
              <Image
                src="/images/shared/reception-1.webp"
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
