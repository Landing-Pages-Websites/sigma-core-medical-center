import Image from "next/image";
import { BookOpenCheck } from "lucide-react";
import type { FooterCard } from "@/content/pages";
import { BracketMark, SteppedBars } from "@/components/variant-b/motifs";

type SourcesSectionProps = {
  sources: readonly string[];
  /** Opt-in three-card row shown under the sources grid. */
  footerCards?: readonly [FooterCard, FooterCard, FooterCard];
};

export function SourcesSection({ sources, footerCards }: SourcesSectionProps): React.ReactElement {
  return (
    <section className="bg-surface py-14 text-ink sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[62fr_38fr] lg:items-center">
          <div>
            <div className="flex items-center gap-4"><BookOpenCheck className="text-action" size={34} /><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Medical sources</h2><SteppedBars /></div>
            <p className="mt-4 max-w-2xl text-base text-muted">These organizations and evidence sources inform our general educational content. Inclusion does not imply endorsement.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {sources.map((source) => (
                <div key={source} className="relative border border-silver bg-white p-5 text-sm font-semibold">
                  <BracketMark className="absolute top-4 left-3 h-4 text-action" />
                  <span className="block pl-4">{source}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-56 overflow-hidden lg:h-64 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
            <Image src="/images/shared/waiting-room.png" alt="Sigma Core waiting room" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
          </div>
        </div>
        {footerCards ? (
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {footerCards.map((card) => (
              <div key={card.title} className="relative border border-silver bg-white p-5 [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]">
                <p className="text-sm font-semibold">{card.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{card.body}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
