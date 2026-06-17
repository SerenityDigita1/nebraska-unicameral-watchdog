import Link from "next/link";

export const metadata = {
  title: "Outside Money and Nebraska Politics: The Ricketts Story",
  description:
    "Gov. Ricketts campaigns on 'keeping Nebraska local' while taking $28.9M in family money. But his actual record—opposing wages, capping raises—shows what the money really bought.",
};

const SOURCES = [
  { label: "Nebraska Examiner: Texas Sen. Ted Cruz campaigns for Ricketts in Nebraska", url: "https://nebraskaexaminer.com/2026/06/12/texas-sen-ted-cruz-campaigns-for-ricketts-in-nebraska/" },
  { label: "Nebraska Public Media: Ricketts' Riches — record election spending shows senator's family far from done", url: "https://nebraskapublicmedia.org/en/news/news-articles/ricketts-riches-record-election-spending-shows-senators-family-far-from-done-in-nebraska/" },
  { label: "Nebraska Public Media: Ricketts' Riches — wealthy governor, billionaire family changed Nebraska elections", url: "https://nebraskapublicmedia.org/en/news/news-articles/ricketts-riches-wealthy-governor-billionaire-family-changed-nebraska-elections/" },
  { label: "Nebraska Examiner: Nebraska's Osborn outraises Ricketts in Q1 of 2026 Senate race", url: "https://nebraskaexaminer.com/2026/04/28/nebraskas-osborn-outraises-ricketts-in-q1-of-nebraska-u-s-senate-race/" },
  { label: "Nebraska Examiner: Legislature passes law capping annual minimum wage bumps, creating 'youth' wage below $15", url: "https://nebraskaexaminer.com/2026/02/05/legislature-passes-law-capping-annual-minimum-wage-bumps-creating-youth-wage-below-15-until-2065/" },
];

