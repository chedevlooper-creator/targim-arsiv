import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PeopleGrid from "@/components/PeopleGrid";
import { PEOPLE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kişiler",
  description: "Kafkasya tarihine yön veren imamlar, komutanlar, mutasavvıflar, yazarlar ve sanatçılar.",
};

export default function KisilerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Biyografik Hafıza Koleksiyonu"
        title="Tarihe İz Bırakanlar"
        subtitle={`Kuzey Kafkasya tarihinden ${PEOPLE.length} öncü şahsiyet; İmamet Çağı'ndan yakın döneme dört tarihsel evrede, özgün portreleri ve arşiv kaynaklarıyla.`}
        crumbs={[{ label: "Kişiler" }]}
        count={PEOPLE.length}
      />
      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-10 md:px-10">
        <PeopleGrid />
      </section>
    </>
  );
}
