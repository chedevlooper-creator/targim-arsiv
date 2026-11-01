import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DiamondDivider } from "@/components/Brand";
import { DedicationFilmSection } from "@/components/HomeClient";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Hakkında",
  description: "Targim Archive dijital hafıza projesinin misyonu ve arşivleme ilkeleri.",
};

export default function HakkindaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dijital Hafıza Girişimi"
        title={
          <>
            <span className="gold-text">Targim</span>{" "}
            <span lang="en" className="gold-text [font-feature-settings:'locl'_0]">
              Archive
            </span>{" "}
            <span className="gold-text">Hakkında</span>
          </>
        }
        subtitle="Dağlar susar, tarih konuşur. Çeçen, İnguş ve Kuzey Kafkasya halklarının asırlara yayılan yazılı, görsel ve sözlü mirasını koruma projesi."
        crumbs={[{ label: "Hakkında" }]}
      />

      <DedicationFilmSection />

      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-16 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="eyebrow">İsim ve Sembolizm</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-5xl">
              Neden Targim?
            </h2>
            <div className="mt-6 space-y-5 font-serif text-xl leading-relaxed text-white/80">
              <p>
                <strong className="text-gold-light">Targim</strong>, İnguşetya&apos;nın Cerah–Assa vadisinde, kayalık dağ
                sırtları üzerinde asırlardır dimdik ayakta duran tarihi bir kule yerleşimidir. Vaynah mimarisinin
                zirvesini temsil eden bu taş kuleler; yalnızca birer savunma yapısı değil, aynı zamanda soy bağlarının,
                söz namusunun ve dağ adaletinin taşlaşmış anıtlarıdır.
              </p>
              <p>
                Kuzey Kafkasya halkları; 18. ve 19. yüzyıllardaki uzun savaşlar, 1864–1865 muhacereti ve 23 Şubat 1944
                topyekûn sürgünü sırasında ağır demografik ve kültürel yıkımlarla karşılaştı. Yazılı arşivlerin önemli
                bir bölümü tahrip edildi; şahsi mektuplar ve aile albümleri dünyanın dört bir yanındaki diasporalara
                saçıldı.
              </p>
              <p>
                <strong className="text-gold-light">Targim Archive</strong>, bu dağınık hafıza parçalarını yüksek
                çözünürlüklü dijital kataloglama, transkripsiyon ve kartografik bağlamla bir araya getirmek için inşa
                edilmiştir.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/harita?yer=targim" className="btn-glass">
                Targim&apos;i Atlasta İncele <ArrowRight size={13} />
              </Link>
              <Link href="/sergiler/kuleler-ve-yerlesimler" className="btn-glass">
                Kuleler Sergisi <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div className="museum-card relative aspect-[4/3] overflow-hidden bg-night">
            <Image
              src="/images/targim-towers.jpg"
              alt="Cerah vadisinde Targim taş savaş kuleleri"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5">
              <span className="badge-glass">
                TARGİM KULE KOMPLEKSİ · CERAH – ASSA HAVZASI
              </span>
            </div>
          </div>
        </div>

        <DiamondDivider className="my-20" />

        {/* Arşivleme İlkelerimiz */}
        <div>
          <span className="eyebrow">Metodoloji ve Etik</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
            Arşivleme İlkelerimiz
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                no: "01",
                title: "Birincil Kaynak Sadakati",
                text: "Arapça, Osmanlı Türkçesi, Rusça ve yerel dillerdeki belgeler; orijinal imlası, fiziksel mühür/kâğıt notları ve karşılaştırmalı çevirileriyle birlikte tahrif edilmeden yayımlanır.",
              },
              {
                no: "02",
                title: "Açık Dijital Erişim",
                text: "Kafkasya'dan Anadolu, Orta Doğu, Avrupa ve Orta Asya'ya yayılan genç kuşaklar ile tarih araştırmacıları tüm dijital koleksiyonlara ücretsiz ve engelsiz erişir.",
              },
              {
                no: "03",
                title: "Aile Mahremiyeti ve Katılım",
                text: "Ailelerin paylaştığı fotoğraflar ve sürgün belgelerinin asılları sahiplerinde kalır; kişisel mahremiyet şerhleri titizlikle korunarak koleksiyona kazandırılır.",
              },
            ].map((item) => (
              <div key={item.no} className="museum-card p-7">
                <span className="font-display text-3xl font-semibold text-gold-light">{item.no}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
