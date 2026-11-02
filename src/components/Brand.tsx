import { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export const NAV = [
  { href: "/kisiler", label: "Kişiler" },
  { href: "/arsiv", label: "Arşiv" },
  { href: "/zaman-cizelgesi", label: "Zaman Çizelgesi" },
  { href: "/harita", label: "Harita" },
  { href: "/sergiler", label: "Sergiler" },
  { href: "/kultur", label: "Kültür" },
  { href: "/surgun-1944", label: "1944 Sürgünü" },
];

/* Üst menüde logo ana sayfaya gider; tam liste yan menü ve alt bilgide */
export const NAV_ALL = [{ href: "/", label: "Ana Sayfa" }, ...NAV, { href: "/hakkinda", label: "Hakkında" }];

const MARK_STRIPES = [
  "var(--color-gold-light)",
  "var(--color-gold-dark)",
  "var(--color-gold-light)",
  "var(--color-gold)",
  "var(--color-gold-light)",
  "var(--color-gold-dark)",
  "var(--color-gold-light)",
];

/** Istang çizgileriyle dokunmuş Vaynah kulesi silueti. */
export function TowerMark({ className = "" }: { className?: string }) {
  const clipId = useId();
  return (
    <svg viewBox="0 0 28 36" className={className} aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <path d="M14 0 21 8h-2l2.2 28H6.8L9 8H7z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        {MARK_STRIPES.map((fill, i) => (
          <rect key={i} x="0" y={i * 5.2} width="28" height="3.8" fill={fill} />
        ))}
      </g>
    </svg>
  );
}

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 leading-none select-none"
      aria-label="Targim Archive ana sayfa"
    >
      <Image
        src="/images/brand/targim-mark.webp"
        alt=""
        width={160}
        height={160}
        sizes="48px"
        className={small ? "h-10 w-10" : "h-11 w-11"}
      />
      <span
        className={`font-display font-semibold tracking-[0.06em] text-white transition group-hover:text-gold-light ${
          small ? "text-lg" : "text-xl md:text-[1.4rem]"
        }`}
      >
        TARGİM
        <span lang="en" className="mt-1 block text-[0.52em] font-medium tracking-[0.34em]">
          ARCHIVE
        </span>
      </span>
    </Link>
  );
}

/** Marka Instagram hesabı; lucide-react marka simgesi taşımadığı için simge burada çizilir. */
export function InstagramLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={SITE.instagram.url}
      target="_blank"
      rel="me noopener noreferrer"
      className={`link-crt inline-flex items-center gap-2.5 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-[1.1em] w-[1.1em]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
      </svg>
      {SITE.instagram.handle}
    </a>
  );
}

/**
 * Keskin köşeli, tam dolgulu birincil bağlantı.
 */
export function FiligreeLink({
  href,
  children,
  className = "",
  size = "md",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
}) {
  const isAnchor = href.startsWith("#");
  const inner = (
    <span className="btn-gold group">
      <span>{children}</span>
      <ArrowRight
        size={size === "sm" ? 15 : 17}
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </span>
  );

  if (isAnchor) {
    return (
      <a href={href} className={`inline-flex ${className}`}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={`inline-flex ${className}`}>
      {inner}
    </Link>
  );
}

export function DiamondDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px max-w-[120px] flex-1 bg-white/20" />
      <TowerMark className="h-4 w-auto" />
      <span className="h-px max-w-[120px] flex-1 bg-white/20" />
    </div>
  );
}
