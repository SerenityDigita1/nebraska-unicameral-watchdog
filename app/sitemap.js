export default function sitemap() {
  const base = "https://unicameralwatchdog.com";
  const pages = [
    "/",
    "/district-49",
    "/session",
    "/issues",
    "/ask-your-neighbor",
    "/big-beautiful-bill",
    "/data-centers",
    "/living-wage",
    "/pay-gap",
    "/what-they-stopped-watching",
    "/property-tax-coupon",
    "/two-tax-systems",
    "/interim",
    "/tariff-action",
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
