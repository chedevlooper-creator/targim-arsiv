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
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/80 transition hover:border-gold-light/45 hover:bg-white/[0.08] hover:text-gold-light"
            aria-label="Önceki belge"
          >
            <ChevronLeft size={18} />
          </Link>
        ) : (
          <span className="w-10 shrink-0" />
        )}

        <div className="museum-card relative aspect-[4/5] flex-1 overflow-hidden bg-night">
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
              className="object-contain p-4"
            />
          </div>

          {/* Sağ üst satır içi büyüteç kontrolü */}
          <div className="absolute right-3 top-3 z-10 flex items-center overflow-hidden rounded-full border border-white/15 bg-ink/85 px-1 backdrop-blur-md">
            <button
              onClick={() => setInlineZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
              className="p-2 text-white/75 transition hover:text-gold-light"
              aria-label="Uzaklaştır"
            >
              <Minus size={14} />
            </button>
            <span className="px-1.5 font-mono text-[0.65rem] text-white/85">{Math.round(inlineZoom * 100)}%</span>
            <button
              onClick={() => setInlineZoom((z) => Math.min(2.5, +(z + 0.25).toFixed(2)))}
              className="p-2 text-white/75 transition hover:text-gold-light"
              aria-label="Yakınlaştır"
            >
              <Plus size={14} />
            </button>
          </div>

          <span className="badge-glass absolute bottom-3 left-3 z-10 font-mono">
            {doc.catalogNo}
          </span>
        </div>

        {nextHref ? (
          <Link
            href={nextHref}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/80 transition hover:border-gold-light/45 hover:bg-white/[0.08] hover:text-gold-light"
            aria-label="Sonraki belge"
          >
            <ChevronRight size={18} />
          </Link>
        ) : (
          <span className="w-10 shrink-0" />
        )}
      </div>

      {/* Alt Araç Çubuğu: Tüm düğmeler aynı rounded-full geometrisinde */}
      <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:px-[52px]">
        <a href={doc.image} download className="btn-gold">
          <Download size={14} /> Tıpkıbasımı İndir
        </a>
        <button
          onClick={() => {
            setZoom(1);
            setFull(true);
          }}
          className="btn-glass"
        >
          <Maximize2 size={14} /> Tam Ekran İncele
        </button>
        <button
          onClick={copyCitation}
          className="btn-glass"
        >
          {copied ? <Check size={14} className="text-gold-light" /> : <Copy size={14} />}
          {copied ? "Künye Kopyalandı" : "Kaynak Göster"}
        </button>
      </div>

      {/* Tam Ekran Işıklı Masa */}
      {full && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[90] flex flex-col bg-ink/96 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div>
              <span className="font-mono text-xs text-gold-light">{doc.catalogNo}</span>
              <span className="ml-3 text-base font-semibold text-white">{doc.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 transition hover:border-white/30 hover:text-white"
                aria-label="Uzaklaştır"
              >
                <Minus size={16} />
              </button>
              <span className="w-14 text-center font-mono text-xs text-white/85">{Math.round(zoom * 100)}%</span>
              <button
                onClick={() => setZoom((z) => Math.min(3.5, z + 0.25))}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 transition hover:border-white/30 hover:text-white"
                aria-label="Yakınlaştır"
              >
                <Plus size={16} />
              </button>
              <button
                onClick={() => setFull(false)}
                className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 transition hover:border-gold-light/45 hover:text-white"
                aria-label="Kapat"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          <div data-lenis-prevent className="relative flex-1 overflow-auto overscroll-contain p-6">
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
      <div className="inline-flex flex-wrap gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
              active === t.id
                ? "bg-white/[0.12] text-white"
                : "text-white/55 hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        key={active}
        dir={isArabicScript ? "rtl" : "ltr"}
        className={`animate-fade-up whitespace-pre-line pt-6 leading-relaxed text-white/82 ${
          isArabicScript ? "text-right font-serif text-2xl leading-loose" : "font-serif text-xl"
        }`}
      >
        {current?.body}
      </div>
    </div>
  );
}
