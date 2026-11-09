import Link from "next/link";
import { RisingBars, TallBracket } from "@/components/pages/shared/page-motifs";

const STRIP_SERVICES = [
  { title: "Pain Relief", href: "/services/pain-relief" },
  { title: "Hormone Optimization", href: "/services/hormone-optimization" },
  { title: "Pelvic Floor & Incontinence Care", href: "/services/pelvic-floor-incontinence" },
  { title: "Regenerative Medicine", href: "/services/regenerative-medicine" },
] as const;

export function ServiceStrip(): React.ReactElement {
  return (
    <div className="relative bg-[#13181f]">
      <ul className="mx-auto grid max-w-[90rem] sm:grid-cols-2 lg:grid-cols-4">
        {STRIP_SERVICES.map((service) => (
          <li key={service.href} className="relative border-b border-white/10 lg:border-b-0">
            <span aria-hidden className="absolute inset-y-3 -left-3 hidden w-[3px] skew-x-[-24deg] bg-royal lg:block" />
            <Link
              href={service.href}
              className="group flex h-full items-start gap-4 px-6 py-6 transition-colors hover:bg-white/[0.04] sm:px-10 lg:px-9 lg:py-7"
            >
              <span className="relative mt-1 flex h-14 w-9 shrink-0 items-center justify-center">
                <TallBracket className="absolute inset-y-0 left-0 w-2.5 text-silver" />
                <RisingBars count={3} className="h-6 text-[0.38rem]" barClassName="bg-royal" />
              </span>
              <span>
                <span className="block font-heading text-xl leading-tight font-bold text-white group-hover:text-focus">{service.title}</span>
                <span className="mt-1.5 block max-w-[13rem] text-sm leading-snug text-white/70">
                  Information to help you understand your options and next steps.
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
