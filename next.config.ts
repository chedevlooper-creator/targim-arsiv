import type { NextConfig } from "next";

const figmaPublicHost = (() => {
  if (!process.env.FIGMA || !process.env.FIGMA_PUBLIC_URL) return undefined;
  try {
    return new URL(process.env.FIGMA_PUBLIC_URL).hostname;
  } catch {
    return undefined;
  }
})();

const nextConfig: NextConfig = {
  /* config options here */
  ...(process.env.FIGMA
    ? {
        output: "standalone",
        allowedDevOrigins: [
          "*.figma.site",
          "*.figma.com",
          ...(figmaPublicHost ? [figmaPublicHost] : []),
        ],
      }
    : {}),
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
