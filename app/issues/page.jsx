export const metadata = { title: "Key Issues · NE Watchdog" };

const ISSUES = [
  { title: "Property Taxes", icon: "🏠", summary: "Nebraska property taxes rank among the highest in the Midwest. Sarpy County residents — especially farmers and new homeowners — feel it hardest. We track every bill that touches the levy." },
  { title: "Growth & Development", icon: "📈", summary: "District 49 is one of the fastest-growing areas in the state. That growth brings infrastructure strain, school crowding, and zoning fights. Who's making those decisions — and for whom?" },
  { title: "Education & School Funding", icon: "🎓", summary: "Nebraska's TEEOSA formula determines how state money flows to schools. It's been altered, line-item vetoed, and fought over for years. Plain-English breakdowns of what it means for your kids." },
  { title: "Public Safety", icon: "🛡", summary: "From permitless carry to Medicaid work requirements to SNAP vetoes — state policy has direct consequences for safety and stability in Nebraska communities." },
  { title: "Workers & Wages", icon: "💼", summary: "Voters passed paid sick leave and a minimum wage increase. The legislature tried to gut both. We track the gap between what Nebraskans voted for and what they got." },
  { title: "Corporate Influence", icon: "💰", summary: "$1.5 billion in business tax incentives. Out-of-state PACs flooding legislative races. Who's writing the checks and what are they buying?" },
];

export default function Issues() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">What's at stake</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">Key Issues</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            The issues that affect everyday Nebraskans — tracked, translated, and explained without spin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {ISSUES.map((issue) => (
            <div key={issue.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="text-2xl mb-3">{issue.icon}</div>
              <h2 className="text-base font-bold text-gray-900 mb-2">{issue.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{issue.summary}</p>
              <span className="inline-block mt-3 text-[10px] font-bold tracking-widest text-amber-600 uppercase bg-amber-50 px-2.5 py-1 rounded-full ring-1 ring-amber-200">Deep dive coming soon</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
