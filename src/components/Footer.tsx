import Image from "next/image";
import Link from "next/link";
import { EXHIBITIONS, PEOPLE } from "@/lib/data";
import { FiligreeLink, InstagramLink, NAV_ALL } from "./Brand";

export default function Footer() {
  return (
    <footer className="topo-bg relative">
      <div className="istang-band" aria-hidden="true" />

      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_1fr_1.1fr] md:px-12">
        <div className="max-w-sm">
          <Link href="/" aria-label="Targim Archive ana sayfa" className="inline-block">
            <Image
              src="/images/brand/targim-logo.webp"
              alt=""
              width={640}
              height={640}
              sizes="176px"
              className="h-44 w-44"
            />
          </Link>
          <p className="mt-6 leading-relaxed text-white/75">
            Çeçen, İnguş ve Kuzey Kafkasya halklarının asırlık tarihini, öncü şahsiyetlerini, taş kule yerleşimlerini
            ve el yazması mirasını gelecek kuşaklar için belgeleyen dijital hafıza müzesi.
          </p>
          <p className="crt-glow mt-6 font-serif text-3xl leading-tight text-parchment">
            Dağlar susar, tarih konuşur.
          </p>
          <InstagramLink className="mt-6 text-lg text-parchment" />
        </div>

        <div>
          <h3 className="eyebrow mb-5">Bölümler</h3>
          <ul className="space-y-2 text-white/85">
            {NAV_ALL.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="link-crt">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Küratöryel Sergiler</h3>
          <ul className="space-y-3 text-sm text-white/70">
            {EXHIBITIONS.map((ex) => (
              <li key={ex.slug}>
                <Link href={`/sergiler/${ex.slug}`} className="group block">
                  <span className="block text-white/90 transition group-hover:text-gold-light">{ex.title}</span>
                  <span className="text-sm text-white/55">{ex.period}, {ex.count} eser</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Dijital Koleksiyon</h3>
          <p className="leading-relaxed text-white/75">
            Birincil kaynak mektupları, kartografik haritaları, taş kule yerleşimlerini ve {PEOPLE.length} tarihi
            şahsiyetin biyografisini açık erişimli arşivimizde inceleyin.
          </p>
          <div className="mt-6">
            <FiligreeLink href="/arsiv" size="sm">Arşivi Keşfet</FiligreeLink>
          </div>
        </div>
      </div>

      <div className="divider-gold" />
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-white/55 md:flex-row md:px-12">
        <span>
          © 2026 Targim <span lang="en">Archive</span>, Dijital Hafıza ve Tarih Vakfı
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Link href="/harita?yer=targim" className="transition hover:text-gold-light">TARGİM</Link>
          <span>·</span>
          <Link href="/harita?yer=vedeno" className="transition hover:text-gold-light">VEDENO</Link>
          <span>·</span>
          <Link href="/harita?yer=grozni" className="transition hover:text-gold-light">GROZNİ</Link>
          <span>·</span>
          <Link href="/harita?yer=nazran" className="transition hover:text-gold-light">NAZRAN</Link>
          <span>·</span>
          <Link href="/kisiler" className="transition hover:text-gold-light">{PEOPLE.length} BİYOGRAFİ</Link>
        </div>
      </div>
    </footer>
  );
}
