import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, ArrowRight, Clock, ExternalLink, MapPin, Sparkles } from "lucide-react";
import { FiligreeLink } from "@/components/Brand";
import { Breadcrumbs, PageBackdrop } from "@/components/PageHeader";
import {
  CULTURE_CATS,
  EXHIBITIONS,
  PLACE_KINDS,
  getCultureForExhibition,
  getDoc,
  getEventsForExhibition,
  getExhibition,
  getPerson,
  getPlacesForExhibition,
} from "@/lib/data";

export function generateStaticParams() {
  return EXHIBITIONS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/sergiler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const e = getExhibition(slug);
  return {
    title: e ? e.title : "Sergi bulunamadı",
    description: e?.summary,
  };
}

export default function ExhibitionDetailPage(props: PageProps<"/sergiler/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-screen pt-[78px]" />}>
      <ExhibitionDetailContent {...props} />
    </Suspense>
  );
}

async function ExhibitionDetailContent({ params }: PageProps<"/sergiler/[slug]">) {
  const { slug } = await params;
  const ex = getExhibition(slug);
  if (!ex) notFound();

  const idx = EXHIBITIONS.findIndex((x) => x.slug === ex.slug);
  const prev = EXHIBITIONS[idx - 1];
  const next = EXHIBITIONS[idx + 1];

  const linkedDocs = ex.docs.map(getDoc).filter((d) => d !== undefined);
  const linkedPeople = (ex.people ?? []).map(getPerson).filter((p) => p !== undefined);
  const linkedPlaces = getPlacesForExhibition(ex, 4);
  const linkedEvents = getEventsForExhibition(ex, 3);
  const linkedCulture = getCultureForExhibition(ex, 3);

  return (
    <article className="pb-16 pt-[78px]">
      {/* Sergi Kapak Sahnesi */}
      <section className="grain relative overflow-hidden border-b border-white/[0.08] bg-ink">
        <PageBackdrop />

        <div className="relative mx-auto flex max-w-[1440px] flex-col justify-end px-5 pb-14 pt-10 md:px-10 md:pb-16 md:pt-14">
          <Breadcrumbs items={[{ href: "/sergiler", label: "Sergiler" }, { label: ex.title }]} />
          <span className="badge-glass mt-6 w-fit">
            {ex.theme} · {ex.period} · {ex.count} ESER
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl animate-fade-up">
            {ex.title}
          </h1>
          <p className="mt-2 font-serif text-2xl italic text-gold-light/90">{ex.subtitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">{ex.summary}</p>
        </div>
      </section>

      {/* Küratöryel Metin, Belgeler ve Yan Panel */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-[1fr_380px]">
        <div>
          <h2 className="eyebrow">Küratör Notu ve Sergi Anlatısı</h2>
          <div className="mt-6 space-y-6 font-serif text-[1.32rem] leading-relaxed text-white/82">
            {ex.body.map((para, i) => {
              const hasDropCap = i === 0 && /^\p{Lu}\p{Ll}/u.test(para.trimStart());
              return (
                <p
                  key={i}
                  className={
                    hasDropCap
                      ? "flow-root first-letter:float-left first-letter:mr-3.5 first-letter:font-display first-letter:text-6xl first-letter:leading-none first-letter:text-gold-light"
                      : undefined
                  }
                >
                  {para}
                </p>
              );
            })}
          </div>

          {/* Sergilenen Arşiv Belgeleri */}
          {linkedDocs.length > 0 && (
            <div className="mt-16">
              <h2 className="eyebrow">Sergi Seçkisindeki Birincil Belgeler</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {linkedDocs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/arsiv/${doc.slug}`}
                    className="museum-card group flex flex-col overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-night">
                      <Image
                        src={doc.image}
                        alt={doc.title}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[0.62rem] text-gold-light/85">{doc.catalogNo}</span>
                          <ExternalLink size={12} className="text-white/45 transition group-hover:text-gold-light" />
                        </div>
                        <h3 className="mt-1.5 text-sm font-semibold text-white transition group-hover:text-gold-light">
                          {doc.title}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/55">{doc.description}</p>
                      </div>
                      <p className="mt-3 border-t border-white/[0.08] pt-2 text-xs text-white/45">{doc.dateLabel}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Kronolojik Dönüm Noktaları */}
          {linkedEvents.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between gap-4">
                <h2 className="eyebrow">İlgili Kronolojik Dönüm Noktaları</h2>
                <Link href="/zaman-cizelgesi" className="text-xs text-white/55 transition hover:text-gold-light">
                  Zaman Çizelgesi →
                </Link>
              </div>
              <ul className="mt-5 space-y-3">
                {linkedEvents.map((ev) => (
                  <li key={ev.year}>
                    <Link
                      href={`/zaman-cizelgesi?yil=${ev.year}`}
                      className="museum-card group flex items-center gap-5 p-4"
                    >
                      <span className="font-display text-2xl font-semibold text-gold-light">{ev.year}</span>
                      <span className="h-6 w-px bg-white/12" />
                      <div className="min-w-0 flex-1">
                        <span className="block text-base font-semibold text-white transition group-hover:text-gold-light">
                          {ev.title}
                        </span>
                        <span className="block truncate text-xs text-white/55">{ev.short}</span>
                      </div>
                      <ArrowRight size={15} className="shrink-0 text-gold-light transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sağ Küratöryel Künye, Şahsiyetler, Atlas ve Kültürel Miras */}
        <aside className="space-y-6">
          <div className="museum-card p-6">
            <h3 className="eyebrow">Sergi Künyesi</h3>
            <dl className="mt-4 divide-y divide-white/[0.08] text-sm">
              <div className="grid grid-cols-[105px_1fr] py-3">
                <dt className="text-xs font-medium tracking-wider text-gold-light/80 uppercase">Tema</dt>
                <dd className="text-white/85">{ex.theme}</dd>
              </div>
              <div className="grid grid-cols-[105px_1fr] py-3">
                <dt className="text-xs font-medium tracking-wider text-gold-light/80 uppercase">Dönem</dt>
                <dd className="text-white/85">{ex.period}</dd>
              </div>
              <div className="grid grid-cols-[105px_1fr] py-3">
                <dt className="text-xs font-medium tracking-wider text-gold-light/80 uppercase">Küratör</dt>
                <dd className="text-white/85">{ex.curator}</dd>
              </div>
              <div className="grid grid-cols-[105px_1fr] py-3">
                <dt className="text-xs font-medium tracking-wider text-gold-light/80 uppercase">Kapsam</dt>
                <dd className="text-white/85">{ex.count} Belge ve Görsel</dd>
              </div>
            </dl>
            <div className="mt-6">
              <FiligreeLink href="/arsiv" size="sm">Tüm Arşivi İncele</FiligreeLink>
            </div>
          </div>

          {linkedPeople.length > 0 && (
            <div className="museum-card p-6">
              <div className="flex items-center justify-between gap-2">
                <h3 className="eyebrow">Sergide Yer Alan Şahsiyetler</h3>
                <Link href="/kisiler" className="text-xs text-white/50 transition hover:text-gold-light">
                  Tümü →
                </Link>
              </div>
              <ul className="mt-4 divide-y divide-white/[0.08]">
                {linkedPeople.map((p) => (
                  <li key={p.slug} className="py-3 first:pt-0 last:pb-0">
                    <Link href={`/kisiler/${p.slug}`} className="group flex items-center gap-3.5">
                      <span className="relative h-15 w-12 shrink-0 overflow-hidden rounded-xl border border-white/12 bg-night">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="48px"
                          className="portrait-tone object-cover object-top transition duration-500 group-hover:scale-105"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-white transition group-hover:text-gold-light">
                          {p.name}
                        </span>
                        <span className="block truncate text-xs text-white/55">{p.title}</span>
                        <span className="font-mono text-[0.68rem] text-gold-light/75">
                          {p.born} – {p.died}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {linkedPlaces.length > 0 && (
            <div className="museum-card p-6">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-gold-light">
                  <MapPin size={15} />
                  <h3 className="eyebrow">Coğrafi Odaklar &amp; Atlas</h3>
                </span>
                <Link href="/harita" className="text-xs text-white/50 transition hover:text-gold-light">
                  Harita →
                </Link>
              </div>
              <ul className="mt-4 space-y-2.5">
                {linkedPlaces.map((pl) => (
                  <li key={pl.id}>
                    <Link
                      href={`/harita?yer=${pl.id}`}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 transition hover:border-gold-light/40 hover:bg-white/[0.06]"
                    >
                      <div className="min-w-0">
                        <span className="block truncate text-sm font-medium text-white transition group-hover:text-gold-light">
                          {pl.name}
                        </span>
                        <span className="text-[0.68rem] text-white/45">
                          {PLACE_KINDS.find((k) => k.id === pl.kind)?.label} · {pl.period}
                        </span>
                      </div>
                      <ArrowRight size={14} className="shrink-0 text-gold-light/75 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {linkedCulture.length > 0 && (
            <div className="museum-card p-6">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-gold-light">
                  <Sparkles size={15} />
                  <h3 className="eyebrow">Kültürel Miras Bağlamı</h3>
                </span>
                <Link href="/kultur" className="text-xs text-white/50 transition hover:text-gold-light">
                  Kültür →
                </Link>
              </div>
              <ul className="mt-4 space-y-2.5">
                {linkedCulture.map((ci) => (
                  <li key={ci.id}>
                    <Link
                      href={`/kultur?oge=${ci.id}`}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 transition hover:border-gold-light/40 hover:bg-white/[0.06]"
                    >
                      <div className="min-w-0">
                        <span className="block truncate text-sm font-medium text-white transition group-hover:text-gold-light">
                          {ci.title}
                        </span>
                        <span className="flex items-center gap-1.5 text-[0.68rem] text-white/45">
                          <Clock size={10} />
                          {CULTURE_CATS.find((c) => c.id === ci.cat)?.label}
                        </span>
                      </div>
                      <ArrowRight size={14} className="shrink-0 text-gold-light/75 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>

      {/* Önceki / Sonraki Sergi */}
      <nav className="mx-auto flex max-w-[1440px] justify-between border-t border-white/[0.08] px-5 pt-8 md:px-10">
        {prev ? (
          <Link
            href={`/sergiler/${prev.slug}`}
            className="group flex items-center gap-3 text-sm text-white/55 hover:text-gold-light"
          >
            <ArrowLeft size={16} className="text-gold-light transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-semibold text-white transition group-hover:text-gold-light">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/sergiler/${next.slug}`}
            className="group flex items-center gap-3 text-sm text-white/55 hover:text-gold-light"
          >
            <span className="text-sm font-semibold text-white transition group-hover:text-gold-light">{next.title}</span>
            <ArrowRight size={16} className="text-gold-light transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </nav>
    </article>
  );
}
