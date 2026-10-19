import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");

test("landing page defines eleven distinct content sections", () => {
  const expectedIds = [
    "accueil",
    "pack",
    "produits",
    "cadeaux",
    "selection",
    "routine",
    "offre",
    "commande",
    "confiance",
    "cta",
    "pied-de-page",
  ];

  for (const id of expectedIds) {
    assert.match(page, new RegExp(`id=[\"']${id}[\"']`), `missing section: ${id}`);
  }
});

test("root layout restores document structure and search metadata", () => {
  assert.match(layout, /export const metadata\s*:/);
  assert.match(layout, /<html\s+lang=[\"']fr[\"']/);
  assert.match(layout, /<body>/);
  assert.match(layout, /\{children\}/);
});

