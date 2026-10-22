import type { ReactElement } from "react";
import type { BlogPost } from "@/lib/blog";
import { buildBlogArticleSchema } from "@/lib/blog-seo";

export default function BlogArticleSchema({ post }: { post: BlogPost }): ReactElement | null {
  const data = buildBlogArticleSchema(post);
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      // Preserve the starter's protection against closing the script element.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
