import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PHONE = "804-486-7699";
const PHONE_HREF = "tel:+18044867699";
const ADDRESS = "9020 Stony Point Pkwy #100, Richmond, VA 23235";
const HOURS = "Monday–Thursday, 8:00 AM–12:00 PM and 12:30 PM–5:30 PM";

const DISCUSSION_BLOCKS = [
  {
    title: "Your goals",
    body: "Start with what you want to understand, preserve, or improve. Your activities, priorities, and health context shape the conversation.",
  },
  {
    title: "The specific option",
    body: "Ask what product or procedure is being discussed, its intended use, preparation, and the evidence that applies.",
  },
  {
    title: "Trade-offs and alternatives",
    body: "Discuss potential benefits, limitations, risks, reasonable alternatives, costs, and follow-up before deciding.",
  },
] as const;

const CONSULTATION_BLOCKS = [
  { title: "Evaluate", body: "Review your goals, history, and the concern you want to address." },
  { title: "Explain", body: "Discuss the exact option, intended use, evidence, risks, alternatives, and likely follow-up." },
  { title: "Decide", body: "Clarify what comes next, including what happens if the option is not appropriate." },
] as const;

const QUESTIONS = [
  "What is the exact product or procedure, and what is its intended use?",
  "What evidence supports it for someone with my goals and health context?",
  "What risks, limitations, alternatives, and follow-up should I understand?",
  "What does care cost, and what happens if this is not the right option?",
] as const;

const FAQS = [
  {
    question: "What is regenerative medicine?",
    answer:
      "Regenerative medicine is a broad category of care and research. The product or procedure, intended use, evidence, risks, and suitability all matter. This page provides general information, not a diagnosis or treatment recommendation.",
  },
  {
    question: "Does regenerative medicine cure pain or disease?",
    answer:
      "No outcome is guaranteed. Sigma Core does not promise to cure, heal, eliminate, or reverse a disease or condition. A consultation can help you understand the available information and whether further evaluation may be appropriate.",
  },
  {
    question: "Is PRP or stem cell therapy FDA-approved?",
    answer:
      "Regulatory status depends on the exact product, preparation, and intended use. Sigma Core does not describe PRP or stem cell therapy as FDA-approved for a blanket indication. Ask a qualified provider to explain the relevant status and evidence.",
  },
  {
    question: "How do I know whether an option is appropriate?",
    answer:
      "Appropriateness depends on your goals, medical history, the exact option, and an individualized clinical evaluation. A consultation does not guarantee candidacy.",
  },
  {
    question: "Does Sigma Core accept insurance?",
    answer:
      "Sigma Core is a cash-pay practice. Call for current consultation and payment details; no prices or coverage promises are published on this page.",
  },
  {
    question: "How do I book?",
    answer:
      "Call 804-486-7699 to book a Free Consultation. The team can explain current appointment information and what to bring. Do not send medical records or urgent concerns through the website.",
  },
  {
    question: "Where is Sigma Core located?",
    answer:
      "Sigma Core Medical Center is at 9020 Stony Point Pkwy #100, Richmond, VA 23235. Hours are Monday–Thursday, 8:00 AM–12:00 PM and 12:30 PM–5:30 PM. Call 804-486-7699 to confirm current details.",
  },
] as const;

function PhoneCta({ children }: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <a data-mega-cta="call-now"
      href={PHONE_HREF}
      className="inline-flex min-h-14 items-center justify-between gap-6 border border-white bg-white px-5 py-3 text-base font-semibold text-navy transition-colors hover:bg-chalk focus-visible:outline-2 focus-visible:outline-offset-[-4px] sm:px-6"
    >
      <span>{children}</span>
      <ArrowRight size={20} aria-hidden className="shrink-0" />
    </a>
  );
}

