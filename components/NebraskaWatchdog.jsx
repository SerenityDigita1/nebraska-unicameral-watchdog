"use client";
import { useState } from "react";
import Link from "next/link";

const BILLS = [
  {
    id: "LB9",
    title: "Income tax rate reduction — individual filers",
    senator: "Sen. Linehan",
    committee: "Revenue Committee",
    status: "committee",
    statusLabel: "In committee",
    plain:
      "Proposes to lower the percentage of income Nebraskans pay in state taxes, phased in over several years. Could reduce state revenue — critics argue it benefits higher earners more.",
    url: "https://nebraskalegislature.gov/bills/view_bill.php?DocumentID=60014",
    askPrompt:
      "Tell me more about Nebraska LB 9 income tax reduction — who does it help and who does it hurt?",
  },
  {
    id: "LB52",
    title: "School property tax relief — homestead exemption expansion",
    senator: "Sen. Murman",
    committee: "Education Committee",
    status: "vote",
    statusLabel: "Floor vote pending",
    plain:
      "Would expand who qualifies for lower property taxes if they live in their home — focused on relieving pressure on Nebraska farmers and rural homeowners who say school funding levies are too high.",
    url: "https://nebraskalegislature.gov/bills/search_by_date.php?Legislature=109",
    askPrompt:
      "Explain Nebraska LB 52 school property tax relief in simple terms — what would it actually change for a homeowner in Omaha?",
  },
  {
    id: "LB315",
    title: "Medicaid work requirements — able-bodied adult recipients",
    senator: "Sen. McDonnell",
    committee: "Health & Human Services",
    status: "committee",
    statusLabel: "Committee hearing",
    plain:
      "Would require some adults on Medicaid to work, volunteer, or attend school to keep their health coverage. Supporters say it encourages self-sufficiency; opponents say it would kick sick or caregiving adults off health insurance.",
    url: "https://nebraskalegislature.gov/bills/search_by_date.php?Legislature=109",
    askPrompt:
      "What are the real-world effects of Medicaid work requirements? Who would lose coverage in Nebraska under a bill like LB 315?",
  },
  {
    id: "LB167",
    title: "Concealed carry permit — permitless carry expansion",
    senator: "Sen. Brandt",
    committee: "Judiciary Committee",
    status: "signed",
    statusLabel: "Signed into law",
    plain:
      "Nebraska now allows most adults 21+ to carry a concealed handgun without a permit. This removes the state's training and background check requirement for concealed carry — open carry was already legal.",
    url: null,
    askPrompt:
      "Nebraska passed permitless concealed carry. What does that mean for everyday Nebraskans — what changed practically?",
  },
];

const VETOES = [
  {
    id: "LB50",
    title: "Paid sick leave — private employers mandate",
    action: "Vetoed",
    actionType: "veto",
    note: "Passed legislature · Vetoed by Gov. Pillen",
    plain:
      "The legislature passed a bill requiring private employers to give workers paid sick days. The governor vetoed it, saying it would burden small businesses. Supporters say it protects workers who currently have to choose between their paycheck and their health.",
    askPrompt:
      "Nebraska Governor Pillen vetoed a paid sick leave mandate. What were the arguments on both sides, and how does Nebraska compare to other states on this issue?",
  },
  {
    id: "LB1",
    title: "School funding formula — TEEOSA revision",
    action: "Line-item veto",
    actionType: "partial",
    note: "Signed with line-item vetoes · Gov. Pillen",
    plain:
      "Nebraska's main school funding formula was updated, but the governor used a line-item veto to cut specific provisions. Some districts will see less state aid than the legislature intended.",
    askPrompt:
      "Explain Nebraska TEEOSA school funding — what does it do and why is it controversial? How does the line-item veto work in Nebraska?",
  },
];

const DONORS = [
  { name: "Sandhills Global",                        amount: "$3,364,667", url: "https://www.opensecrets.org/search?q=Sandhills+Global&type=donors" },
  { name: "US Senate",                               amount: "$3,283,347", url: "https://www.opensecrets.org/search?q=US+Senate&type=donors" },
  { name: "Werner Enterprises",                      amount: "$769,416",   url: "https://www.opensecrets.org/search?q=Werner+Enterprises&type=donors" },
  { name: "Exodus Movement",                         amount: "$692,400",   url: "https://www.opensecrets.org/search?q=Exodus+Movement&type=donors" },
  { name: "American Excellence PAC",                 amount: "$571,699",   url: "https://www.opensecrets.org/search?q=American+Excellence+PAC&type=donors" },
  { name: "Herbster Angus Farms",                    amount: "$437,443",   url: "https://www.opensecrets.org/search?q=Herbster+Angus+Farms&type=donors" },
  { name: "HDR Inc",                                 amount: "$429,329",   url: "https://www.opensecrets.org/search?q=HDR+Inc&type=donors" },
  { name: "Tenaska Energy",                          amount: "$421,367",   url: "https://www.opensecrets.org/search?q=Tenaska+Energy&type=donors" },
  { name: "Kiewit Corp",                             amount: "$348,822",   url: "https://www.opensecrets.org/search?q=Kiewit+Corp&type=donors" },
  { name: "University of Nebraska",                  amount: "$345,142",   url: "https://www.opensecrets.org/search?q=University+of+Nebraska&type=donors" },
  { name: "Lozier Corp",                             amount: "$327,780",   url: "https://www.opensecrets.org/search?q=Lozier+Corp&type=donors" },
  { name: "Nebraska Railroaders For Public Safety",  amount: "$250,000",   url: "https://www.opensecrets.org/search?q=Nebraska+Railroaders+For+Public+Safety&type=donors" },
  { name: "Crete Carrier Corp",                      amount: "$241,079",   url: "https://www.opensecrets.org/search?q=Crete+Carrier+Corp&type=donors" },
  { name: "Union Pacific Corp",                      amount: "$237,587",   url: "https://www.opensecrets.org/search?q=Union+Pacific+Corp&type=donors" },
  { name: "Hawkins Construction",                    amount: "$223,330",   url: "https://www.opensecrets.org/search?q=Hawkins+Construction&type=donors" },
  { name: "Cornerstone Legacy LLC",                  amount: "$223,000",   url: "https://www.opensecrets.org/search?q=Cornerstone+Legacy+LLC&type=donors" },
  { name: "State of Nebraska",                       amount: "$191,427",   url: "https://www.opensecrets.org/search?q=State+of+Nebraska&type=donors" },
  { name: "Baxter Auto Group",                       amount: "$177,595",   url: "https://www.opensecrets.org/search?q=Baxter+Auto+Group&type=donors" },
  { name: "University of Nebraska Medical Center",   amount: "$149,235",   url: "https://www.opensecrets.org/search?q=University+of+Nebraska+Medical+Center&type=donors" },
  { name: "Green Plains",                            amount: "$121,052",   url: "https://www.opensecrets.org/search?q=Green+Plains&type=donors" },
];

