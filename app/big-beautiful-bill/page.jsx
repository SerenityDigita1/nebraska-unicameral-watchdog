import Link from "next/link";

export const metadata = { title: "The One Big Beautiful Bill · NE Watchdog" };

const SOURCES = [
  { label: "CBO: Distributional Effects of Public Law 119-21 (post-enactment, August 2025)", url: "https://www.cbo.gov/publication/61367" },
  { label: "CBO: Distributional Effects of H.R. 1 (pre-enactment)", url: "https://www.cbo.gov/publication/61387" },
  { label: "NPR: Trump signs One Big Beautiful Bill on July 4", url: "https://www.npr.org/2025/07/03/nx-s1-5454841/house-republicans-trump-tax-bill-medicaid" },
  { label: "Nebraska Appleseed: How the Bill Slashes Nebraska's Health Care", url: "https://neappleseed.org/49699" },
  { label: "Nebraska Appleseed: Nebraska implementing SNAP eligibility changes", url: "https://neappleseed.org/50040" },
  { label: "Nebraska Examiner: One Big Beautiful Bill is a big problem for Nebraska's health care system", url: "https://nebraskaexaminer.com/2025/08/15/one-big-beautiful-bill-is-a-big-problem-for-nebraskas-health-care-system/" },
  { label: "Nebraska Examiner: Projected to cost Nebraska over $216M in state tax revenue", url: "https://nebraskaexaminer.com/2025/09/02/one-big-beautiful-bill-projected-to-cost-nebraska-over-216-million-in-tax-revenue-in-state-budget/" },
  { label: "NBC News: Nebraska rolls out Medicaid work requirements", url: "https://www.nbcnews.com/health/health-news/nebraska-rolls-medicaid-work-requirements-putting-thousands-risk-losin-rcna342900" },
  { label: "Marketplace: Nebraska updates Medicaid eligibility", url: "https://www.marketplace.org/story/2026/05/07/nebraska-updates-medicaid-eligibility-from-the-one-big-beautiful-bill-act/" },
  { label: "Food Bank for the Heartland: What SNAP changes mean for Nebraskans", url: "https://foodbankheartland.org/what-changes-to-snap-mean-for-nebraska/" },
  { label: "Yale Budget Lab: Combined distributional effects — OBBB and tariffs", url: "https://budgetlab.yale.edu/research/combined-distributional-effects-one-big-beautiful-bill-act-and-tariffs" },
  { label: "Center for American Progress: 7 ways the bill cuts taxes for the rich", url: "https://www.americanprogress.org/article/7-ways-the-big-beautiful-bill-cuts-taxes-for-the-rich/" },
  { label: "Center for American Progress: The truth about Medicaid and Medicare cuts", url: "https://www.americanprogress.org/article/the-truth-about-the-one-big-beautiful-bill-acts-cuts-to-medicaid-and-medicare/" },
  { label: "CBPP: Nebraska's $1.85 billion math problem (state tax context)", url: "https://www.cbpp.org/blog/nebraskas-185-billion-math-problem" },
  { label: "Gov. Pillen praises passage of One Big Beautiful Bill", url: "https://governor.nebraska.gov/gov-pillen-praises-passage-one-big-beautiful-bill" },
  { label: "Sen. Fischer: How the bill delivers tax relief to Nebraska families", url: "https://www.fischer.senate.gov/public/index.cfm/weekly-column?ID=8AAD5348-BCA5-4310-9697-7BE5A0D8CD73" },
  { label: "IRS: One Big Beautiful Bill provisions", url: "https://www.irs.gov/newsroom/one-big-beautiful-bill-provisions" },
  { label: "Nebraska Hospital Association: Nebraska hospitals prepare for policy changes", url: "https://www.nebraskahospitals.org/nebraska-hospitals-prepare-face-policy-changes-potential-cuts-year" },
  { label: "Commonwealth Fund: How Medicaid and SNAP cutbacks trigger job losses", url: "https://www.commonwealthfund.org/publications/issue-briefs/2025/jun/how-medicaid-snap-cutbacks-one-big-beautiful-bill-trigger-job-losses-states" },
];

