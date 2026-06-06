import Link from "next/link";

export const metadata = {
  title: "S. 4093: Tariff Refunds for Nebraska Families — Take Action",
  description:
    "Tariffs cost Nebraska families $1,700+/year. S. 4093 would return $600/person using tariff revenue already collected. Fischer and Ricketts haven't signed on. See Ricketts' response.",
};

export default function TariffAction() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Take Action</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">S. 4093: Tariff Refunds for Working Families Act</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            Tariffs are costing Nebraska families $1,700+ a year. There's a bill to return some of that
            money directly to working families. Nebraska's senators haven't signed on. Here's everything you need to know and what to do about it.
          </p>
        </div>

        {/* The bill */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">The bill</p>
          <p className="text-white font-semibold text-lg leading-snug mb-3">
            S. 4093 would send direct payments to every working family in Nebraska using tariff
            revenue already collected by the federal government.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Introduced March 12, 2026 by Sen. Martin Heinrich (D-NM). Currently in the Senate Finance Committee.
            Nebraska's senators — Fischer and Ricketts — have not cosponsored it.
          </p>
          <a href="https://www.congress.gov/bill/119th-congress/senate-bill/4093" target="_blank" rel="noreferrer"
            className="text-xs font-medium text-white/40 hover:text-white transition-colors">
            Read S. 4093 on Congress.gov ↗
          </a>
        </div>

        {/* Payment amounts */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What you would receive</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { amount: "$600", who: "Per person", detail: "Single filers earning under $90K" },
            { amount: "$1,200", who: "Per couple", detail: "Joint filers earning under $180K" },
            { amount: "+$600", who: "Per child", detail: "Each dependent child, any qualifying filer" },
          ].map((item) => (
            <div key={item.who} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
              <div className="text-3xl font-black text-[#c8102e] mb-1">{item.amount}</div>
              <div className="text-sm font-semibold text-gray-900">{item.who}</div>
              <div className="text-xs text-gray-400 mt-1">{item.detail}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 mb-8">
          <p className="text-sm text-gray-600 leading-relaxed">
            A family of four earning under $180K would receive <strong className="text-gray-900">$2,400</strong>.
            A single parent with two children would receive <strong className="text-gray-900">$1,800</strong>.
            Payments are funded directly from tariff revenue already collected — not new spending.
          </p>
        </div>

        {/* Nebraska impact */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What tariffs are costing Nebraska</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="text-2xl font-black text-[#c8102e] mb-1">$1,700+</div>
            <div className="text-sm font-semibold text-gray-900 mb-1">Per household, per year</div>
            <div className="text-xs text-gray-500 leading-relaxed">Estimated annual tariff cost to the average Nebraska family from higher prices on imported goods.</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="text-2xl font-black text-[#c8102e] mb-1">$943M</div>
            <div className="text-sm font-semibold text-gray-900 mb-1">Nebraska farmers' projected losses</div>
            <div className="text-xs text-gray-500 leading-relaxed">Retaliatory tariffs from trading partners projected to cost Nebraska farmers $943 million in 2025. China stopped buying Nebraska soybeans after May 2025.</div>
          </div>
        </div>

        {/* Corporate exemptions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-3">While families pay full price</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Politically connected corporations are getting tariff exemptions, meaning they never pay
            in the first place. Apple received a full chip tariff exemption tied to a $600 billion
            investment commitment. No Nebraska family can make that kind of deal.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            An academic study of exemptions during Trump's first term found that companies with higher
            Republican political contributions had significantly better odds of receiving exemptions.
            The process is opaque, with no required public justification for individual decisions.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "CNBC: Electronics exemption", url: "https://www.cnbc.com/2025/04/12/trump-exempts-phones-computers-chips-tariffs-apple-dell.html" },
              { label: "9to5Mac: Apple chip exemption", url: "https://9to5mac.com/2025/08/06/apples-100b-us-commitment-got-it-a-100-chip-tariff-exemption/" },
              { label: "Yale Budget Lab: Household cost analysis", url: "https://budgetlab.yale.edu/research/where-we-stand-fiscal-economic-and-distributional-effects-all-us-tariffs-enacted-2025-through-april" },
              { label: "Nebraska Public Media: Farmer losses", url: "https://nebraskapublicmedia.org/en/news/news-articles/report-tariffs-will-cost-nebraska-farmers-943-million-this-year/" },
            ].map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                className="text-xs font-medium text-[#c8102e] hover:underline">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Can it work */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-3">Can calling actually change anything?</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Fischer and Ricketts are Republicans, and no Republicans have cosponsored S. 4093 yet.
            But that's not written in stone. Elected officials respond to constituent pressure.
            When offices get flooded with calls and emails from real people back home, it gets noticed.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            These senators work for Nebraskans, not party leadership. $2,400 back in the pocket of
            a Nebraska family of four is not a partisan issue. Make them hear it from enough
            constituents and the calculus changes.
          </p>
        </div>

        {/* CTAs */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Contact your representatives</h2>
        <div className="space-y-3 mb-4">
          {[
            { name: "Sen. Deb Fischer (R-NE)", url: "https://www.fischer.senate.gov/public/index.cfm/contact", responded: false },
            { name: "Sen. Pete Ricketts (R-NE)", url: "https://www.ricketts.senate.gov/contact/share-your-opinion/", responded: true },
            { name: "Rep. Don Bacon (R-NE-02)", url: "https://bacon.house.gov/contact/contactform.htm", responded: false },
          ].map((rep) => (
            <a key={rep.name} href={rep.url} target="_blank" rel="noreferrer"
              className="flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-100 px-5 py-4 hover:border-[#c8102e]/30 transition-colors group">
              <span className="text-sm font-semibold text-gray-900 group-hover:text-[#c8102e] transition-colors">{rep.name}</span>
              <div className="flex items-center gap-3">
                {rep.responded && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200">Responded</span>
                )}
                <span className="text-xs font-medium text-[#c8102e]">Contact ↗</span>
              </div>
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400 mb-8">
          Not in Congressional District 2? <a href="https://www.house.gov/representatives/find-your-representative" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Find your representative ↗</a>
        </p>

        {/* What to say */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-8">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">What to say</p>
          <p className="text-sm text-gray-600 leading-relaxed italic">
            "I'm a Nebraska constituent. Tariffs are costing my family real money every month.
            I'm asking you to cosponsor S. 4093, the Tariff Refunds for Working Families Act,
            which would return some of that tariff revenue directly to working families.
            Please support this bill."
          </p>
        </div>

        {/* Senator responses */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Senator responses</h2>
        <div className="space-y-3 mb-8">

          {/* Ricketts */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div>
                <p className="text-sm font-bold text-gray-900">Sen. Pete Ricketts (R-NE)</p>
                <p className="text-xs text-gray-400">Response to constituent contact on S. 4093</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200">Responded</span>
            </div>
            <div className="px-5 py-5 space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>Thank you for contacting my office about trade policy.</p>
              <p>Trade allows Americans to compete globally and provide more prosperity to our communities. Good competition requires everyone to compete with the same rulebook, and for too long, some countries have taken advantage of generous American policies. Tariffs, a monetary charge levied on imported goods and services, are an important tool to make sure Americans get to compete on a level playing field.</p>
              <p>In his first administration, President Trump effectively used tariffs to protect domestic industries from bad actors, advance foreign policy goals, and reduce trade deficits with other countries. For example, Trump applied tariffs to pressure Communist China to buy more of our agricultural products.</p>
              <p>During the last Administration, the U.S. average weighted tariff was 1.4%, while the global weighted tariff was almost 6%. We have to level the playing field with our trading partners. Our country must combat Communist China's existential threat to our security, freedoms, and domestic jobs. We need Mexico and Canada to do their part in helping secure our borders and prevent the flow of dangerous narcotics into our communities. After four years of weak trade policy, President Trump will continue his work to ensure U.S. citizens remain safe and American business is competitive on the global stage.</p>
              <p>My primary mission as your United States Senator is to make government work with proven Nebraskan solutions that are ready for America. To better inform my decision-making, it is important that I hear the ideas, concerns, and opinions of all Nebraskans. I appreciate the time and effort you took to provide input on trade policy and will keep it in mind as the U.S. Senate considers this issue.</p>
            </div>
            <div className="px-5 py-3 bg-amber-50 border-t border-amber-100">
              <p className="text-xs text-amber-700 leading-relaxed">
                Sen. Ricketts' response defends tariffs as a policy tool but does not mention S. 4093 or address whether tariff revenue should be returned to Nebraska families.
              </p>
            </div>
          </div>

          {/* Fischer */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-900">Sen. Deb Fischer (R-NE)</p>
              <p className="text-xs text-gray-400">Constituent contact sent</p>
            </div>
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-gray-100 text-gray-400 border border-gray-200">No response yet</span>
          </div>

          {/* Bacon */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-900">Rep. Don Bacon (R-NE-02)</p>
              <p className="text-xs text-gray-400">Constituent contact sent</p>
            </div>
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-gray-100 text-gray-400 border border-gray-200">No response yet</span>
          </div>

        </div>
        <p className="text-xs text-gray-400 mb-8">This page will be updated as responses arrive.</p>

        <div className="flex gap-4 flex-wrap">
          <Link href="/" className="text-xs font-medium text-[#c8102e] hover:underline">Back to homepage ↗</Link>
          <Link href="/issues" className="text-xs font-medium text-[#c8102e] hover:underline">See all key issues ↗</Link>
        </div>

      </div>
    </div>
  );
}
