import type { Metadata } from "next";
import { Suspense } from "react";
import AtlasMap from "@/components/AtlasMap";
import PageHeader from "@/components/PageHeader";
import { PLACES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kafkasya Tarih Atlası",
  description: "Vaynah taş kuleleri, tarihi dağ köyleri, İmamet sınırları ve 1865 / 1944 sürgün rotalarını gösteren interaktif atlas.",
};

export default function HaritaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kartografik Hafıza"
        title="Kafkasya Tarih Atlası"
        subtitle="Vaynah kule vadileri, İmamet başkentleri, meydan muharebeleri ve sürgün rotaları. Haritayı sürükleyin, yakınlaştırın ve zaman kaydırıcısıyla yüzyıllar arasında gezinin."
        image="/images/atlas.jpg"
        crumbs={[{ label: "Harita" }]}
        count={PLACES.length}
      />
      <section className="mx-auto max-w-[1600px] px-5 pb-20 pt-10 md:px-10">
        <Suspense fallback={<div className="py-24 text-center text-mist">Kafkasya Tarih Atlası yükleniyor...</div>}>
          <AtlasMap />
        </Suspense>
        <p className="mt-4 text-xs tracking-wider text-mist/75">
          * Harita projeksiyonu Kuzey Kafkasya dağ havzası (42.2°K–43.65°K, 44.4°D–47.3°D) merkez alınarak tarihsel kaynaklara göre ölçeklenmiştir.
        </p>
      </section>
    </>
  );
}
