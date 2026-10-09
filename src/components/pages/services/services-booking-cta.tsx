import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, MessageSquareText, UserRound } from "lucide-react";
import { TallBracket } from "@/components/pages/shared/page-motifs";

const ROUTE_LINKS = [
  { label: "Learn About Neuropathy", href: "/services/neuropathy", icon: MessageSquareText, accent: "bg-royal" },
  { label: "Explore Our Approach", href: "/about", icon: UserRound, accent: "bg-royal" },
  { label: "Contact & location status", href: "/contact", icon: MapPin, accent: "bg-silver" },
] as const;

const BASE_BARS = [
  { tone: "bg-royal", offset: "ml-0", width: "w-[26%]" },
  { tone: "bg-royal/80", offset: "ml-[5%]", width: "w-[26%]" },
  { tone: "bg-silver", offset: "ml-[12%]", width: "w-[29%]" },
  { tone: "bg-silver/85", offset: "ml-[18%]", width: "w-[33%]" },
] as const;

export function ServicesBookingCta(): React.ReactElement {
  return (
    <section id="form" className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden className="h-6 bg-[#16202b]" />
      <div className="mx-auto grid max-w-[90rem] items-center gap-10 px-6 pt-14 sm:px-10 lg:grid-cols-[50fr_50fr] lg:gap-6 lg:pt-20 lg:pl-[3.75rem] lg:pr-0">
        <div className="relative px-8 py-10 sm:px-12 lg:py-14">
          <TallBracket className="absolute inset-y-0 left-0 w-7 text-silver/85" />
          <TallBracket side="right" className="absolute inset-y-0 right-0 w-7 text-silver/85" />
          <h2 className="font-heading text-[clamp(3rem,6.2vw,5.5rem)] leading-none font-bold tracking-[-0.035em]">
            Booking <span className="text-royal">status</span>
          </h2>
          <p className="mt-4 max-w-[22rem] text-lg leading-snug text-white/90">
            Online scheduling is not yet available. Contact and location details remain unavailable.
          </p>
          <Link href="/book" className="mt-7 inline-flex max-w-full min-h-14 items-center gap-4 bg-royal px-4 py-3 text-lg sm:px-8 font-semibold transition-colors hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
            Check booking status <ChevronRight size={22} aria-hidden className="shrink-0" />
          </Link>
        </div>
        <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[27rem] lg:[clip-path:polygon(0_50%,9%_0,100%_0,100%_100%,9%_100%)]">
          <Image src="/images/pages/hormone-booking-lobby-v3.png" alt="Bright clinic reception with walnut paneling and lounge seating" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center" />
        </div>
      </div>

      <div className="mx-auto max-w-[90rem] px-6 pt-8 pb-14 sm:px-10 lg:pl-[3.75rem]">
        <ul className="grid gap-3 md:grid-cols-3 lg:max-w-[64rem]">
          {ROUTE_LINKS.map(({ label, href, icon: Icon, accent }) => (
            <li key={href} className="relative">
              <span aria-hidden className={`absolute inset-y-0 left-0 w-10 ${accent} [clip-path:polygon(60%_0,100%_0,40%_100%,0_100%)]`} />
              <Link
                href={href}
                className="group ml-7 flex min-h-20 items-center gap-5 border border-white/35 px-6 py-4 transition-colors hover:border-white hover:bg-white/5 md:[clip-path:polygon(0_0,95%_0,100%_100%,0_100%)] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]"
              >
                <Icon size={30} strokeWidth={1.4} aria-hidden />
                <span className="max-w-[9rem] text-base leading-snug">{label}</span>
                <ChevronRight size={22} className="mr-4 ml-auto text-focus transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
        <div aria-hidden className="mt-6 space-y-2.5 lg:max-w-[52rem]">
          {BASE_BARS.map((bar) => (
            <span key={bar.offset} className={`block h-2.5 ${bar.tone} ${bar.offset} ${bar.width} min-w-24`} />
          ))}
        </div>
      </div>
    </section>
  );
}
