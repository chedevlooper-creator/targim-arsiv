import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { FiligreeLink } from "@/components/Brand";
import { Breadcrumbs } from "@/components/PageHeader";
import { EXHIBITIONS, getDoc, getExhibition, getPerson } from "@/lib/data";

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

export default async function ExhibitionDetailPage({ params }: PageProps<"/sergiler/[slug]">) {
  const { slug } = await params;
  const ex = getExhibition(slug);
  if (!ex) notFound();

  const idx = EXHIBITIONS.findIndex((x) => x.slug === ex.slug);
  const prev = EXHIBITIONS[idx - 1];
  const next = EXHIBITIONS[idx + 1];

  const linkedDocs = ex.docs.map(getDoc).filter((d) => d !== undefined);
  const linkedPeople = (ex.people ?? []).map(getPerson).filter((p) => p !== undefined);

  return (
    <article className="pt-[76px]">
      {/* Sergi Kapak Sahnesi */}
      <section className="grain relative min-h-[480px] overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0">
          <Image src={ex.image} alt={ex.title} fill priority sizes="100vw" className="object-cover opacity-48" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[480px] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-12 md:px-10">
          <Breadcrumbs items={[{ href: "/sergiler", label: "Sergiler" }, { label: ex.title }]} />
          <span className="mt-6 inline-block w-fit border border-gold/45 bg-ink/80 px-3.5 py-1 text-xs tracking-[0.22em] text-gold-light uppercase">
            {ex.theme} · {ex.period} · {ex.count} ESER
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-6xl animate-fade-up">
            <span className="gold-text">{ex.title}</span>
          </h1>
          <p className="mt-2 font-serif text-2xl italic text-gold-light/90">{ex.subtitle}</p>
          <p className="mt-4 max-w-3xl font-serif text-xl leading-relaxed text-[#e6dcc8]">{ex.summary}</p>
        </div>
      </section>

      {/* Küratöryel Metin, Belgeler ve Yan Panel */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-[1fr_380px]">
        <div>
          <h2 className="eyebrow">Küratör Notu ve Sergi Anlatısı</h2>
          <div className="mt-6 space-y-6 font-serif text-[1.32rem] leading-relaxed text-[#e2d8c4]">
            {ex.body.map((para, i) => (
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
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#14100b]">
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
                          <span className="font-mono text-[0.62rem] text-gold">{doc.catalogNo}</span>
                          <ExternalLink size={12} className="text-mist group-hover:text-gold-light" />
                        </div>
                        <h3 className="mt-1.5 font-display text-base text-[#f3ead6] group-hover:text-gold-light">
                          {doc.title}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 font-serif text-sm text-[#cfc6b4]">{doc.description}</p>
                      </div>
                      <p className="mt-3 border-t border-gold/15 pt-2 text-xs text-mist">{doc.dateLabel}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sağ Küratöryel Künye ve Şahsiyetler */}
        <aside className="space-y-6">
          <div className="museum-card p-6">
            <h3 className="eyebrow">Sergi Künyesi</h3>
            <dl className="mt-4 divide-y divide-gold/15 text-sm">
              <div className="grid grid-cols-[105px_1fr] py-3">
                <dt className="text-xs tracking-wider text-gold-light/80 uppercase">Tema</dt>
                <dd className="text-[#f1e8d5]">{ex.theme}</dd>
              </div>
              <div className="grid grid-cols-[105px_1fr] py-3">
                <dt className="text-xs tracking-wider text-gold-light/80 uppercase">Dönem</dt>
                <dd className="text-[#f1e8d5]">{ex.period}</dd>
              </div>
              <div className="grid grid-cols-[105px_1fr] py-3">
                <dt className="text-xs tracking-wider text-gold-light/80 uppercase">Küratör</dt>
                <dd className="text-[#f1e8d5]">{ex.curator}</dd>
              </div>
              <div className="grid grid-cols-[105px_1fr] py-3">
                <dt className="text-xs tracking-wider text-gold-light/80 uppercase">Kapsam</dt>
                <dd className="text-[#f1e8d5]">{ex.count} Belge ve Görsel</dd>
              </div>
            </dl>
            <div className="mt-6">
              <FiligreeLink href="/arsiv">Tüm Arşivi İncele</FiligreeLink>
            </div>
          </div>

          {linkedPeople.length > 0 && (
            <div className="museum-card p-6">
              <h3 className="eyebrow">Sergide Yer Alan Şahsiyetler</h3>
              <ul className="mt-4 divide-y divide-gold/15">
                {linkedPeople.map((p) => (
                  <li key={p.slug} className="py-3 first:pt-0 last:pb-0">
                    <Link href={`/kisiler/${p.slug}`} className="group flex items-center gap-3.5">
                      <span className="relative h-14 w-12 shrink-0 overflow-hidden border border-gold/40 bg-ink">
                        <Image src={p.image} alt={p.name} fill sizes="48px" className="object-cover" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-display text-sm text-[#f3ead6] group-hover:text-gold-light">
                          {p.name}
                        </span>
                        <span className="block truncate text-xs text-mist">
                          {p.born} – {p.died}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>

      {/* Önceki / Sonraki Sergi */}
      <nav className="mx-auto flex max-w-[1440px] justify-between border-t border-gold/20 px-5 py-10 md:px-10">
        {prev ? (
          <Link
            href={`/sergiler/${prev.slug}`}
            className="group flex items-center gap-3 text-sm text-mist hover:text-gold-light"
          >
            <ArrowLeft size={16} className="text-gold transition-transform group-hover:-translate-x-1" />
            <span className="font-display text-base text-[#f3ead6] group-hover:text-gold-light">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/sergiler/${next.slug}`}
            className="group flex items-center gap-3 text-sm text-mist hover:text-gold-light"
          >
            <span className="font-display text-base text-[#f3ead6] group-hover:text-gold-light">{next.title}</span>
            <ArrowRight size={16} className="text-gold transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </nav>
    </article>
  );
}
