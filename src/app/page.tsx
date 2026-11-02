import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FilmReel, { type ReelItem } from "@/components/FilmReel";
import { HeroVideoBackdrop } from "@/components/HomeClient";
import {
  CULTURE_ITEMS,
  DOCS,
  EXHIBITIONS,
  PEOPLE,
  PLACES,
  TIMELINE,
} from "@/lib/data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ path: "/" });

const COLLECTIONS: ReelItem[] = [
  {
    href: "/kisiler",
    title: "Kişiler",
    sub: `${PEOPLE.length} tarihi portre`,
    image: "/images/kisiler.jpg",
  },
  {
    href: "/arsiv",
    title: "Arşiv",
    sub: `${DOCS.length} arşiv kaydı`,
    image: "/images/hf-ic-arsiv-yazmalar.jpg",
  },
  {
    href: "/zaman-cizelgesi",
    title: "Zaman Çizelgesi",
    sub: `${TIMELINE.length} dönüm noktası`,
    image: "/images/hf-muhurlu-evrak.jpg",
  },
  {
    href: "/harita",
    title: "Tarih Atlası",
    sub: `${PLACES.length} yerleşim ve olay yeri`,
    image: "/images/atlas.jpg",
  },
  {
    href: "/sergiler",
    title: "Sergiler",
    sub: `${EXHIBITIONS.length} tematik sergi`,
    image: "/images/imamet.jpg",
  },
  {
    href: "/kultur",
    title: "Kültür",
    sub: `${CULTURE_ITEMS.length} başlıkta gelenek ve yaşam`,
    image: "/images/kultur.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* ================================================================ */}
      {/* AÇILIŞ: KULE FİLMİ VE PARLAYAN BAŞLIK                             */}
      {/* ================================================================ */}
      <section id="daglar" className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-ink">
        <HeroVideoBackdrop />

        <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 items-center px-5 pt-28 pb-10 md:px-12">
          <div className="max-w-xl">
            <p className="eyebrow">Kuzey Kafkasya Dijital Hafıza Koleksiyonu</p>
            <h1 className="archive-hero-title mt-3 font-serif text-[3.2rem] leading-[1.02] font-medium text-parchment drop-shadow-[0_4px_24px_rgba(0,0,0,0.75)] sm:text-[4.6rem] lg:text-[5.8rem]">
              Dağlar susar, tarih konuşur.
            </h1>

            <p className="archive-hero-summary mt-5 max-w-[32rem] text-base drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] md:text-lg">
              Çeçen, İnguş ve Kafkasya tarihini; öncü şahsiyetlerini, taş kule vadilerini ve birincil arşiv
              belgelerini keşfedin.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/arsiv" className="btn-gold">
                <span>Arşive Gir</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/harita" className="btn-glass bg-ink/55">
                <span>3B Tarih Atlası</span>
              </Link>
              <Link href="/kisiler" className="btn-glass bg-ink/55">
                <span>Kişiler ({PEOPLE.length})</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Alt Hızlı Özet Şeridi */}
        <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-8 md:px-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { href: "/kisiler", num: PEOPLE.length, label: "Tarihi Portre ve Biyografi" },
              { href: "/arsiv", num: DOCS.length, label: "Birincil Arşiv Belgesi" },
              { href: "/harita", num: PLACES.length, label: "3B Kule ve Coğrafi Nokta" },
              { href: "/sergiler", num: EXHIBITIONS.length, label: "Küratöryel Dijital Sergi" },
            ].map((stat) => (
              <Link
                key={stat.href}
                href={stat.href}
                className="archive-stat group flex items-center justify-between border border-white/12 px-4 py-4 backdrop-blur-sm transition"
              >
                <div>
                  <span className="block font-serif text-2xl leading-none font-semibold text-gold-light md:text-3xl">
                    {stat.num}
                  </span>
                  <span className="mt-1 block text-[0.7rem] text-white/70">{stat.label}</span>
                </div>
                <ArrowRight
                  size={14}
                  className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-gold-light"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* BÖLÜM DİZİNİ: ARŞİV MAKARASI VE ALTI BÖLÜM                        */}
      {/* ================================================================ */}
      <FilmReel items={COLLECTIONS} />

      {/* ================================================================ */}
      {/* 1944 SÜRGÜNÜ: KENDİ SAYFASINA GİRİŞ                               */}
      {/* ================================================================ */}
      <section className="border-t border-white/10 bg-ink px-5 py-20 md:px-12 md:py-28">
        <div className="museum-card mx-auto max-w-[1500px] overflow-hidden p-8 md:p-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="eyebrow">Toplumsal Hafıza Dosyası</p>
              <h2 className="crt-glow mt-3 font-serif text-[2.8rem] leading-[1.04] font-medium text-parchment md:text-[4.6rem]">
                23 Şubat 1944 Sürgünü
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                Şafak vakti başlatılan operasyonla 493.269 Çeçen ve İnguş, 180 tren katarıyla Orta Asya bozkırlarına
                sürüldü. Devlet telgraflarından 1957 dönüşüne, bir halkın sürgününü arşiv kayıtlarıyla gün gün inceleyin.
              </p>
              <div className="mt-8">
                <Link href="/surgun-1944" className="btn-gold">
                  <span>Sürgünün Hikâyesini Oku</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-xl border border-white/10 bg-night/70 p-5">
                <p className="font-serif text-3xl font-semibold text-gold-light md:text-4xl">493.269</p>
                <p className="mt-1 text-xs tracking-wider text-white/60 uppercase">Sürgün Edilen Çeçen ve İnguş</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-night/70 p-5">
                <p className="font-serif text-3xl font-semibold text-gold-light md:text-4xl">180 Katar</p>
                <p className="mt-1 text-xs tracking-wider text-white/60 uppercase">Kazakistan ve Kırgızistan Sevkıyatı</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-night/70 p-5">
                <p className="font-serif text-3xl font-semibold text-gold-light md:text-4xl">1944 – 1957</p>
                <p className="mt-1 text-xs tracking-wider text-white/60 uppercase">13 Yıllık Sürgün ve Vatanına Dönüş</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
