import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import TimelineExplorer from "@/components/TimelineExplorer";
import { TIMELINE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Zaman Çizelgesi",
  description: "1700'den günümüze Kuzey Kafkasya tarihinin dönüm noktaları, direniş hareketleri, sürgünler ve kültürel hafıza.",
};

export default function ZamanCizelgesiPage() {
  return (
    <>
      <PageHeader
        eyebrow="300 Yıllık Tarihsel Akış"
        title="Zaman Çizelgesi"
        subtitle="Dağ meclisleri ve kule yerleşimlerinden İmamet Çağı'na, 1864 ve 1944 sürgünlerinden günümüz dijital hafıza çalışmalarına uzanan kronoloji."
        crumbs={[{ label: "Zaman Çizelgesi" }]}
        count={TIMELINE.length}
      />
      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-10 md:px-10">
        <Suspense fallback={<div className="py-20 text-center text-mist">Zaman çizelgesi yükleniyor...</div>}>
          <TimelineExplorer />
        </Suspense>
      </section>
    </>
  );
}
