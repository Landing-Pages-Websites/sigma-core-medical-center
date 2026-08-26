import { PATH } from "@/content/site";
import { Reveal } from "@/components/shared/reveal";
import { BracketMark, BracketMarkEnd, SteppedBars } from "@/components/variant-b/motifs";

const STEP_OFFSETS = ["lg:translate-y-0", "lg:translate-y-12", "lg:translate-y-24", ];

export function InformedPathB(): React.ReactElement {
  return (
    <section id="how-it-works" aria-label="What happens next" className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="absolute right-0 bottom-0 left-0 hidden h-14 bg-paper lg:block"
      />
      <div
        aria-hidden
        className="absolute bottom-14 left-[8%] hidden h-10 w-56 bg-silver/40 lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:pb-40 lg:py-24">
        <Reveal>
          <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-tight text-ink sm:text-[2.75rem]">
            {PATH.headline}
          </h2>
        </Reveal>
        <ol className="mt-12 space-y-8 lg:grid lg:grid-cols-3 lg:gap-10 lg:space-y-0">
          {PATH.steps.map((step, index) => (
            <li
              key={step.title}
              className={`relative border border-silver/50 bg-paper p-6 shadow-[10px_10px_0_0_rgba(32,39,46,0.14)] ${STEP_OFFSETS[index]} ${index === 1 ? "sm:ml-10 lg:ml-0" : ""}`}
            >
              <SteppedBars className="absolute top-5 right-5" />
              <h3 className="flex items-start gap-3 pr-14 text-2xl leading-tight font-semibold text-ink">
                <BracketMark className="mt-1.5" />
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-base text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 flex w-fit items-center gap-2 text-sm text-muted lg:mt-28 lg:ml-auto">
          <BracketMark className="h-4" />
          {PATH.disclaimer}
          <BracketMarkEnd className="h-4" />
        </p>
      </div>
    </section>
  );
}
