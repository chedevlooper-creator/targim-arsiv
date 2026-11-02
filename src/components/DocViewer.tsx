"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  Maximize2,
  Minus,
  Plus,
  RotateCcw,
} from "lucide-react";
import ArchiveDialog from "./ArchiveDialog";
import { formatDocCitation, type ArchiveDoc } from "@/lib/data";

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
  const [citationOpen, setCitationOpen] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const previousZoom = useRef(1);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const factor = zoom / previousZoom.current;
      canvas.scrollLeft =
        (canvas.scrollLeft + canvas.clientWidth / 2) * factor -
        canvas.clientWidth / 2;
      canvas.scrollTop =
        (canvas.scrollTop + canvas.clientHeight / 2) * factor -
        canvas.clientHeight / 2;
    }
    previousZoom.current = zoom;
  }, [zoom, full]);

  useEffect(
    () => () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    [],
  );

  const copyCitation = async () => {
    try {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard is unavailable");
      await navigator.clipboard.writeText(formatDocCitation(doc));
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
      setCitationOpen(true);
    }
  };

  return (
    <>
      <div className="document-preview-layout">
        {prevHref ? (
          <Link
            href={prevHref}
            className="icon-button document-previous"
            aria-label="Önceki belge"
          >
            <ChevronLeft size={19} />
          </Link>
        ) : (
          <span className="document-previous" />
        )}
        <div className="museum-card document-preview">
          <div
            className="relative h-full w-full transition-transform duration-300"
            style={{ transform: `scale(${inlineZoom})` }}
          >
            <Image
              src={doc.image}
              alt={doc.title}
              fill
              preload
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-contain p-5"
            />
          </div>
          <div
            className="zoom-control absolute right-3 top-3 z-10"
            role="group"
            aria-label="Görsel yakınlaştırma"
          >
            <button
              type="button"
              className="zoom-button"
              disabled={inlineZoom <= 1}
              onClick={() =>
                setInlineZoom((value) => Math.max(1, value - 0.25))
              }
              aria-label="Uzaklaştır"
            >
              <Minus size={15} />
            </button>
            <button
              type="button"
              className="zoom-value"
              onClick={() => setInlineZoom(1)}
              aria-label="Ölçeği sıfırla"
            >
              {Math.round(inlineZoom * 100)}%
            </button>
            <button
              type="button"
              className="zoom-button"
              disabled={inlineZoom >= 2.5}
              onClick={() =>
                setInlineZoom((value) => Math.min(2.5, value + 0.25))
              }
              aria-label="Yakınlaştır"
            >
              <Plus size={15} />
            </button>
          </div>
          <span className="badge-glass absolute bottom-3 left-3 font-mono">
            {doc.catalogNo}
          </span>
        </div>
        {nextHref ? (
          <Link
            href={nextHref}
            className="icon-button document-next"
            aria-label="Sonraki belge"
          >
            <ChevronRight size={19} />
          </Link>
        ) : (
          <span className="document-next" />
        )}
      </div>
      <div className="document-actions">
        <button
          type="button"
          onClick={() => {
            setZoom(1);
            setFull(true);
          }}
          className="btn-gold"
          aria-haspopup="dialog"
        >
          <Maximize2 size={16} /> Tam ekran incele
        </button>
        <a href={doc.image} download className="btn-glass">
          <Download size={16} /> Görseli indir
        </a>
        <button type="button" onClick={copyCitation} className="btn-glass">
          {copied ? <Check size={16} /> : <Copy size={16} />}
          <span>
            {copied ? "Künye kopyalandı" : "Künyeyi kopyala"}
          </span>
        </button>
        <a
          href={doc.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass"
        >
          <ExternalLink size={16} /> Kaynak sayfası
        </a>
      </div>
      <p className="sr-only" role="status">
        {copied ? "Belgenin kaynak künyesi kopyalandı." : ""}
      </p>
      <ArchiveDialog
        open={full}
        onClose={() => setFull(false)}
        title={doc.title}
        eyebrow={doc.catalogNo}
        variant="fullscreen"
        bodyClassName="document-dialog-body"
      >
        {full && (
          <>
            <div className="document-toolbar">
              <div
                className="zoom-control"
                role="group"
                aria-label="Tam ekran yakınlaştırma"
              >
                <button
                  type="button"
                  className="zoom-button"
                  disabled={zoom <= 1}
                  onClick={() => setZoom((value) => Math.max(1, value - 0.25))}
                  aria-label="Uzaklaştır"
                >
                  <Minus size={16} />
                </button>
                <output className="zoom-value" aria-label="Görsel ölçeği">
                  {Math.round(zoom * 100)}%
                </output>
                <button
                  type="button"
                  className="zoom-button"
                  disabled={zoom >= 3.5}
                  onClick={() =>
                    setZoom((value) => Math.min(3.5, value + 0.25))
                  }
                  aria-label="Yakınlaştır"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                type="button"
                className="btn-quiet"
                onClick={() => setZoom(1)}
              >
                <RotateCcw size={14} /> Sıfırla
              </button>
              <p>Yakınlaştırdığınız görseli kaydırarak inceleyebilirsiniz.</p>
            </div>
            <div
              ref={canvasRef}
              className="document-canvas"
              tabIndex={0}
              aria-label="Belge görseli; büyüttükten sonra kaydırarak inceleyin"
            >
              <div
                className="relative"
                style={{
                  width: `${zoom * 100}%`,
                  height: `${zoom * 100}%`,
                  minWidth: "100%",
                  minHeight: "100%",
                }}
              >
                <Image
                  src={doc.image}
                  alt={doc.title}
                  fill
                  sizes="100vw"
                  className="object-contain p-6"
                />
              </div>
            </div>
          </>
        )}
      </ArchiveDialog>
      <ArchiveDialog
        open={citationOpen}
        onClose={() => setCitationOpen(false)}
        title="Kaynak künyesi"
        eyebrow="Atıf bilgisi"
      >
        <p className="mb-4 text-sm leading-relaxed text-mist">
          Tarayıcı panoya erişemedi. Aşağıdaki künyeyi seçip
          kopyalayabilirsiniz.
        </p>
        <textarea
          readOnly
          value={formatDocCitation(doc)}
          onFocus={(event) => event.currentTarget.select()}
          className="citation-field"
          aria-label="Kaynak künyesi"
          rows={6}
        />
        <div className="dialog-actions">
          <button
            type="button"
            className="btn-gold"
            onClick={() => setCitationOpen(false)}
          >
            Tamam
          </button>
        </div>
      </ArchiveDialog>
    </>
  );
}

