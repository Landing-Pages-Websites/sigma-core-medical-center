import Image from "next/image";

type Props = { src: string; alt?: string; className?: string; priority?: boolean };
const DEFAULT_ALT = "Sigma Core-branded interior concept; location details have not been verified";

export function DesignPhoto({ src, alt = DEFAULT_ALT, className = "", priority = false }: Props): React.ReactElement {
  return <div className={`b3-photo ${className}`}><Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 900px) 52vw, 100vw" className="object-cover" /></div>;
}
