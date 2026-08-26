import Image from "next/image";
import { FOOTER, PENDING } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { footerLinkA, primaryButtonA } from "@/components/variant-a/buttons";

export function SiteFooterA(): React.ReactElement {
  return (
    <footer id="footer" aria-label="Footer" className="bg-ink">
      <div className="relative h-28 w-full lg:h-36">
        <Image
          src="/images/shared/waiting-room.png"
          alt="Row of seats in the Sigma Core waiting room"
          fill
          sizes="100vw"
          className="object-cover object-[50%_62%]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:py-12">
        <div aria-hidden className="mx-auto mb-8 h-px w-24 bg-silver/70 lg:mx-0" />
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <Image
            src="/images/shared/logo.png"
            alt="Sigma Core Medical Center"
            width={264}
            height={72}
            className="h-14 w-auto lg:h-16"
          />
          <div>
            <p className="font-display text-xl font-medium text-white">{FOOTER.tagline}</p>
            <p className="mt-1 text-base text-white/60">{FOOTER.location}</p>
          </div>
          <PendingAction
            label={FOOTER.cta}
            title={PENDING.booking.title}
            message={PENDING.booking.message}
            className={primaryButtonA}
          />
          <nav aria-label="Utility">
            <ul className="flex max-w-sm flex-wrap justify-center gap-x-6 lg:justify-end">
              {FOOTER.nav.map((item) => (
                <li key={item}>
                  <PendingAction
                    label={item}
                    title={PENDING.page.title}
                    message={PENDING.page.message}
                    className={footerLinkA}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-center text-base text-white/60 lg:text-left">{FOOTER.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
