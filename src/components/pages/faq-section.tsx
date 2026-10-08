import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { FaqButton, FaqEntry } from "@/content/pages";
import { BracketMark, SteppedBars } from "@/components/variant-b/motifs";

type FaqSectionProps = {
  items: readonly FaqEntry[];
  /** Opt-in pull-quote shown under the intro copy. */
  quote?: string;
  /** Opt-in pair of buttons shown under the quote. */
  buttons?: readonly [FaqButton, FaqButton];
};

export function FaqSection({ items, quote, buttons }: FaqSectionProps): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
      <SteppedBars className="absolute top-12 right-8 items-end scale-150 sm:right-16" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[34fr_66fr]">
        <div>
          <h2 className="flex items-start gap-4 text-6xl leading-none font-semibold tracking-tight sm:text-7xl"><BracketMark className="mt-2 h-12 w-5 text-electric" /> FAQ</h2>
          <p className="mt-5 max-w-sm text-lg text-white/70">Clear answers to common questions so you can take the next right step with confidence.</p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 font-semibold text-focus hover:underline">Contact us <ArrowRight size={17} /></Link>
          {quote ? (
            <div className="mt-8 max-w-sm border-l-4 border-electric bg-charcoal p-5">
              <p className="text-sm leading-relaxed text-white/80">{quote}</p>
            </div>
          ) : null}
          {buttons ? (
            <div className="mt-5 flex flex-wrap gap-3">
              {buttons.map((button) => (
                <Link key={button.label} href={button.href} className="inline-flex h-11 items-center gap-2 bg-action px-4 text-sm font-semibold text-white transition-colors hover:bg-hover">
                  {button.label} <ArrowRight size={15} aria-hidden />
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <div className="space-y-3">
          {items.map((item, index) => (
            <details key={item.question} open={index === 0} className="group border-l-4 border-electric bg-charcoal">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-3"><BracketMark className="text-silver" />{item.question}</span>
                <ChevronDown className="shrink-0 transition-transform group-open:rotate-180" size={20} aria-hidden />
              </summary>
              <p className="border-t border-white/10 px-6 py-5 text-base leading-relaxed text-white/70 sm:px-10">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
