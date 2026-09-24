import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/content/site";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { BracketMark, GhostWord } from "@/components/variant-b/motifs";
import { outlineButtonB } from "@/components/variant-b/buttons";

/** Staggered constellation offsets per canonical frame 03; overlaps stay on padded edges. */
const MODULE_LAYOUT = [
  "relative z-10 lg:mr-28",
  "relative z-20 -mt-3 lg:-mt-5 lg:ml-20",
  "relative z-30 -mt-3 lg:-mt-5 lg:-ml-10 lg:mr-20",
  "relative z-40 -mt-3 lg:-mt-5 lg:ml-24",
];

const MODULE_TONES = [
  "bg-linear-to-br from-[#f4f1ea] to-[#e5e0d5] text-ink",
  "bg-linear-to-br from-[#2b333b] to-[#191f25] text-white",
  "bg-linear-to-br from-[#f4f1ea] to-[#e5e0d5] text-ink",
  "bg-linear-to-br from-[#2b333b] to-[#191f25] text-white",
];

const MODULE_CUTS = [
  "polygon(0 28%, 6% 28%, 6% 0, 100% 0, 100% 100%, 0 100%)",
  "polygon(0 0, 94% 0, 94% 30%, 100% 30%, 100% 100%, 0 100%)",
  "polygon(0 0, 100% 0, 100% 66%, 95% 66%, 95% 100%, 0 100%)",
  "polygon(0 30%, 5% 30%, 5% 0, 100% 0, 100% 100%, 0 100%)",
];

function WalnutRail({ className }: { className: string }): React.ReactElement {
  return (
    <div aria-hidden className={`overflow-hidden ${className}`}>
      <Image
        src="/images/variant-b/walnut-texture.jpg"
        alt=""
        fill
        sizes="3rem"
        className="object-cover"
      />
    </div>
  );
}

function ServiceModule({ index }: { index: number }): React.ReactElement {
  const service = SERVICES.secondary[index];
  return (
    <Reveal from="left" delay={index * 110} className={MODULE_LAYOUT[index]}>
      <div className="relative">
        <span
          aria-hidden
          className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-black/20"
          style={{ clipPath: MODULE_CUTS[index] }}
        />
        <article
          className={`relative p-6 pl-7 ${MODULE_TONES[index]}`}
          style={{ clipPath: MODULE_CUTS[index] }}
        >
          {index === SERVICES.secondary.length - 1 && (
            <WalnutRail className="absolute inset-y-0 right-0 w-3 lg:w-4" />
          )}
          <h3 className="pr-6 text-2xl font-semibold tracking-tight">{service.name}</h3>
          <p className="mt-2 max-w-md pr-6 text-lg opacity-80">{service.summary}</p>
        </article>
      </div>
    </Reveal>
  );
}

function PrimaryServiceB(): React.ReactElement {
  return (
    <div className="flex h-full flex-col">
      <Reveal from="left" className="flex flex-1 flex-col">
        <article className="relative flex h-full flex-col bg-action p-8 text-white ring-1 ring-white/40 ring-inset lg:p-10">
          <span
            aria-hidden
            className="absolute -top-2.5 -right-2.5 hidden h-16 w-16 border-t-4 border-r-4 border-ink lg:block"
          />
          <h3 className="flex items-center gap-4 text-4xl font-semibold tracking-tight lg:text-5xl">
            <BracketMark className="h-9 w-4" />
            {SERVICES.primary.name}
          </h3>
          <p className="mt-4 max-w-sm text-lg text-white lg:text-xl">
            {SERVICES.primary.summary}
          </p>
          <ArrowRight size={26} aria-hidden className="mt-6 lg:mt-auto" />
        </article>
      </Reveal>
      <p className="mt-6 max-w-md text-lg text-muted">{SERVICES.body}</p>
      <Link href="/services" className={`${outlineButtonB} mt-6 w-full sm:w-auto`}>
        {SERVICES.cta} <ArrowRight size={18} aria-hidden />
      </Link>
    </div>
  );
}

export function ServicesB(): React.ReactElement {
  return (
    <section id="services" aria-label="Care categories" className="relative overflow-hidden bg-surface">
      <GhostWord
        word="Care"
        className="-top-6 left-0 text-[7.5rem] text-silver/60 sm:text-[11rem] lg:-top-14 lg:text-[18rem]"
      />
      <WalnutRail className="absolute top-40 right-0 hidden h-72 w-6 lg:block" />
      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-16 sm:px-10 lg:pt-20 lg:pb-24">
        <Reveal>
          <h2 className="max-w-2xl text-4xl leading-[1.08] font-semibold tracking-tight text-ink sm:text-[2.75rem] lg:text-5xl lg:leading-[1.06]">
            {SERVICES.headline}
          </h2>
        </Reveal>
        <div className="mt-10 lg:mt-12 lg:grid lg:grid-cols-[54fr_46fr] lg:gap-12">
          <PrimaryServiceB />
          <div className="mt-10 lg:mt-0">
            {SERVICES.secondary.map((service, index) => (
              <ServiceModule key={service.name} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
