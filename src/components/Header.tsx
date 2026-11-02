"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import {
  CULTURE_CATS,
  CULTURE_ITEMS,
  DOCS,
  EXHIBITIONS,
  PEOPLE,
  PLACES,
  TIMELINE,
} from "@/lib/data";
import { InstagramLink, NAV, NAV_ALL, Logo } from "./Brand";
import ArchiveDialog from "./ArchiveDialog";

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

const QUICK_TERMS = [
  "Şeyh Mansur",
  "Baysangur",
  "Serlo",
  "Vedeno",
  "Targim",
  "Nohçalla",
  "1944",
];

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    if (
      typeof CSS !== "undefined" &&
      CSS.supports(
        "(animation-timeline: scroll()) and (animation-range: 0% 100%)",
      )
    )
      return;
    const onScroll = () => {
      const progress = Math.min(1, window.scrollY / 96);
      setScrolled(window.scrollY > 20);
      if (headerRef.current)
        headerRef.current.style.height = `${78 - 14 * progress}px`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setMenuOpen(false);
        setSearchOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const results = useMemo(() => {
    const term = q.trim();
    return term.length < 2
      ? []
      : FUSE_INDEX.search(term, { limit: 12 }).map((hit) => hit.item);
  }, [q]);

  return (
    <>
      <header
        ref={headerRef}
        className={`${pathname === "/" ? "site-header-scroll-home" : "site-header-scroll-sub"} site-header fixed inset-x-0 top-0 z-50 flex h-[78px] items-center border-b transition-colors duration-300 ${scrolled || pathname !== "/" ? "border-white/15 bg-ink/90" : "border-white/12 bg-gradient-to-b from-ink/85 via-ink/35 to-transparent"}`}
      >
        <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-4 px-5 md:px-12">
          <Logo />
          <nav
            className="hidden items-center gap-6 xl:flex"
            aria-label="Ana menü"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`header-nav-link ${isActive(item.href) ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="header-search-button"
              aria-label="Arşivde ara (Ctrl+K)"
              aria-haspopup="dialog"
            >
              <Search size={16} aria-hidden="true" />
              <span className="hidden sm:inline">Arşivde ara</span>
              <kbd className="hidden md:inline">Ctrl K</kbd>
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="icon-button xl:hidden"
              aria-label="Menüyü aç"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
            >
              <Menu size={19} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <ArchiveDialog
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        title="Keşfet"
        eyebrow="Targim Archive"
        variant="drawer"
      >
        <nav aria-label="Mobil ana menü" className="drawer-nav">
          {NAV_ALL.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              <span className="drawer-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <div className="drawer-footer">
          <p className="eyebrow">Dijital hafıza koleksiyonu</p>
          <p>
            {PEOPLE.length} şahsiyet · {DOCS.length} arşiv kaydı ·{" "}
            {PLACES.length} yerleşim
          </p>
          <InstagramLink className="mt-4 text-sm text-gold-light" />
        </div>
      </ArchiveDialog>

      <ArchiveDialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        title="Arşivde ara"
        eyebrow="Tüm koleksiyonlar"
        initialFocusRef={inputRef}
        bodyClassName="search-dialog-body"
      >
        <div className="search-field">
          <Search size={20} aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            aria-label="Tüm koleksiyonlarda ara"
            value={q}
            onChange={(event) => setQ(event.target.value)}
            placeholder="İsim, belge, yer veya yıl…"
            autoComplete="off"
            spellCheck={false}
            maxLength={200}
          />
          {q && (
            <button
              type="button"
              onClick={() => {
                setQ("");
                inputRef.current?.focus();
              }}
              className="search-clear"
              aria-label="Aramayı temizle"
            >
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </div>
        {q.trim().length < 2 ? (
          <div className="search-suggestions-panel">
            <p className="control-label">Bir aramayla başlayın</p>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              Belgeler, biyografiler, kültür ve tarih atlasında en az iki
              karakterle arama yapın.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {QUICK_TERMS.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => {
                    setQ(term);
                    inputRef.current?.focus();
                  }}
                  className="chip"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : results.length === 0 ? (
          <div className="search-empty">
            <Search size={28} strokeWidth={1.25} aria-hidden="true" />
            <h3>Bir kayıt bulunamadı.</h3>
            <p>
              “{q}” için farklı bir isim, tarih veya anahtar kelime deneyin.
            </p>
          </div>
        ) : (
          <ul className="search-results" aria-label="Arama sonuçları">
            {results.map((result) => (
              <li key={result.href}>
                <Link
                  href={result.href}
                  onClick={() => setSearchOpen(false)}
                  className="search-result"
                >
                  <span className="search-result-image">
                    <Image
                      src={result.image}
                      alt=""
                      fill
                      sizes="48px"
                      className={
                        result.href.startsWith("/kisiler/")
                          ? "object-cover object-top"
                          : "object-contain p-1"
                      }
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="search-result-title">{result.title}</span>
                    <span className="search-result-meta">{result.meta}</span>
                  </span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="dialog-footnote">
          <span role="status" aria-live="polite">
            {q.trim().length < 2
              ? "Targim dijital katalog"
              : results.length === 12
                ? "İlk 12 eşleşme"
                : `${results.length} eşleşen kayıt`}
          </span>
          <span>
            <kbd>Esc</kbd> Kapat
          </span>
        </div>
      </ArchiveDialog>
    </>
  );
}
