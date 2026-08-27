import { ArrowRight } from "lucide-react";
import { NEUROPATHY } from "@/content/site";
import { BracketMark } from "@/components/variant-b/motifs";

const SLAB_STYLES = [
  "bg-paper text-ink lg:min-h-40 lg:w-[67%] lg:[clip-path:polygon(0_0,100%_0,100%_55%,76%_55%,76%_100%,0_100%)]",
  "bg-charcoal text-white lg:-ml-24 lg:min-h-36 lg:w-[72%] lg:[clip-path:polygon(0_0,100%_0,100%_48%,82%_48%,82%_100%,0_100%)]",
  "bg-paper text-ink lg:-ml-60 lg:min-h-36 lg:w-[72%] lg:[clip-path:polygon(0_0,100%_0,100%_50%,82%_50%,82%_100%,0_100%)]",
];

const SLAB_TEXTURES = [
  {
    backgroundImage:
      "radial-gradient(circle at 18% 22%, rgb(255 255 255 / 0.28) 0 1px, transparent 1.5px), linear-gradient(135deg, rgb(255 255 255 / 0.12), rgb(16 30 51 / 0.04))",
    backgroundSize: "7px 7px, auto",
  },
  {
    backgroundImage:
      "radial-gradient(circle at 28% 32%, rgb(255 255 255 / 0.05) 0 1px, transparent 1.5px), linear-gradient(135deg, rgb(255 255 255 / 0.025), rgb(0 0 0 / 0.12))",
    backgroundSize: "6px 6px, auto",
  },
  {
    backgroundImage:
      "radial-gradient(circle at 72% 42%, rgb(255 255 255 / 0.3) 0 1px, transparent 1.5px), linear-gradient(135deg, rgb(255 255 255 / 0.12), rgb(16 30 51 / 0.04))",
    backgroundSize: "7px 7px, auto",
  },
] as const;

const SIGNAL_BARS = ["w-16", "w-28", "w-40", "w-52", "w-64", "w-80", "w-44"];

export function NeuropathyB(): React.ReactElement {
  return (
    <section id="neuropathy" aria-label="Neuropathy care" className="relative overflow-hidden bg-ink">
      <div aria-hidden className="absolute right-0 bottom-0 hidden h-[51%] w-[50%] bg-[#0878e5] lg:block [clip-path:polygon(66%_0,100%_0,100%_100%,0_100%,0_94%,12%_94%,12%_82%,24%_82%,24%_70%,36%_70%,36%_58%,48%_58%,48%_46%,60%_46%,60%_34%,66%_34%)]" />
      <div aria-hidden data-b-reveal="right" className="absolute top-0 right-0 hidden flex-col items-end gap-2.5 lg:flex">
        {SIGNAL_BARS.map((bar, index) => (
          <span key={`${bar}-${index}`} className={`block h-4 bg-[#0878e5] ${bar}`} />
        ))}
      </div>
      <div className="relative grid w-full px-6 py-16 sm:px-10 lg:min-h-[clamp(46rem,min(51vw,100svh),54rem)] lg:grid-cols-[33fr_67fr] lg:gap-12 lg:px-[3.25vw] lg:py-20">
        <div data-b-reveal="left" className="flex flex-col">
          <p className="text-base font-semibold text-focus">{NEUROPATHY.eyebrow}</p>
          <h2 className="mt-4 max-w-lg text-4xl leading-[1.02] font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-[clamp(3rem,3.5vw,3.6rem)]">
            A clearer next step when neuropathy is limiting your day
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">{NEUROPATHY.body}</p>
        </div>
        <div className="relative z-10 mt-12 lg:mt-32">
          <ul className="space-y-3 lg:space-y-0">
            {NEUROPATHY.orientationPoints.map((point, index) => (
              <li
                key={point}
                style={SLAB_TEXTURES[index]}
                data-b-reveal="step"
                data-b-delay={String(index + 1)}
                className={`relative flex min-h-32 items-center gap-6 px-8 py-7 shadow-[0_12px_24px_rgba(0,0,0,0.28)] sm:min-h-36 lg:px-10 ${SLAB_STYLES[index]}`}
              >
                <span aria-hidden className="inline-block h-12 w-5 shrink-0 border-y-4 border-l-4 border-silver drop-shadow-[2px_3px_2px_rgba(0,0,0,0.3)] lg:h-16" />
                <span className="max-w-xs text-2xl leading-[1.02] font-semibold sm:text-3xl lg:text-[2rem]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <div data-b-reveal="right" data-b-delay="3" className="mt-8 flex justify-start lg:absolute lg:top-[23.5rem] lg:right-0 lg:mt-0 lg:justify-end">
            <a href="#services" className="relative inline-flex min-h-16 w-full items-center justify-center gap-5 border-2 border-focus px-8 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-action sm:w-auto lg:min-h-20 lg:min-w-[27rem]">
              {NEUROPATHY.cta} <ArrowRight size={24} aria-hidden />
            </a>
          </div>
          <p data-b-reveal="up" data-b-delay="4" className="mt-8 flex items-center gap-3 text-white/70 lg:hidden">
            <BracketMark />
            <span className="font-display text-base italic">{NEUROPATHY.disclaimer}</span>
          </p>
        </div>
      </div>
      <p data-b-reveal="left" data-b-delay="4" className="absolute bottom-8 left-[2.5vw] hidden items-center gap-3 text-white/65 lg:flex">
        <BracketMark />
        <span className="font-display text-base italic">{NEUROPATHY.disclaimer}</span>
      </p>
    </section>
  );
}
