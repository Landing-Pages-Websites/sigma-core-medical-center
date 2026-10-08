import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { REGENERATIVE_PAGE } from "@/content/pages";
import { CornerStripes, TallBracket } from "@/components/pages/shared/page-motifs";

const DESIGN_QUESTIONS = [
  "Why aren’t specific options listed on the site yet?",
  "Why is an appropriate provider important?",
  "How do I book a consultation?",
  "Where is the clinic located?",
] as const;

const FAQ_ACTIONS = [
  { label: "Book a Consultation", href: "/book" },
  { label: "Contact the Clinic", href: "/contact" },
] as const;

export function RegenerativeFaq(): React.ReactElement {
  const items = REGENERATIVE_PAGE.faqs.map((faq, index) => ({ question: DESIGN_QUESTIONS[index] ?? faq.question, answer: faq.answer }));

  return (
    <section id="faq" className="relative overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-6 right-0 z-20 hidden w-[24rem] lg:flex" />
      <div className="grid lg:min-h-[34rem] lg:grid-cols-[30fr_70fr]">
        <div className="relative z-10 px-6 pt-14 sm:px-10 lg:pt-20 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          <h2 className="font-heading text-[clamp(5rem,10vw,9rem)] leading-[0.8] font-bold tracking-[-0.05em]">Faq</h2>
          <p className="mt-8 max-w-[18rem] text-base leading-snug text-white/88">
            Answers to common questions about next steps. We cover why specific options are not listed yet, why an appropriate provider matters, how to book, and where the clinic is.
          </p>
          <p className="relative mt-8 bg-[#ecebe7] py-5 pr-10 pl-12 text-xs leading-snug text-ink lg:mr-[-6rem] lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">
            <TallBracket className="absolute top-4 bottom-4 left-5 w-2.5 text-royal" />
            We hold details <strong className="font-semibold">about products,</strong> indications, efficacy, risks, costs, eligibility, and timelines pending approval.
          </p>
        </div>
        <div className="relative grid lg:grid-cols-[48fr_52fr]">
          <div className="relative z-10 space-y-2 px-6 pt-8 pb-8 sm:px-10 lg:px-0 lg:pt-20">
            {items.map((item, index) => (
              <details key={item.question} name="regenerative-faq" className="group border border-white/40 bg-navy/95" open={index === 0}>
                <summary className="flex min-h-20 cursor-pointer list-none items-center gap-4 px-4 py-3 [&::-webkit-details-marker]:hidden">
                  <TallBracket className="h-12 w-2.5 shrink-0 text-silver" />
                  <span className="flex-1 font-heading text-lg leading-tight font-bold">{item.question}</span>
                  <ChevronDown size={22} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <p className="border-t border-white/15 px-5 py-4 pl-11 text-sm leading-snug text-white/80">{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="relative min-h-72 lg:mt-20 lg:-ml-10 lg:min-h-0">
            <div className="absolute inset-0 lg:bottom-0 lg:[clip-path:polygon(22%_0,100%_0,100%_100%,0_100%,0_40%)]">
              <Image src="/images/pages/pain-decision-interior-v4.png" alt="Conceptual clinic reception with a charcoal feature wall" fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover object-[30%_center]" />
              <Image src="/images/shared/logo.png" alt="" width={240} height={65} className="absolute top-[22%] left-[36%] h-auto w-[42%] drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex w-full flex-wrap justify-end gap-4 bg-royal px-6 py-8 sm:px-10 lg:w-[62%] lg:pr-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:[clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]">
          {FAQ_ACTIONS.map((action) => (
            <Link key={action.href} href={action.href} className="group flex w-64 items-center justify-between border border-white px-4 py-2.5 transition-colors hover:bg-white hover:text-royal">
              <span>
                <span className="block font-heading text-lg font-bold">{action.label}</span>
                <span className="block text-sm">{action.href}</span>
              </span>
              <ArrowRight size={22} aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
