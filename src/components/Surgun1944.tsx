import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Layers, MapPin } from "lucide-react";
import PageHeader from "./PageHeader";
import { getDoc, getExhibition, PLACES, type ArchiveDoc } from "@/lib/data";

/* Bağlantılar slug ile kurulur; kayıt yeniden adlandırılırsa derleme sessizce değil, burada kırılır */
function requireDoc(slug: string): ArchiveDoc {
  const doc = getDoc(slug);
  if (!doc) throw new Error(`Surgun1944: belge bulunamadı: ${slug}`);
  return doc;
}

/* Telgraf No. 6051'in arşivdeki Türkçe çevirisinden birebir satırlar */
const TELEGRAM = [
  "Devlet Savunma Komitesi — Yoldaş Stalin'e.",
  "Bugün, 23 Şubat şafak vakti Çeçenlerin ve İnguşların sürgün edilmesine yönelik operasyonu başlattık.",
  "Sevkiyat normal seyrediyor...",
  "Beria. 23 Şubat 1944.",
];

const MILESTONES = [
  { id: "safak", label: "23 Şubat · Şafak" },
  { id: "saat-11", label: "Saat 11.00" },
  { id: "sevkiyat", label: "493.269 Sürgün" },
  { id: "haybah", label: "27 Şubat · Haybah" },
  { id: "tasfiye", label: "7 Mart 1944" },
  { id: "donus", label: "9 Ocak 1957" },
];

function RecordCard({ doc, caption }: { doc: ArchiveDoc; caption: string }) {
  return (
    <figure className="museum-card overflow-hidden p-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-night">
        <Image
          src={doc.image}
          alt={doc.title}
          fill
          sizes="(max-width:1024px) 100vw, 50vw"
          className="object-cover transition duration-700 hover:scale-[1.02]"
        />
        <span className="badge-glass absolute left-3 top-3 font-mono">{doc.catalogNo}</span>
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-3 px-2 pb-1 pt-3.5 text-sm text-white/70">
        <span>{caption}</span>
        <Link href={`/arsiv/${doc.slug}`} className="link-crt inline-flex items-center gap-1.5 font-medium text-gold-light">
          Arşiv kaydını aç <ArrowRight size={14} />
        </Link>
      </figcaption>
    </figure>
  );
}

