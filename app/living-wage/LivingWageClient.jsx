"use client";
import { useState } from "react";
import Link from "next/link";

const LIVING_WAGE_HOUSEHOLDS = [
  {
    type: "Single Adult",
    subhead: "One person, no kids",
    hourly: 21.79,
    annual: 45323,
    expenses: [
      { label: "Rent (1BR)", monthly: 971 },
      { label: "Food", monthly: 385 },
      { label: "Transportation", monthly: 624 },
      { label: "Healthcare", monthly: 238 },
      { label: "Child Care", monthly: 0 },
      { label: "Other essentials", monthly: 501 },
    ],
  },
  {
    type: "Single Parent, 1 Child",
    subhead: "One income, one kid",
    hourly: 39.76,
    annual: 82701,
    expenses: [
      { label: "Rent (2BR)", monthly: 1170 },
      { label: "Food", monthly: 669 },
      { label: "Transportation", monthly: 624 },
      { label: "Healthcare", monthly: 476 },
      { label: "Child Care", monthly: 1138 },
      { label: "Other essentials", monthly: 735 },
    ],
  },
  {
    type: "Single Parent, 2 Children",
    subhead: "One income, two kids",
    hourly: 47.20,
    annual: 98176,
    expenses: [
      { label: "Rent (3BR)", monthly: 1562 },
      { label: "Food", monthly: 803 },
      { label: "Transportation", monthly: 624 },
      { label: "Healthcare", monthly: 714 },
      { label: "Child Care", monthly: 1976 },
      { label: "Other essentials", monthly: 497 },
    ],
  },
  {
    type: "Two Adults, 2 Children",
    subhead: "Two incomes, two kids",
    hourly: 22.27,
    annual: 46356,
    note: "Per working adult — combined household needs $92,712",
    expenses: [
      { label: "Rent (3BR, split)", monthly: 781 },
      { label: "Food (split)", monthly: 502 },
      { label: "Transportation", monthly: 624 },
      { label: "Healthcare (split)", monthly: 476 },
      { label: "Child Care (split)", monthly: 988 },
      { label: "Other essentials", monthly: 543 },
    ],
  },
];

const BUDGET_LINES = [
  { label: "Rent", a: 971, b: 1100, note: "1BR Sarpy County (HUD rate / market rate)" },
  { label: "Groceries", a: 340, b: 400, note: "" },
  { label: "Transportation", a: 800, b: 900, note: "Car payment + insurance + gas" },
  { label: "Healthcare", a: 160, b: 160, note: "Employee share + avg out-of-pocket" },
  { label: "Utilities", a: 310, b: 310, note: "Electric, gas, water, internet" },
  { label: "Phone", a: 60, b: 60, note: "" },
];

const SINGLE_ADULT_LW = 45323;
const SINGLE_PARENT_LW = 82701;

