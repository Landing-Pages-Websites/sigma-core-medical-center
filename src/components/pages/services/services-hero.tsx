import Image from "next/image";
import Link from "next/link";
import { RisingBars, TallBracket } from "@/components/pages/shared/page-motifs";
import { ServiceStrip } from "@/components/pages/services/service-strip";

export function ServicesHero(): React.ReactElement {
  return (
    <section id="hero" className="relative overflow-hidden bg-navy text-white">
      <div className="relative grid lg:min-h-[36rem] lg:grid-cols-[54fr_46fr]">
        <div className="relative z-10 px-6 pt-14 pb-10 sm:px-10 lg:pt-16 lg:pb-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          <div className="flex items-start gap-3 sm:gap-4">
            <TallBracket className="mt-1 h-28 w-5 text-royal sm:h-36 sm:w-6 lg:h-[9.5rem]" />
            <h1 className="font-heading text-[clamp(2.6rem,5vw,4.85rem)] leading-[0.98] font-bold tracking-[-0.035em]">
              Explore medical services built around how you want to live
            </h1>
          </div>
          <div className="mt-8 max-w-[22rem] space-y-4 text-[0.95rem] leading-snug text-white/80 sm:ml-9">
            <p>Explore Sigma Core services for pain relief, recovery, hormone health, neuropathy, pelvic floor concerns, and regenerative care.</p>
            <p>Each service page explains the questions to consider and the next conversation to have. Start with the area that matches your goals.</p>
            <p className="text-white">Educational information first. A consultation can help you discuss whether a service may be appropriate for you.</p>
          </div>
        </div>

        <div className="relative min-h-[18rem] sm:min-h-[24rem] lg:mt-14 lg:min-h-0">
          <div aria-hidden className="absolute inset-y-0 left-0 hidden w-[24%] bg-royal [clip-path:polygon(70%_0,100%_0,30%_100%,0_100%)] lg:block" />
          <div className="absolute inset-0 lg:left-[6%] lg:[clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]">
            <Image src="/images/pages/services-lobby-v2.webp" alt="Warm, modern clinic reception and lounge" fill priority sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover object-center" />
          </div>
        </div>

        <FeaturedNeuropathyCard />
      </div>

      <ServiceStrip />

      <div className="bg-royal">
        <div className="mx-auto flex max-w-[90rem] items-center gap-5 px-6 py-5 sm:px-10 lg:px-[3.75rem] lg:py-7">
          <RisingBars count={3} className="h-6 text-[0.55rem]" barClassName="bg-white" />
          <span aria-hidden className="h-8 w-px bg-white/45" />
          <p className="text-base font-semibold sm:text-lg">
            Explore any area above <span className="font-normal sm:ml-2">to learn more and take your next step.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturedNeuropathyCard(): React.ReactElement {
  return (
    <Link
      href="/services/neuropathy"
      className="group relative z-20 mx-6 -mt-10 mb-10 flex gap-5 bg-royal px-6 py-7 shadow-[0_24px_50px_rgb(0_0_0/0.3)] transition-colors hover:bg-royal-hover sm:mx-10 lg:absolute lg:bottom-0 lg:left-[max(30%,calc((100vw-90rem)/2+28rem))] lg:m-0 lg:w-[min(44%,40rem)] lg:py-8 lg:pr-24 lg:pl-8 lg:[clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]"
    >
      <TallBracket className="h-32 w-5 text-white/85" />
      <div>
        <h2 className="font-heading text-[clamp(2.2rem,3.3vw,3.2rem)] leading-none font-bold tracking-[-0.03em]">Neuropathy</h2>
        <span aria-hidden className="mt-3 block h-px w-full max-w-[17rem] bg-white/55" />
        <p className="mt-3 max-w-[15rem] text-sm leading-snug font-semibold">Learn how neuropathy care may support movement, daily function, and independence.</p>
        <p className="mt-1 max-w-[15rem] text-sm leading-snug text-white/85">Review questions and next steps.</p>
      </div>
    </Link>
  );
}
