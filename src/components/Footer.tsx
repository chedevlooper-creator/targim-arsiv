import Link from "next/link";
import { EXHIBITIONS } from "@/lib/data";
import { DiamondDivider, FiligreeLink, Logo, NAV } from "./Brand";

export default function Footer() {
  return (
    <footer className="topo-bg relative border-t border-white/[0.08]">
      {/* Üst ince elmas vurgu */}
      <div className="mx-auto max-w-[1440px] px-5 pt-10 md:px-10">
        <DiamondDivider />
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_1fr_1.1fr] md:px-10">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            Çeçen, İnguş ve Kuzey Kafkasya halklarının asırlık tarihini, öncü şahsiyetlerini, taş kule yerleşimlerini
            ve el yazması mirasını gelecek kuşaklar için belgeleyen dijital hafıza müzesi.
          </p>
          <p className="mt-5 font-serif text-xl italic text-gold-light/90">
            “Dağlar susar, tarih konuşur.”
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Bölümler</h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-flex items-center gap-2 transition hover:text-gold-light">
                  <span className="h-1 w-1 rounded-full bg-gold-light/70" />
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
                  <span className="block text-sm font-medium text-white/90 transition group-hover:text-gold-light">
                    {ex.title}
                  </span>
                  <span className="text-xs text-white/45">{ex.period} · {ex.count} eser</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Arşive Katkıda Bulunun</h3>
          <p className="text-sm leading-relaxed text-white/60">
            Aile sandığınızda korunan bir fotoğraf, Osmanlıca veya Arapça bir mektup ya da 1944 sürgün tanıklığı mı var?
            Asılları sizde kalmak üzere dijital hafızaya kaydedelim.
          </p>
          <div className="mt-6">
            <FiligreeLink href="/hakkinda#katki" size="sm">Belge Gönder</FiligreeLink>
          </div>
        </div>
      </div>

      <div className="divider-gold" />
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-5 py-6 text-xs tracking-wider text-white/45 md:flex-row md:px-10">
        <span>
          © 2026 TARGİM <span lang="en">ARCHIVE</span> · DİJİTAL HAFIZA VE TARİH VAKFI
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
          <Link href="/kisiler" className="transition hover:text-gold-light">330 BİYOGRAFİ</Link>
        </div>
      </div>
    </footer>
  );
}