const COMPANIES = [
  {
    name: "Valmont Industries",
    ticker: "VMI / NYSE",
    ceo: "Avner Applbaum",
    ceoPay: 7639710,
    medianPay: 52361,
    ratio: 146,
    employees: 11000,
    caveat: "Global workforce — international workers pull the median down significantly",
    donatesNE: false,
    proxyUrl: "https://www.sec.gov/Archives/edgar/data/0000102729/000110465925022798/tm2429520-5_def14a.htm",
  },
  {
    name: "Nelnet",
    ticker: "NNI / NYSE",
    ceo: "Jeffery Noordhoek",
    ceoPay: 1555613,
    medianPay: 57240,
    ratio: 27,
    employees: 7000,
    caveat: "Lincoln-based student loan servicer — lowest CEO-to-worker ratio of any Nebraska public company",
    donatesNE: false,
    proxyUrl: "https://www.sec.gov/Archives/edgar/data/0001258602/000125860225000019/nni-20250401.htm",
  },
  {
    name: "Werner Enterprises",
    ticker: "WERN / NASDAQ",
    ceo: "Derek J. Leathers",
    ceoPay: 5824493,
    medianPay: 58260,
    ratio: 100,
    employees: 14000,
    caveat: "Median worker is a truck driver",
    donatesNE: true,
    donation: "$769,416",
    proxyUrl: "https://www.sec.gov/Archives/edgar/data/0000793074/000079307425000016/wern-20250326.htm",
  },
  {
    name: "CSG Systems",
    ticker: "CSGS / NASDAQ",
    ceo: "Brian Shepherd",
    ceoPay: 11128580,
    medianPay: 80098,
    ratio: 139,
    employees: 5000,
    caveat: "Omaha-based billing and revenue management technology company",
    donatesNE: false,
    proxyUrl: "https://www.sec.gov/Archives/edgar/data/0001005757/000130817925000330/csgs012135-def14a.htm",
  },
  {
    name: "Berkshire Hathaway",
    ticker: "BRK.B / NYSE",
    ceo: "Warren Buffett",
    ceoPay: 389488,
    medianPay: 93709,
    ratio: 4,
    employees: 387815,
    caveat: "CEO took a $100K salary. Greg Abel becomes CEO in 2026 at $25M — next year's ratio will look very different.",
    donatesNE: false,
    proxyUrl: "https://www.sec.gov/Archives/edgar/data/0001067983/000119312526106253/d882687ddef14a.htm",
  },
  {
    name: "Union Pacific",
    ticker: "UNP / NYSE",
    ceo: "V. James Vena",
    ceoPay: 17644763,
    medianPay: 103190,
    ratio: 131,
    employees: 34100,
    caveat: "Median worker is a unionized signal foreman — collective bargaining shows",
    donatesNE: true,
    donation: "$237,587",
    proxyUrl: "https://www.sec.gov/Archives/edgar/data/0000100885/000114036125010237/ny20039220x771_def14a.htm",
  },
  {
    name: "Green Plains",
    ticker: "GPRE / NASDAQ",
    ceo: "Todd Becker",
    ceoPay: 6004773,
    medianPay: 106136,
    ratio: 57,
    employees: 1500,
    caveat: "Ethanol producer — new CEO Chris Osowski took over August 2025",
    donatesNE: true,
    donation: "$121,052",
    proxyUrl: "https://www.sec.gov/Archives/edgar/data/0001309402/000130940225000074/gpre-20250424.htm",
  },
];

const PRIVATE_COMPANIES = [
  { name: "Kiewit Corporation", size: "~$16.8B revenue, Fortune 500 #247", note: "Employee-owned construction giant" },
  { name: "Mutual of Omaha", size: "~$14.6B revenue, Fortune 500 #299", note: "Major insurer" },
  { name: "First National Bank of Nebraska", size: "Largest privately held bank in the US", note: "" },
  { name: "CHI Health / CommonSpirit", size: "Major hospital system", note: "Nonprofit" },
  { name: "HDR Inc.", size: "Engineering & architecture", note: "" },
  { name: "Physicians Mutual", size: "Insurance", note: "" },
];

const SORTED = [...COMPANIES].sort((a, b) => a.medianPay - b.medianPay);

function fmt(n) {
  return "$" + n.toLocaleString();
}

function getLWStatus(medianPay) {
  if (medianPay >= SINGLE_PARENT_LW)
    return { label: "Covers most households", color: "#059669", ring: "ring-emerald-200", bg: "bg-emerald-50", text: "text-emerald-700", bar: "#059669" };
  if (medianPay >= SINGLE_ADULT_LW)
    return { label: "Single adult — not a family", color: "#d97706", ring: "ring-amber-200", bg: "bg-amber-50", text: "text-amber-700", bar: "#d97706" };
  return { label: "Below living wage", color: "#c8102e", ring: "ring-red-200", bg: "bg-red-50", text: "text-red-700", bar: "#c8102e" };
}

