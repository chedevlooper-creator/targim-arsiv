"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Film,
  LayoutGrid,
  Maximize2,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

export type ReelId = "kule" | "ithaf";

interface VideoChapter {
  start: number;
  end: number;
  short: string;
  chapter: string;
  text: string;
}

const VIDEO_CHAPTERS: VideoChapter[] = [
  {
    start: 0,
    end: 2.2,
    short: "Zirvelerdeki Gözcü",
    chapter: "SAHNE I · 00:00 — ZİRVELERDEKİ GÖZCÜ",
    text: "Bulutların üzerinde yükselen Vaynah savaş kulesi; vadinin ve asırlık hafızanın sarsılmaz nöbetçisi.",
  },
  {
    start: 2.2,
    end: 4.3,
    short: "Taş Kemerli Eşik",
    chapter: "SAHNE II · 00:02 — TAŞ KEMERLİ EŞİK",
    text: "Aralanan kadim meşe kapının ardında, yüzyıllar boyunca korunan saklı kule mahzenine adım atılır.",
  },
  {
    start: 4.3,
    end: 7.8,
    short: "Kandil Işığında Yazmalar",
    chapter: "SAHNE III · 00:04 — KANDİL IŞIĞINDA YAZMALAR",
    text: "Taş duvar önündeki ahşap rafta gaz lambasının aydınlattığı kayışlı deri ciltler ve el yazması kodeksler.",
  },
  {
    start: 7.8,
    end: 10.2,
    short: "Kafkas Dokuması (İstang)",
    chapter: "SAHNE IV · 00:08 — KAFKAS DOKUMASI VE OCAK RUHU",
    text: "Kırmızı geometrik nakışlı geleneksel yün dokumanın (istang) ardında yaşayan zanaat ve yazılı kültür.",
  },
  {
    start: 10.2,
    end: 12.8,
    short: "Taş Koridor ve Mazgal",
    chapter: "SAHNE V · 00:10 — TAŞ KORİDOR VE MAZGAL IŞIĞI",
    text: "Karanlık taş koridorun ucundaki dar mazgal penceresi, geçmişten bugüne süzülen bir ışık huzmesi taşır.",
  },
  {
    start: 12.8,
    end: 16,
    short: "Dağlar Susar, Tarih Konuşur",
    chapter: "SAHNE VI · 00:13 — DAĞLAR SUSAR, TARİH KONUŞUR",
    text: "Taş mazgalın çerçevesinde sisli Kafkas zirveleri — Toprak unutmaz, insan bazen unutur.",
  },
];

const DEDICATION_CHAPTERS: VideoChapter[] = [
  {
    start: 0,
    end: 4.4,
    short: "Mühürlü Parşömen ve İstang",
    chapter: "SAHNE I · 00:00 — MÜHÜRLÜ AHİTNAME VE KAFKAS DOKUMASI",
    text: "Kırmızı mum mühürlü el yazması yapraklar ve geleneksel dokuma üzerinde Targim vadisinin taş kulesi.",
  },
  {
    start: 4.4,
    end: 7.5,
    short: "İstang Kaplı Kule Eşiği",
    chapter: "SAHNE II · 00:05 — KULE EŞİĞİNE YÜRÜYÜŞ",
    text: "Güneşin doğduğu zirveler önünde dokumalarla bezenmiş kemerli taş kapıdan hafıza mahzenine giriş.",
  },
  {
    start: 7.5,
    end: 12.5,
    short: "Kule Kütüphanesi ve Işık",
    chapter: "SAHNE III · 00:08 — IŞIK HUZMESİNDE CANLANAN YAZMALAR",
    text: "Yüksek mazgaldan süzülen ışık altında taş kule raflarından yükselen yüzlerce yıllık belge ve kayıtlar.",
  },
  {
    start: 12.5,
    end: 16,
    short: "Babamın Emeğine Ayrıldı",
    chapter: "SAHNE IV · 00:13 — BABAMIN EMEĞİNE AYRILDI",
    text: "Bir ömür boyu korunan aile ve yurt belleğine vefa ile: Targim Arşiv, babamın emeğine ayrıldı.",
  },
];

