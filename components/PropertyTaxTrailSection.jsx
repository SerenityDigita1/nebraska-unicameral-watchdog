import Link from "next/link";

export const PROPERTY_TAX_SOURCES = [
  { label: "LB 34", url: "https://nebraskalegislature.gov/bills/view_bill.php?DocumentID=58075" },
  { label: "DOR LB 34 explainer", url: "https://revenue.nebraska.gov/sites/default/files/doc/news-release/ndr/LB_34_News_Release_Final.pdf" },
  { label: "DOR 2025 credits", url: "https://revenue.nebraska.gov/sites/default/files/doc/news-release/pad/2025/NewsRelease_2025_Real_Property_Tax_Credit_and_School_Dist_Prop_Tax_Relief_Credit.pdf" },
  { label: "DOR 2025 levy pie charts", url: "https://revenue.nebraska.gov/sites/default/files/doc/pad/research/valuation/2026/CurrentYr_VT_PieCharts_State%20%26%2093%20counties%202025.pdf" },
  { label: "Nebraska Examiner, Aug. 20, 2024", url: "https://nebraskaexaminer.com/2024/08/20/legislature-passes-slimmed-down-property-tax-relief-package-ends-nebraskas-special-session/" },
  { label: "Nebraska Examiner, Apr. 20, 2026", url: "https://nebraskaexaminer.com/2026/04/20/pillen-eyes-more-state-budget-cuts-to-help-offset-local-property-taxes/" },
  { label: "Nebraska Examiner, Jul. 9, 2026", url: "https://nebraskaexaminer.com/2026/07/09/pillen-talks-priorities-pivot-from-nebraska-primary-election-to-nov-3-faceoff/" },
  { label: "LB 814", url: "https://www.nebraskalegislature.gov/bills/view_bill.php?DocumentID=63258" },
  { label: "Referendum 435 · Ballotpedia", url: "https://ballotpedia.org/Nebraska_Referendum_435,_Private_Education_Scholarship_Program_Referendum_(2024)" },
];

