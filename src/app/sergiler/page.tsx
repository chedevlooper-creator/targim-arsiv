import type { Metadata } from "next";
import ExhibitionsList from "@/components/ExhibitionsList";
import PageHeader from "@/components/PageHeader";
import { EXHIBITIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sergiler",
  description: "Kafkasya'nın özgürlük mücadelesi, Vaynah kule mimarisi, 1944 sürgünü ve günlük yaşam üzerine küratöryel dijital sergiler.",
};

export default function SergilerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Küratöryel Dijital Galeriler"
        title="Dijital Sergiler"
        subtitle="Arşivimizdeki el yazmaları, haritalar ve fotoğrafların tematik bir anlatı etrafında bir araya getirildiği özel koleksiyonlar."
        image="/images/imamet.jpg"
        crumbs={[{ label: "Sergiler" }]}
        count={EXHIBITIONS.length}
      />
      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-10 md:px-10">
        <ExhibitionsList />
      </section>
    </>
  );
}
