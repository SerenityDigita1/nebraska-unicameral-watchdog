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
  {
    name: "Americans for Prosperity (Koch network)",
    type: "outside",
    typeLabel: "Out-of-state PAC",
    focus: "Tax cuts, school choice",
    amount: "$2.4M+",
  },
  {
    name: "Nebraska Farm Bureau PAC",
    type: "local",
    typeLabel: "Nebraska-based",
    focus: "Property tax relief, ag deregulation",
    amount: "$890K",
  },
  {
    name: "Nebraska State Education Assoc. (NSEA)",
    type: "local",
    typeLabel: "Nebraska-based",
    focus: "School funding, anti-voucher",
    amount: "$750K",
  },
  {
    name: "Club for Growth PAC",
    type: "outside",
    typeLabel: "Out-of-state PAC",
    focus: "Low-tax, limited government candidates",
    amount: "$620K",
  },
  {
    name: "Planned Parenthood Votes Nebraska",
    type: "local",
    typeLabel: "Nebraska affiliate",
    focus: "Reproductive healthcare, abortion access",
    amount: "$410K",
  },
];

const STATUS_STYLES = {
  committee: "bg-blue-50 text-blue-700 border border-blue-200",
  vote: "bg-amber-50 text-amber-700 border border-amber-200",
  veto: "bg-red-50 text-red-700 border border-red-200",
  signed: "bg-green-50 text-green-700 border border-green-200",
  partial: "bg-orange-50 text-orange-700 border border-orange-200",
};

