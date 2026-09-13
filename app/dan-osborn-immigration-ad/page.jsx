import Link from "next/link";
import ShareControl from "@/components/ShareControl";

export const metadata = {
  title: "If You Just Saw the Dan Osborn Immigration Ad — Here’s the Record",
  description:
    "Dan Osborn amnesty? Open borders? ICE? A sourced fact check of the Senate ads: what the spots claim vs his Kellogg’s-strike record, border-security quotes, and immigration-reform language.",
  openGraph: {
    title: "If You Just Saw the Dan Osborn Immigration Ad — Here’s the Record",
    description:
      "The ads say open borders and amnesty. The public record is border security plus immigration reform — including the 2021 Kellogg’s strike.",
    url: "https://unicameralwatchdog.com/dan-osborn-immigration-ad",
    type: "article",
    images: [{ url: "/dan-osborn-immigration-ad/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "If You Just Saw the Dan Osborn Immigration Ad — Here’s the Record",
    description:
      "Dan Osborn immigration fact check: amnesty, ICE, and open-borders claims vs the public record.",
    images: ["/dan-osborn-immigration-ad/opengraph-image"],
  },
};

const SHARE = {
  shareUrl: "https://unicameralwatchdog.com/dan-osborn-immigration-ad",
  shareText:
    "The ads say Dan Osborn is for open borders and amnesty. Here’s the public record.",
  shareTitle: "If You Just Saw the Dan Osborn Immigration Ad — Here’s the Record",
  shareImage: "/dan-osborn-immigration-ad/opengraph-image",
  downloadName: "watchdog-osborn-immigration-ad-record.png",
};

const SOURCES = [
  {
    label: "CNN KFile: As union leader, Dan Osborn helped alert ICE to allegations of undocumented workers (June 19, 2026)",
    url: "https://www.cnn.com/2026/06/19/politics/dan-osborn-nebraska-alerted-ice-claims-undocumented-workers",
  },
  {
    label: "KSNB: Osborn, Ricketts spar on health care, immigration, beef imports at Nebraska State Fair (Sept. 2026)",
    url: "https://www.ksnblocal4.com/2026/09/02/osborn-ricketts-spar-health-care-immigration-beef-imports-nebraska-state-fair/",
  },
  {
    label: "Nebraska Examiner: Ricketts, Osborn talk tariffs, Iran war during Nebraska State Fair debate (Sept. 1, 2026)",
    url: "https://nebraskaexaminer.com/2026/09/01/ricketts-osborn-talk-tariffs-iran-war-during-nebraska-state-fair-debate/",
  },
  {
    label: "Nebraska Examiner: Osborn, Ricketts navigate ICE stances with funding debate on horizon (Feb. 3, 2026)",
    url: "https://nebraskaexaminer.com/2026/02/03/osborn-ricketts-navigate-ice-stances-with-funding-debate-on-horizon/",
  },
  {
    label: "KSNB: Get to know the U.S. Senate candidates — Fischer vs Osborn (Oct. 30, 2024)",
    url: "https://www.ksnblocal4.com/2024/10/30/get-know-us-senate-candidates-sen-deb-fischer-vs-dan-osborn/",
  },
  {
    label: "Semafor: Union leader Dan Osborn looks for a Nebraska upset (Sept. 6, 2024)",
    url: "https://www.semafor.com/article/09/06/2024/theres-no-one-like-me-in-the-senate-union-leader-dan-osborn-looks-for-a-nebraska-upset",
  },
  {
    label: "Wikipedia: Dan Osborn — campaign platform summary",
    url: "https://en.wikipedia.org/wiki/Dan_Osborn",
  },
  {
    label: "The Hill: Dan Osborn launches independent Senate bid against Ricketts (July 8, 2025)",
    url: "https://thehill.com/homenews/campaign/5389147-dan-osborn-independent-senate-bid-nebraska/",
  },
  {
    label: "Nebraska Examiner: Osborn launches Senate bid against U.S. Sen. Pete Ricketts (July 8, 2025)",
    url: "https://nebraskaexaminer.com/2025/07/08/nebraskas-dan-osborn-picks-a-race-launches-senate-bid-against-u-s-sen-pete-ricketts/",
  },
];

export default function DanOsbornImmigrationAd() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">If you just saw the ad</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">
            The Ads Say Open Borders. Here’s the Record.
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            Attack ads in the U.S. Senate race — Dan Osborn versus Sen. Pete Ricketts — frame Osborn
            as soft on immigration and for “amnesty.” This page is the public record, not a campaign mailer.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">Ads vs the record</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            If an immigration spot just landed in your Omaha or Lincoln feed — TV or digital — it is
            probably selling a simple story: Osborn wants open borders, or a blank-check amnesty.
            Campaigns do that because the scare word fits a 30-second slot. The record is longer.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Watchdog rule: quote what he said, cite who reported it, and leave out what nobody can
            verify. That includes whether ICE ever confirmed a tip.
          </p>
          <ShareControl {...SHARE} />
        </div>

        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">Nov. 3, 2026 · Osborn vs Ricketts</p>
          <p className="text-white font-semibold text-lg leading-snug mb-3">
            The ads say he’s for open borders and amnesty. His public record is border security plus
            immigration reform — and as a union leader he worked to flag alleged undocumented
            replacement labor during the Kellogg’s strike.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            That is not a permission slip. It is also not the cartoon. He has argued Nebraska needs
            a real border, criticized wasteful or overreaching enforcement tactics, and talked about
            reform for longtime non-criminal undocumented workers — the language campaigns flatten
            into “amnesty.”
          </p>
          <a
            href="https://www.cnn.com/2026/06/19/politics/dan-osborn-nebraska-alerted-ice-claims-undocumented-workers"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-white/50 hover:text-white transition-colors"
          >
            Source: CNN KFile — June 19, 2026 ↗
          </a>
        </div>

        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What the ad implies vs what the record shows</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-1 w-full bg-amber-400" />
            <div className="p-5">
              <p className="text-xs font-bold tracking-widest text-amber-700 uppercase mb-2">What the ad implies</p>
              <h3 className="text-base font-bold text-gray-900 mb-3">Open borders. Soft on ICE. Amnesty.</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The spots collapse every disagreement about tactics, budgets, or legal status into
                one charge: he would throw the border open and legalize people who broke the law.
                The Ricketts campaign used that frame on day one — telling The Hill that Osborn would
                “vote with Democrats to open the border.” At the State Fair, Ricketts said Osborn’s
                reform talk is a path to citizenship for people here illegally.
              </p>
              <p className="text-xs text-gray-400 mt-3">
                Sources:{" "}
                <a href="https://thehill.com/homenews/campaign/5389147-dan-osborn-independent-senate-bid-nebraska/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">The Hill, July 8, 2025</a>
                {" · "}
                <a href="https://nebraskaexaminer.com/2026/09/01/ricketts-osborn-talk-tariffs-iran-war-during-nebraska-state-fair-debate/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Examiner, Sept. 1, 2026</a>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-1 w-full bg-[#c8102e]" />
            <div className="p-5">
              <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">What the record shows</p>
              <h3 className="text-base font-bold text-gray-900 mb-3">Secure the border. Reform the system. Don’t invent a cartoon.</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                In public, Osborn has said “without a border we don’t have a country,” backed adding
                border agents, and described ICE’s basic mission as keeping communities safe. He has
                also said the agency’s ballooned budget is wasteful and that enforcement should use
                the same common-sense standards as other law enforcement. Reform talk in his platform
                is about longtime non-criminal undocumented workers — not a campaign slogan that
                says “amnesty for illegal aliens.”
              </p>
              <p className="text-xs text-gray-400 mt-3">
                Sources:{" "}
                <a href="https://www.ksnblocal4.com/2024/10/30/get-know-us-senate-candidates-sen-deb-fischer-vs-dan-osborn/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">KSNB, 2024</a>
                {" · "}
                <a href="https://en.wikipedia.org/wiki/Dan_Osborn" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Wikipedia platform summary</a>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Kellogg’s / ICE — what he said, what the campaign later clarified</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <div className="flex items-start gap-2.5 mb-3">
            <span className="text-xs font-bold text-white bg-[#c8102e] px-2.5 py-1 rounded-lg shrink-0 mt-0.5">2021</span>
            <div>
              <h3 className="text-base font-bold text-gray-900">The Omaha strike and alleged replacement labor</h3>
              <p className="text-xs text-gray-400 mt-0.5">CNN KFile · reported June 19, 2026</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            During the 2021 Kellogg’s strike, Osborn was president of Bakery, Confectionery, Tobacco
            Workers and Grain Millers Local 50G in Omaha. On a December 2021 pro-union podcast, CNN’s
            KFile reported, he said Kellogg’s was replacing strikers with “a good percentage of
            undocumented workers,” and: “We have been in contact with Homeland Security and ICE.
            We’ve made our claims. I hope they do the right thing and investigate our claims.”
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            In 2026, his Senate campaign told CNN a narrower version: he contacted the{" "}
            <span className="font-semibold text-gray-900">Douglas County Sheriff</span> for reporting
            procedures, then passed that guidance to his team. Others, the campaign said, contacted
            DHS and ICE “in their individual capacity.” He says he did not personally contact DHS or ICE.
          </p>
          <div className="bg-gray-50 rounded-xl p-3.5 border-l-2 border-gray-300 mb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">What this page will not claim</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              CNN reported the podcast and the campaign’s later account. That is not the same as ICE
              confirming it received a tip, opened a case, or found undocumented workers at the plant.
              Do not treat a 2021 union allegation as a federal finding.
            </p>
          </div>
          <a
            href="https://www.cnn.com/2026/06/19/politics/dan-osborn-nebraska-alerted-ice-claims-undocumented-workers"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-[#c8102e] hover:underline"
          >
            CNN KFile, June 19, 2026 ↗
          </a>
        </div>

        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Stated positions — sourced, not invented</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-1 w-full bg-gray-400" />
            <div className="p-5">
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Border security</p>
              <h3 className="text-base font-bold text-gray-900 mb-3">He has argued there is no country without a border.</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                On the 2024 trail, Osborn told KSNB he was frustrated that Washington had talked about
                the same problem for decades: “That’s where I get frustrated, because without a border
                we don’t have a country.” Wikipedia’s campaign-platform summary lists increasing
                border security — and, in that 2024 framing, building the border wall — alongside
                immigration-system reform.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="https://www.ksnblocal4.com/2024/10/30/get-know-us-senate-candidates-sen-deb-fischer-vs-dan-osborn/" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
                  KSNB, Oct. 30, 2024 ↗
                </a>
                <a href="https://en.wikipedia.org/wiki/Dan_Osborn" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
                  Wikipedia: Dan Osborn ↗
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-1 w-full bg-gray-400" />
            <div className="p-5">
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">ICE’s job vs ICE’s tactics</p>
              <h3 className="text-base font-bold text-gray-900 mb-3">Necessary mission. Fight over how it is done — and what it costs.</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                At the 2026 State Fair, the Omaha Daily Record / Nebraska Examiner reported Osborn
                agreed with ICE’s basic mission: keep communities safe. He also said the Biden-era
                border had failed. In the same breath he called the jump from about{" "}
                <span className="font-semibold text-gray-900">$7 billion to $80 billion</span> in ICE
                funding “wasteful government spending,” and said he would push training, accountability,
                and body cameras. In February 2026 he told the Examiner ICE should operate under
                “common sense” and “consistent standards” that other law enforcement follows — while
                Congress pursues “comprehensive immigration reform that works for everyone.”
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                That is criticism of tactics and cost, not a public call to abolish the agency. Ads
                that flatten the two are doing politics, not reporting.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="https://www.ksnblocal4.com/2026/09/02/osborn-ricketts-spar-health-care-immigration-beef-imports-nebraska-state-fair/" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
                  KSNB, Sept. 2026 ↗
                </a>
                <a href="https://nebraskaexaminer.com/2026/09/01/ricketts-osborn-talk-tariffs-iran-war-during-nebraska-state-fair-debate/" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
                  Examiner / Daily Record, Sept. 1, 2026 ↗
                </a>
                <a href="https://nebraskaexaminer.com/2026/02/03/osborn-ricketts-navigate-ice-stances-with-funding-debate-on-horizon/" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
                  Examiner, Feb. 3, 2026 ↗
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-1 w-full bg-gray-400" />
            <div className="p-5">
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Reform is not the scare word “amnesty”</p>
              <h3 className="text-base font-bold text-gray-900 mb-3">Path for longtime, non-criminal workers — say that out loud.</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Wikipedia’s platform summary says Osborn supports reforming the immigration system
                and exploring ways to legalize <span className="font-semibold text-gray-900">non-criminal long-term undocumented workers</span>.
                In a 2024 Semafor interview he called that “meaningful immigration reform”: people
                who have been neighbors for decades, a need to vet newcomers, more lawyers and judges,
                and no “willy-nilly” entry for people who could be dangerous. CNN later described the
                same mix — tough border language plus a path for longtime undocumented residents —
                as the lane he has tried to occupy on the trail.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Fair distinction: that is earned-status / reform language. It is not the same sentence
                as “amnesty for illegal aliens,” which erases vetting, criminal-record limits, and
                the border-first condition he has attached to the idea. Ricketts has called the reform
                talk a path to citizenship; Osborn’s own words are narrower than the ad’s.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="https://en.wikipedia.org/wiki/Dan_Osborn" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
                  Wikipedia platform bullets ↗
                </a>
                <a href="https://www.semafor.com/article/09/06/2024/theres-no-one-like-me-in-the-senate-union-leader-dan-osborn-looks-for-a-nebraska-upset" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
                  Semafor, Sept. 6, 2024 ↗
                </a>
                <a href="https://www.cnn.com/2026/06/19/politics/dan-osborn-nebraska-alerted-ice-claims-undocumented-workers" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
                  CNN KFile, June 19, 2026 ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Who this race is</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            This is the <span className="font-semibold text-gray-900">U.S. Senate</span> race:
            Dan Osborn, a registered nonpartisan running as an independent, versus incumbent
            Sen. Pete Ricketts. It is not the governor’s race. Gov. Jim Pillen is running for
            re-election against Lynne Walz — a different ballot line, different ads.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Context, not a scorecard: at the State Fair, Ricketts cited an endorsement from the
            National Border Patrol Council, the Border Patrol union. That tells you how he wants
            the immigration contrast drawn. It does not rewrite Osborn’s public quotes.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://thehill.com/homenews/campaign/5389147-dan-osborn-independent-senate-bid-nebraska/" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
              The Hill, July 8, 2025 ↗
            </a>
            <a href="https://nebraskaexaminer.com/2025/07/08/nebraskas-dan-osborn-picks-a-race-launches-senate-bid-against-u-s-sen-pete-ricketts/" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
              Examiner launch, July 8, 2025 ↗
            </a>
            <a href="https://www.ksnblocal4.com/2026/09/02/osborn-ricketts-spar-health-care-immigration-beef-imports-nebraska-state-fair/" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
              KSNB State Fair / Border Patrol union ↗
            </a>
            <Link href="/property-tax-coupon" className="text-xs font-medium text-gray-500 hover:text-[#c8102e] transition-colors">
              Pillen vs Walz property-tax ads →
            </Link>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap mb-8">
          <Link href="/" className="text-xs font-medium text-[#c8102e] hover:underline">
            ← Back to homepage
          </Link>
          <Link href="/outside-money" className="text-xs font-medium text-gray-500 hover:text-[#c8102e] transition-colors">
            Senate race: outside money →
          </Link>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Sources & Further Reading</p>
          <div className="space-y-2">
            {SOURCES.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 text-xs text-gray-500 hover:text-[#c8102e] transition-colors group"
              >
                <span className="text-gray-300 group-hover:text-[#c8102e] shrink-0 mt-0.5">↗</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
