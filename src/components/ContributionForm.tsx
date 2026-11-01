"use client";

import { useRef, useState } from "react";
import { CheckCircle2, FileCheck2, Send, Upload } from "lucide-react";

export default function ContributionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "fotograf",
    period: "19. Yüzyıl",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="museum-card p-10 text-center animate-fade-up">
        <CheckCircle2 size={46} className="mx-auto text-gold-light" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-white">
          Belge Başvurunuz Kayda Alındı
        </h3>
        <p className="mt-3 text-base leading-relaxed text-white/70">
          Targim Archive yayın ve tasnif kurulu ilettiğiniz bilgileri inceleyerek en kısa sürede e-posta üzerinden
          sizinle iletişime geçecektir. Ortak hafızamıza katkınız için teşekkür ederiz.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFileName("");
          }}
          className="btn-gold mt-7"
        >
          Yeni Belge Bildir
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="museum-card space-y-4 p-6 md:p-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[0.68rem] font-medium tracking-[0.16em] text-gold-light/85 uppercase">
            Ad Soyad
          </label>
          <input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Adınız Soyadınız"
            className="input-dark w-full px-4 py-2.5 text-sm"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[0.68rem] font-medium tracking-[0.16em] text-gold-light/85 uppercase">
            E-Posta Adresi
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="ornek@alanadi.com"
            className="input-dark w-full px-4 py-2.5 text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[0.68rem] font-medium tracking-[0.16em] text-gold-light/85 uppercase">
            Materyal Türü
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="input-dark w-full px-4 py-2.5 text-sm [&>option]:bg-panel"
          >
            <option value="fotograf">Tarihi Fotoğraf / Albüm</option>
            <option value="el-yazmasi">El Yazması / Mektup</option>
            <option value="resmi-belge">Muhaceret veya Sürgün Evrakı</option>
            <option value="harita">Harita / Çizim</option>
            <option value="sozlu-tarih">Sözlü Tarih / Ses Kaydı</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-[0.68rem] font-medium tracking-[0.16em] text-gold-light/85 uppercase">
            Tahmini Tarih / Dönem
          </label>
          <input
            value={formData.period}
            onChange={(e) => setFormData({ ...formData, period: e.target.value })}
            placeholder="Örn: 1865, Şubat 1944, 1910 civarı…"
            className="input-dark w-full px-4 py-2.5 text-sm"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-[0.68rem] font-medium tracking-[0.16em] text-gold-light/85 uppercase">
          Belgenin Hikâyesi ve Bağlamı
        </label>
        <textarea
          rows={4}
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Belgenin ait olduğu aile (teyp), köy/yerleşim, kişiler ve bilinen öyküsünü kısaca paylaşın…"
          className="input-dark w-full resize-none p-4 text-sm"
        />
      </div>

      <div
        onClick={() => fileRef.current?.click()}
        className="cursor-pointer rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-6 text-center transition hover:border-gold-light/45 hover:bg-white/[0.06]"
      >
        <input
          ref={fileRef}
          type="file"
          accept=".png,.jpg,.jpeg,.pdf,.mp3,.wav"
          className="hidden"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
        />
        {fileName ? (
          <>
            <FileCheck2 size={24} className="mx-auto mb-2 text-gold-light" />
            <p className="text-sm font-medium text-gold-light">{fileName}</p>
            <p className="mt-1 text-xs text-white/50">Değiştirmek için tıklayın</p>
          </>
        ) : (
          <>
            <Upload size={24} className="mx-auto mb-2 text-gold-light" />
            <p className="text-sm text-white/85">Dijital kopya eklemek için tıklayın (İsteğe bağlı)</p>
            <p className="mt-1 text-xs text-white/45">JPG, PNG, PDF veya Ses Kaydı (Maks. 25 MB)</p>
          </>
        )}
      </div>

      <button type="submit" className="btn-gold w-full justify-center py-3.5">
        <Send size={14} /> Belgeyi Arşiv Kuruluna İlet
      </button>
    </form>
  );
}
