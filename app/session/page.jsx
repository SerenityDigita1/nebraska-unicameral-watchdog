import NebraskaWatchdog from "@/components/NebraskaWatchdog";

export const metadata = {
  title: "Nebraska Legislature Session Recaps 2025-2026",
  description:
    "Plain-English recaps of Nebraska's 2025 and 2026 unicameral sessions. Bills signed, vetoed, and what they mean for working Nebraskans in Sarpy County.",
};

export default function Session() {
  return <NebraskaWatchdog defaultTab="session" />;
}
