export const metadata = { title: "About · NE Watchdog" };

export default function About() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-3xl mx-auto px-6 py-10">

        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">The story</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">About This Watchdog</h1>
        </div>

        {/* My Journey */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-5 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-4">My Journey</p>

          <p className="text-white/90 text-base font-semibold leading-snug mb-4">
            I'm an Omaha resident who got tired of feeling like politics was something happening to me — not something I had any say in.
          </p>

          <div className="space-y-4 text-sm text-white/70 leading-relaxed">
            <p>
              Federal politics started to feel like a fire hose pointed directly at my face.
              Every day, more noise. More outrage. More issues that feel impossibly large, impossibly
              far away, and controlled by people who seem to have no interest in whether my life
              gets better or worse. I kept waiting for someone to fix it. Nothing changed.
            </p>

            <p>
              So I zoomed out. Or really — I zoomed in. I started asking a simpler question:
              <em className="text-white"> what is actually happening in Nebraska?</em> Not in Washington.
              Not in some cable news cycle. In the statehouse in Lincoln, where 49 senators make
              decisions that land here — in Omaha, in Sarpy County, in the district where I live.
              Decisions about my property taxes, my kids' schools, and whether workers in my
              community can call in sick without losing a day's pay.
            </p>

            <p>
              This site is me documenting that process out loud. It's me learning the unicameral —
              how a bill moves, who stops it, who funds the people stopping it, and what they get
              in return. It's me translating the stuff that's designed to be confusing into language
              that makes sense to people who have jobs and families and don't have time to read
              floor transcripts.
            </p>

            <p>
              Here's what I've learned so far: local politics is not too small to matter.
              It's actually where most of the things that affect your daily life get decided.
              Property taxes. School funding. Whether your county has to outsource services because
              the state didn't send the money it promised. These aren't abstract policy debates —
              they're your actual life.
            </p>

            <div className="border-l-2 border-[#c8102e]/50 pl-4 my-5">
              <p className="text-white/90 italic">
                There's a scene in <em>A Bug's Life</em> where Hopper — the grasshopper running the
                whole operation — pulls his crew aside and explains exactly why they have to keep
                the ants scared and overwhelmed. Not because the grasshoppers are stronger.
                Because if the ants ever stop and count — if they ever realize how many of
                them there are compared to how few grasshoppers there are — it's over.
                The whole thing falls apart.
              </p>
              <p className="text-white/60 text-xs mt-2">
                That's not a metaphor. That's the playbook.
              </p>
            </div>

            <p>
              The people who benefit from a disengaged public work very hard to keep it that way.
              They flood the zone with more information than anyone can process. They make the
              rules complicated. They make the calendar confusing. They make it feel like a game
              you weren't invited to and can't win anyway — so why bother showing up?
            </p>

            <p>
              But here's what the numbers actually say: In 2024, the Nebraska legislature
              gutted paid sick leave protections that voters had just passed. It took one session,
              a few amendments buried in a bill, and the assumption that nobody was paying
              close enough attention to call it out. 140,000 workers lost protections they
              voted for. Most of them still don't know it happened.
            </p>

            <p>
              That's the gap this site is trying to close. Not by being louder than everyone
              else. By being clearer. By watching what people vote for, tracking what they
              actually fund, and making it easy for anyone — regardless of how much time
              they have — to understand who is doing what with the power we gave them.
            </p>

            <p className="text-white font-medium">
              We outnumber them. We just have to act like it.
            </p>
          </div>
        </div>

        {/* Why this site exists */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          <h2 className="text-base font-bold text-gray-900 mb-3">What this site actually does</h2>
          <div className="space-y-2">
            {[
              "Tracks bills moving through the Nebraska unicameral — in plain English, not legalese",
              "Follows the money behind legislative campaigns and shows who's buying what",
              "Calls out when voter-approved measures get quietly gutted after the election",
              "Spotlights District 49 specifically — who represents it, how they vote, and what it costs local residents",
              "Connects the dots between state-level decisions and what happens in your neighborhood",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <span className="text-[#c8102e] font-bold shrink-0 mt-0.5">▸</span>
                <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial note */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-2">A note on editorial stance</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            This site covers Nebraska state government from the perspective of working Nebraskans.
            We believe people deserve to know when their elected officials vote for corporate interests
            over their constituents — and we won't pretend that's a neutral observation.
            Every fact on this site is sourced: Nebraska Examiner, Nebraska Public Media,
            Ballotpedia, Nebraska Appleseed, Flatwater Free Press, and official legislative records.
            If we get something wrong, we correct it.
          </p>
        </div>

      </div>
    </div>
  );
}
