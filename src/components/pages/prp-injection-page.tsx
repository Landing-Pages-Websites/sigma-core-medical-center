import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CircleHelp, ClipboardList, ShieldCheck } from "lucide-react";

const QUESTIONS = [
  "What goal are we addressing, and how will we know whether the plan is helping?",
  "What preparation is being discussed, and what evidence applies to my intended use?",
  "What alternatives, including no injection, should I compare?",
  "What are the risks, limitations, follow-up needs, and total out-of-pocket cost?",
] as const;

const FAQS = [
  {
    question: "What is a PRP injection?",
    answer:
      "Platelet-rich plasma (PRP) is prepared from a sample of a person’s own blood. A consultation should explain the specific preparation, intended use, injection plan, alternatives, and follow-up before you decide whether it may be appropriate.",
  },
  {
    question: "Is PRP FDA-approved?",
    answer:
      "PRP is not a single FDA-approved treatment for every use. Regulatory status and evidence depend on the exact preparation and intended use. Sigma Core does not describe PRP as FDA-approved for a blanket indication.",
  },
  {
    question: "Can PRP cure arthritis, tendon injuries, or pain?",
    answer:
      "No. This page does not promise a cure, permanent results, or a particular outcome. The right conversation is about your goals, the evidence for the proposed use, possible risks, and reasonable alternatives.",
  },
  {
    question: "How many PRP injections will I need?",
    answer:
      "There is no one-size-fits-all schedule. If PRP is considered, the care team should explain whether an injection is appropriate, what follow-up may involve, and what would happen if it is not the right option for you.",
  },
  {
    question: "Who may want to discuss PRP?",
    answer:
      "Adults with a joint, tendon, or recovery concern may choose to ask about PRP. A question is not a diagnosis or a recommendation. An individualized evaluation is needed to discuss whether it fits your health history and goals.",
  },
] as const;

