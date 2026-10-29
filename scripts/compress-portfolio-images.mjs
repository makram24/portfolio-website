import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = "public/images/portfolio";
const MAX_W = 1600;
const QUALITY = 78;
const isImage = (f) => /\.(png|jpe?g|webp|gif)$/i.test(f);

async function processDir(dir) {
  const files = fs
    .readdirSync(dir)
    .filter(isImage)
    .sort((a, b) => {
      const na = parseInt(a, 10);
      const nb = parseInt(b, 10);
      if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
      return a.localeCompare(b);
    });

  const buffers = [];
  for (const file of files) {
    const src = path.join(dir, file);
    const buf = await sharp(src)
      .rotate()
      .resize({ width: MAX_W, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer();
    buffers.push(buf);
  }

  for (const file of files) {
    fs.unlinkSync(path.join(dir, file));
  }

  buffers.forEach((buf, i) => {
    fs.writeFileSync(path.join(dir, `${i}.jpg`), buf);
  });

  return buffers.length;
}

const folders = fs.readdirSync(ROOT).filter((name) =>
  fs.statSync(path.join(ROOT, name)).isDirectory(),
);

let total = 0;
for (const folder of folders) {
  const count = await processDir(path.join(ROOT, folder));
  total += count;
  console.log(`${folder}: ${count} images`);
}

const manifest = {};
for (const folder of folders) {
  const dir = path.join(ROOT, folder);
  const gallery = fs
    .readdirSync(dir)
    .filter(isImage)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
    .map((f) => `/images/portfolio/${folder}/${f}`);
  manifest[folder] = {
    folder,
    slug: folder,
    cover: gallery[0] ?? null,
    gallery,
  };
}

fs.writeFileSync(
  "scripts/portfolio-manifest.json",
  JSON.stringify(manifest, null, 2),
);

const mb =
  folders
    .flatMap((folder) =>
      fs
        .readdirSync(path.join(ROOT, folder))
        .map((f) => fs.statSync(path.join(ROOT, folder, f)).size),
    )
    .reduce((a, b) => a + b, 0) / (1024 * 1024);

console.log(`Done: ${total} images, ${mb.toFixed(1)} MB`);