/* 350 MB'lık 4K film GitHub sınırını aştığı için depoda değil; adresi ortam değişkeninden gelir */
const FILM_4K = process.env.NEXT_PUBLIC_HERO_FILM_URL;
const FILM_1080 = "/videos/kule-arsivi-tanitim-1080.mp4";

export const REELS: Record<
  ReelId,
  {
    id: ReelId;
    shortLabel: string;
    badgeLabel: string;
    title: string;
    src: string;
    poster: string;
    chapters: VideoChapter[];
  }
> = {
  kule: {
    id: "kule",
    shortLabel: "01 · Kule Arşivi",
    badgeLabel: "TARGİM ARCHIVE · VAYNAH KULE ARŞİVİ FİLMİ",
    title: "Vaynah Kule Arşivi (00:15)",
    src: FILM_4K || FILM_1080,
    poster: "/images/hf-kule-gunbatimi.jpg",
    chapters: VIDEO_CHAPTERS,
  },
  ithaf: {
    id: "ithaf",
    shortLabel: "02 · Babamın Emeğine",
    badgeLabel: "TARGİM ARŞİV · BABAMIN EMEĞİNE AYRILDI",
    title: "Babamın Emeğine Ayrıldı (00:15)",
    src: "/videos/babamin-emegine-ayrildi.mp4",
    poster: "/images/hf-ic-arsiv-yazmalar.jpg",
    chapters: DEDICATION_CHAPTERS,
  },
};

const SLIDES = [
  {
    src: "/images/hf-kule-gunbatimi.jpg",
    chapter: "BÖLÜM I · VAYNAH SAVAŞ KULESİ VE İSTANG",
    text: "Kafkasya'nın karlı zirveleri arasında, asırlara meydan okuyan taştan bir hafıza yükselir.",
  },
  {
    src: "/images/hf-oymali-kapi.jpg",
    chapter: "BÖLÜM II · OYMALI KULE KAPISI VE TAMGALAR",
    text: "Kemerli taş eşikteki dağ motifleri ve dövme demir halka; aileyi, özgürlüğü ve söz namusunu korur.",
  },
  {
    src: "/images/hf-ic-arsiv-yazmalar.jpg",
    chapter: "BÖLÜM III · KULE İÇİ SAKLI YAZMALAR",
    text: "Kandil ışığında muhafaza edilen kırmızı mum mühürlü divan mektupları ve deri ciltli teyp kodeksleri.",
  },
  {
    src: "/images/hf-muhurlu-evrak.jpg",
    chapter: "BÖLÜM IV · MÜHÜRLÜ SİCİL VE DEFTERLER",
    text: "Mor arşiv damgalı tutanaklar, Osmanlı muhacir defterleri ve askeri haritalar bir halkın gerçek sesini taşır.",
  },
  {
    src: "/images/doc-surgun.jpg",
    chapter: "BÖLÜM V · 23 ŞUBAT 1944 SÜRGÜNÜ",
    text: "Kış ortasında koparılan vatan; on üç yıllık sürgünün ardından küllerinden yeniden doğan bir millet.",
  },
  {
    src: "/images/hf-kule-storyboard.jpg",
    chapter: "BÖLÜM VI · 6 SAHNELİK KULE BELLEĞİ PAFTASI",
    text: "Toprak unutmaz, insan bazen unutur. Targim Archive, hatırlamak ve gelecek kuşaklara aktarmak için kuruldu.",
  },
];

/* ========================================================================== */
/* HERO TAM EKRAN KESİNTİSİZ VİDEO HAREKETİ (AMBIENT VIDEO MOTION)            */
/* ========================================================================== */

