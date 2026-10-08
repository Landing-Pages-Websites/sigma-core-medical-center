import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOOTER } from "@/content/site";

const FOOTER_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Neuropathy", href: "/services/neuropathy" },
  { label: "About", href: "/about" },
  { label: "Educational Guide", href: "/educational-guide" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteFooterB(): React.ReactElement {
  return (
    <footer id="footer" aria-label="Footer" className="relative overflow-hidden bg-ink">
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-5 bg-[url('/images/variant-b/walnut-texture.jpg')] bg-cover sm:block" />
      <div aria-hidden className="absolute top-0 left-1/2 hidden h-2 w-16 -translate-x-1/2 bg-silver sm:block" />
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:pr-14">
        <div className="grid gap-8 text-center lg:grid-cols-[1fr_auto_auto] lg:items-center lg:text-left">
          <Link href="/" className="relative mx-auto border border-silver/40 px-8 py-4 lg:mx-0">
            <span aria-hidden className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-electric" />
            <span aria-hidden className="absolute -right-px -bottom-px h-4 w-4 border-r-2 border-b-2 border-electric" />
            <Image src="/images/shared/logo.png" alt="Sigma Core Medical Center" width={240} height={65} className="h-12 w-auto" />
          </Link>
          <div>
            <p className="text-xl font-semibold text-white">{FOOTER.tagline}</p>
            <p className="mt-1 text-base text-silver">{FOOTER.location}</p>
          </div>
          <Link href="/book" className="inline-flex h-12 items-center justify-center gap-2 bg-action px-6 font-semibold text-white transition-colors hover:bg-hover">
            {FOOTER.cta} <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
        <nav aria-label="Footer" className="mt-10 border-t border-white/10 pt-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {FOOTER_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-base text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-4 text-center text-sm leading-relaxed text-white/55">{FOOTER.disclaimer}</p>
      </div>
    </footer>
  );
}
