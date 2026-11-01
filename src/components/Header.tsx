"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { CULTURE_CATS, CULTURE_ITEMS, DOCS, EXHIBITIONS, PEOPLE, PLACES, TIMELINE } from "@/lib/data";
import { NAV, Logo } from "./Brand";

interface SearchCatalogItem {
  href: string;
  title: string;
  meta: string;
  image: string;
  keywords: string;
}

const SEARCH_CATALOG: SearchCatalogItem[] = [
  ...PEOPLE.map((p) => ({
    href: `/kisiler/${p.slug}`,
    title: p.name,
    meta: `Kişi · ${p.born}–${p.died} · ${p.region}`,
    image: p.image,
    keywords: `${p.title} ${p.region} ${p.summary}`,
  })),
  ...DOCS.map((d) => ({
    href: `/arsiv/${d.slug}`,
    title: d.title,
    meta: `Arşiv · ${d.dateLabel} · ${d.catalogNo}`,
    image: d.image,
    keywords: `${d.description} ${d.region} ${d.catalogNo} ${d.author ?? ""} ${d.source} ${d.transcription ?? ""} ${d.translation ?? ""}`,
  })),
  ...TIMELINE.map((t) => ({
    href: `/zaman-cizelgesi?yil=${t.year}`,
    title: t.title,
    meta: `Zaman Çizelgesi · ${t.year}`,
    image: t.image,
    keywords: `${t.description} ${t.year}`,
  })),
  ...EXHIBITIONS.map((ex) => ({
    href: `/sergiler/${ex.slug}`,
    title: ex.title,
    meta: `Sergi · ${ex.period}`,
    image: ex.image,
    keywords: `${ex.summary} ${ex.theme}`,
  })),
  ...PLACES.map((pl) => ({
    href: `/harita?yer=${pl.id}`,
    title: pl.name,
    meta: `Atlas · ${pl.period}`,
    image: pl.image,
    keywords: pl.description,
  })),
  ...CULTURE_ITEMS.map((c) => {
    const cat = CULTURE_CATS.find((x) => x.id === c.cat);
    return {
      href: `/kultur?oge=${c.id}`,
      title: c.title,
      meta: `Kültür · ${cat?.label ?? c.cat}${c.nativeTerm ? ` · ${c.nativeTerm}` : ""}`,
      image: cat?.image ?? "/images/kultur.jpg",
      keywords: `${c.nativeTerm ?? ""} ${c.text} ${cat?.label ?? ""}`,
    };
  }),
];

const FUSE_INDEX = new Fuse(SEARCH_CATALOG, {
  keys: [
    { name: "title", weight: 0.55 },
    { name: "meta", weight: 0.25 },
    { name: "keywords", weight: 0.2 },
  ],
  threshold: 0.34,
  ignoreLocation: true,
});

const QUICK_TERMS = ["Şeyh Mansur", "Baysangur", "Serlo", "Vedeno", "Targim", "Nohçalla", "1944"];

