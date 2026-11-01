import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FiligreeLink } from "@/components/Brand";
import {
  DedicationFilmSection,
  HeroVideoBackdrop,
  MobileIntroFilm,
  SectionRail,
  TimelineStrip,
} from "@/components/HomeClient";
import { eraLabel, FEATURED_PEOPLE, PEOPLE } from "@/lib/data";

const CATEGORIES = [
  { href: "/kisiler", title: "Kişiler", sub: `${PEOPLE.length} tarihi portre`, image: "/images/kisiler.jpg" },
  { href: "/arsiv", title: "Arşiv", sub: "Kule yazmaları ve belgeler", image: "/images/hf-ic-arsiv-yazmalar.jpg" },
  { href: "/harita", title: "Tarih Atlası", sub: "Yerleşimler, sınırlar, olaylar", image: "/images/atlas.jpg" },
  { href: "/harita?katman=kule", title: "Yerleşimler", sub: "Kuleler, köyler, şehirler", image: "/images/hf-kule-gunbatimi.jpg" },
  { href: "/sergiler", title: "Sergiler", sub: "Tematik koleksiyonlar", image: "/images/imamet.jpg" },
  { href: "/kultur", title: "Kültür", sub: "Gelenek, sanat, yaşam", image: "/images/kultur.jpg" },
];

export default function Home() {
  return (
    <>
      {/* ================================================================ */}
      {/* TAM EKRAN VİDEO MOTION HERO VE 6 ANA KATEGORİ KARTI               */}
      {/* ================================================================ */}
      <section id="daglar" className="grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden">
        <HeroVideoBackdrop />

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 items-center px-5 pb-10 pt-28 md:px-10 lg:pt-32">
          <div className="flex w-full items-center gap-10 xl:gap-16">
            <SectionRail />

            <div className="max-w-[600px]">
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[0.6rem] font-medium tracking-[0.18em] text-gold-light uppercase backdrop-blur-md">
                  <span className="h-1 w-1 rounded-full bg-gold-light shadow-[0_0_6px_rgba(242,226,190,0.9)]" />
                  Bir Halkın Dijital Hafızası
                </span>
              </div>

              <h1 className="mt-4 font-display text-[2rem] font-semibold leading-[1.06] tracking-tight sm:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.25rem] animate-fade-up [animation-delay:100ms]">
                <span className="gold-text block">DAĞLAR SUSAR</span>
                <span className="gold-text block">TARİH KONUŞUR.</span>
              </h1>

              <p className="mt-4 max-w-[460px] text-sm leading-relaxed text-white/75 md:text-[0.95rem] animate-fade-up [animation-delay:200ms]">
                Targim Archive; Çeçen, İnguş ve Kafkasya&apos;nın tarihini, insanlarını ve kültürel mirasını birincil
                belgelerle bir araya getiren modern bir dijital hafıza arşividir.
              </p>

              <div
                data-hero-cta-row
                className="mt-6 flex flex-wrap items-center gap-2.5 animate-fade-up [animation-delay:300ms]"
              >
                <FiligreeLink href="/arsiv" size="sm">
                  Arşive Gir
                </FiligreeLink>
                <Link
                  href="/kisiler"
                  className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-5 text-[0.7rem] font-semibold tracking-[0.1em] text-white uppercase backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/14"
                >
                  <span>Şahsiyetler ({PEOPLE.length})</span>
                  <ArrowUpRight
                    size={13}
                    className="text-gold-light transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <MobileIntroFilm />
              </div>
            </div>
          </div>
        </div>

        {/* Alt 6'lı Modern Cam Kategori Kartları */}
        <div className="relative z-10 w-full pb-7">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.title}
                  href={c.href}
                  className="museum-card group relative h-40 overflow-hidden xl:h-[176px]"
                >
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1280px) 33vw, 17vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold tracking-wide text-white transition group-hover:text-gold-light">
                        {c.title}
                      </h3>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/75 backdrop-blur-sm transition group-hover:border-white/35 group-hover:bg-white group-hover:text-[#090b10]">
                        <ArrowUpRight size={12} />
                      </span>
                    </div>
                    <p className="mt-1 truncate text-xs text-white/65">{c.sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* YATAY ZAMAN ÇİZELGESİ ŞERİDİ                                      */}
      {/* ================================================================ */}
      <section id="mucadele" className="topo-bg relative scroll-mt-20 border-t border-white/[0.08] py-8">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <TimelineStrip />
        </div>
      </section>

      {/* ================================================================ */}
      {/* ÖNE ÇIKAN ŞAHSİYETLER (330 PORTRE KOLEKSİYONUNDAN SEÇKİ)           */}
      {/* ================================================================ */}
      <section id="insanlar" className="defer-offscreen-section relative scroll-mt-20 border-t border-white/[0.08] py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
                Portre Koleksiyonu · {PEOPLE.length} Şahsiyet
              </span>
              <h2 className="mt-2.5 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Tarihe İz Bırakanlar
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60">
                1785 birleşme hareketinden yakın döneme uzanan öncüler, alimler, naipler ve komutanların restore edilmiş
                biyografik portre arşivi.
              </p>
            </div>
            <Link href="/kisiler" className="btn-glass">
              Tüm {PEOPLE.length} Portreyi Keşfet <ArrowRight size={14} className="text-gold-light" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {FEATURED_PEOPLE.map((p) => (
              <Link
                key={p.slug}
                href={`/kisiler/${p.slug}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.08] bg-night shadow-[0_16px_38px_-16px_rgba(0,0,0,0.88)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-gold-light/40">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                    className="portrait-tone object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/55 via-ink/15 to-transparent" />
                </div>

                <h3 className="mt-3.5 text-[0.95rem] font-semibold text-white transition group-hover:text-gold-light">
                  {p.name}
                </h3>
                <p className="mt-0.5 line-clamp-1 text-sm text-white/55">{p.title}</p>
                <p className="mt-1.5 text-xs text-white/40">
                  <span className="font-mono text-gold-light/75">
                    {p.born}–{p.died}
                  </span>{" "}
                  · {eraLabel(p.era)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* KULE BELLEĞİ VE İTHAF FİLMİ                                       */}
      {/* ================================================================ */}
      <div className="pb-16">
        <DedicationFilmSection />
      </div>
    </>
  );
}