export function DocTabs({ doc }: { doc: ArchiveDoc }) {
  const id = useId();
  const tabs = [
    {
      id: "aciklama",
      label: "Açıklama ve notlar",
      body: [
        doc.description,
        doc.notes ? `Fiziksel özellikler: ${doc.notes}` : "",
      ]
        .filter(Boolean)
        .join("\n\n"),
    },
    { id: "tr", label: "Transkripsiyon", body: doc.transcription },
    { id: "ceviri", label: "Türkçe çeviri", body: doc.translation },
  ].filter((tab) => tab.body);
  const [active, setActive] = useState(tabs[0]?.id);
  const activeId = tabs.some((tab) => tab.id === active) ? active : tabs[0]?.id;
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  return (
    <div className="museum-card record-reading-panel">
      <div className="record-tabs" role="tablist" aria-label="Belge içeriği">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${tab.id}`}
            aria-controls={`${id}-panel-${tab.id}`}
            aria-selected={activeId === tab.id}
            tabIndex={activeId === tab.id ? 0 : -1}
            onClick={() => setActive(tab.id)}
            onKeyDown={(event) => {
              let next = index;
              if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
              else if (event.key === "ArrowLeft")
                next = (index - 1 + tabs.length) % tabs.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = tabs.length - 1;
              else return;
              event.preventDefault();
              setActive(tabs[next].id);
              tabRefs.current[next]?.focus();
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => {
        const arabic =
          tab.id === "tr" && /[\u0600-\u06FF]/.test(tab.body ?? "");
        return (
          <div
            key={tab.id}
            id={`${id}-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${tab.id}`}
            hidden={activeId !== tab.id}
            tabIndex={0}
            dir={arabic ? "rtl" : "ltr"}
            lang={arabic ? "ar" : undefined}
            className={`record-tab-content ${arabic ? "arabic-copy" : "reading-copy"}`}
          >
            {tab.body}
          </div>
        );
      })}
    </div>
  );
}
