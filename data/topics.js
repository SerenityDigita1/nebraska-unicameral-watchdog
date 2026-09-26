import { HOME_CARD as RICKETTS_IRAN_CARD } from "./ricketts-iran";

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
      { href: "/ricketts-iran", label: "Ricketts on Iran" },
      { href: "/dan-osborn-immigration-ad", label: "Immigration ad (Osborn)" },
      { href: "/interim", label: "Interim studies" },
      { href: "/district-49", label: "District 49" },
      { href: "/issues", label: "Key issues overview" },
    ],
  },
];

export const LATEST_EXPLAINERS = [
  {
    href: RICKETTS_IRAN_CARD.href,
    kicker: "New · U.S. Senate · Record vs rhetoric",
    title: RICKETTS_IRAN_CARD.title,
    blurb: RICKETTS_IRAN_CARD.blurb,
  },
  {
    href: "/dan-osborn-immigration-ad",
    kicker: "Ads vs record · U.S. Senate",
    title: "If you saw the immigration ad",
    blurb: "Osborn “amnesty” spots vs the Kellogg’s / ICE record.",
  },
  {
    href: "/outside-money",
    kicker: "Campaign money · U.S. Senate · 2026",
    title: "Outside Money",
    blurb: "$28.9M in outside money, and what the record shows.",
  },
  {
    href: "/two-tax-systems",
    kicker: "Federal · Taxes",
    title: "Two Tax Systems",
    blurb: "How the wealthy pay a 3.4% true rate. You don’t.",
  },
  {
    href: "/snap-nebraska",
    kicker: "Nebraska · Food assistance",
    title: "The soda ban is void. Did anyone tell your store?",
    blurb: "A court struck it down in June. The rules on who qualifies changed too.",
  },
  {
    href: "/what-they-stopped-watching",
    kicker: "Federal · Douglas County",
    title: "What They Stopped Watching",
    blurb: "27 Douglas County cases after a tracking program was cut.",
  },
];
