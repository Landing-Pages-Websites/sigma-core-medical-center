import Image from "next/image";
import { PLACE } from "@/content/site";
import { Reveal } from "@/components/shared/reveal";
import { BracketMarkEnd } from "@/components/variant-b/motifs";

const PRINCIPLE_OFFSETS = ["lg:mr-10", "lg:mr-5", "lg:mr-0", "lg:mr-5"];

/** Vertical slat rhythm layered over the real walnut photograph. */
const SLAT_LINES =
  "repeating-linear-gradient(90deg, rgba(10,14,18,0.4) 0px, rgba(10,14,18,0.4) 4px, rgba(0,0,0,0) 4px, rgba(0,0,0,0) 26px)";

function OpeningPanel({ className }: { className: string }): React.ReactElement {
  return (
    <div className={`border-l-4 border-electric bg-ink p-5 ${className}`}>
      <p className="text-xs font-semibold tracking-[0.18em] text-focus uppercase">
        Location update
      </p>
      <p className="mt-1 text-3xl font-semibold tracking-tight text-white">Opening details are being confirmed</p>
      <p className="mt-2 text-sm text-white/70">{PLACE.facilityCaption}</p>
    </div>
  );
}

function WalnutSlatPanel({ className }: { className: string }): React.ReactElement {
  return (
    <div aria-hidden className={`overflow-hidden ${className}`}>
      <Image
        src="/images/variant-b/walnut-texture.jpg"
        alt=""
        fill
        sizes="(min-width: 1024px) 10vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundImage: SLAT_LINES }} />
      <div className="absolute inset-0 shadow-[inset_0_0_18px_rgba(0,0,0,0.35)]" />
    </div>
  );
}

function CoreEmblemPanel(): React.ReactElement {
  return (
    <span className="relative flex size-32 items-center justify-center rounded-full bg-ink shadow-[0_10px_30px_rgba(0,0,0,0.45),0_0_0_3px_rgba(199,203,208,0.35)] lg:size-40">
      <span aria-hidden className="absolute inset-3 rounded-full border border-silver/40" />
      <span aria-hidden className="absolute inset-6 rounded-full border border-electric/60" />
      <Image
        src="/images/variant-b/logo-core.png"
        alt="Sigma Core emblem"
        width={88}
        height={62}
        className="relative h-auto w-16 lg:w-20"
      />
    </span>
  );
}

function FacilityPanorama(): React.ReactElement {
  return (
    <div className="relative">
      <div className="relative h-80 sm:h-[26rem] lg:h-full lg:min-h-[38rem]">
        <Image
          src="/images/shared/waiting-room.png"
          alt="Sigma Core waiting room seating beside walnut wall slats"
          fill
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-48 overflow-hidden sm:h-60 [clip-path:polygon(0_46%,100%_10%,100%_100%,0_100%)]"
        >
          <Image
            src="/images/variant-b/walnut-texture.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0) 40%)",
            }}
          />
        </div>
        <div
          aria-hidden
          className="absolute bottom-0 left-0 h-40 w-[46%] bg-charcoal/95 [clip-path:polygon(0_30%,100%_100%,0_100%)] sm:h-52"
        />
      </div>
      <OpeningPanel className="relative z-10 mx-6 -mt-20 max-w-80 sm:mx-10 lg:absolute lg:bottom-10 lg:left-10 lg:mx-0 lg:mt-0" />
    </div>
  );
}

export function PlaceOfCareB(): React.ReactElement {
  return (
    <section id="place-of-care" aria-label="The Sigma Core clinic" className="bg-charcoal">
      <div className="mx-auto max-w-[90rem] lg:grid lg:grid-cols-[52fr_10fr_38fr]">
        <FacilityPanorama />
        <div className="relative mt-8 flex h-36 items-center justify-center lg:mt-0 lg:h-auto">
          <WalnutSlatPanel className="absolute inset-0" />
          <div className="relative lg:translate-x-6">
            <CoreEmblemPanel />
          </div>
        </div>
        <Reveal className="px-6 py-12 sm:px-10 lg:flex lg:flex-col lg:justify-center lg:px-12 lg:py-20">
          <p className="text-base font-semibold text-focus lg:text-right">{PLACE.eyebrow}</p>
          <h2 className="mt-3 text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-[2.6rem]">
            Designed for a focused, personal{" "}
            <span className="font-display font-medium italic">conversation</span>
          </h2>
          <p className="mt-5 text-lg text-white/75">{PLACE.body}</p>
          <ul className="mt-8 space-y-3">
            {PLACE.principles.map((principle, index) => (
              <li
                key={principle}
                className={`flex items-center justify-between gap-4 border border-white/15 bg-ink/60 px-5 py-4 text-lg font-semibold text-white ${PRINCIPLE_OFFSETS[index]}`}
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
