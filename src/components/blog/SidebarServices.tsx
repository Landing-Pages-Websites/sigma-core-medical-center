import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactElement } from "react";
import { SERVICE_LINKS } from "@/content/service-links";

/** Every service page, so a reader can move from an article to the care it describes. */
export default function SidebarServices(): ReactElement {
  return (
    <nav aria-labelledby="sidebar-services" className="bg-white p-7 shadow-[0_8px_24px_rgb(6_29_54/0.08)]">
      <h2 id="sidebar-services" className="text-xs font-semibold tracking-[0.2em] text-action uppercase">Explore our services</h2>
      <ul className="mt-4 divide-y divide-silver">
        {SERVICE_LINKS.map(({ label, href, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex min-h-12 items-center gap-3 py-2 font-semibold text-navy transition-colors hover:text-action focus-visible:text-action focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-royal text-white">
                <Icon size={18} strokeWidth={1.8} aria-hidden />
              </span>
              <span className="min-w-0 flex-1">{label}</span>
              <ChevronRight size={18} aria-hidden className="shrink-0 text-action motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
