// Build step: list photos dropped into public/stories/ so homepage cards can use them.
// Drop a file named after the page slug, e.g. public/stories/outside-money.jpg
import { readdirSync, writeFileSync, existsSync } from "node:fs";
const dir = "public/stories";
const files = existsSync(dir) ? readdirSync(dir).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f)) : [];
const map = {};
for (const f of files.sort()) {
  const slug = f.replace(/\.[^.]+$/, "");
  if (!map[slug] || /\.webp$/i.test(f)) map[slug] = `/stories/${f}`;
}
writeFileSync("data/story-images.json", JSON.stringify(map, null, 2) + "\n");
console.log(`story-images: ${Object.keys(map).length} photo(s)`);
