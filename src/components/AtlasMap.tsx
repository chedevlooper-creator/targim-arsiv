"use client";

import "maplibre-gl/dist/maplibre-gl.css";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type * as maplibregl from "maplibre-gl";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  Layers,
  Locate,
  Maximize2,
  Minimize2,
  Minus,
  Mountain,
  Move,
  Orbit,
  Pause,
  Play,
  Plus,
  RotateCcw,
  RotateCw,
  Route,
  ScrollText,
  Search,
  Settings2,
  SlidersHorizontal,
  Tag,
  X,
} from "lucide-react";
import {
  PLACES,
  PLACE_KINDS,
  getDoc,
  getPerson,
  type Place,
  type PlaceKind,
} from "@/lib/data";

/* ========================================================================== */
/* COĞRAFİ RAKIM (METRE) VE HAVZA VERİLERİ (26 TARİHSEL NOKTA)                */
/* ========================================================================== */

const PLACE_ELEVATION: Record<string, number> = {
  targim: 1120,
  vovnuski: 1460,
  erzi: 1335,
  nikaroy: 1580,
  saroy: 1640,
  hoy: 1820,
  "itum-kale": 1060,
  vladikavkaz: 690,
  nazran: 525,
  haybah: 1680,
  valerik: 235,
  sunja: 195,
  "urus-martan": 240,
  aldi: 175,
  grozni: 130,
  satoy: 640,
  sali: 225,
  "tsotsi-yurt": 185,
  vedeno: 720,
  harachoy: 1050,
  dargo: 890,
  "dadi-yurt": 45,
  benoy: 940,
  hasavyurt: 120,
  gimri: 610,
  gunib: 1750,
};

const PLACE_VALLEY: Record<string, string> = {
  targim: "Cerah – Assa Dağ Havzası",
  vovnuski: "Guloy-Hi Kanyonu · İnguşetya",
  erzi: "Armhi Vadisi · Cerah",
  nikaroy: "Terloy-Ahk Vadisi",
  saroy: "Şaro-Argun Yukarı Havzası",
  hoy: "Çeberloy · Kezenoy-Am Güney Sırtı",
  "itum-kale": "Yukarı Argun Boğazı",
  vladikavkaz: "Terek Çıkışı · Daryal Eşiği",
  nazran: "Sunca – Nazranka Kavşağı",
  haybah: "Naşha – Galançoj Yaylası",
  valerik: "Gehi Orman Kuşağı · Küçük Çeçenya",
  sunja: "Sunca Nehri Orman Geçidi",
  "urus-martan": "Martan Nehri Havzası",
  aldi: "Sunca Güney Yakası",
  grozni: "Sunca (Sölja) Vadisi",
  satoy: "Orta Argun Boğazı",
  sali: "Büyük Çeçenya Ovası · Bass Nehri",
  "tsotsi-yurt": "Hulhulau Nehri Kıyısı",
  vedeno: "Hulhulau Vadisi · İçkeriya",
  harachoy: "Andi Geçidi Kapısı · İçkeriya",
  dargo: "Aksa Nehri Yukarı Ormanları",
  "dadi-yurt": "Terek Sağ Kıyısı · Kumuk Düzlüğü",
  benoy: "Yassi Nehri Yaylası · Doğu İçkeriya",
  hasavyurt: "Yarısu – Aktas Havzası (Auh)",
  gimri: "Andi ve Avar Koysu Kavşağı",
  gunib: "Kara-Koysu Üzeri Doğal Kale Platosu",
};

/* ========================================================================== */
/* KAFKAS ZİRVELERİ, NEHİR HAVZALARI VE TARİHSEL KATMANLAR (GEOJSON)          */
/* ========================================================================== */

const CAUCASUS_PEAKS = [
  {
    id: "kazbek",
    name: "Kazbek Dağı",
    elev: "5.033 m",
    lon: 44.51,
    lat: 42.69,
  },
  {
    id: "tebulosmta",
    name: "Tebulosmta",
    elev: "4.493 m",
    lon: 45.31,
    lat: 42.57,
  },
  { id: "san", name: "Şan Dağı", elev: "4.451 m", lon: 44.76, lat: 42.67 },
  {
    id: "diklosmta",
    name: "Diklosmta",
    elev: "4.285 m",
    lon: 45.78,
    lat: 42.52,
  },
  {
    id: "daryal",
    name: "Daryal Boğazı",
    elev: "1.204 m",
    lon: 44.63,
    lat: 42.74,
  },
  {
    id: "kezenoy",
    name: "Kezenoy-Am Gölü",
    elev: "1.869 m",
    lon: 46.15,
    lat: 42.77,
  },
];

const IMAMATE_COORDS: [number, number][] = [
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
  [45.22, 43.18],
];

const RIVERS_GEOJSON: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Terek Nehri" },
      geometry: {
        type: "LineString",
        coordinates: [
          [44.62, 42.68],
          [44.68, 43.03],
          [44.52, 43.42],
          [44.75, 43.68],
          [45.45, 43.62],
          [46.23, 43.48],
          [46.85, 43.65],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Sunca (Sunja) Nehri" },
      geometry: {
        type: "LineString",
        coordinates: [
          [44.76, 43.16],
          [44.78, 43.23],
          [45.15, 43.26],
          [45.45, 43.27],
          [45.69, 43.32],
          [46.02, 43.36],
          [46.18, 43.45],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Argun Nehri" },
      geometry: {
        type: "LineString",
        coordinates: [
          [45.28, 42.58],
          [45.48, 42.69],
          [45.58, 42.74],
          [45.69, 42.87],
          [45.75, 43.05],
          [45.85, 43.22],
          [45.92, 43.34],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Assa Nehri" },
      geometry: {
        type: "LineString",
        coordinates: [
          [44.84, 42.65],
          [44.88, 42.83],
          [44.98, 43.02],
          [45.12, 43.18],
          [45.18, 43.26],
        ],
      },
    },
  ],
};

const EXILE_GEOJSON: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: "muhaceret-1865",
        label: "1865 Osmanlı'ya Muhaceret Hattı",
        minYear: 1864,
        color: "#f0c36d",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [45.95, 43.02],
          [45.35, 43.22],
          [44.78, 43.26],
          [44.45, 43.44],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "surgun-1944",
        label: "23 Şubat 1944 Orta Asya Sürgün Demiryolu",
        minYear: 1944,
        color: "#ef7a5c",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [44.77, 43.22],
          [45.69, 43.32],
          [46.59, 43.25],
          [47.24, 43.46],
        ],
      },
    },
  ],
};

const TICKS = [1700, 1785, 1834, 1864, 1917, 1944, 1991, 2000];

type BaseMapStyle = "hybrid" | "satellite" | "topo" | "dark";
type RenderQuality = "auto" | "high" | "fast";

interface CameraPreset {
  id: string;
  label: string;
  center: [number, number];
  zoom: number;
  pitch: number;
  bearing: number;
}

const CAMERA_PRESETS: CameraPreset[] = [
  {
    id: "overview",
    label: "Kafkasya 3B Genel",
    center: [45.16, 42.83],
    zoom: 9.3,
    pitch: 58,
    bearing: -14,
  },
  {
    id: "cerah",
    label: "Cerah – Targim Vadisi",
    center: [44.93, 42.81],
    zoom: 11.6,
    pitch: 69,
    bearing: 24,
  },
  {
    id: "argun",
    label: "Argun – İtum-Kale",
    center: [45.58, 42.74],
    zoom: 11.3,
    pitch: 67,
    bearing: -22,
  },
  {
    id: "imamate",
    label: "Vedeno & İçkeriya",
    center: [46.16, 42.92],
    zoom: 10.4,
    pitch: 64,
    bearing: -26,
  },
  {
    id: "dagestan",
    label: "Gimri & Gunib Platosu",
    center: [46.88, 42.56],
    zoom: 10.1,
    pitch: 65,
    bearing: 28,
  },
  {
    id: "plan",
    label: "2B Kuşbakışı",
    center: [45.75, 42.98],
    zoom: 7.9,
    pitch: 0,
    bearing: 0,
  },
];

interface GuidedTour {
  id: string;
  title: string;
  subtitle: string;
  stops: string[];
}

