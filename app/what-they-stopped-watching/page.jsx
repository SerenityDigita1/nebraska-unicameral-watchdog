import Link from "next/link";

export const metadata = {
  title: "What They Stopped Watching — Nebraska Watchdog",
  description:
    "An ongoing look at federal monitoring programs quietly scaled back, and what happened next. First up: the CDC dropped mandatory cyclospora tracking in 2025 — then the largest outbreak on record hit, including 27 cases in Douglas County.",
};

const STATS = [
  { value: "27", label: "Confirmed Douglas County cases", color: "#c8102e" },
  { value: "~7,000", label: "Cases/suspected cases nationwide since May 2026", color: "#c8102e" },
  { value: "28 yrs", label: "Cyclospora was mandatory to track, until July 2025", color: "#1d4ed8" },
  { value: "$1M+", label: "Donated by the company now linked to the outbreak", color: "#1d4ed8" },
];

const TIMELINE = [
  { date: "March 26, 2025", text: "Taylor Fresh Foods Inc. donates $1 million to MAGA Inc, the pro-Trump super PAC." },
  { date: "2025–2026", text: "Taylor Farms CEO Bruce Taylor personally donates $400,000+ across Republican-aligned PACs." },
  { date: "July 1, 2025", text: "CDC's FoodNet program drops mandatory tracking for 6 of 8 pathogens — including cyclospora — after 28 years, making reporting optional for everything except Salmonella and E. coli (STEC)." },
  { date: "May 2026", text: "Cyclospora cases begin climbing nationally, eventually reaching roughly 7,000 confirmed or suspected." },
  { date: "Mid-July 2026", text: "Douglas County, Nebraska confirms 27 local cases in a rapid spike." },
  { date: "July 16, 2026", text: "CDC and FDA identify shredded iceberg lettuce from Taylor Farms, served at Taco Bell in five states, as a source of the outbreak." },
  { date: "July 17, 2026", text: "Taylor Farms executives meet with White House and FDA officials to discuss the outbreak response." },
  { date: "July 21, 2026", text: "HHS publicly denies any connection between the donations and the surveillance rollback, calling reporting on it \"FAKE NEWS.\"" },
];

