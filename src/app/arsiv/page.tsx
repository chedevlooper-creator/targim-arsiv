import type { Metadata } from "next";
import ArchiveBrowser from "@/components/ArchiveBrowser";
import PageHeader from "@/components/PageHeader";
import { DOCS } from "@/lib/data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Arşiv",
  description:
    "Çeçen, İnguş ve Kuzey Kafkasya tarihine ait el yazmaları, haritalar, resmi belgeler, fotoğraflar ve basılı eserler; kaynak bağlantıları ve görsel lisanslarıyla.",
  path: "/arsiv",
  image: "/images/hf-ic-arsiv-yazmalar.jpg",
});

export default function ArsivPage() {
  return (
    <>
      <PageHeader
        eyebrow="Açık Kaynaklı Kayıtlar · Tam Künye ve Lisans"
        title="Dijital Belge ve Kule Arşivi"
        subtitle="İmamet divan yazışmaları, askeri topografya haritaları, 1918–1919 devlet evrakı, Çeçen dil mirası ve 1944 sürgün kayıtları. Görseller Wikimedia Commons ve Internet Archive'deki açık kopyalardan alınmıştır; kaynak ve lisans bilgisi her kaydın künyesindedir."
        crumbs={[{ label: "Arşiv" }]}
        count={DOCS.length}
        image="/images/hf-ic-arsiv-yazmalar.jpg"
      />
      <section className="mx-auto max-w-[1500px] px-5 pb-20 pt-10 md:px-12">
        <ArchiveBrowser />
      </section>
    </>
  );
}
