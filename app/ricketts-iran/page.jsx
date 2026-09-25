import Link from "next/link";
import ShareControl from "@/components/ShareControl";
import {
  BANNER,
  PAGE,
  RECORD,
  RHETORIC,
  SHARE,
  SOURCES,
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

function SourceLine({ label, url, className }) {
  if (!url) {
    return <span className={className}>{label}</span>;
  }
  return (
    <a href={url} target="_blank" rel="noreferrer" className={className}>
      {label} ↗
    </a>
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

        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 mb-8">
          <p className="text-xs font-bold tracking-widest text-amber-800 uppercase mb-1">Draft scaffold</p>
          <p className="text-sm text-amber-900 leading-relaxed">
            This page will set public statements next to the Senate record — votes such as war powers resolutions, with dates and sources. Every quote, vote, date, and citation below is a placeholder. TODO: copy from RESEARCH.md into data/ricketts-iran.js.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">Rhetoric vs the record</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            What he said goes in the next section. The votes, dates, and sources go under The record. Nothing in those slots is filled in yet.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            TODO: copy from RESEARCH.md. Replace this note with the sourced setup once the quotes and votes are in.
          </p>
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
          <SourceLine
            label={BANNER.sourceLabel}
            url={BANNER.sourceUrl}
            className="text-xs font-medium text-white/50 hover:text-white transition-colors"
          />
        </div>

        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What he said</h2>
        <div className="space-y-4 mb-8">
          {RHETORIC.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-1 w-full bg-amber-400" />
              <div className="p-5">
                <p className="text-xs font-bold tracking-widest text-amber-700 uppercase mb-2">Rhetoric</p>
                <blockquote className="text-base font-bold text-gray-900 leading-snug mb-3">
                  {item.quote}
                </blockquote>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.context}</p>
                <p className="text-xs text-gray-400">
                  {item.date}
                  {" · "}
                  <SourceLine
                    label={item.sourceLabel}
                    url={item.sourceUrl}
                    className="text-[#c8102e] hover:underline"
                  />
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">The record</h2>
        <div className="space-y-4 mb-8">
          {RECORD.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-1 w-full bg-[#c8102e]" />
              <div className="p-5">
                <div className="flex items-start gap-2.5 mb-3">
                  <span className="text-xs font-bold text-white bg-[#0a0e1a] px-2.5 py-1 rounded-lg shrink-0 mt-0.5">
                    {item.measure}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.date} · {item.position}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.summary}</p>
                <SourceLine
                  label={item.sourceLabel}
                  url={item.sourceUrl}
                  className="text-xs font-medium text-[#c8102e] hover:underline"
                />
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
            {SOURCES.map((s, i) => (
              <div
                key={`${s.label}-${i}`}
                className="flex items-start gap-2 text-xs text-gray-500"
              >
                <span className="text-gray-300 shrink-0 mt-0.5">↗</span>
                <SourceLine
                  label={s.label}
                  url={s.url}
                  className="hover:text-[#c8102e] transition-colors"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
