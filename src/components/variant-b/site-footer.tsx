import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FOOTER, PENDING } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { footerLinkB, primaryButtonB } from "@/components/variant-b/buttons";

function WalnutRail(): React.ReactElement {
  return (
    <div
      aria-hidden
      data-b-reveal="right"
      className="absolute top-0 right-0 hidden h-8 w-64 overflow-hidden sm:block xl:top-[7.7rem] xl:h-[2.9rem] xl:w-[35%]"
    >
      <Image
        src="/images/variant-b/walnut-texture.jpg"
        alt=""
        fill
        sizes="(min-width: 1280px) 35vw, 16rem"
        className="object-cover"
      />
      <span className="absolute inset-y-0 left-[74.5%] w-[12%] bg-gradient-to-r from-silver via-white/85 to-silver" />
    </div>
  );
}

export function SiteFooterB(): React.ReactElement {
  return (
    <footer id="footer" aria-label="Footer" className="relative overflow-hidden bg-ink">
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
      <div className="relative w-full px-6 py-14 sm:px-10 lg:px-12 lg:py-20 xl:min-h-[29.6rem] xl:px-0 xl:py-0">
        <div className="grid items-center gap-10 text-center lg:grid-cols-[31fr_29fr_40fr] lg:text-left xl:contents">
          <div data-b-reveal="left" className="relative flex min-h-36 items-center justify-center border border-silver/70 px-8 py-5 xl:absolute xl:top-[7.5rem] xl:left-[3.3%] xl:h-36 xl:min-h-0 xl:w-[25.2%]">
            <p className="text-base font-semibold tracking-[0.06em] text-silver sm:text-lg xl:text-xl xl:tracking-[0.1em]">
              SUPPLIED LOGO RESERVED
            </p>
          </div>

          <span
            aria-hidden
            className="absolute top-[5.1rem] left-[28.8%] hidden h-[13.4rem] w-7 border-y-4 border-r-4 border-silver xl:block"
          />

          <div data-b-reveal="up" data-b-delay="1" className="xl:absolute xl:top-[11rem] xl:left-[34%]">
            <p className="text-xl leading-tight font-semibold text-white xl:text-[1.6rem] xl:font-normal">
              {FOOTER.tagline}
            </p>
            <p className="mt-2 text-base text-silver xl:text-xl">{FOOTER.location}</p>
          </div>

          <PendingAction
            label={
              <>
                {FOOTER.cta} <ArrowRight className="xl:size-7" size={18} aria-hidden />
              </>
            }
            title={PENDING.booking.title}
            message={PENDING.booking.message}
            className={`${primaryButtonB} w-full lg:ml-auto lg:max-w-sm xl:absolute xl:top-[10.5rem] xl:right-[2.6%] xl:min-h-[4.85rem] xl:max-w-none xl:w-[31%] xl:text-[1.5rem]`}
          />
        </div>

        <nav
          aria-label="Utility"
          data-b-reveal="up"
          data-b-delay="2"
          className="mt-12 border-t border-white/30 pt-4 xl:absolute xl:top-[20.1rem] xl:right-[2.6%] xl:left-[2.9%] xl:mt-0 xl:pt-2"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-1">
            {FOOTER.nav.map((item, index) => (
              <li key={item} className="flex items-center gap-7">
                <PendingAction
                  label={item}
                  title={PENDING.page.title}
                  message={PENDING.page.message}
                  className={footerLinkB}
                />
                {index < FOOTER.nav.length - 1 ? (
                  <span aria-hidden className="hidden h-7 w-px bg-silver/60 sm:block" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <p data-b-reveal="up" data-b-delay="3" className="mt-4 text-center text-sm text-white/65 sm:text-base xl:absolute xl:top-[25rem] xl:right-0 xl:left-0 xl:mt-0">
          {FOOTER.disclaimer}
        </p>
      </div>
    </footer>
  );
}
