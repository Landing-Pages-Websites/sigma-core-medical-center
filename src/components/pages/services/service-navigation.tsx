import Image from "next/image";
import Link from "next/link";
import { Activity, Atom, PersonStanding, Shell } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { TallBracket } from "@/components/pages/shared/page-motifs";

type NavCard = {
  title: string;
  body: string;
  href: string;
  icon: LucideIcon;
  dark?: true;
};

const NAV_CARDS: readonly NavCard[] = [
  {
    title: "Hormone Optimization",
    body: "General orientation to hormone health. Provider and treatment details are unavailable.",
    href: "/services/hormone-optimization",
    icon: Atom,
  },
  {
    title: "Pelvic Floor & Incontinence",
    body: "Information about pelvic-floor and incontinence concerns, with individual care details unavailable.",
    href: "/services/pelvic-floor-incontinence",
    icon: Shell,
  },
  {
    title: "Regenerative Medicine",
    body: "Category-level information and questions about evidence, uncertainty, and alternatives.",
    href: "/services/regenerative-medicine",
    icon: Activity,
    dark: true,
  },
];

const PATH_PILL =
  "inline-flex h-8 w-fit items-center bg-royal pr-7 pl-3 text-xs font-semibold text-white transition-colors [clip-path:polygon(0_0,92%_0,100%_50%,92%_100%,0_100%)] hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]";

export function ServiceNavigation(): React.ReactElement {
  return (
    <section id="services" className="relative overflow-hidden bg-chalk text-ink">
      <div className="mx-auto grid max-w-[90rem] gap-4 px-6 py-14 sm:px-10 lg:grid-cols-[56fr_23fr_21fr] lg:gap-0 lg:py-0 lg:pl-[3.75rem] lg:pr-0">
        <div className="lg:py-14 lg:pr-0">
          <div className="flex items-start gap-4">
            <TallBracket className="h-32 w-5 text-royal sm:h-44" />
            <div>
              <h2 className="font-heading text-[clamp(3rem,6.6vw,6rem)] leading-[0.92] font-bold tracking-[-0.035em]">
                <span className="text-navy">Service</span>
                <br />
                <span className="text-royal">Navigation</span>
              </h2>
              <span aria-hidden className="mt-5 flex items-center">
                <span className="block h-0.5 w-72 max-w-full bg-royal" />
                <span className="block h-2 w-2 bg-royal" />
              </span>
            </div>
          </div>
          <PainReliefPanel />
        </div>
        <div className="grid gap-1 lg:self-end lg:pt-14 lg:pb-12">
          {NAV_CARDS.map((card) => (
            <NavigationCard key={card.href} card={card} />
          ))}
        </div>
        <div className="relative min-h-72 lg:min-h-full">
          <Image src="/images/shared/reception-1.png" alt="Sigma Core Medical Center reception desk with illuminated wall sign" fill sizes="(min-width: 1024px) 21vw, 100vw" className="object-cover object-[60%_center]" />
        </div>
      </div>
      <div aria-hidden className="h-3 bg-navy" />
    </section>
  );
}

function PainReliefPanel(): React.ReactElement {
  return (
    <div className="mt-10 grid bg-navy text-white sm:grid-cols-[1fr_1.05fr] lg:mt-6 lg:mr-2">
      <div className="px-6 py-9 sm:px-8 lg:py-10">
        <div className="flex items-center gap-4">
          <TallBracket className="h-14 w-3 text-royal" />
          <span className="flex h-14 w-14 items-center justify-center bg-royal">
            <PersonStanding size={32} strokeWidth={1.6} aria-hidden />
          </span>
          <h3 className="font-heading text-3xl font-bold tracking-[-0.02em]">Pain Relief</h3>
        </div>
        <p className="mt-6 max-w-[19rem] text-[0.95rem] leading-snug text-white/85">
          Explore knee, low-back, and neck concerns in the context of movement and daily life.
        </p>
        <Link href="/services/pain-relief" className={`${PATH_PILL} mt-8 min-h-10 text-sm`}>
          /services/pain-relief
        </Link>
      </div>
      <div className="relative min-h-56 sm:my-4 sm:mr-4">
        <Image src="/images/pages/services-runners-v2.png" alt="Two adults jogging along a riverside path with a city skyline" fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover object-center" />
      </div>
    </div>
  );
}

function NavigationCard({ card }: { card: NavCard }): React.ReactElement {
  const Icon = card.icon;
  const tone = card.dark ? "bg-navy text-white" : "bg-[#e8e4dc] text-ink";
  return (
    <article className={`${tone} px-5 py-5 lg:py-6`}>
      <div className="flex items-center gap-3">
        <TallBracket className="h-11 w-2.5 text-royal" />
        <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-royal text-white">
          <Icon size={24} strokeWidth={1.6} aria-hidden />
        </span>
        <h3 className="font-heading text-lg leading-tight font-bold">{card.title}</h3>
      </div>
      <p className={`mt-3 text-sm leading-snug ${card.dark ? "text-white/80" : "text-ink/80"}`}>{card.body}</p>
      <Link href={card.href} className={`${PATH_PILL} mt-4`}>
        {card.href}
      </Link>
    </article>
  );
}
