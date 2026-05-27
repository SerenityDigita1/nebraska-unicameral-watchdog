import Link from "next/link";

export const metadata = { title: "Pay vs. Power · NE Watchdog" };

const COMPANIES = [
  {
    name: "Union Pacific",
    ticker: "NYSE: UNP",
    type: "public",
    headquartered: "Omaha, NE",
    ceo: "V. James Vena",
    ceoPayYear: "2024",
    ceoPay: 17644763,
    ceoPayFormatted: "$17,644,763",
    medianPay: 103190,
    medianPayFormatted: "$103,190",
    ratio: 131,
    donation: "$237,587",
    donationNote: "donated to Nebraska politics, 2024 cycle",
    proxyUrl: "https://www.sec.gov/Archives/edgar/data/0000100885/000114036124015351/ny20011215x1_def14a.htm",
    aflcioUrl: "https://aflcio.org/paywatch/UNP",
    color: "#c8102e",
  },
  {
    name: "Werner Enterprises",
    ticker: "NASDAQ: WERN",
    type: "public",
    headquartered: "Omaha, NE",
    ceo: "Derek J. Leathers",
    ceoPayYear: "2024",
    ceoPay: 5824493,
    ceoPayFormatted: "$5,824,493",
    medianPay: 58260,
    medianPayFormatted: "$58,260",
    ratio: 100,
    donation: "$769,416",
    donationNote: "donated to Nebraska politics, 2024 cycle",
    proxyUrl: "https://www.sec.gov/Archives/edgar/data/793074/000079307426000083/wern-20260331.htm",
    aflcioUrl: "https://aflcio.org/paywatch/WERN",
    color: "#1d4ed8",
  },
  {
    name: "Green Plains",
    ticker: "NASDAQ: GPRE",
    type: "public",
    headquartered: "Omaha, NE",
    ceo: "Todd Becker",
    ceoPayYear: "2024",
    ceoPay: 5988846,
    ceoPayFormatted: "$5,988,846",
    medianPay: 106136,
    medianPayFormatted: "$106,136",
    ratio: 57,
    donation: "$121,052",
    donationNote: "donated to Nebraska politics, 2024 cycle",
    proxyUrl: "https://www.sec.gov/Archives/edgar/data/0001309402/000130940225000074/gpre-20250424.htm",
    aflcioUrl: "https://aflcio.org/paywatch/GPRE",
    color: "#059669",
  },
  {
    name: "Kiewit Corp",
    ticker: "Private",
    type: "private",
    headquartered: "Omaha, NE",
    ceo: "Rick Lanoha",
    ceoPay: null,
    medianPay: null,
    ratio: null,
    donation: "$348,822",
    donationNote: "donated to Nebraska politics, 2024 cycle",
    proxyUrl: null,
    aflcioUrl: null,
    color: "#6b7280",
  },
  {
    name: "HDR Inc",
    ticker: "Private",
    type: "private",
    headquartered: "Omaha, NE",
    ceo: "John Henderson",
    ceoPay: null,
    medianPay: null,
    ratio: null,
    donation: "$429,329",
    donationNote: "donated to Nebraska politics, 2024 cycle",
    proxyUrl: null,
    aflcioUrl: null,
    color: "#6b7280",
  },
];

function PayBar({ label, amount, formatted, maxAmount, color, isWorker }) {
  const pct = Math.max((amount / maxAmount) * 100, isWorker ? 0.5 : 2);
  return (
    <div className="mb-2">
      <div className="flex items-center justify-between mb-1">
        <span className={`text-xs font-medium ${isWorker ? "text-gray-500" : "text-gray-800"}`}>{label}</span>
        <span className={`text-xs font-bold ${isWorker ? "text-gray-500" : "text-gray-900"}`}>{formatted}</span>
      </div>
      <div className="h-5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, backgroundColor: isWorker ? "#d1d5db" : color, minWidth: "4px" }}
        />
      </div>
    </div>
  );
}

