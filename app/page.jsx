import Link from "next/link";
import NebraskaWatchdog from "@/components/NebraskaWatchdog";

export const metadata = {
  title: {
    absolute: "Nebraska Unicameral Watchdog — Plain English Legislature Tracking",
  },
  description:
    "Bills, vetoes, and campaign money from Nebraska's unicameral legislature, translated into plain English for Sarpy County and Omaha residents.",
};

export default function Home() {
  return (
    <>
      <NebraskaWatchdog />

      {/* Key Issues Section */}
      <section className="bg-[#f4f5f7]">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-8">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Key Issues</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">What We're Watching</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/outside-money" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-[#c8102e]/30 transition-all">
              <span className="text-xs font-bold tracking-widest text-[#c8102e] uppercase">2026 Senate Race</span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">Outside Money in Nebraska Politics</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                How $28.9M in outside money shaped political decisions and what the record actually shows.
              </p>
            </Link>

            <Link href="/tariff-action" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-[#c8102e]/30 transition-all">
              <span className="text-xs font-bold tracking-widest text-[#c8102e] uppercase">Economic Impact</span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">Tariffs Are Costing Nebraska Families</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                $1,700+ per year. Who's fighting back, and what bill is on the table to help.
              </p>
            </Link>

            <Link href="/living-wage" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-[#c8102e]/30 transition-all">
              <span className="text-xs font-bold tracking-widest text-[#c8102e] uppercase">Workers & Economy</span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">What Does It Take to Live in Nebraska?</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Housing, food, childcare, transportation. The real cost of living here.
              </p>
            </Link>

            <Link href="/issues" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-[#c8102e]/30 transition-all">
              <span className="text-xs font-bold tracking-widest text-[#c8102e] uppercase">All Issues</span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">See All Key Topics</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Data centers, medicaid, campaign finance, and everything we're tracking.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
