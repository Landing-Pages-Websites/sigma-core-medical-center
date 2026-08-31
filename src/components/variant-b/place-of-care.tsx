import Image from "next/image";
import { PLACE } from "@/content/site";
import { Reveal } from "@/components/shared/reveal";
import { BracketMarkEnd } from "@/components/variant-b/motifs";

function OpeningPanel({ className }: { className: string }): React.ReactElement {
  return (
    <div className={`bg-paper p-5 ${className}`}>
      <p className="text-sm font-semibold tracking-wide text-charcoal uppercase">
        Opening target:
      </p>
      <p className="mt-1 text-2xl font-semibold text-action">September 8, 2026</p>
      <p className="mt-2 text-sm text-muted">{PLACE.facilityCaption}</p>
    </div>
  );
}

function CoreEmblem(): React.ReactElement {
  return (
    <span className="flex size-24 items-center justify-center rounded-full border border-silver/30 bg-ink lg:size-28">
      <Image
        src="/images/variant-b/logo-core.png"
        alt="Sigma Core emblem"
        width={64}
        height={45}
        className="h-auto w-14 lg:w-16"
      />
    </span>
  );
}

export function PlaceOfCareB(): React.ReactElement {
  return (
    <section id="place-of-care" aria-label="The Sigma Core clinic" className="bg-charcoal">
      <div className="mx-auto max-w-[90rem] lg:grid lg:grid-cols-[52fr_10fr_38fr]">
        <div className="relative">
          <div className="relative h-80 sm:h-[26rem] lg:h-full lg:min-h-[34rem]">
            <Image
              src="/images/shared/waiting-room.png"
              alt="Sigma Core waiting room seating beside walnut wall slats"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover [clip-path:polygon(0_0,100%_0,100%_82%,58%_100%,0_100%)]"
            />
          </div>
          <OpeningPanel className="relative z-10 mx-6 -mt-16 max-w-72 sm:mx-10 lg:absolute lg:bottom-8 lg:left-8 lg:mx-0 lg:mt-0" />
        </div>
        <div className="relative mt-10 flex h-16 items-center justify-center lg:mt-0 lg:h-auto">
          <div aria-hidden className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/variant-b/walnut-texture.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 10vw, 100vw"
              className="object-cover lg:scale-[2.2] lg:rotate-90"
            />
          </div>
          <div className="relative">
            <CoreEmblem />
          </div>
        </div>
        <Reveal className="px-6 py-12 sm:px-10 lg:flex lg:flex-col lg:justify-center lg:px-12 lg:py-20">
          <p className="text-base font-semibold text-focus lg:text-right">{PLACE.eyebrow}</p>
          <h2 className="mt-3 text-3xl leading-[1.12] font-semibold tracking-tight text-white sm:text-4xl">
            Designed for a focused, personal{" "}
            <span className="font-display font-medium italic">conversation</span>
          </h2>
          <p className="mt-5 text-lg text-white/75">{PLACE.body}</p>
          <ul className="mt-8">
            {PLACE.principles.map((principle) => (
              <li
                key={principle}
                className="flex items-center justify-between gap-4 border-t border-white/15 py-3.5 font-semibold text-white"
              >
                {principle}
                <BracketMarkEnd className="text-silver/60" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
