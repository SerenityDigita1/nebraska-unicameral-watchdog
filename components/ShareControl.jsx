"use client";

import { useEffect, useRef, useState } from "react";

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

export default function ShareControl({
  className = "",
  showSave = true,
  compact = false,
  menu = false,
  shareUrl = SHARE_URL,
  shareText = SHARE_TEXT,
  shareTitle = SHARE_TITLE,
  shareImage = SHARE_IMAGE,
  downloadName = "watchdog-lb34-coupon-isnt-a-cut.png",
}) {
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    function onPointer(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) setOpen(false);
    }
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function share() {
    const payload = { title: shareTitle, text: shareText, url: shareUrl };
    const line = `${shareText}\n${shareUrl}`;
    const mobile =
      window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    try {
      if (mobile && typeof navigator.share === "function") {
        await navigator.share(payload);
        setStatus("Shared");
      } else {
        await copyText(line);
        setStatus("Link copied");
      }
    } catch (err) {
      if (err?.name === "AbortError") return;
      try {
        await copyText(line);
        setStatus("Link copied");
      } catch {
        setStatus("Couldn’t share");
      }
    }
    window.setTimeout(() => setStatus(""), 3000);
  }

  async function saveImage() {
    try {
      const res = await fetch(shareImage);
      if (!res.ok) throw new Error("image");
      const blob = await res.blob();
      const href = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = href;
      a.download = downloadName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(href);
      setStatus("Saved image");
    } catch {
      setStatus("Couldn’t save");
    }
    window.setTimeout(() => setStatus(""), 3000);
  }

  if (menu) {
    return (
      <div className={`relative inline-flex items-center gap-2 ${className}`} ref={menuRef}>
        <button
          type="button"
          aria-label="Share or save"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="text-xs font-semibold px-2 py-1 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
        >
          ···
        </button>
        {open && (
          <div
            role="menu"
            className="absolute right-0 top-full z-30 mt-1 min-w-[9.5rem] rounded-xl border border-gray-200 bg-white py-1 shadow-lg"
          >
            <button
              type="button"
              role="menuitem"
              onClick={() => {
                setOpen(false);
                share();
              }}
              className="block w-full px-3 py-2 text-left text-xs font-semibold text-gray-800 hover:bg-gray-50"
            >
              Share
            </button>
            {showSave && (
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  setOpen(false);
                  saveImage();
                }}
                className="block w-full px-3 py-2 text-left text-xs font-semibold text-gray-800 hover:bg-gray-50"
              >
                Save image
              </button>
            )}
          </div>
        )}
        <span className="text-xs font-medium text-[#c8102e]" aria-live="polite">
          {status}
        </span>
      </div>
    );
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
      <span className="text-xs font-medium text-[#c8102e]" aria-live="polite">
        {status}
      </span>
    </div>
  );
}
