import type { ReactElement } from "react";
import BlogImage from "@/components/blog/BlogImage";
import MarkdownInline from "@/components/blog/MarkdownInline";
import MarkdownList from "@/components/blog/MarkdownList";
import MarkdownTable from "@/components/blog/MarkdownTable";
import type { Block } from "@/lib/markdown";

export default function MarkdownBlock({ block }: { block: Block }): ReactElement {
  switch (block.kind) {
    case "heading": {
      const Tag = block.level === 2 ? "h2" : "h3";
      const scale = block.level === 2 ? "mt-10 text-2xl" : "mt-8 text-xl";
      return <Tag className={`${scale} font-heading leading-tight font-bold tracking-tight text-navy`}><MarkdownInline nodes={block.inline} /></Tag>;
    }
    case "list":
      return <MarkdownList items={block.items} ordered={block.ordered} />;
    case "blockquote":
      return <blockquote className="mt-6 border-l-4 border-action pl-6 italic text-muted">{block.lines.map((line, index) => <p key={index} className={index ? "mt-3" : ""}><MarkdownInline nodes={line} /></p>)}</blockquote>;
    case "table":
      return <MarkdownTable block={block} />;
    case "code":
      return <pre className="mt-6 overflow-x-auto rounded-lg bg-paper p-4 text-sm" tabIndex={0} aria-label="Code example"><code>{block.text}</code></pre>;
    case "image":
      return <div className="mt-6"><BlogImage src={block.src} alt={block.alt} variant="body" /></div>;
    default:
      return <p className="mt-4 leading-relaxed first:mt-0"><MarkdownInline nodes={block.inline} /></p>;
  }
}
