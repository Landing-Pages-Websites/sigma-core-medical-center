import Image from "next/image";
import type { ReactElement } from "react";
import { isLocalBlogImage } from "@/lib/blog-images";
import { readLocalImageSize } from "@/lib/imageSize";
import { imageSrc } from "@/lib/inline";

type BlogImageVariant = "banner" | "body";
interface BlogImageProps {
  src: string;
  alt: string;
  variant: BlogImageVariant;
  preload?: boolean;
}

const BANNER_SIZE = { width: 1600, height: 900 } as const;

export default function BlogImage({
  src, alt, variant, preload = false,
}: BlogImageProps): ReactElement | null {
  const safeSrc = imageSrc(src);
  if (!safeSrc) return null;
  const intrinsic = variant === "body" ? readLocalImageSize(safeSrc) : null;
  const { width, height } = intrinsic ?? BANNER_SIZE;
  return (
    <Image
      src={safeSrc}
      alt={alt}
      width={width}
      height={height}
      sizes="(min-width: 768px) 43rem, calc(100vw - 3rem)"
      className="h-auto w-full rounded-lg"
      preload={preload}
      // Legacy config is out of scope: remote publisher URLs render as-is,
      // without requiring any next.config remotePatterns changes.
      unoptimized={!isLocalBlogImage(safeSrc)}
    />
  );
}
