import type { ReactElement } from "react";
import MarkdownInline from "@/components/blog/MarkdownInline";
import type { Block } from "@/lib/markdown";

type TableBlock = Extract<Block, { kind: "table" }>;

export default function MarkdownTable({ block }: { block: TableBlock }): ReactElement {
  return (
    <div className="mt-6 overflow-x-auto" role="region" aria-label="Article table" tabIndex={0}>
      <table className="w-full border-collapse text-left text-base">
        <thead>
          <tr>
            {block.header.map((cell, index) => (
              <th key={index} scope="col" className="border-b border-silver px-3 py-3 font-semibold">
                <MarkdownInline nodes={cell} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border-b border-silver px-3 py-3 align-top">
                  <MarkdownInline nodes={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
