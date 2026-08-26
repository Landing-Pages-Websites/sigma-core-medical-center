import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Approved Homepage Directions | Sigma Core Medical Center",
  description:
    "Internal review chooser for the two approved Sigma Core Medical Center homepage directions: Life in Motion and The Forward Standard.",
};

type DirectionCard = {
  href: string;
  kicker: string;
  name: string;
  serif: boolean;
  thesis: string;
  cta: string;
};

const DIRECTIONS: DirectionCard[] = [
  {
    href: "/variant-a",
    kicker: "Direction A",
    name: "Life in Motion",
    serif: true,
    thesis:
      "Warm editorial photography, calm navy and mineral fields, and a humane Playfair-led voice guiding an informed next step.",
    cta: "View Direction A",
  },
  {
    href: "/variant-b",
    kicker: "Direction B",
    name: "The Forward Standard",
    serif: false,
    thesis:
      "Kinetic architectural composition: electric fields, stepped bars, squared brackets, and authentic clinic photography cut into decisive modules.",
    cta: "View Direction B",
  },
];

function DirectionPreviewA(): React.ReactElement {
  return (
    <div className="relative h-56 overflow-hidden sm:h-64">
      <Image
        src="/images/variant-a/lifestyle-walking-path.jpg"
        alt="Direction A preview: editorial photograph of an adult walking a tree-lined path"
        fill
        sizes="(min-width: 1024px) 40rem, 100vw"
        className="object-cover transition-transform duration-200 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div aria-hidden className="absolute right-6 bottom-6 h-0.5 w-24 bg-electric" />
    </div>
  );
}

function DirectionPreviewB(): React.ReactElement {
  return (
    <div aria-hidden className="relative h-56 overflow-hidden bg-action sm:h-64">
      <span className="absolute -bottom-5 left-4 text-[5.5rem] leading-none font-semibold tracking-tighter text-white/10 uppercase select-none">
        Forward
      </span>
      <span className="absolute top-8 left-8 flex flex-col gap-1.5">
        <span className="h-1.5 w-16 bg-surface" />
        <span className="ml-3 h-1.5 w-12 bg-surface/80" />
        <span className="ml-6 h-1.5 w-8 bg-surface/60" />
      </span>
      <span className="absolute top-6 right-8 h-12 w-12 border-t-4 border-r-4 border-surface" />
      <span
        className="absolute right-0 bottom-0 h-24 w-40 bg-ink"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />
    </div>
  );
}

export default function ChooserPage(): React.ReactElement {
  return (
    <main className="flex min-h-screen flex-col bg-ink">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 lg:py-20">
        <header className="text-center">
          <Image
            src="/images/shared/logo.png"
            alt="Sigma Core Medical Center"
            width={330}
            height={90}
            priority
            className="mx-auto h-14 w-auto sm:h-16"
          />
          <p className="mt-8 text-sm font-semibold tracking-[0.22em] text-focus uppercase">
            Internal design review
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Two approved homepage directions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
            Both directions share the same approved content, brand palette, and typography. They
            differ deliberately in composition, imagery treatment, and motif language.
          </p>
        </header>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {DIRECTIONS.map((direction) => (
            <Link
              key={direction.href}
              href={direction.href}
              className="group overflow-hidden rounded-md bg-charcoal transition-transform duration-200 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {direction.serif ? <DirectionPreviewA /> : <DirectionPreviewB />}
              <div className="p-7">
                <p className="text-sm font-semibold tracking-[0.18em] text-focus uppercase">
                  {direction.kicker}
                </p>
                <h2
                  className={`mt-2 text-3xl font-semibold tracking-tight text-white ${direction.serif ? "font-display" : ""}`}
                >
                  {direction.name}
                </h2>
                <p className="mt-3 text-base text-white/70">{direction.thesis}</p>
                <span className="mt-6 inline-flex min-h-12 items-center gap-2 font-semibold text-focus group-hover:underline group-hover:underline-offset-4">
                  {direction.cta} <ArrowRight size={18} aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-14 text-center text-sm text-white/50">
          Sigma Core Medical Center · Richmond, Virginia area · Review build — not a public page
        </p>
      </div>
    </main>
  );
}
