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
          <p className="mt-6 font-serif text-lg leading-relaxed text-[#cfc6b4]">
            Çeçen, İnguş ve Kuzey Kafkasya halklarının asırlık tarihini, öncü şahsiyetlerini, taş kule yerleşimlerini
            ve el yazması mirasını gelecek kuşaklar için belgeleyen dijital hafıza müzesi.
          </p>
          <p className="mt-5 font-serif text-xl italic text-gold-light/90">
            “Dağlar susar, tarih konuşur.”
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Bölümler</h3>
          <ul className="space-y-2.5 text-sm text-[#d6cdbb]">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-flex items-center gap-2 transition hover:text-gold-light">
                  <span className="h-1 w-1 rotate-45 bg-gold/70" />
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Küratöryel Sergiler</h3>
          <ul className="space-y-3 text-sm text-[#d6cdbb]">
            {EXHIBITIONS.map((ex) => (
              <li key={ex.slug}>
                <Link href={`/sergiler/${ex.slug}`} className="group block">
                  <span className="block font-display text-[0.88rem] text-[#f0e6d0] transition group-hover:text-gold-light">
                    {ex.title}
                  </span>
                  <span className="text-xs text-mist">{ex.period} · {ex.count} eser</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Arşive Katkıda Bulunun</h3>
          <p className="font-serif text-lg leading-relaxed text-[#d6cdbb]">
            Aile sandığınızda korunan bir fotoğraf, Osmanlıca veya Arapça bir mektup ya da 1944 sürgün tanıklığı mı var?
            Asılları sizde kalmak üzere dijital hafızaya kaydedelim.
          </p>
          <div className="mt-6">
            <FiligreeLink href="/hakkinda#katki">Belge Gönder</FiligreeLink>
          </div>
        </div>
      </div>

      <div className="divider-gold" />
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-5 py-6 text-xs tracking-wider text-mist/80 md:flex-row md:px-10">
        <span>© 2026 TARGİM ARCHIVE · DİJİTAL HAFIZA VE TARİH VAKFI</span>
        <span>CERAH · VEDENO · GROZNİ · NAZRAN · DİASPORA</span>
      </div>
    </footer>
  );
}
