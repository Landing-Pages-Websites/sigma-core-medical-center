import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PENDING, SERVICES } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { Reveal } from "@/components/shared/reveal";
import { primaryButtonA } from "@/components/variant-a/buttons";

export function ServicesA(): React.ReactElement {
  const exploreLabel = (
    <>
      {SERVICES.cta} <ArrowRight size={18} aria-hidden />
    </>
  );
  return (
    <section id="services" aria-label="Care categories" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="relative order-first h-56 overflow-hidden rounded-md sm:h-64 lg:order-last lg:h-72">
            <Image
              src="/images/variant-a/lifestyle-dog-walk.jpg"
              alt="Adult walking a dog along a quiet residential sidewalk"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <Reveal>
            <h2 className="max-w-lg font-display text-4xl leading-[1.18] font-semibold tracking-tight text-ink sm:text-[2.6rem]">
              {SERVICES.headline}
            </h2>
            <p className="mt-5 max-w-lg text-lg text-muted">{SERVICES.body}</p>
          </Reveal>
        </div>
        <div aria-hidden className="mt-14 h-0.5 w-2/3 bg-electric" />
        <div className="mt-8 gap-10 lg:grid lg:grid-cols-[30fr_17fr_17fr_17fr_17fr]">
          <div className="rounded-sm bg-ink p-8 text-white">
            <h3 className="font-display text-3xl font-semibold tracking-tight">
              {SERVICES.primary.name}
            </h3>
            <p className="mt-3 text-lg text-white/75">{SERVICES.primary.summary}</p>
            <PendingAction
              label={exploreLabel}
              title={PENDING.page.title}
              message={PENDING.page.message}
              className={`${primaryButtonA} mt-8 hidden lg:inline-flex`}
            />
          </div>
          <ul className="mt-6 divide-y divide-silver/50 rounded-md bg-white px-5 lg:col-span-4 lg:mt-0 lg:grid lg:grid-cols-4 lg:gap-10 lg:divide-y-0 lg:rounded-none lg:bg-transparent lg:px-0">
            {SERVICES.secondary.map((service) => (
              <li key={service.name} className="py-4 lg:border-t-2 lg:border-silver lg:py-0 lg:pt-5">
                <h3 className="text-lg font-semibold text-ink">{service.name}</h3>
                <p className="mt-1.5 text-base text-muted">{service.summary}</p>
              </li>
            ))}
          </ul>
        </div>
        <PendingAction
          label={exploreLabel}
          title={PENDING.page.title}
          message={PENDING.page.message}
          className={`${primaryButtonA} mt-8 w-full lg:hidden`}
        />
      </div>
    </section>
  );
}
