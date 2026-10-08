import Image from "next/image";
import { ArrowRight, CalendarDays, FileText, Megaphone, ShieldCheck } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

const APPROVED_LINKS = [
  { label: "Privacy Policy", icon: ShieldCheck, href: "/privacy" },
  { label: "Notice of Privacy Practices", icon: FileText, href: "/notice-of-privacy-practices" },
] as const;

const WORKFLOWS = [
  { title: "General Marketing", icon: Megaphone, body: "We may send updates about resources, education, or clinic news that may be of interest." },
  { title: "Patient Intake", icon: CalendarDays, body: "We use your information only to respond to inquiries and support scheduling requests." },
] as const;

export function PrivacyNote(): React.ReactElement {
  return (
    <section id="faq" className="relative overflow-hidden bg-slate text-white">
      <div className="grid lg:grid-cols-[46fr_54fr]">
        <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-14 lg:pb-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <h2 className="font-heading text-[clamp(2.8rem,5.4vw,4.9rem)] leading-none font-bold tracking-[-0.035em]">Privacy Note</h2>
          <div className="relative mt-5 max-w-[30rem] px-6 py-1">
            <TallBracket className="absolute inset-y-0 left-0 w-2 text-silver" />
            <p className="text-base leading-snug text-white/88">
              We use your information only to operate our website, respond to inquiries, and support scheduling. We do not sell or share personal information.
            </p>
            <TallBracket side="right" className="absolute inset-y-0 -right-4 w-2 text-silver" />
          </div>
          <div className="mt-8 grid max-w-[38rem] gap-6 bg-[#2b3037] px-6 py-6 sm:grid-cols-[1fr_1fr] lg:[clip-path:polygon(0_0,94%_0,100%_50%,94%_100%,0_100%)] lg:pr-14">
            <div>
              <p className="text-xs font-bold tracking-[0.08em] uppercase">Approved links</p>
              <ul className="mt-3 divide-y divide-white/20">
                {APPROVED_LINKS.map(({ label, icon: Icon, href }) => (
                  <li key={label} className="py-2.5">
                    <PolicyLink
                      href={href}
                      label={
                        <>
                          <Icon size={22} strokeWidth={1.5} className="text-[#4f9bf0]" aria-hidden /> {label}
                          <ArrowRight size={16} className="text-[#4f9bf0]" aria-hidden />
                        </>
                      }
                      className="flex items-center gap-3 text-sm text-white/90 hover:text-white"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-white/20 sm:border-l sm:pl-6">
              <p className="text-xs font-bold tracking-[0.08em] text-[#e08a3c] uppercase">Resource pending</p>
              <p className="mt-2 text-sm leading-snug text-white/80">
                This educational resource is pending customer approval. Details are not available yet and do not imply future availability.
              </p>
            </div>
          </div>
        </div>
        <WorkflowsPanel />
      </div>
    </section>
  );
}

function WorkflowsPanel(): React.ReactElement {
  return (
    <div className="relative grid lg:grid-cols-[62fr_38fr] lg:py-8">
      <StairSteps count={6} direction="up" className="absolute bottom-16 -left-28 z-20 hidden text-[0.7rem] lg:flex" />
      <div className="relative z-10 bg-royal px-6 py-10 sm:px-10 lg:py-10 lg:pr-6 lg:pl-[28%] lg:[clip-path:polygon(24%_0,100%_0,100%_100%,0_100%,0_60%)]">
        <p className="flex items-center gap-2 text-sm text-white/85">
          <TallBracket className="h-5 w-1.5 text-white/80" /> Separate Workflows
        </p>
        <h3 className="mt-2 font-heading text-3xl leading-tight font-bold">
          Two distinct paths.
          <br />
          One clear purpose.
        </h3>
        <TallBracket side="right" className="absolute top-12 right-4 h-20 w-2 text-white/80" />
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {WORKFLOWS.map(({ title, icon: Icon, body }) => (
            <div key={title} className="flex gap-3 border-white/30 sm:last:border-l sm:last:pl-4">
              <TallBracket className="h-12 w-2 text-white/80" />
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Icon size={20} strokeWidth={1.5} aria-hidden /> {title}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-white/85">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs leading-snug text-white/85">
          To change communication preferences or learn more,
          <br />
          visit our Privacy Policy or Notice of Privacy Practices.
        </p>
      </div>
      <div className="relative min-h-60 lg:-ml-10">
        <Image src="/images/pages/hormone-booking-lobby-v3.png" alt="Conceptual clinic reception with walnut paneling and lounge seating" fill sizes="(min-width: 1024px) 22vw, 100vw" className="object-cover object-[70%_center]" />
      </div>
    </div>
  );
}
