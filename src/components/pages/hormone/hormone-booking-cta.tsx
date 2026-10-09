import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PendingAction } from "@/components/shared/pending-action";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

export function HormoneBookingCta(): React.ReactElement {
  return (
    <section id="booking-cta" className="relative overflow-hidden bg-navy text-white">
      <div className="grid lg:min-h-[38rem] lg:grid-cols-[calc(max(0px,(100vw-90rem)/2)+30rem)_minmax(0,1fr)_36%]">
        <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          <h2 className="font-heading text-[clamp(3rem,5.4vw,4.9rem)] leading-none font-bold tracking-[-0.035em]">Booking status</h2>
          <p className="mt-3 flex items-center gap-4 font-display text-2xl text-white/90 italic sm:text-3xl">
            <StairSteps count={3} direction="up" className="text-[0.5rem]" /> Your goals. Our focus.
          </p>
          <p className="mt-8 flex items-center gap-2 text-sm font-semibold">
            <TallBracket className="h-6 w-1.5 text-white/75" /> Resource status <TallBracket side="right" className="h-6 w-1.5 text-white/75" />
          </p>
          <h3 className="mt-3 font-heading text-3xl leading-tight font-bold">Educational guide unavailable</h3>
          <p className="mt-2 max-w-[20rem] text-sm leading-snug text-white/85">The guide and request form are not yet available.</p>
          <PendingAction
            label={
              <>
                Guide availability <ArrowRight size={18} aria-hidden className="shrink-0" />
              </>
            }
            title="Guide availability"
            message="The educational guide and request form are unavailable. Delivery details and an availability date have not been supplied."
            className="mt-5 inline-flex h-11 items-center gap-4 border border-white/80 bg-white/95 px-4 text-sm font-semibold text-navy transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]"
          />
          <p className="mt-6 max-w-[19rem] border-l-2 border-[#c97a3a] pl-3 text-[0.7rem] leading-snug text-white/70">The guide is not yet available. Its title, media, delivery details, and availability date have not been supplied.</p>
        </div>
        <div className="relative min-h-[22rem] lg:mt-6 lg:min-h-0">
          <div className="absolute inset-0 lg:-right-24 lg:[clip-path:polygon(24%_0,100%_0,100%_100%,0_100%,0_70%,6%_70%,6%_58%,12%_58%,12%_46%,18%_46%,18%_34%,24%_34%)]">
            <Image src="/images/pages/hormone-booking-lobby-v3.png" alt="Conceptual clinic reception with walnut paneling and lounge seating" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover object-[30%_center]" />
            <Image src="/images/shared/logo.png" alt="" width={240} height={65} className="absolute top-[22%] left-[30%] h-auto w-[40%] drop-shadow-lg" />
          </div>
        </div>
        <div className="relative z-10 flex flex-col justify-center bg-royal px-6 py-12 sm:px-10 lg:mt-24 lg:pr-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pl-[22%] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
          <TallBracket side="right" className="absolute top-[30%] right-4 hidden h-32 w-3 text-silver lg:block" />
          <p className="flex items-center gap-2 text-base">
            <TallBracket className="h-6 w-1.5 text-white/80" /> Scheduling status <TallBracket side="right" className="h-6 w-1.5 text-white/80" />
          </p>
          <p className="mt-2 font-heading text-[clamp(2.6rem,4.4vw,4.1rem)] leading-[0.95] font-bold tracking-[-0.03em]">
            Booking
            <br />
            unavailable
          </p>
          <p className="mt-4 max-w-[20rem] text-sm leading-snug text-white/92">
            Online scheduling is not yet available. Appointment and follow-up details have not been confirmed.
          </p>
          <Link href="/book" className="mt-5 inline-flex max-w-full min-h-14 w-fit items-center gap-4 bg-white px-6 text-xl font-semibold whitespace-normal text-navy transition-colors hover:bg-chalk focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
            Check booking status <ArrowRight size={22} aria-hidden className="shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
