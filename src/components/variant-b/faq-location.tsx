"use client";

import { ChevronDown } from "lucide-react";
import { FAQ, PENDING } from "@/content/site";
import { useAccordion } from "@/lib/use-accordion";
import { PendingAction } from "@/components/shared/pending-action";
import { Reveal } from "@/components/shared/reveal";
import { GhostWord } from "@/components/variant-b/motifs";
import { primaryButtonB } from "@/components/variant-b/buttons";

const ITEM_INDENTS = ["lg:ml-0", "lg:ml-8", "lg:ml-16", "lg:ml-24"];

export function FaqLocationB(): React.ReactElement {
  const accordion = useAccordion();
  return (
    <section id="faq" aria-label="Questions and location" className="relative overflow-hidden bg-surface">
      <GhostWord
        word="Richmond"
        className="-top-2 left-0 text-[clamp(5.5rem,19vw,17rem)] whitespace-nowrap text-silver/45 lg:-top-8"
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-16 sm:px-10 lg:grid lg:grid-cols-[58fr_42fr] lg:gap-16 lg:pt-28 lg:pb-24">
        <div>
          <div className="relative inline-block">
            <span
              aria-hidden
              className="absolute -top-3 -left-5 h-9 w-9 border-t-4 border-l-4 border-electric"
            />
            <h2 className="max-w-xl text-4xl leading-[1.1] font-semibold tracking-tight text-ink sm:text-[2.75rem]">
              {FAQ.headline}
            </h2>
            <span
              aria-hidden
              className="absolute -right-5 -bottom-3 h-9 w-9 border-r-4 border-b-4 border-electric"
            />
          </div>
          <div className="mt-12 space-y-4">
            {FAQ.items.map((item, index) => {
              const open = accordion.isOpen(index);
              return (
                <div key={item.question} className={ITEM_INDENTS[index]}>
                  <h3>
                    <button
                      type="button"
                      {...accordion.triggerProps(index)}
                      className="flex min-h-12 w-full items-center justify-between gap-4 bg-ink px-5 py-3.5 text-left text-lg font-semibold text-white transition-colors hover:bg-charcoal"
                    >
                      {item.question}
                      <span
                        aria-hidden
                        className="flex size-8 shrink-0 items-center justify-center border border-white/40"
                      >
                        <ChevronDown
                          size={17}
                          className={`transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
                        />
                      </span>
                    </button>
                  </h3>
                  <div {...accordion.panelProps(index)}>
                    <p className="border border-t-0 border-silver/60 bg-white p-5 text-lg text-charcoal/90">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Reveal delay={120} className="mt-14 lg:mt-0">
          <div className="relative bg-ink p-8 lg:p-10">
            <span
              aria-hidden
              className="absolute top-6 right-6 hidden h-14 w-3 border-y-2 border-r-2 border-silver/50 lg:block"
            />
            <h3 className="max-w-64 text-4xl leading-tight font-semibold tracking-tight text-white">
              {FAQ.locationLabel}
            </h3>
            <p className="mt-5 max-w-60 border-l-2 border-silver/50 pl-4 text-base text-white/70">
              {FAQ.addressNote}
            </p>
            <PendingAction
              label={FAQ.cta}
              title={PENDING.booking.title}
              message={PENDING.booking.message}
              className={`${primaryButtonB} mt-10 w-full`}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
