"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { useLenis } from "lenis/react";

const QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";
const SCROLL_PER_STEP = 90;

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

/**
 * Sahneleri geniş ekranda sabitleyip kaydırmayla sırayla gösterir.
 * Dar ekranda ve hareket azaltma tercihinde sahneler normal akışta alt alta kalır.
 */
export default function PinnedSteps({
  labels,
  label,
  children,
}: {
  labels: string[];
  label: string;
  children: ReactNode;
}) {
  const wrapRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const lenis = useLenis();
  const pinned = useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false);
  const count = labels.length;

  useEffect(() => {
    if (!pinned) return;
    const wrap = wrapRef.current;
    if (!wrap) return;

    const onScroll = () => {
      const rect = wrap.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const progress = travel > 0 ? Math.min(0.9999, Math.max(0, -rect.top / travel)) : 0;
      setActive(Math.floor(progress * count));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pinned, count]);

  // Görünmeyen sahnelerdeki bağlantılar klavyeyle odaklanmasın
  useEffect(() => {
    const steps = stageRef.current?.querySelectorAll<HTMLElement>(":scope > [data-step]") ?? [];
    steps.forEach((step, i) => {
      step.toggleAttribute("data-active", pinned && i === active);
      step.inert = pinned && i !== active;
    });
  }, [pinned, active]);

  const goTo = (index: number) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const top = wrap.getBoundingClientRect().top + window.scrollY;
    const travel = wrap.offsetHeight - window.innerHeight;
    const y = top + (travel * (index + 0.5)) / count;
    if (lenis) lenis.scrollTo(y);
    else window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      ref={wrapRef}
      id="surgun"
      aria-label={label}
      className="relative scroll-mt-20 bg-ink"
      style={pinned ? { height: `calc(100svh + ${(count - 1) * SCROLL_PER_STEP}svh)` } : undefined}
    >
      <div ref={stageRef} data-pinned={pinned ? "" : undefined} className="steps-stage">
        {children}

        {pinned && (
          <nav aria-label="Sürgünün tarihleri" className="absolute inset-x-0 bottom-7 z-10">
            <ol className="mx-auto flex max-w-[1500px] items-center gap-6 px-12">
              {labels.map((date, i) => (
                <li key={date}>
                  <button
                    onClick={() => goTo(i)}
                    aria-current={i === active ? "step" : undefined}
                    className={`cursor-pointer text-parchment transition-opacity ${
                      i === active ? "link-crt" : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    {date}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
