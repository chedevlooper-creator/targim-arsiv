import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { href?: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Konum" className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
      <Link href="/" className="transition hover:text-white">
        Ana Sayfa
      </Link>
      {items.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={12} className="text-white/30" aria-hidden="true" />
          {c.href ? (
            <Link href={c.href} className="transition hover:text-white">
              {c.label}
            </Link>
          ) : (
            <span className="text-white/85">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default function PageHeader({
  title,
  eyebrow,
  subtitle,
  image = "/images/hero.jpg",
  crumbs,
  count,
  children,
}: {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  image?: string;
  crumbs?: Crumb[];
  count?: number;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] pt-[78px]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[55%_32%] opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-10 pt-10 md:px-10 md:pb-12 md:pt-14">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {eyebrow && (
          <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[0.6rem] font-medium tracking-[0.18em] text-gold-light uppercase backdrop-blur-md">
            <span className="h-1 w-1 rounded-full bg-gold-light" />
            {eyebrow}
          </span>
        )}
        <div className="flex items-end justify-between gap-6">
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-[2.75rem] animate-fade-up">
            <span className="gold-text">{title}</span>
          </h1>
          {count !== undefined && (
            <span
              className="font-display text-4xl font-semibold tabular-nums leading-none text-white/20 md:text-6xl animate-fade-up"
              aria-label={`${count} kayıt`}
            >
              {count}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65 md:text-[0.95rem] animate-fade-up [animation-delay:100ms]">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6 animate-fade-up [animation-delay:180ms]">{children}</div>}
      </div>
    </section>
  );
}
