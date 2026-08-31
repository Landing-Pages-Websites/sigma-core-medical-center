"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { FAQ, PENDING } from "@/content/site";
import { useAccordion } from "@/lib/use-accordion";
import { PendingAction } from "@/components/shared/pending-action";
import { primaryButtonA } from "@/components/variant-a/buttons";

export function FaqLocationA(): React.ReactElement {
  const accordion = useAccordion();
  return (
    <section id="faq" aria-label="Questions and location" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:grid lg:grid-cols-[55fr_45fr] lg:gap-16 lg:py-24">
        <div>
          <div className="flex items-start gap-3">
            <span aria-hidden className="mt-4 size-2.5 shrink-0 rounded-full bg-electric" />
            <h2 className="max-w-lg font-display text-4xl leading-[1.18] font-semibold tracking-tight text-ink sm:text-[2.6rem]">
              {FAQ.headline}
            </h2>
          </div>
          <div className="mt-8 space-y-3">
            {FAQ.items.map((item, index) => {
              const open = accordion.isOpen(index);
              return (
                <div key={item.question} className="rounded-md border border-silver/60 bg-white">
                  <h3>
                    <button
                      type="button"
                      {...accordion.triggerProps(index)}
                      className="flex min-h-14 w-full items-center gap-4 px-6 py-4 text-left"
                    >
                      <span className="flex-1 text-lg font-semibold text-ink">
                        {item.question}
                      </span>
                      <span
                        aria-hidden
                        className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors motion-reduce:transition-none ${open ? "bg-action text-white" : "bg-action/10 text-action"}`}
                      >
                        <ChevronDown
                          size={19}
                          className={`transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
                        />
                      </span>
                    </button>
                  </h3>
                  <div {...accordion.panelProps(index)}>
                    <p className="max-w-prose px-6 pb-5 text-lg text-muted">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <div className="relative h-80 overflow-hidden rounded-md lg:h-[27rem]">
            <Image
              src="/images/variant-a/lifestyle-richmond-street.jpg"
              alt="Tree-lined residential street in the Richmond area"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-start gap-3 rounded-md bg-ink/95 p-5 lg:inset-x-6 lg:bottom-6">
              <MapPin size={20} aria-hidden className="mt-1 shrink-0 text-focus" />
              <div>
                <p className="text-lg font-semibold text-white">{FAQ.locationLabel}</p>
                <p className="mt-0.5 text-sm text-white/70">{FAQ.addressNote}</p>
              </div>
            </div>
          </div>
          <PendingAction
            label={
              <>
                {FAQ.cta} <ArrowRight size={18} aria-hidden />
              </>
            }
            title={PENDING.booking.title}
            message={PENDING.booking.message}
            className={`${primaryButtonA} mt-5 w-full`}
          />
        </div>
      </div>
    </section>
  );
}
