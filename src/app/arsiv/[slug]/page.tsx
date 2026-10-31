import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DocTabs, DocViewer } from "@/components/DocViewer";
import { Breadcrumbs } from "@/components/PageHeader";
import { DOCS, docTypeLabel, eraLabel, getDoc } from "@/lib/data";

export function generateStaticParams() {
  return DOCS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/arsiv/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getDoc(slug);
  return { title: d ? d.title : "Belge bulunamadı", description: d?.description };
}

export default async function DocPage({ params }: PageProps<"/arsiv/[slug]">) {
  const { slug } = await params;
  const d = getDoc(slug);
  if (!d) notFound();

  const idx = DOCS.findIndex((x) => x.slug === d.slug);
  const prev = DOCS[idx - 1];
  const next = DOCS[idx + 1];
  const similar = DOCS.filter((x) => x.slug !== d.slug && (x.type === d.type || x.era === d.era)).slice(0, 4);

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
    <article className="mx-auto max-w-[1440px] px-5 pt-[104px] md:px-10">
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
          <p className="eyebrow">
            {docTypeLabel(d.type)} · {d.catalogNo}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
            <span className="gold-text">{d.title}</span>
          </h1>

          <dl className="museum-card mt-7 divide-y divide-gold/15 px-6 py-2">
            {meta.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[145px_1fr] py-3 text-sm">
                <dt className="font-display text-xs tracking-wider text-gold-light/80 uppercase">{k}</dt>
                <dd className="text-[#f1e8d5]">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <DocTabs doc={d} />
          </div>
        </div>
      </div>

      {similar.length > 0 && (
        <section className="mt-24 border-t border-gold/15 pt-14">
          <h2 className="eyebrow">İlişkili Arşiv Kayıtları</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
            {similar.map((s) => (
              <Link key={s.slug} href={`/arsiv/${s.slug}`} className="museum-card group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#14100b]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width:768px) 100vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-mono text-[0.62rem] text-gold/80">{s.catalogNo}</p>
                  <h3 className="mt-1 font-display text-sm text-[#f3ead6] group-hover:text-gold-light">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs text-mist">{s.dateLabel}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
