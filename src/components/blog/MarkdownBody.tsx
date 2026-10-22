import type { ReactElement } from "react";
import MarkdownBlock from "@/components/blog/MarkdownBlock";
import { parseBlocks } from "@/lib/markdown";

/** Render the starter's sanitized AST; never inject publisher body HTML. */
export default function MarkdownBody({ source }: { source: string }): ReactElement {
  return (
    <div className="text-ink">
      {parseBlocks(source).map((block, index) => <MarkdownBlock key={index} block={block} />)}
    </div>
  );
}
