"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function PersonGallery({
  name,
  items,
}: {
  name: string;
  items: { src: string; caption: string }[];
}) {
  const [idx, setIdx] = useState(0);
  const current = items[idx] ?? items[0];

  return (
    <div>
      {/* Ana 4:5 Portre Vitrini */}
      <div className="museum-card relative aspect-[4/5] overflow-hidden bg-night">
        <Image
          key={current.src}
          src={current.src}
          alt={current.caption || name}
          fill
          preload
          sizes="(max-width:1024px) 100vw, 430px"
          className="portrait-tone object-cover object-top animate-fade-up"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/92 via-ink/55 to-transparent px-5 pb-4 pt-12">
          <p className="font-serif text-sm italic text-white/80">
            {current.caption}
          </p>
        </div>
      </div>

      {/* Alt Küçük Görsel Şeridi + İleri Ok */}
      {items.length > 1 && (
        <div className="mt-3 flex items-center gap-2.5">
          <div className="grid flex-1 grid-cols-4 gap-2">
            {items.slice(0, 4).map((g, i) => {
              const active = i === idx;
              return (
                <button
                  key={`${g.src}-${i}`}
                  onClick={() => setIdx(i)}
                  aria-label={g.caption}
                  aria-pressed={active}
                  className={`relative aspect-square overflow-hidden rounded-xl border transition ${
                    active
                      ? "border-gold-light ring-1 ring-gold-light/60"
                      : "border-white/12 opacity-65 hover:border-white/30 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={g.src}
                    alt=""
                    fill
                    sizes="96px"
                    className="portrait-tone object-cover object-top"
                  />
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setIdx((v) => (v + 1) % Math.min(items.length, 4))}
            className="icon-button"
            aria-label="Sonraki görsel"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      )}
    </div>
  );
}
