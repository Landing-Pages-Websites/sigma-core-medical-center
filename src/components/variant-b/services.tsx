import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PENDING, SERVICES } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { Reveal } from "@/components/shared/reveal";
import { GhostWord } from "@/components/variant-b/motifs";
import { outlineButtonB } from "@/components/variant-b/buttons";

const MODULE_STYLES = [
  "bg-paper text-ink lg:mr-12",
  "bg-charcoal text-white lg:ml-12",
  "bg-paper text-ink lg:mr-6",
  "bg-charcoal text-white lg:ml-6",
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

export function ServicesB(): React.ReactElement {
  return (
    <section id="services" aria-label="Care categories" className="relative overflow-hidden bg-surface">
      <GhostWord
        word="Care"
        className="-top-4 left-0 text-[6rem] text-silver/55 sm:text-[9rem] lg:text-[13rem]"
      />
      <WalnutSliver className="absolute top-40 right-0 hidden h-72 w-6 lg:block" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:px-10 lg:pt-36 lg:pb-24">
        <Reveal>
          <h2 className="max-w-2xl text-4xl leading-[1.08] font-semibold tracking-tight text-ink sm:text-[2.75rem]">
            {SERVICES.headline}
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted">{SERVICES.body}</p>
        </Reveal>
        <div className="mt-12 lg:grid lg:grid-cols-[54fr_46fr] lg:gap-14">
          <div>
            <article className="relative bg-action p-8 text-white lg:p-10">
              <span
                aria-hidden
                className="absolute -top-2.5 -right-2.5 hidden h-16 w-16 border-t-4 border-r-4 border-ink lg:block"
              />
              <h3 className="text-4xl font-semibold tracking-tight lg:text-5xl">
                {SERVICES.primary.name}
              </h3>
              <p className="mt-4 max-w-sm text-lg text-white">{SERVICES.primary.summary}</p>
              <ArrowRight size={26} aria-hidden className="mt-6" />
            </article>
            <PendingAction
              label={
                <>
                  {SERVICES.cta} <ArrowRight size={18} aria-hidden />
                </>
              }
              title={PENDING.page.title}
              message={PENDING.page.message}
              className={`${outlineButtonB} mt-10 hidden lg:inline-flex`}
            />
          </div>
          <ul className="mt-8 space-y-5 lg:mt-0">
            {SERVICES.secondary.map((service, index) => (
              <li key={service.name} className={`relative p-6 ${MODULE_STYLES[index]}`}>
                {index === SERVICES.secondary.length - 1 && (
                  <WalnutSliver className="absolute inset-y-0 right-0 w-3 lg:w-4" />
                )}
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="mt-1.5 max-w-md text-base opacity-80">{service.summary}</p>
              </li>
            ))}
          </ul>
        </div>
        <PendingAction
          label={
            <>
              {SERVICES.cta} <ArrowRight size={18} aria-hidden />
            </>
          }
          title={PENDING.page.title}
          message={PENDING.page.message}
          className={`${outlineButtonB} mt-10 w-full lg:hidden`}
        />
      </div>
    </section>
  );
}