/* Geniş ekranda 4K film; telefon verisi 367 MB harcamasın diye dar ekranda hafif sürüm */
const HERO_VIDEO_LIGHT = "/videos/kule-arsivi-hero.mp4";
const FILM_START_TIMEOUT = 6000;
const FILM_STALL_TIMEOUT = 2500;

export function HeroVideoBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }
    if (!FILM_4K) return;

    // 4K film 196 Mbps akıyor; bağlantı yetişmezse takılmak yerine 1080p'ye geçilir
    let timer: ReturnType<typeof setTimeout> | undefined;
    const wait = (ms: number) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!FILM_4K || !video.currentSrc.endsWith(FILM_4K)) return;
        video.src = FILM_1080;
        video.play().catch(() => {});
      }, ms);
    };
    const onWaiting = () => wait(FILM_STALL_TIMEOUT);
    const onPlaying = () => clearTimeout(timer);

    wait(FILM_START_TIMEOUT);
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("playing", onPlaying);
    return () => {
      clearTimeout(timer);
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("playing", onPlaying);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
      <video
        ref={videoRef}
        poster={REELS.kule.poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover object-[70%_50%] saturate-[0.8]"
      >
        {FILM_4K && <source src={FILM_4K} type="video/mp4" media="(min-width: 1024px)" />}
        <source src={FILM_1080} type="video/mp4" media="(min-width: 1024px)" />
        <source src={HERO_VIDEO_LIGHT} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/10 md:from-ink md:via-ink/72 md:to-ink/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
    </div>
  );
}

/* ========================================================================== */
/* KAĞIT SAYFADA İTHAF: "BABAMIN EMEĞİNE AYRILDI"                             */
/* ========================================================================== */

export function DedicationFilmSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleSound = () => {
    const v = videoRef.current;
    const next = !muted;
    setMuted(next);
    if (v) {
      v.muted = next;
      if (!next && v.paused) {
        v.play().catch(() => {});
      }
    }
  };

  return (
    <section id="ithaf" className="paper-screen scroll-mt-20">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-12 px-5 py-20 md:px-12 lg:min-h-svh lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
        <div>
          <h2 className="crt-glow font-serif text-[3.2rem] leading-[1.04] font-medium text-parchment md:text-[5rem] xl:text-[6rem]">
            Babamın Emeğine Ayrıldı
          </h2>
          <p className="mt-5 text-2xl leading-snug text-parchment">Vefa ve hafıza</p>
          <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-white/85">
            Mühürlü el yazmalarından taş kulelerin yüksek mazgallarına uzanan bu dijital bellek; yıllar boyunca
            dağılan kayıtları, soy hafızasını ve Kafkasya mirasını bir araya getiren babamın emeğine ithaf edilmiştir.
          </p>
          <Link href="/arsiv" className="link-crt mt-8 inline-flex items-center gap-2.5 text-xl text-parchment">
            Arşiv belgelerine geç
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="ink-screen p-2.5 md:p-3.5">
          <div className="relative aspect-video overflow-hidden bg-black">
            <video
              ref={videoRef}
              src="/videos/babamin-emegine-ayrildi.mp4"
              poster="/images/hf-ic-arsiv-yazmalar.jpg"
              autoPlay
              loop
              muted={muted}
              playsInline
              className="h-full w-full object-cover"
            />

            <div className="absolute right-3 top-3 flex items-center gap-1.5">
              <button
                onClick={toggleSound}
                className="flex h-9 w-9 items-center justify-center bg-ink text-parchment transition hover:bg-parchment hover:text-ink"
                aria-label={muted ? "Sesi aç" : "Sesi kapat"}
                title={muted ? "Sesi aç" : "Sesi kapat"}
              >
                {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <button
                onClick={() => {
                  videoRef.current?.pause();
                  setModalOpen(true);
                }}
                className="flex h-9 w-9 items-center justify-center bg-ink text-parchment transition hover:bg-parchment hover:text-ink"
                aria-label="Tam ekran izle"
                title="Tam ekran izle"
              >
                <Maximize2 size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <IntroFilmModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          videoRef.current?.play().catch(() => {});
        }}
        initialReel="ithaf"
      />
    </section>
  );
}