const GUIDED_TOURS: GuidedTour[] = [
  {
    id: "kuleler",
    title: "Vaynah Kule Vadileri Turu",
    subtitle: "Cerah, Guloy-Hi, Terloy ve Çeberloy sarp taş kule kompleksleri",
    stops: ["targim", "erzi", "vovnuski", "nikaroy", "saroy", "hoy"],
  },
  {
    id: "imamet",
    title: "İmamet ve Direniş Hattı",
    subtitle: "1785 Şeyh Mansur kıyamından 1859 Gunib savunmasına",
    stops: ["aldi", "gimri", "valerik", "dargo", "vedeno", "gunib"],
  },
  {
    id: "surgun",
    title: "1944 Sürgün ve Hafıza Rotaları",
    subtitle:
      "23 Şubat 1944 sevkiyat merkezleri, Haybah ve 1957 dönüş istasyonları",
    stops: ["nazran", "grozni", "haybah", "itum-kale", "hasavyurt"],
  },
];

function createMapStyle(
  baseStyle: BaseMapStyle,
  showImamate: boolean,
  showExile: boolean,
  showRivers: boolean,
  exaggeration: number,
  year: number,
): maplibregl.StyleSpecification {
  const showImamateNow = showImamate && year >= 1834;
  const filteredExile: GeoJSON.FeatureCollection = {
    type: "FeatureCollection",
    features: showExile
      ? EXILE_GEOJSON.features.filter(
          (f) => year >= (f.properties?.minYear ?? 0),
        )
      : [],
  };

  const isSat = baseStyle === "satellite" || baseStyle === "hybrid";

  return {
    version: 8,
    sky: {
      "sky-color": "#14232f",
      "sky-horizon-blend": 0.7,
      "horizon-color": "#aab9bf",
      "horizon-fog-blend": 0.8,
      "fog-color": "#8c9d9f",
      "fog-ground-blend": 0.15,
    },
    sources: {
      satellite: {
        type: "raster",
        tiles: [
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        ],
        tileSize: 256,
        maxzoom: 19,
        attribution:
          'Imagery © <a href="https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9" target="_blank" rel="noopener noreferrer">Esri, Maxar, Earthstar Geographics & GIS User Community</a>',
      },
      "hybrid-labels": {
        type: "raster",
        tiles: [
          "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
        ],
        tileSize: 256,
        maxzoom: 18,
      },
      topo: {
        type: "raster",
        tiles: ["https://tile.opentopomap.org/{z}/{x}/{y}.png"],
        tileSize: 256,
        maxzoom: 16,
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors · <a href="https://opentopomap.org" target="_blank" rel="noopener noreferrer">OpenTopoMap</a> (CC-BY-SA)',
      },
      dark: {
        type: "raster",
        tiles: ["https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png"],
        tileSize: 256,
        maxzoom: 18,
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors · © <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer">CARTO</a>',
      },
      "terrain-dem": {
        type: "raster-dem",
        tiles: [
          "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",
        ],
        encoding: "terrarium",
        tileSize: 256,
        maxzoom: 14,
        attribution:
          '<a href="https://registry.opendata.aws/terrain-tiles/" target="_blank" rel="noopener noreferrer">Terrain Tiles</a> · Mapzen / AWS',
      },
      rivers: {
        type: "geojson",
        data: RIVERS_GEOJSON,
      },
      imamate: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [IMAMATE_COORDS],
          },
        },
      },
      "exile-routes": {
        type: "geojson",
        data: filteredExile,
      },
    },
    terrain:
      exaggeration > 0
        ? {
            source: "terrain-dem",
            exaggeration,
          }
        : undefined,
    layers: [
      {
        id: "atlas-background",
        type: "background",
        paint: { "background-color": "#152125" },
      },
      {
        id: "layer-satellite",
        type: "raster",
        source: "satellite",
        layout: { visibility: isSat ? "visible" : "none" },
        paint: {
          "raster-saturation": -0.12,
          "raster-contrast": 0.035,
          "raster-fade-duration": 180,
        },
      },
      {
        id: "layer-topo",
        type: "raster",
        source: "topo",
        layout: { visibility: baseStyle === "topo" ? "visible" : "none" },
        paint: {
          "raster-saturation": -0.15,
          "raster-contrast": 0.08,
        },
      },
      {
        id: "layer-dark",
        type: "raster",
        source: "dark",
        layout: { visibility: baseStyle === "dark" ? "visible" : "none" },
      },
      {
        id: "layer-hybrid-labels",
        type: "raster",
        source: "hybrid-labels",
        layout: { visibility: baseStyle === "hybrid" ? "visible" : "none" },
        paint: {
          "raster-opacity": 0.65,
        },
      },
      {
        id: "rivers-glow",
        type: "line",
        source: "rivers",
        layout: {
          visibility: showRivers ? "visible" : "none",
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": "#38bdf8",
          "line-width": 5,
          "line-blur": 3,
          "line-opacity": 0.28,
        },
      },
      {
        id: "rivers-line",
        type: "line",
        source: "rivers",
        layout: {
          visibility: showRivers ? "visible" : "none",
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": "#7dd3fc",
          "line-width": 1.8,
          "line-opacity": 0.78,
        },
      },
      {
        id: "imamate-fill",
        type: "fill",
        source: "imamate",
        layout: { visibility: showImamateNow ? "visible" : "none" },
        paint: {
          "fill-color": "#dcb877",
          "fill-opacity": 0.13,
        },
      },
      {
        id: "imamate-line",
        type: "line",
        source: "imamate",
        layout: { visibility: showImamateNow ? "visible" : "none" },
        paint: {
          "line-color": "#f6e4bb",
          "line-width": 2.4,
          "line-dasharray": [3, 2],
          "line-opacity": 0.88,
        },
      },
      {
        id: "exile-glow",
        type: "line",
        source: "exile-routes",
        paint: {
          "line-color": ["get", "color"],
          "line-width": 7,
          "line-blur": 4,
          "line-opacity": 0.38,
        },
      },
      {
        id: "exile-line",
        type: "line",
        source: "exile-routes",
        paint: {
          "line-color": ["get", "color"],
          "line-width": 2.8,
          "line-dasharray": [3, 2],
          "line-opacity": 0.94,
        },
      },
    ],
  };
}

/* ========================================================================== */
/* ANA BİLEŞEN: GELİŞMİŞ 3B KAFKASYA TARİH VE TOPOGRAFYA ATLASI               */
/* ========================================================================== */

