import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

export function AboutBookingCta(): React.ReactElement {
  return (
    <section id="form" className="relative overflow-hidden bg-royal text-white">
      <div className="mx-auto grid max-w-[90rem] gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[3fr_2fr] lg:items-end lg:gap-16 lg:px-14 lg:py-16">
        <h2 className="max-w-[44rem] font-heading text-[clamp(2.6rem,5vw,4.6rem)] leading-none font-bold tracking-[-0.035em]">Online booking is not yet available</h2>
        <div className="relative bg-navy px-6 py-8 sm:px-8 lg:pt-12 lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%,0_15%)]">
          <p className="relative max-w-[24rem] pl-5 text-lg leading-relaxed"><TallBracket className="absolute inset-y-0 left-0 w-2 text-silver" />Appointment and calendar details have not been confirmed.</p>
          <Link href="/book" className="mt-6 inline-flex max-w-full min-h-14 items-center gap-4 bg-chalk px-5 py-3 text-lg font-semibold text-navy transition-colors hover:bg-silver focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Check booking status <ArrowRight size={20} className="shrink-0" aria-hidden /></Link>
          <StairSteps count={4} direction="up" barClassName="bg-[#8ab8f5]" className="mt-6 ml-auto w-fit text-[0.5rem]" />
        </div>
      </div>
    </section>
  );
}