export default function WhatTheyStoppedWatching() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">An Ongoing Series</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">
            What They Stopped Watching
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            Federal agencies have been quietly narrowing what they monitor and report on. This page
            tracks those rollbacks and what happened after — starting with the CDC's decision to stop
            requiring states to track cyclospora, four months before the largest outbreak on record.
            We'll add cases as they're documented, including a look at the EPA's PFAS monitoring cuts.
          </p>
        </div>

        {/* Case #1 label */}
        <div className="mb-6">
          <span className="inline-block text-[10px] font-bold tracking-[0.15em] text-white bg-[#c8102e] uppercase px-2.5 py-1 rounded-full">
            Case #1 — Public Health
          </span>
          <h2 className="text-xl font-bold text-gray-900 mt-3">
            The Timeline Behind the Cyclospora Outbreak
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mt-1">
            Douglas County has 27 confirmed cases of a parasite the CDC stopped requiring states to
            track in July 2025. The company now identified as the outbreak's source donated $1 million
            to the president's super PAC four months before that surveillance change. Here's what's
            actually documented — sourced directly, with the administration's response included.
          </p>
        </div>

        {/* Stat tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[10px] text-gray-400 mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Lede callout */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">What we're not claiming</p>
          <p className="text-white/80 text-sm leading-relaxed mb-3">
            No investigation has proven the donation caused the surveillance rollback, or that either
            was intended to affect this outbreak. HHS has publicly denied any connection. What follows
            is the documented sequence of events, in order, from named sources — not an accusation.
          </p>
          <p className="text-white font-semibold text-base leading-snug">
            Judge the timeline for yourself.
          </p>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-4">The documented sequence</h2>
          <div className="space-y-4">
            {TIMELINE.map((t, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-28 shrink-0 text-xs font-bold text-[#c8102e] pt-0.5">{t.date}</div>
                <div className="text-sm text-gray-600 leading-relaxed border-l-2 border-gray-100 pl-4">{t.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What changed in 2025 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-3">What actually changed at the CDC</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              FoodNet, the CDC's foodborne illness surveillance network, had required states to report
              eight pathogens for 28 years. Starting July 1, 2025, six of those eight — cyclospora,
              campylobacter, listeria, shigella, vibrio, and yersinia — became optional. Only Salmonella
              and Shiga toxin-producing E. coli remained mandatory.
            </p>
            <p>
              The CDC's stated rationale was that other surveillance systems had grown since FoodNet
              began in 1995, and narrowing its scope would let staff focus on core activities. Critics,
              including members of Congress, have pointed to the timing: the rule change landed roughly
              ten months before the largest cyclospora outbreak on record.
            </p>
          </div>
        </div>

        {/* The company */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-3">The company now linked to the outbreak</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              CDC and FDA investigators identified shredded iceberg lettuce supplied by Taylor Farms —
              served at Taco Bell locations in Indiana, Kentucky, Michigan, Ohio, and West Virginia — as
              a source of the outbreak. Taylor Farms has since pulled the product.
            </p>
            <p>
              Separately, Taylor Fresh Foods Inc. donated $1 million to MAGA Inc, the pro-Trump super
              PAC, in March 2025. CEO Bruce Taylor has personally donated over $400,000 across
              Republican-aligned committees since. Company executives met with White House and FDA
              officials on July 17, 2026 to discuss the outbreak response.
            </p>
          </div>
        </div>

        {/* What officials are saying */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-3">What officials are saying</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              Asked about a possible connection between the donations and the surveillance rollback,
              HHS responded on X: <span className="italic text-gray-800">"This is how the FAKE NEWS
              works: imply collusion, ignore the facts. Nothing influences our decisions except
              science and the safety of the American people."</span>
            </p>
            <p>
              In Congress, Sen. Jon Ossoff has questioned HHS Secretary Robert F. Kennedy Jr. directly
              about the surveillance cuts, and Rep. Greg Stanton has formally demanded answers on both
              the outbreak response and the food safety surveillance rollback.
            </p>
          </div>
        </div>

        {/* Closer to home */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">Closer to home</p>
          <p className="text-white/80 text-sm leading-relaxed">
            This isn't a distant federal story — Douglas County is Nebraska's largest county, and it's
            reporting a case spike right now. When federal surveillance narrows, the burden of catching
            an outbreak early shifts down to local health departments. Whether that shift was
            intentional or not, it's the local level that's left absorbing it.
          </p>
        </div>

        {/* What's coming next */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-3">Coming next in this series</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            We're tracking other examples of the same pattern — federal agencies narrowing what they
            monitor, with real consequences downstream. Next up: a look at the EPA's rollback of PFAS
            ("forever chemicals") monitoring in drinking water. That entry will get the same
            documented-timeline, sourced-only treatment as above once it's researched — we're not
            publishing claims on it yet.
          </p>
        </div>

        {/* Sources */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Sources for Case #1 — Cyclospora</p>
          <div className="space-y-2">
            {[
              { label: "Douglas County confirms 27 local cases of Cyclospora — WOWT", url: "https://www.wowt.com/2026/07/20/douglas-county-confirms-27-local-cases-cyclospora/" },
              { label: "CDC — Investigation Update: Cyclospora Outbreak, July 2026", url: "https://www.cdc.gov/cyclosporiasis/outbreaks/07-26/investigation.html" },
              { label: "CDC — Cyclospora Outbreak Linked to Iceberg Lettuce in 5 States", url: "https://www.cdc.gov/cyclosporiasis/outbreaks/07-26/index.html" },
              { label: "CDC/FDA link Taco Bell lettuce supplier to outbreak — Washington Post", url: "https://www.washingtonpost.com/health/2026/07/16/lettuce-supplier-is-potential-source-cyclosporiasis-outbreak-investigators-say/" },
              { label: "Taylor Farms recalls iceberg lettuce amid outbreak — NBC News", url: "https://www.nbcnews.com/health/health-news/fda-names-source-cyclosporiasis-outbreak-rcna587899" },
              { label: "Trump's CDC cut tracking of the parasite before the outbreak — Yahoo/fact-check", url: "https://www.yahoo.com/news/politics/articles/fact-check-trumps-cdc-cut-225000899.html" },
              { label: "CDC made cyclospora reporting optional in 2025 — WLTX", url: "https://www.wltx.com/article/news/nation-world/cyclosporiasis-parasite-disease-outbreak-symptoms-cdc-tracking/507-c17d494b-6c34-4a4b-a93c-ff03baf01c33" },
              { label: "Trump Admin Denies Colluding With Taylor Farms — Newsweek", url: "https://www.newsweek.com/trump-admin-denies-colluding-taylor-farms-cyclospora-outbreak-12221624" },
              { label: "Trump's CDC Stopped Monitoring the Parasite Before Outbreak — Newsweek", url: "https://www.newsweek.com/donald-trump-cdc-food-net-monitoring-parasite-cyclospora-12180951" },
              { label: "Sen. Ossoff questions RFK Jr. on CDC foodborne surveillance — CBS", url: "https://www.cbsnews.com/atlanta/news/georgia-sen-jon-ossoff-questions-rfk-jr-over-cdc-foodborne-illness-surveillance-during-cyclospora-outbreak/" },
              { label: "Rep. Stanton demands answers on outbreak and surveillance cuts", url: "https://stanton.house.gov/2026/7/stanton-demands-answers-on-cyclospora-outbreak-raises-concerns-over-food-safety-surveillance-cuts" },
              { label: "About FoodNet — CDC", url: "https://cdc.gov/foodnet/about/index.html" },
            ].map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#c8102e] transition-colors group">
                <span className="text-gray-300 group-hover:text-[#c8102e]">↗</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          This page will be updated as the outbreak investigation and any congressional inquiries develop.{" "}
          <Link href="/" className="hover:underline">Back to home ↗</Link>
        </p>

      </div>
    </div>
  );
}
