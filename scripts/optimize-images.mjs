import sharp from "sharp";
import { readFile, writeFile, stat } from "node:fs/promises";
import { join } from "node:path";

const PUBLIC = join(process.cwd(), "public");

const jobs = [
  { src: "back.png", out: "back.webp", quality: 75, width: 1920 },
  { src: "bg.png", out: "bg.webp", quality: 75, width: 1920 },
  { src: "flower.png", out: "flower.webp", quality: 75, width: 1920 },
  { src: "steps.png", out: "steps.webp", quality: 75, width: 1920 },
  { src: "hero.webp", out: "hero.webp", quality: 80, width: 1920 },
  { src: "product1.png", out: "product1.webp", quality: 85, width: 1200 },
  { src: "product2.png", out: "product2.webp", quality: 85, width: 1200 },
  { src: "product3.png", out: "product3.webp", quality: 85, width: 1200 },
  { src: "product4.png", out: "product4.webp", quality: 85, width: 1200 },
  { src: "product5.png", out: "product5.webp", quality: 85, width: 1200 },
];

for (const job of jobs) {
  const srcPath = join(PUBLIC, job.src);
  const outPath = join(PUBLIC, job.out);
  try {
    const before = (await stat(srcPath)).size;
    let pipeline = sharp(srcPath, { failOn: "none" }).rotate();
    const meta = await pipeline.metadata();
    const shouldResize = !job.width || (meta.width && meta.width > job.width);
    if (shouldResize) {
      pipeline = pipeline.resize({ width: job.width, withoutEnlargement: true });
    }
    const data = await pipeline
      .webp({ quality: job.quality, effort: 6 })
      .toBuffer();
    await writeFile(outPath, data);
    const after = data.length;
    console.log(
      `${job.src} (${(before / 1024).toFixed(0)}KB) -> ${job.out} (${(after / 1024).toFixed(0)}KB)  ${((1 - after / before) * 100).toFixed(0)}% smaller`
    );
  } catch (err) {
    console.error(`FAILED ${job.src}:`, err.message);
  }
}