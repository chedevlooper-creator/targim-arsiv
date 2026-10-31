import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FiligreeLink } from "@/components/Brand";
import {
  HeroVideoBackdrop,
  MobileIntroFilm,
  SectionRail,
  TimelineStrip,
} from "@/components/HomeClient";

const CATEGORIES = [
  { href: "/kisiler", title: "Kişiler", sub: "Tarihe iz bırakanlar", image: "/images/kisiler.jpg" },
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
        {/* Canlı Tam Ekran Kesintisiz Video Motion Arka Planı */}
        <HeroVideoBackdrop />

        {/* Üst-Orta Hero Sahnesi */}
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 items-center px-5 pb-10 pt-28 md:px-10 lg:pt-32">
          <div className="flex w-full items-center gap-10 xl:gap-16">
            {/* Sol dikey modern bölüm göstergesi + bağlı Tanıtım Filmi kapsülü */}
            <SectionRail />

            {/* Ana Başlık ve İki Yönlü Geçiş (Arşiv / Kahramanlar) */}
            <div className="max-w-[740px]">
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[0.68rem] font-medium tracking-[0.2em] text-gold-light uppercase backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-light shadow-[0_0_8px_rgba(242,226,190,0.9)]" />
                  Bir Halkın Dijital Hafızası
                </span>
              </div>

              <h1 className="mt-5 font-display text-[2.5rem] font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] animate-fade-up [animation-delay:100ms]">
                <span className="gold-text block">DAĞLAR SUSAR</span>
                <span className="gold-text block">TARİH KONUŞUR.</span>
              </h1>

              <p className="mt-5 max-w-[540px] text-base leading-relaxed text-white/80 md:text-lg animate-fade-up [animation-delay:200ms]">
                Targim Archive; Çeçen, İnguş ve Kafkasya&apos;nın tarihini, insanlarını ve kültürel mirasını birincil
                belgelerle bir araya getiren modern bir dijital hafıza arşividir.
              </p>

              <div
                data-hero-cta-row
                className="mt-8 flex flex-wrap items-center gap-3.5 animate-fade-up [animation-delay:300ms]"
              >
                <FiligreeLink href="/arsiv">Arşive Gir</FiligreeLink>
                <Link
                  href="/kisiler"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.07] px-6 text-[0.78rem] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/14"
                >
                  <span>Kahramanlar</span>
                  <ArrowUpRight
                    size={15}
                    className="text-gold-light transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <MobileIntroFilm />
              </div>
            </div>
          </div>
        </div>

        {/* Alt 6'lı Modern Cam Kategori Kartları */}
        <div id="insanlar" className="relative z-10 w-full scroll-mt-24 pb-7">
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
    </>
  );
}
