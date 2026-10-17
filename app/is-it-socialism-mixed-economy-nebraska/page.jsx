import { readFileSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import MarkdownArticle from "@/components/MarkdownArticle";
import SeriesNav from "@/components/SeriesNav";
import ShareControl from "@/components/ShareControl";
import { PAGE, SERIES, SHARE } from "@/data/is-it-socialism";
import { assertArticle } from "@/lib/article-markdown.mjs";

const BODY = readFileSync(
  join(process.cwd(), "content/is-it-socialism-mixed-economy-nebraska.md"),
  "utf8"
);

assertArticle(BODY);

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

export default function IsItSocialism() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <article className="max-w-4xl mx-auto px-6 py-10">
        <SeriesNav partLabel={SERIES.partLabel} next={SERIES.next} />

        <header className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">{PAGE.eyebrow}</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">{PAGE.title}</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{PAGE.metaDescription}</p>
        </header>

        <MarkdownArticle markdown={BODY} afterIntro={<ShareControl {...SHARE} />} />

        <SeriesNav partLabel={SERIES.partLabel} next={SERIES.next} className="mb-8" />

        <div className="flex gap-4 flex-wrap">
          <Link href="/" className="text-xs font-medium text-[#c8102e] hover:underline">
            ← Back to homepage
          </Link>
        </div>
      </article>
    </div>
  );
}
