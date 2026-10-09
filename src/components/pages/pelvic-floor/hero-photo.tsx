import Image from "next/image";
import { PELVIC_PAGE } from "@/content/pages";
import { TallBracket } from "@/components/pages/shared/page-motifs";
import styles from "./hero.module.css";

export function PelvicHeroPhoto(): React.ReactElement {
  return (
    <div className={`${styles.photo} relative min-h-[26rem] sm:min-h-[32rem] lg:mt-24 lg:mb-0 lg:min-h-0`}>
      <div aria-hidden className="absolute top-0 left-[13%] hidden h-[58%] w-[56%] bg-[#d5cdbf] lg:block" />
      <div className="absolute inset-0 lg:top-[8%] lg:right-[7%] lg:left-[18%]">
        <Image src={PELVIC_PAGE.heroImage} alt={PELVIC_PAGE.heroAlt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-[62%_center]" />
      </div>
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[7%] bg-[#1d1f22] lg:block" />
      <div className="absolute bottom-0 left-0 hidden lg:flex h-[42%] w-[56%] items-end bg-[#2a2c30] p-6 lg:w-[52%] lg:[clip-path:polygon(0_0,62%_0,62%_30%,100%_30%,100%_100%,0_100%)]">
        <p className="relative mb-4 ml-2 pl-6 font-display text-lg leading-snug text-white/85 italic">
          <TallBracket className="absolute inset-y-0 left-0 w-2.5 text-silver" />
          Your questions,
          <br />
          your priorities.
        </p>
      </div>
    </div>
  );
}
