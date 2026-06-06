export const metadata = {
  title: "Nebraska Legislature Interim Studies 2026",
  description:
    "The 2026 short session ended in April. Track what Nebraska's unicameral committees are studying before the 111th Legislature convenes in January 2027.",
};

export default function Interim() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Between sessions</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">Interim Studies & Off-Season Work</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            The unicameral meets for a long session (90 days) in odd years and a short session (60 days) in even years.
            But between sessions, committee work, interim studies, and interim hearings still shape what
            gets introduced next January.
          </p>
        </div>

        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-6">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">Current Status</p>
          <p className="text-white font-semibold text-base mb-1">Between the 110th session short session and the 111th Legislature's long session</p>
          <p className="text-white/60 text-sm leading-relaxed">
            The 2026 short session ended in April. The next long session begins January 2027.
            In the meantime, interim committees are studying issues and drafting bills for the next session.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-base font-bold text-gray-900 mb-2">What to watch before January 2027</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Interim studies are the preview of what's coming next session. We'll track what committees
            are studying, what hearings are scheduled, and what's likely to land on the floor in January.
          </p>
          <span className="inline-block text-[10px] font-bold tracking-widest text-amber-600 uppercase bg-amber-50 px-2.5 py-1 rounded-full ring-1 ring-amber-200">Coverage begins fall 2026</span>
        </div>
      </div>
    </div>
  );
}
