import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { TallBracket } from "@/components/pages/shared/page-motifs";

const HEADER_DASHES = ["w-3", "w-4", "w-5", "w-7", "w-9"] as const;
const BASE_BARS = ["h-1", "h-1.5", "h-2", "h-2.5", "h-3", "h-3.5", "h-4"] as const;

export function NeuropathyExpectation(): React.ReactElement {
  return (
    <section id="what-to-expect" className="relative overflow-hidden bg-slate text-white">
      <div className="grid lg:min-h-[32rem] lg:grid-cols-[40fr_60fr]">
        <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:py-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <span aria-hidden className="flex items-end gap-1.5">
            <TallBracket className="mr-2 h-7 w-2 text-silver" />
            {HEADER_DASHES.map((dash) => (
              <span key={dash} className={`block h-2.5 bg-royal ${dash}`} />
            ))}
          </span>
          <h2 className="mt-4 font-heading text-[clamp(2.8rem,5.6vw,5.2rem)] leading-none font-bold tracking-[-0.035em]">What To Expect</h2>
          <span aria-hidden className="mt-5 block h-1 w-14 bg-royal" />
          <p className="mt-6 max-w-[22rem] text-xl leading-snug text-white/92">
            Booking occurs through GoHighLevel and the care conversation is personalized.
          </p>
          <Link
            href="/book"
            className="group mt-8 inline-flex h-14 items-center gap-5 bg-royal pr-12 pl-6 text-xl font-semibold transition-colors [clip-path:polygon(0_0,88%_0,100%_100%,0_100%)] hover:bg-royal-hover"
          >
            Book an Appointment <ChevronRight size={24} className="transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
        <div className="relative min-h-[22rem] lg:mt-12 lg:mb-20 lg:min-h-0">
          <div className="absolute inset-0 lg:right-[5%] lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]">
            <Image src="/images/shared/waiting-room.png" alt="Sigma Core waiting room with seating beneath the wall sign" fill sizes="(min-width: 1024px) 57vw, 100vw" className="object-cover object-[50%_45%]" />
          </div>
          <span aria-hidden className="absolute right-[18%] -bottom-12 hidden items-end gap-1 lg:flex">
            {BASE_BARS.map((bar) => (
              <span key={bar} className={`block w-4 bg-royal ${bar}`} />
            ))}
            <span className="ml-2 block h-10 w-px bg-silver" />
          </span>
          <span aria-hidden className="absolute right-[18%] -bottom-12 hidden h-px w-60 bg-silver lg:block" />
        </div>
      </div>
      <div aria-hidden className="h-4 bg-navy" />
    </section>
  );
}
