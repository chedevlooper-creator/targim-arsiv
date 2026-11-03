"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { Breadcrumbs } from "./PageHeader";
import "./PeoplePortraitHero.css";

type Portrait = {
  slug: string;
  name: string;
  image: string;
  born: string;
  died: string;
};

const POSITIONS = [0, 150, 258, 350, 430, 500, 565];
const DEPTHS = [160, 70, -30, -130, -220, -300, -380];
const ANGLES = [0, 48, 56, 62, 66, 70, 74];

export default function PeoplePortraitHero({ people }: { people: Portrait[] }) {
  const [active, setActive] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    id: number;
    x: number;
    y: number;
    moved: boolean;
  } | null>(null);
  const suppressClick = useRef(false);
  const selected = people[active];
  const wrap = (index: number) => (index + people.length) % people.length;
  const step = (direction: number) =>
    setActive((index) => wrap(index + direction));

  if (!selected) return null;

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const start = drag.current;
    if (!start || start.id !== event.pointerId) return;
    const distance = event.clientX - start.x;
    if (start.moved) {
      suppressClick.current = true;
      if (Math.abs(distance) > 42) step(distance < 0 ? 1 : -1);
    }
    drag.current = null;
    sceneRef.current?.style.setProperty("--drag", "0px");
    event.currentTarget.removeAttribute("data-dragging");
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section className="people-portrait-hero" aria-labelledby="people-title">
      <div className="home-container people-portrait-meta">
        <Breadcrumbs items={[{ label: "Kişiler" }]} />
        <span className="people-portrait-count">
          {people.length} katalog kaydı
        </span>
      </div>

      <div
        className="people-portrait-viewport"
        role="region"
        aria-roledescription="karusel"
        aria-label="Tarihî portreler"
        tabIndex={0}
        onKeyDown={(event) => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
            return;
          event.preventDefault();
          event.currentTarget.focus({ preventScroll: true });
          if (event.key === "Home") setActive(0);
          else if (event.key === "End") setActive(people.length - 1);
          else step(event.key === "ArrowRight" ? 1 : -1);
        }}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          suppressClick.current = false;
          drag.current = {
            id: event.pointerId,
            x: event.clientX,
            y: event.clientY,
            moved: false,
          };
        }}
        onPointerMove={(event) => {
          const start = drag.current;
          if (!start || start.id !== event.pointerId) return;
          const dx = event.clientX - start.x;
          if (!start.moved && Math.abs(event.clientY - start.y) > Math.abs(dx))
            return;
          if (Math.abs(dx) > 8) {
            start.moved = true;
            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.setAttribute("data-dragging", "true");
            sceneRef.current?.style.setProperty(
              "--drag",
              `${Math.max(-90, Math.min(90, dx * 0.3))}px`,
            );
          }
        }}
        onPointerUp={endDrag}
        onPointerCancel={(event) => {
          drag.current = null;
          sceneRef.current?.style.setProperty("--drag", "0px");
          event.currentTarget.removeAttribute("data-dragging");
          if (event.currentTarget.hasPointerCapture(event.pointerId))
            event.currentTarget.releasePointerCapture(event.pointerId);
        }}
        onClickCapture={(event) => {
          if (!suppressClick.current) return;
          event.preventDefault();
          event.stopPropagation();
          suppressClick.current = false;
        }}
      >
        <div className="people-portrait-scene" ref={sceneRef}>
          {Array.from({ length: Math.min(13, people.length) }, (_, slot) => {
            const offset = slot - Math.floor(Math.min(13, people.length) / 2);
            const person = people[wrap(active + offset)];
            const distance = Math.abs(offset);
            const isSelected = offset === 0;
            const pose = {
              "--card-x": Math.sign(offset) * POSITIONS[distance],
              "--card-depth": `${DEPTHS[distance]}px`,
              "--card-angle": `${-Math.sign(offset) * ANGLES[distance]}deg`,
              "--card-scale": 1 - distance * 0.025,
              "--card-opacity": 1 - distance * 0.09,
              zIndex: 20 - distance,
            } as CSSProperties;
            return (
              <Link
                key={person.slug}
                href={`/kisiler/${person.slug}`}
                className="people-portrait-card"
                style={pose}
                data-selected={isSelected}
                aria-label={
                  isSelected
                    ? `${person.name} biyografisini aç`
                    : `${person.name} portresini seç`
                }
                aria-current={isSelected ? "true" : undefined}
                tabIndex={isSelected ? 0 : -1}
                draggable={false}
                onClick={(event) => {
                  if (
                    !isSelected &&
                    !event.ctrlKey &&
                    !event.metaKey &&
                    !event.shiftKey &&
                    !event.altKey
                  ) {
                    event.preventDefault();
                    setActive(wrap(active + offset));
                  }
                }}
                onDragStart={(event) => event.preventDefault()}
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 639px) 150px, 210px"
                  preload={isSelected && active === 0}
                  loading={
                    isSelected && active === 0
                      ? undefined
                      : distance <= 2
                        ? "eager"
                        : "lazy"
                  }
                  draggable={false}
                  className="portrait-tone object-cover object-top"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="people-portrait-selection">
        <button
          type="button"
          className="icon-button"
          aria-label="Önceki portre"
          onClick={() => step(-1)}
        >
          <ChevronLeft size={17} aria-hidden="true" />
        </button>
        <div
          className="people-portrait-caption"
          aria-live="polite"
          aria-atomic="true"
        >
          <Link href={`/kisiler/${selected.slug}`}>{selected.name}</Link>
          <span>
            {selected.born} – {selected.died}
            <span aria-hidden="true"> · </span>
            {active + 1} / {people.length}
          </span>
        </div>
        <button
          type="button"
          className="icon-button"
          aria-label="Sonraki portre"
          onClick={() => step(1)}
        >
          <ChevronRight size={17} aria-hidden="true" />
        </button>
      </div>

      <div className="home-container people-portrait-intro">
        <p className="eyebrow">Biyografik Hafıza Koleksiyonu</p>
        <h1 id="people-title">Tarihe İz Bırakanlar</h1>
        <p className="people-portrait-summary">
          Kuzey Kafkasya tarihinden {people.length} öncü şahsiyet; İmamet
          Çağı&apos;ndan yakın döneme dört tarihsel evrede, portreleri ve
          biyografileriyle.
        </p>
        <Link className="btn-gold" href="#kisi-katalogu">
          Portreleri keşfet <ArrowDown size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