const VOTER_MANDATES = [
  {
    id: "Initiative 436",
    title: "Paid Sick Leave",
    passed: "Passed by voters Nov. 2024",
    what: "Required employers to provide up to 56 hours/year of paid sick leave. Effective Oct. 1, 2025.",
    outcome: "gutted",
    outcomeLabel: "Gutted by legislature",
    what_happened: "LB 415 quietly raised the employer threshold from 0 to 11+ employees and added sweeping exemptions for agricultural workers, seasonal workers, and workers under 16. 140,000 Nebraskans lost the protections they voted for.",
    bill: "LB 415",
    source: "Nebraska Appleseed",
  },
  {
    id: "Initiatives 437 & 438",
    title: "Medical Cannabis",
    passed: "Passed 67–71% Nov. 2024",
    what: "Established a medical cannabis program. Commission required to begin issuing registrations by Oct. 1, 2025.",
    outcome: "blocked",
    outcomeLabel: "Blocked by filibuster",
    what_happened: "A regulation bill failed to get out of committee in April, then failed to overcome a filibuster in May led by Sen. Jared Storm. Gov. Pillen and AG Mike Hilgers actively encouraged senators not to vote. The law voters passed sits unimplemented.",
    bill: null,
    source: "Nebraska Public Media",
  },
  {
    id: "Initiative 433",
    title: "Minimum Wage Increase",
    passed: "Passed 58% in 2022",
    what: "Gradual increase to $15/hour by Jan. 1, 2026. Currently at $13.50/hour and on schedule.",
    outcome: "threatened",
    outcomeLabel: "Threatened — survived",
    what_happened: "LB 258 advanced 32–17 in April 2025 with amendments that would have weakened the increase. Opponents rallied and the effort stalled — but it signals the legislature is willing to revisit voter-approved wage law.",
    bill: "LB 258",
    source: "Nebraska Examiner",
  },
];

const SESSION_VETOES = [
  {
    id: "LB 319",
    title: "SNAP benefits for people with drug convictions",
    vote: "Passed 32–17",
    what: "Would have extended food assistance eligibility to people with 3+ drug felony convictions who had completed their sentence or were in treatment — not while incarcerated.",
    veto_reason: "Gov. Pillen called it a 'loophole for habitual offenders.' Override failed 24–24 (needed 30).",
    impact: "People who served their time and are in recovery remain cut off from food assistance.",
    source: "Nebraska Examiner",
  },
  {
    id: "LB 287",
    title: "Bed bug inspections in Omaha public housing",
    vote: "Passed 34–15",
    what: "Required pest inspections every 6 months in Omaha Housing Authority towers where low-income residents had been suffering severe bed bug infestations.",
    veto_reason: "Gov. Pillen called it 'needless duplicative government mandates.' Override failed 24–24.",
    impact: "Low-income residents in publicly subsidized housing have no new inspection requirements.",
    source: "Nebraska Examiner",
  },
];

const SESSION_WINS = [
  {
    id: "LB 168",
    title: "340B Drug Discount Protection",
    what: "Protected rural hospitals' access to the federal 340B drug discount program. Rural hospital pharmacists were losing ~40% of their savings from manufacturer restrictions.",
    why: "Rural hospitals operate on margins as thin as 1.4%. This kept many from closing.",
  },
  {
    id: "LB 140",
    title: "Cell phones out of schools",
    what: "Required all Nebraska schools to enact policies limiting cell phone use. Took effect before the 2025–26 school year.",
    why: "One of the few bills with broad bipartisan support and a clear benefit to kids and teachers.",
  },
  {
    id: "LB 383",
    title: "Social media parental controls",
    what: "Requires platforms to give parents tools to restrict their minor children's social media accounts. Passed 46–3.",
    why: "Strong public support and one of the session's clearest wins for Nebraska families.",
  },
];

