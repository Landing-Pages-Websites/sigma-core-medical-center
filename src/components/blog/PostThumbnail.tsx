import Image from "next/image";
import type { ReactElement } from "react";
import { TallBracket } from "@/components/pages/shared/page-motifs";
import { canOptimizeBlogImage } from "@/lib/blog-images";
import type { BlogPost } from "@/lib/blog";
import { imageSrc } from "@/lib/inline";

interface PostThumbnailProps {
  post: BlogPost;
  sizes: string;
  preload?: boolean;
}

/**
 * Cropped cover image for a post in the blog index. Fills its parent, so the
 * caller owns the aspect ratio. A post without a usable image gets a branded
 * tile instead of an empty box, so the grid never shows a hole.
 */
export default function PostThumbnail({ post, sizes, preload = false }: PostThumbnailProps): ReactElement {
  const src = post.image ? imageSrc(post.image) : null;
  if (!src) {
    return (
      <div aria-hidden className="flex h-full w-full items-center justify-center bg-navy">
        <TallBracket className="h-16 w-4 text-royal" />
        <TallBracket side="right" className="ml-10 h-16 w-4 text-royal" />
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={post.imageAlt ?? ""}
      fill
      sizes={sizes}
      preload={preload}
      fetchPriority={preload ? "high" : undefined}
      unoptimized={!canOptimizeBlogImage(src)}
      className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
    />
  );
}
