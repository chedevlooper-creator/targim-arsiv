"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, Film, LayoutGrid, Maximize2, Pause, Play, Volume2, VolumeX } from "lucide-react";

const KULE_BEATS = [
  { t: 0, label: "01 · Sırt Kulesi" },
  { t: 2.2, label: "02 · Taş Kemer" },
  { t: 4.5, label: "03 · Kandil & Yazma" },
  { t: 8.0, label: "04 · İstang Dokuma" },
  { t: 10.3, label: "05 · Taş Koridor" },
  { t: 13.0, label: "06 · Mazgal Zirvesi" },
];

const ITHAF_BEATS = [
  { t: 0, label: "01 · Mühürlü Parşömen" },
  { t: 4.5, label: "02 · İstang & Eşik" },
  { t: 7.8, label: "03 · Kule Kütüphanesi" },
  { t: 12.8, label: "04 · Babamın Emeğine" },
];

const SHOWCASE_CARDS = [
  {
    href: "/arsiv/kule-ici-yazma-kodeks",
    code: "TRG-MS-1848-019",
    title: "Kule İçi El Yazması Kodeksi",
    sub: "Deri ciltler, kırmızı mum mühür ve kandil ışığı",
    image: "/images/hf-ic-arsiv-yazmalar.jpg",
  },
  {
    href: "/arsiv/oymali-vaynah-kule-kapisi",
    code: "TRG-AR-1740-007",
    title: "Oymalı Vaynah Kule Kapısı",
    sub: "Dağ tamgaları, kökboyası izi ve demir halka",
    image: "/images/hf-oymali-kapi.jpg",
  },
  {
    href: "/arsiv/muhurlu-arsiv-sicili-1924",
    code: "TRG-RG-1924-063",
    title: "Mühürlü Köy ve Arazi Sicili",
    sub: "Mor dairevi mühürlü tutanak ve kayıt defteri",
    image: "/images/hf-muhurlu-evrak.jpg",
  },
  {
    href: "/arsiv/targim-safak-kulesi-ve-istang",
    code: "TRG-PH-1885-034",
    title: "Savaş Kulesi ve İstang Bordürü",
    sub: "Piramidal taş çatı ve kırmızı Kafkas motifi",
    image: "/images/hf-kule-sabah.jpg",
  },
];

