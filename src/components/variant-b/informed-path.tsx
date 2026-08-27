import { PATH } from "@/content/site";
import { BracketMark, BracketMarkEnd } from "@/components/variant-b/motifs";

const STEP_POSITIONS = [
  "xl:top-[13.75rem] xl:left-[5.5%] xl:w-[27.5%] xl:max-w-[32.5rem]",
  "xl:top-[17rem] xl:left-[35.25%] xl:w-[28%] xl:max-w-[33rem]",
  "xl:top-[21.5rem] xl:right-[5%] xl:w-[25.5%] xl:max-w-[30.5rem]",
];

const STEP_HEIGHTS = [
  "xl:min-h-[13.5rem]",
  "xl:min-h-[16.25rem]",
  "xl:min-h-[13.5rem]",
];

const PLASTER_STYLE = {
  backgroundImage:
    "radial-gradient(circle, rgba(16,30,51,0.035) 0.55px, transparent 0.7px), radial-gradient(circle, rgba(16,30,51,0.025) 0.45px, transparent 0.6px)",
  backgroundPosition: "0 0, 2px 3px",
  backgroundSize: "5px 5px, 7px 7px",
};

function PathBars(): React.ReactElement {
  return (
    <span
      aria-hidden
      className="absolute top-2 right-8 z-30 flex w-16 origin-top-right flex-col gap-1 xl:top-3 xl:right-8 xl:scale-[1.55]"
    >
      <span className="ml-12 h-1 w-4 bg-electric" />
      <span className="ml-8 h-1 w-6 bg-electric" />
      <span className="ml-4 h-1 w-8 bg-electric" />
      <span className="h-1 w-10 bg-electric" />
    </span>
  );
}

function ArchitecturalBase(): React.ReactElement {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block">
      {/* Quiet floor plane beneath the three staggered moments. */}
      <span
        className="absolute inset-x-0 bottom-0 h-[16.5%] border-t border-silver/35 bg-[#faf9f6]"
        style={PLASTER_STYLE}
      />

      {/* Left plaster ledge and its angled return. */}
      <span
        className="absolute bottom-[16.5%] left-0 h-[9.5rem] w-[24%] bg-[#efede7] shadow-[10px_12px_24px_rgba(16,30,51,0.07)] [clip-path:polygon(0_0,100%_0,100%_100%,8%_100%,0_72%)]"
        style={PLASTER_STYLE}
      />
      <span className="absolute bottom-[16.5%] left-0 h-1.5 w-[24%] -translate-y-[9.25rem] bg-[#8b5535]" />
      <span className="absolute bottom-[16.5%] left-0 h-16 w-[10%] bg-[linear-gradient(135deg,#f8f6f1_0%,#e1ddd6_52%,#c6c1b9_100%)] [clip-path:polygon(0_10%,100%_0,100%_100%,0_100%)]" />

      {/* Low center and right plinths anchor the dark portals. */}
      <span
        className="absolute bottom-[16.5%] left-[31.4%] h-16 w-[17%] border-t border-silver/20 bg-[#efede7] shadow-[10px_10px_22px_rgba(16,30,51,0.08)]"
        style={PLASTER_STYLE}
      />
      <span
        className="absolute right-[12.2%] bottom-[15.8%] h-12 w-[19.5%] border-t-[5px] border-[#9a6040] bg-[#efede7] shadow-[10px_10px_22px_rgba(16,30,51,0.08)]"
        style={PLASTER_STYLE}
      />

      {/* Foreground step adds the perspective seen in the approved composition. */}
      <span className="absolute right-0 bottom-0 h-[12.8%] w-[47%] border-t-[7px] border-silver/45 bg-surface shadow-[-10px_-8px_22px_rgba(16,30,51,0.07)] [clip-path:polygon(5%_0,100%_0,100%_100%,0_100%,0_28%,3%_28%)]" />
    </div>
  );
}

function StepBlocks({ index }: { index: number }): React.ReactElement {
  if (index === 0) {
    return (
      <span
        aria-hidden
        className="absolute top-[86%] right-[3%] z-20 hidden h-[11.5rem] w-[30%] bg-[linear-gradient(90deg,#343332_0%,#171a1c_100%)] shadow-[12px_14px_24px_rgba(16,30,51,0.14)] xl:block"
      />
    );
  }

  if (index === 1) {
    return (
      <>
        <span
          aria-hidden
          className="absolute top-[69%] -right-[11%] z-20 hidden h-[8.75rem] w-[41%] bg-[linear-gradient(105deg,#2d2d2b_0%,#17191b_100%)] shadow-[12px_14px_24px_rgba(16,30,51,0.14)] xl:block"
        />
        <span
          aria-hidden
          className="absolute top-[69%] left-[52%] z-20 hidden h-[8.75rem] w-[24%] bg-[linear-gradient(105deg,#393937_0%,#202326_100%)] xl:block"
        />
      </>
    );
  }

  return (
    <span
      aria-hidden
      className="absolute top-[82%] right-0 z-20 hidden h-16 w-[29%] bg-[linear-gradient(105deg,#2f2f2d_0%,#181a1c_100%)] shadow-[10px_12px_20px_rgba(16,30,51,0.12)] xl:block"
    />
  );
}

