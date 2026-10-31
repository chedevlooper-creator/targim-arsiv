"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw, Search } from "lucide-react";
import { ERAS, PEOPLE, eraLabel, type Era } from "@/lib/data";

const parseYear = (s: string) => parseInt(s.replace(/\D/g, "").slice(0, 4) || "0", 10);

export default function PeopleGrid() {
  const [era, setEra] = useState<Era | "all">("all");
  const [region, setRegion] = useState<string>("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"born" | "name">("born");

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
        sort === "born" ? parseYear(a.born) - parseYear(b.born) : a.name.localeCompare(b.name, "tr")
      );
  }, [era, region, q, sort]);

  const hasFilters = era !== "all" || region !== "all" || q.trim().length > 0;

  return (
    <div>
      {/* Müze Filtre Konsolu */}
      <div className="museum-card p-5">
        <div className="flex flex-wrap items-center gap-3">
          <label className="relative min-w-[240px] flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/80" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="İsim, unvan veya bölge ara…"
              className="input-dark w-full py-2.5 pl-10 pr-4 text-sm"
            />
          </label>

          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="input-dark px-3.5 py-2.5 text-xs tracking-wider"
            aria-label="Bölge seçimi"
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
            onChange={(e) => setSort(e.target.value as "born" | "name")}
            className="input-dark px-3.5 py-2.5 text-xs tracking-wider"
            aria-label="Sıralama"
          >
            <option value="born">Kronolojik (Doğum Yılı)</option>
            <option value="name">Alfabetik (A–Z)</option>
          </select>

          {hasFilters && (
            <button
              onClick={() => {
                setEra("all");
                setRegion("all");
                setQ("");
              }}
              className="inline-flex items-center gap-1.5 border border-gold/30 px-3 py-2.5 text-xs text-gold-light transition hover:border-gold"
            >
              <RotateCcw size={13} /> Sıfırla
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gold/15 pt-4">
          <button onClick={() => setEra("all")} className={`chip ${era === "all" ? "chip-active" : ""}`}>
            Tümü ({PEOPLE.length})
          </button>
          {ERAS.map((e) => (
            <button
              key={e.id}
              onClick={() => setEra(e.id)}
              className={`chip ${era === e.id ? "chip-active" : ""}`}
            >
              {e.label} · {e.range} ({PEOPLE.filter((p) => p.era === e.id).length})
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between text-xs tracking-[0.22em] text-mist uppercase">
        <span>{list.length} ŞAHSİYET LİSTELENİYOR</span>
        <span>1760 – 2000 BİYOGRAFİ ENVANTERİ</span>
      </div>

      {/* Portre Galerisi */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <Link
            key={p.slug}
            href={`/kisiler/${p.slug}`}
            className="museum-card group flex flex-col overflow-hidden animate-fade-up"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-ink">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 33vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <span className="absolute left-3 top-3 border border-gold/35 bg-ink/80 px-2.5 py-1 text-[0.62rem] tracking-widest text-gold-light backdrop-blur-sm">
                {p.region}
              </span>
              <span className="absolute bottom-3 left-3 font-display text-xs tracking-widest text-[#efe5d0]">
                {p.born} – {p.died}
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <p className="text-[0.63rem] tracking-[0.2em] text-gold uppercase">{eraLabel(p.era)}</p>
                <h2 className="mt-1 font-display text-xl font-medium text-[#f5ecd8] transition group-hover:text-gold-light">
                  {p.name}
                </h2>
                <p className="mt-1 font-serif text-base italic text-gold-light/85">{p.title}</p>
                <p className="mt-3 line-clamp-2 font-serif text-base leading-relaxed text-[#cfc6b4]">
                  {p.summary}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 border-t border-gold/15 pt-3 text-[0.68rem] tracking-[0.2em] text-gold-light uppercase group-hover:text-white">
                Portre ve Biyografi <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {list.length === 0 && (
        <div className="museum-card mt-8 py-16 text-center">
          <p className="font-serif text-2xl text-mist">Seçilen kriterlere uygun şahsiyet kaydı bulunamadı.</p>
        </div>
      )}
    </div>
  );
}
