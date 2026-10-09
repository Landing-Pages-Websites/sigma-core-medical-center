import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

type FaqRow = { question: string; answer: string; action: { label: string; href?: string } };

const FAQ_ROWS: readonly FaqRow[] = [
  {
    question: "Who is this site for?",
    answer: "This site is for individuals seeking clear, trustworthy information about our approach to nerve health and human performance in the Richmond, Virginia area.",
    action: { label: "Check booking status", href: "/book" },
  },
  {
    question: "Do you diagnose neuropathy?",
    answer: "This website does not diagnose conditions. It offers general information only. Provider and evaluation details are unavailable.",
    action: { label: "Contact status", href: "/contact" },
  },
  {
    question: "Is online booking available?",
    answer: "Online scheduling is not yet available. Appointment and follow-up details have not been confirmed.",
    action: { label: "Check booking status", href: "/book" },
  },
  {
    question: "Where is your clinic located?",
    answer: "Sigma Core serves the Richmond area. Confirmed address and contact details are unavailable.",
    action: { label: "Contact status", href: "/contact" },
  },
  {
    question: "Why aren’t treatment details listed?",
    answer: "Treatment and provider details are not yet available. This page does not establish eligibility for care.",
    action: { label: "Terms status" },
  },
];

const ACTION_CLASS = "flex h-full w-full min-w-0 max-w-full items-center justify-center gap-3 px-3 py-3 text-base font-semibold whitespace-normal text-royal transition-colors hover:text-navy sm:text-lg focus-visible:outline-2 focus-visible:outline-offset-[-4px]";

export function NeuropathyFaq(): React.ReactElement {
  return (
    <section id="faq" className="relative overflow-hidden bg-navy text-white">
      <div className="mx-auto max-w-[90rem] px-6 pt-14 sm:px-10 lg:pt-14 lg:pl-[3.5rem]">
        <div className="grid gap-8 lg:grid-cols-[42fr_58fr]">
          <div>
            <h2 className="flex items-center gap-4 font-heading text-[clamp(4.5rem,9vw,8.4rem)] leading-[0.8] font-bold tracking-[-0.05em]">
              <TallBracket className="h-24 w-5 text-royal sm:h-28" /> Faq
              <TallBracket side="right" className="ml-auto h-24 w-5 text-royal sm:h-28 lg:mr-10" />
            </h2>
            <p className="mt-6 max-w-[24rem] text-lg leading-snug text-white/90">Clear answers to common questions so you can take the next right step with confidence.</p>
          </div>
          <div className="relative min-h-52 lg:min-h-0">
            <div className="absolute inset-0 lg:[clip-path:polygon(18%_0,100%_0,94%_100%,0_100%)]">
              <Image src="/images/pages/neuropathy-faq-lobby-v2.png" alt="Conceptual clinic reception with a lounge and glass office" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-[30%_center]" />
              <Image src="/images/shared/logo.png" alt="" width={240} height={65} className="absolute top-[18%] left-[24%] h-auto w-[30%] drop-shadow-lg" />
            </div>
          </div>
        </div>

        <ul className="mt-5 space-y-2">
          {FAQ_ROWS.map((row) => (
            <li key={row.question} className="grid bg-[#ecebe7] text-navy sm:grid-cols-[minmax(14rem,0.9fr)_1.6fr_14rem] sm:[clip-path:polygon(0_0,98%_0,100%_50%,98%_100%,0_100%)]">
              <h3 className="flex items-center gap-4 px-5 pt-4 font-heading text-xl leading-tight font-bold sm:py-4 sm:text-[1.35rem]">
                <TallBracket className="h-8 w-2 shrink-0 text-royal" /> {row.question}
              </h3>
              <p className="px-5 py-3 pl-11 text-sm leading-snug text-ink/85 sm:py-4 sm:pl-0">{row.answer}</p>
              <div className="min-h-14 min-w-0 border-t border-royal/30 sm:border-t-0 sm:border-l sm:pr-6">
                {row.action.href ? (
                  <Link href={row.action.href} className={ACTION_CLASS}>
                    <span className="min-w-0 [overflow-wrap:break-word]">{row.action.label}</span> <ArrowRight size={20} aria-hidden className="shrink-0" />
                  </Link>
                ) : (
                  <PolicyLink label={<><span className="min-w-0 [overflow-wrap:break-word]">{row.action.label}</span> <ArrowRight size={20} aria-hidden className="shrink-0" /></>} className={ACTION_CLASS} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 bg-royal">
        <div className="mx-auto flex max-w-[90rem] items-center gap-5 px-6 py-6 sm:px-10 lg:pl-[3.5rem]">
          <span aria-hidden className="h-6 w-6 shrink-0 border-t-2 border-l-2 border-white [transform:skewX(-30deg)]" />
          <p className="text-base">
            <strong className="font-semibold">Good questions lead to better decisions.</strong> Explore the available general information.
          </p>
          <span aria-hidden className="ml-auto hidden gap-1 lg:flex">
            {[0, 1, 2, 3, 4].map((slot) => (
              <span key={slot} className="block h-8 w-10 border border-white/80 [transform:skewX(-35deg)]" />
            ))}
            <span className="block h-8 w-24 border border-white/80 [transform:skewX(-35deg)]" />
          </span>
        </div>
      </div>
    </section>
  );
}
