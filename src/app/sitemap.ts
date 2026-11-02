import type { MetadataRoute } from "next";
import { DOCS, EXHIBITIONS, PEOPLE } from "@/lib/data";
import { SITE } from "@/lib/site";

const PAGES = [
  "/",
  "/kisiler",
  "/arsiv",
  "/zaman-cizelgesi",
  "/harita",
  "/sergiler",
  "/kultur",
  "/surgun-1944",
  "/hakkinda",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...PAGES,
    ...PEOPLE.map((p) => `/kisiler/${p.slug}`),
    ...DOCS.map((d) => `/arsiv/${d.slug}`),
    ...EXHIBITIONS.map((e) => `/sergiler/${e.slug}`),
  ];
  return paths.map((path) => ({ url: path === "/" ? SITE.url : `${SITE.url}${path}` }));
}
