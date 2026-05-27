import Link from "next/link";

export const metadata = { title: "Key Issues · NE Watchdog" };

const ISSUES = [
  {
    title: "Property Taxes",
    icon: "🏠",
    stat: "1.91%",
    statNote: "Sarpy effective rate vs. 1.02% national median",
    summary: "Sarpy County kept its levy flat for 2026, but valuations have doubled over the past decade — so bills keep rising. The median annual tax bill is $4,820. County commissioners cite $13M in unfunded state mandates as the driver. The state's property tax relief bills have largely benefited large landowners and corporations, not homeowners.",
    link: "/district-49",
    linkLabel: "See District 49 breakdown",
    urgent: true,
  },
  {
    title: "Growth & Development",
    icon: "📈",
    stat: "#1",
    statNote: "Highest rents in Nebraska out of 93 counties",
    summary: "District 49 is one of the fastest-growing areas in Nebraska. Sarpy County's Fair Market Rents are 34.4% above the state average — the highest in the state. A $50M road project breaks ground spring 2026. Growth is outpacing infrastructure and affordable housing with no state-level relief in sight.",
    link: "/district-49",
    linkLabel: "See local infrastructure updates",
    urgent: true,
  },
  {
    title: "Education & School Funding",
    icon: "🎓",
    stat: "3",
    statNote: "Papillion-La Vista elementary schools at full capacity",
    summary: "Three Papillion-La Vista elementary schools have been at full capacity for two consecutive years, halting new enrollments. Growth is outpacing buildings. Nebraska's TEEOSA school funding formula has been altered and line-item vetoed — some Sarpy County districts are getting less state aid than the legislature intended.",
    link: "/district-49",
    linkLabel: "See District 49 school data",
    urgent: true,
  },
  {
    title: "Workers & Wages",
    icon: "💼",
    stat: "140K",
    statNote: "Nebraskans who lost paid sick leave protections",
    summary: "Voters passed paid sick leave and a minimum wage increase. The legislature gutted sick leave for 140,000 workers via LB 415, tried to weaken the minimum wage, and blocked medical cannabis implementation entirely despite 67–71% voter approval. Meanwhile Sen. Andersen filed bills to further restrict SNAP and cash assistance.",
    link: "/pay-gap",
    linkLabel: "See CEO pay vs. worker pay",
    urgent: true,
  },
  {
    title: "Public Safety",
    icon: "🛡",
    stat: null,
    statNote: null,
    summary: "From permitless carry to Medicaid work requirements — state policy has direct consequences for safety and stability. Gov. Pillen vetoed bed bug inspections for Omaha public housing residents and food aid for people in recovery. Sen. Andersen's LB 925 would ban encampments without providing housing alternatives.",
    link: "/session",
    linkLabel: "See 2025 session recap",
    urgent: false,
  },
  {
    title: "Corporate Influence",
    icon: "💰",
    stat: "$1.5B",
    statNote: "In business tax incentives flagged by the state auditor",
    summary: "The same 2025 session that vetoed food aid and bed bug inspections approved $1.5 billion in business tax incentives over four fiscal years. Out-of-state PACs — including the Koch-backed Americans for Prosperity at $2.4M+ — flood Nebraska legislative races. The top 20 donors to Nebraska politics in 2024 are tracked on this site.",
    link: "/two-tax-systems",
    linkLabel: "See how the wealthy avoid taxes",
    urgent: false,
  },
];

export default function Issues() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">What's at stake</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">Key Issues</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            The issues that affect everyday Nebraskans in District 49 and across the state —
            tracked, translated, and explained without spin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {ISSUES.map((issue) => (
            <div key={issue.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
              {issue.urgent && <div className="h-1 w-full bg-[#c8102e]" />}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{issue.icon}</span>
                    <h2 className="text-base font-bold text-gray-900">{issue.title}</h2>
                  </div>
                  {issue.stat && (
                    <div className="text-right shrink-0">
                      <div className="text-xl font-bold text-[#c8102e]">{issue.stat}</div>
                      <div className="text-[10px] text-gray-400 leading-tight max-w-[100px] text-right">{issue.statNote}</div>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{issue.summary}</p>
                {issue.link && (
                  <Link
                    href={issue.link}
                    className="inline-block mt-3 text-xs font-medium text-[#c8102e] hover:underline"
                  >
                    {issue.linkLabel} ↗
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