function PathStep({ index }: { index: number }): React.ReactElement {
  const step = PATH.steps[index];
  const bodyWidth = index === 1 ? "xl:max-w-[10.75rem]" : "xl:max-w-[15rem]";

  return (
    <li
      data-b-reveal="step"
      data-b-delay={String(index + 1)}
      className={`group relative min-h-52 w-full min-w-0 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out xl:absolute xl:hover:-translate-y-1 ${STEP_POSITIONS[index]} ${index === 2 ? "md:col-span-2 md:mx-auto md:w-[48%] lg:col-span-1 lg:mx-0 lg:w-auto" : ""}`}
    >
      <PathBars />
      <BracketMark className="absolute top-8 left-5 z-30 h-14 w-5 text-silver sm:left-7 xl:top-12 xl:-left-4 xl:h-24 xl:w-6 xl:border-y-[5px] xl:border-l-[5px]" />
      <div
        className={`relative z-10 h-full min-h-52 w-full min-w-0 bg-paper px-6 py-8 shadow-[12px_12px_0_rgba(32,39,46,0.08)] [clip-path:polygon(0_0,95%_0,100%_9%,100%_100%,0_100%)] sm:px-8 sm:py-9 xl:px-8 xl:pt-12 xl:pb-4 xl:shadow-[0_22px_44px_-34px_rgba(16,30,51,0.32)] ${STEP_HEIGHTS[index]}`}
        style={PLASTER_STYLE}
      >
        <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-electric/25 transition-all duration-300 group-hover:bg-electric/70" />
        <span className="absolute top-4 left-8 hidden items-center gap-2 text-[0.625rem] font-semibold tracking-[0.22em] text-electric uppercase xl:flex">
          <span className="h-px w-5 bg-electric/70" />
          Step {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="min-w-0 max-w-[85%] break-words pl-8 pr-20 text-2xl leading-[1.05] font-semibold text-ink sm:text-3xl xl:max-w-[82%] xl:pl-0 xl:pr-4 xl:text-[2rem]">
          {step.title}
        </h3>
        <p className={`mt-6 w-full min-w-0 max-w-sm break-words text-base leading-relaxed text-muted xl:mt-4 xl:text-base ${bodyWidth}`}>
          {step.body}
        </p>
      </div>
      <span
        aria-hidden
        className="absolute top-0 -right-[4%] z-[5] hidden h-full w-[4.5%] bg-[#dedad3] shadow-[8px_12px_22px_rgba(16,30,51,0.08)] [clip-path:polygon(0_0,100%_9%,100%_100%,0_100%)] xl:block"
      />
      <StepBlocks index={index} />
    </li>
  );
}

export function InformedPathB(): React.ReactElement {
  return (
    <section id="how-it-works" aria-label="What happens next" className="relative overflow-hidden bg-surface">
      <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 hidden h-64 bg-[radial-gradient(ellipse_at_top_left,rgba(0,127,196,0.06),transparent_62%)] xl:block" />
      <div className="relative mx-auto w-full max-w-[120rem] px-5 py-14 sm:px-10 sm:py-16 xl:min-h-[clamp(43rem,47vw,44rem)] xl:px-0 xl:py-0">
        <ArchitecturalBase />
        <div data-b-reveal="up" className="relative z-20 xl:absolute xl:top-12 xl:left-[5.5%]">
          <h2 className="max-w-3xl text-4xl leading-[1.02] font-semibold tracking-[-0.04em] text-ink sm:text-5xl xl:text-[clamp(4.25rem,5.25vw,5rem)]">
            A simple path to<br />an informed next step
          </h2>
          <span aria-hidden className="mt-5 hidden h-1 w-16 bg-electric/80 xl:block" />
        </div>
        <ol className="relative z-10 mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:absolute xl:inset-0 xl:mt-0 xl:block">
          {PATH.steps.map((step, index) => (
            <PathStep key={step.title} index={index} />
          ))}
        </ol>
        <p data-b-reveal="up" data-b-delay="4" className="relative z-30 mt-10 flex w-fit items-center gap-2 text-xs text-muted md:ml-auto xl:absolute xl:right-[2%] xl:bottom-8 xl:bg-surface/90 xl:px-4 xl:py-1">
          <BracketMark className="h-4" />
          {PATH.disclaimer}
          <BracketMarkEnd className="h-4" />
        </p>
      </div>
    </section>
  );
}
