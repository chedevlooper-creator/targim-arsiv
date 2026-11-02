"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

export interface ReelItem {
  href: string;
  title: string;
  sub: string;
  image: string;
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
  float shift = 0.0022;
  return vec3(
    texture(uFrames, vec3(uv + vec2(shift, 0.0), layer)).r,
    texture(uFrames, vec3(uv, layer)).g,
    texture(uFrames, vec3(uv - vec2(shift, 0.0), layer)).b
  );
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
  vec3 color = mix(vec3(0.016, 0.018, 0.05), vec3(0.17, 0.31, 0.53), smoothstep(0.75, -1.0, q.y));
  color += vec3(0.5, 0.33, 0.2) * glow * 0.55;

  mat3 tilt = rotX(-0.12) * rotZ(0.13);
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
  const [active, setActive] = useState(0);

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
    const count = items.length;
    gl.uniform1f(gl.getUniformLocation(program, "uCount"), count);
    gl.uniform1f(gl.getUniformLocation(program, "uRing"), count * Math.ceil(RING_MIN / count));

    let target = 0;
    let current = 0;
    let frame = 0;
    let visible = false;
    let dirty = true;

    const draw = () => {
      frame = 0;
      if (!visible) return;
      current += (target - current) * 0.14;
      const settled = Math.abs(target - current) < 0.0006;
      if (settled) current = target;
      if (dirty || !settled) {
        gl.uniform1f(uScroll, current + 0.5);
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
      const delta = ((index - target) % count + count + count / 2) % count - count / 2;
      target += delta;
      invalidate();
    };

    const onResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      invalidate();
    };

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
    <section aria-labelledby="bolumler" className="relative flex min-h-svh flex-col bg-ink pt-[78px]">
      <h2
        id="bolumler"
        className="crt-glow relative z-10 px-5 pt-8 text-center font-serif text-[2.6rem] leading-tight font-medium text-parchment md:text-[3.6rem]"
      >
        Nereden başlamak istersiniz?
      </h2>

      <div className="relative mt-2 min-h-[260px] flex-1">
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
      </div>

      <nav aria-label="Bölümler" className="relative mx-auto w-full max-w-[1500px] px-5 pb-10 pt-5 md:px-12">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3 xl:grid-cols-6">
          {items.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onMouseEnter={() => show(i)}
                onFocus={() => show(i)}
                className="group block"
              >
                <span
                  className={`font-serif text-2xl font-medium text-parchment ${
                    i === active ? "link-crt" : "group-hover:text-gold-light"
                  }`}
                >
                  {item.title}
                </span>
                <span className="mt-1 block text-white/70">{item.sub}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

/* WebGL2 yoksa veya hareket azaltma açıksa aynı dizin, görselli kartlarla */
function PlainReel({ items }: { items: ReelItem[] }) {
  return (
    <section aria-labelledby="bolumler" className="bg-ink px-5 py-16 md:px-12">
      <h2
        id="bolumler"
        className="crt-glow text-center font-serif text-[2.6rem] leading-tight font-medium text-parchment md:text-[3.6rem]"
      >
        Nereden başlamak istersiniz?
      </h2>
      <ul className="mx-auto mt-10 grid max-w-[1500px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="group block">
              <span className="relative block aspect-[3/2] overflow-hidden bg-night">
                <Image src={item.image} alt="" fill sizes="(max-width:1024px) 50vw, 33vw" className="object-cover" />
              </span>
              <span className="mt-3 block font-serif text-2xl text-parchment group-hover:text-gold-light">
                {item.title}
              </span>
              <span className="block text-white/70">{item.sub}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
