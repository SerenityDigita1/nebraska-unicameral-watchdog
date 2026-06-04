import Link from "next/link";

export const metadata = { title: "AI Data Centers & Nebraska's Power Grid · NE Watchdog" };

const SOURCES = [
  { label: "Nebraska Examiner: Pillen celebrates LB 1261", url: "https://nebraskaexaminer.com/briefs/pillen-celebrates-law-boosting-private-energy-help-in-public-power-state-pushes-for-more-ai-growth/" },
  { label: "Flatwater Free Press: Google proposes Nebraska data center requiring more power than all of Lincoln", url: "https://flatwaterfreepress.org/google-proposes-nebraska-data-center-requiring-more-power-than-all-of-lincoln/" },
  { label: "Flatwater Free Press: Nebraska lawmaker optioned land for potential data center project", url: "https://flatwaterfreepress.org/nebraska-lawmaker-among-those-who-optioned-land-for-potential-data-center-project/" },
  { label: "Flatwater Free Press: Otoe County bans new data centers for up to a year", url: "https://flatwaterfreepress.org/a-nebraska-county-just-banned-new-data-centers-for-up-to-a-year-more-could-follow/" },
  { label: "Nebraska Public Media: Water and energy use growing as data centers expand", url: "https://nebraskapublicmedia.org/en/news/news-articles/water-and-energy-use-is-growing-as-data-centers-are-built-across-the-midwest-and-great-plains/" },
  { label: "Nebraska Public Media: Legislature advances bill paving way for data centers", url: "https://nebraskapublicmedia.org/en/news/news-articles/legislature-advances-bill-paving-the-way-for-data-centers-in-nebraska/" },
  { label: "Nebraska Public Media: Nebraskans cope with rising electricity demand and prices", url: "https://nebraskapublicmedia.org/en/news/news-articles/nebraskans-cope-with-rising-demand-prices-for-electricity/" },
  { label: "Grist: Nebraskans take a hard look at data centers", url: "https://grist.org/energy/nebraskans-are-taking-a-hard-look-at-data-centers/" },
  { label: "Investigate Midwest: Behind the scenes of Google's carbon capture test", url: "https://investigatemidwest.org/2026/04/01/a-look-behind-the-scenes-of-what-could-be-googles-biggest-test-of-carbon-capture/" },
  { label: "Nebraska Farmers Union: LB 1261 is short on transparency", url: "https://www.morningagclips.com/lb1261-is-short-on-transparency-and-long-on-unanswered-questions/" },
  { label: "OPPD 2026 rate announcement", url: "https://www.oppd.com/news-resources/news-releases/2025/december/oppd-board-approves-2026-budget-with-63-average-rate-adjustment-and-updated-resolution-on-north-omaha-station-operations/" },
  { label: "LB 1261 full text (Nebraska Legislature)", url: "https://nebraskalegislature.gov/FloorDocs/109/PDF/Slip/LB1261.pdf" },
];

