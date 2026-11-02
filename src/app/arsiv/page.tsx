import type { Metadata } from "next";
import ArchiveBrowser from "@/components/ArchiveBrowser";
import PageHeader from "@/components/PageHeader";
import TowerArchiveShowcase from "@/components/TowerArchiveShowcase";
import { DOCS } from "@/lib/data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Arşiv",
  description:
    "Çeçen, İnguş ve Kuzey Kafkasya tarihine ait uluslararası arşivlerden doğrulanmış birincil el yazmaları, haritalar, resmi belgeler, erken fotoğraflar ve basılı eserler.",
  path: "/arsiv",
  image: "/images/hf-ic-arsiv-yazmalar.jpg",
});

export default function ArsivPage() {
  return (
    <>
      <PageHeader
        eyebrow="Doğrulanmış Birincil Kaynaklar · Tıpkıbasım ve Tam Künye"
        title="Dijital Belge ve Kule Arşivi"
        subtitle="Dağıstan Ulusal Müzesi, Puşkin Evi, GİM, GARF, ABD Kongre Kütüphanesi ve Internet Archive koleksiyonlarından derlenen İmamet divan yazışmaları, askeri topografya haritaları, 1918–1919 devlet evrakı, Çeçen dil mirası ve 1944 sürgün belgeleri."
        crumbs={[{ label: "Arşiv" }]}
        count={DOCS.length}
      />
      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-10 md:px-10">
        <TowerArchiveShowcase />
        <ArchiveBrowser />
      </section>
    </>
  );
}
