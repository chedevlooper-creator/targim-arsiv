"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Compass, Locate, Minus, Plus, X } from "lucide-react";
import { PLACES, PLACE_KINDS, type Place, type PlaceKind } from "@/lib/data";

/* Kuzey Kafkasya merkezli eşdikdörtgen projeksiyon */
const W = 1000;
const H = 680;
const LON0 = 44.4,
  LON1 = 47.3,
  LAT0 = 43.65,
  LAT1 = 42.2;
const px = (lon: number) => ((lon - LON0) / (LON1 - LON0)) * W;
const py = (lat: number) => ((LAT0 - lat) / (LAT0 - LAT1)) * H;
const path = (pts: [number, number][]) =>
  pts.map(([lon, lat], i) => `${i ? "L" : "M"}${px(lon).toFixed(1)},${py(lat).toFixed(1)}`).join(" ");
const smooth = (pts: [number, number][]) => {
  const p = pts.map(([lon, lat]) => [px(lon), py(lat)]);
  let d = `M${p[0][0]},${p[0][1]}`;
  for (let i = 1; i < p.length - 1; i++) {
    const mx = (p[i][0] + p[i + 1][0]) / 2;
    const my = (p[i][1] + p[i + 1][1]) / 2;
    d += ` Q${p[i][0]},${p[i][1]} ${mx},${my}`;
  }
  const last = p[p.length - 1];
  return d + ` L${last[0]},${last[1]}`;
};

const RIVERS: { name: string; pts: [number, number][]; label: [number, number] }[] = [
  {
    name: "Terek Nehri",
    pts: [
      [44.66, 42.75],
      [44.66, 43.03],
      [44.62, 43.3],
      [44.7, 43.55],
      [45.0, 43.62],
      [45.5, 43.6],
      [46.0, 43.58],
      [46.5, 43.62],
      [47.0, 43.6],
      [47.3, 43.55],
    ],
    label: [45.28, 43.63],
  },
  {
    name: "Sunja Nehri",
    pts: [
      [44.72, 43.08],
      [44.85, 43.22],
      [45.2, 43.27],
      [45.5, 43.3],
      [45.7, 43.33],
      [45.9, 43.4],
      [46.05, 43.57],
    ],
    label: [45.22, 43.31],
  },
  {
    name: "Argun Nehri",
    pts: [
      [45.25, 42.55],
      [45.45, 42.65],
      [45.58, 42.73],
      [45.69, 42.87],
      [45.75, 43.05],
      [45.85, 43.3],
    ],
    label: [45.64, 42.99],
  },
  {
    name: "Sulak Nehri",
    pts: [
      [46.55, 42.4],
      [46.75, 42.62],
      [46.84, 42.75],
      [46.95, 42.95],
      [47.1, 43.15],
      [47.3, 43.3],
    ],
    label: [47.0, 43.05],
  },
];

/* İmamet Devleti (1834–1859) yaklaşık tarihi çekirdek havzası */
const IMAMATE_BORDER: [number, number][] = [
  [45.22, 43.18],
  [45.65, 43.26],
  [46.22, 43.22],
  [46.72, 43.06],
  [47.12, 42.72],
  [47.06, 42.32],
  [46.48, 42.34],
  [45.85, 42.56],
  [45.32, 42.72],
  [45.14, 42.96],
];

/* 1865 Muhaceret ve 1944 Sürgün Yön Rotaları */
const EXILE_ROUTES: {
  id: string;
  label: string;
  color: string;
  minYear: number;
  pts: [number, number][];
  labelAt: [number, number];
}[] = [
  {
    id: "muhaceret-1865",
    label: "1865 Osmanlı'ya Muhaceret Hattı",
    color: "#e6b86a",
    minYear: 1864,
    pts: [
      [45.95, 43.02],
      [45.35, 43.22],
      [44.78, 43.26],
      [44.45, 43.44],
    ],
    labelAt: [44.92, 43.39],
  },
  {
    id: "surgun-1944",
    label: "23 Şubat 1944 Orta Asya Sürgün Demiryolu",
    color: "#e8735a",
    minYear: 1944,
    pts: [
      [44.82, 43.22],
      [45.69, 43.32],
      [46.59, 43.28],
      [47.24, 43.46],
    ],
    labelAt: [46.35, 43.45],
  },
];

const RIDGE: [number, number][] = [
  [44.4, 42.74],
  [44.9, 42.66],
  [45.3, 42.57],
  [45.8, 42.42],
  [46.3, 42.28],
  [46.8, 42.12],
  [47.3, 41.95],
];

