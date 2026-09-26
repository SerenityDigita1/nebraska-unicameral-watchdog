import Link from "next/link";
import ShareControl from "@/components/ShareControl";
import {
  BANNER,
  CBO_BREAKDOWN,
  CONGRESS,
  COSTS,
  DELEGATION,
  INTRO,
  NEBRASKA_NOTE,
  PAGE,
  RECORD_NOTES,
  SCALE,
  SHARE,
  SOURCES,
  STATEMENTS,
  TIETJENS,
  VOTE_LEAD,
  VOTE_MENU,
  VOTES,
} from "@/data/ricketts-iran";

export const metadata = {
  title: PAGE.metaTitle,
  description: PAGE.metaDescription,
  openGraph: {
    title: PAGE.metaTitle,
    description: PAGE.metaDescription,
    url: SHARE.shareUrl,
    type: "article",
    images: [{ url: SHARE.shareImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE.metaTitle,
    description: PAGE.metaDescription,
    images: [SHARE.shareImage],
  },
};

function SourceLinks({ sources, className }) {
  return (
    <div className="flex gap-x-4 gap-y-1 flex-wrap">
      {sources.map((source) => (
        <a
          key={source.url}
          href={source.url}
          target="_blank"
          rel="noreferrer"
          className={className}
        >
          {source.label} ↗
        </a>
      ))}
    </div>
  );
}

export default function RickettsIran() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">{PAGE.eyebrow}</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">
            {PAGE.title}
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            {PAGE.dek}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">Statements and the roll calls</p>
          {INTRO.map((paragraph) => (
            <p key={paragraph} className="text-sm text-gray-600 leading-relaxed mb-3">
              {paragraph}
            </p>
          ))}
          <ShareControl {...SHARE} />
        </div>

        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">{BANNER.kicker}</p>
          <p className="text-white font-semibold text-lg leading-snug mb-3">
            {BANNER.headline}
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            {BANNER.body}
          </p>
          <a
            href={BANNER.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-white/50 hover:text-white transition-colors"
          >
            {BANNER.sourceLabel} ↗
          </a>
        </div>

        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What he said</h2>
        <div className="space-y-4 mb-8">
          {STATEMENTS.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-1 w-full bg-amber-400" />
              <div className="p-5">
                <p className="text-xs font-bold tracking-widest text-amber-700 uppercase mb-2">{item.kicker}</p>
                {item.quotes.map((quote) => (
                  <blockquote key={quote} className="text-base font-bold text-gray-900 leading-snug mb-3">
                    {`“${quote}”`}
                  </blockquote>
                ))}
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.context}</p>
                <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                <SourceLinks sources={item.sources} className="text-xs font-medium text-[#c8102e] hover:underline" />
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">The record</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{VOTE_LEAD}</p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-5">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <caption className="sr-only">
                Senate war powers roll calls on Iran in 2026, with votes by Sen. Pete Ricketts and Sen. Deb Fischer
              </caption>
              <thead>
                <tr className="text-left text-[10px] font-semibold tracking-widest text-gray-400 uppercase border-b border-gray-100">
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Roll call</th>
                  <th className="px-4 py-3 font-semibold">Measure</th>
                  <th className="px-4 py-3 font-semibold">Result</th>
                  <th className="px-4 py-3 font-semibold">Ricketts</th>
                  <th className="px-4 py-3 font-semibold">Fischer</th>
                </tr>
              </thead>
              <tbody>
                {VOTES.map((vote) => (
                  <tr key={vote.roll} className="border-b border-gray-50 last:border-0">
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{vote.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <a href={vote.url} target="_blank" rel="noreferrer" className="font-semibold text-[#c8102e] hover:underline">
                        {vote.roll}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-gray-800">{vote.measure}</td>
                    <td className={`px-4 py-3 whitespace-nowrap ${vote.passed ? "font-semibold text-gray-900" : "text-gray-600"}`}>
                      {vote.result}
                    </td>
                    <td className={`px-4 py-3 whitespace-nowrap ${vote.ricketts === "Not voting" ? "font-semibold text-gray-900" : "text-gray-800"}`}>
                      {vote.ricketts}
                    </td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{vote.fischer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="px-4 py-3 text-xs text-gray-400 border-t border-gray-50">
            Each roll call links to senate.gov.{" "}
            <a href={VOTE_MENU.url} target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">
              {VOTE_MENU.label} ↗
            </a>
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {RECORD_NOTES.map((note) => (
            <div key={note.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{note.text}</p>
              <SourceLinks sources={note.sources} className="text-xs font-medium text-[#c8102e] hover:underline" />
            </div>
          ))}
        </div>

        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What he has said about Congress and war powers</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">{CONGRESS.lead}</p>
          <SourceLinks sources={CONGRESS.leadSources} className="text-xs font-medium text-[#c8102e] hover:underline" />
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">{CONGRESS.after}</p>
          <SourceLinks sources={CONGRESS.afterSources} className="text-xs font-medium text-[#c8102e] hover:underline" />
        </div>

        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What it costs, and who pays</h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-4">
          {COSTS.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-2xl font-bold text-gray-900 tracking-tight mb-2">{item.figure}</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.detail}</p>
              <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
                {item.sourceLabel} ↗
              </a>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">{CBO_BREAKDOWN.text}</p>
          <a href={CBO_BREAKDOWN.sourceUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
            {CBO_BREAKDOWN.sourceLabel} ↗
          </a>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">{SCALE.text}</p>
          <a href={SCALE.sourceUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
            {SCALE.sourceLabel} ↗
          </a>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">{TIETJENS.text}</p>
          <SourceLinks sources={TIETJENS.sources} className="text-xs font-medium text-[#c8102e] hover:underline" />
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">{NEBRASKA_NOTE.text}</p>
          <a href={NEBRASKA_NOTE.sourceUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
            {NEBRASKA_NOTE.sourceLabel} ↗
          </a>
        </div>

        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Where others in Nebraska stand</h2>
        <div className="space-y-4 mb-8">
          {DELEGATION.map((person) => (
            <div key={person.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-1 w-full bg-[#0a0e1a]" />
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 mb-2">{person.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{person.text}</p>
                {person.quotes.map((quote, index) => (
                  <blockquote key={quote} className="text-sm text-gray-800 leading-relaxed mb-2 border-l-2 border-gray-200 pl-3">
                    {`“${quote}”`}
                    {person.quoteNotes?.[index] ? (
                      <span className="block text-xs text-gray-400 mt-1">{person.quoteNotes[index]}</span>
                    ) : null}
                  </blockquote>
                ))}
                <div className="mt-3">
                  <SourceLinks sources={person.sources} className="text-xs font-medium text-[#c8102e] hover:underline" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap mb-8">
          <Link href="/" className="text-xs font-medium text-[#c8102e] hover:underline">
            ← Back to homepage
          </Link>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Sources & Further Reading</p>
          <div className="space-y-2">
            {SOURCES.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 text-xs text-gray-500 hover:text-[#c8102e] transition-colors group"
              >
                <span className="text-gray-300 group-hover:text-[#c8102e] shrink-0 mt-0.5">↗</span>
                {source.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
