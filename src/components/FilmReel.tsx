"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

export interface ReelItem {
  href: string;
  title: string;
  sub: string;
  image: string;
}

const COLLECTION_LABELS = [
  "Portreler ve biyografiler",
  "Birincil kaynaklar",
  "Tarihsel dönüm noktaları",
  "Mekânlar ve hafıza",
  "Küratöryel seçkiler",
  "Yaşayan miras",
];

function CollectionDirectory({
  items,
  active,
  onSelect,
}: {
  items: ReelItem[];
  active?: number;
  onSelect?: (index: number) => void;
}) {
  return (
    <nav aria-label="Bölümler" className="collection-directory">
      <ul className="collection-directory-grid">
        {items.map((item, index) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onMouseEnter={() => onSelect?.(index)}
              onFocus={() => onSelect?.(index)}
              className={`collection-entry ${active === index ? "is-current" : ""}`}
            >
              <span className="collection-entry-image" aria-hidden="true">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 60vw, (max-width: 1023px) 35vw, 24vw"
                  className="object-cover"
                />
              </span>
              <span className="collection-entry-overline">
                <span className="collection-entry-index">{String(index + 1).padStart(2, "0")}</span>
                <span>{COLLECTION_LABELS[index]}</span>
              </span>
              <span className="collection-entry-copy">
                <span className="collection-entry-title">{item.title}</span>
                <span className="collection-entry-meta">{item.sub}</span>
              </span>
              <span className="collection-entry-arrow" aria-hidden="true">
                <ArrowUpRight size={20} strokeWidth={1.4} />
              </span>
              <span className="collection-entry-line" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const FRAME_W = 960;
const FRAME_H = 640;
/* Silindirin çevresindeki kare sayısı; dikiş görünmesin diye kare sayısının katı olmalı */
const RING_MIN = 12;

const VERTEX = `#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

/* Eğik bir silindir etrafına sarılmış film şeridini ışın izleyerek çizer. */
const FRAGMENT = `#version 300 es
precision highp float;
precision highp sampler2DArray;
uniform sampler2DArray uFrames;
uniform vec2 uRes;
uniform float uScroll;
uniform float uCount;
uniform float uRing;
uniform vec2 uTilt;
in vec2 vUv;
out vec4 fragColor;

const float PI = 3.14159265;
const float R = 2.86;
const float H = 0.66;
const float CAM = 5.96;
const float FOCAL = 2.6;
const float IMAGE_H = 0.76;

float roundBox(vec2 p, vec2 b, float r) {
  vec2 d = abs(p) - b + r;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - r;
}

vec3 frameColor(vec2 uv, float layer) {
  return texture(uFrames, vec3(uv, layer)).rgb;
}

vec4 film(float s, float v) {
  float edge = abs(v);
  vec4 base = vec4(0.012, 0.011, 0.012, 1.0);

  if (edge > IMAGE_H) {
    vec2 hole = vec2((fract(s * 9.0) - 0.5) * 0.111 * 3.2, (edge - 0.885) * 0.74);
    float d = roundBox(hole, vec2(0.1, 0.052), 0.022);
    base.a = smoothstep(-0.006, 0.006, d);
    return base;
  }

  float fs = fract(s);
  float margin = 0.018;
  if (fs < margin || fs > 1.0 - margin) return base;

  float layer = mod(floor(s), uCount);
  vec2 uv = vec2((fs - margin) / (1.0 - 2.0 * margin), 0.5 - v / IMAGE_H * 0.5);
  return vec4(frameColor(uv, layer), 1.0);
}

mat3 rotX(float a) { float c = cos(a), s = sin(a); return mat3(1, 0, 0, 0, c, s, 0, -s, c); }
mat3 rotZ(float a) { float c = cos(a), s = sin(a); return mat3(c, s, 0, -s, c, 0, 0, 0, 1); }

void main() {
  vec2 q = vUv * 2.0 - 1.0;
  q *= 1.0 + 0.045 * dot(q, q);
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(q.x * max(aspect, 1.0), q.y * max(1.0 / aspect, 1.0));
  p *= min(1.0, 1.8 / aspect);
  p.y -= 0.17;

  float glow = exp(-2.4 * length(vec2(q.x * 0.7, q.y + 1.15)));
  vec3 color = mix(vec3(0.039, 0.035, 0.027), vec3(0.095, 0.08, 0.058), smoothstep(0.75, -1.0, q.y));
  color += vec3(0.38, 0.28, 0.16) * glow * 0.42;

  mat3 tilt = rotX(uTilt.x) * rotZ(uTilt.y);
  vec3 ro = tilt * vec3(0.0, 0.0, CAM);
  vec3 rd = tilt * normalize(vec3(p, -FOCAL));

  float a = dot(rd.xz, rd.xz);
  float b = 2.0 * dot(ro.xz, rd.xz);
  float c = dot(ro.xz, ro.xz) - R * R;
  float disc = b * b - 4.0 * a * c;

  if (disc > 0.0) {
    float root = sqrt(disc);
    for (int i = 1; i >= 0; i--) {
      float t = (-b + (i == 0 ? -root : root)) / (2.0 * a);
      vec3 hit = ro + rd * t;
      if (abs(hit.y) > H) continue;
      float theta = atan(hit.x, hit.z);
      vec4 f = film(theta / (2.0 * PI) * uRing + uScroll, hit.y / H);
      float depth = smoothstep(-0.25, 0.95, cos(theta));
      vec3 shaded = f.rgb * (i == 0 ? mix(0.22, 1.0, depth) : 0.16);
      color = mix(color, shaded, f.a);
    }
  }

  float vignette = smoothstep(1.75, 0.55, length(q * vec2(0.92, 1.0)));
  fragColor = vec4(color * mix(0.45, 1.0, vignette), 1.0);
}`;

function compile(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    return null;
  }
  return shader;
}

function createProgram(gl: WebGL2RenderingContext) {
  const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
  const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
  const program = gl.createProgram();
  if (!vertex || !fragment || !program) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  return gl.getProgramParameter(program, gl.LINK_STATUS) ? program : null;
}

/* Kapak görselini kareye kırpıp doku dizisinin ilgili katmanına yazar. */
function loadFrame(
  gl: WebGL2RenderingContext,
  texture: WebGLTexture,
  src: string,
  layer: number,
  onLoad: () => void,
  isCancelled: () => boolean
) {
  const img = new window.Image();
  img.onload = () => {
    if (isCancelled() || gl.isContextLost()) return;
    const canvas = document.createElement("canvas");
    canvas.width = FRAME_W;
    canvas.height = FRAME_H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const scale = Math.max(FRAME_W / img.naturalWidth, FRAME_H / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    ctx.drawImage(img, (FRAME_W - w) / 2, (FRAME_H - h) / 2, w, h);
    gl.bindTexture(gl.TEXTURE_2D_ARRAY, texture);
    gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, 0, 0, 0, layer, FRAME_W, FRAME_H, 1, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
    gl.generateMipmap(gl.TEXTURE_2D_ARRAY);
    onLoad();
  };
  img.src = `/_next/image?url=${encodeURIComponent(src)}&w=1080&q=75`;
}

const noSubscribe = () => () => {};

function supportsReel() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return Boolean(document.createElement("canvas").getContext("webgl2"));
}

/** Sitenin bölümlerini tek ekranda gösterir: her bölüm her zaman görünür, makara yalnızca eşlik eder. */
export default function FilmReel({ items }: { items: ReelItem[] }) {
  const animated = useSyncExternalStore(noSubscribe, supportsReel, () => false);
  return animated ? <AnimatedReel items={items} /> : <PlainReel items={items} />;
}

function AnimatedReel({ items }: { items: ReelItem[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const seekRef = useRef<(index: number) => void>(() => {});
  const stepRef = useRef<(delta: number) => void>(() => {});
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl2", { antialias: false, alpha: false, powerPreference: "high-performance" });
    if (!canvas || !gl) return;

    const program = createProgram(gl);
    const texture = gl.createTexture();
    if (!program || !texture) return;

    gl.useProgram(program);
    gl.bindVertexArray(gl.createVertexArray());
    gl.bindTexture(gl.TEXTURE_2D_ARRAY, texture);
    gl.texStorage3D(gl.TEXTURE_2D_ARRAY, 5, gl.RGBA8, FRAME_W, FRAME_H, items.length);
    gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const uRes = gl.getUniformLocation(program, "uRes");
    const uScroll = gl.getUniformLocation(program, "uScroll");
    const uTilt = gl.getUniformLocation(program, "uTilt");
    const count = items.length;
    gl.uniform1f(gl.getUniformLocation(program, "uCount"), count);
    gl.uniform1f(gl.getUniformLocation(program, "uRing"), count * Math.ceil(RING_MIN / count));

    const BASE_TILT_X = -0.12;
    const BASE_TILT_Z = 0.13;

    let target = 0;
    let current = 0;
    let velocity = 0;
    let isPointerDown = false;
    let lastX = 0;
    let lastY = 0;
    let dragDistance = 0;
    let targetTiltX = BASE_TILT_X;
    let targetTiltZ = BASE_TILT_Z;
    let currentTiltX = BASE_TILT_X;
    let currentTiltZ = BASE_TILT_Z;
    let frame = 0;
    let visible = false;
    let dirty = true;
    let lastActiveIndex = 0;

    const syncActive = (scrollValue: number) => {
      const normalized = ((Math.round(scrollValue) % count) + count) % count;
      if (normalized !== lastActiveIndex) {
        lastActiveIndex = normalized;
        setActive(normalized);
      }
    };

    const draw = () => {
      frame = 0;
      if (!visible) return;

      if (!isPointerDown && Math.abs(velocity) > 0.0001) {
        target += velocity;
        velocity *= 0.92;
        if (Math.abs(velocity) <= 0.0001) velocity = 0;
      }

      const ease = isPointerDown ? 0.35 : 0.14;
      current += (target - current) * ease;
      currentTiltX += (targetTiltX - currentTiltX) * 0.14;
      currentTiltZ += (targetTiltZ - currentTiltZ) * 0.14;

      const settledScroll = Math.abs(target - current) < 0.0005 && Math.abs(velocity) <= 0.0001;
      const settledTilt =
        Math.abs(targetTiltX - currentTiltX) < 0.0005 && Math.abs(targetTiltZ - currentTiltZ) < 0.0005;
      const settled = settledScroll && settledTilt;

      if (settledScroll) current = target;
      if (settledTilt) {
        currentTiltX = targetTiltX;
        currentTiltZ = targetTiltZ;
      }

      syncActive(current);

      if (dirty || !settled) {
        gl.uniform1f(uScroll, current + 0.5);
        gl.uniform2f(uTilt, currentTiltX, currentTiltZ);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        dirty = false;
      }
      if (!settled) frame = requestAnimationFrame(draw);
    };

    const invalidate = () => {
      dirty = true;
      if (!frame) frame = requestAnimationFrame(draw);
    };

    // Makara halka olduğu için hedefe en kısa yönden döner
    seekRef.current = (index) => {
      velocity = 0;
      const roundedTarget = Math.round(target);
      const delta = (((index - roundedTarget) % count) + count + count / 2) % count - count / 2;
      target = roundedTarget + delta;
      invalidate();
    };

    stepRef.current = (delta) => {
      velocity = 0;
      target = Math.round(target + delta);
      invalidate();
    };

    let cachedWidth = 960;
    let cachedHeight = 440;

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      isPointerDown = true;
      setDragging(true);
      velocity = 0;
      lastX = e.clientX;
      lastY = e.clientY;
      dragDistance = 0;
      canvas.setPointerCapture?.(e.pointerId);
      invalidate();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDown) return;

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      dragDistance += Math.hypot(dx, dy);

      const deltaScroll = -(dx / Math.max(cachedWidth, 320)) * 3.4;
      target += deltaScroll;
      velocity = deltaScroll * 0.85;

      targetTiltX = Math.max(-0.32, Math.min(0.12, targetTiltX - (dy / Math.max(cachedHeight, 240)) * 0.28));
      invalidate();
    };

    const endPointer = (e: PointerEvent) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      setDragging(false);
      if (canvas.hasPointerCapture?.(e.pointerId)) {
        canvas.releasePointerCapture(e.pointerId);
      }
      targetTiltX = BASE_TILT_X;
      targetTiltZ = BASE_TILT_Z;

      // Sürüklemeden tek tıklama yapıldıysa sol/sağ kareye döndür
      if (dragDistance < 6) {
        const rect = canvas.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / Math.max(rect.width, 1);
        if (relX < 0.36) {
          target = Math.round(target) - 1;
        } else if (relX > 0.64) {
          target = Math.round(target) + 1;
        }
      }
      invalidate();
    };

    const onWheel = (e: WheelEvent) => {
      // Yatay kaydırma veya Shift+tekerlek ile makarayı döndür
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();
        const delta = (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) * 0.0035;
        target += delta;
        velocity = delta * 0.4;
        invalidate();
      }
    };

    const onResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      cachedWidth = Math.max(canvas.clientWidth, 320);
      cachedHeight = Math.max(canvas.clientHeight, 240);
      canvas.width = Math.round(cachedWidth * dpr);
      canvas.height = Math.round(cachedHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      invalidate();
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", endPointer);
    canvas.addEventListener("pointercancel", endPointer);
    canvas.addEventListener("wheel", onWheel, { passive: false });

    const resizer = new ResizeObserver(onResize);
    resizer.observe(canvas);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) invalidate();
    });
    observer.observe(canvas);
    let cancelled = false;
    items.forEach((item, layer) => loadFrame(gl, texture, item.image, layer, invalidate, () => cancelled));

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", endPointer);
      canvas.removeEventListener("pointercancel", endPointer);
      canvas.removeEventListener("wheel", onWheel);
      resizer.disconnect();
      observer.disconnect();
      gl.deleteTexture(texture);
      gl.deleteProgram(program);
    };
  }, [items]);

  const show = (index: number) => {
    setActive(index);
    seekRef.current(index);
  };

  return (
    <section aria-labelledby="bolumler" className="relative border-t border-white/10 bg-ink py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 text-center md:px-12">
        <p className="eyebrow">Keşif Dizini · 6 Koleksiyon</p>
        <h2
          id="bolumler"
          className="crt-glow mt-3 font-serif text-[2.6rem] leading-tight font-medium text-parchment md:text-[3.8rem]"
        >
          Nereden başlamak istersiniz?
        </h2>
      </div>

      <div className="relative mt-4 h-[330px] w-full select-none sm:h-[390px] md:h-[450px]">
        <canvas
          ref={canvasRef}
          aria-label="3B Arşiv Film Şeridi — döndürmek için fareyle sürükleyin"
          className={`absolute inset-0 h-full w-full touch-pan-y ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

        <div className="pointer-events-none absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => stepRef.current(-1)}
            aria-label="Önceki bölüm"
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-night/85 text-sm text-parchment/80 transition hover:border-gold-light/50 hover:text-gold-light"
          >
            ‹
          </button>
          <span className="rounded-full border border-white/10 bg-night/80 px-3.5 py-1 text-xs tracking-wider text-white/65">
            Fareyle tutup döndürün
          </span>
          <button
            type="button"
            onClick={() => stepRef.current(1)}
            aria-label="Sonraki bölüm"
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-night/85 text-sm text-parchment/80 transition hover:border-gold-light/50 hover:text-gold-light"
          >
            ›
          </button>
        </div>
      </div>

      <CollectionDirectory items={items} active={active} onSelect={show} />
    </section>
  );
}

/* WebGL2 yoksa veya hareket azaltma açıksa aynı dizin, görselli kartlarla */
function PlainReel({ items }: { items: ReelItem[] }) {
  return (
    <section aria-labelledby="bolumler" className="bg-ink py-16">
      <h2
        id="bolumler"
        className="crt-glow text-center font-serif text-[2.6rem] leading-tight font-medium text-parchment md:text-[3.6rem]"
      >
        Nereden başlamak istersiniz?
      </h2>
      <div className="mt-10">
        <CollectionDirectory items={items} />
      </div>
    </section>
  );
}
