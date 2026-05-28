import Link from "next/link";

export const metadata = { title: "Two Tax Systems · NE Watchdog" };

const PROPUBLICA_DATA = [
  { name: "Jeff Bezos",            wealthGrowth: "$99.0B",        taxesPaid: "$973M",   trueRate: "0.98%", color: "#c8102e" },
  { name: "Elon Musk",             wealthGrowth: "$13.9B",        taxesPaid: "$455M",   trueRate: "3.27%", color: "#c8102e" },
  { name: "Top 25 Wealthiest",     wealthGrowth: "$401B",         taxesPaid: "$13.6B",  trueRate: "3.4%",  color: "#c8102e" },
  { name: "Median U.S. household", wealthGrowth: "~$70K income",  taxesPaid: "~$9,800", trueRate: "14%",   color: "#059669" },
];

const STEPS = [
  {
    step: "1",
    word: "Buy",
    color: "#1d4ed8",
    heading: "Accumulate assets. Don't sell.",
    body: "Invest heavily in stocks or real estate. As long as you don't sell, there's no taxable event. The asset can grow from $1M to $1B and you owe nothing. This is called an \"unrealized gain\": real wealth, zero tax.",
    example: "The 25 wealthiest Americans watched their collective net worth grow by $401 billion over four years. Because they didn't sell, almost none of that growth triggered a taxable event.",
  },
  {
    step: "2",
    word: "Borrow",
    color: "#c8102e",
    heading: "Live off loans, not income",
    body: "Instead of selling stock to pay for your lifestyle, you use it as collateral for a loan. Loans are not income. They are never taxed. You can borrow tens or hundreds of millions of dollars and owe zero income tax on any of it. Major banks like Morgan Stanley, JPMorgan, and Schwab offer these \"securities-backed lines of credit\" to clients with $100K+ in assets.",
    example: "The Federal Reserve tracked $138 billion in outstanding securities-backed loans as of early 2024. That's $138 billion in tax-free spending power.",
  },
  {
    step: "3",
    word: "Die",
    color: "#0a0e1a",
    heading: "Pass it on. The gain disappears.",
    body: "When you die, your heirs inherit your assets at their current market value. The IRS calls this a \"stepped-up basis.\" Decades of appreciation, the gains you never paid taxes on, are permanently erased. Your heirs can sell immediately and owe nothing on that growth.",
    example: "The stepped-up basis loophole costs the federal government $72.5 billion in foregone tax revenue in 2026 alone, about one-quarter of all capital gains tax income. 56% of that benefit goes to the wealthiest 20% of estates.",
  },
];

