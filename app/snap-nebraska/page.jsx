import Link from "next/link";

export const metadata = {
  title: "Nebraska Banned Soda From SNAP. A Court Undid It. Nobody Noticed What Else Changed. — Nebraska Watchdog",
  description:
    "The soda ban was the loudest food-stamp fight in Nebraska history, and a federal court vacated it in June. Meanwhile the work-requirement age went from 55 to 64, Nebraska started early, enrollment fell 10% in two months, and a tenth of a percentage point stands between the state and a $15 million bill.",
};

const SOURCES = [
  { label: "USDA: Secretary Rollins approves first-ever state waiver restricting soda and energy drinks from SNAP, Nebraska (May 19, 2025)", url: "https://www.usda.gov/about-usda/news/press-releases/2025/05/19/secretary-rollins-approves-first-ever-state-waiver-restrict-soda-and-energy-drinks-food-stamps" },
  { label: "USDA Food and Nutrition Administration: Nebraska SNAP food restriction waiver — status, candy amendment, and vacatur", url: "https://www.fna.usda.gov/snap/waivers/foodrestriction/nebraska" },
  { label: "Nebraska DHHS: SNAP Healthy Choices Waiver", url: "https://dhhs.ne.gov/Pages/Healthy-Choices-Waiver.aspx" },
  { label: "USDA: additional state waivers signed for Arkansas, Idaho, Utah, Indiana, Iowa and Nebraska (June 10, 2025)", url: "https://www.usda.gov/about-usda/news/press-releases/2025/06/10/secretary-rollins-signs-state-waivers-make-america-healthy-again-removing-unhealthy-foods-snap" },
  { label: "Overview of SNAP food restriction waivers and the June 2026 court ruling", url: "https://en.wikipedia.org/wiki/SNAP_food_restriction_waivers" },
  { label: "Nebraska Examiner: federal judge rules Nebraska cannot restrict SNAP purchases of soda and energy drinks (June 23, 2026)", url: "https://nebraskaexaminer.com/2026/06/23/federal-judge-rules-nebraska-cant-restrict-snap-purchases-of-soda-and-energy-drinks/" },
  { label: "1011 Now: Nebraska moving to lift SNAP restrictions after the court ruling (July 2, 2026)", url: "https://www.1011now.com/2026/07/02/nebraska-moving-lift-snap-restrictions-soda-energy-drinks-after-court-ruling/" },
  { label: "KGFW: Nebraska DHHS working with SNAP retailers to remove the restrictions (July 7, 2026)", url: "https://kgfw.com/2026/07/07/nebraska-dhhs-working-with-snap-retailers-to-remove-restrictions-on-soda-energy-drinks-after-court-ruling/" },
  { label: "WOWT: SNAP restrictions on soda and energy drinks overturned following the ruling", url: "https://www.wowt.com/2026/06/24/snap-restrictions-soda-energy-drinks-overturned-following-judges-ruling/" },
  { label: "Nebraska Appleseed: feds confirm Nebraska will not owe the SNAP cost share next year", url: "https://neappleseed.org/51213" },
  { label: "Platte Institute: SNAP in Nebraska — current rules, economic impact, and what's next", url: "https://platteinstitute.org/snap-in-nebraska-current-rules-economic-impact-and-whats-next/" },
  { label: "KLKN: Nebraska DHHS commended for a payment error rate below the federal threshold", url: "https://www.klkntv.com/nebraska-dhhs-commended-for-its-low-payment-error-percentage-regarding-snap-benefits/" },
  { label: "USDA FNS: SNAP payment error rate fact sheet", url: "https://www.fna.usda.gov/snap/qc/payment-error-rate-factsheet" },
  { label: "Pew: as SNAP changes shift food assistance costs, states face new choices", url: "https://www.pew.org/en/research-and-analysis/articles/2026/01/14/as-snap-changes-shift-food-assistance-costs-states-face-new-choices" },
  { label: "AARP: how the One Big Beautiful Bill affects older adults, including the SNAP age change", url: "https://www.aarp.org/government-elections/budget-bill-older-americans.html" },
  { label: "ElderLawAnswers: new SNAP work requirements now reach adults up to 64", url: "https://www.elderlawanswers.com/new-snap-work-requirements-will-now-affect-more-older-adults-21428" },
  { label: "CNBC: what Medicaid and SNAP work requirements mean for older workers", url: "https://www.cnbc.com/2026/02/03/medicaid-snap-work-requirements-retirement.html" },
  { label: "Governor Pillen: Nebraska first in the nation to pursue Medicaid work requirements", url: "https://governor.nebraska.gov/gov-pillen-dr-oz-announce-nebraska-first-nation-pursue-medicaid-work-requirements" },
  { label: "Nebraska Public Media: Medicaid work requirements take effect, DHHS and advocates disagree on implementation", url: "https://nebraskapublicmedia.org/en/news/news-articles/as-medicaid-work-requirements-go-into-effect-friday-nebraska-dhhs-and-advocates-disagree-on-how-implementation-will-go/" },
  { label: "Nebraska DHHS: Medicaid work requirements", url: "https://dhhs.ne.gov/Pages/WorkRequirements.aspx" },
  { label: "Nebraska Appleseed: Medicaid expansion work requirements", url: "https://neappleseed.org/medicaidwr" },
  { label: "Nebraska Public Media: the $12,000 salary is warping the Nebraska Legislature", url: "https://nebraskapublicmedia.org/en/news/news-articles/the-cost-of-low-pay-the-12000-salary-is-warping-the-nebraska-legislature/" },
  { label: "Unicameral Update: increases to senator pay and a compensation commission proposed", url: "https://update.legislature.ne.gov/?p=37590" },
  { label: "Ballotpedia: ages of members of the 119th Congress", url: "https://ballotpedia.org/Ages_of_members_of_the_119th_Congress_(2025-2026)" },
  { label: "Ballotpedia: net worth of United States Senators and Representatives", url: "https://ballotpedia.org/Net_worth_of_United_States_Senators_and_Representatives" },
];

