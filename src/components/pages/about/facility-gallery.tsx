import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

export function FacilityGallery(): React.ReactElement {
  return (
    <section id="facility-gallery" className="relative overflow-hidden bg-chalk pt-14 pb-12 text-ink lg:pt-14 lg:pb-14">
      <div className="mx-auto grid max-w-[90rem] gap-8 px-6 sm:px-10 lg:grid-cols-[34fr_54fr_12fr] lg:gap-0 lg:pl-[3.5rem]">
        <div className="lg:pr-8">
          <h2 className="font-heading text-[clamp(2.8rem,5.2vw,4.8rem)] leading-none font-bold tracking-[-0.04em] text-navy">Facility Gallery</h2>
          <span aria-hidden className="mt-4 ml-14 block h-1 w-28 bg-royal" />
          <div className="relative mt-7 pl-8">
            <TallBracket className="absolute inset-y-0 left-0 w-4 text-royal" />
            <p className="max-w-[20rem] text-base leading-relaxed text-ink/85">
              Authentic views of the Sigma Core Medical Center in Richmond, Virginia. These images reflect our actual reception area and waiting room.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex h-12 items-center gap-8 bg-royal pr-10 pl-6 font-heading text-lg font-bold tracking-[0.04em] text-white uppercase transition-colors [clip-path:polygon(0_0,100%_0,92%_100%,0_100%)] hover:bg-royal-hover"
            >
              /Contact <ArrowRight size={22} aria-hidden />
            </Link>
          </div>
        </div>
        <div className="relative min-h-[18rem] sm:min-h-[24rem] lg:min-h-[27rem] lg:[clip-path:polygon(0_0,100%_0,100%_100%,6%_100%,0_92%)]">
          <Image src="/images/shared/reception-2.png" alt="Sigma Core reception desk beneath the illuminated wall sign" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[50%_40%]" />
        </div>
        <div className="relative hidden bg-navy lg:ml-4 lg:block lg:[clip-path:polygon(0_6%,100%_0,100%_100%,0_100%)]">
          <StairSteps count={5} direction="up" barClassName="bg-royal" className="absolute right-4 bottom-4 text-[0.6rem]" />
        </div>
      </div>

      <div className="mx-auto mt-3 grid max-w-[90rem] gap-3 px-6 sm:px-10 lg:grid-cols-[7fr_29fr_57fr] lg:gap-1.5 lg:pl-[3.5rem]">
        <div aria-hidden className="hidden bg-royal lg:block" />
        <div className="relative min-h-52 lg:min-h-64">
          <Image src="/images/shared/waiting-room.png" alt="Waiting room seating under the Sigma Core wall sign" fill sizes="(min-width: 1024px) 28vw, 100vw" className="object-cover object-[50%_45%]" />
        </div>
        <div className="relative min-h-52 lg:min-h-64">
          <Image src="/images/shared/reception-1.png" alt="Wide view of the Sigma Core reception area" fill sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover object-[50%_28%]" />
        </div>
      </div>
    </section>
  );
}
