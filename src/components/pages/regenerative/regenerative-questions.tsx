import Image from "next/image";
import Link from "next/link";
import { MiniStairs, TallBracket } from "@/components/pages/shared/page-motifs";

const QUESTION_CARDS = [
  { title: "What are my goals?", body: "What do I want to improve or preserve, and how will we measure success?" },
  { title: "What is the evidence?", body: "What evidence supports this for people like me, and is it for the intended use I’m considering?" },
  { title: "What are the alternatives?", body: "What are reasonable alternatives—including doing nothing—and how do they compare?" },
  { title: "What is the uncertainty?", body: "What are the known benefits and risks, and what is not yet known about outcomes?" },
  { title: "What comes next?", body: "How will we decide if this is appropriate, what is the follow-up plan, and what happens if it is not?" },
] as const;

const PATH_BUTTONS = [
  { href: "/about", caption: "Learn about Sigma Core", tone: "border border-royal bg-white/90 text-royal hover:bg-white" },
  { href: "/book", caption: "Book a consultation", tone: "bg-royal text-white hover:bg-royal-hover" },
] as const;

export function RegenerativeQuestions(): React.ReactElement {
  return (
    <section id="questions" className="relative overflow-hidden bg-chalk text-ink">
      <div className="mx-auto max-w-[90rem] px-6 pt-14 sm:px-10 lg:pt-14 lg:pl-[3.5rem]">
        <MiniStairs className="absolute top-12 right-[6%] hidden scale-[2] text-royal lg:inline-flex" />
        <h2 className="font-heading text-[clamp(2.6rem,5.2vw,4.8rem)] leading-none font-bold tracking-[-0.03em] text-navy">Questions For A Consultation</h2>
        <p className="mt-4 max-w-[46rem] text-lg leading-snug font-semibold text-navy/90">
          Prompt questions about the exact product/procedure, FDA status, evidence for the intended use, responsible provider and training, benefits, risks, alternatives, costs, follow-up, and what happens if it is not appropriate.
        </p>
        <ol className="relative z-10 mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {QUESTION_CARDS.map((card) => (
            <li key={card.title} className="relative bg-[#e9e6e0] px-5 pt-8 pb-8 shadow-[0_12px_28px_rgb(16_30_51/0.1)]">
              <MiniStairs className="absolute top-3 right-5 scale-150 text-royal" />
              <h3 className="relative pl-5 font-heading text-2xl leading-tight font-bold text-navy">
                <TallBracket className="absolute top-0 left-0 h-14 w-2.5 text-silver" />
                {card.title}
              </h3>
              <p className="mt-3 pl-5 text-sm leading-snug text-ink/75">{card.body}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="relative -mt-4 h-[17rem] lg:h-[15rem]">
        <div className="absolute inset-0">
          <Image src="/images/pages/hormone-decision-reception-v3.png" alt="Conceptual bright clinic reception with slatted walnut desk" fill sizes="100vw" className="object-cover object-[50%_70%]" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-chalk via-chalk/20 to-transparent" />
        </div>
        <div className="relative mx-auto flex h-full max-w-[90rem] flex-col items-end justify-end gap-4 px-6 pb-4 sm:px-10 lg:pl-[3.5rem]">
          <p className="flex items-center gap-3 bg-chalk/85 px-3 py-2 text-xs text-ink/80">
            <TallBracket className="h-8 w-1.5 text-silver" /> General website information
            <br className="hidden sm:block" /> is not medical advice.
            <TallBracket side="right" className="h-8 w-1.5 text-silver" />
          </p>
          <div className="flex flex-wrap gap-3 self-center lg:mr-[18%]">
            {PATH_BUTTONS.map((button) => (
              <Link
                key={button.href}
                href={button.href}
                className={`${button.tone} inline-flex h-14 min-w-56 items-center gap-6 pr-12 pl-5 transition-colors [clip-path:polygon(0_0,90%_0,100%_100%,0_100%)]`}
              >
                <span className="font-heading text-2xl font-bold">{button.href}</span>
                <span className="max-w-[6rem] text-xs leading-tight">{button.caption}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden className="h-6 bg-navy" />
    </section>
  );
}
