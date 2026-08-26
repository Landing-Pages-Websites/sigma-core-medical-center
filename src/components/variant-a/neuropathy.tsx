import Image from "next/image";
import { ArrowRight, CircleCheck, MessageCircle, UserRound } from "lucide-react";
import { NEUROPATHY } from "@/content/site";
import { Reveal } from "@/components/shared/reveal";
import { primaryButtonA } from "@/components/variant-a/buttons";

const POINT_ICONS = [UserRound, MessageCircle, CircleCheck];

export function NeuropathyA(): React.ReactElement {
  return (
    <section id="neuropathy" aria-label="Neuropathy care" className="overflow-hidden bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:grid lg:grid-cols-[54fr_46fr] lg:items-center lg:gap-16 lg:py-24">
        <Reveal>
          <p className="text-base font-semibold text-silver">{NEUROPATHY.eyebrow}</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-[1.18] font-semibold tracking-tight text-white sm:text-[2.75rem]">
            {NEUROPATHY.headline}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/80">{NEUROPATHY.body}</p>
          <div className="relative mx-auto mt-10 aspect-square w-full max-w-md lg:hidden">
            <div aria-hidden className="absolute -inset-3 rounded-full border-2 border-silver/30" />
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/images/variant-a/lifestyle-tying-shoes.jpg"
                alt="Hands tying the laces of a walking shoe at home"
                fill
                sizes="(min-width: 640px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <ul className="mt-10 max-w-xl divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
            {NEUROPATHY.orientationPoints.map((point, index) => {
              const Icon = POINT_ICONS[index];
              return (
                <li key={point} className="flex items-center gap-4 px-6 py-4">
                  <span
                    aria-hidden
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-electric/60 text-focus"
                  >
                    <Icon size={19} />
                  </span>
                  <span className="font-semibold text-white">{point}</span>
                </li>
              );
            })}
          </ul>
          <a href="#services" className={`${primaryButtonA} mt-8 w-full sm:w-auto`}>
            {NEUROPATHY.cta} <ArrowRight size={18} aria-hidden />
          </a>
          <p className="mt-5 text-sm text-white/60">{NEUROPATHY.disclaimer}</p>
        </Reveal>
        <div className="relative hidden lg:block">
          <div className="relative aspect-square w-[120%]">
            <div aria-hidden className="absolute -inset-4 rounded-full border-2 border-silver/30" />
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/images/variant-a/lifestyle-tying-shoes.jpg"
                alt="Hands tying the laces of a walking shoe at home"
                fill
                sizes="(min-width: 1024px) 55vw, 0px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
