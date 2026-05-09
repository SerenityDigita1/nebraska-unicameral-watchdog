export const metadata = { title: "About · NE Watchdog" };

export default function About() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">The story</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">About This Watchdog</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          <h2 className="text-base font-bold text-gray-900 mb-3">Why this site exists</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Nebraska's unicameral is the only single-chamber state legislature in the country.
            49 senators. No second chamber to slow things down or catch bad bills. What they pass becomes law —
            and most Nebraskans never hear about it until it's already affecting them.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            This site exists to change that. Every bill explained in plain English. Every veto called out.
            Every dollar tracked. Built for District 49 — and every Nebraskan who deserves to know
            what their government is doing.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          <h2 className="text-base font-bold text-gray-900 mb-3">My journey</h2>
          <p className="text-sm text-gray-500 italic">Your story goes here. Tell people who you are, why District 49 matters to you, and what you're working toward.</p>
          <span className="inline-block mt-3 text-[10px] font-bold tracking-widest text-amber-600 uppercase bg-amber-50 px-2.5 py-1 rounded-full ring-1 ring-amber-200">Add your story</span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-2">A note on editorial stance</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            This site covers Nebraska state government from the perspective of working Nebraskans.
            We believe people deserve to know when their elected officials vote for corporate interests
            over their constituents. All facts are sourced — Nebraska Examiner, Nebraska Public Media,
            Ballotpedia, Nebraska Appleseed, and official legislative records.
          </p>
        </div>
      </div>
    </div>
  );
}
