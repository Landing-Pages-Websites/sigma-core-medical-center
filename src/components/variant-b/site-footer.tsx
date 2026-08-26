import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FOOTER, PENDING } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { footerLinkB, primaryButtonB } from "@/components/variant-b/buttons";

function WalnutRail(): React.ReactElement {
  return (
    <div aria-hidden className="absolute inset-y-0 right-0 hidden w-5 overflow-hidden sm:block">
      <Image
        src="/images/variant-b/walnut-texture.jpg"
        alt=""
        fill
        sizes="1.25rem"
        className="scale-[2.4] rotate-90 object-cover"
      />
    </div>
  );
}

export function SiteFooterB(): React.ReactElement {
  return (
    <footer id="footer" aria-label="Footer" className="relative bg-ink">
      <WalnutRail />
      <div aria-hidden className="relative h-3 w-full overflow-hidden sm:hidden">
        <Image
          src="/images/variant-b/walnut-texture.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div aria-hidden className="absolute top-0 left-1/2 hidden h-2 w-16 -translate-x-1/2 bg-silver sm:block" />
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:pr-14">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="relative border border-silver/40 px-8 py-4">
            <span aria-hidden className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-electric" />
            <span aria-hidden className="absolute -right-px -bottom-px h-4 w-4 border-r-2 border-b-2 border-electric" />
            <Image
              src="/images/shared/logo.png"
              alt="Sigma Core Medical Center"
              width={240}
              height={65}
              className="h-12 w-auto"
            />
          </div>
          <div>
            <p className="text-xl font-semibold text-white">{FOOTER.tagline}</p>
            <p className="mt-1 text-base text-silver">{FOOTER.location}</p>
          </div>
          <PendingAction
            label={
              <>
                {FOOTER.cta} <ArrowRight size={18} aria-hidden />
              </>
            }
            title={PENDING.booking.title}
            message={PENDING.booking.message}
            className={primaryButtonB}
          />
        </div>
        <nav aria-label="Utility" className="mt-10 border-t border-white/10 pt-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-1">
            {FOOTER.nav.map((item) => (
              <li key={item}>
                <PendingAction
                  label={item}
                  title={PENDING.page.title}
                  message={PENDING.page.message}
                  className={footerLinkB}
                />
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-4 text-center text-base text-white/60">{FOOTER.disclaimer}</p>
      </div>
    </footer>
  );
}