export default function PayGap() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Corporate Influence</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">Pay vs. Power</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            These Omaha-area companies donated hundreds of thousands of dollars to Nebraska politics
            in 2024 — the same cycle the legislature gutted paid sick leave for 140,000 workers.
            Here's what their CEOs make compared to their median employee.
          </p>
        </div>

        {/* Lede callout */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">The connection</p>
          <p className="text-white font-semibold text-base leading-snug mb-3">
            Public companies are legally required to disclose CEO-to-worker pay ratios every year.
            Most people don't know this data exists. It's filed with the SEC and it's public record.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            The same companies that fund Nebraska legislative campaigns — helping elect senators who
            vote against minimum wage increases, paid sick leave, and worker protections — are
            required by the Dodd-Frank Act to publish exactly how much more their CEO makes than
            their median employee. Below is that data, sourced directly from their SEC proxy filings.
          </p>
        </div>

        {/* Company cards */}
        <div className="space-y-5 mb-10">
          {COMPANIES.map((co) => (
            <div key={co.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-1 w-full" style={{ backgroundColor: co.color }} />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h2 className="text-lg font-bold text-gray-900">{co.name}</h2>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        co.type === "public"
                          ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                          : "bg-gray-100 text-gray-500 ring-1 ring-gray-200"
                      }`}>
                        {co.ticker}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{co.headquartered} · CEO: {co.ceo}</p>
                  </div>
                  <div className="text-right">
                    {co.ratio ? (
                      <>
                        <div className="text-3xl font-bold text-[#c8102e]">{co.ratio}:1</div>
                        <div className="text-[10px] text-gray-400">CEO-to-worker ratio</div>
                      </>
                    ) : (
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-400">Not disclosed</div>
                        <div className="text-[10px] text-gray-400">Private company</div>
                      </div>
                    )}
                  </div>
                </div>

                {co.type === "public" && co.ceoPay && (
                  <div className="mb-4">
                    <PayBar
                      label={`CEO (${co.ceo}) — ${co.ceoPayYear}`}
                      amount={co.ceoPay}
                      formatted={co.ceoPayFormatted}
                      maxAmount={co.ceoPay}
                      color={co.color}
                      isWorker={false}
                    />
                    <PayBar
                      label="Median employee"
                      amount={co.medianPay}
                      formatted={co.medianPayFormatted}
                      maxAmount={co.ceoPay}
                      color={co.color}
                      isWorker={true}
                    />
                    <p className="text-xs text-gray-400 mt-2">
                      For every $1 the median {co.name} employee earns, the CEO earns ${co.ratio}.
                    </p>
                  </div>
                )}

                {co.type === "private" && (
                  <div className="bg-gray-50 rounded-xl p-3.5 mb-4">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      As a privately held company, {co.name} is not required to disclose executive
                      compensation or CEO pay ratios. Transparency into pay practices at this company
                      is limited to what they choose to share voluntarily.
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between flex-wrap gap-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Nebraska political donations (2024):</span>
                    <span className="text-sm font-bold text-gray-900">{co.donation}</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {co.proxyUrl && (
                      <a href={co.proxyUrl} target="_blank" rel="noreferrer"
                        className="text-xs font-medium text-[#c8102e] hover:underline">
                        SEC proxy filing ↗
                      </a>
                    )}
                    {co.aflcioUrl && (
                      <a href={co.aflcioUrl} target="_blank" rel="noreferrer"
                        className="text-xs font-medium text-gray-500 hover:text-[#c8102e] transition-colors">
                        AFL-CIO Paywatch ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to read this data yourself */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-3">How to look this up yourself</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              Every public company in the US is required by the Dodd-Frank Wall Street Reform Act
              to disclose the ratio of CEO pay to median employee pay in their annual proxy statement
              (Form DEF 14A), filed with the SEC.
            </p>
            <p>
              To find it for any public company:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-600 ml-2">
              <li>Go to <a href="https://efts.sec.gov/LATEST/search-index?q=%22pay+ratio%22&dateRange=custom&startdt=2024-01-01&forms=DEF+14A" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline font-medium">SEC EDGAR full-text search ↗</a></li>
              <li>Search the company name + "DEF 14A"</li>
              <li>Search within the filing for "pay ratio" or "median annual total compensation"</li>
            </ol>
            <p>
              The <a href="https://aflcio.org/paywatch" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline font-medium">AFL-CIO Executive Paywatch database ↗</a> aggregates
              this data and makes it searchable by company ticker.
            </p>
          </div>
        </div>

        {/* Sources */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Sources</p>
          <div className="space-y-2">
            {[
              { label: "Werner Enterprises 2026 Proxy (SEC)", url: "https://www.sec.gov/Archives/edgar/data/793074/000079307426000083/wern-20260331.htm" },
              { label: "Werner Enterprises 2025 Proxy (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0000793074/000079307425000016/wern-20250326.htm" },
              { label: "Union Pacific 2024 Proxy (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0000100885/000114036124015351/ny20011215x1_def14a.htm" },
              { label: "Union Pacific 2025 Proxy (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0000100885/000114036125010237/ny20039220x771_def14a.htm" },
              { label: "Green Plains 2025 Proxy (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0001309402/000130940225000074/gpre-20250424.htm" },
              { label: "AFL-CIO Executive Paywatch — Werner (WERN)", url: "https://aflcio.org/paywatch/WERN" },
              { label: "AFL-CIO Executive Paywatch — Union Pacific (UNP)", url: "https://aflcio.org/paywatch/UNP" },
              { label: "AFL-CIO Executive Paywatch — Green Plains (GPRE)", url: "https://aflcio.org/paywatch/GPRE" },
              { label: "Dodd-Frank CEO Pay Ratio Disclosure Rule (SEC)", url: "https://www.sec.gov/rules/final/2015/33-9877.pdf" },
            ].map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#c8102e] transition-colors group">
                <span className="text-gray-300 group-hover:text-[#c8102e]">↗</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          Campaign finance data sourced from{" "}
          <a href="https://www.opensecrets.org/states/NE/donors/2024" target="_blank" rel="noreferrer" className="hover:underline">OpenSecrets — Nebraska 2024 cycle</a>.
          CEO pay data sourced from SEC DEF 14A proxy filings.{" "}
          <Link href="/" className="hover:underline">See full donor list ↗</Link>
        </p>

      </div>
    </div>
  );
}
