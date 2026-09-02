"use client";

import { useState } from "react";

export const SHARE_URL = "https://unicameralwatchdog.com/property-tax-coupon";
export const SHARE_TEXT =
  "He says he cut property taxes. The Legislature passed a coupon. The levy went back up.";
export const SHARE_TITLE = "If You Just Saw the Property-Tax Ad — The Coupon Isn’t a Cut";
export const SHARE_IMAGE = "/property-tax-coupon/opengraph-image";

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const area = document.createElement("textarea");
  area.value = value;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
}

export default function ShareControl({ className = "", showSave = true, compact = false }) {
  const [status, setStatus] = useState("");

  async function share() {
    const payload = { title: SHARE_TITLE, text: SHARE_TEXT, url: SHARE_URL };
    try {
      if (typeof navigator.share === "function") {
        await navigator.share(payload);
        setStatus("Shared");
      } else {
        await copyText(`${SHARE_TEXT}\n${SHARE_URL}`);
        setStatus("Link copied");
      }
    } catch (err) {
      if (err?.name === "AbortError") return;
      try {
        await copyText(`${SHARE_TEXT}\n${SHARE_URL}`);
        setStatus("Link copied");
      } catch {
        setStatus("Couldn’t share");
      }
    }
    window.setTimeout(() => setStatus(""), 2000);
  }

  async function saveImage() {
    try {
      const res = await fetch(SHARE_IMAGE);
      if (!res.ok) throw new Error("image");
      const blob = await res.blob();
      const href = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = href;
      a.download = "watchdog-lb34-coupon-isnt-a-cut.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(href);
      setStatus("Saved image");
    } catch {
      setStatus("Couldn’t save");
    }
    window.setTimeout(() => setStatus(""), 2000);
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={share}
        className={`font-semibold rounded-lg border transition-colors ${
          compact
            ? "text-xs px-2.5 py-1 text-[#c8102e] border-[#c8102e]/20 hover:bg-red-50"
            : "text-xs px-3 py-1.5 text-white bg-[#c8102e] border-[#c8102e] hover:bg-[#a50d26]"
        }`}
      >
        Share
      </button>
      {showSave && (
        <button
          type="button"
          onClick={saveImage}
          className={`font-semibold rounded-lg border transition-colors ${
            compact
              ? "text-xs px-2.5 py-1 text-gray-600 border-gray-200 hover:bg-gray-50"
              : "text-xs px-3 py-1.5 text-gray-700 bg-white border-gray-200 hover:bg-gray-50"
          }`}
        >
          Save image
        </button>
      )}
      <span className="text-[11px] text-gray-400" aria-live="polite">
        {status}
      </span>
    </div>
  );
}
