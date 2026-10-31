import type { Metadata } from "next";
import ArchiveBrowser from "@/components/ArchiveBrowser";
import PageHeader from "@/components/PageHeader";
import TowerArchiveShowcase from "@/components/TowerArchiveShowcase";

export const metadata: Metadata = {
  title: "Arşiv",
  description: "Kuzey Kafkasya tarihine ait kule içi el yazmaları, mühürlü siciller, haritalar, muhacir defterleri ve erken dönem fotoğraflar.",
};

export default function ArsivPage() {
  return (
    <>
      <PageHeader
        eyebrow="Birincil Kaynaklar · Kule Mahzenleri ve Tıpkıbasımlar"
        title="Dijital Belge ve Kule Arşivi"
        subtitle="Vaynah kule içi el yazması kodeksleri, İmamet divanı mektupları, mühürlü arazi sicilleri, askeri topografya haritaları ve 1944 sürgün tanıklıkları."
        image="/images/hf-kule-gunbatimi.jpg"
        crumbs={[{ label: "Arşiv" }]}
      />
      <section className="mx-auto max-w-[1440px] px-5 pt-10 md:px-10">
        <TowerArchiveShowcase />
        <ArchiveBrowser />
      </section>
    </>
  );
}
