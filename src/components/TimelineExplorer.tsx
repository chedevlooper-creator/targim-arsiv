"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, ScrollText } from "lucide-react";
import { DOCS, ERAS, PEOPLE, TIMELINE, eraLabel, getPlacesForEvent, type Era } from "@/lib/data";

export default function TimelineExplorer() {
  const searchParams = useSearchParams();
  const yilParam = searchParams.get("yil");
  const parsedParamYear = yilParam ? parseInt(yilParam, 10) : undefined;
  const validParamYear =
    parsedParamYear && TIMELINE.some((t) => t.year === parsedParamYear) ? parsedParamYear : undefined;

  const [era, setEra] = useState<Era | "all">("all");
  const events = useMemo(() => TIMELINE.filter((t) => era === "all" || t.era === era), [era]);

  const [year, setYear] = useState<number>(() => validParamYear ?? 1834);
  const [prevParamYear, setPrevParamYear] = useState<number | undefined>(validParamYear);

  if (validParamYear !== prevParamYear) {
    setPrevParamYear(validParamYear);
    if (validParamYear !== undefined) {
      setYear(validParamYear);
      const targetEv = TIMELINE.find((t) => t.year === validParamYear);
      if (era !== "all" && targetEv && targetEv.era !== era) {
        setEra("all");
      }
    }
  }

  const rawIdx = events.findIndex((e) => e.year === year);
  const idx = rawIdx === -1 ? 0 : rawIdx;
  const current = events[idx];

  const go = useCallback(
    (d: number) => {
      const n = events[idx + d];
      if (n) setYear(n.year);
    },
    [events, idx]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const people = (current?.people ?? [])
    .map((s) => PEOPLE.find((p) => p.slug === s))
    .filter((p) => p !== undefined);

  const docs = (current?.docs ?? [])
    .map((s) => DOCS.find((d) => d.slug === s))
    .filter((d) => d !== undefined);

  const places = current ? getPlacesForEvent(current, 3) : [];

  const selectEra = (nextEra: Era | "all") => {
    setEra(nextEra);
    if (nextEra !== "all") {
      const nextList = TIMELINE.filter((t) => t.era === nextEra);
      if (nextList.length > 0 && !nextList.some((t) => t.year === year)) {
        setYear(nextList[0].year);
      }
    }
  };

  return (
    <div>
      {/* Dönem Seçici */}
      <div className="flex flex-wrap items-center gap-2">
        <button onClick={() => selectEra("all")} className={`chip ${era === "all" ? "chip-active" : ""}`}>
          Tüm Dönemler ({TIMELINE.length})
        </button>
        {ERAS.map((e) => (
          <button
            key={e.id}
            onClick={() => selectEra(e.id)}
            className={`chip ${era === e.id ? "chip-active" : ""}`}
          >
            {e.label} · {e.range}
          </button>
        ))}
      </div>

      {/* Resimli Yatay Zaman Şeridi */}
      <div className="museum-card topo-bg mt-8 px-4 pt-6 pb-4 md:px-8">
        <div className="no-scrollbar overflow-x-auto pb-2">
          <div className="relative flex min-w-max items-start gap-2">
            <div className="pointer-events-none absolute left-4 right-4 top-[62px] h-px bg-gradient-to-r from-white/10 via-gold-light/55 to-white/10" />

            {events.map((e) => {
              const on = e.year === current?.year;
              return (
                <button
                  key={e.year}
                  onClick={() => setYear(e.year)}
                  className="group relative flex w-[114px] flex-col items-center text-center md:w-[126px]"
                >
                  <div
                    className={`relative h-[44px] w-[72px] overflow-hidden rounded-lg border transition duration-300 ${
                      on
                        ? "border-gold-light ring-1 ring-gold-light/60 scale-105"
                        : "border-white/15 opacity-65 group-hover:border-white/35 group-hover:opacity-100"
                    }`}
                  >
                    <Image src={e.image} alt="" fill sizes="80px" className="object-cover" />
                  </div>

                  <span className="h-3 w-px bg-white/25" />
                  <span
                    className={`relative z-10 rotate-45 border transition-all ${
                      on
                        ? "h-3.5 w-3.5 border-white bg-gold-light shadow-[0_0_16px_rgba(242,226,190,0.85)]"
                        : "h-2.5 w-2.5 border-gold-light/60 bg-ink group-hover:bg-gold-light/40"
                    }`}
                  />

                  <span
                    className={`mt-3 font-display text-sm font-semibold transition ${
                      on ? "text-gold-light" : "text-white/75 group-hover:text-white"
                    }`}
                  >
                    {e.year}
                  </span>
                  <span className="mt-0.5 line-clamp-1 text-[0.66rem] text-white/45">{e.short}</span>

                  {on && <span className="mt-2 h-4 w-px bg-gold-light/70" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Seçili Olay Vitrin Kartı */}
      {current && (
        <div
          key={current.year}
          className="museum-card mt-4 grid overflow-hidden animate-fade-up lg:grid-cols-[1.05fr_1.15fr]"
        >
          <div className="flex flex-col justify-between p-8 md:p-12">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="badge-glass">{eraLabel(current.era)}</span>
                <span className="font-mono text-xs text-white/45">
                  {String(idx + 1).padStart(2, "0")} / {String(events.length).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-5 font-display text-5xl font-semibold md:text-6xl">
                <span className="gold-text">{current.year}</span>
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-white md:text-4xl">
                {current.title}
              </h2>
              <p className="mt-5 font-serif text-xl leading-relaxed text-white/80">{current.description}</p>

              {/* İlgili Şahsiyetler */}
              {people.length > 0 && (
                <div className="mt-7">
                  <p className="text-[0.65rem] font-medium tracking-[0.22em] text-gold-light uppercase">
                    İlgili Şahsiyetler
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2.5">
                    {people.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/kisiler/${p.slug}`}
                        className="group flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] py-1 pl-1 pr-3.5 transition hover:border-gold-light/45 hover:bg-white/[0.08]"
                      >
                        <span className="relative h-8 w-8 overflow-hidden rounded-full border border-white/15 bg-night">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            sizes="32px"
                            className="portrait-tone object-cover object-top"
                          />
                        </span>
                        <span className="text-xs font-medium text-white/85 transition group-hover:text-gold-light">
                          {p.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* İlgili Belgeler */}
              {docs.length > 0 && (
                <div className="mt-6">
                  <p className="text-[0.65rem] font-medium tracking-[0.22em] text-gold-light uppercase">
                    Birincil Arşiv Kaynakları
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2.5">
                    {docs.map((d) => (
                      <Link
                        key={d.slug}
                        href={`/arsiv/${d.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-xs text-white/80 transition hover:border-gold-light/45 hover:bg-white/[0.08] hover:text-gold-light"
                      >
                        <ScrollText size={13} className="text-gold-light" />
                        {d.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Coğrafi Odaklar (Atlas) */}
              {places.length > 0 && (
                <div className="mt-6">
                  <p className="text-[0.65rem] font-medium tracking-[0.22em] text-gold-light uppercase">
                    Coğrafi Odaklar (Atlas)
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2.5">
                    {places.map((pl) => (
                      <Link
                        key={pl.id}
                        href={`/harita?yer=${pl.id}`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-xs text-white/80 transition hover:border-gold-light/45 hover:bg-white/[0.08] hover:text-gold-light"
                      >
                        <MapPin size={13} className="text-gold-light" />
                        {pl.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-9 flex items-center gap-2.5 border-t border-white/[0.08] pt-5">
              <button
                onClick={() => go(-1)}
                disabled={idx <= 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition hover:border-gold-light/45 hover:bg-white/[0.08] hover:text-gold-light disabled:opacity-25"
                aria-label="Önceki olay"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => go(1)}
                disabled={idx >= events.length - 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition hover:border-gold-light/45 hover:bg-white/[0.08] hover:text-gold-light disabled:opacity-25"
                aria-label="Sonraki olay"
              >
                <ChevronRight size={18} />
              </button>
              <span className="ml-2 text-xs text-white/45">
                Klavye sol / sağ ok tuşlarıyla gezinebilirsiniz
              </span>
            </div>
          </div>

          <div className="relative min-h-[340px] bg-night lg:min-h-[480px]">
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(max-width:1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-panel via-transparent to-transparent max-lg:bg-gradient-to-t" />
          </div>
        </div>
      )}

      {/* Tam Kronoloji Dökümü */}
      <div className="mt-20">
        <h2 className="eyebrow">Tam Tarihsel Döküm (1700 – 2000)</h2>
        <ol className="relative mt-8 space-y-5 border-l border-white/12 pl-7 md:pl-10">
          {events.map((e) => {
            const active = e.year === current?.year;
            return (
              <li key={e.year} className="relative">
                <span
                  className={`absolute -left-[34px] top-6 h-3 w-3 rotate-45 border md:-left-[46px] ${
                    active ? "border-white bg-gold-light" : "border-gold-light/50 bg-ink"
                  }`}
                />
                <div
                  onClick={() => {
                    setYear(e.year);
                    window.scrollTo({ top: 220, behavior: "smooth" });
                  }}
                  className={`museum-card group grid cursor-pointer gap-5 overflow-hidden p-4 sm:grid-cols-[160px_1fr_auto] sm:items-center ${
                    active ? "border-gold-light/55" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-night">
                    <Image
                      src={e.image}
                      alt={e.title}
                      fill
                      sizes="180px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-display text-2xl font-semibold text-gold-light">{e.year}</span>
                      <span className="text-lg font-semibold text-white transition group-hover:text-gold-light">
                        {e.title}
                      </span>
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/60">{e.description}</p>
                  </div>
                  <ArrowRight size={16} className="hidden text-gold-light transition-transform group-hover:translate-x-1 sm:block" />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