export default function TowerArchiveShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [view, setView] = useState<"kule" | "ithaf" | "storyboard">("kule");

  const isVideo = view === "kule" || view === "ithaf";
  const videoSrc = view === "ithaf" ? "/videos/babamin-emegine-ayrildi.mp4" : "/videos/kule-arsivi-tanitim.mp4";
  const posterSrc = view === "ithaf" ? "/images/hf-ic-arsiv-yazmalar.jpg" : "/images/hf-kule-gunbatimi.jpg";
  const beats = view === "ithaf" ? ITHAF_BEATS : KULE_BEATS;

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleSound = () => {
    const v = videoRef.current;
    const next = !muted;
    setMuted(next);
    if (v) {
      v.muted = next;
      if (!next && v.paused) {
        v.play().catch(() => {});
        setPlaying(true);
      }
    }
  };

  const jump = (sec: number) => {
    if (!isVideo) setView("kule");
    setTimeout(() => {
      const v = videoRef.current;
      if (!v) return;
      v.currentTime = sec;
      v.play().catch(() => {});
      setPlaying(true);
    }, 30);
  };

  const openFullscreen = () => {
    videoRef.current?.requestFullscreen?.();
  };

  return (
    <div className="museum-card relative mb-10 overflow-hidden">
      {/* Yontma taş duvar dokusu arka plan katmanı */}
      <div className="pointer-events-none absolute inset-0 opacity-28">
        <Image
          src="/images/hf-tas-duvar-dokusu.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/82 to-ink/92" />
      </div>

      <div className="relative grid gap-6 p-5 md:p-8 lg:grid-cols-[1.18fr_1fr]">
        {/* Sol: 15 sn Sinematik Kule Yürüyüşü / İthaf Filmi Oynatıcısı / 6 Kare Storyboard */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
            <div>
              <p className="eyebrow">Özel Koleksiyon · Görsel-İşitsel Belgeleme</p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-[#f5ecd8] md:text-3xl">
                Vaynah Kule İçi Saklı Arşiv
              </h2>
            </div>

            <div className="flex flex-wrap items-center overflow-hidden border border-gold/35 bg-ink/80">
              <button
                onClick={() => {
                  setView("kule");
                  setPlaying(true);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.66rem] tracking-[0.16em] uppercase transition ${
                  view === "kule" ? "bg-gold/25 text-gold-light" : "text-mist hover:text-white"
                }`}
              >
                <Film size={12} /> Kule Arşivi (00:15)
              </button>
              <button
                onClick={() => {
                  setView("ithaf");
                  setPlaying(true);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.66rem] tracking-[0.16em] uppercase transition ${
                  view === "ithaf" ? "bg-gold/25 text-gold-light" : "text-mist hover:text-white"
                }`}
              >
                <Film size={12} /> Babamın Emeğine (00:15)
              </button>
              <button
                onClick={() => setView("storyboard")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.66rem] tracking-[0.16em] uppercase transition ${
                  view === "storyboard" ? "bg-gold/25 text-gold-light" : "text-mist hover:text-white"
                }`}
              >
                <LayoutGrid size={12} /> 6 Kare Pafta
              </button>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden border border-gold/45 bg-black shadow-[0_14px_38px_rgba(0,0,0,0.75)]">
            {isVideo ? (
              <>
                <video
                  key={videoSrc}
                  ref={videoRef}
                  src={videoSrc}
                  poster={posterSrc}
                  autoPlay
                  muted={muted}
                  loop
                  playsInline
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="inline-flex items-center gap-2 border border-gold/50 bg-ink/85 px-3 py-1.5 text-[0.68rem] tracking-[0.18em] text-gold-light uppercase backdrop-blur-sm transition hover:border-gold-light hover:bg-gold/20"
                    >
                      {playing ? <Pause size={12} /> : <Play size={12} />}
                      {playing ? "Duraklat" : "Oynat"}
                    </button>
                    <button
                      onClick={toggleSound}
                      className="inline-flex items-center gap-1.5 border border-gold/45 bg-ink/85 px-3 py-1.5 text-[0.66rem] tracking-[0.18em] text-[#ece3d0] uppercase backdrop-blur-sm transition hover:border-gold-light hover:text-gold-light"
                    >
                      {muted ? <VolumeX size={12} className="text-gold" /> : <Volume2 size={12} className="text-gold-light" />}
                      {muted ? "Sesli İzle" : "Ses Açık"}
                    </button>
                  </div>
                  <button
                    onClick={openFullscreen}
                    className="inline-flex items-center gap-1.5 border border-gold/35 bg-ink/80 px-2.5 py-1.5 text-[0.65rem] tracking-widest text-[#ece3d0] uppercase backdrop-blur-sm transition hover:border-gold-light hover:text-gold-light"
                    aria-label="Tam ekran oynat"
                  >
                    <Maximize2 size={12} /> Tam Ekran
                  </button>
                </div>
              </>
            ) : (
              <Link href="/arsiv/kule-arsivi-sinematik-storyboard" className="group block h-full w-full">
                <Image
                  src="/images/hf-kule-storyboard.jpg"
                  alt="Vaynah Taş Kulesi ve İç Arşiv 6 sahnelik storyboard paftası"
                  fill
                  sizes="(max-width:1024px) 100vw, 55vw"
                  className="object-cover transition duration-500 group-hover:scale-103"
                />
                <span className="absolute bottom-3 right-3 border border-gold/45 bg-ink/85 px-3 py-1 text-[0.65rem] tracking-[0.18em] text-gold-light uppercase">
                  TRG-AV-2024-101 · Tıpkıbasımı Aç →
                </span>
              </Link>
            )}
          </div>

          {/* Sahne Atlama Çubuğu */}
          <div
            className={`mt-3 grid grid-cols-2 gap-1.5 ${
              view === "ithaf" ? "sm:grid-cols-4" : "sm:grid-cols-3 xl:grid-cols-6"
            }`}
          >
            {beats.map((b) => (
              <button
                key={b.label}
                onClick={() => jump(b.t)}
                className="truncate border border-gold/25 bg-ink/70 px-2 py-1.5 text-left text-[0.64rem] tracking-wider text-[#d6cdbb] transition hover:border-gold hover:bg-gold/15 hover:text-gold-light"
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sağ: 2x2 Yüksek Çözünürlüklü Kule & Yazma Seçkisi */}
        <div className="flex flex-col justify-between">
          <p className="font-serif text-base leading-relaxed text-[#d9d0be] md:text-lg">
            Sarp dağ sırtlarındaki Vaynah savaş kulelerinin oymalı meşe kapıları ardında; asırlar boyunca yangınlardan
            ve sürgünlerden saklanan deri ciltli el yazmaları, kırmızı mum mühürlü ahitnameler ve köy sicilleri yer alır.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {SHOWCASE_CARDS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group relative flex overflow-hidden border border-gold/30 bg-ink/80 transition hover:border-gold-light"
              >
                <div className="relative h-28 w-24 shrink-0 overflow-hidden bg-black">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="120px"
                    className="object-cover transition duration-500 group-hover:scale-108"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-3">
                  <div>
                    <span className="font-mono text-[0.58rem] tracking-wider text-gold">{c.code}</span>
                    <h3 className="mt-0.5 font-display text-sm leading-snug text-[#f5ecd8] group-hover:text-gold-light">
                      {c.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[0.7rem] leading-snug text-mist">{c.sub}</p>
                  </div>
                  <span className="mt-1.5 inline-flex items-center gap-1 text-[0.64rem] tracking-[0.16em] text-gold-light uppercase">
                    İncele <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
