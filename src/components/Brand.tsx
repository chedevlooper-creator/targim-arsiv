import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const NAV = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/kisiler", label: "Kişiler" },
  { href: "/arsiv", label: "Arşiv" },
  { href: "/zaman-cizelgesi", label: "Zaman Çizelgesi" },
  { href: "/harita", label: "Harita" },
  { href: "/sergiler", label: "Sergiler" },
  { href: "/kultur", label: "Kültür" },
  { href: "/hakkinda", label: "Hakkında" },
];

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 leading-none select-none"
      aria-label="Targim Archive ana sayfa"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[0.05] font-display text-sm font-semibold tracking-wider text-gold-light transition group-hover:border-gold/50 group-hover:bg-gold/15">
        T
      </span>
      <span className="flex flex-col">
        <span
          className={`font-display font-semibold tracking-[0.18em] text-white transition duration-300 group-hover:text-gold-light ${
            small ? "text-base" : "text-lg md:text-xl"
          }`}
        >
          TARGİM
        </span>
        <span className="mt-0.5 text-[0.55rem] font-medium tracking-[0.38em] text-white/50 uppercase">
          Digital Archive
        </span>
      </span>
    </Link>
  );
}

/**
 * Modern yüksek kontrastlı kapsül CTA butonu.
 */
export function FiligreeLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isAnchor = href.startsWith("#");
  const inner = (
    <span className="group relative inline-flex h-12 items-center gap-3 rounded-full bg-[#f4ead5] px-6 font-sans text-[0.78rem] font-semibold tracking-[0.12em] text-[#090b10] uppercase shadow-[0_10px_30px_-8px_rgba(244,234,213,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_34px_-6px_rgba(255,255,255,0.45)]">
      <span>{children}</span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#090b10]/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight size={14} className="text-[#090b10]" />
      </span>
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
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-white/20" />
      <span className="h-1.5 w-1.5 rounded-full bg-gold-light/70" />
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-white/20" />
    </div>
  );
}
