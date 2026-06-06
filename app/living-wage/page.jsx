import LivingWageClient from "./LivingWageClient";

export const metadata = {
  title: "Nebraska Living Wage — Sarpy County 2026",
  description:
    "What does it cost to live in Sarpy County? MIT data shows a single parent needs $82,701/yr minimum. See how Union Pacific, Werner, Berkshire, and other major employers compare.",
};

export default function LivingWage() {
  return <LivingWageClient />;
}
