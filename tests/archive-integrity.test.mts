import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import * as data from "../src/lib/data.ts";

const {
  CULTURE_CATS,
  CULTURE_ITEMS,
  DOCS,
  DOC_TYPES,
  ERAS,
  EXHIBITIONS,
  PEOPLE,
  PLACES,
  TIMELINE,
  getDoc,
  getLinksForCultureItem,
  getPerson,
} = data;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "..", "public");

test("DOCS covers all 5 document types and all 4 historical eras with >= 36 primary records", () => {
  assert.ok(
    DOCS.length >= 36,
    `Expected at least 36 verified primary archival documents, found ${DOCS.length}`,
  );

  const slugs = new Set<string>();
  const catalogNos = new Set<string>();
  for (const d of DOCS) {
    assert.ok(!slugs.has(d.slug), `Duplicate doc slug: ${d.slug}`);
    assert.ok(!catalogNos.has(d.catalogNo), `Duplicate catalogNo: ${d.catalogNo}`);
    slugs.add(d.slug);
    catalogNos.add(d.catalogNo);
  }

  for (const dt of DOC_TYPES) {
    const count = DOCS.filter((d) => d.type === dt.id).length;
    assert.ok(count >= 5, `Expected >= 5 documents for type '${dt.id}', found ${count}`);
  }

  for (const era of ERAS) {
    const count = DOCS.filter((d) => d.era === era.id).length;
    assert.ok(count >= 6, `Expected >= 6 documents for era '${era.id}', found ${count}`);
  }
});

