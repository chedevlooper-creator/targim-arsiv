"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, RotateCcw, Search } from "lucide-react";
import { ERAS, PEOPLE, type Era, type Person } from "@/lib/data";

const parseYear = (s: string) =>
  parseInt(s.replace(/\D/g, "").slice(0, 4) || "0", 10);
const getSortYear = (p: Person) => {
  const b = parseYear(p.born);
  if (b > 0) return b;
  const d = parseYear(p.died);
  return d > 0 ? d - 35 : 9999;
};

const PAGE_STEP = 24;

export default function PeopleGrid() {
  const [era, setEra] = useState<Era | "all">("all");
  const [region, setRegion] = useState<string>("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"born" | "name">("born");
  const [visibleCount, setVisibleCount] = useState(PAGE_STEP);

  const regions = useMemo(
    () =>
      Array.from(new Set(PEOPLE.map((p) => p.region))).sort((a, b) =>
        a.localeCompare(b, "tr"),
      ),
    [],
  );

  const list = useMemo(() => {
    const term = q.trim().toLocaleLowerCase("tr-TR");
    return PEOPLE.filter((p) => era === "all" || p.era === era)
      .filter((p) => region === "all" || p.region === region)
      .filter(
        (p) =>
          !term ||
          `${p.name} ${p.title} ${p.region} ${p.summary}`
            .toLocaleLowerCase("tr-TR")
            .includes(term),
      )
      .sort((a, b) =>
        sort === "born"
          ? getSortYear(a) - getSortYear(b)
          : a.name.localeCompare(b.name, "tr"),
      );
  }, [era, region, q, sort]);

  const visibleList = list.slice(0, visibleCount);
  const remaining = Math.max(0, list.length - visibleList.length);
  const hasFilters =
    era !== "all" || region !== "all" || q.trim().length > 0 || sort !== "born";

  return (
    <div>
      {/* Dönem Sekmeleri (Diğer tüm sayfalarla aynı chip / chip-active sistemi) */}
      <div className="flex flex-wrap items-center gap-2">
        {[
          { id: "all" as const, label: "Tüm Dönemler", range: "" },
          ...ERAS,
        ].map((e) => {
          const active = era === e.id;
          const count =
            e.id === "all"
              ? PEOPLE.length
              : PEOPLE.filter((p) => p.era === e.id).length;
          return (
            <button
              key={e.id}
              aria-pressed={active}
              onClick={() => {
                setEra(e.id);
                setVisibleCount(PAGE_STEP);
              }}
              className={`chip ${active ? "chip-active" : ""}`}
            >
              {e.label}
              {e.range ? ` · ${e.range}` : ""} ({count})
            </button>
          );
        })}
      </div>

      {/* Filtre Araç Çubuğu */}
      <div className="mt-5 flex flex-wrap items-center gap-2.5">
        <label className="relative min-w-[230px] flex-1 sm:max-w-md">
          <Search
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
          />
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setVisibleCount(PAGE_STEP);
            }}
            placeholder="İsim, unvan veya bölge ara"
            aria-label="İsim, unvan veya bölge ara"
            className="field-control h-10 w-full rounded-lg border border-white/12 bg-white/[0.04] pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-white/60 focus:border-gold-light/45 focus:bg-white/[0.07]"
          />
        </label>

        <div className="relative">
          <select
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
              setVisibleCount(PAGE_STEP);
            }}
            className="field-control h-10 max-w-full appearance-none rounded-lg border border-white/12 bg-white/[0.04] pl-4 pr-9 text-xs font-medium text-white/80 outline-none transition hover:border-white/25 focus:border-gold-light/45 [&>option]:bg-panel"
            aria-label="Bölge seçimi"
          >
            <option value="all">Tüm Bölgeler</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <ChevronDown
            size={13}
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/65"
          />
        </div>

        <div className="relative">
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value as "born" | "name");
              setVisibleCount(PAGE_STEP);
            }}
            className="field-control h-10 max-w-full appearance-none rounded-lg border border-white/12 bg-white/[0.04] pl-4 pr-9 text-xs font-medium text-white/80 outline-none transition hover:border-white/25 focus:border-gold-light/45 [&>option]:bg-panel"
            aria-label="Sıralama"
          >
            <option value="born">Doğum Yılına Göre</option>
            <option value="name">A&apos;dan Z&apos;ye</option>
          </select>
          <ChevronDown
            size={13}
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/65"
          />
        </div>

        {hasFilters && (
          <button
            onClick={() => {
              setEra("all");
              setSort("born");
              setRegion("all");
              setQ("");
              setVisibleCount(PAGE_STEP);
            }}
            className="btn-glass"
          >
            <RotateCcw size={13} /> Sıfırla
          </button>
        )}
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-2 text-xs text-white/65">
        <span role="status" aria-live="polite">
          <span className="font-medium text-white/85">
            {visibleList.length}
          </span>{" "}
          / <span className="text-white/65">{list.length}</span> şahsiyet
          gösteriliyor
        </span>
        <span className="tracking-wider uppercase">
          Biyografik Portre Koleksiyonu
        </span>
      </div>

      {/* Portre Galerisi: Arşiv ve Sergiler ile birebir aynı museum-card kalitesinde */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleList.map((p, i) => (
          <Link
            key={p.slug}
            href={`/kisiler/${p.slug}`}
            className="museum-card group flex flex-col overflow-hidden"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-night">
              <Image
                src={p.image}
                alt={p.name}
                fill
                preload={i < 4}
                sizes="(max-width:640px) 100vw, (max-width:1024px) 33vw, 25vw"
                className="portrait-tone object-cover object-top group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
              <span className="badge-glass absolute left-3 top-3">
                {p.region}
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <p className="font-mono text-[0.66rem] tracking-wider text-gold-light/85">
                  {p.born} – {p.died}
                </p>
                <h2 className="mt-1 font-display text-xl font-semibold leading-snug text-parchment transition group-hover:text-gold-light">
                  {p.name}
                </h2>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/60">
                  {p.title}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-2.5 text-xs text-white/65">
                <span className="truncate">{p.birthPlace}</span>
                <span className="inline-flex shrink-0 items-center gap-1 font-medium text-gold-light">
                  Biyografi{" "}
                  <ArrowRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setVisibleCount((v) => v + PAGE_STEP)}
            className="btn-gold"
          >
            Daha Fazla Göster (+{Math.min(PAGE_STEP, remaining)})
          </button>
          {remaining > PAGE_STEP && (
            <button
              onClick={() => setVisibleCount(list.length)}
              className="btn-glass"
            >
              Tümünü Göster ({list.length})
            </button>
          )}
        </div>
      )}

      {list.length === 0 && (
        <div className="museum-card mt-8 py-16 text-center">
          <p className="text-sm text-white/70">
            Bu filtrelere uyan şahsiyet bulunamadı.
          </p>
        </div>
      )}
    </div>
  );
}
