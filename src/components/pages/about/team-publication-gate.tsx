import { Info } from "lucide-react";
import { CornerStripes, TallBracket } from "@/components/pages/shared/page-motifs";

export function TeamPublicationGate(): React.ReactElement {
  return (
    <section id="team" className="relative overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-6 right-0 hidden w-[26rem] lg:flex" />
      <div className="mx-auto grid max-w-[90rem] gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:px-14 lg:py-20">
        <div>
          <h2 className="flex items-center gap-4 font-heading text-[clamp(2.3rem,4vw,3.6rem)] leading-none font-bold tracking-[-0.03em]">
            <TallBracket className="h-20 w-4 shrink-0 text-silver" /> Team information
          </h2>
          <p className="mt-6 max-w-[30rem] text-lg leading-relaxed text-white/90">Provider names, credentials and biographies are not currently published.</p>
        </div>
        <div className="self-end border-l-4 border-royal bg-slate px-6 py-8 lg:mt-12">
          <Info size={32} className="text-[#4f9bf0]" aria-hidden />
          <h3 className="mt-4 font-heading text-2xl font-bold">Team information unavailable</h3>
          <p className="mt-3 text-base leading-relaxed text-white/80">No publication date has been supplied.</p>
        </div>
      </div>
    </section>
  );
}
