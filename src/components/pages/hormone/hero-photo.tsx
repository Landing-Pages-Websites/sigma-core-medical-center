import Image from "next/image";
import { HORMONE_PAGE } from "@/content/pages";
import styles from "./hero.module.css";

export function HormoneHeroPhoto(): React.ReactElement {
  return (
    <div className={`${styles.photo} relative min-h-[24rem] sm:min-h-[30rem] lg:mt-20 lg:min-h-0`}>
      <div className="absolute inset-0 lg:bottom-[2%] lg:[clip-path:polygon(22%_0,100%_0,100%_100%,24%_100%,0_44%)]">
        <Image src={HORMONE_PAGE.heroImage} alt={HORMONE_PAGE.heroAlt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[58%_center]" />
      </div>
      <div aria-hidden className="absolute right-0 bottom-0 hidden lg:block h-[28%] w-[72%] bg-royal [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />
    </div>
  );
}
