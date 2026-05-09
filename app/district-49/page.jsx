export const metadata = { title: "District 49 · NE Watchdog" };

export default function District49() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Sarpy County</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">District 49</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            District 49 covers parts of Sarpy County — one of the fastest-growing areas in Nebraska.
            Here's who represents it, what they've voted for, and what it means for your community.
          </p>
        </div>

        {/* Legislator card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#0a0e1a] flex items-center justify-center text-white font-bold text-lg shrink-0">BA</div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Sen. Bob Andersen</h2>
              <p className="text-sm text-gray-500 mb-3">District 49 · Sarpy County · 109th Legislature</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://nebraskalegislature.gov/senators/senator_search.php"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-[#c8102e] hover:underline"
                >
                  Legislature profile ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder sections */}
        {[
          { title: "Committee Assignments", body: "Sen. Andersen's committee work affects which bills get heard and which die before a vote. Coming soon: full committee breakdown and key decisions." },
          { title: "Voting Record", body: "How did Sen. Andersen vote on the bills that mattered most to District 49 residents? Coming soon: plain-English vote breakdown for the 109th session." },
          { title: "Sarpy County Impact", body: "District 49 is growing fast. Property taxes, school funding, and infrastructure bills hit Sarpy County residents differently than the rest of the state. Coming soon: local impact analysis." },
        ].map((s) => (
          <div key={s.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
            <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
            <span className="inline-block mt-3 text-[10px] font-bold tracking-widest text-amber-600 uppercase bg-amber-50 px-2.5 py-1 rounded-full ring-1 ring-amber-200">Coming soon</span>
          </div>
        ))}
      </div>
    </div>
  );
}
