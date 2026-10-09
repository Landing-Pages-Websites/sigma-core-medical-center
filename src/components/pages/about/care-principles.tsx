import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

const PRINCIPLES = [
  { title: "One clear next step.", body: "Explore the available information at your own pace." },
  { title: "Your questions, your goals.", body: "Consider what matters most to you in daily life." },
  { title: "Honest about outcomes.", body: "Care options and outcomes vary. Individual decisions require a qualified provider." },
] as const;

export function CarePrinciples(): React.ReactElement {
  return (
    <section id="care-principles" className="relative overflow-hidden bg-slate text-white">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:px-14 lg:py-16">
        <div>
          <h2 className="flex items-center gap-3 font-heading text-[clamp(2.8rem,5.4vw,4.8rem)] leading-none font-bold tracking-[-0.035em]">
            <TallBracket className="h-16 w-4 shrink-0 text-silver sm:h-20" />Care Principles
          </h2>
          <ul className="mt-8 space-y-7">
            {PRINCIPLES.map((principle) => <li key={principle.title} className="flex gap-6">
              <StairSteps count={4} direction="up" className="mt-1 shrink-0 text-[0.45rem]" />
              <div><h3 className="font-heading text-xl font-bold sm:text-2xl">{principle.title}</h3><p className="mt-2 max-w-[28rem] text-base leading-relaxed text-white/80">{principle.body}</p></div>
            </li>)}
          </ul>
        </div>
        <div className="self-end bg-royal px-6 py-10 sm:px-10 lg:pt-16 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%,0_16%)]">
          <h3 className="font-heading text-3xl font-bold">Booking status</h3>
          <p className="mt-3 text-lg leading-relaxed">Online scheduling is not yet available.</p>
          <Link href="/book" className="mt-6 inline-flex max-w-full min-h-14 items-center gap-4 border border-white px-5 py-3 font-semibold transition-colors hover:bg-white hover:text-royal focus-visible:outline-2 focus-visible:outline-offset-[-6px]">Check booking status <ArrowRight className="shrink-0" size={20} aria-hidden /></Link>
        </div>
      </div>
    </section>
  );
}
