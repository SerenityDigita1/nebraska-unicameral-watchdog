import { HOME_CARD as SOCIALISM_CARD } from "./is-it-socialism";
import { HOME_CARD as MONEY_GOES_CARD } from "./where-the-money-goes";
import { HOME_CARD as SAME_RULES_CARD } from "./same-rules";
import { HOME_CARD as BALLOT_2026_CARD } from "./ballot-measures-2026";

/**
 * Homepage archive and the Key Issues menu.
 *
 * Every published story belongs in one group. On 2026-09-22 eleven live pages
 * were reachable from nowhere on this site — add the link here when a page ships.
 */

export const TOPIC_GROUPS = [
  {
    id: "taxes",
    label: "Taxes & money",
    links: [
      { href: "/is-it-socialism-mixed-economy-nebraska", label: "Is it socialism? (Part 1)" },
      { href: "/where-the-money-goes-tax-breaks-buybacks-pay", label: "Where the money goes (Part 2)" },
      { href: "/same-rules-for-every-dollar-contracts-audits", label: "Same rules for every dollar (Part 3)" },
      { href: "/property-tax-coupon", label: "The property tax coupon" },
      { href: "/two-tax-systems", label: "Two tax systems" },
      { href: "/tariff-action", label: "Tariffs are costing Nebraska families" },
      { href: "/big-beautiful-bill", label: "One Big Beautiful Bill" },
      { href: "/outside-money", label: "Outside money" },
    ],
  },
  {
    id: "work",
    label: "Work & cost of living",
    links: [
      { href: "/living-wage", label: "What it takes to live in Nebraska" },
      { href: "/pay-gap", label: "The pay gap" },
      { href: "/ask-your-neighbor", label: "Ask your neighbor (SNAP)" },
      { href: "/snap-nebraska", label: "Soda ban is void" },
      { href: "/data-centers", label: "Data centers" },
    ],
  },
  {
    id: "kids",
    label: "Kids & schools",
    links: [
      { href: "/shock-gloves", label: "The shock gloves" },
      { href: "/530a-accounts", label: "$1,000 emails about your kids" },
      { href: "/what-they-stopped-watching", label: "What they stopped watching" },
    ],
  },
  {
    id: "officials",
    label: "Legislature & officials",
    links: [
      { href: "/ballot-measures-2026", label: "2026 ballot measures" },
      { href: "/ricketts-iran", label: "Ricketts on Iran" },
      { href: "/dan-osborn-immigration-ad", label: "Immigration ad (Osborn)" },
      { href: "/interim", label: "Interim studies" },
      { href: "/district-49", label: "District 49" },
      { href: "/issues", label: "Key issues overview" },
    ],
  },
];

/**
 * Homepage feature order as of 2026-11-06 (America/Chicago).
 *
 * supportedAsOf is the newest date we can point at. It is not a guessed
 * news date. Prefer a date written in the article. If the article has no
 * publication date, use the git date of the last content commit and do not
 * print that git date on the page.
 *
 * Older evergreen explainers stay in TOPIC_GROUPS. They are not featured.
 */
export const HOMEPAGE_LEAD = {
  href: BALLOT_2026_CARD.href,
  supportedAsOf: "2026-11-04",
  basis:
    "content/ballot-measures-2026.md: Secretary of State unofficial results last updated Nov. 4, 2026, 5:58 AM CT. Election day Nov. 3, 2026 is in the same article.",
  kicker: "Results · Ballot measures",
  title: BALLOT_2026_CARD.title,
  blurb: BALLOT_2026_CARD.blurb,
  sourceLabel: "Secretary of State unofficial results, last updated Nov. 4, 2026, 5:58 AM CT",
  sourceUrl: "https://electionresults.nebraska.gov/ResultsSW.aspx",
  statuses: [
    { label: "Amendment 1 · term limits", status: "Failing" },
    { label: "440 and 441 · online sports betting", status: "Failing" },
    { label: "442 · school sports", status: "Passing" },
  ],
  note: "Unofficial until the canvass. Both 440 and 441 had to pass.",
};

export const HOMEPAGE_FEATURED = [
  {
    href: "/outside-money",
    supportedAsOf: "2026-11-03",
    basis:
      "app/outside-money/page.jsx: outside-group tally as of Nov. 3, 2026; candidate reports through Oct. 14, 2026. Page content commit 2026-11-03.",
    kicker: "Campaign money · U.S. Senate · 2026",
    title: "Who paid for this race?",
    blurb:
      "Candidate reports through Oct. 14, 2026. Outside-group tally as of Nov. 3, 2026 — a third-party tally, not an official FEC total.",
  },
  {
    href: SAME_RULES_CARD.href,
    supportedAsOf: "2026-10-17",
    basis:
      "No publication date in the article. Git: page and content added 2026-10-17 (part 3).",
    kicker: "Part 3 of 3 · Audits",
    title: SAME_RULES_CARD.title,
    blurb: SAME_RULES_CARD.blurb,
  },
  {
    href: MONEY_GOES_CARD.href,
    supportedAsOf: "2026-10-16",
    basis:
      "No publication date in the article. Git: page added 2026-10-16; series links touched 2026-10-17 when part 3 shipped.",
    kicker: "Part 2 of 3 · Tax breaks",
    title: MONEY_GOES_CARD.title,
    blurb: MONEY_GOES_CARD.blurb,
  },
  {
    href: SOCIALISM_CARD.href,
    supportedAsOf: "2026-10-16",
    basis:
      "No publication date in the article. Git: page added 2026-10-16; content touched 2026-10-17 for the series link.",
    kicker: "Part 1 of 3 · Mixed economy",
    title: SOCIALISM_CARD.title,
    blurb: SOCIALISM_CARD.blurb,
  },
];