test("Every ArchiveDoc has real external provenance URL and a valid downloaded image in /images/archive/", () => {
  for (const d of DOCS as Array<data.ArchiveDoc & { sourceUrl?: string }>) {
    assert.ok(
      typeof d.sourceUrl === "string" && /^https:\/\/.+/.test(d.sourceUrl),
      `Doc '${d.slug}' is missing a valid https:// sourceUrl`,
    );
    assert.ok(
      d.image.startsWith("/images/archive/"),
      `Doc '${d.slug}' must use a verified archival image under /images/archive/, got '${d.image}'`,
    );
    const fullImgPath = path.join(PUBLIC_DIR, d.image.replace(/^\//, ""));
    assert.ok(fs.existsSync(fullImgPath), `Missing image file on disk for '${d.slug}': ${fullImgPath}`);
    const stat = fs.statSync(fullImgPath);
    assert.ok(stat.size >= 5_000, `Image file too small (${stat.size}B) for '${d.slug}'`);
  }
});

test("Category and exhibition counts match actual catalog records (no inflated placeholder numbers)", () => {
  for (const dt of DOC_TYPES) {
    const actual = DOCS.filter((d) => d.type === dt.id).length;
    const match = dt.count.replace(/\./g, "").match(/\d+/);
    assert.ok(match, `DOC_TYPES '${dt.id}' count '${dt.count}' has no number`);
    assert.equal(
      Number(match[0]),
      actual,
      `DOC_TYPES '${dt.id}' says '${dt.count}' but DOCS has ${actual}`,
    );
  }

  for (const cat of CULTURE_CATS) {
    const actual = CULTURE_ITEMS.filter((i) => i.cat === cat.id).length;
    assert.equal(
      cat.count,
      actual,
      `CULTURE_CATS '${cat.id}' count (${cat.count}) != actual items (${actual})`,
    );
  }

  for (const ex of EXHIBITIONS) {
    assert.equal(
      ex.count,
      ex.docs.length,
      `Exhibition '${ex.slug}' count (${ex.count}) != linked docs (${ex.docs.length})`,
    );
  }
});

test("formatDocCitation builds researcher-grade citation including title, date, source, catalogNo, and sourceUrl", () => {
  const fn = (data as Record<string, unknown>).formatDocCitation;
  assert.equal(typeof fn, "function", "Expected formatDocCitation to be exported from src/lib/data.ts");
  const sample = DOCS[0] as data.ArchiveDoc & { sourceUrl?: string };
  assert.ok(sample, "DOCS should not be empty");
  const citation = (fn as (d: data.ArchiveDoc) => string)(sample);
  assert.ok(citation.includes(sample.title), "Citation must include title");
  assert.ok(citation.includes(sample.dateLabel), "Citation must include dateLabel");
  assert.ok(citation.includes(sample.source), "Citation must include source");
  assert.ok(citation.includes(sample.catalogNo), "Citation must include catalogNo");
  assert.ok(sample.sourceUrl && citation.includes(sample.sourceUrl), "Citation must include sourceUrl");
});

test("All cross-references across PEOPLE, PLACES, TIMELINE, EXHIBITIONS, and CULTURE_ITEMS resolve without dangling slugs", () => {
  for (const p of PEOPLE) {
    for (const ds of p.docs ?? []) {
      assert.ok(getDoc(ds), `Person '${p.slug}' references non-existent doc '${ds}'`);
    }
  }

  for (const pl of PLACES) {
    for (const ds of pl.docs ?? []) {
      assert.ok(getDoc(ds), `Place '${pl.id}' references non-existent doc '${ds}'`);
    }
    for (const ps of pl.people ?? []) {
      assert.ok(getPerson(ps), `Place '${pl.id}' references non-existent person '${ps}'`);
    }
  }

  for (const ev of TIMELINE) {
    for (const ds of ev.docs ?? []) {
      assert.ok(getDoc(ds), `Timeline '${ev.year}' references non-existent doc '${ds}'`);
    }
    for (const ps of ev.people ?? []) {
      assert.ok(getPerson(ps), `Timeline '${ev.year}' references non-existent person '${ps}'`);
    }
  }

  for (const ex of EXHIBITIONS) {
    assert.ok(ex.docs.length >= 4, `Exhibition '${ex.slug}' should showcase at least 4 primary docs`);
    for (const ds of ex.docs) {
      assert.ok(getDoc(ds), `Exhibition '${ex.slug}' references non-existent doc '${ds}'`);
    }
    for (const ps of ex.people ?? []) {
      assert.ok(getPerson(ps), `Exhibition '${ex.slug}' references non-existent person '${ps}'`);
    }
  }

  for (const ci of CULTURE_ITEMS) {
    const links = getLinksForCultureItem(ci);
    assert.ok(links.docs.length >= 2, `CultureItem '${ci.id}' must resolve >= 2 valid archive docs`);
  }
});

test("TIMELINE (>= 24 milestones) is strictly chronological and PLACES (>= 22 sites) fit AtlasMap projection bounds", () => {
  assert.ok(TIMELINE.length >= 24, `Expected >= 24 timeline milestones, found ${TIMELINE.length}`);
  for (let i = 0; i < TIMELINE.length; i++) {
    const ev = TIMELINE[i];
    if (i > 0) {
      assert.ok(
        ev.year > TIMELINE[i - 1].year,
        `TIMELINE not strictly ascending at ${TIMELINE[i - 1].year} -> ${ev.year}`,
      );
    }
    const imgPath = path.join(PUBLIC_DIR, ev.image.replace(/^\//, ""));
    assert.ok(fs.existsSync(imgPath), `Missing timeline image for ${ev.year}: ${ev.image}`);
  }

  assert.ok(PLACES.length >= 22, `Expected >= 22 historical places in Atlas, found ${PLACES.length}`);
  for (const pl of PLACES) {
    assert.ok(
      pl.lon >= 44.4 && pl.lon <= 47.3,
      `Place '${pl.id}' lon ${pl.lon} outside AtlasMap bounds [44.4, 47.3]`,
    );
    assert.ok(
      pl.lat >= 42.2 && pl.lat <= 43.65,
      `Place '${pl.id}' lat ${pl.lat} outside AtlasMap bounds [42.2, 43.65]`,
    );
    const imgPath = path.join(PUBLIC_DIR, pl.image.replace(/^\//, ""));
    assert.ok(fs.existsSync(imgPath), `Missing place image for '${pl.id}': ${pl.image}`);
  }
});

function readWebpDimensions(buf: Buffer): { width: number; height: number } {
  assert.ok(buf.length >= 30, "WebP buffer too small");
  assert.equal(buf.toString("ascii", 0, 4), "RIFF", "Missing RIFF header");
  assert.equal(buf.toString("ascii", 8, 12), "WEBP", "Missing WEBP signature");
  const chunk = buf.toString("ascii", 12, 16);
  if (chunk === "VP8 ") {
    assert.equal(buf[23], 0x9d);
    assert.equal(buf[24], 0x01);
    assert.equal(buf[25], 0x2a);
    return {
      width: buf.readUInt16LE(26) & 0x3fff,
      height: buf.readUInt16LE(28) & 0x3fff,
    };
  }
  if (chunk === "VP8L") {
    assert.equal(buf[20], 0x2f);
    const bits = buf.readUInt32LE(21);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    };
  }
  if (chunk === "VP8X") {
    return {
      width: buf.readUIntLE(24, 3) + 1,
      height: buf.readUIntLE(27, 3) + 1,
    };
  }
  throw new Error(`Unsupported WebP chunk type: ${chunk}`);
}

test("All 330 PEOPLE portraits exist as valid 800x1000 (4:5) WebP files with cache-busted URLs", () => {
  assert.equal(PEOPLE.length, 330, `Expected 330 historical people, found ${PEOPLE.length}`);
  const versions = new Set<string>();
  for (const p of PEOPLE) {
    const [relUrl, query] = p.image.split("?");
    assert.ok(
      relUrl.startsWith("/images/people/") && relUrl.endsWith(".webp"),
      `Unexpected portrait path for '${p.slug}': ${p.image}`,
    );
    assert.ok(query && /^v=\d+$/.test(query), `Missing cache-bust query (?v=N) on '${p.slug}': ${p.image}`);
    versions.add(query);

    for (const g of p.gallery ?? []) {
      const [, gQuery] = g.src.split("?");
      assert.equal(gQuery, query, `Gallery cache-bust mismatch on '${p.slug}': ${g.src} vs ${p.image}`);
    }

    const diskPath = path.join(PUBLIC_DIR, relUrl.replace(/^\//, ""));
    assert.ok(fs.existsSync(diskPath), `Missing portrait WebP on disk for '${p.slug}': ${diskPath}`);
    const buf = fs.readFileSync(diskPath);
    assert.ok(buf.length > 8000, `Suspiciously tiny portrait WebP (<8KB) for '${p.slug}': ${buf.length} bytes`);
    const { width, height } = readWebpDimensions(buf);
    assert.equal(width, 800, `Expected portrait width 800 for '${p.slug}', got ${width}`);
    assert.equal(height, 1000, `Expected portrait height 1000 for '${p.slug}', got ${height}`);
  }
  assert.equal(
    versions.size,
    1,
    `Expected a single uniform cache-bust version across all 330 portraits, found: ${[...versions].join(", ")}`,
  );
});

