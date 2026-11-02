import type { Metadata } from "next";
import { Suspense } from "react";
import AtlasMap from "@/components/AtlasMap";
import PageHeader from "@/components/PageHeader";
import { PLACES } from "@/lib/data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Kafkasya Tarih Atlası",
  description:
    "Vaynah taş kuleleri, tarihi dağ köyleri, İmamet sınırları ve 1865 / 1944 sürgün rotalarını gösteren interaktif atlas.",
  path: "/harita",
  image: "/images/atlas.jpg",
});

export default function HaritaPage() {
  return (
    <>
      <PageHeader
        eyebrow="3B Kartografik Hafıza"
        title="Kafkasya Tarih Atlası"
        subtitle="Kafkasya’nın kulelerini, dağ köylerini ve tarihsel rotalarını uydu görüntüsü üzerinde keşfedin. Bir vadi seçin, araziye yaklaşın ve arşiv kayıtlarına ulaşın."
        crumbs={[{ label: "Harita" }]}
        count={PLACES.length}
        image="/images/atlas.jpg"
      />
      <section className="mx-auto max-w-[1500px] px-5 pb-20 pt-10 md:px-12">
        <Suspense
          fallback={
            <div className="py-24 text-center text-mist">
              Kafkasya 3B Tarih Atlası yükleniyor...
            </div>
          }
        >
          <AtlasMap />
        </Suspense>
        <p className="mt-4 text-xs tracking-wider text-mist/75">
          Arazi modeli: Mapzen Terrain Tiles · Uydu görüntüsü: Esri World
          Imagery. Görüntü ayrıntısı bölgeye göre değişir. Tarihsel sınırlar ve
          güzergâhlar temsili gösterimlerdir.
        </p>
      </section>
    </>
  );
}
