import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MessageSquareText, Route } from "lucide-react";
import { BracketMark, SteppedBars } from "@/components/variant-b/motifs";

type BookingCtaProps = {
  title?: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  /** Opt-in override for the three icon bullets below the CTA button. */
  points?: readonly [string, string, string];
};

const POINT_ICONS = [MessageSquareText, Route, CalendarDays];

export function BookingCta({
  title = "Book an appointment",
  body = "Let’s talk about your goals and questions. We’re here to listen and help you choose an informed next step.",
  image = "/images/shared/reception-2.png",
  imageAlt = "Sigma Core Medical Center interior",
  points = ["Start a conversation", "Consider your path", "Plan next steps"],
}: BookingCtaProps): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="mx-auto grid max-w-[90rem] lg:grid-cols-[44fr_56fr]">
        <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:py-20">
          <SteppedBars className="absolute top-12 right-8 items-end opacity-80" />
          <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-focus uppercase"><BracketMark /> Ready to talk</p>
          <h2 className="mt-4 text-4xl leading-none font-semibold tracking-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-lg text-lg text-white/75">{body}</p>
          <Link href="/book" className="mt-7 inline-flex h-12 items-center gap-3 bg-action px-6 font-semibold text-white transition-colors hover:bg-hover">
            Book an Appointment <ArrowRight size={18} aria-hidden />
          </Link>
          <div className="mt-9 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
            {points.map((point, index) => {
              const Icon = POINT_ICONS[index % POINT_ICONS.length];
              return (
                <span key={point} className="flex items-center gap-2"><Icon size={18} /> {point}</span>
              );
            })}
          </div>
        </div>
        <div className="relative min-h-80 lg:min-h-[31rem] lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
          <div aria-hidden className="absolute right-0 bottom-0 h-24 w-3/5 bg-action/90 [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]" />
        </div>
      </div>
    </section>
  );
}