/** 23 Şubat 1944 sürgünü: devlet telgraflarından 1957 dönüşüne kronolojik arşiv anlatısı. */
export default function Surgun1944() {
  const lentil = requireDoc("mercimek-operasyonu-1944-sevk-haritasi");
  const grozni = requireDoc("grozni-oblasti-1949-tasfiye-haritasi");
  const frunze = requireDoc("yurt-auh-cecenleri-frunze-istasyonu-donus-1957");
  const exhibition = getExhibition("surgun-1944");
  const haybah = PLACES.find((place) => place.id === "haybah");

  return (
    <div className="bg-ink pb-24">
      <PageHeader
        eyebrow="23 Şubat 1944 · Toplumsal Hafıza Dosyası"
        title="Bir Halkın Sürgünü"
        subtitle="Şafak vakti başlatılan sevkiyattan 13 yıl sonraki dönüşe; 493.269 Çeçen ve İnguş'un sürgün kronolojisi ve birincil arşiv kayıtları."
        crumbs={[{ label: "1944 Sürgünü" }]}
        image="/images/doc-surgun.jpg"
      >
        <nav aria-label="Sürgünün tarihleri" className="flex flex-wrap items-center gap-2 pt-2">
          {MILESTONES.map((m) => (
            <a key={m.id} href={`#${m.id}`} className="chip">
              {m.label}
            </a>
          ))}
        </nav>
      </PageHeader>

      <div className="mx-auto max-w-[1500px] space-y-12 px-5 pt-12 md:px-12">
        {/* 1. Telgraf */}
        <section id="safak" className="museum-card scroll-mt-24 p-7 md:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow">Bölüm I · 23 Şubat 1944, Şafak</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-parchment md:text-5xl">
                Telgraf No. 6051
              </h2>
              <blockquote className="mt-6 rounded-xl border border-gold/25 bg-night/85 p-6 font-mono text-sm leading-relaxed text-gold-light md:text-base">
                {TELEGRAM.map((line) => (
                  <p key={line} className="mt-2.5 first:mt-0">
                    {line}
                  </p>
                ))}
              </blockquote>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                Lavrenti Beria&apos;nın Stalin&apos;e gönderdiği 6051 sayılı çok gizli telgraf. GARF, Fon R-9401, Opis 2,
                Dosya 64, Yaprak 165.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-night/60 p-7">
              <div>
                <span className="badge-glass">Birincil Arşiv Kaynağı</span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-white">
                  Operasyonun İlk Saatleri
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/75">
                  Köy meydanlarında toplanan halka karar okunduktan sonra ailelere eşyalarını hazırlamaları için yalnızca
                  15 ila 30 dakika süre tanındı.
                </p>
              </div>
              <Link href={`/arsiv/${lentil.slug}`} className="btn-glass w-fit">
                <FileText size={15} /> Telgraf ve Sevk Kaydını İncele
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Saat 11.00 ve 3. Toplam Sevkiyat */}
        <section id="saat-11" className="scroll-mt-24">
          <div id="sevkiyat" className="museum-card scroll-mt-24 p-7 md:p-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="eyebrow">Bölüm II &amp; III · Sevkiyat Bilançosu</p>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-night/75 p-5">
                    <p className="text-xs font-semibold tracking-wider text-gold uppercase">Aynı Gün, Saat 11.00</p>
                    <p className="mt-2 font-serif text-4xl font-semibold text-parchment md:text-5xl">94.741</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/65">
                      İlk sabah saat 11.00&apos;e kadar yerleşim yerlerinden çıkarılan sivil sayısı (nüfusun %20&apos;si).
                    </p>
                  </div>
                  <div className="rounded-xl border border-gold/30 bg-night/75 p-5">
                    <p className="text-xs font-semibold tracking-wider text-gold uppercase">Toplam Sevkiyat</p>
                    <p className="mt-2 font-serif text-4xl font-semibold text-gold-light md:text-5xl">493.269</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/65">
                      180 tren katarıyla dondurucu kışta Kazakistan ve Kırgızistan bozkırlarına sürülen Çeçen ve İnguş.
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Havasız yük vagonlarında haftalar süren yolculuk ve sürgünün ilk yıllarındaki ağır açlık, soğuk ve
                  salgın hastalıklar nedeniyle nüfusun yaklaşık dörtte biri hayatını kaybetti.
                </p>
              </div>

              <RecordCard doc={lentil} caption={`Sürgün sevk hatları haritası · ${lentil.author}`} />
            </div>
          </div>
        </section>

        {/* 4. Haybah */}
        <section id="haybah" className="museum-card scroll-mt-24 p-7 md:p-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="eyebrow">Bölüm IV · 27 Şubat 1944</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-parchment md:text-5xl">
                Haybah Katliamı
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80 md:text-xl">
                Galançoj bölgesinin bu yüksek dağ köyünde, yoğun kar yağışı nedeniyle tren istasyonlarına
                indirilemeyen yaşlı, kadın, hasta ve çocuk yüzlerce sivil, Lavrenti Beria adına hareket eden birlikler
                tarafından kolektif çiftlik ahırında yakılarak katledildi.
              </p>
            </div>
            {haybah && (
              <div className="shrink-0">
                <Link href={`/harita?yer=${haybah.id}`} className="btn-gold">
                  <MapPin size={16} />
                  <span>Haybah&apos;ı Atlasta Gör</span>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* 5. 7 Mart 1944: Haritadan Silinme */}
        <section id="tasfiye" className="museum-card scroll-mt-24 p-7 md:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="eyebrow">Bölüm V · 7 Mart 1944</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-parchment md:text-5xl">
                Haritadan Silinen Cumhuriyet
              </h2>
              <p className="mt-5 text-xl leading-snug text-gold-light">
                Çeçen-İnguş ÖSSC resmen feshedildi ve haritadan silindi.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
                Cumhuriyet toprakları komşu bölgelere paylaştırıldı ve yerine Grozni Oblastı kuruldu. Bütün Çeçence ve
                İnguşça köy, nehir ve ilçe adları kararnameyle Rusçalaştırıldı; dağ köylerindeki asırlık kuleler ve
                mezar taşları tahrip edildi.
              </p>
            </div>

            <RecordCard doc={grozni} caption={`Tasfiye sonrası kurulan Grozni Oblastı haritası · ${grozni.author}`} />
          </div>
        </section>

        {/* 6. 9 Ocak 1957: Dönüş */}
        <section id="donus" className="museum-card scroll-mt-24 p-7 md:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="eyebrow">Bölüm VI · 9 Ocak 1957 (13 Yıl Sonra)</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-parchment md:text-5xl">
                Ata Ocaklarına Dönüş
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80 md:text-xl">
                9 Ocak 1957&apos;de Çeçen-İnguş ÖSSC yeniden kuruldu ve aileler idari kısıtlamalara rağmen vatanlarına
                döndü. Avrupa Parlamentosu, 26 Şubat 2004 tarihli kararıyla 1944 sürgününü soykırım eylemi olarak
                tanıdı.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {exhibition && (
                  <Link href={`/sergiler/${exhibition.slug}`} className="btn-gold">
                    <Layers size={16} />
                    <span>Sürgün ve Dönüş Sergisini Gez</span>
                    <ArrowRight size={16} />
                  </Link>
                )}
                <Link href="/arsiv" className="btn-glass">
                  <span>Tüm Arşiv Kayıtları</span>
                </Link>
              </div>
            </div>

            <RecordCard doc={frunze} caption="Yurt-Auhlu Çeçenler, Frunze tren istasyonu, 1957 dönüş yolculuğu." />
          </div>
        </section>
      </div>
    </div>
  );
}
