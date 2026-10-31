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
      {/* Ana Çift Altın Çerçeveli Portre Vitrin */}
      <div className="museum-card relative aspect-[3/4] overflow-hidden bg-ink">
        <Image
          key={current.src}
          src={current.src}
          alt={current.caption || name}
          fill
          priority
          sizes="(max-width:1024px) 100vw, 430px"
          className="object-cover animate-fade-up"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent px-4 pb-3.5 pt-10">
          <p className="font-serif text-sm italic text-[#e8decb]">{current.caption}</p>
        </div>
      </div>

      {/* Alt Küçük Görsel Şeridi + İleri Ok */}
      {items.length > 1 && (
        <div className="mt-3 flex items-center gap-2">
          <div className="grid flex-1 grid-cols-4 gap-2">
            {items.slice(0, 4).map((g, i) => {
              const active = i === idx;
              return (
                <button
                  key={`${g.src}-${i}`}
                  onClick={() => setIdx(i)}
                  aria-label={g.caption}
                  className={`relative aspect-square overflow-hidden border transition ${
                    active
                      ? "border-gold-light ring-1 ring-gold"
                      : "border-gold/25 opacity-70 hover:border-gold/70 hover:opacity-100"
                  }`}
                >
                  <Image src={g.src} alt="" fill sizes="96px" className="object-cover" />
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setIdx((v) => (v + 1) % Math.min(items.length, 4))}
            className="flex h-11 w-9 shrink-0 items-center justify-center border border-gold/40 bg-panel text-gold-light transition hover:border-gold-light hover:bg-gold/15"
            aria-label="Sonraki görsel"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      )}
    </div>
  );
}
