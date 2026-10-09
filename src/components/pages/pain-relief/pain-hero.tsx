import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TallBracket } from "@/components/pages/shared/page-motifs";

const BRANCH_LABELS = [
  { label: "Knee", href: "#knee", position: "top-[15%] left-[50%]" },
  { label: "Low Back", href: "#low-back", position: "top-[44.5%] left-[50%]" },
  { label: "Neck", href: "#neck", position: "top-[69%] left-[50%]" },
] as const;

const HERO_BARS = ["h-[30%]", "h-[55%]", "h-[80%]", "h-full"] as const;

export function PainHero(): React.ReactElement {
  return (
    <section id="pain-hero" className="relative overflow-hidden bg-navy text-white">
      <div className="grid lg:min-h-[45rem] lg:grid-cols-[calc(max(0px,(100vw-90rem)/2)+35rem)_minmax(0,1fr)_34%]">
        <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-14 lg:pb-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <TallBracket className="absolute top-14 bottom-12 left-6 w-6 text-royal sm:left-10 lg:left-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]" />
          <div className="pl-10 sm:pl-12">
            <h1 className="font-heading text-[clamp(2.6rem,3.9vw,3.75rem)] leading-[1] font-bold tracking-[-0.03em]">
              Move toward a more informed plan for persistent pain
            </h1>
            <div className="mt-6 max-w-[22rem] space-y-4 text-base leading-snug text-white/88">
              <p>We focus on movement, daily function, and informed next steps.</p>
              <p>Pain-related scope includes joint pain, knee pain, low back pain, and neck pain.</p>
              <p>Explore the three concern areas below. Online scheduling is not yet available.</p>
            </div>
            <Link href="/book" className="mt-6 inline-flex max-w-full min-h-12 items-center gap-4 bg-royal px-5 text-lg font-semibold transition-colors hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
              Check booking status <ArrowRight size={20} aria-hidden className="shrink-0" />
            </Link>
          </div>
        </div>

        <BranchDiagram />

        <div className="relative min-h-[26rem] sm:min-h-[32rem] lg:mt-16 lg:mb-0 lg:min-h-0">
          <div className="absolute inset-0 lg:[clip-path:polygon(32%_0,100%_0,100%_100%,0_100%,0_86%)]">
            <Image src="/images/shared/reception-1.png" alt="Sigma Core Medical Center reception" fill priority sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover object-[60%_center]" />
            <div className="absolute inset-y-[6%] left-[16%] z-10 w-[66%]">
              <Image src="/images/pages/pain-hero-walker-v3.png" alt="An adult walking confidently through the clinic lobby" fill priority sizes="(min-width: 1024px) 22vw, 60vw" className="object-contain object-bottom drop-shadow-[0_18px_22px_rgb(0_0_0/0.28)]" />
            </div>
          </div>
          <span aria-hidden className="absolute bottom-0 -left-20 hidden h-24 items-end gap-1.5 lg:flex">
            {HERO_BARS.map((bar) => (
              <span key={bar} className={`block w-5 bg-royal ${bar}`} />
            ))}
          </span>
        </div>
      </div>
      <div aria-hidden className="h-8 bg-royal sm:h-10" />
    </section>
  );
}

function BranchDiagram(): React.ReactElement {
  return (
    <nav aria-label="Pain concern areas" className="relative px-6 pb-10 sm:px-10 lg:px-0 lg:pb-0">
      <ul className="flex flex-wrap gap-3 lg:hidden">
        {BRANCH_LABELS.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="inline-flex h-12 items-center gap-2 px-1 font-heading text-xl font-bold tracking-[0.06em] uppercase hover:text-focus focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
              <TallBracket className="h-9 w-2 text-royal" /> {item.label} <TallBracket side="right" className="h-9 w-2 text-royal" />
            </a>
          </li>
        ))}
      </ul>
      <div className="relative hidden h-full min-h-[30rem] lg:block">
        <svg aria-hidden viewBox="0 0 300 400" preserveAspectRatio="none" className="absolute inset-x-0 top-[10%] h-[70%] w-full text-royal">
          <path d="M18 300 H60 L110 220 H150 M110 220 L150 52 M110 220 L150 360" fill="none" stroke="currentColor" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
        </svg>
        <span aria-hidden className="absolute top-[61%] left-[4%] block h-4 w-4 bg-royal" />
        {BRANCH_LABELS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`absolute ${item.position} flex items-center gap-3 font-heading text-[1.7rem] font-bold tracking-[0.08em] uppercase transition-colors hover:text-focus focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]`}
          >
            <TallBracket className="h-14 w-3 text-royal" /> {item.label} <TallBracket side="right" className="h-14 w-3 text-royal" />
          </a>
        ))}
      </div>
    </nav>
  );
}
