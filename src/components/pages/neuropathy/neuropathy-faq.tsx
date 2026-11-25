import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

type FaqRow = { question: string; answer: string; action: { label: string; href?: string } };

const FAQ_ROWS: readonly FaqRow[] = [
  {
    question: "What makes your Advanced Neuropathy Protocol different?",
    answer: "Our Advanced Neuropathy Protocol brings together multiple therapeutic approaches rather than relying on one treatment alone. We emphasize individualized care, modern technologies, and attention to your symptoms, health history, and clinical findings. During your consultation, we'll explain how our approach works and whether additional evaluation may be appropriate.",
    action: { label: "Discover Our Protocol", href: "#what-to-expect" },
  },
  {
    question: "What if medications or previous treatments haven't helped me?",
    answer: "Many people explore additional care options when their current approach hasn't provided the improvement they hoped for. Previous treatment doesn't automatically rule out other options. The first step is understanding your medical history, what you've already tried, and whether our services may be appropriate.",
    action: { label: "Request a Free Consultation", href: "https://go.sigmacoremedicalcenter.com/" },
  },
  {
    question: "Can neuropathy symptoms actually improve?",
    answer: "That depends on the underlying cause, severity, duration, and other health factors. Some causes of neuropathy are treatable, and certain symptoms may improve with appropriate care. Other conditions require ongoing management. Our goal is to help you understand the available options without making promises about individual outcomes.",
    action: { label: "Explore Our Approach", href: "/about" },
  },
  {
    question: "What types of neuropathy do you work with?",
    answer: "Peripheral neuropathy can develop for many different reasons, including diabetes, nutritional deficiencies, medication effects, and other medical conditions. Different causes may require different approaches. We begin by learning about your history and determining whether our clinical services may be appropriate for your situation.",
    action: { label: "Ask About Your Symptoms", href: "/contact" },
  },
  {
    question: "What happens during my free consultation?",
    answer: "We'll begin by discussing your symptoms, concerns, previous treatments, and what you're hoping to improve. You'll have an opportunity to learn about Sigma Core's approach and ask questions about the next steps. Any additional examination or diagnostic services will be explained separately when applicable.",
    action: { label: "Request My Free Consultation", href: "https://go.sigmacoremedicalcenter.com/" },
  },
];

const ACTION_CLASS = "flex h-full w-full min-w-0 max-w-full items-center justify-center gap-3 px-3 py-3 text-base font-semibold whitespace-normal text-royal transition-colors hover:text-navy sm:text-lg focus-visible:outline-2 focus-visible:outline-offset-[-4px]";

export function NeuropathyFaq(): React.ReactElement {
  return (
    <section data-mega-section="faq" id="faq" className="relative overflow-hidden bg-navy text-white">
      <div className="mx-auto max-w-[90rem] px-6 pt-14 sm:px-10 lg:pt-14 lg:pl-[3.5rem]">
        <div className="grid gap-8 lg:grid-cols-[42fr_58fr]">
          <div>
            <h2 className="flex items-start gap-4 font-heading text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.03em]">
              <TallBracket className="h-20 w-4 shrink-0 text-royal sm:h-24" /> Questions About Our Approach to Neuropathy?
            </h2>
            <p className="mt-6 max-w-[28rem] text-lg leading-snug text-white/90">If you&apos;ve tried other treatments without the improvement you hoped for, you&apos;re probably wondering what makes Sigma Core different.</p>
          </div>
          <div className="relative min-h-52 lg:min-h-0">
            <div className="absolute inset-0 lg:[clip-path:polygon(18%_0,100%_0,94%_100%,0_100%)]">
              <Image src="/images/pages/neuropathy-faq-lobby-v2.webp" alt="Conceptual clinic reception with a lounge and glass office" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-[30%_center]" />
              <Image src="/images/shared/logo.webp" alt="" width={240} height={65} className="absolute top-[18%] left-[24%] h-auto w-[30%] drop-shadow-lg" />
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
            <strong className="font-semibold">Still Have Questions? The Best Place to Start Is a Conversation.</strong>
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