function Rule() {
  return <div className="h-px bg-gray-200 my-10" />;
}

export default function SnapNebraska() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <p className="text-sm font-semibold tracking-wide text-[#c8102e] uppercase mb-3">
        Food assistance · Nebraska
      </p>

      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
        Nebraska banned soda from SNAP. A court undid it. Almost nobody noticed what else changed.
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        For eighteen months, the loudest argument about food assistance in this state was about
        what people are allowed to buy. Nebraska went first in the country. It made national news,
        it was enforced at the register for nearly six months, and in June a federal court threw it
        out. The coverage of the ruling was a fraction of the coverage of the rule.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        While that was happening, the rules for <em>who qualifies at all</em> changed underneath it.
        Those rules were not in the waiver, were not argued about on Facebook, and are still in force.
      </p>

      {/* What people are talking about */}
      <div className="border-l-4 border-[#c8102e] pl-4 py-1 mb-4">
        <h2 className="text-2xl font-bold">What people are talking about</h2>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>The soda ban.</strong> On May 19, 2025, USDA Secretary Brooke Rollins signed the
          first waiver of its kind in the country, for Nebraska. Starting January 1, 2026, SNAP
          benefits here could no longer be spent on soda or energy drinks. Candy was added in May
          2026, set to take effect that November. Other states followed.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          It was an easy thing to have an opinion about, and most people did. The argument was about
          personal responsibility and public health, and reasonable Nebraskans landed on both sides
          of it.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          It was not hypothetical. The restriction took effect January 1, 2026 and was enforced at
          the register for nearly six months. Stores posted signs. Cashiers had the conversation.
          Nebraskans on SNAP were told no at the counter, in front of whoever was in line behind them.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Then on June 22, 2026, U.S. District Judge Amy Berman Jackson vacated the
          approval.</strong> She found that USDA had exceeded its authority and failed to follow
          required administrative procedure. The same ruling invalidated the restrictions in Colorado,
          Iowa, Tennessee and West Virginia.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The unwinding has been quieter than the rollout. Nebraska DHHS said in July it was
          &ldquo;working with SNAP retailers&rdquo; to remove the restrictions, and that many
          retailers would <strong>need time to update their systems</strong>. Nobody printed a second
          round of signs.
        </p>
      </div>

      <div className="bg-white rounded-2xl border-2 border-[#c8102e] p-6 mb-8">
        <h3 className="font-bold text-lg mb-3">Is the sign still up at your store?</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          The restriction has been void since June 22. Whether it is still being enforced depends on
          whether an individual retailer has updated its point-of-sale system, and no one is
          publishing a list.
        </p>
        <p className="text-gray-700 leading-relaxed">
          If you have seen a sign still posted, or been declined at a register since June, tell us
          where and when. We will check it and publish what we find.{" "}
          <Link href="/get-involved" className="text-[#c8102e] font-semibold hover:underline">
            Send it here
          </Link>
          .
        </p>
      </div>

      {/* What we should be talking about */}
      <div className="border-l-4 border-[#c8102e] pl-4 py-1 mb-4">
        <h2 className="text-2xl font-bold">What we should be talking about</h2>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        The soda rule was a state waiver. It was never in the One Big Beautiful Bill. The bill did
        something different and far larger, and it did it quietly.
      </p>

      <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
        <p className="text-sm font-semibold tracking-wide text-gray-400 uppercase mb-4">
          What changed in the law
        </p>
        <ul className="space-y-3 text-[15px] leading-relaxed">
          <li>
            <strong>The work-requirement age went from 55 to 64.</strong> Adults up to 64 must now
            work at least 20 hours a week to keep benefits beyond three months in three years.
          </li>
          <li>
            <strong>The caregiver exemption narrowed.</strong> It used to cover a parent whose
            youngest child was under 18. Now the child has to be under 14.
          </li>
          <li>
            <strong>The Congressional Budget Office estimates about 800,000 older adults</strong>{" "}
            will lose SNAP in a typical month because of the age change alone.
          </li>
          <li>
            <strong>States start paying a share of benefits in fiscal 2028</strong>, scaled to each
            state&apos;s payment error rate: 5% of benefits at a 6% error rate, 10% at 8%, 15% at 10%.
            Below 6%, the state pays nothing.
          </li>
        </ul>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        None of that is about soda. It is about whether a 61-year-old who has been laid off, or a
        parent of a 15-year-old, can get groceries.
      </p>

      <Rule />

      {/* Nebraska numbers */}
      <div className="border-l-4 border-[#c8102e] pl-4 py-1 mb-4">
        <h2 className="text-2xl font-bold">What it looks like in Nebraska</h2>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Nebraska did not wait for the federal start date on the related Medicaid rules, and it did
        not wait on SNAP either. The state implemented the expanded SNAP work requirements in May
        2026. The effect was immediate and it is measurable.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <p className="text-3xl font-bold mb-1">~130,000</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Nebraskans receiving SNAP, down roughly 13%
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <p className="text-3xl font-bold mb-1">10%</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Drop in enrollment from May to July 2026, after the new rules took effect
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <p className="text-3xl font-bold mb-1">5.9%</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Nebraska&apos;s SNAP payment error rate. The federal penalty starts at 6%
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h3 className="font-bold text-lg mb-3">The tenth of a point</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nebraska&apos;s payment error rate for federal fiscal year 2025 was <strong>5.9%</strong>,
          one of only ten states under the 6% line. Because of that, federal officials have confirmed
          the state will not owe the cost share next year, which Nebraska Appleseed has put at
          roughly <strong>$15 million a year</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The margin is one tenth of one percentage point.
        </p>
        <p className="text-gray-700 leading-relaxed">
          And Nebraska has just added a large amount of new paperwork to the same system: more
          eligibility checks, more documentation, more chances for a caseworker or an applicant to
          get something wrong. Whether that pushes the error rate over the line is a real question,
          and it is worth asking now rather than in 2028.
        </p>
      </div>

      <Rule />

      {/* Tie to the Unicameral */}
      <div className="border-l-4 border-[#c8102e] pl-4 py-1 mb-4">
        <h2 className="text-2xl font-bold">Who would have to find $15 million</h2>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        If the error rate crosses 6%, the bill does not go to Congress. It goes to the Nebraska
        Legislature, which would have to cover it out of the state budget.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        That is worth sitting with, because of who the Legislature is. Nebraska senators are paid{" "}
        <strong>$12,000 a year</strong>, a figure set by constitutional amendment in 1988 and
        unchanged since. They meet 60 days in even years. The practical result, documented repeatedly,
        is that most senators are retired, semi-retired, or in a position to leave a job for two
        months; about half report owning property besides their home. A proposal to raise the salary
        to $30,000 needs voter approval. Nebraskans last rejected a raise, to $22,500, in 2012.
      </p>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-semibold text-gray-700 px-4 py-3">&nbsp;</th>
              <th className="text-left font-semibold text-gray-700 px-4 py-3">Nebraska Legislature</th>
              <th className="text-left font-semibold text-gray-700 px-4 py-3">U.S. Congress</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 font-semibold">Pay</td>
              <td className="px-4 py-3">$12,000, unchanged since 1988</td>
              <td className="px-4 py-3">$174,000</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold">Typical member</td>
              <td className="px-4 py-3">Retired or semi-retired; about half own property beyond their home</td>
              <td className="px-4 py-3">Median net worth about $1.6 million, roughly ten times a typical household</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold">Age</td>
              <td className="px-4 py-3">Average 57</td>
              <td className="px-4 py-3">Average 61.5; 24 members are 80 or older</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Two bodies, opposite pay, same outcome: in both, serving requires that you already be able to
        afford to. And one of them just voted to tell Americans up to the age of 64 to find twenty
        hours of work a week or lose their groceries. The median member of that body is 61.
      </p>

      <Rule />

      {/* What to watch */}
      <div className="border-l-4 border-[#c8102e] pl-4 py-1 mb-4">
        <h2 className="text-2xl font-bold">What to watch</h2>
      </div>

      <ul className="space-y-3 text-gray-700 leading-relaxed mb-8">
        <li>
          <strong>Nebraska&apos;s next payment error rate.</strong> It is the difference between $0
          and roughly $15 million a year, and it will be reported before the cost share begins in
          fiscal 2028.
        </li>
        <li>
          <strong>Whether the enrollment drop levels off.</strong> A 10% fall in two months tells you
          people left the program. It does not tell you whether they stopped needing it.
        </li>
        <li>
          <strong>Whether the soda waiver comes back.</strong> The state may appeal or refile. If it
          does, notice which of these two stories gets the coverage.
        </li>
        <li>
          <strong>LR7CA.</strong> Raising senator pay to $30,000 requires a vote of the people. Who
          can afford to serve is upstream of every decision on this page.
        </li>
      </ul>

      <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-8 flex items-start gap-3">
        <p className="text-sm text-gray-600 leading-relaxed">
          <strong>A note on what we can and cannot say.</strong> The effective dates, the enrollment
          figures and the error rate are matters of public record and are linked below. Whether the
          timing of the federal cuts was chosen around an election is not something we can document,
          so we have not claimed it. What we can say is that the tax provisions were made retroactive
          to 2025 and the spending cuts begin in 2027, and that Nebraska chose to start early.
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Related:{" "}
        <Link href="/big-beautiful-bill" className="text-[#c8102e] font-semibold hover:underline">
          One Big Beautiful Bill — what it really means for Nebraska
        </Link>
        .
      </p>

      {/* Sources */}
      <div className="border-l-4 border-[#c8102e] pl-4 py-1 mb-4">
        <h2 className="text-2xl font-bold">Sources</h2>
      </div>
      <ul className="space-y-2 mb-8">
        {SOURCES.map((s) => (
          <li key={s.url} className="text-sm">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8102e] hover:underline"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
