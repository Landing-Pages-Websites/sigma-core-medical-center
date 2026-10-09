import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, MessageSquare, UserRound } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

const ASSURANCES = [
  { title: "Policy status.", body: "Privacy policy details are unavailable.", icon: FileText },
  { title: "Booking status.", body: "Online scheduling is not yet available.", icon: MessageSquare },
  { title: "Visit details.", body: "Provider and visit information is unavailable.", icon: UserRound },
] as const;

export function PelvicBooking(): React.ReactElement {
  return (
    <section id="booking-cta" className="relative overflow-hidden bg-navy text-white">
      <div className="grid lg:min-h-[30rem] lg:grid-cols-[42fr_58fr]">
        <div className="relative z-10 min-w-0 px-6 pt-14 sm:px-10 lg:pt-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          <h2 className="min-w-0 max-w-full font-heading text-[clamp(3rem,6vw,5.4rem)] leading-none font-bold tracking-[-0.035em] whitespace-normal">Booking status</h2>
          <div className="mt-6 bg-[#1b2129] p-4 lg:-ml-[max(0rem,calc((100vw-90rem)/2))] lg:pl-4">
            <div className="relative bg-royal px-9 py-8 sm:px-12">
              <TallBracket className="absolute top-6 bottom-6 left-4 w-3 text-silver" />
              <TallBracket side="right" className="absolute top-6 bottom-6 right-4 w-3 text-silver" />
              <p className="max-w-[20rem] text-lg leading-snug">Online scheduling is not yet available. Provider and visit details have not been confirmed.</p>
              <Link href="/book" className="mt-5 inline-flex min-w-0 max-w-full min-h-12 items-center gap-3 bg-white px-4 py-2 text-base font-semibold whitespace-normal text-royal sm:gap-4 sm:px-5 sm:text-lg transition-colors hover:bg-chalk focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
                <span className="min-w-0 [overflow-wrap:break-word]">Check booking status</span>
                <ArrowRight size={20} aria-hidden className="shrink-0" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative min-h-[20rem] lg:mt-12 lg:min-h-0">
          <StairSteps count={5} direction="down" className="absolute top-[12%] -left-14 z-20 hidden text-[0.9rem] lg:flex" />
          <div className="absolute inset-0 lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%,10%_40%)]">
            <Image src="/images/pages/hormone-decision-reception-v3.png" alt="Conceptual bright clinic reception with lounge chairs" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover object-center" />
          </div>
        </div>
      </div>
      <ul className="mx-auto grid max-w-[90rem] gap-6 px-6 py-10 sm:px-10 md:grid-cols-3 md:gap-0 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
        {ASSURANCES.map(({ title, body, icon: Icon }) => (
          <li key={title} className="flex items-center gap-5 md:border-r md:border-white/25 md:px-8 md:first:pl-0 md:last:border-r-0">
            <TallBracket className="h-14 w-2.5 shrink-0 text-silver" />
            <Icon size={36} strokeWidth={1.3} className="shrink-0 text-[#4f9bf0]" aria-hidden />
            <p className="text-sm leading-snug text-white/85">
              <strong className="block text-base font-semibold text-white">{title}</strong>
              {body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
