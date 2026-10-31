"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, BookOpen, Sparkles, X } from "lucide-react";
import { CULTURE_CATS, CULTURE_ITEMS, type CultureCat, type CultureItem } from "@/lib/data";

export default function CultureExplorer() {
  const [selectedCat, setSelectedCat] = useState<CultureCat | "all">("all");
  const [activeItem, setActiveItem] = useState<CultureItem | null>(null);

  const displayedItems =
    selectedCat === "all"
      ? CULTURE_ITEMS
      : CULTURE_ITEMS.filter((item) => item.cat === selectedCat);

  const activeCatMeta = activeItem ? CULTURE_CATS.find((c) => c.id === activeItem.cat) : undefined;

  return (
    <div>
      {/* Kategori Seçici Çipler */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setSelectedCat("all")}
          className={`chip ${selectedCat === "all" ? "chip-active" : ""}`}
        >
          Tüm Başlıklar ({CULTURE_ITEMS.length})
        </button>
        {CULTURE_CATS.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCat(c.id)}
            className={`chip ${selectedCat === c.id ? "chip-active" : ""}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* 6 Ana Kültür Sütunu (3:4 Fotoğrafik Vitrin) */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {CULTURE_CATS.map((cat) => {
          const active = selectedCat === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(active ? "all" : cat.id)}
              className={`museum-card group relative flex flex-col overflow-hidden text-left transition ${
                active ? "border-gold-light ring-1 ring-gold" : ""
              }`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(max-width:768px) 50vw, 17vw"
                  className="object-cover transition duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                <span className="absolute left-3 top-3 border border-gold/35 bg-ink/80 px-2 py-0.5 text-[0.58rem] tracking-widest text-gold-light uppercase">
                  {cat.count} KAYIT
                </span>
              </div>
              <div className="p-4">
                <h2 className="font-display text-base font-medium text-[#f5ecd8] transition group-hover:text-gold-light">
                  {cat.label}
                </h2>
                <p className="mt-1 line-clamp-2 text-xs leading-snug text-mist">{cat.sub}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Yaşayan Gelenek ve Kavram Sözlüğü */}
      <div className="mt-20">
        <div className="flex items-center gap-3">
          <Sparkles className="text-gold" size={19} />
          <h2 className="eyebrow">Etnografik Kavramlar ve Yaşayan Gelenek</h2>
        </div>
        <p className="mt-2 max-w-3xl font-serif text-xl text-[#ddd3c0]">
          Vaynah toplumunun ahlaki yasaları, kule mimarisi terimleri, müzik formları ve misafirperverlik ritüelleri.
          Ayrıntılı okuma için bir madde seçin.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {displayedItems.map((item) => {
            const cat = CULTURE_CATS.find((c) => c.id === item.cat);
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="museum-card group flex cursor-pointer flex-col justify-between p-6 animate-fade-up"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[0.65rem] tracking-[0.2em] text-gold uppercase">{cat?.label}</span>
                    <BookOpen size={15} className="text-mist transition group-hover:text-gold-light" />
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-[#f5ecd8] transition group-hover:text-gold-light">
                    {item.title}
                  </h3>
                  {item.nativeTerm && (
                    <p className="mt-0.5 font-serif text-sm italic text-gold-light/80">{item.nativeTerm}</p>
                  )}
                  <p className="mt-3 line-clamp-3 font-serif text-lg leading-relaxed text-[#cfc6b4]">
                    {item.text}
                  </p>
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 border-t border-gold/15 pt-3 text-xs tracking-[0.18em] text-gold-light uppercase">
                  Maddeyi Oku <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Resimli Etnografik Okuma Modalı */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[85] flex items-center justify-center bg-black/82 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0" onClick={() => setActiveItem(null)} />
          <div className="museum-card relative grid w-full max-w-2xl overflow-hidden shadow-2xl animate-fade-up sm:grid-cols-[220px_1fr]">
            {activeCatMeta && (
              <div className="relative min-h-[200px] bg-ink">
                <Image src={activeCatMeta.image} alt={activeCatMeta.label} fill sizes="240px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              </div>
            )}
            <div className="relative p-7 md:p-8">
              <button
                onClick={() => setActiveItem(null)}
                className="absolute right-4 top-4 rounded border border-gold/25 p-1.5 text-mist hover:border-gold hover:text-white"
                aria-label="Kapat"
              >
                <X size={18} />
              </button>
              <span className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">{activeCatMeta?.label}</span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-[#f5ecd8] md:text-3xl">
                {activeItem.title}
              </h3>
              {activeItem.nativeTerm && (
                <p className="mt-1 font-serif text-base italic text-gold-light">{activeItem.nativeTerm}</p>
              )}
              <div className="divider-gold my-4" />
              <p className="font-serif text-xl leading-relaxed text-[#e6dcc8]">{activeItem.text}</p>
              <div className="mt-7 flex justify-end">
                <button onClick={() => setActiveItem(null)} className="btn-gold">
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
