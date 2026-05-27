import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nebraska Unicameral Watchdog",
  description: "Tracking the Nebraska legislature — translated into plain English for everyday Nebraskans.",
  metadataBase: new URL("https://unicameralwatchdog.com"),
  openGraph: {
    siteName: "Nebraska Unicameral Watchdog",
    title: "Nebraska Unicameral Watchdog",
    description: "Bills, vetoes, and campaign money from Nebraska's unicameral legislature — translated into plain English for Sarpy County and Omaha residents.",
    url: "https://unicameralwatchdog.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nebraska Unicameral Watchdog",
    description: "Bills, vetoes, and campaign money from Nebraska's unicameral legislature — translated into plain English.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
