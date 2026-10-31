import Image from "next/image";
import Link from "next/link";

type Crumb = { href?: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Konum" className="flex flex-wrap items-center gap-2 text-xs tracking-wider text-mist">
      <Link href="/" className="transition hover:text-gold-light">
        ANA SAYFA
      </Link>
      {items.map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rotate-45 border border-gold/70 bg-gold/30" aria-hidden="true" />
          {c.href ? (
            <Link href={c.href} className="transition hover:text-gold-light">
              {c.label.toLocaleUpperCase("tr-TR")}
            </Link>
          ) : (
            <span className="text-gold-light">{c.label.toLocaleUpperCase("tr-TR")}</span>
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
  children,
}: {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  image?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="grain relative overflow-hidden border-b border-gold/15 pt-[76px]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[55%_32%] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/55" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-12 pt-14 md:px-10 md:pb-16 md:pt-20">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {eyebrow && <p className="eyebrow mt-5">{eyebrow}</p>}
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-wide md:text-6xl animate-fade-up">
          <span className="gold-text">{title}</span>
        </h1>
        <div className="mt-5 flex items-center gap-3 animate-fade-up [animation-delay:80ms]" aria-hidden="true">
          <span className="h-px w-20 bg-gold/70" />
          <span className="h-2 w-2 rotate-45 border border-gold-light bg-gold" />
          <span className="h-px w-36 bg-gradient-to-r from-gold/60 to-transparent" />
        </div>
        {subtitle && (
          <p className="mt-5 max-w-2xl font-serif text-xl leading-relaxed text-[#e2d8c5] md:text-2xl animate-fade-up [animation-delay:140ms]">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 animate-fade-up [animation-delay:220ms]">{children}</div>}
      </div>
    </section>
  );
}