const REGIONS: { name: string; at: [number, number] }[] = [
  { name: "ÇEÇENYA", at: [45.95, 43.12] },
  { name: "İNGUŞETYA", at: [44.96, 43.02] },
  { name: "DAĞISTAN", at: [46.85, 42.9] },
  { name: "GÜRCİSTAN", at: [45.08, 42.33] },
  { name: "KUZEY OSETYA", at: [44.57, 43.44] },
];

const PEAKS = (() => {
  const out: { x: number; y: number; s: number }[] = [];
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 250; i++) {
    const lon = LON0 + rnd() * (LON1 - LON0);
    const ridgeLat = 42.74 - ((lon - 44.4) / 2.9) * 0.79;
    const lat = ridgeLat + rnd() * 0.55 - 0.08;
    out.push({ x: px(lon), y: py(lat), s: 6 + rnd() * 10 });
  }
  return out;
})();

const TICKS = [1700, 1785, 1834, 1864, 1917, 1944, 1991, 2000];

function Marker({ p, selected, onClick }: { p: Place; selected: boolean; onClick: () => void }) {
  const x = px(p.lon);
  const y = py(p.lat);
  const r = selected ? 9 : 7;
  return (
    <g
      transform={`translate(${x},${y})`}
      onClick={onClick}
      className="cursor-pointer"
      role="button"
      aria-label={p.name}
    >
      {selected && <circle r={24} fill="rgba(201,164,92,0.22)" className="animate-pulse" />}
      {p.kind === "kule" && (
        <rect
          x={-r}
          y={-r}
          width={r * 2}
          height={r * 2}
          transform="rotate(45)"
          fill="#c9a45c"
          stroke="#06080b"
          strokeWidth={2}
        />
      )}
      {p.kind === "koy" && <circle r={r} fill="#ebd29d" stroke="#06080b" strokeWidth={2} />}
      {p.kind === "yerlesim" && (
        <rect
          x={-r}
          y={-r}
          width={r * 2}
          height={r * 2}
          fill="#06080b"
          stroke="#ebd29d"
          strokeWidth={2.4}
        />
      )}
      {p.kind === "savas" && (
        <g stroke="#e8735a" strokeWidth={2.8} strokeLinecap="round">
          <circle r={r + 3} fill="#06080b" stroke="#e8735a" strokeWidth={1.6} />
          <line x1={-4.8} y1={-4.8} x2={4.8} y2={4.8} />
          <line x1={4.8} y1={-4.8} x2={-4.8} y2={4.8} />
        </g>
      )}
      <g transform={`translate(0,${-r - 15})`}>
        <rect
          x={-(p.name.length * 3.8 + 12)}
          y={-12}
          width={p.name.length * 7.6 + 24}
          height={22}
          rx={3}
          fill={selected ? "#c9a45c" : "rgba(6,8,11,0.88)"}
          stroke="#c9a45c"
          strokeOpacity={0.78}
        />
        <text
          textAnchor="middle"
          y={3.5}
          fontSize={11.5}
          fontWeight={selected ? 600 : 400}
          fill={selected ? "#161108" : "#f3ead6"}
          fontFamily="var(--font-inter)"
        >
          {p.name}
        </text>
      </g>
    </g>
  );
}

