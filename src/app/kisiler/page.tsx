import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PeopleGrid from "@/components/PeopleGrid";
import { PEOPLE } from "@/lib/data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Kişiler",
  description: "Kafkasya tarihine yön veren imamlar, komutanlar, mutasavvıflar, yazarlar ve sanatçılar.",
  path: "/kisiler",
  image: "/images/kisiler.jpg",
});

export default function KisilerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Biyografik Hafıza Koleksiyonu"
        title="Tarihe İz Bırakanlar"
        subtitle={`Kuzey Kafkasya tarihinden ${PEOPLE.length} öncü şahsiyet; İmamet Çağı'ndan yakın döneme dört tarihsel evrede, portreleri ve biyografileriyle.`}
        crumbs={[{ label: "Kişiler" }]}
        count={PEOPLE.length}
        image="/images/kisiler.jpg"
      />
      <section className="mx-auto max-w-[1500px] px-5 pb-20 pt-10 md:px-12">
        <PeopleGrid />
      </section>
    </>
  );
}
