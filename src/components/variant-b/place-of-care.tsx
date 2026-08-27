import Image from "next/image";
import { PLACE } from "@/content/site";

function OpeningPanel({ className }: { className: string }): React.ReactElement {
  return (
    <div className={className}>
      <div className="relative max-w-72 bg-ink/90 py-4 pr-5 pl-8 text-white shadow-[8px_8px_0_rgba(16,30,51,0.18)] backdrop-blur-[2px]">
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-6 border-y-4 border-l-4 border-silver"
        />
        <p className="text-base tracking-wide text-white/65">Opening target:</p>
        <p className="mt-1 text-2xl font-semibold text-focus">September 8, 2026</p>
        <span aria-hidden className="mt-3 block h-1 w-8 bg-electric" />
        <p className="mt-3 text-sm leading-relaxed text-white/65">{PLACE.facilityCaption}</p>
      </div>
    </div>
  );
}

function CoreEmblem(): React.ReactElement {
  return (
    <span className="flex aspect-square w-full items-center justify-center border border-silver/50 bg-ink">
      <Image
        src="/images/variant-b/logo-core.png"
        alt="Sigma Core emblem"
        width={120}
        height={84}
        className="h-auto w-[92%]"
      />
    </span>
  );
}

function MaterialTotem(): React.ReactElement {
  return (
    <div className="absolute top-[20%] right-0 z-30 hidden w-[16%] translate-x-full min-[900px]:block">
      <div className="relative h-[clamp(8rem,14vw,14rem)] border border-silver/50 [clip-path:polygon(0_0,58%_0,100%_42%,100%_100%,0_100%)]">
        <div
          aria-hidden
          className="h-full w-[70%]"
          style={{
            background:
              "repeating-linear-gradient(90deg, #5a2e18 0 8px, #a66a37 8px 13px, #74401f 13px 18px, #21120c 18px 21px)",
          }}
        />
      </div>
      <div className="mt-4">
        <CoreEmblem />
      </div>
    </div>
  );
}

function ClinicVisual(): React.ReactElement {
  return (
    <div data-b-reveal="left" className="relative min-h-[27rem] sm:min-h-[30rem] min-[900px]:h-full min-[900px]:min-h-0">
      <div className="absolute inset-y-0 left-0 h-full w-full">
        <Image
          src="/images/shared/reception-1.png"
          alt="Sigma Core reception desk beneath the clinic wall sign"
          fill
          sizes="(min-width: 900px) 62vw, 100vw"
          className="object-cover object-[center_22%] [clip-path:polygon(0_0,100%_0,100%_100%,18%_100%,0_82%)] min-[900px]:[clip-path:polygon(0_0,90%_0,100%_24%,100%_100%,19%_100%,0_79%)]"
        />
      </div>
      <OpeningPanel className="absolute bottom-6 left-4 z-20 sm:bottom-7 sm:left-8 min-[900px]:bottom-[4%] min-[900px]:left-[3.8%]" />
      <MaterialTotem />
    </div>
  );
}

function ClinicCopy(): React.ReactElement {
  return (
    <div data-b-reveal="right" data-b-delay="1" className="relative z-20 px-4 pt-4 pb-8 text-center sm:px-8 sm:pt-8 sm:pb-12 min-[900px]:flex min-[900px]:flex-col min-[900px]:justify-start min-[900px]:pt-5 min-[900px]:pr-5 min-[900px]:pb-6 min-[900px]:pl-24 lg:pr-6 lg:pl-32 xl:pt-8 xl:pr-12 xl:pb-8 xl:pl-40">
      <p className="text-base font-semibold text-focus min-[900px]:text-sm xl:text-base">
        {PLACE.eyebrow}
      </p>
      <h2 className="mx-auto mt-2 w-full max-w-md text-3xl leading-[1.02] font-semibold tracking-[-0.035em] text-white sm:mt-3 sm:text-4xl min-[900px]:max-w-60 min-[900px]:text-[1.75rem] lg:max-w-72 lg:text-[2rem] xl:max-w-[21rem] xl:text-[2.4rem]">
        Designed for a focused, personal{" "}
        <span className="font-display font-medium italic">conversation</span>
      </h2>
      <span aria-hidden className="mx-auto mt-4 block h-1 w-14 bg-electric sm:mt-5 min-[900px]:mt-4" />
      <p className="mx-auto mt-5 w-full max-w-sm text-base leading-[1.55] text-white/70 sm:mt-6 sm:max-w-md min-[900px]:mt-4 min-[900px]:max-w-56 min-[900px]:text-xs lg:max-w-64 lg:text-sm xl:mt-5 xl:max-w-xs xl:text-base">
        {PLACE.body}
      </p>
      <ul className="mx-auto mt-6 grid w-full max-w-md grid-cols-1 text-left min-[400px]:grid-cols-2 min-[400px]:gap-x-3 min-[400px]:gap-y-1 sm:mt-8 sm:max-w-2xl sm:gap-x-4 min-[900px]:mt-4 min-[900px]:max-w-56 min-[900px]:grid-cols-1 min-[900px]:gap-x-0 min-[900px]:gap-y-0 lg:max-w-64 xl:mt-6 xl:max-w-xs">
        {PLACE.principles.map((principle) => (
          <li
            key={principle}
            className="border-l-2 border-electric px-5 py-2.5 text-base text-white/80 sm:py-3 min-[900px]:px-3 min-[900px]:py-2 min-[900px]:text-xs lg:px-4 lg:text-sm xl:px-5 xl:py-2.5 xl:text-base"
          >
            {principle}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PlaceOfCareB(): React.ReactElement {
  return (
    <section id="place-of-care" aria-label="The Sigma Core clinic" className="overflow-hidden bg-charcoal">
      <div className="relative mx-auto grid w-full max-w-[90rem] min-[900px]:h-[36.5rem] min-[900px]:grid-cols-[62fr_38fr] min-[900px]:pt-6 lg:pt-7 xl:h-[36rem] xl:pt-8">
        <ClinicVisual />
        <ClinicCopy />
      </div>
    </section>
  );
}
