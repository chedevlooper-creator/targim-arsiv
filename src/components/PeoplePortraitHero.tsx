"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
} from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useMemo, useRef, useState, type PointerEvent } from "react";
import { ERAS, type Person } from "@/lib/data";
import { Breadcrumbs } from "./PageHeader";
import "./PeoplePortraitHero.css";

export type Portrait = Pick<
  Person,
  | "slug"
  | "name"
  | "image"
  | "born"
  | "died"
  | "era"
  | "region"
  | "title"
  | "summary"
>;
const wrap = (index: number, length: number) =>
  ((index % length) + length) % length;
const searchText = (value: string) =>
  value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .trim();

function PortraitCard({
  person,
  index,
  position,
  selected,
  onSelect,
}: {
  person: Portrait;
  index: number;
  position: MotionValue<number>;
  selected: boolean;
  onSelect: (index: number) => void;
}) {
  // Drag and settle share one continuous position. Images never scale past their display size.
  const transform = useTransform(position, (value) => {
    const distance = index - value;
    const depth = Math.abs(distance);
    const spread =
      Math.sign(distance) *
      (depth <= 1 ? depth * 0.88 : 0.88 + (depth - 1) * 0.56);
    const angle = -Math.sign(distance) * Math.min(48, depth * 28);
    return `translate3d(calc(${spread} * var(--portrait-width)), 0, ${-depth * 85}px) rotateY(${angle}deg)`;
  });
  return (
    <motion.div
      className="people-portrait-card"
      style={{ transform }}
      data-selected={selected}
    >
      <Link
        href={`/kisiler/${person.slug}`}
        prefetch={false}
        aria-label={
          selected
            ? `${person.name} biyografisini aç`
            : `${person.name} portresini seç`
        }
        aria-current={selected ? "true" : undefined}
        tabIndex={selected ? 0 : -1}
        draggable={false}
        onDragStart={(event) => event.preventDefault()}
        onClick={(event) => {
          if (
            !selected &&
            !event.ctrlKey &&
            !event.metaKey &&
            !event.shiftKey &&
            !event.altKey
          ) {
            event.preventDefault();
            onSelect(index);
          }
        }}
      >
        <Image
          src={person.image}
          alt={person.name}
          width={800}
          height={1000}
          unoptimized
          loading={
            Math.abs(index - Math.round(position.get())) <= 2 ? "eager" : "lazy"
          }
          fetchPriority={selected ? "high" : "auto"}
          draggable={false}
        />
      </Link>
    </motion.div>
  );
}

function PortraitDeck({ people }: { people: Portrait[] }) {
  const position = useSpring(0, { stiffness: 170, damping: 30, mass: 0.8 });
  const reducedMotion = useReducedMotion();
  const [center, setCenter] = useState(0);
  const target = useRef(0);
  const loop = people.length > 11;
  const clamp = (value: number) =>
    loop ? value : Math.max(0, Math.min(people.length - 1, value));
  const selected = people[wrap(center, people.length)];
  const drag = useRef<{
    id: number;
    x: number;
    y: number;
    position: number;
    step: number;
    moved: boolean;
  } | null>(null);
  const suppressClick = useRef(false);
  useMotionValueEvent(position, "change", (value) =>
    setCenter(Math.round(value)),
  );
  const select = (index: number) => {
    target.current = clamp(index);
    if (reducedMotion) position.jump(target.current);
    else position.set(target.current);
  };
  const endDrag = (event: PointerEvent<HTMLDivElement>, cancelled = false) => {
    const start = drag.current;
    if (!start || start.id !== event.pointerId) return;
    if (start.moved) {
      suppressClick.current = !cancelled;
      select(cancelled ? target.current : Math.round(position.get()));
    } else select(target.current);
    drag.current = null;
    event.currentTarget.removeAttribute("data-dragging");
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  };
  const indices = loop
    ? Array.from({ length: 11 }, (_, slot) => center + slot - 5)
    : Array.from({ length: people.length }, (_, index) => index);
  return (
    <>
      <div
        className="people-portrait-viewport"
        role="region"
        aria-roledescription="karusel"
        aria-label="Tarihî portreler"
        aria-describedby="portrait-help"
        tabIndex={0}
        onKeyDown={(event) => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
            return;
          event.preventDefault();
          if (event.key === "Home" || event.key === "End") {
            // Catalogue jumps should not animate through hundreds of portraits.
            target.current = event.key === "Home" ? 0 : people.length - 1;
            position.jump(target.current);
          } else select(target.current + (event.key === "ArrowRight" ? 1 : -1));
        }}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          suppressClick.current = false;
          position.stop();
          drag.current = {
            id: event.pointerId,
            x: event.clientX,
            y: event.clientY,
            position: position.get(),
            step: parseFloat(
              getComputedStyle(event.currentTarget).getPropertyValue(
                "--portrait-step",
              ),
            ),
            moved: false,
          };
        }}
        onPointerMove={(event) => {
          const start = drag.current;
          if (!start || start.id !== event.pointerId) return;
          const dx = event.clientX - start.x;
          if (!start.moved && Math.abs(event.clientY - start.y) > Math.abs(dx))
            return;
          if (!start.moved && Math.abs(dx) < 6) return;
          start.moved = true;
          event.currentTarget.setPointerCapture(event.pointerId);
          event.currentTarget.setAttribute("data-dragging", "true");
          position.jump(clamp(start.position - dx / start.step));
        }}
        onPointerUp={(event) => endDrag(event)}
        onPointerCancel={(event) => endDrag(event, true)}
        onClickCapture={(event) => {
          if (!suppressClick.current || event.detail === 0) return;
          event.preventDefault();
          event.stopPropagation();
          suppressClick.current = false;
        }}
      >
        <div className="people-portrait-scene">
          {indices.map((index) => (
            <PortraitCard
              key={index}
              person={people[wrap(index, people.length)]}
              index={index}
              position={position}
              selected={index === center}
              onSelect={select}
            />
          ))}
        </div>
      </div>
      <div className="people-portrait-selection">
        <button
          type="button"
          className="icon-button"
          aria-label="Önceki portre"
          disabled={!loop && center === 0}
          onClick={() => select(target.current - 1)}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <div
          className="people-portrait-caption"
          aria-live="polite"
          aria-atomic="true"
        >
          <Link prefetch={false} href={`/kisiler/${selected.slug}`}>
            {selected.name}
          </Link>
          <span>
            {selected.born} – {selected.died} <span aria-hidden="true">·</span>{" "}
            {wrap(center, people.length) + 1} / {people.length}
          </span>
        </div>
        <button
          type="button"
          className="icon-button"
          aria-label="Sonraki portre"
          disabled={!loop && center === people.length - 1}
          onClick={() => select(target.current + 1)}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
      <p id="portrait-help" className="people-portrait-help">
        Sürükleyerek veya ok tuşlarıyla keşfedin
      </p>
      <Link
        className="btn-gold people-portrait-bio"
        prefetch={false}
        href={`/kisiler/${selected.slug}`}
      >
        Biyografiyi oku <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </>
  );
}

