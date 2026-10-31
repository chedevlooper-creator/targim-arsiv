import type { Metadata } from "next";
import CultureExplorer from "@/components/CultureExplorer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Kültür",
  description: "Nohçalla ve Ezdel ahlakı, Vaynah kule mimarisi, dechig-pondar müziği, geleneksel giyim ve Kafkas mutfak mirası.",
};

export default function KulturPage() {
  return (
    <>
      <PageHeader
        eyebrow="Somut ve Somut Olmayan Miras"
        title="Kültür ve Yaşam"
        subtitle="Nohçalla ve Ezdel görgü yasalarından savatlı gümüş işçiliğine, taş kulelerden üç telli pondar ezgilerine Kafkas dağ kültürünün dokusu."
        image="/images/kultur.jpg"
        crumbs={[{ label: "Kültür" }]}
      />
      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-10 md:px-10">
        <CultureExplorer />
      </section>
    </>
  );
}