function BillCard({ bill }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
      <div className="flex gap-3 items-start">
        <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full whitespace-nowrap mt-0.5 shrink-0">
          {bill.id}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2 flex-wrap">
            <h3 className="text-sm font-medium text-gray-900">{bill.title}</h3>
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full shrink-0 ${STATUS_STYLES[bill.status]}`}
            >
              {bill.statusLabel}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            {bill.senator} · {bill.committee}
          </p>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed border-t border-gray-100 pt-2">
            <strong className="text-gray-800 font-medium">Plain English:</strong>{" "}
            {bill.plain}
          </p>
          <div className="flex gap-4 mt-2 flex-wrap">
            {bill.url && (
              <a
                href={bill.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-600 hover:underline"
              >
                View full bill ↗
              </a>
            )}
            <button
              onClick={() => window.open(`https://claude.ai/new?q=${encodeURIComponent(bill.askPrompt)}`, '_blank')}
              className="text-xs text-blue-600 hover:underline text-left"
            >
              Ask Claude more about this ↗
            </button>
          </div>
        </div>
      </div>
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
    { id: "bills", label: "Bills & debates" },
    { id: "translate", label: "Translate a bill" },
    { id: "vetoes", label: "Governor's desk" },
    { id: "money", label: "Follow the money" },
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
    } catch (e) {
      setError("Translation failed — check your API key and try again.");
    }
    setTranslating(false);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans">
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center text-white text-lg">
            🏛
          </div>
          <h1 className="text-xl font-medium text-gray-900">
            Nebraska Watchdog
          </h1>
          <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">
            109th Legislature
          </span>
        </div>
        <p className="text-sm text-gray-500">
          Tracking your unicameral — translated into plain Nebraska English
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm border-b-2 -mb-px transition-colors ${
              activeTab === tab.id
                ? "border-blue-600 text-blue-600 font-medium"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bills Tab */}
      {activeTab === "bills" && (
        <div>
          <div className="grid grid-cols-4 gap-2 mb-6">
            {[
              { num: "109", label: "Bills introduced" },
              { num: "23", label: "Passed this session" },
              { num: "4", label: "Vetoed by governor" },
              { num: "49", label: "Senators (unicameral)" },
            ].map((m) => (
              <div
                key={m.label}
                className="bg-gray-50 rounded-lg p-3 text-center"
              >
                <div className="text-2xl font-medium text-gray-900">
                  {m.num}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
            Recent activity — 109th Legislature
          </p>
          {BILLS.map((b) => (
            <BillCard key={b.id} bill={b} />
          ))}
          <p className="text-center mt-4">
            <a
              href="https://nebraskalegislature.gov/bills/search_by_date.php?Legislature=109"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              View all 109th Legislature bills on nebraskalegislature.gov ↗
            </a>
          </p>
        </div>
      )}

      {/* Translate Tab */}
      {activeTab === "translate" && (
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
            Paste any bill text or summary
          </p>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-4">
            <textarea
              value={billInput}
              onChange={(e) => setBillInput(e.target.value)}
              rows={5}
              placeholder="Paste bill text, a summary, or just a bill number and what you know about it. Claude will break it down into plain English, explain who it helps and hurts, and flag any concerns."
              className="w-full text-sm p-3 rounded-lg border border-gray-300 bg-white text-gray-900 resize-y focus:outline-none focus:border-blue-500 leading-relaxed"
            />
            <div className="flex items-center gap-3 mt-3 flex-wrap">
              <button
                onClick={translateBill}
                disabled={translating || !billInput.trim()}
                className="px-4 py-2 bg-blue-700 text-white text-sm rounded-lg hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {translating ? "Translating…" : "✦ Translate for Nebraskans"}
              </button>
              <span className="text-xs text-gray-400">Powered by Claude AI</span>
            </div>
            {translation && (
              <div className="mt-4 p-3 bg-white border border-blue-200 border-l-4 border-l-blue-600 rounded-lg">
                <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-2">
                  Plain English translation
                </p>
                <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                  {translation}
                </p>
              </div>
            )}
            {error && (
              <p className="mt-3 text-sm text-red-600">{error}</p>
            )}
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <p className="text-sm font-medium text-gray-800 mb-2">
              How to get bill text
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Go to{" "}
              <a
                href="https://nebraskalegislature.gov/bills/search_by_number.php"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                nebraskalegislature.gov
              </a>
              , search by bill number, then copy the "Statement of Intent" or
              full text and paste it here.
            </p>
          </div>
        </div>
      )}

      {/* Vetoes Tab */}
      {activeTab === "vetoes" && (
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
            Governor Pillen's desk — recent actions
          </p>
          {VETOES.map((v) => (
            <div
              key={v.id}
              className="bg-white border border-gray-200 rounded-xl p-4 mb-3"
            >
              <div className="flex gap-3 items-start">
                <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full whitespace-nowrap mt-0.5 shrink-0">
                  {v.id}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-2 flex-wrap">
                    <h3 className="text-sm font-medium text-gray-900">
                      {v.title}
                    </h3>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full shrink-0 ${STATUS_STYLES[v.actionType]}`}
                    >
                      {v.action}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{v.note}</p>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed border-t border-gray-100 pt-2">
                    <strong className="text-gray-800 font-medium">
                      Plain English:
                    </strong>{" "}
                    {v.plain}
                  </p>
                  <button
                    onClick={() => window.open(`https://claude.ai/new?q=${encodeURIComponent(v.askPrompt)}`, '_blank')}
                    className="text-xs text-blue-600 hover:underline mt-2"
                  >
                    Ask Claude about this ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 mt-2">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-700">Nebraska's line-item veto:</strong>{" "}
              Unlike most states, Nebraska's governor can veto individual
              spending lines within a bill — not just reject the whole thing.
              This is a significant and often underreported power.
            </p>
          </div>
        </div>
      )}

      {/* Money Tab */}
      {activeTab === "money" && (
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
            Follow the money — campaign finance snapshot
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-500 leading-relaxed">
              Data sourced from the{" "}
              <a
                href="https://www.nadc.nebraska.gov"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                Nebraska Accountability & Disclosure Commission (NADC)
              </a>
              . Every dollar contributed to Nebraska candidates is required to
              be reported here.
            </p>
          </div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
            Top money flowing into Nebraska legislative races
          </p>
          <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
            {DONORS.map((d) => (
              <div
                key={d.name}
                className="flex items-center justify-between px-4 py-3 gap-3"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">{d.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    <span
                      className={`inline-block text-xs px-2 py-0.5 rounded-full mr-1.5 ${
                        d.type === "outside"
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : "bg-green-50 text-green-700 border border-green-200"
                      }`}
                    >
                      {d.typeLabel}
                    </span>
                    {d.focus}
                  </p>
                </div>
                <span className="text-sm font-medium text-green-700 shrink-0">
                  {d.amount}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4 flex-wrap">
            <a
              href="https://www.nadc.nebraska.gov/cgi-bin/cfro_srch.pl"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Search NADC campaign finance database ↗
            </a>
            <button
              onClick={() => window.open(`https://claude.ai/new?q=${encodeURIComponent('Explain how outside money influences Nebraska state legislature races — what are the biggest donors, what do they want, and how can I research who is funding which senator?')}`, '_blank')}
              className="text-sm text-blue-600 hover:underline"
            >
              How to research this further ↗
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
