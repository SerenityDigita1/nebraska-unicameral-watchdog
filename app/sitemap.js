export default function sitemap() {
  const base = "https://unicameralwatchdog.com";
  const pages = [
    "/",
    "/district-49",
    "/session",
    "/issues",
    "/pay-gap",
    "/two-tax-systems",
    "/interim",
    "/about",
    "/get-involved",
  ];
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
