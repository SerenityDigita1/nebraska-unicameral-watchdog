"use client";
import { useState } from "react";

export default function GetInvolved() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubscribe(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Take action</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">Get Involved</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            The best watchdog is an informed one. Here's how to stay connected and make your voice heard.
          </p>
        </div>

        {/* Newsletter */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-5">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-2">Newsletter</p>
          <h2 className="text-white font-bold text-lg mb-1">Get the Watchdog newsletter</h2>
          <p className="text-white/50 text-sm mb-4 leading-relaxed">
            When the 110th session kicks off in January 2027, you'll get plain-English updates
            on what's happening in Lincoln — before it affects you.
          </p>
          {status === "success" ? (
            <div className="bg-white/10 rounded-xl px-4 py-3 border border-white/10">
              <p className="text-white text-sm font-medium">You're on the list. We'll be in touch before January 2027.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-5 py-2.5 bg-[#c8102e] text-white text-sm font-semibold rounded-xl hover:bg-[#a50d26] disabled:opacity-50 transition-colors shrink-0"
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          )}
          {status === "error" && <p className="text-red-400 text-xs mt-2">Something went wrong — try again.</p>}
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-2">Contact</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            Have a tip? Spotted something wrong? Want to share what's happening in your neighborhood?
          </p>
          <span className="inline-block text-[10px] font-bold tracking-widest text-amber-600 uppercase bg-amber-50 px-2.5 py-1 rounded-full ring-1 ring-amber-200">Contact form coming soon</span>
        </div>

        {/* Contact your senator */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-2">Contact Sen. Andersen directly</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            Your senator works for you. The Nebraska Legislature makes it easy to reach them directly.
          </p>
          <a
            href="https://nebraskalegislature.gov/senators/senator_search.php"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-[#c8102e] hover:underline"
          >
            Find contact info on nebraskalegislature.gov ↗
          </a>
        </div>
      </div>
    </div>
  );
}
