import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const styles = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

test("mobile hero maps the two portrait campaign images by language and retains desktop banners", () => {
  assert.match(page, /import banner1Mobile from "\.\/banner1_mobile\.png"/);
  assert.match(page, /import banner2Mobile from "\.\/banner2_mobile\.png"/);
  assert.match(page, /src=\{isArabic \? bannerAr : bannerFr\}/);
  assert.match(page, /media="\(max-width: 767px\)"/);
  assert.match(page, /isArabic \? banner2Mobile : banner1Mobile/);
});

test("mobile hero reserves the portrait ratio and shows the full image without cropping", () => {
  assert.match(styles, /aspect-ratio:\s*var\(--hero-mobile-ratio\)/);
  assert.match(styles, /object-fit:\s*contain(?:\s*!important)?/);
});
