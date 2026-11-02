import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowRight, ExternalLink, Layers, MapPin } from "lucide-react";
import { DocTabs, DocViewer } from "@/components/DocViewer";
import { Breadcrumbs, NextRecord, PageBackdrop } from "@/components/PageHeader";
import {
  DOCS,
  PLACE_KINDS,
  DOC_RIGHTS,
  docSourceHost,
  docTypeLabel,
  eraLabel,
  getDoc,
  getExhibitionsForDoc,
  getPeopleForDoc,
  getPlacesForDoc,
  licenseUrl,
} from "@/lib/data";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return DOCS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/arsiv/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getDoc(slug);
  if (!d) return { title: "Belge bulunamadı" };
  return pageMetadata({ title: d.title, description: d.description, path: `/arsiv/${d.slug}`, image: d.image });
}

export default function DocPage(props: PageProps<"/arsiv/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-screen pt-[78px]" />}>
      <DocPageContent {...props} />
    </Suspense>
  );
}

async function DocPageContent({ params }: PageProps<"/arsiv/[slug]">) {
  const { slug } = await params;
  const d = getDoc(slug);
  if (!d) notFound();

  const idx = DOCS.findIndex((x) => x.slug === d.slug);
  const prev = DOCS[idx - 1];
  const next = DOCS[idx + 1] ?? DOCS[0];
  const similar = DOCS.filter((x) => x.slug !== d.slug && (x.type === d.type || x.era === d.era)).slice(0, 4);
  const relatedPeople = getPeopleForDoc(d.slug, 6);
  const relatedExhibitions = getExhibitionsForDoc(d.slug);
  const relatedPlaces = getPlacesForDoc(d.slug);

  const meta: [string, string][] = [
    ["Targim Kayıt No", d.catalogNo],
    ["Tarih", d.dateLabel],
    ["Belge Türü", docTypeLabel(d.type)],
    ["Tarihsel Dönem", eraLabel(d.era)],
    ["Coğrafi Bölge", d.region],
    ["Dil / Yazı", d.language],
    ...(d.author ? ([["Müellif / Kaynak", d.author]] as [string, string][]) : []),
    ["Kayıtlı Kaynak", d.source],
    ["Erişilen Kopya", docSourceHost(d)],
  ];
  const rights = DOC_RIGHTS[d.slug];

  return (
    <article className="pt-[78px]">
      <section className="relative overflow-hidden border-b border-white/10 bg-ink">
        <PageBackdrop src="/images/hf-ic-arsiv-yazmalar.jpg" />

        <div className="relative mx-auto max-w-[1500px] px-5 pb-16 pt-10 md:px-12">
          <Breadcrumbs items={[{ href: "/arsiv", label: "Arşiv" }, { label: d.title }]} />

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            {/* Sol sütun: belge görüntüsü */}
            <div className="lg:sticky lg:top-[96px]">
              <DocViewer
                doc={d}
                prevHref={prev ? `/arsiv/${prev.slug}` : undefined}
                nextHref={`/arsiv/${next.slug}`}
              />
            </div>

            {/* Sağ sütun: başlık, künye ve sekmeler */}
            <div>
              <p className="font-mono text-sm tracking-[0.14em] text-gold-light uppercase">{d.catalogNo}</p>
              <h1 className="crt-glow mt-2 font-serif text-[2.2rem] leading-[1.08] font-medium text-parchment [overflow-wrap:anywhere] [text-wrap:balance] sm:text-[2.8rem] md:text-[3.4rem]">
                {d.title}
              </h1>
              <p className="mt-3 font-serif text-xl leading-snug text-gold-light/90">
                {docTypeLabel(d.type)} · {d.dateLabel}
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/80">{d.description}</p>

              <a
                href={d.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-crt mt-5 inline-flex w-fit items-center gap-2 text-sm text-parchment"
              >
                Kaynak sayfasını aç ({docSourceHost(d)}) <ExternalLink size={15} />
              </a>

              <dl className="museum-card mt-7 divide-y divide-white/[0.08] px-6 py-2 text-sm">
                {meta.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[145px_1fr] gap-3 py-2.5">
                    <dt className="text-xs font-medium tracking-wider text-gold-light/80 uppercase">{k}</dt>
                    <dd className="text-parchment">{v}</dd>
                  </div>
                ))}
              </dl>

              {rights && (
                <p className="mt-4 text-xs leading-relaxed text-white/65">
                  Görsel: {rights.creator},{" "}
                  {licenseUrl(rights.license) ? (
                    <a href={licenseUrl(rights.license)} target="_blank" rel="noopener noreferrer license" className="link-crt">
                      {rights.license}
                    </a>
                  ) : (
                    rights.license
                  )}
                  . {rights.made ? `Bu harita ${rights.made} yılında hazırlanmış modern bir çalışmadır.` : null}
                </p>
              )}

              <div className="mt-8">
                <DocTabs doc={d} />
              </div>

              {(relatedPlaces.length > 0 || relatedExhibitions.length > 0) && (
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {relatedPlaces.map((pl) => (
                    <Link
                      key={pl.id}
                      href={`/harita?yer=${pl.id}`}
                      className="museum-card group flex items-center justify-between gap-3 p-4"
                    >
                      <div className="min-w-0">
                        <span className="flex items-center gap-1.5 text-sm text-gold-light">
                          <MapPin size={13} /> Atlas noktası
                        </span>
                        <span className="mt-1 block truncate text-lg font-medium text-white transition group-hover:text-gold-light">
                          {pl.name}
                        </span>
                        <span className="text-sm text-white/60">
                          {PLACE_KINDS.find((k) => k.id === pl.kind)?.label}
                        </span>
                      </div>
                      <ArrowRight size={16} className="shrink-0 text-gold-light transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ))}

                  {relatedExhibitions.map((ex) => (
                    <Link
                      key={ex.slug}
                      href={`/sergiler/${ex.slug}`}
                      className="museum-card group flex items-center justify-between gap-3 p-4"
                    >
                      <div className="min-w-0">
                        <span className="flex items-center gap-1.5 text-sm text-gold-light">
                          <Layers size={13} /> Küratöryel sergi
                        </span>
                        <span className="mt-1 block truncate text-lg font-medium text-white transition group-hover:text-gold-light">
                          {ex.title}
                        </span>
                        <span className="text-sm text-white/60">{ex.period}</span>
                      </div>
                      <ArrowRight size={16} className="shrink-0 text-gold-light transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1500px] px-5 md:px-12">
        {/* İlgili Şahsiyetler */}
        {relatedPeople.length > 0 && (
          <section className="pt-16">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Biyografik Bağlam</p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-white">
                  Bu Belge ve Dönemle İlişkili Şahsiyetler
                </h2>
              </div>
              <Link href="/kisiler" className="text-xs text-white/55 transition hover:text-gold-light">
                Tüm Kişiler →
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {relatedPeople.map((p) => (
                <Link key={p.slug} href={`/kisiler/${p.slug}`} className="group flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.08] bg-night transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-gold-light/40">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width:768px) 50vw, 180px"
                      className="portrait-tone object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-2.5 line-clamp-1 text-sm font-semibold text-white transition group-hover:text-gold-light">
                    {p.name}
                  </h3>
                  <p className="line-clamp-1 text-xs text-white/50">{p.title}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {similar.length > 0 && (
          <section className={relatedPeople.length > 0 ? "mt-20 border-t border-white/[0.08] pt-14" : "pt-16"}>
            <h2 className="eyebrow">İlişkili Arşiv Kayıtları</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
              {similar.map((s) => (
                <Link key={s.slug} href={`/arsiv/${s.slug}`} className="museum-card group overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden bg-night">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width:768px) 100vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-[0.62rem] text-gold-light/80">{s.catalogNo}</p>
                    <h3 className="mt-1 text-sm font-semibold text-white transition group-hover:text-gold-light">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/50">{s.dateLabel}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <NextRecord label="Sıradaki Belge" title={next.title} sub={next.dateLabel} href={`/arsiv/${next.slug}`} />
    </article>
  );
}
