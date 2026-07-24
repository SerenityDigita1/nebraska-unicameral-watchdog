import Link from "next/link";

export const metadata = {
  title: "Ask Your Neighbor? — Nebraska Watchdog",
  description:
    "New DHHS data: Nebraska has 25,000 fewer people on food aid than a year ago, the sharpest drop since at least 2014. Some of it's federal cuts. Some of it is Nebraska asking applicants for a signed note from a neighbor. Here's the fix already sitting in Lincoln.",
};

const ENROLLMENT = [
  { m: "Jul-25", v: 149423 },
  { m: "Aug-25", v: 149527 },
  { m: "Sep-25", v: 148120 },
  { m: "Oct-25", v: 146368 },
  { m: "Nov-25", v: 140661 },
  { m: "Dec-25", v: 138013 },
  { m: "Jan-26", v: 136218 },
  { m: "Feb-26", v: 134074 },
  { m: "Mar-26", v: 132550 },
  { m: "Apr-26", v: 132242 },
  { m: "May-26", v: 130178 },
  { m: "Jun-26", v: 124299 },
];

const SOURCES = [
  { label: "Nebraska Examiner: Sharp monthly drop in Nebraskans receiving public food aid sounds alarm for advocates (Cindy Gonzalez, July 23, 2026)", url: "https://nebraskaexaminer.com/2026/07/23/sharp-monthly-drop-in-nebraskans-receiving-public-food-aid-sounds-alarm-for-advocates/" },
  { label: "Nebraska Examiner: Refugees, advocates seek to restore food aid lost under new federal rules (LB 843 hearing, Feb. 19, 2026)", url: "https://nebraskaexaminer.com/2026/02/19/refugees-and-advocates-seek-to-restore-food-aid-lost-under-new-federal-rules/" },
  { label: "Nebraska Examiner: Pillen vetoes bill ending Nebraska lifetime SNAP ban for certain drug convictions (LB 319, May 14, 2025)", url: "https://nebraskaexaminer.com/2025/05/14/pillen-vetoes-bill-ending-nebraska-lifetime-snap-ban-for-certain-drug-convictions/" },
  { label: "Nebraska Examiner: Lawmakers back Pillen veto, kill bill to lift lifetime ban on food aid (May 19, 2025)", url: "https://nebraskaexaminer.com/2025/05/19/lawmakers-back-pillen-veto-kill-bill-to-lift-lifetime-ban-on-food-aid-for-some-with-drug-pasts/" },
  { label: "Unicameral Update: Tax incentive rollback adjusted, advanced to final round (LB 650)", url: "https://update.legislature.ne.gov/?p=38600" },
  { label: "Nebraska Examiner: Pillen-backed bill would help reduce state budget shortfall by $71M, aiming at business incentives", url: "https://nebraskaexaminer.com/2025/04/11/pillen-backed-bill-would-help-reduce-state-budget-shortfall-by-71m-aiming-at-business-incentives/" },
  { label: "WOWT: Omaha food banks concerned about new law eliminating donation tax credit", url: "https://www.wowt.com/2025/12/30/omaha-food-banks-concerned-about-new-law-eliminating-donation-tax-credit/" },
  { label: "Nebraska Department of Revenue: Food Bank, Food Pantry, Food Rescue Donation Tax Credit", url: "https://revenue.nebraska.gov/tax-credits/food-bank-food-pantry-food-rescue-donation-tax-credit" },
  { label: "Nebraska Public Media: Double Up Food Bucks nears a decade of fighting food insecurity", url: "https://nebraskapublicmedia.org/en/news/news-articles/nebraskas-double-up-food-bucks-program-nears-a-decade-of-fighting-food-insecurity/" },
  { label: "Double Up Food Bucks Nebraska", url: "https://doubleupnebraska.org/" },
  { label: "Pew Charitable Trusts: As SNAP changes shift food assistance costs, states face new choices", url: "https://www.pew.org/en/research-and-analysis/articles/2026/01/14/as-snap-changes-shift-food-assistance-costs-states-face-new-choices" },
  { label: "Nebraska Legislature: Find your senator", url: "https://nebraskalegislature.gov/senators/find.php" },
];

