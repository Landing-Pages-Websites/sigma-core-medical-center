import Image from "next/image";
import { AlignVerticalSpaceAround, Bone, UserRound } from "lucide-react";
import { SOURCE_GROUPS } from "@/components/pages/pain-relief/content";
import { RisingBars, TallBracket } from "@/components/pages/shared/page-motifs";

const GROUP_ICONS = [Bone, AlignVerticalSpaceAround, UserRound] as const;

export function PainSources(): React.ReactElement {
  return (
    <section id="medical-sources" className="relative overflow-hidden bg-navy text-white">
      <div className="mx-auto grid max-w-[90rem] gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[71fr_29fr] lg:gap-4 lg:py-12 lg:pl-[3.5rem]">
        <div>
          <div className="relative flex items-end justify-between gap-6 px-8 py-3 lg:mr-10">
            <TallBracket className="absolute inset-y-0 left-0 w-4 text-silver" />
            <div>
              <h2 className="font-heading text-[clamp(2.8rem,5.4vw,4.8rem)] leading-none font-bold tracking-[-0.035em]">Medical Sources</h2>
              <p className="mt-2 text-lg text-white/90">Trusted sources used and approved.</p>
            </div>
            <RisingBars count={5} className="mb-2 hidden h-20 text-[1.2rem] sm:flex" />
            <TallBracket side="right" className="absolute inset-y-0 right-0 w-4 text-silver" />
          </div>
          <div className="mt-4 border border-white/25 bg-[#0b2342]">
            <div className="flex flex-wrap justify-between gap-2 border-b border-white/25 px-5 py-3 text-[0.7rem] tracking-[0.12em] uppercase">
              <span>
                <strong className="font-semibold">Source:</strong> NIH/MedlinePlus and professional guidance
              </span>
              <span className="sm:border-l sm:border-white/25 sm:pl-6">
                <strong className="font-semibold">Review status:</strong> Approved
              </span>
            </div>
            <div className="grid gap-6 px-5 py-6 sm:grid-cols-3 sm:gap-0">
              {SOURCE_GROUPS.map((group, index) => {
                const Icon = GROUP_ICONS[index];
                return (
                  <div key={group.title} className="sm:border-r sm:border-white/20 sm:px-5 sm:first:pl-0 sm:last:border-r-0">
                    <h3 className="flex items-center gap-3 font-heading text-2xl font-bold">
                      <span className="flex items-center gap-1 text-royal">
                        <TallBracket className="h-8 w-2" />
                        <Icon size={22} strokeWidth={1.5} className="text-[#4f9bf0]" aria-hidden />
                        <TallBracket side="right" className="h-8 w-2" />
                      </span>
                      {group.title}
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-xs leading-snug text-white/85">
                      {group.sources.map((source) => (
                        <li key={source} className="flex gap-2.5">
                          <span aria-hidden className="mt-1 block h-1.5 w-1.5 shrink-0 bg-royal" />
                          {source}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="relative min-h-44">
            <Image src="/images/pages/pain-sources-reception-v4.png" alt="Conceptual clinic reception with walnut desk" fill sizes="(min-width: 1024px) 29vw, 100vw" className="object-cover object-[30%_center]" />
          </div>
          <div className="relative min-h-44">
            <Image src="/images/pages/pain-sources-lounge-v4.png" alt="Conceptual clinic lounge with leather sofa" fill sizes="(min-width: 1024px) 29vw, 100vw" className="object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
