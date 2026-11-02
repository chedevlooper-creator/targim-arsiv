import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BootScreen from "@/components/BootScreen";
import FilmReel, { type ReelItem } from "@/components/FilmReel";
import {
  DedicationFilmSection,
  HeroVideoBackdrop,
} from "@/components/HomeClient";
import {
  CULTURE_ITEMS,
  DOCS,
  eraLabel,
  EXHIBITIONS,
  FEATURED_PEOPLE,
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
    sub: `${DOCS.length} birincil belge`,
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
      <BootScreen />

      {/* ================================================================ */}
      {/* AÇILIŞ: KULE FİLMİ VE PARLAYAN BAŞLIK                             */}
      {/* ================================================================ */}
      <section id="daglar" className="relative flex min-h-svh items-center overflow-hidden bg-ink">
        <HeroVideoBackdrop />

        <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-16 pt-28 md:px-12">
          <h1 className="crt-glow max-w-[11ch] font-serif text-[3.4rem] leading-[1.02] font-medium text-parchment sm:text-[5rem] lg:text-[7rem] xl:text-[8rem]">
            Dağlar susar, tarih konuşur.
          </h1>

          <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-parchment md:text-xl">
            Çeçen, İnguş ve Kafkasya tarihini; insanlarını ve kültürel mirasını birincil belgelerle okuyun.
          </p>

          <Link href="/arsiv" className="btn-gold mt-8">
            <span>Arşive Gir</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* ================================================================ */}
      {/* BÖLÜM DİZİNİ: ARŞİV MAKARASI VE ALTI BÖLÜM                        */}
      {/* ================================================================ */}
      <FilmReel items={COLLECTIONS} />

      {/* ================================================================ */}
      {/* 1944 SÜRGÜNÜ: KENDİ SAYFASINA GİRİŞ                               */}
      {/* ================================================================ */}
      <section className="bg-ink px-5 py-24 text-center md:py-32">
        <h2 className="crt-glow font-serif text-[3rem] leading-[1.04] font-medium text-parchment md:text-[5.5rem]">
          23 Şubat 1944
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-white/85">
          493.269 Çeçen ve İnguş, 180 tren katarıyla sürüldü. Bir halkın sürgünü, arşiv kayıtlarıyla gün gün.
        </p>
        <Link href="/surgun-1944" className="btn-gold mt-8">
          <span>Sürgünün Hikâyesini Oku</span>
          <ArrowRight size={17} />
        </Link>
      </section>

      {/* ================================================================ */}
      {/* ÖNE ÇIKAN ŞAHSİYETLER                                             */}
      {/* ================================================================ */}
      <section id="insanlar" className="relative scroll-mt-20">
        <div className="relative flex min-h-[86svh] items-center justify-center overflow-hidden bg-ink px-5 text-center">
          <Image
            src="/images/kisiler.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[50%_60%] contrast-[1.08] grayscale"
          />
          <div className="absolute inset-0 bg-ink/45" />
          <div className="relative">
            <h2 className="crt-glow font-serif text-[3.2rem] leading-[1.04] font-medium text-parchment md:text-[6rem] lg:text-[7.5rem]">
              Tarihe İz Bırakanlar
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-parchment md:text-xl">
              1785 birleşme hareketinden yakın döneme uzanan öncüler, alimler, naipler ve komutanlar.
            </p>
          </div>
        </div>

        <div className="defer-offscreen-section mx-auto max-w-[1500px] px-5 py-14 md:px-12">
          <div className="grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-4">
            {FEATURED_PEOPLE.slice(0, 4).map((p) => (
              <Link key={p.slug} href={`/kisiler/${p.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-night">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                    className="portrait-tone object-cover object-top"
                  />
                </div>
                <h3 className="mt-3 font-serif text-xl leading-snug font-medium text-parchment transition group-hover:text-gold-light">
                  {p.name}
                </h3>
                <p className="mt-0.5 text-white/70">
                  {p.born}–{p.died}, {eraLabel(p.era)}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/kisiler" className="btn-gold">
              <span>{PEOPLE.length} Portrenin Tümünü Gör</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* KAĞIT SAYFA: İTHAF FİLMİ                                          */}
      {/* ================================================================ */}
      <div className="istang-band" aria-hidden="true" />
      <DedicationFilmSection />
    </>
  );
}
