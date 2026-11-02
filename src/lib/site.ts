import type { Metadata } from "next";

export const SITE = {
  name: "Targim Archive",
  title: "Targim Archive — Dağlar susar, tarih konuşur",
  description:
    "Targim Archive; Çeçen, İnguş ve Kafkasya'nın tarihini, insanlarını ve kültürel mirasını belgeleyen dijital bir hafıza arşividir.",
  url: "https://targimarchive.com.tr",
  logo: "/images/brand/icon-512.png",
  shareImage: "/images/brand/og.jpg",
  instagram: { url: "https://www.instagram.com/targim.archive/", handle: "@targim.archive" },
};

/* Sayfa düzeyindeki openGraph, kök düzeninkini tamamen ezdiği için her sayfa aynı alanları buradan alır */
export function pageMetadata({
  title,
  description = SITE.description,
  path,
  image = SITE.shareImage,
}: {
  title?: string;
  description?: string;
  path: string;
  image?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.title;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      siteName: SITE.name,
      url: path,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}
