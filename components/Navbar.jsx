"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOPIC_GROUPS } from "@/data/topics";

const NAV_LINKS = [
  { href: "/",            label: "Home" },
  { href: "/district-49", label: "District 49" },
  { href: "/session",     label: "Session Recaps" },
  {
    label: "Key Issues",
    groups: TOPIC_GROUPS,
  },
  {
    label: "Get Involved",
    children: [
      { href: "/get-involved", label: "Get Involved" },
      { href: "/about",        label: "About" },
    ],
  },
];

function linksIn(link) {
  if (link.groups) return link.groups.flatMap((group) => group.links);
  return link.children || [];
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const pathname = usePathname();

  function isGroupActive(link) {
    return linksIn(link).some((item) => pathname === item.href);
  }

  return (
    <nav className="bg-[#0a0e1a] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <div className="w-7 h-7 rounded-lg bg-[#c8102e] flex items-center justify-center text-white text-xs font-bold">49</div>
          <span className="text-white font-bold text-sm tracking-tight">NE Watchdog</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.children || link.groups ? (
              <div key={link.label} className="relative group">
                <button type="button" className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
                  isGroupActive(link) ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"
                }`}>
                  {link.label}
                  <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`absolute top-full z-50 pt-1 hidden group-hover:block group-focus-within:block ${
                  link.groups ? "right-0" : "left-0"
                }`}>
                  <div className={link.groups
                    ? "w-[min(40rem,calc(100vw-2rem))] bg-[#0a0e1a] border border-white/10 rounded-xl shadow-xl p-4 grid grid-cols-2 gap-x-6 gap-y-4"
                    : "w-48 bg-[#0a0e1a] border border-white/10 rounded-xl shadow-xl"
                  }>
                    {link.groups ? (
                      link.groups.map((group) => (
                        <div key={group.id}>
                          <p className="px-2 pb-1 text-[10px] font-bold tracking-widest text-[#c8102e] uppercase">
                            {group.label}
                          </p>
                          {group.links.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-2 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                                pathname === child.href
                                  ? "text-white bg-white/10"
                                  : "text-white/50 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ))
                    ) : (
                      link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-xs font-medium transition-colors first:rounded-t-xl last:rounded-b-xl ${
                            pathname === child.href
                              ? "text-white bg-white/10"
                              : "text-white/50 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/60 hover:text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0e1a]">
          {NAV_LINKS.map((link) =>
            link.children || link.groups ? (
              <div key={link.label}>
                <button
                  type="button"
                  onClick={() => setExpandedMobile(expandedMobile === link.label ? null : link.label)}
                  className={`w-full flex items-center justify-between px-6 py-3 text-sm font-medium border-b border-white/5 transition-colors ${
                    isGroupActive(link) ? "text-white bg-white/5" : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${expandedMobile === link.label ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedMobile === link.label && (
                  <div className="bg-white/5">
                    {link.groups ? (
                      link.groups.map((group) => (
                        <div key={group.id} className="border-b border-white/5">
                          <p className="pl-10 pr-6 pt-3 pb-1 text-[10px] font-bold tracking-widest text-[#c8102e] uppercase">
                            {group.label}
                          </p>
                          {group.links.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => { setOpen(false); setExpandedMobile(null); }}
                              className={`block pl-10 pr-6 py-2.5 text-sm transition-colors ${
                                pathname === child.href ? "text-white font-medium" : "text-white/40 hover:text-white"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ))
                    ) : (
                      link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => { setOpen(false); setExpandedMobile(null); }}
                          className={`block pl-10 pr-6 py-2.5 text-sm border-b border-white/5 transition-colors ${
                            pathname === child.href ? "text-white font-medium" : "text-white/40 hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-sm font-medium border-b border-white/5 transition-colors ${
                  pathname === link.href ? "text-white bg-white/5" : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