export default function AtlasMap() {
  const searchParams = useSearchParams();
  const katmanParam = searchParams.get("katman");
  const yerParam = searchParams.get("yer");
  const validKatman =
    katmanParam && PLACE_KINDS.some((k) => k.id === katmanParam)
      ? (katmanParam as PlaceKind)
      : null;
  const validYer =
    yerParam && PLACES.some((p) => p.id === yerParam) ? yerParam : null;
  const validYerPlace = validYer
    ? (PLACES.find((x) => x.id === validYer) ?? null)
    : null;

  const [kinds, setKinds] = useState<PlaceKind[]>(() => {
    if (validKatman) {
      return validYerPlace && validYerPlace.kind !== validKatman
        ? [validKatman, validYerPlace.kind]
        : [validKatman];
    }
    return PLACE_KINDS.map((k) => k.id);
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [baseStyle, setBaseStyle] = useState<BaseMapStyle>("satellite");
  const [exaggeration, setExaggeration] = useState<number>(1.35);
  const [showImamate, setShowImamate] = useState(false);
  const [showExile, setShowExile] = useState(false);
  const [showRivers, setShowRivers] = useState(false);
  const [showPeaks, setShowPeaks] = useState(true);
  const [showAllLabels, setShowAllLabels] = useState(false);
  const [leftClickOrbit, setLeftClickOrbit] = useState(false);
  const [leftHudOpen, setLeftHudOpen] = useState(false);
  const [rightHudOpen, setRightHudOpen] = useState(() => Boolean(validYer));
  const [presetId, setPresetId] = useState(validYer ? "" : "overview");
  const [quality, setQuality] = useState<RenderQuality>("auto");
  const [mapReady, setMapReady] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const [tilesLoading, setTilesLoading] = useState(true);
  const [tileWarning, setTileWarning] = useState(false);
  const [sceneActive, setSceneActive] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [orbiting, setOrbiting] = useState(false);
  const [timelinePlaying, setTimelinePlaying] = useState(false);
  const [activeTourId, setActiveTourId] = useState<string | null>(null);
  const [tourStepIdx, setTourStepIdx] = useState(0);
  const [tourAutoPlay, setTourAutoPlay] = useState(false);

  const [year, setYear] = useState(() =>
    validYerPlace ? Math.max(2000, validYerPlace.year) : 2000,
  );
  const [selected, setSelected] = useState<string>(() => {
    if (validYer) return validYer;
    if (validKatman)
      return PLACES.find((p) => p.kind === validKatman)?.id ?? "targim";
    return "targim";
  });
  const [prevParams, setPrevParams] = useState({
    yer: validYer,
    katman: validKatman,
  });

  const viewportWrapRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const compassRef = useRef<HTMLSpanElement>(null);
  const telemetryRef = useRef<HTMLSpanElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const fullscreenButtonRef = useRef<HTMLButtonElement>(null);
  const tourStepRef = useRef(0);
  const markersRef = useRef<
    Map<
      string,
      {
        marker: maplibregl.Marker;
        root: HTMLButtonElement;
      }
    >
  >(new Map());
  const peakMarkersRef = useRef<HTMLElement[]>([]);

  const visible = useMemo(() => {
    const q = searchQuery.trim().toLocaleLowerCase("tr-TR");
    return PLACES.filter(
      (p) => kinds.includes(p.kind) && p.year <= year,
    ).filter(
      (p) =>
        !q ||
        `${p.name} ${p.description} ${PLACE_VALLEY[p.id] ?? ""}`
          .toLocaleLowerCase("tr-TR")
          .includes(q),
    );
  }, [kinds, year, searchQuery]);

  const sel = PLACES.find((p) => p.id === selected);
  const selPeople = (sel?.people ?? [])
    .map(getPerson)
    .filter((p) => p !== undefined);
  const selDocs = (sel?.docs ?? []).map(getDoc).filter((d) => d !== undefined);
  const selElevation = sel ? (PLACE_ELEVATION[sel.id] ?? 850) : 0;
  const selValley = sel ? (PLACE_VALLEY[sel.id] ?? "Kuzey Kafkasya") : "";

  const activeTour = GUIDED_TOURS.find((t) => t.id === activeTourId) ?? null;

  const flyToPlace = useCallback((p: Place, zoomLevel = 11.6) => {
    const map = mapRef.current;
    if (!map) return;
    setOrbiting(false);
    setPresetId("");
    map.flyTo({
      center: [p.lon, p.lat],
      zoom: zoomLevel,
      pitch: p.kind === "kule" || p.kind === "savas" ? 68 : 60,
      bearing: p.lon < 45.3 ? 22 : -22,
      duration: 1650,
      offset: window.innerWidth >= 1024 ? [-140, 0] : [0, -70],
    });
  }, []);

  const focus = useCallback(
    (p: Place, zoomLevel = 11.6) => {
      setSelected(p.id);
      setRightHudOpen(true);
      setSearchQuery("");
      if (window.innerWidth < 1024) setLeftHudOpen(false);
      flyToPlace(p, zoomLevel);
    },
    [flyToPlace],
  );

  const stepSelectedPlace = useCallback(
    (delta: number) => {
      if (visible.length === 0) return;
      const curIdx = visible.findIndex((p) => p.id === selected);
      const nextIdx =
        curIdx === -1 ? 0 : (curIdx + delta + visible.length) % visible.length;
      const nextPlace = visible[nextIdx];
      if (nextPlace) focus(nextPlace);
    },
    [visible, selected, focus],
  );

  if (validYer !== prevParams.yer || validKatman !== prevParams.katman) {
    const katmanChanged = validKatman !== prevParams.katman;
    setPrevParams({ yer: validYer, katman: validKatman });

    if (katmanChanged) {
      if (validKatman) {
        const nextKinds: PlaceKind[] =
          validYerPlace && validYerPlace.kind !== validKatman
            ? [validKatman, validYerPlace.kind]
            : [validKatman];
        setKinds(nextKinds);
        if (!validYer) {
          const firstMatch = PLACES.find((p) => p.kind === validKatman);
          if (firstMatch) setSelected(firstMatch.id);
        }
      } else {
        setKinds(PLACE_KINDS.map((k) => k.id));
      }
    }

    if (validYerPlace) {
      setSelected(validYerPlace.id);
      setKinds((prev) =>
        prev.includes(validYerPlace.kind)
          ? prev
          : [...prev, validYerPlace.kind],
      );
      setYear((prev) => Math.max(prev, validYerPlace.year));
    }
  }

  /* MapLibre GL 3B Harita Başlatma */
  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current) return;
    let disposed = false;
    let dispose: (() => void) | undefined;

    const initialize = async () => {
      const maplibregl = await import("maplibre-gl");
      if (disposed) return;
      maplibregl.setWorkerUrl(
        new URL(
          "maplibre-gl/dist/maplibre-gl-worker.mjs",
          import.meta.url,
        ).toString(),
      );

      const startCenter: [number, number] = validYerPlace
        ? [validYerPlace.lon, validYerPlace.lat]
        : CAMERA_PRESETS[0].center;
      const startZoom = validYerPlace ? 11.5 : CAMERA_PRESETS[0].zoom;
      const startPitch = validYerPlace ? 66 : CAMERA_PRESETS[0].pitch;
      const startBearing = validYerPlace ? 18 : CAMERA_PRESETS[0].bearing;

      const map = new maplibregl.Map({
        container,
        style: createMapStyle("satellite", false, false, false, 1.35, 2000),
        center: startCenter,
        zoom: startZoom,
        pitch: startPitch,
        bearing: startBearing,
        maxPitch: 78,
        minZoom: 6.2,
        maxZoom: 18,
        maxBounds: [
          [42.5, 40.8],
          [49.2, 45.0],
        ],
        attributionControl: false,
        pixelRatio: 1,
        maxTileCacheZoomLevels: 3,
        fadeDuration: 120,
        canvasContextAttributes: {
          antialias: false,
          powerPreference: "high-performance",
        },
      });

      map.addControl(
        new maplibregl.AttributionControl({ compact: true }),
        "bottom-right",
      );
      map.addControl(
        new maplibregl.ScaleControl({ maxWidth: 110, unit: "metric" }),
        "bottom-left",
      );
      map.on("style.load", () => {
        if (!disposed) setMapReady(true);
      });
      map.on("dataloading", () => {
        if (!disposed) setTilesLoading(true);
      });
      map.on("idle", () => {
        if (!disposed) {
          setTilesLoading(false);
          setTileWarning(false);
        }
      });
      map.on("error", (event) => {
        if (disposed) return;
        if (/worker|webgl/i.test(event.error?.message ?? "")) setMapError(true);
        else if ("sourceId" in event) setTileWarning(true);
      });
      const resizeObserver = new ResizeObserver(() => map.resize());
      resizeObserver.observe(container);
      const onContextLost = () => {
        if (!disposed) setMapError(true);
      };
      const onContextRestored = () => {
        if (!disposed) setMapError(false);
      };
      map.getCanvas().addEventListener("webglcontextlost", onContextLost);
      map
        .getCanvas()
        .addEventListener("webglcontextrestored", onContextRestored);

      const syncMove = () => {
        const pitch = Math.round(map.getPitch());
        const bearing = Math.round(map.getBearing());
        const zoom = map.getZoom().toFixed(1);
        if (compassRef.current) {
          compassRef.current.style.transform = `rotate(${-bearing}deg)`;
        }
        if (telemetryRef.current) {
          telemetryRef.current.textContent = `${pitch}° 3B Eğim · ${bearing}° Yön · Zoom ${zoom}`;
        }
      };
      map.on("move", syncMove);

      /* Tüm PLACES noktaları için DOM işaretçilerini oluştur */
      const markerStore = markersRef.current;
      PLACES.forEach((p) => {
        const elev = PLACE_ELEVATION[p.id] ?? 800;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `atlas-3d-marker atlas-kind-${p.kind}`;
        btn.setAttribute("aria-label", p.name);
        btn.innerHTML = `
        <span class="atlas-marker-pin">
          <span class="atlas-marker-core"></span>
        </span>
        <span class="atlas-marker-label">
          ${p.name}
          <span class="atlas-marker-sub">${elev} m · ${p.period}</span>
        </span>
      `;
        btn.addEventListener("click", (ev) => {
          ev.stopPropagation();
          setOrbiting(false);
          setSelected(p.id);
          setPresetId("");
          setRightHudOpen(true);
          if (window.innerWidth < 1024) setLeftHudOpen(false);
          map.flyTo({
            center: [p.lon, p.lat],
            zoom: 12.1,
            pitch: p.kind === "kule" || p.kind === "savas" ? 68 : 60,
            bearing: p.lon < 45.3 ? 22 : -22,
            duration: 1650,
            offset: window.innerWidth >= 1024 ? [-140, 0] : [0, -70],
          });
        });

        const marker = new maplibregl.Marker({
          element: btn,
          anchor: "bottom",
        })
          .setLngLat([p.lon, p.lat])
          .addTo(map);

        markerStore.set(p.id, { marker, root: btn });
      });

      /* Kafkas Zirveleri ve Geçitleri Rozetleri */
      const createdPeaks: HTMLElement[] = [];
      CAUCASUS_PEAKS.forEach((pk) => {
        const el = document.createElement("div");
        el.className = "atlas-peak-marker";
        el.innerHTML = `<span>▲</span><span>${pk.name}</span><span style="color:#dcb877">${pk.elev}</span>`;
        new maplibregl.Marker({ element: el, anchor: "center" })
          .setLngLat([pk.lon, pk.lat])
          .addTo(map);
        createdPeaks.push(el);
      });
      peakMarkersRef.current = createdPeaks;

      mapRef.current = map;

      dispose = () => {
        resizeObserver.disconnect();
        map.getCanvas().removeEventListener("webglcontextlost", onContextLost);
        map
          .getCanvas()
          .removeEventListener("webglcontextrestored", onContextRestored);
        markerStore.forEach(({ marker }) => marker.remove());
        markerStore.clear();
        peakMarkersRef.current = [];
        map.remove();
        mapRef.current = null;
      };
    };
    void initialize().catch(() => {
      if (!disposed) setMapError(true);
    });

    return () => {
      disposed = true;
      dispose?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [retryKey]);

  /* URL'den yeni bir yer seçildiğinde kamerayı uçur */
  useEffect(() => {
    if (validYerPlace && mapRef.current) {
      flyToPlace(validYerPlace, 11.6);
    }
  }, [validYerPlace, flyToPlace, mapReady]);

  /* Altlık Harita Katmanı (Hibrit / Uydu / Topo / Koyu) Değişimi */
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;
    const setVis = (id: string, on: boolean) => {
      if (map.getLayer(id)) {
        map.setLayoutProperty(id, "visibility", on ? "visible" : "none");
      }
    };
    const isSat = baseStyle === "satellite" || baseStyle === "hybrid";
    setVis("layer-satellite", isSat);
    setVis("layer-hybrid-labels", baseStyle === "hybrid");
    setVis("layer-topo", baseStyle === "topo");
    setVis("layer-dark", baseStyle === "dark");
    const needsHillshade = baseStyle === "dark" || baseStyle === "topo";
    if (needsHillshade && !map.getSource("hillshade-dem")) {
      map.addSource("hillshade-dem", {
        type: "raster-dem",
        tiles: [
          "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",
        ],
        encoding: "terrarium",
        tileSize: 256,
        maxzoom: 12,
      });
      map.addLayer(
        {
          id: "layer-hillshade",
          type: "hillshade",
          source: "hillshade-dem",
          paint: {
            "hillshade-exaggeration": 0.3,
            "hillshade-shadow-color": "#050709",
            "hillshade-highlight-color": "#d8e2df",
            "hillshade-accent-color": "#1c242b",
          },
        },
        "layer-hybrid-labels",
      );
    }
    setVis("layer-hillshade", needsHillshade);
  }, [baseStyle, mapReady]);

  /* 3B DEM Arazi Kabartma Gücü Değişimi */
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;
    if (exaggeration > 0) {
      map.setTerrain({ source: "terrain-dem", exaggeration });
    } else {
      map.setTerrain(null);
    }
  }, [exaggeration, mapReady]);

  /* İmamet, Sürgün, Nehirler ve Zirve Katmanları Güncellemesi */
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    const showImamateNow = showImamate && year >= 1834;
    if (map.getLayer("imamate-fill")) {
      map.setLayoutProperty(
        "imamate-fill",
        "visibility",
        showImamateNow ? "visible" : "none",
      );
    }
    if (map.getLayer("imamate-line")) {
      map.setLayoutProperty(
        "imamate-line",
        "visibility",
        showImamateNow ? "visible" : "none",
      );
    }
    if (map.getLayer("rivers-glow")) {
      map.setLayoutProperty(
        "rivers-glow",
        "visibility",
        showRivers ? "visible" : "none",
      );
    }
    if (map.getLayer("rivers-line")) {
      map.setLayoutProperty(
        "rivers-line",
        "visibility",
        showRivers ? "visible" : "none",
      );
    }

    const exileSource = map.getSource("exile-routes") as
      | maplibregl.GeoJSONSource
      | undefined;
    if (exileSource) {
      exileSource.setData({
        type: "FeatureCollection",
        features: showExile
          ? EXILE_GEOJSON.features.filter(
              (f) => year >= (f.properties?.minYear ?? 0),
            )
          : [],
      });
    }
  }, [showImamate, showExile, showRivers, year, mapReady]);

  /* Zirve İşaretçileri Görünürlüğü */
  useEffect(() => {
    peakMarkersRef.current.forEach((el) => {
      el.style.display = showPeaks ? "inline-flex" : "none";
    });
  }, [showPeaks, mapReady]);

  /* İşaretçi Görünürlük, Seçili Durum ve Etiket Modu Güncellemesi */
  useEffect(() => {
    const visibleIds = new Set(visible.map((p) => p.id));
    markersRef.current.forEach(({ root }, id) => {
      const isVis = visibleIds.has(id);
      root.style.display = isVis ? "flex" : "none";
      root.classList.toggle("is-selected", id === selected);
      root.classList.toggle("show-label", showAllLabels || id === selected);
    });
  }, [visible, selected, showAllLabels, mapReady]);

  /* Keep high-density output at rest; lower the GPU load while navigating. */
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;
    let refineTimer: ReturnType<typeof setTimeout>;
    const limited = navigator.hardwareConcurrency <= 4;
    const stillRatio = () =>
      quality === "fast"
        ? 1
        : quality === "high"
          ? 2
          : window.matchMedia("(max-width: 767px)").matches || limited
            ? 1.5
            : 2;
    let changingRatio = false;
    const setRatio = (ratio: number) => {
      if (Math.abs(map.getPixelRatio() - ratio) > 0.01) {
        changingRatio = true;
        try {
          map.setPixelRatio(ratio);
        } finally {
          changingRatio = false;
        }
      }
    };
    const onStart = () => {
      if (changingRatio) return;
      clearTimeout(refineTimer);
      setRatio(quality === "high" ? 2 : 1);
    };
    const onEnd = () => {
      if (changingRatio) return;
      clearTimeout(refineTimer);
      refineTimer = setTimeout(() => setRatio(stillRatio()), 180);
    };
    map.on("movestart", onStart);
    map.on("moveend", onEnd);
    if (map.isMoving()) onStart();
    else onEnd();
    return () => {
      clearTimeout(refineTimer);
      map.off("movestart", onStart);
      map.off("moveend", onEnd);
    };
  }, [quality, mapReady]);

  /* Pause continuous work when the atlas is offscreen or the tab is hidden. */
  useEffect(() => {
    let inView = true;
    const sync = () => setSceneActive(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    if (containerRef.current) observer.observe(containerRef.current);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  /* Fullscreen exits with Escape and restores focus without re-creating WebGL. */
  useEffect(() => {
    if (!fullscreen) return;
    const oldOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFullscreen(false);
        fullscreenButtonRef.current?.focus({ preventScroll: true });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [fullscreen]);

  /* 360° Yörünge Kamerası (Seçili Nokta Etrafında Otomatik Dönüş) */
  useEffect(() => {
    if (!orbiting || !sceneActive) return;
    const map = mapRef.current;
    if (!map) return;

    let rafId = 0;
    let lastFrame = 0;
    const spin = (time: number) => {
      if (lastFrame && time - lastFrame >= 32) {
        map.setBearing(
          map.getBearing() + Math.min(time - lastFrame, 100) * 0.008,
        );
        lastFrame = time;
      } else if (!lastFrame) lastFrame = time;
      rafId = requestAnimationFrame(spin);
    };
    rafId = requestAnimationFrame(spin);

    const stopOnInput = () => setOrbiting(false);
    const canvas = map.getCanvasContainer();
    canvas.addEventListener("pointerdown", stopOnInput);
    canvas.addEventListener("wheel", stopOnInput);

    return () => {
      cancelAnimationFrame(rafId);
      canvas.removeEventListener("pointerdown", stopOnInput);
      canvas.removeEventListener("wheel", stopOnInput);
    };
  }, [orbiting, sceneActive]);

  /* Zaman Çizelgesi Otomatik Oynatıcı (1700 -> 2000) */
  useEffect(() => {
    if (!timelinePlaying || !sceneActive) return;
    const timer = setInterval(() => {
      setYear((prev) => {
        if (prev >= 2000) {
          setTimelinePlaying(false);
          return 2000;
        }
        return Math.min(2000, prev + 4);
      });
    }, 110);
    return () => clearInterval(timer);
  }, [timelinePlaying, sceneActive]);

  /* Rehberli 3B Keşif Turu Otomatik Uçuş Zamanlayıcısı */
  useEffect(() => {
    if (!activeTour || !tourAutoPlay || !sceneActive) return;
    const timer = setInterval(() => {
      const nextIdx = (tourStepRef.current + 1) % activeTour.stops.length;
      tourStepRef.current = nextIdx;
      setTourStepIdx(nextIdx);
      const nextPlace = PLACES.find((p) => p.id === activeTour.stops[nextIdx]);
      if (nextPlace) {
        setSelected(nextPlace.id);
        flyToPlace(nextPlace, 12.1);
      }
    }, 5500);
    return () => clearInterval(timer);
  }, [activeTour, tourAutoPlay, flyToPlace, sceneActive]);

  /* Sol Tıkla 3B Döndürme (Orbit) Desteği */
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const canvas = map.getCanvasContainer();

    if (!leftClickOrbit) {
      map.dragPan.enable();
      return;
    }

    map.dragPan.disable();
    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      map.setBearing(map.getBearing() - dx * 0.35);
      map.setPitch(Math.max(0, Math.min(78, map.getPitch() - dy * 0.28)));
    };
    const onUp = () => {
      dragging = false;
    };

    canvas.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      canvas.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      map.dragPan.enable();
    };
  }, [leftClickOrbit, mapReady]);

  const toggleKind = (k: PlaceKind) =>
    setKinds((v) => (v.includes(k) ? v.filter((x) => x !== k) : [...v, k]));

  const applyPreset = (preset: CameraPreset) => {
    const map = mapRef.current;
    if (!map) return;
    setOrbiting(false);
    setPresetId(preset.id);
    map.flyTo({
      center: preset.center,
      zoom: preset.zoom,
      pitch: preset.pitch,
      bearing: preset.bearing,
      duration: 1600,
    });
  };

  const startTour = (tour: GuidedTour) => {
    setKinds(PLACE_KINDS.map((k) => k.id));
    setSearchQuery("");
    setYear(2000);
    setActiveTourId(tour.id);
    setTourStepIdx(0);
    tourStepRef.current = 0;
    setTourAutoPlay(true);
    const firstPlace = PLACES.find((p) => p.id === tour.stops[0]);
    if (firstPlace) {
      focus(firstPlace, 12.1);
    }
  };

  const goToTourStep = (idx: number) => {
    if (!activeTour) return;
    const bounded = (idx + activeTour.stops.length) % activeTour.stops.length;
    setTourStepIdx(bounded);
    tourStepRef.current = bounded;
    const targetPlace = PLACES.find((p) => p.id === activeTour.stops[bounded]);
    if (targetPlace) {
      focus(targetPlace, 12.1);
    }
  };

  const sliderPct =
    ((year - TICKS[0]) / (TICKS[TICKS.length - 1] - TICKS[0])) * 100;

  return (
    <div className="atlas-experience space-y-8">
      {/* Üst Sinematik 3B Keşif Rotaları (Guided Flight Tours) Şeridi */}
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
        {GUIDED_TOURS.map((tour, idx) => {
          const isCurrent = activeTourId === tour.id;
          return (
            <button
              key={tour.id}
              type="button"
              aria-pressed={isCurrent}
              onClick={() => {
                if (isCurrent) {
                  setActiveTourId(null);
                  setTourAutoPlay(false);
                } else startTour(tour);
              }}
              className={`museum-card group flex items-center justify-between gap-4 p-4 text-left transition ${
                isCurrent ? "border-gold-light/70 bg-white/[0.06]" : ""
              }`}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 font-mono text-[0.62rem] font-semibold text-gold-light">
                    0{idx + 1}
                  </span>
                  <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-gold uppercase">
                    3B Sinematik Uçuş Rotası · {tour.stops.length} Durak
                  </span>
                </div>
                <h2 className="mt-1.5 truncate font-display text-lg font-semibold text-parchment transition group-hover:text-gold-light">
                  {tour.title}
                </h2>
                <p className="mt-0.5 line-clamp-1 text-xs text-white/70">
                  {tour.subtitle}
                </p>
              </div>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
                  isCurrent
                    ? "border-gold-light bg-gold-light text-ink"
                    : "border-white/15 bg-white/[0.04] text-gold-light group-hover:border-gold-light/50"
                }`}
              >
                <Route size={15} />
              </span>
            </button>
          );
        })}
      </div>

      {/* ANA TAM GENİŞLİKLİ 3B KAFKASYA HARİTA SAHNESİ VE YÜZEN HUD PANELLERİ */}
      <div
        ref={viewportWrapRef}
        className={
          fullscreen ? "atlas-shell is-fullscreen" : "atlas-shell museum-card"
        }
      >
        <div className="atlas-toolbar">
          <div className="atlas-toolbar-top">
            <div className="atlas-title">
              <span className="dialog-eyebrow">
                Kuzey Kafkasya · İnteraktif atlas
              </span>
              <h2>Dağların hafızası</h2>
            </div>
            <div
              className="atlas-basemaps"
              role="group"
              aria-label="Harita görünümü"
            >
              {(
                [
                  { id: "satellite", label: "Uydu" },
                  { id: "hybrid", label: "Hibrit" },
                  { id: "topo", label: "Topoğrafik" },
                  { id: "dark", label: "Koyu" },
                ] as const
              ).map((style) => (
                <button
                  key={style.id}
                  type="button"
                  aria-pressed={baseStyle === style.id}
                  onClick={() => {
                    setBaseStyle(style.id);
                    setTileWarning(false);
                  }}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </div>
          <div className="atlas-toolbar-bottom">
            <label className="atlas-select">
              <Locate size={15} aria-hidden="true" />
              <select
                aria-label="Bölge görünümü"
                value={presetId}
                onChange={(event) => {
                  const preset = CAMERA_PRESETS.find(
                    (p) => p.id === event.target.value,
                  );
                  if (preset) applyPreset(preset);
                }}
              >
                <option value="" disabled>
                  Seçili konum
                </option>
                {CAMERA_PRESETS.map((preset) => (
                  <option key={preset.id} value={preset.id}>
                    {preset.label}
                  </option>
                ))}
              </select>
            </label>
            <div className="atlas-tools">
              <button
                type="button"
                className="atlas-tool"
                aria-expanded={leftHudOpen}
                onClick={() => {
                  setLeftHudOpen((v) => !v);
                  if (window.innerWidth < 1024) setRightHudOpen(false);
                }}
              >
                <SlidersHorizontal size={15} /> Katmanlar{" "}
                <span className="atlas-count">{visible.length}</span>
              </button>
              <button
                type="button"
                className="atlas-tool"
                aria-pressed={leftClickOrbit}
                onClick={() => setLeftClickOrbit((v) => !v)}
                title="Sürükleyerek 3B döndürme modunu değiştir"
              >
                {leftClickOrbit ? <Orbit size={15} /> : <Move size={15} />}
                {leftClickOrbit ? "3B döndür" : "Kaydır"}
              </button>
              <button
                type="button"
                className="atlas-tool"
                aria-pressed={orbiting}
                onClick={() => setOrbiting((v) => !v)}
              >
                <Orbit size={15} /> <span>360°</span>
              </button>
              <button
                type="button"
                className="atlas-tool"
                aria-pressed={showAllLabels}
                onClick={() => setShowAllLabels((v) => !v)}
              >
                <Tag size={15} /> İsimler
              </button>
            </div>
            <div className="atlas-display-tools">
              <label className="atlas-select atlas-quality">
                <Settings2 size={14} aria-hidden="true" />
                <select
                  aria-label="Görüntü kalitesi"
                  value={quality}
                  onChange={(event) =>
                    setQuality(event.target.value as RenderQuality)
                  }
                >
                  <option value="auto">Otomatik kalite</option>
                  <option value="high">Yüksek kalite</option>
                  <option value="fast">Hız öncelikli</option>
                </select>
              </label>
              <button
                ref={fullscreenButtonRef}
                type="button"
                className="icon-button"
                onClick={() => setFullscreen((v) => !v)}
                aria-label={
                  fullscreen ? "Tam ekrandan çık" : "Tam ekran 3B sahne"
                }
                title={fullscreen ? "Tam ekrandan çık (Esc)" : "Tam ekran"}
              >
                {fullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
              </button>
            </div>
          </div>
        </div>

        {/* 3B WebGL Harita Sahnesi + Yüzen Sol/Sağ HUD Panelleri */}
        <div
          className="atlas-stage"
          role="region"
          aria-label="İnteraktif 3B Kafkasya haritası"
          data-map-ready={mapReady && !mapError}
        >
          <div ref={containerRef} className="h-full w-full" />
          {!mapError && (tilesLoading || !mapReady) && (
            <div className="atlas-loading" role="status">
              <span />
              {mapReady
                ? "Görüntü ayrıntıları yükleniyor"
                : "3B arazi hazırlanıyor"}
            </div>
          )}
          {mapError && (
            <div className="atlas-error" role="alert">
              <Mountain size={30} />
              <h3>Harita görüntülenemedi</h3>
              <p>
                Bağlantınızı ve tarayıcınızın grafik desteğini kontrol edip
                yeniden deneyin. Yerleşim dizinini aşağıdan inceleyebilirsiniz.
              </p>
              <button
                className="btn-gold"
                type="button"
                onClick={() => {
                  setMapError(false);
                  setMapReady(false);
                  setTilesLoading(true);
                  setRetryKey((v) => v + 1);
                }}
              >
                Yeniden dene
              </button>
            </div>
          )}
          {tileWarning && !mapError && (
            <div className="atlas-tile-warning" role="status">
              Bazı harita görüntüleri yüklenemedi.
              <button
                type="button"
                onClick={() => {
                  setBaseStyle("dark");
                  setTileWarning(false);
                }}
              >
                Koyu haritaya geç
              </button>
            </div>
          )}

          {/* Aktif 3B Keşif Turu Üst Orta HUD Çubuğu */}
          {activeTour && (
            <div className="atlas-tour-player">
              <button
                type="button"
                onClick={() => goToTourStep(tourStepIdx - 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/80 transition hover:border-gold-light hover:text-gold-light"
                aria-label="Önceki durak"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={() => setTourAutoPlay((v) => !v)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-light text-ink transition hover:brightness-105"
                aria-label={tourAutoPlay ? "Turu duraklat" : "Turu oynat"}
              >
                {tourAutoPlay ? (
                  <Pause size={13} />
                ) : (
                  <Play size={13} className="ml-0.5" />
                )}
              </button>
              <div className="px-1 text-center">
                <span className="block text-[0.6rem] font-semibold tracking-[0.18em] text-gold uppercase">
                  {activeTour.title} ({tourStepIdx + 1}/
                  {activeTour.stops.length})
                </span>
                <span className="block font-display text-sm font-semibold text-parchment">
                  {
                    PLACES.find((p) => p.id === activeTour.stops[tourStepIdx])
                      ?.name
                  }
                </span>
              </div>
              <button
                type="button"
                onClick={() => goToTourStep(tourStepIdx + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/80 transition hover:border-gold-light hover:text-gold-light"
                aria-label="Sonraki durak"
              >
                <ChevronRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTourId(null);
                  setTourAutoPlay(false);
                }}
                className="ml-1 flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Turu kapat"
              >
                <X size={13} />
              </button>
            </div>
          )}

          {/* SOL YÜZEN HUD PANELİ: Hızlı Arama, Nokta Filtreleri ve 3B Arazi Ayarları */}
          {leftHudOpen && (
            <aside
              data-lenis-prevent
              className="atlas-layer-panel"
              aria-label="Harita katmanları"
            >
              <div className="flex items-center justify-between">
                <h2 className="eyebrow">Katmanlar &amp; Filtre</h2>
                <button
                  type="button"
                  onClick={() => setLeftHudOpen(false)}
                  className="rounded-full p-1 text-white/50 transition hover:bg-white/10 hover:text-white"
                  aria-label="Katman panelini gizle"
                >
                  <X size={13} />
                </button>
              </div>

              {/* Hızlı Nokta Arama */}
              <label className="relative mt-3 block">
                <Search
                  size={13}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Kule, köy veya vadi ara…"
                  aria-label="Haritada yerleşim ara"
                  className="field-control w-full pl-9 pr-3 text-xs"
                />
              </label>

              {/* Nokta Türleri */}
              <ul className="mt-3 space-y-1">
                {PLACE_KINDS.map((k) => (
                  <li key={k.id}>
                    <label className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2 py-1.5 text-xs font-medium text-white/80 transition hover:bg-white/[0.05] hover:text-white">
                      <input
                        type="checkbox"
                        checked={kinds.includes(k.id)}
                        onChange={() => toggleKind(k.id)}
                        className="accent-[#dcb877]"
                      />
                      <span>{k.label}</span>
                      <span className="ml-auto font-mono text-[0.68rem] text-gold-light/80">
                        {PLACES.filter((p) => p.kind === k.id).length}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>

              <div className="divider-gold my-3" />

              {/* 3B Dağ Yükseltisi (DEM Exaggeration) Seçici */}
              <div>
                <span className="block text-[0.62rem] font-semibold tracking-[0.18em] text-gold-light uppercase">
                  3B Dağ Kabartma Gücü (DEM)
                </span>
                <div className="mt-1.5 grid grid-cols-4 gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1">
                  {[
                    { val: 0, label: "2B" },
                    { val: 1.35, label: "1.35×" },
                    { val: 1.65, label: "1.65×" },
                    { val: 2.25, label: "2.25×" },
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setExaggeration(opt.val)}
                      aria-pressed={exaggeration === opt.val}
                      className={`rounded-lg py-1 font-mono text-[0.65rem] font-medium transition ${
                        exaggeration === opt.val
                          ? "bg-gold-light text-ink"
                          : "text-white/65 hover:text-white"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="divider-gold my-3" />

              {/* Tarihsel ve Coğrafi Hatlar */}
              <h3 className="eyebrow mb-2">Coğrafi &amp; Tarihsel Hatlar</h3>
              <ul className="space-y-1 text-xs font-medium text-white/80">
                <li>
                  <label className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2 py-1 transition hover:bg-white/[0.05] hover:text-white">
                    <input
                      type="checkbox"
                      checked={showImamate}
                      onChange={() => setShowImamate((v) => !v)}
                      className="accent-[#dcb877]"
                    />
                    <span>İmamet Sınırı (1834–1859)</span>
                  </label>
                </li>
                <li>
                  <label className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2 py-1 transition hover:bg-white/[0.05] hover:text-white">
                    <input
                      type="checkbox"
                      checked={showExile}
                      onChange={() => setShowExile((v) => !v)}
                      className="accent-[#dcb877]"
                    />
                    <span>1865 &amp; 1944 Sürgün Rotaları</span>
                  </label>
                </li>
                <li>
                  <label className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2 py-1 transition hover:bg-white/[0.05] hover:text-white">
                    <input
                      type="checkbox"
                      checked={showRivers}
                      onChange={() => setShowRivers((v) => !v)}
                      className="accent-[#dcb877]"
                    />
                    <span>Kafkas Nehir Havzaları</span>
                  </label>
                </li>
                <li>
                  <label className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2 py-1 transition hover:bg-white/[0.05] hover:text-white">
                    <input
                      type="checkbox"
                      checked={showPeaks}
                      onChange={() => setShowPeaks((v) => !v)}
                      className="accent-[#dcb877]"
                    />
                    <span>Zirveler ve Dağ Geçitleri</span>
                  </label>
                </li>
              </ul>

              <div className="divider-gold my-3" />
              <div className="grid grid-cols-2 gap-1.5 text-[0.66rem] text-white/65">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] border border-white/80 bg-[#dcb877]" />
                  <span>Kule</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full border border-white/80 bg-[#f6e4bb]" />
                  <span>Dağ Köyü</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-[2px] border-2 border-[#f6e4bb] bg-[#141210]" />
                  <span>Merkez</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full border border-white/80 bg-[#ef7a5c]" />
                  <span>Muharebe</span>
                </div>
              </div>
            </aside>
          )}

          {/* SAĞ YÜZEN SEÇİLİ NOKTA İNCELEME KARTI (INSPECTOR HUD) */}
          {rightHudOpen && sel ? (
            <aside
              key={sel.id}
              data-lenis-prevent
              className="atlas-inspector"
              aria-label="Seçili yerleşim"
            >
              <div className="atlas-inspector-cover relative bg-night">
                <Image
                  src={sel.image}
                  alt={sel.name}
                  fill
                  sizes="360px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />

                <div className="absolute inset-x-3 top-3 flex items-center justify-between">
                  <span className="badge-glass">
                    {PLACE_KINDS.find((k) => k.id === sel.kind)?.label}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => stepSelectedPlace(-1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-ink/80 text-white/80 transition hover:border-gold-light hover:text-gold-light"
                      title="Önceki nokta"
                      aria-label="Önceki nokta"
                    >
                      <ChevronLeft size={13} />
                    </button>
                    <button
                      type="button"
                      onClick={() => stepSelectedPlace(1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-ink/80 text-white/80 transition hover:border-gold-light hover:text-gold-light"
                      title="Sonraki nokta"
                      aria-label="Sonraki nokta"
                    >
                      <ChevronRight size={13} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setRightHudOpen(false)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-ink/80 text-white/80 transition hover:border-gold-light hover:text-gold-light"
                      title="Paneli gizle"
                      aria-label="Paneli gizle"
                    >
                      <X size={13} />
                    </button>
                  </div>
                </div>

                <div className="absolute inset-x-4 bottom-2.5 flex items-end justify-between gap-2">
                  <div>
                    <p className="font-mono text-[0.62rem] tracking-wider text-gold-light uppercase">
                      {selValley}
                    </p>
                    <h2 className="font-display text-2xl font-semibold leading-tight text-parchment">
                      {sel.name}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="p-4">
                {/* Hızlı 3B Kamera Aksiyonları */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => flyToPlace(sel, 13.0)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-gold/40 bg-gold/12 py-1.5 text-xs font-medium text-gold-light transition hover:border-gold-light hover:bg-gold/20"
                  >
                    <Layers size={12} /> 3B Vadiye Yaklaş
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrbiting((v) => !v)}
                    className={`inline-flex items-center justify-center gap-1.5 rounded-xl border py-1.5 text-xs font-medium transition ${
                      orbiting
                        ? "border-gold-light bg-gold-light text-ink"
                        : "border-white/12 bg-white/[0.04] text-white/80 hover:border-gold-light/40 hover:text-gold-light"
                    }`}
                  >
                    <Orbit size={12} />{" "}
                    {orbiting ? "Dönüşü Durdur" : "360° Çevresinde Dön"}
                  </button>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-white/75">
                  {sel.description}
                </p>

                {/* Coğrafi ve Tarihsel Künye */}
                <div className="mt-3.5 grid grid-cols-3 gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] p-2.5 text-center">
                  <div>
                    <span className="block text-[0.58rem] tracking-wider text-white/65 uppercase">
                      Rakım
                    </span>
                    <span className="mt-0.5 block font-mono text-xs font-semibold text-gold-light">
                      ~{selElevation} m
                    </span>
                  </div>
                  <div className="border-x border-white/[0.08]">
                    <span className="block text-[0.58rem] tracking-wider text-white/65 uppercase">
                      Koordinat
                    </span>
                    <span className="mt-0.5 block font-mono text-[0.68rem] text-white/85">
                      {sel.lat.toFixed(2)}°K {sel.lon.toFixed(2)}°D
                    </span>
                  </div>
                  <div>
                    <span className="block text-[0.58rem] tracking-wider text-white/65 uppercase">
                      Dönem
                    </span>
                    <span className="mt-0.5 block truncate px-1 text-[0.68rem] text-white/85">
                      {sel.year}
                    </span>
                  </div>
                </div>

                {selPeople.length > 0 && (
                  <div className="mt-4">
                    <p className="text-[0.6rem] font-semibold tracking-[0.18em] text-gold-light uppercase">
                      İlgili Şahsiyetler ({selPeople.length})
                    </p>
                    <div className="mt-2 space-y-1.5">
                      {selPeople.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/kisiler/${p.slug}`}
                          className="group flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] p-1.5 transition hover:border-gold-light/40 hover:bg-white/[0.06]"
                        >
                          <span className="relative h-9 w-7 shrink-0 overflow-hidden rounded-lg border border-white/12 bg-night">
                            <Image
                              src={p.image}
                              alt={p.name}
                              fill
                              sizes="32px"
                              className="portrait-tone object-cover object-top"
                            />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-xs font-semibold text-white transition group-hover:text-gold-light">
                              {p.name}
                            </span>
                            <span className="block truncate text-[0.64rem] text-white/50">
                              {p.title}
                            </span>
                          </span>
                          <ArrowRight
                            size={12}
                            className="shrink-0 text-gold-light/70 transition-transform group-hover:translate-x-0.5"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {selDocs.length > 0 && (
                  <div className="mt-3.5">
                    <p className="text-[0.6rem] font-semibold tracking-[0.18em] text-gold-light uppercase">
                      Birincil Arşiv Belgeleri ({selDocs.length})
                    </p>
                    <div className="mt-1.5 space-y-1.5">
                      {selDocs.map((d) => (
                        <Link
                          key={d.slug}
                          href={`/arsiv/${d.slug}`}
                          className="group flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/80 transition hover:border-gold-light/40 hover:bg-white/[0.06] hover:text-gold-light"
                        >
                          <ScrollText
                            size={12}
                            className="shrink-0 text-gold-light"
                          />
                          <span className="truncate">{d.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  href={
                    sel.kind === "kule"
                      ? "/sergiler/kuleler-ve-yerlesimler"
                      : `/zaman-cizelgesi?yil=${
                          [...TICKS, 1859, 1877].sort(
                            (a, b) =>
                              Math.abs(a - sel.year) - Math.abs(b - sel.year),
                          )[0]
                        }`
                  }
                  className="btn-gold mt-4 w-full justify-center py-2 text-xs"
                >
                  {sel.kind === "kule"
                    ? "Kuleler Sergisini Aç"
                    : "Kronolojide İncele"}{" "}
                  <ArrowRight size={13} />
                </Link>
              </div>
            </aside>
          ) : (
            !rightHudOpen &&
            visible.some((p) => p.id === selected) && (
              <button
                type="button"
                onClick={() => {
                  setRightHudOpen(true);
                  if (window.innerWidth < 1024) setLeftHudOpen(false);
                }}
                className="atlas-selected-place"
              >
                <span>Seçili Nokta: {sel?.name ?? "İncele"}</span>
              </button>
            )
          )}

          {/* Sağ Üst 3B Pusula ve Kamera Kontrol Kulesi */}
          <div className="atlas-camera-controls">
            <button
              type="button"
              onClick={() => {
                setOrbiting(false);
                mapRef.current?.easeTo({
                  bearing: 0,
                  pitch: 60,
                  duration: 900,
                });
              }}
              title="Kuzeye hizala"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink/85 shadow-lg transition hover:border-gold-light"
            >
              <span
                ref={compassRef}
                className="flex h-full w-full items-center justify-center"
                style={{ transform: "rotate(14deg)" }}
              >
                <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="1"
                  />
                  <polygon points="20,5 23,20 20,17 17,20" fill="#f6e4bb" />
                  <polygon
                    points="20,35 22.5,20 20,23 17.5,20"
                    fill="rgba(255,255,255,0.32)"
                  />
                </svg>
              </span>
              <span className="absolute -top-1 rounded bg-ink px-1 font-mono text-[0.52rem] font-semibold text-gold-light">
                K
              </span>
            </button>

            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-ink/85">
              <button
                type="button"
                onClick={() => mapRef.current?.zoomIn({ duration: 350 })}
                className="p-2 text-white/80 transition hover:bg-white/[0.08] hover:text-gold-light"
                aria-label="Yakınlaştır"
                title="Yakınlaştır"
              >
                <Plus size={14} />
              </button>
              <button
                type="button"
                onClick={() => mapRef.current?.zoomOut({ duration: 350 })}
                className="border-t border-white/10 p-2 text-white/80 transition hover:bg-white/[0.08] hover:text-gold-light"
                aria-label="Uzaklaştır"
                title="Uzaklaştır"
              >
                <Minus size={14} />
              </button>
              <button
                type="button"
                onClick={() => {
                  const m = mapRef.current;
                  if (m)
                    m.easeTo({ bearing: m.getBearing() - 35, duration: 450 });
                }}
                className="border-t border-white/10 p-2 text-white/80 transition hover:bg-white/[0.08] hover:text-gold-light"
                aria-label="Sola döndür"
                title="Sola döndür"
              >
                <RotateCcw size={13} />
              </button>
              <button
                type="button"
                onClick={() => {
                  const m = mapRef.current;
                  if (m)
                    m.easeTo({ bearing: m.getBearing() + 35, duration: 450 });
                }}
                className="border-t border-white/10 p-2 text-white/80 transition hover:bg-white/[0.08] hover:text-gold-light"
                aria-label="Sağa döndür"
                title="Sağa döndür"
              >
                <RotateCw size={13} />
              </button>
              <button
                type="button"
                onClick={() => {
                  const m = mapRef.current;
                  if (!m) return;
                  const nextPitch = m.getPitch() < 30 ? 66 : 0;
                  m.easeTo({ pitch: nextPitch, duration: 650 });
                }}
                className="border-t border-white/10 p-2 text-white/80 transition hover:bg-white/[0.08] hover:text-gold-light"
                aria-label="3B eğimi değiştir"
                title="3B Dağ Açısı / 2B Üstten Görünüm"
              >
                <Mountain size={14} />
              </button>
              <button
                type="button"
                onClick={() => applyPreset(CAMERA_PRESETS[0])}
                className="border-t border-white/10 p-2 text-white/80 transition hover:bg-white/[0.08] hover:text-gold-light"
                aria-label="3B kamerayı sıfırla"
                title="Genel görünüme dön"
              >
                <Locate size={14} />
              </button>
            </div>
          </div>

          {/* Sol Alt Kamera Telemetri ve Kullanım İpucu */}
          <div className="atlas-telemetry">
            <span
              ref={telemetryRef}
              className="rounded-full border border-white/12 bg-ink/85 px-2.5 py-1 font-mono text-[0.64rem] text-gold-light/90"
            >
              58° 3B Eğim · -14° Yön · Zoom 9.3
            </span>
            <span className="hidden rounded-full border border-white/10 bg-ink/80 px-2.5 py-1 text-[0.65rem] text-white/70 sm:inline">
              Sağ tık + sürükle: 3B döndür &amp; eğ · Tekerlek: Yakınlaştır
            </span>
          </div>
        </div>

        {/* Alt Zaman Kaydırıcısı + Kronolojik Oynatıcı (1700 – 2000) */}
        <div className="atlas-timeline">
          <div className="flex items-center gap-3.5">
            <button
              type="button"
              onClick={() => {
                if (!timelinePlaying && year >= 2000) {
                  setYear(1700);
                }
                setTimelinePlaying((v) => !v);
              }}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-light/50 bg-gold/15 text-gold-light transition hover:bg-gold-light hover:text-ink"
              aria-label={
                timelinePlaying
                  ? "Zaman akışını duraklat"
                  : "Tarihsel akışı oynat"
              }
              title={
                timelinePlaying
                  ? "Zaman akışını duraklat"
                  : "1700'den 2000'e kronolojik oynat"
              }
            >
              {timelinePlaying ? (
                <Pause size={13} />
              ) : (
                <Play size={13} className="ml-0.5" />
              )}
            </button>

            <div className="flex items-center gap-1.5">
              <Compass size={14} className="text-gold-light" />
              <span className="w-11 font-mono text-sm font-semibold text-gold-light">
                {year}
              </span>
            </div>

            <div className="relative flex-1">
              <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-white/15" />
              <div
                className="absolute top-1/2 h-0.5 -translate-y-1/2 bg-gold-light"
                style={{ width: `${sliderPct}%` }}
              />
              <input
                type="range"
                min={TICKS[0]}
                max={TICKS[TICKS.length - 1]}
                value={year}
                onChange={(e) => {
                  setTimelinePlaying(false);
                  setYear(parseInt(e.target.value, 10));
                }}
                className="relative w-full cursor-pointer appearance-none bg-transparent accent-[#dcb877]"
                aria-label="Tarihsel yıl filtresi"
              />
            </div>
          </div>
          <div className="mt-1.5 flex justify-between pl-24 text-[0.65rem] font-medium text-white/65">
            {TICKS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setTimelinePlaying(false);
                  setYear(t);
                }}
                className={`transition hover:text-gold-light ${year >= t ? "text-white/85" : ""}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobil / Tablet Seçili Nokta Kartı (lg altında haritanın hemen altında görünür) */}
      {sel && (
        <div className="museum-card overflow-hidden lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
            <div className="relative aspect-[16/10] bg-night sm:aspect-auto">
              <Image
                src={sel.image}
                alt={sel.name}
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <span className="eyebrow">{selValley}</span>
              <h2 className="mt-1 font-display text-2xl font-semibold text-parchment">
                {sel.name}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {sel.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => flyToPlace(sel, 12.8)}
                  className="btn-gold py-1.5 text-xs"
                >
                  3B Vadiye Yaklaş
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ALT BÖLGESEL VE TEMATİK 26 NOKTA DİZİNİ (TEK TIKLA 3B UÇUŞ) */}
      <div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">
              Coğrafi Katalog · {PLACES.length} Tarihsel Nokta
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-parchment md:text-4xl">
              Bölgesel ve Tematik Yerleşim Dizini
            </h2>
          </div>
          <p className="text-xs text-white/70">
            Bir yerleşime tıkladığınızda 3B kamera doğrudan ilgili vadi ve
            rakıma uçar.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PLACE_KINDS.map((kindMeta) => {
            const groupPlaces = PLACES.filter((p) => p.kind === kindMeta.id);
            return (
              <div key={kindMeta.id} className="museum-card flex flex-col p-5">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="eyebrow">{kindMeta.label}</span>
                  <span className="rounded-full bg-white/[0.06] px-2 py-0.5 font-mono text-[0.65rem] text-gold-light">
                    {groupPlaces.length} Nokta
                  </span>
                </div>

                <ul className="mt-3 divide-y divide-white/[0.06]">
                  {groupPlaces.map((p) => {
                    const isSel = p.id === selected;
                    const elev = PLACE_ELEVATION[p.id] ?? 800;
                    return (
                      <li key={p.id}>
                        <button
                          type="button"
                          onClick={() => {
                            if (!kinds.includes(p.kind)) {
                              setKinds((prev) => [...prev, p.kind]);
                            }
                            if (year < p.year) {
                              setYear(2000);
                            }
                            focus(p, 12.2);
                            viewportWrapRef.current?.scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                            });
                          }}
                          className={`group flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left transition ${
                            isSel ? "bg-gold/12" : "hover:bg-white/[0.04]"
                          }`}
                        >
                          <span className="relative h-10 w-12 shrink-0 overflow-hidden rounded-lg border border-white/12 bg-night">
                            <Image
                              src={p.image}
                              alt={p.name}
                              fill
                              sizes="48px"
                              className="object-cover transition duration-300 group-hover:scale-105"
                            />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span
                              className={`block truncate text-xs font-semibold transition ${
                                isSel
                                  ? "text-gold-light"
                                  : "text-parchment group-hover:text-gold-light"
                              }`}
                            >
                              {p.name}
                            </span>
                            <span className="mt-0.5 block truncate font-mono text-[0.62rem] text-white/65">
                              ~{elev} m · {p.period}
                            </span>
                          </span>
                          <ArrowRight
                            size={12}
                            className={`shrink-0 transition-transform group-hover:translate-x-0.5 ${
                              isSel
                                ? "text-gold-light"
                                : "text-white/30 group-hover:text-gold-light"
                            }`}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
