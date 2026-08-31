import Image from "next/image";
import { Compass, Footprints, Info, UserRound } from "lucide-react";
import { PLACE } from "@/content/site";
import { Reveal } from "@/components/shared/reveal";

const PRINCIPLE_ICONS = [UserRound, Compass, Footprints, Info];

function PrincipleList(): React.ReactElement {
  return (
    <ul className="mt-8 max-w-md divide-y divide-white/10">
      {PLACE.principles.map((principle, index) => {
        const Icon = PRINCIPLE_ICONS[index];
        return (
          <li key={principle} className="flex items-center gap-4 py-4">
            <span
              aria-hidden
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-silver/40 text-focus"
            >
              <Icon size={17} />
            </span>
            <span className="font-semibold text-white">{principle}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function PlaceOfCareA(): React.ReactElement {
  return (
    <section id="place-of-care" aria-label="The Sigma Core clinic" className="bg-charcoal">
      <div className="relative lg:hidden">
        <div className="relative h-72 sm:h-96">
          <Image
            src="/images/shared/reception-2.png"
            alt="Sigma Core Medical Center reception desk beneath the navy logo wall"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-y-0 left-0 w-px bg-silver/70" />
        </div>
        <p className="px-6 pt-4 text-sm text-silver">{PLACE.facilityCaption}</p>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-24">
        <p className="flex items-center gap-3 text-base">
          <span aria-hidden className="h-px w-10 bg-electric" />
          <span className="font-semibold text-focus">Opening target:</span>
          <span className="text-white">September 8, 2026</span>
        </p>
        <div className="mt-8 lg:grid lg:grid-cols-[42fr_58fr] lg:gap-16">
          <Reveal>
            <p className="text-base font-semibold text-silver">{PLACE.eyebrow}</p>
            <h2 className="mt-3 max-w-lg font-display text-4xl leading-[1.18] font-semibold tracking-tight text-white sm:text-[2.6rem]">
              {PLACE.headline}
            </h2>
            <p className="mt-5 max-w-lg text-lg text-white/75">{PLACE.body}</p>
            <PrincipleList />
            <div className="relative mt-10 h-56 overflow-hidden rounded-md sm:h-64 lg:hidden">
              <Image
                src="/images/shared/waiting-room.png"
                alt="Sigma Core waiting room seating beside walnut wall slats"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <figure className="relative hidden lg:block lg:pb-14">
            <div className="relative h-[30rem] overflow-hidden rounded-sm">
              <Image
                src="/images/shared/reception-2.png"
                alt="Sigma Core Medical Center reception desk beneath the navy logo wall"
                fill
                sizes="(min-width: 1024px) 55vw, 0px"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-y-0 left-0 w-px bg-silver/70" />
            </div>
            <div className="absolute bottom-0 -left-12 h-48 w-72 overflow-hidden rounded-sm ring-8 ring-charcoal">
              <Image
                src="/images/shared/waiting-room.png"
                alt="Sigma Core waiting room seating beside walnut wall slats"
                fill
                sizes="18rem"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 text-right text-sm text-silver">
              {PLACE.facilityCaption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