export default function LivingWageClient() {
  const [activeHousehold, setActiveHousehold] = useState(0);
  const hh = LIVING_WAGE_HOUSEHOLDS[activeHousehold];
  const totalMonthly = hh.expenses.reduce((s, e) => s + e.monthly, 0);
  const maxExpense = Math.max(...hh.expenses.map((e) => e.monthly));

  const takeHomeA = 3300;
  const takeHomeB = 5900;
  const totalA = BUDGET_LINES.reduce((s, l) => s + l.a, 0);
  const totalB = BUDGET_LINES.reduce((s, l) => s + l.b, 0);
  const leftA = takeHomeA - totalA;
  const leftB = takeHomeB - totalB;

  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Follow the money</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">What a Living Wage Actually Costs in Sarpy County</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            A pay gap isn't just a ratio. It's the difference between building a life and surviving paycheck to paycheck.
            Here's what the numbers mean on the ground — in your grocery store, your gas tank, your rent.
          </p>
        </div>

        {/* Lede */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">The real question</p>
          <p className="text-white font-semibold text-lg leading-snug mb-3">
            A CEO making 100x their median worker isn't automatically a villain — if that worker is making $100K, they're buying a house.
            But if that worker is making $52K and raising two kids alone in Sarpy County, they're in survival mode.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            The MIT Living Wage Calculator measures the minimum income needed to cover basic expenses in a given county —
            no luxuries, no savings, just the floor. Here's what that floor looks like in Sarpy County in 2025,
            and how Omaha's major employers stack up against it.
          </p>
        </div>

        {/* MIT Living Wage Section */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">MIT Living Wage — Sarpy County, NE · 2025</h2>
        <p className="text-xs text-gray-400 mb-4">
          Source: <a href="https://livingwage.mit.edu/counties/31153" target="_blank" rel="noreferrer" className="hover:text-[#c8102e] underline">livingwage.mit.edu/counties/31153</a>
        </p>

        {/* Household type selector */}
        <div className="flex flex-wrap gap-2 mb-5">
          {LIVING_WAGE_HOUSEHOLDS.map((h, i) => (
            <button
              key={h.type}
              onClick={() => setActiveHousehold(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeHousehold === i
                  ? "bg-[#0a0e1a] text-white"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-gray-400"
              }`}
            >
              {h.type}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="p-5 border-b border-gray-100">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-base font-bold text-gray-900">{hh.type}</h3>
                <p className="text-xs text-gray-400">{hh.subhead}</p>
                {hh.note && <p className="text-xs text-amber-600 mt-1">{hh.note}</p>}
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-[#c8102e]">{fmt(hh.annual)}</div>
                <div className="text-xs text-gray-400">minimum annual income needed</div>
                <div className="text-sm font-semibold text-gray-600 mt-0.5">${hh.hourly}/hr · full time</div>
              </div>
            </div>
          </div>
          <div className="p-5 space-y-3">
            {hh.expenses.filter(e => e.monthly > 0).map((e) => (
              <div key={e.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-600">{e.label}</span>
                  <span className="text-xs font-bold text-gray-900">{fmt(e.monthly)}/mo</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(e.monthly / maxExpense) * 100}%`, backgroundColor: "#c8102e", opacity: 0.75 }}
                  />
                </div>
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900">Total monthly need</span>
              <span className="text-sm font-bold text-[#c8102e]">{fmt(totalMonthly)}/mo</span>
            </div>
            <p className="text-[10px] text-gray-400 leading-relaxed">
              MIT Living Wage covers food, housing, transportation, healthcare, childcare, and essential personal expenses.
              It does not include retirement savings, vacations, or emergencies. This is the floor, not comfort.
            </p>
          </div>
        </div>

        {/* $50K vs $100K comparison */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What $50K vs. $100K Actually Buys in Sarpy County</h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { salary: 50000, takeHome: takeHomeA, total: totalA, left: leftA, lines: BUDGET_LINES.map(l => ({ ...l, amount: l.a })) },
            { salary: 100000, takeHome: takeHomeB, total: totalB, left: leftB, lines: BUDGET_LINES.map(l => ({ ...l, amount: l.b })) },
          ].map((scenario) => (
            <div key={scenario.salary} className={`bg-white rounded-2xl shadow-sm border overflow-hidden ${scenario.left < 800 ? "border-red-100" : "border-gray-100"}`}>
              <div className={`h-1 w-full ${scenario.left < 800 ? "bg-[#c8102e]" : "bg-emerald-500"}`} />
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xl font-black text-gray-900">{fmt(scenario.salary)}/yr</div>
                    <div className="text-xs text-gray-400">~{fmt(scenario.takeHome)}/mo take-home after NE taxes</div>
                  </div>
                  <div className={`text-right`}>
                    <div className={`text-lg font-bold ${scenario.left < 800 ? "text-[#c8102e]" : "text-emerald-600"}`}>
                      {fmt(scenario.left)}/mo left
                    </div>
                    <div className="text-[10px] text-gray-400">after essentials</div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {scenario.lines.map((line) => (
                    <div key={line.label} className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-600">{line.label}</span>
                        {line.note && <span className="text-[10px] text-gray-400 ml-1">({line.note})</span>}
                      </div>
                      <span className="text-xs font-semibold text-gray-900">{fmt(line.amount)}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-gray-100 flex justify-between">
                    <span className="text-xs font-bold text-gray-700">Essential expenses</span>
                    <span className="text-xs font-bold text-gray-900">{fmt(scenario.total)}</span>
                  </div>
                </div>

                <div className={`rounded-xl p-3 ${scenario.left < 800 ? "bg-red-50" : "bg-emerald-50"}`}>
                  <p className={`text-xs font-semibold mb-1 ${scenario.left < 800 ? "text-red-700" : "text-emerald-700"}`}>
                    {scenario.left < 800 ? "Reality" : "Reality"}
                  </p>
                  {scenario.salary === 50000 ? (
                    <ul className="text-xs text-red-700 space-y-1">
                      <li>• No retirement savings</li>
                      <li>• No vacation budget</li>
                      <li>• One car repair = credit card debt</li>
                      <li>• Emergency fund takes 10+ months to build</li>
                      <li>• Single adult only — add a child and you're in the red</li>
                    </ul>
                  ) : (
                    <ul className="text-xs text-emerald-700 space-y-1">
                      <li>• Can save ~$1,250/mo for retirement</li>
                      <li>• Emergency fund built in 6–8 months</li>
                      <li>• Can absorb a $1,000 emergency without debt</li>
                      <li>• Vacation is possible (~$2,400/yr)</li>
                      <li>• Solidly middle class by Sarpy County standards</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8">
          <p className="text-sm font-semibold text-amber-800 mb-1">The single parent reality</p>
          <p className="text-sm text-amber-700 leading-relaxed">
            A single parent with two kids in Sarpy County needs roughly <strong>$98,000/year before taxes</strong> just to cover
            basic expenses — rent, food, childcare, transportation, healthcare. That's not a vacation. That's not savings.
            That's just keeping the lights on. At $50K, a single parent with two kids is roughly <strong>$48,000/year short</strong> of
            the floor — and no amount of budgeting fixes a $4,000/month deficit.
          </p>
        </div>

        {/* Company Scorecard */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Omaha-Area Employers — Median Worker vs. Living Wage</h2>
        <p className="text-xs text-gray-400 mb-1">Sorted by median worker pay, lowest to highest. All data from SEC DEF 14A proxy filings.</p>
        <div className="flex flex-wrap gap-3 mb-5 text-xs">
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="text-gray-500">Covers most households</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="text-gray-500">Single adult only</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#c8102e]" /><span className="text-gray-500">Below living wage</span></div>
        </div>

        <div className="space-y-4 mb-8">
          {SORTED.map((co) => {
            const status = getLWStatus(co.medianPay);
            const ceoPerWorker = Math.round(co.ceoPay / co.employees);
            const gapToSingleParent = Math.max(0, SINGLE_PARENT_LW - co.medianPay);
            const totalCostToClose = gapToSingleParent * co.employees;
            const costAsMultipleOfCEO = totalCostToClose > 0 ? (totalCostToClose / co.ceoPay).toFixed(1) : null;
            const maxBar = 120000;

            return (
              <div key={co.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-1 w-full" style={{ backgroundColor: status.color }} />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-gray-900">{co.name}</h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 ring-1 ring-gray-200">{co.ticker}</span>
                        {co.donatesNE && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-[#c8102e] ring-1 ring-red-200">
                            Donated {co.donation} to NE politics
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">CEO: {co.ceo}</p>
                    </div>
                    <div className={`text-xs font-bold px-3 py-1.5 rounded-xl ${status.bg} ${status.text}`}>
                      {status.label}
                    </div>
                  </div>

                  {/* Pay bars */}
                  <div className="space-y-2 mb-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-500">CEO pay</span>
                        <span className="text-xs font-bold text-gray-900">{fmt(co.ceoPay)}</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gray-300" style={{ width: `${Math.min((co.ceoPay / 20000000) * 100, 100)}%` }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-500">Median worker pay</span>
                        <span className="text-xs font-bold" style={{ color: status.color }}>{fmt(co.medianPay)}</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${(co.medianPay / maxBar) * 100}%`, backgroundColor: status.color }} />
                      </div>
                    </div>
                    {/* Living wage reference lines */}
                    <div className="flex gap-4 pt-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-0.5 bg-gray-400" style={{ borderTop: "2px dashed #6b7280" }} />
                        <span className="text-[10px] text-gray-400">Single adult floor: $45,323</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-0.5" style={{ borderTop: "2px dashed #d97706" }} />
                        <span className="text-[10px] text-gray-400">Single parent floor: $82,701</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3 mb-3">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Pay ratio</div>
                      <div className="text-lg font-bold text-gray-900">{co.ratio}:1</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">CEO pay ÷ employees</div>
                      <div className="text-lg font-bold text-gray-900">{fmt(ceoPerWorker)}</div>
                      <div className="text-[10px] text-gray-400">per worker if redistributed</div>
                    </div>
                    {gapToSingleParent > 0 ? (
                      <div className="bg-amber-50 rounded-xl p-3">
                        <div className="text-[10px] text-amber-600 uppercase tracking-widest mb-1">Gap to single parent wage</div>
                        <div className="text-lg font-bold text-amber-700">{fmt(gapToSingleParent)}/worker</div>
                        {costAsMultipleOfCEO && (
                          <div className="text-[10px] text-amber-600">
                            Closing it costs {costAsMultipleOfCEO}× CEO pay total
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="bg-emerald-50 rounded-xl p-3">
                        <div className="text-[10px] text-emerald-600 uppercase tracking-widest mb-1">Living wage status</div>
                        <div className="text-sm font-bold text-emerald-700">Above single parent floor</div>
                        <div className="text-[10px] text-emerald-600">Workers can support a family</div>
                      </div>
                    )}
                  </div>

                  {co.caveat && (
                    <p className="text-xs text-gray-400 italic">{co.caveat}</p>
                  )}

                  <div className="flex justify-end mt-3">
                    <a href={co.proxyUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
                      SEC proxy filing ↗
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Private companies */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-1">Major private employers — no disclosure required</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            These are some of the largest employers in the Omaha metro. Because they are privately held,
            they are not required by law to disclose CEO pay, median worker pay, or pay ratios.
            What they pay their workers is entirely their own business — which is itself worth noting.
          </p>
          <div className="space-y-2">
            {PRIVATE_COMPANIES.map((co) => (
              <div key={co.name} className="flex items-start justify-between gap-4 py-2.5 border-b border-gray-50 last:border-0">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{co.name}</p>
                  {co.note && <p className="text-xs text-gray-400">{co.note}</p>}
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-gray-400">{co.size}</p>
                  <p className="text-xs font-bold text-gray-400">Not disclosed</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The bottom line */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">The bottom line</p>
          <p className="text-white font-semibold text-base leading-snug mb-3">
            The ratio alone doesn't tell you whether workers are okay. Union Pacific's 131:1 ratio looks alarming —
            but their median worker makes $103K. Werner's 100:1 ratio is a different story when the median worker
            makes $58K and is trying to raise a family.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-3">
            The real question is whether the people at the bottom can afford to live where they work.
            In Sarpy County — one of the most expensive areas in Nebraska — the answer for a single parent
            at most of these companies is no.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            CEO pay redistribution alone wouldn't solve it — the math doesn't work at scale.
            But profit sharing, wage floors, and the kind of investment in workers that shows up in
            union contracts (see: Union Pacific's median worker) can and does move the needle.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <Link href="/pay-gap" className="text-xs font-medium text-white/50 hover:text-white transition-colors">
              See corporate donations to NE politics ↗
            </Link>
            <Link href="/two-tax-systems" className="text-xs font-medium text-white/50 hover:text-white transition-colors">
              See how the wealthy avoid taxes ↗
            </Link>
          </div>
        </div>

        {/* Sources */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Sources</p>
          <div className="space-y-2">
            {[
              { label: "MIT Living Wage Calculator — Sarpy County, NE", url: "https://livingwage.mit.edu/counties/31153" },
              { label: "HUD Fair Market Rents — Sarpy County 2025", url: "https://www.huduser.gov/portal/datasets/fmr.html" },
              { label: "KFF 2025 Employer Health Benefits Survey", url: "https://www.kff.org/health-costs/2025-employer-health-benefits-survey/" },
              { label: "Experian — Average Car Payment Q3 2025", url: "https://www.experian.com/blogs/ask-experian/average-car-payment/" },
              { label: "Utility-Rates.com — Omaha 2026", url: "https://utility-rates.com/nebraska/omaha" },
              { label: "Winnie — Cost of Childcare in Nebraska", url: "https://winnie.com/resources/the-cost-of-childcare-in-nebraska" },
              { label: "AFL-CIO Executive Paywatch 2024", url: "https://aflcio.org/paywatch" },
              { label: "SEC EDGAR — DEF 14A proxy filings for all companies listed", url: "https://efts.sec.gov/LATEST/search-index?q=%22pay+ratio%22&forms=DEF+14A" },
            ].map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                className="flex items-start gap-2 text-xs text-gray-500 hover:text-[#c8102e] transition-colors group">
                <span className="text-gray-300 group-hover:text-[#c8102e] shrink-0 mt-0.5">↗</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
