"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, FileText, Image as ImageIcon, Map, RotateCcw, ScrollText, Search } from "lucide-react";
import { DOCS, DOC_TYPES, ERAS, docTypeLabel, type DocType, type Era } from "@/lib/data";

const ICONS: Record<DocType, React.ElementType> = {
  "el-yazmasi": ScrollText,
  fotograf: ImageIcon,
  harita: Map,
  "resmi-belge": FileText,
  kitap: BookOpen,
};

export default function ArchiveBrowser() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<DocType | "all">("all");
  const [era, setEra] = useState<Era | "all">("all");
  const [region, setRegion] = useState("all");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const regions = useMemo(
    () => Array.from(new Set(DOCS.map((d) => d.region))).sort((a, b) => a.localeCompare(b, "tr")),
    []
  );

  const list = useMemo(() => {
    const term = q.trim().toLocaleLowerCase("tr-TR");
    return DOCS.filter((d) => type === "all" || d.type === type)
      .filter((d) => era === "all" || d.era === era)
      .filter((d) => region === "all" || d.region === region)
      .filter(
        (d) =>
          !term ||
          `${d.title} ${d.description} ${d.region} ${d.catalogNo} ${d.language}`
            .toLocaleLowerCase("tr-TR")
            .includes(term)
      )
      .sort((a, b) => (sort === "asc" ? a.year - b.year : b.year - a.year));
  }, [q, type, era, region, sort]);

  const hasFilters = type !== "all" || era !== "all" || region !== "all" || q.trim().length > 0;

  return (
    <div>
      {/* 5 Ana Belge Kategorisi Vitrin Kutuları */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {DOC_TYPES.map((t) => {
          const Icon = ICONS[t.id];
          const on = type === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setType(on ? "all" : t.id)}
              className={`museum-card flex items-center gap-4 p-4 text-left transition ${
                on ? "border-gold-light bg-gold/15 ring-1 ring-gold" : ""
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center border transition ${
                  on ? "border-gold-light bg-gold/25 text-white" : "border-gold/40 bg-ink/60 text-gold"
                }`}
              >
                <Icon size={20} />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-sm font-medium text-[#f3ead6]">{t.label}</span>
                <span className="text-xs text-gold-light/80">{t.count}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Birleşik Filtre Konsolu */}
      <div className="museum-card mt-5 flex flex-wrap items-center gap-3 p-4">
        <label className="relative min-w-[240px] flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/80" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Belge adı, katalog numarası (örn. TRG-MS), dil veya bölge ara…"
            className="input-dark w-full py-2.5 pl-10 pr-4 text-sm"
          />
        </label>

        <select
          value={type}
          onChange={(e) => setType(e.target.value as DocType | "all")}
          className="input-dark px-3.5 py-2.5 text-xs tracking-wider"
          aria-label="Belge türü"
        >
          <option value="all">Tüm Belge Türleri</option>
          {DOC_TYPES.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>

        <select
          value={era}
          onChange={(e) => setEra(e.target.value as Era | "all")}
          className="input-dark px-3.5 py-2.5 text-xs tracking-wider"
          aria-label="Dönem"
        >
          <option value="all">Tüm Dönemler</option>
          {ERAS.map((e) => (
            <option key={e.id} value={e.id}>
              {e.label} ({e.range})
            </option>
          ))}
        </select>

        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="input-dark px-3.5 py-2.5 text-xs tracking-wider"
          aria-label="Bölge"
        >
          <option value="all">Tüm Bölgeler</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "asc" | "desc")}
          className="input-dark px-3.5 py-2.5 text-xs tracking-wider"
          aria-label="Tarih sırası"
        >
          <option value="asc">Tarih (Eskiden Yeniye)</option>
          <option value="desc">Tarih (Yeniden Eskiye)</option>
        </select>

        {hasFilters && (
          <button
            onClick={() => {
              setQ("");
              setType("all");
              setEra("all");
              setRegion("all");
            }}
            className="inline-flex items-center gap-1.5 border border-gold/35 px-3 py-2.5 text-xs text-gold-light transition hover:border-gold"
          >
            <RotateCcw size={13} /> Sıfırla
          </button>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between text-xs tracking-[0.22em] text-mist uppercase">
        <span>{list.length} KATALOG KAYDI GÖSTERİLİYOR</span>
        <span>DİJİTAL TIPKIBASIM ARŞİVİ</span>
      </div>

      {/* Belge Kartları */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {list.map((d) => (
          <Link
            key={d.slug}
            href={`/arsiv/${d.slug}`}
            className="museum-card group flex flex-col overflow-hidden animate-fade-up"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#15120d]">
              <Image
                src={d.image}
                alt={d.title}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 33vw, 20vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <span className="absolute left-3 top-3 border border-gold/35 bg-ink/85 px-2.5 py-0.5 text-[0.6rem] tracking-widest text-gold-light uppercase">
                {docTypeLabel(d.type)}
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <p className="font-mono text-[0.62rem] tracking-wider text-gold/80">{d.catalogNo}</p>
                <h2 className="mt-1 font-display text-[0.98rem] leading-snug text-[#f5ecd8] transition group-hover:text-gold-light">
                  {d.title}
                </h2>
                <p className="mt-2 line-clamp-2 font-serif text-sm leading-relaxed text-[#cfc6b4]">
                  {d.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-gold/15 pt-2.5 text-xs text-mist">
                <span>{d.dateLabel}</span>
                <span className="inline-flex items-center gap-1 text-gold-light">
                  İncele <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {list.length === 0 && (
        <div className="museum-card mt-8 py-16 text-center">
          <p className="font-serif text-2xl text-mist">Seçilen filtrelere uygun arşiv belgesi bulunamadı.</p>
        </div>
      )}
    </div>
  );
}
