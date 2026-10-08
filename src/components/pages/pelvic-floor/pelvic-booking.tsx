import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LockKeyhole, MessageSquare, UserRound } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

const ASSURANCES = [
  { title: "Private by design.", body: "Your information is always kept confidential.", icon: LockKeyhole },
  { title: "No pressure.", body: "This is a conversation, not a commitment.", icon: MessageSquare },
  { title: "Your pace.", body: "We listen first—so you can move forward with clarity.", icon: UserRound },
] as const;

export function PelvicBooking(): React.ReactElement {
  return (
    <section id="booking-cta" className="relative overflow-hidden bg-navy text-white">
      <div className="grid lg:min-h-[30rem] lg:grid-cols-[42fr_58fr]">
        <div className="relative z-10 px-6 pt-14 sm:px-10 lg:pt-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          <h2 className="font-heading text-[clamp(3rem,6vw,5.4rem)] leading-none font-bold tracking-[-0.035em]">Booking Cta</h2>
          <div className="mt-6 bg-[#1b2129] p-4 lg:-ml-[max(0rem,calc((100vw-90rem)/2))] lg:pl-4">
            <div className="relative bg-royal px-9 py-8 sm:px-12">
              <TallBracket className="absolute top-6 bottom-6 left-4 w-3 text-silver" />
              <TallBracket side="right" className="absolute top-6 bottom-6 right-4 w-3 text-silver" />
              <p className="max-w-[20rem] text-lg leading-snug">A private conversation about your concerns and goals—so we can understand what matters most to you.</p>
              <Link href="/book" className="mt-5 inline-flex h-12 items-center gap-3 bg-white px-4 text-base font-semibold whitespace-nowrap text-royal sm:gap-4 sm:px-5 sm:text-lg transition-colors hover:bg-chalk">
                Book an Appointment <ArrowRight size={20} aria-hidden />
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
