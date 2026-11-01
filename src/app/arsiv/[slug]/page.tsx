import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowRight, Layers, MapPin } from "lucide-react";
import { DocTabs, DocViewer } from "@/components/DocViewer";
import { Breadcrumbs } from "@/components/PageHeader";
import {
  DOCS,
  PLACE_KINDS,
  docTypeLabel,
  eraLabel,
  getDoc,
  getExhibitionsForDoc,
  getPeopleForDoc,
  getPlacesForDoc,
} from "@/lib/data";

export function generateStaticParams() {
  return DOCS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/arsiv/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getDoc(slug);
  return { title: d ? d.title : "Belge bulunamadı", description: d?.description };
}

export default function DocPage(props: PageProps<"/arsiv/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-screen pt-28" />}>
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
  const next = DOCS[idx + 1];
  const similar = DOCS.filter((x) => x.slug !== d.slug && (x.type === d.type || x.era === d.era)).slice(0, 4);
  const relatedPeople = getPeopleForDoc(d.slug, 6);
  const relatedExhibitions = getExhibitionsForDoc(d.slug);
  const relatedPlaces = getPlacesForDoc(d.slug);

  const meta: [string, string][] = [
    ["Katalog No", d.catalogNo],
    ["Tarih", d.dateLabel],
    ["Belge Türü", docTypeLabel(d.type)],
    ["Tarihsel Dönem", eraLabel(d.era)],
    ["Coğrafi Bölge", d.region],
    ["Dil / Yazı", d.language],
    ["Koleksiyon / Fon", d.source],
  ];

  return (
    <article className="mx-auto max-w-[1440px] px-5 pb-20 pt-28 md:px-10">
      <Breadcrumbs items={[{ href: "/arsiv", label: "Arşiv" }, { label: d.title }]} />

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.02fr_1fr]">
        <div>
          <DocViewer
            doc={d}
            prevHref={prev ? `/arsiv/${prev.slug}` : undefined}
            nextHref={next ? `/arsiv/${next.slug}` : undefined}
          />
        </div>

        <div className="animate-fade-up">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="badge-glass">{docTypeLabel(d.type)}</span>
            <span className="font-mono text-xs text-gold-light/85">{d.catalogNo}</span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {d.title}
          </h1>

          <dl className="museum-card mt-7 divide-y divide-white/[0.08] px-6 py-2">
            {meta.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[145px_1fr] py-3 text-sm">
                <dt className="text-xs font-medium tracking-wider text-gold-light/80 uppercase">{k}</dt>
                <dd className="text-white/85">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <DocTabs doc={d} />
          </div>

          {(relatedPlaces.length > 0 || relatedExhibitions.length > 0) && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedPlaces.map((pl) => (
                <Link
                  key={pl.id}
                  href={`/harita?yer=${pl.id}`}
                  className="museum-card group flex items-center justify-between gap-3 p-4"
                >
                  <div className="min-w-0">
                    <span className="flex items-center gap-1.5 text-[0.65rem] font-medium tracking-widest text-gold-light uppercase">
                      <MapPin size={12} /> Atlas Noktası
                    </span>
                    <span className="mt-1 block truncate text-sm font-semibold text-white transition group-hover:text-gold-light">
                      {pl.name}
                    </span>
                    <span className="text-xs text-white/50">
                      {PLACE_KINDS.find((k) => k.id === pl.kind)?.label}
                    </span>
                  </div>
                  <ArrowRight size={15} className="shrink-0 text-gold-light transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}

              {relatedExhibitions.map((ex) => (
                <Link
                  key={ex.slug}
                  href={`/sergiler/${ex.slug}`}
                  className="museum-card group flex items-center justify-between gap-3 p-4"
                >
                  <div className="min-w-0">
                    <span className="flex items-center gap-1.5 text-[0.65rem] font-medium tracking-widest text-gold-light uppercase">
                      <Layers size={12} /> Küratöryel Sergi
                    </span>
                    <span className="mt-1 block truncate text-sm font-semibold text-white transition group-hover:text-gold-light">
                      {ex.title}
                    </span>
                    <span className="text-xs text-white/50">{ex.period}</span>
                  </div>
                  <ArrowRight size={15} className="shrink-0 text-gold-light transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* İlgili Şahsiyetler */}
      {relatedPeople.length > 0 && (
        <section className="mt-20 border-t border-white/[0.08] pt-14">
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
        <section className="mt-20 border-t border-white/[0.08] pt-14">
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
    </article>
  );
}