export default function AtlasMap() {
  const searchParams = useSearchParams();
  const katmanParam = searchParams.get("katman");
  const yerParam = searchParams.get("yer");

  const startKinds =
    katmanParam && PLACE_KINDS.some((k) => k.id === katmanParam)
      ? [katmanParam as PlaceKind]
      : PLACE_KINDS.map((k) => k.id);

  const [kinds, setKinds] = useState<PlaceKind[]>(startKinds);
  const [showRivers, setShowRivers] = useState(true);
  const [showRegions, setShowRegions] = useState(true);
  const [showImamate, setShowImamate] = useState(true);
  const [showExile, setShowExile] = useState(true);
  const [year, setYear] = useState(2000);
  const [selected, setSelected] = useState<string>(
    yerParam && PLACES.some((p) => p.id === yerParam) ? yerParam : "targim"
  );

  useEffect(() => {
    if (yerParam && PLACES.some((p) => p.id === yerParam)) {
      setSelected(yerParam);
    }
  }, [yerParam]);

  useEffect(() => {
    if (katmanParam && PLACE_KINDS.some((k) => k.id === katmanParam)) {
      setKinds([katmanParam as PlaceKind]);
    }
  }, [katmanParam]);

  const [view, setView] = useState({ k: 1, x: 0, y: 0 });
  const drag = useRef<{ sx: number; sy: number; x: number; y: number } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const visible = useMemo(
    () => PLACES.filter((p) => kinds.includes(p.kind) && p.year <= year),
    [kinds, year]
  );
  const sel = PLACES.find((p) => p.id === selected);

  const toggle = (k: PlaceKind) =>
    setKinds((v) => (v.includes(k) ? v.filter((x) => x !== k) : [...v, k]));

  const zoom = (f: number) =>
    setView((v) => {
      const k = Math.min(4, Math.max(1, v.k * f));
      const cx = W / 2,
        cy = H / 2;
      return { k, x: cx - ((cx - v.x) * k) / v.k, y: cy - ((cy - v.y) * k) / v.k };
    });

  const focus = (p: Place) => {
    setSelected(p.id);
    setView((v) => {
      const k = Math.max(v.k, 1.75);
      return { k, x: W / 2 - px(p.lon) * k, y: H / 2 - py(p.lat) * k };
    });
  };

  const onDown = (e: React.PointerEvent) => {
    drag.current = { sx: e.clientX, sy: e.clientY, x: view.x, y: view.y };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current || !svgRef.current) return;
    const scale = W / svgRef.current.getBoundingClientRect().width;
    setView((v) => ({
      ...v,
      x: drag.current!.x + (e.clientX - drag.current!.sx) * scale,
      y: drag.current!.y + (e.clientY - drag.current!.sy) * scale,
    }));
  };
  const onUp = () => (drag.current = null);

  const sliderPct = ((year - TICKS[0]) / (TICKS[TICKS.length - 1] - TICKS[0])) * 100;

  return (
    <div className="grid gap-5 lg:grid-cols-[245px_1fr_350px]">
      {/* Sol Katmanlar ve Lejant Konsolu */}
      <aside className="museum-card h-fit p-5">
        <h2 className="eyebrow mb-4">Nokta Katmanları</h2>
        <ul className="space-y-1">
          {PLACE_KINDS.map((k) => (
            <li key={k.id}>
              <label className="flex cursor-pointer items-center gap-3 rounded px-2 py-2 text-sm text-[#ece3d0] transition hover:bg-gold/10">
                <input
                  type="checkbox"
                  checked={kinds.includes(k.id)}
                  onChange={() => toggle(k.id)}
                  className="accent-[#c9a45c]"
                />
                {k.label}
                <span className="ml-auto font-mono text-xs text-gold-light/80">
                  {PLACES.filter((p) => p.kind === k.id).length}
                </span>
              </label>
            </li>
          ))}
        </ul>

        <div className="divider-gold my-4" />
        <h3 className="eyebrow mb-3">Tarihsel Hatlar</h3>
        <ul className="space-y-1 text-sm text-[#ece3d0]">
          <li>
            <label className="flex cursor-pointer items-center gap-3 rounded px-2 py-2 hover:bg-gold/10">
              <input
                type="checkbox"
                checked={showImamate}
                onChange={() => setShowImamate((v) => !v)}
                className="accent-[#c9a45c]"
              />
              <span>İmamet Havzası (1845)</span>
            </label>
          </li>
          <li>
            <label className="flex cursor-pointer items-center gap-3 rounded px-2 py-2 hover:bg-gold/10">
              <input
                type="checkbox"
                checked={showExile}
                onChange={() => setShowExile((v) => !v)}
                className="accent-[#c9a45c]"
              />
              <span>Sürgün Rotaları</span>
            </label>
          </li>
          <li>
            <label className="flex cursor-pointer items-center gap-3 rounded px-2 py-2 hover:bg-gold/10">
              <input
                type="checkbox"
                checked={showRivers}
                onChange={() => setShowRivers((v) => !v)}
                className="accent-[#c9a45c]"
              />
              <span>Nehir Ağları</span>
            </label>
          </li>
          <li>
            <label className="flex cursor-pointer items-center gap-3 rounded px-2 py-2 hover:bg-gold/10">
              <input
                type="checkbox"
                checked={showRegions}
                onChange={() => setShowRegions((v) => !v)}
                className="accent-[#c9a45c]"
              />
              <span>Bölge İsimleri</span>
            </label>
          </li>
        </ul>

        <div className="divider-gold my-4" />
        <h3 className="eyebrow mb-3">Harita Lejantı</h3>
        <ul className="space-y-2.5 text-xs text-mist">
          <li className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rotate-45 bg-gold" /> Vaynah Kule Kompleksi
          </li>
          <li className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-light" /> Tarihi Dağ Köyü
          </li>
          <li className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 border-2 border-gold-light" /> Şehir / İdari Merkez
          </li>
          <li className="flex items-center gap-3">
            <span className="font-bold text-[#e8735a]">✕</span> Meydan Muharebesi / Kuşatma
          </li>
          <li className="flex items-center gap-3">
            <span className="w-4 border-t border-dashed border-gold-light" /> İmamet Sınırı
          </li>
          <li className="flex items-center gap-3">
            <span className="w-4 border-t-2 border-dashed border-[#e8735a]" /> 1944 Sürgün Hattı
          </li>
        </ul>
      </aside>

      {/* Orta Kartografik Sahne */}
      <div className="museum-card relative overflow-hidden">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="block h-auto w-full cursor-grab touch-none select-none bg-[#0b0f14] active:cursor-grabbing"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
          onWheel={(e) => zoom(e.deltaY < 0 ? 1.15 : 1 / 1.15)}
        >
          <defs>
            <radialGradient id="land" cx="50%" cy="42%" r="75%">
              <stop offset="0%" stopColor="#352d1e" />
              <stop offset="62%" stopColor="#1e1a13" />
              <stop offset="100%" stopColor="#090c10" />
            </radialGradient>
            <linearGradient id="mount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8a7248" />
              <stop offset="100%" stopColor="#2a2317" />
            </linearGradient>
            <pattern id="hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#c9a45c" strokeOpacity="0.05" strokeWidth="1" />
            </pattern>
            <marker id="arrow-exile" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#e8735a" />
            </marker>
            <marker id="arrow-muhacir" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#e6b86a" />
            </marker>
          </defs>

          <g transform={`translate(${view.x},${view.y}) scale(${view.k})`}>
            <rect width={W} height={H} fill="url(#land)" />
            {/* Antik rölyef harita dokusu katmanı */}
            <image
              href="/images/atlas.jpg"
              x={0}
              y={0}
              width={W}
              height={H}
              preserveAspectRatio="xMidYMid slice"
              opacity={0.22}
            />
            <rect width={W} height={H} fill="url(#hatch)" />

            {/* Meridyen ve Paraleller */}
            {[44.5, 45, 45.5, 46, 46.5, 47].map((lon) => (
              <g key={lon}>
                <line
                  x1={px(lon)}
                  y1={0}
                  x2={px(lon)}
                  y2={H}
                  stroke="#c9a45c"
                  strokeOpacity={0.12}
                  strokeDasharray="2 6"
                />
                <text x={px(lon) + 4} y={H - 10} fontSize={9.5} fill="#ebd29d" fillOpacity={0.45}>
                  {lon}°D
                </text>
              </g>
            ))}
            {[42.5, 43, 43.5].map((lat) => (
              <g key={lat}>
                <line
                  x1={0}
                  y1={py(lat)}
                  x2={W}
                  y2={py(lat)}
                  stroke="#c9a45c"
                  strokeOpacity={0.12}
                  strokeDasharray="2 6"
                />
                <text x={8} y={py(lat) - 5} fontSize={9.5} fill="#ebd29d" fillOpacity={0.45}>
                  {lat}°K
                </text>
              </g>
            ))}

            {/* İmamet Devleti Tarihi Sınır Katmanı */}
            {showImamate && year >= 1834 && (
              <g>
                <path
                  d={`${path(IMAMATE_BORDER)} Z`}
                  fill="rgba(201,164,92,0.10)"
                  stroke="#ebd29d"
                  strokeOpacity={0.65}
                  strokeWidth={1.6}
                  strokeDasharray="6 4"
                />
                <text
                  x={px(46.22)}
                  y={py(42.84)}
                  textAnchor="middle"
                  fontSize={10.5}
                  letterSpacing={3.5}
                  fill="#ebd29d"
                  fillOpacity={0.75}
                  fontFamily="var(--font-cinzel)"
                >
                  İMAMET HAVZASI (1834–1859)
                </text>
              </g>
            )}

            {/* Büyük Kafkas Dağları Sırtı */}
            <path
              d={path(RIDGE)}
              stroke="#c9a45c"
              strokeOpacity={0.26}
              strokeWidth={28}
              fill="none"
              strokeLinecap="round"
            />
            {PEAKS.map((m, i) => (
              <path
                key={i}
                d={`M${m.x - m.s},${m.y + m.s * 0.6} L${m.x},${m.y - m.s * 0.7} L${m.x + m.s},${m.y + m.s * 0.6}`}
                fill="url(#mount)"
                fillOpacity={0.58}
                stroke="#c9a45c"
                strokeOpacity={0.35}
                strokeWidth={0.8}
              />
            ))}
            <text
              x={px(45.55)}
              y={py(42.47)}
              fontSize={11.5}
              letterSpacing={6}
              fill="#ebd29d"
              fillOpacity={0.62}
              fontFamily="var(--font-cinzel)"
              transform={`rotate(-14 ${px(45.55)} ${py(42.47)})`}
            >
              BÜYÜK KAFKAS SIRADAĞLARI
            </text>

            {/* Nehirler */}
            {showRivers &&
              RIVERS.map((r) => (
                <g key={r.name}>
                  <path
                    d={smooth(r.pts)}
                    stroke="#759db3"
                    strokeOpacity={0.82}
                    strokeWidth={2.5}
                    fill="none"
                    strokeLinecap="round"
                  />
                  <text
                    x={px(r.label[0])}
                    y={py(r.label[1])}
                    fontSize={10.5}
                    fontStyle="italic"
                    fill="#9fc5da"
                    fillOpacity={0.9}
                    fontFamily="var(--font-cormorant)"
                  >
                    {r.name}
                  </text>
                </g>
              ))}

            {/* Sürgün ve Muhaceret Rotaları */}
            {showExile &&
              EXILE_ROUTES.filter((rt) => year >= rt.minYear).map((rt) => (
                <g key={rt.id}>
                  <path
                    d={smooth(rt.pts)}
                    stroke={rt.color}
                    strokeOpacity={0.85}
                    strokeWidth={2.4}
                    strokeDasharray="7 5"
                    fill="none"
                    markerEnd={rt.id === "surgun-1944" ? "url(#arrow-exile)" : "url(#arrow-muhacir)"}
                  />
                  <text
                    x={px(rt.labelAt[0])}
                    y={py(rt.labelAt[1])}
                    textAnchor="middle"
                    fontSize={9.5}
                    fontWeight={600}
                    fill={rt.color}
                    fontFamily="var(--font-inter)"
                  >
                    {rt.label}
                  </text>
                </g>
              ))}

            {/* Bölge Adları */}
            {showRegions &&
              REGIONS.map((r) => (
                <text
                  key={r.name}
                  x={px(r.at[0])}
                  y={py(r.at[1])}
                  textAnchor="middle"
                  fontSize={18}
                  letterSpacing={8}
                  fill="#ebd29d"
                  fillOpacity={0.25}
                  fontFamily="var(--font-cinzel)"
                >
                  {r.name}
                </text>
              ))}

            {/* Yerleşim ve Savaş İşaretçileri */}
            <g>
              {visible.map((p) => (
                <g
                  key={p.id}
                  transform={`translate(${px(p.lon)},${py(p.lat)}) scale(${1 / Math.sqrt(view.k)}) translate(${-px(
                    p.lon
                  )},${-py(p.lat)})`}
                >
                  <Marker p={p} selected={p.id === selected} onClick={() => focus(p)} />
                </g>
              ))}
            </g>
          </g>

          {/* Pusula Gülü */}
          <g transform={`translate(${W - 52},52)`} opacity={0.85}>
            <circle r={24} fill="rgba(6,8,11,0.7)" stroke="#c9a45c" strokeOpacity={0.6} />
            <path d="M0,-20 L5,0 L0,20 L-5,0 Z" fill="#c9a45c" fillOpacity={0.75} />
            <text y={-28} textAnchor="middle" fontSize={10} fontWeight={600} fill="#ebd29d">
              K
            </text>
          </g>
        </svg>

        {/* Yakınlaştırma Kontrolü */}
        <div className="absolute right-4 top-24 flex flex-col overflow-hidden rounded border border-gold/40 bg-ink/85 backdrop-blur-sm">
          <button
            onClick={() => zoom(1.3)}
            className="p-2.5 text-gold-light hover:bg-gold/15"
            aria-label="Yakınlaştır"
          >
            <Plus size={16} />
          </button>
          <button
            onClick={() => zoom(1 / 1.3)}
            className="border-t border-gold/20 p-2.5 text-gold-light hover:bg-gold/15"
            aria-label="Uzaklaştır"
          >
            <Minus size={16} />
          </button>
          <button
            onClick={() => setView({ k: 1, x: 0, y: 0 })}
            className="border-t border-gold/20 p-2.5 text-gold-light hover:bg-gold/15"
            aria-label="Görünümü sıfırla"
          >
            <Locate size={16} />
          </button>
        </div>

        {/* Alt Zaman Kaydırıcısı */}
        <div className="border-t border-gold/20 bg-ink/85 px-6 pb-4 pt-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Compass size={15} className="text-gold" />
              <span className="w-12 font-display text-lg font-semibold text-gold-light">{year}</span>
            </div>
            <div className="relative flex-1">
              <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-gold/25" />
              <div
                className="absolute top-1/2 h-0.5 -translate-y-1/2 bg-gold"
                style={{ width: `${sliderPct}%` }}
              />
              <input
                type="range"
                min={TICKS[0]}
                max={TICKS[TICKS.length - 1]}
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value, 10))}
                className="relative w-full cursor-pointer appearance-none bg-transparent accent-[#c9a45c]"
                aria-label="Tarihsel yıl filtresi"
              />
            </div>
          </div>
          <div className="mt-2 flex justify-between pl-16 text-[0.68rem] font-medium text-mist">
            {TICKS.map((t) => (
              <button
                key={t}
                onClick={() => setYear(t)}
                className={`transition hover:text-gold-light ${year >= t ? "text-[#efe5d0]" : ""}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sağ Seçili Nokta İnceleme Paneli */}
      <aside className="museum-card h-fit overflow-hidden">
        {sel ? (
          <div key={sel.id} className="animate-fade-up">
            <div className="relative aspect-[4/3] bg-ink">
              <Image src={sel.image} alt={sel.name} fill sizes="350px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
              <button
                onClick={() => setSelected("")}
                className="absolute right-3 top-3 rounded-full border border-gold/35 bg-ink/80 p-1.5 text-mist transition hover:text-white"
                aria-label="Listeye dön"
              >
                <X size={16} />
              </button>
              <span className="absolute bottom-3 left-4 border border-gold/35 bg-ink/80 px-2.5 py-0.5 text-[0.62rem] tracking-widest text-gold-light uppercase">
                {PLACE_KINDS.find((k) => k.id === sel.kind)?.label}
              </span>
            </div>

            <div className="p-6">
              <h2 className="font-display text-2xl font-semibold text-[#f5ecd8]">{sel.name}</h2>
              <p className="mt-3 font-serif text-lg leading-relaxed text-[#ddd3c0]">{sel.description}</p>

              <dl className="mt-5 divide-y divide-gold/15 border-y border-gold/20 text-sm">
                <div className="grid grid-cols-[95px_1fr] py-2.5">
                  <dt className="text-xs tracking-wider text-gold-light/80 uppercase">Dönem</dt>
                  <dd className="text-[#f1e8d5]">{sel.period}</dd>
                </div>
                <div className="grid grid-cols-[95px_1fr] py-2.5">
                  <dt className="text-xs tracking-wider text-gold-light/80 uppercase">Koordinat</dt>
                  <dd className="font-mono text-xs text-[#f1e8d5]">
                    {sel.lat.toFixed(2)}°K, {sel.lon.toFixed(2)}°D
                  </dd>
                </div>
              </dl>

              <Link
                href={
                  sel.kind === "kule"
                    ? "/sergiler/kuleler-ve-yerlesimler"
                    : `/zaman-cizelgesi?yil=${
                        [...TICKS, 1859, 1877].sort((a, b) => Math.abs(a - sel.year) - Math.abs(b - sel.year))[0]
                      }`
                }
                className="btn-gold mt-6 w-full justify-center"
              >
                İlgili Kayıtları Aç <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <h2 className="eyebrow">Haritadaki Noktalar ({visible.length})</h2>
            <ul className="mt-4 max-h-[520px] divide-y divide-gold/10 overflow-y-auto pr-1">
              {visible.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => focus(p)}
                    className="flex w-full items-center justify-between py-2.5 text-left text-sm text-[#ece3d0] transition hover:text-gold-light"
                  >
                    <span className="font-display text-sm">{p.name}</span>
                    <span className="text-xs text-mist">{p.period}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </div>
  );
}
