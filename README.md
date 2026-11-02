# Targim Archive

> **“Dağlar susar, tarih konuşur.”**  
> Çeçen, İnguş ve Kuzey Kafkasya halklarının asırlara yayılan yazılı, görsel ve sözlü mirasını bir araya getiren bağımsız dijital hafıza müzesi ve araştırma arşivi.

---

## 🏛️ Proje Hakkında

Targim Archive, Kuzey Kafkasya'nın birincil kaynak belgelerini, tarihsel şahsiyetlerini, taş kule mimarisini ve kültürel mirasını modern bir dijital deneyimle sunar:

- **330 Tarihsel Portre:** Restore edilmiş yüksek çözünürlüklü fotoğraflar ve ayrıntılı biyografiler.
- **47 Birincil Arşiv Kaydı:** Çevirileri, transkripsiyonları ve dış arşiv kaynak referanslarıyla birlikte taranmış belgeler.
- **Tarih Atlası:** Bölgenin önemli kule, yerleşim ve tarihi noktalarının coğrafi koordinatları.
- **Kronoloji:** 1785 Şeyh Mansur döneminden günümüze uzanan tarihsel zaman çizelgesi.
- **Küratöryel Sergiler ve Etnografya:** Kafkasya'nın maddi ve manevi kültürünü derleyen tematik koleksiyonlar.

---

## 🛠️ Teknoloji Yığını

- **Çatı:** [Next.js](https://nextjs.org/) (App Router, Static Generation)
- **Stil:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Yazı Tipleri:** STIX Two Text, VT323
- **Arama:** [Fuse.js](https://www.fusejs.io/)
- **Kaydırma Deneyimi:** [Lenis](https://lenis.darkroom.engineering/) & [Motion](https://motion.dev/)
- **İkonlar:** [Lucide React](https://lucide.dev/)

---

## 🚀 Başlangıç

Geliştirme sunucusunu başlatmak için:

```bash
npm install
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### Kullanılabilir Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Geliştirme sunucusunu Turbopack ile başlatır. |
| `npm run build` | Üretim için statik derleme alır (tüm rotaları önceden işler). |
| `npm run start` | Derlenmiş üretim sürümünü sunar. |
| `npm run lint` | ESLint kurallarını çalıştırır. |
| `npm test` | Arşiv veri ve görsel bütünlüğü testlerini (`tests/archive-integrity.test.mts`) çalıştırır. |

### 4K tanıtım filmi

350 MB'lık `public/videos/kule-arsivi-tanitim.mp4`, GitHub'ın 100 MB dosya sınırını aştığı için depoya alınmaz. Üretimde film Vercel Blob'daki `targim-medya` deposunda durur ve adresi Vercel projesindeki `NEXT_PUBLIC_HERO_FILM_URL` ortam değişkenindedir. Başka bir depolamaya taşırken yalnızca bu değişkeni güncelleyin; yeni depolama `Range` isteklerini desteklemelidir. Yerelde `.env.local` dosyasına şu satırı ekleyin:

```bash
NEXT_PUBLIC_HERO_FILM_URL=/videos/kule-arsivi-tanitim.mp4?v=4k60
```

Değişken tanımlı değilse geniş ekranlar depodaki 1080p filmi oynatır. Bağlantı 4K filme yetişmezse ana sayfa da 1080p'ye geçer.

---

## 📜 Lisans & Telif

Bu arşiv projesi kamu yararı ve kültürel mirasın korunması amacıyla hazırlanmıştır. Arşiv kayıtları ve birincil belgeler ilgili koleksiyon ve kütüphane haklarına tabidir.
