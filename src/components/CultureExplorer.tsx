"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Compass, Layers, MapPin, ScrollText, Sparkles, X } from "lucide-react";
import {
  CULTURE_CATS,
  CULTURE_ITEMS,
  getLinksForCultureItem,
  type CultureCat,
  type CultureItem,
} from "@/lib/data";

export default function CultureExplorer() {
  const searchParams = useSearchParams();
  const katParam = searchParams.get("kategori");
  const ogeParam = searchParams.get("oge");
  const validKat =
    katParam && CULTURE_CATS.some((c) => c.id === katParam) ? (katParam as CultureCat) : null;
  const validOge =
    ogeParam ? CULTURE_ITEMS.find((item) => item.id === ogeParam) ?? null : null;

  const [selectedCat, setSelectedCat] = useState<CultureCat | "all">(() => validKat ?? "all");
  const [activeItem, setActiveItem] = useState<CultureItem | null>(() => validOge);
  const [prevParams, setPrevParams] = useState({ kat: validKat, ogeId: validOge?.id ?? null });

  if (validKat !== prevParams.kat || (validOge?.id ?? null) !== prevParams.ogeId) {
    setPrevParams({ kat: validKat, ogeId: validOge?.id ?? null });
    if (validKat !== prevParams.kat) {
      setSelectedCat(validKat ?? "all");
    }
    if (validOge) {
      setActiveItem(validOge);
    }
  }

  useEffect(() => {
    if (!activeItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeItem]);

  const displayedItems =
    selectedCat === "all"
      ? CULTURE_ITEMS
      : CULTURE_ITEMS.filter((item) => item.cat === selectedCat);

  const activeCatMeta = activeItem ? CULTURE_CATS.find((c) => c.id === activeItem.cat) : undefined;
  const activeLinks = activeItem ? getLinksForCultureItem(activeItem) : null;

  return (
    <div>
      {/* Kategori Seçici Çipler */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setSelectedCat("all")}
          className={`chip ${selectedCat === "all" ? "chip-active" : ""}`}
        >
          Tüm Başlıklar ({CULTURE_ITEMS.length})
        </button>
        {CULTURE_CATS.map((c) => (
          <button
            type="button"
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
              type="button"
              key={cat.id}
              onClick={() => setSelectedCat(active ? "all" : cat.id)}
              className={`museum-card group relative flex flex-col overflow-hidden text-left transition ${
                active ? "border-gold-light/60 ring-1 ring-gold-light/40" : ""
              }`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-night">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(max-width:768px) 50vw, 17vw"
                  className="object-cover transition duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                <span className="badge-glass absolute left-3 top-3">
                  {cat.count} KAYIT
                </span>
              </div>
              <div className="p-4">
                <h2 className="text-sm font-semibold text-white transition group-hover:text-gold-light">
                  {cat.label}
                </h2>
                <p className="mt-1 line-clamp-2 text-xs leading-snug text-white/50">{cat.sub}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Yaşayan Gelenek ve Kavram Sözlüğü */}
      <div className="mt-20">
        <div className="flex items-center gap-2.5">
          <Sparkles className="text-gold-light" size={18} />
          <h2 className="eyebrow">Etnografik Kavramlar ve Yaşayan Gelenek</h2>
        </div>
        <p className="mt-2 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
          Vaynah toplumunun ahlaki yasaları, kule mimarisi terimleri, müzik formları ve misafirperverlik ritüelleri.
          Ayrıntılı okuma ve bağlantılı arşiv kaynakları için bir madde seçin.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {displayedItems.map((item) => {
            const cat = CULTURE_CATS.find((c) => c.id === item.cat);
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="museum-card group flex cursor-pointer flex-col justify-between p-6 text-left"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[0.65rem] font-medium tracking-[0.2em] text-gold-light uppercase">
                      {cat?.label}
                    </span>
                    <BookOpen size={15} className="text-white/40 transition group-hover:text-gold-light" />
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white transition group-hover:text-gold-light">
                    {item.title}
                  </h3>
                  {item.nativeTerm && (
                    <p className="mt-0.5 font-serif text-sm italic text-gold-light/85">{item.nativeTerm}</p>
                  )}
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/65">
                    {item.text}
                  </p>
                </div>

                <span className="mt-5 inline-flex w-full items-center gap-1.5 border-t border-white/[0.08] pt-3 text-xs font-medium tracking-[0.16em] text-gold-light uppercase">
                  Maddeyi Oku <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Resimli Etnografik Okuma Modalı */}
      {activeItem && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[85] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <div className="absolute inset-0" onClick={() => setActiveItem(null)} />
          <div
            data-lenis-prevent
            className="search-dialog-panel relative grid max-h-[88vh] w-full max-w-3xl overflow-y-auto overscroll-contain animate-fade-up sm:grid-cols-[230px_1fr]"
          >
            {activeCatMeta && (
              <div className="relative min-h-[210px] bg-night">
                <Image src={activeCatMeta.image} alt={activeCatMeta.label} fill sizes="240px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              </div>
            )}
            <div className="relative p-7 md:p-8">
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 transition hover:border-gold-light/45 hover:text-white"
                aria-label="Kapat"
              >
                <X size={17} />
              </button>
              <span className="text-[0.68rem] font-medium tracking-[0.22em] text-gold-light uppercase">
                {activeCatMeta?.label}
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
                {activeItem.title}
              </h3>
              {activeItem.nativeTerm && (
                <p className="mt-1 font-serif text-base italic text-gold-light">{activeItem.nativeTerm}</p>
              )}
              <div className="divider-gold my-4" />
              <p className="font-serif text-xl leading-relaxed text-white/85">{activeItem.text}</p>

              {/* Çapraz Arşiv, Sergi, Harita ve Biyografi Bağlantıları */}
              {activeLinks && (
                <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
                  {activeLinks.docs.length > 0 && (
                    <div>
                      <p className="text-[0.63rem] font-medium tracking-[0.2em] text-gold-light uppercase">
                        İlgili Arşiv Belgeleri
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {activeLinks.docs.map((d) => (
                          <Link
                            key={d.slug}
                            href={`/arsiv/${d.slug}`}
                            onClick={() => setActiveItem(null)}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs text-white/85 transition hover:border-gold-light/45 hover:bg-white/[0.08] hover:text-gold-light"
                          >
                            <ScrollText size={12} className="text-gold-light" />
                            <span className="truncate max-w-[230px]">{d.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {activeLinks.exhibitions.map((ex) => (
                      <Link
                        key={ex.slug}
                        href={`/sergiler/${ex.slug}`}
                        onClick={() => setActiveItem(null)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs text-white/85 transition hover:border-gold-light/45 hover:bg-white/[0.08] hover:text-gold-light"
                      >
                        <Layers size={12} className="text-gold-light" />
                        Sergi: {ex.title}
                      </Link>
                    ))}
                    {activeLinks.places.map((pl) => (
                      <Link
                        key={pl.id}
                        href={`/harita?yer=${pl.id}`}
                        onClick={() => setActiveItem(null)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs text-white/85 transition hover:border-gold-light/45 hover:bg-white/[0.08] hover:text-gold-light"
                      >
                        <MapPin size={12} className="text-gold-light" />
                        {pl.name}
                      </Link>
                    ))}
                  </div>

                  {activeLinks.people.length > 0 && (
                    <div>
                      <p className="text-[0.63rem] font-medium tracking-[0.2em] text-gold-light uppercase">
                        Bağlantılı Tarihî Şahsiyetler
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {activeLinks.people.map((p) => (
                          <Link
                            key={p.slug}
                            href={`/kisiler/${p.slug}`}
                            onClick={() => setActiveItem(null)}
                            className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] py-1 pl-1 pr-3 text-xs text-white/85 transition hover:border-gold-light/45 hover:bg-white/[0.08] hover:text-gold-light"
                          >
                            <span className="relative h-6 w-6 overflow-hidden rounded-full border border-white/15 bg-night">
                              <Image
                                src={p.image}
                                alt={p.name}
                                fill
                                sizes="24px"
                                className="portrait-tone object-cover object-top"
                              />
                            </span>
                            {p.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
                <Link
                  href="/arsiv"
                  onClick={() => setActiveItem(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider text-gold-light/85 uppercase transition hover:text-gold-light"
                >
                  <Compass size={13} /> Dijital Arşive Geç
                </Link>
                <button type="button" onClick={() => setActiveItem(null)} className="btn-gold">
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
