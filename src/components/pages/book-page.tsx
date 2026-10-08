import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarClock, FileCheck2, LockKeyhole, ShieldCheck } from "lucide-react";
import { PendingAction } from "@/components/shared/pending-action";
import { BracketMark, SteppedBars } from "@/components/variant-b/motifs";
import { PENDING } from "@/content/site";

const bookingButton = "inline-flex h-12 items-center justify-center gap-3 bg-action px-6 font-semibold text-white transition-colors hover:bg-hover";

export function BookPage(): React.ReactElement {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-white">
        <SteppedBars className="absolute top-8 right-10 items-end scale-150" />
        <div className="mx-auto grid max-w-[90rem] gap-8 px-6 py-14 sm:px-10 lg:min-h-[43rem] lg:grid-cols-[42fr_58fr] lg:items-center lg:py-20">
          <div>
            <h1 className="flex items-start gap-5 text-5xl leading-[0.98] font-semibold tracking-tight sm:text-6xl"><BracketMark className="mt-2 h-16 w-7 text-silver" />Book your appointment with Sigma Core</h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">Use the approved calendar to complete your appointment booking. This page has one action: complete appointment booking.</p>
            <div className="mt-8 grid gap-3">
              {["Understand your goals", "Discuss appropriate options", "Choose an informed next step"].map((item, index) => <div key={item} className={`${index === 1 ? "ml-8 bg-charcoal" : "bg-paper text-ink"} flex max-w-md items-center gap-3 px-5 py-4 font-semibold`}><BracketMark className="text-electric" />{item}</div>)}
            </div>
            <p className="mt-7 max-w-md border-l-2 border-silver pl-4 font-display text-base text-white/65 italic">The GoHighLevel account, workflow, and business-associate requirements must be confirmed before collecting health information.</p>
          </div>
          <div className="relative min-h-[30rem] border-t-8 border-action bg-surface text-ink shadow-2xl lg:min-h-[36rem]">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <CalendarClock size={52} className="text-action" />
              <h2 className="mt-7 text-2xl font-semibold tracking-[0.12em] uppercase">Calendar integration region</h2>
              <p className="mt-3 max-w-sm text-muted">The approved GoHighLevel embedded calendar will load here.</p>
              <PendingAction label={<>Check booking status <ArrowRight size={18} /></>} title={PENDING.booking.title} message={PENDING.booking.message} className={`${bookingButton} mt-7`} />
            </div>
          </div>
        </div>
        <div className="h-5 bg-action" />
      </section>

      <section className="bg-action py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">GoHighLevel calendar</h2>
          <p className="mt-4 max-w-xl text-lg text-white/80">The approved embedded calendar will handle dates, times, fields, and availability securely.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-[40fr_60fr]">
            <div className="bg-surface p-7 text-ink sm:p-9">
              <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] uppercase"><BracketMark className="text-action" />Ready to book</p>
              <h3 className="mt-4 text-4xl leading-none font-semibold tracking-tight">Book an appointment</h3>
              <p className="mt-4 text-base text-muted">Continue in the secure GoHighLevel calendar once the approved integration is connected.</p>
              <PendingAction label={<>Book an Appointment <ArrowRight size={18} /></>} title={PENDING.booking.title} message={PENDING.booking.message} className={`${bookingButton} mt-7`} />
              <div className="mt-8 space-y-4 text-sm text-muted"><p className="flex gap-3"><ShieldCheck className="text-action" size={21} />Your information will be handled through the approved secure workflow.</p><p className="flex gap-3"><FileCheck2 className="text-action" size={21} />Notice of Privacy Practices will be available before intake.</p></div>
            </div>
            <div className="flex min-h-[27rem] flex-col items-center justify-center bg-linear-to-br from-[#1179c7] to-[#075aa0] p-8 text-center shadow-xl">
              <LockKeyhole size={56} />
              <h3 className="mt-7 text-2xl font-semibold tracking-[0.08em] uppercase sm:text-3xl">GoHighLevel calendar integration reserved</h3>
              <p className="mt-5 max-w-xl text-white/75">The approved calendar will load here. No dates, times, fields, or availability are shown until the secure integration is configured.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 text-ink sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[42fr_58fr] lg:items-center">
          <div><SteppedBars className="mb-6" /><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Privacy note</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-muted">We respect your privacy and are committed to protecting personal health information. Information is used only to provide and coordinate care, communicate with you, and operate our practice.</p><Link href="/contact" className="mt-7 inline-flex items-center gap-2 font-semibold text-action hover:underline">Ask a general question <ArrowRight size={17} /></Link></div>
          <div className="relative min-h-80 overflow-hidden bg-paper p-8 sm:p-10"><div className="absolute inset-y-0 right-0 w-1/2"><Image src="/images/shared/reception-1.png" alt="Sigma Core reception" fill sizes="(min-width: 1024px) 29vw, 50vw" className="object-cover opacity-35" /></div><div className="relative max-w-sm border-l-4 border-ink pl-5"><CalendarClock size={35} className="text-action" /><h3 className="mt-5 text-2xl font-semibold">Book your appointment</h3><p className="mt-3 text-muted">Use our secure scheduling experience to find a time that works for you when the calendar is live.</p></div></div>
        </div>
      </section>
    </main>
  );
}
