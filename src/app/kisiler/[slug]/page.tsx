import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, ScrollText } from "lucide-react";
import { FiligreeLink } from "@/components/Brand";
import { Breadcrumbs } from "@/components/PageHeader";
import PersonGallery from "@/components/PersonGallery";
import { PEOPLE, TIMELINE, docTypeLabel, eraLabel, getDoc, getPerson } from "@/lib/data";

export function generateStaticParams() {
  return PEOPLE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/kisiler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPerson(slug);
  return { title: p ? p.name : "Kişi bulunamadı", description: p?.summary };
}

export default async function PersonPage({ params }: PageProps<"/kisiler/[slug]">) {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) notFound();

  const idx = PEOPLE.findIndex((x) => x.slug === p.slug);
  const prev = PEOPLE[idx - 1];
  const next = PEOPLE[idx + 1];
  const related = (p.related ?? []).map(getPerson).filter((x) => x !== undefined);
  const events = TIMELINE.filter((t) => t.people?.includes(p.slug));
  const linkedDocs = (p.docs ?? []).map(getDoc).filter((d) => d !== undefined);

  const gallery =
    p.gallery && p.gallery.length > 0
      ? p.gallery
      : [{ src: p.image, caption: `${p.name} (${p.born}–${p.died})` }];

  const facts: [string, string][] = [
    ["Doğum", `${p.born}, ${p.birthPlace}`],
    ["Vefat", `${p.died}, ${p.deathPlace}`],
    ["Tarihsel Dönem", eraLabel(p.era)],
    ["Bölge", p.region],
  ];
  if (p.center) facts.push(["Faaliyet Merkezi", p.center]);

  return (
    <article className="pt-[76px]">
      {/* Üst Biyografi Sahnesi */}
      <section className="grain relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0">
          <Image src="/images/hero.jpg" alt="" fill sizes="100vw" className="object-cover opacity-22 blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/88 to-ink" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-10 md:px-10">
          <Breadcrumbs items={[{ href: "/kisiler", label: "Kişiler" }, { label: p.name }]} />

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,430px)_1fr] xl:gap-14">
            <PersonGallery name={p.name} items={gallery} />

            <div className="flex flex-col justify-center animate-fade-up">
              <p className="eyebrow">
                {eraLabel(p.era)} · {p.born} – {p.died}
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl xl:text-7xl">
                <span className="gold-text">{p.name}</span>
              </h1>
              <p className="mt-3 font-serif text-2xl italic text-gold-light/90">
                {p.title} · {p.region}
              </p>

              <div className="mt-5 flex items-center gap-3" aria-hidden="true">
                <span className="h-px w-20 bg-gold/70" />
                <span className="h-2 w-2 rotate-45 border border-gold-light bg-gold" />
                <span className="h-px w-40 bg-gradient-to-r from-gold/60 to-transparent" />
              </div>

              <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-[#eae1ce] md:text-2xl">
                {p.summary}
              </p>

              <dl className="museum-card mt-8 grid max-w-2xl divide-y divide-gold/15 px-6 py-2">
                {facts.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[150px_1fr] py-3 text-sm">
                    <dt className="font-display text-xs tracking-wider text-gold-light/80 uppercase">{k}</dt>
                    <dd className="text-[#f1e8d5]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Biyografi Metni, İlgili Belgeler ve Yan Panel */}
      <section className="mx-auto grid max-w-[1440px] gap-14 px-5 pt-16 md:px-10 lg:grid-cols-[1fr_380px]">
        <div>
          <h2 className="eyebrow">Tarihsel Biyografi</h2>
          <div className="mt-6 space-y-6 font-serif text-[1.35rem] leading-relaxed text-[#e3d9c5]">
            {p.bio.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "first-letter:float-left first-letter:mr-3.5 first-letter:font-display first-letter:text-6xl first-letter:leading-none first-letter:text-gold"
                    : ""
                }
              >
                {para}
              </p>
            ))}
          </div>

          {/* İlgili Arşiv Belgeleri */}
          {linkedDocs.length > 0 && (
            <div className="mt-16">
              <h2 className="eyebrow">İlgili Arşiv Kayıtları</h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {linkedDocs.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/arsiv/${d.slug}`}
                    className="museum-card group flex flex-col overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                      <Image
                        src={d.image}
                        alt={d.title}
                        fill
                        sizes="(max-width:768px) 100vw, 25vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="flex items-center gap-1.5 text-[0.62rem] tracking-widest text-gold uppercase">
                        <ScrollText size={11} /> {docTypeLabel(d.type)} · {d.dateLabel}
                      </span>
                      <h3 className="mt-1.5 font-display text-sm text-[#f3ead6] group-hover:text-gold-light">
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
              <h2 className="eyebrow">Kronolojideki Yeri</h2>
              <ul className="mt-6 space-y-3">
                {events.map((e) => (
                  <li key={e.year}>
                    <Link
                      href={`/zaman-cizelgesi?yil=${e.year}`}
                      className="museum-card group flex items-center gap-5 p-4"
                    >
                      <span className="font-display text-2xl font-semibold text-gold">{e.year}</span>
                      <span className="h-5 w-px bg-gold/30" />
                      <div className="min-w-0 flex-1">
                        <span className="block font-display text-base text-[#f3ead6] group-hover:text-gold-light">
                          {e.title}
                        </span>
                        <span className="block truncate text-xs text-mist">{e.short}</span>
                      </div>
                      <ArrowRight size={15} className="shrink-0 text-gold transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sağ Sütun */}
        <aside className="space-y-6">
          {related.length > 0 && (
            <div className="museum-card p-6">
              <h2 className="eyebrow">Çağdaşları ve İlgili Kişiler</h2>
              <ul className="mt-5 divide-y divide-gold/15">
                {related.map((r) => (
                  <li key={r.slug} className="py-3.5 first:pt-0 last:pb-0">
                    <Link href={`/kisiler/${r.slug}`} className="group flex items-center gap-4">
                      <span className="relative h-16 w-14 shrink-0 overflow-hidden border border-gold/40 bg-ink">
                        <Image src={r.image} alt={r.name} fill sizes="56px" className="object-cover transition duration-500 group-hover:scale-105" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-display text-base text-[#f3ead6] group-hover:text-gold-light">
                          {r.name}
                        </span>
                        <span className="block truncate font-serif text-sm italic text-[#cfc6b4]">{r.title}</span>
                        <span className="text-xs text-gold/80">
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
            <div className="flex items-center gap-2 text-gold">
              <MapPin size={16} />
              <h3 className="eyebrow">Coğrafi Bağlam</h3>
            </div>
            <p className="mt-3 font-serif text-lg leading-relaxed text-[#d6cdbb]">
              {p.name} ile ilişkili <strong className="text-[#f3ead6]">{p.birthPlace}</strong> ve{" "}
              <strong className="text-[#f3ead6]">{p.region}</strong> coğrafyasını interaktif Kafkasya Tarih Atlası üzerinde
              inceleyin.
            </p>
            <div className="mt-5">
              <FiligreeLink href="/harita">Atlası İncele</FiligreeLink>
            </div>
          </div>
        </aside>
      </section>

      {/* Önceki / Sonraki Şahsiyet */}
      <nav className="mx-auto mt-20 flex max-w-[1440px] items-center justify-between gap-4 border-t border-gold/20 px-5 pt-8 md:px-10">
        {prev ? (
          <Link href={`/kisiler/${prev.slug}`} className="group flex items-center gap-3 text-sm text-mist hover:text-gold-light">
            <ArrowLeft size={16} className="text-gold transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="block text-[0.62rem] tracking-widest uppercase">Önceki Şahsiyet</span>
              <span className="font-display text-base text-[#f3ead6] group-hover:text-gold-light">{prev.name}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/kisiler/${next.slug}`} className="group flex items-center gap-3 text-right text-sm text-mist hover:text-gold-light">
            <span>
              <span className="block text-[0.62rem] tracking-widest uppercase">Sonraki Şahsiyet</span>
              <span className="font-display text-base text-[#f3ead6] group-hover:text-gold-light">{next.name}</span>
            </span>
            <ArrowRight size={16} className="text-gold transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </nav>
    </article>
  );
}