export default function OutsideMoney() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">2026 Senate Race</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">"Keep Nebraska Local" — But Whose Money Built This Campaign?</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
            Gov. Pete Ricketts campaigns on keeping Nebraska local and stopping outside interference.
            But his actual record shows what $28.9 million in outside money really buys.
          </p>
        </div>

        {/* The contradiction */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">The contradiction</p>
          <p className="text-white font-semibold text-lg leading-snug mb-3">
            In June 2026, Texas Sen. Ted Cruz came to Lincoln to warn Nebraskans about outside interference in their politics.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-3">
            The Democrats, he told a crowd at the Country Club of Lincoln, were "dropping millions of dollars into Nebraska" to "deceive the voters." He was there to support Gov. Pete Ricketts, who's running for U.S. Senate on a message of keeping Nebraska local. He promised to protect Nebraskan interests from coastal elites and national political machines.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            The problem is obvious: the man warning about outside influence *is* the outside influence. And the candidate he's supporting has built his entire political career on it.
          </p>
        </div>

        {/* The money machine */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-1">The Ricketts Money Machine</h2>
          <p className="text-xs text-gray-400 mb-4">How $28.9 million shaped Nebraska politics</p>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Pete Ricketts didn't invent his political fortune. His family did.
            </p>
            <p>
              Since 2010, the Ricketts family has poured <strong className="text-gray-900">$28.9 million</strong> into Nebraska politics. That's not just campaign contributions. That's a controlling interest in how Nebraska votes. Of every 11 dollars spent on any Nebraska political race over the last 12 years, one came from the Ricketts family.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 border-l-2 border-[#c8102e]">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">What this means</p>
              <p className="italic text-gray-600">
                "At this level of giving they may not own Nebraska politics but they seem to have a long-term lease." — Former Senator Bob Kerrey
              </p>
            </div>
            <p>
              That lease has been profitable. As governor, Ricketts delivered.
            </p>
          </div>
        </div>

        {/* What Ricketts actually did */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-3">What Ricketts Actually Did</h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Campaign messaging about "local values" and "keeping Nebraska first" sounds good. The problem is asking what Ricketts <em>actually did</em> when he had the power to shape Nebraska's laws.
            </p>
            <p>
              On wages, the answer is clear: he opposed them.
            </p>
            <p>
              Ricketts didn't just fail to raise Nebraska's minimum wage. He actively fought against it. More damaging, under his governorship, the Legislature passed a law that <strong className="text-gray-900">caps how much the minimum wage can rise each year</strong>. For workers under 20, there's an even lower "youth wage" - below $15 an hour, capped until 2065.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 my-4">
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-lg font-black text-[#c8102e]">$15,080</div>
                <div className="text-xs text-gray-500 mt-1">Annual earnings at Nebraska min wage, full-time work, before taxes</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-lg font-black text-[#c8102e]">Until 2065</div>
                <div className="text-xs text-gray-500 mt-1">When youth workers (under 20) can earn full minimum wage</div>
              </div>
            </div>
            <p>
              That's below poverty for a family. This wasn't accidental. It was policy. Ricketts chose to oppose wage increases and to cap wage growth. That's what the money bought.
            </p>
          </div>
        </div>

        {/* The pattern */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-3">Follow the Money → Follow the Outcome</h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Here's how outside money actually works in politics: it doesn't just pay for ads. It shapes what politicians <em>do</em> once in office.
            </p>
            <p>
              Ricketts' record shows the pattern clearly. Millions flowed in from the Ricketts family, corporate PACs (Walmart, Google, Microsoft), and now the national Republican establishment. In return, what did they get? A governor who fought wage increases, capped wage growth, and cut taxes for corporations while workers fell further behind.
            </p>
            <p>
              Now, in 2026, that same machine is running again. National Republicans are investing heavily, Ted Cruz is flying in to campaign, and the message is the same: outside forces are threatening Nebraska.
            </p>
            <p className="font-semibold text-gray-900">
              The irony is lost on no one: the outside forces *are* the Ricketts machine.
            </p>
          </div>
        </div>

        {/* Why this matters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-3">Why This Matters</h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              We've documented elsewhere on this site <Link href="/living-wage" className="text-[#c8102e] font-medium hover:underline">what Nebraskans actually need to live</Link>: affordable housing, food, childcare, transportation. We know the gap between what workers earn and what they need to survive.
            </p>
            <p>
              This page explains <em>why</em> that gap exists: <strong className="text-gray-900">because outside money shapes politicians' priorities, and those priorities aren't workers.</strong>
            </p>
            <p>
              Ricketts' record proves it. Campaign talk about "local values" and "keeping Nebraska first" means nothing when your actual record is capping wages and cutting taxes for the wealthy.
            </p>
          </div>
        </div>

        {/* The 2026 moment */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-3">The 2026 Moment</h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              The Senate race is a fork in the road. Dan Osborn, the nonpartisan candidate, is actually a Nebraska native—someone who's built his life here, not someone running on inherited wealth. He's built his campaign on a different premise: work for working people, not the money machine.
            </p>
            <p>
              Ricketts is running on the same machine that's always worked: outside money, elite gatekeeping, and promises that never match the record.
            </p>
            <p className="font-semibold text-gray-900">
              The question for Nebraskans is simple: which story do you believe—the campaign talk about "local values," or the actual record of what Ricketts did when he had power?
            </p>
          </div>
        </div>

        {/* Links out */}
        <div className="flex gap-4 flex-wrap mb-8">
          <Link href="/living-wage" className="text-xs font-medium text-[#c8102e] hover:underline">
            See what Nebraskans need to live ↗
          </Link>
          <Link href="/issues" className="text-xs font-medium text-[#c8102e] hover:underline">
            See all key issues ↗
          </Link>
        </div>

        {/* Sources */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Sources</p>
          <div className="space-y-2">
            {SOURCES.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                className="flex items-start gap-2 text-xs text-gray-500 hover:text-[#c8102e] transition-colors group">
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
