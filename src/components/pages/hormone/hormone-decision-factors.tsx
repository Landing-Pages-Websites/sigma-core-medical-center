import Image from "next/image";
import Link from "next/link";
import { MiniStairs, TallBracket } from "@/components/pages/shared/page-motifs";

const FACTOR_PANELS = [
  {
    title: "Function",
    lift: "lg:mt-0",
    questions: [
      "What is the provider’s license and area of practice?",
      "What evidence supports this option?",
      "What benefits might I expect?",
      "What are the potential risks or side effects?",
      "What are my alternatives, including doing nothing?",
    ],
  },
  {
    title: "Energy",
    lift: "lg:mt-10",
    questions: ["How will we monitor progress and safety?", "How will we know if it’s working as intended?", "What follow-up care is recommended?", "What are the costs involved?"],
  },
  {
    title: "Recovery",
    lift: "lg:mt-20",
    questions: ["What happens if this is not appropriate for me?", "How will we adjust the plan if needed?", "Who can I contact if I have questions or concerns?"],
  },
  {
    title: "Your Goals",
    lift: "lg:mt-28",
    questions: ["What outcomes are most important to me?", "What trade-offs am I willing or not willing to make?", "What do I want to learn before deciding?"],
  },
] as const;

export function HormoneDecisionFactors(): React.ReactElement {
  return (
    <section id="decision-factors" className="relative overflow-hidden bg-chalk text-ink">
      <div className="mx-auto max-w-[90rem] px-6 pt-14 sm:px-10 lg:pt-16 lg:pl-[3.5rem]">
        <div className="grid gap-6 lg:grid-cols-[55fr_45fr] lg:items-center">
          <h2 className="font-heading text-[clamp(2.8rem,5.6vw,5.1rem)] leading-[0.95] font-bold tracking-[-0.035em] text-navy">
            Goals And
            <br />
            Decision Factors
          </h2>
          <p className="relative max-w-[26rem] px-6 py-2 text-base leading-snug text-ink/85">
            <TallBracket className="absolute inset-y-0 left-0 w-2.5 text-silver" />
            Prepare questions that help you have a responsible conversation with your provider. Use these topics to guide what matters most to you.
            <TallBracket side="right" className="absolute inset-y-0 right-0 w-2.5 text-silver" />
          </p>
        </div>
      </div>

      <div className="relative mt-8 lg:mt-4">
        <div className="absolute inset-y-0 left-0 hidden w-[26%] lg:block">
          <Image src="/images/pages/hormone-decision-reception-v3.png" alt="Conceptual bright clinic reception with a slatted walnut desk" fill sizes="26vw" className="object-cover object-[20%_center]" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-chalk" />
        </div>
        <ol className="relative mx-auto grid max-w-[90rem] gap-4 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:gap-3 lg:pr-16 lg:pl-[22%]">
          {FACTOR_PANELS.map((panel) => (
            <li key={panel.title} className={`relative ${panel.lift}`}>
              <div className="relative bg-[#ecebe7] px-5 pt-8 pb-8 shadow-[0_14px_30px_rgb(16_30_51/0.12)] lg:min-h-[19rem]">
                <MiniStairs className="absolute top-4 right-5 scale-150 text-royal" />
                <h3 className="font-heading text-2xl font-bold text-navy">{panel.title}</h3>
                <ul className="mt-3 space-y-2.5">
                  {panel.questions.map((question) => (
                    <li key={question} className="relative pl-4 text-xs leading-snug text-ink/80">
                      <TallBracket className="absolute top-0.5 left-0 h-4 w-1 text-royal" />
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
              <div aria-hidden className="flex h-10 items-start">
                <span className="block h-full flex-1 bg-gradient-to-b from-[#dedbd4] to-[#d2cec6]" />
                <span className="-mt-14 block h-24 w-[40%] bg-gradient-to-b from-[#36383c] to-[#1d1f22]" />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-4 px-6 pt-6 pb-10 text-sm sm:px-10 lg:pl-[3.5rem]">
        <p className="relative max-w-[18rem] pl-5 leading-snug">
          <TallBracket className="absolute inset-y-0 left-0 w-2 text-royal" />
          Choose{" "}
          <Link href="/about" className="font-semibold text-royal hover:underline">
            /about
          </Link>{" "}
          to learn more about our approach and Richmond clinic.
        </p>
        <p className="relative max-w-[16rem] px-5 leading-snug">
          <TallBracket className="absolute inset-y-0 left-0 w-2 text-royal" />
          Choose{" "}
          <Link href="/book" className="font-semibold text-royal hover:underline">
            /book
          </Link>{" "}
          when you’re ready to take the next step.
          <TallBracket side="right" className="absolute inset-y-0 right-0 w-2 text-royal" />
        </p>
      </div>
    </section>
  );
}
