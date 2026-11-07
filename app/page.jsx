import NebraskaWatchdog from "@/components/NebraskaWatchdog";

export const metadata = {
  title: {
    absolute: "Nebraska Unicameral Watchdog — Ads vs the Unicameral Record",
  },
  description:
    "Nov. 3, 2026: unofficial ballot-measure results, what the ads say vs the Unicameral record, and the 2025 session recap — in plain English.",
};

export default function Home() {
  return <NebraskaWatchdog defaultTab="home" />;
}