export default function DataCenters() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Energy & Infrastructure</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">AI Data Centers Are Reshaping Nebraska's Power Grid</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            A new state law makes it easier for private companies to build power plants for massive
            industrial customers. The push is driven by AI data centers. The questions being asked
            across Nebraska: who benefits, who pays, and what happens to the water?
          </p>
        </div>

        {/* The contradiction */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">The contradiction at the center of this</p>
          <p className="text-white font-semibold text-lg leading-snug mb-3">
            Gov. Pillen has called for a pause on building new data centers in Nebraska.
            On June 2, 2026, he ceremonially signed a law making them significantly easier to build.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Pillen's stated reason: Nebraska already ranks second in the nation for share of electricity
            consumed by data centers (11.5%), and the growth is straining the grid. He said an associate
            of Cargill told him the company can't expand in Nebraska at the pace it would like, because
            data centers are consuming too much power.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            His argument for the law: AI is a national security issue. "We have to win the war on
            artificial intelligence," Pillen said. "It's a race." He drew a distinction between data
            centers (bad, too many) and AI infrastructure (necessary, strategic). Whether that
            distinction holds up in practice remains to be seen.
          </p>
        </div>

        {/* What LB 1261 does */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-1">What LB 1261 actually does</h2>
          <p className="text-xs text-gray-400 mb-4">Signed April 14, 2026 · Introduced by Sen. Barry DeKay at Gov. Pillen's request</p>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Nebraska has been an all-public-power state since the 1930s, one of only two in the nation.
              Every power plant has been owned and governed by publicly controlled utilities with elected boards.
              LB 1261 creates the first carve-out from that model.
            </p>
            <p>
              The law allows private companies to build and own power plants in Nebraska, provided they
              serve a single industrial customer with a new electricity demand exceeding
              <strong className="text-gray-900"> 1,000 megawatts</strong> at a single site. For reference,
              Lincoln uses about 800 megawatts at summer peak. This threshold effectively describes one
              type of customer: a hyperscale AI data center.
            </p>
            <p>
              The law also removes the risk that a public power district could seize a privately built
              plant using eminent domain. That protection is what made private investment legally risky
              before. Now it isn't.
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">The stated rationale</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sen. Mike Moser of Columbus, who prioritized the bill, said the logic is that if a
                private company builds and owns the plant, and the market shifts or the data center
                closes, the cost falls on the private company, not on Nebraska ratepayers. Tenaska's
                Delette Marengo put the price tag bluntly: new power plants carry a
                <strong className="text-gray-900"> multibillion dollar price tag</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Sarpy County connection */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-3">What this means for Sarpy County and Omaha</h2>
          <div className="grid sm:grid-cols-3 gap-3 mb-4">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-xl font-black text-[#c8102e]">1% → 21%</div>
              <div className="text-xs text-gray-500 mt-1">OPPD's data center share of electricity sales, 2018 to 2024</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-xl font-black text-[#c8102e]">41%</div>
              <div className="text-xs text-gray-500 mt-1">OPPD's projected data center share by 2035</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-xl font-black text-[#c8102e]">$5.8M</div>
              <div className="text-xs text-gray-500 mt-1">Lost per year in Sarpy County property taxes from existing data center incentives</div>
            </div>
          </div>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              OPPD serves the Omaha metro including Sarpy County. In six years, data centers went from
              1% of OPPD's electricity sales to 21%. By 2035, OPPD's own projections show data centers
              consuming 41% of everything OPPD generates.
            </p>
            <p>
              Meanwhile, OPPD approved a 6.3% average rate increase for 2026. Residential customers
              saw 8.4% in 2025 and 6% in 2026. Utility officials say data center growth is not the
              direct cause of rate increases, attributing them instead to infrastructure upgrades. But
              the timing and scale of the grid investment being driven by data center demand makes
              that a complicated argument.
            </p>
            <p>
              On the tax side, Sarpy County commissioners testified that existing state tax incentives
              for data center equipment and electricity are already costing the county
              <strong className="text-gray-900"> $5.8 million per year</strong> in lost property tax revenue.
              That's money that would otherwise fund schools, roads, and county services.
            </p>
          </div>
        </div>

        {/* The proposal */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-1">The proposal everyone is watching</h2>
          <p className="text-xs text-gray-400 mb-3">Confirmed details only — key parties have not publicly confirmed involvement</p>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              Internal documents obtained by Flatwater Free Press and Grist from a private Nebraska
              public power district meeting in January 2026 described a proposal for what could be
              the largest data center in Nebraska history, located in southeast Nebraska.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 my-3">
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Confirmed</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Tenaska optioned 2,600+ acres in Otoe and Gage Counties</li>
                  <li>• Proposed capacity: 1,000 to 3,000 megawatts</li>
                  <li>• Potential online date: as early as 2029</li>
                  <li>• Tenaska is an Omaha-based private energy company</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-3">
                <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Not confirmed</p>
                <ul className="text-xs text-amber-700 space-y-1">
                  <li>• Google's involvement (did not respond to media)</li>
                  <li>• Tallgrass Energy's role (they denied involvement)</li>
                  <li>• Whether the project will actually be built</li>
                  <li>• Whether carbon capture will be included</li>
                </ul>
              </div>
            </div>
            <p>
              For context on scale: 3,000 megawatts would be more than twice the output of
              Nebraska's largest existing power plant. The proposed facility would consume more
              electricity than Lincoln's entire peak summer demand.
            </p>
          </div>
        </div>

        {/* Conflict of interest */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-5 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">The conflict of interest</p>
          <p className="text-white font-semibold text-base leading-snug mb-3">
            State Sen. Myron Dorn voted on LB 1261 without initially disclosing that he had
            signed a land option agreement with Tenaska — the company positioned to profit from it.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-3">
            Flatwater Free Press reported that Dorn had given Tenaska exclusive rights to purchase
            approximately 80 acres of his land in Gage County. When reporters contacted him on
            March 17, 2026 — the same day floor debate on LB 1261 began — Dorn said:
          </p>
          <p className="text-white/80 text-sm italic leading-relaxed mb-3 border-l-2 border-[#c8102e]/50 pl-4">
            "Hadn't thought of it. Didn't realize the bill was out of committee and up that quick."
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Dorn filed a conflict-of-interest disclosure that day but chose not to abstain from
            the vote, reasoning that his was "only one of 49" votes. The Nebraska Accountability
            and Disclosure Commission's executive director stated Dorn should have filed the
            disclosure ahead of any discussion or vote on the bill.
          </p>
          <a href="https://flatwaterfreepress.org/nebraska-lawmaker-among-those-who-optioned-land-for-potential-data-center-project/"
            target="_blank" rel="noreferrer"
            className="inline-block mt-3 text-xs font-medium text-white/40 hover:text-white transition-colors">
            Flatwater Free Press investigation ↗
          </a>
        </div>

        {/* Community pushback */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-3">Communities pushing back</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-[#c8102e] pl-4">
              <p className="text-sm font-semibold text-gray-900">Otoe County — moratorium</p>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                In May 2026, the Otoe County Board of Commissioners voted to suspend all new data
                center permits for up to one year. This came after Tenaska optioned land in the county.
                Gage County's planning commission held moratorium hearings in June 2026.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 pl-4">
              <p className="text-sm font-semibold text-gray-900">Adams, Nebraska — town hall</p>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Nearly 70 people filled the local community center in late April 2026 to hear about
                the proposed data center and power plant project. Residents raised concerns about
                water, heat, electricity availability, and the fact that nobody had officially
                informed their community about the plans.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 pl-4">
              <p className="text-sm font-semibold text-gray-900">Nebraska Farmers Union</p>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                President John Hansen called the bill "tone deaf" and objected that it was developed
                by the governor's office, a handful of public power executives, and private companies
                without the normal public and transparent process that Nebraska's public power system
                is built on. He also raised the concern that large natural gas plants for data centers
                will compete with agricultural uses of natural gas, potentially raising fertilizer costs.
              </p>
            </div>
          </div>
        </div>

        {/* The real questions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-3">The questions nobody has answered yet</h2>
          <div className="space-y-3">
            {[
              {
                q: "What happens to the Ogallala Aquifer?",
                a: "Large data centers use between 1 and 5 million gallons of water per day for cooling. The Ogallala Aquifer already faces severe depletion. A transparency law passed alongside LB 1261 requires annual disclosure of water usage — but that data doesn't exist yet. Sen. Conrad's amendments requiring disclosure of water sourcing during the debate were rejected.",
              },
              {
                q: "Will this raise your utility bill?",
                a: "OPPD rates have risen roughly 20% since 2021. Utilities say data center growth isn't the direct cause — they attribute increases to infrastructure upgrades. But the infrastructure being upgraded is driven largely by data center demand. At 41% of OPPD's sales by 2035, data centers will shape rate decisions whether or not they're officially named as the cause.",
              },
              {
                q: "Who actually benefits locally?",
                a: "Data centers generate significant construction jobs but very few permanent ones. Google already operates a data center in Papillion and runs a workforce training program with Metropolitan Community College. Whether the jobs and tax revenue justify the cost to local infrastructure and resources is a question Sarpy County commissioners have already started raising.",
              },
              {
                q: "Does carbon capture actually work at this scale?",
                a: "The proposed project reportedly includes carbon capture and storage as part of its environmental case. Yale economist Kenneth Gillingham said plainly: there is nothing in the U.S. this large with CCS. It is unproven technology at the scale being described.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm font-bold text-gray-900 mb-1">{item.q}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Links out */}
        <div className="flex gap-4 flex-wrap mb-8">
          <Link href="/session" className="text-xs font-medium text-[#c8102e] hover:underline">
            See full 2025 session recap ↗
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
