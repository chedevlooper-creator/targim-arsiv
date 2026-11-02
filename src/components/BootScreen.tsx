import Image from "next/image";
import { DOCS, EXHIBITIONS, PEOPLE, PLACES } from "@/lib/data";

const CHECKS = [
  ["Portre koleksiyonu", `${PEOPLE.length} kayıt`],
  ["Arşiv kayıtları", `${DOCS.length} kayıt`],
  ["Atlas noktaları", `${PLACES.length} kayıt`],
  ["Küratöryel sergiler", `${EXHIBITIONS.length} kayıt`],
];

/*
  Sayfa boyanmadan önce çalışır. Oturumda bir kez ve hareket azaltma tercihi yoksa
  data-boot bayrağını koyar; istemci tarafı gezinmede React bu betiği çalıştırmadığı
  için ana sayfaya geri dönüşte açılış ekranı tekrarlanmaz.
*/
const BOOT_SCRIPT = `(function(){
var d=document.documentElement,k="targim-boot";
try{
if(sessionStorage.getItem(k)||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
sessionStorage.setItem(k,"1");
}catch(e){return}
d.dataset.boot="1";
function end(){delete d.dataset.boot;removeEventListener("pointerdown",end);removeEventListener("keydown",end)}
addEventListener("pointerdown",end);addEventListener("keydown",end);
setTimeout(end,3400);
})()`;

export default function BootScreen() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      <div className="boot-screen px-6" aria-hidden="true">
        <Image
          src="/images/brand/targim-logo.webp"
          alt=""
          width={640}
          height={640}
          sizes="(max-width:768px) 176px, 256px"
          preload
          className="h-44 w-44 md:h-64 md:w-64"
        />

        <p className="mt-6 text-center text-2xl leading-tight">Targim Dijital Arşiv Okuyucusu</p>

        <dl className="mt-8 w-full max-w-md text-xl leading-tight">
          {CHECKS.map(([label, value]) => (
            <div key={label} className="flex items-baseline gap-2">
              <dt>{label}</dt>
              <span className="flex-1 overflow-hidden whitespace-nowrap opacity-60">{".".repeat(60)}</span>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="boot-bar mt-8 w-full max-w-md">
          <div className="boot-bar-fill" />
        </div>

        <p className="absolute inset-x-6 bottom-8 text-center text-xl">
          Geçmek için herhangi bir tuşa basın. Dağlar susar, tarih konuşur.
        </p>
      </div>
    </>
  );
}
