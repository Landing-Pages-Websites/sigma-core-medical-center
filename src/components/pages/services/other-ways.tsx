import Image from "next/image";
import { CirclePlus, Flower2, Footprints, PersonStanding } from "lucide-react";

const SUPPORT_TILES = [
  { title: "Mobility Support", icon: PersonStanding, tone: "bg-royal" },
  { title: "Performance Optimization", icon: CirclePlus, tone: "bg-navy" },
  { title: "Active Life Support", icon: Footprints, tone: "bg-royal" },
  { title: "Wellness Pathways", icon: Flower2, tone: "bg-navy" },
] as const;

export function OtherWays(): React.ReactElement {
  return (
    <div className="relative -mt-14 bg-chalk pt-20 text-ink lg:-mt-16 lg:pt-16">
      <div className="mx-auto grid max-w-[90rem] items-stretch gap-8 px-6 pb-10 sm:px-10 lg:grid-cols-[15fr_58fr_27fr] lg:gap-6 lg:pb-0 lg:pl-[3.75rem] lg:pr-0">
        <div className="lg:self-center lg:pb-8">
          <p className="text-sm leading-snug font-bold tracking-[0.14em] uppercase">
            Other ways
            <br />
            we support you
          </p>
          <span aria-hidden className="mt-3 block h-1 w-10 bg-royal" />
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-2 lg:pb-8">
          {SUPPORT_TILES.map(({ title, icon: Icon, tone }) => (
            <li
              key={title}
              className={`${tone} flex min-h-36 flex-col items-center justify-center gap-3 px-6 py-5 text-center text-white sm:[clip-path:polygon(16%_0,100%_0,84%_100%,0_100%)] lg:min-h-40`}
            >
              <Icon size={38} strokeWidth={1.5} aria-hidden />
              <span className="max-w-[8rem] text-sm leading-tight font-semibold">{title}</span>
            </li>
          ))}
        </ul>
        <div className="relative min-h-52 lg:min-h-full">
          <Image src="/images/pages/neuropathy-orientation-lobby-v2.png" alt="Calm clinic reception and seating area" fill sizes="(min-width: 1024px) 27vw, 100vw" className="object-cover object-[30%_center]" />
        </div>
      </div>
    </div>
  );
}
