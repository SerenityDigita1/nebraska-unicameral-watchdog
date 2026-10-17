/**
 * Small markdown subset for the sourced explainers.
 * Inline links are parsed as written: [label](href). The href is copied through
 * unchanged. Bold (**) and italic (*) are the only other inline marks.
 */

export function parseInline(text) {
  const nodes = [];
  let i = 0;
  let buf = "";

  function flush() {
    if (buf) {
      nodes.push(buf);
      buf = "";
    }
  }

  while (i < text.length) {
    if (text.startsWith("**", i)) {
      const end = text.indexOf("**", i + 2);
      if (end !== -1) {
        flush();
        nodes.push({ type: "strong", children: parseInline(text.slice(i + 2, end)) });
        i = end + 2;
        continue;
      }
    }

    if (text[i] === "*" && text[i + 1] !== "*") {
      const end = text.indexOf("*", i + 1);
      if (end !== -1) {
        flush();
        nodes.push({ type: "em", children: parseInline(text.slice(i + 1, end)) });
        i = end + 1;
        continue;
      }
    }

    if (text[i] === "[") {
      const close = text.indexOf("]", i + 1);
      if (close !== -1 && text[close + 1] === "(") {
        const urlEnd = text.indexOf(")", close + 2);
        if (urlEnd !== -1) {
          flush();
          nodes.push({
            type: "a",
            href: text.slice(close + 2, urlEnd),
            children: parseInline(text.slice(i + 1, close)),
          });
          i = urlEnd + 1;
          continue;
        }
      }
    }

    buf += text[i];
    i += 1;
  }

  flush();
  return nodes;
}

export function textOf(nodes) {
  let out = "";
  for (const node of nodes) {
    out += typeof node === "string" ? node : textOf(node.children);
  }
  return out;
}

function splitRow(line) {
  const parts = line.split("|").map((cell) => cell.trim());
  if (parts[0] === "") parts.shift();
  if (parts[parts.length - 1] === "") parts.pop();
  return parts;
}

function isSeparator(cells) {
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function isBlockStart(line) {
  return (
    line.startsWith("## ") ||
    line.startsWith("# ") ||
    line.startsWith("- ") ||
    /^\d+\. /.test(line) ||
    line.startsWith("|") ||
    line.trim() === "---"
  );
}

export function parseBlocks(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") {
      i += 1;
      continue;
    }
    if (line.trim() === "---") {
      blocks.push({ type: "hr" });
      i += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3) });
      i += 1;
      continue;
    }
    if (line.startsWith("# ")) {
      blocks.push({ type: "h1", text: line.slice(2) });
      i += 1;
      continue;
    }
    if (line.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = splitRow(lines[i]);
        if (!isSeparator(cells)) rows.push(cells);
        i += 1;
      }
      blocks.push({ type: "table", rows });
      continue;
    }
    if (line.startsWith("- ")) {
      const items = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    const para = [];
    while (i < lines.length && lines[i].trim() !== "" && !isBlockStart(lines[i])) {
      para.push(lines[i]);
      i += 1;
    }
    blocks.push({ type: "p", text: para.join(" ") });
  }

  return blocks;
}

export function groupSections(blocks) {
  const sections = [];
  let current = { heading: null, blocks: [] };

  function push() {
    if (current.heading || current.blocks.length) sections.push(current);
  }

  for (const block of blocks) {
    if (block.type === "h2") {
      push();
      current = { heading: block.text, blocks: [] };
    } else if (block.type === "hr") {
      push();
      current = { heading: null, blocks: [] };
    } else {
      current.blocks.push(block);
    }
  }
  push();
  return sections;
}

function collectLinks(nodes, found) {
  for (const node of nodes) {
    if (typeof node === "string") continue;
    if (node.type === "a") {
      found.push({ label: textOf(node.children), href: node.href });
    }
    if (node.children) collectLinks(node.children, found);
  }
}

export function linksIn(markdown) {
  const found = [];
  for (const block of parseBlocks(markdown)) {
    if (block.type === "h1" || block.type === "h2" || block.type === "p") {
      collectLinks(parseInline(block.text), found);
    } else if (block.type === "ul" || block.type === "ol") {
      for (const item of block.items) collectLinks(parseInline(item), found);
    } else if (block.type === "table") {
      for (const row of block.rows) {
        for (const cell of row) collectLinks(parseInline(cell), found);
      }
    }
  }
  return found;
}

export function astText(markdown) {
  const parts = [];
  for (const block of parseBlocks(markdown)) {
    if (block.type === "hr") continue;
    if (block.type === "h1" || block.type === "h2" || block.type === "p") {
      parts.push(textOf(parseInline(block.text)));
    } else if (block.type === "ul" || block.type === "ol") {
      for (const item of block.items) parts.push(textOf(parseInline(item)));
    } else if (block.type === "table") {
      for (const row of block.rows) {
        parts.push(row.map((cell) => textOf(parseInline(cell))).join(" "));
      }
    }
  }
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

export function stripMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const kept = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed === "---") continue;
    if (trimmed.startsWith("|") && isSeparator(splitRow(trimmed))) continue;
    let next = line;
    next = next.replace(/^## /, "").replace(/^# /, "").replace(/^- /, "").replace(/^\d+\. /, "");
    if (next.trim().startsWith("|")) {
      next = splitRow(next).join(" ");
    }
    next = next.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "").replace(/\*/g, "");
    kept.push(next);
  }
  return kept.join(" ").replace(/\s+/g, " ").trim();
}

export function assertArticle(markdown) {
  if (markdown.includes("\u2014") || markdown.includes("\u2013")) {
    throw new Error("Article source contains an em dash or en dash.");
  }

  const expected = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match = re.exec(markdown);
  while (match) {
    expected.push({ label: match[1], href: match[2] });
    match = re.exec(markdown);
  }

  const found = linksIn(markdown);
  if (found.length !== expected.length) {
    throw new Error(`Link count ${found.length} does not match source count ${expected.length}.`);
  }
  for (let i = 0; i < expected.length; i += 1) {
    if (found[i].href !== expected[i].href || found[i].label !== expected[i].label) {
      throw new Error(
        `Link ${i} mismatch.\nExpected ${expected[i].label} -> ${expected[i].href}\nGot ${found[i].label} -> ${found[i].href}`
      );
    }
  }

  const fromAst = astText(markdown);
  const fromStrip = stripMarkdown(markdown);
  if (fromAst !== fromStrip) {
    let index = 0;
    const limit = Math.max(fromAst.length, fromStrip.length);
    while (index < limit && fromAst[index] === fromStrip[index]) index += 1;
    throw new Error(
      `Visible text diverges at ${index}.\nAST: ${fromAst.slice(Math.max(0, index - 40), index + 80)}\nSRC: ${fromStrip.slice(Math.max(0, index - 40), index + 80)}`
    );
  }
}
