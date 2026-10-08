import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin, PhoneCall, ShieldAlert } from "lucide-react";
import { BracketMark, SteppedBars } from "@/components/variant-b/motifs";

export function ContactPage(): React.ReactElement {
  return (
    <main>
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-[90rem] lg:min-h-[42rem] lg:grid-cols-[42fr_58fr]">
          <div className="px-6 py-14 sm:px-10 lg:py-20">
            <h1 className="text-5xl leading-[0.98] font-semibold tracking-tight sm:text-6xl lg:text-7xl">Visit Sigma Core in the Richmond area</h1>
            <div className="mt-7 flex max-w-lg gap-4 border-l-4 border-electric pl-5"><p className="text-xl font-semibold">We serve Richmond, Virginia and the surrounding area. Our onboarding address requires reconfirmation before launch.</p></div>
            <Link href="/book" className="mt-8 inline-flex h-14 items-center gap-3 bg-action px-7 text-lg font-semibold text-white hover:bg-hover">Book an Appointment <ArrowRight size={20} /></Link>
            <div className="mt-8 max-w-md border border-silver/60 p-5"><p className="text-sm font-semibold tracking-[0.15em] text-focus uppercase">Address requires reconfirmation</p><address className="mt-3 text-base not-italic text-white/75">725 Manakin Towne Lane<br />Manakin-Sabot, VA 23103</address><p className="mt-2 text-sm text-white/55">Do not rely on this address until reconfirmed for public launch.</p></div>
          </div>
          <div className="relative min-h-80 lg:min-h-[42rem] lg:w-[calc(100%+max(0px,(100vw-90rem)/2))] lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]"><Image src="/images/shared/reception-2.png" alt="Sigma Core Medical Center reception" fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" /><div aria-hidden className="absolute left-0 bottom-0 h-44 w-28 border-r-8 border-b-8 border-electric opacity-80" /></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-action py-16 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[42fr_58fr] lg:items-center">
          <div>
            <h2 className="text-5xl leading-none font-semibold tracking-tight sm:text-6xl">Verified location details</h2>
            <p className="mt-6 max-w-xl text-lg text-white/85">The final clinic name, address, phone, email, hours, directions, parking, accessibility, and public-contact rules will be published only after confirmation.</p>
            <p className="mt-6 max-w-lg text-base text-white/70">The onboarding address is a review input, not automatic launch copy.</p>
            <p className="mt-9 border-l-4 border-white pl-5 text-lg font-semibold uppercase">Accessibility information pending verification</p>
          </div>
          <div className="relative min-h-[28rem] overflow-hidden bg-surface text-ink lg:[clip-path:polygon(12%_0,100%_0,100%_100%,8%_100%,0_86%,0_0)]">
            <div className="absolute inset-y-0 right-0 w-1/2"><Image src="/images/shared/reception-2.png" alt="Sigma Core reception desk" fill sizes="(min-width: 1024px) 29vw, 50vw" className="object-cover" /></div>
            <div className="relative flex min-h-[28rem] w-[58%] flex-col justify-center p-8 sm:p-10"><MapPin className="text-action" size={48} /><h3 className="mt-6 text-4xl leading-none font-semibold uppercase">Address requires reconfirmation</h3><p className="mt-5 text-base text-muted">This address is a review input and must be reconfirmed before publishing final location details.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 text-ink sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6"><div><h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">Facility image</h2><p className="mt-4 max-w-xl text-lg text-muted">A look inside our Richmond-area clinic. These are actual Sigma Core reception and waiting-room photographs.</p></div><SteppedBars className="items-end scale-150" /></div>
          <div className="relative mt-10 h-[30rem] overflow-hidden sm:h-[38rem]">
            <div className="absolute inset-0 [clip-path:polygon(5%_0,100%_0,94%_100%,0_100%)]"><Image src="/images/shared/waiting-room.png" alt="Sigma Core Medical Center waiting room" fill sizes="100vw" className="object-cover" /></div>
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-4 bg-ink/95 p-6 pr-8 text-white sm:pr-12"><span className="flex items-center gap-3 font-semibold"><BracketMark className="text-silver" />Richmond, Virginia area</span><Link href="/about" className="flex items-center gap-2 text-xl font-semibold whitespace-nowrap">About us <ArrowRight /></Link></div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[40fr_60fr] lg:items-center">
          <div>
            <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] uppercase"><BracketMark className="text-silver" />Ready to take the next step?</p>
            <h2 className="mt-5 text-4xl leading-none font-semibold tracking-tight sm:text-5xl">Book an appointment at Sigma Core.</h2>
            <p className="mt-5 max-w-lg text-lg text-white/70">Use our secure booking page to request an appointment.</p>
            <Link href="/book" className="mt-7 inline-flex h-12 items-center gap-3 bg-action px-6 font-semibold text-white">Book an Appointment <ArrowRight size={18} /></Link>
            <a href="#contact-status" className="mt-8 flex items-center gap-3 text-sm font-semibold tracking-[0.15em] text-focus uppercase">Explore contact status <ArrowDown size={17} /></a>
          </div>
          <div className="relative min-h-[30rem] overflow-hidden lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]"><Image src="/images/shared/reception-1.png" alt="Sigma Core clinic reception" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" /><div className="absolute bottom-0 left-0 bg-action p-6 sm:p-8"><p className="flex items-center gap-3 font-semibold"><MapPin />Richmond, Virginia area</p><p className="mt-2 text-sm text-white/70">Address requires reconfirmation.</p></div></div>
        </div>
      </section>

      <section id="contact-status" className="bg-ink py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 sm:px-10">
          <div className="flex gap-4 border border-white/20 p-5"><PhoneCall className="shrink-0 text-focus" /><div><h2 className="font-semibold">Public contact details pending</h2><p className="mt-2 text-sm text-white/60">Phone, email, and business hours will appear after confirmation.</p></div></div>
          <div className="flex gap-4 border border-white/20 p-5"><ShieldAlert className="shrink-0 text-focus" /><div><h2 className="font-semibold">Emergency boundary</h2><p className="mt-2 text-sm text-white/60">If you are experiencing a medical emergency, call 911 or go to the nearest emergency room.</p></div></div>
        </div>
      </section>
    </main>
  );
}