const PROPERTY_TAX_SOURCES = [
  { label: "LB 34", url: "https://nebraskalegislature.gov/bills/view_bill.php?DocumentID=58075" },
  { label: "DOR LB 34 explainer", url: "https://revenue.nebraska.gov/sites/default/files/doc/news-release/ndr/LB_34_News_Release_Final.pdf" },
  { label: "DOR 2025 credits", url: "https://revenue.nebraska.gov/sites/default/files/doc/news-release/pad/2025/NewsRelease_2025_Real_Property_Tax_Credit_and_School_Dist_Prop_Tax_Relief_Credit.pdf" },
  { label: "DOR 2025 levy pie charts", url: "https://revenue.nebraska.gov/sites/default/files/doc/pad/research/valuation/2026/CurrentYr_VT_PieCharts_State%20%26%2093%20counties%202025.pdf" },
  { label: "Nebraska Examiner, Aug. 20, 2024", url: "https://nebraskaexaminer.com/2024/08/20/legislature-passes-slimmed-down-property-tax-relief-package-ends-nebraskas-special-session/" },
  { label: "Nebraska Examiner, Apr. 20, 2026", url: "https://nebraskaexaminer.com/2026/04/20/pillen-eyes-more-state-budget-cuts-to-help-offset-local-property-taxes/" },
  { label: "Nebraska Examiner, Jul. 9, 2026", url: "https://nebraskaexaminer.com/2026/07/09/pillen-talks-priorities-pivot-from-nebraska-primary-election-to-nov-3-faceoff/" },
  { label: "LB 814", url: "https://www.nebraskalegislature.gov/bills/view_bill.php?DocumentID=63258" },
  { label: "Referendum 435 · Ballotpedia", url: "https://ballotpedia.org/Nebraska_Referendum_435,_Private_Education_Scholarship_Program_Referendum_(2024)" },
];

const STATUS_CONFIG = {
  committee: { bar: "bg-blue-500", pill: "bg-blue-50 text-blue-700 ring-1 ring-blue-200" },
  vote:      { bar: "bg-amber-400", pill: "bg-amber-50 text-amber-700 ring-1 ring-amber-200" },
  veto:      { bar: "bg-red-500",  pill: "bg-red-50 text-red-700 ring-1 ring-red-200" },
  signed:    { bar: "bg-emerald-500", pill: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" },
  partial:   { bar: "bg-orange-400", pill: "bg-orange-50 text-orange-700 ring-1 ring-orange-200" },
};

function BillCard({ bill }) {
  const cfg = STATUS_CONFIG[bill.status] || STATUS_CONFIG.committee;
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4 hover:shadow-md transition-shadow">
      <div className={`h-1 w-full ${cfg.bar}`} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-start gap-2.5 flex-1 min-w-0">
            <span className="text-xs font-bold tracking-wide text-white bg-[#c8102e] px-2.5 py-1 rounded-lg shrink-0 mt-0.5">
              {bill.id}
            </span>
            <h3 className="text-sm font-semibold text-gray-900 leading-snug">
              {bill.title}
            </h3>
          </div>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${cfg.pill}`}>
            {bill.statusLabel}
          </span>
        </div>
        <p className="text-xs text-gray-400 mb-3">
          {bill.senator} · {bill.committee}
        </p>
        <div className="bg-gray-50 rounded-xl p-3.5 border-l-2 border-gray-300">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Plain English</p>
          <p className="text-sm text-gray-700 leading-relaxed">{bill.plain}</p>
        </div>
        <div className="flex gap-5 mt-3.5">
          {bill.url && (
            <a
              href={bill.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-[#c8102e] hover:underline"
            >
              View full bill ↗
            </a>
          )}
          <button
            onClick={() => window.open(`https://claude.ai/new?q=${encodeURIComponent(bill.askPrompt)}`, "_blank")}
            className="text-xs font-medium text-gray-500 hover:text-[#c8102e] transition-colors text-left"
          >
            Ask Claude about this ↗
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ num, label }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-200">
      <div className="text-3xl font-bold text-gray-900 tracking-tight">{num}</div>
      <div className="text-xs text-gray-500 mt-1 leading-tight">{label}</div>
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white/10 rounded-xl px-4 py-3 border border-white/10">
        <p className="text-white text-sm font-medium">You're on the list. We'll be in touch before January 2027.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-5 py-2.5 bg-[#c8102e] text-white text-sm font-semibold rounded-xl hover:bg-[#a50d26] disabled:opacity-50 transition-colors shrink-0"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs mt-1 w-full">Something went wrong — try again.</p>
      )}
    </form>
  );
}

