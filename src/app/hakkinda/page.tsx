import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DiamondDivider, InstagramLink } from "@/components/Brand";
import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Hakkında",
  description: "Targim Archive dijital hafıza projesinin misyonu ve arşivleme ilkeleri.",
  path: "/hakkinda",
  image: "/images/targim-towers.jpg",
});

export default function HakkindaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dijital Hafıza Girişimi"
        title={
          <>
            Targim{" "}
            <span lang="en" className="[font-feature-settings:'locl'_0]">
              Archive
            </span>{" "}
            Hakkında
          </>
        }
        subtitle="Dağlar susar, tarih konuşur. Çeçen, İnguş ve Kuzey Kafkasya halklarının asırlara yayılan yazılı, görsel ve sözlü mirasını koruma projesi."
        crumbs={[{ label: "Hakkında" }]}
        image="/images/targim-towers.jpg"
      />

      <section className="mx-auto max-w-[1500px] px-5 pb-20 pt-14 md:px-12">
        <div className="museum-card grid items-center gap-10 p-7 md:p-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <span className="eyebrow">İsim ve Sembolizm</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-parchment md:text-5xl">
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
              <Link href="/harita?yer=targim" className="btn-gold">
                Targim&apos;i Atlasta İncele <ArrowRight size={14} />
              </Link>
              <Link href="/sergiler/kuleler-ve-yerlesimler" className="btn-glass">
                Kuleler Sergisi <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-night">
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

        <DiamondDivider className="my-16" />

        {/* Arşivleme İlkelerimiz */}
        <div>
          <span className="eyebrow">Metodoloji ve Etik</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-parchment md:text-4xl">
            Arşivleme İlkelerimiz
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                no: "01",
                title: "Kaynağa Sadakat",
                text: "Her kayıtta kaynak bağlantısı, görsel lisansı ve erişilen kopya belirtilir. Metni okunabilen belgelerde transkripsiyon ve Türkçe çeviri verilir; çeviriler tamamlandıkça eklenir.",
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
                <h3 className="mt-3 text-lg font-semibold text-parchment">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div id="kaynaklar" className="museum-card scroll-mt-28 p-7 md:p-10">
              <span className="eyebrow">Akademik Şeffaflık</span>
              <h2 className="mt-2 font-display text-2xl font-semibold text-parchment md:text-3xl">
                Kaynaklar ve Yöntem
              </h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-relaxed text-white/75">
                <li>
                  Arşiv görsellerinin neredeyse tamamı Wikimedia Commons&apos;taki açık kopyalardan alınmıştır. Eserin kayıtlı
                  olduğu kurum künyede ayrıca belirtilir; bu, görselin o kurumdan doğrudan alındığı anlamına gelmez.
                </li>
                <li>
                  Arşivde dönem belgelerinin yanında sonradan hazırlanmış haritalar ve günümüzde çekilmiş fotoğraflar da
                  vardır. Yapım bilgisi ve lisans her kaydın künyesindedir.
                </li>
                <li>TRG ile başlayan kayıt numaraları Targim&apos;in kendi numaralarıdır, kurum katalog numarası değildir.</li>
                <li>
                  Kişi portreleri dijital olarak temizlenmiş ve onarılmıştır; bazılarında arka plan sonradan üretilmiştir.
                  Bu nedenle portreleri belge değil, görsel anlatım olarak değerlendirin.
                </li>
              </ul>
            </div>

            <div className="museum-card flex flex-col justify-between p-7 md:p-10">
              <div>
                <span className="eyebrow">Koleksiyona Katkı</span>
                <h2 className="mt-2 font-display text-2xl font-semibold text-parchment md:text-3xl">
                  Bize Ulaşın
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/75">
                  Elinizdeki aile fotoğrafları, mektuplar veya sürgün belgeleri için ya da bir kayıttaki hatayı bildirmek
                  için Instagram hesabımızdan mesaj gönderin.
                </p>
              </div>
              <div className="mt-8 border-t border-white/10 pt-5">
                <InstagramLink className="text-lg font-medium text-gold-light" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
