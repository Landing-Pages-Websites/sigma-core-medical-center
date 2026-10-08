import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RisingBars, TallBracket } from "@/components/pages/shared/page-motifs";

export function PelvicExpect(): React.ReactElement {
  return (
    <section id="what-to-expect" className="relative overflow-hidden bg-slate text-white">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[44fr_56fr] lg:gap-6 lg:py-16 lg:pl-[3.5rem]">
        <div>
          <span aria-hidden className="flex items-center gap-1">
            <TallBracket className="h-9 w-2.5 text-silver" />
            <span className="block h-2.5 w-9 bg-royal" />
            <TallBracket side="right" className="h-9 w-2.5 text-silver" />
          </span>
          <h2 className="mt-5 font-heading text-[clamp(3rem,5.8vw,5.3rem)] leading-none font-bold tracking-[-0.035em]">What To Expect</h2>
          <span aria-hidden className="mt-6 block h-1 w-12 bg-royal" />
          <p className="mt-6 max-w-[28rem] text-lg leading-snug text-white/90">
            We respect your privacy and your time. We’ll share provider details, examination information, visit length, and treatment process only after your approval.
          </p>
          <Link href="/book" className="mt-7 inline-flex h-14 items-center gap-6 bg-royal px-6 text-xl font-semibold transition-colors hover:bg-royal-hover">
            Book an Appointment <ArrowRight size={24} aria-hidden />
          </Link>
          <p className="mt-6 flex items-center gap-4 text-sm leading-snug text-white/85">
            <RisingBars count={3} className="h-8 text-[0.6rem]" />
            <span aria-hidden className="h-10 w-px bg-white/30" />
            This is the only way we accept
            <br className="hidden sm:block" /> new appointment requests.
          </p>
        </div>
        <div className="relative lg:pr-10">
          <div className="relative min-h-[22rem] lg:h-full lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%,0_14%)]">
            <Image src="/images/shared/waiting-room.png" alt="Sigma Core waiting room with seating beneath the wall sign" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[50%_45%]" />
          </div>
          <TallBracket side="right" className="absolute top-[18%] right-0 hidden h-[68%] w-4 text-silver lg:block" />
        </div>
      </div>
    </section>
  );
}
