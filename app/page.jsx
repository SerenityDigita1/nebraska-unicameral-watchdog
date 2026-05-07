import NebraskaWatchdog from "@/components/NebraskaWatchdog";

export const metadata = {
  title: "Change My Trajectory — Nebraska Legislature Watchdog",
  description:
    "Tracking the Nebraska unicameral — translated into plain English for everyday Nebraskans.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NebraskaWatchdog />
    </main>
  );
}
