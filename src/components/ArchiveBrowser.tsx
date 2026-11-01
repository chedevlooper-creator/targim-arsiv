"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  FileText,
  Image as ImageIcon,
  Map,
  RotateCcw,
  ScrollText,
  Search,
} from "lucide-react";
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
              className={`museum-card flex items-center gap-3.5 p-4 text-left transition ${
                on ? "border-gold-light/55 bg-white/[0.06]" : ""
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition ${
                  on
                    ? "border-gold-light/60 bg-gold-light/15 text-gold-light"
                    : "border-white/10 bg-white/[0.04] text-gold-light/85"
                }`}
              >
                <Icon size={19} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-white">{t.label}</span>
                <span className="text-xs text-white/50">{t.count}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Birleşik Filtre Konsolu (PeopleGrid ile birebir uyumlu rounded-full pill sistemi) */}
      <div className="mt-6 flex flex-wrap items-center gap-2.5">
        <label className="relative min-w-[230px] flex-1 sm:max-w-md">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Belge adı, katalog no (TRG-MS), dil veya bölge ara"
            className="h-10 w-full rounded-full border border-white/10 bg-white/[0.04] pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-gold-light/45 focus:bg-white/[0.07]"
          />
        </label>

        <div className="relative">
          <select
            value={type}
            onChange={(e) => setType(e.target.value as DocType | "all")}
            className="h-10 appearance-none rounded-full border border-white/10 bg-white/[0.04] pl-4 pr-9 text-xs font-medium text-white/80 outline-none transition hover:border-white/25 focus:border-gold-light/45 [&>option]:bg-panel"
            aria-label="Belge türü"
          >
            <option value="all">Tüm Belge Türleri</option>
            {DOC_TYPES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
          <ChevronDown size={13} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/45" />
        </div>

        <div className="relative">
          <select
            value={era}
            onChange={(e) => setEra(e.target.value as Era | "all")}
            className="h-10 appearance-none rounded-full border border-white/10 bg-white/[0.04] pl-4 pr-9 text-xs font-medium text-white/80 outline-none transition hover:border-white/25 focus:border-gold-light/45 [&>option]:bg-panel"
            aria-label="Dönem"
          >
            <option value="all">Tüm Dönemler</option>
            {ERAS.map((e) => (
              <option key={e.id} value={e.id}>
                {e.label} ({e.range})
              </option>
            ))}
          </select>
          <ChevronDown size={13} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/45" />
        </div>

        <div className="relative">
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="h-10 appearance-none rounded-full border border-white/10 bg-white/[0.04] pl-4 pr-9 text-xs font-medium text-white/80 outline-none transition hover:border-white/25 focus:border-gold-light/45 [&>option]:bg-panel"
            aria-label="Bölge"
          >
            <option value="all">Tüm Bölgeler</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <ChevronDown size={13} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/45" />
        </div>

        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "asc" | "desc")}
            className="h-10 appearance-none rounded-full border border-white/10 bg-white/[0.04] pl-4 pr-9 text-xs font-medium text-white/80 outline-none transition hover:border-white/25 focus:border-gold-light/45 [&>option]:bg-panel"
            aria-label="Tarih sırası"
          >
            <option value="asc">Tarih (Eskiden Yeniye)</option>
            <option value="desc">Tarih (Yeniden Eskiye)</option>
          </select>
          <ChevronDown size={13} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/45" />
        </div>

        {hasFilters && (
          <button
            onClick={() => {
              setQ("");
              setType("all");
              setEra("all");
              setRegion("all");
            }}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 text-xs text-white/65 transition hover:border-white/25 hover:text-white"
          >
            <RotateCcw size={13} /> Sıfırla
          </button>
        )}
      </div>

      <div className="mt-7 flex items-center justify-between text-xs text-white/45">
        <span>
          <span className="font-medium text-white/85">{list.length}</span> katalog kaydı gösteriliyor
        </span>
        <span className="tracking-wider uppercase">Dijital Tıpkıbasım Arşivi</span>
      </div>

      {/* Belge Kartları */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {list.map((d) => (
          <Link
            key={d.slug}
            href={`/arsiv/${d.slug}`}
            className="museum-card group flex flex-col overflow-hidden animate-fade-up"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-night">
              <Image
                src={d.image}
                alt={d.title}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 33vw, 20vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <span className="badge-glass absolute left-3 top-3">
                {docTypeLabel(d.type)}
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <p className="font-mono text-[0.62rem] tracking-wider text-gold-light/80">{d.catalogNo}</p>
                <h2 className="mt-1 text-[0.95rem] font-semibold leading-snug text-white transition group-hover:text-gold-light">
                  {d.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/55">
                  {d.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-2.5 text-xs text-white/45">
                <span>{d.dateLabel}</span>
                <span className="inline-flex items-center gap-1 font-medium text-gold-light">
                  İncele <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {list.length === 0 && (
        <div className="museum-card mt-8 py-16 text-center">
          <p className="text-sm text-white/55">Seçilen filtrelere uygun arşiv belgesi bulunamadı.</p>
        </div>
      )}
    </div>
  );
}
