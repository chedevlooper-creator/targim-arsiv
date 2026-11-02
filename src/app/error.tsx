"use client";

import Link from "next/link";

export default function Error({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <section className="flex min-h-[75vh] flex-col items-center justify-center bg-ink px-5 pb-20 pt-28 text-center">
      <h1 className="crt-glow font-serif text-4xl font-medium text-parchment md:text-6xl">Sayfa açılamadı</h1>
      <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/75">
        Sayfa yüklenirken bir hata oluştu. Yeniden deneyin veya ana sayfadan devam edin.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button onClick={() => retry()} className="btn-gold">
          Yeniden Dene
        </button>
        <Link href="/" className="btn-glass">
          Ana Sayfaya Dön
        </Link>
      </div>
    </section>
  );
}