export default function Header() {
  const pathname = usePathname();
  const searchTitleId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [q, setQ] = useState("");

  // Modern Web Guidance (shrinking-header-on-scroll): JS fallback only when CSS scroll-driven animations are unsupported
  useEffect(() => {
    const supportsScrollTimeline =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      CSS.supports("(animation-timeline: scroll()) and (animation-range: 0% 100%)");

    if (supportsScrollTimeline) return;

    const header = headerRef.current;
    const initialHeight = 78;
    const finalHeight = 62;
    const scrollDistance = 96;

    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      if (header) {
        const scrollPercent = Math.min(1, scrollY / scrollDistance);
        const newHeight = initialHeight - (initialHeight - finalHeight) * scrollPercent;
        header.style.height = `${newHeight}px`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openSearchDialog = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) {
      dialog.showModal();
    }
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const closeSearchDialog = () => {
    const dialog = dialogRef.current;
    if (dialog?.open) {
      dialog.close();
    }
  };

  // Modern Web Guidance (light-dismiss-a-dialog): Fallback for browsers without native dialog[closedby] support
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || typeof HTMLDialogElement === "undefined") return;

    if (!("closedBy" in HTMLDialogElement.prototype)) {
      const onDialogClick = (event: MouseEvent) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;

        if (isDialogContent) return;
        dialog.close();
      };
      dialog.addEventListener("click", onDialogClick);
      return () => dialog.removeEventListener("click", onDialogClick);
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearchDialog();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const results = useMemo(() => {
    const term = q.trim();
    if (term.length < 2) return [];
    return FUSE_INDEX.search(term, { limit: 12 }).map((hit) => hit.item);
  }, [q]);

  return (
    <>
      <header
        ref={headerRef}
        className={`${
          pathname === "/" ? "site-header-scroll-home" : "site-header-scroll-sub"
        } fixed inset-x-0 top-0 z-50 flex h-[78px] items-center border-b transition-colors duration-300 ${
          scrolled || pathname !== "/"
            ? "border-white/[0.08] bg-ink/84 backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-ink/85 via-ink/35 to-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 md:px-10">
          <Logo />

          {/* Modern Kapsül Navigasyon */}
          <nav
            className="hidden xl:flex items-center gap-1 rounded-full border border-white/[0.09] bg-white/[0.04] p-1 backdrop-blur-xl"
            aria-label="Ana menü"
          >
            {NAV.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-[0.76rem] font-medium transition-all duration-200 ${
                    active
                      ? "bg-white/14 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
                      : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Hızlı Arama Kapsülü */}
            <button
              onClick={openSearchDialog}
              className="flex h-9 items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.05] px-3.5 text-xs text-white/75 backdrop-blur-md transition hover:border-white/25 hover:bg-white/10 hover:text-white"
              aria-label="Arşivde ara (Ctrl+K)"
            >
              <Search size={14} className="text-gold-light" />
              <span className="hidden sm:inline">Arşivde ara</span>
              <kbd className="hidden rounded border border-white/15 bg-black/35 px-1.5 py-0.5 font-mono text-[0.62rem] text-white/60 md:inline">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white/80 transition hover:border-white/25 hover:bg-white/10 hover:text-white xl:hidden"
              aria-label="Menüyü aç"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Sağ Çekmece Menü */}
      <div
        className={`fixed inset-0 z-[60] transition ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          data-lenis-prevent
          className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-y-auto border-l border-white/10 bg-ink/95 px-8 py-7 backdrop-blur-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <Logo small />
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/70 transition hover:border-white/30 hover:text-white"
              aria-label="Kapat"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-1">
            {NAV.map((n, i) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3.5">
                    <span className="font-mono text-xs text-white/40">{String(i + 1).padStart(2, "0")}</span>
                    <span>{n.label}</span>
                  </span>
                  <ArrowRight
                    size={15}
                    className="text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white"
                  />
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-5">
            <p className="eyebrow">Dijital Hafıza Koleksiyonu</p>
            <div className="mt-3 flex items-center justify-between text-xs text-white/50">
              <span>{PEOPLE.length} Şahsiyet</span>
              <span>·</span>
              <span>{DOCS.length} Birincil Belge</span>
              <span>·</span>
              <span>{PLACES.length} Yerleşim</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Modern Web Guidance (light-dismiss-a-dialog): Native top-layer <dialog closedby="any"> */}
      <dialog
        ref={dialogRef}
        data-lenis-prevent
        aria-labelledby={searchTitleId}
        {...({ closedby: "any" } as Record<string, string>)}
        className="search-dialog search-dialog-panel fixed inset-x-0 top-20 mx-auto hidden w-[calc(100%-2rem)] max-w-2xl p-6 text-white open:block"
      >
        <h2 id={searchTitleId} className="sr-only">
          Targim Dijital Katalogda Ara
        </h2>
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Search className="text-gold-light" size={18} />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Şahsiyet, arşiv belgesi, kültür öğesi, yerleşim veya yıl arayın…"
            className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-white/40"
          />
          {q && (
            <button
              type="button"
              onClick={() => setQ("")}
              className="rounded-full bg-white/10 px-2.5 py-1 text-[0.68rem] font-medium text-white/75 hover:bg-white/15 hover:text-white"
            >
              Temizle
            </button>
          )}
          <form method="dialog">
            <button
              type="submit"
              className="rounded-full p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
              aria-label="Kapat"
            >
              <X size={18} />
            </button>
          </form>
        </div>

        {q.trim().length < 2 ? (
          <div className="py-5">
            <p className="text-[0.68rem] font-medium tracking-[0.18em] text-white/45 uppercase">
              Önerilen Aramalar
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {QUICK_TERMS.map((term) => (
                <button key={term} type="button" onClick={() => setQ(term)} className="chip text-xs">
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : results.length === 0 ? (
          <p className="py-10 text-center text-sm text-white/55">
            “{q}” için eşleşen kayıt bulunamadı.
          </p>
        ) : (
          <ul
            data-lenis-prevent
            className="mt-3 max-h-[54vh] space-y-1 overflow-y-auto overscroll-contain pr-1"
          >
            {results.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  onClick={closeSearchDialog}
                  className="group flex items-center gap-3.5 rounded-xl px-3 py-2.5 transition hover:bg-white/[0.07]"
                >
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-white/12 bg-night">
                    <Image
                      src={r.image}
                      alt=""
                      fill
                      sizes="44px"
                      className={
                        r.href.startsWith("/kisiler/")
                          ? "portrait-tone object-cover object-top"
                          : "object-cover"
                      }
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-white group-hover:text-gold-light">
                      {r.title}
                    </span>
                    <span className="block truncate text-xs text-white/50">{r.meta}</span>
                  </span>
                  <ArrowRight
                    size={14}
                    className="shrink-0 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[0.65rem] tracking-[0.14em] text-white/40 uppercase">
          <span>Targim Dijital Katalog</span>
          <span>ESC · ⌘K</span>
        </div>
      </dialog>
    </>
  );
}
