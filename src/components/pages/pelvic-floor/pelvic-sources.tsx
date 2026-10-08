import Image from "next/image";
import { MiniStairs, TallBracket } from "@/components/pages/shared/page-motifs";

const SOURCES = [
  { name: "National Institute of Diabetes and Digestive and Kidney Diseases", detail: "Overactive Bladder (OAB) in Women" },
  { name: "American Urological Association", detail: "Diagnosis and Treatment of Overactive Bladder (OAB) in Adults: AUA/SUFU Guideline" },
  { name: "International Urogynecological Association", detail: "Terminology and Classification of Obstructive and Incontinence-Related Pelvic Floor Dysfunction" },
] as const;

export function PelvicSources(): React.ReactElement {
  return (
    <section id="medical-sources" className="relative overflow-hidden bg-chalk text-ink">
      <div className="grid lg:grid-cols-[54fr_46fr]">
        <div className="relative px-6 pt-14 sm:px-10 lg:pt-16 lg:pb-10 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <MiniStairs className="absolute top-12 right-[30%] hidden scale-[2] text-royal lg:inline-flex" />
          <h2 className="font-heading text-[clamp(2.8rem,5.6vw,5.1rem)] leading-none font-bold tracking-[-0.035em] text-navy">Medical Sources</h2>
          <p className="relative mt-5 max-w-[34rem] py-1 pl-6 text-sm leading-relaxed text-ink/85">
            <TallBracket className="absolute inset-y-0 left-0 w-2.5 text-silver" />
            The information on this site is grounded in reputable, evidence-based sources reviewed by our clinical team. We list only the sources we actually use. This is not an endorsement of any organization.
          </p>
        </div>
        <div className="relative mx-6 mt-8 min-h-56 sm:mx-10 lg:m-0 lg:mt-10 lg:[clip-path:polygon(0_0,100%_0,100%_100%,6%_100%,0_70%)]">
          <Image src="/images/pages/pain-sources-reception-v4.png" alt="Conceptual minimalist clinic reception" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover object-[35%_center]" />
        </div>
      </div>
      <ul className="mx-auto grid max-w-[90rem] gap-8 px-6 pt-10 pb-14 sm:px-10 md:grid-cols-3 lg:pl-[3.5rem]">
        {SOURCES.map((source) => (
          <li key={source.name} className="relative pt-4 pl-6">
            <TallBracket className="absolute top-4 bottom-0 left-0 w-2.5 text-silver" />
            <MiniStairs className="absolute -top-3 right-6 scale-150 text-royal" />
            <h3 className="pr-4 font-heading text-lg leading-tight font-bold text-navy">{source.name}</h3>
            <p className="mt-2 text-xs leading-snug text-ink/75">{source.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
