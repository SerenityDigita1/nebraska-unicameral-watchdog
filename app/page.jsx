import NebraskaWatchdog from "@/components/NebraskaWatchdog";
import TariffActionBanner from "@/components/TariffActionBanner";

export const metadata = {
  title: "Nebraska Unicameral Watchdog — Plain English Legislature Tracking",
  description:
    "Bills, vetoes, and campaign money from Nebraska's unicameral legislature, translated into plain English for Sarpy County and Omaha residents.",
};

export default function Home() {
  return (
    <>
      <TariffActionBanner />
      <NebraskaWatchdog />
    </>
  );
}
