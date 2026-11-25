import Image from "next/image";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

const SOURCES = [
  { name: "Endocrine Society", body: "Patient education on hormone health and endocrine conditions.", url: "www.endocrine.org", href: "https://www.endocrine.org" },
  { name: "MedlinePlus — National Library of Medicine", body: "Reliable information about hormone-related health concerns and medical conditions.", url: "medlineplus.gov", href: "https://medlineplus.gov/hormones.html" },
  { name: "U.S. Food and Drug Administration (FDA)", body: "Information about hormone medications, approved uses, and treatment safety.", url: "www.fda.gov", href: "https://www.fda.gov" },
] as const;

export function HormoneSources(): React.ReactElement {
  return (
    <section data-mega-section="medical-sources" id="medical-sources" className="relative overflow-hidden bg-chalk text-ink">
      <div aria-hidden className="h-2 bg-royal" />
      <div className="mx-auto grid max-w-[90rem] gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[57fr_43fr] lg:gap-2 lg:py-12 lg:pl-[3.5rem]">
        <div className="relative">
          <h2 className="font-heading text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.03em] text-navy">Understand Your Hormone Health.</h2>
          <p className="mt-3 max-w-[30rem] text-base leading-snug text-ink/85">Making informed decisions begins with reliable information. These established medical organizations provide educational resources about hormones, endocrine health, and related medical conditions.</p>
          <StairSteps count={3} direction="up" className="absolute top-[34%] right-6 hidden text-[0.75rem] lg:flex" />
          <div className="relative mt-6 lg:mr-6">
            <TallBracket className="absolute top-4 bottom-10 -left-4 w-3 text-silver" />
            <ul className="relative z-10 space-y-3 bg-[#ebe8e2] px-6 py-5 lg:mr-[20%]">
              {SOURCES.map((source) => (
                <li key={source.name}>
                  <h3 className="font-heading text-lg font-bold text-navy">{source.name}</h3>
                  <p className="text-sm leading-snug text-ink/75">{source.body}</p>
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-royal underline-offset-2 hover:underline">{source.url}</a>
                </li>
              ))}
            </ul>
            <div aria-hidden className="hidden h-10 lg:flex lg:items-end lg:justify-end lg:pr-[10%]">
              <span className="-mt-28 block h-36 w-24 bg-gradient-to-b from-[#3a3c40] to-[#1d1f22]" />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative min-h-60 lg:min-h-[19rem]">
            <Image src="/images/pages/services-forward-path-v2.webp" alt="A person walking through a sunlit outdoor courtyard" fill sizes="(min-width: 1024px) 43vw, 100vw" className="object-cover object-[70%_center]" />
          </div>
          <p className="relative mt-3 ml-auto flex max-w-md items-center gap-3 px-2 text-xs text-ink/80">
            <TallBracket className="h-7 w-1.5 shrink-0 text-silver" /> These independent resources provide general medical education and do not endorse Sigma Core Medical Center or its particular treatments.
            <TallBracket side="right" className="h-7 w-1.5 text-silver" />
          </p>
        </div>
      </div>
    </section>
  );
}
