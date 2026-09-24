import Image from "next/image";

type InteriorImageProps = {
  slug: "services" | "neuropathy" | "pain-relief";
  file: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function InteriorImage({ slug, file, alt, className = "", priority = false }: InteriorImageProps): React.ReactElement {
  return (
    <div className={`interior-photo ${className}`}>
      <Image src={`/images/design/${slug}/${file}`} alt={alt} fill priority={priority} sizes="(min-width: 900px) 50vw, 100vw" className="object-cover" />
    </div>
  );
}
