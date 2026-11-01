import Link from "next/link";
import { DiamondDivider, FiligreeLink } from "@/components/Brand";
import { PageBackdrop } from "@/components/PageHeader";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden bg-ink px-5 pb-20 pt-28 text-center">
      <PageBackdrop />
      <div className="relative flex flex-col items-center">
        <span className="badge-glass">404 · Kayıt Bulunamadı</span>
        <h1 className="mt-5 font-display text-4xl font-semibold md:text-6xl">
          <span className="gold-text">Aradığınız Sayfa Arşivde Yok</span>
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65">
          Bağlantı taşınmış veya katalog numarası değişmiş olabilir. Ana sayfaya dönerek veya biyografi ve belge
          koleksiyonlarını açarak keşfe devam edebilirsiniz.
        </p>
        <DiamondDivider className="my-8 w-64" />
        <div className="flex flex-wrap items-center justify-center gap-3">
          <FiligreeLink href="/" size="sm">Ana Sayfaya Dön</FiligreeLink>
          <Link href="/kisiler" className="btn-glass">Kişiler (330)</Link>
          <Link href="/arsiv" className="btn-glass">Arşiv Belgeleri</Link>
        </div>
      </div>
    </section>
  );
}
