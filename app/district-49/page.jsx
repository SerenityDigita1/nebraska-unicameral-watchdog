export const metadata = {
  title: "Nebraska Legislative District 49 — Sen. Bob Andersen Bill Tracker",
  description:
    "Track Sen. Bob Andersen's record in Lincoln. Plain-English breakdowns of every bill from District 49 — SNAP cuts, property taxes, and what each vote means for Sarpy County families.",
};

const ANDERSEN_BILLS = [
  {
    id: "LB 656",
    session: "2025",
    title: "Restrict SNAP work requirement waivers",
    plain: "Would prevent Nebraska from applying for federal waivers that currently allow exceptions to SNAP work requirements — meaning more low-income residents would lose food assistance eligibility even if jobs aren't available in their area.",
    impact: "negative",
    source: "Nebraska Examiner",
    sourceUrl: "https://nebraskaexaminer.com/2025/02/27/nebraska-state-sen-bob-andersen-pushes-to-limit-who-can-receive-public-assistance/",
  },
  {
    id: "LB 379",
    session: "2025",
    title: "Reduce cash assistance time limits",
    plain: "Would shorten how long people can receive cash assistance under Nebraska's public assistance programs. People hit the limit and lose support regardless of whether their circumstances have changed.",
    impact: "negative",
    source: "Ballotpedia",
    sourceUrl: "https://ballotpedia.org/Bob_Andersen_(Nebraska_state_senator)",
  },
  {
    id: "LB 659",
    session: "2025",
    title: "Political party election watchers",
    plain: "Would allow political parties to appoint watchers to observe county election officials' vote-counting device tests, with results published online. Framed as election transparency.",
    impact: "neutral",
    source: "Ballotpedia",
    sourceUrl: "https://ballotpedia.org/Bob_Andersen_(Nebraska_state_senator)",
  },
  {
    id: "LB 925",
    session: "2026",
    title: "Ban unauthorized encampments on public property",
    plain: "Would make it illegal to camp on public property or rights-of-way unless the site is officially designated as a campsite. Critics say it criminalizes homelessness without providing housing alternatives.",
    impact: "negative",
    source: "Ballotpedia",
    sourceUrl: "https://ballotpedia.org/Bob_Andersen_(Nebraska_state_senator)",
  },
];

const LOCAL_ISSUES = [
  {
    title: "Property Taxes",
    stat: "1.91%",
    statLabel: "Effective rate vs. 1.02% national median",
    body: "Sarpy County kept its levy flat at 0.28496 for 2026, but property valuations have doubled over the past decade — so actual bills keep climbing. The median annual tax bill is $4,820, nearly $2,500 above the national median. County commissioners cited $13 million in unfunded state mandates as the pressure driver. Over 25 residents showed up to hearings, many on fixed incomes.",
    source: "Flatwater Free Press",
    sourceUrl: "https://flatwaterfreepress.org/sept-23-sarpy-county-commissioners-set-2026-property-tax-request-and-discuss-impact-of-unfunded-mandates/",
    urgent: true,
  },
  {
    title: "Schools at Capacity",
    stat: "3",
    statLabel: "Papillion-La Vista elementary schools at full capacity",
    body: "Papillion-La Vista declared three elementary schools at full capacity for 2025–26, halting new enrollments. Ashbury and Prairie Queen elementary schools have been at capacity for two years running. Growth is outpacing the buildings — and the state school funding formula hasn't kept up with Sarpy County's pace.",
    source: "WOWT",
    sourceUrl: "https://www.wowt.com/2025/10/14/papillion-la-vista-school-district-declares-three-elementary-schools-capacity/",
    urgent: true,
  },
  {
    title: "$50M Road Project",
    stat: "$50M",
    statLabel: "Road improvement starting spring 2026",
    body: "A major road improvement project near 156th Street breaks ground in spring 2026 — adding lanes, new roads, and roundabouts. Construction runs at least two years. The South Sarpy Expressway is also moving into construction phase. Real daily disruption for residents, but long-overdue infrastructure for one of the fastest-growing counties in the state.",
    source: "3 News Now",
    sourceUrl: "https://www.3newsnow.com/papillion-lavista-ralston-bellevue/50-million-road-improvement-project-in-sarpy-county-aims-to-support-industrial-growth",
    urgent: false,
  },
  {
    title: "Housing Costs Rising",
    stat: "#1",
    statLabel: "Highest rents in Nebraska (out of 93 counties)",
    body: "Sarpy County's Fair Market Rents are 34.4% above the Nebraska average — the highest of any county in the state. Rapid growth is making the county less affordable for working families even as property tax bills climb. There's no state-level affordable housing bill on the horizon.",
    source: "US Housing Data",
    sourceUrl: "https://www.ushousingdata.com/fair-market-rents/sarpy-county-ne",
    urgent: false,
  },
];