export default function TwoTaxSystems() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Follow the money</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">There Are Two Tax Systems</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            One for people who earn a paycheck. One for people whose wealth lives in stock.
            They are not the same system. The gap between them is not an accident.
          </p>
        </div>

        {/* Lede */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">The ProPublica finding</p>
          <p className="text-white font-semibold text-lg leading-snug mb-3">
            ProPublica obtained actual IRS records for America's 25 wealthiest people.
            Between 2014 and 2018, their wealth grew by $401 billion.
            They paid $13.6 billion in federal taxes. A true tax rate of <span className="text-[#c8102e]">3.4%</span>.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            The median American household paid <span className="text-white font-semibold">14%</span>.
            That's not a loophole. That's the system working exactly as designed, for people
            wealthy enough to use it.
          </p>
          <a
            href="https://www.propublica.org/article/the-secret-irs-files-trove-of-never-before-seen-records-reveal-how-the-wealthiest-avoid-income-tax"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-white/50 hover:text-white transition-colors"
          >
            Source: ProPublica — "The Secret IRS Files" ↗
          </a>
        </div>

        {/* ProPublica table */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">True Tax Rates, 2014–2018 · Source: ProPublica IRS Records</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="grid grid-cols-4 px-5 py-2.5 border-b border-gray-100">
            {["Person / Group", "Wealth Growth", "Taxes Paid", "True Rate"].map((h) => (
              <p key={h} className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">{h}</p>
            ))}
          </div>
          {PROPUBLICA_DATA.map((row, i) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 gap-2 items-center ${
                i !== PROPUBLICA_DATA.length - 1 ? "border-b border-gray-50" : "bg-emerald-50"
              }`}
            >
              <p className={`text-sm font-semibold ${i === PROPUBLICA_DATA.length - 1 ? "text-emerald-800" : "text-gray-900"}`}>
                {row.name}
              </p>
              <p className={`text-sm ${i === PROPUBLICA_DATA.length - 1 ? "text-emerald-700" : "text-gray-600"}`}>
                {row.wealthGrowth}
              </p>
              <p className={`text-sm ${i === PROPUBLICA_DATA.length - 1 ? "text-emerald-700" : "text-gray-600"}`}>
                {row.taxesPaid}
              </p>
              <p className={`text-base font-bold ${i === PROPUBLICA_DATA.length - 1 ? "text-emerald-700" : "text-[#c8102e]"}`}>
                {row.trueRate}
              </p>
            </div>
          ))}
        </div>

        {/* The $1 salary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl font-black text-gray-100 shrink-0 leading-none">$1</div>
            <div>
              <h2 className="text-base font-bold text-gray-900 mb-2">The $1 Salary Trick</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Elon Musk, Mark Zuckerberg, Larry Page, and dozens of other billionaires take an
                official salary of $1 per year. This isn't charity. It's tax strategy. A $1 salary
                means almost no ordinary income tax. Their actual compensation comes through stock
                grants and options, which are taxed at the lower capital gains rate (20%) instead
                of the income tax rate (up to 37%).
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Zuckerberg has taken a $1 salary since 2013. In that time, his net worth grew by
                more than $100 billion. The salary is irrelevant. The wealth is in the stock, and
                as long as he doesn't sell it, it's never taxed.
              </p>
            </div>
          </div>
        </div>

        {/* Buy Borrow Die */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">The Strategy: Buy, Borrow, Die</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-2xl">
          This is the name tax attorneys, academics, and the IRS use for the coordinated
          strategy that lets the ultra-wealthy live extravagantly while paying almost no taxes.
          It has three steps.
        </p>

        <div className="space-y-4 mb-8">
          {STEPS.map((s) => (
            <div key={s.step} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-1 w-full" style={{ backgroundColor: s.color }} />
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg shrink-0"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: s.color }}>{s.word}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{s.heading}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.body}</p>
                    <div className="bg-gray-50 rounded-xl p-3 border-l-2 border-gray-300">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Real example</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{s.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The reform debate */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-3">The Reform Debate</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            The idea that taxes should reflect total wealth, not just declared income, is
            the basis of the most serious current reform proposals in Congress.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">Wyden's Billionaires Income Tax Act (reintroduced 2025)</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Would require annual taxation on gains from tradable assets, treating stock
                appreciation as income even if not sold. Targets fewer than 1,000 Americans
                with $100M+ annual income or $1B+ in assets. Projected to raise $500B+ over
                10 years. Has 20+ Senate cosponsors. Has not passed.
              </p>
              <a href="https://www.finance.senate.gov/ranking-members-news/wyden-cohen-beyer-introduce-the-billionaires-income-tax-act"
                target="_blank" rel="noreferrer"
                className="text-xs font-medium text-[#c8102e] hover:underline mt-2 block">
                Senate Finance Committee announcement ↗
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">Biden's Billionaire Minimum Income Tax (proposed 2022)</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Would have required a 20% minimum tax on "true income," including unrealized
                capital gains, for billionaires. Projected to raise $500B over 10 years.
                Never passed Congress.
              </p>
            </div>
          </div>
        </div>

        {/* Nebraska connection */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">Why this matters in Nebraska</p>
          <p className="text-white text-sm leading-relaxed mb-3">
            Nebraska's state income tax is based on federal adjusted gross income, which means
            Nebraska's tax system inherits all the same loopholes. If a wealthy Omaha executive
            uses Buy, Borrow, Die to pay a 3% federal rate, they're also paying a fraction of
            what their median employees pay in state taxes.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Meanwhile the Nebraska legislature cut income taxes (LB 9) in ways that benefit
            higher earners more, handed out $1.5B in corporate tax incentives, and gutted
            paid sick leave for 140,000 workers. Many of them pay a higher effective tax
            rate than the CEOs of the companies they work for.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <Link href="/pay-gap" className="text-xs font-medium text-white/50 hover:text-white transition-colors">
              See CEO pay vs. worker pay ↗
            </Link>
            <Link href="/session" className="text-xs font-medium text-white/50 hover:text-white transition-colors">
              See 2025 session recap ↗
            </Link>
          </div>
        </div>

        {/* Sources */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Sources & Further Reading</p>
          <div className="space-y-2">
            {[
              { label: "ProPublica: The Secret IRS Files (main investigation)", url: "https://www.propublica.org/article/the-secret-irs-files-trove-of-never-before-seen-records-reveal-how-the-wealthiest-avoid-income-tax" },
              { label: "ProPublica: How We Calculated the True Tax Rates (methodology)", url: "https://www.propublica.org/article/how-we-calculated-the-true-tax-rates-of-the-wealthiest" },
              { label: "Yale Budget Lab: Buy, Borrow, Die — Options for Reform", url: "https://budgetlab.yale.edu/research/buy-borrow-die-options-reforming-tax-treatment-borrowing-against-appreciated-assets" },
              { label: "DC Fiscal Policy Institute: How Wealthy Households Use Buy, Borrow, Die", url: "https://dcfpi.org/all/how-wealthy-households-use-a-buy-borrow-die-strategy-to-avoid-taxes-on-their-growing-fortunes/" },
              { label: "Bipartisan Policy Center: Step Up in Basis and Securities-Backed Lines of Credit", url: "https://bipartisanpolicy.org/explainer/paying-the-2025-tax-bill-buy-borrow-die/" },
              { label: "Peter G. Peterson Foundation: What Is Stepped-Up Basis?", url: "https://www.pgpf.org/article/what-is-the-stepped-up-basis-and-how-does-it-affect-the-federal-budget/" },
              { label: "Federal Reserve: Estimating Securities-Based Loans Outstanding", url: "https://www.federalreserve.gov/econres/notes/feds-notes/estimating-securities-based-loans-outstanding-20240802.html" },
              { label: "FINRA: Securities-Backed Lines of Credit Explained", url: "https://www.finra.org/investors/insights/securities-backed-lines-credit" },
              { label: "Senate Finance Committee: Wyden Billionaires Income Tax Act", url: "https://www.finance.senate.gov/ranking-members-news/wyden-cohen-beyer-introduce-the-billionaires-income-tax-act" },
            ].map((s) => (
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