export default function BigBeautifulBill() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Federal Policy</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">The One Big Beautiful Bill: What It Actually Does to Nebraska</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            Signed into law July 4, 2025. Marketed as tax relief for working families.
            Nebraska was the first state in the nation to implement its Medicaid cuts.
            Here's what the nonpartisan Congressional Budget Office found about who actually benefits.
          </p>
        </div>

        {/* The core contradiction */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">What Gov. Pillen said vs. what the CBO found</p>
          <p className="text-white font-semibold text-lg leading-snug mb-4">
            Pillen praised the bill as delivering tax relief for Nebraska families and moved Nebraska to the front of the line on implementation. The nonpartisan Congressional Budget Office told a different story.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Bottom 10% of earners</p>
              <div className="text-2xl font-black text-[#c8102e]">-$1,200/yr</div>
              <p className="text-white/60 text-xs mt-1 leading-relaxed">Lose household resources. Tax cuts deliver little. Medicaid and SNAP cuts take more.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Top 10% of earners</p>
              <div className="text-2xl font-black text-emerald-400">+$13,600/yr</div>
              <p className="text-white/60 text-xs mt-1 leading-relaxed">Gain household resources. Extended tax cuts, business depreciation, and income tax reductions flow upward.</p>
            </div>
          </div>
          <p className="text-white/40 text-xs mt-3">
            Source: <a href="https://www.cbo.gov/publication/61367" target="_blank" rel="noreferrer" className="hover:text-white/70 underline">CBO Distributional Effects of Public Law 119-21, August 2025 ↗</a>
          </p>
        </div>

        {/* What's marketed as working family relief */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-1">The "working families" provisions</h2>
          <p className="text-sm text-gray-500 mb-4">What proponents highlight. What independent analysis found.</p>
          <div className="space-y-4">
            {[
              {
                title: "No Tax on Tips",
                marketed: "Deduction of up to $25,000 on tip income for workers in tipped occupations.",
                reality: "Primarily benefits workers who already have enough total income to owe federal tax. A tipped worker earning $25,000 total likely owes little federal income tax regardless, meaning the deduction is worth little or nothing to the lowest-wage service workers it's marketed toward.",
              },
              {
                title: "No Tax on Overtime",
                marketed: "Deduction of up to $12,500 on overtime premium pay (the 0.5x portion only, not base wage). Phases out above $150,000 income.",
                reality: "Does not apply to the self-employed or gig workers. Only covers FLSA-defined overtime. Workers without stable full-time employment, who most need overtime income, often aren't covered.",
              },
              {
                title: "Child Tax Credit: $2,000 → $2,200",
                marketed: "Increased per-child credit with permanent inflation indexing starting 2026.",
                reality: "The phaseout thresholds are $200,000 for single filers and $400,000 for married filers — meaning upper-income households fully qualify. The lowest-income families with no federal tax liability receive little or no benefit.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-gray-200 pl-4">
                <p className="text-sm font-bold text-gray-900 mb-1">{item.title}</p>
                <p className="text-xs text-gray-500 mb-1"><span className="font-semibold">Marketed as:</span> {item.marketed}</p>
                <p className="text-xs text-gray-600 leading-relaxed"><span className="font-semibold text-amber-600">Reality:</span> {item.reality}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-gray-50 rounded-xl p-3">
            <p className="text-xs text-gray-500 leading-relaxed">
              Sen. Fischer's office claims the bill saves the average Nebraska household $2,400 per year.
              The CBO's post-enactment analysis found the lowest-earning Nebraskans — those most likely
              to work tipped and overtime jobs — lose more from benefit cuts than they gain from tax provisions.
              <a href="https://www.fischer.senate.gov/public/index.cfm/weekly-column?ID=8AAD5348-BCA5-4310-9697-7BE5A0D8CD73" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline ml-1">Fischer column ↗</a>
              <a href="https://www.cbo.gov/publication/61367" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline ml-2">CBO report ↗</a>
            </p>
          </div>
        </div>

        {/* What pays for it */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-3">What pays for it</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-xs font-bold text-[#c8102e] uppercase tracking-widest mb-1">Medicaid cuts</p>
              <div className="text-2xl font-black text-[#c8102e]">$911B</div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">Over 10 years. Work requirements, more frequent eligibility checks, reduced federal matching rates.</p>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-xs font-bold text-[#c8102e] uppercase tracking-widest mb-1">SNAP cuts</p>
              <div className="text-2xl font-black text-[#c8102e]">$187B</div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">Over 10 years. Expanded work requirements, tighter eligibility, immigrant restrictions. 2.4M people lose SNAP nationally in an average month.</p>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">The math doesn't balance</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              Even with nearly $1.1 trillion in cuts to safety net programs, the tax cuts are so large
              that the CBO scores the bill as adding <strong>$3.4 trillion to the federal deficit</strong> over 10 years.
              The bill cuts services for people at the bottom and borrows to pay for tax cuts at the top.
            </p>
          </div>
        </div>

        {/* Nebraska impact */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What this means for Nebraska</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          {[
            { stat: "55,000–78,000", label: "Nebraskans projected to lose Medicaid", source: "Nebraska Appleseed", url: "https://neappleseed.org/49699" },
            { stat: "155,000", label: "Nebraskans at risk from SNAP cuts, including 64,000 children", source: "Nebraska Appleseed", url: "https://neappleseed.org/49699" },
            { stat: "$4–6.5B", label: "Lost federal Medicaid funding to Nebraska over 10 years", source: "Multiple analyses", url: "https://nebraskaexaminer.com/2025/08/15/one-big-beautiful-bill-is-a-big-problem-for-nebraskas-health-care-system/" },
            { stat: "7,000", label: "Nebraska refugees completely cut off from SNAP under new rules", source: "Food Bank for the Heartland", url: "https://foodbankheartland.org/what-changes-to-snap-mean-for-nebraska/" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="text-2xl font-black text-[#c8102e] mb-1">{item.stat}</div>
              <p className="text-sm text-gray-700 leading-snug mb-2">{item.label}</p>
              <a href={item.url} target="_blank" rel="noreferrer" className="text-xs text-gray-400 hover:text-[#c8102e] transition-colors">
                {item.source} ↗
              </a>
            </div>
          ))}
        </div>

        {/* Nebraska first */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">Nebraska was first</p>
          <p className="text-white font-semibold text-base leading-snug mb-3">
            On May 1, 2026, seven months ahead of the federal deadline, Nebraska became
            the first state in the nation to implement Medicaid work requirements under the bill.
            Gov. Pillen co-announced the milestone with CMS Administrator Dr. Mehmet Oz.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            To keep Medicaid coverage, expansion enrollees aged 18-64 must now document 80 hours
            of work, education, or community service per month and report it to the state.
            Those who can't document it, or who miss the paperwork, lose coverage.
            The Nebraska Hospital Association projected approximately 23,000 Nebraskans
            would lose coverage in 2026 alone.
          </p>
          <a href="https://www.nbcnews.com/health/health-news/nebraska-rolls-medicaid-work-requirements-putting-thousands-risk-losin-rcna342900"
            target="_blank" rel="noreferrer"
            className="inline-block mt-3 text-xs font-medium text-white/40 hover:text-white transition-colors">
            NBC News: Nebraska rolls out Medicaid work requirements ↗
          </a>
        </div>

        {/* The pattern */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-3">The same pattern, at two levels of government</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            The One Big Beautiful Bill is not an isolated event. It follows the same structure
            as Nebraska's own LB 754 — the state income tax cut Pillen calls "the largest in
            state history." Both are marketed as relief for working families. Both primarily
            deliver benefits to higher earners while cutting services used by lower-income Nebraskans.
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">LB 754 — Nebraska's state income tax cut</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The bottom 20% of Nebraska earners save an average of $20/year under the full package.
                An estimated 83% of corporate income tax cuts go to out-of-state corporations and shareholders.
                To close the resulting $646 million deficit, Nebraska cut child care subsidies for working families and reduced DHHS services.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">One Big Beautiful Bill — federal</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bottom earners lose $1,200/year. Top earners gain $13,600/year. To partially fund
                the tax cuts: $911 billion from Medicaid, $187 billion from SNAP.
                Adds $3.4 trillion to the deficit. Costs passed to future taxpayers.
              </p>
            </div>
          </div>
        </div>

        {/* Connect to workers pages */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-8">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Related coverage on this site</p>
          <div className="space-y-3">
            <Link href="/living-wage" className="flex items-start gap-3 group">
              <span className="text-[#c8102e] shrink-0 mt-0.5">↗</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#c8102e] transition-colors">What a Living Wage Actually Costs in Sarpy County</p>
                <p className="text-xs text-gray-400">The $50K vs. $100K budget breakdown, and which employers are paying workers enough to live on.</p>
              </div>
            </Link>
            <Link href="/pay-gap" className="flex items-start gap-3 group">
              <span className="text-[#c8102e] shrink-0 mt-0.5">↗</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#c8102e] transition-colors">Pay vs. Power</p>
                <p className="text-xs text-gray-400">CEO pay ratios at Union Pacific, Werner, and Green Plains — and how much they donate to Nebraska politics.</p>
              </div>
            </Link>
            <Link href="/two-tax-systems" className="flex items-start gap-3 group">
              <span className="text-[#c8102e] shrink-0 mt-0.5">↗</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#c8102e] transition-colors">There Are Two Tax Systems</p>
                <p className="text-xs text-gray-400">How the wealthy use Buy, Borrow, Die to pay 3.4% while median households pay 14%, and how this bill widens that gap.</p>
              </div>
            </Link>
            <Link href="/session" className="flex items-start gap-3 group">
              <span className="text-[#c8102e] shrink-0 mt-0.5">↗</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#c8102e] transition-colors">2025 Nebraska Session Recap</p>
                <p className="text-xs text-gray-400">How the state legislature handled voter mandates, corporate tax incentives, and sick leave. The state-level version of the same story.</p>
              </div>
            </Link>
          </div>
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
