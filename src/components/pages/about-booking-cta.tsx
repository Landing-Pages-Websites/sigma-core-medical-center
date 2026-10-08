import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

export function AboutBookingCta(): React.ReactElement {
  return (
    <section id="form" className="relative overflow-hidden bg-royal text-white">
      <div className="grid lg:min-h-[34rem] lg:grid-cols-[42fr_58fr]">
        <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-20 lg:pb-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <h2 className="font-heading text-[clamp(3rem,6.2vw,5.6rem)] leading-none font-bold tracking-[-0.035em]">Booking Cta</h2>
          <div className="relative mt-5 max-w-[22rem] px-5 py-1">
            <TallBracket className="absolute inset-y-0 left-0 w-2 text-white/80" />
            <p className="text-lg leading-snug">Let’s meet to discuss your goals and answer your questions.</p>
            <p className="mt-3 text-lg leading-snug">We’ll keep your information confidential until your appointment is confirmed.</p>
            <TallBracket side="right" className="absolute -right-6 bottom-0 h-20 w-2 text-white/80" />
          </div>
          <Link href="/book" className="mt-7 inline-flex h-14 items-center gap-4 bg-white px-7 text-lg font-semibold text-navy transition-colors hover:bg-chalk">
            Book an Appointment <ArrowRight size={20} aria-hidden />
          </Link>
          <StairSteps count={6} direction="up" barClassName="bg-[#8ab8f5]" className="absolute right-0 bottom-14 hidden text-[0.7rem] lg:flex" />
        </div>

        <div className="relative min-h-[22rem] sm:min-h-[28rem] lg:min-h-0">
          <div aria-hidden className="absolute inset-0 hidden bg-navy lg:block lg:[clip-path:polygon(22%_8%,100%_8%,100%_100%,0_100%)]" />
          <div className="absolute inset-0 lg:top-[14%] lg:left-[4%] lg:[clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]">
            <Image src="/images/pages/neuropathy-faq-lobby-v2.png" alt="Conceptual clinic reception with a navy feature wall and lounge seating" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover object-[30%_center]" />
            <Image src="/images/shared/logo.png" alt="" width={240} height={65} className="absolute top-[14%] left-[30%] h-auto w-[30%] drop-shadow-lg" />
          </div>
          <p className="absolute right-0 bottom-0 flex items-center gap-3 bg-chalk px-5 py-3 text-sm text-navy sm:right-6 sm:bottom-4 lg:right-10">
            <TallBracket className="h-7 w-1.5 text-silver" />
            <span className="flex h-7 w-7 items-center justify-center bg-navy text-white">
              <TrendingUp size={16} aria-hidden />
            </span>
            Sigma Core — Richmond, Virginia
            <TallBracket side="right" className="h-7 w-1.5 text-silver" />
          </p>
        </div>
      </div>
    </section>
  );
}
