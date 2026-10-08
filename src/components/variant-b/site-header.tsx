"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bone,
  BrainCircuit,
  ChevronDown,
  HeartPulse,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

const SERVICE_LINKS = [
  { label: "Neuropathy", href: "/services/neuropathy", body: "Movement, function, and everyday independence.", icon: BrainCircuit },
  { label: "Pain Relief", href: "/services/pain-relief", body: "Orientation for knee, low-back, and neck concerns.", icon: Bone },
  { label: "Hormone Optimization", href: "/services/hormone-optimization", body: "A conversation about function, energy, and recovery.", icon: Activity },
  { label: "Pelvic Floor & Incontinence", href: "/services/pelvic-floor-incontinence", body: "Private, respectful care centered on daily life.", icon: HeartPulse },
  { label: "Regenerative Medicine", href: "/services/regenerative-medicine", body: "Responsible category-level decision support.", icon: Sparkles },
] as const;

const PRIMARY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Educational Guide", href: "/educational-guide" },
  { label: "Contact", href: "/contact" },
] as const;

const desktopLink =
  "inline-flex min-h-12 items-center border-b-2 border-transparent px-1 text-sm font-semibold text-ink transition-colors hover:border-electric hover:text-action focus-visible:border-electric focus-visible:text-action";

export function SiteHeaderB(): React.ReactElement {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMenus = (): void => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 border-t-4 border-walnut shadow-[0_8px_30px_rgb(16_30_51/0.12)]"
      onKeyDown={(event) => event.key === "Escape" && closeMenus()}
    >
      <div className="border-b border-ink/10 bg-surface/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[4.75rem] max-w-[90rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          <Link href="/" aria-label="Sigma Core Medical Center home" className="group flex shrink-0 items-center gap-5" onClick={closeMenus}>
            <Image src="/images/shared/logo.png" alt="Sigma Core Medical Center" width={300} height={81} priority className="h-10 w-auto transition-transform duration-200 group-hover:scale-[1.015] sm:h-11" />
            <span className="hidden border-l border-ink/15 pl-5 text-[0.68rem] leading-tight font-semibold tracking-[0.16em] text-muted uppercase 2xl:block">Human Performance<br />and Longevity</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
            <Link href="/" className={desktopLink} onClick={closeMenus}>Home</Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="desktop-services-menu"
                onClick={() => setServicesOpen((open) => !open)}
                className={`${desktopLink} cursor-pointer gap-1.5 ${servicesOpen ? "border-electric text-action" : ""}`}
              >
                Services
                <ChevronDown size={15} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {servicesOpen && (
                <div id="desktop-services-menu" className="fixed top-[3.875rem] left-1/2 z-[60] w-[min(62rem,calc(100vw-3rem))] -translate-x-1/2 border-t-4 border-electric bg-surface p-5 shadow-[0_24px_70px_rgb(16_30_51/0.28)]">
                  <div className="grid gap-5 lg:grid-cols-[15rem_1fr]">
                    <Link href="/services" onClick={closeMenus} className="group relative overflow-hidden bg-ink p-6 text-white">
                      <p className="text-xs font-semibold tracking-[0.16em] text-focus uppercase">Explore care</p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-tight">All services</h2>
                      <p className="mt-3 text-sm leading-relaxed text-white/65">Find the right starting point for your goals and questions.</p>
                      <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-focus group-hover:underline">View services <ArrowRight size={16} /></span>
                    </Link>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {SERVICE_LINKS.map(({ label, href, body, icon: Icon }) => (
                        <Link key={href} href={href} onClick={closeMenus} className="group flex min-h-24 gap-4 border border-ink/10 bg-white p-4 transition-colors hover:border-electric hover:bg-paper">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-action text-white"><Icon size={20} aria-hidden /></span>
                          <span><strong className="flex items-center gap-2 text-sm text-ink">{label}<ArrowRight size={14} className="text-action opacity-0 transition-opacity group-hover:opacity-100" /></strong><span className="mt-1 block text-xs leading-relaxed text-muted">{body}</span></span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {PRIMARY_LINKS.map((item) => <Link key={item.href} href={item.href} className={desktopLink} onClick={closeMenus}>{item.label}</Link>)}
            <Link href="/book" onClick={closeMenus} className="inline-flex h-12 items-center gap-3 bg-action px-5 text-sm font-semibold text-white shadow-[0_8px_20px_rgb(6_102_165/0.22)] transition-all hover:-translate-y-0.5 hover:bg-hover hover:shadow-[0_12px_28px_rgb(6_102_165/0.3)]">Book an Appointment <ArrowRight size={17} aria-hidden /></Link>
          </nav>

          <div className="relative xl:hidden">
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-primary-menu"
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-electric hover:text-action"
            >
              <span className="sr-only">{mobileOpen ? "Close navigation" : "Open navigation"}</span>
              {mobileOpen ? <X aria-hidden /> : <Menu aria-hidden />}
            </button>
            {mobileOpen && (
              <nav id="mobile-primary-menu" aria-label="Mobile primary" className="absolute top-[calc(100%+1.05rem)] right-0 max-h-[calc(100vh-8rem)] w-[min(23rem,calc(100vw-2rem))] overflow-y-auto border-t-4 border-electric bg-surface p-4 shadow-2xl">
                <Link href="/" onClick={closeMenus} className="flex min-h-12 items-center border-b border-ink/10 px-3 font-semibold text-ink">Home</Link>
                <div className="border-b border-ink/10">
                  <button type="button" aria-expanded={mobileServicesOpen} aria-controls="mobile-services-menu" onClick={() => setMobileServicesOpen((open) => !open)} className="flex min-h-12 w-full items-center justify-between px-3 text-left font-semibold text-ink">Services <ChevronDown size={17} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} /></button>
                  {mobileServicesOpen && (
                    <div id="mobile-services-menu" className="mb-3 border-l-2 border-electric bg-paper p-2">
                      <Link href="/services" onClick={closeMenus} className="flex min-h-11 items-center px-3 text-sm font-semibold text-action">All Services</Link>
                      {SERVICE_LINKS.map((item) => <Link key={item.href} href={item.href} onClick={closeMenus} className="flex min-h-11 items-center border-t border-ink/10 px-3 text-sm font-semibold text-ink">{item.label}</Link>)}
                    </div>
                  )}
                </div>
                {PRIMARY_LINKS.map((item) => <Link key={item.href} href={item.href} onClick={closeMenus} className="flex min-h-12 items-center border-b border-ink/10 px-3 font-semibold text-ink">{item.label}</Link>)}
                <Link href="/book" onClick={closeMenus} className="mt-4 inline-flex h-12 w-full items-center justify-between bg-action px-5 text-sm font-semibold text-white">Book an Appointment <ArrowRight size={17} aria-hidden /></Link>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
