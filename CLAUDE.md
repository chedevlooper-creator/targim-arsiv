# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Targim Archive** — a Turkish-language digital archive of North Caucasus (Çeçen / İnguş) history, historical figures, primary documents, and material culture. "Dağlar susar, tarih konuşur."

This is a **fully static Next.js site**: no CMS, no database, no API routes, no server actions, no auth. A Supabase-backed contribution form existed in an early commit and was removed; don't reintroduce a backend without being asked.

All user-facing copy is Turkish. Write new copy in Turkish, keep the existing register (archival, formal, accented correctly: `Çeçen`, `İnguş`, `Kafkasya`, `sürgün`).

## Commands

```bash
npm run dev      # dev server on http://localhost:3000 (Turbopack)
npm run build    # production build → 397 prerendered routes
npm run start    # serve the production build
npm run lint     # ESLint (eslint-config-next: core-web-vitals + typescript)
npm test         # node --test tests/archive-integrity.test.mts
```

Node 24 is required — the test runner strips TypeScript types natively, so there is no transpiler/test-framework dependency:

```bash
# run a single test by name
node --test --test-name-pattern="portraits" tests/archive-integrity.test.mts
```

The test file imports `src/lib/data.ts` directly and asserts against the real files in `public/`, so it exercises the archive exactly as shipped.

## Architecture

### The entire archive is one TypeScript file

`src/lib/data.ts` (~10.9k lines) is the single source of truth for all editorial content. Adding a person, a document, a place, or a culture item means editing this file — there is no other content pipeline.

| Collection | Count | Key | Notes |
|---|---|---|---|
| `PEOPLE` | 330 | `slug` | Historical figures, four eras |
| `DOCS` | 47 | `slug` | Primary archival records with provenance URLs + catalog numbers |
| `TIMELINE` | 29 | `year` | Strictly ascending milestones |
| `PLACES` | 26 | `id` | Geo-located sites with `lon`/`lat` |
| `EXHIBITIONS` | 6 | `slug` | Curated thematic groupings of docs |
| `CULTURE_ITEMS` | 24 | `id` | Ethnographic/linguistic entries in 6 categories |

### Entities cross-reference by slug string, not by object reference

`Person.docs` holds doc slugs; `Place.people` holds person slugs; `TimelineEvent.docs`/`people` likewise; `Exhibition.docs` holds doc slugs. **Strings, not nested objects** — so a rename silently breaks every backlink.

The bottom of `data.ts` holds the resolvers that turn those strings into records. Use them instead of hand-rolling `find` calls:

`getPerson` · `getDoc` · `getExhibition` · `getLinksForCultureItem`
`getRelatedPeople` · `getPlacesForPerson` · `getEventsForPerson` · `getDocsForPerson` · `getExhibitionsForPerson`
`getPeopleForDoc` · `getExhibitionsForDoc` · `getPlacesForDoc` · `getPlacesForEvent` · `getPlacesForExhibition` · `getEventsForExhibition` · `getCultureForExhibition`

Note the derived counts: `EXHIBITIONS[].count`, `CULTURE_CATS[].count`, and each `DOC_TYPES[].count` (a localized string like `"7 belge"`) are all computed inline from the real records via `.filter(...)`, so they stay in sync automatically. The test asserts them against the actual counts anyway — it exists to catch someone replacing a computed count with a hand-typed placeholder.

### Routes

| Route | File | Rendering |
|---|---|---|
| `/` | `src/app/page.tsx` | Server shell + `<HomeClient>` (video hero, timeline strip) |
| `/kisiler` | `src/app/kisiler/page.tsx` | `PeopleGrid` client component |
| `/kisiler/[slug]` | `src/app/kisiler/[slug]/page.tsx` | `generateStaticParams` over `PEOPLE` |
| `/arsiv` | `src/app/arsiv/page.tsx` | `ArchiveBrowser` client component |
| `/arsiv/[slug]` | `src/app/arsiv/[slug]/page.tsx` | `generateStaticParams` over `DOCS` |
| `/zaman-cizelgesi` | `src/app/zaman-cizelgesi/page.tsx` | `TimelineExplorer` |
| `/harita` | `src/app/harita/page.tsx` | `AtlasMap` |
| `/sergiler`, `/sergiler/[slug]` | `src/app/sergiler/**` | `ExhibitionsList`, per-exhibition page |
| `/kultur` | `src/app/kultur/page.tsx` | `CultureExplorer` |
| `/hakkinda` | `src/app/hakkinda/page.tsx` | Static editorial page |

`src/app/layout.tsx` supplies the shell: `<Header>` / `<main>` / `<Footer>` inside `<SmoothScrollProvider>` (Lenis smooth scroll, `lenis/react`), and the three `next/font` families Cinzel (display) / Cormorant Garamond (serif) / Inter (sans) exposed as `--font-cinzel`, `--font-cormorant`, `--font-inter`.

Nav links are declared once in `src/components/Brand.tsx` (`NAV`), alongside the shared `Logo`, `FiligreeLink` (pill CTA), and `DiamondDivider` primitives.

