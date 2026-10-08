import Image from "next/image";
import Link from "next/link";
import { Leaf, MessageSquareMore, PersonStanding } from "lucide-react";
import { TallBracket } from "@/components/pages/shared/page-motifs";

const FACTOR_CARDS = [
  { title: "Movement and daily function", icon: PersonStanding },
  { title: "Independence and quality of life", icon: Leaf },
  { title: "Questions for a personalized conversation", icon: MessageSquareMore },
] as const;

const HEADING_BARS = ["h-2 bg-silver", "h-3 bg-silver", "h-4 bg-[#8d949c]", "h-5 bg-[#5b636c]", "h-6 bg-navy", "h-7 bg-navy"] as const;

export function NeuropathyDecisions(): React.ReactElement {
  return (
    <section id="decision-factors" className="relative overflow-hidden bg-chalk text-ink">
      <div className="grid lg:grid-cols-[66fr_34fr]">
        <div className="relative px-6 pt-14 sm:px-10 lg:pt-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-4">
            <div className="lg:pb-8">
              <div className="flex items-start gap-4">
                <TallBracket className="h-28 w-4 text-royal sm:h-32" />
                <h2 className="font-heading text-[clamp(2.4rem,4vw,3.9rem)] leading-[0.98] font-bold tracking-[-0.03em] text-navy lg:whitespace-nowrap">
                  <span className="flex items-end gap-6">
                    Goals And
                    <span aria-hidden className="mb-2 hidden items-end gap-1 sm:flex">
                      {HEADING_BARS.map((bar) => (
                        <span key={bar} className={`block w-3 ${bar}`} />
                      ))}
                    </span>
                  </span>
                  Decision Factors
                </h2>
              </div>
              <p className="mt-6 max-w-[24rem] text-sm leading-snug text-ink/85">Every person’s priorities are different. Use this space to prepare the questions that matter most to you.</p>
              <ul className="mt-6 max-w-[25rem] space-y-5 text-sm leading-snug text-ink/85">
                <li className="relative pl-6">
                  <span aria-hidden className="absolute top-1 left-0 h-3 w-3 border-t-2 border-l-2 border-royal" />
                  <strong className="font-semibold text-royal">Goals we can talk about:</strong> daily function, comfort, balance confidence, and participation in the activities that matter to you.
                </li>
                <li className="relative pl-6">
                  <span aria-hidden className="absolute top-1 left-0 h-3 w-3 border-t-2 border-l-2 border-royal" />
                  <strong className="font-semibold text-royal">Decision factors to discuss:</strong> an appropriate evaluation, the provider’s qualifications (once provided), potential benefits, possible risks, alternatives, costs, and expected follow-up—all based on reliable sources.
                </li>
              </ul>
            </div>
            <ul className="grid content-start gap-3 lg:-mr-16">
              {FACTOR_CARDS.map(({ title, icon: Icon }) => (
                <li key={title} className="relative z-10 flex min-h-32 items-center gap-6 bg-[#e6e1d8] px-8 py-5 shadow-[0_10px_24px_rgb(16_30_51/0.08)] sm:[clip-path:polygon(9%_0,100%_0,91%_100%,0_100%)] sm:px-14">
                  <Icon size={46} strokeWidth={1.5} className="shrink-0 text-royal" aria-hidden />
                  <span className="max-w-[10rem] font-heading text-xl leading-tight font-bold text-navy">{title}</span>
                  <TallBracket side="right" className="ml-auto h-14 w-2.5 text-royal" />
                </li>
              ))}
            </ul>
          </div>
          <div className="relative -mx-6 mt-10 flex flex-wrap items-center gap-4 bg-royal px-6 py-5 text-white sm:-mx-10 sm:px-10 lg:mr-[38%] lg:-ml-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:[clip-path:polygon(0_0,94%_0,100%_100%,0_100%)]">
            <TallBracket className="h-10 w-2 text-white" />
            <p className="max-w-[15rem] text-sm leading-snug">Learn more about our approach and the Richmond clinic.</p>
            {["/about", "/book"].map((href) => (
              <Link key={href} href={href} className="inline-flex h-10 items-center border border-white px-4 text-sm font-semibold transition-colors hover:bg-white hover:text-royal">
                {href}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid min-h-[30rem] grid-rows-2 gap-1.5 bg-navy lg:min-h-0">
          <div className="relative">
            <Image src="/images/pages/neuropathy-booking-lobby-v2.png" alt="Conceptual clinic reception with a navy feature wall" fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover object-[30%_center]" />
            <Image src="/images/shared/logo.png" alt="" width={240} height={65} className="absolute top-[14%] left-[12%] h-auto w-[44%] drop-shadow-lg" />
          </div>
          <div className="relative">
            <Image src="/images/pages/pain-sources-lounge-v4.png" alt="Conceptual clinic lounge with leather sofa and lounge chairs" fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