export default function PropertyTaxTrailSection({ showExplainer = false, className = "" }) {
  return (
    <section id="trail-vs-chamber" className={className}>
      <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">On the Trail vs in the Chamber</h2>

      <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-6">
        <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">Nov. 3, 2026 · Pillen vs Walz · Farmer-coded ads</p>
        <p className="text-white font-semibold text-base leading-snug mb-2">
          He says he cut property taxes. The Legislature passed a coupon. The levy went back up.
        </p>
        <p className="text-white/60 text-sm leading-relaxed">
          Gov. Jim Pillen, a Columbus hog producer, is running for re-election against Lynne Walz. Late-August TV and digital ads aimed at farmers say “we reduced property taxes.” That is not the 40–50% mill-levy cut he touted in 2024. He has dated the next big push to 2027. The ad oversells a coupon as a cut.
        </p>
      </div>

      {showExplainer && (
        <Link
          href="/property-tax-coupon"
          className="block bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6 hover:shadow-md transition-shadow"
        >
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase mb-2">Full explainer</p>
          <h3 className="text-base font-bold text-gray-900 mb-1">
            The coupon isn’t a cut: what Pillen’s farmer tax ads leave out
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            Who already pays more, what LB 34 actually printed on the statement, and how he’d pay for the 2027 ask — in plain English.
          </p>
          <span className="text-xs font-bold text-[#c8102e]">Read the full explainer →</span>
        </Link>
      )}

      <div className="space-y-4 mb-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="h-1 w-full bg-amber-400" />
          <div className="p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-start gap-2.5">
                <span className="text-xs font-bold text-white bg-[#c8102e] px-2.5 py-1 rounded-lg shrink-0 mt-0.5">Campaign</span>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">We reduced property taxes</h3>
                  <p className="text-xs text-gray-400 mt-0.5">What the ads say vs who actually sets the mill rate</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                Coupon, not a cut
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-3 leading-relaxed border-b border-gray-100 pb-3">
              <strong className="text-gray-700">What the ad says:</strong> Farmer-coded campaign language claims the administration reduced property taxes. The state cannot levy a property tax. Schools, counties, and cities set mill rates.
            </p>
            <div className="bg-red-50 rounded-xl p-3.5 border-l-2 border-red-300">
              <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-1.5">What actually happened</p>
              <p className="text-sm text-gray-800 leading-relaxed">
                Lincoln did not cut the mill levy. It printed a credit on the tax statement — a coupon the state reimburses. Everyday homeowners get the school coupon too. The farmer tilt is the older credit, the 75% ag valuation, and the 2027 ask — not a different mill rate the governor set.
              </p>
            </div>
            <p className="text-xs text-gray-400 mt-2.5">
              Source:{" "}
              <a href="https://nebraskaexaminer.com/2026/07/09/pillen-talks-priorities-pivot-from-nebraska-primary-election-to-nov-3-faceoff/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Nebraska Examiner</a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="h-1 w-full bg-emerald-500" />
          <div className="p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-start gap-2.5">
                <span className="text-xs font-bold text-white bg-emerald-600 px-2.5 py-1 rounded-lg shrink-0 mt-0.5">LB 34</span>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">School District Property Tax Relief Act</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Signed Aug. 20, 2024 · Passed 40–3</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                What passed
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              About a 30% credit on the school-district line (non-bond) for all real property, printed on the statement. The Department of Revenue called it equitable — 30% of school district taxes, not the whole bill. Same package: the Property Tax Growth Limitation Act for cities and counties. Earlier,{" "}
              <span className="font-semibold text-gray-800">LB 243 (2023)</span> moved most community-college operating levies to the state. That caused the tiny 2024 statewide dip.
            </p>
            <p className="text-xs text-gray-400">
              Bill:{" "}
              <a href="https://nebraskalegislature.gov/bills/view_bill.php?DocumentID=58075" target="_blank" rel="noreferrer" className="font-semibold text-gray-600 hover:text-[#c8102e]">LB 34</a>
              {" "}· Source:{" "}
              <a href="https://nebraskaexaminer.com/2024/08/20/legislature-passes-slimmed-down-property-tax-relief-package-ends-nebraskas-special-session/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Nebraska Examiner</a>
              {" · "}
              <a href="https://revenue.nebraska.gov/sites/default/files/doc/news-release/ndr/LB_34_News_Release_Final.pdf" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">DOR explainer</a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="h-1 w-full bg-red-500" />
          <div className="p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-start gap-2.5">
                <span className="text-xs font-bold text-white bg-[#c8102e] px-2.5 py-1 rounded-lg shrink-0 mt-0.5">LB 814</span>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">The 40–50% cut, and the 75%→50% ag bill</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Indefinitely postponed · Apr. 17, 2026</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 bg-red-50 text-red-700 ring-1 ring-red-200">
                ✕ What died
              </span>
            </div>
            <div className="bg-red-50 rounded-xl p-3.5 border-l-2 border-red-300">
              <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-1.5">What actually happened</p>
              <p className="text-sm text-gray-800 leading-relaxed">
                The 2024 special session’s 40–50% cut plus sales-tax expansion died. In 2026, Sen. Brandt’s LB 814 — drop ag land valuation from 75% to 50% — was indefinitely postponed April 17. The short session ditched most of Pillen’s remaining tax-base ideas.
              </p>
            </div>
            <p className="text-xs text-gray-400 mt-2.5">
              Bill:{" "}
              <a href="https://www.nebraskalegislature.gov/bills/view_bill.php?DocumentID=63258" target="_blank" rel="noreferrer" className="font-semibold text-gray-600 hover:text-[#c8102e]">LB 814</a>
              {" "}· Source:{" "}
              <a href="https://nebraskaexaminer.com/2026/04/20/pillen-eyes-more-state-budget-cuts-to-help-offset-local-property-taxes/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Nebraska Examiner</a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="h-1 w-full bg-gray-400" />
          <div className="p-5">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-start gap-2.5">
                <span className="text-xs font-bold text-white bg-gray-700 px-2.5 py-1 rounded-lg shrink-0 mt-0.5">DOR</span>
                <h3 className="text-sm font-bold text-gray-900">What the numbers did</h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 bg-gray-50 text-gray-700 ring-1 ring-gray-200">
                Credits ≠ a rate cut
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-50 rounded-xl p-3 border-l-2 border-gray-300">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">2024 levy</p>
                <p className="text-sm text-gray-800 leading-relaxed">
                  First statewide property-tax decrease in 26 years — about <span className="font-semibold">$6 million</span> vs. ~$5.3 billion total. Mostly the community-college shift.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-3 border-l-2 border-red-300">
                <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-1">2025 levy</p>
                <p className="text-sm text-gray-800 leading-relaxed">
                  Up about <span className="font-semibold">$285 million</span> to <span className="font-semibold">$5,587,369,523</span>.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Where it goes · 2025 DOR</p>
                <ul className="text-sm text-gray-700 leading-relaxed space-y-1">
                  <li>Schools 59.45% · $3,321,609,205 <span className="text-gray-400">(incl. bonds)</span></li>
                  <li>Counties 17.46% · $975,404,479</li>
                  <li>Cities/villages 11.69% · $653,061,843</li>
                  <li className="text-xs text-gray-500">Rest: NRDs, fire, misc, leftover community college, ESUs, townships</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Who pays · 2025 DOR</p>
                <ul className="text-sm text-gray-700 leading-relaxed space-y-1">
                  <li>Residential ~53.75% of taxes on ~45.93% of value <span className="text-gray-400">(avg rate 1.7244)</span></li>
                  <li>Ag land ~22.30% of taxes on ~31.92% of value <span className="text-gray-400">(avg rate 1.0298)</span></li>
                  <li className="text-xs text-gray-500">Ag land assessed at 75% of actual value; homes 100%. Farmhouses and farm sites taxed as residential.</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-3.5 border-l-2 border-gray-300">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">2025 credits · DOR EO 25-13</p>
              <p className="text-sm text-gray-800 leading-relaxed mb-2">
                School District Property Tax Relief Credit <span className="font-semibold">$797,295,209</span>. Property Tax Credit Act <span className="font-semibold">$467,132,271</span> — $119.00 per $100,000 taxable value for non-ag, $142.79 per $100,000 for ag land (120% allocation).
              </p>
              <p className="text-xs text-gray-500">DOR is explicit: credits are not a levy-rate cut.</p>
            </div>

            <p className="text-xs text-gray-400 mt-2.5">
              Source:{" "}
              <a href="https://nebraskaexaminer.com/2026/04/20/pillen-eyes-more-state-budget-cuts-to-help-offset-local-property-taxes/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Nebraska Examiner, Apr. 20, 2026</a>
              {" · "}
              <a href="https://revenue.nebraska.gov/sites/default/files/doc/pad/research/valuation/2026/CurrentYr_VT_PieCharts_State%20%26%2093%20counties%202025.pdf" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">DOR pie charts</a>
              {" · "}
              <a href="https://revenue.nebraska.gov/sites/default/files/doc/news-release/pad/2025/NewsRelease_2025_Real_Property_Tax_Credit_and_School_Dist_Prop_Tax_Relief_Credit.pdf" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">DOR 2025 credits</a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="h-1 w-full bg-gray-400" />
          <div className="p-5">
            <div className="flex items-start gap-2.5 mb-2">
              <span className="text-xs font-bold text-white bg-gray-700 px-2.5 py-1 rounded-lg shrink-0 mt-0.5">2027</span>
              <h3 className="text-sm font-bold text-gray-900">How he’d pay for more</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              State spending cuts. Maybe broaden the 5.5% sales tax to currently exempt goods and services. Hard local spending caps. He said the messaging needs to be simpler and the next fight is 2027. Sen. Tanya Storer called credits “feeding the demon.”
            </p>
            <p className="text-xs text-gray-400 mt-2.5">
              Source:{" "}
              <a href="https://nebraskaexaminer.com/2026/07/09/pillen-talks-priorities-pivot-from-nebraska-primary-election-to-nov-3-faceoff/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Nebraska Examiner, Jul. 9, 2026</a>
              {" · "}
              <a href="https://nebraskaexaminer.com/2026/04/20/pillen-eyes-more-state-budget-cuts-to-help-offset-local-property-taxes/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Apr. 20, 2026</a>
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed mb-6 border-t border-gray-100 pt-4">
        Separate fight —{" "}
        <a href="https://ballotpedia.org/Nebraska_Referendum_435,_Private_Education_Scholarship_Program_Referendum_(2024)" target="_blank" rel="noreferrer" className="font-semibold text-gray-700 hover:text-[#c8102e]">Referendum 435</a>
        {" "}(Nov. 2024) repealed the private-school scholarship law 57.03%–42.97% statewide (508,140 to repeal vs. 382,921), including Douglas County ~56%. Pillen’s “right fit” / federal $1,700 credit is a 2027 argument, not this levy story.
      </p>

      <p className="text-xs text-gray-400 text-center leading-relaxed">
        Sources:{" "}
        {PROPERTY_TAX_SOURCES.map((s, i) => (
          <span key={s.url}>
            <a href={s.url} target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">{s.label}</a>
            {i < PROPERTY_TAX_SOURCES.length - 1 ? " · " : ""}
          </span>
        ))}
      </p>
    </section>
  );
}
