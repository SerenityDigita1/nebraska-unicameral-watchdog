import Link from "next/link";

export default function TariffActionBanner() {
  return (
    <div className="bg-[#0a0e1a] border-b-4 border-[#c8102e]">
      <div className="max-w-4xl mx-auto px-6 py-8">

        {/* Alert label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-[#c8102e] text-white text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full animate-pulse">
            Action Needed
          </span>
          <span className="text-white/40 text-xs">Affects every Nebraska district</span>
        </div>

        {/* Headline */}
        <h2 className="text-white font-black text-2xl leading-tight mb-2">
          Tariffs are costing Nebraska families $1,700+ a year.<br className="hidden sm:block" />
          There's a bill to get some of it back — and your senators haven't signed on.
        </h2>
        <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-2xl">
          S. 4093, the Tariff Refunds for Working Families Act, would send direct payments to
          every working family in Nebraska using tariff revenue already collected. Sen. Fischer
          and Sen. Ricketts have not cosponsored it. They work for you. Call them.
        </p>

        {/* The deal */}
        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-black text-[#c8102e] mb-1">$600</div>
            <div className="text-white/80 text-xs font-semibold">Per person</div>
            <div className="text-white/40 text-xs mt-1">Single filers earning under $90K</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-black text-[#c8102e] mb-1">$2,400</div>
            <div className="text-white/80 text-xs font-semibold">Family of four</div>
            <div className="text-white/40 text-xs mt-1">$1,200 couple + $600 per child, under $180K</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-black text-[#c8102e] mb-1">$943M</div>
            <div className="text-white/80 text-xs font-semibold">Nebraska farmers' losses</div>
            <div className="text-white/40 text-xs mt-1">Projected 2025 losses from retaliatory tariffs</div>
          </div>
        </div>

        {/* Corporate exemption contrast */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
          <p className="text-xs font-bold text-[#c8102e] uppercase tracking-widest mb-2">Meanwhile</p>
          <p className="text-white/80 text-sm leading-relaxed">
            Politically connected corporations are getting tariff <em>exemptions</em>, meaning they never pay in the first place.
            Apple received a full chip tariff exemption tied to a $600 billion investment commitment.
            No Nebraska family can make that kind of deal. Working families pay full price at the grocery store,
            the hardware store, and the gas pump. This bill uses the revenue those tariffs collect to put some of it back in your pocket.
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
            {[
              { label: "CNBC", url: "https://www.cnbc.com/2025/04/12/trump-exempts-phones-computers-chips-tariffs-apple-dell.html" },
              { label: "9to5Mac", url: "https://9to5mac.com/2025/08/06/apples-100b-us-commitment-got-it-a-100-chip-tariff-exemption/" },
              { label: "Yale Budget Lab", url: "https://budgetlab.yale.edu/research/where-we-stand-fiscal-economic-and-distributional-effects-all-us-tariffs-enacted-2025-through-april" },
              { label: "Nebraska Public Media", url: "https://nebraskapublicmedia.org/en/news/news-articles/report-tariffs-will-cost-nebraska-farmers-943-million-this-year/" },
            ].map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                className="text-white/30 hover:text-white/60 text-xs underline transition-colors">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Why call */}
        <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-4 mb-6">
          <p className="text-xs font-bold text-[#c8102e] uppercase tracking-widest mb-2">Can this actually work?</p>
          <p className="text-white/80 text-sm leading-relaxed">
            Fischer and Ricketts are Republicans, and no Republicans have signed on yet. But that's not written in stone.
            Elected officials respond to constituent pressure. When their offices get flooded with calls and emails
            from real people back home, it gets noticed. History shows that enough constituent contact can move
            votes that seem decided. These senators work for Nebraskans, not party leadership.
            Make them hear it.
          </p>
        </div>

        {/* CTAs */}
        <div className="mb-4">
          <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-3">Contact your representatives — all three</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.fischer.senate.gov/public/index.cfm/contact"
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-[#c8102e] hover:bg-[#a50d26] text-white text-sm font-bold py-3 px-4 rounded-xl text-center transition-colors"
            >
              Contact Sen. Fischer ↗
            </a>
            <a
              href="https://www.ricketts.senate.gov/contact/share-your-opinion/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-[#c8102e] hover:bg-[#a50d26] text-white text-sm font-bold py-3 px-4 rounded-xl text-center transition-colors"
            >
              Contact Sen. Ricketts ↗
            </a>
            <a
              href="https://bacon.house.gov/contact/contactform.htm"
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm font-bold py-3 px-4 rounded-xl text-center transition-colors border border-white/20"
            >
              Contact Rep. Bacon ↗
            </a>
          </div>
          <p className="text-white/30 text-xs mt-2">
            Not in District 2? <a href="https://www.house.gov/representatives/find-your-representative" target="_blank" rel="noreferrer" className="hover:text-white/60 underline">Find your representative ↗</a>
          </p>
        </div>

        {/* What to say */}
        <div className="bg-white/5 rounded-xl p-4 mb-5 border border-white/10">
          <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">What to say</p>
          <p className="text-white/70 text-sm leading-relaxed italic">
            "I'm a Nebraska constituent. Tariffs are costing my family real money every month.
            I'm asking you to cosponsor S. 4093, the Tariff Refunds for Working Families Act,
            which would return some of that tariff revenue directly to working families.
            Please support this bill."
          </p>
        </div>

        {/* Bill link + statewide note */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
          <p className="text-white/30 text-xs leading-relaxed max-w-md">
            This issue affects every congressional district and every county in Nebraska, not just District 49.
            Share this page with anyone in the state.
          </p>
          <a
            href="https://www.congress.gov/bill/119th-congress/senate-bill/4093"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-white/40 hover:text-white transition-colors whitespace-nowrap"
          >
            Read S. 4093 on Congress.gov ↗
          </a>
        </div>

      </div>
    </div>
  );
}
