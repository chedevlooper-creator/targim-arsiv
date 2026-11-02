import type { Metadata } from "next";
import Surgun1944 from "@/components/Surgun1944";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "23 Şubat 1944 Sürgünü",
  description:
    "23 Şubat 1944'te 180 tren katarıyla sürülen 493.269 Çeçen ve İnguş'un hikâyesi; Beria telgrafından 1957 dönüşüne arşiv kayıtlarıyla.",
  path: "/surgun-1944",
  image: "/images/doc-surgun.jpg",
});

export default function SurgunPage() {
  return <Surgun1944 />;
}
