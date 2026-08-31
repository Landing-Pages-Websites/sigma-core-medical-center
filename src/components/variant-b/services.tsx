import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PENDING, SERVICES } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { Reveal } from "@/components/shared/reveal";
import { BracketMark, GhostWord } from "@/components/variant-b/motifs";
import { outlineButtonB } from "@/components/variant-b/buttons";

const MODULE_STYLES = [
  "z-10 lg:mr-20",
  "z-20 -mt-3 lg:-mt-9 lg:ml-16",
  "z-30 -mt-3 lg:-mt-9 lg:mr-28",
  "z-40 -mt-3 lg:-mt-9 lg:ml-6",
];

const MODULE_TONES = [
  "border border-silver/50 bg-paper text-ink",
  "bg-charcoal text-white",
  "border border-silver/50 bg-paper text-ink",
  "bg-charcoal text-white",
];

function WalnutSliver({ className }: { className: string }): React.ReactElement {
  return (
    <div aria-hidden className={`overflow-hidden ${className}`}>
      <Image
        src="/images/variant-b/walnut-texture.jpg"
        alt=""
        fill
        sizes="3rem"
        className="scale-[2.4] rotate-90 object-cover"
      />
    </div>
  );
}

function PrimaryServiceB(): React.ReactElement {
  return (
    <div>
      <Reveal from="left">
        <article className="relative bg-action p-8 text-white lg:p-10">
          <span
            aria-hidden
            className="absolute -top-2.5 -right-2.5 hidden h-16 w-16 border-t-4 border-r-4 border-ink lg:block"
          />
          <h3 className="flex items-center gap-4 text-4xl font-semibold tracking-tight lg:text-5xl">
            <BracketMark className="h-9 w-4" />
            {SERVICES.primary.name}
          </h3>
          <p className="mt-4 max-w-sm text-lg text-white">{SERVICES.primary.summary}</p>
          <ArrowRight size={26} aria-hidden className="mt-6" />
        </article>
      </Reveal>
      <p className="mt-6 max-w-md text-lg text-muted">{SERVICES.body}</p>
      <PendingAction
        label={
          <>
            {SERVICES.cta} <ArrowRight size={18} aria-hidden />
          </>
        }
        title={PENDING.page.title}
        message={PENDING.page.message}
        className={`${outlineButtonB} mt-6 w-full sm:w-auto`}
      />
    </div>
  );
}

export function ServicesB(): React.ReactElement {
  return (
    <section id="services" aria-label="Care categories" className="relative overflow-hidden bg-surface">
      <GhostWord
        word="Care"
        className="-top-6 left-0 text-[7.5rem] text-silver/60 sm:text-[11rem] lg:-top-12 lg:text-[17rem]"
      />
      <WalnutSliver className="absolute top-40 right-0 hidden h-72 w-6 lg:block" />
      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-16 sm:px-10 lg:pt-24 lg:pb-24">
        <Reveal>
          <h2 className="max-w-2xl text-4xl leading-[1.08] font-semibold tracking-tight text-ink sm:text-[2.75rem] lg:text-5xl lg:leading-[1.06]">
            {SERVICES.headline}
          </h2>
        </Reveal>
        <div className="mt-10 lg:mt-12 lg:grid lg:grid-cols-[54fr_46fr] lg:gap-12">
          <PrimaryServiceB />
          <div className="mt-10 lg:mt-0">
            {SERVICES.secondary.map((service, index) => (
              <Reveal key={service.name} delay={index * 90} className={`relative ${MODULE_STYLES[index]}`}>
                <article
                  className={`relative p-6 shadow-[10px_10px_0_0_rgba(32,39,46,0.14)] ${MODULE_TONES[index]}`}
                >
                  {index === SERVICES.secondary.length - 1 && (
                    <WalnutSliver className="absolute inset-y-0 right-0 w-3 lg:w-4" />
                  )}
                  <h3 className="text-2xl font-semibold tracking-tight">{service.name}</h3>
                  <p className="mt-2 max-w-md text-lg opacity-80">{service.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
