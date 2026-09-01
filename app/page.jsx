import NebraskaWatchdog from "@/components/NebraskaWatchdog";

export const metadata = {
  title: {
    absolute: "Nebraska Unicameral Watchdog — Ads vs the Unicameral Record",
  },
  description:
    "Nov. 3, 2026: what the ads say vs what the Unicameral passed. Property-tax credits, the 2025 session recap, and the 110th Legislature in January 2027 — in plain English.",
};

export default function Home() {
  return <NebraskaWatchdog defaultTab="home" />;
}
