import type { Metadata } from "next";
import { Suspense } from "react";
import CultureExplorer from "@/components/CultureExplorer";
import PageHeader from "@/components/PageHeader";
import { CULTURE_ITEMS } from "@/lib/data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Kültür",
  description: "Nohçalla ve Ezdel ahlakı, Vaynah kule mimarisi, dechig-pondar müziği, geleneksel giyim ve Kafkas mutfak mirası.",
  path: "/kultur",
  image: "/images/kultur.jpg",
});

export default function KulturPage() {
  return (
    <>
      <PageHeader
        eyebrow="Somut ve Somut Olmayan Miras"
        title="Kültür ve Yaşam"
        subtitle="Nohçalla ve Ezdel görgü yasalarından savatlı gümüş işçiliğine, taş kulelerden üç telli pondar ezgilerine Kafkas dağ kültürünün dokusu."
        crumbs={[{ label: "Kültür" }]}
        count={CULTURE_ITEMS.length}
      />
      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-10 md:px-10">
        <Suspense fallback={<div className="py-20 text-center text-mist">Kültür koleksiyonu yükleniyor...</div>}>
          <CultureExplorer />
        </Suspense>
      </section>
    </>
  );
}
