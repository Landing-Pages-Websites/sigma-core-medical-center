import Image from "next/image";

type Props = { slug: "about" | "book" | "contact" | "educational-guide"; file: string; alt?: string; className?: string; priority?: boolean };
const DEFAULT_ALT = "Sigma Core-branded interior concept; location details have not been verified";

export function DesignPhoto({ slug, file, alt = DEFAULT_ALT, className = "", priority = false }: Props): React.ReactElement {
  return <div className={`b3-photo ${className}`}><Image src={`/images/design/${slug}/${file}`} alt={alt} fill priority={priority} sizes="(min-width: 900px) 52vw, 100vw" className="object-cover" /></div>;
}
