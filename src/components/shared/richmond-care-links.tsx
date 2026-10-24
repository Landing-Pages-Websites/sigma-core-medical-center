import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  RICHMOND_LOCAL_CONTEXT,
  RICHMOND_NEXT_STEP_LINKS,
  RICHMOND_SERVICE_LINKS,
} from "@/content/local-links";

const serviceLinkClass =
  "group block border border-white/15 bg-white/[0.04] p-4 transition-colors hover:border-focus/70 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus";

export function RichmondCareLinks(): React.ReactElement {
  return (
    <section
      aria-labelledby="richmond-care-links-heading"
      className="border-t border-white/10 py-10"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-14">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-focus uppercase">
            Richmond, Virginia area
          </p>
          <h2
            id="richmond-care-links-heading"
            className="mt-3 max-w-md font-heading text-3xl leading-none font-bold tracking-[-0.03em] text-white sm:text-4xl"
          >
            Start with the right care conversation
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
            {RICHMOND_LOCAL_CONTEXT}
          </p>
        </div>
        <nav aria-label="Richmond area care links">
          <ul className="grid gap-2 sm:grid-cols-2">
            {RICHMOND_SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={serviceLinkClass}>
                  <span className="flex items-center justify-between gap-3 text-base font-semibold text-white">
                    {link.label}
                    <ArrowRight
                      size={17}
                      aria-hidden
                      className="shrink-0 text-focus transition-transform group-hover:translate-x-1"
                    />
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-white/60">
                    {link.body}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {RICHMOND_NEXT_STEP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-focus underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
