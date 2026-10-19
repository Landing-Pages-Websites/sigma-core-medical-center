import type { ReactElement } from "react";
import MarkdownInline from "@/components/blog/MarkdownInline";
import type { ListItem } from "@/lib/markdown";

interface MarkdownListProps {
  items: ListItem[];
  ordered: boolean;
}

export default function MarkdownList({ items, ordered }: MarkdownListProps): ReactElement {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`mt-4 space-y-2 pl-6 ${ordered ? "list-decimal" : "list-disc"}`}>
      {items.map((item, index) => (
        <li key={index}>
          <MarkdownInline nodes={item.inline} />
          {/* Each nested group retains its own ordered/unordered semantics. */}
          {item.children.map((group, groupIndex) => (
            <MarkdownList key={groupIndex} items={group.items} ordered={group.ordered} />
          ))}
        </li>
      ))}
    </Tag>
  );
}
