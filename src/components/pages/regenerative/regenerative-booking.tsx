import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleHelp, ClipboardList, MessageSquare } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

const BOOKING_POINTS = [
  { title: "Talk through your goals", body: "Share what you’re looking to explore and what matters most to you.", icon: MessageSquare },
  { title: "Get clear on next steps", body: "Ask questions and understand what a consultation involves.", icon: CircleHelp },
  { title: "Make an informed decision", body: "Use the conversation to decide what’s right for you.", icon: ClipboardList },
] as const;

export function RegenerativeBooking(): React.ReactElement {
  return (
    <section id="booking-cta" className="relative overflow-hidden bg-navy text-white">
      <div className="grid lg:min-h-[40rem] lg:grid-cols-[calc(max(0px,(100vw-90rem)/2)+30rem)_minmax(0,1fr)_36%]">
        <div className="relative z-10 px-6 pt-12 sm:px-10 lg:pt-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          <h2 className="font-heading text-[clamp(3rem,5.6vw,5rem)] leading-none font-bold tracking-[-0.035em]">Booking Cta</h2>
          <p className="relative mt-4 max-w-[19rem] px-5 font-heading text-xl leading-tight font-bold">
            <TallBracket className="absolute inset-y-0 left-0 w-2 text-silver" />
            A useful next step to talk through your goals and questions.
            <TallBracket side="right" className="absolute inset-y-0 -right-4 w-2 text-silver" />
          </p>
          <p className="mt-4 max-w-[19rem] text-sm leading-snug text-white/85">
            Booking an appointment is a helpful way to start a conversation. It does not establish candidacy and does not guarantee a procedure.
          </p>
          <ul className="relative mt-6 bg-[#ecebe7] text-ink lg:mr-[-3rem] lg:-ml-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:[clip-path:polygon(0_0,90%_0,100%_100%,0_100%)]">
            {BOOKING_POINTS.map(({ title, body, icon: Icon }) => (
              <li key={title} className="flex gap-4 border-b border-ink/10 px-4 py-4 last:border-b-0 lg:pr-16 lg:pl-0">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-navy text-navy">
                  <Icon size={24} strokeWidth={1.5} aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-navy">{title}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-ink/70">{body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[22rem] lg:mt-6 lg:min-h-0">
          <StairSteps count={7} direction="up" className="absolute top-[34%] -left-4 z-20 hidden text-[0.7rem] lg:flex" />
          <div className="absolute inset-0 lg:-right-20 lg:[clip-path:polygon(20%_0,100%_0,100%_100%,0_100%,0_24%)]">
            <Image src="/images/pages/hormone-consultation-v2.png" alt="" fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover object-[75%_center]" />
          </div>
        </div>
        <div className="relative z-10 flex flex-col justify-center bg-royal px-6 py-12 sm:px-10 lg:mt-16 lg:pr-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pl-[20%] lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%,0_34%)]">
          <TallBracket side="right" className="absolute top-[26%] right-4 hidden h-28 w-3 text-silver lg:block" />
          <p className="flex items-center gap-2 text-lg">
            <TallBracket className="h-7 w-2 text-white/80" /> Let’s talk through your goals <TallBracket side="right" className="h-7 w-2 text-white/80" />
          </p>
          <p className="mt-4 font-heading text-[clamp(2.6rem,4.6vw,4.3rem)] leading-[0.95] font-bold tracking-[-0.03em]">
            Book an
            <br />
            Appointment
          </p>
          <p className="mt-4 max-w-[19rem] text-base leading-snug text-white/92">A conversation can help you decide if it’s the right next step for you.</p>
          <Link href="/book" className="mt-6 inline-flex h-14 w-fit items-center gap-4 bg-white px-6 text-xl font-semibold whitespace-nowrap text-royal transition-colors hover:bg-chalk">
            Book an Appointment <ArrowRight size={22} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
