import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServicePageData } from "@/content/pages";
import styles from "./hero.module.css";

export function NeuropathyHeroPhoto({ data }: { data: ServicePageData }): React.ReactElement {
  return (
    <div className={`${styles.photo} relative min-h-[24rem] sm:min-h-[30rem] lg:mt-24 lg:min-h-0`}>
      <div className={`${styles.frame} absolute inset-0 lg:bottom-0 lg:[clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)]`}>
        <Image src={data.heroImage} alt={data.heroAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[62%_center]" />
      </div>
      <div aria-hidden className="absolute right-0 bottom-0 hidden lg:block h-[34%] w-[78%] bg-royal [clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)]" />
      <Link
        href="/book"
        className={`${styles.action} absolute right-6 bottom-8 z-10 inline-flex max-w-full min-h-14 items-center gap-4 border border-white bg-royal/20 px-6 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-royal sm:right-10 lg:bottom-[9%] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]`}
      >
        Check booking status <ArrowRight size={18} aria-hidden className="shrink-0" />
      </Link>
    </div>
  );
}
