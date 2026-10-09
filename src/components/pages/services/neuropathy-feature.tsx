import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Waypoints } from "lucide-react";
import { TallBracket } from "@/components/pages/shared/page-motifs";
import { OtherWays } from "@/components/pages/services/other-ways";

const FEATURE_POINTS = [
  "Possible goal: ease of movement.",
  "Possible goal: confidence in daily activities.",
  "Possible goal: independence.",
] as const;

const FEATURE_STRIPES = ["w-[62%] ml-[38%]", "w-[66%] ml-[24%]", "w-[70%] ml-[12%]", "w-[74%] ml-0"] as const;

export function NeuropathyFeature(): React.ReactElement {
  return (
    <section id="neuropathy-feature" className="relative overflow-hidden bg-royal text-white">
      <div className="mx-auto grid max-w-[90rem] gap-8 px-6 pt-14 sm:px-10 lg:grid-cols-[62fr_38fr] lg:gap-0 lg:pt-20 lg:pl-[3.75rem]">
        <div className="lg:pt-8">
          <h2 className="font-heading text-[clamp(2.6rem,6vw,5.6rem)] leading-[0.95] font-bold tracking-[-0.035em]">Neuropathy Feature</h2>
          <p className="mt-6 max-w-[38rem] text-base leading-relaxed text-white/92 sm:text-lg">
            Explore neuropathy information through movement, daily function, and independence. These are possible goals, not promised outcomes. Treatment and provider details are not yet available.
          </p>
        </div>
        <div className="relative h-64 sm:h-80 lg:h-[19rem]">
          <div aria-hidden className="absolute bottom-10 -left-36 hidden w-56 flex-col gap-3 lg:flex">
            {FEATURE_STRIPES.map((stripe, index) => (
              <span key={stripe} className={`block h-2.5 ${index < 2 ? "bg-white" : "bg-navy"} ${stripe}`} />
            ))}
          </div>
          <div className="absolute inset-0 lg:[clip-path:polygon(28%_0,96%_0,100%_100%,0_100%)]">
            <Image src="/images/pages/services-forward-path-v2.png" alt="A person walking toward daylight through a quiet stone passage" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover object-[70%_center]" />
          </div>
        </div>
      </div>

      <FeatureBanner />
      <OtherWays />
    </section>
  );
}

function FeatureBanner(): React.ReactElement {
  return (
    <div className="relative z-10 mx-auto -mt-px max-w-[90rem] px-6 sm:px-10 lg:px-[3.75rem]">
      <div className="relative grid gap-8 bg-navy px-6 py-8 shadow-[0_24px_60px_rgb(0_0_0/0.35)] sm:px-10 md:grid-cols-[1.15fr_1fr] lg:grid-cols-[1.1fr_1fr_0.85fr] lg:items-center lg:px-14 lg:py-10 lg:[clip-path:polygon(2%_0,100%_0,98%_100%,0_100%)]">
        <div className="flex items-center gap-5">
          <TallBracket className="hidden h-28 w-5 text-silver sm:block" />
          <span className="flex h-16 w-16 shrink-0 items-center justify-center bg-royal sm:h-[4.5rem] sm:w-[4.5rem]">
            <Waypoints size={36} strokeWidth={1.6} aria-hidden />
          </span>
          <span aria-hidden className="hidden h-16 w-px bg-white/30 sm:block" />
          <div>
            <p className="font-heading text-[clamp(2.2rem,3.6vw,3.3rem)] leading-none font-bold tracking-[-0.03em]">Neuropathy</p>
            <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-white/75 uppercase">Our primary path of focus</p>
          </div>
        </div>
        <ul className="space-y-4">
          {FEATURE_POINTS.map((point) => (
            <li key={point} className="flex items-start gap-4 text-base leading-snug font-semibold">
              <span aria-hidden className="mt-2.5 block h-0.5 w-7 shrink-0 bg-royal" />
              <span className="max-w-[13rem]">{point}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/services/neuropathy"
          className="group relative flex items-center justify-between gap-6 border-white/25 py-2 md:col-span-2 lg:col-span-1 lg:border-l lg:pl-10 focus-visible:outline-2 focus-visible:outline-offset-[-4px]"
        >
          <span>
            <span className="block text-sm leading-snug font-semibold tracking-[0.2em] uppercase">
              Explore our
              <br />
              neuropathy
              <br />
              approach
            </span>
            <span className="mt-2 block text-sm text-white/65 group-hover:text-focus">/services/neuropathy</span>
          </span>
          <ChevronRight size={56} strokeWidth={1.2} className="shrink-0 text-royal transition-transform group-hover:translate-x-1" aria-hidden />
          <TallBracket side="right" className="absolute -right-3 hidden h-28 w-5 text-silver lg:block" />
        </Link>
      </div>
    </div>
  );
}