export function PrpInjectionPage(): React.ReactElement {
  return (
    <main className="overflow-hidden bg-navy text-white">
      <section className="relative overflow-hidden bg-navy">
        <div aria-hidden className="absolute top-0 right-0 hidden h-36 w-80 bg-royal [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)] lg:block" />
        <div className="mx-auto grid max-w-[90rem] lg:min-h-[40rem] lg:grid-cols-[54fr_46fr]">
          <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-20 lg:pl-14">
            <p className="text-base font-semibold tracking-wide text-[#65b9ea]">Regenerative medicine · PRP care</p>
            <h1 className="mt-4 max-w-[40rem] font-heading text-[clamp(2.8rem,5.5vw,5.2rem)] leading-[0.98] font-bold tracking-[-0.04em]">
              PRP injection care built around your goals
            </h1>
            <p className="mt-6 max-w-[34rem] text-xl leading-snug text-white/90">
              Explore whether platelet-rich plasma may be appropriate for a joint, tendon, pain, recovery, or performance conversation at Sigma Core Medical Center.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="inline-flex min-h-14 items-center gap-5 bg-royal px-6 text-lg font-semibold transition-colors hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-[-4px]">
                Schedule a consultation <ArrowRight size={21} aria-hidden />
              </Link>
              <Link href="#how-prp-is-discussed" className="inline-flex min-h-14 items-center gap-4 border border-white px-6 text-lg font-semibold transition-colors hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-[-4px]">
                See what to expect <ArrowRight size={21} aria-hidden />
              </Link>
            </div>
            <p className="mt-5 max-w-[35rem] text-sm leading-snug text-white/70">
              A consultation is not a promise that PRP is right for you. Individual results vary, and care decisions require an appropriate clinical evaluation.
            </p>
          </div>
          <div className="relative min-h-[25rem] lg:mt-20 lg:mb-8 lg:min-h-0">
            <div className="absolute inset-0 lg:-left-[16%] lg:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)]">
              <Image src="/images/pages/pain-knee-walk-v3.webp" alt="Adult walking outdoors with an active lifestyle" fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover object-[55%_center]" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-transparent" />
            </div>
            <div className="absolute right-6 bottom-8 left-6 bg-royal px-6 py-5 sm:right-10 sm:left-auto sm:max-w-[22rem] lg:right-8 lg:bottom-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/75">Start with clarity</p>
              <p className="mt-2 font-heading text-2xl leading-tight font-bold">The exact option, evidence, and alternatives belong in the conversation.</p>
            </div>
          </div>
        </div>
        <div aria-hidden className="h-5 bg-royal" />
      </section>

      <section id="how-prp-is-discussed" className="bg-chalk text-ink">
        <div className="mx-auto max-w-[90rem] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[40fr_60fr] lg:items-end">
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.14em] text-royal">A personalized starting point</p>
              <h2 className="mt-3 max-w-[34rem] font-heading text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.98] font-bold tracking-[-0.04em] text-navy">
                What a PRP conversation should cover
              </h2>
            </div>
            <p className="max-w-[42rem] text-lg leading-relaxed text-ink/80">
              PRP is not a universal protocol. A responsible discussion connects the proposed use to your goals and health context, then makes room for evidence, uncertainty, risks, alternatives, and follow-up.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Your goals", "What you want to keep doing, improve, or understand."],
              ["The proposed use", "The exact area, preparation, and purpose being discussed."],
              ["The trade-offs", "Potential benefits, limitations, risks, and alternatives."],
              ["The next step", "How follow-up works and what happens if PRP is not appropriate."],
            ].map(([title, body], index) => (
              <article key={title} className="relative min-h-48 bg-[#e5e2dc] px-5 pt-7 pb-6 shadow-[0_12px_25px_rgb(16_30_51/0.08)]">
                <span className="absolute top-0 left-0 h-1 w-16 bg-royal" aria-hidden />
                <span className="text-sm font-semibold text-royal">0{index + 1}</span>
                <h3 className="mt-4 font-heading text-2xl leading-tight font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-snug text-ink/75">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-royal text-white">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[42fr_58fr] lg:px-14 lg:py-20">
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.14em] text-white/75">If PRP is considered</p>
            <h2 className="mt-3 max-w-[32rem] font-heading text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.98] font-bold tracking-[-0.04em]">A clear plan comes before an injection</h2>
            <p className="mt-5 max-w-[31rem] text-lg leading-relaxed text-white/90">
              Your consultation can help determine whether PRP belongs in the care conversation. No procedure should be presented as a cure or guaranteed result.
            </p>
            <Link href="/book" className="mt-8 inline-flex min-h-14 items-center gap-5 border border-white px-6 text-lg font-semibold transition-colors hover:bg-white hover:text-royal focus-visible:outline-2 focus-visible:outline-offset-[-4px]">
              Book a consultation <ArrowRight size={21} aria-hidden />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:pt-12">
            {[
              [ClipboardList, "Evaluate", "Review your goals, history, and the concern you want to address."],
              [ShieldCheck, "Explain", "Discuss the specific preparation, intended use, risks, and alternatives."],
              [CircleHelp, "Follow up", "Set expectations for monitoring and the next decision point."],
            ].map(([Icon, title, body]) => {
              const FeatureIcon = Icon as typeof ClipboardList;
              return (
                <article key={title as string} className="border-t-2 border-white/60 bg-navy/35 px-5 pt-6 pb-7">
                  <FeatureIcon size={34} strokeWidth={1.5} aria-hidden className="text-[#8fd2f2]" />
                  <h3 className="mt-5 font-heading text-xl font-bold">{title as string}</h3>
                  <p className="mt-2 text-sm leading-snug text-white/80">{body as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate text-white">
        <div className="mx-auto grid max-w-[90rem] lg:grid-cols-[55fr_45fr]">
          <div className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
            <p className="text-base font-semibold uppercase tracking-[0.14em] text-[#65b9ea]">Questions worth bringing</p>
            <h2 className="mt-3 max-w-[37rem] font-heading text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.98] font-bold tracking-[-0.04em]">Make the decision specific</h2>
            <p className="mt-5 max-w-[35rem] text-lg leading-relaxed text-white/85">These questions can help you compare PRP with other options without assuming that a procedure is the right answer.</p>
            <ol className="mt-8 grid gap-3">
              {QUESTIONS.map((question) => (
                <li key={question} className="flex gap-4 border-b border-white/15 pb-4 text-base leading-snug text-white/90">
                  <Check size={22} aria-hidden className="mt-0.5 shrink-0 text-[#8fd2f2]" />
                  <span>{question}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative min-h-[22rem] lg:min-h-0">
            <Image src="/images/pages/hormone-consultation-v2.webp" alt="Notebook and conversation setting prepared for a consultation" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[65%_center]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/10 to-transparent" />
            <p className="absolute right-6 bottom-7 left-6 max-w-[23rem] border-l-4 border-[#8fd2f2] bg-navy/90 px-5 py-4 text-base leading-snug sm:right-10 sm:left-auto">
              The goal is an informed conversation, not a fixed treatment plan.
            </p>
          </div>
        </div>
      </section>

      <section id="prp-faq" className="bg-navy text-white">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[35fr_65fr] lg:px-14 lg:py-20">
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.14em] text-[#65b9ea]">PRP questions</p>
            <h2 className="mt-3 font-heading text-[clamp(3.5rem,8vw,7rem)] leading-[0.8] font-bold tracking-[-0.05em]">FAQ</h2>
            <p className="mt-8 max-w-[22rem] text-lg leading-snug text-white/80">General information can help you prepare. It cannot determine whether PRP is appropriate for you.</p>
          </div>
          <div className="grid gap-3">
            {FAQS.map((item, index) => (
              <details key={item.question} className="group border border-white/25 bg-navy/70" open={index === 0}>
                <summary className="flex min-h-16 cursor-pointer list-none items-center gap-4 px-5 py-4 font-heading text-xl font-bold focus-visible:outline-2 focus-visible:outline-offset-[-4px] [&::-webkit-details-marker]:hidden">
                  <span className="text-[#8fd2f2]">+</span>
                  <span className="flex-1">{item.question}</span>
                  <ArrowRight size={20} aria-hidden className="transition-transform group-open:rotate-90" />
                </summary>
                <p className="border-t border-white/15 px-5 py-5 pl-12 text-base leading-relaxed text-white/80">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-chalk text-ink">
        <div className="mx-auto grid max-w-[90rem] gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[55fr_45fr] lg:items-center lg:px-14 lg:py-16">
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.14em] text-royal">Take the next step</p>
            <h2 className="mt-3 max-w-[40rem] font-heading text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.98] font-bold tracking-[-0.04em] text-navy">Bring your goals and questions to Sigma Core</h2>
            <p className="mt-5 max-w-[40rem] text-lg leading-relaxed text-ink/80">Schedule a consultation to learn whether a PRP conversation may be appropriate for your goals. The team can discuss options, alternatives, and what to expect next.</p>
          </div>
          <div className="lg:justify-self-end">
            <Link href="/book" className="inline-flex min-h-16 items-center gap-6 bg-royal px-7 text-xl font-semibold text-white transition-colors hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-[-4px]">
              Schedule a consultation <ArrowRight size={24} aria-hidden />
            </Link>
            <p className="mt-4 max-w-[25rem] text-sm leading-snug text-ink/65">Consultation availability and candidacy are determined through the appropriate clinical process.</p>
          </div>
        </div>
        <div className="h-2 bg-royal" aria-hidden />
      </section>
    </main>
  );
}
