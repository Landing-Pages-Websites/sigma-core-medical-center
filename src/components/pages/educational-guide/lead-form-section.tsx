import { ArrowRight, LockKeyhole } from "lucide-react";
import { PendingAction } from "@/components/shared/pending-action";
import { MiniStairs, TallBracket } from "@/components/pages/shared/page-motifs";
import { PlinthCards } from "@/components/pages/shared/plinth-cards";
import { PolicyLink } from "@/components/pages/shared/policy-link";
import { PENDING } from "@/content/site";

export function LeadFormSection(): React.ReactElement {
  return (
    <section id="form" className="relative overflow-hidden bg-chalk text-ink">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-6 pt-14 pb-10 sm:px-10 lg:grid-cols-[57fr_43fr] lg:gap-8 lg:pt-16 lg:pb-12 lg:pl-[3.5rem]">
        <div>
          <MiniStairs className="scale-150 text-royal" />
          <h2 className="mt-3 font-heading text-[clamp(3rem,6.6vw,6rem)] leading-none font-bold tracking-[-0.035em] text-navy">Educational guide status</h2>
          <p className="mt-4 max-w-[34rem] text-lg leading-snug text-ink/85">
            The educational guide and its delivery details are pending approval. This page cannot accept resource requests yet.
          </p>
          <p className="mt-2 text-lg leading-snug font-semibold text-navy">No contact details are requested on this page.</p>
          <PendingAction
            label={
              <>
                Get the Educational Guide <ArrowRight size={22} aria-hidden />
              </>
            }
            title={PENDING.guide.title}
            message={PENDING.guide.message}
            className="mt-6 inline-flex h-14 items-center gap-5 bg-royal px-7 text-lg font-semibold text-white transition-colors hover:bg-royal-hover"
          />
          <p className="mt-4 max-w-[26rem] text-xs leading-snug text-ink/75">
            Opening the status message does not submit contact details or subscribe you to email follow-up. Privacy and consent details are pending approval.
          </p>
          <PolicyLink href="/privacy" label={<>View privacy policy status →</>} className="mt-3 text-xs font-semibold text-royal hover:underline" />
          <PlinthCards className="mt-8 lg:-mr-6" />
        </div>
        <ComingSoonPanel />
      </div>
      <div className="bg-slate">
        <p className="mx-auto flex max-w-[90rem] items-center justify-end gap-3 px-6 py-5 text-xs text-white/75 sm:px-10">
          <TallBracket className="h-6 w-1.5 text-silver" /> General website information is not medical advice.
          <TallBracket side="right" className="h-6 w-1.5 text-silver" />
        </p>
      </div>
    </section>
  );
}

function ComingSoonPanel(): React.ReactElement {
  return (
    <div className="relative flex items-center bg-[#ebe8e2] px-10 py-16 text-center shadow-[inset_0_0_0_1px_rgb(16_30_51/0.06)] lg:my-6">
      <TallBracket className="absolute top-8 bottom-24 -left-4 w-4 text-silver" />
      <TallBracket side="right" className="absolute -right-3 bottom-0 h-1/3 w-4 border-t-0 text-silver" />
      <MiniStairs className="absolute top-6 right-6 scale-150 text-royal" />
      <div className="mx-auto max-w-[24rem]">
        <span className="mx-auto flex w-fit items-center gap-3 text-navy">
          <TallBracket className="h-16 w-3 text-silver" />
          <LockKeyhole size={34} strokeWidth={2} aria-hidden />
          <TallBracket side="right" className="h-16 w-3 text-silver" />
        </span>
        <h3 className="mt-5 font-heading text-3xl font-bold text-navy">Resource requests unavailable</h3>
        <p className="mt-3 text-sm leading-snug text-ink/80">
          The educational guide is not available.
          <br />
          Resource requests are not accepted on this page.
        </p>
        <p className="mt-5 text-sm leading-snug text-ink/60">
          The resource, delivery workflow, requested fields, consent language and any follow-up details must be approved before a request form is offered.
        </p>
      </div>
    </div>
  );
}
