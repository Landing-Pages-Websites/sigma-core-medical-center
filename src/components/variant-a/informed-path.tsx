import Image from "next/image";
import { PATH } from "@/content/site";
import { Reveal } from "@/components/shared/reveal";

export function InformedPathA(): React.ReactElement {
  return (
    <section id="how-it-works" aria-label="What happens next" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:px-10 lg:pt-24">
        <Reveal>
          <h2 className="max-w-xl font-display text-4xl leading-[1.18] font-semibold tracking-tight text-ink sm:text-[2.6rem]">
            {PATH.headline}
          </h2>
        </Reveal>
        <div aria-hidden className="mt-12 hidden h-0.5 w-full max-w-4xl bg-ink/80 lg:block" />
        <ol className="mt-10 space-y-10 border-l-2 border-ink/80 pl-6 lg:mt-8 lg:grid lg:max-w-5xl lg:grid-cols-3 lg:gap-10 lg:space-y-0 lg:border-l-0 lg:pl-0">
          {PATH.steps.map((step) => (
            <li key={step.title} className="relative">
              <span
                aria-hidden
                className="absolute top-2 -left-[1.85rem] size-2.5 rounded-full bg-ink lg:hidden"
              />
              <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-sm text-lg text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="relative mt-14 h-72 w-full lg:h-[26rem]">
        <Image
          src="/images/variant-a/lifestyle-phone-kitchen.jpg"
          alt="Adult reading on a phone at a bright kitchen counter"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-5 sm:px-10">
        <p className="text-sm text-muted">{PATH.disclaimer}</p>
      </div>
    </section>
  );
}
