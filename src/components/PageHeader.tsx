import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

type Crumb = { href?: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Konum" className="flex flex-wrap items-center gap-1.5 text-sm text-white/65">
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

export function PageBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none">
      <Image
        src="/images/hf-kule-gunbatimi.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_30%] opacity-40 saturate-[0.7]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />
    </div>
  );
}

/** Kağıt sayfanın kapanışı: sıradaki kayda geçiş. */
export function NextRecord({
  label,
  title,
  sub,
  href,
  prev,
}: {
  label: string;
  title: string;
  sub?: string;
  href: string;
  prev?: { label: string; href: string };
}) {
  return (
    <nav aria-label="Sıradaki kayıt" className="mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
      <p className="link-crt text-xl text-parchment">{label}</p>
      <p className="crt-glow mt-4 font-serif text-[2.3rem] leading-[1.06] font-medium text-parchment [overflow-wrap:anywhere] [text-wrap:balance] sm:text-[2.8rem] md:text-[4.6rem]">
        {title}
      </p>
      {sub && <p className="mt-3 text-xl text-parchment">{sub}</p>}
      <Link href={href} className="btn-gold mt-8">
        <span>Devam Et</span>
        <ArrowRight size={17} />
      </Link>
      {prev && (
        <p className="mt-7">
          <Link href={prev.href} className="link-crt text-white/75">
            {prev.label}
          </Link>
        </p>
      )}
    </nav>
  );
}

export default function PageHeader({
  title,
  eyebrow,
  subtitle,
  crumbs,
  count,
  children,
}: {
  title: React.ReactNode;
  eyebrow?: string;
  subtitle?: string;
  crumbs?: Crumb[];
  count?: number;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-[78px]">
      <PageBackdrop />

      <div className="relative mx-auto max-w-[1500px] px-5 pb-12 pt-10 md:px-12 md:pb-16 md:pt-16">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {eyebrow && <p className="eyebrow mt-6">{eyebrow}</p>}
        <div className="flex items-end justify-between gap-6">
          <h1 className="crt-glow mt-3 min-w-0 font-serif text-[2.7rem] leading-[1.04] font-medium text-parchment [overflow-wrap:anywhere] sm:text-[3.2rem] md:text-[5.5rem] xl:text-[6.5rem]">
            {title}
          </h1>
          {count !== undefined && (
            <span
              className="font-mono text-5xl leading-none text-white/35 md:text-7xl"
              aria-label={`${count} kayıt`}
            >
              {count}
            </span>
          )}
        </div>
        {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">{subtitle}</p>}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