export default function AskYourNeighbor() {
  const first = ENROLLMENT[0].v;
  const last = ENROLLMENT[ENROLLMENT.length - 1].v;
  const max = Math.max(...ENROLLMENT.map((d) => d.v));

  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Food Security</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">
            Nebraska Now Wants a Note From Your Neighbor Before You Can Eat
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            New DHHS data reported by the <a href="https://nebraskaexaminer.com/2026/07/23/sharp-monthly-drop-in-nebraskans-receiving-public-food-aid-sounds-alarm-for-advocates/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Nebraska Examiner</a>{" "}
            shows 25,000 fewer Nebraskans getting food aid than a year ago — the sharpest drop in over a decade. Part of that is Washington.
            Part of it is Lincoln. And Lincoln already has two real, cheap, cross-the-aisle ways to do something about it before the next session opens.
          </p>
        </div>

        {/* Credit box up top */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-8 flex items-start gap-3">
          <span className="text-[#c8102e] shrink-0 mt-0.5">↗</span>
          <p className="text-xs text-gray-500 leading-relaxed">
            The numbers and reporting below on Nebraska&apos;s SNAP enrollment build directly on original reporting by{" "}
            <span className="font-semibold text-gray-700">Cindy Gonzalez at the Nebraska Examiner</span>, published July 23, 2026. Read her full story{" "}
            <a href="https://nebraskaexaminer.com/2026/07/23/sharp-monthly-drop-in-nebraskans-receiving-public-food-aid-sounds-alarm-for-advocates/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline font-semibold">
              here ↗
            </a>. What follows adds the state-legislature angle — what Lincoln already tried, and what it could still do.
          </p>
        </div>

        {/* Core stat callout */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">The headline number</p>
          <p className="text-white font-semibold text-lg leading-snug mb-4">
            Nebraska SNAP enrollment has fallen nearly 17% in a year — and the single sharpest monthly drop
            in at least a decade just happened, in June.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">July 2025</p>
              <div className="text-2xl font-black text-white">149,423</div>
              <p className="text-white/60 text-xs mt-1 leading-relaxed">Nebraskans enrolled in SNAP, the month Congress passed the federal tax and spending bill.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">June 2026</p>
              <div className="text-2xl font-black text-[#c8102e]">124,299</div>
              <p className="text-white/60 text-xs mt-1 leading-relaxed">Enrolled now. About 25,000 fewer people — nearly 17% — in eleven months.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">May → June alone</p>
              <div className="text-2xl font-black text-[#c8102e]">-5,879</div>
              <p className="text-white/60 text-xs mt-1 leading-relaxed">The sharpest single-month drop since Nebraska Appleseed started tracking DHHS data in 2014.</p>
            </div>
          </div>
          <p className="text-white/40 text-xs mt-3">
            Source: Nebraska DHHS SNAP performance data, via Nebraska Examiner, July 23, 2026.
          </p>
        </div>

        {/* Enrollment trend bars */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-1">Eleven months, one direction</h2>
          <p className="text-sm text-gray-500 mb-4">Nebraskans enrolled in SNAP, month by month. DHHS&apos;s own numbers.</p>
          <div className="flex items-end gap-1.5 h-40">
            {ENROLLMENT.map((d) => (
              <div key={d.m} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                <div
                  className={`w-full rounded-t-sm ${d.m === "Jun-26" ? "bg-[#c8102e]" : "bg-gray-300"}`}
                  style={{ height: `${(d.v / max) * 100}%` }}
                  title={`${d.m}: ${d.v.toLocaleString()}`}
                />
                <span className="text-[9px] text-gray-400 mt-1 rotate-0">{d.m.replace("-", "")}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            {first.toLocaleString()} → {last.toLocaleString()} enrolled, July 2025 to June 2026.
          </p>
        </div>

        {/* Ask your neighbor section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-3">&ldquo;Ask your neighbor?&rdquo;</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              Not all of the drop is the federal eligibility and work-requirement changes DHHS was required
              to roll out. Advocates say Nebraska has also quietly tightened its own paperwork. Eric Savaiano,
              Nebraska Appleseed&apos;s manager for food and nutrition access, says some new and renewing SNAP
              applicants have had to get a <strong>signed confirmation from a neighbor</strong> about who actually
              lives in their household.
            </p>
            <p className="italic text-gray-800 border-l-2 border-[#c8102e] pl-4">
              &ldquo;The state is now requiring verification for absolutely everything. It&apos;s making it harder
              and harder for people to apply and receive SNAP.&rdquo; — Eric Savaiano, Nebraska Appleseed
            </p>
            <p>
              Angie Lauritsen, director of Nebraska For Us, put it more bluntly: <span className="italic text-gray-800">&ldquo;Roadblocks
              and cuts are happening by design.&rdquo;</span> DHHS disputes the framing — spokesman Jeff Powell
              says the state&apos;s verification options are permitted under federal guidelines and modeled on
              approaches &ldquo;successfully implemented in other states,&rdquo; and that the agency is &ldquo;working
              aggressively&rdquo; on application backlogs while keeping benefit accuracy a top priority.
            </p>
          </div>
        </div>

        {/* State's own numbers - admin performance */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-3">DHHS&apos;s own performance numbers are slipping too</h2>
          <p className="text-sm text-gray-500 mb-4">Independent of the enrollment drop, the state&apos;s own processing metrics missed their targets in June.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">Expedited processing</p>
              <div className="text-2xl font-black text-amber-700">5.48 days</div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">June average, up from 3.25 in May and 2.79 in April. State goal: 3 days. Federal ceiling: 7.</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">On-time filings, non-expedited</p>
              <div className="text-2xl font-black text-amber-700">70.7%</div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">June, down from 95.8% last July. State target is above 90%.</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">Call center wait time</p>
              <div className="text-2xl font-black text-amber-700">23 min</div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">June average, up from 13 in May, as call volume jumped from ~61,000 to over 80,000.</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Source: Nebraska DHHS SNAP and economic assistance performance report, via Nebraska Examiner, July 23, 2026.
          </p>
        </div>

        {/* What we're not claiming */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">What we&apos;re not claiming</p>
          <p className="text-white/80 text-sm leading-relaxed mb-3">
            DHHS says its verification steps comply with federal rules and that summer always brings a spike in
            applications. That may well be true. We&apos;re not asserting bad intent — the point isn&apos;t to
            prove a motive, it&apos;s that real people, including two Nebraskans below, are falling through real gaps
            right now, regardless of why.
          </p>
        </div>

        {/* Real person */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-3">In a tent, under a bridge</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Malissa Lang, 37, and her husband Dillion Taylor live in a tent under a bridge in Lincoln. Lang says
            she&apos;s been without SNAP for six months. She&apos;d been receiving benefits while caring for Taylor,
            who has been mostly deaf since childhood — but the state asked for an updated diagnosis, and he&apos;s
            had a long wait for the medical documentation to get it. Lang says she was also told she needed to
            work, which she found impossible while caring for him. They now get food from pantries — and dumpsters.
          </p>
          <p className="italic text-gray-800 border-l-2 border-[#c8102e] pl-4 mt-3 text-sm">
            &ldquo;They gave me time to fix it, we just couldn&apos;t get the documentation. We&apos;re trying, and waiting.&rdquo; — Malissa Lang
          </p>
        </div>

        {/* What Lincoln already tried */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">What Lincoln already tried</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold tracking-widest text-white bg-gray-400 uppercase px-2 py-0.5 rounded-full">Stalled, 2026</span>
            </div>
            <p className="text-sm font-bold text-gray-900 mb-1">LB 843 — restoring SNAP for refugees and asylum seekers</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sen. Victor Rountree of Bellevue introduced LB 843 to have Nebraska DHHS request a USDA waiver
              restoring SNAP eligibility for legal refugees and asylum seekers cut off under the federal bill —
              more than 100 immigrant and refugee families statewide. It got a real hearing in February 2026,
              testimony forging ahead despite a snowstorm, with a dozen supporters sharing personal stories.
              &ldquo;Food is not an option,&rdquo; Rountree told the committee. &ldquo;Everyone in our state must eat.&rdquo;
              DHHS stayed formally neutral but told the committee in writing that the request likely wouldn&apos;t
              meet USDA&apos;s technical bar for a waiver. It also wasn&apos;t Rountree&apos;s prioritized bill this
              session — he prioritized a disability housing bill instead — so it never got a floor vote. The
              session ended in April 2026 with no further action.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold tracking-widest text-white bg-[#c8102e] uppercase px-2 py-0.5 rounded-full">Vetoed, 2025</span>
            </div>
            <p className="text-sm font-bold text-gray-900 mb-1">LB 319 — SNAP eligibility after old drug convictions</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Also Rountree&apos;s bill. Would have restored SNAP eligibility for Nebraskans with certain older
              drug-related felony convictions — over 1,000 people. Passed the floor 32-17. Gov. Pillen vetoed it.
              The override attempt failed 24-24, six votes short of the 30 needed, after seven Republican senators
              who&apos;d voted yes on the bill flipped to no on the override.
            </p>
          </div>
        </div>

        {/* Solutions */}
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">A fix nobody has to fight about</h2>
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-5 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">No one should go hungry over paperwork</p>
          <p className="text-white/80 text-sm leading-relaxed">
            Restoring eligibility for specific groups makes for a real fight, vote by vote. But Nebraska already
            has two proven, small, mostly non-controversial tools sitting right there — one already running, one
            the state just turned off.
          </p>
        </div>
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <p className="text-sm font-bold text-gray-900 mb-1">1. Fund up Double Up Food Bucks</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              Since 2017, this program has matched what SNAP recipients spend on fresh produce at Nebraska farmers
              markets and local grocers — over $1.9 million matched for 4,000+ families across 25+ sites in 15
              communities. It doesn&apos;t touch federal SNAP rules at all; it&apos;s state and nonprofit funded.
              It&apos;s not framed as welfare — it&apos;s local agriculture and small-grocer revenue that happens
              to fight hunger. Expanding it is an easy yes for a senator who wants to back Nebraska farmers, and
              an easy yes for one focused on nutrition access. Same program, same dollar.
            </p>
            <a href="https://doubleupnebraska.org/" target="_blank" rel="noreferrer" className="text-xs text-gray-400 hover:text-[#c8102e]">doubleupnebraska.org ↗</a>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <p className="text-sm font-bold text-gray-900 mb-1">2. Reinstate the food donation tax credit</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              In 2023, LB 727 gave grocers, restaurants, and farmers a tax credit for donating surplus food to
              food banks, set to run through 2027. In 2025, LB 650 — a broad, Pillen-backed bill closing a $71
              million state budget gap by trimming a grab-bag of unrelated tax credits — killed it three years
              early, effective for the 2026 tax year. Omaha food banks warned in December that cutting the
              incentive right as need was rising would discourage donations. It wasn&apos;t an attack on food
              banks; it was one line in a deficit bill. Restoring it through its original 2027 sunset costs
              exactly what was already budgeted for it, and rewards private charity instead of expanding
              government spending — a genuinely easy ask for either side of the aisle.
            </p>
            <a href="https://www.wowt.com/2025/12/30/omaha-food-banks-concerned-about-new-law-eliminating-donation-tax-credit/" target="_blank" rel="noreferrer" className="text-xs text-gray-400 hover:text-[#c8102e]">WOWT: food banks respond ↗</a>
          </div>
        </div>

        {/* Timing / CTA */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">Why this can&apos;t wait for the next news cycle</p>
          <p className="text-white/80 text-sm leading-relaxed mb-3">
            Every bill that didn&apos;t pass this session — including LB 843 — starts over from zero. A new
            Legislature convenes in January 2027. If a stalled bill isn&apos;t reintroduced, it&apos;s dead,
            and nobody outside the Capitol usually notices until it&apos;s too late to matter. That&apos;s the
            gap this site exists to cover.
          </p>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            It also gets more expensive to ignore: starting October 2026, states pick up a larger share of SNAP
            administrative costs, and states with higher payment-error rates start owing a cut of the benefits
            themselves. Nebraska is currently one of just nine states under the 6% error-rate line. Delay costs
            real money, on top of real hunger.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://nebraskalegislature.gov/senators/find.php" target="_blank" rel="noreferrer"
              className="inline-block bg-[#c8102e] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#a80d26] transition-colors">
              Find your senator ↗
            </a>
            <Link href="/get-involved"
              className="inline-block bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
              Get plain-English alerts when this moves
            </Link>
          </div>
        </div>

        {/* Related coverage */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-8">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Related coverage on this site</p>
          <div className="space-y-3">
            <Link href="/big-beautiful-bill" className="flex items-start gap-3 group">
              <span className="text-[#c8102e] shrink-0 mt-0.5">↗</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#c8102e] transition-colors">The One Big Beautiful Bill: What It Actually Does to Nebraska</p>
                <p className="text-xs text-gray-400">The federal SNAP and Medicaid cuts driving this decline, and who actually benefits from the tax cuts that pay for them.</p>
              </div>
            </Link>
            <Link href="/session" className="flex items-start gap-3 group">
              <span className="text-[#c8102e] shrink-0 mt-0.5">↗</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#c8102e] transition-colors">2025 Nebraska Session Recap</p>
                <p className="text-xs text-gray-400">How the state legislature handled tax incentives and budget cuts the same year it created, then gutted, the food donation credit.</p>
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
