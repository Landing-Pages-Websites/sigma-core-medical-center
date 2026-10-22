import type { ReactElement } from "react";
import { publishedDate, type BlogPost } from "@/lib/blog";

export default function PostDate({ post }: { post: BlogPost }): ReactElement | null {
  if (!post.date) return null;
  const iso = publishedDate(post)?.toISOString();
  // Keep the publisher's display text, but never emit an invalid dateTime.
  return iso ? (
    <time dateTime={iso} className="text-sm text-muted">{post.date}</time>
  ) : (
    <span className="text-sm text-muted">{post.date}</span>
  );
}
