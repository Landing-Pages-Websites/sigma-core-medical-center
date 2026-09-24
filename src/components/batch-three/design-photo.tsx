import Image from "next/image";

type Props = { slug: "about" | "book" | "contact" | "educational-guide"; file: string; className?: string; priority?: boolean };
export function DesignPhoto({ slug, file, className = "", priority = false }: Props): React.ReactElement {
  return <div className={`b3-photo ${className}`}><Image src={`/images/design/${slug}/${file}`} alt="Sigma Core-branded interior concept; location details have not been verified" fill priority={priority} sizes="(min-width: 900px) 52vw, 100vw" className="object-cover" /></div>;
}
