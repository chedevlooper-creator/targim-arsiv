"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { EXHIBITIONS, EXHIBITION_THEMES } from "@/lib/data";

export default function ExhibitionsList() {
  const [filter, setFilter] = useState<string>("Tümü");

  const filtered =
    filter === "Tümü" ? EXHIBITIONS : EXHIBITIONS.filter((e) => e.theme === filter);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setFilter("Tümü")}
          className={`chip ${filter === "Tümü" ? "chip-active" : ""}`}
        >
          Tüm Sergiler ({EXHIBITIONS.length})
        </button>
        {EXHIBITION_THEMES.map((theme) => (
          <button
            key={theme}
            onClick={() => setFilter(theme)}
            className={`chip ${filter === theme ? "chip-active" : ""}`}
          >
            {theme}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-2">
        {filtered.map((item) => (
          <Link
            key={item.slug}
            href={`/sergiler/${item.slug}`}
            className="museum-card group flex flex-col overflow-hidden animate-fade-up"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="border border-gold/40 bg-ink/80 px-3 py-1 text-[0.64rem] tracking-[0.2em] text-gold-light uppercase backdrop-blur-sm">
                  {item.theme}
                </span>
                <span className="border border-gold/25 bg-ink/75 px-2.5 py-1 font-mono text-[0.64rem] text-[#e6dcc8]">
                  {item.period}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
              <div>
                <p className="text-[0.68rem] tracking-[0.2em] text-gold uppercase">
                  {item.curator} · {item.count} ESER
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-[#f5ecd8] transition group-hover:text-gold-light md:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-1 font-serif text-lg italic text-gold-light/85">{item.subtitle}</p>
                <p className="mt-4 font-serif text-lg leading-relaxed text-[#d6cdbb]">{item.summary}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-gold/15 pt-4">
                <span className="font-display text-xs tracking-[0.22em] text-gold-light uppercase">
                  Dijital Sergiyi Gez
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/45 bg-ink/70 text-gold-light transition group-hover:border-gold-light group-hover:bg-gold/20">
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
