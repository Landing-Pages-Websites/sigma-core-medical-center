import Image from "next/image";
import { FileCheck2 } from "lucide-react";
import { MiniStairs, TallBracket } from "@/components/pages/shared/page-motifs";
import { PlinthCards } from "@/components/pages/shared/plinth-cards";

export function RegenerativeSources(): React.ReactElement {
  return (
    <section id="medical-sources" className="relative overflow-hidden bg-chalk text-ink">
      <div aria-hidden className="h-2 bg-royal" />
      <div className="mx-auto max-w-[90rem] px-6 pt-12 sm:px-10 lg:pt-12 lg:pl-[3.5rem]">
        <div className="grid gap-6 lg:grid-cols-[46fr_54fr] lg:items-center">
          <h2 className="font-heading text-[clamp(2.8rem,5.4vw,4.9rem)] leading-none font-bold tracking-[-0.035em] text-navy lg:whitespace-nowrap">Medical Sources</h2>
          <p className="relative max-w-[30rem] pl-6 text-sm leading-snug text-ink/85">
            <TallBracket className="absolute inset-y-0 left-0 w-2.5 text-silver" />
            Prioritize current FDA consumer and regulatory pages plus relevant peer-reviewed or professional guidance selected by the clinician. Cite claims precisely and never imply FDA approval where none exists.
          </p>
        </div>
        <div className="mt-6 grid bg-[#e6e2da] md:grid-cols-[1.25fr_1fr_1fr]">
          <div className="flex items-center gap-5">
            <span className="flex h-full min-h-20 w-20 shrink-0 items-center justify-center bg-royal text-white">
              <FileCheck2 size={36} strokeWidth={1.4} aria-hidden />
            </span>
            <div className="py-3 pr-4">
              <p className="font-heading text-xl font-bold text-navy">Reviewed by clinician</p>
              <p className="mt-1 flex flex-wrap items-center gap-3 text-sm">
                <span className="font-semibold text-royal">Current as of May 2025</span>
                <span aria-hidden className="h-4 w-px bg-ink/30" />
                <span className="text-ink/75">No endorsement implied</span>
              </p>
            </div>
          </div>
          <div className="border-ink/15 px-6 py-3 md:border-l">
            <p className="text-sm font-semibold text-navy">Primary federal source</p>
            <p className="text-xs text-ink/75">U.S. Food and Drug Administration</p>
            <p className="text-xs font-semibold text-royal">www.fda.gov</p>
          </div>
          <div className="relative border-ink/15 px-6 py-3 md:border-l">
            <MiniStairs className="absolute right-5 bottom-4 scale-150 text-royal" />
            <p className="text-sm font-semibold text-navy">Evidence sources</p>
            <p className="max-w-[16rem] text-xs leading-snug text-ink/75">Peer-reviewed literature and professional guidance selected by the clinician</p>
          </div>
        </div>
      </div>
      <div className="relative mt-8 pb-10">
        <div className="absolute bottom-0 left-0 hidden h-[78%] w-[16%] lg:block">
          <Image src="/images/pages/pain-sources-reception-v4.png" alt="" fill sizes="16vw" className="object-cover object-[20%_center]" />
        </div>
        <div className="absolute right-0 bottom-0 hidden h-[60%] w-[13%] lg:block">
          <Image src="/images/pages/pain-sources-lounge-v4.png" alt="" fill sizes="13vw" className="object-cover object-[30%_center]" />
        </div>
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-[18%]">
          <PlinthCards />
        </div>
      </div>
    </section>
  );
}
