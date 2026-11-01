"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronDown, RotateCcw, Search } from "lucide-react";
import { ERAS, PEOPLE, type Era, type Person } from "@/lib/data";

const parseYear = (s: string) => parseInt(s.replace(/\D/g, "").slice(0, 4) || "0", 10);
const getSortYear = (p: Person) => {
  const b = parseYear(p.born);
  if (b > 0) return b;
  const d = parseYear(p.died);
  return d > 0 ? d - 35 : 9999;
};

const PAGE_STEP = 48;

export default function PeopleGrid() {
  const [era, setEra] = useState<Era | "all">("all");
  const [region, setRegion] = useState<string>("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"born" | "name">("born");
  const [visibleCount, setVisibleCount] = useState(PAGE_STEP);

  const regions = useMemo(
    () => Array.from(new Set(PEOPLE.map((p) => p.region))).sort((a, b) => a.localeCompare(b, "tr")),
    []
  );

  const list = useMemo(() => {
    const term = q.trim().toLocaleLowerCase("tr-TR");
    return PEOPLE.filter((p) => era === "all" || p.era === era)
      .filter((p) => region === "all" || p.region === region)
      .filter(
        (p) =>
          !term ||
          `${p.name} ${p.title} ${p.region} ${p.summary}`.toLocaleLowerCase("tr-TR").includes(term)
      )
      .sort((a, b) =>
        sort === "born" ? getSortYear(a) - getSortYear(b) : a.name.localeCompare(b.name, "tr")
      );
  }, [era, region, q, sort]);

  const visibleList = list.slice(0, visibleCount);
  const remaining = Math.max(0, list.length - visibleList.length);
  const hasFilters = era !== "all" || region !== "all" || q.trim().length > 0;

  return (
    <div>
      {/* Filtre Araç Çubuğu */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <label className="relative min-w-[220px] flex-1 sm:max-w-sm">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setVisibleCount(PAGE_STEP);
              }}
              placeholder="İsim, unvan veya bölge ara"
              className="h-10 w-full rounded-full border border-white/10 bg-white/[0.04] pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-gold-light/45 focus:bg-white/[0.07]"
            />
          </label>

          <div className="relative">
            <select
              value={region}
              onChange={(e) => {
                setRegion(e.target.value);
                setVisibleCount(PAGE_STEP);
              }}
              className="h-10 appearance-none rounded-full border border-white/10 bg-white/[0.04] pl-4 pr-9 text-xs font-medium text-white/80 outline-none transition hover:border-white/25 focus:border-gold-light/45 [&>option]:bg-panel"
              aria-label="Bölge seçimi"
            >
              <option value="all">Tüm bölgeler</option>
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
              onChange={(e) => {
                setSort(e.target.value as "born" | "name");
                setVisibleCount(PAGE_STEP);
              }}
              className="h-10 appearance-none rounded-full border border-white/10 bg-white/[0.04] pl-4 pr-9 text-xs font-medium text-white/80 outline-none transition hover:border-white/25 focus:border-gold-light/45 [&>option]:bg-panel"
              aria-label="Sıralama"
            >
              <option value="born">Doğum yılına göre</option>
              <option value="name">A&apos;dan Z&apos;ye</option>
            </select>
            <ChevronDown size={13} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/45" />
          </div>

          {hasFilters && (
            <button
              onClick={() => {
                setEra("all");
                setRegion("all");
                setQ("");
                setVisibleCount(PAGE_STEP);
              }}
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 text-xs text-white/65 transition hover:border-white/25 hover:text-white"
            >
              <RotateCcw size={13} /> Sıfırla
            </button>
          )}
        </div>

        {/* Dönem Sekmeleri */}
        <div className="no-scrollbar -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
          <div className="inline-flex gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1">
            {[{ id: "all" as const, label: "Tümü", range: "" }, ...ERAS].map((e) => {
              const active = era === e.id;
              const count = e.id === "all" ? PEOPLE.length : PEOPLE.filter((p) => p.era === e.id).length;
              return (
                <button
                  key={e.id}
                  onClick={() => {
                    setEra(e.id);
                    setVisibleCount(PAGE_STEP);
                  }}
                  className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                    active ? "bg-white/[0.12] text-white" : "text-white/55 hover:text-white"
                  }`}
                >
                  <span>{e.label}</span>
                  {e.range && <span className={active ? "text-white/50" : "text-white/30"}>{e.range}</span>}
                  <span
                    className={`rounded-full px-1.5 py-px text-[0.62rem] tabular-nums ${
                      active ? "bg-gold-light text-[#090b10]" : "bg-white/[0.07] text-white/50"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <p className="mt-7 text-xs text-white/45">
        <span className="font-medium text-white/85">{visibleList.length}</span> /{" "}
        <span className="text-white/65">{list.length}</span> şahsiyet gösteriliyor
      </p>

      {/* Portre Galerisi: 4:5 sıfır-deformasyon portre, arşiv tonlaması ve ince müze çerçevesi */}
      <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-3 lg:grid-cols-4">
        {visibleList.map((p, i) => (
          <Link key={p.slug} href={`/kisiler/${p.slug}`} className="group flex flex-col animate-fade-up">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.08] bg-night shadow-[0_16px_38px_-16px_rgba(0,0,0,0.88)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-gold-light/40">
              <Image
                src={p.image}
                alt={p.name}
                fill
                priority={i < 8}
                sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                className="portrait-tone object-cover object-top transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/55 via-ink/15 to-transparent" />
            </div>

            <h2 className="mt-3.5 text-[0.95rem] font-semibold text-white transition group-hover:text-gold-light">
              {p.name}
            </h2>
            <p className="mt-0.5 line-clamp-1 text-sm text-white/55">{p.title}</p>
            <p className="mt-1.5 text-xs text-white/40">
              <span className="font-mono text-gold-light/75">
                {p.born}–{p.died}
              </span>{" "}
              · {p.region}
            </p>
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
          <p className="text-sm text-white/55">Bu filtrelere uyan şahsiyet bulunamadı.</p>
        </div>
      )}
    </div>
  );
}