const IMPACT_STYLES = {
  negative: { bar: "bg-red-500",     pill: "bg-red-50 text-red-700 ring-1 ring-red-200",       label: "Hurts residents" },
  neutral:  { bar: "bg-amber-400",   pill: "bg-amber-50 text-amber-700 ring-1 ring-amber-200", label: "Mixed / unclear" },
  positive: { bar: "bg-emerald-500", pill: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200", label: "Helps residents" },
};

export default function District49() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Sarpy County</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">District 49</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            One of the fastest-growing districts in Nebraska. Here's who represents it,
            what they've been doing in Lincoln, and what's actually happening on the ground.
          </p>
        </div>

        {/* Senator card */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#c8102e] flex items-center justify-center text-white font-bold text-xl shrink-0">BA</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <h2 className="text-xl font-bold">Sen. Bob Andersen</h2>
                  <p className="text-white/50 text-sm">District 49 · Republican · Term ends Jan 2029</p>
                </div>
                <span className="text-xs font-bold bg-amber-400/20 text-amber-300 ring-1 ring-amber-400/30 px-3 py-1.5 rounded-full shrink-0">
                  Won by 908 votes
                </span>
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-2">Committee Assignments</p>
                  <ul className="space-y-1">
                    {[
                      "Government, Military & Veterans Affairs (Vice Chair)",
                      "General Affairs",
                      "Urban Affairs",
                      "Homeland Security Policy Group",
                    ].map((c) => (
                      <li key={c} className="text-xs text-white/70 flex items-start gap-1.5">
                        <span className="text-[#c8102e] mt-0.5 shrink-0">▸</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-2">2024 Election</p>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white font-medium">Bob Andersen (R)</span>
                        <span className="text-white">11,155 · 52.1%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#c8102e] rounded-full" style={{ width: "52.1%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white/50">Jen Day (D) — incumbent</span>
                        <span className="text-white/50">10,247 · 47.9%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-white/30 rounded-full" style={{ width: "47.9%" }} />
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-white/30 mt-2">Margin: 908 votes. This seat is competitive.</p>
                </div>
              </div>

              <a
                href="https://nebraskalegislature.gov/senators/landing-pages/index.php?District=49"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-xs font-medium text-white/50 hover:text-white transition-colors"
              >
                Official legislature profile ↗
              </a>
            </div>
          </div>
        </div>

        {/* His bills */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Sen. Andersen's Bills — Plain English</h2>
        <div className="space-y-4 mb-10">
          {ANDERSEN_BILLS.map((bill) => {
            const style = IMPACT_STYLES[bill.impact];
            return (
              <div key={bill.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className={`h-1 w-full ${style.bar}`} />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-2.5">
                      <span className="text-xs font-bold text-white bg-[#c8102e] px-2.5 py-1 rounded-lg shrink-0 mt-0.5">{bill.id}</span>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900">{bill.title}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">{bill.session} session</p>
                      </div>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${style.pill}`}>{style.label}</span>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3.5 border-l-2 border-gray-300">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Plain English</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{bill.plain}</p>
                  </div>
                  <a
                    href={bill.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-xs font-medium text-[#c8102e] hover:underline"
                  >
                    Source: {bill.source} ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* The pattern callout */}
        <div className="bg-[#0a0e1a] rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">Worth noting</p>
          <p className="text-white text-sm leading-relaxed">
            The same 2025 session that vetoed food aid for people in recovery (LB 319), Sen. Andersen
            filed two bills to further restrict SNAP access and cash assistance. District 49 is home to
            Sarpy County's highest-rent zip codes and fastest-growing communities — the residents most
            affected by these cuts aren't abstract.
          </p>
        </div>

        {/* Local issues */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What's Happening on the Ground in Sarpy County</h2>
        <div className="space-y-4">
          {LOCAL_ISSUES.map((issue) => (
            <div key={issue.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {issue.urgent && <div className="h-1 w-full bg-[#c8102e]" />}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-base font-bold text-gray-900">{issue.title}</h3>
                  <div className="text-right shrink-0">
                    <div className="text-2xl font-bold text-[#c8102e]">{issue.stat}</div>
                    <div className="text-[10px] text-gray-400 leading-tight max-w-[120px] text-right">{issue.statLabel}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{issue.body}</p>
                <a
                  href={issue.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-[#c8102e] hover:underline"
                >
                  Source: {issue.source} ↗
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
