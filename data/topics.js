import { HOME_CARD as SOCIALISM_CARD } from "./is-it-socialism";
import { HOME_CARD as MONEY_GOES_CARD } from "./where-the-money-goes";
import { HOME_CARD as SAME_RULES_CARD } from "./same-rules";
import { HOME_CARD as RICKETTS_IRAN_CARD } from "./ricketts-iran";
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
 * Homepage story grid, grouped. Kicker format: "Topic · Detail" (no "New" tags —
 * the Latest slot says what's new). Each section's card count should be a
 * multiple of 3 (or the featured layout) so desktop rows have no orphan card.
 * Photos: drop public/stories/<slug>.jpg — see public/stories/README.md.
 */
export const HOME_SECTIONS = [
  {
    id: "latest",
    title: null, // sits under the existing "Latest explainers" lead story
    layout: "featured",
    items: [
      {
        href: BALLOT_2026_CARD.href,
        kicker: "Election 2026 · Ballot measures",
        title: BALLOT_2026_CARD.title,
        blurb: BALLOT_2026_CARD.blurb,
        tone: "navy",
      },
      {
        href: RICKETTS_IRAN_CARD.href,
        kicker: "U.S. Senate · Record vs rhetoric",
        title: RICKETTS_IRAN_CARD.title,
        blurb: RICKETTS_IRAN_CARD.blurb,
        tone: "red",
      },
    ],
  },
  {
    id: "series",
    title: "Three-part series: the mixed economy",
    sub: "A three-part series. Read in order.",
    layout: "series",
    items: [
      { href: SOCIALISM_CARD.href, kicker: "Part 1 of 3 · Mixed economy", title: SOCIALISM_CARD.title, blurb: SOCIALISM_CARD.blurb, tone: "slate" },
      { href: MONEY_GOES_CARD.href, kicker: "Part 2 of 3 · Tax breaks", title: MONEY_GOES_CARD.title, blurb: MONEY_GOES_CARD.blurb, tone: "slate" },
      { href: SAME_RULES_CARD.href, kicker: "Part 3 of 3 · Audits", title: SAME_RULES_CARD.title, blurb: SAME_RULES_CARD.blurb, tone: "slate" },
    ],
  },
  {
    id: "senate",
    title: "Election 2026 · U.S. Senate",
    sub: "Ads and outside money, checked against the record.",
    items: [
      {
        href: "/dan-osborn-immigration-ad",
        kicker: "U.S. Senate · Ads vs record",
        title: "If you saw the immigration ad",
        blurb: "Osborn “amnesty” spots vs the Kellogg’s / ICE record.",
        tone: "navy",
      },
      {
        href: "/outside-money",
        kicker: "U.S. Senate · Campaign money",
        title: "Outside Money",
        blurb: "$28.9M in outside money, and what the record shows.",
        tone: "navy",
      },
    ],
  },
  {
    id: "communities",
    title: "Money, taxes & communities",
    sub: "Who pays, and what changes at the store and in the county.",
    items: [
      {
        href: "/snap-nebraska",
        kicker: "Nebraska · Food assistance",
        title: "The soda ban is void. Did anyone tell your store?",
        blurb: "A court struck it down in June. The rules on who qualifies changed too.",
        tone: "red",
      },
      {
        href: "/what-they-stopped-watching",
        kicker: "Federal · Douglas County",
        title: "What They Stopped Watching",
        blurb: "27 Douglas County cases after a tracking program was cut.",
        tone: "red",
      },
      {
        href: "/two-tax-systems",
        kicker: "Federal · Taxes",
        title: "Two Tax Systems",
        blurb: "How the wealthy pay a 3.4% true rate. You don’t.",
        tone: "red",
      },
    ],
  },
];

/** Flat list kept for any other consumers. */
export const LATEST_EXPLAINERS = HOME_SECTIONS.flatMap((s) => s.items);
