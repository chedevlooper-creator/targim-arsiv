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
    </>
  );
}
