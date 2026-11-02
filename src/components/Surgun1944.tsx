import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "./PageHeader";
import PinnedSteps from "./PinnedSteps";
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

const DATES = ["23 Şubat, şafak", "Saat 11.00", "Sevkiyat", "27 Şubat", "7 Mart", "9 Ocak 1957"];

function Step({ children }: { children: React.ReactNode }) {
  return (
    <article data-step className="flex items-center bg-ink px-5 py-16 md:px-12 lg:h-full lg:py-0">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {children}
      </div>
    </article>
  );
}

function BigNumber({ children }: { children: React.ReactNode }) {
  return (
    <p className="crt-glow font-serif text-[4.2rem] leading-none font-medium text-parchment [font-variant-numeric:lining-nums] sm:text-[6rem] lg:text-[min(20vh,10.5rem)]">
      {children}
    </p>
  );
}

function Record({ doc, tone = "", children }: { doc: ArchiveDoc; tone?: string; children: React.ReactNode }) {
  return (
    <figure>
      <div className="relative aspect-[3/2] overflow-hidden bg-night lg:aspect-auto lg:h-[58svh]">
        <Image
          src={doc.image}
          alt={doc.title}
          fill
          sizes="(max-width:1024px) 100vw, 50vw"
          loading="eager"
          className={`object-cover ${tone}`}
        />
      </div>
      <figcaption className="mt-3 text-white/70">
        {children}{" "}
        <Link href={`/arsiv/${doc.slug}`} className="link-crt whitespace-nowrap text-parchment">
          Kaydı aç
        </Link>
      </figcaption>
    </figure>
  );
}

/** 23 Şubat 1944 sürgünü: devletin sözü telgraf yazısıyla, olanlar serif yazıyla anlatılır. */
export default function Surgun1944() {
  const lentil = requireDoc("mercimek-operasyonu-1944-sevk-haritasi");
  const grozni = requireDoc("grozni-oblasti-1949-tasfiye-haritasi");
  const frunze = requireDoc("yurt-auh-cecenleri-frunze-istasyonu-donus-1957");
  const exhibition = getExhibition("surgun-1944");
  const haybah = PLACES.find((place) => place.id === "haybah");

  return (
    <PinnedSteps labels={DATES} label="23 Şubat 1944 sürgünü">
      {/* Telgraf */}
      <article data-step className="flex items-center bg-ink px-5 pb-16 pt-28 md:px-12 lg:h-full lg:py-0">
        <div className="mx-auto w-full max-w-[1500px]">
          <Breadcrumbs items={[{ label: "1944 Sürgünü" }]} />
          <h1 className="crt-glow mt-5 font-serif text-[3rem] leading-[1.04] font-medium text-parchment sm:text-[4rem] lg:text-[5.5rem]">
            23 Şubat 1944, şafak
          </h1>
          <blockquote className="mt-8 max-w-4xl font-mono text-[1.45rem] leading-snug text-gold-light md:text-[1.9rem]">
            {TELEGRAM.map((line, i) => (
              <p key={line} className="tele-line mt-3" style={{ "--line": i } as React.CSSProperties}>
                {line}
              </p>
            ))}
          </blockquote>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
            Lavrenti Beria&apos;nın Stalin&apos;e gönderdiği 6051 sayılı çok gizli telgraf. GARF, Fon R-9401, Opis 2,
            Dosya 64, Yaprak 165.{" "}
            <Link href={`/arsiv/${lentil.slug}`} className="link-crt whitespace-nowrap text-parchment">
              Telgrafın tamamını oku
            </Link>
          </p>
        </div>
      </article>

      {/* Aynı telgraftan, saat 11.00 */}
      <article data-step className="flex items-center bg-ink px-5 py-16 md:px-12 lg:h-full lg:py-0">
        <div className="mx-auto w-full max-w-[1500px]">
          <h3 className="text-2xl text-parchment md:text-3xl">Aynı gün, saat 11.00</h3>
          <div className="mt-4">
            <BigNumber>94.741</BigNumber>
          </div>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85 md:text-2xl">
            kişi yerleşim yerlerinden çıkarılmıştı. Telgrafa göre bu, sürgüne tabi nüfusun yüzde 20&apos;sinden
            fazlasıydı.
          </p>
        </div>
      </article>

      {/* Toplam */}
      <Step>
        <div>
          <BigNumber>493.269</BigNumber>
          <h3 className="mt-6 text-2xl leading-snug text-parchment md:text-3xl">
            Çeçen ve İnguş, 180 tren katarıyla sürüldü.
          </h3>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            Dondurucu kışta Kazakistan ve Kırgızistan&apos;a gönderildiler.
          </p>
        </div>
        <Record doc={lentil} tone="grayscale">
          Sürgün hatları. {lentil.author}.
        </Record>
      </Step>

      {/* Haybah: görsel yok, yalnızca metin */}
      <article data-step className="flex items-center bg-ink px-5 py-16 md:px-12 lg:h-full lg:py-0">
        <div className="mx-auto w-full max-w-[1500px]">
          <h3 className="crt-glow font-serif text-[3rem] leading-[1.04] font-medium text-parchment sm:text-[4rem] lg:text-[5.5rem]">
            27 Şubat 1944, Haybah
          </h3>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/85 md:text-2xl">
            Galançoj&apos;un bu dağ köyünde, kar yüzünden tren istasyonlarına indirilemeyen yaşlı, kadın ve çocuk
            yüzlerce sivil, kolektif çiftlik ahırında yakılarak katledildi.
          </p>
          {haybah && (
            <Link
              href={`/harita?yer=${haybah.id}`}
              className="link-crt mt-7 inline-flex items-center gap-2.5 text-xl text-parchment"
            >
              Haybah&apos;ı atlasta gör
              <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </article>

      {/* Haritadan silinme */}
      <Step>
        <div>
          <h3 className="crt-glow font-serif text-[3rem] leading-[1.04] font-medium text-parchment sm:text-[4rem] lg:text-[5.5rem]">
            7 Mart 1944
          </h3>
          <p className="mt-6 text-2xl leading-snug text-parchment md:text-3xl">
            Çeçen-İnguş ÖSSC haritadan silindi.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            Toprakları komşu bölgelere paylaştırıldı, bütün Çeçence ve İnguşça yer adları Rusçalaştırıldı.
          </p>
        </div>
        <Record doc={grozni} tone="grayscale">
          Yerine kurulan Grozni Oblastı. {grozni.author}.
        </Record>
      </Step>

      {/* Dönüş */}
      <Step>
        <div>
          <h3 className="crt-glow font-serif text-[3rem] leading-[1.04] font-medium text-parchment sm:text-[4rem] lg:text-[5.5rem]">
            13 yıl sonra
          </h3>
          <p className="mt-6 max-w-xl text-2xl leading-snug text-parchment md:text-3xl">
            9 Ocak 1957&apos;de cumhuriyet yeniden kuruldu, aileler kısıtlamalara rağmen ata ocaklarına döndü.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            Avrupa Parlamentosu 26 Şubat 2004 tarihli kararıyla sürgünü soykırım eylemi olarak tanıdı.
          </p>
          {exhibition && (
            <Link href={`/sergiler/${exhibition.slug}`} className="btn-gold mt-7">
              <span>Sürgün ve Dönüş Sergisini Gez</span>
              <ArrowRight size={17} />
            </Link>
          )}
        </div>
        <Record doc={frunze}>Yurt-Auhlu Çeçenler, Frunze tren istasyonu, 1957.</Record>
      </Step>
    </PinnedSteps>
  );
}
