"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Copy, Download, Maximize2, Minus, Plus, X } from "lucide-react";
import type { ArchiveDoc } from "@/lib/data";

export function DocViewer({
  doc,
  prevHref,
  nextHref,
}: {
  doc: ArchiveDoc;
  prevHref?: string;
  nextHref?: string;
}) {
  const [full, setFull] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [inlineZoom, setInlineZoom] = useState(1);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setFull(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const copyCitation = () => {
    const cite = `${doc.title} (${doc.dateLabel}), ${doc.source}, Katalog No: ${doc.catalogNo}, Targim Archive Dijital Koleksiyonu.`;
    navigator.clipboard?.writeText(cite);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <>
      <div className="relative flex items-center gap-3">
        {prevHref ? (
          <Link
            href={prevHref}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-ink/80 text-gold-light transition hover:border-gold-light hover:bg-gold/15"
            aria-label="Önceki belge"
          >
            <ChevronLeft size={18} />
          </Link>
        ) : (
          <span className="w-11 shrink-0" />
        )}

        <div className="museum-card relative aspect-[4/5] flex-1 overflow-hidden bg-[#14100b]">
          <div
            className="relative h-full w-full transition-transform duration-300"
            style={{ transform: `scale(${inlineZoom})`, transformOrigin: "center center" }}
          >
            <Image
              src={doc.image}
              alt={doc.title}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-contain p-3"
            />
          </div>

          {/* Sağ üst satır içi büyüteç kontrolü */}
          <div className="absolute right-3 top-3 z-10 flex items-center overflow-hidden rounded border border-gold/35 bg-ink/85 backdrop-blur-sm">
            <button
              onClick={() => setInlineZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
              className="p-2 text-gold-light hover:bg-gold/15"
              aria-label="Uzaklaştır"
            >
              <Minus size={14} />
            </button>
            <span className="px-2 font-mono text-[0.65rem] text-[#efe5d0]">{Math.round(inlineZoom * 100)}%</span>
            <button
              onClick={() => setInlineZoom((z) => Math.min(2.5, +(z + 0.25).toFixed(2)))}
              className="p-2 text-gold-light hover:bg-gold/15"
              aria-label="Yakınlaştır"
            >
              <Plus size={14} />
            </button>
          </div>

          <div className="absolute bottom-3 left-3 z-10 border border-gold/30 bg-ink/80 px-2.5 py-1 font-mono text-[0.62rem] text-gold-light">
            {doc.catalogNo}
          </div>
        </div>

        {nextHref ? (
          <Link
            href={nextHref}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-ink/80 text-gold-light transition hover:border-gold-light hover:bg-gold/15"
            aria-label="Sonraki belge"
          >
            <ChevronRight size={18} />
          </Link>
        ) : (
          <span className="w-11 shrink-0" />
        )}
      </div>

      {/* Alt Araç Çubuğu */}
      <div className="mt-5 flex flex-wrap items-center gap-3 sm:px-[56px]">
        <a href={doc.image} download className="btn-gold">
          <Download size={14} /> Tıpkıbasımı İndir
        </a>
        <button
          onClick={() => {
            setZoom(1);
            setFull(true);
          }}
          className="inline-flex items-center gap-2 border border-gold/35 bg-panel px-4 py-2.5 text-xs tracking-[0.18em] text-[#ece3d0] transition hover:border-gold-light hover:text-gold-light uppercase"
        >
          <Maximize2 size={14} /> Tam Ekran İncele
        </button>
        <button
          onClick={copyCitation}
          className="inline-flex items-center gap-2 border border-gold/25 bg-ink/60 px-4 py-2.5 text-xs tracking-[0.16em] text-mist transition hover:border-gold/60 hover:text-white uppercase"
        >
          {copied ? <Check size={14} className="text-gold-light" /> : <Copy size={14} />}
          {copied ? "Künye Kopyalandı" : "Kaynak Göster"}
        </button>
      </div>

      {/* Tam Ekran Işıklı Masa */}
      {full && (
        <div className="fixed inset-0 z-[90] flex flex-col bg-black/96" role="dialog" aria-modal="true">
          <div className="flex items-center justify-between border-b border-gold/25 px-6 py-4">
            <div>
              <span className="font-mono text-xs text-gold">{doc.catalogNo}</span>
              <span className="ml-3 font-display text-base text-[#f3ead6]">{doc.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
                className="rounded border border-gold/25 p-2 text-mist hover:border-gold hover:text-white"
                aria-label="Uzaklaştır"
              >
                <Minus size={17} />
              </button>
              <span className="w-14 text-center font-mono text-xs text-[#efe5d0]">{Math.round(zoom * 100)}%</span>
              <button
                onClick={() => setZoom((z) => Math.min(3.5, z + 0.25))}
                className="rounded border border-gold/25 p-2 text-mist hover:border-gold hover:text-white"
                aria-label="Yakınlaştır"
              >
                <Plus size={17} />
              </button>
              <button
                onClick={() => setFull(false)}
                className="ml-3 rounded border border-gold/35 p-2 text-mist hover:border-gold-light hover:text-white"
                aria-label="Kapat"
              >
                <X size={19} />
              </button>
            </div>
          </div>
          <div className="relative flex-1 overflow-auto p-6">
            <div
              className="relative mx-auto h-full w-full transition-transform duration-300"
              style={{ transform: `scale(${zoom})`, transformOrigin: "center top" }}
            >
              <Image src={doc.image} alt={doc.title} fill sizes="100vw" className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function DocTabs({ doc }: { doc: ArchiveDoc }) {
  const tabs = [
    {
      id: "aciklama",
      label: "Açıklama & Fiziksel Notlar",
      body: [doc.description, doc.notes ? `Fiziksel Özellikler: ${doc.notes}` : ""].filter(Boolean).join("\n\n"),
    },
    { id: "tr", label: "Orijinal Transkripsiyon", body: doc.transcription },
    { id: "ceviri", label: "Türkçe Çeviri", body: doc.translation },
  ].filter((t) => t.body);

  const [active, setActive] = useState(tabs[0]?.id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];
  const isArabicScript = active === "tr" && /[\u0600-\u06FF]/.test(current?.body ?? "");

  return (
    <div className="museum-card p-6">
      <div className="flex flex-wrap gap-1 border-b border-gold/20">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`-mb-px border-b-2 px-4 py-3 font-display text-xs tracking-wider transition uppercase ${
              active === t.id
                ? "border-gold text-gold-light"
                : "border-transparent text-mist hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        key={active}
        dir={isArabicScript ? "rtl" : "ltr"}
        className={`animate-fade-up whitespace-pre-line pt-6 leading-relaxed text-[#e6dcc8] ${
          isArabicScript ? "text-right font-serif text-2xl leading-loose" : "font-serif text-xl"
        }`}
      >
        {current?.body}
      </div>
    </div>
  );
}