### Server/client split

Pages are server components; anything interactive lives in `src/components/` with `"use client"` at the top. Currently client-side: `ArchiveBrowser`, `AtlasMap`, `CultureExplorer`, `DocViewer`, `ExhibitionsList`, `Header`, `HomeClient`, `PeopleGrid`, `PersonGallery`, `SmoothScrollProvider`, `TimelineExplorer`, `TowerArchiveShowcase`.

**A client component that calls `useSearchParams()` must be wrapped in `<Suspense>`** by its page — `harita`, `zaman-cizelgesi`, and `kultur` all do this. Without the boundary the route cannot be prerendered.

URL-driven deep links use search params, not routes: `/harita?yer=<placeId>`, `/harita?katman=kule`, `/zaman-cizelgesi?yil=<year>`. The client components read them with `useSearchParams()` and validate before applying (e.g. `TimelineExplorer` ignores a `yil` that doesn't exist in `TIMELINE`).

### Two different search implementations

- **Global search** — `src/components/Header.tsx` builds a `SEARCH_CATALOG` flattened from every collection and runs it through **Fuse.js** (fuzzy).
- **In-page filters** — `PeopleGrid` and `ArchiveBrowser` use plain `toLocaleLowerCase("tr-TR")` substring matching over a concatenated field list, plus era/region/type dropdowns and a "load more" pager (`PAGE_STEP = 48`).

Match the surrounding style when editing a filter; don't swap one for the other.

Because `Header.tsx` is a client component that imports `PEOPLE`, `DOCS`, `TIMELINE`, `EXHIBITIONS`, `PLACES` and `CULTURE_ITEMS` from `@/lib/data`, the whole data module is bundled into the browser for the search index. That's the current trade-off for global search — keep new collections out of the header catalog unless they belong in it.

### Design system

`src/app/globals.css` holds everything. Tailwind v4 (`@import "tailwindcss"`) with `@theme` tokens — `ink`, `night`, `panel`, `panel-2`, `gold`, `gold-light`, `gold-dark`, `parchment`, `mist` — plus `--font-display` / `--font-serif` / `--font-sans` and the `kenburns` / `fade-up` animations.

Reusable classes live in `@layer components`: `.gold-text`, `.eyebrow`, `.panel`, `.museum-card`, `.btn-gold`, `.btn-glass`, `.chip` / `.chip-active`, `.badge-glass`, `.portrait-tone`, `.topo-bg`, `.grain`, `.input-dark`, `.divider-gold`, `.search-dialog-panel`, `.defer-offscreen-section`.

Use these classes rather than inventing new one-off styling — they carry the museum-glass look and hover transitions the whole site depends on.

### Images

- **Portraits**: `public/images/people/<slug>.webp`, exactly **800×1000 (4:5) WebP**, referenced as `/images/people/<slug>.webp?v=N`. The `?v=N` query is a cache-bust and the test enforces that **all 330 portraits share one uniform version string** — bumping it means editing all 330 `image` fields *and* their `gallery[].src` entries.
- **Archive documents**: `public/images/archive/*.jpg`, one per doc slug.
- **Scene/editorial images**: `public/images/*.jpg` (`hero.jpg`, `atlas.jpg`, `hf-*.jpg`, category tiles).
- **Video**: `public/videos/*.mp4` (`kule-arsivi-tanitim.mp4`, `babamin-emegine-ayrildi.mp4`), played by `HomeClient`.

Everything goes through `next/image` with `fill` + an explicit `sizes` attribute. `next.config.ts` allowlists `localPatterns` for `/images/**`.

**Do not add a `search` key to that `localPatterns` entry.** Next 16 requires local images with query strings to match `images.localPatterns.search` exactly (`next/dist/shared/lib/match-local-pattern.js`); omitting `search` currently allows any query string on `/images/**`, which is what lets the `?v=N` portraits work. Setting `search: ""` would 400 every portrait — the value would have to be exactly `"?v=4"`, and it would break the moment the version is bumped.

Two more `next/image` notes for 16: the `qualities` default is now `[75]` only (a `quality` prop outside that list is coerced or rejected with a 400), and the `priority` prop is deprecated in favour of `preload` — the existing `priority` usages still work, but prefer `preload` in new code.

### Atlas projection

`src/components/AtlasMap.tsx` hand-rolls an equirectangular SVG projection over a fixed bounding box, defined at the top of the file:

```
W=1000  H=680   LON0=44.4  LON1=47.3   LAT0=43.65  LAT1=42.2
```

Every `Place.lon`/`Place.lat` must fall inside that box or the point projects off-canvas — the test asserts this range. The rivers, borders, and route polylines are literal `[lon, lat]` tuples in the same coordinate space.

## Next.js 16.4.3 — this is not the Next.js you know

`AGENTS.md` at the repo root is **managed by `next dev`** (regenerated at `node_modules/next/dist/server/lib/generate-agent-files.js`). It points at the version-matched docs bundled in `node_modules/next/dist/docs/` — read the relevant guide there before writing code, and **don't delete the block**; removing it just re-creates the uncommitted diff.

Conventions this codebase already follows:

- **`params` is a Promise** — and under Cache Components you must *not* await it at the top of the page. Pass the promise into a `<Suspense>`-wrapped child and await it there, so the static shell can still prerender. `src/app/arsiv/[slug]/page.tsx` is the canonical pattern:

  ```tsx
  export default function DocPage(props: PageProps<"/arsiv/[slug]">) {
    return <Suspense fallback={<div className="min-h-screen pt-28" />}><DocPageContent {...props} /></Suspense>;
  }
  async function DocPageContent({ params }: PageProps<"/arsiv/[slug]">) {
    const { slug } = await params;   // awaited inside the boundary
  }
  ```

- **Typed routes** — use the generated global helpers `PageProps<"/arsiv/[slug]">` and `LayoutProps<"/">` for page/layout props instead of hand-writing prop types. They're regenerated by `next dev` / `next build` / `next typegen` into `.next/types` (and `.next/dev/types`), both of which `tsconfig.json` already includes.
- **`cacheComponents: true`** and **`partialPrefetching: true`** are enabled in `next.config.ts`. `partialPrefetching` requires `cacheComponents` and must stay set explicitly. The build output marks dynamic detail routes ◐ (Partial Prerender).
  - Under Cache Components, **uncached data access outside a `<Suspense>` boundary is an error**, not a silent fallback. The three sanctioned fixes are: wrap it in `<Suspense>`, put it inside a `"use cache"` scope, or set `export const instant = false` on the segment.
  - **Don't add `export const dynamic`, `revalidate`, `fetchCache`, or `dynamicParams`** to a route — `cacheComponents` errors on all four. `dynamicParams` fails the build outright.
  - **`generateStaticParams` must return at least one param**; returning `[]` is an error.
  - This site's content is module-scope static data, so it needs no `"use cache"`. If you ever add one: `cacheLife` / `cacheTag` come from `next/cache` (the `unstable_` prefix is gone in 16), `cacheLife` only works inside a cache scope, and a cached function cannot read `cookies()`, `headers()`, or `searchParams` — read those outside and pass them in as arguments.
- **Partial Prefetching** prefetches one reusable App Shell per route instead of one prefetch per link. `<Link prefetch={true}>` still exists but now means "per-link prefetch" — the server re-renders with the destination URL resolved so `params`/`searchParams` are known. Only add it for destinations that actually read URL data.
- **Turbopack is the default bundler** for both `next dev` and `next build` (confirmed by the build banner). The `turbopack.rules` entry in `next.config.ts` wires `@tailwindcss/turbopack` for CSS. There is no config key to disable it — only the `--webpack` CLI flag. `next build` fails outright if a custom `webpack` config is present in `next.config`.
- **`next build` does not lint.** The `next lint` command was removed in 16; this project already calls `eslint` directly via `npm run lint`. Run it separately.
- **`next.config.ts` has a `FIGMA` env branch** that switches on `output: "standalone"` and `allowedDevOrigins` for the Figma Make preview environment. Leave it alone.
- `vercel.json` pins `{"framework": "nextjs"}`.

## Testing

`tests/archive-integrity.test.mts` is the content safety net — **run `npm test` after any edit to `src/lib/data.ts` or `public/`.** It enforces:

1. ≥36 documents, ≥5 per document type, ≥6 per era; unique slugs and catalog numbers.
2. Every document has an `https://` `sourceUrl` and an image under `/images/archive/` that exists on disk and is ≥5 KB.
3. `DOC_TYPES` / `CULTURE_CATS` / `EXHIBITIONS` counts equal the actual record counts (catches inflated placeholder numbers).
4. `formatDocCitation` includes title, date, source, catalog number, and source URL.
5. Every cross-reference resolves — no dangling doc/person slugs anywhere.
6. `TIMELINE` is strictly ascending and ≥24 milestones; `PLACES` is ≥22 and inside the atlas bounds; all referenced images exist.
7. All 330 portraits exist, are valid WebP, are exactly 800×1000, and share one `?v=N` version.

## Gotchas

- `src/lib/data.ts` is huge but is the intended home for content; don't split it without a reason — the test and every page import from it directly.
- Counts embedded in UI copy are hand-maintained in several places (e.g. `not-found.tsx` hardcodes "Kişiler (330)"). Prefer interpolating `PEOPLE.length` when you touch those lines.
- `next/image` with `fill` requires a positioned, sized ancestor (`relative aspect-[4/5]`, etc.) — portraits rely on `aspect-[4/5]` + `object-top`.
- `.portrait-tone` applies the archive color grade; use it on every portrait render.
- The header search dialog and the full-screen document viewer both need `data-lenis-prevent` so Lenis smooth scroll doesn't fight them.
- `npm test` prints a `MODULE_TYPELESS_PACKAGE_JSON` warning because `package.json` has no `"type": "module"`. It is harmless — don't "fix" it by adding `"type": "module"`, which would change how Next resolves the config and TS files.