export default function PeoplePortraitHero({ people }: { people: Portrait[] }) {
  const [query, setQuery] = useState("");
  const [era, setEra] = useState("all");
  const [region, setRegion] = useState("all");
  const [sort, setSort] = useState("born");
  const regions = useMemo(
    () =>
      [...new Set(people.map((person) => person.region))].sort((a, b) =>
        a.localeCompare(b, "tr"),
      ),
    [people],
  );
  const list = useMemo(() => {
    const term = searchText(query);
    return people
      .filter(
        (person) =>
          (era === "all" || person.era === era) &&
          (region === "all" || person.region === region) &&
          (!term ||
            searchText(
              `${person.name} ${person.title} ${person.region} ${person.summary}`,
            ).includes(term)),
      )
      .sort((a, b) =>
        sort === "name"
          ? a.name.localeCompare(b.name, "tr")
          : (parseInt(a.born) || 9999) - (parseInt(b.born) || 9999),
      );
  }, [people, query, era, region, sort]);
  const filtered =
    query !== "" || era !== "all" || region !== "all" || sort !== "born";
  const reset = () => {
    setQuery("");
    setEra("all");
    setRegion("all");
    setSort("born");
  };
  return (
    <section className="people-portrait-hero" aria-labelledby="people-title">
      <div className="home-container people-portrait-meta">
        <Breadcrumbs items={[{ label: "Kişiler" }]} />
        <span className="people-portrait-count" role="status">
          {list.length} / {people.length} portre
        </span>
      </div>
      <div className="home-container">
        <div
          className="people-portrait-toolbar"
          role="search"
          aria-label="Portre kataloğu"
        >
          <label className="people-portrait-search">
            <Search size={16} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="İsim, unvan veya bölge ara"
              aria-label="İsim, unvan veya bölge ara"
            />
          </label>
          <select
            aria-label="Dönem seçimi"
            value={era}
            onChange={(event) => setEra(event.target.value)}
          >
            <option value="all">Tüm dönemler</option>
            {ERAS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
          <select
            aria-label="Bölge seçimi"
            value={region}
            onChange={(event) => setRegion(event.target.value)}
          >
            <option value="all">Tüm bölgeler</option>
            {regions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            aria-label="Sıralama"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="born">Doğum yılı</option>
            <option value="name">A&apos;dan Z&apos;ye</option>
          </select>
        </div>
        {filtered && (
          <button
            type="button"
            className="people-portrait-reset"
            onClick={reset}
          >
            <X size={13} aria-hidden="true" /> Filtreleri temizle
          </button>
        )}
      </div>
      {list.length ? (
        <PortraitDeck
          key={JSON.stringify([query, era, region, sort])}
          people={list}
        />
      ) : (
        <div className="people-portrait-empty">
          <p>Bu filtrelere uyan kişi bulunamadı.</p>
          <button type="button" className="btn-glass" onClick={reset}>
            Tüm portreleri göster
          </button>
        </div>
      )}
      <div className="home-container people-portrait-intro">
        <p className="eyebrow">Biyografik Hafıza Koleksiyonu</p>
        <h1 id="people-title">Tarihe İz Bırakanlar</h1>
        <p className="people-portrait-summary">
          Kuzey Kafkasya tarihinden {people.length} öncü şahsiyet, portreleri ve
          biyografileriyle.
        </p>
      </div>
    </section>
  );
}
