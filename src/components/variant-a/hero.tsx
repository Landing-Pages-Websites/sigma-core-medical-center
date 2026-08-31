import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { HERO, PENDING } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { primaryButtonA, secondaryButtonA } from "@/components/variant-a/buttons";

export function HeroA(): React.ReactElement {
  return (
    <section id="hero" aria-label="Introduction" className="bg-ink">
      <div className="lg:grid lg:min-h-[44rem] lg:grid-cols-[45fr_55fr]">
        <div className="relative h-[26rem] sm:h-[30rem] lg:h-auto">
          <Image
            src="/images/variant-a/lifestyle-walking-path.jpg"
            alt="Adult walking at an easy pace along a tree-lined riverside path"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover lg:rounded-r-[8rem]"
          />
        </div>
        <div className="px-6 py-12 sm:px-10 lg:flex lg:flex-col lg:justify-center lg:px-16 lg:py-16 xl:px-20">
          <Image
            src="/images/shared/logo.png"
            alt="Sigma Core Medical Center"
            width={360}
            height={98}
            priority
            className="mx-auto h-14 w-auto sm:h-16"
          />
          <div className="mt-10 text-center lg:mt-12 lg:text-left">
            <p className="text-base font-semibold text-silver">{HERO.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.16] font-semibold tracking-tight text-white sm:text-5xl xl:text-[3.4rem]">
              {HERO.headline}
            </h1>
            <div aria-hidden className="mx-auto mt-6 h-0.5 w-24 bg-electric lg:mx-0 lg:w-36" />
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80 lg:mx-0">{HERO.body}</p>
          </div>
          <div className="mt-10 flex flex-col items-center gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex w-full max-w-sm flex-col gap-3">
              <PendingAction
                label={
                  <>
                    {HERO.primaryCta} <ArrowRight size={18} aria-hidden />
                  </>
                }
                title={PENDING.booking.title}
                message={PENDING.booking.message}
                className={primaryButtonA}
              />
              <a href="#neuropathy" className={secondaryButtonA}>
                {HERO.secondaryCta} <ArrowRight size={18} aria-hidden />
              </a>
              <p className="mt-4 flex items-center justify-center gap-2 text-base text-white/80 lg:justify-start">
                <MapPin size={18} aria-hidden className="text-focus" />
                {HERO.locationLabel}
              </p>
            </div>
            <figure className="w-full max-w-sm lg:w-64">
              <div className="relative h-40 overflow-hidden rounded-tl-3xl rounded-br-md lg:h-44">
                <Image
                  src="/images/shared/reception-1.png"
                  alt="Sigma Core Medical Center reception with illuminated wall logo"
                  fill
                  sizes="(min-width: 1024px) 16rem, 24rem"
                  className="object-cover"
                />
              </div>
              <div aria-hidden className="mt-3 ml-auto h-0.5 w-2/3 bg-electric" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
