"use client";
import { useState } from "react";

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
  { name: "Sandhills Global",                        amount: "$3,364,667" },
  { name: "US Senate",                               amount: "$3,283,347" },
  { name: "Werner Enterprises",                      amount: "$769,416"   },
  { name: "Exodus Movement",                         amount: "$692,400"   },
  { name: "American Excellence PAC",                 amount: "$571,699"   },
  { name: "Herbster Angus Farms",                    amount: "$437,443"   },
  { name: "HDR Inc",                                 amount: "$429,329"   },
  { name: "Tenaska Energy",                          amount: "$421,367"   },
  { name: "Kiewit Corp",                             amount: "$348,822"   },
  { name: "University of Nebraska",                  amount: "$345,142"   },
  { name: "Lozier Corp",                             amount: "$327,780"   },
  { name: "Nebraska Railroaders For Public Safety",  amount: "$250,000"   },
  { name: "Crete Carrier Corp",                      amount: "$241,079"   },
  { name: "Union Pacific Corp",                      amount: "$237,587"   },
  { name: "Hawkins Construction",                    amount: "$223,330"   },
  { name: "Cornerstone Legacy LLC",                  amount: "$223,000"   },
  { name: "State of Nebraska",                       amount: "$191,427"   },
  { name: "Baxter Auto Group",                       amount: "$177,595"   },
  { name: "University of Nebraska Medical Center",   amount: "$149,235"   },
  { name: "Green Plains",                            amount: "$121,052"   },
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
    <div className="bg-white/10 rounded-2xl p-4 text-center backdrop-blur-sm border border-white/10">
      <div className="text-3xl font-bold text-white tracking-tight">{num}</div>
      <div className="text-xs text-white/60 mt-1 leading-tight">{label}</div>
    </div>
  );
}

export default function NebraskaWatchdog() {
  const [activeTab, setActiveTab] = useState("bills");
  const [billInput, setBillInput] = useState("");
  const [translating, setTranslating] = useState(false);
  const [translation, setTranslation] = useState("");
  const [error, setError] = useState("");

  const tabs = [
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
              109th Legislature
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight leading-tight mb-2">
            Nebraska Unicameral<br />
            <span className="text-[#c8102e]">Watchdog</span>
          </h1>
          <p className="text-white/50 text-sm max-w-md leading-relaxed mb-8">
            Tracking your unicameral — bills, vetoes, and campaign money
            translated into plain English for everyday Nebraskans.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard num="109" label="Bills introduced" />
            <StatCard num="23"  label="Passed this session" />
            <StatCard num="4"   label="Vetoed by governor" />
            <StatCard num="49"  label="Senators" />
          </div>
        </div>

        {/* Tab Bar */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-1 border-b border-white/10 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-all ${
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
                    <p className="text-sm font-medium text-gray-900">{d.name}</p>
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

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200 mt-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-gray-400">
            Nebraska Unicameral Watchdog · 109th Legislature · Not affiliated with any political party.
          </p>
          <a
            href="https://nebraskalegislature.gov"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-gray-400 hover:text-[#c8102e] transition-colors"
          >
            nebraskalegislature.gov ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
