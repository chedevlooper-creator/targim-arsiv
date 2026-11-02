import type { Metadata } from "next";
import { Suspense } from "react";
import AtlasMap from "@/components/AtlasMap";
import PageHeader from "@/components/PageHeader";
import { PLACES } from "@/lib/data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Kafkasya Tarih Atlası",
  description: "Vaynah taş kuleleri, tarihi dağ köyleri, İmamet sınırları ve 1865 / 1944 sürgün rotalarını gösteren interaktif atlas.",
  path: "/harita",
  image: "/images/atlas.jpg",
});

export default function HaritaPage() {
  return (
    <>
      <PageHeader
        eyebrow="3B Kartografik Hafıza"
        title="Kafkasya Tarih Atlası"
        subtitle="Vaynah kule vadileri, İmamet başkentleri, meydan muharebeleri ve sürgün rotaları. 3B dağ rölyefini fareyle döndürün, eğimini değiştirin ve zaman kaydırıcısıyla yüzyıllar arasında gezinin."
        crumbs={[{ label: "Harita" }]}
        count={PLACES.length}
        image="/images/atlas.jpg"
      />
      <section className="mx-auto max-w-[1500px] px-5 pb-20 pt-10 md:px-12">
        <Suspense fallback={<div className="py-24 text-center text-mist">Kafkasya 3B Tarih Atlası yükleniyor...</div>}>
          <AtlasMap />
        </Suspense>
        <p className="mt-4 text-xs tracking-wider text-mist/75">
          * 3B topografik rölyef modeli Kuzey Kafkasya dağ havzası (42.2°K–43.65°K, 44.4°D–47.3°D) merkez alınarak tarihsel kaynaklara göre ölçeklenmiştir.
        </p>
      </section>
    </>
  );
}
