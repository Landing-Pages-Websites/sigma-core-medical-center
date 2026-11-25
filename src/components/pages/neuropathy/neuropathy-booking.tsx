import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ListChecks, Map as MapIcon, MessagesSquare } from "lucide-react";
import { RisingBars, TallBracket } from "@/components/pages/shared/page-motifs";

const ROUTE_CARDS = [
  { title: "Tell Us Your Story", body: "Discuss your symptoms and what you've already tried.", icon: MessagesSquare, tone: "bg-royal" },
  { title: "Discover Our Approach", body: "Learn about our Advanced Neuropathy Protocol.", icon: MapIcon, tone: "bg-[#14243b]" },
  { title: "Explore Your Options", body: "Find out what an appropriate next step may involve.", icon: ListChecks, tone: "bg-[#14243b]" },
] as const;

export function NeuropathyBooking(): React.ReactElement {
  return (
    <section data-mega-section="booking-cta" id="booking-cta" className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden className="h-6 bg-[#0b2342]" />
      <div className="grid lg:min-h-[32rem] lg:grid-cols-[45fr_55fr]">
        <div className="relative z-10 px-6 pt-12 pb-10 sm:px-10 lg:pt-14 lg:pb-0 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <h2 className="font-heading text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.03em]">You Don&apos;t Have to Keep Searching for Answers Alone.</h2>
          <div className="relative mt-5 max-w-[26rem] px-6 py-1">
            <TallBracket className="absolute inset-y-0 left-0 w-2.5 text-royal" />
            <div className="space-y-3 text-lg leading-snug text-white/92">
              <p>Numbness. Burning. Tingling. Balance concerns. If these symptoms have become part of your everyday life, we invite you to learn about a different approach.</p>
              <p>At Sigma Core Medical Center, we combine personalized care with modern therapeutic technologies through our Advanced Neuropathy Protocol.</p>
              <p>Start by telling us what you&apos;ve been experiencing and what you would like to improve.</p>
            </div>
            <TallBracket side="right" className="absolute inset-y-0 right-0 w-2.5 text-royal" />
          </div>
          <ul className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {ROUTE_CARDS.map(({ title, body, icon: Icon, tone }) => (
              <li key={title} className={`${tone} px-4 py-4 sm:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] sm:pr-8`}>
                <p className="flex items-center gap-2.5 text-sm leading-tight font-semibold">
                  <Icon size={30} strokeWidth={1.4} className="shrink-0" aria-hidden /> {title}
                </p>
                <p className="mt-3 text-xs leading-snug text-white/65">{body}</p>
              </li>
            ))}
          </ul>
          <RisingBars count={7} className="mt-8 -ml-6 hidden h-28 text-[2.2rem] sm:-ml-10 lg:flex lg:-ml-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]" barClassName="bg-royal" />
        </div>

        <div className="relative min-h-[26rem] lg:min-h-0">
          <div className="absolute inset-x-0 top-0 h-[60%] lg:top-6 lg:h-[56%] lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]">
            <Image src="/images/pages/neuropathy-booking-concern.webp" alt="An older woman in a waiting-area chair, rubbing her sore ankle with a worried expression" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-[70%_center]" />
            <Image src="/images/shared/logo.webp" alt="" width={240} height={65} className="absolute top-[14%] left-[24%] h-auto w-[30%] drop-shadow-lg" />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex h-[46%] flex-col items-center justify-center bg-royal px-6 lg:left-[2%] lg:[clip-path:polygon(9%_0,100%_0,100%_100%,0_100%)]">
            <Link data-mega-cta="book-appointment" href="/book" className="group flex items-center gap-5 border-2 border-white px-7 py-4 transition-colors hover:bg-white hover:text-royal focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
              <CalendarDays size={44} strokeWidth={1.4} aria-hidden className="shrink-0" />
              <span className="font-heading text-2xl font-bold sm:text-3xl">Request My Free Neuropathy Consultation</span>
              <ArrowRight size={28} aria-hidden className="shrink-0" />
            </Link>
            <p className="mt-4 text-base text-white">
              Prefer to speak with someone? Call our office directly.{" "}
              <a data-mega-cta="call-now" href="tel:+18044867699" className="font-semibold underline underline-offset-4">804-486-7699</a>
            </p>
            <p className="mt-2 text-xs text-white/75">Outcomes vary. We do not guarantee any results.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
