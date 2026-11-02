import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Targim",
    description: SITE.description,
    lang: "tr",
    start_url: "/",
    display: "standalone",
    background_color: "#070605",
    theme_color: "#070605",
    icons: [
      { src: "/images/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
