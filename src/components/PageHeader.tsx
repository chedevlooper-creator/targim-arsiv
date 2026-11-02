import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

type Crumb = { href?: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Konum"
      className="flex flex-wrap items-center gap-1.5 text-sm text-white/65"
    >
      <Link href="/" className="transition hover:text-white">
        Ana Sayfa
      </Link>
      {items.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight
            size={12}
            className="text-white/30"
            aria-hidden="true"
          />
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

export function PageBackdrop({
  src = "/images/hf-kule-gunbatimi.jpg",
}: {
  src?: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 select-none">
      <Image
        src={src}
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-[50%_30%] opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/65" />
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
    <nav
      aria-label="Sıradaki kayıt"
      className="mx-auto max-w-4xl border-t border-white/10 px-5 py-20 text-center md:py-28"
    >
      <p className="eyebrow">{label}</p>
      <p className="crt-glow mt-4 font-serif text-[2.3rem] leading-[1.06] font-medium text-parchment [overflow-wrap:anywhere] [text-wrap:balance] sm:text-[2.8rem] md:text-[4.2rem]">
        {title}
      </p>
      {sub && <p className="mt-3 text-lg text-white/75">{sub}</p>}
      <Link href={href} className="btn-gold mt-8">
        <span>Devam Et</span>
        <ArrowRight size={16} />
      </Link>
      {prev && (
        <p className="mt-6">
          <Link href={prev.href} className="link-crt text-sm text-white/70">
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
  image,
  children,
}: {
  title: React.ReactNode;
  eyebrow?: string;
  subtitle?: string;
  crumbs?: Crumb[];
  count?: number;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink pt-[78px]">
      <PageBackdrop src={image} />

      <div className="relative mx-auto max-w-[1500px] px-5 pb-12 pt-10 md:px-12 md:pb-16 md:pt-14">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {eyebrow && <p className="eyebrow mt-6">{eyebrow}</p>}
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h1 className="crt-glow min-w-0 font-serif text-[2.7rem] leading-[1.04] font-medium text-parchment [overflow-wrap:anywhere] sm:text-[3.4rem] md:text-[4.8rem] xl:text-[5.6rem]">
            {title}
          </h1>
          {count !== undefined && (
            <div
              className="museum-card px-5 py-3 text-right"
              aria-label={`${count} kayıt`}
            >
              <span className="block font-serif text-3xl leading-none font-semibold text-gold-light md:text-4xl">
                {count}
              </span>
              <span className="mt-1 block text-[0.65rem] font-semibold tracking-[0.2em] text-white/65 uppercase">
                Katalog Kaydı
              </span>
            </div>
          )}
        </div>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
