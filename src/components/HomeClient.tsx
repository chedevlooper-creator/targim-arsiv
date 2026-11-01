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
import { TIMELINE } from "@/lib/data";
import { FiligreeLink } from "@/components/Brand";

/* Sol dikey bölüm göstergesi + bağlı Tanıtım Filmi tetikleyicisi */
const RAIL = [
  { id: "daglar", href: "#daglar", label: "Dağlar" },
  { id: "mucadele", href: "#mucadele", label: "Mücadele" },
  { id: "insanlar", href: "#insanlar", label: "İnsanlar" },
  { id: "ithaf", href: "#ithaf", label: "Kule Belleği" },
  { id: "yerlesimler", href: "/harita", label: "Atlas" },
];

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
    src: "/videos/kule-arsivi-tanitim.mp4",
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

export function HeroVideoBackdrop() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const kuleRef = useRef<HTMLVideoElement>(null);
  const ithafRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState<ReelId>("kule");
  const switchingRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!parallaxRef.current) return;
        const y = Math.min(window.scrollY, 900);
        const shift = (y * 0.16).toFixed(1);
        const scale = (1.02 + y * 0.00006).toFixed(4);
        parallaxRef.current.style.transform = `translate3d(0, ${shift}px, 0) scale(${scale})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const crossfadeTo = (next: ReelId) => {
    if (switchingRef.current) return;
    switchingRef.current = true;
    const incoming = next === "ithaf" ? ithafRef.current : kuleRef.current;
    const outgoing = next === "ithaf" ? kuleRef.current : ithafRef.current;
    if (incoming) {
      incoming.currentTime = 0;
      incoming.play().catch(() => {});
    }
    setActive(next);
    window.setTimeout(() => {
      if (outgoing) {
        outgoing.pause();
        outgoing.currentTime = 0;
      }
      switchingRef.current = false;
    }, 1050);
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      <div
        ref={parallaxRef}
        className="absolute inset-0 will-change-transform transition-transform duration-150 ease-out"
        style={{ transform: "translate3d(0, 0px, 0) scale(1.02)" }}
      >
        <video
          ref={kuleRef}
          src={REELS.kule.src}
          poster={REELS.kule.poster}
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={(e) => {
            const v = e.currentTarget;
            if (active === "kule" && v.duration > 0 && v.currentTime >= v.duration - 0.9) {
              crossfadeTo("ithaf");
            }
          }}
          onEnded={() => crossfadeTo("ithaf")}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            active === "kule" ? "opacity-100" : "opacity-0"
          }`}
        />
        <video
          ref={ithafRef}
          src={REELS.ithaf.src}
          poster={REELS.ithaf.poster}
          muted
          playsInline
          preload="auto"
          onTimeUpdate={(e) => {
            if (active === "ithaf" && e.currentTarget.currentTime >= 11.8) {
              crossfadeTo("kule");
            }
          }}
          onEnded={() => crossfadeTo("kule")}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            active === "ithaf" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Yalnızca sol metin alanını koruyan dengeli sinematik vinyet — video hareketini açık bırakır */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 56% 66% at 23% 44%, rgba(6,8,11,0.82) 0%, rgba(6,8,11,0.44) 56%, rgba(6,8,11,0.12) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/86 via-ink/36 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-ink via-ink/82 to-transparent" />
    </div>
  );
}

/* ========================================================================== */
/* ÖZEL İTHAF BÖLÜMÜ: "BABAMIN EMEĞİNE AYRILDI" İKİ SÜTUNLU FİLM KARTI        */
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
    <section id="ithaf" className="mx-auto max-w-[1440px] scroll-mt-24 px-5 pt-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="museum-card grid items-center gap-8 overflow-hidden p-6 md:p-12 lg:grid-cols-[0.94fr_1.06fr]"
      >
        {/* Sol Sütun: İthaf Metni ve İki Ana Bölüm Geçişi */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1 text-[0.68rem] font-medium tracking-[0.18em] text-gold-light uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
            Vefa ve Hafıza
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Babamın Emeğine Ayrıldı
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Mühürlü el yazmalarından taş kulelerin yüksek mazgallarına uzanan bu dijital bellek; yıllar boyunca
            dağılan kayıtları, soy hafızasını ve Kafkasya mirasını bir araya getiren babamın emeğine ithaf edilmiştir.
          </p>

          <div className="mt-8">
            <FiligreeLink href="/arsiv">Arşiv Belgelerine Geç</FiligreeLink>
          </div>
        </div>

        {/* Sağ Sütun: 16:9 Tam Kadraj Sade Sinema Çerçevesi */}
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/12 bg-black shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)]">
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

          <div className="absolute right-3.5 top-3.5 flex items-center gap-2">
            <button
              onClick={toggleSound}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/85 backdrop-blur-md transition hover:border-white/35 hover:bg-black/80 hover:text-white"
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/85 backdrop-blur-md transition hover:border-white/35 hover:bg-black/80 hover:text-white"
              aria-label="Tam ekran izle"
              title="Tam ekran izle"
            >
              <Maximize2 size={13} />
            </button>
          </div>
        </div>
      </motion.div>

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

