"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Geniş ekranda sayfayı sabitleyip dikey kaydırmayı yatay ilerlemeye çevirir.
 * Dar ekranda ve hareket azaltma tercihinde paneller normal akışta alt alta kalır.
 */
export default function HorizontalReel({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!wrap || !viewport || !track) return;

    const media = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let travel = 0;
    let frame = 0;

    const apply = () => {
      frame = 0;
      if (!media.matches) return;
      const progress = Math.min(1, Math.max(0, -wrap.getBoundingClientRect().top / Math.max(1, travel)));
      track.style.transform = `translate3d(${-progress * travel}px, 0, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const measure = () => {
      if (!media.matches) {
        wrap.style.height = "";
        track.style.transform = "";
        delete viewport.dataset.pinned;
        return;
      }
      viewport.dataset.pinned = "";
      travel = Math.max(0, track.scrollWidth - window.innerWidth);
      wrap.style.height = `${window.innerHeight + travel}px`;
      apply();
    };

    // Klavye odağı veya sayfa içi arama paneli kaydırırsa bunu sayfa konumuna aktar
    const onViewportScroll = () => {
      const offset = viewport.scrollLeft;
      if (!media.matches || !offset) return;
      viewport.scrollLeft = 0;
      const rect = wrap.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, travel)));
      const x = Math.min(travel, progress * travel + offset);
      window.scrollTo({ top: rect.top + window.scrollY + x, behavior: "instant" });
    };

    measure();
    const resizer = new ResizeObserver(measure);
    resizer.observe(track);
    media.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    viewport.addEventListener("scroll", onViewportScroll);

    return () => {
      cancelAnimationFrame(frame);
      resizer.disconnect();
      media.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      viewport.removeEventListener("scroll", onViewportScroll);
    };
  }, []);

  return (
    <div ref={wrapRef}>
      <div ref={viewportRef} className="reel-viewport no-scrollbar lg:sticky lg:top-0 lg:h-svh">
        <div ref={trackRef} className="flex flex-col will-change-transform lg:h-full lg:w-max lg:flex-row">
          {children}
        </div>
      </div>
    </div>
  );
}
