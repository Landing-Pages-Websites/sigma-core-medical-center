import { ArrowRight } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

const BOUNDARY_LINES = [
  "This section provides category-level information only.",
  "Specific products or procedures require their own review.",
  "Content here does not reference any Sigma Core modalities.",
] as const;

export function RegenerativeOrientation(): React.ReactElement {
  return (
    <section id="category-orientation" className="relative overflow-hidden bg-royal text-white">
      <div className="grid lg:min-h-[38rem] lg:grid-cols-[48fr_52fr]">
        <div className="relative z-10 pt-12 lg:pt-14">
          <h2 className="px-6 font-heading text-[clamp(3rem,6.6vw,6rem)] leading-[0.95] font-bold tracking-[-0.035em] sm:px-10 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
            Category
            <br />
            Orientation
          </h2>
          <div className="relative mt-8 bg-chalk px-6 py-8 text-ink sm:px-10 lg:mr-[-2rem] lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:[clip-path:polygon(0_0,100%_0,100%_74%,88%_74%,84%_100%,0_100%)]">
            <p className="flex items-center gap-2 font-heading text-lg font-bold text-royal">
              <TallBracket className="h-7 w-2" /> Regenerative medicine is a broad category. <TallBracket side="right" className="h-7 w-2" />
            </p>
            <p className="mt-3 max-w-[24rem] text-lg leading-snug">Legality, evidence, risks, and suitability depend on the actual product or procedure.</p>
            <p className="mt-4 max-w-[24rem] text-lg leading-snug">Do not consider any Sigma Core modality until written verification and review exist.</p>
          </div>
          <StairSteps count={5} direction="down" barClassName="bg-[#3d86e0]" className="absolute top-[52%] right-[-1rem] z-20 hidden text-[0.9rem] lg:flex" />
          <div className="px-6 pt-8 pb-10 sm:px-10 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
            <span className="relative inline-flex px-4 py-1">
              <TallBracket className="absolute inset-y-0 left-0 w-2 text-white/80" />
              <PolicyLink
                label={<>Terms &amp; definitions <ArrowRight size={20} aria-hidden /></>}
                className="inline-flex h-11 items-center gap-6 border border-white px-5 text-base font-semibold transition-colors hover:bg-white hover:text-royal"
              />
              <TallBracket side="right" className="absolute inset-y-0 right-0 w-2 text-white/80" />
            </span>
            <p className="mt-3 max-w-[14rem] text-xs leading-snug text-white/85">Understand the words we use and how we apply them.</p>
          </div>
        </div>
        <div className="flex items-center bg-slate px-6 py-12 sm:px-10 lg:mt-24 lg:pr-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pl-[28%] lg:[clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)]">
          <div>
            <p className="flex items-center gap-3 font-heading text-xl font-bold">
              <TallBracket className="h-9 w-2 text-silver" /> Category boundary <TallBracket side="right" className="h-9 w-2 text-silver" />
            </p>
            <div className="mt-6 max-w-[17rem] space-y-4 text-base leading-snug text-white/88">
              {BOUNDARY_LINES.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
