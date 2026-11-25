import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CornerStripes, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

const FAQ_ROWS = [
  { question: "How do I know if my hormones are out of balance?", answer: ["Symptoms such as fatigue, changes in sexual desire, poor recovery, sleep disturbances, or declining energy can sometimes be related to hormonal changes.", "However, other medical and lifestyle factors can produce similar symptoms. An appropriate clinical evaluation can help determine whether hormone testing or further investigation is warranted."] },
  { question: "Is hormone treatment appropriate for everyone?", answer: ["No. Hormone treatment depends on your symptoms, medical history, clinical findings, and individual risk factors.", "Some people may benefit from hormone-related treatment, while others may need a different approach. Proper evaluation helps determine which options deserve consideration."] },
  { question: "What makes Sigma Core's approach different?", answer: ["Our integrative approach looks beyond a single symptom or laboratory number.", "We consider your health history, current concerns, and personal goals to help identify appropriate evaluation and care options. We believe effective healthcare starts with understanding the bigger picture."] },
  { question: "What happens during my free hormone consultation?", answer: ["We'll discuss the changes you've been experiencing, your health concerns, and the available next steps.", "You'll have an opportunity to ask questions and learn more about Sigma Core's approach. Any additional testing, examination, or medical treatment would be explained separately when appropriate."] },
] as const;

const OUTLINE_BUTTON = "inline-flex h-12 w-full items-center justify-between gap-4 border border-white/80 px-5 text-sm font-semibold transition-colors hover:bg-white hover:text-royal focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]";

export function HormoneFaq(): React.ReactElement {
  return (
    <section data-mega-section="faq" id="faq" className="relative overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-6 right-0 hidden w-[24rem] lg:flex" />
      <div aria-hidden className="absolute right-0 bottom-0 hidden h-[64%] w-[30%] bg-royal [clip-path:polygon(100%_0,100%_100%,0_100%)] lg:block" />
      <div className="relative grid lg:grid-cols-[33fr_67fr]">
        <div className="flex flex-col pt-14 lg:pt-16">
          <div className="px-6 sm:px-10 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
            <h2 className="font-heading text-[clamp(1.9rem,3vw,2.8rem)] leading-[1.05] font-bold tracking-[-0.03em]">Wondering Whether Your Hormones Could Be Affecting How You Feel?</h2>
            <p className="relative mt-6 max-w-[24rem] pl-6 text-base leading-snug text-white/85">
              <TallBracket className="absolute top-0 left-0 h-12 w-2 text-silver" />
              If your energy, motivation, strength, or overall well-being have changed, it&apos;s natural to have questions. Here are some answers to help you explore your options.
            </p>
          </div>
          <div className="relative mt-8 min-h-52 flex-1 lg:mr-6 lg:[clip-path:polygon(0_0,86%_0,100%_100%,0_100%)]">
            <Image src="/images/pages/hormone-faq-lobby-v3.webp" alt="Conceptual warm clinic reception and lounge" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-[25%_center]" />
          </div>
        </div>
        <div className="relative px-6 py-10 sm:px-10 lg:py-24 lg:pr-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pl-4">
          <ul className="space-y-3 lg:max-w-[52rem]">
            {FAQ_ROWS.map((row) => (
              <li key={row.question} className="grid gap-3 bg-slate px-5 py-5 shadow-[0_12px_24px_rgb(0_0_0/0.25)] sm:grid-cols-[1fr_1.15fr] sm:gap-6">
                <h3 className="flex gap-4 font-heading text-lg leading-tight font-bold sm:text-xl">
                  <TallBracket className="h-12 w-2.5 shrink-0 text-silver" /> {row.question}
                </h3>
                <div className="space-y-2 text-sm leading-snug text-white/85">{row.answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 lg:max-w-[52rem]">
            <p className="font-heading text-xl leading-tight font-bold">Have Questions About Your Hormone Health? Let&apos;s Talk.</p>
            <Link data-mega-cta="book-appointment" href="https://go.sigmacoremedicalcenter.com/" className="inline-flex min-h-14 items-center gap-3 bg-royal px-6 text-lg font-semibold transition-colors hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Request My Free Hormone Consultation <ArrowRight size={20} aria-hidden className="shrink-0" />
            </Link>
          </div>
          <div className="mt-4 sm:w-64">
            <PolicyLink label={<>Terms of Use <ArrowRight size={18} aria-hidden className="shrink-0" /></>} className={OUTLINE_BUTTON} />
          </div>
        </div>
      </div>
      <div aria-hidden className="h-10 bg-royal" />
    </section>
  );
}