export function SectionRail() {
  const [active, setActive] = useState("daglar");
  const [filmOpen, setFilmOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    RAIL.forEach((r) => {
      const el = document.getElementById(r.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <nav aria-label="Sayfa bölümleri" className="relative hidden lg:flex lg:flex-col lg:items-start lg:gap-7">
        <ul className="flex flex-col gap-3.5 border-l border-white/12 pl-4">
          {RAIL.map((r, i) => {
            const on = active === r.id;
            return (
              <li key={r.id} className="relative">
                {on && (
                  <span className="-left-[17px] top-1/2 absolute h-4 w-[2px] -translate-y-1/2 rounded-full bg-gold-light" />
                )}
                <Link href={r.href} className="group flex items-center gap-3">
                  <span
                    className={`font-mono text-[0.68rem] transition-colors ${
                      on ? "text-gold-light" : "text-white/35 group-hover:text-white/70"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-xs font-medium tracking-[0.12em] uppercase transition-colors ${
                      on ? "text-white" : "text-white/50 group-hover:text-white/85"
                    }`}
                  >
                    {r.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setFilmOpen(true)}
          className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.05] py-2 pl-2 pr-4 text-left backdrop-blur-md transition hover:border-white/30 hover:bg-white/10"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-light text-[#090b10] transition-transform duration-300 group-hover:scale-105">
            <Play size={12} className="ml-0.5 fill-current" />
          </span>
          <span className="text-[0.7rem] font-medium tracking-[0.12em] text-white/85 uppercase group-hover:text-white">
            Tanıtım Filmi
          </span>
        </button>
      </nav>

      <IntroFilmModal open={filmOpen} onClose={() => setFilmOpen(false)} />
    </>
  );
}

/* Mobil ve Tablet için kompakt Tanıtım Filmi butonu */
export function MobileIntroFilm() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 text-[0.7rem] font-medium tracking-[0.1em] text-white/90 uppercase backdrop-blur-md transition hover:border-white/30 hover:bg-white/12 lg:hidden"
      >
        <Play size={12} className="fill-gold-light text-gold-light" />
        <span>Tanıtım Filmi</span>
      </button>
      <IntroFilmModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/* Ana Sayfa Modern Yatay Zaman Çizelgesi Şeridi */
export function TimelineStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  const items = showAll ? TIMELINE : TIMELINE.filter((t) => t.featuredOnHome);

  const scroll = (dir: number) => {
    if (!ref.current) return;
    const el = ref.current;
    if (!showAll && el.scrollWidth <= el.clientWidth + 8 && dir > 0) {
      setShowAll(true);
      setTimeout(() => el.scrollBy({ left: 260, behavior: "smooth" }), 60);
      return;
    }
    el.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
          <h2 className="text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
            Tarihsel Kronoloji
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[0.7rem] font-medium text-white/70 transition hover:border-white/25 hover:text-white"
          >
            {showAll ? "8 Ana Dönüm Noktası" : `Tüm Dönüm Noktaları (${TIMELINE.length})`}
          </button>
          <Link
            href="/zaman-cizelgesi"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[0.7rem] font-medium text-gold-light transition hover:border-white/25 hover:text-white"
          >
            Kronolojiyi Aç <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      <div className="relative flex items-center gap-3">
        <button
          onClick={() => scroll(-1)}
          className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/75 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
          aria-label="Zaman çizelgesinde sola kaydır"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
        </button>

        <div ref={ref} className="no-scrollbar relative flex-1 overflow-x-auto py-1">
          <div className="flex gap-3">
            {items.map((t) => (
              <Link
                key={t.year}
                href={`/zaman-cizelgesi?yil=${t.year}`}
                className="group flex w-[220px] shrink-0 items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-2.5 transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-ink">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="64px"
                    className={`object-cover transition duration-500 group-hover:scale-110 ${
                      t.image.startsWith("/images/people/") ? "portrait-tone object-top" : ""
                    }`}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-xs font-semibold text-gold-light">{t.year}</span>
                  <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-white/80 group-hover:text-white">
                    {t.short}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll(1)}
          className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/75 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
          aria-label="Zaman çizelgesinde sağa kaydır"
        >
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
