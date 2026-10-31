import { DiamondDivider, FiligreeLink } from "@/components/Brand";

export default function NotFound() {
  return (
    <section className="topo-bg flex min-h-[75vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="eyebrow">404 · Kayıt Bulunamadı</p>
      <h1 className="mt-4 font-display text-4xl font-semibold md:text-6xl">
        <span className="gold-text">Aradığınız Sayfa Arşivde Yok</span>
      </h1>
      <p className="mt-4 max-w-lg font-serif text-xl text-[#cfc6b4]">
        Bağlantı taşınmış veya katalog numarası değişmiş olabilir. Ana sayfaya dönerek koleksiyonları keşfedebilirsiniz.
      </p>
      <DiamondDivider className="my-8 w-64" />
      <FiligreeLink href="/">Ana Sayfaya Dön</FiligreeLink>
    </section>
  );
}