export default function NebraskaWatchdog({ defaultTab = "session" }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [billInput, setBillInput] = useState("");
  const [translating, setTranslating] = useState(false);
  const [translation, setTranslation] = useState("");
  const [error, setError] = useState("");

  const tabs = [
    { id: "session",   label: "2025 Session" },
    { id: "bills",     label: "Bills & Debates" },
    { id: "translate", label: "Translate a Bill" },
    { id: "vetoes",    label: "Governor's Desk" },
    { id: "money",     label: "Follow the Money" },
  ];

  async function translateBill() {
    if (!billInput.trim()) return;
    setTranslating(true);
    setTranslation("");
    setError("");
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: billInput }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setTranslation(data.translation);
    } catch {
      setError("Translation failed — check your API key and try again.");
    }
    setTranslating(false);
  }

  return (
    <div className="min-h-screen bg-[#f4f5f7]">

      {/* Hero Header */}
      <header className="bg-[#0a0e1a] relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c8102e]/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 pt-10 pb-8 relative">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase bg-[#c8102e]/10 border border-[#c8102e]/30 px-3 py-1.5 rounded-full">
              Watchdog
            </span>
            <span className="text-[10px] font-medium tracking-widest text-white/30 uppercase">
              District 49 · Sarpy County
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight leading-tight mb-2">
            Nebraska Unicameral<br />
            <span className="text-[#c8102e]">Watchdog</span>
          </h1>
          <p className="text-white/50 text-sm max-w-md leading-relaxed mb-5">
            Tracking your unicameral — bills, vetoes, and campaign money
            translated into plain English for everyday Nebraskans.
          </p>

          {/* Current Status Banner */}
          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-8 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase shrink-0">Session Status</span>
            <p className="text-sm text-white/80">
              The 2026 short session (60 days, Jan–Apr) has ended. <span className="text-white font-medium">Next session: January 2027</span> for the 110th Legislature's long session.
            </p>
          </div>

          {/* Featured Investigation */}
          <div className="mb-8">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase mb-4">Featured Investigation</p>
            <Link
              href="/what-they-stopped-watching"
              className="block bg-white/5 border border-white/10 rounded-xl px-5 py-5 hover:bg-white/10 transition-colors"
            >
              <span className="inline-block text-[10px] font-bold tracking-[0.15em] text-white bg-[#c8102e] uppercase px-2.5 py-1 rounded-full mb-3">
                What They Stopped Watching
              </span>
              <h3 className="text-white font-bold text-lg mb-1">
                27 Cases in Douglas County. A Tracking Program Cut in 2025. A $1M Donation.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3 max-w-xl">
                The CDC stopped requiring states to track cyclospora four months after the company
                now linked to Nebraska's outbreak donated $1 million to the president's super PAC.
                The documented timeline, sourced directly — first in an ongoing series on federal
                monitoring rollbacks.
              </p>
              <span className="text-xs font-bold text-[#c8102e]">Read the full timeline →</span>
            </Link>
          </div>

          {/* Key Issues Section */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase mb-4">Key Issues</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/outside-money" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-colors">
                <span className="text-xs font-bold tracking-widest text-[#c8102e] uppercase">2026 Senate Race</span>
                <h3 className="text-white font-bold mt-2 mb-1">Outside Money in Nebraska Politics</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  How $28.9M in outside money shaped political decisions and what the record actually shows.
                </p>
              </Link>

              <Link href="/tariff-action" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-colors">
                <span className="text-xs font-bold tracking-widest text-[#c8102e] uppercase">Economic Impact</span>
                <h3 className="text-white font-bold mt-2 mb-1">Tariffs Are Costing Nebraska Families</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  $1,700+ per year. Who's fighting back, and what bill is on the table to help.
                </p>
              </Link>

              <Link href="/living-wage" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-colors">
                <span className="text-xs font-bold tracking-widest text-[#c8102e] uppercase">Workers & Economy</span>
                <h3 className="text-white font-bold mt-2 mb-1">What Does It Take to Live in Nebraska?</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Housing, food, childcare, transportation. The real cost of living here.
                </p>
              </Link>

              <Link href="/530a-accounts" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-colors">

                <span className="text-xs font-bold tracking-widest text-[#c8102e] uppercase">Consumer Protection</span>

                <h3 className="text-white font-bold mt-2 mb-1">Those $1,000 Emails About Your Kids</h3>

                <p className="text-white/60 text-sm leading-relaxed">

                  Some are real advertising, some are fraud. How to tell the difference, and what the fakes are trying to take.

                </p>

              </Link>


              <Link href="/issues" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-colors">
                <span className="text-xs font-bold tracking-widest text-[#c8102e] uppercase">All Issues</span>
                <h3 className="text-white font-bold mt-2 mb-1">See All Key Topics</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Data centers, medicaid, campaign finance, and everything we're tracking.
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-1 border-b border-white/10 mt-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-all whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? "border-[#c8102e] text-white"
                    : "border-transparent text-white/40 hover:text-white/70"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">

        {/* Session Recap Tab */}
        {activeTab === "session" && (
          <div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <StatCard num="700+" label="Bills introduced in 2025" />
              <StatCard num="209"  label="Signed into law" />
              <StatCard num="2"    label="Vetoed by governor" />
              <StatCard num="49"   label="Senators" />
            </div>

            {/* Lede */}
            <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-6">
              <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">109th Legislature · Long Session · Jan 8 – Jun 2, 2025 · 90 days</p>
              <p className="text-white font-semibold text-base leading-snug mb-2">
                Nebraska voters showed up in November 2024. The legislature spent the next 5 months undoing it.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Voters passed paid sick leave, medical cannabis, and a minimum wage increase. The 109th Legislature gutted sick leave protections for 140,000 workers, blocked cannabis implementation entirely, and took a run at the minimum wage. Meanwhile, the state handed $1.5 billion in corporate tax incentives to businesses over the next four years. The governor vetoed food aid for people with drug convictions. He also vetoed bed bug inspections for public housing residents. That's the 2025 session.
              </p>
            </div>

            {/* The People Voted */}
            <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">The People Voted. Here's What Happened.</h2>
            <div className="space-y-4 mb-8">
              {VOTER_MANDATES.map((m) => {
                const outcomeStyles = {
                  gutted:    { bar: "bg-red-500",    pill: "bg-red-50 text-red-700 ring-1 ring-red-200",    icon: "✕" },
                  blocked:   { bar: "bg-red-500",    pill: "bg-red-50 text-red-700 ring-1 ring-red-200",    icon: "✕" },
                  threatened:{ bar: "bg-amber-400",  pill: "bg-amber-50 text-amber-700 ring-1 ring-amber-200", icon: "⚠" },
                };
                const style = outcomeStyles[m.outcome];
                return (
                  <div key={m.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className={`h-1 w-full ${style.bar}`} />
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-start gap-2.5">
                          <span className="text-xs font-bold text-white bg-[#c8102e] px-2.5 py-1 rounded-lg shrink-0 mt-0.5">{m.id}</span>
                          <div>
                            <h3 className="text-sm font-bold text-gray-900">{m.title}</h3>
                            <p className="text-xs text-gray-400 mt-0.5">{m.passed}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${style.pill}`}>
                          {style.icon} {m.outcomeLabel}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3 leading-relaxed border-b border-gray-100 pb-3">
                        <strong className="text-gray-700">What voters approved:</strong> {m.what}
                      </p>
                      <div className="bg-red-50 rounded-xl p-3.5 border-l-2 border-red-300">
                        <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-1.5">What actually happened</p>
                        <p className="text-sm text-gray-800 leading-relaxed">{m.what_happened}</p>
                      </div>
                      {m.bill && (
                        <p className="text-xs text-gray-400 mt-2.5">Bill: <span className="font-semibold text-gray-600">{m.bill}</span> · Source: {m.source}</p>
                      )}
                      {!m.bill && (
                        <p className="text-xs text-gray-400 mt-2.5">Source: {m.source}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Vetoed */}
            <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Vetoed by the Governor</h2>
            <div className="space-y-4 mb-8">
              {SESSION_VETOES.map((v) => (
                <div key={v.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="h-1 w-full bg-red-500" />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-start gap-2.5">
                        <span className="text-xs font-bold text-white bg-[#c8102e] px-2.5 py-1 rounded-lg shrink-0 mt-0.5">{v.id}</span>
                        <h3 className="text-sm font-bold text-gray-900">{v.title}</h3>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 bg-red-50 text-red-700 ring-1 ring-red-200">Vetoed</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{v.vote} · Override failed 24–24</p>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{v.what}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-xl p-3 border-l-2 border-gray-300">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Governor's reasoning</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{v.veto_reason}</p>
                      </div>
                      <div className="bg-red-50 rounded-xl p-3 border-l-2 border-red-300">
                        <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-1">Real impact</p>
                        <p className="text-sm text-gray-800 leading-relaxed">{v.impact}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2.5">Source: {v.source}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Corporate stat callout */}
            <div className="bg-[#0a0e1a] rounded-2xl p-5 mb-8">
              <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">Meanwhile</p>
              <p className="text-3xl font-bold text-white mb-1">$1.5 Billion</p>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                In business tax incentives the Nebraska state auditor flagged as available to corporations over the next four fiscal years — the same session that denied food aid to people in recovery and blocked inspections for bed bug-infested public housing.
              </p>
              <p className="text-white/40 text-xs">Source: Nebraska Examiner, April 2025 · Gov. Pillen acknowledged the need to make incentives "more people-focused and less company-focused"</p>
            </div>

            {/* Wins */}
            <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What Actually Passed for Regular Nebraskans</h2>
            <div className="space-y-3 mb-6">
              {SESSION_WINS.map((w) => (
                <div key={w.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="h-1 w-full bg-emerald-500" />
                  <div className="p-5">
                    <div className="flex items-start gap-2.5 mb-2">
                      <span className="text-xs font-bold text-white bg-emerald-600 px-2.5 py-1 rounded-lg shrink-0 mt-0.5">{w.id}</span>
                      <h3 className="text-sm font-bold text-gray-900">{w.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">{w.what}</p>
                    <p className="text-xs text-gray-400 italic">{w.why}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 text-center pb-2">
              Sources: Nebraska Examiner · Nebraska Public Media · Ballotpedia · Nebraska Appleseed
            </p>

            {/* On the trail vs in the chamber — 2026 property-tax ads */}
            <section id="trail-vs-chamber" className="mt-10 pt-8 border-t border-gray-200">
              <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">On the Trail vs in the Chamber</h2>

              <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-6">
                <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">Nov. 3, 2026 · Pillen vs Walz · Farmer-coded ads</p>
                <p className="text-white font-semibold text-base leading-snug mb-2">
                  He says he cut property taxes. The Legislature passed a coupon. The levy went back up.
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Gov. Jim Pillen, a Columbus hog producer, is running for re-election against Lynne Walz. Late-August TV and digital ads aimed at farmers say “we reduced property taxes.” That is not the 40–50% mill-levy cut he touted in 2024. He has dated the next big push to 2027. The ad oversells a coupon as a cut.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="h-1 w-full bg-amber-400" />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-start gap-2.5">
                        <span className="text-xs font-bold text-white bg-[#c8102e] px-2.5 py-1 rounded-lg shrink-0 mt-0.5">Campaign</span>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900">We reduced property taxes</h3>
                          <p className="text-xs text-gray-400 mt-0.5">What the ads say vs who actually sets the mill rate</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                        Coupon, not a cut
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3 leading-relaxed border-b border-gray-100 pb-3">
                      <strong className="text-gray-700">What the ad says:</strong> Farmer-coded campaign language claims the administration reduced property taxes. The state cannot levy a property tax. Schools, counties, and cities set mill rates.
                    </p>
                    <div className="bg-red-50 rounded-xl p-3.5 border-l-2 border-red-300">
                      <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-1.5">What actually happened</p>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        Lincoln did not cut the mill levy. It printed a credit on the tax statement — a coupon the state reimburses. Everyday homeowners get the school coupon too. The farmer tilt is the older credit, the 75% ag valuation, and the 2027 ask — not a different mill rate the governor set.
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-2.5">
                      Source:{" "}
                      <a href="https://nebraskaexaminer.com/2026/07/09/pillen-talks-priorities-pivot-from-nebraska-primary-election-to-nov-3-faceoff/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Nebraska Examiner</a>
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="h-1 w-full bg-emerald-500" />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-start gap-2.5">
                        <span className="text-xs font-bold text-white bg-emerald-600 px-2.5 py-1 rounded-lg shrink-0 mt-0.5">LB 34</span>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900">School District Property Tax Relief Act</h3>
                          <p className="text-xs text-gray-400 mt-0.5">Signed Aug. 20, 2024 · Passed 40–3</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                        What passed
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      About a 30% credit on the school-district line (non-bond) for all real property, printed on the statement. The Department of Revenue called it equitable — 30% of school district taxes, not the whole bill. Same package: the Property Tax Growth Limitation Act for cities and counties. Earlier,{" "}
                      <span className="font-semibold text-gray-800">LB 243 (2023)</span> moved most community-college operating levies to the state. That caused the tiny 2024 statewide dip.
                    </p>
                    <p className="text-xs text-gray-400">
                      Bill:{" "}
                      <a href="https://nebraskalegislature.gov/bills/view_bill.php?DocumentID=58075" target="_blank" rel="noreferrer" className="font-semibold text-gray-600 hover:text-[#c8102e]">LB 34</a>
                      {" "}· Source:{" "}
                      <a href="https://nebraskaexaminer.com/2024/08/20/legislature-passes-slimmed-down-property-tax-relief-package-ends-nebraskas-special-session/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Nebraska Examiner</a>
                      {" · "}
                      <a href="https://revenue.nebraska.gov/sites/default/files/doc/news-release/ndr/LB_34_News_Release_Final.pdf" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">DOR explainer</a>
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="h-1 w-full bg-red-500" />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-start gap-2.5">
                        <span className="text-xs font-bold text-white bg-[#c8102e] px-2.5 py-1 rounded-lg shrink-0 mt-0.5">LB 814</span>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900">The 40–50% cut, and the 75%→50% ag bill</h3>
                          <p className="text-xs text-gray-400 mt-0.5">Indefinitely postponed · Apr. 17, 2026</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 bg-red-50 text-red-700 ring-1 ring-red-200">
                        ✕ What died
                      </span>
                    </div>
                    <div className="bg-red-50 rounded-xl p-3.5 border-l-2 border-red-300">
                      <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-1.5">What actually happened</p>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        The 2024 special session’s 40–50% cut plus sales-tax expansion died. In 2026, Sen. Brandt’s LB 814 — drop ag land valuation from 75% to 50% — was indefinitely postponed April 17. The short session ditched most of Pillen’s remaining tax-base ideas.
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-2.5">
                      Bill:{" "}
                      <a href="https://www.nebraskalegislature.gov/bills/view_bill.php?DocumentID=63258" target="_blank" rel="noreferrer" className="font-semibold text-gray-600 hover:text-[#c8102e]">LB 814</a>
                      {" "}· Source:{" "}
                      <a href="https://nebraskaexaminer.com/2026/04/20/pillen-eyes-more-state-budget-cuts-to-help-offset-local-property-taxes/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Nebraska Examiner</a>
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="h-1 w-full bg-gray-400" />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-2.5">
                        <span className="text-xs font-bold text-white bg-gray-700 px-2.5 py-1 rounded-lg shrink-0 mt-0.5">DOR</span>
                        <h3 className="text-sm font-bold text-gray-900">What the numbers did</h3>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 bg-gray-50 text-gray-700 ring-1 ring-gray-200">
                        Credits ≠ a rate cut
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-xl p-3 border-l-2 border-gray-300">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">2024 levy</p>
                        <p className="text-sm text-gray-800 leading-relaxed">
                          First statewide property-tax decrease in 26 years — about <span className="font-semibold">$6 million</span> vs. ~$5.3 billion total. Mostly the community-college shift.
                        </p>
                      </div>
                      <div className="bg-red-50 rounded-xl p-3 border-l-2 border-red-300">
                        <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-1">2025 levy</p>
                        <p className="text-sm text-gray-800 leading-relaxed">
                          Up about <span className="font-semibold">$285 million</span> to <span className="font-semibold">$5,587,369,523</span>.
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Where it goes · 2025 DOR</p>
                        <ul className="text-sm text-gray-700 leading-relaxed space-y-1">
                          <li>Schools 59.45% · $3,321,609,205 <span className="text-gray-400">(incl. bonds)</span></li>
                          <li>Counties 17.46% · $975,404,479</li>
                          <li>Cities/villages 11.69% · $653,061,843</li>
                          <li className="text-xs text-gray-500">Rest: NRDs, fire, misc, leftover community college, ESUs, townships</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Who pays · 2025 DOR</p>
                        <ul className="text-sm text-gray-700 leading-relaxed space-y-1">
                          <li>Residential ~53.75% of taxes on ~45.93% of value <span className="text-gray-400">(avg rate 1.7244)</span></li>
                          <li>Ag land ~22.30% of taxes on ~31.92% of value <span className="text-gray-400">(avg rate 1.0298)</span></li>
                          <li className="text-xs text-gray-500">Ag land assessed at 75% of actual value; homes 100%. Farmhouses and farm sites taxed as residential.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3.5 border-l-2 border-gray-300">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">2025 credits · DOR EO 25-13</p>
                      <p className="text-sm text-gray-800 leading-relaxed mb-2">
                        School District Property Tax Relief Credit <span className="font-semibold">$797,295,209</span>. Property Tax Credit Act <span className="font-semibold">$467,132,271</span> — $119.00 per $100,000 taxable value for non-ag, $142.79 per $100,000 for ag land (120% allocation).
                      </p>
                      <p className="text-xs text-gray-500">DOR is explicit: credits are not a levy-rate cut.</p>
                    </div>

                    <p className="text-xs text-gray-400 mt-2.5">
                      Source:{" "}
                      <a href="https://nebraskaexaminer.com/2026/04/20/pillen-eyes-more-state-budget-cuts-to-help-offset-local-property-taxes/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Nebraska Examiner, Apr. 20, 2026</a>
                      {" · "}
                      <a href="https://revenue.nebraska.gov/sites/default/files/doc/pad/research/valuation/2026/CurrentYr_VT_PieCharts_State%20%26%2093%20counties%202025.pdf" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">DOR pie charts</a>
                      {" · "}
                      <a href="https://revenue.nebraska.gov/sites/default/files/doc/news-release/pad/2025/NewsRelease_2025_Real_Property_Tax_Credit_and_School_Dist_Prop_Tax_Relief_Credit.pdf" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">DOR 2025 credits</a>
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="h-1 w-full bg-gray-400" />
                  <div className="p-5">
                    <div className="flex items-start gap-2.5 mb-2">
                      <span className="text-xs font-bold text-white bg-gray-700 px-2.5 py-1 rounded-lg shrink-0 mt-0.5">2027</span>
                      <h3 className="text-sm font-bold text-gray-900">How he’d pay for more</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      State spending cuts. Maybe broaden the 5.5% sales tax to currently exempt goods and services. Hard local spending caps. He said the messaging needs to be simpler and the next fight is 2027. Sen. Tanya Storer called credits “feeding the demon.”
                    </p>
                    <p className="text-xs text-gray-400 mt-2.5">
                      Source:{" "}
                      <a href="https://nebraskaexaminer.com/2026/07/09/pillen-talks-priorities-pivot-from-nebraska-primary-election-to-nov-3-faceoff/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Nebraska Examiner, Jul. 9, 2026</a>
                      {" · "}
                      <a href="https://nebraskaexaminer.com/2026/04/20/pillen-eyes-more-state-budget-cuts-to-help-offset-local-property-taxes/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Apr. 20, 2026</a>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed mb-6 border-t border-gray-100 pt-4">
                Separate fight —{" "}
                <a href="https://ballotpedia.org/Nebraska_Referendum_435,_Private_Education_Scholarship_Program_Referendum_(2024)" target="_blank" rel="noreferrer" className="font-semibold text-gray-700 hover:text-[#c8102e]">Referendum 435</a>
                {" "}(Nov. 2024) repealed the private-school scholarship law 57.03%–42.97% statewide (508,140 to repeal vs. 382,921), including Douglas County ~56%. Pillen’s “right fit” / federal $1,700 credit is a 2027 argument, not this levy story.
              </p>

              <p className="text-xs text-gray-400 text-center leading-relaxed">
                Sources:{" "}
                {PROPERTY_TAX_SOURCES.map((s, i) => (
                  <span key={s.url}>
                    <a href={s.url} target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">{s.label}</a>
                    {i < PROPERTY_TAX_SOURCES.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            </section>
          </div>
        )}

        {/* Bills Tab */}
        {activeTab === "bills" && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Recent Activity
              </h2>
              <a
                href="https://nebraskalegislature.gov/bills/search_by_date.php?Legislature=109"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-[#c8102e] hover:underline"
              >
                All bills on Legislature.ne.gov ↗
              </a>
            </div>
            {BILLS.map((b) => (
              <BillCard key={b.id} bill={b} />
            ))}
          </div>
        )}

        {/* Translate Tab */}
        {activeTab === "translate" && (
          <div className="max-w-2xl">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-1">Translate a Bill</h2>
              <p className="text-sm text-gray-500">
                Paste any bill text or summary — Claude will break it down into plain English,
                explain who it helps and hurts, and flag any concerns.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
              <textarea
                value={billInput}
                onChange={(e) => setBillInput(e.target.value)}
                rows={6}
                placeholder="Paste bill text, a summary, or just a bill number and what you know about it…"
                className="w-full text-sm p-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 resize-y focus:outline-none focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/10 leading-relaxed transition-all"
              />
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={translateBill}
                  disabled={translating || !billInput.trim()}
                  className="px-5 py-2.5 bg-[#c8102e] text-white text-sm font-semibold rounded-xl hover:bg-[#a50d26] disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
                >
                  {translating ? "Translating…" : "✦ Translate for Nebraskans"}
                </button>
                <span className="text-xs text-gray-400">Powered by Claude AI</span>
              </div>
            </div>

            {translation && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 border-l-4 border-l-[#c8102e]">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase mb-3">
                  Plain English Translation
                </p>
                <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                  {translation}
                </p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mt-4">
              <p className="text-sm font-semibold text-gray-800 mb-2">How to get bill text</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Go to{" "}
                <a
                  href="https://nebraskalegislature.gov/bills/search_by_number.php"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#c8102e] hover:underline font-medium"
                >
                  nebraskalegislature.gov
                </a>
                , search by bill number, then copy the "Statement of Intent" or full text and paste it here.
              </p>
            </div>
          </div>
        )}

        {/* Vetoes Tab */}
        {activeTab === "vetoes" && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xs font-bold tracking-[0.15em] text-gray-400 uppercase">
                Governor Pillen's Desk
              </h2>
            </div>

            {VETOES.map((v) => {
              const cfg = STATUS_CONFIG[v.actionType] || STATUS_CONFIG.veto;
              return (
                <div key={v.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4 hover:shadow-md transition-shadow">
                  <div className={`h-1 w-full ${cfg.bar}`} />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-bold tracking-wide text-white bg-[#c8102e] px-2.5 py-1 rounded-lg">
                          {v.id}
                        </span>
                        <h3 className="text-sm font-semibold text-gray-900">{v.title}</h3>
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${cfg.pill}`}>
                        {v.action}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mb-3">{v.note}</p>
                    <div className="bg-gray-50 rounded-xl p-3.5 border-l-2 border-gray-300">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Plain English</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{v.plain}</p>
                    </div>
                    <button
                      onClick={() => window.open(`https://claude.ai/new?q=${encodeURIComponent(v.askPrompt)}`, "_blank")}
                      className="text-xs font-medium text-gray-500 hover:text-[#c8102e] transition-colors mt-3.5 block"
                    >
                      Ask Claude about this ↗
                    </button>
                  </div>
                </div>
              );
            })}

            <div className="bg-[#0a0e1a] rounded-2xl p-5 mt-2">
              <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">
                Nebraska's Line-Item Veto
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Unlike most states, Nebraska's governor can veto individual spending lines within a
                bill — not just reject the whole thing. This is a significant and often underreported power.
              </p>
            </div>
          </div>
        )}

        {/* Money Tab */}
        {activeTab === "money" && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Follow the Money
              </h2>
              <a
                href="https://nadc.nebraska.gov/node"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-[#c8102e] hover:underline"
              >
                Search NADC database ↗
              </a>
            </div>

            <div className="bg-[#0a0e1a] rounded-2xl p-5 mb-5">
              <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">
                Data Source
              </p>
              <p className="text-sm leading-relaxed">
                Figures below are from{" "}
                <a
                  href="https://www.opensecrets.org/states/NE/donors/2024"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white font-medium hover:underline"
                >
                  OpenSecrets — Nebraska 2024 cycle
                </a>
                . For Nebraska-specific state race filings, the authoritative source is the{" "}
                <a
                  href="https://nadc.nebraska.gov/node"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white font-medium hover:underline"
                >
                  Nebraska Accountability & Disclosure Commission (NADC)
                </a>
                . NADC integration coming soon.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between">
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                  Top Nebraska Donors — 2024 Election Cycle
                </p>
                <span className="text-[10px] text-gray-400">Source: OpenSecrets</span>
              </div>
              {DONORS.map((d, i) => (
                <div
                  key={d.name}
                  className={`flex items-center justify-between px-5 py-3.5 gap-4 ${i !== DONORS.length - 1 ? "border-b border-gray-50" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-300 w-5 shrink-0">{i + 1}</span>
                    <a
                      href={d.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-gray-900 hover:text-[#c8102e] transition-colors"
                    >
                      {d.name} ↗
                    </a>
                  </div>
                  <span className="text-sm font-bold text-gray-900 shrink-0">{d.amount}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                window.open(
                  `https://claude.ai/new?q=${encodeURIComponent(
                    "Explain how outside money influences Nebraska state legislature races — what are the biggest donors, what do they want, and how can I research who is funding which senator?"
                  )}`,
                  "_blank"
                )
              }
              className="mt-4 text-xs font-medium text-gray-500 hover:text-[#c8102e] transition-colors"
            >
              How to research campaign finance further ↗
            </button>
          </div>
        )}
      </main>

      {/* Newsletter Signup */}
      <div className="max-w-4xl mx-auto px-6 mb-4">
        <div className="bg-[#0a0e1a] rounded-2xl p-6">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">Stay Informed</p>
            <h3 className="text-white font-bold text-lg mb-1">Get the Watchdog newsletter</h3>
            <p className="text-white/50 text-sm mb-4 leading-relaxed">
              When the 110th session kicks off in January 2027, you'll be the first to know what's happening in Lincoln — in plain English, no spin.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200 mt-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-gray-400">
            Nebraska Unicameral Watchdog · District 49 · Not affiliated with any political party.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            The unicameral meets for a long session (90 days) in odd years and a short session (60 days) in even years.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="mailto:info@unicameralwatchdog.com"
              className="text-xs text-gray-400 hover:text-[#c8102e] transition-colors"
            >
              info@unicameralwatchdog.com
            </a>
            <a
              href="https://nebraskalegislature.gov"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gray-400 hover:text-[#c8102e] transition-colors"
            >
              nebraskalegislature.gov ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
