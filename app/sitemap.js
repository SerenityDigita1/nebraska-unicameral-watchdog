import fs from "node:fs";
import path from "node:path";

/**
 * Sitemap, derived from the filesystem rather than a hand-kept list.
 *
 * WHY: the list was maintained by hand and drifted. On 2026-09-22 four live
 * pages were missing from it - /530a-accounts, /outside-money, /shock-gloves
 * and /snap-nebraska - so Google had no route to them. Two of those were also
 * unlinked from the homepage, which made them invisible to everyone.
 *
 * Any directory under app/ holding a page file is a route, so a new story is
 * in the sitemap the moment it exists. Route groups "(name)", dynamic
 * segments "[slug]" and private folders "_name" are skipped, as are API routes.
 */
export default function sitemap() {
  const base = "https://unicameralwatchdog.com";
  const appDir = path.join(process.cwd(), "app");

  const routes = ["/"];
  for (const entry of fs.readdirSync(appDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    if (name === "api" || name.startsWith("_") || name.startsWith("(") || name.startsWith("[")) continue;
    const hasPage = ["page.jsx", "page.js", "page.tsx", "page.ts"].some((f) =>
      fs.existsSync(path.join(appDir, name, f))
    );
    if (hasPage) routes.push(`/${name}`);
  }

  // Utility pages rank below the reporting.
  const low = new Set(["/about", "/get-involved"]);

  return routes.sort().map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : low.has(route) ? 0.5 : 0.8,
  }));
}
