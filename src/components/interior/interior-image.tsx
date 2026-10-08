import Image from "next/image";

type InteriorImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function InteriorImage({ src, alt, className = "", priority = false }: InteriorImageProps): React.ReactElement {
  return (
    <div className={`interior-photo ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 900px) 50vw, 100vw" className="object-cover" />
    </div>
  );
}
