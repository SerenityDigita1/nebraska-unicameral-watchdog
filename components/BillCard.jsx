const PROCESS_STEPS = [
  { key: "introduced", label: "Introduced" },
  { key: "committee", label: "Committee" },
  { key: "floor", label: "Floor" },
];

const STAGE_INDEX = {
  introduced: 0,
  committee: 1,
  floor: 2,
  passed: 3,
};

export function BillStageBar({ stageReached, outcome }) {
  const reached = STAGE_INDEX[stageReached] ?? 0;
  const outcomeLabel = outcome === "postponed" ? "Postponed" : "Passed";
  const steps = [
    ...PROCESS_STEPS,
    { key: outcome === "postponed" ? "postponed" : "passed", label: outcomeLabel, outcome: true },
  ];

  return (
    <ol className="grid grid-cols-4 mb-3" aria-label={`Stage: ${outcomeLabel}`}>
      {steps.map((step, i) => {
        const done = step.outcome ? true : i <= reached;
        const lineBefore = i > 0 && i - 1 < reached;
        const lineAfter = i < steps.length - 1 && i < reached;
        let dot = "bg-white ring-gray-200";
        let label = "text-gray-300";
        if (step.outcome && outcome === "passed") {
          dot = "bg-emerald-600 ring-emerald-600";
          label = "text-emerald-700";
        } else if (step.outcome && outcome === "postponed") {
          dot = "bg-[#c8102e] ring-[#c8102e]";
          label = "text-[#c8102e]";
        } else if (done) {
          dot = "bg-[#0a0e1a] ring-[#0a0e1a]";
          label = "text-gray-700";
        }
        return (
          <li key={step.key} className="flex flex-col items-center">
            <div className="flex items-center w-full h-3">
              <span className={`flex-1 h-0.5 ${i === 0 ? "bg-transparent" : lineBefore ? "bg-[#0a0e1a]" : "bg-gray-200"}`} />
              <span className={`w-2.5 h-2.5 rounded-full ring-2 shrink-0 ${dot}`} />
              <span className={`flex-1 h-0.5 ${i === steps.length - 1 ? "bg-transparent" : lineAfter ? "bg-[#0a0e1a]" : "bg-gray-200"}`} />
            </div>
            <span className={`mt-1 text-[10px] font-semibold tracking-wide ${label}`}>{step.label}</span>
          </li>
        );
      })}
    </ol>
  );
}

export default function BillCard({ bill }) {
  const chipClass =
    bill.outcome === "passed"
      ? "bg-emerald-600"
      : bill.outcome === "postponed"
        ? "bg-[#c8102e]"
        : "bg-[#0a0e1a]";

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className={`h-1 w-full ${bill.outcome === "passed" ? "bg-emerald-500" : bill.outcome === "postponed" ? "bg-[#c8102e]" : "bg-[#0a0e1a]"}`} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-start gap-2.5 min-w-0">
            <span className={`text-xs font-bold text-white ${chipClass} px-2.5 py-1 rounded-lg shrink-0 mt-0.5`}>
              {bill.number}
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-gray-900 leading-snug">{bill.title}</h3>
              <p className="text-xs text-gray-400 mt-0.5">
                {bill.sponsor}
                {bill.session ? ` · ${bill.session}` : ""}
              </p>
            </div>
          </div>
        </div>

        <BillStageBar stageReached={bill.stageReached} outcome={bill.outcome} />

        <p className="text-sm text-gray-600 leading-relaxed mb-3">{bill.summary}</p>

        {bill.adVsRecord && (
          <p className="text-xs text-gray-700 leading-relaxed mb-3 bg-amber-50 border-l-2 border-amber-400 rounded-r-lg px-3 py-2">
            <span className="font-bold tracking-widest uppercase text-amber-800">Ad vs record · </span>
            {bill.adVsRecord}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Last action {bill.lastAction}
            {bill.lastActionNote ? ` · ${bill.lastActionNote}` : ""}
          </p>
          <a
            href={bill.url}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-[#c8102e] hover:underline shrink-0"
          >
            Legislature.ne.gov ↗
          </a>
        </div>
      </div>
    </article>
  );
}

export function BillCardList({ bills, className = "" }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {bills.map((bill) => (
        <BillCard key={bill.id} bill={bill} />
      ))}
    </div>
  );
}
