import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowRight, Layers, MapPin, ScrollText } from "lucide-react";
import { Breadcrumbs, NextRecord } from "@/components/PageHeader";
import PersonGallery from "@/components/PersonGallery";
import {
  PEOPLE,
  PLACE_KINDS,
  docTypeLabel,
  eraLabel,
  getDocsForPerson,
  getEventsForPerson,
  getExhibitionsForPerson,
  getPerson,
  getPlacesForPerson,
  getRelatedPeople,
} from "@/lib/data";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return PEOPLE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/kisiler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) return { title: "Kişi bulunamadı" };
  return pageMetadata({ title: p.name, description: p.summary, path: `/kisiler/${p.slug}`, image: p.image });
}

export default function PersonPage(props: PageProps<"/kisiler/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-screen pt-[78px]" />}>
      <PersonPageContent {...props} />
    </Suspense>
  );
}

async function PersonPageContent({ params }: PageProps<"/kisiler/[slug]">) {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) notFound();

  const idx = PEOPLE.findIndex((x) => x.slug === p.slug);
  const prev = PEOPLE[idx - 1];
  const next = PEOPLE[idx + 1] ?? PEOPLE[0];
  const related = getRelatedPeople(p, 5);
  const events = getEventsForPerson(p, 2);
  const linkedDocs = getDocsForPerson(p, 3);
  const places = getPlacesForPerson(p, 3);
  const exhibitions = getExhibitionsForPerson(p);

  const gallery =
    p.gallery && p.gallery.length > 0
      ? p.gallery
      : [{ src: p.image, caption: `${p.name} (${p.born}–${p.died})` }];

  const isLiving = p.died === "Günümüz";
  const facts: [string, string][] = [
    ["Doğum", `${p.born}, ${p.birthPlace}`],
    isLiving
      ? ["Durum", "Hayatta (Gazi)"]
      : ["Vefat", p.deathPlace && p.deathPlace !== "—" ? `${p.died}, ${p.deathPlace}` : p.died],
    ["Tarihsel Dönem", eraLabel(p.era)],
    ["Bölge", p.region],
  ];
  if (p.center) facts.push(["Faaliyet Merkezi", p.center]);

  return (
    <article className="paper-screen pt-[78px]">
      {/* Üst Biyografi Sahnesi */}
      <section className="relative overflow-hidden border-b border-white/15">
        <div className="relative mx-auto max-w-[1500px] px-5 pb-16 pt-10 md:px-12">
          <Breadcrumbs items={[{ href: "/kisiler", label: "Kişiler" }, { label: p.name }]} />

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,430px)_1fr] xl:gap-14">
            <PersonGallery name={p.name} items={gallery} />

            <div className="flex flex-col justify-center">
              <h1 className="crt-glow font-serif text-[2.7rem] leading-[1.04] font-medium text-parchment [overflow-wrap:anywhere] sm:text-[3.2rem] md:text-[5rem] xl:text-[6.2rem]">
                {p.name}
              </h1>
              <p className="mt-4 text-2xl leading-snug text-parchment md:text-[1.7rem]">
                {p.title}, {p.born}–{p.died}
              </p>

              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">{p.summary}</p>

              <dl className="museum-card mt-8 grid max-w-2xl divide-y divide-white/[0.08] px-6 py-2">
                {facts.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[150px_1fr] py-3 text-sm">
                    <dt className="text-xs font-medium tracking-wider text-gold-light/80 uppercase">{k}</dt>
                    <dd className="text-white/85">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Biyografi Metni, İlgili Belgeler ve Yan Panel */}
      <section className="mx-auto grid max-w-[1500px] grid-cols-1 gap-14 px-5 pt-16 md:px-12 lg:grid-cols-[1fr_380px]">
        <div>
          <h2 className="eyebrow">Tarihsel Biyografi</h2>
          <div className="mt-6 space-y-6 font-serif text-[1.35rem] leading-relaxed text-white/82">
            {p.bio.map((para, i) => {
              const hasDropCap = i === 0 && /^\p{Lu}\p{Ll}/u.test(para.trimStart());
              return (
                <p
                  key={i}
                  className={
                    hasDropCap
                      ? "flow-root first-letter:float-left first-letter:mr-3.5 first-letter:font-serif first-letter:text-6xl first-letter:leading-none first-letter:text-parchment"
                      : undefined
                  }
                >
                  {para}
                </p>
              );
            })}
          </div>

          {/* İlgili Arşiv Belgeleri */}
          {linkedDocs.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between gap-4">
                <h2 className="eyebrow">İlgili Arşiv Kayıtları</h2>
                <Link href="/arsiv" className="text-xs text-white/55 transition hover:text-gold-light">
                  Tüm Arşiv →
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {linkedDocs.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/arsiv/${d.slug}`}
                    className="museum-card group flex flex-col overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-night">
                      <Image
                        src={d.image}
                        alt={d.title}
                        fill
                        sizes="(max-width:768px) 100vw, 25vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="flex items-center gap-1.5 text-[0.62rem] font-medium tracking-widest text-gold-light uppercase">
                        <ScrollText size={11} /> {docTypeLabel(d.type)} · {d.dateLabel}
                      </span>
                      <h3 className="mt-1.5 text-sm font-semibold text-white transition group-hover:text-gold-light">
                        {d.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Zaman Çizelgesi Bağlantıları */}
          {events.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between gap-4">
                <h2 className="eyebrow">Kronolojideki Dönem &amp; Olaylar</h2>
                <Link href="/zaman-cizelgesi" className="text-xs text-white/55 transition hover:text-gold-light">
                  Zaman Çizelgesi →
                </Link>
              </div>
              <ul className="mt-6 space-y-3">
                {events.map((e) => (
                  <li key={e.year}>
                    <Link
                      href={`/zaman-cizelgesi?yil=${e.year}`}
                      className="museum-card group flex items-center gap-5 p-4"
                    >
                      <span className="font-display text-2xl font-semibold text-gold-light">{e.year}</span>
                      <span className="h-6 w-px bg-white/12" />
                      <div className="min-w-0 flex-1">
                        <span className="block text-base font-semibold text-white transition group-hover:text-gold-light">
                          {e.title}
                        </span>
                        <span className="block truncate text-xs text-white/55">{e.short}</span>
                      </div>
                      <ArrowRight size={15} className="shrink-0 text-gold-light transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sağ Sütun: Çağdaşlar, Harita Yerleşimleri ve Sergiler */}
        <aside className="space-y-6">
          {related.length > 0 && (
            <div className="museum-card p-6">
              <h2 className="eyebrow">Çağdaşları ve İlgili Kişiler</h2>
              <ul className="mt-5 divide-y divide-white/[0.08]">
                {related.map((r) => (
                  <li key={r.slug} className="py-3.5 first:pt-0 last:pb-0">
                    <Link href={`/kisiler/${r.slug}`} className="group flex items-center gap-3.5">
                      <span className="relative h-16 w-14 shrink-0 overflow-hidden rounded-xl border border-white/12 bg-night">
                        <Image
                          src={r.image}
                          alt={r.name}
                          fill
                          sizes="56px"
                          className="portrait-tone object-cover object-top transition duration-500 group-hover:scale-105"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-white transition group-hover:text-gold-light">
                          {r.name}
                        </span>
                        <span className="block truncate text-xs text-white/55">{r.title}</span>
                        <span className="font-mono text-[0.7rem] text-gold-light/75">
                          {r.born} – {r.died}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="museum-card p-6">
            <div className="flex items-center gap-2 text-gold-light">
              <MapPin size={16} />
              <h3 className="eyebrow">Coğrafi Bağlam &amp; Atlas</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              {p.name} ile ilişkili <strong className="font-medium text-white/90">{p.region}</strong> coğrafyasındaki
              tarihsel noktalar:
            </p>
            <ul className="mt-4 space-y-2.5">
              {places.map((pl) => (
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
            <div className="mt-4">
              <Link href="/harita" className="btn-glass w-full justify-center text-xs">
                Kafkasya Tarih Atlasını Aç <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {exhibitions.length > 0 && (
            <div className="museum-card p-6">
              <div className="flex items-center gap-2 text-gold-light">
                <Layers size={16} />
                <h3 className="eyebrow">İlgili Küratöryel Sergi</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {exhibitions.map((ex) => (
                  <li key={ex.slug}>
                    <Link
                      href={`/sergiler/${ex.slug}`}
                      className="group block overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] transition hover:border-gold-light/40"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden bg-night">
                        <Image
                          src={ex.image}
                          alt={ex.title}
                          fill
                          sizes="340px"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                        <span className="badge-glass absolute bottom-2.5 left-3">{ex.period}</span>
                      </div>
                      <div className="p-3.5">
                        <span className="block text-sm font-semibold text-white transition group-hover:text-gold-light">
                          {ex.title}
                        </span>
                        <span className="mt-1 line-clamp-1 block text-xs text-white/55">{ex.subtitle}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>

      <NextRecord
        label="Sıradaki Şahsiyet"
        title={next.name}
        sub={next.title}
        href={`/kisiler/${next.slug}`}
        prev={prev ? { label: `Önceki: ${prev.name}`, href: `/kisiler/${prev.slug}` } : undefined}
      />
    </article>
  );
}
