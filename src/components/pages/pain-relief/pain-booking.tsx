import Image from "next/image";
import Link from "next/link";
import { PAIN_ROUTES } from "@/components/pages/pain-relief/content";
import { TallBracket } from "@/components/pages/shared/page-motifs";

const ROUTE_BARS = ["h-[22%] bg-white/85", "h-[40%] bg-[#aecdf5]", "h-[58%] bg-[#7fb3f2]", "h-[76%] bg-[#4f9bf0]", "h-full bg-[#2f7fe0]"] as const;

export function PainBooking(): React.ReactElement {
  return (
    <section id="booking" className="relative overflow-hidden bg-slate text-white">
      <div aria-hidden className="h-8 bg-navy" />
      <div className="grid lg:min-h-[28rem] lg:grid-cols-[40fr_60fr]">
        <div className="relative z-10 px-6 pt-12 pb-12 sm:px-10 lg:pt-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <h2 className="font-heading text-[clamp(3rem,6vw,5.4rem)] leading-none font-bold tracking-[-0.035em]">
            Booking <span className="text-royal">Cta</span>
          </h2>
          <div className="relative mt-5 max-w-[22rem] px-6 py-1">
            <TallBracket className="absolute inset-y-0 left-0 w-2.5 text-silver" />
            <p className="font-heading text-xl font-bold">Let’s have a conversation</p>
            <p className="mt-1 text-lg leading-snug text-white/90">
              Share what’s on your mind and what you’re working toward. We’ll listen first and explore whether a fit makes sense after we evaluate.
            </p>
            <TallBracket side="right" className="absolute inset-y-0 right-0 w-2.5 text-silver" />
          </div>
          <Link href="/book" className="mt-7 inline-flex h-14 w-full max-w-[20rem] items-center bg-royal px-6 text-lg font-semibold transition-colors [clip-path:polygon(0_0,90%_0,100%_100%,0_100%)] hover:bg-royal-hover">
            Book an Appointment
          </Link>
        </div>
        <div className="relative min-h-[20rem] lg:mt-12 lg:min-h-0">
          <div className="absolute inset-0 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
            <Image src="/images/shared/reception-2.png" alt="Sigma Core reception desk beneath the illuminated wall sign" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-[50%_40%]" />
          </div>
        </div>
      </div>
      <div className="bg-royal">
        <div className="mx-auto max-w-[90rem] px-6 pt-6 pb-8 sm:px-10 lg:pl-[3.5rem]">
          <p className="flex items-center gap-6 text-xs font-semibold tracking-[0.24em] uppercase">
            Explore your route <span aria-hidden className="h-px flex-1 bg-white/40 lg:max-w-[38rem]" />
          </p>
          <div className="mt-5 flex items-end gap-8">
            <ul className="grid flex-1 gap-5 sm:grid-cols-3 lg:max-w-[46rem]">
              {PAIN_ROUTES.map((route) => (
                <li key={route.href} className="sm:border-r sm:border-white/30 sm:last:border-r-0">
                  <a href={route.href} className="group relative block py-1 pl-8 hover:text-focus">
                    <TallBracket className="absolute inset-y-0 left-0 w-3 text-white/85" />
                    <span className="block font-heading text-xl font-bold tracking-[0.04em] uppercase">{route.title}</span>
                    <span className="mt-1 block max-w-[12rem] text-sm leading-snug text-white/85">{route.body}</span>
                  </a>
                </li>
              ))}
            </ul>
            <span aria-hidden className="ml-auto hidden h-24 items-end gap-1.5 md:flex">
              {ROUTE_BARS.map((bar) => (
                <span key={bar} className={`block w-7 ${bar}`} />
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
