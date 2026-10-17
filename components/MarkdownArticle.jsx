import Link from "next/link";
import { groupSections, parseBlocks, parseInline, textOf } from "@/lib/article-markdown.mjs";

function Inline({ nodes }) {
  return nodes.map((node, index) => {
    if (typeof node === "string") return <span key={index}>{node}</span>;
    if (node.type === "strong") {
      return (
        <strong key={index} className="font-semibold text-gray-900">
          <Inline nodes={node.children} />
        </strong>
      );
    }
    if (node.type === "em") {
      return (
        <em key={index}>
          <Inline nodes={node.children} />
        </em>
      );
    }
    if (node.type === "a") {
      const className = "text-[#c8102e] font-medium hover:underline";
      if (node.href.startsWith("/")) {
        return (
          <Link key={index} href={node.href} className={className}>
            <Inline nodes={node.children} />
          </Link>
        );
      }
      return (
        <a key={index} href={node.href} target="_blank" rel="noreferrer" className={className}>
          <Inline nodes={node.children} />
        </a>
      );
    }
    return null;
  });
}

function Paragraph({ text }) {
  return (
    <p className="text-sm text-gray-600 leading-relaxed">
      <Inline nodes={parseInline(text)} />
    </p>
  );
}

function ItemList({ type, items }) {
  const Tag = type === "ol" ? "ol" : "ul";
  const listClass = type === "ol" ? "list-decimal" : "list-disc";
  return (
    <Tag className={`${listClass} pl-5 space-y-2 text-sm text-gray-600 leading-relaxed`}>
      {items.map((item, index) => (
        <li key={index}>
          <Inline nodes={parseInline(item)} />
        </li>
      ))}
    </Tag>
  );
}

function Table({ rows }) {
  const [head, ...body] = rows;
  const caption = head.map((cell) => textOf(parseInline(cell))).join(", ");
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="text-left text-[10px] font-semibold tracking-widest text-gray-400 uppercase border-b border-gray-100">
            {head.map((cell, index) => (
              <th key={index} scope="col" className="px-4 py-3 font-semibold align-bottom">
                <Inline nodes={parseInline(cell)} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-50 last:border-0">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-gray-700 align-top leading-relaxed">
                  <Inline nodes={parseInline(cell)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Block({ block }) {
  if (block.type === "p") return <Paragraph text={block.text} />;
  if (block.type === "ul" || block.type === "ol") return <ItemList type={block.type} items={block.items} />;
  if (block.type === "table") return <Table rows={block.rows} />;
  return null;
}

export default function MarkdownArticle({ markdown, afterIntro = null }) {
  const sections = groupSections(parseBlocks(markdown));
  return (
    <div className="space-y-4 mb-8">
      {sections.map((section, index) => (
        <section key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
          {section.heading ? (
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              <Inline nodes={parseInline(section.heading)} />
            </h2>
          ) : null}
          <div className="space-y-3">
            {section.blocks.map((block, blockIndex) => (
              <Block key={blockIndex} block={block} />
            ))}
          </div>
          {index === 0 && afterIntro ? <div className="mt-4">{afterIntro}</div> : null}
        </section>
      ))}
    </div>
  );
}
