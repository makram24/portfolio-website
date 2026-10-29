import fs from "fs";
import path from "path";

const SRC = "C:/Users/UserPc/Desktop/mak/mak-extract";
const DEST = "public/images/portfolio";

const slugify = (name) =>
  name
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const extOf = (file) => path.extname(file).toLowerCase();
const isImage = (file) =>
  [".png", ".jpg", ".jpeg", ".webp", ".gif"].includes(extOf(file));

/** Prefer cover named 0.*, then screencaptures, then screenshots. */
const sortFiles = (files) =>
  [...files].sort((a, b) => {
    const score = (f) => {
      const n = f.toLowerCase();
      if (/^0\./.test(n)) return 0;
      if (n.startsWith("screencapture-")) return 1;
      if (n.startsWith("screenshot")) return 2;
      return 3;
    };
    return score(a) - score(b) || a.localeCompare(b);
  });

fs.mkdirSync(DEST, { recursive: true });
const manifest = {};

for (const folder of fs.readdirSync(SRC)) {
  const srcDir = path.join(SRC, folder);
  if (!fs.statSync(srcDir).isDirectory()) continue;

  const slug = slugify(folder);
  const destDir = path.join(DEST, slug);
  fs.mkdirSync(destDir, { recursive: true });

  const files = sortFiles(
    fs.readdirSync(srcDir).filter((f) => isImage(path.join(srcDir, f))),
  );

  const gallery = [];
  files.forEach((file, i) => {
    const ext = extOf(file) === ".jpeg" ? ".jpg" : extOf(file);
    const outName = `${i}${ext}`;
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, outName));
    gallery.push(`/images/portfolio/${slug}/${outName}`);
  });

  manifest[slug] = {
    folder,
    slug,
    cover: gallery[0] ?? null,
    gallery,
  };
}

fs.writeFileSync(
  "scripts/portfolio-manifest.json",
  JSON.stringify(manifest, null, 2),
);
console.log(`Imported ${Object.keys(manifest).length} projects`);
console.log(Object.keys(manifest).sort().join(", "));
