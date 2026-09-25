/**
 * Single fill-in file for /ricketts-iran.
 *
 * TODO: copy from RESEARCH.md.
 * Replace every placeholder before this page is treated as published reporting.
 * Do not leave TODO, [QUOTE PENDING RESEARCH], [VOTE PENDING], [DATE PENDING],
 * or [POSITION PENDING] in the copy.
 *
 * Slots:
 * - PAGE — headline, dek, meta title, meta description
 * - SHARE — share text and title (URL and image path can stay)
 * - OG — lines drawn on the share image
 * - HOME_CARD — homepage card title and blurb
 * - BANNER — dark contrast block under the hero
 * - RHETORIC — "what he said" (add objects; do not invent quotes)
 * - RECORD — votes such as war powers resolutions, with dates and sources
 * - SOURCES — citations list (set url to a real link, or leave null to render as text)
 */

export const PAGE = {
  eyebrow: "Record vs rhetoric",
  title: "TODO: headline pending research",
  dek: "TODO: short summary pending research. Copy from RESEARCH.md.",
  metaTitle: "TODO: page title pending research",
  metaDescription: "TODO: meta description pending research. Copy from RESEARCH.md.",
};

export const SHARE = {
  shareUrl: "https://unicameralwatchdog.com/ricketts-iran",
  shareText: "TODO: share text pending research",
  shareTitle: "TODO: page title pending research",
  shareImage: "/ricketts-iran/opengraph-image",
  downloadName: "watchdog-ricketts-iran.png",
};

export const OG = {
  alt: "TODO: share image description pending research",
  lines: [
    "TODO: headline pending research",
    "Statements and the Senate record.",
    "Copy from RESEARCH.md.",
  ],
  cardChip: "[VOTE PENDING]",
  cardMeta: "[DATE PENDING]",
  cardTitle: "TODO: measure pending research",
  cardNote: "TODO: copy from RESEARCH.md",
};

export const HOME_CARD = {
  href: "/ricketts-iran",
  kicker: "Record vs rhetoric",
  title: "TODO: Ricketts page headline",
  blurb: "TODO: copy from RESEARCH.md. Quotes, votes, and sources are placeholders.",
};

export const BANNER = {
  kicker: "TODO: context line pending research",
  headline: "TODO: contrast line pending research",
  body: "TODO: copy from RESEARCH.md. [QUOTE PENDING RESEARCH]",
  sourceLabel: "TODO: source pending research",
  sourceUrl: null,
};

export const RHETORIC = [
  {
    id: "quote-1",
    quote: "[QUOTE PENDING RESEARCH]",
    context: "TODO: copy from RESEARCH.md",
    date: "[DATE PENDING]",
    sourceLabel: "TODO: source pending research",
    sourceUrl: null,
  },
  {
    id: "quote-2",
    quote: "[QUOTE PENDING RESEARCH]",
    context: "TODO: copy from RESEARCH.md",
    date: "[DATE PENDING]",
    sourceLabel: "TODO: source pending research",
    sourceUrl: null,
  },
];

export const RECORD = [
  {
    id: "vote-1",
    measure: "[VOTE PENDING]",
    title: "TODO: measure name pending research",
    date: "[DATE PENDING]",
    position: "[POSITION PENDING]",
    summary: "TODO: copy from RESEARCH.md",
    sourceLabel: "TODO: source pending research",
    sourceUrl: null,
  },
  {
    id: "vote-2",
    measure: "[VOTE PENDING]",
    title: "TODO: measure name pending research",
    date: "[DATE PENDING]",
    position: "[POSITION PENDING]",
    summary: "TODO: copy from RESEARCH.md",
    sourceLabel: "TODO: source pending research",
    sourceUrl: null,
  },
];

export const SOURCES = [
  { label: "TODO: copy from RESEARCH.md", url: null },
  { label: "TODO: citation pending research", url: null },
  { label: "TODO: citation pending research", url: null },
];
