import Link from "next/link";
import { DOCS, PEOPLE, PLACES } from "@/lib/data";
import { InstagramLink, Logo } from "./Brand";

const PRIMARY_LINKS = [
  { href: "/kisiler", label: "Kişiler" },
  { href: "/arsiv", label: "Arşiv" },
  { href: "/zaman-cizelgesi", label: "Zaman Çizelgesi" },
  { href: "/harita", label: "Tarih Atlası" },
];

const SECONDARY_LINKS = [
  { href: "/sergiler", label: "Sergiler" },
  { href: "/kultur", label: "Kültür ve Yaşam" },
  { href: "/surgun-1944", label: "1944 Sürgünü" },
  { href: "/hakkinda", label: "Hakkında" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-[1500px] px-5 py-12 md:px-12 md:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr] lg:grid-cols-[1.6fr_0.7fr_0.7fr]">
          {/* Sol: Marka ve Kısa Tanım */}
          <div className="max-w-md">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Çeçen, İnguş ve Kuzey Kafkasya halklarının tarihini, öncü
              şahsiyetlerini ve yazılı mirasını bir araya getiren açık erişimli
              dijital hafıza koleksiyonu.
            </p>
            <div className="mt-4">
              <InstagramLink className="text-sm text-gold-light" />
            </div>
          </div>

          {/* Orta: Keşfet */}
          <div>
            <h3 className="eyebrow mb-3.5">Katalog</h3>
            <ul className="space-y-2 text-sm text-white/75">
              {PRIMARY_LINKS.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="transition hover:text-gold-light"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ: Dosyalar & Kurumsal */}
          <div>
            <h3 className="eyebrow mb-3.5">Dosyalar</h3>
            <ul className="space-y-2 text-sm text-white/75">
              {SECONDARY_LINKS.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="transition hover:text-gold-light"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-xs text-white/65 sm:flex-row">
          <span>
            © 2026 Targim <span lang="en">Archive</span> · Dağlar susar, tarih
            konuşur.
          </span>
          <div className="flex flex-wrap items-center gap-3 font-mono text-[0.7rem] text-white/50">
            <Link href="/kisiler" className="transition hover:text-gold-light">
              {PEOPLE.length} Portre
            </Link>
            <span>·</span>
            <Link href="/arsiv" className="transition hover:text-gold-light">
              {DOCS.length} Belge
            </Link>
            <span>·</span>
            <Link href="/harita" className="transition hover:text-gold-light">
              {PLACES.length} Yerleşim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
