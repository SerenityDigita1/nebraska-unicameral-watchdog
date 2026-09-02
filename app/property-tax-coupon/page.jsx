import Link from "next/link";
import { BillCardList } from "@/components/BillCard";
import { PROPERTY_TAX_BILLS } from "@/data/unicameral-bills";

export const metadata = {
  title: "If You Just Saw the Property-Tax Ad — The Coupon Isn’t a Cut",
  description:
    "The ads in Omaha and Lincoln feeds say property taxes were cut. The Unicameral passed a school-district credit, not a mill-levy cut. Homes already pay a higher average rate than ag land.",
  openGraph: {
    title: "If You Just Saw the Property-Tax Ad — The Coupon Isn’t a Cut",
    description:
      "The ads in Omaha and Lincoln feeds say property taxes were cut. The Unicameral passed a school-district credit, not a mill-levy cut. Homes already pay a higher average rate than ag land.",
    url: "https://unicameralwatchdog.com/property-tax-coupon",
    type: "article",
    images: [{ url: "/property-tax-coupon/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "If You Just Saw the Property-Tax Ad — The Coupon Isn’t a Cut",
    description:
      "The ads in Omaha and Lincoln feeds say property taxes were cut. The Unicameral passed a school-district credit, not a mill-levy cut. Homes already pay a higher average rate than ag land.",
    images: ["/property-tax-coupon/opengraph-image"],
  },
};

const SOURCES = [
  { label: "LB 34 — School District Property Tax Relief Act / Property Tax Growth Limitation Act", url: "https://nebraskalegislature.gov/bills/view_bill.php?DocumentID=58075" },
  { label: "Nebraska Department of Revenue: LB 34 explainer (Sept. 6, 2024)", url: "https://revenue.nebraska.gov/sites/default/files/doc/news-release/ndr/LB_34_News_Release_Final.pdf" },
  { label: "DOR: 2025 Real Property Tax Credit and School District Property Tax Relief Credit", url: "https://revenue.nebraska.gov/sites/default/files/doc/news-release/pad/2025/NewsRelease_2025_Real_Property_Tax_Credit_and_School_Dist_Prop_Tax_Relief_Credit.pdf" },
  { label: "DOR: 2025 valuation and tax pie charts (state and 93 counties)", url: "https://revenue.nebraska.gov/sites/default/files/doc/pad/research/valuation/2026/CurrentYr_VT_PieCharts_State%20%26%2093%20counties%202025.pdf" },
  { label: "Nebraska Examiner: Legislature passes slimmed-down property tax relief package (Aug. 20, 2024)", url: "https://nebraskaexaminer.com/2024/08/20/legislature-passes-slimmed-down-property-tax-relief-package-ends-nebraskas-special-session/" },
  { label: "Nebraska Examiner: Pillen eyes more state budget cuts to offset local property taxes (Apr. 20, 2026)", url: "https://nebraskaexaminer.com/2026/04/20/pillen-eyes-more-state-budget-cuts-to-help-offset-local-property-taxes/" },
  { label: "Nebraska Examiner: Pillen talks priorities, pivot to Nov. 3 faceoff (Jul. 9, 2026)", url: "https://nebraskaexaminer.com/2026/07/09/pillen-talks-priorities-pivot-from-nebraska-primary-election-to-nov-3-faceoff/" },
  { label: "LB 243 — community-college operations to the state (2023)", url: "https://nebraskalegislature.gov/bills/view_bill.php?DocumentID=50310" },
  { label: "LB 814 — agricultural land valuation (indefinitely postponed Apr. 17, 2026)", url: "https://www.nebraskalegislature.gov/bills/view_bill.php?DocumentID=63258" },
  { label: "Ballotpedia: Nebraska Referendum 435 (2024)", url: "https://ballotpedia.org/Nebraska_Referendum_435,_Private_Education_Scholarship_Program_Referendum_(2024)" },
  { label: "Nebraska Examiner: AFP-NE / Battleground Connect sales-tax poll (Jan. 11, 2024)", url: "https://nebraskaexaminer.com/2024/01/11/polling-indicates-many-nebraskans-oppose-pillen-plan-to-offset-property-taxes-with-higher-sales-tax/" },
  { label: "Office of the Governor: signing remarks on the 2024 special-session bills", url: "https://governor.nebraska.gov/press/gov-pillen-touts-passage-bills-signing-ceremony-says-much-more-left-be-done-property-tax" },
];

export default function PropertyTaxCoupon() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">On the trail vs in the chamber</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">
            The Coupon Isn’t a Cut
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            The ads in Omaha and Lincoln feeds leave this out. The state cannot levy a property tax.
            Locals set mill rates. Lincoln printed a credit on the statement. Then the levy went back up.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">If you just saw the ad</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            If a property-tax spot just landed in your Omaha or Lincoln feed — TV or digital, Pillen or Walz — this page is the Unicameral record behind it. Farmer footage is the costume. The audience is whoever pays the bill, including homeowners.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            The state cannot levy a property tax. Locals set mill rates. Lincoln printed a credit on the statement. Homes already pay a higher average rate than ag land. The 2027 plan is a farm buy-down paid with broader sales tax and local levy caps.
          </p>
        </div>

        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">Nov. 3, 2026 · Pillen vs Walz</p>
          <p className="text-white font-semibold text-lg leading-snug mb-3">
            He says he cut property taxes. The Legislature passed a coupon. The levy went back up.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Gov. Jim Pillen is running for re-election against Lynne Walz.
            TV and digital ads say “we reduced property taxes.” That is not
            the 40–50% mill-levy cut he touted in 2024. He has dated the next big push to{" "}
            <span className="text-white font-semibold">2027</span>. The ad oversells a coupon as a cut.
          </p>
          <a
            href="https://nebraskaexaminer.com/2026/07/09/pillen-talks-priorities-pivot-from-nebraska-primary-election-to-nov-3-faceoff/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-white/50 hover:text-white transition-colors"
          >
            Source: Nebraska Examiner — July 9, 2026 ↗
          </a>
        </div>

        <p className="text-xs text-gray-400 mb-4">
          Last session heartbeat · 2026 short session is over. Next: January 2027, 110th long session.
        </p>
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">The record · three bills</h2>
        <BillCardList bills={PROPERTY_TAX_BILLS} className="mb-8" />

        {/* Ads */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What the ads are talking about</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            This is not an income-tax ad. It is not a school-choice ad. It is a property-tax ad that still uses farm footage,
            even when it lands in a metro feed, because in much of rural Nebraska the school is paid by whoever owns the acres. Pillen’s campaign
            language — “we reduced property taxes” — collapses three different machines into one sentence:
            a credit printed on the tax statement, an older credit that already tilts toward ag land, and a
            2027 ask that has not passed.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            The state of Nebraska cannot levy a property tax. Schools, counties, and cities set mill rates.
            What Lincoln can do is send money back — a coupon — or take over a local bill, the way it did
            with community-college operations. Everyday homeowners get the school coupon too. The farmer
            tilt is the older credit, the 75% ag valuation, and the 2027 agenda. It is not a different mill
            rate the governor set.
          </p>
        </div>

        {/* Two machines */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Two machines, not one cut</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-1 w-full bg-amber-400" />
            <div className="p-5">
              <p className="text-xs font-bold tracking-widest text-amber-700 uppercase mb-2">Machine A · Who is already taxed harder</p>
              <h3 className="text-base font-bold text-gray-900 mb-3">Houses pay more than farmland. That is the assessment system.</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Homes are assessed at 100% of actual value. Agricultural land is assessed at 75%. Farmhouses
                and farm sites are taxed as residential. The{" "}
                <a href="https://revenue.nebraska.gov/sites/default/files/doc/pad/research/valuation/2026/CurrentYr_VT_PieCharts_State%20%26%2093%20counties%202025.pdf" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">2025 DOR pie charts</a>{" "}
                show the result: residential property pays about <span className="font-semibold text-gray-900">53.75%</span> of
                the taxes on about <span className="font-semibold text-gray-900">45.93%</span> of the value
                (average rate 1.7244). Ag land pays about <span className="font-semibold text-gray-900">22.30%</span> of
                the taxes on about <span className="font-semibold text-gray-900">31.92%</span> of the value
                (average rate 1.0298).
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                On top of that sits the older Property Tax Credit Act. For 2025, DOR paid{" "}
                <span className="font-semibold text-gray-900">$119.00</span> per $100,000 of taxable value
                for non-ag property and <span className="font-semibold text-gray-900">$142.79</span> per
                $100,000 for ag land — a 120% allocation. That is a farm tilt in the coupon, not a different
                mill rate.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sen. Brandt’s{" "}
                <a href="https://www.nebraskalegislature.gov/bills/view_bill.php?DocumentID=63258" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">LB 814</a>{" "}
                would have dropped ag land valuation from 75% to 50%. It was indefinitely postponed
                April 17, 2026. That ask died in committee, not on a farm-tax mill rate the governor controls.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-1 w-full bg-[#c8102e]" />
            <div className="p-5">
              <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">Machine B · Who pays for the coupon</p>
              <h3 className="text-base font-bold text-gray-900 mb-3">Credits are paid from income and sales tax. Those rates already got cut.</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Because the state cannot levy property tax, every credit on the statement is a state check.
                That money comes from income tax and sales tax. Income rates have already been cut. The
                remaining move — the one Pillen keeps dating to 2027 — is to cut state programs and/or
                broaden the 5.5% sales tax to goods and services that are now exempt, plus hard caps on
                local spending.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Sen. Tanya Storer, a rural Republican and former county commissioner, called the credit
                approach “feeding the demon”: state coupons hide the local levy and take pressure off the
                governments that actually set the rate. That is a structural argument, not a campaign slogan.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Same budget story, different line items: the governor vetoed SNAP eligibility for people
                with certain drug convictions and vetoed bed-bug inspections in Omaha public housing.
                Those were not property-tax bills. They are what gets squeezed when Lincoln spends the
                income-and-sales pot on coupons instead of services.{" "}
                <Link href="/session" className="text-[#c8102e] hover:underline">See the 2025 recap</Link>.
              </p>
            </div>
          </div>
        </div>

        {/* What passed */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What actually passed</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <div className="flex items-start gap-2.5 mb-3">
            <span className="text-xs font-bold text-white bg-emerald-600 px-2.5 py-1 rounded-lg shrink-0 mt-0.5">LB 34</span>
            <div>
              <h3 className="text-base font-bold text-gray-900">School District Property Tax Relief Act</h3>
              <p className="text-xs text-gray-400 mt-0.5">Signed Aug. 20, 2024 · Passed 40–3</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            The 2024 special session did not pass the 40–50% mill-levy cut plus sales-tax expansion.
            It passed a slimmed-down package.{" "}
            <a href="https://nebraskalegislature.gov/bills/view_bill.php?DocumentID=58075" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">LB 34</a>{" "}
            puts about a 30% credit on the <span className="font-semibold text-gray-900">school-district line (non-bond)</span> for
            all real property — houses, ag land, commercial — printed on the tax statement. The state
            reimburses the district. Locals still levy. The Department of Revenue called it equitable:
            30% of school district taxes, not the whole bill. DOR is explicit:{" "}
            <span className="font-semibold text-gray-900">credits are not a levy-rate cut</span>.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Same bill: the Property Tax Growth Limitation Act, a cap on how fast cities and counties
            can grow their property-tax request. Earlier, LB 243 (2023) moved most community-college
            operating levies onto the state. That shift — not a mill-rate cut — produced the first
            statewide property-tax decrease in 26 years in 2024: about{" "}
            <span className="font-semibold text-gray-900">$6 million</span> against a ~$5.3 billion total.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            The biggest new on-bill win was mechanical. Under the old{" "}
            <span className="font-semibold text-gray-900">LB 1107</span> income-tax credit, DOR said
            approximately <span className="font-semibold text-gray-900">45%</span> of Nebraskans never
            claimed it. Front-loading puts the school credit on the statement automatically. People who
            already filed the old credit mostly got timing — the money shows up on the bill instead of
            a later refund — not a second cut.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <a href="https://nebraskaexaminer.com/2024/08/20/legislature-passes-slimmed-down-property-tax-relief-package-ends-nebraskas-special-session/" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
              Nebraska Examiner, Aug. 20, 2024 ↗
            </a>
            <a href="https://revenue.nebraska.gov/sites/default/files/doc/news-release/ndr/LB_34_News_Release_Final.pdf" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#c8102e] hover:underline">
              DOR LB 34 explainer ↗
            </a>
          </div>
        </div>

        {/* Numbers */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What the 2025 numbers did</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-5">
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">2024 levy</p>
            <p className="text-2xl font-bold text-gray-900 tracking-tight mb-1">−$6 million</p>
            <p className="text-xs text-gray-500 leading-relaxed">First statewide drop in 26 years, vs. ~$5.3B total. Mostly the community-college shift.</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-1">2025 levy</p>
            <p className="text-2xl font-bold text-gray-900 tracking-tight mb-1">$5,587,369,523</p>
            <p className="text-xs text-gray-500 leading-relaxed">Up about $285 million. Credits did not hold the levy flat.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-5">
          <div className="px-5 py-3.5 border-b border-gray-100">
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Where 2025 levies go · DOR</p>
          </div>
          {[
            ["Schools (incl. bonds)", "59.45%", "$3,321,609,205"],
            ["Counties", "17.46%", "$975,404,479"],
            ["Cities / villages", "11.69%", "$653,061,843"],
          ].map((row, i) => (
            <div key={row[0]} className={`grid grid-cols-3 px-5 py-3.5 gap-2 ${i < 2 ? "border-b border-gray-50" : ""}`}>
              <p className="text-sm font-semibold text-gray-900">{row[0]}</p>
              <p className="text-sm text-gray-600">{row[1]}</p>
              <p className="text-sm font-bold text-gray-900 text-right">{row[2]}</p>
            </div>
          ))}
          <p className="px-5 py-3 text-xs text-gray-400 border-t border-gray-50">
            Rest: NRDs, fire, misc, leftover community college, ESUs, townships.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            2025 credits, from DOR EO 25-13: School District Property Tax Relief Credit{" "}
            <span className="font-semibold text-gray-900">$797,295,209</span>. Property Tax Credit Act{" "}
            <span className="font-semibold text-gray-900">$467,132,271</span>. Homeowners get the school
            coupon too — it is not a farm-only program. It is also not a mill-levy cut. The levy still
            went up.
          </p>
          <a
            href="https://nebraskaexaminer.com/2026/04/20/pillen-eyes-more-state-budget-cuts-to-help-offset-local-property-taxes/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-[#c8102e] hover:underline"
          >
            Nebraska Examiner, Apr. 20, 2026 ↗
          </a>
        </div>

        {/* Coupon ≠ school choice */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">The coupon still funds that public school</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            A school-district credit is not school choice. The money still goes to that public district.
            The state reimburses the line. The district still levies. What the coupon can hide is the
            real local rate: school groups have said as much — the statement looks smaller even when
            the levy did not get cut.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            The quiet squeeze is the same budget. Credits compete with state aid. Levy and growth caps
            limit what locals can ask. TEEOSA — the school funding formula — has already been rewritten
            and line-item vetoed. A coupon on the school line and a squeeze on the aid line can land
            in the same year. They are not opposites.
          </p>
        </div>

        {/* Separate fight */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">A separate fight: scholarships, not the levy</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            <a href="https://ballotpedia.org/Nebraska_Referendum_435,_Private_Education_Scholarship_Program_Referendum_(2024)" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Referendum 435</a>{" "}
            (November 2024) repealed the private-school scholarship law{" "}
            <span className="font-semibold text-gray-900">57.03%–42.97%</span> statewide
            (508,140 to repeal vs. 382,921), including Douglas County at about 56%, and in 45 of 49
            legislative districts. That is a voucher fight. It is not this levy story.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Pillen’s “right fit” language and a federal $1,700 education credit are 2027 arguments.
            Do not mash them into the property-tax coupon.
          </p>
        </div>

        {/* 2027 */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">The 2027 ask</p>
          <p className="text-white text-sm leading-relaxed mb-3">
            If re-elected, Pillen has said the next fight is 2027: more state spending cuts, maybe
            broadening the 5.5% sales tax to currently exempt goods and services, hard local spending
            caps, and possibly moving more K-12 operating costs onto the state the way community
            colleges already moved. He has also said the messaging needs to be simpler.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Voters have already seen the sales-tax-for-property-tax framing. A January 2024 poll paid
            for by <span className="text-white font-semibold">Americans for Prosperity–Nebraska</span> and
            conducted by Battleground Connect found about 70% of likely voters opposed increasing the
            sales tax to offset property taxes (70%–19%). Label the pollster: it is AFP-NE’s poll, not
            a state survey. Pillen’s office called it leading. The 2026 short session still ditched
            most of the remaining tax-base ideas.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://nebraskaexaminer.com/2024/01/11/polling-indicates-many-nebraskans-oppose-pillen-plan-to-offset-property-taxes-with-higher-sales-tax/" target="_blank" rel="noreferrer" className="text-xs font-medium text-white/50 hover:text-white transition-colors">
              Examiner, Jan. 11, 2024 ↗
            </a>
            <a href="https://nebraskaexaminer.com/2026/07/09/pillen-talks-priorities-pivot-from-nebraska-primary-election-to-nov-3-faceoff/" target="_blank" rel="noreferrer" className="text-xs font-medium text-white/50 hover:text-white transition-colors">
              Examiner, Jul. 9, 2026 ↗
            </a>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap mb-8">
          <Link href="/" className="text-xs font-medium text-[#c8102e] hover:underline">
            ← Back to homepage
          </Link>
          <Link href="/session" className="text-xs font-medium text-gray-500 hover:text-[#c8102e] transition-colors">
            2025 session recap →
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
