import Link from "next/link";

export default function TariffActionBanner() {
  return (
    <div className="bg-[#0a0e1a] border-b-4 border-[#c8102e]">
      <div className="max-w-4xl mx-auto px-6 py-6">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

          {/* Left: label + headline */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#c8102e] text-white text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full animate-pulse">
                Action Needed
              </span>
              <span className="text-white/40 text-xs hidden sm:inline">Affects every Nebraska district</span>
            </div>
            <p className="text-white font-bold text-base leading-snug mb-1">
              Tariffs are costing Nebraska families $1,700+ a year.
              There's a bill to get some of it back.
            </p>
            <p className="text-white/50 text-xs leading-relaxed">
              S. 4093 · $600/person · $2,400 family of four · Nebraska's senators haven't signed on.
              <span className="text-amber-400 ml-1">Sen. Ricketts has responded.</span>
            </p>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col sm:items-end gap-2 shrink-0">
            <Link
              href="/tariff-action"
              className="bg-[#c8102e] hover:bg-[#a50d26] text-white text-sm font-bold py-2.5 px-5 rounded-xl text-center transition-colors whitespace-nowrap"
            >
              Read more and take action ↗
            </Link>
            <p className="text-white/30 text-xs text-center sm:text-right">
              Fischer · Ricketts · Bacon contact links inside
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
