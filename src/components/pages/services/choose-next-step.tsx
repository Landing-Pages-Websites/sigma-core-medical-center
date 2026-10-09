import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronRight, MessageSquareText, SquareDashed, Sun, Waves } from "lucide-react";
import { DashRule, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

const OTHER_PATHS = [
  { title: "About Neuropathy", href: "/services/neuropathy", icon: Waves },
  { title: "Our Approach", href: "/about", icon: Sun },
  { title: "Contact & location status", href: "/contact", icon: SquareDashed },
] as const;

export function ChooseNextStep(): React.ReactElement {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#16202b] text-white">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-6 pt-16 sm:px-10 lg:grid-cols-[44fr_56fr] lg:gap-6 lg:pt-20 lg:pl-[3.75rem]">
        <div className="relative pl-6 sm:pl-8">
          <TallBracket className="absolute top-0 bottom-0 left-0 w-4 text-silver/80" />
          <h2 className="font-heading text-[clamp(2.4rem,4.2vw,3.7rem)] leading-none font-bold tracking-[-0.03em]">How To Choose Next Step</h2>
          <DashRule className="mt-6" />
          <p className="mt-6 max-w-[30rem] text-base leading-relaxed text-white/88">
            Our service pages provide general orientation to the care categories. Individual questions require a qualified healthcare professional. Online scheduling and provider details are not yet available.
          </p>
          <div className="relative mt-7 flex gap-5 border-t border-white/25 pt-6 pr-10 pb-2">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-royal">
              <MessageSquareText size={24} strokeWidth={1.6} aria-hidden />
            </span>
            <p className="text-base leading-snug text-white/88">
              <strong className="block font-semibold text-focus">Start with information.</strong>
              Explore a category and consider the questions that matter to you.
            </p>
            <TallBracket side="right" className="absolute right-0 bottom-0 h-20 w-4 text-silver/80" />
          </div>
        </div>

        <div className="relative lg:pl-10">
          <div className="relative bg-[#2a2c30] p-3 [clip-path:polygon(16%_0,86%_0,100%_14%,100%_100%,12%_100%,0_70%,0_22%)] sm:p-5">
            <div className="relative aspect-[16/11] [clip-path:polygon(15%_0,86%_0,100%_14%,100%_100%,12%_100%,0_70%,0_22%)]">
              <Image src="/images/pages/pain-decision-interior-v4.png" alt="Modern clinic reception with a walnut desk" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[30%_center]" />
              <Image src="/images/shared/logo.png" alt="" width={240} height={65} className="absolute top-[24%] left-[16%] h-auto w-[34%] drop-shadow-lg" />
            </div>
          </div>
          <Link
            href="/book"
            className="group absolute right-0 bottom-6 left-6 flex items-center gap-3 bg-royal px-4 py-5 sm:gap-5 sm:px-6 text-white shadow-[0_18px_40px_rgb(0_0_0/0.35)] transition-colors hover:bg-royal-hover sm:left-auto sm:w-[min(36rem,82%)] sm:[clip-path:polygon(0_0,94%_0,100%_50%,94%_100%,0_100%)] lg:bottom-10 lg:-right-2 lg:py-6 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]"
          >
            <CalendarDays size={44} strokeWidth={1.4} aria-hidden className="h-8 w-8 shrink-0 sm:h-11 sm:w-11" />
            <span aria-hidden className="h-12 w-px bg-white/40" />
            <span className="font-heading text-2xl font-semibold sm:text-3xl">Check booking status</span>
            <ChevronRight size={28} className="ml-auto transition-transform group-hover:translate-x-1 sm:mr-6" aria-hidden />
          </Link>
        </div>
      </div>

      <OtherPaths />
    </section>
  );
}

function OtherPaths(): React.ReactElement {
  return (
    <div className="mx-auto max-w-[90rem] px-6 pt-12 pb-10 sm:px-10 lg:pl-[3.75rem]">
      <p className="text-xs font-semibold tracking-[0.2em] text-focus uppercase">Explore other paths</p>
      <ul className="mt-4 grid gap-3 md:grid-cols-3">
        {OTHER_PATHS.map(({ title, href, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex h-full min-h-24 items-center gap-5 border border-white/15 bg-navy px-6 py-5 transition-colors [clip-path:polygon(0_0,93%_0,100%_50%,93%_100%,0_100%)] hover:bg-[#0b2546] md:[clip-path:polygon(4%_0,93%_0,100%_50%,93%_100%,4%_100%,0_50%)] md:pl-8 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-royal">
                <Icon size={28} strokeWidth={1.5} aria-hidden />
              </span>
              <span aria-hidden className="h-12 w-px bg-white/25" />
              <span className="text-lg font-semibold">{title}</span>
              <ChevronRight size={22} className="mr-6 ml-auto text-focus transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 max-w-sm border-t border-white/25 pt-4 text-sm text-white/70">
        Policy details are not yet available. Check our{" "}
        <PolicyLink label="Terms status." className="text-focus underline underline-offset-2 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]" />
      </div>
    </div>
  );
}
