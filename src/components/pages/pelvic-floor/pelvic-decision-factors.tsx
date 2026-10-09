import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ClipboardList, MessageCircleMore, Shield } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

const CONCERN_CARDS = [
  { title: "Consider what you’ve noticed", body: "Consider how your concerns relate to daily life.", icon: ClipboardList },
  { title: "Connect it to your life", body: "Consider your routines, activity, sleep, travel, exercise, and confidence.", icon: CalendarDays },
  { title: "Ask your questions", body: "Consider what you would want to ask a qualified provider.", icon: MessageCircleMore },
  { title: "Get a clinical perspective", body: "A clinical review helps determine next steps that are appropriate for you.", icon: Shield },
] as const;

export function PelvicDecisionFactors(): React.ReactElement {
  return (
    <section id="concerns-and-goals" className="relative overflow-hidden bg-chalk text-ink">
      <div className="grid lg:grid-cols-[46fr_54fr]">
        <div className="px-6 pt-14 sm:px-10 lg:pt-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <h2 className="font-heading text-[clamp(2.6rem,4.8vw,4.4rem)] leading-none font-bold tracking-[-0.035em] text-navy lg:whitespace-nowrap">Concerns And Goals</h2>
          <StairSteps count={3} direction="up" className="mt-4 ml-2 text-[0.5rem]" />
          <div className="relative mt-6 max-w-[30rem] px-7 py-2">
            <TallBracket className="absolute inset-y-0 left-0 w-3 text-silver" />
            <TallBracket side="right" className="absolute inset-y-0 right-0 w-3 text-silver" />
            <p className="font-heading text-lg font-bold text-navy">Consider what matters most to you.</p>
            <p className="mt-2 text-sm leading-snug text-ink/80">Consider how your concerns relate to routines, activity, sleep, travel, exercise, and confidence.</p>
            <p className="mt-3 text-sm leading-snug text-ink/80">Online content cannot determine cause or eligibility. A clinical review is needed.</p>
          </div>
        </div>
        <div className="relative min-h-60 lg:mt-12 lg:mb-[-6rem] lg:min-h-0">
          <div className="absolute inset-0 lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%,0_40%)]">
            <Image src="/images/pages/pain-route-panorama-v4.png" alt="Conceptual bright clinic reception and lounge" fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover object-[30%_center]" />
          </div>
        </div>
      </div>

      <ul className="relative z-10 mx-auto mt-10 grid max-w-[90rem] gap-3 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:pl-[3.5rem]">
        {CONCERN_CARDS.map(({ title, body, icon: Icon }) => (
          <li key={title} className="grid grid-cols-[4.25rem_1fr] shadow-[0_12px_28px_rgb(16_30_51/0.1)]">
            <span className="flex items-start justify-center bg-navy pt-6 text-white">
              <Icon size={34} strokeWidth={1.4} aria-hidden />
            </span>
            <span className="bg-[#ebe8e2] px-5 py-5 [clip-path:polygon(0_0,92%_0,100%_10%,100%_100%,0_100%)]">
              <span className="block font-heading text-lg leading-tight font-bold text-navy">{title}</span>
              <span className="mt-2 block text-xs leading-snug text-ink/75">{body}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="relative mt-4 flex justify-end">
        <div className="flex w-full flex-wrap items-center justify-between gap-4 bg-royal px-6 py-4 text-white sm:px-10 lg:w-[66%] lg:pl-24 lg:[clip-path:polygon(4%_0,100%_0,100%_100%,0_100%)]">
          <p className="text-lg font-semibold">Online scheduling is not yet available.</p>
          <Link href="/book" className="inline-flex max-w-full min-h-12 w-fit items-center bg-white px-6 font-heading text-lg font-bold text-navy transition-colors hover:bg-chalk focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
            Check booking status
          </Link>
        </div>
      </div>
      <div aria-hidden className="h-4 bg-navy" />
    </section>
  );
}
