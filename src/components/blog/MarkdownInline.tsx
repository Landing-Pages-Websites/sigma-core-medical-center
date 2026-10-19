import type { ReactElement, ReactNode } from "react";
import BlogImage from "@/components/blog/BlogImage";
import type { InlineNode } from "@/lib/markdown";

function renderNode(node: InlineNode, key: number): ReactNode {
  switch (node.kind) {
    case "strong":
      return <strong key={key}>{node.value}</strong>;
    case "em":
      return <em key={key}>{node.value}</em>;
    case "code":
      return <code key={key} className="rounded bg-paper px-1 py-0.5 text-[0.9em]">{node.value}</code>;
    case "link":
      return <a key={key} href={node.href} className="text-action underline underline-offset-4 hover:text-hover focus-visible:text-hover motion-safe:transition-colors">{node.text}</a>;
    case "image":
      return <BlogImage key={key} src={node.src} alt={node.alt} variant="body" />;
    default:
      return node.value;
  }
}

export default function MarkdownInline({ nodes }: { nodes: InlineNode[] }): ReactElement {
  return <>{nodes.map(renderNode)}</>;
}