export function IntroFilmModal({
  open,
  onClose,
  initialReel = "kule",
}: {
  open: boolean;
  onClose: () => void;
  initialReel?: ReelId;
}) {
  return (
    <AnimatePresence>
      {open && <IntroFilmModalBody key={initialReel} initialReel={initialReel} onClose={onClose} />}
    </AnimatePresence>
  );
}

function IntroFilmModalBody({
  onClose,
  initialReel,
}: {
  onClose: () => void;
  initialReel: ReelId;
}) {
  const [mode, setMode] = useState<"kule" | "ithaf" | "slides">(initialReel);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(15);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (mode === "slides") {
        if (e.key === "ArrowRight") setI((v) => (v + 1) % SLIDES.length);
        if (e.key === "ArrowLeft") setI((v) => (v - 1 + SLIDES.length) % SLIDES.length);
      }
    };
    window.addEventListener("keydown", onKey);
    if (mode !== "slides" || paused) return () => window.removeEventListener("keydown", onKey);

    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 5500);
    return () => {
      clearInterval(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [mode, paused, onClose]);

  const isVideo = mode === "kule" || mode === "ithaf";
  const activeReel = isVideo ? REELS[mode] : REELS.kule;
  const chapters = activeReel.chapters;
  const activeChapterIdx = Math.max(
    0,
    chapters.findIndex((c) => currentTime >= c.start && currentTime < c.end)
  );
  const activeVideoChapter = chapters[activeChapterIdx] ?? chapters[0];

  const toggleVideoPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  const jumpToScene = (idx: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = chapters[idx].start;
    v.play();
    setPaused(false);
  };

  return (
    <motion.div
      data-lenis-prevent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[90] overscroll-contain bg-black"
      role="dialog"
      aria-modal="true"
      aria-label="Targim Archive Tanıtım Filmi"
    >
      {isVideo ? (
        <div className="absolute inset-0">
          <video
            key={activeReel.src}
            ref={videoRef}
            src={activeReel.src}
            poster={activeReel.poster}
            autoPlay
            loop
            playsInline
            muted={muted}
            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 15)}
            onPlay={() => setPaused(false)}
            onPause={() => setPaused(true)}
            className="h-full w-full object-contain bg-black"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/92 via-black/20 to-black/60" />
        </div>
      ) : (
        SLIDES.map((s, idx) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ${
              idx === i ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={s.src}
              alt=""
              fill
              sizes="100vw"
              className={`object-cover ${idx === i ? "animate-kenburns" : ""}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/50" />
          </div>
        ))
      )}

      {/* Üst Başlık ve Mod Seçici */}
      <div className="absolute inset-x-0 top-0 z-10 flex flex-wrap items-center justify-between gap-3 px-6 py-6 md:px-14">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rotate-45 bg-gold" />
            <span className="font-display text-xs tracking-[0.3em] text-gold-light">
              {isVideo ? activeReel.badgeLabel : "TARGİM ARCHIVE · 6 KARE ANLATI"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1 rounded-full border border-white/15 bg-black/65 p-1 backdrop-blur-md">
            <button
              onClick={() => {
                setMode("kule");
                setCurrentTime(0);
                setPaused(false);
              }}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.68rem] font-medium tracking-[0.12em] uppercase transition ${
                mode === "kule" ? "bg-[#f3ead8] text-[#090b10]" : "text-white/70 hover:text-white"
              }`}
            >
              <Film size={12} /> Kule Arşivi (00:15)
            </button>
            <button
              onClick={() => {
                setMode("ithaf");
                setCurrentTime(0);
                setPaused(false);
              }}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.68rem] font-medium tracking-[0.12em] uppercase transition ${
                mode === "ithaf" ? "bg-[#f3ead8] text-[#090b10]" : "text-white/70 hover:text-white"
              }`}
            >
              <Film size={12} /> Babamın Emeğine (00:15)
            </button>
            <button
              onClick={() => {
                setMode("slides");
                setPaused(false);
              }}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.68rem] font-medium tracking-[0.12em] uppercase transition ${
                mode === "slides" ? "bg-[#f3ead8] text-[#090b10]" : "text-white/70 hover:text-white"
              }`}
            >
              <LayoutGrid size={12} /> 6 Kare &amp; Anlatı
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {isVideo && (
            <>
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play();
                  }
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white/85 backdrop-blur-md transition hover:border-white/35 hover:bg-white/10 hover:text-white"
                aria-label="Baştan oynat"
              >
                <RotateCcw size={14} />
              </button>
              <button
                onClick={() => setMuted((m) => !m)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white/85 backdrop-blur-md transition hover:border-white/35 hover:bg-white/10 hover:text-white"
                aria-label={muted ? "Sesi aç" : "Sesi kapat"}
              >
                {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>
            </>
          )}
          <button
            onClick={() => (isVideo ? toggleVideoPlay() : setPaused((p) => !p))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white/85 backdrop-blur-md transition hover:border-white/35 hover:bg-white/10 hover:text-white"
            aria-label={paused ? "Oynat" : "Duraklat"}
          >
            {paused ? <Play size={15} className="ml-0.5" /> : <Pause size={15} />}
          </button>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:border-white/45 hover:bg-white/12"
            aria-label="Kapat"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Alt Anlatı & İlerleme */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-8 md:p-16">
        <div className="mx-auto max-w-[1440px]">
          <p key={isVideo ? `vc-${mode}-${activeChapterIdx}` : `c-${i}`} className="eyebrow animate-fade-up">
            {isVideo ? activeVideoChapter.chapter : SLIDES[i].chapter}
          </p>
          <p
            key={isVideo ? `vt-${mode}-${activeChapterIdx}` : `t-${i}`}
            className="mt-3 max-w-4xl font-serif text-2xl italic leading-snug text-[#f5ecd8] md:text-4xl animate-fade-up"
          >
            “{isVideo ? activeVideoChapter.text : SLIDES[i].text}”
          </p>

          {isVideo ? (
            <div className="mt-7 space-y-3">
              {/* İnteraktif Zaman Çubuğu */}
              <div
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                  if (videoRef.current) {
                    videoRef.current.currentTime = ratio * duration;
                  }
                }}
                className="group relative h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-white/20"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light transition-[width] duration-150"
                  style={{ width: `${Math.min(100, (currentTime / Math.max(1, duration)) * 100)}%` }}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {chapters.map((ch, idx) => (
                    <button
                      key={ch.chapter}
                      onClick={() => jumpToScene(idx)}
                      className={`rounded-full border px-3 py-1 text-[0.65rem] font-medium tracking-[0.12em] uppercase transition ${
                        idx === activeChapterIdx
                          ? "border-[#f3ead8] bg-[#f3ead8] text-[#090b10]"
                          : "border-white/15 bg-black/50 text-white/65 hover:border-white/35 hover:text-white"
                      }`}
                    >
                      0{idx + 1} · {ch.short}
                    </button>
                  ))}
                </div>
                <span className="font-mono text-xs tracking-widest text-gold-light">
                  00:{String(Math.floor(currentTime)).padStart(2, "0")} / 00:{String(Math.round(duration)).padStart(2, "0")}
                </span>
              </div>
            </div>
          ) : (
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    aria-label={`Sahne ${idx + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === i ? "w-16 bg-gold-light" : "w-7 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white/85 hover:border-white/35 hover:text-white"
                  aria-label="Önceki sahne"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={() => setI((v) => (v + 1) % SLIDES.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white/85 hover:border-white/35 hover:text-white"
                  aria-label="Sonraki sahne"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