export function RichmondRegenerativeMedicinePage(): React.ReactElement {
  return (
    <main className="overflow-hidden bg-surface text-ink">
      <section data-mega-section="hero" className="bg-navy text-white">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:py-24">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-sky">Regenerative medicine in Richmond</p>
            <h1 className="max-w-3xl font-heading text-[clamp(2.7rem,5.2vw,5rem)] leading-[0.98] font-bold tracking-[-0.04em]">
              Regenerative medicine in Richmond, VA, with clarity first
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
              If you are exploring regenerative medicine for movement, recovery, or longevity goals, Sigma Core Medical Center offers a consultation-led starting point in Richmond. Bring your questions and learn what may be appropriate for your health context.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PhoneCta>Call 804-486-7699 to book a Free Consultation</PhoneCta>
              <span className="max-w-xs text-sm leading-relaxed text-white/70">A consultation does not establish candidacy or guarantee an outcome. Individual results vary.</span>
            </div>
          </div>
          <div className="relative min-h-[24rem] lg:min-h-[42rem]">
            <Image
              src="/images/design/regenerative-medicine/photo-hero.webp"
              alt="A calm, modern clinical setting for a consultation"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-navy/90 px-6 py-5 sm:px-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky">Visit Sigma Core</p>
              <p className="mt-2 font-heading text-xl font-semibold">{ADDRESS}</p>
              <p className="mt-1 text-sm text-white/75">{HOURS}</p>
            </div>
          </div>
        </div>
      </section>

      <section data-mega-section="overview" className="bg-chalk px-6 py-16 sm:px-10 lg:px-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-royal">Start with context</p>
          <h2 className="mt-4 max-w-3xl font-heading text-[clamp(2.1rem,4vw,3.8rem)] leading-tight font-bold tracking-[-0.03em]">Regenerative medicine is a conversation, not a promise</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">Regenerative medicine is a broad category. The specific product, procedure, intended use, evidence, risks, alternatives, and follow-up must be reviewed before any option is considered.</p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {DISCUSSION_BLOCKS.map((block) => (
              <article key={block.title} className="border-t-4 border-royal bg-white p-6 shadow-[8px_8px_0_#d7d7d4]">
                <h3 className="font-heading text-2xl font-bold text-navy">{block.title}</h3>
                <p className="mt-4 leading-relaxed text-slate">{block.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 border-l-4 border-royal pl-4 text-sm font-semibold text-navy">No specific modality is promised or promoted on this page.</p>
        </div>
      </section>

      <section data-mega-section="consultation-topics" className="bg-royal px-6 py-16 text-white sm:px-10 lg:px-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky">A qualified conversation</p>
          <h2 className="mt-4 max-w-3xl font-heading text-[clamp(2.1rem,4vw,3.8rem)] leading-tight font-bold tracking-[-0.03em]">What to discuss in a consultation</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">A qualified provider can help you review the questions that matter before you decide whether any option may be appropriate.</p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {CONSULTATION_BLOCKS.map((block) => (
              <article key={block.title} className="border border-white/25 bg-navy/35 p-6">
                <h3 className="font-heading text-2xl font-bold">{block.title}</h3>
                <p className="mt-4 leading-relaxed text-white/80">{block.body}</p>
              </article>
            ))}
          </div>
          <a data-mega-cta="call-now" href={PHONE_HREF} className="mt-10 inline-flex items-center gap-4 border border-white px-6 py-4 text-lg font-semibold transition-colors hover:bg-white hover:text-royal focus-visible:outline-2 focus-visible:outline-offset-[-4px]">Call {PHONE}<ArrowRight size={20} aria-hidden /></a>
        </div>
      </section>

      <section data-mega-section="questions" className="bg-surface px-6 py-16 sm:px-10 lg:px-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-royal">Bring these questions</p>
            <h2 className="mt-4 font-heading text-[clamp(2.1rem,4vw,3.5rem)] leading-tight font-bold tracking-[-0.03em]">Questions worth bringing</h2>
            <p className="mt-5 leading-relaxed text-slate">These questions can help you compare options without assuming that a procedure is the right answer.</p>
          </div>
          <ol className="space-y-4">
            {QUESTIONS.map((question, index) => (
              <li key={question} className="flex gap-5 border-b border-ink/15 pb-5 text-lg leading-relaxed text-navy"><span className="font-heading text-2xl font-bold text-royal">0{index + 1}</span><span>{question}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section data-mega-section="faq" className="bg-chalk px-6 py-16 sm:px-10 lg:px-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-royal">Plain-language answers</p>
          <h2 className="mt-4 max-w-4xl font-heading text-[clamp(2.1rem,4vw,3.8rem)] leading-tight font-bold tracking-[-0.03em]">Common questions about regenerative medicine in Richmond</h2>
          <div className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading text-xl font-bold text-navy marker:hidden">{faq.question}<span aria-hidden className="text-royal transition-transform group-open:rotate-45">+</span></summary>
                <p className="max-w-4xl pt-4 leading-relaxed text-slate">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section data-mega-section="booking-cta" className="bg-navy px-6 py-16 text-white sm:px-10 lg:px-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky">Next step</p>
            <h2 className="mt-4 font-heading text-[clamp(2.1rem,4vw,3.8rem)] leading-tight font-bold tracking-[-0.03em]">Start with a Free Consultation</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">Call 804-486-7699 to discuss your goals, questions, and possible next steps. This conversation is informational and does not guarantee a result.</p>
          </div>
          <a data-mega-cta="call-now" href={PHONE_HREF} className="inline-flex min-h-14 items-center justify-between gap-6 bg-royal px-6 py-4 text-lg font-semibold transition-colors hover:bg-sky focus-visible:outline-2 focus-visible:outline-offset-[-4px]">Call {PHONE}<ArrowRight size={20} aria-hidden /></a>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 border-t border-white/20 pt-8 text-sm text-white/75 sm:grid-cols-2 lg:grid-cols-3">
          <div><p className="font-semibold text-white">Sigma Core Medical Center</p><p className="mt-1">{ADDRESS}</p></div>
          <div><p className="font-semibold text-white">Call</p><a data-mega-cta="call-now" href={PHONE_HREF} className="mt-1 inline-block hover:text-sky">{PHONE}</a></div>
          <div><p className="font-semibold text-white">Hours</p><p className="mt-1">{HOURS}</p></div>
        </div>
        <nav aria-label="Related Sigma Core pages" className="mx-auto mt-8 flex max-w-5xl flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-6 text-sm font-semibold text-sky">
          <Link href="/services/regenerative-medicine" className="hover:text-white">Regenerative medicine overview</Link>
          <Link href="/services/regenerative-medicine/prp-injection" className="hover:text-white">PRP Injection Care</Link>
          <Link href="/services" className="hover:text-white">All services</Link>
          <Link data-mega-cta="contact" href="/contact" className="hover:text-white">Contact Sigma Core</Link>
        </nav>
      </section>
    </main>
  );
}
