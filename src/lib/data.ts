// Targim Archive — Zenginleştirilmiş Tarihsel ve Kültürel Veri Katmanı

export type Era = "imamet" | "imparatorluk" | "sovyet" | "yakin";

export const ERAS: { id: Era; label: string; range: string }[] = [
  { id: "imamet", label: "İmamet Çağı", range: "1760–1859" },
  { id: "imparatorluk", label: "İmparatorluk Çağı", range: "1859–1917" },
  { id: "sovyet", label: "Sürgün ve Dönüş", range: "1917–1957" },
  { id: "yakin", label: "Yakın Dönem", range: "1957–2026" },
];

export const eraLabel = (e: Era) => ERAS.find((x) => x.id === e)?.label ?? e;

/* ------------------------------------------------------------------ */
/* KİŞİLER (330 Özgün Portre — Gerçek Arşiv ve Tarihî Referanslar)     */
/* ------------------------------------------------------------------ */

export type Person = {
  slug: string;
  name: string;
  born: string;
  died: string;
  title: string;
  era: Era;
  region: string;
  birthPlace: string;
  deathPlace: string;
  center?: string;
  image: string;
  gallery?: { src: string; caption: string }[];
  docs?: string[];
  summary: string;
  bio: string[];
  related?: string[];
};

export const PEOPLE: Person[] = [
  {
    "slug": "seyh-mansur",
    "name": "Şeyh Mansur",
    "born": "1760",
    "died": "1794",
    "title": "Kafkas direnişinin öncüsü, Birinci İmam",
    "era": "imamet",
    "region": "Çeçenya",
    "birthPlace": "Aldı",
    "deathPlace": "Şlisselburg Kalesi",
    "center": "Aldı, Sunja Havzası",
    "image": "/images/people/seyh-mansur.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/seyh-mansur.webp?v=4",
        "caption": "Şeyh Mansur (1760–1794)"
      }
    ],
    "docs": [
      "sheikh-mansur-1787-winkler-harita-gravuru",
      "spencer-seyh-mansur-evi-gravuru-1838",
      "baddeley-russian-conquest-of-the-caucasus-1908"
    ],
    "summary": "Asıl adı Uşurma. 1785’te başlattığı birlik ve direniş hareketiyle Kuzey Kafkasya halklarını ilk kez ortak bir siyasi ve manevi sancak etrafında topladı.",
    "bio": [
      "Çeçenya’nın Sunja kıyısındaki Aldı köyünde doğan Uşurma, adalet, toplumsal dayanışma ve ahlaki yenilenme çağrısıyla kısa sürede Çeçen, İnguş, Kumuk, Kabardey ve Dağıstan toplulukları arasında büyük saygı kazandı ve ‘Şeyh Mansur’ adıyla anıldı.",
      "Temmuz 1785’te Aldı ve Sunja Nehri yakınlarında Albay Pieri komutasındaki birliğe karşı kazanılan tarihi zafer, hareketin Doğu Kafkasya’dan Batı Çerkesya’ya kadar yayılmasını sağladı.",
      "1791 yazında Anapa Kalesi kuşatması sırasında ağır yaralı olarak esir düştü; Petersburg yakınlarındaki Şlisselburg Kalesi’nde 1794 yılında vefat etti. Kafkasya hafızasında birliğin ilk büyük meşalesi olarak anılır."
    ],
    "related": [
      "tasav-haci",
      "beybulat-taymiyev"
    ]
  },
  {
    "slug": "beybulat-taymiyev",
    "name": "Beybulat Taymiyev",
    "born": "1779",
    "died": "1831",
    "title": "Çeçen siyasi ve askeri önderi",
    "era": "imamet",
    "region": "Çeçenya",
    "birthPlace": "Mayurtup",
    "deathPlace": "Çeçenya",
    "center": "Şali, Mayurtup",
    "image": "/images/people/beybulat-taymiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/beybulat-taymiyev.webp?v=4",
        "caption": "Beybulat Taymiyev (1779–1831)"
      }
    ],
    "docs": [
      "dubois-kafkasya-genel-haritasi-1843",
      "kucuk-cecenya-askeri-topografya-haritasi-1848",
      "baddeley-russian-conquest-of-the-caucasus-1908"
    ],
    "summary": "19. yüzyılın ilk çeyreğinde Çeçen toplumunu ortak bir meclis çatısı altında birleştirmeye çalışan mahir komutan ve diplomat.",
    "bio": [
      "Beybulat Taymiyev, Kafkas Savaşı’nın erken evresinde yaklaşık otuz yıl boyunca Çeçen teypleri arasında iç barışı ve ortak hareket iradesini tesis etmeye çalıştı.",
      "1825–1826 yıllarında Terek ve Sunja kale hattına karşı yürütülen büyük harekâta öncülük etti; aynı zamanda Tiflis ve Erzurum hattında diplomatik görüşmeler yürüterek halkını yıkımdan korumaya gayret etti.",
      "Aleksandr Puşkin’in ‘Erzurum Yolculuğu’ hatıratında dahi cesaretiyle andığı Taymiyev, 1831’de bir suikast sonucu hayatını kaybetti."
    ],
    "related": [
      "seyh-mansur"
    ]
  },
  {
    "slug": "tasav-haci",
    "name": "Taşav Hacı Endireyevski",
    "born": "1770",
    "died": "1843",
    "title": "Çeçen ve Kumuk alimi, baş naip ve komutan",
    "era": "imamet",
    "region": "Çeçenya – Kumuk Ovası",
    "birthPlace": "Endirey",
    "deathPlace": "Çeçenya",
    "center": "Sayasan, İçkeriya",
    "image": "/images/people/tasav-haci.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/tasav-haci.webp?v=4",
        "caption": "Taşav Hacı Endireyevski (1770–1843)"
      }
    ],
    "docs": [
      "imamet-askeri-surasi-protokolu-1832",
      "meyer-dogu-kafkasya-samil-haritasi-1856",
      "baddeley-russian-conquest-of-the-caucasus-1908"
    ],
    "summary": "İmamet hareketinin Çeçenya’da kök salmasını sağlayan büyük alim ve stratejist; Şeyh Şamil’in erken dönemdeki en güçlü müttefiki ve baş naibi.",
    "bio": [
      "Endirey’de yetişen derin fıkıh bilgisi ve askeri dehasıyla tanınan Taşav Hacı, 1830’lu yılların başında Doğu Çeçenya ve İçkeriya ormanlarında sağlam bir savunma ve idare ağı kurdu.",
      "1834 sonrasında Şeyh Şamil ile ittifak kurarak Çeçenya ile Dağıstan arasındaki birliğin harcını attı; Sayasan ve Benoy çevresindeki harekâtları bizzat yönetti.",
      "1843 yılında vefat edene dek Çeçen meclislerinde sözü kanun sayılan bir bilge ve komutan olarak yaşadı."
    ],
    "related": [
      "baysangur-benoyski"
    ]
  },
  {
    "slug": "suayip-molla",
    "name": "Şuayip Molla Tsentoroyevski",
    "born": "1805",
    "died": "1844",
    "title": "Kafkasya İmameti naibi ve komutan",
    "era": "imamet",
    "region": "Çeçenya",
    "birthPlace": "Tsentoroy",
    "deathPlace": "Çeçenya",
    "center": "Tsentoroy",
    "image": "/images/people/suayip-molla.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/suayip-molla.webp?v=4",
        "caption": "Şuayip Molla Tsentoroyevski (1805–1844)"
      }
    ],
    "summary": "1805 yılında Tsentoroy köyünde doğan Şuayip Molla, genç yaşta İslami ilimlerde derinleşmiş ve İmam Şamil’in Çeçenistan’daki en güvendiği askeri dehalardan biri olarak Miçik ve İçkerya Naibliği görevini üstlenmiştir.",
    "bio": [
      "1805 yılında Tsentoroy köyünde doğan Şuayip Molla, genç yaşta İslami ilimlerde derinleşmiş ve İmam Şamil’in Çeçenistan’daki en güvendiği askeri dehalardan biri olarak Miçik ve İçkerya Naibliği görevini üstlenmiştir.",
      "Mayıs 1842’de gerçekleşen tarihi İtçkeri (İçkerya) Ormanları Muharebesi’nde General Grabbe komutasındaki Çarlık ordusunu ağır bir bozguna uğratarak yüzlerce Rus askerini ve topçu bataryalarını etkisiz hale getirmiştir. Kafkasya İmamlığı’nın en parlak taktik zekâlarından biri olarak tarihe geçen Şuayip Molla, Mart 1844’te vatan müdafaası yolunda şehit düşmüştür."
    ],
    "docs": [
      "lermontov-valerik-el-yazmasi-1840",
      "imam-samil-naib-isa-mektubu-1842",
      "meyer-dogu-kafkasya-samil-haritasi-1856"
    ]
  },
  {
    "slug": "isa-gendargeno",
    "name": "İsa Gendargeno",
    "born": "1795",
    "died": "1845",
    "title": "Büyük Çeçenistan Naibi",
    "era": "imamet",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/isa-gendargeno.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/isa-gendargeno.webp?v=4",
        "caption": "İsa Gendargeno (1795–1845)"
      }
    ],
    "summary": "1795 yılında Gendargen teypinde dünyaya gelen İsa Gendargeno, 1840 yılında Çeçen halkının İmam Şamil’e biat ederek Kafkasya İmamlığı bayrağı altında birleşmesinde başrol oynayan büyük Çeçen komutanıdır.",
    "bio": [
      "1795 yılında Gendargen teypinde dünyaya gelen İsa Gendargeno, 1840 yılında Çeçen halkının İmam Şamil’e biat ederek Kafkasya İmamlığı bayrağı altında birleşmesinde başrol oynayan büyük Çeçen komutanıdır.",
      "Büyük Çeçenistan Naibi olarak Valerik ve İtçkeri muharebelerinde ön saflarda çarpışmış; Temmuz 1845’te Kont Vorontsov’un 20 bin kişilik ordusunun imha edildiği ünlü Dargo Seferi’nde Çeçen birliklerine komuta etmiştir. Dargo zaferinin hemen ardından Temmuz 1845’te vatan topraklarını savunurken şehadet mertebesine ulaşan İsa Gendargeno, cesaretiyle kuşaklar boyu anılmıştır."
    ],
    "docs": [
      "imam-samil-naib-isa-mektubu-1842",
      "lermontov-valerik-el-yazmasi-1840",
      "lermontov-valerik-muharebesi-suluboya-1840"
    ]
  },
  {
    "slug": "ahmad-avturinski",
    "name": "Ahmad Avturinski",
    "born": "1824",
    "died": "1852",
    "title": "Çeçen direniş komutanı",
    "era": "imamet",
    "region": "Çeçenya",
    "birthPlace": "Avtury",
    "deathPlace": "Çeçenya",
    "center": "Avtury",
    "image": "/images/people/ahmad-avturinski.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ahmad-avturinski.webp?v=4",
        "caption": "Ahmad Avturinski (1824–1852)"
      }
    ],
    "summary": "1824 yılında Çeçenistan’ın Avtury köyünde doğan Ahmad Avturinski, genç yaşta gösterdiği olağanüstü yiğitlik sayesinde İmam Şamil’in seçkin süvari komutanları ve uç beyleri arasına katılmıştır.",
    "bio": [
      "1824 yılında Çeçenistan’ın Avtury köyünde doğan Ahmad Avturinski, genç yaşta gösterdiği olağanüstü yiğitlik sayesinde İmam Şamil’in seçkin süvari komutanları ve uç beyleri arasına katılmıştır.",
      "Büyük Çeçenistan’ın kalbi sayılan Avtury, Şali ve Germençuk hattında Çarlık kalelerine karşı düzenlenen yıldırım baskınlarına liderlik etmiş; Rus generallerinin korkulu rüyası haline gelmiştir. Henüz 28 yaşındayken, 1852 yılında Çarlık ordularıyla girilen çetin bir meydan muharebesinde en ön safta çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "dada-tsentoroyevski",
    "name": "Dada Tsentoroyevski",
    "born": "1800",
    "died": "1852",
    "title": "Kafkasya İmameti naibi ve komutan",
    "era": "imamet",
    "region": "Çeçenya",
    "birthPlace": "Tsentoroy",
    "deathPlace": "Çeçenya",
    "center": "Tsentoroy",
    "image": "/images/people/dada-tsentoroyevski.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/dada-tsentoroyevski.webp?v=4",
        "caption": "Dada Tsentoroyevski (1800–1852)"
      }
    ],
    "summary": "1800 yılında Çeçenistan’ın Tsentoroy köyünde dünyaya gelen Dada Tsentoroyevski, Kafkasya İmamlığı döneminde Doğu Çeçenistan ve İçkerya savunma hatlarının en sarsılmaz komutanlarından biri olmuştur.",
    "bio": [
      "1800 yılında Çeçenistan’ın Tsentoroy köyünde dünyaya gelen Dada Tsentoroyevski, Kafkasya İmamlığı döneminde Doğu Çeçenistan ve İçkerya savunma hatlarının en sarsılmaz komutanlarından biri olmuştur.",
      "Naib Şuayip Molla ve İmam Şamil’in saflarında Çarlık Rusyası’nın Çeçen köylerine yönelik imha seferlerine karşı yıllarca direniş örgütleyerek sivil halkın korunmasını sağlamıştır. 1852 yılında Çarlık kuvvetlerine karşı yürüttüğü amansız mücadele sırasında şehit düşerek adını Kafkasya hürriyet tarihine yazdırmıştır."
    ]
  },
  {
    "slug": "goytemir-auhovski",
    "name": "Goytemir Auhovski",
    "born": "1810",
    "died": "1853",
    "title": "Süvari Kuvvetleri Başkomutanı",
    "era": "imamet",
    "region": "Çeçenya",
    "birthPlace": "Auh",
    "deathPlace": "Çeçenya",
    "center": "Auh",
    "image": "/images/people/goytemir-auhovski.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/goytemir-auhovski.webp?v=4",
        "caption": "Goytemir Auhovski (1810–1853)"
      }
    ],
    "summary": "1810 yılında doğan ve Tsentoroy teypinden olan Goytemir Auhovski, İmam Şamil’in Auh Naibi ve Kafkasya İmamlığı Süvari Kuvvetleri Başkomutanı olarak görev yapmış efsanevi bir askeri liderdir.",
    "bio": [
      "1810 yılında doğan ve Tsentoroy teypinden olan Goytemir Auhovski, İmam Şamil’in Auh Naibi ve Kafkasya İmamlığı Süvari Kuvvetleri Başkomutanı olarak görev yapmış efsanevi bir askeri liderdir.",
      "Yamansu ve Yarıksı nehirleri arasında inşa ettirdiği ünlü ‘Goytemir Kapıları’ tahkimatıyla Çarlık ordularına geçit vermemiş; Kumuk düzlüğü ve Hasavyurt hattında düzenlediği yıldırım süvari akınlarıyla büyük zaferler kazanmıştır. İmam Şamil’in en güvendiği uç beylerinden biri olan Goytemir Auhovski, 1853 yılında Çarlık ordularına karşı cephede en ön safta çarpışırken şehadet mertebesine ulaşmıştır."
    ],
    "docs": [
      "imam-samil-nisanlari-arapca-yazitli",
      "imam-samil-kirmizi-dag-sancagi",
      "yurt-auh-cecenleri-frunze-istasyonu-donus-1957"
    ]
  },
  {
    "slug": "bokka-deyski",
    "name": "Bokka Deyski",
    "born": "1810",
    "died": "1858",
    "title": "Argun Vadisi Naibi",
    "era": "imamet",
    "region": "Çeçenya",
    "birthPlace": "Dey",
    "deathPlace": "Çeçenya",
    "center": "Dey, Çanti-Argun",
    "image": "/images/people/bokka-deyski.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/bokka-deyski.webp?v=4",
        "caption": "Bokka Deyski (1810–1858)"
      }
    ],
    "summary": "1810 yılında Çeçenistan’ın dağlık Dey köyünde dünyaya gelen Bokka Deyski, Kafkasya İmamlığı’nın en stratejik geçitlerinden biri olan Çanti-Argun ve Şatoy bölgesinin naibi olarak görev yapmıştır.",
    "bio": [
      "1810 yılında Çeçenistan’ın dağlık Dey köyünde dünyaya gelen Bokka Deyski, Kafkasya İmamlığı’nın en stratejik geçitlerinden biri olan Çanti-Argun ve Şatoy bölgesinin naibi olarak görev yapmıştır.",
      "Yıllarca Argun Kanyonu’nun sarp kayalıklarını Çarlık Rusyası’nın kolordularına karşı demir bir kalkan gibi savunmuş; Rus ordusunun dağlık Çeçenistan’ın kalbine ilerleyişini durdurmuştur. 1858 yılında Argun vadisindeki son büyük savunma muharebelerinde son nefesine kadar çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "batuko-satoyski",
    "name": "Batuko Şatoyski",
    "born": "1802",
    "died": "1859",
    "title": "Şatoy Naibi",
    "era": "imamet",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/batuko-satoyski.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/batuko-satoyski.webp?v=4",
        "caption": "Batuko Şatoyski (1802–1859)"
      }
    ],
    "summary": "1802 yılında doğan Batuko Şatoyski, dağlık Çeçenistan’ın merkezi olan Şatoy bölgesinin naibi, bilge devlet adamı ve Kafkasya İmamlığı’nın en tecrübeli komutanlarından biridir.",
    "bio": [
      "1802 yılında doğan Batuko Şatoyski, dağlık Çeçenistan’ın merkezi olan Şatoy bölgesinin naibi, bilge devlet adamı ve Kafkasya İmamlığı’nın en tecrübeli komutanlarından biridir.",
      "İmam Şamil’in devlet divanında Çeçen halkını temsil etmiş; yirmi yılı aşkın süre boyunca Güney Çeçenistan dağlarındaki savunma hatlarını ve kale tahkimatlarını bizzat yönetmiştir. Kafkas Savaşları’nın en çetin evresi olan 1859 yılında vatan topraklarını savunurken şehadet mertebesine ulaşmıştır."
    ],
    "docs": [
      "berje-cecenya-haritasi-1859",
      "saroy-kule-yerlesimi-19-yuzyil-fotografi"
    ]
  },
  {
    "slug": "baysangur-benoyski",
    "name": "Benoylu Baysungur",
    "born": "1794",
    "died": "1861",
    "title": "Benoy naibi, efsanevi Çeçen komutan",
    "era": "imamet",
    "region": "Çeçenya",
    "birthPlace": "Benoy",
    "deathPlace": "Hasavyurt",
    "center": "Benoy, Gunib",
    "image": "/images/people/baysangur-benoyski.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/baysangur-benoyski.webp?v=4",
        "caption": "Benoylu Baysungur (1794–1861)"
      }
    ],
    "docs": [
      "baysangur-idam-emri-kafkas-ordusu-1861",
      "imam-samil-nisanlari-arapca-yazitli",
      "samil-ve-cecen-dagistan-naibleri-portreleri"
    ],
    "summary": "Çatışmalarda bir kolunu, bir bacağını ve bir gözünü kaybetmesine rağmen atına bağlanarak cepheye atılan, boyun eğmezliğin Çeçen hafızasındaki simgesi.",
    "bio": [
      "Benoy teypinden gelen Baysangur, 1830’lardan itibaren Şeyh Şamil’in en güvenilir naiplerinden biri olarak Dargo (1845) ve Ahulgo çarpışmalarında en ön safta yer aldı.",
      "Ağustos 1859’da Gunib kuşatmasının son gününde teslimiyet kararını reddederek beraberindeki savaşçılarla kuşatmayı yarıp Çeçenya dağlarına döndü ve Benoy merkezli yeni bir direniş başlattı.",
      "1861 başlarında ağır kış şartlarında yaralı olarak esir düştü ve Mart 1861’de Hasavyurt’ta idam edildi. Halk destanlarında (illi) adı ölümsüzleşti."
    ],
    "related": [
      "tasav-haci"
    ]
  },
  {
    "slug": "talhig-salinski",
    "name": "Talhig Şalinski",
    "born": "1800",
    "died": "1861",
    "title": "Naip, topçu komutanı",
    "era": "imamet",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/talhig-salinski.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/talhig-salinski.webp?v=4",
        "caption": "Talhig Şalinski (1800–1861)"
      }
    ],
    "summary": "1800 yılında doğan Talhig Şalinski, İmam Şamil’in Büyük Çeçenistan ve Şali Naibi olarak yirmi yılı aşkın süre Kafkasya İmamlığı’nın en geniş cephesini savunmuş büyük komutandır.",
    "bio": [
      "1800 yılında doğan Talhig Şalinski, İmam Şamil’in Büyük Çeçenistan ve Şali Naibi olarak yirmi yılı aşkın süre Kafkasya İmamlığı’nın en geniş cephesini savunmuş büyük komutandır.",
      "Kafkasya İmamlığı’nda modern topçu birliklerinin kurulmasına öncülük etmiş; savaşlarda aldığı ağır yaralara rağmen Grozni ve Şali arasındaki Rus kalelerine karşı yüzlerce harekât yönetmiştir. Ömrünü Kafkasya’nın hürriyetine adayan Talhig Şalinski, 1861 yılında vatan mücadelesinin sönmeyen meşalesi olarak hayata gözlerini yummuştur."
    ],
    "docs": [
      "gagarin-sali-ovasi-orman-kesimi-1847",
      "imam-samil-nisanlari-arapca-yazitli",
      "samil-ve-cecen-dagistan-naibleri-portreleri"
    ]
  },
  {
    "slug": "soltamurad-benoyevski",
    "name": "Soltamurad Benoyevski",
    "born": "1807",
    "died": "1878",
    "title": "İmamet dönemi direniş önderi",
    "era": "imamet",
    "region": "Çeçenya",
    "birthPlace": "Benoy",
    "deathPlace": "Çeçenya",
    "center": "Benoy",
    "image": "/images/people/soltamurad-benoyevski.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/soltamurad-benoyevski.webp?v=4",
        "caption": "Soltamurad Benoyevski (1807–1878)"
      }
    ],
    "summary": "1807 yılında Benoy’da doğan Soltamurad Benoyevski, 1859 sonrasında Baysangur Benoyski ile birlikte Çeçenistan dağlarında direniş sancağını yeniden yükselten en önemli askeri önderlerden biridir.",
    "bio": [
      "1807 yılında Benoy’da doğan Soltamurad Benoyevski, 1859 sonrasında Baysangur Benoyski ile birlikte Çeçenistan dağlarında direniş sancağını yeniden yükselten en önemli askeri önderlerden biridir.",
      "1860–1861 Benoy ayaklanmasında ve 1877 Büyük Çeçen-Dağıstan Kıyamı’nda Alibek-Hacı Aldamov ve Uma Duyev ile omuz omuza çarpışarak Çarlık garnizonlarına ağır darbeler indirmiştir. 70 yaşını aşmış olmasına rağmen 1877–1878 kışında karlı Kafkas dağlarında Rus kuşatmasına teslim olmayarak son nefesine kadar çarpışmış ve şehit düşmüştür."
    ],
    "docs": [
      "baysangur-idam-emri-kafkas-ordusu-1861",
      "terskaya-oblast-etnografya-haritasi-1892"
    ]
  },
  {
    "slug": "uma-duyev",
    "name": "Uma Duyev",
    "born": "1809",
    "died": "1878",
    "title": "Kafkasya İmameti naibi ve komutan",
    "era": "imamet",
    "region": "Çeçenya",
    "birthPlace": "Zumsoy",
    "deathPlace": "Grozni",
    "center": "Zumsoy, Argun Vadisi",
    "image": "/images/people/uma-duyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/uma-duyev.webp?v=4",
        "caption": "Uma Duyev (1809–1878)"
      }
    ],
    "summary": "1809 yılında Argun vadisinin sarp Zumsoy bölgesinde doğan Uma Duyev, İmam Şamil’in Zumsoy Naibi olarak görev yapmış ve Şamil sonrasında da Baysangur ile birlikte direnişi sürdürmüştür.",
    "bio": [
      "1809 yılında Argun vadisinin sarp Zumsoy bölgesinde doğan Uma Duyev, İmam Şamil’in Zumsoy Naibi olarak görev yapmış ve Şamil sonrasında da Baysangur ile birlikte direnişi sürdürmüştür.",
      "Sürgünden döndükten sonra, 70 yaşına yaklaşmışken 1877 Büyük Çeçen Kıyamı’na katılarak Argun ve Şatoy dağlarındaki halk güçlerine yeniden komuta etmiştir. 9 Mart 1878 tarihinde Grozni’de oğlu Dadaş ve silah arkadaşlarıyla birlikte Çarlık mahkemesinin idam sehpasında boyun eğmeden şehadet mertebesine ulaşmıştır."
    ],
    "docs": [
      "zumsoy-epigrafik-tas-yaziti",
      "berje-cecenya-haritasi-1859",
      "samil-ve-cecen-dagistan-naibleri-portreleri"
    ]
  },
  {
    "slug": "alibek-haci",
    "name": "Alibek Hacı Aldamov",
    "born": "1850",
    "died": "1878",
    "title": "1877 Kafkas ayaklanmasının genç imamı",
    "era": "imparatorluk",
    "region": "Çeçenya",
    "birthPlace": "Simsir",
    "deathPlace": "Grozni",
    "center": "Simsir, Vedeno",
    "image": "/images/people/alibek-haci.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/alibek-haci.webp?v=4",
        "caption": "Alibek Hacı Aldamov (1850–1878)"
      }
    ],
    "docs": [
      "berje-cecenya-haritasi-1859",
      "terskaya-oblast-etnografya-haritasi-1892",
      "musa-kunduhov-1865-muhaceret-arsiv-portresi"
    ],
    "summary": "Henüz 27 yaşındayken 1877–1878 Osmanlı-Rus Harbi sırasında İçkeriya ormanlarında imam seçilerek Çeçenya ve Dağıstan’daki büyük kıyamı yöneten önder.",
    "bio": [
      "Simsir köyünde doğan Alibek Hacı, Nisan 1877’de Sayasan ve Vedeno ormanlarında toplanan halk temsilcileri tarafından imam ilan edildi.",
      "Kısa sürede 47 Çeçen köyü ve Dağıstan yaylalarına yayılan hareket, ağır topçu birliklerine karşı aylar boyunca direndi.",
      "Sivil köylerin yakılmasını ve halkın sürgün edilmesini durdurmak amacıyla komutanlarıyla birlikte teslim oldu; Mart 1878’de Grozni’de on bir silah arkadaşıyla birlikte idam edildi."
    ]
  },
  {
    "slug": "zelimhan-haracoyn",
    "name": "Zelimhan Guşmazukayev (Harachoyski)",
    "born": "1872",
    "died": "1913",
    "title": "Harachoylu efsanevi abrek",
    "era": "imparatorluk",
    "region": "Çeçenya",
    "birthPlace": "Harachoy",
    "deathPlace": "Şali yakınları",
    "center": "Harachoy, Assa ve Argun Vadileri",
    "image": "/images/people/zelimhan-haracoyn.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/zelimhan-haracoyn.webp?v=4",
        "caption": "Zelimhan Guşmazukayev (Harachoyski) (1872–1913)"
      }
    ],
    "docs": [
      "abrek-zelimhan-haracoylu-arsiv-fotografi-1913",
      "terskaya-oblast-etnografya-haritasi-1892",
      "george-kennan-cecenler-fotografi-1870"
    ],
    "summary": "Çarlık idaresinin keyfi cezalarına karşı on iki yıl boyunca sarp dağlardan meydan okuyan, yoksullara dağıttığı adaletle Kafkas folkloruna geçen abrek.",
    "bio": [
      "Vedeno yakınlarındaki Harachoy köyünde doğan Zelimhan, işlemediği bir suçtan ötürü ailesiyle birlikte haksızlığa uğrayınca Grozni hapishanesinden firar ederek dağlara çekildi.",
      "1901’den 1913’e kadar Çeçenya ve İnguşetya dağlarında binlerce kişilik cezalandırma müfrezelerini boşa çıkardı; Kızlar Bankası baskınından elde edilen paraları yoksul köylülere ve ağır vergi altındaki ailelere dağıttı.",
      "İnguş ve Çeçen köyleri onu ele vermektense ağır para cezalarına katlandı. Eylül 1913’te Şali yakınlarında tek başına kuşatıldığı çiftlikte sabaha kadar süren çatışmada hayatını kaybetti."
    ]
  },
  {
    "slug": "deni-arsanov",
    "name": "Şeyh Deni Arsanov",
    "born": "1851",
    "died": "1917",
    "title": "Nakşibendi Şeyhi ve Milli Önder",
    "era": "imparatorluk",
    "region": "Çeçenya",
    "birthPlace": "Zandak-Ara",
    "deathPlace": "Grozni",
    "center": "Nadtereçni, Çeçenya",
    "image": "/images/people/deni-arsanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/deni-arsanov.webp?v=4",
        "caption": "Şeyh Deni Arsanov (1851–1917)"
      }
    ],
    "summary": "1851 yılında Çeçenistan’ın Nadtereçni bölgesindeki Zandak-Ara köyünde, köklü Nohçi Enganoy taypına mensup bir ailede doğan Şeyh Deni Arsanov, Kuzey Kafkasya’nın en büyük Nakşibendi şeyhi ve manevi önderlerindendir.",
    "bio": [
      "1851 yılında Çeçenistan’ın Nadtereçni bölgesindeki Zandak-Ara köyünde, köklü Nohçi Enganoy taypına mensup bir ailede doğan Şeyh Deni Arsanov, Kuzey Kafkasya’nın en büyük Nakşibendi şeyhi ve manevi önderlerindendir.",
      "Çarlık Rusyası’nın baskılarına boyun eğmeyerek Çeçen ve İnguş halklarının dinî, millî ve toplumsal birliğini sağlamış; binlerce müridiyle Kafkasya dağlılarının hukukunu tavizsiz biçimde korumuştur. 1917 ihtilali sonrasında baş gösteren Rus Kazak saldırılarına karşı halkını korumak için gittiği Grozni’de, 27 Aralık 1917 tarihinde kurulan hain pusuda müritleriyle birlikte çatışarak şehit düşmüştür."
    ],
    "docs": [
      "kafkas-yerli-suvari-tugayi-subaylari-1914",
      "daglilar-cumhuriyeti-diplomatik-pasaport-1918",
      "tapa-cermoyev-resmi-mektubu-1918"
    ]
  },
  {
    "slug": "hamid-molla",
    "name": "Hamid-Molla Mustapayev",
    "born": "1897",
    "died": "1929",
    "title": "Sürgün ve direniş dönemi mücadelecisi",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hamid-molla.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hamid-molla.webp?v=4",
        "caption": "Hamid-Molla Mustapayev (1897–1929)"
      }
    ],
    "summary": "1897 yılında Çeçenistan’ın dağlık bölgesinde doğan İslam âlimi Hamid-Molla Mustapayev, Bolşevik rejiminin camileri kapatma, âlimleri tutuklama ve zorla kolektifleştirme politikalarına karşı halk direnişinin başına geçmiştir.",
    "bio": [
      "1897 yılında Çeçenistan’ın dağlık bölgesinde doğan İslam âlimi Hamid-Molla Mustapayev, Bolşevik rejiminin camileri kapatma, âlimleri tutuklama ve zorla kolektifleştirme politikalarına karşı halk direnişinin başına geçmiştir.",
      "1929 yılında Şali, Goity ve Benoy bölgelerinde başlayan büyük Çeçen ayaklanmasına liderlik ederek Kızıl Ordu ve OGPU tümenlerine karşı vatanını ve inancını savunmuştur. 18 Aralık 1929 tarihinde Sovyet birlikleriyle girilen çetin muharebede silah arkadaşlarıyla birlikte son mermisine kadar çarpışarak şehit düşmüştür."
    ],
    "docs": [
      "kuzey-kafkasya-emirligi-100-ruble-vedeno-1919",
      "daglilar-cumhuriyeti-kuban-dostluk-antlasmasi-1919"
    ]
  },
  {
    "slug": "sita-istamulov",
    "name": "Şita İstamulov",
    "born": "1887",
    "died": "1931",
    "title": "Çeçen direniş komutanı",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Şali",
    "deathPlace": "Çeçenya",
    "center": "Şali",
    "image": "/images/people/sita-istamulov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/sita-istamulov.webp?v=4",
        "caption": "Şita İstamulov (1887–1931)"
      }
    ],
    "summary": "1887 yılında Şali’de doğan Şita İstamulov, Kuzey Kafkasya Emirliği’nde Uzun Hacı’nın komutanlarından biri olarak görev yapmış ve 1929–1930 yıllarında Sovyet zulmüne karşı en büyük Çeçen kıyamını başlatmıştır.",
    "bio": [
      "1887 yılında Şali’de doğan Şita İstamulov, Kuzey Kafkasya Emirliği’nde Uzun Hacı’nın komutanlarından biri olarak görev yapmış ve 1929–1930 yıllarında Sovyet zulmüne karşı en büyük Çeçen kıyamını başlatmıştır.",
      "Şali’yi ele geçirip Kızıl Ordu’nun 28. Dağ Tümeni’ni geri püskürttükten sonra, Moskova yönetimine Çeçen halkının dinî ve millî özerkliğinin tanınmasını şart koşan tarihi ültimatomu göndermiştir. Sovyet yönetiminin barış ve af vaadiyle imzaladığı anlaşmaya rağmen, 1931 sonbaharında GPU tarafından kurulan hain pusuda tek başına çarpışarak şehadet mertebesine ulaşmıştır."
    ],
    "docs": [
      "kuzey-kafkasya-emirligi-100-ruble-vedeno-1919",
      "serlo-cecence-gazete-1926",
      "cecen-ingus-assc-idari-haritasi-1937"
    ]
  },
  {
    "slug": "mayrbek-seripov",
    "name": "Mayrbek Şeripov",
    "born": "1905",
    "died": "1942",
    "title": "Çeçen direniş komutanı",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Şatoy",
    "deathPlace": "Çeçenya",
    "center": "Şatoy",
    "image": "/images/people/mayrbek-seripov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/mayrbek-seripov.webp?v=4",
        "caption": "Mayrbek Şeripov (1905–1942)"
      }
    ],
    "summary": "1905 yılında Şatoy’da köklü bir Çeçen ailesinde doğan hukukçu Mayrbek Şeripov (efsanevi komutan Aslanbek Şeripov’un kardeşi), Stalin rejiminin Çeçen halkına yönelik NKVD terörüne karşı 1941’de dağlara çıkmıştır.",
    "bio": [
      "1905 yılında Şatoy’da köklü bir Çeçen ailesinde doğan hukukçu Mayrbek Şeripov (efsanevi komutan Aslanbek Şeripov’un kardeşi), Stalin rejiminin Çeçen halkına yönelik NKVD terörüne karşı 1941’de dağlara çıkmıştır.",
      "Hasan İsrailov ile güçlerini birleştirerek Çeçen-İnguş Milli Kurtuluş Hareketi’ni yönetmiş; Şatoy, İtum-Kale ve Himoy bölgelerinde Sovyet iktidarını devirerek dağlık Çeçenistan’ı özgürleştirmiştir. 7 Kasım 1942’de NKVD özel birliklerinin ağır kuşatmasında teslim olmayı reddederek son nefesine kadar çarpışmış ve şehit düşmüştür."
    ],
    "docs": [
      "serlo-cecence-gazete-1926",
      "mercimek-operasyonu-1944-sevk-haritasi"
    ]
  },
  {
    "slug": "hasan-israilov",
    "name": "Hasan İsrailov",
    "born": "1910",
    "died": "1944",
    "title": "Sürgün ve direniş dönemi mücadelecisi",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Naşha",
    "deathPlace": "Çeçenya",
    "center": "Galançoj",
    "image": "/images/people/hasan-israilov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hasan-israilov.webp?v=4",
        "caption": "Hasan İsrailov (1910–1944)"
      }
    ],
    "summary": "1910 yılında Çeçenistan’ın dağlık Galançoj bölgesindeki Naşha köyünde doğan şair, gazeteci ve hukukçu Hasan İsrailov, Sovyet rejiminin Kafkasya’daki zulmünü belgeledikten sonra Şubat 1940’ta Galançoj dağlarında büyük Çeçen direnişini başlatmıştır.",
    "bio": [
      "1910 yılında Çeçenistan’ın dağlık Galançoj bölgesindeki Naşha köyünde doğan şair, gazeteci ve hukukçu Hasan İsrailov, Sovyet rejiminin Kafkasya’daki zulmünü belgeledikten sonra Şubat 1940’ta Galançoj dağlarında büyük Çeçen direnişini başlatmıştır.",
      "Beş yıl boyunca Kafkas dağlarında Geçici Halk Devrimci Hükümeti’ni kurarak Sovyet ordularına ve NKVD tümenlerine karşı 5 binden fazla savaşçıyla bağımsızlık mücadelesi yürütmüştür. Şubat 1944 Sürgünü sonrasında da dağları terk etmeyen Hasan İsrailov, 25 Aralık 1944’te kuşatıldığı mağarada asla teslim olmayarak çatışmada şehit düşmüştür."
    ],
    "docs": [
      "cecen-ingus-assc-idari-haritasi-1937",
      "mercimek-operasyonu-1944-sevk-haritasi",
      "grozni-oblasti-1949-tasfiye-haritasi"
    ]
  },
  {
    "slug": "hasuha-magomadov",
    "name": "Hasuha Magomadov",
    "born": "1907",
    "died": "1976",
    "title": "Tarihin Son Abreği (37 Yıl)",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Gaten-Kale",
    "deathPlace": "Benoy",
    "center": "Gaten-Kale, Şatoy",
    "image": "/images/people/hasuha-magomadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hasuha-magomadov.webp?v=4",
        "caption": "Hasuha Magomadov (1907–1976)"
      }
    ],
    "summary": "1907 yılında Şatoy’un Gaten-Kale köyünde doğan Hasuha Magomadov, 1939 yılında dağlara çıkarak tam 37 yıl boyunca Sovyet İmparatorluğu’nun ordularına, NKVD ve KGB birliklerine tek başına meydan okuyan ‘Son Abrek’tir.",
    "bio": [
      "1907 yılında Şatoy’un Gaten-Kale köyünde doğan Hasuha Magomadov, 1939 yılında dağlara çıkarak tam 37 yıl boyunca Sovyet İmparatorluğu’nun ordularına, NKVD ve KGB birliklerine tek başına meydan okuyan ‘Son Abrek’tir.",
      "1940–1944 yıllarında Hasan İsrailov’un saflarında çarpışmış, 1944 Çeçen sürgünü sırasında ıssız kalan anavatan dağlarını 13 yıl boyunca terk etmeyerek işgalcilerden hesap sormuştur. 28 Mart 1976’da, 69 yaşında ağır hasta haldeyken Benoy dağlarında yüzlerce KGB ve Sovyet askerinin kuşatmasında tabancasıyla çarpışarak şehadet mertebesine ulaşmıştır."
    ],
    "docs": [
      "mercimek-operasyonu-1944-sevk-haritasi",
      "vedomosti-1957-cecen-ingus-assc-iade-kararnamesi",
      "gucan-kale-mimari-rolove-cizimi-1960"
    ]
  },
  {
    "slug": "hamzat-hankara",
    "name": "Hamzat Hankarov",
    "born": "1964",
    "died": "1994",
    "title": "Öncü Komutan",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hamzat-hankara.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hamzat-hankara.webp?v=4",
        "caption": "Hamzat Hankarov (1964–1994)"
      }
    ],
    "summary": "1964 yılında doğan Hamzat Hankarov, 1991 Çeçen Milli Devrimi’nin ilk günlerinden itibaren Cumhurbaşkanı Cevher Dudayev’in yanında yer alarak bağımsız İçkerya’nın güvenlik ve savunma teşkilatının kurulmasında öncülük etmiştir.",
    "bio": [
      "1964 yılında doğan Hamzat Hankarov, 1991 Çeçen Milli Devrimi’nin ilk günlerinden itibaren Cumhurbaşkanı Cevher Dudayev’in yanında yer alarak bağımsız İçkerya’nın güvenlik ve savunma teşkilatının kurulmasında öncülük etmiştir.",
      "1992–1993 yıllarında Abhazya Savaşı’nda Kafkas halklarının kardeşliği için Şamil Basayev ile omuz omuza çarpışmış ve cephede büyük kahramanlıklar göstermiştir. 1994 yılında Rus istihbaratı destekli işbirlikçi güçlerin Grozni’ye yönelik saldırılarında vatanını savunurken şehit düşerek Birinci Çeçen Savaşı öncesinin sembol şehitlerinden biri olmuştur."
    ]
  },
  {
    "slug": "umalat-dasayev",
    "name": "Umalat Daşayev",
    "born": "1956",
    "died": "1994",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Grozni",
    "center": "Çeçenya",
    "image": "/images/people/umalat-dasayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/umalat-dasayev.webp?v=4",
        "caption": "Umalat Daşayev (1956–1994)"
      }
    ],
    "summary": "1956 yılında doğan Umalat Daşayev, Birinci Çeçen-Rus Savaşı’nın başladığı Aralık 1994’te Çeçen İçkerya Cumhuriyeti’nin en seçkin özel muhafız ve taarruz birliklerine komuta etmiştir.",
    "bio": [
      "1956 yılında doğan Umalat Daşayev, Birinci Çeçen-Rus Savaşı’nın başladığı Aralık 1994’te Çeçen İçkerya Cumhuriyeti’nin en seçkin özel muhafız ve taarruz birliklerine komuta etmiştir.",
      "Grozni’nin kuzey ve doğu girişlerinde Rus zırhlı tugaylarının ilerleyişini durduran ilk savunma hatlarını kurmuş; askerlerinin en önünde çarpışarak büyük bir direniş örneği sergilemiştir. Yılbaşı gecesi gerçekleşecek büyük Grozni muharebesinden hemen önce, 28 Aralık 1994’te başkenti savunurken şehit düşmüş ve ‘Koman Siy’ (Milletin Onuru) nişanıyla taltif edilmiştir."
    ]
  },
  {
    "slug": "apti-tokayev",
    "name": "Apti Tokayev",
    "born": "1960",
    "died": "1995",
    "title": "Müfreze Komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Grozni",
    "center": "Çeçenya",
    "image": "/images/people/apti-tokayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/apti-tokayev.webp?v=4",
        "caption": "Apti Tokayev (1960–1995)"
      }
    ],
    "summary": "1960 yılında Çeçenistan’da doğan Apti Tokayev, Aralık 1994’te başlayan Rus işgaline karşı başkent Grozni savunmasının en kritik noktalarından birini üstlenen kahraman müfreze komutanıdır.",
    "bio": [
      "1960 yılında Çeçenistan’da doğan Apti Tokayev, Aralık 1994’te başlayan Rus işgaline karşı başkent Grozni savunmasının en kritik noktalarından birini üstlenen kahraman müfreze komutanıdır.",
      "31 Aralık 1994 – 1 Ocak 1995 gecesi Rus ordusunun ‘iki saatte Grozni’yi alma’ planını yerle bir eden tarihi şehir muharebesinde, zırhlı tugaylara karşı göğüs göğüse çarpışmıştır. 1 Ocak 1995 tarihinde Grozni sokaklarında Rus tanklarını imha ederken şehadet mertebesine ulaşarak Grozni zaferinin ölümsüz neferleri arasına katılmıştır."
    ]
  },
  {
    "slug": "cevher-dudayev",
    "name": "Cevher Dudayev",
    "born": "1944",
    "died": "1996",
    "title": "İçkeriya’nın 1. Cumhurbaşkanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Yalhoroy",
    "deathPlace": "Gekhi-Çu",
    "center": "Yalhoroy",
    "image": "/images/people/cevher-dudayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/cevher-dudayev.webp?v=4",
        "caption": "Cevher Dudayev (1944–1996)"
      }
    ],
    "summary": "15 Şubat 1944’te, Çeçen sürgününden yalnızca birkaç gün önce Yalhoj köyünde doğan ve çocukluğu Kazakistan bozkırlarında sürgünde geçen Cevher Dudayev, Sovyet Hava Kuvvetleri’nde stratejik bombardıman tümeni komutanlığına yükselmiş ilk Müslüman Çeçen tümgeneraldir.",
    "bio": [
      "15 Şubat 1944’te, Çeçen sürgününden yalnızca birkaç gün önce Yalhoj köyünde doğan ve çocukluğu Kazakistan bozkırlarında sürgünde geçen Cevher Dudayev, Sovyet Hava Kuvvetleri’nde stratejik bombardıman tümeni komutanlığına yükselmiş ilk Müslüman Çeçen tümgeneraldir.",
      "1990’da Estonya halkının bağımsızlık hareketini bastırma emrini reddederek vatanına dönmüş ve 1991’de Çeçen İçkerya Cumhuriyeti’nin ilk cumhurbaşkanı seçilerek bağımsızlığı ilan etmiştir. 1994–1996 Birinci Çeçen-Rus Savaşı’nda milletine başkomutanlık yapan Cevher Dudayev, 21 Nisan 1996’da Gekhi-Çu köyünde uydu telefonu sinyali üzerinden düzenlenen füze saldırısında şehit düşmüştür."
    ],
    "docs": [
      "vedomosti-1957-cecen-ingus-assc-iade-kararnamesi",
      "tsotsi-yurt-cecen-latin-sokak-tabelasi-1992",
      "cecen-cumhuriyeti-ickeriya-pasaportu-1994"
    ]
  },
  {
    "slug": "dokka-mahayev",
    "name": "Dokka Mahayev",
    "born": "1955",
    "died": "1996",
    "title": "Alay Komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Gekhi",
    "center": "Çeçenya",
    "image": "/images/people/dokka-mahayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/dokka-mahayev.webp?v=4",
        "caption": "Dokka Mahayev (1955–1996)"
      }
    ],
    "summary": "1955 yılında doğan Dokka Mahayev, Birinci Çeçen Savaşı boyunca Güneybatı Cephesi’nde Bamut, Orehovo ve Gekhi hattında Rus ordusuna karşı en çetin savunma muharebelerini yöneten alay komutanıdır.",
    "bio": [
      "1955 yılında doğan Dokka Mahayev, Birinci Çeçen Savaşı boyunca Güneybatı Cephesi’nde Bamut, Orehovo ve Gekhi hattında Rus ordusuna karşı en çetin savunma muharebelerini yöneten alay komutanıdır.",
      "Kuşatma altındaki köylerden sivillerin tahliyesini sağlamış ve kısıtlı imkânlarla Rus zırhlı birliklerine ağır kayıplar verdirerek İçkerya’nın batı kapısını korumuştur. 11 Temmuz 1996 tarihinde Gekhi köyü savunmasında Rus özel kuvvetleri ve zırhlı birlikleriyle girilen şiddetli çatışmada son mermisine kadar çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "nurdi-bajiyev",
    "name": "Nurdi Bajiyev",
    "born": "1964",
    "died": "1997",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/nurdi-bajiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/nurdi-bajiyev.webp?v=4",
        "caption": "Nurdi Bajiyev (1964–1997)"
      }
    ],
    "summary": "1964 yılında Çeçenistan’da doğan Nurdi Bajiyev, Nohçi bağımsızlık mücadelesinin ilk yıllarından itibaren ön saflarda yer almış ve Birinci Çeçen Savaşı’nda Grozni savunması ile güney cephesi operasyonlarında alay komutanı olarak çarpışmıştır.",
    "bio": [
      "1964 yılında Çeçenistan’da doğan Nurdi Bajiyev, Nohçi bağımsızlık mücadelesinin ilk yıllarından itibaren ön saflarda yer almış ve Birinci Çeçen Savaşı’nda Grozni savunması ile güney cephesi operasyonlarında alay komutanı olarak çarpışmıştır.",
      "Aslan Mashadov ve Şamil Basayev ile birlikte 1995–1996 yıllarındaki stratejik cephe harekâtlarının planlanmasında görev almış; üstün komutanlık vasfıyla Çeçen İçkerya Cumhuriyeti tuğgenerali rütbesine terfi ettirilmiştir. 1997 yılında vatan savunmasında aldığı ağır yaralar ve savaşın bıraktığı etkiler sonucu henüz 33 yaşında şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "leca-hultigov",
    "name": "Leça Hultıgov",
    "born": "1972",
    "died": "1998",
    "title": "Ulusal Güvenlik Servisi Başkanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Grozni",
    "center": "Çeçenya",
    "image": "/images/people/leca-hultigov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/leca-hultigov.webp?v=4",
        "caption": "Leça Hultıgov (1972–1998)"
      }
    ],
    "summary": "1972 yılında doğan Leça Hultıgov, Birinci Çeçen Savaşı’nda (1994–1996) gösterdiği üstün cesaret ve askeri başarılarla genç yaşta Çeçen İçkerya Cumhuriyeti tuğgenerali rütbesine yükselmiştir.",
    "bio": [
      "1972 yılında doğan Leça Hultıgov, Birinci Çeçen Savaşı’nda (1994–1996) gösterdiği üstün cesaret ve askeri başarılarla genç yaşta Çeçen İçkerya Cumhuriyeti tuğgenerali rütbesine yükselmiştir.",
      "Savaş sonrasında Cumhurbaşkanı Aslan Mashadov tarafından İçkerya Ulusal Güvenlik Servisi (NSB) Başkanlığına atanarak genç Çeçen devletinin iç güvenliğini, kamu düzenini ve bağımsızlığını korumak için mücadele etmiştir. 21 Haziran 1998 tarihinde başkent Grozni’de devlet düzenini koruma görevi sırasında yaşanan çatışmada henüz 26 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "ruslan-hayhoroyev",
    "name": "Ruslan Hayhoroyev",
    "born": "1963",
    "died": "1999",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Bamut",
    "deathPlace": "Çeçenya",
    "center": "Bamut",
    "image": "/images/people/ruslan-hayhoroyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ruslan-hayhoroyev.webp?v=4",
        "caption": "Ruslan Hayhoroyev (1963–1999)"
      }
    ],
    "summary": "1963 yılında Çeçenistan’ın Açhoy-Martan bölgesindeki tarihi Bamut köyünde dünyaya gelen Tuğgeneral Ruslan Hayhoroyev, 1995–1996 yıllarında dünya askeri tarihine geçen ‘Bamut Savunması’nın başkomutanıdır.",
    "bio": [
      "1963 yılında Çeçenistan’ın Açhoy-Martan bölgesindeki tarihi Bamut köyünde dünyaya gelen Tuğgeneral Ruslan Hayhoroyev, 1995–1996 yıllarında dünya askeri tarihine geçen ‘Bamut Savunması’nın başkomutanıdır.",
      "Bir yılı aşkın süre boyunca Rus ordusunun ağır topçu, uçak bombardımanı ve zırhlı taarruzlarına karşı Bamut’u düşürmeden savunmuş; yirmiyi aşkın büyük Rus taarruzunu geri püskürtmüştür. İkinci Çeçen Savaşı’nın başlangıcında aldığı ağır yaralar sonucu 8 Eylül 1999 tarihinde şehit düşen Ruslan Hayhoroyev’in adı, eğilmeyen Bamut kalesiyle özdeşleşmiştir."
    ]
  },
  {
    "slug": "huta-ahmadov",
    "name": "Huta Ahmadov",
    "born": "1972",
    "died": "1999",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Urus-Martan",
    "deathPlace": "Çeçenya",
    "center": "Urus-Martan",
    "image": "/images/people/huta-ahmadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/huta-ahmadov.webp?v=4",
        "caption": "Huta Ahmadov (1972–1999)"
      }
    ],
    "summary": "1972 yılında doğan Huta Ahmadov, Çeçen direnişine yedi şehit veren ünlü Nohçi Gendargenoy taypına mensup kahraman Ahmadov kardeşlerden biridir.",
    "bio": [
      "1972 yılında doğan Huta Ahmadov, Çeçen direnişine yedi şehit veren ünlü Nohçi Gendargenoy taypına mensup kahraman Ahmadov kardeşlerden biridir.",
      "Birinci Çeçen Savaşı’nda (1994–1996) ağabeyleri Ramzan, Rizvan ve Apti Ahmadov ile birlikte Urus-Martan ve Grozni cephelerinde çarpışmış; Ağustos 1996 Cihad Operasyonu’nda özel hücum birliklerine ‘Emir Abdullah’ adıyla komuta etmiştir. Eylül 1999’da İkinci Çeçen Savaşı’nın ilk cephe muharebelerinde Rus ordusuna karşı en ön safta savaşırken 27 yaşında şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "magomed-yutayev",
    "name": "Magomed Yutayev (Malış)",
    "born": "1980",
    "died": "1999",
    "title": "Malış (Genç Direniş Sembolü)",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Şalaji",
    "deathPlace": "Çeçenya",
    "center": "Şalaji, Urus-Martan",
    "image": "/images/people/magomed-yutayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/magomed-yutayev.webp?v=4",
        "caption": "Magomed Yutayev (Malış) (1980–1999)"
      }
    ],
    "summary": "1980 yılında Çeçenistan’ın Urus-Martan bölgesindeki Şalaji köyünde doğan Magomed Yutayev, henüz 14 yaşındayken Rus işgaline karşı Çeçen direniş saflarına katılmış ve cephede ‘Malış’ (Küçük Savaşçı) lakabıyla tanınmıştır.",
    "bio": [
      "1980 yılında Çeçenistan’ın Urus-Martan bölgesindeki Şalaji köyünde doğan Magomed Yutayev, henüz 14 yaşındayken Rus işgaline karşı Çeçen direniş saflarına katılmış ve cephede ‘Malış’ (Küçük Savaşçı) lakabıyla tanınmıştır.",
      "Birinci Çeçen Savaşı’nda (1994–1996) Budyonnovsk harekâtında ve 1996 Grozni kurtuluş muharebelerinde en ön saflarda çarpışmış; genç yaşına rağmen olgun bakışları ve cesaretiyle direnişin sembol simalarından biri olmuştur. 1999 yılında İkinci Çeçen Savaşı’nın başlamasıyla yeniden cepheye koşan Magomed Yutayev, Rus güçleriyle girilen çatışmada henüz 19 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "isa-astamirov",
    "name": "İsa Astamirov",
    "born": "1952",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Grozni",
    "center": "Çeçenya",
    "image": "/images/people/isa-astamirov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/isa-astamirov.webp?v=4",
        "caption": "İsa Astamirov (1952–2000)"
      }
    ],
    "summary": "1952 yılında doğan Tuğgeneral İsa Astamirov, hem Birinci hem de İkinci Çeçen Savaşı’nda başkent Grozni’nin en zorlu savunma sektörlerine komuta eden tecrübeli bir kurmay ve saha komutanıdır.",
    "bio": [
      "1952 yılında doğan Tuğgeneral İsa Astamirov, hem Birinci hem de İkinci Çeçen Savaşı’nda başkent Grozni’nin en zorlu savunma sektörlerine komuta eden tecrübeli bir kurmay ve saha komutanıdır.",
      "1999–2000 kışında yüz bin kişilik Rus ordusunun Grozni’yi kuşattığı günlerde, Staropromıslovski ve Minutka hatlarında haftalarca süren göğüs göğüse şehir muharebelerini yönetmiştir. 24 Ocak 2000 tarihinde kuşatma altındaki Grozni’de mevzilerini terk etmeyerek son nefesine kadar çarpışmış ve şehit düşmüştür."
    ]
  },
  {
    "slug": "leca-dudayev",
    "name": "Leça Dudayev",
    "born": "1961",
    "died": "2000",
    "title": "Grozni Belediye Başkanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Grozni",
    "deathPlace": "Alhan-Kala",
    "center": "Grozni",
    "image": "/images/people/leca-dudayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/leca-dudayev.webp?v=4",
        "caption": "Leça Dudayev (1961–2000)"
      }
    ],
    "summary": "1961 yılında Grozni’de doğan ve Şehit Cumhurbaşkanı Cevher Dudayev’in yeğeni olan Albay Leça Dudayev, Birinci Çeçen Savaşı’nda gösterdiği kahramanlıkların ardından başkent Grozni Belediye Başkanlığı görevini üstlenmiştir.",
    "bio": [
      "1961 yılında Grozni’de doğan ve Şehit Cumhurbaşkanı Cevher Dudayev’in yeğeni olan Albay Leça Dudayev, Birinci Çeçen Savaşı’nda gösterdiği kahramanlıkların ardından başkent Grozni Belediye Başkanlığı görevini üstlenmiştir.",
      "1999–2000 kışında ağır Rus bombardımanı altındaki Grozni’den bir gün bile ayrılmayarak hem şehrin savunmasını hem de sivillerin korunmasını yönetmiştir. 1 Şubat 2000 gecesi Grozni kuşatmasını yarma harekâtı sırasında Alhan-Kala mayın tarlalarında silah arkadaşlarına güvenli geçiş yolu açarken en önde yürüyerek şehit düşmüştür."
    ]
  },
  {
    "slug": "aslambek-ismayilov",
    "name": "Aslambek İsmayilov",
    "born": "1962",
    "died": "2000",
    "title": "Grozni Savunması Başkomutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Alhan-Kala",
    "center": "Çeçenya",
    "image": "/images/people/aslambek-ismayilov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslambek-ismayilov.webp?v=4",
        "caption": "Aslambek İsmayilov (1962–2000)"
      }
    ],
    "summary": "1962 yılında doğan Tuğgeneral Aslambek İsmayilov (‘Küçük Aslambek’), Ağustos 1996’da Grozni’nin Rus işgalinden kurtarıldığı efsanevi ‘Cihad Operasyonu’nun askeri planlayıcılarından ve saha komutanlarından biridir.",
    "bio": [
      "1962 yılında doğan Tuğgeneral Aslambek İsmayilov (‘Küçük Aslambek’), Ağustos 1996’da Grozni’nin Rus işgalinden kurtarıldığı efsanevi ‘Cihad Operasyonu’nun askeri planlayıcılarından ve saha komutanlarından biridir.",
      "Eylül 1999’da başlayan İkinci Çeçen Savaşı’nda Cumhurbaşkanı Aslan Mashadov tarafından başkent Grozni Savunma Karargâhı Komutanlığı’na atanarak aylarca Rus ordusunu şehir kapılarında durdurmuştur. 1 Şubat 2000’de Grozni’den çıkış harekâtı sırasında Alhan-Kala geçişinde askerlerinin hayatını kurtarmak için mayınlı araziye en önde girerek şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "hunkarpasa-israpilov",
    "name": "Hünkarpaşa İsrapilov",
    "born": "1967",
    "died": "2000",
    "title": "Güneydoğu Cephesi Komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Auh",
    "deathPlace": "Alhan-Kala",
    "center": "Auh",
    "image": "/images/people/hunkarpasa-israpilov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hunkarpasa-israpilov.webp?v=4",
        "caption": "Hünkarpaşa İsrapilov (1967–2000)"
      }
    ],
    "summary": "26 Kasım 1967’de tarihi Auh bölgesinde dünyaya gelen Tuğgeneral Hünkarpaşa İsrapilov, Birinci Çeçen-Rus Savaşı’nda Güneydoğu Cephesi Komutanı ve Kizlyar-Pervomayskoye harekâtının sarsılmaz lideri olarak destan yazmıştır.",
    "bio": [
      "26 Kasım 1967’de tarihi Auh bölgesinde dünyaya gelen Tuğgeneral Hünkarpaşa İsrapilov, Birinci Çeçen-Rus Savaşı’nda Güneydoğu Cephesi Komutanı ve Kizlyar-Pervomayskoye harekâtının sarsılmaz lideri olarak destan yazmıştır.",
      "Üstün cesareti sebebiyle İçkerya’nın en yüksek devlet nişanı olan ‘Koman Siy’ ile ödüllendirilmiş; 1999–2000 kışında Grozni savunmasının en çetin doğu hatlarına komuta etmiştir. 1 Şubat 2000’de Alhan-Kala’da birliklerine geçiş yolu açarken Leça Dudayev ve Aslambek İsmayilov ile birlikte en önde savaşarak şehit düşmüştür."
    ]
  },
  {
    "slug": "apti-ahmadov",
    "name": "Apti Ahmadov",
    "born": "1961",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Urus-Martan",
    "deathPlace": "Şatoy",
    "center": "Urus-Martan",
    "image": "/images/people/apti-ahmadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/apti-ahmadov.webp?v=4",
        "caption": "Apti Ahmadov (1961–2000)"
      }
    ],
    "summary": "1961 yılında Urus-Martan’da doğan Apti Ahmadov, Çeçen direnişinin sembol ailesi Gendargenoy Ahmadov kardeşlerin büyüklerinden ve en tecrübeli alay komutanlarından biridir.",
    "bio": [
      "1961 yılında Urus-Martan’da doğan Apti Ahmadov, Çeçen direnişinin sembol ailesi Gendargenoy Ahmadov kardeşlerin büyüklerinden ve en tecrübeli alay komutanlarından biridir.",
      "Birinci Çeçen Savaşı’nda Bamut, Urus-Martan ve Grozni muharebelerinde Rus zırhlı birliklerine karşı üstün başarılar kazanmış; İkinci Çeçen Savaşı’nda Grozni’den çekilen birliklerin dağlık Şatoy hattında yeniden tertiplenmesini sağlamıştır. Şubat 2000 sonunda Şatoy ve Argun vadisi savunmasında Rus hava ve kara kuşatmasına karşı son mermisine kadar çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "taus-bagurayev",
    "name": "Taus Bagurayev",
    "born": "1964",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Saadi-Kotar",
    "center": "Çeçenya",
    "image": "/images/people/taus-bagurayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/taus-bagurayev.webp?v=4",
        "caption": "Taus Bagurayev (1964–2000)"
      }
    ],
    "summary": "1964 yılında doğan Tuğgeneral Taus Bagurayev, Birinci Çeçen Savaşı’nda Güneybatı Cephesi’nde gösterdiği üstün yararlılıklarla Çeçen Silahlı Kuvvetleri’nin önde gelen komutanları arasında yer almıştır.",
    "bio": [
      "1964 yılında doğan Tuğgeneral Taus Bagurayev, Birinci Çeçen Savaşı’nda Güneybatı Cephesi’nde gösterdiği üstün yararlılıklarla Çeçen Silahlı Kuvvetleri’nin önde gelen komutanları arasında yer almıştır.",
      "İkinci Çeçen Savaşı’nın en kanlı muharebelerinden biri olan Mart 2000 Komsomolskoye (Saadi-Kotar) savunmasında Rus ordusunun ağır kuşatmasına karşı haftalarca direnmiştir. Mart 2000’de Komsomolskoye’de silah arkadaşlarını kuşatmadan çıkarmak için artçı birlik olarak çarpışırken şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "abusupyan-movsayev",
    "name": "Abusupyan Movsayev",
    "born": "1959",
    "died": "2000",
    "title": "Devlet İstihbarat Başkanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/abusupyan-movsayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/abusupyan-movsayev.webp?v=4",
        "caption": "Abusupyan Movsayev (1959–2000)"
      }
    ],
    "summary": "1959 yılında doğan Tuğgeneral Abusupyan Movsayev, Cevher Dudayev ve Aslan Mashadov dönemlerinde Çeçen İçkerya Cumhuriyeti Devlet Güvenlik Dairesi Başkanlığı ve Emniyet Genel Müdürlüğü görevlerini yürütmüştür.",
    "bio": [
      "1959 yılında doğan Tuğgeneral Abusupyan Movsayev, Cevher Dudayev ve Aslan Mashadov dönemlerinde Çeçen İçkerya Cumhuriyeti Devlet Güvenlik Dairesi Başkanlığı ve Emniyet Genel Müdürlüğü görevlerini yürütmüştür.",
      "Şamil Basayev’in en yakın dava arkadaşlarından biri olarak Abhazya Savaşı’nda ve Birinci Çeçen Savaşı’nın tüm stratejik cephelerinde kritik istihbarat ve saha operasyonlarını yönetmiştir. 23 Mayıs 2000 tarihinde Çeçenistan’ın dağlık bölgesinde Rus özel kuvvetlerinin pususunda son mermisine kadar çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "ruslan-alihaciyev",
    "name": "Ruslan Alihaciyev",
    "born": "1961",
    "died": "2000",
    "title": "İçkeriya Parlamentosu 4. Başkanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Şali",
    "deathPlace": "Moskova",
    "center": "Şali",
    "image": "/images/people/ruslan-alihaciyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ruslan-alihaciyev.webp?v=4",
        "caption": "Ruslan Alihaciyev (1961–2000)"
      }
    ],
    "summary": "1961 yılında Şali şehrinde doğan Tuğgeneral Ruslan Alihaciyev, Birinci Çeçen Savaşı’nda (1994–1996) Şali Alayı ve Güney Cephesi Komutanı olarak kazandığı zaferlerle ‘Koman Siy’ nişanıyla taltif edilmiştir.",
    "bio": [
      "1961 yılında Şali şehrinde doğan Tuğgeneral Ruslan Alihaciyev, Birinci Çeçen Savaşı’nda (1994–1996) Şali Alayı ve Güney Cephesi Komutanı olarak kazandığı zaferlerle ‘Koman Siy’ nişanıyla taltif edilmiştir.",
      "1997–2000 yılları arasında Çeçen İçkerya Cumhuriyeti Parlamentosu’nun 4. Başkanı olarak görev yapmış; hem cephede hem de diplomaside Çeçen milletinin meşru iradesini temsil etmiştir. Mayıs 2000’de Şali’deki evinden Rus güçlerince kaçırılan Ruslan Alihaciyev, Moskova’daki Lefortovo zindanında ağır işkenceler altında tek bir taviz dahi vermeden şehit düşmüştür."
    ]
  },
  {
    "slug": "dalhan-hojayev",
    "name": "Dalhan Hojayev",
    "born": "1961",
    "died": "2000",
    "title": "Çeçen tarihçi ve direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Grozni",
    "deathPlace": "Valerik",
    "center": "Grozni",
    "image": "/images/people/dalhan-hojayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/dalhan-hojayev.webp?v=4",
        "caption": "Dalhan Hojayev (1961–2000)"
      }
    ],
    "summary": "18 Nisan 1961’de Grozni’de doğan Dalhan Hojayev, Çeçen Devlet Üniversitesi Tarih Bölümü mezunu bir tarihçi ve müze araştırmacısı olarak 19. yüzyıl Kafkas Savaşları ve Çeçen naibleri üzerine en kapsamlı arşiv eserlerini kaleme almıştır.",
    "bio": [
      "18 Nisan 1961’de Grozni’de doğan Dalhan Hojayev, Çeçen Devlet Üniversitesi Tarih Bölümü mezunu bir tarihçi ve müze araştırmacısı olarak 19. yüzyıl Kafkas Savaşları ve Çeçen naibleri üzerine en kapsamlı arşiv eserlerini kaleme almıştır.",
      "Rus işgali başladığında kaleminin yanına silahını da alarak Ruslan Gelayev’in ‘Borz’ (Kurt) Özel Kuvvetler Alayı’nda kurmay komutan olmuş, Devlet Savunma Konseyi Sekreterliği ve tuğgenerallik görevlerini üstlenmiştir. 26 Temmuz 2000 tarihinde Valerik köyünde Rus özel kuvvetlerinin saldırısında şehit düşen Dalhan Hojayev, Çeçen direnişinin hem hafızası hem de kahraman komutanı olarak tarihe geçmiştir."
    ]
  },
  {
    "slug": "ramzan-ahmadov",
    "name": "Ramzan Ahmadov",
    "born": "1970",
    "died": "2001",
    "title": "Urus-Martan ve Grozni Cephesi Komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Kazakistan",
    "deathPlace": "Starye Atagi",
    "center": "Kazakistan",
    "image": "/images/people/ramzan-ahmadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ramzan-ahmadov.webp?v=4",
        "caption": "Ramzan Ahmadov (1970–2001)"
      }
    ],
    "summary": "4 Şubat 1970’te doğan Tuğgeneral Ramzan Ahmadov, Abhazya ve Birinci Çeçen Savaşı’ndan itibaren gösterdiği üstün cesaretle İçkerya Silahlı Kuvvetleri’nin en genç ve en atılgan generallerinden biri olmuştur.",
    "bio": [
      "4 Şubat 1970’te doğan Tuğgeneral Ramzan Ahmadov, Abhazya ve Birinci Çeçen Savaşı’ndan itibaren gösterdiği üstün cesaretle İçkerya Silahlı Kuvvetleri’nin en genç ve en atılgan generallerinden biri olmuştur.",
      "İkinci Çeçen Savaşı’nda Urus-Martan, Argun ve Batı Grozni cephelerine komuta etmiş; Rus zırhlı konvoylarına karşı düzenlediği yıldırım baskınlarla işgal güçlerine ağır kayıplar verdirmiştir. Şubat 2001’de Grozni yakınlarındaki Starye Atagi geçişinde Rus özel kuvvetlerinin pususunda silah arkadaşlarını koruyarak son mermisine kadar çarpışmış ve şehit düşmüştür."
    ]
  },
  {
    "slug": "arbi-barayev",
    "name": "Arbi Barayev",
    "born": "1973",
    "died": "2001",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Alhan-Kala",
    "deathPlace": "Alhan-Kala",
    "center": "Alhan-Kala",
    "image": "/images/people/arbi-barayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/arbi-barayev.webp?v=4",
        "caption": "Arbi Barayev (1973–2001)"
      }
    ],
    "summary": "27 Mayıs 1973’te Alhan-Kala’da doğan Arbi Barayev, Birinci Çeçen Savaşı sırasında Sultan Gelishanov ve Hünkarpaşa İsrapilov’un saflarında çarpışmış, ardından Özel Amaçlı İslam Alayı’nı (İPON) kurarak tuğgeneral rütbesine yükselmiştir.",
    "bio": [
      "27 Mayıs 1973’te Alhan-Kala’da doğan Arbi Barayev, Birinci Çeçen Savaşı sırasında Sultan Gelishanov ve Hünkarpaşa İsrapilov’un saflarında çarpışmış, ardından Özel Amaçlı İslam Alayı’nı (İPON) kurarak tuğgeneral rütbesine yükselmiştir.",
      "İkinci Çeçen Savaşı’nda Grozni-Urus-Martan otoyolu ve Alhan-Kala hattında Rus askeri konvoylarına ve karargâhlarına yönelik çok sayıda saha operasyonunu yönetmiştir. 23 Haziran 2001 tarihinde doğduğu köy olan Alhan-Kala’da günler süren ağır Rus kuşatmasında teslim olmayı reddederek çatışmada şehit düşmüştür."
    ]
  },
  {
    "slug": "magomed-tsagarayev",
    "name": "Magomed Tsagarayev",
    "born": "1975",
    "died": "2001",
    "title": "Saha Komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/magomed-tsagarayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/magomed-tsagarayev.webp?v=4",
        "caption": "Magomed Tsagarayev (1975–2001)"
      }
    ],
    "summary": "1975 yılında Çeçenistan’da doğan Magomed Tsagarayev, genç yaşta Birinci Çeçen Savaşı’na katılarak cesareti ve askeri disipliniyle kısa sürede müfreze komutanlığına yükselmiştir.",
    "bio": [
      "1975 yılında Çeçenistan’da doğan Magomed Tsagarayev, genç yaşta Birinci Çeçen Savaşı’na katılarak cesareti ve askeri disipliniyle kısa sürede müfreze komutanlığına yükselmiştir.",
      "İkinci Çeçen Savaşı’nda Urus-Martan, Grozni ve Alhan-Kala sektörlerinde Ramzan Ahmadov ve Arbi Barayev ile birlikte Rus işgal kuvvetlerine karşı en kritik şehir ve saha operasyonlarını yönetmiştir. Temmuz 2001’de Çeçenistan’da Rus özel kuvvetleriyle girilen silahlı çatışmada 26 yaşında şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "adam-umalatov",
    "name": "Adam Umalatov (Aba)",
    "born": "1975",
    "died": "2001",
    "title": "Aba",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/adam-umalatov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/adam-umalatov.webp?v=4",
        "caption": "Adam Umalatov (Aba) (1975–2001)"
      }
    ],
    "summary": "1975 yılında doğan ve cephede ‘Aba’ lakabıyla tanınan Adam Umalatov, 1994 yılında başlayan Birinci Çeçen Savaşı’ndan itibaren vatan savunmasının en ön saflarında yer almıştır.",
    "bio": [
      "1975 yılında doğan ve cephede ‘Aba’ lakabıyla tanınan Adam Umalatov, 1994 yılında başlayan Birinci Çeçen Savaşı’ndan itibaren vatan savunmasının en ön saflarında yer almıştır.",
      "1996 Grozni kurtuluş harekâtında ve İkinci Çeçen Savaşı’nın Argun, Şali ve Germençuk muharebelerinde özel taarruz gruplarına komuta ederek Rus zırhlı birliklerine ağır darbeler vurmuştur. Kasım 2001’de Rus işgal güçlerinin kuşatmasında son mermisine kadar çarpışarak 26 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "emir-hattab",
    "name": "Emir Hattab",
    "born": "1969",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/emir-hattab.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/emir-hattab.webp?v=4",
        "caption": "Emir Hattab (1969–2002)"
      }
    ],
    "summary": "1969 yılında doğan ve genç yaşta İslam coğrafyasındaki direniş saflarına katılan Emir Hattab, 1995 kışında Çeçenistan’a gelerek hayatının sonuna kadar Kafkasya’nın hürriyet mücadelesine omuz vermiştir.",
    "bio": [
      "1969 yılında doğan ve genç yaşta İslam coğrafyasındaki direniş saflarına katılan Emir Hattab, 1995 kışında Çeçenistan’a gelerek hayatının sonuna kadar Kafkasya’nın hürriyet mücadelesine omuz vermiştir.",
      "16 Nisan 1996’da Şatoy yakınlarındaki Yaryşmardy (Şatoy) pususunda Rus 245. Motorize Alayı’nı tamamen imha ederek Birinci Çeçen Savaşı’nın kaderini değiştirmiş; Cumhurbaşkanı Cevher Dudayev ve Aslan Mashadov tarafından ‘Koman Siy’ (Milletin Onuru) nişanıyla ödüllendirilmiştir. Açık cephede kendisini yenemeyen Rus istihbaratının zehirli bir mektupla düzenlediği suikast sonucu 20 Mart 2002’de 33 yaşında şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "aydamir-abalayev",
    "name": "Aydamir Abalayev",
    "born": "1964",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aydamir-abalayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aydamir-abalayev.webp?v=4",
        "caption": "Aydamir Abalayev (1964–2002)"
      }
    ],
    "summary": "1964 yılında doğan Tuğgeneral Aydamir Abalayev, Birinci ve İkinci Çeçen Savaşları boyunca Doğu Cephesi’nde Nojay-Yurt ve Gudermes dağlık sektörlerinin en dirayetli komutanlarından biri olmuştur.",
    "bio": [
      "1964 yılında doğan Tuğgeneral Aydamir Abalayev, Birinci ve İkinci Çeçen Savaşları boyunca Doğu Cephesi’nde Nojay-Yurt ve Gudermes dağlık sektörlerinin en dirayetli komutanlarından biri olmuştur.",
      "Cumhurbaşkanı Aslan Mashadov’a bağlı düzenli İçkerya Silahlı Kuvvetleri bünyesinde doğu sınır hattındaki savunma ve gerilla harekâtlarını yıllarca başarıyla yönetmiştir. 1 Mayıs 2002 tarihinde Çeçenistan’ın doğu bölgesinde Rus kuvvetleriyle girilen şiddetli çatışmada şehit düşmüştür."
    ]
  },
  {
    "slug": "rizvan-ahmadov",
    "name": "Rizvan Ahmadov",
    "born": "1957",
    "died": "2002",
    "title": "Merkez ve Grozni Cephesi Komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Kazakistan",
    "deathPlace": "Mesker-Yurt",
    "center": "Kazakistan",
    "image": "/images/people/rizvan-ahmadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/rizvan-ahmadov.webp?v=4",
        "caption": "Rizvan Ahmadov (1957–2002)"
      }
    ],
    "summary": "6 Eylül 1957’de Kazakistan sürgününde doğan Rizvan Ahmadov, vatanı için yedi oğlunu şehit veren Gendargenoy Ahmadov ailesinin ağabeyi ve en tecrübeli saha komutanlarından biridir.",
    "bio": [
      "6 Eylül 1957’de Kazakistan sürgününde doğan Rizvan Ahmadov, vatanı için yedi oğlunu şehit veren Gendargenoy Ahmadov ailesinin ağabeyi ve en tecrübeli saha komutanlarından biridir.",
      "Birinci Çeçen Savaşı’nda Grozni, Bamut ve Urus-Martan muharebelerinde ağır yaralar almasına rağmen cepheden ayrılmamış; 2001’de kardeşi Ramzan Ahmadov’un şehadetinin ardından Merkez ve Grozni Cephesi Komutanlığını devralmıştır. 27 Haziran 2002 tarihinde Grozni’nin Mesker-Yurt bölgesinde Rus özel kuvvetleriyle girilen çatışmada şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "huseyin-isabayev",
    "name": "Hüseyin İsabayev",
    "born": "1960",
    "died": "2002",
    "title": "Emir Abdullah",
    "era": "yakin",
    "region": "Çeçenya – Pankisi",
    "birthPlace": "Çeçenya",
    "deathPlace": "İtum-Kale",
    "center": "Çeçenya",
    "image": "/images/people/huseyin-isabayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/huseyin-isabayev.webp?v=4",
        "caption": "Hüseyin İsabayev (1960–2002)"
      }
    ],
    "summary": "1960 yılında doğan Hüseyin İsabayev, 1992 Abhazya Savaşı’ndan itibaren Şamil Basayev’in en yakın silah arkadaşlarından biri olarak Çeçen bağımsızlık mücadelesinin çekirdek kadrosunda yer almıştır.",
    "bio": [
      "1960 yılında doğan Hüseyin İsabayev, 1992 Abhazya Savaşı’ndan itibaren Şamil Basayev’in en yakın silah arkadaşlarından biri olarak Çeçen bağımsızlık mücadelesinin çekirdek kadrosunda yer almıştır.",
      "Birinci Çeçen Savaşı’nda Vedeno taburunda ve Budyonnovsk harekâtında çarpışmış; İkinci Çeçen Savaşı’nda ise Güney Çeçenistan dağlarında ikmal ve savunma hatlarını yönetmiştir. Temmuz 2002’de İtum-Kale ve Gürcistan sınır hattındaki dağlık geçitlerde Rus hava indirme birlikleriyle girilen çatışmada şehit düşmüştür."
    ]
  },
  {
    "slug": "turpal-ali-atgeriyev",
    "name": "Turpal-Ali Atgeriyev",
    "born": "1969",
    "died": "2002",
    "title": "Başbakan Yardımcısı ve Milli Güvenlik Bakanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Alleroy",
    "deathPlace": "Yekaterinburg",
    "center": "Alleroy",
    "image": "/images/people/turpal-ali-atgeriyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/turpal-ali-atgeriyev.webp?v=4",
        "caption": "Turpal-Ali Atgeriyev (1969–2002)"
      }
    ],
    "summary": "8 Mayıs 1969’da Alleroy köyünde dünyaya gelen ve hukuk-tarih eğitimi alan Turpal-Ali Atgeriyev, Birinci Çeçen-Rus Savaşı’nda Novogroznenski Alayı ve Cephe Komutanı olarak büyük zaferler kazanmıştır.",
    "bio": [
      "8 Mayıs 1969’da Alleroy köyünde dünyaya gelen ve hukuk-tarih eğitimi alan Turpal-Ali Atgeriyev, Birinci Çeçen-Rus Savaşı’nda Novogroznenski Alayı ve Cephe Komutanı olarak büyük zaferler kazanmıştır.",
      "Savaş sonrasında Cumhurbaşkanı Aslan Mashadov hükümetinde Çeçen İçkerya Cumhuriyeti Başbakan Yardımcılığı ve Milli Güvenlik Bakanlığı görevlerini başarıyla yürütmüştür. İkinci savaşta esir düşmesine rağmen Rus mahkemelerinde davasından asla taviz vermeyen Turpal-Ali Atgeriyev, 2002 yılında Yekaterinburg cezaevinde ağır işkenceler altında boyun eğmeden şehit düşmüştür."
    ]
  },
  {
    "slug": "aslambek-abdulhaciyev",
    "name": "Aslambek Abdulhaciyev",
    "born": "1962",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Şali",
    "center": "Çeçenya",
    "image": "/images/people/aslambek-abdulhaciyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslambek-abdulhaciyev.webp?v=4",
        "caption": "Aslambek Abdulhaciyev (1962–2002)"
      }
    ],
    "summary": "12 Nisan 1962’de doğan ve devasa fiziği ile korkusuzluğu sebebiyle ‘Büyük Aslambek’ olarak tanınan Tuğgeneral Aslambek Abdulhaciyev, Abhazya Savaşı ve Birinci Çeçen Savaşı’nda Şamil Basayev’in en yakın saha komutanı olmuştur.",
    "bio": [
      "12 Nisan 1962’de doğan ve devasa fiziği ile korkusuzluğu sebebiyle ‘Büyük Aslambek’ olarak tanınan Tuğgeneral Aslambek Abdulhaciyev, Abhazya Savaşı ve Birinci Çeçen Savaşı’nda Şamil Basayev’in en yakın saha komutanı olmuştur.",
      "Grozni savunmasında, Budyonnovsk harekâtında ve 1996 Grozni kurtuluşunda en ön saflarda çarpışarak İçkerya’nın en yüksek madalyası olan ‘Koman Siy’ nişanıyla ödüllendirilmiş, savaş sonrasında Şali kaymakamlığı ve milletvekilliği yapmıştır. 26 Ağustos 2002 tarihinde Şali’de kuşatıldığı evde Rus güçlerine teslim olmayı reddederek son nefesine kadar çarpışmış ve şehit düşmüştür."
    ]
  },
  {
    "slug": "zelimhan-ahmadov",
    "name": "Zelimhan Ahmadov",
    "born": "1975",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Urus-Martan",
    "deathPlace": "Grozni",
    "center": "Urus-Martan",
    "image": "/images/people/zelimhan-ahmadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/zelimhan-ahmadov.webp?v=4",
        "caption": "Zelimhan Ahmadov (1975–2002)"
      }
    ],
    "summary": "1975 yılında Urus-Martan’da doğan Zelimhan Ahmadov, altı ağabeyiyle birlikte Çeçen bağımsızlık savaşına katılan Gendargenoy Ahmadov kardeşlerin genç ve gözü pek komutanıdır.",
    "bio": [
      "1975 yılında Urus-Martan’da doğan Zelimhan Ahmadov, altı ağabeyiyle birlikte Çeçen bağımsızlık savaşına katılan Gendargenoy Ahmadov kardeşlerin genç ve gözü pek komutanıdır.",
      "Haziran 2002’de ağabeyi Rizvan Ahmadov’un şehadetinin ardından Grozni ve Urus-Martan sektörlerindeki direniş birliklerinin komutasını devralarak mücadeleyi kesintisiz sürdürmüştür. 14 Eylül 2002 tarihinde başkent Grozni yakınlarında Rus işgal kuvvetleriyle girilen çatışmada 27 yaşında şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "movsar-barayev",
    "name": "Movsar Barayev",
    "born": "1979",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Argun",
    "deathPlace": "Çeçenya",
    "center": "Argun",
    "image": "/images/people/movsar-barayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/movsar-barayev.webp?v=4",
        "caption": "Movsar Barayev (1979–2002)"
      }
    ],
    "summary": "26 Ekim 1979 tarihinde Argun şehrinde Nohçi direnişçi bir ailenin evladı olarak dünyaya gelen Movsar Barayev, genç yaşta Çeçen bağımsızlık mücadelesine katılarak amcası Arbi Barayev’in komutasında çarpışmıştır.",
    "bio": [
      "26 Ekim 1979 tarihinde Argun şehrinde Nohçi direnişçi bir ailenin evladı olarak dünyaya gelen Movsar Barayev, genç yaşta Çeçen bağımsızlık mücadelesine katılarak amcası Arbi Barayev’in komutasında çarpışmıştır.",
      "Haziran 2001’de amcasının şehadetinin ardından ‘Emir Süleyman’ adıyla Özel Amaçlı İslam Alayı (İPON) Komutanlığına geçmiş; Argun, Gudermes ve Grozni sektörlerinde çok sayıda cephe operasyonunu yönetmiştir. 26 Ekim 2002 tarihinde, 23. doğum gününde Rus özel kuvvetleriyle girilen silahlı çatışmada arkadaşlarıyla birlikte şehit düşmüştür."
    ]
  },
  {
    "slug": "salman-raduyev",
    "name": "Salman Raduyev",
    "born": "1967",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Gudermes",
    "deathPlace": "Solikamsk",
    "center": "Gudermes",
    "image": "/images/people/salman-raduyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/salman-raduyev.webp?v=4",
        "caption": "Salman Raduyev (1967–2002)"
      }
    ],
    "summary": "13 Şubat 1967’de Gudermes şehrinde Gordali taypına mensup bir ailede doğan Tuğgeneral Salman Raduyev, 1992’de Gudermes Valisi olmuş ve Şehit Cumhurbaşkanı Cevher Dudayev’e bağlı ‘Başkanlık Berelileri’ muhafız alayını kurmuştur.",
    "bio": [
      "13 Şubat 1967’de Gudermes şehrinde Gordali taypına mensup bir ailede doğan Tuğgeneral Salman Raduyev, 1992’de Gudermes Valisi olmuş ve Şehit Cumhurbaşkanı Cevher Dudayev’e bağlı ‘Başkanlık Berelileri’ muhafız alayını kurmuştur.",
      "Birinci Çeçen Savaşı’nda Kuzeydoğu Cephesi ve ‘General Dudayev Ordusu’ komutanı olarak savaşmış; Mart 1996’da uğradığı ağır suikasttan sağ kurtularak yüzündeki ağır yaralara rağmen mücadelesini sürdürmüştür. Mart 2000’de esir düşen Salman Raduyev, Rus mahkemelerinde asla af dilememiş ve 14 Aralık 2002’de Solikamsk ‘Beyaz Kuğu’ cezaevinde işkence altında boyun eğmeden şehit olmuştur."
    ]
  },
  {
    "slug": "muhammed-argunski",
    "name": "Muhammed Argunski (Magomed Şovhalov)",
    "born": "1977",
    "died": "2002",
    "title": "İslam Âlimi ve Hatip",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Argun",
    "deathPlace": "Çeçenya",
    "center": "Argun",
    "image": "/images/people/muhammed-argunski.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muhammed-argunski.webp?v=4",
        "caption": "Muhammed Argunski (Magomed Şovhalov) (1977–2002)"
      }
    ],
    "summary": "1977 yılında Çeçenistan’ın Argun şehrinde doğan ve gerçek adı Magomed Şovhalov olan Muhammed Argunski, genç yaşta İslami ilimlerde derinleşmiş Nohçi İslam âlimi ve mücahittir.",
    "bio": [
      "1977 yılında Çeçenistan’ın Argun şehrinde doğan ve gerçek adı Magomed Şovhalov olan Muhammed Argunski, genç yaşta İslami ilimlerde derinleşmiş Nohçi İslam âlimi ve mücahittir.",
      "Birinci ve İkinci Çeçen Savaşları yıllarında etkileyici hitabeti ve samimiyetiyle Çeçen gençliğinin manevi rehberlerinden biri olmuş; cephedeki direnişçilere cihad ahlakını, sabrı ve istikameti anlatmıştır. Hem ilmiyle hem de silahıyla Argun ve dağlık bölgelerdeki direniş saflarında bizzat çarpışan Muhammed Argunski, 2002 yılında Rus işgal güçleriyle girilen çatışmada 25 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "baudi-bakuyev",
    "name": "Baudi Bakuyev",
    "born": "1965",
    "died": "2003",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/baudi-bakuyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/baudi-bakuyev.webp?v=4",
        "caption": "Baudi Bakuyev (1965–2003)"
      }
    ],
    "summary": "1965 yılında doğan Tuğgeneral Baudi Bakuyev, Birinci Çeçen Savaşı’nda (1994–1996) Grozni savunmasında ve batı cephesi muharebelerinde gösterdiği üstün cesaretle İçkerya’nın en saygın komutanlarından biri olmuştur.",
    "bio": [
      "1965 yılında doğan Tuğgeneral Baudi Bakuyev, Birinci Çeçen Savaşı’nda (1994–1996) Grozni savunmasında ve batı cephesi muharebelerinde gösterdiği üstün cesaretle İçkerya’nın en saygın komutanlarından biri olmuştur.",
      "1999–2000 Grozni Savunması’nda başkentin en kritik savunma sektörlerini yönetmiş ve savaş sonrasında dağlık bölgelerde Rus işgal kuvvetlerine karşı gerilla harbini sürdürmüştür. Ekim 2003’te Çeçenistan’da Rus özel kuvvetleriyle girilen çatışmada son nefesine kadar savaşarak şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "zelimhan-yandarbiyev",
    "name": "Zelimhan Yandarbiyev",
    "born": "1952",
    "died": "2004",
    "title": "İçkeriya’nın 2. Cumhurbaşkanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Doha",
    "center": "Çeçenya",
    "image": "/images/people/zelimhan-yandarbiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/zelimhan-yandarbiyev.webp?v=4",
        "caption": "Zelimhan Yandarbiyev (1952–2004)"
      }
    ],
    "summary": "12 Eylül 1952’de Kazakistan sürgününde doğan şair, edebiyatçı ve fikir adamı Zelimhan Yandarbiyev, 1989’dan itibaren Çeçen milli uyanış hareketinin öncülüğünü yapmış ve Cevher Dudayev’in Devlet Başkan Yardımcısı olmuştur.",
    "bio": [
      "12 Eylül 1952’de Kazakistan sürgününde doğan şair, edebiyatçı ve fikir adamı Zelimhan Yandarbiyev, 1989’dan itibaren Çeçen milli uyanış hareketinin öncülüğünü yapmış ve Cevher Dudayev’in Devlet Başkan Yardımcısı olmuştur.",
      "Nisan 1996’da Dudayev’in şehadetinin ardından Çeçen İçkerya Cumhuriyeti Cumhurbaşkanlığı görevini üstlenmiş; Mayıs 1996’da Kremlin’de Yeltsin’in karşısına oturup eşit bir devlet başkanı vakarıyla ateşkesi kabul ettirmiş ve Ağustos 1996 Grozni zaferine başkomutanlık yapmıştır. 13 Şubat 2004’te cuma namazı dönüşünde Katar’ın başkenti Doha’da Rus istihbarat ajanlarının aracına yerleştirdiği bombayla düzenlenen suikast sonucu şehit düşmüştür."
    ],
    "docs": [
      "tsotsi-yurt-cecen-latin-sokak-tabelasi-1992",
      "cecen-cumhuriyeti-ickeriya-pasaportu-1994",
      "matsiyev-cecence-rusca-sozluk-1961"
    ]
  },
  {
    "slug": "hamzat-tazabayev",
    "name": "Hamzat Tazabayev",
    "born": "1978",
    "died": "2004",
    "title": "Emir Usame",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Vedeno",
    "center": "Çeçenya",
    "image": "/images/people/hamzat-tazabayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hamzat-tazabayev.webp?v=4",
        "caption": "Hamzat Tazabayev (1978–2004)"
      }
    ],
    "summary": "1978 yılında doğan ve cephede ‘Emir Usame’ adıyla tanınan Hamzat Tazabayev, genç yaşta katıldığı Çeçen direnişinde olağanüstü cesaretiyle Şamil Basayev’in en güvendiği saha komutanlarından biri olmuştur.",
    "bio": [
      "1978 yılında doğan ve cephede ‘Emir Usame’ adıyla tanınan Hamzat Tazabayev, genç yaşta katıldığı Çeçen direnişinde olağanüstü cesaretiyle Şamil Basayev’in en güvendiği saha komutanlarından biri olmuştur.",
      "İkinci Çeçen Savaşı boyunca Vedeno, Dargo ve Nojay-Yurt dağlarında Rus işgal birliklerine ve karargâhlarına karşı düzenlenen en etkili operasyonlara liderlik etmiştir. Şubat 2004’te Çeçenistan’ın dağlık Vedeno bölgesinde Rus özel kuvvetleriyle girilen çetin çatışmada 26 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "ruslan-gelayev",
    "name": "Ruslan (Hamzat) Gelayev",
    "born": "1964",
    "died": "2004",
    "title": "İçkeriya Savunma Bakanı ve Başbakan Yardımcısı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Saadi-Kotar",
    "deathPlace": "Dağıstan",
    "center": "Saadi-Kotar",
    "image": "/images/people/ruslan-gelayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ruslan-gelayev.webp?v=4",
        "caption": "Ruslan (Hamzat) Gelayev (1964–2004)"
      }
    ],
    "summary": "16 Nisan 1964’te Komsomolskoye (Saadi-Kotar) köyünde doğan Tümg. Ruslan (Hamzat) Gelayev, Abhazya Savaşı ve iki Çeçen-Rus Savaşı boyunca efsanevi ‘Borz’ (Kurt) Özel Kuvvetler Alayı’na komuta etmiş, İçkerya Savunma Bakanlığı ve Başbakan Yardımcılığı yapmıştır.",
    "bio": [
      "16 Nisan 1964’te Komsomolskoye (Saadi-Kotar) köyünde doğan Tümg. Ruslan (Hamzat) Gelayev, Abhazya Savaşı ve iki Çeçen-Rus Savaşı boyunca efsanevi ‘Borz’ (Kurt) Özel Kuvvetler Alayı’na komuta etmiş, İçkerya Savunma Bakanlığı ve Başbakan Yardımcılığı yapmıştır.",
      "1995–1996’da Şatoy ve Grozni muharebelerinde, Mart 2000’de Komsomolskoye savunmasında ve 2001–2002’de Kodori-Galashki harekâtlarında yüzlerce kilometrelik dağ yürüyüşleriyle Rus ordusunun kuşatmalarını yarmıştır. 28 Şubat 2004’te Dağıstan’ın karlı Bezhta dağ geçidinde tek başına sınır muhafızlarıyla çarpışırken ağır yaralanan Hamzat Gelayev, kangren olan kolunu kendi hançeriyle kesip son nefesine kadar ilerleyerek şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "ebu-el-velid",
    "name": "Ebu el-Velid",
    "born": "1967",
    "died": "2004",
    "title": "Doğu Cephesi Komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ebu-el-velid.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ebu-el-velid.webp?v=4",
        "caption": "Ebu el-Velid (1967–2004)"
      }
    ],
    "summary": "1967 yılında doğan ve gençliğinde Kafkasya’ya gelerek Çeçen direnişine katılan Ebu el-Velid, Emir Hattab’ın en yakın silah arkadaşı ve yardımcısı olarak Doğu Cephesi’nde omuz omuza savaşmıştır.",
    "bio": [
      "1967 yılında doğan ve gençliğinde Kafkasya’ya gelerek Çeçen direnişine katılan Ebu el-Velid, Emir Hattab’ın en yakın silah arkadaşı ve yardımcısı olarak Doğu Cephesi’nde omuz omuza savaşmıştır.",
      "Nisan 1996 Yaryşmardy pususunda ve 1999–2004 yılları arasında Vedeno, Serjen-Yurt ve Nojay-Yurt dağlarındaki cephe harekâtlarında kritik zaferlere imza atmış; 2002’de Hattab’ın şehadetinin ardından komutanlığı devralmıştır. 16 Nisan 2004 tarihinde Çeçenistan’ın dağlık bölgesinde Rus kuvvetleriyle girdiği çatışmada şehit düşmüştür."
    ]
  },
  {
    "slug": "yunadi-turcayev",
    "name": "Yunadi Turçayev",
    "born": "1972",
    "died": "2005",
    "title": "Grozni Sektörü ve Merkez Cephesi Komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Urus-Martan",
    "deathPlace": "Grozni",
    "center": "Urus-Martan",
    "image": "/images/people/yunadi-turcayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/yunadi-turcayev.webp?v=4",
        "caption": "Yunadi Turçayev (1972–2005)"
      }
    ],
    "summary": "1972 yılında Çeçenistan’ın Urus-Martan şehrinde doğan Yunadi Turçayev, Birinci Çeçen Savaşı’nda (1994–1996) Urus-Martan ve Grozni muharebelerinde yetişmiş en dirayetli Nohçi saha komutanlarındandır.",
    "bio": [
      "1972 yılında Çeçenistan’ın Urus-Martan şehrinde doğan Yunadi Turçayev, Birinci Çeçen Savaşı’nda (1994–1996) Urus-Martan ve Grozni muharebelerinde yetişmiş en dirayetli Nohçi saha komutanlarındandır.",
      "İkinci Çeçen Savaşı’nda Dokka Umarov ve Abdul-Halim Sadulayev ile birlikte Grozni Sektörü ve Merkez Cephesi Komutanlığı’nı yürütmüş; başkent Grozni içinde Rus askeri konvoylarına yönelik en kapsamlı şehir gerillası operasyonlarını organize etmiştir. 18 Şubat 2005 tarihinde Grozni’de Rus özel kuvvetlerinin kuşatmasına karşı son mermisine kadar çatışarak 33 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "aslan-mashadov",
    "name": "Aslan (Halid) Mashadov",
    "born": "1951",
    "died": "2005",
    "title": "İçkeriya’nın 3. Cumhurbaşkanı ve Genelkurmay Başkanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Kazakistan",
    "deathPlace": "Tolstoy-Yurt",
    "center": "Kazakistan",
    "image": "/images/people/aslan-mashadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslan-mashadov.webp?v=4",
        "caption": "Aslan (Halid) Mashadov (1951–2005)"
      }
    ],
    "summary": "21 Eylül 1951’de Kazakistan sürgününde doğan ve Sovyet Ordusu’nda albay rütbesiyle en seçkin topçu alaylarına komuta eden Aslan Mashadov, 1992’de vatanına dönerek Çeçen Silahlı Kuvvetleri Genelkurmay Başkanı olmuştur.",
    "bio": [
      "21 Eylül 1951’de Kazakistan sürgününde doğan ve Sovyet Ordusu’nda albay rütbesiyle en seçkin topçu alaylarına komuta eden Aslan Mashadov, 1992’de vatanına dönerek Çeçen Silahlı Kuvvetleri Genelkurmay Başkanı olmuştur.",
      "1994–1996 Birinci Çeçen-Rus Savaşı’nda Grozni savunmasının ve Ağustos 1996 Cihad Operasyonu’nun kurmay mimarı olmuş, Hasavyurt Barış Anlaşması’nı imzalamış ve Ocak 1997’de AGİT gözlemcileri eşliğinde yapılan demokratik seçimle cumhurbaşkanı seçilmiştir. İkinci savaş boyunca dağlardan ve cepheden ayrılmayan Cumhurbaşkanı Aslan Mashadov, 8 Mart 2005’te Tolstoy-Yurt’ta kuşatıldığı sığınakta esir düşmemek için son nefesine kadar direnerek şehit olmuştur."
    ],
    "docs": [
      "cecen-cumhuriyeti-ickeriya-pasaportu-1994",
      "grozni-kusatmasi-dua-eden-cecen-evstafiev-1995",
      "kovalyov-grozni-insan-haklari-basin-toplantisi-1995"
    ]
  },
  {
    "slug": "rizvan-citigov",
    "name": "Rizvan Çitigov",
    "born": "1964",
    "died": "2005",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Şali",
    "deathPlace": "Şali",
    "center": "Şali",
    "image": "/images/people/rizvan-citigov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/rizvan-citigov.webp?v=4",
        "caption": "Rizvan Çitigov (1964–2005)"
      }
    ],
    "summary": "22 Nisan 1964’te Şali şehrinde doğan Rizvan Çitigov, 1990’ların başında bağımsızlık mücadelesi için vatanına dönerek Çeçen İçkerya Silahlı Kuvvetleri’nin zırhlı ve özel operasyon birliklerini kurmuştur.",
    "bio": [
      "22 Nisan 1964’te Şali şehrinde doğan Rizvan Çitigov, 1990’ların başında bağımsızlık mücadelesi için vatanına dönerek Çeçen İçkerya Silahlı Kuvvetleri’nin zırhlı ve özel operasyon birliklerini kurmuştur.",
      "Ocak 1995 Grozni Savunması’nda Rus zırhlı tugaylarının şehir merkezinde imha edilmesinde başrol oynamış; devlet istihbaratı ve özel kuvvetler komutanlığı yaparak ‘Koman Siy’ (Milletin Onuru) nişanıyla taltif edilmiştir. 23 Mart 2005 tarihinde memleketi Şali’de Rus özel kuvvetleriyle girdiği çatışmada son mermisine kadar savaşarak şehit düşmüştür."
    ]
  },
  {
    "slug": "vaha-arsanov",
    "name": "Vaha Arsanov",
    "born": "1950",
    "died": "2005",
    "title": "İçkeriya Cumhurbaşkanı Yardımcısı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Kazakistan",
    "deathPlace": "Grozni",
    "center": "Kazakistan",
    "image": "/images/people/vaha-arsanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/vaha-arsanov.webp?v=4",
        "caption": "Vaha Arsanov (1950–2005)"
      }
    ],
    "summary": "1950 yılında Kazakistan sürgününde, büyük Nakşibendi şeyhi Deni Arsanov’un soyundan gelen köklü bir ailede doğan Vaha Arsanov, Birinci Çeçen Savaşı’nda Kuzeybatı Cephesi ve Grozni muharebelerinde kolordu komutanı olarak çarpışmıştır.",
    "bio": [
      "1950 yılında Kazakistan sürgününde, büyük Nakşibendi şeyhi Deni Arsanov’un soyundan gelen köklü bir ailede doğan Vaha Arsanov, Birinci Çeçen Savaşı’nda Kuzeybatı Cephesi ve Grozni muharebelerinde kolordu komutanı olarak çarpışmıştır.",
      "1997 seçimlerinde Cumhurbaşkanı Aslan Mashadov’un yanında Çeçen İçkerya Cumhuriyeti Cumhurbaşkanı Yardımcısı seçilmiş ve 1999’da başlayan İkinci Çeçen Savaşı’nda yeniden cepheye koşmuştur. 15 Mayıs 2005 tarihinde Grozni yakınlarındaki İvanovo yerleşiminde kuşatıldığı evde Rus güçlerine teslim olmayarak son nefesine kadar çatışmış ve şehit düşmüştür."
    ]
  },
  {
    "slug": "ahmed-avdorhanov",
    "name": "Ahmed Avdorhanov",
    "born": "1971",
    "died": "2005",
    "title": "Cumhurbaşkanlığı Muhafız Alayı Komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Alleroy",
    "deathPlace": "Çeçenya",
    "center": "Alleroy",
    "image": "/images/people/ahmed-avdorhanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ahmed-avdorhanov.webp?v=4",
        "caption": "Ahmed Avdorhanov (1971–2005)"
      }
    ],
    "summary": "1971 yılında Alleroy köyünde doğan Ahmed Avdorhanov, iki Çeçen savaşı boyunca vatan savunmasında yer alan kahraman Avdorhanov kardeşlerin büyüğü ve Cumhurbaşkanı Aslan Mashadov’un Cumhurbaşkanlığı Muhafız Alayı Komutanıdır.",
    "bio": [
      "1971 yılında Alleroy köyünde doğan Ahmed Avdorhanov, iki Çeçen savaşı boyunca vatan savunmasında yer alan kahraman Avdorhanov kardeşlerin büyüğü ve Cumhurbaşkanı Aslan Mashadov’un Cumhurbaşkanlığı Muhafız Alayı Komutanıdır.",
      "Yıllarca dağlarda Cumhurbaşkanı Mashadov’un yakın güvenliğini sağlamış, Doğu Cephesi’nde Gudermes ve Kurchaloy sektörlerinde çok sayıda başarılı askeri harekâtı yönetmiştir. 12 Eylül 2005 tarihinde Çeçenistan’ın doğu dağlarında Rus işgal birlikleriyle girilen çatışmada şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "abdul-halim-sadulayev",
    "name": "Şeyh Abdul-Halim Sadulayev",
    "born": "1966",
    "died": "2006",
    "title": "İçkeriya’nın 4. Cumhurbaşkanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Argun",
    "deathPlace": "Argun",
    "center": "Argun",
    "image": "/images/people/abdul-halim-sadulayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/abdul-halim-sadulayev.webp?v=4",
        "caption": "Şeyh Abdul-Halim Sadulayev (1966–2006)"
      }
    ],
    "summary": "2 Haziran 1966’da Argun şehrinde doğan İslam âlimi ve fakih Şeyh Abdul-Halim Sadulayev, Birinci ve İkinci Çeçen Savaşları’nda Argun direniş birliklerine komuta etmiş ve İçkerya Şeriat Mahkemesi ile Devlet Şurası’nda görev yapmıştır.",
    "bio": [
      "2 Haziran 1966’da Argun şehrinde doğan İslam âlimi ve fakih Şeyh Abdul-Halim Sadulayev, Birinci ve İkinci Çeçen Savaşları’nda Argun direniş birliklerine komuta etmiş ve İçkerya Şeriat Mahkemesi ile Devlet Şurası’nda görev yapmıştır.",
      "Mart 2005’te Aslan Mashadov’un şehadetinin ardından Çeçen İçkerya Cumhuriyeti’nin 4. Cumhurbaşkanı ve Silahlı Kuvvetler Başkomutanı olmuş; direnişin sivillere zarar vermeyen meşru askeri hedeflere odaklanması emrini yayınlamıştır. Hiçbir zaman Çeçenistan topraklarını terk etmeyen Cumhurbaşkanı Abdul-Halim Sadulayev, 17 Haziran 2006’da doğduğu şehir olan Argun’da kuşatmaya karşı elinde silahıyla çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "samil-basayev",
    "name": "Şamil Basayev",
    "born": "1965",
    "died": "2006",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Dışne-Vedeno",
    "deathPlace": "Ekajevo",
    "center": "Dışne-Vedeno",
    "image": "/images/people/samil-basayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/samil-basayev.webp?v=4",
        "caption": "Şamil Basayev (1965–2006)"
      }
    ],
    "summary": "14 Ocak 1965’te Vedeno’nun Dışne-Vedeno köyünde doğan Şamil Basayev, 1991 Çeçen Devrimi, 1992 Abhazya Savaşı ve 1994–1996 Birinci Çeçen Savaşı’nda Grozni savunmasından Budyonnovsk harekâtına ve Ağustos 1996 Grozni kurtuluşuna kadar en kritik zaferlere komuta etmiştir.",
    "bio": [
      "14 Ocak 1965’te Vedeno’nun Dışne-Vedeno köyünde doğan Şamil Basayev, 1991 Çeçen Devrimi, 1992 Abhazya Savaşı ve 1994–1996 Birinci Çeçen Savaşı’nda Grozni savunmasından Budyonnovsk harekâtına ve Ağustos 1996 Grozni kurtuluşuna kadar en kritik zaferlere komuta etmiştir.",
      "Ocak 2000’de Grozni kuşatmasını yararken askerlerinin önünde mayın tarlasına girerek bir bacağını kaybetmiş; buna rağmen protez bacağıyla dağlara dönerek yıllarca direnişin askeri liderliğini sürdürmüştür. 10 Temmuz 2006 tarihinde İnguşetya’nın Ekajevo köyü yakınlarında mühimmat konvoyunda meydana gelen patlama sonucu 41 yaşında şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "suleyman-elmurzayev",
    "name": "Süleyman Elmurzayev (Emir Hayrullah)",
    "born": "1974",
    "died": "2007",
    "title": "İçkeriya Cumhurbaşkanı Yardımcısı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Agişbatoy",
    "deathPlace": "Agişbatoy",
    "center": "Agişbatoy",
    "image": "/images/people/suleyman-elmurzayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/suleyman-elmurzayev.webp?v=4",
        "caption": "Süleyman Elmurzayev (Emir Hayrullah) (1974–2007)"
      }
    ],
    "summary": "22 Haziran 1974’te Vedeno’nun Agişbatoy köyünde doğan Süleyman Elmurzayev (‘Emir Hayrullah’), iki savaş boyunca Vedeno dağlarındaki direnişin en sarsılmaz saha komutanlarından biri olmuştur.",
    "bio": [
      "22 Haziran 1974’te Vedeno’nun Agişbatoy köyünde doğan Süleyman Elmurzayev (‘Emir Hayrullah’), iki savaş boyunca Vedeno dağlarındaki direnişin en sarsılmaz saha komutanlarından biri olmuştur.",
      "Temmuz 2006’da Şamil Basayev’in şehadetinin ardından Vedeno cephesinin komutasını ve Çeçen İçkerya Cumhuriyeti Cumhurbaşkanı Yardımcılığı (Naibliği) görevini üstlenmiştir. 4 Nisan 2007 tarihinde doğduğu Agişbatoy köyü yakınlarında kurulan pusuda son mermisine kadar çarpışarak 32 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "rustam-basayev",
    "name": "Rustam Basayev (Emir Ebu Bekir)",
    "born": "1975",
    "died": "2007",
    "title": "Merkez Cephesi Komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Dzhalka",
    "deathPlace": "Grozni",
    "center": "Dzhalka",
    "image": "/images/people/rustam-basayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/rustam-basayev.webp?v=4",
        "caption": "Rustam Basayev (Emir Ebu Bekir) (1975–2007)"
      }
    ],
    "summary": "20 Mart 1975’te Dzhalka köyünde doğan Rustam Basayev (‘Emir Ebu Bekir’), henüz 19 yaşındayken Birinci Çeçen Savaşı’na katılmış, savaşlarda üç kez ağır yaralanmasına rağmen cepheden bir gün bile ayrılmamıştır.",
    "bio": [
      "20 Mart 1975’te Dzhalka köyünde doğan Rustam Basayev (‘Emir Ebu Bekir’), henüz 19 yaşındayken Birinci Çeçen Savaşı’na katılmış, savaşlarda üç kez ağır yaralanmasına rağmen cepheden bir gün bile ayrılmamıştır.",
      "Ağustos 2006’da Cumhurbaşkanı Dokka Umarov tarafından tuğgeneral rütbesiyle Çeçen İçkerya Silahlı Kuvvetleri Merkez Cephesi Komutanlığına atanarak Grozni ve Argun hattındaki operasyonları yönetmiştir. 24 Ağustos 2007 tarihinde başkent Grozni’de kuşatıldığı evde yüzlerce işgal askerine karşı saatlerce tek başına çarpışarak 32 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "usman-muntsigov",
    "name": "Usman Muntsigov (Emir Usman)",
    "born": "1975",
    "died": "2010",
    "title": "Emir Usman / Şatral",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/usman-muntsigov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/usman-muntsigov.webp?v=4",
        "caption": "Usman Muntsigov (Emir Usman) (1975–2010)"
      }
    ],
    "summary": "1975 yılında Çeçenistan’da doğan ve Nohçi direnişinde ‘Emir Usman’ ile ‘Şatral’ lakaplarıyla tanınan Usman Muntsigov, Birinci ve İkinci Çeçen Savaşları’nda kesintisiz 15 yıl boyunca dağlarda ve cephede çarpışmıştır.",
    "bio": [
      "1975 yılında Çeçenistan’da doğan ve Nohçi direnişinde ‘Emir Usman’ ile ‘Şatral’ lakaplarıyla tanınan Usman Muntsigov, Birinci ve İkinci Çeçen Savaşları’nda kesintisiz 15 yıl boyunca dağlarda ve cephede çarpışmıştır.",
      "Dokka Umarov’un en yakın silah arkadaşlarından biri olarak Güneybatı Cephesi’nde Naurski, Bamut ve Açhoy-Martan sektörlerine komuta etmiş; ağır kış şartlarına ve kuşatmalara rağmen dağlık orman hattındaki direniş üslerini yıllarca ayakta tutmuştur. Ocak 2010’da girdiği silahlı çatışmada aldığı ağır yaralar sonucu Çeçenistan dağlarında 35 yaşında şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "supyan-abdullayev",
    "name": "Supyan Abdullayev",
    "born": "1956",
    "died": "2011",
    "title": "Başbakan Yardımcısı ve Birinci Naib",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "İnguşetya",
    "center": "Çeçenya",
    "image": "/images/people/supyan-abdullayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/supyan-abdullayev.webp?v=4",
        "caption": "Supyan Abdullayev (1956–2011)"
      }
    ],
    "summary": "8 Kasım 1956’da Kazakistan sürgününde, Hatuni köyünden Tsadahar (Tsa-Vedeno) kökenli bir ailede doğan İslam âlimi ve eğitimci Supyan Abdullayev, 1991’den itibaren bağımsızlık saflarında yer alarak ‘İslam Taburu’ (Risale) komutanı olarak savaşmıştır.",
    "bio": [
      "8 Kasım 1956’da Kazakistan sürgününde, Hatuni köyünden Tsadahar (Tsa-Vedeno) kökenli bir ailede doğan İslam âlimi ve eğitimci Supyan Abdullayev, 1991’den itibaren bağımsızlık saflarında yer alarak ‘İslam Taburu’ (Risale) komutanı olarak savaşmıştır.",
      "Çeçen İçkerya Cumhuriyeti’nde tuğgeneral rütbesine yükselmiş, Maliye Bakanlığı ve Başbakan Yardımcılığı görevlerini yürütmüş; Dokka Umarov’un birinci naibi olarak yıllarca Kafkas dağlarında direnişe rehberlik etmiştir. 28 Mart 2011 tarihinde İnguşetya dağlarındaki kamplarına düzenlenen ağır hava bombardımanı ve kara çatışmasında 54 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "zaurbek-avdorhanov",
    "name": "Zaurbek Avdorhanov",
    "born": "1976",
    "died": "2012",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Alleroy",
    "deathPlace": "Galaytı",
    "center": "Alleroy",
    "image": "/images/people/zaurbek-avdorhanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/zaurbek-avdorhanov.webp?v=4",
        "caption": "Zaurbek Avdorhanov (1976–2012)"
      }
    ],
    "summary": "8 Ekim 1976’da Alleroy köyünde doğan Zaurbek Avdorhanov, Cumhurbaşkanı Aslan Mashadov’un Muhafız Komutanı Şehit Ahmed Avdorhanov’un kardeşi olarak genç yaşta direniş saflarına katılmıştır.",
    "bio": [
      "8 Ekim 1976’da Alleroy köyünde doğan Zaurbek Avdorhanov, Cumhurbaşkanı Aslan Mashadov’un Muhafız Komutanı Şehit Ahmed Avdorhanov’un kardeşi olarak genç yaşta direniş saflarına katılmıştır.",
      "2005 yılında ağabeyi Ahmed Avdorhanov’un şehadetinin ardından Doğu Cephesi’nde Gudermes ve Kurchaloy sektörlerinin komutasını devralarak yedi yıl daha dağlarda savaşı sürdürmüştür. 28 Temmuz 2012 tarihinde kardeşi İbrahimbek ve silah arkadaşı Ayub Haladov ile birlikte Galaytı köyünde kuşatmaya karşı son mermisine kadar çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "huseyin-gakayev",
    "name": "Hüseyin Gakayev",
    "born": "1970",
    "died": "2013",
    "title": "Doğu Cephesi Komutanı ve İçişleri Bakanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Elistanji",
    "deathPlace": "Vedeno",
    "center": "Elistanji, Vedeno",
    "image": "/images/people/huseyin-gakayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/huseyin-gakayev.webp?v=4",
        "caption": "Hüseyin Gakayev (1970–2013)"
      }
    ],
    "summary": "8 Temmuz 1970’te Vedeno bölgesindeki Elistanji köyünde doğan Hüseyin Gakayev, Birinci ve İkinci Çeçen savaşlarında neredeyse yirmi yıl boyunca doğu dağlarından bir gün bile inmeyen sarsılmaz bir komutandır.",
    "bio": [
      "8 Temmuz 1970’te Vedeno bölgesindeki Elistanji köyünde doğan Hüseyin Gakayev, Birinci ve İkinci Çeçen savaşlarında neredeyse yirmi yıl boyunca doğu dağlarından bir gün bile inmeyen sarsılmaz bir komutandır.",
      "2006 yılında Çeçen İçkerya Cumhuriyeti Doğu Cephesi Komutanlığına, 2007’de ise İçişleri Bakanlığı ve Başbakan Yardımcılığı görevlerine atanarak Vedeno ve Şali dağlarındaki tüm birlikleri yönetmiştir. 24 Ocak 2013 tarihinde Vedeno’nun Elistanji ve Haraçoy dağlarında kardeşi Müslim Gakayev ile birlikte binlerce kişilik kuşatmaya karşı son mermisine kadar çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "muslim-gakayev",
    "name": "Müslim Gakayev",
    "born": "1973",
    "died": "2013",
    "title": "Şali Sektörü Komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Elistanji",
    "deathPlace": "Vedeno",
    "center": "Elistanji",
    "image": "/images/people/muslim-gakayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muslim-gakayev.webp?v=4",
        "caption": "Müslim Gakayev (1973–2013)"
      }
    ],
    "summary": "1973 yılında Vedeno’nun Elistanji köyünde, vatan savunmasında dört kardeşini (Cemalela, Said-Usman, Hasan ve Hüseyin) şehit veren kahraman Gakayev ailesinin en küçüğü olarak dünyaya gelmiştir.",
    "bio": [
      "1973 yılında Vedeno’nun Elistanji köyünde, vatan savunmasında dört kardeşini (Cemalela, Said-Usman, Hasan ve Hüseyin) şehit veren kahraman Gakayev ailesinin en küçüğü olarak dünyaya gelmiştir.",
      "Şamil Basayev’in Cundullah birliğinde yetişmiş, ‘Emir Mansur’ adıyla Şali Sektörü Komutanlığını üstlenerek cesareti ve askeri stratejisiyle dağlardaki genç mücahit birliklerini eğitmiştir. 24 Ocak 2013 tarihinde Vedeno dağlarında ağabeyi Hüseyin Gakayev ile omuz omuza son nefesine kadar savaşarak şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "medet-onlu",
    "name": "Medet Önlü",
    "born": "1965",
    "died": "2013",
    "title": "İçkeriya Türkiye Fahri Konsolosu",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Göksun",
    "deathPlace": "Ankara",
    "center": "Göksun",
    "image": "/images/people/medet-onlu.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/medet-onlu.webp?v=4",
        "caption": "Medet Önlü (1965–2013)"
      }
    ],
    "summary": "1965 yılında Kahramanmaraş’ın Göksun ilçesine bağlı Çardak beldesinde, Türkiye’deki köklü bir Nohçi ailesinde dünyaya gelen Medet Önlü, hayatı boyunca anavatanı Çeçenistan’ın hürriyet davasına hizmet etmiştir.",
    "bio": [
      "1965 yılında Kahramanmaraş’ın Göksun ilçesine bağlı Çardak beldesinde, Türkiye’deki köklü bir Nohçi ailesinde dünyaya gelen Medet Önlü, hayatı boyunca anavatanı Çeçenistan’ın hürriyet davasına hizmet etmiştir.",
      "Birinci ve İkinci Çeçen Savaşları boyunca binlerce Çeçen yaralı, gazî, yetim ve muhacirin tedavi edilmesi ve barınması için kurulan Kafkas-Çeçen dayanışma ağlarına öncülük etmiş; Cumhurbaşkanı Aslan Mashadov ve Dokka Umarov dönemlerinde Çeçen İçkerya Cumhuriyeti Türkiye Fahri Konsolosu olarak görev yapmıştır. 22 Mayıs 2013 tarihinde Ankara Balgat’taki makam ofisinde Rus istihbarat bağlantılı tetikçilerin düzenlediği hain suikast sonucu şehit düşmüştür."
    ]
  },
  {
    "slug": "doku-umarov",
    "name": "Dokka (Doku) Umarov",
    "born": "1964",
    "died": "2013",
    "title": "İçkeriya’nın 5. Cumhurbaşkanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Harsenoy",
    "deathPlace": "Çeçenya",
    "center": "Harsenoy",
    "image": "/images/people/doku-umarov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/doku-umarov.webp?v=4",
        "caption": "Dokka (Doku) Umarov (1964–2013)"
      }
    ],
    "summary": "13 Nisan 1964’te Şatoy’un Harsenoy köyünde doğan Dokka Umarov, 1994’ten itibaren Ruslan Gelayev ile birlikte ‘Borz’ (Kurt) Özel Kuvvetler Alayı’nda savaşmış, tuğgeneral rütbesiyle İçkerya Güvenlik Konseyi Sekreterliği ve Güneybatı Cephesi Komutanlığı yapmıştır.",
    "bio": [
      "13 Nisan 1964’te Şatoy’un Harsenoy köyünde doğan Dokka Umarov, 1994’ten itibaren Ruslan Gelayev ile birlikte ‘Borz’ (Kurt) Özel Kuvvetler Alayı’nda savaşmış, tuğgeneral rütbesiyle İçkerya Güvenlik Konseyi Sekreterliği ve Güneybatı Cephesi Komutanlığı yapmıştır.",
      "2000 Grozni yarma harekâtında çenesinden ağır yaralanmasına ve ailesinin birçok ferdi Rus güçlerince rehin alınıp şehit edilmesine rağmen, tam 20 yıl boyunca bir gün bile Kafkas dağlarını terk etmemiştir. Haziran 2006’da Abdul-Halim Sadulayev’in şehadetinin ardından Cumhurbaşkanlığı ve direniş liderliğini üstlenen Dokka Umarov, 7 Eylül 2013’te dağlarda zehirlenerek düzenlenen suikast sonucu şehit düşmüştür."
    ]
  },
  {
    "slug": "abdul-malik-mejidov",
    "name": "Abdul-Malik Mejidov",
    "born": "1961",
    "died": "2013",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Urus-Martan",
    "deathPlace": "Çeçenya",
    "center": "Urus-Martan",
    "image": "/images/people/abdul-malik-mejidov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/abdul-malik-mejidov.webp?v=4",
        "caption": "Abdul-Malik Mejidov (1961–2013)"
      }
    ],
    "summary": "19 Haziran 1961 tarihinde Çeçenistan’ın Urus-Martan şehrinde doğan Abdul-Malik Mejidov, Nohçi bağımsızlık hareketinin ilk yıllarından itibaren ön saflarda yer alan kıdemli komutanlarındandır.",
    "bio": [
      "19 Haziran 1961 tarihinde Çeçenistan’ın Urus-Martan şehrinde doğan Abdul-Malik Mejidov, Nohçi bağımsızlık hareketinin ilk yıllarından itibaren ön saflarda yer alan kıdemli komutanlarındandır.",
      "Birinci Çeçen Savaşı’nda (1994–1996) Urus-Martan ve Grozni cephelerinde Rus ordusuna karşı savaşarak tuğgeneral rütbesine yükselmiş; iki savaş arası dönemde Çeçen İçkerya Cumhuriyeti Şeriat Muhafızları Komutanı olarak görev yapmıştır. İkinci Çeçen Savaşı’nda da direniş saflarını terk etmeyen Abdul-Malik Mejidov, 2013 yılında 52 yaşında hak ve hürriyet mücadelesi yolunda şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "isa-munayev",
    "name": "İsa Munayev",
    "born": "1965",
    "died": "2015",
    "title": "Grozni Askeri Komutanı ve Dudayev Taburu Komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Yandi",
    "deathPlace": "Debaltseve",
    "center": "Yandi",
    "image": "/images/people/isa-munayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/isa-munayev.webp?v=4",
        "caption": "İsa Munayev (1965–2015)"
      }
    ],
    "summary": "20 Mayıs 1965’te Açhoy-Martan’ın Yandi köyünde Galay taypına mensup bir ailede doğan Tuğgeneral İsa Munayev, Birinci Çeçen Savaşı’nda Orehovo Taburu Komutanı olarak Bamut ve batı cephesinde destan yazmıştır.",
    "bio": [
      "20 Mayıs 1965’te Açhoy-Martan’ın Yandi köyünde Galay taypına mensup bir ailede doğan Tuğgeneral İsa Munayev, Birinci Çeçen Savaşı’nda Orehovo Taburu Komutanı olarak Bamut ve batı cephesinde destan yazmıştır.",
      "1999–2000 Grozni Savunması’nda Cumhurbaşkanı Aslan Mashadov tarafından ‘Grozni Askeri Komutanı’ atanarak başkenti savunmuş, ağır yaralanana kadar Güneybatı Cephesi’nde gerilla harbini yönetmiştir. 2014 yılında Rus emperyalizmine karşı ‘Cevher Dudayev Uluslararası Barış Gücü Taburu’nu kurarak komuta eden Tuğgeneral İsa Munayev, 1 Şubat 2015’te Debaltseve cephesinde silah arkadaşlarının çekilmesini korurken havan topu ateşiyle şehit düşmüştür."
    ]
  },
  {
    "slug": "zelimhan-hangosvili",
    "name": "Zelimhan Hangoşvili",
    "born": "1979",
    "died": "2019",
    "title": "İkinci Çeçen Savaşı Saha Komutanı",
    "era": "yakin",
    "region": "Çeçenya – Pankisi",
    "birthPlace": "Duisi",
    "deathPlace": "Berlin",
    "center": "Duisi, Pankisi Vadisi",
    "image": "/images/people/zelimhan-hangosvili.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/zelimhan-hangosvili.webp?v=4",
        "caption": "Zelimhan Hangoşvili (1979–2019)"
      }
    ],
    "summary": "15 Ağustos 1979 tarihinde Pankisi Vadisi’ndeki Duisi köyünde, Nohçi Dişniy taypına mensup bir ailede dünyaya gelen Zelimhan Hangoşvili, İkinci Çeçen Savaşı’nda anavatanı Çeçenistan’a geçerek Cumhurbaşkanı Aslan Mashadov ve Şamil Basayev’in komutasında çarpışmıştır.",
    "bio": [
      "15 Ağustos 1979 tarihinde Pankisi Vadisi’ndeki Duisi köyünde, Nohçi Dişniy taypına mensup bir ailede dünyaya gelen Zelimhan Hangoşvili, İkinci Çeçen Savaşı’nda anavatanı Çeçenistan’a geçerek Cumhurbaşkanı Aslan Mashadov ve Şamil Basayev’in komutasında çarpışmıştır.",
      "Grozni, Vedeno ve İnguşetya cephelerinde müfreze komutanı olarak Rus işgal ordusuna karşı en kritik harekâtlarda görev almış; savaştan sonra da Kafkasya halklarının bağımsızlık davasına hizmet etmeyi sürdürmüştür. Daha önce Tiflis’te uğradığı suikast girişiminden yaralı kurtulan Zelimhan Hangoşvili, 23 Ağustos 2019 tarihinde Almanya’nın başkenti Berlin’de cuma namazına giderken Rus istihbarat (FSB) tetikçisinin düzenlediği suikast sonucu 40 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "aslan-butukayev",
    "name": "Aslan Bütükayev (Emir Hamzat)",
    "born": "1974",
    "died": "2021",
    "title": "Emir Hamzat (Son Kale)",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Katayama (Grozni)",
    "center": "Çeçenya",
    "image": "/images/people/aslan-butukayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslan-butukayev.webp?v=4",
        "caption": "Aslan Bütükayev (Emir Hamzat) (1974–2021)"
      }
    ],
    "summary": "22 Ekim 1974’te doğan ve Açhoy-Martan bölgesinde yetişen Aslan Bütükayev (‘Emir Hamzat’), 1994’ten itibaren Birinci ve İkinci Çeçen Savaşları’nda Güneybatı Cephesi’nde çarpışmıştır.",
    "bio": [
      "22 Ekim 1974’te doğan ve Açhoy-Martan bölgesinde yetişen Aslan Bütükayev (‘Emir Hamzat’), 1994’ten itibaren Birinci ve İkinci Çeçen Savaşları’nda Güneybatı Cephesi’nde çarpışmıştır.",
      "Dokka Umarov döneminde Riyad-us Salihin Şehitler Tugayı Komutanı, doğu-batı cephelerinin birleştirici emiri ve Çeçenistan Vilayeti (Nohçiyço) Emir Yardımcısı olarak görev yapmış; yirmi beş yılı aşkın bir süre boyunca Çeçenistan dağlarını terk etmemiştir. 20 Ocak 2021 tarihinde başkent Grozni’nin Katayama bölgesinde beş silah arkadaşıyla birlikte kuşatmayı reddedip son mermisine kadar savaşarak şehit düşmüş; Çeçenistan dağlarındaki çeyrek asırlık direnişin son kalesi olarak tarihe geçmiştir."
    ]
  },
  {
    "slug": "ali-mitayev",
    "name": "Şeyh Ali Mitayev",
    "born": "1881",
    "died": "1925",
    "title": "Sürgün ve direniş dönemi mücadelecisi",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ali-mitayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ali-mitayev.webp?v=4",
        "caption": "Şeyh Ali Mitayev (1881–1925)"
      }
    ],
    "summary": "1881 yılında Çeçenistan’ın Avtury köyünde, büyük Nakşibendi-Kâdirî sufi şeyhi Bamat-Girey-Hacı Mitayev’in oğlu olarak dünyaya gelen Şeyh Ali Mitayev, 20. yüzyıl başında Çeçen halkının en güçlü dini ve siyasi önderlerinden biri olmuştur.",
    "bio": [
      "1881 yılında Çeçenistan’ın Avtury köyünde, büyük Nakşibendi-Kâdirî sufi şeyhi Bamat-Girey-Hacı Mitayev’in oğlu olarak dünyaya gelen Şeyh Ali Mitayev, 20. yüzyıl başında Çeçen halkının en güçlü dini ve siyasi önderlerinden biri olmuştur.",
      "Çarlık Rusyası’nın yıkılmasının ardından Çeçenistan’da şeriat mahkemelerini ve milli düzeni kurarak on binlerce müridiyle Kuzey Kafkasya’nın bağımsızlığını savunmuş; Kızıl Ordu işgaline karşı 1920–1924 yıllarında Çeçen halkının inanç ve özerklik haklarının sarsılmaz koruyucusu olmuştur. Bolşevik yönetiminin sahte müzakere davetiyle 1924 yılında hileyle tutuklanarak Rostov hapishanesine gönderilen Şeyh Ali Mitayev, Eylül 1925’te Sovyet OGPU (NKVD) tarafından kurşuna dizilerek şehit edilmiştir."
    ]
  },
  {
    "slug": "ibrahim-culikov",
    "name": "İbrahim Çulikov",
    "born": "1891",
    "died": "1938",
    "title": "Sürgün ve direniş dönemi mücadelecisi",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ibrahim-culikov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ibrahim-culikov.webp?v=4",
        "caption": "İbrahim Çulikov (1891–1938)"
      }
    ],
    "summary": "1891 yılında köklü Çeçen Çulik (Çulikov) ailesinde dünyaya gelen hukukçu, siyasetçi ve devlet adamı İbrahim Çulikov, 1917–1918 yıllarında Çeçen Milli Konseyi Başkanlığı görevini üstlenerek Çeçen halkının siyasi birliğini sağlamıştır.",
    "bio": [
      "1891 yılında köklü Çeçen Çulik (Çulikov) ailesinde dünyaya gelen hukukçu, siyasetçi ve devlet adamı İbrahim Çulikov, 1917–1918 yıllarında Çeçen Milli Konseyi Başkanlığı görevini üstlenerek Çeçen halkının siyasi birliğini sağlamıştır.",
      "Kuzey Kafkasya Dağlılar Cumhuriyeti’nin inşasında ve Bolşevik işgaline karşı yürütülen milli direnişte ön saflarda yer almış; vatan topraklarının Kızıl Ordu tarafından işgal edilmesine karşı hukuki ve askeri mücadeleyi yönetmiştir. Sovyet rejiminin Büyük Terör döneminde NKVD tarafından tutuklanan İbrahim Çulikov, 1938 yılında Rostov zindanlarında boyun eğmeden idam edilerek şehit düşmüştür."
    ]
  },
  {
    "slug": "cavadhan-murtazaliyev",
    "name": "Cavadhan Murtazaliyev",
    "born": "1879",
    "died": "1944",
    "title": "Çeçen direniş komutanı",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/cavadhan-murtazaliyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/cavadhan-murtazaliyev.webp?v=4",
        "caption": "Cavadhan Murtazaliyev (1879–1944)"
      }
    ],
    "summary": "1879 yılında Çeçenistan’ın sarp dağlık bölgesinde dünyaya gelen Cavadhan Murtazaliyev, 1940–1944 yıllarında Hasan İsrailov ve Mayrbek Şeripov önderliğinde yürütülen Sovyet karşıtı dağ direnişinin en yaşlı ve bilge komutanlarından biri olmuştur.",
    "bio": [
      "1879 yılında Çeçenistan’ın sarp dağlık bölgesinde dünyaya gelen Cavadhan Murtazaliyev, 1940–1944 yıllarında Hasan İsrailov ve Mayrbek Şeripov önderliğinde yürütülen Sovyet karşıtı dağ direnişinin en yaşlı ve bilge komutanlarından biri olmuştur.",
      "Altmış yaşını aşmış olmasına rağmen Çeçenistan dağlarında NKVD tümenlerine karşı yıllarca gerilla mücadelesi yürütmüş; Şubat 1944 Çeçen-İnguş sürgünü sırasında dahi vatan toprağını ve dağ mevzilerini terk etmemiştir. 1944 yılında Çeçenistan dağlarında Sovyet güçleriyle girdiği çetin çatışmada son mermisine kadar vuruşarak şehit düşmüştür."
    ]
  },
  {
    "slug": "imam-alimsultanov",
    "name": "İmam Alimsultanov",
    "born": "1957",
    "died": "1996",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/imam-alimsultanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/imam-alimsultanov.webp?v=4",
        "caption": "İmam Alimsultanov (1957–1996)"
      }
    ],
    "summary": "1957 yılında Kırgızistan sürgününde doğan ve Hasavyurt’ta yetişen İmam Alimsultanov, geleneksel Çeçen destanlarını (‘İlli’) modern direniş ruhuyla birleştirerek Çeçen halkının unutulmaz milli ozanı ve direniş sesi olmuştur.",
    "bio": [
      "1957 yılında Kırgızistan sürgününde doğan ve Hasavyurt’ta yetişen İmam Alimsultanov, geleneksel Çeçen destanlarını (‘İlli’) modern direniş ruhuyla birleştirerek Çeçen halkının unutulmaz milli ozanı ve direniş sesi olmuştur.",
      "Birinci Çeçen-Rus Savaşı’nda (1994–1996) hem silahıyla hem de ‘Gazavat’, ‘Çeçenistan’ ve ‘Dağlılar’ marşlarıyla cepheden cepheye koşarak ateş hattındaki mücahitlere sarsılmaz bir moral aşılamış; Şehit Cumhurbaşkanı Cevher Dudayev tarafından ‘Koman Siy’ (Milletin Onuru) nişanıyla ödüllendirilmiştir. İstanbul’da yaralı Çeçen gazileri için verdiği konserlerden dönüşünde, 10 Kasım 1996 tarihinde Ukrayna’nın Odessa kentinde Rus istihbaratının düzenlediği suikast sonucu 39 yaşında şehit düşmüştür."
    ],
    "docs": [
      "grozni-kusatmasi-dua-eden-cecen-evstafiev-1995",
      "matsiyev-cecence-rusca-sozluk-1961"
    ]
  },
  {
    "slug": "ali-itayev",
    "name": "Ali İtayev",
    "born": "1968",
    "died": "1998",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ali-itayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ali-itayev.webp?v=4",
        "caption": "Ali İtayev (1968–1998)"
      }
    ],
    "summary": "1968 yılında Çeçenistan’ın Urus-Martan bölgesinde dünyaya gelen Ali İtayev, Çeçen bağımsızlık hareketinin ilk yıllarından itibaren vatan savunmasında yer alan gözü pek saha komutanlarındandır.",
    "bio": [
      "1968 yılında Çeçenistan’ın Urus-Martan bölgesinde dünyaya gelen Ali İtayev, Çeçen bağımsızlık hareketinin ilk yıllarından itibaren vatan savunmasında yer alan gözü pek saha komutanlarındandır.",
      "Birinci Çeçen-Rus Savaşı’nda (1994–1996) Urus-Martan ve başkent Grozni cephelerinde Rus işgal ordusuna karşı en ön saflarda çarpışmış; cesareti ve saha komutanlığındaki atılganlığıyla tanınmıştır. İçkerya’nın bağımsızlığı ve onuru uğrunda ömrünü adayan Ali İtayev, 1998 yılında Çeçenistan’da bağımsızlık davası yolunda şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "leci-islamov",
    "name": "Leci İslamov (‘Sakal’ / Boroda)",
    "born": "1962",
    "died": "2004",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/leci-islamov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/leci-islamov.webp?v=4",
        "caption": "Leci İslamov (‘Sakal’ / Boroda) (1962–2004)"
      }
    ],
    "summary": "1962 yılında Gudermes’te doğan ve cephede ‘Sakal’ (Boroda) lakabıyla tanınan Tuğgeneral Leci İslamov, 1994–1996 Birinci Çeçen Savaşı’nda Grozni ve Gudermes cephelerinde gösterdiği efsanevi kahramanlıkla İçkerya devletinin en yüksek madalyası olan ‘Koman Siy’ (Milletin Onuru) nişanıyla ödüllendirilmiştir.",
    "bio": [
      "1962 yılında Gudermes’te doğan ve cephede ‘Sakal’ (Boroda) lakabıyla tanınan Tuğgeneral Leci İslamov, 1994–1996 Birinci Çeçen Savaşı’nda Grozni ve Gudermes cephelerinde gösterdiği efsanevi kahramanlıkla İçkerya devletinin en yüksek madalyası olan ‘Koman Siy’ (Milletin Onuru) nişanıyla ödüllendirilmiştir.",
      "İkinci Çeçen Savaşı’nda 1999–2000 Grozni savunmasında ve kuşatmayı yarma harekâtında ağır yaralanarak Rus güçlerine esir düşmüş; çıkarıldığı Rus mahkemelerinde davasından asla taviz vermemiştir. 21 Nisan 2004 tarihinde tutulduğu Rus cezaevinde zehirlenerek düzenlenen suikast sonucu 42 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "daud-ahmadov",
    "name": "Daud Ahmadov",
    "born": "1944",
    "died": "2004",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/daud-ahmadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/daud-ahmadov.webp?v=4",
        "caption": "Daud Ahmadov (1944–2004)"
      }
    ],
    "summary": "1944 Çeçen sürgünü yılında dünyaya gelen Tuğgeneral Daud Ahmadov, Şehit Cumhurbaşkanı Cevher Dudayev’in en yakın dava ve silah arkadaşlarından biri olarak Çeçen İçkerya Cumhuriyeti hükümetinde Sanayi Bakanı ve devlet yöneticisi olarak görev yapmıştır.",
    "bio": [
      "1944 Çeçen sürgünü yılında dünyaya gelen Tuğgeneral Daud Ahmadov, Şehit Cumhurbaşkanı Cevher Dudayev’in en yakın dava ve silah arkadaşlarından biri olarak Çeçen İçkerya Cumhuriyeti hükümetinde Sanayi Bakanı ve devlet yöneticisi olarak görev yapmıştır.",
      "1994 yılında Rus işgalinin başlamasıyla birlikte makamını bırakıp cepheye koşarak tuğgeneral rütbesiyle Şali Sektörü Komutanlığını üstlenmiş; hem Birinci hem de İkinci Çeçen Savaşı’nda dağlardan ve cepheden bir gün bile ayrılmamıştır. ‘Koman Siy’ (Milletin Onuru) nişanı sahibi olan Daud Ahmadov, 2004 yılında Çeçenistan’ın bağımsızlığı uğrunda şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "mahran-saidov",
    "name": "Mahran Saidov (Emir Mahran)",
    "born": "1975",
    "died": "Günümüz",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Gordali, Nojay-Yurt",
    "deathPlace": "—",
    "center": "Nojay-Yurt, Gudermes",
    "image": "/images/people/mahran-saidov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/mahran-saidov.webp?v=4",
        "caption": "Mahran Saidov (Emir Mahran) (1975–Günümüz)"
      }
    ],
    "summary": "22 Ocak 1975 tarihinde Çeçenistan’ın Nojay-Yurt bölgesindeki Gordali köyünde dünyaya gelen Mahran Saidov, genç yaşta katıldığı Çeçen bağımsızlık mücadelesinde Doğu Cephesi’nin en sarp dağlarında yıllarca gerilla savaşı yürütmüştür.",
    "bio": [
      "22 Ocak 1975 tarihinde Çeçenistan’ın Nojay-Yurt bölgesindeki Gordali köyünde dünyaya gelen Mahran Saidov, genç yaşta katıldığı Çeçen bağımsızlık mücadelesinde Doğu Cephesi’nin en sarp dağlarında yıllarca gerilla savaşı yürütmüştür.",
      "‘Emir Mahran’ ve ‘Kızıl Sakal’ lakaplarıyla Gudermes ve Nojay-Yurt sektörlerini yönetmiş; 2010 Tsentoroy harekâtı dahil en kritik cephe operasyonlarında ön saflarda çarpışmıştır. Rus medyasının defalarca ortaya attığı ölüm iddialarına rağmen cepheden sağ çıkan ve vatan mücadelesinin yaşayan şahitlerinden olan gazi komutandır."
    ]
  },
  {
    "slug": "tahir-batayev",
    "name": "Tahir Batayev (Emir Timur)",
    "born": "1973",
    "died": "2007",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/tahir-batayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/tahir-batayev.webp?v=4",
        "caption": "Tahir Batayev (Emir Timur) (1973–2007)"
      }
    ],
    "summary": "30 Haziran 1973’te Çeçenistan’ın Şelkovskaya bölgesindeki Sarı-Su köyünde doğan Tuğgeneral Tahir Batayev, Birinci ve İkinci Çeçen Savaşları’nda gösterdiği üstün yararlılıkla Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri Kuzeydoğu Cephesi Komutanlığı’na yükselmiştir.",
    "bio": [
      "30 Haziran 1973’te Çeçenistan’ın Şelkovskaya bölgesindeki Sarı-Su köyünde doğan Tuğgeneral Tahir Batayev, Birinci ve İkinci Çeçen Savaşları’nda gösterdiği üstün yararlılıkla Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri Kuzeydoğu Cephesi Komutanlığı’na yükselmiştir.",
      "Kuzey ovalarından Gudermes ve Nojay-Yurt dağlarına uzanan geniş cephe hattında yıllarca direniş birliklerini koordine etmiş ve ‘Koman Siy’ (Milletin Onuru) nişanıyla taltif edilmiştir. 21 Mart 2007 tarihinde Gudermes’te Rus özel kuvvetleriyle girilen çetin çatışmada son mermisine kadar çarpışarak 33 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "aslan-izrailov",
    "name": "Aslan İzrailov (Emir Sawab)",
    "born": "1977",
    "died": "2009",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aslan-izrailov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslan-izrailov.webp?v=4",
        "caption": "Aslan İzrailov (Emir Sawab) (1977–2009)"
      }
    ],
    "summary": "29 Aralık 1977’de Şali bölgesinin Novye Atagi köyünde doğan ve cephede ‘Emir Sawab’ lakabıyla tanınan Aslan İzrailov, 1999’da İkinci Çeçen Savaşı’nın başlamasıyla birlikte dağ direniş saflarına katılmıştır.",
    "bio": [
      "29 Aralık 1977’de Şali bölgesinin Novye Atagi köyünde doğan ve cephede ‘Emir Sawab’ lakabıyla tanınan Aslan İzrailov, 1999’da İkinci Çeçen Savaşı’nın başlamasıyla birlikte dağ direniş saflarına katılmıştır.",
      "Şamil Basayev’in komutasında yetişerek Doğu Cephesi’nin en sarp kalesi olan Vedeno ve Dargo sektörlerinin komutanlığını üstlenmiş; on yıl boyunca Vedeno ormanlarında Rus işgal ordusuna karşı aralıksız gerilla savaşı vermiştir. 22 Nisan 2009 tarihinde Vedeno dağlarında kuşatmaya karşı son mermisine kadar çarpışarak 31 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "islam-uspahaciyev",
    "name": "İslam Uspahaciyev",
    "born": "1973",
    "died": "2009",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/islam-uspahaciyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/islam-uspahaciyev.webp?v=4",
        "caption": "İslam Uspahaciyev (1973–2009)"
      }
    ],
    "summary": "1973 yılında dünyaya gelen İslam Uspahaciyev, Şali ve Vedeno dağ hattının en sarsılmaz Çeçen direniş komutanlarından biri olarak Birinci ve İkinci Çeçen Savaşları boyunca vatan topraklarını terk etmeden çarpışmıştır.",
    "bio": [
      "1973 yılında dünyaya gelen İslam Uspahaciyev, Şali ve Vedeno dağ hattının en sarsılmaz Çeçen direniş komutanlarından biri olarak Birinci ve İkinci Çeçen Savaşları boyunca vatan topraklarını terk etmeden çarpışmıştır.",
      "Şali–Avtury–Vedeno üçgeninde direniş birliklerinin lojistik ve askeri operasyonlarını yönetmiş; yıllarca süren kuşatma ve ağır kış şartlarına rağmen silahını bir gün bile bırakmamıştır. Ekim 2009’da Çeçenistan’da Rus işgal güçleriyle girdiği silahlı çatışmada son nefesine kadar vuruşarak şehit düşmüştür."
    ]
  },
  {
    "slug": "amina-okuyeva",
    "name": "Amina Okuyeva",
    "born": "1983",
    "died": "2017",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/amina-okuyeva.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/amina-okuyeva.webp?v=4",
        "caption": "Amina Okuyeva (1983–2017)"
      }
    ],
    "summary": "5 Haziran 1983’te doğan cerrah ve askeri doktor Amina Okuyeva, Çeçen özgürlük mücadelesinin sembol kadın savaşçısı olarak İkinci Çeçen Savaşı’nda başkent Grozni’de yaralı direnişçileri ateş altında tedavi etmiş ve cephede bizzat yer almıştır.",
    "bio": [
      "5 Haziran 1983’te doğan cerrah ve askeri doktor Amina Okuyeva, Çeçen özgürlük mücadelesinin sembol kadın savaşçısı olarak İkinci Çeçen Savaşı’nda başkent Grozni’de yaralı direnişçileri ateş altında tedavi etmiş ve cephede bizzat yer almıştır.",
      "2014 sonrasında eşi Adem Osmayev ve Tuğgeneral İsa Munayev ile birlikte Uluslararası Cevher Dudayev Barış Gücü Taburu’nda Rus emperyalizmine karşı cephede görev yapmıştır. Haziran 2017’de Kiev’de Rus istihbarat suikastçısının saldırısını kendi tabancasıyla karşılık vererek püskürten Amina Okuyeva, 30 Ekim 2017 tarihinde Kiev yakınlarında kurulan silahlı pusuda şehit düşmüştür."
    ]
  },
  {
    "slug": "aslambek-vadalov",
    "name": "Aslambek Vadalov (Emir Aslambek)",
    "born": "1971",
    "died": "Günümüz",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "İşhoy-Yurt, Gudermes",
    "deathPlace": "—",
    "center": "Gudermes, Doğu Cephesi",
    "image": "/images/people/aslambek-vadalov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslambek-vadalov.webp?v=4",
        "caption": "Aslambek Vadalov (Emir Aslambek) (1971–Günümüz)"
      }
    ],
    "summary": "4 Nisan 1971 tarihinde Gudermes bölgesinin İşhoy-Yurt köyünde dünyaya gelen Aslambek Vadalov, 1994 yılında başlayan Birinci Çeçen Savaşı’nda Şeyh Mansur taburunda direniş saflarına katılmış ve her iki savaş boyunca en ön cephede yer almıştır.",
    "bio": [
      "4 Nisan 1971 tarihinde Gudermes bölgesinin İşhoy-Yurt köyünde dünyaya gelen Aslambek Vadalov, 1994 yılında başlayan Birinci Çeçen Savaşı’nda Şeyh Mansur taburunda direniş saflarına katılmış ve her iki savaş boyunca en ön cephede yer almıştır.",
      "İkinci Çeçen Savaşı’nda Gudermes Sektörü ve Doğu Cephesi Komutanı olarak dağ birliklerine liderlik etmiş; Ağustos 2010’daki tarihi Tsentoroy harekâtını yöneten başkomutanlardan biri olmuştur. Yirmi yılı aşkın kesintisiz cephe mücadelesinin ardından hayatta kalan gazi Çeçen komutanlarındandır."
    ]
  },
  {
    "slug": "tarhan-gaziyev",
    "name": "Tarhan Gaziyev (Emir Tarhan)",
    "born": "1965",
    "died": "Günümüz",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Buğaroy, İtum-Kale",
    "deathPlace": "—",
    "center": "İtum-Kale, Güneybatı Cephesi",
    "image": "/images/people/tarhan-gaziyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/tarhan-gaziyev.webp?v=4",
        "caption": "Tarhan Gaziyev (Emir Tarhan) (1965–Günümüz)"
      }
    ],
    "summary": "11 Kasım 1965 tarihinde Çeçenistan’ın İtum-Kale bölgesindeki Buğaroy köyünde dünyaya gelen Tarhan Gaziyev, Birinci ve İkinci Çeçen Savaşları boyunca güneybatı dağ cephelerinde aralıksız savaşmıştır.",
    "bio": [
      "11 Kasım 1965 tarihinde Çeçenistan’ın İtum-Kale bölgesindeki Buğaroy köyünde dünyaya gelen Tarhan Gaziyev, Birinci ve İkinci Çeçen Savaşları boyunca güneybatı dağ cephelerinde aralıksız savaşmıştır.",
      "2006 yılında Güneybatı Cephesi Komutanlığına atanarak ‘Emir Tarhan’ adıyla tanınmış; Açhoy-Martan, Urus-Martan ve İtum-Kale dağlarındaki direniş ağını yıllarca koordine etmiştir. Onlarca ağır kuşatmayı yararak cepheden sağ çıkan ve bağımsızlık davasını sürdüren gazi Çeçen komutandır."
    ]
  },
  {
    "slug": "seyh-ahmed-edilov",
    "name": "Şeyh-Ahmed Edilov",
    "born": "1965",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/seyh-ahmed-edilov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/seyh-ahmed-edilov.webp?v=4",
        "caption": "Şeyh-Ahmed Edilov (1965–2000)"
      }
    ],
    "summary": "1965 yılında Çeçenistan’ın Nojay-Yurt bölgesine bağlı Zandak köyünde dünyaya gelen Şeyh-Ahmed Edilov, Çeçen bağımsızlık mücadelesinin seçkin alay komutanlarından ve kurmay başkanlarındandır.",
    "bio": [
      "1965 yılında Çeçenistan’ın Nojay-Yurt bölgesine bağlı Zandak köyünde dünyaya gelen Şeyh-Ahmed Edilov, Çeçen bağımsızlık mücadelesinin seçkin alay komutanlarından ve kurmay başkanlarındandır.",
      "1994 yılında başlayan Birinci Rus-Çeçen Savaşı’nın ilk günlerinden itibaren cephede yer almış; başkent Cahar (Grozni), Gudermes ve doğduğu Zandak köyünün savunmasında ön saflarda çarpışmıştır. Komutan Aydamir Abalayev’in birliğinde Alay Komutanı ve Kurmay Başkanı olarak görev yapmış; Cahar’ın kurtuluşunda önemli rol oynamış ve İkinci Rus-Çeçen Savaşı’nda vatan uğruna şehit düşmüştür."
    ]
  },
  {
    "slug": "huseyin-ishanov",
    "name": "Hüseyin İshanov",
    "born": "1958",
    "died": "Günümüz",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "—",
    "center": "Grozni, Argun",
    "image": "/images/people/huseyin-ishanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/huseyin-ishanov.webp?v=4",
        "caption": "Hüseyin İshanov (1958–Günümüz)"
      }
    ],
    "summary": "22 Temmuz 1958 tarihinde dünyaya gelen Tuğgeneral Hüseyin İshanov, Çeçen milli bağımsızlık hareketinin ilk yıllarından itibaren devlet inşasında ve vatan savunmasında yer almıştır.",
    "bio": [
      "22 Temmuz 1958 tarihinde dünyaya gelen Tuğgeneral Hüseyin İshanov, Çeçen milli bağımsızlık hareketinin ilk yıllarından itibaren devlet inşasında ve vatan savunmasında yer almıştır.",
      "1994–1996 Birinci Çeçen-Rus Savaşı’nda başkent Grozni ve Argun cephelerinde komutanlık yaparak tuğgeneral rütbesine yükselmiş; 1997’de Çeçen İçkerya Cumhuriyeti Parlamentosu milletvekili seçilerek Cumhurbaşkanı Aslan Mashadov’un yanında görev yapmıştır. Sürgünde de Çeçen halkının bağımsızlık mücadelesini kararlılıkla sürdüren gazi generaldir."
    ]
  },
  {
    "slug": "isa-muskiyev",
    "name": "İsa Muskiyev (Emir Halid)",
    "born": "1974",
    "died": "2006",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/isa-muskiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/isa-muskiyev.webp?v=4",
        "caption": "İsa Muskiyev (Emir Halid) (1974–2006)"
      }
    ],
    "summary": "1974 yılında Tsotsin-Yurt’ta doğan ve beş oğlunu bağımsızlık savaşına uğurlayan kahraman Muskiyev ailesinin komutan evladı olan İsa Muskiyev (‘Emir Halid’), Cumhurbaşkanı Aslan Mashadov’un koruma ekibinde ve Şehit Cumhurbaşkanı Abdul-Halim Sadulayev’in yakın karargâhında görev yapmıştır.",
    "bio": [
      "1974 yılında Tsotsin-Yurt’ta doğan ve beş oğlunu bağımsızlık savaşına uğurlayan kahraman Muskiyev ailesinin komutan evladı olan İsa Muskiyev (‘Emir Halid’), Cumhurbaşkanı Aslan Mashadov’un koruma ekibinde ve Şehit Cumhurbaşkanı Abdul-Halim Sadulayev’in yakın karargâhında görev yapmıştır.",
      "Kurtçaloy ve Şali sektörleri komutanı olarak 2004–2005 yıllarında Şali, Tsotsin-Yurt, Argun ve Tambov GRU özel kuvvetlerine karşı düzenlenen en ağır cephe operasyonlarını bizzat yönetmiş; çatışmalarda daima askerlerinin en önünde ilerlemesiyle tanınmıştır. 18 Eylül 2006 tarihinde en küçük kardeşi Ali Muskiyev ile aynı gün Rus kuşatmasında son mermisine kadar çarpışarak 32 yaşında şehit düşmüştür."
    ]
  },
  {
    "slug": "komutan-abdulmalik",
    "name": "Komutan Abdulmalik",
    "born": "1975",
    "died": "2008",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/komutan-abdulmalik.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/komutan-abdulmalik.webp?v=4",
        "caption": "Komutan Abdulmalik (1975–2008)"
      }
    ],
    "summary": "1975 yılında dünyaya gelen Komutan Abdulmalik, Güney Cephesi ve Şali Sektörü direniş emirlerinden biri olarak Emir Mühenned ve Aslambek Vadalov ile dağ cephelerinde omuz omuza savaşmıştır.",
    "bio": [
      "1975 yılında dünyaya gelen Komutan Abdulmalik, Güney Cephesi ve Şali Sektörü direniş emirlerinden biri olarak Emir Mühenned ve Aslambek Vadalov ile dağ cephelerinde omuz omuza savaşmıştır.",
      "Çeçenistan’daki en ağır kuşatma ve kış yıllarında mücahit birliklerinin ikmal hatlarını ve dağ pusularını yönetmiş; sarsılmaz imanı, tevazusu ve cesur liderliğiyle cephedeki silah arkadaşlarına örnek olmuştur. 2008 yılında Çeçenistan dağlarında Rus işgal güçleriyle girilen silahlı çatışmada şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "ali-muskiyev",
    "name": "Ali Muskiyev",
    "born": "1987",
    "died": "2006",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ali-muskiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ali-muskiyev.webp?v=4",
        "caption": "Ali Muskiyev (1987–2006)"
      }
    ],
    "summary": "1987 yılında Tsotsin-Yurt’ta doğan Ali Muskiyev, beş oğlunu Çeçenistan’ın bağımsızlık savaşına uğurlayan efsanevi Muskiyev kardeşlerin en küçüğüdür.",
    "bio": [
      "1987 yılında Tsotsin-Yurt’ta doğan Ali Muskiyev, beş oğlunu Çeçenistan’ın bağımsızlık savaşına uğurlayan efsanevi Muskiyev kardeşlerin en küçüğüdür.",
      "Ağabeyi Şamil Muskiyev’in 2005 yılındaki şehadetinin ardından henüz genç yaşta onun sancağını devralarak Şehit Cumhurbaşkanı Abdul-Halim Sadulayev’in şehadetine kadar yakın muhafızlığında görev yapmış, ardından ağabeyi Komutan İsa Muskiyev ile birlikte cephede çarpışmıştır. 18 Eylül 2006 tarihinde henüz 19 yaşındayken ağabeyi İsa Muskiyev ile aynı gün omuz omuza vuruşarak şehit düşmüştür."
    ]
  },
  {
    "slug": "ebu-hafs",
    "name": "Emir Ebu Hafs el-Ürdüni",
    "born": "1973",
    "died": "2006",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ebu-hafs.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ebu-hafs.webp?v=4",
        "caption": "Emir Ebu Hafs el-Ürdüni (1973–2006)"
      }
    ],
    "summary": "1973 yılında doğan ve genç yaşta Kafkasya’ya gelerek Çeçen bağımsızlık direnişine katılan Emir Ebu Hafs, Şamil Basayev, Emir Hattab, Ebu el-Velid ve İsa Muskiyev ile dağ kamplarında ve cephelerde omuz omuza savaşmıştır.",
    "bio": [
      "1973 yılında doğan ve genç yaşta Kafkasya’ya gelerek Çeçen bağımsızlık direnişine katılan Emir Ebu Hafs, Şamil Basayev, Emir Hattab, Ebu el-Velid ve İsa Muskiyev ile dağ kamplarında ve cephelerde omuz omuza savaşmıştır.",
      "Zorlu Kafkas kışlarında direniş birliklerinin askeri eğitim ve lojistik organizasyonunu üstlenmiş; Nisan 2004’te Ebu el-Velid’in şehadetinin ardından gönüllü mücahitler şûrasının komutanlığını devralmıştır. 26 Kasım 2006 tarihinde Dağıstan’ın Hasavyurt şehrinde Rus özel kuvvetlerinin kuşatmasında dört silah arkadaşıyla birlikte son mermisine kadar çatışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "emir-muhenned",
    "name": "Emir Mühenned (Halid Yusuf)",
    "born": "1969",
    "died": "2011",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya – Pankisi",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/emir-muhenned.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/emir-muhenned.webp?v=4",
        "caption": "Emir Mühenned (Halid Yusuf) (1969–2011)"
      }
    ],
    "summary": "1969 yılında dünyaya gelen ve eski bir savaş pilotu teğmen olan Emir Mühenned, önce Bosna cephesinde savaşmış, 1999 yılında ise Gürcistan’ın Pankisi Vadisi üzerinden yürüyerek kuşatma altındaki Çeçenistan’a geçmiştir.",
    "bio": [
      "1969 yılında dünyaya gelen ve eski bir savaş pilotu teğmen olan Emir Mühenned, önce Bosna cephesinde savaşmış, 1999 yılında ise Gürcistan’ın Pankisi Vadisi üzerinden yürüyerek kuşatma altındaki Çeçenistan’a geçmiştir.",
      "On iki yıl boyunca Çeçenistan dağlarından hiç ayrılmadan Emir Hattab, Ebu el-Velid ve Ebu Hafs ile omuz omuza çarpışmış; Kasım 2006’da Ebu Hafs’ın şehadetinin ardından yabancı gönüllü mücahitlerin komutanlığını ve başkomutanlığın askeri vekilliğini üstlenmiştir. 21 Nisan 2011 tarihinde Şali bölgesinin Serjen-Yurt dağ ormanlarında Rus özel kuvvetleriyle girdiği çatışmada son nefesine kadar vuruşarak şehit düşmüştür."
    ]
  },
  {
    "slug": "vaha-canaraliyev",
    "name": "Vaha Canaraliyev (Emir Velid)",
    "born": "1981",
    "died": "2008",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/vaha-canaraliyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/vaha-canaraliyev.webp?v=4",
        "caption": "Vaha Canaraliyev (Emir Velid) (1981–2008)"
      }
    ],
    "summary": "1981 doğumlu Vaha Canaraliyev, İkinci Çeçen Savaşı başladığında henüz on sekiz yaşındayken direniş saflarına katılmış; cephede “Emir Velid” ve “Rijiy Vaha” lakaplarıyla tanınmıştır.",
    "bio": [
      "1981 doğumlu Vaha Canaraliyev, İkinci Çeçen Savaşı başladığında henüz on sekiz yaşındayken direniş saflarına katılmış; cephede “Emir Velid” ve “Rijiy Vaha” lakaplarıyla tanınmıştır.",
      "Gudermes, Kurchaloy ve Nojay-Yurt dağ sektörlerinde direniş birliklerine komutanlık yapmış; yıllarca süren ağır kuşatma koşullarında yüksek cesareti ve askeri disipliniyle ön plana çıkmıştır. 2008 yılında Çeçenistan’da Rus işgal güçleriyle girdiği silahlı çatışmada son mermisine kadar vuruşarak şehit düşmüştür."
    ]
  },
  {
    "slug": "sultan-hadisov",
    "name": "Sultan Hadisov (Emir Musa)",
    "born": "1968",
    "died": "2006",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/sultan-hadisov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/sultan-hadisov.webp?v=4",
        "caption": "Sultan Hadisov (Emir Musa) (1968–2006)"
      }
    ],
    "summary": "1968 yılında Kurchaloy bölgesinin Bachi-Yurt köyünde dünyaya gelen Sultan Hadisov, Birinci ve İkinci Çeçen Savaşları’nın en tecrübeli saha komutanlarından biri olarak “Emir Musa” lakabıyla tanınmıştır.",
    "bio": [
      "1968 yılında Kurchaloy bölgesinin Bachi-Yurt köyünde dünyaya gelen Sultan Hadisov, Birinci ve İkinci Çeçen Savaşları’nın en tecrübeli saha komutanlarından biri olarak “Emir Musa” lakabıyla tanınmıştır.",
      "Kurchaloy ve Doğu Çeçenistan cephesinde direniş birliklerini yönetmiş; yıllar süren Rus kuşatmalarına rağmen doğduğu toprakları terk etmeyerek dağ birliklerinin direniş hattını ayakta tutmuştur. Mart 2006’da Bachi-Yurt ve Kurchaloy hattında Rus güçleriyle çıkan çatışmada kahramanca çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "ilman-estamirov",
    "name": "İlman Estamirov",
    "born": "1977",
    "died": "2011",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ilman-estamirov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ilman-estamirov.webp?v=4",
        "caption": "İlman Estamirov (1977–2011)"
      }
    ],
    "summary": "1977 yılında Grozni bölgesinin Çeçen-Aul köyünde dünyaya gelen İlman Estamirov, Grozni ve Argun cephesinin en sarsılmaz direniş komutanlarından biri olarak uzun yıllar Çeçenistan dağlarında mücadele etmiştir.",
    "bio": [
      "1977 yılında Grozni bölgesinin Çeçen-Aul köyünde dünyaya gelen İlman Estamirov, Grozni ve Argun cephesinin en sarsılmaz direniş komutanlarından biri olarak uzun yıllar Çeçenistan dağlarında mücadele etmiştir.",
      "Merkez cephede direniş birliklerinin keşif ve taarruz operasyonlarına liderlik etmiş; en çetin kış şartlarında ve çember operasyonlarında dahi mevzisini terk etmemiştir. Şubat 2011’de Çeçenistan’da Rus güvenlik güçleriyle girdiği silahlı çatışmada son kurşununa kadar çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "ahmad-tevzaninski",
    "name": "Ahmad Tevzaninski (Ebu-Cafar)",
    "born": "1983",
    "died": "2008",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ahmad-tevzaninski.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ahmad-tevzaninski.webp?v=4",
        "caption": "Ahmad Tevzaninski (Ebu-Cafar) (1983–2008)"
      }
    ],
    "summary": "1983 yılında Vedeno bölgesinin Tevzana köyünde dünyaya gelen Ahmad, genç yaşta Çeçen bağımsızlık direnişine katılmış ve cephede “Ebu-Cafar” lakabıyla tanınmıştır.",
    "bio": [
      "1983 yılında Vedeno bölgesinin Tevzana köyünde dünyaya gelen Ahmad, genç yaşta Çeçen bağımsızlık direnişine katılmış ve cephede “Ebu-Cafar” lakabıyla tanınmıştır.",
      "Vedeno ve Şali dağ ormanlarında direniş komutanlarının yanında en ön saflarda çarpışmış; dağ savaşlarındaki cesareti, taktik zekâsı ve silah arkadaşlarına olan bağlılığıyla iz bırakmıştır. 2008 yılında Çeçenistan dağlarında Rus işgal birlikleriyle girdiği çatışmada son nefesine kadar savaşarak şehit düşmüştür."
    ]
  },
  {
    "slug": "saydi-tevzaninski",
    "name": "Saydi Tevzaninski",
    "born": "1985",
    "died": "2011",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/saydi-tevzaninski.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/saydi-tevzaninski.webp?v=4",
        "caption": "Saydi Tevzaninski (1985–2011)"
      }
    ],
    "summary": "1985 yılında Vedeno bölgesinin Tevzana köyünde dünyaya gelen Saydi, İkinci Çeçen Savaşı yıllarında çok genç yaşta Vedeno dağ birliklerine katılarak vatan savunmasında yer almıştır.",
    "bio": [
      "1985 yılında Vedeno bölgesinin Tevzana köyünde dünyaya gelen Saydi, İkinci Çeçen Savaşı yıllarında çok genç yaşta Vedeno dağ birliklerine katılarak vatan savunmasında yer almıştır.",
      "Ağır kış şartlarında ve kesintisiz kuşatmalar altında Tevzana, Hatuni ve Serjen-Yurt ormanlarında direnişin lojistik ve savunma hatlarında yıllarca görev yapmıştır. 2011 yılında Güney Çeçenistan dağlarında Rus özel kuvvetleriyle çıkan çatışmada kahramanca vuruşarak şehit düşmüştür."
    ]
  },
  {
    "slug": "isa-izerhanov",
    "name": "İsa İzerhanov (Kara İsa)",
    "born": "1968",
    "died": "2009",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/isa-izerhanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/isa-izerhanov.webp?v=4",
        "caption": "İsa İzerhanov (Kara İsa) (1968–2009)"
      }
    ],
    "summary": "1968 doğumlu İsa İzerhanov, Nojay-Yurt ve Gudermes dağ sektörünün en tecrübeli mücahit komutanlarından biri olarak cephede “Kara İsa” (Çyornıy İsa) lakabıyla tanınmıştır.",
    "bio": [
      "1968 doğumlu İsa İzerhanov, Nojay-Yurt ve Gudermes dağ sektörünün en tecrübeli mücahit komutanlarından biri olarak cephede “Kara İsa” (Çyornıy İsa) lakabıyla tanınmıştır.",
      "Birinci ve İkinci Çeçen Savaşları boyunca Doğu Çeçenistan ormanlarında direniş birliklerinin ikmal ve savunma hatlarını korumuş; yıllarca süren dağ şartlarında sabrı ve askeri disipliniyle örnek olmuştur. Mayıs 2009’da Nojay-Yurt dağlarında Rus birlikleriyle çıkan çatışmada son mermisine kadar çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "musa-muskiyev",
    "name": "Musa Muskiyev",
    "born": "1980",
    "died": "1999",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/musa-muskiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/musa-muskiyev.webp?v=4",
        "caption": "Musa Muskiyev (1980–1999)"
      }
    ],
    "summary": "1980 yılında Şali bölgesinin Tsotsi-Yurt köyünde dünyaya gelen Musa Muskiyev, Çeçen direniş tarihine adlarını altın harflerle yazdıran beş şehit kardeşten oluşan kahraman Muskiyev ailesinin en genç fertlerindendir.",
    "bio": [
      "1980 yılında Şali bölgesinin Tsotsi-Yurt köyünde dünyaya gelen Musa Muskiyev, Çeçen direniş tarihine adlarını altın harflerle yazdıran beş şehit kardeşten oluşan kahraman Muskiyev ailesinin en genç fertlerindendir.",
      "Ağabeyleri Şoyip, İsa, Şamil ve Ali Muskiyev ile birlikte vatan savunmasında en ön saflarda yer almış; genç yaşına rağmen yüksek cesareti ve adanmışlığıyla cephede örnek olmuştur. İkinci Çeçen Savaşı’nın başında, 2 Kasım 1999 tarihinde henüz on dokuz yaşındayken Rus işgal güçleriyle girdiği çatışmada şehit düşerek Muskiyev kardeşlerin ilk şehidi olmuştur."
    ]
  },
  {
    "slug": "soyip-muskiyev",
    "name": "Şoyip Muskiyev",
    "born": "1967",
    "died": "2002",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/soyip-muskiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/soyip-muskiyev.webp?v=4",
        "caption": "Şoyip Muskiyev (1967–2002)"
      }
    ],
    "summary": "1967 yılında Şali bölgesinin Tsotsi-Yurt köyünde dünyaya gelen Şoyip Muskiyev, beş kardeşin tamamı vatan uğruna şehit düşen efsanevi Muskiyev ailesinin en büyük ağabeyidir.",
    "bio": [
      "1967 yılında Şali bölgesinin Tsotsi-Yurt köyünde dünyaya gelen Şoyip Muskiyev, beş kardeşin tamamı vatan uğruna şehit düşen efsanevi Muskiyev ailesinin en büyük ağabeyidir.",
      "Birinci ve İkinci Çeçen Savaşları boyunca kardeşleri İsa, Şamil, Musa ve Ali Muskiyev ile birlikte Çeçen bağımsızlık ordusunda omuz omuza çarpışmış; Tsotsi-Yurt ve Şali bölgesindeki direniş faaliyetlerinin temel direklerinden biri olmuştur. 2002 yılında Rus işgal kuvvetlerine karşı yürütülen direniş mücadelesinde şehit düşerek kardeşi Musa’nın ardından şehadet kervanına katılmıştır."
    ]
  },
  {
    "slug": "samil-muskiyev",
    "name": "Şamil Muskiyev",
    "born": "1976",
    "died": "2005",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/samil-muskiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/samil-muskiyev.webp?v=4",
        "caption": "Şamil Muskiyev (1976–2005)"
      }
    ],
    "summary": "1976 yılında Şali bölgesinin Tsotsi-Yurt köyünde dünyaya gelen Şamil Muskiyev, ağabeyi Emir İsa Muskiyev’in en yakın silah arkadaşı, yardımcısı ve Muskiyev ailesinin şehit düşen beş kahraman evladından biridir.",
    "bio": [
      "1976 yılında Şali bölgesinin Tsotsi-Yurt köyünde dünyaya gelen Şamil Muskiyev, ağabeyi Emir İsa Muskiyev’in en yakın silah arkadaşı, yardımcısı ve Muskiyev ailesinin şehit düşen beş kahraman evladından biridir.",
      "Her iki Çeçen Savaşı’nda da Tsotsi-Yurt, Kurchaloy ve Şali sektörlerinde Rus zırhlı birliklerine ve işgal karargâhlarına karşı düzenlenen en kritik operasyonlarda en ön safta çarpışmıştır. Eylül 2005’te Tsotsi-Yurt ve Kurchaloy hattında Rus özel kuvvetleriyle girdiği şiddetli çatışmada son mermisine kadar vuruşarak şehit düşmüştür."
    ]
  },
  {
    "slug": "murad-yusuphaciyev",
    "name": "Murad Yusuphaciyev (Emir Ebu Sayaf)",
    "born": "1978",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/murad-yusuphaciyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/murad-yusuphaciyev.webp?v=4",
        "caption": "Murad Yusuphaciyev (Emir Ebu Sayaf) (1978–2002)"
      }
    ],
    "summary": "1978 doğumlu Murad Yusuphaciyev, Grozni direnişinde “Emir Ebu Sayaf” künyesiyle tanınan gözü pek bir cemaat emiridir.",
    "bio": [
      "1978 doğumlu Murad Yusuphaciyev, Grozni direnişinde “Emir Ebu Sayaf” künyesiyle tanınan gözü pek bir cemaat emiridir.",
      "En ağır kuşatma günlerinde dahi Grozni sokaklarında tek başına özel operasyonlar düzenlemiş; Steçkin tabancası ve Hattabka bombalarıyla Rus işgalci istihbaratçılarını etkisiz hale getirmiştir. Grozni’nin Zavodskoy bölgesinde Çeçen halkına işkence eden işgalci operasyon şefini bizzat cezalandırmış; 2002 yılında vatan toprağını savunurken girdiği çatışmada son nefesine kadar vuruşarak şehit düşmüştür."
    ]
  },
  {
    "slug": "rabbani-halilov",
    "name": "Rabbani Halilov",
    "born": "1969",
    "died": "2007",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/rabbani-halilov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/rabbani-halilov.webp?v=4",
        "caption": "Rabbani Halilov (1969–2007)"
      }
    ],
    "summary": "1969 doğumlu Rabbani Halilov, Dağıstan cephesi emiri ve Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri tuğgeneralidir.",
    "bio": [
      "1969 doğumlu Rabbani Halilov, Dağıstan cephesi emiri ve Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri tuğgeneralidir.",
      "1999 yılından itibaren Kafkasya direnişinin en ön saflarında komuta görevi üstlenmiş; Şamil Basayev ve Cumhurbaşkanı Abdulhalim Sadulayev’in en yakın silah arkadaşlarından ve cephe komutanlarından biri olmuştur. Üstün cesaret ve liderliği nedeniyle Çeçen devletinin en yüksek nişanlarından “Ulusun Onuru” (Koman Siy) ile onurlandırılan Tuğgeneral Rabbani Halilov, 17 Eylül 2007 tarihinde yardımcısı Nabi Nabiyev ile birlikte kuşatıldığı evde son kurşununa kadar çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "aldili-ali",
    "name": "Aldılı Ali",
    "born": "1980",
    "died": "1996",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aldili-ali.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aldili-ali.webp?v=4",
        "caption": "Aldılı Ali (1980–1996)"
      }
    ],
    "summary": "1980 yılında Grozni’nin Aldı kasabasında dünyaya gelen Ali, henüz 15 yaşındayken Birinci Rus-Çeçen Savaşı’nda vatan savunmasına katılan genç bir Çeçen kahramanıdır.",
    "bio": [
      "1980 yılında Grozni’nin Aldı kasabasında dünyaya gelen Ali, henüz 15 yaşındayken Birinci Rus-Çeçen Savaşı’nda vatan savunmasına katılan genç bir Çeçen kahramanıdır.",
      "Ocak 1996’da Komutan Hüseyin İsabayev’in Özel Amaçlı Taburu’nda makineli tüfekçi olarak görev almış; Mart 1996 Grozni taarruzunda ve Goyskoye köyü savunmasında en ön siperde çarpışmıştır. Bin mermilik makineli tüfek şeridini son fişeğine kadar boşaltmadan mevzisini terk etmemeye ant içen Aldılı Ali, 16 Nisan 1996 tarihinde henüz 16 yaşındayken Goyskoye’de Rus Hava İndirme birliklerine karşı çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "abubakar-hamurzayev",
    "name": "Abubakar Hamurzayev",
    "born": "1975",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/abubakar-hamurzayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/abubakar-hamurzayev.webp?v=4",
        "caption": "Abubakar Hamurzayev (1975–2000)"
      }
    ],
    "summary": "1975 yılında Gudermes’te dünyaya gelen Abubakar Hamurzayev, korkusuzluğu ve en şiddetli çatışmaların ortasındaki tebessümüyle tanınan Çeçen mücahitlerindendir.",
    "bio": [
      "1975 yılında Gudermes’te dünyaya gelen Abubakar Hamurzayev, korkusuzluğu ve en şiddetli çatışmaların ortasındaki tebessümüyle tanınan Çeçen mücahitlerindendir.",
      "Emir Abdurrahman Cemaati saflarında 15 Ocak 2000 Duba-Yurt muharebesinde yoğun ateş altında hiç eğilmeden ayakta çarpışarak Rus özel kuvvetlerinin püskürtülmesinde destan yazmıştır. 29 Şubat 2000’de Ulus-Kert 776 rakımlı tepe taarruzunda en ön safta hücuma kalkmış ve 1 Mart 2000 tarihinde Ulus-Kert sırtlarında göğüs göğüse çarpışmada şehit düşmüştür."
    ]
  },
  {
    "slug": "ilyas-pasayev",
    "name": "İlyas Paşayev",
    "born": "1973",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ilyas-pasayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ilyas-pasayev.webp?v=4",
        "caption": "İlyas Paşayev (1973–2000)"
      }
    ],
    "summary": "1973 yılında Alhan-Yurt’ta dünyaya gelen ve Dişni taypına mensup olan İlyas Paşayev, “Cihad” Taburu Emiri ve Çeçen direnişinin seçkin komutanlarındandır.",
    "bio": [
      "1973 yılında Alhan-Yurt’ta dünyaya gelen ve Dişni taypına mensup olan İlyas Paşayev, “Cihad” Taburu Emiri ve Çeçen direnişinin seçkin komutanlarındandır.",
      "1994’teki Birinci Rus-Çeçen Savaşı’ndan itibaren Tuğgeneral Ramzan Tsakayev ile omuz omuza çarpışmış; Tsakayev’in şehadetinin ardından “Cihad” Taburu’nun komutasını devralarak İçkerya devlet nişanlarına layık görülmüştür. 1 Mart 2000 tarihinde Ulus-Kert 776 rakımlı tepede Rus Pskov Hava İndirme Tümeni’ne karşı yürütülen tarihi muharebede şehit düşmüştür."
    ]
  },
  {
    "slug": "halid-yandurkayev",
    "name": "Halid Yandurkayev",
    "born": "1974",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/halid-yandurkayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/halid-yandurkayev.webp?v=4",
        "caption": "Halid Yandurkayev (1974–2000)"
      }
    ],
    "summary": "1974 yılında Açhoy-Martan’da dünyaya gelen ve Aytkhaloy taypına mensup olan Halid Yandurkayev, Emir Abdul-Hadi (Arbi Ditayev) komutasındaki Özel Taarruz Birliği’nde ve Abdurrahman Cemaati’nde Hücum Grubu Emiri olarak görev yapmıştır.",
    "bio": [
      "1974 yılında Açhoy-Martan’da dünyaya gelen ve Aytkhaloy taypına mensup olan Halid Yandurkayev, Emir Abdul-Hadi (Arbi Ditayev) komutasındaki Özel Taarruz Birliği’nde ve Abdurrahman Cemaati’nde Hücum Grubu Emiri olarak görev yapmıştır.",
      "29 Şubat 2000’de Ulus-Kert 776 rakımlı tepeyi kuşatan 30 kişilik öncü kıtada yer almış; on kişilik hücum timine bizzat öncülük ederek düşman hatlarını yaran ilk komutan olmuştur. 1 Mart 2000 tarihinde silah arkadaşı Ali Taltayev ile birlikte Ulus-Kert muharebesinde kahramanca çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "has-muhammed-hatuyev",
    "name": "Has-Muhammed Hatuyev (Kaboj)",
    "born": "1968",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/has-muhammed-hatuyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/has-muhammed-hatuyev.webp?v=4",
        "caption": "Has-Muhammed Hatuyev (Kaboj) (1968–1995)"
      }
    ],
    "summary": "1968 yılında Goyti köyünde dünyaya gelen ve “Kaboj” künyesiyle efsaneleşen Has-Muhammed Hatuyev, savaştan önce Dünya ve Olimpiyat Şampiyonası’na hazırlanan milli güreşçi ve antrenördü.",
    "bio": [
      "1968 yılında Goyti köyünde dünyaya gelen ve “Kaboj” künyesiyle efsaneleşen Has-Muhammed Hatuyev, savaştan önce Dünya ve Olimpiyat Şampiyonası’na hazırlanan milli güreşçi ve antrenördü.",
      "Aralık 1994’te başlayan Grozni savunmasında tek başına 47 Rus tankı ve zırhlı aracını imha ederek Çeçen direniş tarihinin en büyük zırhlı araç avcılarından biri olmuş; Cumhurbaşkanı Cevher Dudayev tarafından “Ulusun Kahramanı” (Koman Turpal) ve “Ulusun Onuru” (Koman Siy) nişanlarıyla ödüllendirilmiştir. 28 Ocak 1995 tarihinde Grozni Trampark çarpışmasında üç Rus tankını daha vurduktan sonra aldığı ağır yaralar sonucu şehit düşmüştür."
    ]
  },
  {
    "slug": "bay-ali-kasumov",
    "name": "Bay-Ali Kasumov",
    "born": "1977",
    "died": "2016",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/bay-ali-kasumov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/bay-ali-kasumov.webp?v=4",
        "caption": "Bay-Ali Kasumov (1977–2016)"
      }
    ],
    "summary": "1977 doğumlu Bay-Ali Kasumov, Kafkasya Emiri Dokku Umarov’un en yakın muhafızı ve uzun yıllar boyunca dağ cephelerinde en ağır kuşatmalarda çarpışan sarsılmaz iradeli bir Çeçen mücahididir.",
    "bio": [
      "1977 doğumlu Bay-Ali Kasumov, Kafkasya Emiri Dokku Umarov’un en yakın muhafızı ve uzun yıllar boyunca dağ cephelerinde en ağır kuşatmalarda çarpışan sarsılmaz iradeli bir Çeçen mücahididir.",
      "Dokku Umarov’un şehit düştüğü hain zehirlenme saldırısından sağ kurtularak dağlardaki direnişi sürdürmüş; ağır yaralı ve bitkin olmasına rağmen düşmana teslim olmayı asla kabul etmemiştir. 25 Ocak 2016 tarihinde kuşatıldığı evde Rus özel kuvvetlerine karşı son kurşununa kadar çarpışarak şehit düşmüştür."
    ]
  },
  {
    "slug": "ali-adayev",
    "name": "Ali Adayev (Lambada)",
    "born": "1966",
    "died": "1995",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ali-adayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ali-adayev.webp?v=4",
        "caption": "Ali Adayev (Lambada) (1966–1995)"
      }
    ],
    "summary": "1966 doğumlu Ali Adayev, “Lambada” künyesiyle tanınan, Şamil Basayev’in kurmay başkanı ve 1990’lı yılların başından itibaren Çeçen devletinin bağımsızlık sürecinde en ön safta yer alan öncü komutanlardandır.",
    "bio": [
      "1966 doğumlu Ali Adayev, “Lambada” künyesiyle tanınan, Şamil Basayev’in kurmay başkanı ve 1990’lı yılların başından itibaren Çeçen devletinin bağımsızlık sürecinde en ön safta yer alan öncü komutanlardandır.",
      "26 Kasım 1994’te Grozni’ye saldıran Rus destekli zırhlı birliklerin bozgununda başrol oynamış; 1–2 Ocak 1995’te Grozni Tren Garı’nda Rus 131. Maykop Tugayı’nın imha edilmesini yönetmiştir. 3 Ocak 1995 tarihinde Grozni “Şan Tepesi” mevkiinde göğüs göğüse çarpışmada kahramanca şehit düşmüştür."
    ]
  },
  {
    "slug": "kuri-batsiyev",
    "name": "Küri Batsiyev (Gözüpek Küra)",
    "born": "1972",
    "died": "2005",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/kuri-batsiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/kuri-batsiyev.webp?v=4",
        "caption": "Küri Batsiyev (Gözüpek Küra) (1972–2005)"
      }
    ],
    "summary": "1972 doğumlu Küri Batsiyev, cephede “Çeçen Halid bin Velid” ve “Gözüpek Küra” lakaplarıyla tanınan Hacaroy taypı emiridir.",
    "bio": [
      "1972 doğumlu Küri Batsiyev, cephede “Çeçen Halid bin Velid” ve “Gözüpek Küra” lakaplarıyla tanınan Hacaroy taypı emiridir.",
      "Aralık 1994’ten Aralık 2005’e kadar 11 yıl boyunca her iki savaşta kesintisiz çarpışmış; Grozni savunmasında tek bir muharebede 70’ten fazla RPG roketi ateşleyerek Rus zırhlılarını durdurmuş ve İçkerya’nın en yüksek “Ulusun Kahramanı” (Koman Turpal) madalyasını almıştır. 28 Aralık 2005 tarihinde kuşatılan silah arkadaşını kurtarmak için düşman çemberini yararken şehit düşmüştür."
    ]
  },
  {
    "slug": "huseyin-ahmadov",
    "name": "Hüseyin Ahmadov",
    "born": "1962",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/huseyin-ahmadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/huseyin-ahmadov.webp?v=4",
        "caption": "Hüseyin Ahmadov (1962–1995)"
      }
    ],
    "summary": "Goyti köyü doğumlu, soylu Benoy taypına mensup öncü direniş savaşçısıdır. Bağımsızlığın ilk günlerinden itibaren İçkerya devletini savunan saflarda yer aldı.",
    "bio": [
      "Goyti köyü doğumlu, soylu Benoy taypına mensup öncü direniş savaşçısıdır. Bağımsızlığın ilk günlerinden itibaren İçkerya devletini savunan saflarda yer aldı.",
      "14 Ocak 1995’te Grozni’de şehit düşen Zulay Ahmadova’nın ağabeyi ve silah arkadaşıdır. Ocak 1995 Grozni kuşatmasında düşman zırhlılarına karşı en ön cephede çarpıştı. 18 Ocak 1995’te RPG ile zırhlı hedefi vurmak için doğrulduğu anda şehit düştü."
    ]
  },
  {
    "slug": "zulay-ahmadova",
    "name": "Zulay Ahmadova",
    "born": "1971",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/zulay-ahmadova.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/zulay-ahmadova.webp?v=4",
        "caption": "Zulay Ahmadova (1971–1995)"
      }
    ],
    "summary": "‘Ulusun Çiçeği’ olarak anılan, Goyti köyü ve Benoy taypı mensubu kadın mücahidedir. Aralık 1994 işgalinde yirmi dört yaşında gönüllü olarak vatan savunmasına katıldı.",
    "bio": [
      "‘Ulusun Çiçeği’ olarak anılan, Goyti köyü ve Benoy taypı mensubu kadın mücahidedir. Aralık 1994 işgalinde yirmi dört yaşında gönüllü olarak vatan savunmasına katıldı.",
      "Grozni direnişinde ağabeyi Hüseyin Ahmadov ile omuz omuza cephede görev yaptı. Üstün fedakarlığı nedeniyle İçkerya’nın en yüksek devlet nişanıyla onurlandırıldı. 14 Ocak 1995’te Grozni çarpışmalarında yirmi dört yaşında şehit düştü."
    ]
  },
  {
    "slug": "musa-hacimuradov",
    "name": "Musa Hacımuradov",
    "born": "1956",
    "died": "1994",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/musa-hacimuradov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/musa-hacimuradov.webp?v=4",
        "caption": "Musa Hacımuradov (1956–1994)"
      }
    ],
    "summary": "Birinci Rus-Çeçen Savaşı’nda başkent Grozni savunmasının öncü mücahitlerindendir. Aralık 1994’te vatan toprağına yönelen işgal ordusuna karşı gönüllü silah kuşandı.",
    "bio": [
      "Birinci Rus-Çeçen Savaşı’nda başkent Grozni savunmasının öncü mücahitlerindendir. Aralık 1994’te vatan toprağına yönelen işgal ordusuna karşı gönüllü silah kuşandı.",
      "31 Aralık 1994 yılbaşı günü Grozni’ye giren zırhlı tugaylara karşı ön safa durdu. Başkent sokaklarında kuşatılan işgalci birliklere ağır kayıplar verdiren hatta çarpıştı. 31 Aralık 1994’te Grozni müdafaasında vatan görevini ifa ederken şehit düştü."
    ]
  },
  {
    "slug": "emir-iles-musafir",
    "name": "Emir İles Musafir",
    "born": "1970",
    "died": "1999",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/emir-iles-musafir.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/emir-iles-musafir.webp?v=4",
        "caption": "Emir İles Musafir (1970–1999)"
      }
    ],
    "summary": "‘Musafir’ künyesiyle tanınan, Şelkovskoy Cemaati kurucusu ve Kuzey Cephesi Komutanıdır. 1994–1996 Birinci Çeçen Savaşı’nda Emir Hattab ile omuz omuza pek çok operasyona katıldı.",
    "bio": [
      "‘Musafir’ künyesiyle tanınan, Şelkovskoy Cemaati kurucusu ve Kuzey Cephesi Komutanıdır. 1994–1996 Birinci Çeçen Savaşı’nda Emir Hattab ile omuz omuza pek çok operasyona katıldı.",
      "Şelkovskoy Cemaati emir yardımcılığı ve Kuzey Cephesi komuta kademesinde görev yaptı. İkinci savaşın başında Kuzey Cephesi savunma hatlarını bizzat organize etti. 4 Ekim 1999’da Kuzey Cephesi’ndeki şiddetli muharebelerde ön safta şehit düştü."
    ]
  },
  {
    "slug": "hoj-ahmed-dusayev",
    "name": "Hoj-Ahmed Duşayev",
    "born": "1975",
    "died": "2006",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hoj-ahmed-dusayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hoj-ahmed-dusayev.webp?v=4",
        "caption": "Hoj-Ahmed Duşayev (1975–2006)"
      }
    ],
    "summary": "Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri’nin seçkin cemaat ve cephe emirlerindendir. Asaleti, cesareti, sarsılmaz imanı ve vatan sevgisiyle gerçek bir ‘Qonah’ olarak tanındı.",
    "bio": [
      "Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri’nin seçkin cemaat ve cephe emirlerindendir. Asaleti, cesareti, sarsılmaz imanı ve vatan sevgisiyle gerçek bir ‘Qonah’ olarak tanındı.",
      "Her iki savaşta dağ ve ova sektörlerinde işgalci güçlere karşı yıllarca direndi. Şehadetinden sonra bile düşmanların onurunu kıramadığı sarsılmaz bir irade sergiledi. 28 Temmuz 2006’da son kurşununa kadar çarpışarak şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "kazbek-ibragimov",
    "name": "Kazbek İbragimov",
    "born": "1982",
    "died": "2008",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/kazbek-ibragimov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/kazbek-ibragimov.webp?v=4",
        "caption": "Kazbek İbragimov (1982–2008)"
      }
    ],
    "summary": "‘Seyfullah’ künyesiyle tanınan, Gehi köyü mensubu Emir İslam Cemaati mücahididir. Kış şartlarında kendi elleriyle sığınaklar kazarak dağlarda yıllarca cihad etti.",
    "bio": [
      "‘Seyfullah’ künyesiyle tanınan, Gehi köyü mensubu Emir İslam Cemaati mücahididir. Kış şartlarında kendi elleriyle sığınaklar kazarak dağlarda yıllarca cihad etti.",
      "Şehadetinden bir hafta önce küçük kardeşi Elbrus’u yanına alarak direnişe kazandırdı. 25 Temmuz 2008’de Zavodskoy karargâhında tek başına dört saat boyunca çarpıştı. Teslimiyet çağrılarını reddedip Kur’an-ı Kerim okuyarak son nefesine kadar şehit düştü."
    ]
  },
  {
    "slug": "elbrus-ibragimov",
    "name": "Elbrus İbragimov",
    "born": "1985",
    "died": "2010",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/elbrus-ibragimov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/elbrus-ibragimov.webp?v=4",
        "caption": "Elbrus İbragimov (1985–2010)"
      }
    ],
    "summary": "‘Genç Seyfullah’ künyesiyle bilinen, şehit Kazbek İbragimov’un küçük kardeşidir. Ağabeyinin şehadetinden sonra onun silahını, günlüğünü ve ‘Seyfullah’ künyesini devraldı.",
    "bio": [
      "‘Genç Seyfullah’ künyesiyle bilinen, şehit Kazbek İbragimov’un küçük kardeşidir. Ağabeyinin şehadetinden sonra onun silahını, günlüğünü ve ‘Seyfullah’ künyesini devraldı.",
      "Emir İslam’ın en güvendiği genç savaşçılardan biri olarak tüm seferlere katıldı. İlk pusu çatışmasında yaralanmasına rağmen cepheden ayrılmayıp çok sayıda operasyon yaptı. 8 Ağustos 2010’da Grozni’de saatler süren kuşatma çarpışmasında şehit düştü."
    ]
  },
  {
    "slug": "ahmad-canti-halifat",
    "name": "Ahmad Çanti",
    "born": "1968",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ahmad-canti-halifat.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ahmad-canti-halifat.webp?v=4",
        "caption": "Ahmad Çanti (1968–2000)"
      }
    ],
    "summary": "‘Halifat’ künyesiyle efsaneleşen ve marşlara konu olan Şatoylu cephe komutanıdır. 31 Ocak 2000 Grozni çıkışında geride kalan mücahitleri beklerken şarapnelle yaralandı.",
    "bio": [
      "‘Halifat’ künyesiyle efsaneleşen ve marşlara konu olan Şatoylu cephe komutanıdır. 31 Ocak 2000 Grozni çıkışında geride kalan mücahitleri beklerken şarapnelle yaralandı.",
      "Tüm sargı bezlerini yaralı askerlerine dağıttığı için kendi yarasını sardırmadı. Alhan-Kala sahra hastanesinde ‘Başkalarının daha çok ihtiyacı var’ diyerek tedaviyi reddetti. 1 Şubat 2000’de Zakan-Yurt Camii’nde şehadet parmağını kaldırarak ruhunu teslim etti."
    ]
  },
  {
    "slug": "hasan-dolguyev",
    "name": "Hasan Dolguyev",
    "born": "1963",
    "died": "1999",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hasan-dolguyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hasan-dolguyev.webp?v=4",
        "caption": "Hasan Dolguyev (1963–1999)"
      }
    ],
    "summary": "Şelkovskaya doğumlu, Birinci ve İkinci Rus-Çeçen Savaşları’nın tecrübeli gazisidir. Ocak 1996’da Kizlyar seferi ve Pervomayskoye kuşatma yarması muharebelerinde çarpıştı.",
    "bio": [
      "Şelkovskaya doğumlu, Birinci ve İkinci Rus-Çeçen Savaşları’nın tecrübeli gazisidir. Ocak 1996’da Kizlyar seferi ve Pervomayskoye kuşatma yarması muharebelerinde çarpıştı.",
      "Birinci savaşta iki kardeşini, ikinci savaşta ise üçüncü kardeşini vatan uğruna şehit verdi. ‘Koman Siy’ onuruyla tanınan ailesinin son ferdi olarak cepheden bir an olsun ayrılmadı. Kasım 1999’da İkinci Çeçen Savaşı muharebelerinde ön safta çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "rizvan-osmayev",
    "name": "Rizvan Osmayev",
    "born": "1976",
    "died": "2009",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/rizvan-osmayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/rizvan-osmayev.webp?v=4",
        "caption": "Rizvan Osmayev (1976–2009)"
      }
    ],
    "summary": "‘Emir İmam’ künyesiyle tanınan, Mesker-Yurtlu ve Şirdiy taypı mensubu cemaat emirlidir. Ova cephesinin en zorlu şartlarında operasyonlar yürüten sarsılmaz bir komutandı.",
    "bio": [
      "‘Emir İmam’ künyesiyle tanınan, Mesker-Yurtlu ve Şirdiy taypı mensubu cemaat emirlidir. Ova cephesinin en zorlu şartlarında operasyonlar yürüten sarsılmaz bir komutandı.",
      "Düşman güçlerinin çok sayıdaki kuşatmasını üstün taktik ve cesaretle yarmayı başardı. İlkelerine ve Allah’a verdiği ahdine son nefesine kadar tavizsiz sadakat gösterdi. 7 Kasım 2009’da çatışma meydanında silahı elinde ön safta şehit düştü."
    ]
  },
  {
    "slug": "hasan-ozdamirov",
    "name": "Hasan Ozdamirov (Gerat)",
    "born": "1983",
    "died": "2009",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hasan-ozdamirov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hasan-ozdamirov.webp?v=4",
        "caption": "Hasan Ozdamirov (Gerat) (1983–2009)"
      }
    ],
    "summary": "Argun doğumlu olan ve ‘Gerat’ künyesiyle tanınan Hasan Ozdamirov, genç yaşında Çeçen direniş saflarına katılarak Argun ve başkent Cevherkale (Grozni) cephelerinde işgalci güçlere karşı en ön safta çarpışmıştır.",
    "bio": [
      "Argun doğumlu olan ve ‘Gerat’ künyesiyle tanınan Hasan Ozdamirov, genç yaşında Çeçen direniş saflarına katılarak Argun ve başkent Cevherkale (Grozni) cephelerinde işgalci güçlere karşı en ön safta çarpışmıştır.",
      "2009 yılında Cevherkale’de bulunduğu iki katlı ahşap ev işgalci birlikler tarafından kuşatılıp ağır makineli tüfeklerle delik deşik edildiğinde, teslimiyet çağrılarını ateşle yanıtlamış; düşmanın yerini sesinden tespit ederek ‘Tülpan’ tipi kısa namlulu otomatik tüfeğiyle çemberi tek başına yararak kuşatmadan sağ çıkmayı başarmıştır. Emir Rizvan Osmayev (‘Emir İmam’) ile omuz omuza direniş saflarında görev yapan Hasan Ozdamirov, 7 Kasım 2009 tarihinde son nefesine kadar çarpışarak şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "emir-mohmad-avturinski",
    "name": "Emir Mohmad Avturinski (Kırk Üçüncü)",
    "born": "1971",
    "died": "2003",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/emir-mohmad-avturinski.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/emir-mohmad-avturinski.webp?v=4",
        "caption": "Emir Mohmad Avturinski (Kırk Üçüncü) (1971–2003)"
      }
    ],
    "summary": "Avturı köyü mensubu olan ve telsiz kodu ‘Kırk Üçüncü’ künyesiyle tanınan Emir Mohmad, Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri’nin en tecrübeli keskin nişancı emirlerinden ve dağ-orman savaşı uzmanlarındandır.",
    "bio": [
      "Avturı köyü mensubu olan ve telsiz kodu ‘Kırk Üçüncü’ künyesiyle tanınan Emir Mohmad, Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri’nin en tecrübeli keskin nişancı emirlerinden ve dağ-orman savaşı uzmanlarındandır.",
      "Genç mücahidlere keskin nişancılık ve partizan taktiği eğitimi veren Emir Mohmad, gece yarısı uzakta patlayan top mermilerinin sesinden pusula ve haritasıyla düşmanın bir sonraki hamlesini hesaplayacak kadar üstün bir askeri sezgi ve istihbarat dehasına sahipti. Asla bilinen patika ve yolları kullanmayarak birliğini en sarp vadilerden geçiren ve GRU özel kuvvetlerinin pusularını boşa çıkaran Emir Mohmad, vatan toprağının bağımsızlığı uğrunda çarpışarak şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "bislan-turgayev",
    "name": "Bislan Turgayev",
    "born": "1972",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/bislan-turgayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/bislan-turgayev.webp?v=4",
        "caption": "Bislan Turgayev (1972–2002)"
      }
    ],
    "summary": "Açhoy-Martan doğumlu olan Emir Bislan Turgayev, Çeçen İçkerya Cumhuriyeti Batı Cephesi ve Açhoy-Martan Cemaati’nin önde gelen direniş komutanlarındandır.",
    "bio": [
      "Açhoy-Martan doğumlu olan Emir Bislan Turgayev, Çeçen İçkerya Cumhuriyeti Batı Cephesi ve Açhoy-Martan Cemaati’nin önde gelen direniş komutanlarındandır.",
      "Her iki Rus-Çeçen Savaşı’nda işgalci güçlere karşı yıllarca ön saflarda çarpışan Bislan Turgayev, sarsılmaz imanı, fedakârlığı ve en ağır kuşatma şartlarında bile sancağı yere düşürmeyen cesaretiyle mücahidlere örnek olmuştur. Özgür İçkerya ve İslam davası uğrunda son nefesine kadar çarpışan Emir Bislan Turgayev, şehadet mertebesine ulaşarak adını Kafkasya direniş tarihine yazdırmıştır."
    ]
  },
  {
    "slug": "umar-boltukayev",
    "name": "Umar Boltukayev",
    "born": "1966",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/umar-boltukayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/umar-boltukayev.webp?v=4",
        "caption": "Umar Boltukayev (1966–2000)"
      }
    ],
    "summary": "Nojay-Yurt bölgesinin Alleroy köyünde dünyaya gelen Umar Boltukayev, bağımsızlığın ilk günlerinden itibaren Cevher Dudayev’in ilk Cumhurbaşkanlığı Muhafız Alayı’nda görev almış, ardından Genelkurmay Başkanı Aslan Mashadov’un yakın koruma birliğinde Ahmad Avdorhanov ile birlikte çarpışmıştır.",
    "bio": [
      "Nojay-Yurt bölgesinin Alleroy köyünde dünyaya gelen Umar Boltukayev, bağımsızlığın ilk günlerinden itibaren Cevher Dudayev’in ilk Cumhurbaşkanlığı Muhafız Alayı’nda görev almış, ardından Genelkurmay Başkanı Aslan Mashadov’un yakın koruma birliğinde Ahmad Avdorhanov ile birlikte çarpışmıştır.",
      "Ocak 1995’te Cevherkale’deki (Grozni) Başkanlık Sarayı savunmasında yaralanmasına rağmen iyileşir iyileşmez yeniden cepheye dönmüş; iki savaş arası dönemde Nojay-Yurt Kaymakamı (Prefekti) olarak halkına hizmet etmiştir. Kardeşleri Ali, Muslim, Ramzan, Rizvan, Sulim ve yeğeni Seyfullah Boltukayev ile birlikte tüm ailesini vatan savunmasına adayan Umar Boltukayev, 29 Aralık 2000 tarihinde Yukarı Alleroy’da Rus GRU özel kuvvetleriyle girdiği eşitsiz çatışmada şehit düşmüştür."
    ]
  },
  {
    "slug": "usman-imayev",
    "name": "Usman İmayev",
    "born": "1957",
    "died": "1996",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/usman-imayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/usman-imayev.webp?v=4",
        "caption": "Usman İmayev (1957–1996)"
      }
    ],
    "summary": "14 Ekim 1957’de Kuları köyünde doğan Usman İmayev, Çeçen İçkerya Cumhuriyeti’nin kuruluş yıllarında Hukuk Reformu Komitesi Başkanlığı, Merkez Bankası Başkanlığı, Adalet Bakanlığı ve Başsavcılık görevlerini üstlenmiş seçkin bir devlet adamı ve mücahiddir.",
    "bio": [
      "14 Ekim 1957’de Kuları köyünde doğan Usman İmayev, Çeçen İçkerya Cumhuriyeti’nin kuruluş yıllarında Hukuk Reformu Komitesi Başkanlığı, Merkez Bankası Başkanlığı, Adalet Bakanlığı ve Başsavcılık görevlerini üstlenmiş seçkin bir devlet adamı ve mücahiddir.",
      "Aralık 1994’te Başkanlık Sarayı savunmasında sırtından yaralanmasına rağmen şiddetli ağrılarına aldırmayarak evine dönmeyi reddetmiş ve cephede çarpışmayı sürdürmüştür. 1995 yılında AGİT gözetimindeki müzakerelerde Çeçen İçkerya Cumhuriyeti heyetine başkanlık etmiştir. Temmuz 1996’da görüşmeye gittiği sırada Rus güçlerince alıkonularak ağır işkencelere maruz bırakılan Usman İmayev, kendisiyle birlikte tutulan Himoylu mollanın şahitliğiyle tek bir inilti bile çıkarmamış ve “Kemiklerimi Valerik kıyısına atsanız da benden hiçbir şey duyamazsınız” diyerek şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "arbi-sigauri",
    "name": "Arbi Sigauri",
    "born": "1982",
    "died": "2011",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/arbi-sigauri.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/arbi-sigauri.webp?v=4",
        "caption": "Arbi Sigauri (1982–2011)"
      }
    ],
    "summary": "‘Huzeyfe’ künyesiyle tanınan, Sunja sektörü ve Cevherkale mücahidi. Genç yaşında direniş saflarına katılarak işgalcilere karşı korkusuzca çarpıştı.",
    "bio": [
      "‘Huzeyfe’ künyesiyle tanınan, Sunja sektörü ve Cevherkale mücahidi. Genç yaşında direniş saflarına katılarak işgalcilere karşı korkusuzca çarpıştı.",
      "Şehir içi özel operasyonlarda ve dağ kampanyalarında üstün cesaret gösterdi. Teslimiyet çağrılarını reddederek son kurşununa kadar direnişi sürdürdü. 2 Mart 2011’de Cevherkale’de eşitsiz çatışmada şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "aslanbek-didiyev",
    "name": "Aslanbek Didiyev",
    "born": "1972",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aslanbek-didiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslanbek-didiyev.webp?v=4",
        "caption": "Aslanbek Didiyev (1972–2000)"
      }
    ],
    "summary": "Çeçen İçkerya Cumhuriyeti Merkez Cephesi operasyon grubu emiri. Urus-Martan sektöründe işgalcilere ve işbirlikçilere karşı amansızca çarpıştı.",
    "bio": [
      "Çeçen İçkerya Cumhuriyeti Merkez Cephesi operasyon grubu emiri. Urus-Martan sektöründe işgalcilere ve işbirlikçilere karşı amansızca çarpıştı.",
      "Ahmadov Cemaati bünyesinde en zorlu cephe operasyonlarına komuta etti. Sarsılmaz imanı, atılganlığı ve vatan sevgisiyle mücahitlere öncülük etti. 25 Aralık 2000’de Urus-Martan’da eşitsiz çatışmada şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "amin-ibragimov",
    "name": "Amin İbragimov (Ebu Darr)",
    "born": "1972",
    "died": "2001",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/amin-ibragimov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/amin-ibragimov.webp?v=4",
        "caption": "Amin İbragimov (Ebu Darr) (1972–2001)"
      }
    ],
    "summary": "21 Mayıs 1972’de Goytı köyünde Kurşloy taypına mensup bir ailede doğan ve Cevherkale’de (Grozni) yetişen Amin İbragimov (‘Emir Ebu Darr’), 1994’te başlayan Birinci Rus-Çeçen Savaşı’nın ilk günlerinden itibaren Emir Hattab’ın yanında yer almış ve ‘Gerat’ Grubu Emiri olarak görev yapmıştır.",
    "bio": [
      "21 Mayıs 1972’de Goytı köyünde Kurşloy taypına mensup bir ailede doğan ve Cevherkale’de (Grozni) yetişen Amin İbragimov (‘Emir Ebu Darr’), 1994’te başlayan Birinci Rus-Çeçen Savaşı’nın ilk günlerinden itibaren Emir Hattab’ın yanında yer almış ve ‘Gerat’ Grubu Emiri olarak görev yapmıştır.",
      "1999 yılında İkinci Rus-Çeçen Savaşı’nın başında Cumhurbaşkanı Aslan Mashadov tarafından tuğgeneral rütbesine terfi ettirilen Amin İbragimov, 2000 yılındaki Cevherkale kuşatmasını yarma harekâtında ve birçok cephede defalarca ağır yaralanmasına rağmen her seferinde savaş safına geri dönmüştür. Düşman hatlarının tam kalbinde gerçekleştirdiği soğukkanlı operasyonlarla tanınan Tuğgeneral Amin İbragimov, 17 Mayıs 2001 tarihinde Tsotsin-Yurt köyünde kurulan pusuda 29 yaşında şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "muhammed-besir-dobriyev",
    "name": "Muhammed-Beşir Dobriyev",
    "born": "1964",
    "died": "2008",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "İnguşetya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/muhammed-besir-dobriyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muhammed-besir-dobriyev.webp?v=4",
        "caption": "Muhammed-Beşir Dobriyev (1964–2008)"
      }
    ],
    "summary": "‘Bereket’ künyesiyle tanınan, İnguşetya Neskorkort köyü mensubu mücahittir. Efsanevi Bamut savunmasının ilk gününden son gününe kadar en ön safta çarpıştı.",
    "bio": [
      "‘Bereket’ künyesiyle tanınan, İnguşetya Neskorkort köyü mensubu mücahittir. Efsanevi Bamut savunmasının ilk gününden son gününe kadar en ön safta çarpıştı.",
      "Her iki Rus-Çeçen Savaşı’nda Kafkasya halklarının kardeşliğini cephe de temsil etti. On dört yıl boyunca dağlarda ve ovalarda silahını bırakmadan direnişi sürdürdü. 15 Eylül 2008’de Seyfül-İslam Aziyev ile birlikte çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "ilyas-talhadov",
    "name": "İlyas Talhadov",
    "born": "1967",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ilyas-talhadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ilyas-talhadov.webp?v=4",
        "caption": "İlyas Talhadov (1967–2000)"
      }
    ],
    "summary": "Kurçaloy bölgesinin Alleroy-Yurt köyünde dünyaya gelen Tuğgeneral İlyas Talhadov, 1992–1995 yıllarında ilk Cumhurbaşkanı Cevher Dudayev’in Cumhurbaşkanlığı Muhafız Alayı’nda görev yapmış ve Çeçen İçkerya Cumhuriyeti’nin en yüksek devlet nişanı olan ‘Qoman Siy’ (Ulusun Onuru) ile taltif edilmiştir.",
    "bio": [
      "Kurçaloy bölgesinin Alleroy-Yurt köyünde dünyaya gelen Tuğgeneral İlyas Talhadov, 1992–1995 yıllarında ilk Cumhurbaşkanı Cevher Dudayev’in Cumhurbaşkanlığı Muhafız Alayı’nda görev yapmış ve Çeçen İçkerya Cumhuriyeti’nin en yüksek devlet nişanı olan ‘Qoman Siy’ (Ulusun Onuru) ile taltif edilmiştir.",
      "Birinci Rus-Çeçen Savaşı’nda başkent Cevherkale (Grozni) savunmasında komuta ettiği birliği en az kayıpla kuşatmadan çıkarmayı başaran İlyas Talhadov, 1997 yılında Cumhurbaşkanı Aslan Mashadov tarafından Cumhurbaşkanlığı Muhafız Alayı Komutanlığına atanmıştır. İkinci Rus-Çeçen Savaşı’nda da başkentin ve dağ geçitlerinin savunmasında en ön safta çarpışan Tuğgeneral İlyas Talhadov, 10 Şubat 2000 tarihinde Şali bölgesinin Duba-Yurt köyü yakınlarında Rus işgal güçleriyle girdiği eşitsiz çatışmada şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "vahid-bamatgiriyev",
    "name": "Vahid Bamatgiriyev",
    "born": "1956",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/vahid-bamatgiriyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/vahid-bamatgiriyev.webp?v=4",
        "caption": "Vahid Bamatgiriyev (1956–2000)"
      }
    ],
    "summary": "İtum-Kale bölgesinin Dişni-Mohk yöresine ve Dişni boyuna mensup olan Vahid Bamatgiriyev, Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri tuğgenerali ve İçkerya Parlamentosu milletvekilidir.",
    "bio": [
      "İtum-Kale bölgesinin Dişni-Mohk yöresine ve Dişni boyuna mensup olan Vahid Bamatgiriyev, Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri tuğgenerali ve İçkerya Parlamentosu milletvekilidir.",
      "1997 yılından şehadetine kadar Çeçen İçkerya Cumhuriyeti Parlamentosu’nda milletini temsil eden ve Parlamento Şeriat ve Devlet Hukuku Komitesi Başkanlığı görevini yürüten Vahid Bamatgiriyev, her iki Rus-Çeçen Savaşı’nda da cephenin en ön safında yer almıştır. 2000 yılı kışında kuşatma altındaki başkentten dağlara uzanan zorlu yürüyüşte birliğinin başında çarpışan Tuğgeneral Vahid Bamatgiriyev, Mart 2000’de Saadi-Kotar (Komsomolskoye) direnişinde oğlu Hamzat Bamatgiriyev ile omuz omuza çarpışarak şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "aynudin-aygumov",
    "name": "Aynudin Aygumov (Çibuş)",
    "born": "1977",
    "died": "1997",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aynudin-aygumov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aynudin-aygumov.webp?v=4",
        "caption": "Aynudin Aygumov (Çibuş) (1977–1997)"
      }
    ],
    "summary": "Başkent Caharkale’de (Grozni) dünyaya gelen, Çebarloy boyuna mensup ve silah arkadaşları arasında ‘Çibuş’ lâkabıyla tanınan Aynudin Aygumov, 1994–1996 Birinci Rus-Çeçen Savaşı’nda henüz 17 yaşında vatan savunmasına koşmuştur.",
    "bio": [
      "Başkent Caharkale’de (Grozni) dünyaya gelen, Çebarloy boyuna mensup ve silah arkadaşları arasında ‘Çibuş’ lâkabıyla tanınan Aynudin Aygumov, 1994–1996 Birinci Rus-Çeçen Savaşı’nda henüz 17 yaşında vatan savunmasına koşmuştur.",
      "Birinci savaş boyunca pek çok kritik cephede ve Budyonnovsk harekâtında gösterdiği üstün cesaretle Çeçen İçkerya Cumhuriyeti’nin en yüksek devlet nişanlarından ‘Qoman Turpal’ (Ulusun Kahramanı) madalyası ve çeşitli devlet nişanlarıyla onurlandırılmıştır. Savaş sonrasında Çeçen İçkerya Cumhuriyeti Milli Güvenlik Servisi (NSB) Özel Bölüğü’nde göreve başlayan Aynudin Aygumov, 1997 yılında görevi başında şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "imran-zaytimirov",
    "name": "İmran Zaytimirov",
    "born": "1971",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/imran-zaytimirov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/imran-zaytimirov.webp?v=4",
        "caption": "İmran Zaytimirov (1971–2000)"
      }
    ],
    "summary": "9 Ocak 1971 tarihinde Nojay-Yurt bölgesinin Zandak köyünde dünyaya gelen İmran Zaytimirov, Çeçen bağımsızlık mücadelesinin en erken neferlerindendir.",
    "bio": [
      "9 Ocak 1971 tarihinde Nojay-Yurt bölgesinin Zandak köyünde dünyaya gelen İmran Zaytimirov, Çeçen bağımsızlık mücadelesinin en erken neferlerindendir.",
      "Eylül 1991’den itibaren Emir Şeyh Fethi liderliğindeki İslam Cemaati saflarında yer alan İmran Zaytimirov, Çeçen İçkerya Cumhuriyeti topraklarındaki tüm büyük askeri operasyonlarda ve memleketi Zandak köyünün savunmasında ön saflarda çarpışmıştır. Ramazan ayının 15. gününde omuz omuza çarpıştığı en yakın dostunun şehadetinin ardından her namazında Allah’tan şehadet dileyen İmran Zaytimirov, vatan cephesinde son nefesine kadar direnerek dualarında dilediği şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "borza-abdurazakov",
    "name": "Borza Abdurazakov",
    "born": "1975",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/borza-abdurazakov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/borza-abdurazakov.webp?v=4",
        "caption": "Borza Abdurazakov (1975–2000)"
      }
    ],
    "summary": "28 Ocak 1975 tarihinde Nojay-Yurt bölgesinin Zandak köyünde dünyaya gelen Borza Abdurazakov, 1994 yılında Rus işgal ordularının saldırısı başladığında henüz 19 yaşında vatan savunmasına katılmıştır.",
    "bio": [
      "28 Ocak 1975 tarihinde Nojay-Yurt bölgesinin Zandak köyünde dünyaya gelen Borza Abdurazakov, 1994 yılında Rus işgal ordularının saldırısı başladığında henüz 19 yaşında vatan savunmasına katılmıştır.",
      "Aralık 1995’teki Gudermes harekâtında, Ocak 1996’daki Kızılyar ve Pervomayskoye kuşatma yarma muharebesinde, 6 Ağustos 1996’da başkent Caharkale’nin kurtuluşu (‘Cihad Operasyonu’) ile Zandak savunmasında en ön saflarda çarpışmıştır. En ağır kuşatmaları imanı ve cesaretiyle yaran Borza Abdurazakov, vatan toprağının bağımsızlığı uğrunda çarpışarak şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "ismail-muhmadiyev",
    "name": "İsmail Muhmadiyev",
    "born": "1971",
    "died": "1994",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ismail-muhmadiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ismail-muhmadiyev.webp?v=4",
        "caption": "İsmail Muhmadiyev (1971–1994)"
      }
    ],
    "summary": "1971 doğumlu ve Belgatoy boyuna mensup olan İsmail Muhmadiyev, savaş öncesinde Belgatoy köyünde çocuklara Kur’an-ı Kerim ve İslam’ın esaslarını öğreten genç bir muallimdi.",
    "bio": [
      "1971 doğumlu ve Belgatoy boyuna mensup olan İsmail Muhmadiyev, savaş öncesinde Belgatoy köyünde çocuklara Kur’an-ı Kerim ve İslam’ın esaslarını öğreten genç bir muallimdi.",
      "Aralık 1994’te Rus ordusunun Çeçen İçkerya Cumhuriyeti topraklarına yönelik işgal saldırısı başladığında öğrencileriyle vedalaşarak başkent Caharkale (Grozni) savunmasına koşmuştur. 31 Aralık 1994 gecesi başkente giren Rus zırhlı tugaylarına karşı verilen ilk büyük ve şiddetli meydan muharebesinde en ön safta çarpışan İsmail Muhmadiyev, 23 yaşında şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "imam-zaytayev",
    "name": "İmam Zaytayev",
    "born": "1989",
    "died": "2008",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/imam-zaytayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/imam-zaytayev.webp?v=4",
        "caption": "İmam Zaytayev (1989–2008)"
      }
    ],
    "summary": "3 Kasım 1989 tarihinde başkent Caharkale’de (Grozni) dünyaya gelen ve Haçaroy boyuna mensup olan İmam Zaytayev, 13 yaşındayken ailesiyle birlikte Fransa’ya göç etmiş ve eğitimini Avrupa’da sürdürmüştür.",
    "bio": [
      "3 Kasım 1989 tarihinde başkent Caharkale’de (Grozni) dünyaya gelen ve Haçaroy boyuna mensup olan İmam Zaytayev, 13 yaşındayken ailesiyle birlikte Fransa’ya göç etmiş ve eğitimini Avrupa’da sürdürmüştür.",
      "Avrupa’daki güvenli ve rahat hayatına rağmen işgal altındaki vatanının acısını yüreğinde taşıyan genç İmam, 2008 yılı sonbaharında her şeyi geride bırakarak Kafkasya’ya dönmüş ve Çeçen silahlı direniş saflarına katılmıştır. 27 Ekim 2008 tarihinde mücahid kardeşleriyle birlikte işgalci güçlerin çemberine düşen İmam Zaytayev, son nefesine kadar çarpışarak henüz 18 yaşında şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "islam-takanayev",
    "name": "İslam Takanayev",
    "born": "1984",
    "died": "2003",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/islam-takanayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/islam-takanayev.webp?v=4",
        "caption": "İslam Takanayev (1984–2003)"
      }
    ],
    "summary": "Şali ilçesinin Novye Atagi (Jım-Atagi) köyü mensubu olan 19 yaşındaki genç mücahid İslam (Ruslanbek) Takanayev, 2003 yılı Ramazan ayında sabah namazı vaktinde uğradığı evde işgalci birliklerin kuşatmasına alınmıştır.",
    "bio": [
      "Şali ilçesinin Novye Atagi (Jım-Atagi) köyü mensubu olan 19 yaşındaki genç mücahid İslam (Ruslanbek) Takanayev, 2003 yılı Ramazan ayında sabah namazı vaktinde uğradığı evde işgalci birliklerin kuşatmasına alınmıştır.",
      "Evde tek başına olmasına rağmen teslimiyeti reddeden İslam, L biçimindeki evin içinde sürekli mevzi değiştirerek yüzlerce işgalciye karşı tam üç saat boyunca tek başına çarpışmış; ağır makineli tüfek ateşiyle parçalanan bacaklarını kendi elleriyle turnikeyle bağlayıp tekbirlerle ateşi sürdürmüştür. Evin çatısı üzerine çökene kadar teslim olmayan genç yiğit, enkaz altından çıkarıldığında sergilediği inanılmaz direniş karşısında “Evde seninle başka kim vardı?” diye soranlara “Benimle Allah vardı!” cevabını vererek şehadet şerbetini içmiştir."
    ]
  },
  {
    "slug": "umar-labazanov",
    "name": "Umar Labazanov (Emir Şadid)",
    "born": "1975",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/umar-labazanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/umar-labazanov.webp?v=4",
        "caption": "Umar Labazanov (Emir Şadid) (1975–2000)"
      }
    ],
    "summary": "Zakan-Yurt kökenli, Haçaroy boyuna mensup olan ve başkent Caharkale’nin (Grozni) Zavodskoy bölgesinde yetişen Umar Labazanov, direniş saflarında ‘Emir Şadid’ künyesiyle tanınan seçkin bir cemaat emiridir.",
    "bio": [
      "Zakan-Yurt kökenli, Haçaroy boyuna mensup olan ve başkent Caharkale’nin (Grozni) Zavodskoy bölgesinde yetişen Umar Labazanov, direniş saflarında ‘Emir Şadid’ künyesiyle tanınan seçkin bir cemaat emiridir.",
      "Her iki Rus-Çeçen Savaşı’nda da genç mücahidlere komuta eden Emir Şadid, 1999–2000 kışında başkent Caharkale savunmasında ve kuşatma yarma harekâtında birliğinin başında çarpışmıştır. Mart 2000’de Saadi-Kotar (Komsomolskoye) direnişinde son mermisine kadar çarpışan Emir Şadid (Umar Labazanov), silah arkadaşlarıyla birlikte şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "ramzan-kudayev",
    "name": "Ramzan Kudayev",
    "born": "1960",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ramzan-kudayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ramzan-kudayev.webp?v=4",
        "caption": "Ramzan Kudayev (1960–1995)"
      }
    ],
    "summary": "13 Ocak 1960 tarihinde Vedeno bölgesinin tarihi Tsa-Vedeno köyünde dünyaya gelen Ramzan Kudayev, Birinci Rus-Çeçen Savaşı’nın fedakâr mücidlerindendir.",
    "bio": [
      "13 Ocak 1960 tarihinde Vedeno bölgesinin tarihi Tsa-Vedeno köyünde dünyaya gelen Ramzan Kudayev, Birinci Rus-Çeçen Savaşı’nın fedakâr mücidlerindendir.",
      "Aralık 1994’te Rus işgal ordularının saldırısı başladığında vatan savunması için silah kuşanan Ramzan Kudayev, Doğu Cephesi ve dağ geçitlerinin savunmasında ağırbaşlı ahlakı, sarsılmaz imanı ve cesaretiyle silah arkadaşlarına örnek olmuştur. Vedeno dağlarına açılan stratejik Serjen-Yurt cephesinde işgalci birliklere karşı çarpışan Ramzan Kudayev, 16 Mayıs 1995 tarihinde şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "said-muhammed-visayev",
    "name": "Said-Muhammed Visayev",
    "born": "1974",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/said-muhammed-visayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/said-muhammed-visayev.webp?v=4",
        "caption": "Said-Muhammed Visayev (1974–2000)"
      }
    ],
    "summary": "Urus-Martan bölgesinin Gehi köyünde dünyaya gelen ve Varandoy boyuna mensup olan Said-Muhammed Visayev, vatan toprağını Rus işgalinden korumak için genç yaşta direniş saflarına katılmıştır.",
    "bio": [
      "Urus-Martan bölgesinin Gehi köyünde dünyaya gelen ve Varandoy boyuna mensup olan Said-Muhammed Visayev, vatan toprağını Rus işgalinden korumak için genç yaşta direniş saflarına katılmıştır.",
      "2000 yılı kışında ağır kuşatma şartlarında gerçekleşen dağ yürüyüşü ve cephe muharebelerinde en zorlu görevleri üstlenen Said-Muhammed Visayev, silah arkadaşlarının kuşatma hattından güvenli geçişini sağlamak için mayın temizleme görevine gönüllü olmuştur. 11 Mart 2000 tarihinde Saadi-Kotar (Komsomolskoye) yakınlarında mücahid kardeşlerinin yolunu açmak üzere mayın imha ettiği sırada şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "emir-abdurrahman",
    "name": "Abdurrahman Şişani",
    "born": "1971",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/emir-abdurrahman.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/emir-abdurrahman.webp?v=4",
        "caption": "Abdurrahman Şişani (1971–2002)"
      }
    ],
    "summary": "Gilyanı köyü kökenli, Bitro boyuna mensup seçkin direniş komutanıdır. Ürdün’deki ailesinin yanından ata toprağı Çeçenistan’a geri döndü.",
    "bio": [
      "Gilyanı köyü kökenli, Bitro boyuna mensup seçkin direniş komutanıdır. Ürdün’deki ailesinin yanından ata toprağı Çeçenistan’a geri döndü.",
      "Her iki Rus-Çeçen Savaşı’nda Caharkale, Serjen-Yurt ve Duba-Yurt’ta çarpıştı. Şeyh Ebu Ömer’den ilim tahsil eden, cesareti ve nasihatleriyle tanınan bir mücahitti. Haziran 2002’de cephe hattında coşkun dağ nehrini geçerken şehit düştü."
    ]
  },
  {
    "slug": "aslan-cabayev",
    "name": "Aslan Cabayev (Abdus-Samad)",
    "born": "1985",
    "died": "2004",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aslan-cabayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslan-cabayev.webp?v=4",
        "caption": "Aslan Cabayev (Abdus-Samad) (1985–2004)"
      }
    ],
    "summary": "‘Abdus-Samad’ künyesiyle tanınan, Açhoy-Martan doğumlu genç mücahiddir. İkinci Rus-Çeçen Savaşı yıllarında henüz genç yaşta direniş saflarına katıldı.",
    "bio": [
      "‘Abdus-Samad’ künyesiyle tanınan, Açhoy-Martan doğumlu genç mücahiddir. İkinci Rus-Çeçen Savaşı yıllarında henüz genç yaşta direniş saflarına katıldı.",
      "Batı Cephesi ve Açhoy-Martan direniş hatlarında işgalcilere karşı görev yaptı. Güler yüzü, cesareti ve imanıyla silah arkadaşlarının sevgisini kazandı. 5 Mayıs 2004’te henüz on dokuz yaşındayken vatan savunmasında şehit düştü."
    ]
  },
  {
    "slug": "islam-saraliyev",
    "name": "İslam Saraliyev (Emir Sayhan)",
    "born": "1978",
    "died": "2003",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "İnguşetya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/islam-saraliyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/islam-saraliyev.webp?v=4",
        "caption": "İslam Saraliyev (Emir Sayhan) (1978–2003)"
      }
    ],
    "summary": "‘Emir Sayhan’ künyesiyle tanınan, Nihaloy boyu mensubu direniş komutanıdır. Her iki Rus-Çeçen Savaşı’nda vatan toprağının bağımsızlığı için çarpıştı.",
    "bio": [
      "‘Emir Sayhan’ künyesiyle tanınan, Nihaloy boyu mensubu direniş komutanıdır. Her iki Rus-Çeçen Savaşı’nda vatan toprağının bağımsızlığı için çarpıştı.",
      "2000 kışı Saadi-Kotar yarma harekâtı ve dağ cephelerinde ön safta yer aldı. Kardeşi Salavat ile birlikte ömrünü İslam ve özgürlük davasına adadı. 2003 yılında İnguşetya cephesindeki çarpışmada şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "aslambek-borcasvili",
    "name": "Aslambek Borçaşvili",
    "born": "1979",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aslambek-borcasvili.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslambek-borcasvili.webp?v=4",
        "caption": "Aslambek Borçaşvili (1979–2000)"
      }
    ],
    "summary": "Çeçen direniş saflarında genç yaşta sancak taşıyan cesur mücahiddir. 1999’da Rus işgal ordusunun yeniden saldırmasıyla cepheye koştu.",
    "bio": [
      "Çeçen direniş saflarında genç yaşta sancak taşıyan cesur mücahiddir. 1999’da Rus işgal ordusunun yeniden saldırmasıyla cepheye koştu.",
      "2000 kışında ağır kuşatma ve dağ yürüyüşlerinde omuz omuza çarpıştı. Sarsılmaz imanı, fedakarlığı ve cesaretiyle ön hatlarda görev yaptı. 12 Mart 2000’de yirmi bir yaşındayken vatan savunmasında şehit düştü."
    ]
  },
  {
    "slug": "lom-ali-gubayev",
    "name": "Lom-Ali Gubayev",
    "born": "1974",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/lom-ali-gubayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/lom-ali-gubayev.webp?v=4",
        "caption": "Lom-Ali Gubayev (1974–2000)"
      }
    ],
    "summary": "Naurskaya doğumlu, Hakmado boyuna mensup yiğit Çeçen direniş mücahididir. Vatan toprağını Rus işgalinden korumak için direniş birliklerine katıldı.",
    "bio": [
      "Naurskaya doğumlu, Hakmado boyuna mensup yiğit Çeçen direniş mücahididir. Vatan toprağını Rus işgalinden korumak için direniş birliklerine katıldı.",
      "Caharkale savunması ve güney dağ cephesindeki çarpışmalarda görev yaptı. Mart 2000’de Saadi-Kotar’da kuşatmayı yaran artçı birlikler arasında yer aldı. Saadi-Kotar’daki Surat Dağı çarpışmalarında kahramanca direnerek şehit düştü."
    ]
  },
  {
    "slug": "hasan-amriyev",
    "name": "Hasan Amriyev",
    "born": "1966",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hasan-amriyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hasan-amriyev.webp?v=4",
        "caption": "Hasan Amriyev (1966–1995)"
      }
    ],
    "summary": "Melhi boyuna mensup, Birinci Rus-Çeçen Savaşı’nın öncü mücahitlerindendir. Aralık 1994’te Rus ordusunun işgal saldırısı başladığında cepheye koştu.",
    "bio": [
      "Melhi boyuna mensup, Birinci Rus-Çeçen Savaşı’nın öncü mücahitlerindendir. Aralık 1994’te Rus ordusunun işgal saldırısı başladığında cepheye koştu.",
      "Güneybatı Cephesi’nde stratejik Bamut kalesinin savunmasında görev aldı. Ağır topçu ve hava bombardımanı altında siperlerini terk etmeden direndi. 1995 yılında Bamut cephesindeki destansı çarpışmalarda şehit düştü."
    ]
  },
  {
    "slug": "haron-babuyev",
    "name": "Haron Babuyev",
    "born": "1969",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/haron-babuyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/haron-babuyev.webp?v=4",
        "caption": "Haron Babuyev (1969–2000)"
      }
    ],
    "summary": "Haçaroy boyuna mensup, vatanına ve inancına bağlı direniş mücahididir. Rus işgal kuvvetlerine karşı bağımsızlık mücadelesinde ön safta yer aldı.",
    "bio": [
      "Haçaroy boyuna mensup, vatanına ve inancına bağlı direniş mücahididir. Rus işgal kuvvetlerine karşı bağımsızlık mücadelesinde ön safta yer aldı.",
      "2000 kışı Caharkale savunması ve dağ geçişlerinde fedakarca görev yaptı. Ağır kuşatma şartlarında silah arkadaşlarıyla birlikte direnişi sürdürdü. Mart 2000’de Saadi-Kotar’da işgalcilere karşı çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "movldi-kagarmanov",
    "name": "Movldi Kagarmanov",
    "born": "1973",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/movldi-kagarmanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/movldi-kagarmanov.webp?v=4",
        "caption": "Movldi Kagarmanov (1973–2000)"
      }
    ],
    "summary": "Naurskaya doğumlu, Hakmado boyuna mensup yiğit direniş mücahididir. Ağabeyleri Salaudin ve Balaudi ile birlikte Naurski Taburu’nda görev aldı.",
    "bio": [
      "Naurskaya doğumlu, Hakmado boyuna mensup yiğit direniş mücahididir. Ağabeyleri Salaudin ve Balaudi ile birlikte Naurski Taburu’nda görev aldı.",
      "Birinci ve İkinci Rus-Çeçen Savaşları’nda vatan savunmasında omuz omuza çarpıştı. Üç kardeş olarak bağımsızlık sancağını son nefeslerine dek taşıdılar. Mart 2000’de Saadi-Kotar direnişinde ağabeyleriyle birlikte şehit düştü."
    ]
  },
  {
    "slug": "musa-uspanov",
    "name": "Musa Uspanov",
    "born": "1971",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/musa-uspanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/musa-uspanov.webp?v=4",
        "caption": "Musa Uspanov (1971–2000)"
      }
    ],
    "summary": "Haçaroy boyuna mensup, cesur ve fedakar Çeçen direniş mücahididir. Ağabeyi Mohmad-Tahir Uspanov ile birlikte vatan savunmasına katıldı.",
    "bio": [
      "Haçaroy boyuna mensup, cesur ve fedakar Çeçen direniş mücahididir. Ağabeyi Mohmad-Tahir Uspanov ile birlikte vatan savunmasına katıldı.",
      "Caharkale savunması ve 2000 kışı kuşatma yarma harekâtında görev yaptı. Ağır kış şartlarında dağ yürüyüşü boyunca silah arkadaşlarını yalnız bırakmadı. Mart 2000’de Saadi-Kotar destanında ağabeyiyle birlikte şehit düştü."
    ]
  },
  {
    "slug": "isa-saykilayev",
    "name": "İsa Şaykilayev",
    "born": "1980",
    "died": "1999",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/isa-saykilayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/isa-saykilayev.webp?v=4",
        "caption": "İsa Şaykilayev (1980–1999)"
      }
    ],
    "summary": "Haçaroy boyuna mensup, on dokuz yaşındaki genç Çeçen direniş yiğididir. 1999 sonbaharında Rus ordusu yeniden saldırdığında ilk saflarda cepheye koştu.",
    "bio": [
      "Haçaroy boyuna mensup, on dokuz yaşındaki genç Çeçen direniş yiğididir. 1999 sonbaharında Rus ordusu yeniden saldırdığında ilk saflarda cepheye koştu.",
      "Kuzey Cephesi’nde Terek sırtları ve Kalaus hattının savunmasında görev aldı. Üstün zırhlı kuvvetlere karşı siperini terk etmeden cesaretle direndi. 4 Ekim 1999’da Terek sırtları savunmasında çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "sayd-huseyin-makaziyev",
    "name": "Sayd-Hüseyin Makaziyev",
    "born": "1971",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/sayd-huseyin-makaziyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/sayd-huseyin-makaziyev.webp?v=4",
        "caption": "Sayd-Hüseyin Makaziyev (1971–2000)"
      }
    ],
    "summary": "1971 doğumlu, Çeçen direnişinin cesur ve fedakar mücahitlerindendir. Rus işgal ordusuna karşı vatan toprağının savunmasında ön saflarda yer aldı.",
    "bio": [
      "1971 doğumlu, Çeçen direnişinin cesur ve fedakar mücahitlerindendir. Rus işgal ordusuna karşı vatan toprağının savunmasında ön saflarda yer aldı.",
      "मार्च 2000’de Şatoy bölgesindeki kuşatma ve yarma çarpışmalarında görev yaptı. Sarsılmaz imanı, ağırbaşlılığı ve kardeşlik ruhuyla silah arkadaşlarına örnek oldu. Mart 2000’de Şatoy istikametindeki çarpışmalarda şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "magomed-taverdiyev",
    "name": "Magomed Taverdiyev (Kurbaş)",
    "born": "1976",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/magomed-taverdiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/magomed-taverdiyev.webp?v=4",
        "caption": "Magomed Taverdiyev (Kurbaş) (1976–2000)"
      }
    ],
    "summary": "‘Kurbaş’ künyesiyle tanınan, Çeçen direnişinin yiğit savaşçılarındandır. İkinci Rus-Çeçen Savaşı’nda vatanın bağımsızlığı için cepheye koştu.",
    "bio": [
      "‘Kurbaş’ künyesiyle tanınan, Çeçen direnişinin yiğit savaşçılarındandır. İkinci Rus-Çeçen Savaşı’nda vatanın bağımsızlığı için cepheye koştu.",
      "Mart 2000’de Saadi-Kotar (Komsomolskoye) direnişinde omuz omuza çarpıştı. Kuşatma altındaki en ağır günlerde cesareti ve sabrıyla ön hatlarda durdu. Mart 2000’de Saadi-Kotar çarpışmalarında yirmi dört yaşında şehit düştü."
    ]
  },
  {
    "slug": "islam-tasuyev",
    "name": "İslam Tasuyev",
    "born": "1975",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/islam-tasuyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/islam-tasuyev.webp?v=4",
        "caption": "İslam Tasuyev (1975–2000)"
      }
    ],
    "summary": "1975 doğumlu, Çeçen direniş saflarının imanlı ve vakıf mücahididir. Rus işgaline karşı başkentten dağ cephelerine uzanan direnişte yer aldı.",
    "bio": [
      "1975 doğumlu, Çeçen direniş saflarının imanlı ve vakıf mücahididir. Rus işgaline karşı başkentten dağ cephelerine uzanan direnişte yer aldı.",
      "Mart 2000’de Saadi-Kotar köyündeki tarihi direniş hattında görev yaptı. Silah arkadaşları arasında fedakarlığı, ihlası ve metanetiyle tanındı. Mart 2000’de Saadi-Kotar savunmasında yirmi beş yaşında şehit düştü."
    ]
  },
  {
    "slug": "zayndi-gatsayev",
    "name": "Zayndi Gatsayev",
    "born": "1974",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/zayndi-gatsayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/zayndi-gatsayev.webp?v=4",
        "caption": "Zayndi Gatsayev (1974–2000)"
      }
    ],
    "summary": "1974 doğumlu, Çeçen milli direnişinin sarsılmaz savaşçılarındandır. Vatan topraklarının işgalcilere karşı müdafaasında ön saflarda çarpıştı.",
    "bio": [
      "1974 doğumlu, Çeçen milli direnişinin sarsılmaz savaşçılarındandır. Vatan topraklarının işgalcilere karşı müdafaasında ön saflarda çarpıştı.",
      "2000 kışında Güney Cephesi ve Saadi-Kotar hattındaki muharebelere katıldı. Zorlu kuşatma şartlarında silah arkadaşlarıyla omuz omuza direndi. Mart 2000’de Saadi-Kotar çarpışmalarında yirmi altı yaşında şehit düştü."
    ]
  },
  {
    "slug": "mohmad-saralapov",
    "name": "Mohmad Saralapov",
    "born": "1981",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/mohmad-saralapov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/mohmad-saralapov.webp?v=4",
        "caption": "Mohmad Saralapov (1981–2000)"
      }
    ],
    "summary": "1981 doğumlu, genç yaşta direniş sancağını omuzlayan yiğit mücahiddir. İkinci Rus-Çeçen Savaşı başladığında tereddüt etmeden cepheye katıldı.",
    "bio": [
      "1981 doğumlu, genç yaşta direniş sancağını omuzlayan yiğit mücahiddir. İkinci Rus-Çeçen Savaşı başladığında tereddüt etmeden cepheye katıldı.",
      "Kış yürüyüşü ve Saadi-Kotar’daki ağır kuşatma çarpışmalarında görev yaptı. Genç yaşına rağmen cesareti, sadakati ve metanetiyle örnek oldu. Mart 2000’de Saadi-Kotar direnişinde henüz on dokuz yaşında şehit düştü."
    ]
  },
  {
    "slug": "ramzan-darayev",
    "name": "Ramzan Darayev",
    "born": "1974",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ramzan-darayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ramzan-darayev.webp?v=4",
        "caption": "Ramzan Darayev (1974–2000)"
      }
    ],
    "summary": "1974 doğumlu, Çeçen direnişinin kararlı ve fedakar mücahitlerindendir. Rus işgal kuvvetlerine karşı vatan savunmasında aktif görev üstlendi.",
    "bio": [
      "1974 doğumlu, Çeçen direnişinin kararlı ve fedakar mücahitlerindendir. Rus işgal kuvvetlerine karşı vatan savunmasında aktif görev üstlendi.",
      "Mart 2000’de Saadi-Kotar’da kuşatmaya karşı verilen destansı direnişte yer aldı. İmanı, ağırbaşlılığı ve cephedeki sarsılmaz duruşuyla iz bıraktı. Mart 2000’de Saadi-Kotar çarpışmalarında yirmi altı yaşında şehit düştü."
    ]
  },
  {
    "slug": "magomed-bahtarisev",
    "name": "Magomed Bahtarişev",
    "born": "1975",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/magomed-bahtarisev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/magomed-bahtarisev.webp?v=4",
        "caption": "Magomed Bahtarişev (1975–2000)"
      }
    ],
    "summary": "1975 doğumlu, Çeçen direniş saflarının cesur ve ihlaslı mücahididir. Vatanın özgürlüğü ve İslam sancağının yücelmesi için cepheye koştu.",
    "bio": [
      "1975 doğumlu, Çeçen direniş saflarının cesur ve ihlaslı mücahididir. Vatanın özgürlüğü ve İslam sancağının yücelmesi için cepheye koştu.",
      "2000 kışı boyunca kuşatma ve yarma harekâtlarında ön hatlarda çarpıştı. En çetin şartlarda bile silah arkadaşlarına moral ve güç kaynağı oldu. Mart 2000’de Saadi-Kotar direnişinde yirmi beş yaşında şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "ayndi-kaplanov",
    "name": "Ayndi Kaplanov",
    "born": "1973",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ayndi-kaplanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ayndi-kaplanov.webp?v=4",
        "caption": "Ayndi Kaplanov (1973–2000)"
      }
    ],
    "summary": "1973 doğumlu, Çeçen direnişinin tecrübeli ve yiğit savaşçılarındandır. Rus işgaline karşı yürütülen bağımsızlık mücadelesinde ön safta yer aldı.",
    "bio": [
      "1973 doğumlu, Çeçen direnişinin tecrübeli ve yiğit savaşçılarındandır. Rus işgaline karşı yürütülen bağımsızlık mücadelesinde ön safta yer aldı.",
      "Mart 2000’de Saadi-Kotar’daki eşitsiz kuşatma muharebelerinde direndi. Fedakarlığı, metaneti ve sarsılmaz kardeşlik bağıyla tanındı. Mart 2000’de Saadi-Kotar savunmasında yirmi yedi yaşında şehit düştü."
    ]
  },
  {
    "slug": "islam-ediyev",
    "name": "İslam Ediyev (Sahrabi)",
    "born": "1969",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/islam-ediyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/islam-ediyev.webp?v=4",
        "caption": "İslam Ediyev (Sahrabi) (1969–2000)"
      }
    ],
    "summary": "‘Sahrabi’ künyesiyle tanınan, Çeçen direnişinin kıdemli mücahitlerindendir. Her iki Rus-Çeçen Savaşı’nda vatan toprağının müdafaasına katıldı.",
    "bio": [
      "‘Sahrabi’ künyesiyle tanınan, Çeçen direnişinin kıdemli mücahitlerindendir. Her iki Rus-Çeçen Savaşı’nda vatan toprağının müdafaasına katıldı.",
      "Mart 2000’de Saadi-Kotar kuşatmasında silah arkadaşlarıyla omuz omuza çarpıştı. Cesareti, olgunluğu ve davasına olan sadakatiyle cephede örnek oldu. Mart 2000’de Saadi-Kotar çarpışmalarında otuz bir yaşında şehit düştü."
    ]
  },
  {
    "slug": "rustam-haciyev",
    "name": "Rustam Haciyev",
    "born": "1976",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/rustam-haciyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/rustam-haciyev.webp?v=4",
        "caption": "Rustam Haciyev (1976–2000)"
      }
    ],
    "summary": "1976 doğumlu, Çeçen direniş saflarının fedakar ve cesur savaşçısıdır. Rus işgal ordusuna karşı vatanın bağımsızlığı uğrunda silah kuşandı.",
    "bio": [
      "1976 doğumlu, Çeçen direniş saflarının fedakar ve cesur savaşçısıdır. Rus işgal ordusuna karşı vatanın bağımsızlığı uğrunda silah kuşandı.",
      "2000 kışında başkentten güney dağlarına uzanan direniş hattında görev yaptı. Saadi-Kotar kuşatmasında son nefesine kadar iman ve azimle direndi. Mart 2000’de Saadi-Kotar muharebesinde yirmi dört yaşında şehit düştü."
    ]
  },
  {
    "slug": "kazbek-amayev",
    "name": "Kazbek Amayev",
    "born": "1971",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/kazbek-amayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/kazbek-amayev.webp?v=4",
        "caption": "Kazbek Amayev (1971–1995)"
      }
    ],
    "summary": "1971 yılında Urus-Martan’ın Goytı köyünde doğmuş yiğit Çeçen direniş mücahididir. Aralık 1994’te Rus işgaline karşı vatanını ve imanını savunmak için cepheye çıktı.",
    "bio": [
      "1971 yılında Urus-Martan’ın Goytı köyünde doğmuş yiğit Çeçen direniş mücahididir. Aralık 1994’te Rus işgaline karşı vatanını ve imanını savunmak için cepheye çıktı.",
      "Ocak 1995’te Cahar’daki Başkanlık Sarayı savunmasında en ön saflarda yer aldı. Ağır topçu ateşi altında yeminine ve milletine son nefesine kadar sadık kaldı. 18 Ocak 1995’te Başkanlık Sarayı direnişinde yirmi dört yaşında şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "tarhan-terhoyev",
    "name": "Tarhan Terhoyev",
    "born": "1974",
    "died": "1995",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/tarhan-terhoyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/tarhan-terhoyev.webp?v=4",
        "caption": "Tarhan Terhoyev (1974–1995)"
      }
    ],
    "summary": "20 Eylül 1974 doğumlu, ‘Dadi’ lakabıyla tanınan cesur Çeçen komutanıdır. Birinci Rus-Çeçen Savaşı’nda Güneybatı Cephesi’nde müfreze komutanlığı üstlendi.",
    "bio": [
      "20 Eylül 1974 doğumlu, ‘Dadi’ lakabıyla tanınan cesur Çeçen komutanıdır. Birinci Rus-Çeçen Savaşı’nda Güneybatı Cephesi’nde müfreze komutanlığı üstlendi.",
      "Üstün cesaretiyle İçkerya’nın en yüksek nişanı ‘Koman Turpal’ ile taltif edildi. Bamut direnişinde Rus zırhlı birliklerine karşı destansı bir mücadele verdi. 7 Haziran 1995’te Bamut savunmasında yirmi yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "mohmad-salah-arsamekov",
    "name": "Mohmad-Salah Arsamekov",
    "born": "1977",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/mohmad-salah-arsamekov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/mohmad-salah-arsamekov.webp?v=4",
        "caption": "Mohmad-Salah Arsamekov (1977–2000)"
      }
    ],
    "summary": "1977 doğumlu, ‘Sultan’ lakabıyla bilinen Haçaro boyuna mensup Çeçen savaşçısıdır. İkinci Rus-Çeçen Savaşı’nda İçkerya Silahlı Kuvvetleri saflarında cepheye koştu.",
    "bio": [
      "1977 doğumlu, ‘Sultan’ lakabıyla bilinen Haçaro boyuna mensup Çeçen savaşçısıdır. İkinci Rus-Çeçen Savaşı’nda İçkerya Silahlı Kuvvetleri saflarında cepheye koştu.",
      "2000 kışı kuşatma ve yarma harekâtlarında sarsılmaz iradesiyle çarpıştı. Saadi-Kotar direnişinde silah arkadaşlarıyla omuz omuza sonuna dek direndi. Mart 2000’de Saadi-Kotar muharebesinde yirmi üç yaşında şehit düştü."
    ]
  },
  {
    "slug": "denis-dudurkayev",
    "name": "Denis Dudurkayev",
    "born": "1965",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/denis-dudurkayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/denis-dudurkayev.webp?v=4",
        "caption": "Denis Dudurkayev (1965–2000)"
      }
    ],
    "summary": "1965 yılında Cahar’ın Aldı kasabasında doğan Mulko boyuna mensup mücahittir. Vatan toprağını Rus işgal ordusuna karşı savunmak için silah kuşandı.",
    "bio": [
      "1965 yılında Cahar’ın Aldı kasabasında doğan Mulko boyuna mensup mücahittir. Vatan toprağını Rus işgal ordusuna karşı savunmak için silah kuşandı.",
      "1999-2000 kışında başkent savunması ve dağ yürüyüşü hattında mücadele etti. Olgunluğu, cesur duruşu ve fedakarlığıyla cephede örnek oldu. Mart 2000’de Saadi-Kotar kuşatmasında çarpışarak şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "musa-iznaurov",
    "name": "Musa İznaurov",
    "born": "1972",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/musa-iznaurov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/musa-iznaurov.webp?v=4",
        "caption": "Musa İznaurov (1972–2000)"
      }
    ],
    "summary": "1972 yılında Cahar’ın Aldı kasabasında doğmuş Mulko boyuna mensup savaşçıdır. İkinci Rus-Çeçen Savaşı’nda vatanın bağımsızlığı uğrunda direniş saflarına katıldı.",
    "bio": [
      "1972 yılında Cahar’ın Aldı kasabasında doğmuş Mulko boyuna mensup savaşçıdır. İkinci Rus-Çeçen Savaşı’nda vatanın bağımsızlığı uğrunda direniş saflarına katıldı.",
      "Başkent kuşatması ve Güney Cephesi’ne geçiş harekâtında ağır şartlara göğüs gerdi. Saadi-Kotar’da kendilerinden katbekat üstün işgal güçlerine karşı direndi. Mart 2000’de Saadi-Kotar direnişinde yirmi sekiz yaşında şehit düştü."
    ]
  },
  {
    "slug": "adam-aspiyev",
    "name": "Adam Aspiyev",
    "born": "1973",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/adam-aspiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/adam-aspiyev.webp?v=4",
        "caption": "Adam Aspiyev (1973–2000)"
      }
    ],
    "summary": "1973 yılında Cahar’ın karpinka semtinde doğmuş inguş asıllı mücahittir. Kafkasya halklarının kardeşlik ve direniş ruhuyla cephede saf tuttu.",
    "bio": [
      "1973 yılında Cahar’ın karpinka semtinde doğmuş inguş asıllı mücahittir. Kafkasya halklarının kardeşlik ve direniş ruhuyla cephede saf tuttu.",
      "1999-2000 kışı boyunca Çeçen silah arkadaşlarıyla omuz omuza çarpıştı. Saadi-Kotar kuşatmasında son mermisine kadar iman ve cesaretle direndi. Mart 2000’de Saadi-Kotar muharebesinde yirmi yedi yaşında şehit düştü."
    ]
  },
  {
    "slug": "anzor-batalov",
    "name": "Anzor Batalov",
    "born": "1976",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/anzor-batalov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/anzor-batalov.webp?v=4",
        "caption": "Anzor Batalov (1976–2000)"
      }
    ],
    "summary": "1976 yılında Sernovodskoye’de doğan, Sayfullah lakaplı Mulko boyu mücahididir. Ağabeyi İslam Batalov ile birlikte vatan savunması için cepheye çıktı.",
    "bio": [
      "1976 yılında Sernovodskoye’de doğan, Sayfullah lakaplı Mulko boyu mücahididir. Ağabeyi İslam Batalov ile birlikte vatan savunması için cepheye çıktı.",
      "2000 kışında kuşatma yarma harekâtı ve Güney Cephesi çarpışmalarında yer aldı. Saadi-Kotar’da ağabeyiyle omuz omuza son nefesine kadar direndi. Mart 2000’de Saadi-Kotar direnişinde ağabeyiyle birlikte şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "ramzan-cukayev",
    "name": "Ramzan Çukayev",
    "born": "1976",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ramzan-cukayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ramzan-cukayev.webp?v=4",
        "caption": "Ramzan Çukayev (1976–2000)"
      }
    ],
    "summary": "1976 yılında Cahar’ın Aldı kasabasında doğan Mulko boyuna mensup savaşçıdır. Komutan Bati’nin müfrezesinde Rus işgal kuvvetlerine karşı cephede görev yaptı.",
    "bio": [
      "1976 yılında Cahar’ın Aldı kasabasında doğan Mulko boyuna mensup savaşçıdır. Komutan Bati’nin müfrezesinde Rus işgal kuvvetlerine karşı cephede görev yaptı.",
      "2000 kışında başkentten dağlara uzanan zorlu kuşatma hattında çarpıştı. Cesareti, sadakati ve sarsılmaz imanıyla silah arkadaşlarının güvenini kazandı. Mart 2000’de Saadi-Kotar kuşatmasında yirmi dört yaşında şehit düştü."
    ]
  },
  {
    "slug": "mohmad-hamzatov",
    "name": "Mohmad Hamzatov",
    "born": "1975",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/mohmad-hamzatov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/mohmad-hamzatov.webp?v=4",
        "caption": "Mohmad Hamzatov (1975–2000)"
      }
    ],
    "summary": "1975 yılında Aldı kasabasında doğan, Mamişk lakaplı Guho boyu mücahididir. Dayısı Komutan Bati’nin müfrezesinde vatan savunması için silah kuşandı.",
    "bio": [
      "1975 yılında Aldı kasabasında doğan, Mamişk lakaplı Guho boyu mücahididir. Dayısı Komutan Bati’nin müfrezesinde vatan savunması için silah kuşandı.",
      "1999-2000 kışı boyunca en çetin cephe hatlarında fedakarca çarpıştı. Saadi-Kotar’da kuşatmaya rağmen teslimiyeti reddedip sonuna dek direndi. Mart 2000’de Saadi-Kotar direnişinde yirmi beş yaşında şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "mayrbek-maltsagov",
    "name": "Mayrbek Maltsagov",
    "born": "1973",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/mayrbek-maltsagov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/mayrbek-maltsagov.webp?v=4",
        "caption": "Mayrbek Maltsagov (1973–2000)"
      }
    ],
    "summary": "1973 yılında Prigorodnoye köyünde doğan Haçaro boyuna mensup Çeçen savaşçısıdır. İçkerya Silahlı Kuvvetleri saflarında Rus işgaline karşı kıyam etti.",
    "bio": [
      "1973 yılında Prigorodnoye köyünde doğan Haçaro boyuna mensup Çeçen savaşçısıdır. İçkerya Silahlı Kuvvetleri saflarında Rus işgaline karşı kıyam etti.",
      "Başkent savunması ve 2000 kışı dağ yürüyüşünde ön saflarda mücadele verdi. Saadi-Kotar’daki destansı direnişte son nefesine kadar mevzisini korudu. Mart 2000’de Saadi-Kotar muharebesinde yirmi yedi yaşında şehit düştü."
    ]
  },
  {
    "slug": "visa-idigov",
    "name": "Visa İdigov",
    "born": "1966",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/visa-idigov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/visa-idigov.webp?v=4",
        "caption": "Visa İdigov (1966–1995)"
      }
    ],
    "summary": "1966 yılında Şatoy’da (Şüytara) doğan, Adam oğlu yiğit Çeçen direniş mücahididir. Birinci Rus-Çeçen Savaşı başladığında vatan toprağını savunmak için cepheye koştu.",
    "bio": [
      "1966 yılında Şatoy’da (Şüytara) doğan, Adam oğlu yiğit Çeçen direniş mücahididir. Birinci Rus-Çeçen Savaşı başladığında vatan toprağını savunmak için cepheye koştu.",
      "1995 kışı boyunca başkent Cahar savunmasında ön hatlarda çarpıştı. Cesareti, fedakarlığı ve sarsılmaz imanıyla silah arkadaşlarına örnek oldu. 6 Şubat 1995’te Şinasüyra-Yuke mevkiindeki çarpışmalarda kahramanca şehit düştü."
    ]
  },
  {
    "slug": "mohmad-salah-adamov",
    "name": "Mohmad-Salah Adamov",
    "born": "1960",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/mohmad-salah-adamov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/mohmad-salah-adamov.webp?v=4",
        "caption": "Mohmad-Salah Adamov (1960–1995)"
      }
    ],
    "summary": "1960 yılında Şali’de (Şelara) doğan, Hasmohmad oğlu Çeçen direniş mücahididir. Aralık 1994’te Rus işgal ordusunun saldırısına karşı vatan savunmasına katıldı.",
    "bio": [
      "1960 yılında Şali’de (Şelara) doğan, Hasmohmad oğlu Çeçen direniş mücahididir. Aralık 1994’te Rus işgal ordusunun saldırısına karşı vatan savunmasına katıldı.",
      "Başkent Cahar kuşatmasında en çetin sokak çarpışmalarında görev aldı. Olgunluğu, metaneti ve imanıyla genç mücahitlere moral kaynağı oldu. 6 Şubat 1995’te Cahar savunmasında otuz beş yaşında şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "hamzat-sagayev",
    "name": "Hamzat Sagayev",
    "born": "1965",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hamzat-sagayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hamzat-sagayev.webp?v=4",
        "caption": "Hamzat Sagayev (1965–1995)"
      }
    ],
    "summary": "1965 yılında Urus-Martan’da doğan, Umar oğlu cesur Çeçen savaşçısıdır. Birinci Rus-Çeçen Savaşı’nda İçkerya’nın bağımsızlığı için silah kuşandı.",
    "bio": [
      "1965 yılında Urus-Martan’da doğan, Umar oğlu cesur Çeçen savaşçısıdır. Birinci Rus-Çeçen Savaşı’nda İçkerya’nın bağımsızlığı için silah kuşandı.",
      "1995 yılında başkent Cahar ve çevresindeki direniş hatlarında çarpıştı. Ağır bombardıman ve kuşatma altında mevzisini terk etmeden direndi. Nisan 1995’te Cahar’daki çarpışmalarda otuz yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "semal-tabuyev",
    "name": "Şemal Tabuyev",
    "born": "1975",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/semal-tabuyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/semal-tabuyev.webp?v=4",
        "caption": "Şemal Tabuyev (1975–1995)"
      }
    ],
    "summary": "1975 yılında Belgatoy köyünde doğmuş genç ve yiğit Çeçen direniş mücahididir. Henüz on dokuz yaşındayken Rus işgaline karşı vatan savunmasına koştu.",
    "bio": [
      "1975 yılında Belgatoy köyünde doğmuş genç ve yiğit Çeçen direniş mücahididir. Henüz on dokuz yaşındayken Rus işgaline karşı vatan savunmasına koştu.",
      "1995 kışı Cahar savunmasında korkusuzca ön saflarda mücadele verdi. Genç ömrünü milletinin özgürlüğü ve İslam sancağı uğruna feda etti. 3 Şubat 1995’te Cahar direnişinde yirmi yaşında şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "ruslan-arsahanov",
    "name": "Ruslan Arsahanov",
    "born": "1972",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ruslan-arsahanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ruslan-arsahanov.webp?v=4",
        "caption": "Ruslan Arsahanov (1972–1995)"
      }
    ],
    "summary": "1972 yılında Şami-Yurt’ta doğan, Ahmad oğlu fedakar Çeçen mücahididir. Birinci Rus-Çeçen Savaşı’nda vatan toprağını korumak için direniş saflarına katıldı.",
    "bio": [
      "1972 yılında Şami-Yurt’ta doğan, Ahmad oğlu fedakar Çeçen mücahididir. Birinci Rus-Çeçen Savaşı’nda vatan toprağını korumak için direniş saflarına katıldı.",
      "1995 kışında başkent Cahar’da Rus zırhlı birliklerine karşı göğüs göğüse çarpıştı. Cesareti, sadakati ve vatan sevgisiyle silah arkadaşlarının takdirini kazandı. 13 Mart 1995’te Cahar savunmasında yirmi üç yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "muhadi-macidov",
    "name": "Muhadi Macidov",
    "born": "1963",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/muhadi-macidov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muhadi-macidov.webp?v=4",
        "caption": "Muhadi Macidov (1963–1995)"
      }
    ],
    "summary": "1963 yılında Vedeno’nun Mahkety köyünde doğmuş yiğit Çeçen direniş mücahididir. Aralık 1994’te Rus ordusunun İçkerya’yı işgal girişimine karşı cepheye çıktı.",
    "bio": [
      "1963 yılında Vedeno’nun Mahkety köyünde doğmuş yiğit Çeçen direniş mücahididir. Aralık 1994’te Rus ordusunun İçkerya’yı işgal girişimine karşı cepheye çıktı.",
      "Başkent Cahar’a yönelik yılbaşı taarruzunda stratejik hatlarda direndi. Rus zırhlı kollarının püskürtüldüğü en çetin çarpışmalarda ön safta yer aldı. 3 Ocak 1995’te Cahar savunmasında otuz bir yaşında şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "muhammed-akbulatov",
    "name": "Muhammed Akbulatov",
    "born": "1975",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/muhammed-akbulatov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muhammed-akbulatov.webp?v=4",
        "caption": "Muhammed Akbulatov (1975–1995)"
      }
    ],
    "summary": "1975 yılında Yandi-Kotar köyünde doğmuş genç Çeçen direniş savaşçısıdır. Birinci Rus-Çeçen Savaşı başladığında on dokuz yaşında gönüllü olarak cepheye koştu.",
    "bio": [
      "1975 yılında Yandi-Kotar köyünde doğmuş genç Çeçen direniş savaşçısıdır. Birinci Rus-Çeçen Savaşı başladığında on dokuz yaşında gönüllü olarak cepheye koştu.",
      "31 Aralık 1994 yılbaşı gecesi başkent Cahar’ı savunan birliklerde yer aldı. İşgal ordusunun ağır saldırısına karşı son nefesine kadar cesaretle çarpıştı. 2 Ocak 1995’te Cahar direnişinde genç yaşta kahramanca şehit düştü."
    ]
  },
  {
    "slug": "sayd-muhammed-elderhanov",
    "name": "Sayd-Muhammed Elderhanov",
    "born": "1968",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/sayd-muhammed-elderhanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/sayd-muhammed-elderhanov.webp?v=4",
        "caption": "Sayd-Muhammed Elderhanov (1968–1995)"
      }
    ],
    "summary": "1968 yılında Şali’nin Avturı köyünde doğmuş vakur Çeçen direniş mücahididir. Vatanın bağımsızlığı ve milletinin onuru için direniş saflarında silah kuşandı.",
    "bio": [
      "1968 yılında Şali’nin Avturı köyünde doğmuş vakur Çeçen direniş mücahididir. Vatanın bağımsızlığı ve milletinin onuru için direniş saflarında silah kuşandı.",
      "1994-1995 kışı Cahar savunmasında yılbaşı taarruzuna karşı göğüs gerdi. Sarsılmaz iradesi ve cesur duruşuyla cephe hattında örnek bir mücadele verdi. 2 Ocak 1995’te başkent Cahar savunmasında yirmi altı yaşında şehit düştü."
    ]
  },
  {
    "slug": "islam-batalov",
    "name": "İslam Batalov",
    "born": "1972",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/islam-batalov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/islam-batalov.webp?v=4",
        "caption": "İslam Batalov (1972–2000)"
      }
    ],
    "summary": "1972 yılında Sernovodskoye’de doğan, Rihard adıyla da bilinen Mulko boyu mücahididir. Kardeşi Anzor Batalov ile birlikte Rus işgaline karşı vatan savunmasına katıldı.",
    "bio": [
      "1972 yılında Sernovodskoye’de doğan, Rihard adıyla da bilinen Mulko boyu mücahididir. Kardeşi Anzor Batalov ile birlikte Rus işgaline karşı vatan savunmasına katıldı.",
      "2000 kışında başkent kuşatmasını yararak güney dağ cephesine ulaştı. Saadi-Kotar’da kardeşiyle omuz omuza vererek son mermisine kadar direndi. Mart 2000’de Saadi-Kotar direnişinde kardeşiyle birlikte şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "daud-arsamakov",
    "name": "Daud Arsamakov",
    "born": "1974",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/daud-arsamakov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/daud-arsamakov.webp?v=4",
        "caption": "Daud Arsamakov (1974–2000)"
      }
    ],
    "summary": "1974 doğumlu, Çeçen direniş saflarının cesur ve ihlaslı mücahitlerindendir. İkinci Rus-Çeçen Savaşı’nda İçkerya Silahlı Kuvvetleri saflarında cepheye çıktı.",
    "bio": [
      "1974 doğumlu, Çeçen direniş saflarının cesur ve ihlaslı mücahitlerindendir. İkinci Rus-Çeçen Savaşı’nda İçkerya Silahlı Kuvvetleri saflarında cepheye çıktı.",
      "1999-2000 kışı başkent savunması ve dağ yürüyüşü harekâtında çarpıştı. Saadi-Kotar’da kendilerinden katbekat üstün işgal güçlerine karşı direndi. Mart 2000’de Saadi-Kotar muharebesinde yirmi altı yaşında şehit düştü."
    ]
  },
  {
    "slug": "hamzat-cadayev",
    "name": "Hamzat Çadayev",
    "born": "1958",
    "died": "1994",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hamzat-cadayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hamzat-cadayev.webp?v=4",
        "caption": "Hamzat Çadayev (1958–1994)"
      }
    ],
    "summary": "1958 yılında Şalaji köyünde doğan, Abbaz oğlu yiğit Çeçen direniş mücahididir. Birinci Rus-Çeçen Savaşı başladığında vatan toprağını savunmak için cepheye koştu.",
    "bio": [
      "1958 yılında Şalaji köyünde doğan, Abbaz oğlu yiğit Çeçen direniş mücahididir. Birinci Rus-Çeçen Savaşı başladığında vatan toprağını savunmak için cepheye koştu.",
      "Aralık 1994’te işgal ordusunun başkent Cahar’a yönelik ağır saldırısına karşı direndi. Yılbaşı gecesi Rus zırhlı birliklerine karşı ön saflarda göğüs göğüse çarpıştı. 31 Aralık 1994’te Cahar savunmasında otuz altı yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "nasho-sugaipov",
    "name": "Naşho Sugaipov",
    "born": "1975",
    "died": "2004",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/nasho-sugaipov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/nasho-sugaipov.webp?v=4",
        "caption": "Naşho Sugaipov (1975–2004)"
      }
    ],
    "summary": "1975 doğumlu, Hamzat oğlu; Açhoy-Martan sektörü emiri ve cephe komutanlarındandır. 1994 yılından itibaren on yıl boyunca İçkerya’nın bağımsızlığı için kesintisiz savaştı.",
    "bio": [
      "1975 doğumlu, Hamzat oğlu; Açhoy-Martan sektörü emiri ve cephe komutanlarındandır. 1994 yılından itibaren on yıl boyunca İçkerya’nın bağımsızlığı için kesintisiz savaştı.",
      "Güneybatı Cephesi Komutanı Doku Umarov’un yardımcılığını üstlenerek operasyonlar yönetti. Sarsılmaz cesareti ve liderliğiyle direniş saflarında örnek bir emir olarak tanındı. 2004 yılında yirmi dokuz yaşındayken çarpışmada şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "musa-elmurzayev",
    "name": "Musa Elmurzayev",
    "born": "1977",
    "died": "1999",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/musa-elmurzayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/musa-elmurzayev.webp?v=4",
        "caption": "Musa Elmurzayev (1977–1999)"
      }
    ],
    "summary": "1977 doğumlu, Haraçoy kökenli ve Argunlu genç Çeçen direniş mücahididir. İkinci Rus-Çeçen Savaşı başladığında vatan savunması için direniş saflarına katıldı.",
    "bio": [
      "1977 doğumlu, Haraçoy kökenli ve Argunlu genç Çeçen direniş mücahididir. İkinci Rus-Çeçen Savaşı başladığında vatan savunması için direniş saflarına katıldı.",
      "1999 sonbaharı ve kışında başkent Cahar’ın güney savunma hatlarında çarpıştı. Kuşatma altındaki mevzilerde silah arkadaşlarıyla omuz omuza direndi. 17 Aralık 1999’da Aldı bölgesindeki çarpışmalarda yirmi iki yaşında şehit düştü."
    ]
  },
  {
    "slug": "mohmad-tahir-uspanov",
    "name": "Mohmad-Tahir Uspanov",
    "born": "1965",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/mohmad-tahir-uspanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/mohmad-tahir-uspanov.webp?v=4",
        "caption": "Mohmad-Tahir Uspanov (1965–2000)"
      }
    ],
    "summary": "1965 doğumlu, Haçaroy boyuna mensup Sapiyula oğlu yiğit Çeçen mücahididir. Şehit kardeşi Musa Uspanov ile birlikte Rus işgaline karşı cepheye çıktı.",
    "bio": [
      "1965 doğumlu, Haçaroy boyuna mensup Sapiyula oğlu yiğit Çeçen mücahididir. Şehit kardeşi Musa Uspanov ile birlikte Rus işgaline karşı cepheye çıktı.",
      "1999-2000 kışı başkent Cahar savunmasında ve yarma harekâtında çarpıştı. Saadi-Kotar’da kuşatma altında son mermisine kadar korkusuzca direndi. Mart 2000’de Saadi-Kotar direnişinde otuz beş yaşında şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "imran-tangiyev",
    "name": "İmran Tangiyev",
    "born": "1970",
    "died": "1996",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/imran-tangiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/imran-tangiyev.webp?v=4",
        "caption": "İmran Tangiyev (1970–1996)"
      }
    ],
    "summary": "1970 doğumlu, Melhi boyuna mensup keskin nişancı Çeçen direniş savaşçısıdır. Birinci Rus-Çeçen Savaşı’nda vatan toprağını korumak için direniş saflarına katıldı.",
    "bio": [
      "1970 doğumlu, Melhi boyuna mensup keskin nişancı Çeçen direniş savaşçısıdır. Birinci Rus-Çeçen Savaşı’nda vatan toprağını korumak için direniş saflarına katıldı.",
      "Stratejik Bamut kalesi savunmasında keskin nişancı olarak görev yaptı. İşgal ordusunun Bamut’a yönelik defalarca tekrarlanan taarruzlarını püskürttü. 23 Şubat 1996’da Bamut savunmasında yirmi altı yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "aslan-astamirov",
    "name": "Aslan Astamirov",
    "born": "1975",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aslan-astamirov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslan-astamirov.webp?v=4",
        "caption": "Aslan Astamirov (1975–2000)"
      }
    ],
    "summary": "1975 yılında başkent Cahar’da doğan, Abdul-Hamid (Homa) lakaplı Çeçen mücahididir. İkinci Rus-Çeçen Savaşı’nda başkenti savunan direniş birliklerinde yer aldı.",
    "bio": [
      "1975 yılında başkent Cahar’da doğan, Abdul-Hamid (Homa) lakaplı Çeçen mücahididir. İkinci Rus-Çeçen Savaşı’nda başkenti savunan direniş birliklerinde yer aldı.",
      "2000 kışında kuşatmayı yararak güney dağlarına yürüyen kolda çarpıştı. Saadi-Kotar’da Rus ordusunun ağır kuşatmasına karşı mevzisini terk etmedi. Mart 2000’de Saadi-Kotar muharebesinde yirmi beş yaşında şehit düştü."
    ]
  },
  {
    "slug": "muhammed-emin-magomadov",
    "name": "Muhammed-Emin Magomadov",
    "born": "1975",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/muhammed-emin-magomadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muhammed-emin-magomadov.webp?v=4",
        "caption": "Muhammed-Emin Magomadov (1975–2000)"
      }
    ],
    "summary": "1975 doğumlu, Himo boyuna mensup dört şehit kardeşin ikincisi olan mücahittir. Üç kardeşiyle birlikte vatanın özgürlüğü için Çeçen direniş saflarına katıldı.",
    "bio": [
      "1975 doğumlu, Himo boyuna mensup dört şehit kardeşin ikincisi olan mücahittir. Üç kardeşiyle birlikte vatanın özgürlüğü için Çeçen direniş saflarına katıldı.",
      "2000 yılı kışında Cahar kuşatmasını yararak Güney Cephesi’ne ulaştı. Saadi-Kotar’da kardeşleriyle omuz omuza vererek işgal güçlerine karşı çarpıştı. Mart 2000’de Saadi-Kotar’da dört kardeş birlikte şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "alishan-amayev",
    "name": "Alishan Amayev",
    "born": "1976",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/alishan-amayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/alishan-amayev.webp?v=4",
        "caption": "Alishan Amayev (1976–2000)"
      }
    ],
    "summary": "1976 doğumlu, Mulko boyuna mensup Lom-Ali oğlu genç Çeçen mücahididir. Komutan Doku Umarov’un özel taburunda görev yapan seçkin savaşçılardandır.",
    "bio": [
      "1976 doğumlu, Mulko boyuna mensup Lom-Ali oğlu genç Çeçen mücahididir. Komutan Doku Umarov’un özel taburunda görev yapan seçkin savaşçılardandır.",
      "1999-2000 kışı başkent Cahar savunmasında ön hatlarda çarpıştı. Ağır kış şartlarında Saadi-Kotar’a ulaşarak kuşatma altında direndi. Mart 2000’de Saadi-Kotar direnişinde yirmi dört yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "aslan-baysangurov",
    "name": "Aslan Baysangurov",
    "born": "1973",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aslan-baysangurov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslan-baysangurov.webp?v=4",
        "caption": "Aslan Baysangurov (1973–2000)"
      }
    ],
    "summary": "1973 yılında Sernovodskoye’de doğan, Terlo boyuna mensup Çeçen direniş mücahididir. Kardeşleri Aslanbek ve İslam ile birlikte vatan savunması için silah kuşandı.",
    "bio": [
      "1973 yılında Sernovodskoye’de doğan, Terlo boyuna mensup Çeçen direniş mücahididir. Kardeşleri Aslanbek ve İslam ile birlikte vatan savunması için silah kuşandı.",
      "2000 kışında başkentten güney dağlarına uzanan yarma harekâtına katıldı. Saadi-Kotar’da iki kardeşiyle omuz omuza vererek son nefesine kadar çarpıştı. 6 Mart 2000’de Saadi-Kotar’da kardeşleriyle birlikte şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "ramzan-hasanov",
    "name": "Ramzan Hasanov",
    "born": "1970",
    "died": "1999",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ramzan-hasanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ramzan-hasanov.webp?v=4",
        "caption": "Ramzan Hasanov (1970–1999)"
      }
    ],
    "summary": "1970 yılında başkent Cahar’da doğmuş, ihlaslı ve cesur Çeçen direniş mücahididir. Ünlü Komutan Ahmadov kardeşlerin cemaati saflarında vatan savunmasına katıldı.",
    "bio": [
      "1970 yılında başkent Cahar’da doğmuş, ihlaslı ve cesur Çeçen direniş mücahididir. Ünlü Komutan Ahmadov kardeşlerin cemaati saflarında vatan savunmasına katıldı.",
      "İkinci Rus-Çeçen Savaşı’nda Argun boğazı girişindeki stratejik hatları korudu. Aralık 1999’da Duba-Yurt çevresindeki çetin kış muharebelerinde çarpıştı. 31 Aralık 1999’da Duba-Yurt savunmasında yirmi dokuz yaşında şehit düştü."
    ]
  },
  {
    "slug": "islam-yakubov",
    "name": "İslam Yakubov",
    "born": "1987",
    "died": "2010",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/islam-yakubov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/islam-yakubov.webp?v=4",
        "caption": "İslam Yakubov (1987–2010)"
      }
    ],
    "summary": "1987 yılında Hasavyurt’ta doğan, Abdul-Malik lakaplı genç Çeçen direniş mücahididir. 2008 yılında vatan savunması için dağlara çıkarak direniş saflarına katıldı.",
    "bio": [
      "1987 yılında Hasavyurt’ta doğan, Abdul-Malik lakaplı genç Çeçen direniş mücahididir. 2008 yılında vatan savunması için dağlara çıkarak direniş saflarına katıldı.",
      "Komutan Hüseyin Gakayev’in emrindeki birliklerde aktif operasyonlarda görev aldı. İhlası, tevazusu ve çetin dağ şartlarındaki sabrıyla silah arkadaşlarına örnek oldu. 8 Mayıs 2010’da Petropavlovskoye yakınlarındaki çarpışmada yirmi üç yaşında şehit düştü."
    ]
  },
  {
    "slug": "abubakar-basayev",
    "name": "Abubakar Basayev",
    "born": "1981",
    "died": "2007",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/abubakar-basayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/abubakar-basayev.webp?v=4",
        "caption": "Abubakar Basayev (1981–2007)"
      }
    ],
    "summary": "1981 yılında Prigorodnoye’de doğan, Haçaroy boyuna mensup tuğgeneral ve cephe emiridir. Serbest güreşte spor ustası adayı olup genç yaşta Çeçen direniş saflarına katıldı.",
    "bio": [
      "1981 yılında Prigorodnoye’de doğan, Haçaroy boyuna mensup tuğgeneral ve cephe emiridir. Serbest güreşte spor ustası adayı olup genç yaşta Çeçen direniş saflarına katıldı.",
      "İçkerya Silahlı Kuvvetleri Merkez Cephesi Komutanlığı görevini üstlenerek savaşı yönetti. İşgal güçlerine karşı düzenlenen birçok stratejik operasyona bizzat komuta etti. 23 Ağustos 2007 gecesi çarpışmada yirmi altı yaşında şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "movlat-magomadov",
    "name": "Movlat Magomadov",
    "born": "1980",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/movlat-magomadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/movlat-magomadov.webp?v=4",
        "caption": "Movlat Magomadov (1980–2000)"
      }
    ],
    "summary": "1980 doğumlu, Haçaroy boyuna mensup genç ve yiğit Çeçen direniş mücahididir. İkinci Rus-Çeçen Savaşı başladığında vatan toprağını savunmak için cepheye koştu.",
    "bio": [
      "1980 doğumlu, Haçaroy boyuna mensup genç ve yiğit Çeçen direniş mücahididir. İkinci Rus-Çeçen Savaşı başladığında vatan toprağını savunmak için cepheye koştu.",
      "1999-2000 kışı başkent Cahar kuşatmasında ön mevzilerde çarpıştı. Mayın tarlalarını aşarak Saadi-Kotar köyündeki direniş hatlarına ulaştı. Mart 2000’de Saadi-Kotar muharebesinde yirmi yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "sayd-huseyin-magomadov",
    "name": "Sayd-Hüseyin Magomadov",
    "born": "1981",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/sayd-huseyin-magomadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/sayd-huseyin-magomadov.webp?v=4",
        "caption": "Sayd-Hüseyin Magomadov (1981–2000)"
      }
    ],
    "summary": "1981 yılında Naur bölgesi Alpatovo’da doğan, Çeyroy boyu mensubu Çeçen mücahididir. Henüz on sekiz yaşındayken Rus işgaline karşı direniş saflarında yer aldı.",
    "bio": [
      "1981 yılında Naur bölgesi Alpatovo’da doğan, Çeyroy boyu mensubu Çeçen mücahididir. Henüz on sekiz yaşındayken Rus işgaline karşı direniş saflarında yer aldı.",
      "2000 kışında başkent Cahar’ı savunan birliklerle omuz omuza mücadele etti. Kuşatmayı yararak güney dağlarına yürüyen savaşçı koluyla Saadi-Kotar’a ulaştı. Mart 2000’de Saadi-Kotar direnişinde on dokuz yaşında şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "balaudi-kagarmanov",
    "name": "Balaudi Kagarmanov",
    "born": "1968",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/balaudi-kagarmanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/balaudi-kagarmanov.webp?v=4",
        "caption": "Balaudi Kagarmanov (1968–2000)"
      }
    ],
    "summary": "1968 yılında Naurskaya’da doğan, Hakmadoy boyuna mensup Çeçen direniş savaşçısıdır. Her iki Rus-Çeçen Savaşı’nda vatanın bağımsızlığı için cephelerde görev yaptı.",
    "bio": [
      "1968 yılında Naurskaya’da doğan, Hakmadoy boyuna mensup Çeçen direniş savaşçısıdır. Her iki Rus-Çeçen Savaşı’nda vatanın bağımsızlığı için cephelerde görev yaptı.",
      "1999-2000 kışında başkent Cahar savunmasında ağır bombardıman altında direndi. Saadi-Kotar’da kuşatma altında silah arkadaşlarını korumak için sonuna kadar çarpıştı. Mart 2000’de Saadi-Kotar muharebesinde otuz iki yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "aslanbek-baysangurov",
    "name": "Aslanbek Baysangurov",
    "born": "1975",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aslanbek-baysangurov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslanbek-baysangurov.webp?v=4",
        "caption": "Aslanbek Baysangurov (1975–2000)"
      }
    ],
    "summary": "1975 yılında Sernovodskoye’de doğan, Terlo boyuna mensup Çeçen direniş mücahididir. Şehit Baysangurov kardeşlerin ortancası olup ağabeyi Aslan ve kardeşi İslam ile cepheye çıktı.",
    "bio": [
      "1975 yılında Sernovodskoye’de doğan, Terlo boyuna mensup Çeçen direniş mücahididir. Şehit Baysangurov kardeşlerin ortancası olup ağabeyi Aslan ve kardeşi İslam ile cepheye çıktı.",
      "2000 kışında başkentten güney dağlarına uzanan yarma harekâtına katıldı. Saadi-Kotar’da iki kardeşiyle aynı siperde omuz omuza işgalcilere karşı direndi. Mart 2000’de Saadi-Kotar’da üç kardeş birlikte şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "ruslan-sardalov",
    "name": "Ruslan Sardalov",
    "born": "1965",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ruslan-sardalov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ruslan-sardalov.webp?v=4",
        "caption": "Ruslan Sardalov (1965–2000)"
      }
    ],
    "summary": "10 Mart 1965’te Zakan-Yurt’ta doğan, Haçaroy boyuna mensup İbrahim lakaplı gazidir. Birinci savaşta Gelayev özel birliklerinde ve Ağustos 1996 Cihad Operasyonu’nda çarpıştı.",
    "bio": [
      "10 Mart 1965’te Zakan-Yurt’ta doğan, Haçaroy boyuna mensup İbrahim lakaplı gazidir. Birinci savaşta Gelayev özel birliklerinde ve Ağustos 1996 Cihad Operasyonu’nda çarpıştı.",
      "İkinci savaşta Cahar yarma harekâtında mayın tarlalarını aşarak güneye ulaştı. Saadi-Kotar’da kuşatma altındaki mevzilerde son mermisine kadar korkusuzca savaştı. 8 Mart 2000’de Saadi-Kotar direnişinde otuz beş yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "muhammed-magomadov",
    "name": "Muhammed Magomadov",
    "born": "1973",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/muhammed-magomadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muhammed-magomadov.webp?v=4",
        "caption": "Muhammed Magomadov (1973–2000)"
      }
    ],
    "summary": "1973 doğumlu, Himo boyuna mensup Muhlig lakaplı yiğit Çeçen direniş savaşçısıdır. Saadi-Kotar’da şehit düşen dört Magomadov kardeşin en büyüğü ve öncüsüdür.",
    "bio": [
      "1973 doğumlu, Himo boyuna mensup Muhlig lakaplı yiğit Çeçen direniş savaşçısıdır. Saadi-Kotar’da şehit düşen dört Magomadov kardeşin en büyüğü ve öncüsüdür.",
      "Üç kardeşiyle birlikte Cahar savunmasında ve kuşatmayı yarma harekâtında çarpıştı. Saadi-Kotar köyünde kardeşleriyle omuz omuza vererek işgal ordusuna karşı direndi. Mart 2000’de Saadi-Kotar’da yirmi yedi yaşında kardeşleriyle birlikte şehit düştü."
    ]
  },
  {
    "slug": "arbi-yevmirzayev",
    "name": "Arbi Yevmirzayev",
    "born": "1972",
    "died": "2010",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/arbi-yevmirzayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/arbi-yevmirzayev.webp?v=4",
        "caption": "Arbi Yevmirzayev (1972–2010)"
      }
    ],
    "summary": "1972 yılında Samaşki’de doğan, Emir Mansur lakaplı alim ve Çeçen direniş komutanıdır. Medine’de İslami ilimler tahsil edip Ağustos 1996 Cahar operasyonunda çarpıştı.",
    "bio": [
      "1972 yılında Samaşki’de doğan, Emir Mansur lakaplı alim ve Çeçen direniş komutanıdır. Medine’de İslami ilimler tahsil edip Ağustos 1996 Cahar operasyonunda çarpıştı.",
      "İçkerya Yüksek Şeriat Mahkemesi başkanlığı ve askeri emirlik görevlerini üstlendi. Yıllarca dağlarda hem ilim öğretti hem de ön saflarda mücahidlere komuta etti. 4 Şubat 2010’da İçkerya dağlarındaki çarpışmada otuz sekiz yaşında şehit düştü."
    ]
  },
  {
    "slug": "umar-magomadov",
    "name": "Umar Magomadov",
    "born": "1977",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/umar-magomadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/umar-magomadov.webp?v=4",
        "caption": "Umar Magomadov (1977–2000)"
      }
    ],
    "summary": "1977 doğumlu, Şikaroy boyuna mensup ‘İhlas’ telsiz çağrı kodlu emir ve komutandır. 1994-1996 Savaşı’nda Gelayev özel birliklerinde çarpışıp ‘Koman Turpal’ nişanına aday oldu.",
    "bio": [
      "1977 doğumlu, Şikaroy boyuna mensup ‘İhlas’ telsiz çağrı kodlu emir ve komutandır. 1994-1996 Savaşı’nda Gelayev özel birliklerinde çarpışıp ‘Koman Turpal’ nişanına aday oldu.",
      "İkinci savaşta genç mücahidlere emirlik yaparak dağ cephesinde ön saflarda savaştı. Ulus-Kert yakınlarındaki 776 rakımlı tepe muharebesinde kardeşi Ali ile göğüs göğüse vuruştu. 1 Mart 2000 sabahı Ulus-Kert’te kardeşi Ali ile birlikte yirmi üç yaşında şehit düştü."
    ]
  },
  {
    "slug": "abu-ahmadov",
    "name": "Abu Ahmadov",
    "born": "1966",
    "died": "2001",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/abu-ahmadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/abu-ahmadov.webp?v=4",
        "caption": "Abu Ahmadov (1966–2001)"
      }
    ],
    "summary": "1966 yılında Urus-Martan’da doğan, Gendargenoy boyuna mensup direniş savaşçısıdır. Efsanevi Ahmadov kardeşlerin büyüğü olarak 1994 yılında vatan savunmasına katıldı.",
    "bio": [
      "1966 yılında Urus-Martan’da doğan, Gendargenoy boyuna mensup direniş savaşçısıdır. Efsanevi Ahmadov kardeşlerin büyüğü olarak 1994 yılında vatan savunmasına katıldı.",
      "Her iki Rus-Çeçen Savaşı’nda kardeşleriyle omuz omuza ön cephelerde çarpıştı. Tsotsin-Yurt köyünde kuşatma altında tek başına son mermisine kadar direndi. 28 Ağustos 2001’de Tsotsin-Yurt çarpışmasında otuz beş yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "muslim-tsagarayev",
    "name": "Müslim Tsagarayev",
    "born": "1982",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/muslim-tsagarayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muslim-tsagarayev.webp?v=4",
        "caption": "Müslim Tsagarayev (1982–2000)"
      }
    ],
    "summary": "1982 yılında Urus-Martan’da doğan, Nihlo boyuna mensup genç Çeçen mücahididir. Komutan Muhammed Tsagarayev’in kardeşi olup altı şehit veren ailenin yiğit evladıdır.",
    "bio": [
      "1982 yılında Urus-Martan’da doğan, Nihlo boyuna mensup genç Çeçen mücahididir. Komutan Muhammed Tsagarayev’in kardeşi olup altı şehit veren ailenin yiğit evladıdır.",
      "On sekiz yaşında İslam Tugayı cephanelik ve silah ikmal sorumluluğunu üstlendi. Dağ savaşı şartlarında cephedeki yüzlerce mücahidin mühimmat ikmalini sağladı. 26 Şubat 2000’de Şatoy direnişinde on sekiz yaşında şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "abu-tsagarayev",
    "name": "Abu Tsagarayev",
    "born": "1984",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/abu-tsagarayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/abu-tsagarayev.webp?v=4",
        "caption": "Abu Tsagarayev (1984–2000)"
      }
    ],
    "summary": "1984 yılında Urus-Martan’da doğan, Nihlo boyuna mensup en genç Çeçen mücahididir. On bir yaşındayken çatışma alanından ele geçirdiği silahı yaralı ağabeyine getirdi.",
    "bio": [
      "1984 yılında Urus-Martan’da doğan, Nihlo boyuna mensup en genç Çeçen mücahididir. On bir yaşındayken çatışma alanından ele geçirdiği silahı yaralı ağabeyine getirdi.",
      "1997 yılında Komutan Huta Ahmadov’un himayesinde direniş birliğine katıldı. Cesareti ve sarsılmaz iradesiyle kıdemli savaşçıların takdirini ve sevgisini kazandı. 12 Şubat 2000’de Şatoy’da henüz on altı yaşındayken kahramanca şehit düştü."
    ]
  },
  {
    "slug": "isa-ahmadov",
    "name": "İsa Ahmadov",
    "born": "1978",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/isa-ahmadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/isa-ahmadov.webp?v=4",
        "caption": "İsa Ahmadov (1978–2000)"
      }
    ],
    "summary": "1978 yılında Urus-Martan’da doğan, Muhadis lakaplı genç emir ve direniş savaşçısıdır. Urus-Martan İslam Cemaati saflarında vatan savunmasında aktif görev üstlendi.",
    "bio": [
      "1978 yılında Urus-Martan’da doğan, Muhadis lakaplı genç emir ve direniş savaşçısıdır. Urus-Martan İslam Cemaati saflarında vatan savunmasında aktif görev üstlendi.",
      "1999-2000 kışında başkent Cahar savunması ve dağ cephesi çarpışmalarına katıldı. Ulus-Kert yakınlarında Pskov hava indirme birliklerine karşı en ön safta vuruştu. Mart 2000’de Ulus-Kert muharebesinde yirmi iki yaşında şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "adlan-gazuyev",
    "name": "Adlan Gazuyev",
    "born": "1977",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/adlan-gazuyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/adlan-gazuyev.webp?v=4",
        "caption": "Adlan Gazuyev (1977–2000)"
      }
    ],
    "summary": "1977 yılında Urus-Martan’da doğan, Panşer lakaplı yiğit Çeçen direniş mücahididir. Urus-Martan direniş birlikleri içinde cesur baskın ve operasyonlarda yer aldı.",
    "bio": [
      "1977 yılında Urus-Martan’da doğan, Panşer lakaplı yiğit Çeçen direniş mücahididir. Urus-Martan direniş birlikleri içinde cesur baskın ve operasyonlarda yer aldı.",
      "İkinci Rus-Çeçen Savaşı’nda Komutan İsa Ahmadov ile omuz omuza çarpıştı. Ulus-Kert tepelerinde işgal ordusunun kuşatma hatlarına karşı göğüs göğüse savaştı. Mart 2000’de Ulus-Kert direnişinde yirmi üç yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "valid-kagarmanov",
    "name": "Valid Kagarmanov",
    "born": "1964",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/valid-kagarmanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/valid-kagarmanov.webp?v=4",
        "caption": "Valid Kagarmanov (1964–2000)"
      }
    ],
    "summary": "1964 yılında Naurskaya’da doğan, Hakmado boyuna mensup Ağa lakaplı direnişçidir. Her iki Rus-Çeçen Savaşı’nda Kafkasya’nın bağımsızlığı için cephede silah kuşandı.",
    "bio": [
      "1964 yılında Naurskaya’da doğan, Hakmado boyuna mensup Ağa lakaplı direnişçidir. Her iki Rus-Çeçen Savaşı’nda Kafkasya’nın bağımsızlığı için cephede silah kuşandı.",
      "2000 kışında başkent Cahar kuşatmasını yararak güney dağlarına yürüyüşe katıldı. Saadi-Kotar köyünde ağır kuşatma altında silah arkadaşlarıyla omuz omuza direndi. Mart 2000’de Saadi-Kotar muharebesinde otuz altı yaşında şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "salaudin-kagarmanov",
    "name": "Salaudin Kagarmanov",
    "born": "1961",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/salaudin-kagarmanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/salaudin-kagarmanov.webp?v=4",
        "caption": "Salaudin Kagarmanov (1961–2000)"
      }
    ],
    "summary": "1961 yılında Naurskaya’da doğan, Hakmado boyuna mensup tecrübeli Çeçen savaşçısıdır. Doksanlı yıllardan itibaren İçkerya’nın milli bağımsızlık mücadelesinde yer aldı.",
    "bio": [
      "1961 yılında Naurskaya’da doğan, Hakmado boyuna mensup tecrübeli Çeçen savaşçısıdır. Doksanlı yıllardan itibaren İçkerya’nın milli bağımsızlık mücadelesinde yer aldı.",
      "İkinci savaşta başkent Cahar savunmasında ve stratejik yarma harekâtında çarpıştı. Saadi-Kotar direnişinde Kagarmanov ailesinin yiğitleri ile aynı siperde vuruştu. Mart 2000’de Saadi-Kotar muharebesinde otuz dokuz yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "ruhmad-hadisov",
    "name": "Ruhmad Hadisov",
    "born": "1974",
    "died": "1999",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ruhmad-hadisov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ruhmad-hadisov.webp?v=4",
        "caption": "Ruhmad Hadisov (1974–1999)"
      }
    ],
    "summary": "1974 yılında Nojay-Yurt bölgesi Zandak köyünde doğan yiğit Çeçen direniş mücahididir. 1999 yılında Rus işgal ordusunun saldırılarına karşı gönüllü olarak cepheye çıktı.",
    "bio": [
      "1974 yılında Nojay-Yurt bölgesi Zandak köyünde doğan yiğit Çeçen direniş mücahididir. 1999 yılında Rus işgal ordusunun saldırılarına karşı gönüllü olarak cepheye çıktı.",
      "Doğduğu Zandak köyünün savunmasında direniş birlikleriyle omuz omuza durdu. Stratejik tepelerdeki çetin çarpışmalarda en ön hatta korkusuzca mücadele etti. 22 Aralık 1999’da Zandak sırtlarındaki muharebede yirmi beş yaşında şehit düştü."
    ]
  },
  {
    "slug": "ahmed-mediyev",
    "name": "Ahmed Mediyev",
    "born": "1977",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ahmed-mediyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ahmed-mediyev.webp?v=4",
        "caption": "Ahmed Mediyev (1977–2000)"
      }
    ],
    "summary": "1977 doğumlu, Urus-Martan İslam Cemaati mensubu genç Çeçen direniş savaşçısıdır. Komutan Ramzan Ahmadov’un birliklerinde cesur ve sadık bir mücahid olarak tanındı.",
    "bio": [
      "1977 doğumlu, Urus-Martan İslam Cemaati mensubu genç Çeçen direniş savaşçısıdır. Komutan Ramzan Ahmadov’un birliklerinde cesur ve sadık bir mücahid olarak tanındı.",
      "1999-2000 kışında başkent Cahar savunması ve güneye çekiliş harekâtına katıldı. Ulus-Kert’te Pskov Hava İndirme Alayı’na karşı yapılan hücumda ön safta çarpıştı. Mart 2000’de Ulus-Kert muharebesinde yirmi üç yaşında şehitlik mertebesine ulaştı."
    ]
  },
  {
    "slug": "zaurbek-gaysumov",
    "name": "Zaurbek Gaysumov",
    "born": "1986",
    "died": "2008",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/zaurbek-gaysumov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/zaurbek-gaysumov.webp?v=4",
        "caption": "Zaurbek Gaysumov (1986–2008)"
      }
    ],
    "summary": "1986 yılında Roşni-Çu köyünde doğan, Abdurrahman lakaplı genç Çeçen mücahididir. Genç yaşta işgalcilere boyun eğmeyerek dağlardaki direniş saflarına katıldı.",
    "bio": [
      "1986 yılında Roşni-Çu köyünde doğan, Abdurrahman lakaplı genç Çeçen mücahididir. Genç yaşta işgalcilere boyun eğmeyerek dağlardaki direniş saflarına katıldı.",
      "Urus-Martan ve Şalaji bölgesindeki operasyonlarda cesaretle görev yaptı. Şalaji yakınlarında kuşatma altında üstün düşman güçlerine karşı sonuna kadar çarpıştı. 10 Kasım 2008’de Şalaji çarpışmasında yirmi iki yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "cambulat-sadayev",
    "name": "Cambulat Sadayev",
    "born": "1973",
    "died": "2006",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/cambulat-sadayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/cambulat-sadayev.webp?v=4",
        "caption": "Cambulat Sadayev (1973–2006)"
      }
    ],
    "summary": "Çeçenistan’ın Umalt-Yurt (Prigorodnoye) köyünde doğdu ve serbest güreşte spor ustası oldu. 1994 yılında başlayan Birinci Rus-Çeçen Savaşı’ndan itibaren bağımsızlık mücadelesine katıldı.",
    "bio": [
      "Çeçenistan’ın Umalt-Yurt (Prigorodnoye) köyünde doğdu ve serbest güreşte spor ustası oldu. 1994 yılında başlayan Birinci Rus-Çeçen Savaşı’ndan itibaren bağımsızlık mücadelesine katıldı.",
      "Cephede ‘Burka’ künyesiyle tanındı ve Merkez Cephesi Komutan Yardımcısı olarak görev üstlendi. On iki yıl boyunca dağlarda ve başkent Cahar’da işgalci güçlere karşı ön saflarda çarpıştı. 16 Ağustos 2006 tarihinde başkent Cahar’da girdiği eşitsiz çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "arbi-naduyev",
    "name": "Arbi Naduyev",
    "born": "1966",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/arbi-naduyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/arbi-naduyev.webp?v=4",
        "caption": "Arbi Naduyev (1966–2000)"
      }
    ],
    "summary": "20 Aralık 1966 tarihinde Nojay-Yurt bölgesine bağlı Zandak köyünde dünyaya geldi. 1994 yılı başından itibaren Rus işgalcilere karşı vatan savunmasının ilk saflarında yer aldı.",
    "bio": [
      "20 Aralık 1966 tarihinde Nojay-Yurt bölgesine bağlı Zandak köyünde dünyaya geldi. 1994 yılı başından itibaren Rus işgalcilere karşı vatan savunmasının ilk saflarında yer aldı.",
      "Komutan Aydamir Abalayev’in birliğinde komutan yardımcısı olarak Cahar ve Gudermes’te çarpıştı. 1995 Gudermes operasyonu ile doğduğu Zandak köyünün savunmasında önemli rol oynadı. İkinci Rus-Çeçen Savaşı’nda vatan topraklarını savunurken çatışmada şehit düştü."
    ]
  },
  {
    "slug": "abdul-vahid-gapurayev",
    "name": "Abdul-Vahid Gapurayev",
    "born": "1972",
    "died": "1999",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/abdul-vahid-gapurayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/abdul-vahid-gapurayev.webp?v=4",
        "caption": "Abdul-Vahid Gapurayev (1972–1999)"
      }
    ],
    "summary": "Çeçenistan’ın Urus-Martan bölgesine bağlı Tengi-Çu köyünde dünyaya geldi. Genç yaşından itibaren imani ahlakı, cesareti ve fedakârlığıyla kardeşleri arasında örnek oldu.",
    "bio": [
      "Çeçenistan’ın Urus-Martan bölgesine bağlı Tengi-Çu köyünde dünyaya geldi. Genç yaşından itibaren imani ahlakı, cesareti ve fedakârlığıyla kardeşleri arasında örnek oldu.",
      "Birinci Rus-Çeçen Savaşı’nda Tengi-Çu ve Urus-Martan cephelerinde işgalcilere karşı çarpıştı. Direniş saflarında cemaat emiri olarak mücahit kardeşlerine cephede öncülük etti. Ekim 1999’da İkinci Rus-Çeçen Savaşı’nın ilk çarpışmalarında şehit düştü."
    ]
  },
  {
    "slug": "mohmad-baysultanov",
    "name": "Mohmad Baysultanov",
    "born": "1975",
    "died": "2005",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/mohmad-baysultanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/mohmad-baysultanov.webp?v=4",
        "caption": "Mohmad Baysultanov (1975–2005)"
      }
    ],
    "summary": "Çeçenistan’ın Şali bölgesine bağlı direniş kalesi Avtury köyünde dünyaya geldi. Avtury sektöründe cemaat emiri olarak yıllarca işgalci kuvvetlere karşı operasyonları yönetti.",
    "bio": [
      "Çeçenistan’ın Şali bölgesine bağlı direniş kalesi Avtury köyünde dünyaya geldi. Avtury sektöründe cemaat emiri olarak yıllarca işgalci kuvvetlere karşı operasyonları yönetti.",
      "Cephede üstün yetenekli bir keskin nişancı ve tecrübeli bir savaşçı olarak tanındı. Direniş saflarına katılan genç mücahitlerin yetiştirilmesinde askeri eğitmenlik yaptı. Mart 2005’te Çeçenistan’da girdiği çatışmada son kurşununa kadar çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "aslambek-tuguzov",
    "name": "Aslambek Tuguzov",
    "born": "1972",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aslambek-tuguzov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslambek-tuguzov.webp?v=4",
        "caption": "Aslambek Tuguzov (1972–2000)"
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi ve cephede silah arkadaşları arasında ‘Buka’ künyesiyle tanındı. İçkerya Silahlı Kuvvetleri’nin seçkin ‘Borz’ Özel Amaçlı Birliği saflarında görev yaptı.",
    "bio": [
      "Çeçenistan’da dünyaya geldi ve cephede silah arkadaşları arasında ‘Buka’ künyesiyle tanındı. İçkerya Silahlı Kuvvetleri’nin seçkin ‘Borz’ Özel Amaçlı Birliği saflarında görev yaptı.",
      "Birinci ve İkinci Rus-Çeçen Savaşları’nın her ikisinde de en ön cephelerde çarpıştı. Başkent Cahar ve güney dağ hatlarındaki stratejik savunma muharebelerinde yer aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) direnişinde kahramanca şehit düştü."
    ]
  },
  {
    "slug": "mikail-kurbanov",
    "name": "Mikail Kurbanov",
    "born": "1962",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/mikail-kurbanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/mikail-kurbanov.webp?v=4",
        "caption": "Mikail Kurbanov (1962–2000)"
      }
    ],
    "summary": "Çeçenistan’ın köklü Hacaroy taypına mensup yiğit bir özgürlük savaşçısıydı. 1994 yılından itibaren Çeçenistan’ın bağımsızlığı için cephede silahlı mücadeleye katıldı.",
    "bio": [
      "Çeçenistan’ın köklü Hacaroy taypına mensup yiğit bir özgürlük savaşçısıydı. 1994 yılından itibaren Çeçenistan’ın bağımsızlığı için cephede silahlı mücadeleye katıldı.",
      "Komutan Badruddi Ganatov’un liderliğindeki direniş birliğinde ön saflarda görev yaptı. İkinci Rus-Çeçen Savaşı’nda başkent Cahar ve dağ geçitlerinin savunmasında çarpıştı. Mart 2000’de Saadi-Kotar (Komsomolskoye) kuşatmasında çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "isa-baharciyev",
    "name": "İsa Baharçiyev",
    "born": "1974",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/isa-baharciyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/isa-baharciyev.webp?v=4",
        "caption": "İsa Baharçiyev (1974–2000)"
      }
    ],
    "summary": "1974 yılında Prigorodnoye köyünde dünyaya geldi ve Çeçenistan’ın Mulkoy taypına mensuptu. Genç yaşında vatan savunmasına katılarak Rus işgalcilere karşı ön cephelerde çarpıştı.",
    "bio": [
      "1974 yılında Prigorodnoye köyünde dünyaya geldi ve Çeçenistan’ın Mulkoy taypına mensuptu. Genç yaşında vatan savunmasına katılarak Rus işgalcilere karşı ön cephelerde çarpıştı.",
      "Mart 2000’de Saadi-Kotar köyünde ağır kuşatma altında son kalan mücahitler arasında yer aldı. Çatışmada iki kez yaralanıp omurgası kırılmasına rağmen ‘Teslim ol’ çağrılarına ateşle karşılık verdi. Makineli tüfeğiyle son nefesine kadar vuruşarak 26 yaşında Saadi-Kotar’da şehit düştü."
    ]
  },
  {
    "slug": "zelimhan-musayev",
    "name": "Zelimhan Musayev",
    "born": "1975",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/zelimhan-musayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/zelimhan-musayev.webp?v=4",
        "caption": "Zelimhan Musayev (1975–2000)"
      }
    ],
    "summary": "Çeçenistan’ın direniş merkezlerinden Urus-Martan şehrinde dünyaya geldi. Samimiyeti, güler yüzü ve sarsılmaz cesaretiyle silah arkadaşlarının gönlünde yer edindi.",
    "bio": [
      "Çeçenistan’ın direniş merkezlerinden Urus-Martan şehrinde dünyaya geldi. Samimiyeti, güler yüzü ve sarsılmaz cesaretiyle silah arkadaşlarının gönlünde yer edindi.",
      "Rus işgaline karşı vatan toprağını savunmak üzere mücahit birliklerine katıldı. İkinci Rus-Çeçen Savaşı’nda Cahar ve Güney Cephesi’ndeki ağır çarpışmalarda yer aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) muharebesinde kahramanca şehit düştü."
    ]
  },
  {
    "slug": "said-sabayev",
    "name": "Said Şabayev",
    "born": "1973",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/said-sabayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/said-sabayev.webp?v=4",
        "caption": "Said Şabayev (1973–2000)"
      }
    ],
    "summary": "Çeçenistan’ın Urus-Martan bölgesine bağlı Gehi köyünde dünyaya geldi. Vatansever ailesinin terbiyesiyle yetişerek genç yaşta bağımsızlık mücadelesine katıldı.",
    "bio": [
      "Çeçenistan’ın Urus-Martan bölgesine bağlı Gehi köyünde dünyaya geldi. Vatansever ailesinin terbiyesiyle yetişerek genç yaşta bağımsızlık mücadelesine katıldı.",
      "Birinci ve İkinci Rus-Çeçen Savaşları’nda Gehi ve Urus-Martan hatlarında ön safta çarpıştı. Kuşatma altındaki silah arkadaşlarını yalnız bırakmayarak sonuna kadar direndi. Mart 2000’de Saadi-Kotar (Komsomolskoye) direnişinde çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "badruddi-ganatov",
    "name": "Badruddi Ganatov",
    "born": "1965",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/badruddi-ganatov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/badruddi-ganatov.webp?v=4",
        "caption": "Badruddi Ganatov (1965–2000)"
      }
    ],
    "summary": "Prigorodnoye köyünde doğdu, Hacaroy taypına mensup olup cephede ‘Tano’ künyesiyle tanındı. Birinci Rus-Çeçen Savaşı’nda birlik komutanı olarak başkent Cahar savunmasında çarpıştı.",
    "bio": [
      "Prigorodnoye köyünde doğdu, Hacaroy taypına mensup olup cephede ‘Tano’ künyesiyle tanındı. Birinci Rus-Çeçen Savaşı’nda birlik komutanı olarak başkent Cahar savunmasında çarpıştı.",
      "1997–1999 yılları arasında başkent Cahar’ın Leninski bölgesi kaymakamı olarak görev yaptı. İkinci Rus-Çeçen Savaşı başlayınca yeniden mücahit birliğinin başına geçerek cepheye koştu. Mart 2000’de Saadi-Kotar (Komsomolskoye) muharebesinde kahramanca şehit düştü."
    ]
  },
  {
    "slug": "ilyas-mikayev",
    "name": "İlyas Mikayev",
    "born": "1970",
    "died": "1996",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ilyas-mikayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ilyas-mikayev.webp?v=4",
        "caption": "İlyas Mikayev (1970–1996)"
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi ve genç yaşından itibaren vatansever duruşuyla çevresinde tanındı. 1994 yılında başlayan Birinci Rus-Çeçen Savaşı’nda gönüllü olarak cepheye koştu.",
    "bio": [
      "Çeçenistan’da dünyaya geldi ve genç yaşından itibaren vatansever duruşuyla çevresinde tanındı. 1994 yılında başlayan Birinci Rus-Çeçen Savaşı’nda gönüllü olarak cepheye koştu.",
      "İçkerya direniş birliklerinde ön hatlarda haberleşme ve taarruz görevlerinde yer aldı. Ağustos 1996’daki başkent Cahar’ı (Grozni) kurtarma operasyonunda en ön saflarda çarpıştı. 13 Ağustos 1996 tarihinde zaferin eşiğinde Cahar muharebelerinde kahramanca şehit düştü."
    ]
  },
  {
    "slug": "bekhan-abastov",
    "name": "Bekhan Abastov",
    "born": "1974",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/bekhan-abastov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/bekhan-abastov.webp?v=4",
        "caption": "Bekhan Abastov (1974–2000)"
      }
    ],
    "summary": "Çeçenistan’ın direniş kalesi Urus-Martan şehrinde dünyaya geldi. Birinci Rus-Çeçen Savaşı’nda Emir Hattab ve Ramzan Ahmadov’un saflarında cephede çarpıştı.",
    "bio": [
      "Çeçenistan’ın direniş kalesi Urus-Martan şehrinde dünyaya geldi. Birinci Rus-Çeçen Savaşı’nda Emir Hattab ve Ramzan Ahmadov’un saflarında cephede çarpıştı.",
      "Urus-Martan Cemaati bünyesinde Muhammed Tsagarayev ve silah arkadaşlarıyla omuz omuza savaştı. İkinci Rus-Çeçen Savaşı başlayınca yeniden silah kuşanarak vatan savunmasına katıldı. Rus işgalcilere karşı yürütülen çarpışmalarda son nefesine kadar vuruşarak şehit düştü."
    ]
  },
  {
    "slug": "rustam-timarov",
    "name": "Rustam Timarov",
    "born": "1975",
    "died": "1999",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/rustam-timarov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/rustam-timarov.webp?v=4",
        "caption": "Rustam Timarov (1975–1999)"
      }
    ],
    "summary": "Çeçenistan’ın Urus-Martan şehrinde doğdu ve Çeçenlerin köklü Peşhoy taypına mensuptu. Direniş saflarında ve kardeşleri arasında ‘Muhammed-Salah’ ismiyle tanındı.",
    "bio": [
      "Çeçenistan’ın Urus-Martan şehrinde doğdu ve Çeçenlerin köklü Peşhoy taypına mensuptu. Direniş saflarında ve kardeşleri arasında ‘Muhammed-Salah’ ismiyle tanındı.",
      "Genç yaşta imani bilinci ve cesaretiyle Urus-Martan mücahit birliklerinde yer aldı. 1999 sonbaharında başlayan İkinci Rus-Çeçen Savaşı’nda vatan savunmasının ön hattına koştu. 19 Aralık 1999’da mübarek Ramazan ayında işgalcilere karşı çarpışırken şehit düştü."
    ]
  },
  {
    "slug": "isa-tusayev",
    "name": "İsa Tuşayev",
    "born": "1974",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/isa-tusayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/isa-tusayev.webp?v=4",
        "caption": "İsa Tuşayev (1974–2002)"
      }
    ],
    "summary": "Çeçenistan’ın stratejik geçidi Duba-Yurt köyünde doğdu ve cephede ‘Arab’ künyesiyle tanındı. Birinci ve İkinci Rus-Çeçen Savaşları’nda Argun boğazı girişindeki cephelerde savaştı.",
    "bio": [
      "Çeçenistan’ın stratejik geçidi Duba-Yurt köyünde doğdu ve cephede ‘Arab’ künyesiyle tanındı. Birinci ve İkinci Rus-Çeçen Savaşları’nda Argun boğazı girişindeki cephelerde savaştı.",
      "Duba-Yurt Cemaati emiri olarak bölgedeki direniş birliklerine komuta etti. Ağır kuşatma şartlarında mücahitlerin lojistik ve savunma hatlarını kararlılıkla yönetti. 17 Şubat 2002 tarihinde Duba-Yurt köyünde Rus güçleriyle girdiği çatışmada şehit düştü."
    ]
  },
  {
    "slug": "hizar-irishanov",
    "name": "Hizar İrishanov",
    "born": "1971",
    "died": "2001",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hizar-irishanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hizar-irishanov.webp?v=4",
        "caption": "Hizar İrishanov (1971–2001)"
      }
    ],
    "summary": "Çeçenistan’ın Vedeno bölgesine bağlı Agişbatoy (Egaşbeta) köyünde dünyaya geldi. Dağlık Vedeno cephesinde yetişerek bağımsızlık mücadelesinin ilk saflarında yer aldı.",
    "bio": [
      "Çeçenistan’ın Vedeno bölgesine bağlı Agişbatoy (Egaşbeta) köyünde dünyaya geldi. Dağlık Vedeno cephesinde yetişerek bağımsızlık mücadelesinin ilk saflarında yer aldı.",
      "Birinci ve İkinci Rus-Çeçen Savaşları’nda güneydoğu dağ sektöründe cesurca çarpıştı. Agişbatoy ve Vedeno ormanlarındaki savunma ve pusu operasyonlarında önemli görevler üstlendi. 13 Ağustos 2001 tarihinde işgalci kuvvetlerle girdiği çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "emi-yunusov",
    "name": "Emi Yunusov",
    "born": "1976",
    "died": "2001",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/emi-yunusov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/emi-yunusov.webp?v=4",
        "caption": "Emi Yunusov (1976–2001)"
      }
    ],
    "summary": "Çeçenistan’ın köklü ve direnişçi Elistanjhoy taypına mensup bir mücahit olarak yetişti. Genç yaşından itibaren Rus işgaline boyun eğmeyerek bağımsızlık saflarına katıldı.",
    "bio": [
      "Çeçenistan’ın köklü ve direnişçi Elistanjhoy taypına mensup bir mücahit olarak yetişti. Genç yaşından itibaren Rus işgaline boyun eğmeyerek bağımsızlık saflarına katıldı.",
      "İkinci Rus-Çeçen Savaşı’nda stratejik Argun şehrindeki direniş gruplarından birinin emiri oldu. Argun ve çevresinde işgalci birliklere karşı düzenlenen şehir operasyonlarına liderlik etti. 2001 yılında Argun şehrinde girdiği çatışmada son kurşununa kadar vuruşarak şehit düştü."
    ]
  },
  {
    "slug": "abdul-vahid-dibirov",
    "name": "Abdul-Vahid Dibirov",
    "born": "1968",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/abdul-vahid-dibirov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/abdul-vahid-dibirov.webp?v=4",
        "caption": "Abdul-Vahid Dibirov (1968–2000)"
      }
    ],
    "summary": "Çeçenistan’ın kuzeyindeki Naurskaya bölgesinde dünyaya geldi. Vatanseverliği ve ağırbaşlı kişiliğiyle Naurskaya halkı ve mücahitler arasında sevildi.",
    "bio": [
      "Çeçenistan’ın kuzeyindeki Naurskaya bölgesinde dünyaya geldi. Vatanseverliği ve ağırbaşlı kişiliğiyle Naurskaya halkı ve mücahitler arasında sevildi.",
      "Birinci ve İkinci Rus-Çeçen Savaşları’nda Naurskaya mücahitleriyle omuz omuza cephede savaştı. 2000 yılı başında başkent Cahar yarma harekâtı ve güney yürüyüşünde yer aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) direnişinde kahramanca şehit düştü."
    ]
  },
  {
    "slug": "ismail-gayrbekov",
    "name": "İsmail Gayrbekov",
    "born": "1975",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ismail-gayrbekov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ismail-gayrbekov.webp?v=4",
        "caption": "İsmail Gayrbekov (1975–2000)"
      }
    ],
    "summary": "Çeçenistan’ın Urus-Martan şehrinde dünyaya geldi ve genç yaşta direniş saflarına katıldı. Her iki Rus-Çeçen Savaşı’nda da vatan topraklarını savunan tecrübeli bir mücahitti.",
    "bio": [
      "Çeçenistan’ın Urus-Martan şehrinde dünyaya geldi ve genç yaşta direniş saflarına katıldı. Her iki Rus-Çeçen Savaşı’nda da vatan topraklarını savunan tecrübeli bir mücahitti.",
      "Birinci savaşta Komutan Şamil Basayev’in emrindeki birliklerde ön cephelerde çarpıştı. İkinci savaşta Komutan Arbi Barayev’in Özel Amaçlı İslam Alayı saflarında görev yaptı. 2000 yılında dağlık Şatoy bölgesindeki muharebelerde çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "bislan-zakriyev",
    "name": "Bislan Zakriyev",
    "born": "1974",
    "died": "2002",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/bislan-zakriyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/bislan-zakriyev.webp?v=4",
        "caption": "Bislan Zakriyev (1974–2002)"
      }
    ],
    "summary": "Çeçenistan’ın Urus-Martan şehrinde doğdu ve cephede ‘Hayrullah’ künyesiyle tanındı. Meşhur Ahmadov kardeşlerin liderliğindeki Urus-Martan Cemaati saflarında ön hatlarda savaştı.",
    "bio": [
      "Çeçenistan’ın Urus-Martan şehrinde doğdu ve cephede ‘Hayrullah’ künyesiyle tanındı. Meşhur Ahmadov kardeşlerin liderliğindeki Urus-Martan Cemaati saflarında ön hatlarda savaştı.",
      "Şubat 2000’de Ulus-Kert’te Pskov Hava İndirme Tümeni’ne karşı verilen muharebede yer aldı. İşgalcilere ve işbirlikçilere karşı düzenlenen cesur operasyonların korkusuz savaşçılarından oldu. Vatanının bağımsızlığı uğruna verdiği mücadelede çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "zayndi-elgiriyev",
    "name": "Zayndi Elgiriyev",
    "born": "1977",
    "died": "2001",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/zayndi-elgiriyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/zayndi-elgiriyev.webp?v=4",
        "caption": "Zayndi Elgiriyev (1977–2001)"
      }
    ],
    "summary": "Çeçenistan’ın Gudermes şehrinde dünyaya geldi ve genç yaşta istiklal mücadelesine katıldı. Gudermes’te Emir Abdur-Rahman’ın liderliğindeki cemaat saflarında omuz omuza çarpıştı.",
    "bio": [
      "Çeçenistan’ın Gudermes şehrinde dünyaya geldi ve genç yaşta istiklal mücadelesine katıldı. Gudermes’te Emir Abdur-Rahman’ın liderliğindeki cemaat saflarında omuz omuza çarpıştı.",
      "İkinci Rus-Çeçen Savaşı’nda Gudermes ve Doğu Cephesi’ndeki direniş faaliyetlerinde yer aldı. İşgalci konvoylarına karşı yürütülen mayınlama ve pusu operasyonlarında görev üstlendi. Şubat 2001’de bir mayınlama operasyonu sırasında meydana gelen patlamada şehit düştü."
    ]
  },
  {
    "slug": "ayub-caharov",
    "name": "Ayub Caharov",
    "born": "1964",
    "died": "1994",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ayub-caharov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ayub-caharov.webp?v=4",
        "caption": "Ayub Caharov (1964–1994)"
      }
    ],
    "summary": "Çeçenistan’ın Argun şehrinde dünyaya geldi ve vatansever duruşuyla halkı arasında sevildi. Çeçen İçkerya Cumhuriyeti’nin istiklal mücadelesine ilk günlerden itibaren katıldı.",
    "bio": [
      "Çeçenistan’ın Argun şehrinde dünyaya geldi ve vatansever duruşuyla halkı arasında sevildi. Çeçen İçkerya Cumhuriyeti’nin istiklal mücadelesine ilk günlerden itibaren katıldı.",
      "Kasım 1994’te Rus destekli zırhlı birliklerin başkent Cahar’a yönelik saldırısına karşı durdu. Cahar (Grozni) sokaklarında başkenti savunan gönüllü mücahitlerin ön saflarında çarpıştı. 26 Kasım 1994 tarihinde başkent Cahar savunmasında çarpışarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "ramazan-saritov",
    "name": "Ramazan Saritov",
    "born": "1983",
    "died": "2012",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ramazan-saritov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ramazan-saritov.webp?v=4",
        "caption": "Ramazan Saritov (1983–2012)"
      }
    ],
    "summary": "Kafkasya’nın Bamat-Yurt köyünde doğdu ve genç yaşta başarılı bir serbest güreşçi olarak tanındı. Spor kariyerindeki başarılarını geride bırakarak Kafkasya direniş saflarına katıldı.",
    "bio": [
      "Kafkasya’nın Bamat-Yurt köyünde doğdu ve genç yaşta başarılı bir serbest güreşçi olarak tanındı. Spor kariyerindeki başarılarını geride bırakarak Kafkasya direniş saflarına katıldı.",
      "Çeçenistan ve Dağıstan cephelerinde işgalci güçlere karşı omuz omuza mücadele etti. Cesareti, fiziksel gücü ve sarsılmaz imanıyla kardeşleri arasında örnek gösterildi. 2012 yılında Hasavyurt’ta işgal güçleriyle girdiği çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "murad-gisayev",
    "name": "Murad Gişayev",
    "born": "1978",
    "died": "2004",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/murad-gisayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/murad-gisayev.webp?v=4",
        "caption": "Murad Gişayev (1978–2004)"
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi ve genç yaşından itibaren İslami kimliğiyle çevresinde tanındı. İkinci Rus-Çeçen Savaşı’nda işgalcilere karşı dağ birliklerinde silah kuşandı.",
    "bio": [
      "Çeçenistan’da dünyaya geldi ve genç yaşından itibaren İslami kimliğiyle çevresinde tanındı. İkinci Rus-Çeçen Savaşı’nda işgalcilere karşı dağ birliklerinde silah kuşandı.",
      "Urus-Martan ve Roşni-Çu dağ sektöründeki mücahit gruplarıyla omuz omuza çarpıştı. Ağır kuşatma ve kış şartlarında cephe hatlarından asla geri adım atmadı. 2004 yılında Roşni-Çu ormanlarında Rus keşif birliğiyle girdiği çatışmada şehit düştü."
    ]
  },
  {
    "slug": "hadid-dadayev",
    "name": "Hadid Dadayev",
    "born": "1963",
    "died": "2001",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hadid-dadayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hadid-dadayev.webp?v=4",
        "caption": "Hadid Dadayev (1963–2001)"
      }
    ],
    "summary": "Çeçenistan’ın köklü Tundakho taypına mensup bir vatansever olarak dünyaya geldi. Birinci Rus-Çeçen Savaşı’nda üstün komuta başarısı göstererek tuğgeneral rütbesine yükseldi.",
    "bio": [
      "Çeçenistan’ın köklü Tundakho taypına mensup bir vatansever olarak dünyaya geldi. Birinci Rus-Çeçen Savaşı’nda üstün komuta başarısı göstererek tuğgeneral rütbesine yükseldi.",
      "Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri bünyesinde kritik savunma hatlarını yönetti. İkinci Rus-Çeçen Savaşı’nda kardeşi Dires Dadayev ile birlikte direniş saflarında yer aldı. 2001 yılında Rus işgalcilerin Çernokozovo kampında işkenceye boyun eğmeyerek şehit düştü."
    ]
  },
  {
    "slug": "leci-haciyev",
    "name": "Leçi Haciyev",
    "born": "1976",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/leci-haciyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/leci-haciyev.webp?v=4",
        "caption": "Leçi Haciyev (1976–2000)"
      }
    ],
    "summary": "Çeçenistan’ın kuzeyindeki Naurskaya bölgesinde doğdu ve Şaro taypına mensuptu. Genç yaşından itibaren vatan savunmasına katılarak Naurskaya mücahitleriyle omuz omuza durdu.",
    "bio": [
      "Çeçenistan’ın kuzeyindeki Naurskaya bölgesinde doğdu ve Şaro taypına mensuptu. Genç yaşından itibaren vatan savunmasına katılarak Naurskaya mücahitleriyle omuz omuza durdu.",
      "İkinci Rus-Çeçen Savaşı’nda başkent Cahar savunması ve güney yürüyüşünde yer aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki tarihi direniş hattında çarpıştı. Saadi-Kotar kuşatmasında son kurşununa kadar vuruşarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "sultan-hortsayev",
    "name": "Sultan Hortsayev",
    "born": "1973",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/sultan-hortsayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/sultan-hortsayev.webp?v=4",
        "caption": "Sultan Hortsayev (1973–2000)"
      }
    ],
    "summary": "Çeçenistan’ın Zakan-Yurt köyünde dünyaya geldi ve Haçaro taypına mensuptu. Birinci ve İkinci Rus-Çeçen Savaşları’nda vatan topraklarını savunmak için cepheye koştu.",
    "bio": [
      "Çeçenistan’ın Zakan-Yurt köyünde dünyaya geldi ve Haçaro taypına mensuptu. Birinci ve İkinci Rus-Çeçen Savaşları’nda vatan topraklarını savunmak için cepheye koştu.",
      "2000 yılı başında başkent Cahar yarma harekâtı ve dağ yürüyüşüne katıldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde kurulan savunma mevzilerinde savaştı. Ağır Rus bombardımanı altında Saadi-Kotar muharebesinde çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "ilyas-husparov",
    "name": "İlyas Huşparov",
    "born": "1972",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ilyas-husparov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ilyas-husparov.webp?v=4",
        "caption": "İlyas Huşparov (1972–2000)"
      }
    ],
    "summary": "Çeçenistan’ın köklü ve savaşçı Terlo taypına mensup bir mücahit olarak yetişti. İmani bilinci, cesareti ve fedakârlığıyla direniş birlikleri arasında saygı kazandı.",
    "bio": [
      "Çeçenistan’ın köklü ve savaşçı Terlo taypına mensup bir mücahit olarak yetişti. İmani bilinci, cesareti ve fedakârlığıyla direniş birlikleri arasında saygı kazandı.",
      "İkinci Rus-Çeçen Savaşı’nda başkent Cahar ve Güney Cephesi muharebelerinde yer aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) kuşatmasında silah arkadaşlarıyla omuz omuza durdu. Saadi-Kotar direnişinde işgalci ordulara karşı çarpışırken kahramanca şehit düştü."
    ]
  },
  {
    "slug": "imran-oysayev",
    "name": "İmran Oysayev",
    "born": "1966",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/imran-oysayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/imran-oysayev.webp?v=4",
        "caption": "İmran Oysayev (1966–2000)"
      }
    ],
    "summary": "Roşni-Çu köyünde doğdu, Çinhoy taypına mensuptu ve cephede ‘Ebu-Ahmed’ künyesiyle tanındı. Urus-Martan’da Ahmadov kardeşlerin komşusu ve yakın silah arkadaşı olarak mücadele etti.",
    "bio": [
      "Roşni-Çu köyünde doğdu, Çinhoy taypına mensuptu ve cephede ‘Ebu-Ahmed’ künyesiyle tanındı. Urus-Martan’da Ahmadov kardeşlerin komşusu ve yakın silah arkadaşı olarak mücadele etti.",
      "İçkerya Cumhuriyeti Urus-Martan bölgesi Şeriat güvenlik teşkilatı başkanlığı görevini yürüttü. İkinci savaşta Cahar savunması ve Saadi-Kotar (Komsomolskoye) yarma harekâtında ön safta çarpıştı. Mart 2000’de Saadi-Kotar muharebesinde son nefesine kadar vuruşarak şehit düştü."
    ]
  },
  {
    "slug": "samhan-avdadayev",
    "name": "Şamhan Avdadayev",
    "born": "1984",
    "died": "2009",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/samhan-avdadayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/samhan-avdadayev.webp?v=4",
        "caption": "Şamhan Avdadayev (1984–2009)"
      }
    ],
    "summary": "Çeçenistan’ın Vedeno bölgesinde dünyaya geldi ve direnişte ‘El-Bara’ künyesiyle tanındı. Öz kardeşi Şamil Avdadayev ile birlikte genç yaşta dağ birliklerine katıldı.",
    "bio": [
      "Çeçenistan’ın Vedeno bölgesinde dünyaya geldi ve direnişte ‘El-Bara’ künyesiyle tanındı. Öz kardeşi Şamil Avdadayev ile birlikte genç yaşta dağ birliklerine katıldı.",
      "Vedeno sektöründe Emir Mahran Saidov’un komutasındaki mücahit birliğinde görev yaptı. Güney dağ cephesinde işgalci kuvvetlere karşı düzenlenen operasyonlarda cesurca savaştı. Vedeno dağlarında işgal güçleriyle girdiği çatışmada kardeşiyle aynı yolda şehit düştü."
    ]
  },
  {
    "slug": "hamzat-guloyev",
    "name": "Hamzat Guloyev",
    "born": "1983",
    "died": "2012",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hamzat-guloyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hamzat-guloyev.webp?v=4",
        "caption": "Hamzat Guloyev (1983–2012)"
      }
    ],
    "summary": "Kafkasya’da dünyaya geldi ve direniş saflarında ‘Salman’ künyesiyle tanındı. Sunca Cemaati bünyesinde İnguşetya ve Çeçenistan sınır ormanlarında mücadele etti.",
    "bio": [
      "Kafkasya’da dünyaya geldi ve direniş saflarında ‘Salman’ künyesiyle tanındı. Sunca Cemaati bünyesinde İnguşetya ve Çeçenistan sınır ormanlarında mücadele etti.",
      "Mayıs 2012’de Nesterovskaya ormanlarında Rus GRU özel kuvvetleriyle karşı karşıya geldi. Şafak vakti başlayan baskında makineli tüfeğiyle düşman hattının üzerine yürüdü. Yirmi dakika süren yakın çatışmada silah arkadaşı Müslim ile birlikte şehit düştü."
    ]
  },
  {
    "slug": "cingishan-temerkayev",
    "name": "Çingishan Temerkayev",
    "born": "1985",
    "died": "2009",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/cingishan-temerkayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/cingishan-temerkayev.webp?v=4",
        "caption": "Çingishan Temerkayev (1985–2009)"
      }
    ],
    "summary": "Çeçenistan’ın Şali şehrinde dünyaya geldi ve Çeçenlerin Şuono taypına mensuptu. Genç yaşında Şali sektöründeki direniş birliklerine katılarak vatan savunmasında saf tuttu.",
    "bio": [
      "Çeçenistan’ın Şali şehrinde dünyaya geldi ve Çeçenlerin Şuono taypına mensuptu. Genç yaşında Şali sektöründeki direniş birliklerine katılarak vatan savunmasında saf tuttu.",
      "Silah arkadaşı Rizvan Mihaylov ile birlikte işgalci güçlere karşı omuz omuza çarpıştı. Ağır kuşatma şartlarında Şali ve çevresindeki operasyonlarda üstün cesaret gösterdi. 2009 yılında işgal kuvvetleriyle girdiği çatışmada silah arkadaşıyla birlikte şehit düştü."
    ]
  },
  {
    "slug": "muhammed-yaricev",
    "name": "Muhammed Yarıçev",
    "born": "1976",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/muhammed-yaricev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muhammed-yaricev.webp?v=4",
        "caption": "Muhammed Yarıçev (1976–2000)"
      }
    ],
    "summary": "Çeçenistan’ın Kulary köyünde dünyaya geldi ve Yalkhoy taypına mensuptu. İkinci Rus-Çeçen Savaşı’nda Kulary mücahitleriyle birlikte başkent Cahar savunmasına katıldı.",
    "bio": [
      "Çeçenistan’ın Kulary köyünde dünyaya geldi ve Yalkhoy taypına mensuptu. İkinci Rus-Çeçen Savaşı’nda Kulary mücahitleriyle birlikte başkent Cahar savunmasına katıldı.",
      "Şubat 2000’deki Cahar yarma harekâtı ve güney dağ yürüyüşünde ön saflarda yer aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki tarihi direniş hattında savaştı. Saadi-Kotar kuşatmasında son nefesine kadar çarpışarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "aslan-aslahanov",
    "name": "Aslan Aslahanov",
    "born": "1977",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aslan-aslahanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslan-aslahanov.webp?v=4",
        "caption": "Aslan Aslahanov (1977–2000)"
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi, Aki taypına mensuptu ve cephede ‘Mansur’ künyesiyle tanındı. Genç yaşından itibaren İslami ahlakı ve cesaretiyle silah arkadaşları arasında sevildi.",
    "bio": [
      "Çeçenistan’da dünyaya geldi, Aki taypına mensuptu ve cephede ‘Mansur’ künyesiyle tanındı. Genç yaşından itibaren İslami ahlakı ve cesaretiyle silah arkadaşları arasında sevildi.",
      "İkinci Rus-Çeçen Savaşı’nda işgal ordularına karşı direniş saflarında silah kuşandı. Başkent Cahar ve Argun boğazı hattındaki çetin savunma muharebelerinde görev aldı. 2000 yılında vatan topraklarını savunurken girdiği çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "anzor-tsurayev",
    "name": "Anzor Tsurayev",
    "born": "1988",
    "died": "2014",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/anzor-tsurayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/anzor-tsurayev.webp?v=4",
        "caption": "Anzor Tsurayev (1988–2014)"
      }
    ],
    "summary": "Çeçenistan’ın Bamut köyünde doğdu, ‘Abdul-Hakim’ künyesini aldı ve Bamutlu Musa’nın yeğeniydi. Tarihi Bamut direnişinin ruhuyla büyüyerek genç yaşta dağ birliklerine katıldı.",
    "bio": [
      "Çeçenistan’ın Bamut köyünde doğdu, ‘Abdul-Hakim’ künyesini aldı ve Bamutlu Musa’nın yeğeniydi. Tarihi Bamut direnişinin ruhuyla büyüyerek genç yaşta dağ birliklerine katıldı.",
      "Açhoy-Martan ve Sunca ormanlarında mücahit gruplarıyla birlikte yıllarca mücadele etti. Zorlu kış ve kuşatma şartlarında sarsılmaz iradesiyle kardeşlerine örnek bir mücahit oldu. 2014 yılında işgal güçleriyle girdiği çatışmada Bamutlu amcası gibi şehit düştü."
    ]
  },
  {
    "slug": "aslan-dukuzov",
    "name": "Aslan Dukuzov",
    "born": "1973",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aslan-dukuzov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslan-dukuzov.webp?v=4",
        "caption": "Aslan Dukuzov (1973–2002)"
      }
    ],
    "summary": "Çeçenistan’ın Urus-Martan şehrinde dünyaya geldi ve Çinhoy taypına mensuptu. Direniş saflarında ‘Emir Halid’ künyesiyle tanınarak Urus-Martan birliklerine komuta etti.",
    "bio": [
      "Çeçenistan’ın Urus-Martan şehrinde dünyaya geldi ve Çinhoy taypına mensuptu. Direniş saflarında ‘Emir Halid’ künyesiyle tanınarak Urus-Martan birliklerine komuta etti.",
      "Birinci ve İkinci Rus-Çeçen Savaşları’nda işgalcilere karşı sayısız operasyonu yönetti. Cesareti, askeri dehası ve fedakârlığıyla Urus-Martan cephesinin öncü isimlerinden oldu. Nisan 2002’de Urus-Martan’da Rus güçleriyle girdiği çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "muhammed-salah-abubakarov",
    "name": "Muhammed-Salah Abubakarov",
    "born": "1975",
    "died": "2002",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/muhammed-salah-abubakarov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muhammed-salah-abubakarov.webp?v=4",
        "caption": "Muhammed-Salah Abubakarov (1975–2002)"
      }
    ],
    "summary": "Çeçenistan’ın Şali şehrinde dünyaya geldi ve Çeçenlerin Şuono taypına mensuptu. Birinci ve İkinci Rus-Çeçen Savaşları’nda vatan savunmasında aktif olarak yer aldı.",
    "bio": [
      "Çeçenistan’ın Şali şehrinde dünyaya geldi ve Çeçenlerin Şuono taypına mensuptu. Birinci ve İkinci Rus-Çeçen Savaşları’nda vatan savunmasında aktif olarak yer aldı.",
      "Şali ve Doğu Cephesi sektöründeki mücahit birlikleriyle omuz omuza çarpıştı. Ağır kuşatma altında dahi memleketi Şali’deki direniş hattını terk etmedi. 2002 yılında Rus işgal güçleriyle girdiği silahlı çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "salman-aspanov",
    "name": "Salman Aspanov",
    "born": "1980",
    "died": "2002",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/salman-aspanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/salman-aspanov.webp?v=4",
        "caption": "Salman Aspanov (1980–2002)"
      }
    ],
    "summary": "Çeçenistan’ın başkenti Cahar’ın (Grozni) Çernoreçye beldesinde dünyaya geldi. Genç yaşında başkent Cahar savunmasına katılarak silah arkadaşlarıyla saf tuttu.",
    "bio": [
      "Çeçenistan’ın başkenti Cahar’ın (Grozni) Çernoreçye beldesinde dünyaya geldi. Genç yaşında başkent Cahar savunmasına katılarak silah arkadaşlarıyla saf tuttu.",
      "İkinci Rus-Çeçen Savaşı’nda şehir içi direniş ve gerilla operasyonlarında görev aldı. Samimiyeti, cesareti ve kardeşlik ruhuyla Çernoreçye mücahitleri arasında çok sevildi. 2002 yılında başkent Cahar’da işgal kuvvetleriyle çarpışarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "yunus-vagapov",
    "name": "Yunus Vagapov",
    "born": "1975",
    "died": "2001",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/yunus-vagapov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/yunus-vagapov.webp?v=4",
        "caption": "Yunus Vagapov (1975–2001)"
      }
    ],
    "summary": "Çeçenistan’ın Şali şehrinde dünyaya geldi ve Kurchaloy taypına mensuptu. Vatanseverliği ve dindar kişiliğiyle genç yaşta Çeçen direniş saflarına katıldı.",
    "bio": [
      "Çeçenistan’ın Şali şehrinde dünyaya geldi ve Kurchaloy taypına mensuptu. Vatanseverliği ve dindar kişiliğiyle genç yaşta Çeçen direniş saflarına katıldı.",
      "İkinci Rus-Çeçen Savaşı’nda Şali ve güney dağ cephesi birliklerinde mücadele etti. Zorlu cephe şartlarında silah arkadaşlarına her zaman destek ve moral kaynağı oldu. 2001 yılında işgalci Rus birlikleriyle girdiği çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "rustam-betalgeriyev",
    "name": "Rustam Betalgeriyev",
    "born": "1976",
    "died": "2001",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/rustam-betalgeriyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/rustam-betalgeriyev.webp?v=4",
        "caption": "Rustam Betalgeriyev (1976–2001)"
      }
    ],
    "summary": "Çeçenistan’ın Gudermes şehrinde dünyaya geldi ve cephede ‘Klyaks’ lâkabıyla tanındı. Birinci ve İkinci Rus-Çeçen Savaşları’nda Doğu Cephesi birliklerinde silah kuşandı.",
    "bio": [
      "Çeçenistan’ın Gudermes şehrinde dünyaya geldi ve cephede ‘Klyaks’ lâkabıyla tanındı. Birinci ve İkinci Rus-Çeçen Savaşları’nda Doğu Cephesi birliklerinde silah kuşandı.",
      "Gudermes ve çevresinde işgalci güçlere karşı düzenlenen baskınlarda cesurca çarpıştı. Kuşatma altındaki şehir ve dağ hatlarında mücahit kardeşleriyle omuz omuza direndi. 2001 yılında Rus işgal güçleriyle girdiği çatışmada vuruşarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "ibrahim-canhotov",
    "name": "İbrahim Canhotov",
    "born": "1978",
    "died": "2003",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ibrahim-canhotov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ibrahim-canhotov.webp?v=4",
        "caption": "İbrahim Canhotov (1978–2003)"
      }
    ],
    "summary": "Kafkasya’da dünyaya geldi ve gençlik yıllarında direniş saflarında yerini aldı. İkinci Rus-Çeçen Savaşı’nda dağ ve şehir birliklerinde işgalcilere karşı savaştı.",
    "bio": [
      "Kafkasya’da dünyaya geldi ve gençlik yıllarında direniş saflarında yerini aldı. İkinci Rus-Çeçen Savaşı’nda dağ ve şehir birliklerinde işgalcilere karşı savaştı.",
      "Soğukkanlılığı, cesareti ve fedakârlığıyla komutanlarının güvenini kazandı. Ağır kuşatma ve takip altında dahi direniş mevzilerini asla terk etmedi. 2003 yılında işgal kuvvetleriyle girdiği silahlı çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "gilani-susuyev",
    "name": "Gilani Susuyev",
    "born": "1965",
    "died": "1996",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/gilani-susuyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/gilani-susuyev.webp?v=4",
        "caption": "Gilani Susuyev (1965–1996)"
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi ve istiklal mücadelesinde ‘Emir Gilani’ künyesiyle tanındı. Birinci Rus-Çeçen Savaşı’nda mücahit birliklerine komuta ederek ön cephelerde savaştı.",
    "bio": [
      "Çeçenistan’da dünyaya geldi ve istiklal mücadelesinde ‘Emir Gilani’ künyesiyle tanındı. Birinci Rus-Çeçen Savaşı’nda mücahit birliklerine komuta ederek ön cephelerde savaştı.",
      "Ağustos 1996’daki başkent Cahar’ı (Grozni) kurtarma harekâtında birliğiyle kritik rol oynadı. Cesareti, askeri disiplini ve sarsılmaz imanıyla silah arkadaşlarına örnek oldu. 8 Eylül 1996 tarihinde vatan savunmasında kahramanca çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "dalambek-bahayev",
    "name": "Dalambek Bahayev",
    "born": "1968",
    "died": "1996",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/dalambek-bahayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/dalambek-bahayev.webp?v=4",
        "caption": "Dalambek Bahayev (1968–1996)"
      }
    ],
    "summary": "Çeçenistan’ın Alleroy köyünde dünyaya geldi ve Çeçenlerin Alleroy taypına mensuptu. Savaş öncesinde Hamzat Gelayev’in özel kuvvetler birliğinde, savaşta Hunkar-Paşa’nın emrinde görev yaptı.",
    "bio": [
      "Çeçenistan’ın Alleroy köyünde dünyaya geldi ve Çeçenlerin Alleroy taypına mensuptu. Savaş öncesinde Hamzat Gelayev’in özel kuvvetler birliğinde, savaşta Hunkar-Paşa’nın emrinde görev yaptı.",
      "31 Aralık 1994 Cahar savunmasında ve tarihi Bamut direnişinde yaklaşık on Rus tankını imha etti. Her muharebe öncesi roketatar mühimmatını bizzat hazırlayan usta bir zırhlı avcısıydı. 6 Ağustos 1996’da Cahar’daki ‘Cihad’ Operasyonu’nda Hunkar-Paşa ile çarpışırken şehit düştü."
    ]
  },
  {
    "slug": "rizvan-daayev",
    "name": "Rizvan Daayev",
    "born": "1964",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/rizvan-daayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/rizvan-daayev.webp?v=4",
        "caption": "Rizvan Daayev (1964–2000)"
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi ve Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri’nde komutanlık yaptı. Üstün komuta başarısıyla Güneybatı Cephesi 1. Sektör Komutanlığı ve tuğgeneral rütbesine yükseldi.",
    "bio": [
      "Çeçenistan’da dünyaya geldi ve Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri’nde komutanlık yaptı. Üstün komuta başarısıyla Güneybatı Cephesi 1. Sektör Komutanlığı ve tuğgeneral rütbesine yükseldi.",
      "‘Nurullah’ Tugayı bünyesinde Birinci ve İkinci Rus-Çeçen Savaşları’nda ön safta çarpıştı. Ocak-Şubat 2000’de kuşatma altındaki başkent Cahar’ın savunması ve yarma harekâtına katıldı. 8 Şubat 2000 tarihinde Rus işgal kuvvetleriyle girdiği çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "hamzat-gaurgasvili",
    "name": "Hamzat Gaurgaşvili",
    "born": "1971",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hamzat-gaurgasvili.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hamzat-gaurgasvili.webp?v=4",
        "caption": "Hamzat Gaurgaşvili (1971–1995)"
      }
    ],
    "summary": "Çeçenistan’ın Sernovodsk köyünde dünyaya geldi ve Çeçenlerin Dişni taypına mensuptu. Aralık 1994’te Rus ordusunun Çeçenistan’ı işgaline karşı ilk günden gönüllü olarak çıktı.",
    "bio": [
      "Çeçenistan’ın Sernovodsk köyünde dünyaya geldi ve Çeçenlerin Dişni taypına mensuptu. Aralık 1994’te Rus ordusunun Çeçenistan’ı işgaline karşı ilk günden gönüllü olarak çıktı.",
      "Yılbaşı gecesi başlayan tarihi başkent Cahar (Grozni) savunmasında şehir merkezinde çarpıştı. Dondurucu Ocak soğuğunda Başkanlık Sarayı çevresindeki direniş mevzilerini terk etmedi. 18 Ocak 1995 tarihinde başkent Cahar muharebesinde vuruşarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "ruslan-elmurzayev",
    "name": "Ruslan Elmurzayev",
    "born": "1968",
    "died": "1999",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ruslan-elmurzayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ruslan-elmurzayev.webp?v=4",
        "caption": "Ruslan Elmurzayev (1968–1999)"
      }
    ],
    "summary": "Çeçenistan’ın Gudermes ve Enhallo bölgesinde dünyaya geldi ve İslami kimliğiyle tanındı. Birinci ve İkinci Rus-Çeçen Savaşları’nda vatan topraklarını savunmak için silah kuşandı.",
    "bio": [
      "Çeçenistan’ın Gudermes ve Enhallo bölgesinde dünyaya geldi ve İslami kimliğiyle tanındı. Birinci ve İkinci Rus-Çeçen Savaşları’nda vatan topraklarını savunmak için silah kuşandı.",
      "1999 sonbaharında Rus ordusunun yeniden başlattığı işgale karşı doğu ve güney cephelerinde savaştı. Vedeno dağlarında kış şartlarında yürütülen savunma harekâtlarında büyük fedakârlık gösterdi. 31 Aralık 1999 tarihinde Vedeno bölgesinde Rus güçleriyle girdiği çatışmada şehit düştü."
    ]
  },
  {
    "slug": "muhammed-nauzov",
    "name": "Muhammed Nauzov",
    "born": "1978",
    "died": "2006",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/muhammed-nauzov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muhammed-nauzov.webp?v=4",
        "caption": "Muhammed Nauzov (1978–2006)"
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi, Bilto taypına mensuptu ve cephede ‘Halid’ künyesiyle tanındı. İlim sevgisi, takvası ve cesaretiyle direniş saflarındaki kardeşleri arasında örnek oldu.",
    "bio": [
      "Çeçenistan’da dünyaya geldi, Bilto taypına mensuptu ve cephede ‘Halid’ künyesiyle tanındı. İlim sevgisi, takvası ve cesaretiyle direniş saflarındaki kardeşleri arasında örnek oldu.",
      "İkinci Rus-Çeçen Savaşı’nda işgalci kuvvetlere karşı gerilla operasyonlarında yer aldı. Yıllarca süren ağır kuşatma şartlarında imanından ve mücadelesinden taviz vermedi. 31 Ocak 2006 tarihinde Rus işgal güçleriyle girdiği çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "adam-husalayev",
    "name": "Adam Huşalayev",
    "born": "1982",
    "died": "2013",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/adam-husalayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/adam-husalayev.webp?v=4",
        "caption": "Adam Huşalayev (1982–2013)"
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi ve direniş saflarında ‘Abdul-Malik’ künyesiyle mücadele etti. Genç yaşında Vedeno sektöründeki dağ birliklerine katılarak silah arkadaşlarıyla saf tuttu.",
    "bio": [
      "Çeçenistan’da dünyaya geldi ve direniş saflarında ‘Abdul-Malik’ künyesiyle mücadele etti. Genç yaşında Vedeno sektöründeki dağ birliklerine katılarak silah arkadaşlarıyla saf tuttu.",
      "Vedeno ormanlarında yıllarca süren çetin kış ve kuşatma şartlarında sabırla direndi. İşgalci birliklere karşı düzenlenen baskın ve pusu operasyonlarında cesurca savaştı. 7 Mart 2013 tarihinde Vedeno sektöründe girdiği çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "yunus-ahmadov",
    "name": "Yunus Ahmadov",
    "born": "1978",
    "died": "2007",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/yunus-ahmadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/yunus-ahmadov.webp?v=4",
        "caption": "Yunus Ahmadov (1978–2007)"
      }
    ],
    "summary": "1 Ağustos 1978’de dünyaya geldi, Phamtoy taypına mensuptu ve Cahar’da direnişe katıldı. Başkent Cahar’ın (Grozni) Oktyabrski bölgesi emiri olarak şehir içi operasyonları yönetti.",
    "bio": [
      "1 Ağustos 1978’de dünyaya geldi, Phamtoy taypına mensuptu ve Cahar’da direnişe katıldı. Başkent Cahar’ın (Grozni) Oktyabrski bölgesi emiri olarak şehir içi operasyonları yönetti.",
      "Merkez Cephesi Komutanı Ebubekir Basayev’in birinci naibi (yardımcısı) olarak görev yaptı. Son çatışmasında halkına zulmeden üst düzey bir işbirlikçiyi bizzat cezalandırdı. 7 Temmuz 2007 gecesi başkent Cahar’da eşitsiz çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "dires-dadayev",
    "name": "Dires Dadayev",
    "born": "1976",
    "died": "2001",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/dires-dadayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/dires-dadayev.webp?v=4",
        "caption": "Dires Dadayev (1976–2001)"
      }
    ],
    "summary": "Çeçenistan’ın Zakan-Yurt köyünde doğdu ve Çeçenlerin köklü Tundakho taypına mensuptu. İçkerya Tuğgenerali Hadid Dadayev’in küçük kardeşi olarak genç yaşta vatan savunmasına katıldı.",
    "bio": [
      "Çeçenistan’ın Zakan-Yurt köyünde doğdu ve Çeçenlerin köklü Tundakho taypına mensuptu. İçkerya Tuğgenerali Hadid Dadayev’in küçük kardeşi olarak genç yaşta vatan savunmasına katıldı.",
      "Birinci ve İkinci Rus-Çeçen Savaşları’nda ağabeyiyle omuz omuza cephede çarpıştı. Zakan-Yurt ve başkent Cahar hattındaki çetin savunma muharebelerinde cesaret gösterdi. 2001 yılında işgalci Rus kuvvetlerine karşı yürüttüğü mücadelede şehit düştü."
    ]
  },
  {
    "slug": "uvays-ahmadov",
    "name": "Uvays Ahmadov",
    "born": "1975",
    "died": "2001",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/uvays-ahmadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/uvays-ahmadov.webp?v=4",
        "caption": "Uvays Ahmadov (1975–2001)"
      }
    ],
    "summary": "Çeçenistan’ın Argun şehrinde boksör olarak yetişti ve Türkiye’deki tedavisinin ardından cepheye döndü. Argun’da bir mücahit grubuna komuta ederek işgalcilere karşı başarılı operasyonlar düzenledi.",
    "bio": [
      "Çeçenistan’ın Argun şehrinde boksör olarak yetişti ve Türkiye’deki tedavisinin ardından cepheye döndü. Argun’da bir mücahit grubuna komuta ederek işgalcilere karşı başarılı operasyonlar düzenledi.",
      "Rusların babasını rehin alması üzerine halkına zarar gelmemesi için düşmanı tek başına üzerine çekti. Moskovski mevkisinde beş Ural, iki zırhlı ve üç UAZ’dan oluşan Rus konvoyuna tek başına pusu kurdu. 16 Haziran 2001’de 18 işgalciyi imha edip elinde Steçkin tabancasıyla çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "movladi-magamadov",
    "name": "Movladi Magamadov",
    "born": "1974",
    "died": "2006",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/movladi-magamadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/movladi-magamadov.webp?v=4",
        "caption": "Movladi Magamadov (1974–2006)"
      }
    ],
    "summary": "Çeçenistan’ın Hattuni köyünde dünyaya geldi ve Çeçenlerin Tsadaharo taypına mensuptu. Birinci ve İkinci Rus-Çeçen Savaşları’nda Çeçen İçkerya Silahlı Kuvvetleri saflarında çarpıştı.",
    "bio": [
      "Çeçenistan’ın Hattuni köyünde dünyaya geldi ve Çeçenlerin Tsadaharo taypına mensuptu. Birinci ve İkinci Rus-Çeçen Savaşları’nda Çeçen İçkerya Silahlı Kuvvetleri saflarında çarpıştı.",
      "Güney dağ cephesi ve Vedeno ormanlarında yıllarca süren gerilla direnişinde yer aldı. Zorlu kış ve kuşatma şartlarında sarsılmaz imanı ve sabrıyla kardeşlerine örnek oldu. 2006 yılında Rus işgal güçleriyle girdiği silahlı çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "yunus-emri",
    "name": "Yunus Emri",
    "born": "1978",
    "died": "2003",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/yunus-emri.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/yunus-emri.webp?v=4",
        "caption": "Yunus Emri (1978–2003)"
      }
    ],
    "summary": "Türkiye’de dünyaya geldi ve Kafkasya’daki Müslüman kardeşlerinin cihadına gönüllü olarak katıldı. Çeçenistan dağlarındaki mücahit birliklerinde ağır makineli tüfek nişancısı olarak görev yaptı.",
    "bio": [
      "Türkiye’de dünyaya geldi ve Kafkasya’daki Müslüman kardeşlerinin cihadına gönüllü olarak katıldı. Çeçenistan dağlarındaki mücahit birliklerinde ağır makineli tüfek nişancısı olarak görev yaptı.",
      "Güler yüzü, cesareti ve fedakârlığıyla Çeçen ve muhacir kardeşleri arasında çok sevildi. Şali ve Serjen-Yurt ormanlarında işgalci Rus birliklerine karşı sayısız operasyonda çarpıştı. 2003 yılında Serjen-Yurt’ta Rus hava indirme birlikleriyle girdiği çatışmada şehit düştü."
    ]
  },
  {
    "slug": "ruslan-bibulatov",
    "name": "Ruslan Bibulatov",
    "born": "1977",
    "died": "1999",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ruslan-bibulatov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ruslan-bibulatov.webp?v=4",
        "caption": "Ruslan Bibulatov (1977–1999)"
      }
    ],
    "summary": "Çeçenistan’ın Katır-Yurt köyünde dünyaya geldi ve Çeçenlerin Naşho taypına mensuptu. Katır-Yurt Komutanı Olhazar Bibulatov’un oğlu olarak genç yaşta vatan savunmasına katıldı.",
    "bio": [
      "Çeçenistan’ın Katır-Yurt köyünde dünyaya geldi ve Çeçenlerin Naşho taypına mensuptu. Katır-Yurt Komutanı Olhazar Bibulatov’un oğlu olarak genç yaşta vatan savunmasına katıldı.",
      "İkinci Rus-Çeçen Savaşı başında başkent Cahar’ı (Grozni) savunan birliklerde görev aldı. Süra-Kort bölgesinde Komutan Dokka Umarov’un karargâhını koruyan mücahitler arasında yer aldı. 19 Aralık 1999’da başkent Cahar’da Rus füze saldırısı sonucunda kahramanca şehit düştü."
    ]
  },
  {
    "slug": "zayndi-ibayev",
    "name": "Zayndi İbayev",
    "born": "1968",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/zayndi-ibayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/zayndi-ibayev.webp?v=4",
        "caption": "Zayndi İbayev (1968–2000)"
      }
    ],
    "summary": "Çeçenistan’ın Prigorodnoye köyünde doğdu, Çinho taypına mensuptu ve ‘Patriot-1’ çağrı adıyla tanındı. Birinci ve İkinci Rus-Çeçen Savaşları’nda mücahit birliklerine komutanlık yaptı.",
    "bio": [
      "Çeçenistan’ın Prigorodnoye köyünde doğdu, Çinho taypına mensuptu ve ‘Patriot-1’ çağrı adıyla tanındı. Birinci ve İkinci Rus-Çeçen Savaşları’nda mücahit birliklerine komutanlık yaptı.",
      "Ağustos 1996 Cihad Harekâtı’ndaki üstün cesaretinden dolayı ‘Qoman Siy’ ve ‘Qoman Turpal’ nişanlarını aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki tarihi direniş hattında çarpıştı. Saadi-Kotar muharebesinde son kurşununa kadar vuruşarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "adam-movsarov",
    "name": "Adam Movsarov",
    "born": "1976",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/adam-movsarov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/adam-movsarov.webp?v=4",
        "caption": "Adam Movsarov (1976–2000)"
      }
    ],
    "summary": "Çeçenistan’ın Sernovodsk köyünde dünyaya geldi ve Çeçenlerin Dişni taypına mensuptu. Genç yaşından itibaren vatan savunmasına katılarak direniş birliklerinde silah kuşandı.",
    "bio": [
      "Çeçenistan’ın Sernovodsk köyünde dünyaya geldi ve Çeçenlerin Dişni taypına mensuptu. Genç yaşından itibaren vatan savunmasına katılarak direniş birliklerinde silah kuşandı.",
      "İkinci Rus-Çeçen Savaşı’nda başkent Cahar savunması ve güney yarma harekâtında yer aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki kuşatma hattında omuz omuza savaştı. Saadi-Kotar direnişinde işgalci ordulara karşı çarpışarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "muhammed-batsiyev",
    "name": "Muhammed Batsiyev",
    "born": "1974",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/muhammed-batsiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muhammed-batsiyev.webp?v=4",
        "caption": "Muhammed Batsiyev (1974–2000)"
      }
    ],
    "summary": "Çeçenistan’ın Novoterskoye köyünde doğdu, Himo taypına mensuptu ve ‘Mada’ lâkabıyla tanındı. Birinci ve İkinci Rus-Çeçen Savaşları’nda Naurski Taburu saflarında ön cephede savaştı.",
    "bio": [
      "Çeçenistan’ın Novoterskoye köyünde doğdu, Himo taypına mensuptu ve ‘Mada’ lâkabıyla tanındı. Birinci ve İkinci Rus-Çeçen Savaşları’nda Naurski Taburu saflarında ön cephede savaştı.",
      "2000 yılı başında başkent Cahar kuşatmasını yararak güneye yürüyen birliklerde yer aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde kurulan savunma siperlerinde çarpıştı. Saadi-Kotar muharebesinde Naurski kardeşleriyle birlikte vuruşarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "timur-batalov",
    "name": "Timur Batalov",
    "born": "1979",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/timur-batalov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/timur-batalov.webp?v=4",
        "caption": "Timur Batalov (1979–2000)"
      }
    ],
    "summary": "1979 yılında Sernovodsk köyünde doğdu, Mulko taypına mensuptu ve ‘Abdul-Malik’ künyesini aldı. Genç yaşta İkinci Rus-Çeçen Savaşı’na katılarak başkent Cahar savunmasında görev yaptı.",
    "bio": [
      "1979 yılında Sernovodsk köyünde doğdu, Mulko taypına mensuptu ve ‘Abdul-Malik’ künyesini aldı. Genç yaşta İkinci Rus-Çeçen Savaşı’na katılarak başkent Cahar savunmasında görev yaptı.",
      "Şubat 2000’de kuşatma altındaki başkentten çıkarak zorlu kış yürüyüşünü tamamladı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki tarihi direniş mevzilerinde savaştı. Yirmi bir yaşında Saadi-Kotar kuşatmasında çarpışarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "ahmed-haciyev",
    "name": "Ahmed Haciyev",
    "born": "1977",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ahmed-haciyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ahmed-haciyev.webp?v=4",
        "caption": "Ahmed Haciyev (1977–2000)"
      }
    ],
    "summary": "Çeçenistan’ın Naurski bölgesi Rubejnoye köyünde doğdu ve Hakmado taypına mensuptu. İkinci Rus-Çeçen Savaşı’nda Naurski mücahitleriyle birlikte vatan savunmasına koştu.",
    "bio": [
      "Çeçenistan’ın Naurski bölgesi Rubejnoye köyünde doğdu ve Hakmado taypına mensuptu. İkinci Rus-Çeçen Savaşı’nda Naurski mücahitleriyle birlikte vatan savunmasına koştu.",
      "Başkent Cahar (Grozni) savunması ve ardından gerçekleşen güney yarma harekâtında çarpıştı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde Rus ordusunun kuşatmasına karşı direndi. Saadi-Kotar muharebesinde son nefesine kadar vuruşarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "sayd-hasan-sabayev",
    "name": "Sayd-Hasan Şabayev",
    "born": "1975",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/sayd-hasan-sabayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/sayd-hasan-sabayev.webp?v=4",
        "caption": "Sayd-Hasan Şabayev (1975–2000)"
      }
    ],
    "summary": "Çeçenistan’ın Gehi köyünde dünyaya geldi ve İslami ahlakıyla çevresinde sevildi. İkinci Rus-Çeçen Savaşı’nda Komutan Ebu el-Velid’in cemaati bünyesinde cepheye katıldı.",
    "bio": [
      "Çeçenistan’ın Gehi köyünde dünyaya geldi ve İslami ahlakıyla çevresinde sevildi. İkinci Rus-Çeçen Savaşı’nda Komutan Ebu el-Velid’in cemaati bünyesinde cepheye katıldı.",
      "Başkent Cahar savunması ve Şubat 2000’deki zorlu dağ yürüyüşünde ön safta yürüdü. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki kuşatma hattında cesurca çarpıştı. Saadi-Kotar direnişinde silah arkadaşlarıyla omuz omuza vuruşarak şehit düştü."
    ]
  },
  {
    "slug": "rizvan-akuyev",
    "name": "Rizvan Akuyev",
    "born": "1983",
    "died": "2009",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/rizvan-akuyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/rizvan-akuyev.webp?v=4",
        "caption": "Rizvan Akuyev (1983–2009)"
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi ve genç yaşta Açhoy-Martan sektöründeki direnişe katıldı. Batı Cephesi ormanlarında mücahit birlikleriyle birlikte işgalcilere karşı mücadele etti.",
    "bio": [
      "Çeçenistan’da dünyaya geldi ve genç yaşta Açhoy-Martan sektöründeki direnişe katıldı. Batı Cephesi ormanlarında mücahit birlikleriyle birlikte işgalcilere karşı mücadele etti.",
      "Ağır kış ve kuşatma şartlarında Açhoy-Martan dağlarındaki savunma hatlarını terk etmedi. Cesareti, ihlası ve fedakârlığıyla silah arkadaşları arasında örnek bir mücahit oldu. 11 Kasım 2009 tarihinde Rus işgal kuvvetleriyle girdiği çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "hamzat-batayev",
    "name": "Hamzat Batayev",
    "born": "1966",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hamzat-batayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hamzat-batayev.webp?v=4",
        "caption": "Hamzat Batayev (1966–2000)"
      }
    ],
    "summary": "Çeçenistan’ın Batı Cephesi’nde yetişti ve efsanevi Bamut Taburu’nun komutanlığını üstlendi. Birinci Rus-Çeçen Savaşı’nda Bamut Kalesi’ni aylarca işgalci ordulara karşı kahramanca savundu.",
    "bio": [
      "Çeçenistan’ın Batı Cephesi’nde yetişti ve efsanevi Bamut Taburu’nun komutanlığını üstlendi. Birinci Rus-Çeçen Savaşı’nda Bamut Kalesi’ni aylarca işgalci ordulara karşı kahramanca savundu.",
      "Üstün cesareti ve liderliğiyle Çeçen İçkerya Cumhuriyeti’nin milli kahramanları arasına girdi. İkinci savaşta başkent Cahar savunması ve Mart 2000’deki Saadi-Kotar direnişinde çarpıştı. Mart 2000’de Saadi-Kotar (Komsomolskoye) muharebesinde kahramanca şehit düştü."
    ]
  },
  {
    "slug": "ahmed-labazanov",
    "name": "Ahmed Labazanov",
    "born": "1968",
    "died": "1999",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ahmed-labazanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ahmed-labazanov.webp?v=4",
        "caption": "Ahmed Labazanov (1968–1999)"
      }
    ],
    "summary": "1991’den itibaren cumhurbaşkanı Cahar Dudayev’in Muhafız birliği saflarında bağımsızlık yoluna çıktı. Birinci Rus-Çeçen Savaşı’nda ön cephede çarpıştı, yaralanmasına rağmen mücadelesinden dönmedi.",
    "bio": [
      "1991’den itibaren cumhurbaşkanı Cahar Dudayev’in Muhafız birliği saflarında bağımsızlık yoluna çıktı. Birinci Rus-Çeçen Savaşı’nda ön cephede çarpıştı, yaralanmasına rağmen mücadelesinden dönmedi.",
      "İkinci Rus-Çeçen Savaşı başında ‘33’ çağrı adlı mücahit grubunun komutanlığını yaptı. 20 Kasım 1999’da Alleroy hattında seçkin Rus özel kuvvetleri ve T-90 tanklarına karşı savaştı. Kasım 1999’da düşman kuşatmasına karşı son nefesine kadar vuruşarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "yusi-hantiyev",
    "name": "Yusi Hantiyev",
    "born": "1954",
    "died": "1995",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/yusi-hantiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/yusi-hantiyev.webp?v=4",
        "caption": "Yusi Hantiyev (1954–1995)"
      }
    ],
    "summary": "Çeçen halkının yetiştirdiği değerli şair, aydın ve Vaynah Demokratik Partisi’nin kıdemli muhafızıydı. Bağımsız Çeçen İçkerya Cumhuriyeti Parlamentosu’nda milletvekili olarak halkının iradesini temsil etti.",
    "bio": [
      "Çeçen halkının yetiştirdiği değerli şair, aydın ve Vaynah Demokratik Partisi’nin kıdemli muhafızıydı. Bağımsız Çeçen İçkerya Cumhuriyeti Parlamentosu’nda milletvekili olarak halkının iradesini temsil etti.",
      "Aralık 1994’te Rus işgali başlayınca kaleminin yanına silahını kuşanıp en ön cepheye koştu. Yarış-Mardı ve Serjen-Yurt dağlarındaki savunma mevzilerinde mücahitlerle omuz omuza çarpıştı. Mayıs 1995’te Serjen-Yurt yakınlarındaki çetin muharebede kahramanca şehit düştü."
    ]
  },
  {
    "slug": "deni-sultanov",
    "name": "Deni Sultanov",
    "born": "1977",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/deni-sultanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/deni-sultanov.webp?v=4",
        "caption": "Deni Sultanov (1977–2000)"
      }
    ],
    "summary": "Çeçenistan’ın Gudermes şehrinde dünyaya geldi ve Komutan Abdurrahman’ın cemaatine katıldı. İkinci Rus-Çeçen Savaşı’nda Duba-Yurt yakınlarındaki stratejik 825 rakımlı tepe hücumunda savaştı.",
    "bio": [
      "Çeçenistan’ın Gudermes şehrinde dünyaya geldi ve Komutan Abdurrahman’ın cemaatine katıldı. İkinci Rus-Çeçen Savaşı’nda Duba-Yurt yakınlarındaki stratejik 825 rakımlı tepe hücumunda savaştı.",
      "825 Rakımlı Tepe’deki son Rus sığınağına tek başına atlayıp keskin nişancıyı etkisiz bıraktı. Sığınaktan otuz saniye sonra ele geçirdiği SVD tüfeğiyle çıkıp kardeşlerine büyük moral kazandırdı. Mart 2000 başında Duts-Hote köyünde yaralı haldeyken kahramanca şehit düştü."
    ]
  },
  {
    "slug": "islam-zalautdinov",
    "name": "İslam Zalautdinov",
    "born": "1978",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/islam-zalautdinov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/islam-zalautdinov.webp?v=4",
        "caption": "İslam Zalautdinov (1978–2002)"
      }
    ],
    "summary": "Çeçenistan’ın Çeçen-Aul köyünde doğdu, Yalho taypına mensuptu ve ‘Spartak’ çağrı adıyla tanındı. Savaş öncesinde ‘Nizam’ televizyon kanalında kameraman olarak çalışıp hakikatin sesini kayda geçirdi.",
    "bio": [
      "Çeçenistan’ın Çeçen-Aul köyünde doğdu, Yalho taypına mensuptu ve ‘Spartak’ çağrı adıyla tanındı. Savaş öncesinde ‘Nizam’ televizyon kanalında kameraman olarak çalışıp hakikatin sesini kayda geçirdi.",
      "İkinci Rus-Çeçen Savaşı’nda Ahmadov Cemaati saflarında silah kuşanarak cepheye katıldı. Rizvan Ahmadov ve Hayrullah Zakriyev gibi komutanlarla birlikte ön cephe operasyonlarında çarpıştı. Tsotsi-Yurt’taki çatışmada şehit düştü (inşallah) ve köyün merkez kabristanına defnedildi."
    ]
  },
  {
    "slug": "turpal-ali-camalhanov",
    "name": "Turpal-Ali Camalhanov",
    "born": "1990",
    "died": "2009",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/turpal-ali-camalhanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/turpal-ali-camalhanov.webp?v=4",
        "caption": "Turpal-Ali Camalhanov (1990–2009)"
      }
    ],
    "summary": "1990 yılında Vedeno bölgesinin Tsa-Vedeno köyünde doğdu ve inançlı bir ailede yetişti. 2004 yılında henüz on dört yaşındayken işgale boyun eğmeyip dağlardaki mücahitlere katıldı.",
    "bio": [
      "1990 yılında Vedeno bölgesinin Tsa-Vedeno köyünde doğdu ve inançlı bir ailede yetişti. 2004 yılında henüz on dört yaşındayken işgale boyun eğmeyip dağlardaki mücahitlere katıldı.",
      "2004’ten 2009’a kadar beş yıl boyunca Vedeno ormanlarında Rus güçlerine karşı savaştı. Genç yaşına rağmen telsizciliği, cesareti ve tebessümüyle silah arkadaşlarına örnek oldu. 2009 yılında on dokuz yaşında işgalcilerle girdiği çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "aslambek-bacayev",
    "name": "Aslambek Baçayev",
    "born": "1978",
    "died": "2002",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aslambek-bacayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/aslambek-bacayev.webp?v=4",
        "caption": "Aslambek Baçayev (1978–2002)"
      }
    ],
    "summary": "Çeçenistan’ın Novıye-Atagi (Cim-Atagi) köyünde doğdu ve genç yaşta direnişe katıldı. İkinci Rus-Çeçen Savaşı’nda Şali ve Argun boğazı hattındaki mücahit birliklerinde görev yaptı.",
    "bio": [
      "Çeçenistan’ın Novıye-Atagi (Cim-Atagi) köyünde doğdu ve genç yaşta direnişe katıldı. İkinci Rus-Çeçen Savaşı’nda Şali ve Argun boğazı hattındaki mücahit birliklerinde görev yaptı.",
      "Ağır kuşatma ve takip şartlarında işgalci Rus birliklerine karşı cesaretle mücadele etti. Vatanına bağlılığı, ihlası ve fedakârlığıyla köy halkı ve kardeşleri arasında sevildi. 2002 yılında Novıye-Atagi’de uğradığı hain saldırı sonucu şehit düştü."
    ]
  },
  {
    "slug": "hamid-mahamasev",
    "name": "Hamid Mahamaşev",
    "born": "1965",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hamid-mahamasev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hamid-mahamasev.webp?v=4",
        "caption": "Hamid Mahamaşev (1965–2000)"
      }
    ],
    "summary": "1965 yılında Naurski bölgesi Rubejnoye köyünde doğdu ve Hakmado taypına mensuptu. Çeçenistan’ın özgürlük ve bağımsızlık mücadelesinde Naurski mücahitleriyle birlikte saf tuttu.",
    "bio": [
      "1965 yılında Naurski bölgesi Rubejnoye köyünde doğdu ve Hakmado taypına mensuptu. Çeçenistan’ın özgürlük ve bağımsızlık mücadelesinde Naurski mücahitleriyle birlikte saf tuttu.",
      "İkinci Rus-Çeçen Savaşı’nda başkent Cahar (Grozni) savunması ve kış yarma harekâtına katıldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki tarihi direniş mevzilerinde çarpıştı. Saadi-Kotar muharebesinde son kurşununa kadar vuruşarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "isa-canaraliyev",
    "name": "İsa Canaraliyev",
    "born": "1980",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/isa-canaraliyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/isa-canaraliyev.webp?v=4",
        "caption": "İsa Canaraliyev (1980–2000)"
      }
    ],
    "summary": "20 Mayıs 1980’de Urus-Martan’da dünyaya geldi ve Çeçenlerin köklü Beno taypına mensuptu. Gençliğinin baharında İkinci Rus-Çeçen Savaşı başlayınca vatan savunmasına koştu.",
    "bio": [
      "20 Mayıs 1980’de Urus-Martan’da dünyaya geldi ve Çeçenlerin köklü Beno taypına mensuptu. Gençliğinin baharında İkinci Rus-Çeçen Savaşı başlayınca vatan savunmasına koştu.",
      "Kuşatma altındaki başkent Cahar savunmasında ve Şubat 2000’deki zorlu kış yürüyüşünde yer aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde Rus ordusuna karşı omuz omuza direndi. Henüz on dokuz yaşında Saadi-Kotar muharebesinde kahramanca şehit düştü."
    ]
  },
  {
    "slug": "musa-magomadov",
    "name": "Musa Magomadov",
    "born": "1980",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/musa-magomadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/musa-magomadov.webp?v=4",
        "caption": "Musa Magomadov (1980–2000)"
      }
    ],
    "summary": "1980 yılında Çeçenistan’da doğdu, dört kahraman Magomadov kardeşin en küçüğüydü. Ağabeyleri Muhammed, Ebubekir ve Muhammed-Emin ile birlikte vatan savunmasında silah kuşandı.",
    "bio": [
      "1980 yılında Çeçenistan’da doğdu, dört kahraman Magomadov kardeşin en küçüğüydü. Ağabeyleri Muhammed, Ebubekir ve Muhammed-Emin ile birlikte vatan savunmasında silah kuşandı.",
      "İkinci Rus-Çeçen Savaşı’nda başkent Cahar savunması ve güney yarma harekâtında görev aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde üç ağabeyiyle aynı siperde savaştı. Yirmi yaşında üç ağabeyiyle birlikte Saadi-Kotar’da çarpışarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "movldi-islamov",
    "name": "Movldi İslamov",
    "born": "1958",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/movldi-islamov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/movldi-islamov.webp?v=4",
        "caption": "Movldi İslamov (1958–2000)"
      }
    ],
    "summary": "Her iki Rus-Çeçen Savaşı’nda da ön cephede çarpışan kıdemli İçkerya mücahitlerindendi. Ocak 1996’daki tarihi Pervomaysk Harekâtı’na katılarak kuşatmayı yaran gaziler arasında yer aldı.",
    "bio": [
      "Her iki Rus-Çeçen Savaşı’nda da ön cephede çarpışan kıdemli İçkerya mücahitlerindendi. Ocak 1996’daki tarihi Pervomaysk Harekâtı’na katılarak kuşatmayı yaran gaziler arasında yer aldı.",
      "Birinci savaş zaferinin ardından Şelkovskoy bölgesi Çervlyonnaya idare başkanlığı görevini yürüttü. 1999’da Rus işgali yeniden başlayınca makamını bırakıp tekrar cephe saflarına koştu. İkinci Rus-Çeçen Savaşı’nda vatan topraklarını savunurken kahramanca şehit düştü."
    ]
  },
  {
    "slug": "arbi-visayev",
    "name": "Arbi Visayev",
    "born": "1973",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/arbi-visayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/arbi-visayev.webp?v=4",
        "caption": "Arbi Visayev (1973–2000)"
      }
    ],
    "summary": "1973 yılında Urus-Martan’ın Goyskoye köyünde doğdu ve köklü Terlo taypına mensuptu. Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri’ne bağlı Şatoy Alayı saflarında görev yaptı.",
    "bio": [
      "1973 yılında Urus-Martan’ın Goyskoye köyünde doğdu ve köklü Terlo taypına mensuptu. Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri’ne bağlı Şatoy Alayı saflarında görev yaptı.",
      "İkinci Rus-Çeçen Savaşı’nda başkent Cahar ve güney dağ geçitlerindeki çatışmalara katıldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki tarihi direniş mevzilerinde savaştı. Mart 2000’de Saadi-Kotar muharebesinde son nefesine dek çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "vahid-visayev",
    "name": "Vahid Visayev",
    "born": "1974",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/vahid-visayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/vahid-visayev.webp?v=4",
        "caption": "Vahid Visayev (1974–2000)"
      }
    ],
    "summary": "1974 yılında Çeçenistan’da dünyaya geldi ve Çeçenlerin Terlo taypına mensuptu. İkinci Rus-Çeçen Savaşı’nda Komutan Abu Elmurzayev’in birliği saflarında cepheye katıldı.",
    "bio": [
      "1974 yılında Çeçenistan’da dünyaya geldi ve Çeçenlerin Terlo taypına mensuptu. İkinci Rus-Çeçen Savaşı’nda Komutan Abu Elmurzayev’in birliği saflarında cepheye katıldı.",
      "Kuşatma altındaki başkent Cahar (Grozni) savunmasında en ön hatlarda görev aldı. Süra-Kort tepeleri ve otuzuncu bölge mevzilerinde ağır Rus saldırılarına karşı direndi. Ocak 2000 başında Süra-Kort hattındaki yoğun topçu ateşinde kahramanca şehit düştü."
    ]
  },
  {
    "slug": "hamzat-bamatgiriyev",
    "name": "Hamzat Bamatgiriyev",
    "born": "1981",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/hamzat-bamatgiriyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/hamzat-bamatgiriyev.webp?v=4",
        "caption": "Hamzat Bamatgiriyev (1981–2000)"
      }
    ],
    "summary": "1981 yılında doğdu, Dişni taypına mensuptu ve İçkerya Tuğgenerali Vahid Bamatgiriyev’in oğluydu. Gençliğinin baharında babası Vahid Bamatgiriyev’in yanında vatan savunması saflarına katıldı.",
    "bio": [
      "1981 yılında doğdu, Dişni taypına mensuptu ve İçkerya Tuğgenerali Vahid Bamatgiriyev’in oğluydu. Gençliğinin baharında babası Vahid Bamatgiriyev’in yanında vatan savunması saflarına katıldı.",
      "İkinci Rus-Çeçen Savaşı’nda başkent Cahar savunması ve kış yarma harekâtında yer aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde babasıyla omuz omuza işgalcilere direndi. Henüz on dokuz yaşında babasıyla birlikte Saadi-Kotar’da vuruşarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "ebubekir-magomadov",
    "name": "Ebubekir Magomadov",
    "born": "1971",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ebubekir-magomadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ebubekir-magomadov.webp?v=4",
        "caption": "Ebubekir Magomadov (1971–2000)"
      }
    ],
    "summary": "1971 yılında doğdu, vatan yolunda can veren dört kahraman Magomadov kardeşten biriydi. Kardeşleri Muhammed, Musa ve Muhammed-Emin ile birlikte Çeçen direnişi saflarında savaştı.",
    "bio": [
      "1971 yılında doğdu, vatan yolunda can veren dört kahraman Magomadov kardeşten biriydi. Kardeşleri Muhammed, Musa ve Muhammed-Emin ile birlikte Çeçen direnişi saflarında savaştı.",
      "İkinci Rus-Çeçen Savaşı’nda başkent Cahar kuşatması ve zorlu kış yürüyüşüne katıldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde üç kardeşiyle aynı cephede vuruştu. Mart 2000’de üç kardeşiyle birlikte Saadi-Kotar direnişinde kahramanca şehit düştü."
    ]
  },
  {
    "slug": "apti-cukayev",
    "name": "Apti Çukayev",
    "born": "1978",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/apti-cukayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/apti-cukayev.webp?v=4",
        "caption": "Apti Çukayev (1978–2000)"
      }
    ],
    "summary": "1978 yılında Gudermes şehrinde doğdu ve genç yaşta Komutan Abdurrahman’ın cemaatine katıldı. İkinci Rus-Çeçen Savaşı’nda Argun boğazı girişindeki kritik savunma hatlarında görev aldı.",
    "bio": [
      "1978 yılında Gudermes şehrinde doğdu ve genç yaşta Komutan Abdurrahman’ın cemaatine katıldı. İkinci Rus-Çeçen Savaşı’nda Argun boğazı girişindeki kritik savunma hatlarında görev aldı.",
      "Ocak 2000’de Duba-Yurt civarındaki stratejik 825 rakımlı tepe hücumunda en önde yürüdü. Dondurucu kış şartlarında Rus mevzilerine karşı sarsılmaz bir cesaret ve imanla çarpıştı. 15 Ocak 2000’de 825 Rakımlı Tepe’yi ele geçirme harekâtında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "ilyas-umhayev",
    "name": "İlyas Umhayev",
    "born": "1977",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ilyas-umhayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ilyas-umhayev.webp?v=4",
        "caption": "İlyas Umhayev (1977–2000)"
      }
    ],
    "summary": "1977 yılında Gudermes şehrinde dünyaya geldi ve Komutan Abdurrahman’ın cemaatinde yer aldı. İkinci Rus-Çeçen Savaşı’nda Gudermesli kardeşleriyle birlikte ön cephe muharebelerine katıldı.",
    "bio": [
      "1977 yılında Gudermes şehrinde dünyaya geldi ve Komutan Abdurrahman’ın cemaatinde yer aldı. İkinci Rus-Çeçen Savaşı’nda Gudermesli kardeşleriyle birlikte ön cephe muharebelerine katıldı.",
      "Ocak 2000’deki Duba-Yurt ve güney dağ hattı çatışmalarında büyük fedakârlık gösterdi. Ağır kış ve kuşatma altında yaralı silah arkadaşlarını asla yalnız bırakmadı. Mart 2000 başında Duts-Hote köyüne düzenlenen Rus füze saldırısında şehit düştü."
    ]
  },
  {
    "slug": "idris-amayev",
    "name": "İdris Amayev",
    "born": "1975",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/idris-amayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/idris-amayev.webp?v=4",
        "caption": "İdris Amayev (1975–2000)"
      }
    ],
    "summary": "1975 yılında Naurski bölgesi Novoterskoye köyünde doğdu ve Himo taypına mensuptu. İkinci Rus-Çeçen Savaşı’nda İçkerya Ordusu’nun Naurski Taburu saflarında silah kuşandı.",
    "bio": [
      "1975 yılında Naurski bölgesi Novoterskoye köyünde doğdu ve Himo taypına mensuptu. İkinci Rus-Çeçen Savaşı’nda İçkerya Ordusu’nun Naurski Taburu saflarında silah kuşandı.",
      "Kuşatma altındaki başkent Cahar savunmasında silah arkadaşı Aslanbek Murtsaliyev ile savaştı. Şubat 2000 yarma harekâtıyla Saadi-Kotar (Komsomolskoye) direniş mevzilerine ulaştı. Mart 2000’de Saadi-Kotar muharebesinde işgalcilere karşı çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "umar-borcasvili",
    "name": "Umar Borçaşvili",
    "born": "1967",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/umar-borcasvili.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/umar-borcasvili.webp?v=4",
        "caption": "Umar Borçaşvili (1967–2000)"
      }
    ],
    "summary": "1967 yılında dünyaya geldi ve Çeçenistan’ın batısındaki Assinovskaya beldesinde yaşadı. Vatanseverliği, cesareti ve sarsılmaz imanıyla çevresinde saygı gören bir mücahitti.",
    "bio": [
      "1967 yılında dünyaya geldi ve Çeçenistan’ın batısındaki Assinovskaya beldesinde yaşadı. Vatanseverliği, cesareti ve sarsılmaz imanıyla çevresinde saygı gören bir mücahitti.",
      "İkinci Rus-Çeçen Savaşı’nda başkent Cahar’dan güney dağ eteklerine kadar cephede vuruştu. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki çetin kuşatma hattında görev yaptı. Mart 2000’de Saadi-Kotar direnişinde son kurşununa kadar savaşarak şehit düştü."
    ]
  },
  {
    "slug": "has-muhammed-edilsultanov",
    "name": "Has-Muhammed Edilsultanov",
    "born": "1976",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/has-muhammed-edilsultanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/has-muhammed-edilsultanov.webp?v=4",
        "caption": "Has-Muhammed Edilsultanov (1976–2000)"
      }
    ],
    "summary": "1976 yılında Kurçaloy bölgesinin Geldagan köyünde doğdu ve Şono taypına mensuptu. Genç yaşta Çeçen İçkerya Cumhuriyeti’nin bağımsızlığını korumak için direnişe katıldı.",
    "bio": [
      "1976 yılında Kurçaloy bölgesinin Geldagan köyünde doğdu ve Şono taypına mensuptu. Genç yaşta Çeçen İçkerya Cumhuriyeti’nin bağımsızlığını korumak için direnişe katıldı.",
      "İkinci Rus-Çeçen Savaşı’nda başkent Cahar kuşatması ve kış yarma harekâtında çarpıştı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde ezici Rus güçlerine karşı direndi. Yirmi dört yaşında Saadi-Kotar muharebesinde vatanı uğruna kahramanca şehit düştü."
    ]
  },
  {
    "slug": "saaman-magomadov",
    "name": "Şaaman Magomadov",
    "born": "1973",
    "died": "1994",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/saaman-magomadov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/saaman-magomadov.webp?v=4",
        "caption": "Şaaman Magomadov (1973–1994)"
      }
    ],
    "summary": "17 Mart 1973’te Urus-Martan’ın Tangi-Çu köyünde doğdu ve Belgato taypına mensuptu. Genç yaşta Çeçen halkının özgürlük ve bağımsızlık mücadelesi saflarında yer aldı.",
    "bio": [
      "17 Mart 1973’te Urus-Martan’ın Tangi-Çu köyünde doğdu ve Belgato taypına mensuptu. Genç yaşta Çeçen halkının özgürlük ve bağımsızlık mücadelesi saflarında yer aldı.",
      "Ekim 1994’te Rus istihbaratı destekli Gantemirov paralı güçlerine karşı harekete geçti. Altı silah arkadaşıyla Gehi’deki işgal edilmiş füze üssünü kurtarma baskınına öncülük etti. Ekim 1994’te Gehi füze üssü çatışmasında yirmi bir yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "zambek-isayev",
    "name": "Zambek İsayev",
    "born": "1960",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/zambek-isayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/zambek-isayev.webp?v=4",
        "caption": "Zambek İsayev (1960–2000)"
      }
    ],
    "summary": "1960 yılında dünyaya geldi, Sernovodsk beldesindendi ve köklü Dişni taypına mensuptu. Silah arkadaşları arasında ‘Kaga’ lakabıyla tanınan cesur ve tecrübeli bir mücahitti.",
    "bio": [
      "1960 yılında dünyaya geldi, Sernovodsk beldesindendi ve köklü Dişni taypına mensuptu. Silah arkadaşları arasında ‘Kaga’ lakabıyla tanınan cesur ve tecrübeli bir mücahitti.",
      "İkinci Rus-Çeçen Savaşı’nda vatan topraklarını Rus işgaline karşı ön cephede savundu. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyüne açılan stratejik vadi girişini tuttu. Mart 2000’de Saadi-Kotar vadisi girişinde işgalcilerle çarpışarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "islam-baysangurov",
    "name": "İslam Baysangurov",
    "born": "1978",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/islam-baysangurov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/islam-baysangurov.webp?v=4",
        "caption": "İslam Baysangurov (1978–2000)"
      }
    ],
    "summary": "1978 yılında Çeçenistan’ın batısındaki Sernovodskoye’de doğdu ve Terlo taypına mensuptu. Gençliğinin baharında Çeçen İçkerya Cumhuriyeti’ni savunmak için direniş saflarına katıldı.",
    "bio": [
      "1978 yılında Çeçenistan’ın batısındaki Sernovodskoye’de doğdu ve Terlo taypına mensuptu. Gençliğinin baharında Çeçen İçkerya Cumhuriyeti’ni savunmak için direniş saflarına katıldı.",
      "İkinci Rus-Çeçen Savaşı’nda ağır kış kuşatması ve cephe muharebelerinde görev aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde ezici Rus kuşatmasına karşı direndi. Mart 2000’de henüz yirmi iki yaşındayken Saadi-Kotar’da kahramanca şehit düştü."
    ]
  },
  {
    "slug": "balavdi-movsarov",
    "name": "Balavdi Movsarov",
    "born": "1974",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/balavdi-movsarov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/balavdi-movsarov.webp?v=4",
        "caption": "Balavdi Movsarov (1974–2000)"
      }
    ],
    "summary": "1974 yılında doğdu, savaş öncesinden itibaren Gelayev’in özel ‘Borz’ birliğinde görev aldı. Birinci Rus-Çeçen Savaşı’nda Komutan Hamzat Gelayev ile birçok ağır cephede çarpıştı.",
    "bio": [
      "1974 yılında doğdu, savaş öncesinden itibaren Gelayev’in özel ‘Borz’ birliğinde görev aldı. Birinci Rus-Çeçen Savaşı’nda Komutan Hamzat Gelayev ile birçok ağır cephede çarpıştı.",
      "Şubat 2000’de başkent Cahar’dan mayın tarlasını Hamzat Gelayev ile omuz omuza yürüyerek aştı. Saadi-Kotar’da mahzendeki Gelayev ve mücahitleri ezmek isteyen Rus tankını imha etti. Mart 2000’de Saadi-Kotar’da başını eğmeden son nefesine dek vuruşarak şehit düştü."
    ]
  },
  {
    "slug": "yusuf-gobi",
    "name": "Yusuf Gobi",
    "born": "1972",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/yusuf-gobi.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/yusuf-gobi.webp?v=4",
        "caption": "Yusuf Gobi (1972–2000)"
      }
    ],
    "summary": "1972 yılında başkent Cahar’ın karpinka semtinde doğdu ve Phamto taypına mensuptu. Çeçen direnişi saflarında Emir Şadid komutasındaki birlikte ön cephe mücahidi olarak savaştı.",
    "bio": [
      "1972 yılında başkent Cahar’ın karpinka semtinde doğdu ve Phamto taypına mensuptu. Çeçen direnişi saflarında Emir Şadid komutasındaki birlikte ön cephe mücahidi olarak savaştı.",
      "İkinci Rus-Çeçen Savaşı’nda başkent Cahar savunması ve kış yarma harekâtına katıldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki çetin savunma mevzilerinde vuruştu. Mart 2000’de Saadi-Kotar direnişinde vatanı ve inancı uğruna şehit düştü."
    ]
  },
  {
    "slug": "ismail-razakov",
    "name": "İsmail Razakov",
    "born": "1969",
    "died": "2000",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ismail-razakov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ismail-razakov.webp?v=4",
        "caption": "İsmail Razakov (1969–2000)"
      }
    ],
    "summary": "1969 yılında Grozni bölgesinin İlinovka köyünde doğdu ve ‘Emir Bagram’ lakabıyla tanındı. Birinci Rus-Çeçen Savaşı’ndan itibaren ön cephede birliklere komuta eden cesur bir emirdi.",
    "bio": [
      "1969 yılında Grozni bölgesinin İlinovka köyünde doğdu ve ‘Emir Bagram’ lakabıyla tanındı. Birinci Rus-Çeçen Savaşı’ndan itibaren ön cephede birliklere komuta eden cesur bir emirdi.",
      "Çatışmalarda bir gözünü kaybetmesine rağmen cepheden ayrılmayıp mücadeleyi sürdürdü. İkinci Rus-Çeçen Savaşı’nın en ağır kış muharebelerinde mücahitlere öncülük etti. Şubat 2000’de Rus işgalcilere karşı yürütülen kış direnişinde kahramanca şehit düştü."
    ]
  },
  {
    "slug": "rasid-molayev",
    "name": "Raşid Molayev",
    "born": "1960",
    "died": "2021",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/rasid-molayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/rasid-molayev.webp?v=4",
        "caption": "Raşid Molayev (1960–2021)"
      }
    ],
    "summary": "1960 yılında doğdu, özgürlük yoluna baş koyan köklü Molayev ailesinin mensubuydu. Her iki Rus-Çeçen Savaşı’na da ilk günden itibaren kardeşleriyle birlikte ön cephede katıldı.",
    "bio": [
      "1960 yılında doğdu, özgürlük yoluna baş koyan köklü Molayev ailesinin mensubuydu. Her iki Rus-Çeçen Savaşı’na da ilk günden itibaren kardeşleriyle birlikte ön cephede katıldı.",
      "Kardeşinin 2004’teki şehadetinin ardından da yıllarca dağlarda direniş sancağını bırakmadı. Çeçen mücahitlerin emiri Hamzat (Aslan Bütükayev) ile birlikte zorlu kış şartlarında direndi. 20 Ocak 2021’de Katar-Yurt yakınlarında düşmanın hain pususunda şehit düştü."
    ]
  },
  {
    "slug": "isa-bazurkayev",
    "name": "İsa Bazurkayev",
    "born": "1979",
    "died": "2021",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/isa-bazurkayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/isa-bazurkayev.webp?v=4",
        "caption": "İsa Bazurkayev (1979–2021)"
      }
    ],
    "summary": "1979 yılında Çeçenistan’da dünyaya geldi ve direnişte ‘İsak’ lakabıyla tanındı. 2006 yılından itibaren Rus işgal güçlerinin on beş yıl boyunca yakalayamadığı bir mücahitti.",
    "bio": [
      "1979 yılında Çeçenistan’da dünyaya geldi ve direnişte ‘İsak’ lakabıyla tanındı. 2006 yılından itibaren Rus işgal güçlerinin on beş yıl boyunca yakalayamadığı bir mücahitti.",
      "Dağlardaki dondurucu kışlara ve tam kuşatmaya rağmen sarsılmaz bir imanla yaşadı. Emir Hamzat (Aslan Bütükayev) komutasındaki son direniş birliğinde omuz omuza görev aldı. 20 Ocak 2021’de Katar-Yurt bölgesinde silah arkadaşlarıyla birlikte şehit düştü."
    ]
  },
  {
    "slug": "vahit-darsayev",
    "name": "Vahit Darşayev",
    "born": "1987",
    "died": "2021",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/vahit-darsayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/vahit-darsayev.webp?v=4",
        "caption": "Vahit Darşayev (1987–2021)"
      }
    ],
    "summary": "1987 yılında Çeçenistan’da doğdu ve mücahitler arasında ‘Basri’ lakabıyla bilindi. Genç yaşta işgalcilerin zulmüne boyun eğmeyerek Çeçenistan dağlarındaki direnişe katıldı.",
    "bio": [
      "1987 yılında Çeçenistan’da doğdu ve mücahitler arasında ‘Basri’ lakabıyla bilindi. Genç yaşta işgalcilerin zulmüne boyun eğmeyerek Çeçenistan dağlarındaki direnişe katıldı.",
      "Yıllar süren ağır mahrumiyet, soğuk ve takibe karşı ahdi ve imanından taviz vermedi. Emir Hamzat (Aslan Bütükayev) ve dört sadık yoldaşıyla son nefesine kadar birlikte kaldı. 20 Ocak 2021’de Katar-Yurt civarındaki gizli üste hain komployla şehit düştü."
    ]
  },
  {
    "slug": "samhan-saraliyev",
    "name": "Şamhan Saraliyev",
    "born": "1996",
    "died": "2021",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/samhan-saraliyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/samhan-saraliyev.webp?v=4",
        "caption": "Şamhan Saraliyev (1996–2021)"
      }
    ],
    "summary": "1996 yılında Çeçenistan’da dünyaya geldi, Aslambek Saraliyev’in kahraman oğluydu. Henüz gençliğinin ilk yıllarında dünya rahatını terk ederek özgürlük mücadelesine katıldı.",
    "bio": [
      "1996 yılında Çeçenistan’da dünyaya geldi, Aslambek Saraliyev’in kahraman oğluydu. Henüz gençliğinin ilk yıllarında dünya rahatını terk ederek özgürlük mücadelesine katıldı.",
      "Kuşatma altındaki dağlarda açlık ve dondurucu soğukta yalnızca Allah’a tevekkül etti. Emir Hamzat (Aslan Bütükayev) yanında kıdemli gazilerle aynı siperi ve kaderi paylaştı. 20 Ocak 2021’de Katar-Yurt yakınlarında yirmi beş yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "turpal-ali-mejidov",
    "name": "Turpal-Ali Mejidov",
    "born": "1990",
    "died": "2026",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/turpal-ali-mejidov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/turpal-ali-mejidov.webp?v=4",
        "caption": "Turpal-Ali Mejidov (1990–2026)"
      }
    ],
    "summary": "1990 yılında Gudermes’te doğdu, ihlası ve cesaretiyle tanınan yiğit bir Çeçen ‘konah’ıydı. İnsanları tedavi etti, kutsal topraklara ziyaretler düzenledi ve İslami davet çalışmaları yaptı.",
    "bio": [
      "1990 yılında Gudermes’te doğdu, ihlası ve cesaretiyle tanınan yiğit bir Çeçen ‘konah’ıydı. İnsanları tedavi etti, kutsal topraklara ziyaretler düzenledi ve İslami davet çalışmaları yaptı.",
      "Rus işgalciler tarafından defalarca kaçırılıp ağır işkencelere maruz kalsa da imanından taviz vermedi. Son yıllarında yeraltı direniş saflarında işgalcilere karşı Allah yolunda mücadele yürüttü. 19 Ekim 2026’da teslim olmayıp son mermisine dek çarpışarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "leca-cemnigov",
    "name": "Leça Cemnigov",
    "born": "1972",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/leca-cemnigov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/leca-cemnigov.webp?v=4",
        "caption": "Leça Cemnigov (1972–2000)"
      }
    ],
    "summary": "1972 yılında Çeçenistan’ın Oyshara beldesinde Sayd-Muhammed Cemnigov’un oğlu olarak doğdu. Genç yaşta Çeçen halkının özgürlük ve bağımsızlık mücadelesi saflarında yer aldı.",
    "bio": [
      "1972 yılında Çeçenistan’ın Oyshara beldesinde Sayd-Muhammed Cemnigov’un oğlu olarak doğdu. Genç yaşta Çeçen halkının özgürlük ve bağımsızlık mücadelesi saflarında yer aldı.",
      "Her iki Rus-Çeçen Savaşı’nda da vatan topraklarını Rus işgal ordularına karşı cesurca savundu. 1999–2000 kışında kuşatma altındaki başkent Cahar-Kala savunma mevzilerinde çarpıştı. 13 Ocak 2000’de başkent Cahar savunmasında yirmi sekiz yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "yusuf-temirhanov",
    "name": "Yusuf Temirhanov",
    "born": "1972",
    "died": "2018",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/yusuf-temirhanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/yusuf-temirhanov.webp?v=4",
        "caption": "Yusuf Temirhanov (1972–2018)"
      }
    ],
    "summary": "6 Mayıs 1972’de Geldagan köyünde doğdu ve Çeçen halkı arasında ‘Milletin Onuru’ olarak anıldı. Masum Çeçen kızı Elza Kungayeva’yı katleden Rus Albay Budanov’dan milletin intikamını almaya and içti.",
    "bio": [
      "6 Mayıs 1972’de Geldagan köyünde doğdu ve Çeçen halkı arasında ‘Milletin Onuru’ olarak anıldı. Masum Çeçen kızı Elza Kungayeva’yı katleden Rus Albay Budanov’dan milletin intikamını almaya and içti.",
      "10 Haziran 2011’de Moskova’da savaş suçlusu Albay Budanov’u cezalandırarak adaleti sağladı. Yıllarca Rus cezaevlerindeki ağır işkencelere rağmen vakarıyla asla boyun eğmeden direndi. 3 Ağustos 2018’de Rus esaretinde halkının onur sembolü olarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "apti-cabrailov",
    "name": "Apti Cabrailov",
    "born": "1975",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/apti-cabrailov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/apti-cabrailov.webp?v=4",
        "caption": "Apti Cabrailov (1975–2002)"
      }
    ],
    "summary": "1975 yılında Şali’de doğdu, direnişte ‘Emir Cundullah’ ismiyle tanınan cesur bir komutandı. 1997’de Şeriat Muhafızları’nda emirlik yaptı ve Muhammed Tsagarayev’in sağ kolu oldu.",
    "bio": [
      "1975 yılında Şali’de doğdu, direnişte ‘Emir Cundullah’ ismiyle tanınan cesur bir komutandı. 1997’de Şeriat Muhafızları’nda emirlik yaptı ve Muhammed Tsagarayev’in sağ kolu oldu.",
      "1999’da ağır yaralanmasına rağmen iyileşip Şali ve Hasavyurt sektörlerinden sorumlu emir oldu. Başkent Cahar’daki Rus işgal güçlerine ve işbirlikçilere karşı sayısız başarılı baskın yönetti. 22 Ocak 2002’de Cahar 56. bölgede şarjörünü son mermisine dek boşaltarak şehit düştü."
    ]
  },
  {
    "slug": "rustam-labazanov",
    "name": "Rustam Labazanov",
    "born": "1976",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/rustam-labazanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/rustam-labazanov.webp?v=4",
        "caption": "Rustam Labazanov (1976–2002)"
      }
    ],
    "summary": "1976 yılında başkent Cahar’da doğdu, Galay taypına mensuptu ve Umar Labazanov’un kuzeniydi. Kuzeni Umar’ın Mart 2000’deki şehadetinin ardından ‘Emir Şadid’ lakabını devralarak sancak tuttu.",
    "bio": [
      "1976 yılında başkent Cahar’da doğdu, Galay taypına mensuptu ve Umar Labazanov’un kuzeniydi. Kuzeni Umar’ın Mart 2000’deki şehadetinin ardından ‘Emir Şadid’ lakabını devralarak sancak tuttu.",
      "Cahar Cemaati emir yardımcısı olarak başkentteki özel direniş hücrelerini ve operasyonları yönetti. 22 Ocak 2002’de kuşatıldığında cemaat emaneti düşmana kalmasın diye paraları tek tek yırttı. 22 Ocak 2002’de Cahar 56. bölgede esir düşmemek için bombasını patlatarak şehit düştü."
    ]
  },
  {
    "slug": "ilyas-zakriyev",
    "name": "İlyas Zakriyev",
    "born": "1980",
    "died": "2002",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ilyas-zakriyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ilyas-zakriyev.webp?v=4",
        "caption": "İlyas Zakriyev (1980–2002)"
      }
    ],
    "summary": "1980 yılında Çeçenistan’ın Prigorodnoye köyünde doğdu ve genç yaşta direnişe katıldı. Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri bünyesinde Prigorodnoye Cemaati emiri olarak görev yaptı.",
    "bio": [
      "1980 yılında Çeçenistan’ın Prigorodnoye köyünde doğdu ve genç yaşta direnişe katıldı. Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri bünyesinde Prigorodnoye Cemaati emiri olarak görev yaptı.",
      "İkinci Rus-Çeçen Savaşı’nda başkent Cahar ve çevresindeki stratejik hatlarda cihad yürüttü. İPON emiri Murad Yusufhaciyev ile omuz omuza işgalci Rus birliklerine ağır kayıplar verdirdi. 2 Ekim 2002 şafağında Cahar’da eşitsiz çatışmada yirmi iki yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "emir-abuzar",
    "name": "Emir Abuzar",
    "born": "1978",
    "died": "2004",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/emir-abuzar.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/emir-abuzar.webp?v=4",
        "caption": "Emir Abuzar (1978–2004)"
      }
    ],
    "summary": "1978 yılında Argun şehrinde dünyaya geldi ve direnişte ‘Gerat’ savaş lakabıyla tanındı. Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri Argun sektörü cemaat emiri olarak birliklere komuta etti.",
    "bio": [
      "1978 yılında Argun şehrinde dünyaya geldi ve direnişte ‘Gerat’ savaş lakabıyla tanındı. Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri Argun sektörü cemaat emiri olarak birliklere komuta etti.",
      "Temmuz 2004’te Emir Hamas ile birlikte Argun’daki işgalci güçlere hedefli harekât başlattı. İki gün süren çarpışmalarda iki Rus zırhlısını imha edip onlarca işgalciyi etkisiz kıldı. 29 Temmuz 2004’te Argun’daki eşitsiz çatışmada yirmi altı yaşında kahramanca şehit düştü."
    ]
  },
  {
    "slug": "olhazar-bibulatov",
    "name": "Olhazar Bibulatov",
    "born": "1955",
    "died": "1995",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/olhazar-bibulatov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/olhazar-bibulatov.webp?v=4",
        "caption": "Olhazar Bibulatov (1955–1995)"
      }
    ],
    "summary": "8 Mart 1955’te Katır-Yurt köyünde doğdu, Naşho taypına mensuptu ve şehit Ruslan Bibulatov’un babasıydı. Birinci Rus-Çeçen Savaşı’nda Katır-Yurt müfrezesi komutanı ve bölge komutanı olarak görev yaptı.",
    "bio": [
      "8 Mart 1955’te Katır-Yurt köyünde doğdu, Naşho taypına mensuptu ve şehit Ruslan Bibulatov’un babasıydı. Birinci Rus-Çeçen Savaşı’nda Katır-Yurt müfrezesi komutanı ve bölge komutanı olarak görev yaptı.",
      "31 Aralık 1994 yılbaşı hücumunda başkent Cahar’da Başkanlık Sarayı ve Kavkaz Oteli’ni savundu. Bamut, Yandi-Kotar ve Aşhoy-Kotar cephelerinde güneybatı direniş hattının ön saflarında çarpıştı. 11 Haziran 1995’te Zonah köyü yakınlarında Rus zırhlı kolonunu imha ederken şehit düştü."
    ]
  },
  {
    "slug": "arsen-mejidov",
    "name": "Arsen Mejidov",
    "born": "1984",
    "died": "2004",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/arsen-mejidov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/arsen-mejidov.webp?v=4",
        "caption": "Arsen Mejidov (1984–2004)"
      }
    ],
    "summary": "1984 yılında Çeçenistan’ın Açhoy-Martan şehrinde doğdu ve imanlı bir ailede yetişti. İkinci Rus-Çeçen Savaşı başladığında henüz on altı yaşındayken silahlanarak cepheye çıktı.",
    "bio": [
      "1984 yılında Çeçenistan’ın Açhoy-Martan şehrinde doğdu ve imanlı bir ailede yetişti. İkinci Rus-Çeçen Savaşı başladığında henüz on altı yaşındayken silahlanarak cepheye çıktı.",
      "Dört yıl boyunca Açhoy-Martan ve Batı Cephesi dağlarında Rus işgalcilere karşı savaştı. Genç yaşına rağmen çetin kış şartlarında ve kuşatmalarda büyük bir cesaret örneği sergiledi. 23 Şubat 2004 sürgün yıl dönümünde yirmi yaşında çarpışarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "kazbek-gisnurkayev",
    "name": "Kazbek Gişnurkayev",
    "born": "1982",
    "died": "2002",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/kazbek-gisnurkayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/kazbek-gisnurkayev.webp?v=4",
        "caption": "Kazbek Gişnurkayev (1982–2002)"
      }
    ],
    "summary": "1982 yılında Çeçenistan’ın direniş kalesi Açhoy-Martan’da dünyaya geldi ve büyüdü. İkinci Rus-Çeçen Savaşı’nın ilk günlerinden itibaren genç yoldaşlarıyla cihad saflarına katıldı.",
    "bio": [
      "1982 yılında Çeçenistan’ın direniş kalesi Açhoy-Martan’da dünyaya geldi ve büyüdü. İkinci Rus-Çeçen Savaşı’nın ilk günlerinden itibaren genç yoldaşlarıyla cihad saflarına katıldı.",
      "Açhoy-Martan sektöründeki direniş birliklerinde omuz omuza işgalci Rus ordusuna karşı vuruştu. Silah arkadaşlarıyla birlikte vatan topraklarının özgürlüğü için hiçbir fedakârlıktan kaçınmadı. 2002 yılında henüz yirmi yaşındayken Rus işgalcilerle çatışmada şehit düştü."
    ]
  },
  {
    "slug": "muhammed-guluyev",
    "name": "Muhammed Guluyev",
    "born": "1977",
    "died": "2002",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/muhammed-guluyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muhammed-guluyev.webp?v=4",
        "caption": "Muhammed Guluyev (1977–2002)"
      }
    ],
    "summary": "1977 yılında Tsa-Vedeno’da doğdu, dokuz yaşında hafız oldu ve ‘Ustaz Muhammed’ lakabıyla tanındı. 1994’te on yedi yaşında cepheye çıktı, şehit cumhurbaşkanı Abdul-Halim Sadulayev’in talebesiydi.",
    "bio": [
      "1977 yılında Tsa-Vedeno’da doğdu, dokuz yaşında hafız oldu ve ‘Ustaz Muhammed’ lakabıyla tanındı. 1994’te on yedi yaşında cepheye çıktı, şehit cumhurbaşkanı Abdul-Halim Sadulayev’in talebesiydi.",
      "1997–1998 yıllarında Şeriat mahkemelerinde görev yaptı, vaazları ve Kur’an tilavetiyle gençleri eğitti. 2000’de ağır yaralanıp tedavi görmesine rağmen rahatı seçmeyip Argun Cemaati saflarına geri döndü. 7 Ocak 2002’de Argun’da yoldaşlarını korumak için el bombasıyla geride kalarak şehit düştü."
    ]
  },
  {
    "slug": "ismail-eskiyev",
    "name": "İsmail Eskiyev",
    "born": "1973",
    "died": "2003",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/ismail-eskiyev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/ismail-eskiyev.webp?v=4",
        "caption": "İsmail Eskiyev (1973–2003)"
      }
    ],
    "summary": "1973 yılında Argun’da doğdu, Çermoy taypına mensuptu ve direnişte ‘Emir Salah’ diye tanındı. Ağustos 1996 Cihad Harekâtı’nda ve Cundullah İslam Tugayı bünyesinde Rus işgalcilere karşı çarpıştı.",
    "bio": [
      "1973 yılında Argun’da doğdu, Çermoy taypına mensuptu ve direnişte ‘Emir Salah’ diye tanındı. Ağustos 1996 Cihad Harekâtı’nda ve Cundullah İslam Tugayı bünyesinde Rus işgalcilere karşı çarpıştı.",
      "Şubat 2000 Cahar çıkışında eşi Meryem’i bombardımana karşı siper ederken bir elini kaybetti. Ocak 2002’de başından vurulup geçici körlük yaşasa da iyileşip Argun sektörü komutanlığını üstlendi. 30 Temmuz 2003’te Argun’da kuşatıldığı evde teslim olmayıp çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "apti-takayev",
    "name": "Apti Takayev",
    "born": "1968",
    "died": "1995",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/apti-takayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/apti-takayev.webp?v=4",
        "caption": "Apti Takayev (1968–1995)"
      }
    ],
    "summary": "1968 yılında Urus-Martan’da doğdu, Gendargenoy taypına mensup yiğit bir Çeçen komutan olarak yetişti. Çeçen İçkerya Cumhuriyeti Başkanlık Muhafızları Özel Kuvvetler Birliği Komutanlığı görevini yürüttü.",
    "bio": [
      "1968 yılında Urus-Martan’da doğdu, Gendargenoy taypına mensup yiğit bir Çeçen komutan olarak yetişti. Çeçen İçkerya Cumhuriyeti Başkanlık Muhafızları Özel Kuvvetler Birliği Komutanlığı görevini yürüttü.",
      "İlk cumhurbaşkanı Cahar Dudayev’in sadık bir silah arkadaşı olarak başkent Cahar savunmasına katıldı. 1994–1995 kışında başkent Cahar’ın en tehlikeli cephe hatlarında savaşçılarına bizzat öncülük etti. 1 Ocak 1995’te Cahar sokaklarında Rus zırhlılarına karşı çarpışırken kahramanca şehit düştü."
    ]
  },
  {
    "slug": "idris-bakarov",
    "name": "İdris Bakarov",
    "born": "1964",
    "died": "1999",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/idris-bakarov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/idris-bakarov.webp?v=4",
        "caption": "İdris Bakarov (1964–1999)"
      }
    ],
    "summary": "1964 yılında Vedeno’nun Mahketı köyünde doğdu ve Çeçenistan’ın köklü Haraçoy taypına mensuptu. İslami ahlakı, cesareti ve bilgeliğiyle halkı arasında büyük bir saygı ve itibar kazandı.",
    "bio": [
      "1964 yılında Vedeno’nun Mahketı köyünde doğdu ve Çeçenistan’ın köklü Haraçoy taypına mensuptu. İslami ahlakı, cesareti ve bilgeliğiyle halkı arasında büyük bir saygı ve itibar kazandı.",
      "Belgatoy köyü emiri olarak toplumun manevi birliğini ve kardeşlik hukukunu omuzladı. Rus işgaline karşı Çeçen halkının özgürlük ve iman mücadelesinde öncü bir lider olarak yer aldı. 1999 yılında vatan ve iman uğrunda yürüttüğü cihadda kahramanca şehit düştü."
    ]
  },
  {
    "slug": "timur-aslambekov",
    "name": "Timur Aslambekov",
    "born": "1981",
    "died": "2005",
    "title": "Çeçen direniş komutanı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/timur-aslambekov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/timur-aslambekov.webp?v=4",
        "caption": "Timur Aslambekov (1981–2005)"
      }
    ],
    "summary": "1981 yılında başkent Cahar’da büyüdü ve direniş saflarında ‘Kartal’ savaş lakabıyla tanındı. On yedi yaşında direnişe katıldı, Emir Hattab’ın eğitim kampında uzman RPG nişancısı olarak yetişti.",
    "bio": [
      "1981 yılında başkent Cahar’da büyüdü ve direniş saflarında ‘Kartal’ savaş lakabıyla tanındı. On yedi yaşında direnişe katıldı, Emir Hattab’ın eğitim kampında uzman RPG nişancısı olarak yetişti.",
      "İki kez yakalanıp ağır işkenceler görmesine rağmen üçüncü kez canlı yakalanmamaya yemin etti. Emir Musa Madayev Cemaati saflarında başkent Cahar’daki işgalcilere karşı operasyonlara katıldı. 11 Ekim 2005’te Cahar Mayakovski’de eşiyle birlikte son nefesine dek çarpışarak şehit düştü."
    ]
  },
  {
    "slug": "muhammed-tagirov",
    "name": "Muhammed Tagirov",
    "born": "1977",
    "died": "2001",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/muhammed-tagirov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muhammed-tagirov.webp?v=4",
        "caption": "Muhammed Tagirov (1977–2001)"
      }
    ],
    "summary": "1977 yılında başkent Cahar’ın Staraya Sunja beldesinde doğdu ve imanlı bir genç olarak yetişti. İkinci Rus-Çeçen Savaşı başladığında vatan topraklarını savunmak üzere cihad saflarına katıldı.",
    "bio": [
      "1977 yılında başkent Cahar’ın Staraya Sunja beldesinde doğdu ve imanlı bir genç olarak yetişti. İkinci Rus-Çeçen Savaşı başladığında vatan topraklarını savunmak üzere cihad saflarına katıldı.",
      "Staraya Sunja ve Argun direniş hatlarında mücahid kardeşleriyle omuz omuza işgalcilere karşı vuruştu. Kuşatma altındaki şehirlerde yürüttüğü cesur baskınlarla Rus birliklerine kayıplar verdirdi. 8 Kasım 2001’de Argun’da Rus işgal güçleriyle çıkan çatışmada kahramanca şehit düştü."
    ]
  },
  {
    "slug": "zelim-elmurzayev",
    "name": "Zelim Elmurzayev",
    "born": "1979",
    "died": "2004",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/zelim-elmurzayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/zelim-elmurzayev.webp?v=4",
        "caption": "Zelim Elmurzayev (1979–2004)"
      }
    ],
    "summary": "1979 yılında Urus-Martan şehrinde doğdu, gözü pek cesareti ve atılgan karakteriyle tanındı. İkinci Rus-Çeçen Savaşı’nda halkını ve vatan topraklarını savunmak için silaha sarıldı.",
    "bio": [
      "1979 yılında Urus-Martan şehrinde doğdu, gözü pek cesareti ve atılgan karakteriyle tanındı. İkinci Rus-Çeçen Savaşı’nda halkını ve vatan topraklarını savunmak için silaha sarıldı.",
      "Urus-Martan ve başkent Cahar sektörlerindeki direniş hücrelerinde işgalcilere karşı mücadele etti. 16 Ocak 2004’te Cahar’ın Katayama bölgesinde Rus işgal güçleriyle yakın mesafeden çatışmaya girdi. Tabancasıyla işgalcileri vurup son mermisine dek direnerek kahramanca şehit düştü."
    ]
  },
  {
    "slug": "islam-lecayev",
    "name": "İslam Leçayev",
    "born": "1984",
    "died": "2002",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/islam-lecayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/islam-lecayev.webp?v=4",
        "caption": "İslam Leçayev (1984–2002)"
      }
    ],
    "summary": "1984 yılında Çeçenistan’da doğdu, direniş saflarında ‘Sayf-İslam’ savaş lakabıyla tanındı. Henüz on sekiz yaşındayken Muhammed-Said Cansayev ve Bilal Halidov ile omuz omuza savaştı.",
    "bio": [
      "1984 yılında Çeçenistan’da doğdu, direniş saflarında ‘Sayf-İslam’ savaş lakabıyla tanındı. Henüz on sekiz yaşındayken Muhammed-Said Cansayev ve Bilal Halidov ile omuz omuza savaştı.",
      "Savaş meydanında keskin bir kılıç kadar cesur, dost meclisinde ise son derece mütevazıydı. Genç yaşına rağmen ağır sorumluluklar üstlenerek işgalci Rus birliklerine karşı çarpıştı. 2002 yılında on sekiz yaşındayken son mermisine kadar çarpışarak kahramanca şehit düştü."
    ]
  },
  {
    "slug": "muhammed-denilhanov",
    "name": "Muhammed Denilhanov",
    "born": "1974",
    "died": "2000",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/muhammed-denilhanov.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/muhammed-denilhanov.webp?v=4",
        "caption": "Muhammed Denilhanov (1974–2000)"
      }
    ],
    "summary": "1974 yılında Alhan-Yurt köyünde doğdu, Kurşlo taypına mensuptu ve ‘Madi’ lakabıyla tanındı. Her iki Rus-Çeçen Savaşı’nda da vatan topraklarını işgalcilere karşı savunan yiğitlerdendi.",
    "bio": [
      "1974 yılında Alhan-Yurt köyünde doğdu, Kurşlo taypına mensuptu ve ‘Madi’ lakabıyla tanındı. Her iki Rus-Çeçen Savaşı’nda da vatan topraklarını işgalcilere karşı savunan yiğitlerdendi.",
      "Mart 2000’de kuşatma altındaki Saadi-Kotar köyüne girerken Rus hava indirme birlikleriyle çarpıştı. Çatışmada bir gözünü kaybetmesine ve ağır yaralanmasına rağmen silahını bırakmayıp direnişi sürdürdü. Tek gözüyle dört saat boyunca çarpıştıktan sonra Saadi-Kotar’da kahramanca şehit düştü."
    ]
  },
  {
    "slug": "arsen-tsumayev",
    "name": "Arsen Tsumayev",
    "born": "1981",
    "died": "2004",
    "title": "Çeçen bağımsızlık mücadelesi neferi",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/arsen-tsumayev.webp?v=4",
    "gallery": [
      {
        "src": "/images/people/arsen-tsumayev.webp?v=4",
        "caption": "Arsen Tsumayev (1981–2004)"
      }
    ],
    "summary": "1981 yılında Çeçenistan’ın Açhoy-Martan bölgesinde doğdu ve yurtsever bir ailede yetişti. İkinci Rus-Çeçen Savaşı’nda genç yaşta direniş saflarına katılarak silahlı mücadeleye başladı.",
    "bio": [
      "1981 yılında Çeçenistan’ın Açhoy-Martan bölgesinde doğdu ve yurtsever bir ailede yetişti. İkinci Rus-Çeçen Savaşı’nda genç yaşta direniş saflarına katılarak silahlı mücadeleye başladı.",
      "Açhoy-Martan ve Batı Cephesi birimlerinde mücahid kardeşleriyle omuz omuza işgalcilere karşı vuruştu. Zorlu kuşatma ve kış şartlarında sarsılmaz imanı ve tebessümüyle yoldaşlarına moral kaynağı oldu. 2004 yılında Açhoy-Martan’da Rus işgal güçleriyle çatışmada kahramanca şehit düştü."
    ]
  }
];

export const getPerson = (slug: string) => PEOPLE.find((p) => p.slug === slug);

/* ------------------------------------------------------------------ */
/* ARŞİV (47 Doğrulanmış Birincil Tarihsel Kaynak)                     */
/* ------------------------------------------------------------------ */

export type DocType = "el-yazmasi" | "fotograf" | "harita" | "resmi-belge" | "kitap";

export type ArchiveDoc = {
  slug: string;
  title: string;
  type: DocType;
  year: number;
  dateLabel: string;
  era: Era;
  region: string;
  language: string;
  author?: string;
  source: string;
  sourceUrl: string;
  catalogNo: string;
  image: string;
  description: string;
  transcription?: string;
  translation?: string;
  notes?: string;
};

export const DOCS: ArchiveDoc[] = [
  /* ===================== EL YAZMALARI & EPİGRAFİ (7) ===================== */
  {
    slug: "zumsoy-epigrafik-tas-yaziti",
    title: "Zumsoy Vadisi Erken Dönem Vaynah Epigrafik Taş Kitabesi",
    type: "el-yazmasi",
    year: 1650,
    dateLabel: "XVI–XVII. Yüzyıl (Zumsoy)",
    era: "imamet",
    region: "Çeçenya (İtum-Kale – Zumsoy Vadisi)",
    language: "Erken Nah Epigrafisi (Asomtavruli / Nushuri Harfli)",
    author: "Zumsoy Taş Ustaları",
    source: "Çeçenya Arkeoloji ve Epigrafi Saha Koleksiyonu (Wikimedia Commons)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Zumsoy%27s_letters.jpg",
    catalogNo: "ZMS-EP-1650-001",
    image: "/images/archive/zumsoy-epigrafik-tas-yaziti.jpg",
    description:
      "Yukarı Argun havzasının sarp kollarından Zumsoy vadisinde kule duvarı taşına kazınmış erken dönem epigrafik yazıt. İslamlaşma öncesi ve erken modern geçiş asırlarında Güney-Kuzey Kafkasya kültür temaslarıyla taş bloklara işlenen nadir Vaynah yazı örneklerindendir.",
    notes:
      "Yontma kumtaşı/kireçtaşı blok üzerinde keski ile açılmış derin oluklu harf dizisi; dağ iklimi altında doğal patinasını korumuştur.",
  },
  {
    slug: "himoy-kule-kemeri-petroglif-yaziti",
    title: "Himoy Konut Kulesi Giriş Kemeri Güneş ve Çarkıfelek Petroglif Taşı",
    type: "el-yazmasi",
    year: 1720,
    dateLabel: "XVIII. Yüzyıl Başı (Himoy, Şaroy)",
    era: "imamet",
    region: "Çeçenya (Şaroy – Himoy)",
    language: "Vaynah Mimari Tamga ve Petroglif Sistemi",
    author: "Şaroy-Himoy Kule Ustası",
    source: "Şaroy Tarihsel-Mimari Kompleksi Saha Belgelemesi (Wikimedia Commons)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%9B%D0%B5%D0%B2%D1%8B%D0%B9_%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B8%D0%B9_%D1%83%D0%B3%D0%BE%D0%BB_%D0%B0%D1%80%D0%BA%D0%B8,_%D0%B2%D1%85%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BF%D1%80%D0%BE%D0%B5%D0%BC%D0%B0_%D0%BD%D0%B0%D0%B4_%D0%B2%D1%85%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9_%D0%B4%D0%B2%D0%B5%D1%80%D1%8C%D1%8E_%D0%B6%D0%B8%D0%BB%D0%BE%D0%B9_%D0%B1%D0%B0%D1%88%D0%BD%D0%B8_%D0%B2_%D1%81._%D0%A5%D0%B8%D0%BC%D0%BE%D0%B9_%D0%A7%D0%B5%D1%87%D0%BD%D1%8F.jpg",
    catalogNo: "HMY-PT-1720-002",
    image: "/images/archive/himoy-kule-kemeri-petroglif-yaziti.jpg",
    description:
      "Şaroy bölgesindeki tarihi Himoy köyünde bir konut kulesinin (gala) kemerli kapı açıklığının sol üst köşe taşına simetrik olarak kazınmış döner güneş (çarkıfelek) petroglifleri. Vaynah kule mimarisinde kapı eşiğinin ve aile ocağının dokunulmazlığını simgeleyen kadim taş işaretlerindendir.",
    notes:
      "Tek parça kemer söve taşında kabartma çerçeve içine alınmış çift güneş çarkı motifi; V. İ. Markovin'in Kuzey Kafkasya petroglif tipolojisiyle birebir örtüşür.",
  },
  {
    slug: "imamet-askeri-surasi-protokolu-1832",
    title: "Kuzey Kafkasya İmameti Askeri Şûra Protokolü — Üç Mühürlü Arapça El Yazması",
    type: "el-yazmasi",
    year: 1832,
    dateLabel: "Receb 1248 / 1250 H. (1832–1834)",
    era: "imamet",
    region: "Dağıstan – Çeçenya",
    language: "Arapça (Kafkas Neshi)",
    author: "Kuzey Kafkasya İmameti Askeri İdare Heyeti",
    source: "Dağıstan Ulusal Müzesi — Kuzey Kafkasya İmameti Yazma Fonu",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB_%D0%B2%D0%BE%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0_%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BE-%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B8%D0%BC%D0%B0%D0%BC%D0%B0%D1%82%D0%B0.jpg",
    catalogNo: "DNM-MS-1832-004",
    image: "/images/archive/imamet-askeri-surasi-protokolu-1832.jpg",
    description:
      "İmam Gazi Muhammed dönemi askeri idare üyelerinin ve komutanların bir araya gelerek Şamil'in askeri işlerin yürütülmesinde yardımcı tayin edilmesini, kıtaların tertibini ve erzak taksimini karara bağladıkları üç ıslak mühürlü Arapça şûra protokolü.",
    transcription:
      "لا حول ولا قوة إلا بالله العلي العظيم\nنحن القواد وأعضاء الإدارة الحربية اجتمعنا بإذن الإمام غازي محمد في أول رجب... للمشاورة بخصوص تعيين المعاون له في الأمور الحربية وإجرائها، ثم اتفقت آراؤنا... وفوضنا إليه ترتيب العساكر وتقسيم الأرزاق بينهم وجمع الميرة والأموال وغيرها من كل ما يحتاج إليه العساكر.\nولتصديقه ختمنا خواتيمنا.",
    translation:
      "Yüce ve Azîm olan Allah'tan başka güç ve kudret yoktur.\nBiz komutanlar ve askeri idare üyeleri, İmam Gazi Muhammed'in izniyle Receb ayının başında askeri işlerin yürütülmesinde kendisine yardımcı tayin edilmesi hususunu istişare etmek üzere toplandık. Görüşlerimiz tam bir ittifakla birleşti; askerlerin tertibi, aralarındaki erzak taksimi, zahire ve mali kaynakların toplanması ile ordunun ihtiyaç duyduğu sair işleri kendisine tefviz ettik.\nBunu tasdik etmek üzere mühürlerimizi bastık.",
    notes:
      "El yapımı kalın sarımtırak kâğıt üzerine kahverengi-siyah demir mazı mürekkebi; alt kısımda üç adet kare ve dairevi komutan mührü açıkça seçilmektedir.",
  },
  {
    slug: "lermontov-valerik-el-yazmasi-1840",
    title: "11 Temmuz 1840 Valerik Muharebesi Tanıklığı — M. Y. Lermontov'un Orijinal El Yazması",
    type: "el-yazmasi",
    year: 1840,
    dateLabel: "Temmuz 1840",
    era: "imamet",
    region: "Çeçenya (Valerik Irmağı – Achhoy-Martan)",
    language: "Rusça (1840 El Yazısı İmlası)",
    author: "Mihail Yuryeviç Lermontov (1814–1841)",
    source: "Rusya Bilimler Akademisi Rus Edebiyatı Enstitüsü (Puşkin Evi / İRLİ RAN)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%90%D0%B2%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D1%81%D1%82%D0%B8%D1%85%D0%BE%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%B8%D1%8F_%D0%9B%D0%B5%D1%80%D0%BC%D0%BE%D0%BD%D1%82%D0%BE%D0%B2%D0%B0_%C2%AB%D0%92%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D0%BA%C2%BB.jpg",
    catalogNo: "IRLI-MS-1840-011",
    image: "/images/archive/lermontov-valerik-el-yazmasi-1840.jpg",
    description:
      "General Galafeyev müfrezesinde Teğmen olarak Küçük Çeçenya seferine katılan şair Mihail Lermontov'un, 11 Temmuz 1840'ta Gehi ormanları içindeki Valerik Çayı kıyısında Naib Ahverdi Muhammed ve İsa Gendargeno komutasındaki Çeçen savaşçılarla yaşanan kanlı çarpışmayı hemen muharebe sonrasında kaleme aldığı otograf el yazması.",
    transcription:
      "Я къ вамъ пишу случайно; право\nНе знаю какъ и для чего...\nА геній смерти не жалѣлъ!\nИ мѣсто битвы покрывалось\nКоврами тѣлъ... Валерикъ — Рѣчка смерти.",
    translation:
      "Size tesadüfen yazıyorum; doğrusu\nNasıl ve niçin olduğunu bilmeden...\nVe ölüm meleği hiç acımadı!\nSavaş meydanı örtüldü bedenlerle...\nYerli dilinde 'Ölüm Irmağı' dedikleri Valerik kıyısında.",
    notes:
      "Yazarın kendi düzeltme ve karalamalarını içeren 1840 tarihli mürekkepli çalışma yaprağı; Rus edebiyatında Çeçenya'daki savaşın anlamsızlığını ve Çeçen savaşçıların ölümüne cesaretini kayda geçiren en erken birincil edebi tanıklıktır.",
  },
  {
    slug: "imam-samil-naib-isa-mektubu-1842",
    title: "İmam Şamil'den Çeçen Naibi İsa Gendargenoyevski'ye Arapça Mektup (1842)",
    type: "el-yazmasi",
    year: 1842,
    dateLabel: "1842 (1258 H.)",
    era: "imamet",
    region: "Çeçenya (Urus-Martan – Büyük ve Küçük Çeçenya)",
    language: "Arapça (Kafkas Divan Neshi)",
    author: "İmam Şamil (Şemvil)",
    source: "Kuzey Kafkasya İmameti Divan Yazışmaları Koleksiyonu (Wikimedia Commons)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%A8%D0%B0%D0%BC%D0%B8%D0%BB%D1%8F_%D0%BD%D0%B0%D0%B8%D0%B1%D1%83_%D0%98%D1%81%D0%B5.jpg",
    catalogNo: "CAU-MS-1842-017",
    image: "/images/archive/imam-samil-naib-isa-mektubu-1842.jpg",
    description:
      "İmam Şamil'in 1840 genel Çeçenya biatında kilit rol oynayan Urus-Martanlı büyük Çeçen komutanı Naib İsa Gendargenoyevski'ye ('Min Şemvîl ilâ ahîhi Îsâ en-Nâib' başlığıyla) gönderdiği Arapça resmi mektup. Vilayetteki müridlerin ve halkın idaresinde şûradan ayrılmamayı, kimseye ağır yük yüklememeyi ve birlik düzenini korumayı öğütler.",
    transcription:
      "من شمويل إلى أخيه عيسى النائب\nالسلام عليكم ورحمة الله\nأما بعد، فقد أتاني جميع المريدين من ولايتك ولم أجبهم إلا ما أجبت نعم خان... فلا يخطر ببالكم شيء ما في حقهم ولا نكلف المريدين كالذرة... ولا نخلي مشاورتكم عنهم...",
    translation:
      "Şemvil'den [İmam Şamil'den] kardeşi Naib İsa'ya;\nAllah'ın selâmı ve rahmeti üzerinize olsun.\nBundan sonra: Vilayetinden müridlerin tamamı yanıma geldi; onlara Naim Han'a verdiğim cevaptan başkasını vermedim. Onlar hakkında gönlünüze hiçbir şüphe gelmesin; müridlere zerre miktarı dahi güçlerinin üstünde külfet yüklemeyiz ve sizinle olan istişaremizi onlardan eksik etmeyiz...",
    notes:
      "Dar dikey kesimli İmamet divan kâğıdı üzerine işlek Kafkas neshiyle yazılmıştır; Kuzey Kafkasya İmameti'nde Çeçen naiplerle merkezi divan arasındaki Arapça resmi yazışma ağının en berrak örneklerindendir.",
  },
  {
    slug: "imam-samil-nisanlari-arapca-yazitli",
    title: "İmamet Devleti Gümüş Savatlı Liyakat Nişanları ve Arapça Hakkâklık Kitabeleri",
    type: "el-yazmasi",
    year: 1847,
    dateLabel: "1845–1855 (1261–1271 H.)",
    era: "imamet",
    region: "Çeçenya (Vedeno) – Dağıstan",
    language: "Arapça (Gümüş Üzerine Savatlı Hakkâklık)",
    author: "Vedeno ve Kubaçi İmamet Darphane Ustaları",
    source: "Devlet Tarih Müzesi (GİM, Moskova) — İmamet Nişanları Koleksiyonu",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%9E%D1%80%D0%B4%D0%B5%D0%BD%D0%B0_%D0%98%D0%BC%D0%B0%D0%BC%D0%B0%D1%82%D0%B0_%D0%A8%D0%B0%D0%BC%D0%B8%D0%BB%D1%8F.jpg",
    catalogNo: "GIM-EP-1847-023",
    image: "/images/archive/imam-samil-nisanlari-arapca-yazitli.jpg",
    description:
      "Başkent Vedeno döneminde İmam Şamil tarafından ihdas edilip Baysangur Benoyski, Şalili Talhig ve Atabay Ataginski gibi seçkin naiplere ve savaşçılara tevcih edilen savatlı (niello) gümüş liyakat nişanları. Her madalyonun merkezinde Arapça yiğitlik ve adalet beyitleri kazılıdır.",
    transcription:
      "لا فتى إلا علي لا سيف إلا ذو الفقار\nمن يفكر في العواقب لم يكن شجاعاً\nهذا نيشان الشجاعة والبسالة",
    translation:
      "Ali gibi yiğit, Zülfikâr gibi kılıç yoktur.\nAkıbetini (korkusunu) düşünen kimse cesur olamaz.\nBu, yiğitlik ve kahramanlık nişanıdır.",
    notes:
      "Gümüş, altın yaldız ve Kafkas savatı (чернение); yıldız, hilal ve dairevi rozet formlarında dövme ve kalem işi.",
  },
  {
    slug: "gucan-kale-mimari-rolove-cizimi-1960",
    title: "Guçan-Kale Kulesi El Çizimi Mimari Rölöve, Kesit ve Ölçüm Paftası (1960)",
    type: "el-yazmasi",
    year: 1960,
    dateLabel: "1958–1960 (Argun Havzası)",
    era: "yakin",
    region: "Çeçenya (Yukarı Argun – İtum-Kale)",
    language: "Rusça / Mimari Ölçekli El Çizimi",
    author: "Kuzey Kafkasya Arkeoloji Keşif Heyeti (V. İ. Markovin Ekibi)",
    source: "Kuzey Kafkasya Dağ Mimarisi Arkeolojik Rölöve Arşivi (Wikimedia Commons)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%91%D0%B0%D1%88%D0%BD%D1%8F_%D0%B3%D1%83%D1%87%D0%B0%D0%BD_%D0%BA%D0%B0%D0%BB%D0%B5.jpg",
    catalogNo: "NKA-MS-1960-046",
    image: "/images/archive/gucan-kale-mimari-rolove-cizimi-1960.jpg",
    description:
      "1957 sürgün dönüşünün hemen ardından Çeçenya'nın dağlık Argun havzasında başlatılan arkeolojik envanter çalışmalarında, Guçan-Kale kulesinin taş dizilimini, mazgal pencerelerini, kemer açıklıklarını ve kat kesitlerini milimetrik olarak belgeleyen çini mürekkepli orijinal saha rölöve paftası.",
    notes:
      "Milimetrik ölçek çubuklu çini mürekkep saha çizimi; 1990'lardaki çatışmalarda ağır hasar gören dağ kulelerinin restorasyonu için birincil teknik referans niteliğindedir.",
  },

  /* ===================== HARİTALAR (9) ===================== */
  {
    slug: "sheikh-mansur-1787-winkler-harita-gravuru",
    title: "J. Chr. Winkler'in Ekim 1787 Kuzey Kafkasya Cephe Haritası Kartuşu ve Şeyh Mansur Tasviri",
    type: "harita",
    year: 1787,
    dateLabel: "Ekim 1787",
    era: "imamet",
    region: "Kuzey Kafkasya (Kuban – Sunja – Terek)",
    language: "Almanca",
    author: "Johann Christoph Winkler (Bakır Baskı Haritacı)",
    source: "Avrupa Bakır Baskı Tarih ve Kartografya Koleksiyonu (1787)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Portr%C3%A4t_des_%E2%80%9EScheich_Mansur%E2%80%9C.png",
    catalogNo: "WNK-MP-1787-001",
    image: "/images/archive/sheikh-mansur-1787-winkler-harita-gravuru.png",
    description:
      "1–10 Ekim 1787 tarihlerinde Kuzey Kafkasya'da Rus birlikleri ile Şeyh Mansur komutasındaki Kafkas kuvvetleri arasındaki harekât sahasını gösteren Almanca bakır baskı askeri harita paftasının ('Carte der am 1ten bis 10ten Oct. 1787...') özgün portre kartuşu. Aldılı Şeyh Mansur'u sağlığında Avrupa kamuoyuna tanıtan çağdaş birincil baskılardandır.",
    transcription:
      "Carte Der am 1ten bis 10ten Oct. 1787 zwischen den Russen und dem Scheich Mansur vorgefallenen Actionen im Nord-Kaukasus. — Porträt des „Scheich Mansur“.",
    translation:
      "1–10 Ekim 1787 tarihlerinde Kuzey Kafkasya'da Ruslar ile Şeyh Mansur arasında vuku bulan muharebelerin haritası. — 'Şeyh Mansur'un Tasviri.",
    notes:
      "El boyamalı bakır gravür (Kupferstich) harita detayı, 1787 sonbaharı.",
  },
  {
    slug: "dubois-kafkasya-genel-haritasi-1843",
    title: "Frédéric Dubois de Montpéreux — Kuzey ve Güney Kafkasya Genel Haritası (1843)",
    type: "harita",
    year: 1843,
    dateLabel: "1843 (Neuchâtel / Paris)",
    era: "imamet",
    region: "Kuzey ve Güney Kafkasya",
    language: "Fransızca",
    author: "Frédéric Dubois de Montpéreux (1798–1850)",
    source: "Voyage autour du Caucase, Atlas Historique et Géographique (Paris, 1843)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Carte_generale_de_la_Crimee_et_des_Pays_situes_au_Sud_et_au_Nord_du_Caucase_-_Dubois_de_Montpereux.jpg",
    catalogNo: "DBM-MP-1843-005",
    image: "/images/archive/dubois-kafkasya-genel-haritasi-1843.jpg",
    description:
      "İsviçreli arkeolog, jeolog ve seyyah Frédéric Dubois de Montpéreux'nün Kafkasya araştırmaları sonucunda yayımladığı 'Voyage autour du Caucase' atlasının genel paftası. Terek, Sunja, Assa ve Argun nehir sistemleri boyunca uzanan Çeçen ('Tchetchentses') ve İnguş ('Ingouches / Kistes') topraklarını Avrupa kartografyasında ayrıntılı biçimde konumlandırır.",
    transcription:
      "CARTE GÉNÉRALE DE LA CRIMÉE ET DES PAYS SITUÉS AU SUD ET AU NORD DU CAUCASE. Dressée et dessinée d'après les matériaux les plus récents par Fréd. Dubois de Montpéreux. 1843.",
    translation:
      "KIRIM VE KAFKASYA'NIN GÜNEYİ İLE KUZEYİNDE YER ALAN ÜLKELERİN GENEL HARİTASI. En güncel malzemelere dayanılarak Fréd. Dubois de Montpéreux tarafından tertip ve tersim edilmiştir. 1843.",
    notes:
      "Taşbaskı ve bakır kazıma büyük boy atlas paftası; nehir havzaları ve dağ silsileleri tarama tekniğiyle işlenmiştir.",
  },
  {
    slug: "kucuk-cecenya-askeri-topografya-haritasi-1848",
    title: "Vladikavkaz Askeri Dairesi ve Küçük Çeçenya Topografya Haritası (1847–1848)",
    type: "harita",
    year: 1848,
    dateLabel: "1847–1848",
    era: "imamet",
    region: "Küçük Çeçenya – İnguşetya (Vladikavkaz – Nazran – Sunja – Argun)",
    language: "Rusça (Eski İmla)",
    author: "Müstakil Kafkas Kolordusu Kurmay Topografya Şubesi",
    source: "Kafkas Bölgesi 1847/48 Askeri Topografya Haritası Koleksiyonu",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%B0%D1%80%D1%82%D0%B0_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%92%D0%BE%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D0%9E%D0%BA%D1%80%D1%83%D0%B3%D0%B0_%D0%B8_%D0%9C%D0%B0%D0%BB%D0%BE%D0%B9_%D0%A7%D0%B5%D1%87%D0%BD%D0%B8.jpg",
    catalogNo: "VVO-MP-1848-009",
    image: "/images/archive/kucuk-cecenya-askeri-topografya-haritasi-1848.jpg",
    description:
      "Kafkas Savaşı'nın zirve yıllarında hazırlanan bu yüksek ayrıntılı kurmay paftası; Vladikavkaz, Nazran, Assa, Fortanga, Martan, Valerik, Gehi, Urus-Martan, Aldı ve Grozni Kalesi arasındaki tüm tarihi Çeçen ve İnguş köylerini, orman kuşaklarını, dağ geçitlerini ve Rus tahkimat hatlarını köy köy kayıt altına alır.",
    transcription:
      "КАРТА ВЛАДИКАВКАЗСКАГО ВОЕННАГО ОКРУГА И МАЛОЙ ЧЕЧНИ.\nТопографическая карта Кавказскаго края 1847/48 г.",
    translation:
      "VLADİKAVKAZ ASKERİ DAİRESİ VE KÜÇÜK ÇEÇENYA HARİTASI.\nKafkas Bölgesi Topografya Haritası, 1847/48 yılı.",
    notes:
      "5213×4276 piksel orijinal taramadan üretilmiş yüksek çözünürlüklü pafta; 1840'larda yakılan veya yeri değiştirilen eski Çeçen-İnguş aullarının tespiti için eşsiz bir birincil kaynaktır.",
  },
  {
    slug: "meyer-dogu-kafkasya-samil-haritasi-1856",
    title: "Joseph Meyer Atlası — İmam Şamil'in Doğu Kafkasya Cephesi Haritası (1856)",
    type: "harita",
    year: 1856,
    dateLabel: "1856 (Hildburghausen)",
    era: "imamet",
    region: "Doğu Kafkasya (Çeçenya – İnguşetya – Dağıstan)",
    language: "Almanca",
    author: "Bibliographisches Institut — Joseph Meyer (1796–1856)",
    source: "David Rumsey Historical Map Collection / Meyers Hand-Atlas (1856)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:East_Caucasus_map_to_illustrate_Imam_Shamil_war.jpg",
    catalogNo: "DRH-MP-1856-014",
    image: "/images/archive/meyer-dogu-kafkasya-samil-haritasi-1856.jpg",
    description:
      "Kırım Savaşı ve İmam Şamil'in Kafkasya mücadelesini takip eden Avrupa araştırmacıları için Joseph Meyer'in ünlü el atlasında yayımlanan renkli sınır çizgili Doğu Kafkasya haritası. Büyük ve Küçük Çeçenya, İçkeriya (Vedeno ve Dargo), Auh ve Dağıstan arasındaki İmamet çekirdek bölgesini net biçimde gösterir.",
    notes:
      "David Rumsey Tarihî Harita Koleksiyonu yüksek çözünürlüklü dijital kopyası; çelik gravür üzerine dönem el renklendirmesi.",
  },
  {
    slug: "berje-cecenya-haritasi-1859",
    title: "Adolf P. Berje'nin Çeçenya ve Çeçen Toplulukları Haritası (1859)",
    type: "harita",
    year: 1859,
    dateLabel: "1859 (Tiflis)",
    era: "imparatorluk",
    region: "Çeçenya (Terek'ten Büyük Kafkas Sırtlarına)",
    language: "Rusça (Eski İmla)",
    author: "Adolf Petroviç Berje (1828–1886)",
    source: "A. P. Berje, 'Çeçenya i Çeçentsı' (Tiflis: Kafkas Arkeografi Komisyonu, 1859)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%B0%D1%80%D1%82%D0%B0_%D0%A7%D0%B5%D1%87%D0%BD%D0%B8,_%D0%B0%D0%B2%D1%82%D0%BE%D1%80_%D0%91%D0%B5%D1%80%D0%B6%D0%B5_%D0%90._%D0%9F.jpg",
    catalogNo: "BRJ-MP-1859-018",
    image: "/images/archive/berje-cecenya-haritasi-1859.jpg",
    description:
      "Kafkas Arkeografi Komisyonu Başkanı şarkiyatçı Adolf Berje'nin 1859 yılında Tiflis'te yayımlanan ünlü 'Çeçenya ve Çeçenler' (Чечня и чеченцы) monografisi için hazırladığı harita. Vedeno ve Gunib'in düşüşü sırasında İçkeriya, Çeberloy, Şatoy, Şaroy, Akki, Galançoj ve Sunja ovalarındaki Çeçen boy/tukhum dağılımını belgeler.",
    transcription:
      "КАРТА ЧЕЧНИ.\nСоставлена А. П. Берже къ сочиненію «Чечня и Чеченцы», Тифлисъ, 1859 г.",
    translation:
      "ÇEÇENYA HARİTASI.\nA. P. Berje tarafından 'Çeçenya ve Çeçenler' eseri için düzenlenmiştir, Tiflis, 1859.",
    notes:
      "19. yüzyıl Çeçen tarihsel coğrafyası üzerine çalışan genç araştırmacılar için en temel birincil kartografik başvuru kaynaklarından biridir.",
  },
  {
    slug: "terskaya-oblast-etnografya-haritasi-1892",
    title: "Terek Vilayeti (Terskaya Oblast) Köy Nahiyeleri ve İdari Sınırlar Haritası (1892)",
    type: "harita",
    year: 1892,
    dateLabel: "1892 (Vladikavkaz)",
    era: "imparatorluk",
    region: "Kuzey Kafkasya (Terek Vilayeti — Çeçenya, İnguşetya, Kabarda, Osetya)",
    language: "Rusça (Eski İmla)",
    author: "Terek Vilayeti İstatistik Komitesi",
    source: "Terskaya Oblast Resmi Kartografya Yayını (Vladikavkaz, 1892)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%B0%D1%80%D1%82%D0%B0_%D0%B2%D0%BE%D0%BB%D0%BE%D1%81%D1%82%D0%B5%D0%B9_%D0%A2%D0%B5%D1%80%D1%81%D0%BA%D0%BE%D0%B9_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8.jpg",
    catalogNo: "TRK-MP-1892-026",
    image: "/images/archive/terskaya-oblast-etnografya-haritasi-1892.jpg",
    description:
      "Çarlık İmparatorluğu'nun Kafkas Savaşı sonrasında kurduğu Terek Vilayeti'nde (Terskaya Oblast) Grozni, Vedeno, Hasavyurt, Sunja ve Vladikavkaz dairelerine (okrug/otdel) bağlı her bir Çeçen ve İnguş köy cemaatinin arazi sınırları ile Kazak stanitsa kuşaklarını renkli lejantla gösteren 1892 tarihli resmi harita.",
    transcription:
      "КАРТА ВОЛОСТЕЙ ТЕРСКОЙ ОБЛАСТИ. 1892 г.",
    translation:
      "TEREK VİLAYETİ NAHİYELER (VOLOST) HARİTASI. 1892 yılı.",
    notes:
      "Toprak gaspı, petrol arazileri ve 1900'lerin başındaki Abrek direnişlerinin sosyo-ekonomik arka planını anlamak açısından kritik önem taşır.",
  },
  {
    slug: "cecen-ingus-assc-idari-haritasi-1937",
    title: "1937 Çeçen-İnguş ÖSSC İdari Taksimat Haritası (Galançoj ve Çeberloy Rayonlarıyla)",
    type: "harita",
    year: 1937,
    dateLabel: "1937",
    era: "sovyet",
    region: "Çeçen-İnguş Özerk Sovyet Sosyalist Cumhuriyeti",
    language: "Rusça",
    author: "Çeçen-İnguş ÖSSC İdari Harita Rekonstrüksiyonu",
    source: "1937 Çeçen-İnguş ÖSSC Rayon Sınırları Kartografik Kaydı (Wikimedia Commons)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%B0%D1%80%D1%82%D0%B0_%D0%A7%D0%B5%D1%87%D0%B5%D0%BD%D0%BE-%D0%98%D0%BD%D0%B3%D1%83%D1%88%D1%81%D0%BA%D0%BE%D0%B9_%D0%90%D0%A1%D0%A1%D0%A0_1937_%D0%B3%D0%BE%D0%B4%D0%B0.svg",
    catalogNo: "CIA-MP-1937-033",
    image: "/images/archive/cecen-ingus-assc-idari-haritasi-1937.png",
    description:
      "5 Aralık 1936'da özerk cumhuriyet statüsüne yükseltilen Çeçen-İnguş ÖSSC'nin 1944 sürgünü öncesindeki 24 idari rayonunu eksiksiz gösteren harita. 1944 sürgününden sonra yerleşime kapatılan tarihi Galançoj, Çeberloy, Şaroy ve İtum-Kale dağ rayonları ile batıdaki Prigorodnı rayonunun özgün sınırlarını belgeler.",
    notes:
      "Sürgün öncesi ve 1957 sonrası idari sınır değişikliklerini karşılaştırmak isteyen araştırmacılar için temel referans paftası.",
  },
  {
    slug: "mercimek-operasyonu-1944-sevk-haritasi",
    title: "23 Şubat 1944 'Mercimek Operasyonu' (Çeçevitsa) Sürgün Hatları Haritası ve NKVD Sevkiyat Raporu",
    type: "harita",
    year: 1944,
    dateLabel: "23 Şubat – Mart 1944",
    era: "sovyet",
    region: "Çeçen-İnguş ÖSSC → Kazakistan ve Kırgızistan SSC",
    language: "İngilizce / Rusça Arşiv Transkripsiyonlu",
    author: "NKVD Sevkiyat Kayıtlarına Dayalı Tarihsel Kartografya (GARF Ф. Р-9401)",
    source: "Rusya Federasyonu Devlet Arşivi (GARF Ф. Р-9401. Оп. 2. Д. 64. Л. 165) & Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Operation_Lentil_(Caucasus).svg",
    catalogNo: "GARF-MP-1944-039",
    image: "/images/archive/mercimek-operasyonu-1944-sevk-haritasi.png",
    description:
      "SSCB Devlet Savunma Komitesi'nin (GKO) 31 Ocak 1944 tarihli 5073ss sayılı gizli kararı uyarınca 23 Şubat 1944 şafağında başlatılan 'Mercimek Operasyonu'nun (Операция «Чечевица») toplanma merkezlerini ve demiryolu sürgün hatlarını gösteren harita; ekinde Lavrenti Beria'nın Stalin'e gönderdiği GARF arşivli 6051 sayılı gizli telgrafın tam metni yer almaktadır.",
    transcription:
      "ГАРФ. Ф. Р-9401. Оп. 2. Д. 64. Л. 165 — Телеграмма № 6051 (Совершенно секретно):\n«Государственный Комитет Обороны — товарищу Сталину. Сегодня, 23 февраля, на рассвете начали операцию по выселению чеченцев и ингушей. Выселение проходит нормально... Из намеченных к изъятию в связи с операцией лиц арестовано 842 человека. На 11 часов утра вывезено из населенных пунктов 94 741 человек, т. е. свыше 20 процентов подлежащих выселению; погружено в железнодорожные эшелоны из этого числа 20 023 человека. — Берия. 23 февраля 1944 г.»\n(Итого отправлено 180 эшелонов — 493 269 чеченцев и ингушей).",
    translation:
      "GARF, Fon R-9401, Opis 2, Dosya 64, Yaprak 165 — Telgraf No. 6051 (Çok Gizli):\n'Devlet Savunma Komitesi — Yoldaş Stalin'e. Bugün, 23 Şubat şafak vakti Çeçenlerin ve İnguşların sürgün edilmesine yönelik operasyonu başlattık. Sevkiyat normal seyrediyor... Operasyon kapsamında tutuklanması öngörülen kişilerden 842 kişi tutuklandı. Sabah saat 11.00 itibarıyla yerleşim yerlerinden 94.741 kişi —yani sürgüne tabi nüfusun yüzde 20'sinden fazlası— çıkarıldı; bunlardan 20.023'ü demiryolu katarlarına yüklendi. — Beria. 23 Şubat 1944.'\n(Operasyon sonunda toplam 180 tren katarıyla 493.269 Çeçen ve İnguş Orta Asya'ya sürülmüştür.)",
    notes:
      "Avrupa Parlamentosu 26 Şubat 2004 tarihli kararıyla 23 Şubat 1944 Çeçen-İnguş sürgününü soykırım eylemi olarak tanımıştır.",
  },
  {
    slug: "grozni-oblasti-1949-tasfiye-haritasi",
    title: "Sürgün Yıllarında Kurulan 'Grozni Oblastı' Taksimat Haritası (1944–1957)",
    type: "harita",
    year: 1957,
    dateLabel: "1944–1957 (Tasfiye Dönemi Haritası)",
    era: "yakin",
    region: "Eski Çeçen-İnguş ÖSSC / Grozni Oblastı",
    language: "Rusça",
    author: "SSCB 1949 İdari Atlas Kayıtlarına Dayalı Harita",
    source: "7 Mart 1944 Tasfiye Kararnamesi Sonrası İdari Sınır Kaydı (Wikimedia Commons)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Map_of_Groznenskaya_Oblast_(1949).svg",
    catalogNo: "GRZ-MP-1957-041",
    image: "/images/archive/grozni-oblasti-1949-tasfiye-haritasi.png",
    description:
      "SSCB Yüksek Sovyet Prezidyumu'nun 7 Mart 1944 tarihli kararnamesiyle Çeçen-İnguş ÖSSC haritadan silindikten sonra kurulan 'Grozni Oblastı'nın 1949 sınırlarını gösteren harita. Vedeno, Sayasan, Çeberloy ve Kızılyurt/Auh hattının Dağıstan'a; İtum-Kale ve Galançoj yüksek dağ kuşağının Gürcistan SSC'ye; Nazran ve Cerah-Targim vadisinin Kuzey Osetya'ya nasıl devredildiğini ve bütün Çeçence-İnguşça yer adlarının Rusçalaştırıldığını belgeler.",
    transcription:
      "Указ Президиума Верховного Совета СССР от 7 марта 1944 г. «О ликвидации Чечено-Ингушской АССР и об административном устройстве ее территории» (Председатель М. Калинин, Секретарь А. Горкин).",
    translation:
      "SSCB Yüksek Sovyet Prezidyumu'nun 7 Mart 1944 tarihli 'Çeçen-İnguş ÖSSC'nin Tasfiyesi ve Topraklarının İdari Düzenlemesi Hakkında' Kararnamesi (Başkan M. Kalinin, Sekreter A. Gorkin).",
    notes:
      "9 Ocak 1957 iade kararnamesi sonrasında cumhuriyet yeniden kurulurken Prigorodnı ve Auh rayonlarının iade edilmemesinin tarihsel-kartografik kökenini açıklar.",
  },

  /* ===================== RESMİ BELGELER (8) ===================== */
  {
    slug: "imam-samil-kirmizi-dag-sancagi",
    title: "Kuzey Kafkasya İmameti Resmi Al Sancağı (Devlet Müzesi Katalog Kaydı)",
    type: "resmi-belge",
    year: 1850,
    dateLabel: "1845–1859",
    era: "imamet",
    region: "Çeçenya – Dağıstan",
    language: "Görsel ve Askeri Devlet Alameti",
    author: "Kuzey Kafkasya İmameti",
    source: "Rusya Federasyonu Devlet Müzesi Katalog Kaydı (Goskatalog No: 19128202)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%97%D0%BD%D0%B0%D0%BC%D1%8F_%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%BE-%D0%B3%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B5,_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5;_%D0%A8%D0%B0%D0%BC%D0%B8%D0%BB%D1%8F.jpg",
    catalogNo: "GK-DOC-1850-012",
    image: "/images/archive/imam-samil-kirmizi-dag-sancagi.jpg",
    description:
      "Kafkas Savaşı sırasında İmam Şamil'e bağlı naiplik kıtalarının taşıdığı, müze envanterine 'Kafkas-dağlı kırmızı Şamil sancağı' başlığıyla kaydedilmiş orijinal İmamet sancağı. 1911–1917 yılları arasında askeri tarih müzesi envanter fotoğraflarında belgelenmiştir.",
    notes:
      "Devlet Müzesi Fonu (Госкаталог РФ № 19128202) arşiv envanter fotoğrafı.",
  },
  {
    slug: "baysangur-idam-emri-kafkas-ordusu-1861",
    title: "Kafkas Ordusu'nun Benoylu Baysangur Hakkındaki 20 Mart 1861 Tarihli Divan-ı Harp ve İdam Emri",
    type: "resmi-belge",
    year: 1861,
    dateLabel: "20 Mart 1861",
    era: "imparatorluk",
    region: "Çeçenya (Benoy – Hasavyurt)",
    language: "Rusça (1917 Öncesi Eski İmla)",
    author: "Kafkas Ordusu Başkomutanı Mareşal Prens A. İ. Baryatinski",
    source: "Kavkazskaya Letopis / Kafkas Ordusu Resmi Emirnameleri (20 Mart 1861)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%B0%D1%8F_%D0%BB%D0%B5%D1%82%D0%BE%D0%BF%D0%B8%D1%81%D1%8C_(3).jpg",
    catalogNo: "KAV-DOC-1861-020",
    image: "/images/archive/baysangur-idam-emri-kafkas-ordusu-1861.jpg",
    description:
      "Ağustos 1859'da Gunib kuşatmasını yararak Çeçenya'ya dönen ve Haziran 1860'ta Benoy'da yeni bir bağımsızlık kıyamı başlatan efsanevi Çeçen Naibi Baysangur Benoyski'nin, yaralı halde esir düştükten sonra Sahra Ceza Kanunları uyarınca idam edilmesini onaylayan Mareşal Prens Baryatinski imzalı 20 Mart 1861 tarihli resmi Kafkas Ordusu emri.",
    transcription:
      "КАВКАЗСКАЯ ЛѢТОПИСЬ.\nПриказы по Кавказской Арміи.\nМарта 20-го дня 1861 года. — Беноевскій житель Байсунгуръ, по суду, произведенному на основаніи Полевыхъ Уголовныхъ Законовъ, оказался виновнымъ: въ измѣнѣ Русскому Правительству, произведеніи возмущенія между Ичкеринцами и другими горцами, съ цѣлію отложиться отъ подданства Россіи, и въ упорномъ сопротивленіи съ оружіемъ въ рукахъ при взятіи его нашими войсками; а потому я конфирмовалъ: подсудимаго Байсунгура «казнить смертію — повѣсить», — о чемъ и объявляю по войскамъ Кавказской Арміи.\nПодлинный подписалъ: Главнокомандующій, Генералъ-Фельдмаршалъ Князь Барятинскій.",
    translation:
      "KAFKAS KRONİĞİ.\nKafkas Ordusu Emirleri.\n20 Mart 1861 günü. — Benoy sakini Baysungur, Sahra Ceza Kanunları uyarınca yapılan yargılama neticesinde; Rus Hükümeti'ne isyan etmek, Rusya tabiiyetinden ayrılmak maksadıyla İçkeriyalılar ve diğer dağlılar arasında ayaklanma çıkarmak ve birliklerimizce ele geçirildiği sırada elde silahla inatçı bir mukavemet göstermekten suçlu bulunmuştur; bu sebeple sanık Baysungur'un 'idam edilerek asılması' hükmünü onayladım ve keyfiyeti Kafkas Ordusu kıtalarına ilan ederim.\nAslını imzalayan: Başkomutan, Mareşal Prens Baryatinski.",
    notes:
      "Dönemin resmi Rus askeri bülteninde yayımlanan bu metin, tek gözü, tek kolu ve tek bacağıyla son nefesine dek elde silahla çarpışan Baysangur'un direnişini bizzat hasmının resmi kalemiyle tescil etmektedir.",
  },
  {
    slug: "daglilar-cumhuriyeti-diplomatik-pasaport-1918",
    title: "Kuzey Kafkasya Dağlıları Birliği Cumhuriyeti Diplomatik Pasaportu (16 Eylül 1918)",
    type: "resmi-belge",
    year: 1918,
    dateLabel: "16 Eylül 1918 (Vladikavkaz)",
    era: "sovyet",
    region: "Kuzey Kafkasya (Vladikavkaz / Buro)",
    language: "Fransızca",
    author: "Dışişleri Bakanı Haydar Bammat İmzalı",
    source: "Kafkasya Dağlı Halkları Birliği Cumhuriyeti Dışişleri Bakanlığı Arşivi (No. 487)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82_%D0%93%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B9_%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8.jpg",
    catalogNo: "MRNC-DOC-1918-028",
    image: "/images/archive/daglilar-cumhuriyeti-diplomatik-pasaport-1918.jpg",
    description:
      "11 Mayıs 1918'de bağımsızlığını ilan eden Kuzey Kafkasya Dağlı Halkları Birliği Cumhuriyeti (République de l'Union des peuples Montagnards du Caucase) Hükümeti adına Dışişleri Bakanı Haydar Bammat tarafından Vladikavkaz'da imzalanıp diplomatik kuryeler Aygunov ve Makayev adına düzenlenen 487 numaralı resmi diplomatik pasaport.",
    transcription:
      "République de l'Union des peuples Montagnards du Caucase\nPASSEPORT DIPLOMATIQUE.\nLe porteur du présent, Monsieurs Aïgounoff et Makajeff se rend d'ici à l'étranger et retourne ensuite à Vladicaucase en courrier porteur de dépêches. En foi de quoi le présent passeport lui a été délivré par le Gouvernement de la République de l'Union des peuples Montagnards du Caucase...\nMinistre des Affaires Étrangères: H. Bammat\n16 Septembre 1918, № 487, Vladicaucase.",
    translation:
      "Kafkasya Dağlı Halkları Birliği Cumhuriyeti\nDİPLOMATİK PASAPORT.\nİşbu belgenin hamili Bay Aygunov ve Bay Makayev, resmi yazışmaları taşıyan diplomatik kurye sıfatıyla yurt dışına gidecek ve ardından Vladikavkaz'a dönecektir. Bunu tevsiken işbu pasaport Kafkasya Dağlı Halkları Birliği Cumhuriyeti Hükümeti tarafından kendilerine verilmiştir...\nDışişleri Bakanı: H. Bammat\n16 Eylül 1918, No. 487, Vladikavkaz.",
    notes:
      "1918 yılında Çeçen, İnguş, Dağıstan, Oset, Kabardey-Çerkes ve Karaçay-Balkar halklarının kurduğu ortak demokratik cumhuriyetin uluslararası hukuk öznesi olarak yürüttüğü diplomasinin birincil kanıtıdır.",
  },
  {
    slug: "tapa-cermoyev-resmi-mektubu-1918",
    title: "Dağlılar Hükümeti Başbakanı Abdülmecid (Tapa) Çermoyev'in 12 Ekim 1918 Tarihli Resmi Yazısı",
    type: "resmi-belge",
    year: 1918,
    dateLabel: "12 Ekim 1918",
    era: "sovyet",
    region: "Kuzey Kafkasya",
    language: "Rusça",
    author: "Başbakan Abdülmecid (Tapa) Çermoyev (1882–1937)",
    source: "Kuzey Kafkasya Dağlıları Cumhuriyeti Bakanlar Kurulu Evrakı (1918)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%A7%D0%B5%D1%80%D0%BC%D0%BE%D0%B5%D0%B2%D0%B0_%D0%91%D0%B8%D1%87%D0%B5%D1%80%D0%B0%D1%85%D0%BE%D0%B2%D1%83.png",
    catalogNo: "MRNC-DOC-1918-029",
    image: "/images/archive/tapa-cermoyev-resmi-mektubu-1918.png",
    description:
      "Çeçen devlet adamı ve Kuzey Kafkasya Dağlıları Cumhuriyeti Başbakanı Abdülmecid (Tapa) Çermoyev'in 12 Ekim 1918 tarihinde Lazar Biçerahov'a gönderdiği, Dağlılar Hükümeti'nin Dağıstan ve Çeçenya üzerindeki meşru egemenlik haklarını bildiren imzalı resmi diplomatik mektup.",
    notes:
      "Tapa Çermoyev, 11 Mayıs 1918 Bağımsızlık Bildirgesi'nin ilk imzacısı olup 1919 Paris Barış Konferansı'nda Kuzey Kafkasya'yı temsil etmiştir.",
  },
  {
    slug: "daglilar-cumhuriyeti-kuban-dostluk-antlasmasi-1919",
    title: "Kafkasya Dağlıları Birliği Cumhuriyeti ile Kuban Hükümeti Dostluk Antlaşması (Paris, Temmuz 1919)",
    type: "resmi-belge",
    year: 1919,
    dateLabel: "Temmuz 1919 (Paris)",
    era: "sovyet",
    region: "Kuzey Kafkasya – Paris Barış Konferansı",
    language: "Rusça (Eski İmla)",
    author: "A. Tapa Çermoyev, H. Bammat, İ. Gaydarov, H. Hadzaragov & L. Bıç",
    source: "Paris Barış Konferansı Kafkasya Dağlıları Delegasyonu Resmi Yayını (Temmuz 1919)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%94%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80_%D0%B4%D1%80%D1%83%D0%B6%D0%B1%D1%8B_%D0%9A%D1%83%D0%B1%D0%B0%D0%BD%D0%B8_%D0%B8_%D0%93%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B9_%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8.jpg",
    catalogNo: "MRNC-DOC-1919-031",
    image: "/images/archive/daglilar-cumhuriyeti-kuban-dostluk-antlasmasi-1919.jpg",
    description:
      "Paris Barış Konferansı sırasında Temmuz 1919'da Başbakan Tapa Çermoyev ve Dışişleri Bakanı Haydar Bammat başkanlığındaki Kuzey Kafkasya Dağlı Halkları Birliği heyeti ile Kuban heyeti arasında imzalanan 5 maddelik devletlerarası dostluk ve karşılıklı bağımsızlık tanıma antlaşması.",
    transcription:
      "Договоръ дружбы между Правительствами Кубани и Республики Союза Горцевъ Кавказа.\n1. Правительство Кубани и Правительство Республики Горскихъ Народовъ Кавказа настоящимъ торжественнымъ актомъ взаимно признаетъ государственный суверенитетъ и полную политическую независимость Кубани и Союза Горскихъ Народовъ Кавказа...\nДоговоръ сей составленъ въ двухъ экземплярахъ въ городѣ Парижѣ ... іюля 1919 года.\nПодлинный подписали: со стороны Союза Горскихъ Народовъ Кавказа: А. Чермоевъ — предсѣдатель делегаціи, И. Гайдаровъ, Х. Хадзараговъ, Г. Бамматъ — министръ иностранныхъ дѣлъ.",
    translation:
      "Kuban Hükümeti ile Kafkasya Dağlıları Birliği Cumhuriyeti Hükümeti Arasında Dostluk Antlaşması.\nMadde 1. Kuban Hükümeti ile Kafkasya Dağlı Halkları Cumhuriyeti Hükümeti işbu resmi senetle Kuban'ın ve Kafkasya Dağlı Halkları Birliği'nin devlet egemenliğini ve tam siyasi bağımsızlığını karşılıklı olarak tanır...\nİşbu antlaşma Paris şehrinde Temmuz 1919'da iki nüsha olarak düzenlenmiştir.\nAslını imzalayanlar — Kafkasya Dağlı Halkları Birliği adına: A. Çermoyev (Delegasyon Başkanı), İ. Gaydarov, H. Hadzaragov, H. Bammat (Dışişleri Bakanı).",
    notes:
      "Dönemin gazete/bülten dizgisinden taranmış tam metinli orijinal antlaşma kupürü.",
  },
  {
    slug: "kuzey-kafkasya-emirligi-100-ruble-vedeno-1919",
    title: "Vedeno Başkentli Kuzey Kafkasya Emirliği 100 Rublelik Resmi Banknotu (1919 / 1338 H.)",
    type: "resmi-belge",
    year: 1919,
    dateLabel: "1919 (1338 H. — Vedeno)",
    era: "sovyet",
    region: "Çeçenya (Vedeno — Kuzey Kafkasya Emirliği Başkenti)",
    language: "Arapça, Rusça ve Fransızca",
    author: "Kuzey Kafkasya Emirliği Hazinesi (Şeyh Uzun Hacı & Başvezir İnaluk Dışninski)",
    source: "Kuzey Kafkasya Emirliği (Vedeno Darphanesi) Nümismatik Koleksiyonu",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Banknote_north_caucasian_emirate.jpg",
    catalogNo: "NCE-DOC-1919-032",
    image: "/images/archive/kuzey-kafkasya-emirligi-100-ruble-vedeno-1919.jpg",
    description:
      "Denikin'in Beyaz Ordusu'na karşı Eylül 1919'da Çeçenya'nın tarihi başkenti Vedeno'da Şeyh Uzun Hacı Saltinski ve Çeçen Başvezir İnaluk Arsanukayev (Dışninski) tarafından ilan edilen Kuzey Kafkasya Emirliği'nin bastırdığı 100 Ruble (100 Manat) değerindeki resmi kağıt para. Ön yüzünde terazi, tüfek, kılıç ve üç yıldızlı hilal arması; arka yüzünde ise dağ zirvesinde dalgalanan Emirlik sancağı ve 'Vedeno'da basılmıştır' (ضرب في ويدان) kaydı yer alır.",
    transcription:
      "امير المؤمنين شمالى قفقاس الحاج اذن خير\n١٠٠ منات — КРЕДИТНЫЙ БИЛЕТЪ 100 РУБЛЕЙ — BILLET DE CREDIT 100 ROUBLES — 1919 г. — سنة ١٣٣٨\n[Arka Yüz]: يروج على قيم سائر اوراق النقود — ضرب في ويدان — ПОДДѢЛКА ПРЕСЛѢДУЕТСЯ ЗАКОНОМЪ.",
    translation:
      "Kuzey Kafkasya Müminlerinin Emiri el-Hâc Uzun Hayr [Uzun Hacı]\n100 Manat — 100 Rublelik Kredi Senedi — Yıl 1919 / Hicri 1338\n[Arka Yüz]: Diğer tüm nakit evrak kıymetinde tedavül eder — Vedeno'da basılmıştır (Duribe fî Vîdân) — Taklidi kanunen cezalandırılır.",
    notes:
      "4476×5970 piksel müze taramasından küçültülmüş yüksek çözünürlüklü ön-arka tıpkıbasım; 'ДД-2' seri damgalı.",
  },
  {
    slug: "vedomosti-1957-cecen-ingus-assc-iade-kararnamesi",
    title: "SSCB Yüksek Sovyet Resmi Gazetesi (24 Şubat 1957, Sayı 4) — Çeçen-İnguş ÖSSC'nin İadesi Kanunu",
    type: "resmi-belge",
    year: 1957,
    dateLabel: "9 Ocak – 24 Şubat 1957",
    era: "yakin",
    region: "Çeçen-İnguş ÖSSC (Moskova – Grozni)",
    language: "Rusça",
    author: "SSCB Yüksek Sovyet Prezidyumu (K. Voroşilov & A. Gorkin)",
    source: "Ведомости Верховного Совета СССР, 24 Şubat 1957, № 4 (871), Madde 78",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%92%D0%B5%D0%B4%D0%BE%D0%BC%D0%BE%D1%81%D1%82%D0%B8_%D0%92%D0%B5%D1%80%D1%85%D0%BE%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE_%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D0%B0_%D0%A1%D0%A1%D0%A1%D0%A0._1957._%E2%84%96_4.pdf",
    catalogNo: "VVS-DOC-1957-044",
    image: "/images/archive/vedomosti-1957-cecen-ingus-assc-iade-kararnamesi.jpg",
    description:
      "13 yıllık Orta Asya sürgününün ardından Çeçen ve İnguş halklarının ulusal özerkliğini yeniden tesis eden 9 Ocak 1957 tarihli Prezidyum Kararnamesi'ni ve bunu SSCB Anayasası'na işleyen 11 Şubat 1957 tarihli Yüksek Sovyet Kanunu'nu (Madde 78) yayımlayan SSCB Yüksek Sovyet Resmi Gazetesi'nin (Vedomosti) 24 Şubat 1957 tarihli ve 4 (871) sayılı orijinal nüshası.",
    transcription:
      "ВЕДОМОСТИ ВЕРХОВНОГО СОВЕТА СОЮЗА СОВЕТСКИХ СОЦИАЛИСТИЧЕСКИХ РЕСПУБЛИК — 24 февраля 1957 г. № 4 (871).\nУказ Президиума Верховного Совета СССР от 9 января 1957 г. «О восстановлении Чечено-Ингушской АССР в составе РСФСР»:\n1. Восстановить Чечено-Ингушскую Автономную Советскую Социалистическую Республику в составе РСФСР.\n3. Отменить Указ Президиума Верховного Совета СССР от 7 марта 1944 года «О ликвидации Чечено-Ингушской АССР...» и статью 2 Указа от 16 июля 1956 года в части запрещения чеченцам и ингушам возвращаться на прежнее местожительство.\nПредседатель Президиума ВС СССР К. Ворошилов. Секретарь А. Горкин.",
    translation:
      "SSCB YÜKSEK SOVYET RESMİ GAZETESİ — 24 Şubat 1957, Sayı 4 (871).\nSSCB Yüksek Sovyet Prezidyumu'nun 9 Ocak 1957 tarihli 'RSFSC Bünyesinde Çeçen-İnguş ÖSSC'nin Yeniden Kurulması Hakkında' Kararnamesi:\n1. RSFSC bünyesinde Çeçen-İnguş Özerk Sovyet Sosyalist Cumhuriyeti yeniden kurulsun.\n3. 7 Mart 1944 tarihli 'Çeçen-İnguş ÖSSC'nin Tasfiyesi Hakkında' Kararname ile 16 Temmuz 1956 tarihli Kararname'nin Çeçen ve İnguşların eski yaşadıkları topraklara dönmelerini yasaklayan 2. maddesi yürürlükten kaldırılsın.\nSSCB Yüksek Sovyet Prezidyumu Başkanı K. Voroşilov. Sekreter A. Gorkin.",
    notes:
      "Orijinal resmi gazete kapak sayfası tıpkıbasımı; PDF tam metin bağlantısı kaynak URL'de erişime açıktır.",
  },
  {
    slug: "cecen-cumhuriyeti-ickeriya-pasaportu-1994",
    title: "Çeçen Cumhuriyeti İçkeriya Resmi Pasaport ve Kimlik Belgesi (1990'lar)",
    type: "resmi-belge",
    year: 1994,
    dateLabel: "1994 (Cevherkale / Grozni)",
    era: "yakin",
    region: "Çeçenya (Çeçen Cumhuriyeti İçkeriya)",
    language: "Çeçence (Latin) ve İngilizce",
    author: "Çeçen Cumhuriyeti İçkeriya İdaresi",
    source: "Çeçen Cumhuriyeti İçkeriya Resmi Evrak Koleksiyonu (Wikimedia Commons)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chechen_Republic_of_Ichkeria_passport.jpg",
    catalogNo: "CRI-DOC-1994-051",
    image: "/images/archive/cecen-cumhuriyeti-ickeriya-pasaportu-1994.jpg",
    description:
      "Sovyetler Birliği'nin dağılma sürecinde 1991 sonbaharında Cevher Dudayev liderliğinde bağımsızlığını ilan eden Çeçen Cumhuriyeti İçkeriya tarafından bastırılan, üzerinde ulusal kurt (borz) ve dokuz yıldızlı arma ile Çeçen Latin alfabesi ibareleri bulunan resmi pasaport belgesi.",
    notes:
      "1991–1999 dönemi Çeçen devlet sembolizmi ve Latin harfli resmi yazışma dilini belgeleyen yakın tarih materyali.",
  },

  /* ===================== FOTOĞRAF VE GÖRSEL TANIKLIKLAR (16) ===================== */
  {
    slug: "spencer-seyh-mansur-evi-gravuru-1838",
    title: "Edmund Spencer'ın Kafkasya Seyahatnamesinde Aldı'daki 'Şeyh Mansur'un Evi' Gravürü (1838)",
    type: "fotograf",
    year: 1838,
    dateLabel: "1838 (Londra Baskısı)",
    era: "imamet",
    region: "Çeçenya (Aldı / Sunja Vadisi)",
    language: "İngilizce / Rusça Arşiv Lejantlı",
    author: "Kaptan Edmund Spencer",
    source: "Edmund Spencer, 'Travels in Circassia, Krim-Tartary &c.' (Londra: Henry Colburn, 1838)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%94%D0%BE%D0%BC_%D0%A8%D0%B5%D0%B9%D1%85%D0%B0_%D0%9C%D0%B0%D0%BD%D1%81%D1%83%D1%80%D0%B0._%D0%93%D1%80%D0%B0%D0%B2%D1%8E%D1%80%D0%B0_%D0%AD._%D0%A1%D0%BF%D0%B5%D0%BD%D1%81%D0%BE%D1%80%D0%B0._1838_%D0%B3.jpg",
    catalogNo: "SPN-PH-1838-003",
    image: "/images/archive/spencer-seyh-mansur-evi-gravuru-1838.jpg",
    description:
      "İngiliz seyyah Kaptan Edmund Spencer'ın 1830'larda Kafkasya yolculuğu sırasında belgelediği ve 1838'de Londra'da yayımladığı 'Şeyh Mansur'un Evi' başlıklı tarihi gravür. 1785 hareketinin doğduğu Çeçen yerleşim mimarisini fotoğraf öncesi dönemde kayda geçiren nadir görsel kaynaklardandır.",
    notes:
      "1838 Londra baskısından alınan çelik/ahşap gravür levhası.",
  },
  {
    slug: "lermontov-valerik-muharebesi-suluboya-1840",
    title: "11 Temmuz 1840 Valerik Çayı Muharebesi — M. Y. Lermontov ve G. G. Gagarin'in Saha Suluboyası",
    type: "fotograf",
    year: 1840,
    dateLabel: "Temmuz 1840 (Küçük Çeçenya)",
    era: "imamet",
    region: "Çeçenya (Valerik Irmağı – Gehi Ormanı)",
    language: "Görsel Birincil Saha Çizimi",
    author: "Mihail Yuryeviç Lermontov & Prens Grigori Grigoryeviç Gagarin",
    source: "Devlet Lermontov Müzesi / Rus Edebiyatı Enstitüsü Görsel Arşivi (1840)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Paintings_by_Mikhail_Lermontov,_1840,_Valerik.jpg",
    catalogNo: "LRM-PH-1840-006",
    image: "/images/archive/lermontov-valerik-muharebesi-suluboya-1840.jpg",
    description:
      "11 Temmuz 1840'ta Küçük Çeçenya'daki Valerik Irmağı geçişinde Ahverdi Muhammed ve İsa Gendargeno komutasındaki Çeçen siperlerine (zaval) yapılan hücumu, bizzat çarpışmaya katılan M. Y. Lermontov'un çizip G. G. Gagarin'in renklendirdiği belgesel saha suluboyası.",
    notes:
      "Kütük siperlerle tahkim edilmiş Gehi-Valerik orman hattını ve Çeçen savunma taktiklerini görsel olarak belgeleyen çağdaş saha eseri.",
  },
  {
    slug: "gagarin-sali-ovasi-orman-kesimi-1847",
    title: "Prens G. G. Gagarin — 'Çeçenya: Ormanların Kesimi ve Şali Ovasına Açılış' (1847)",
    type: "fotograf",
    year: 1847,
    dateLabel: "1847 (Paris Taşbaskı Albümü)",
    era: "imamet",
    region: "Çeçenya (Şali Ovası – Büyük Çeçenya)",
    language: "Fransızca",
    author: "Prens Grigori Grigoryeviç Gagarin (1810–1893)",
    source: "G. Gagarin, 'Le Caucase pittoresque' (Paris: Plon Frères, 1847–1857)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Gagarin._Tchetchnia._Destruction_des_bois_et_ouverture_de_la_plaine_de_Chaly.jpg",
    catalogNo: "GAG-PH-1847-010",
    image: "/images/archive/gagarin-sali-ovasi-orman-kesimi-1847.jpg",
    description:
      "General Yermolov ve ardından Vorontsov'un Çeçen direnişinin doğal kalkanı olan asırlık kayın ve meşe ormanlarını geniş şeritler (proseka) halinde kestirerek Şali ovasına topçu yolu açma stratejisini belgeleyen, Prens Gagarin'in Paris'te basılmış taşbaskı levhası.",
    transcription:
      "TCHETCHNIA. — Destruction des bois et ouverture de la plaine de Chaly. Dessiné d'après nature par le Prince G. Gagarine.",
    translation:
      "ÇEÇENYA. — Ormanların tahribi ve Şali ovasının açılması. Doğadan bizzat Prens G. Gagarin tarafından çizilmiştir.",
    notes:
      "Kafkas Savaşı'ndaki ekolojik yıkım ve orman kesim harekâtlarını (рубка просек) doğrudan belgeleyen birincil görsel kaynak.",
  },
  {
    slug: "samil-ve-cecen-dagistan-naibleri-portreleri",
    title: "İmam Şamil ve Çeçenya–Dağıstan Naipleri Tarihi Portre Levhası (T. Horschelt / 1860'lar)",
    type: "fotograf",
    year: 1865,
    dateLabel: "1859–1868 (Münih / St. Petersburg)",
    era: "imparatorluk",
    region: "Çeçenya – Dağıstan",
    language: "Rusça / Almanca",
    author: "Theodor Horschelt & Dönem Fotoğraf-Gravür Atölyesi",
    source: "Kafkas Savaşı Naipler Albümü (Wikimedia Commons)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%9D%D0%B0%D0%B8%D0%B1%D1%8B_%D0%A8%D0%B0%D0%BC%D0%B8%D0%BB%D1%8F.jpg",
    catalogNo: "HRS-PH-1865-021",
    image: "/images/archive/samil-ve-cecen-dagistan-naibleri-portreleri.jpg",
    description:
      "Merkezde İmam Şamil olmak üzere Kuzey Kafkasya İmameti'nin önde gelen Çeçen ve Dağıstanlı naiplerini geleneksel sarıklı papahaları, gazırlı çerkeskaları ve liyakat nişanlarıyla bir arada gösteren 19. yüzyıl ortası kompozit portre levhası.",
    notes:
      "İmamet komuta kademesinin fizyonomik ve etnografik kıyafet detaylarını koruyan erken dönem arşiv baskısı.",
  },
  {
    slug: "musa-kunduhov-1865-muhaceret-arsiv-portresi",
    title: "1865 Çeçen-İnguş Osmanlı Muhaceretini Sevk Eden Musa Paşa Kunduhov'un Arşiv Fotoğrafı",
    type: "fotograf",
    year: 1865,
    dateLabel: "1865 (Tiflis / İstanbul Muhaceret Dosyası)",
    era: "imparatorluk",
    region: "Çeçenya – İnguşetya → Anadolu ve Ortadoğu (Sivas, Muş, Ürdün, Suriye)",
    language: "Görsel Materyal / RGVIA & BOA Muhaceret Kaydı",
    author: "Dönem Stüdyo Albümin Baskısı",
    source: "1865 Kuzey Kafkasya Muhacereti Fotoğraf Koleksiyonu (RGVIA Ф. 38, Оп. 7, Д. 493)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Musa_Kundukhov_Pasha.jpg",
    catalogNo: "MKP-PH-1865-022",
    image: "/images/archive/musa-kunduhov-1865-muhaceret-arsiv-portresi.jpg",
    description:
      "Kafkas Savaşı'nın hemen ardından 1865 bahar ve yazında Çarlık idaresinin Çeçenya'nın ovalık nüfusunu seyreltme politikası çerçevesinde, Orstkhoy (Karabulak), Çeçen, İnguş ve Osetlerden oluşan yaklaşık 5.000 ailenin (23.000'den fazla nüfus) 28 kafile halinde Daryal ve Kars üzerinden Osmanlı topraklarına göçünü organize eden Tümgeneral Musa Kunduhov'un (sonradan Osmanlı'da Musa Paşa) 1860'lar albümin portresi.",
    notes:
      "Türkiye (Sivas-Şarkışla, Kahramanmaraş-Göksun, Muş-Varto, Mardin-Kızıltepe), Ürdün (Amman, Zerka, Suveylih), Suriye (Kuneytra, Re'sü'l-Ayn) ve Irak'taki bugünkü Çeçen-İnguş diasporasının temelini oluşturan 1865 muhaceretinin birincil tarihsel bağlam kaydıdır.",
  },
  {
    slug: "george-kennan-cecenler-fotografi-1870",
    title: "ABD Kongre Kütüphanesi (Library of Congress) George Kennan Koleksiyonu — Çeçen Süvariler (1870'ler)",
    type: "fotograf",
    year: 1875,
    dateLabel: "1870–1886 (Library of Congress)",
    era: "imparatorluk",
    region: "Çeçenya – Dağıstan Sınır Kuşağı",
    language: "İngilizce Arşiv Notlu Albümin Fotoğraf",
    author: "George Kennan (1845–1924) Koleksiyonu",
    source: "Library of Congress Prints and Photographs Division — George Kennan Collection",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Chechense._Match._a_wedding_match._George_Kennan._1870-1886.jpg",
    catalogNo: "LOC-PH-1875-024",
    image: "/images/archive/george-kennan-cecenler-fotografi-1870.jpg",
    description:
      "Amerikalı araştırmacı ve seyyah George Kennan'ın 1870'lerdeki Kafkasya gezisi sırasında topladığı ve bugün ABD Kongre Kütüphanesi'nde (Library of Congress) korunan albümin fotoğraf: Geleneksel düğün at yarışına ve şenliğine katılan papahalı, çerkeskalı Çeçenler.",
    transcription:
      "Chechense. Match — a wedding match. [George Kennan Collection, Library of Congress, 1870–1886].",
    translation:
      "Çeçenler. Düğün şenliği / at yarışı karşılaşması. [George Kennan Koleksiyonu, ABD Kongre Kütüphanesi, 1870–1886].",
    notes:
      "19. yüzyılın ikinci yarısında Çeçenlerin gündelik ve törensel yaşamını Batılı bir seyyah koleksiyonunda belgeleyen en erken orijinal fotoğraflardandır.",
  },
  {
    slug: "saroy-kule-yerlesimi-19-yuzyil-fotografi",
    title: "Şaroy (Şaro-Argun) Tarihi Taş Kule Kompleksi — XIX. Yüzyıl Sonu Cam Negatif Fotoğrafı",
    type: "fotograf",
    year: 1885,
    dateLabel: "1880'ler (Şaroy, Çeçenya)",
    era: "imparatorluk",
    region: "Çeçenya (Şaroy – Şaro-Argun Havzası)",
    language: "Görsel Mimari Belge",
    author: "Kafkas Coğrafya Cemiyeti Saha Fotoğrafçısı",
    source: "Şaroy Tarihi Kule Kompleksi 19. Yüzyıl Fotoğraf Arşivi (Wikimedia Commons)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sharoi1800.jpg",
    catalogNo: "SHR-PH-1885-025",
    image: "/images/archive/saroy-kule-yerlesimi-19-yuzyil-fotografi.jpg",
    description:
      "Güneydoğu Çeçenya'daki Şaro-Argun vadisinde yükselen tarihi Şaroy kule yerleşiminin 1944 sürgünü ve 20. yüzyıl yıkımları öncesindeki tam ve sağlam siluetini belgeleyen 19. yüzyıl cam negatif baskısı. Savaş kuleleri ile teraslı konut kulelerinin bir arada oluşturduğu klasik Vaynah dağ kalesi dokusunu gözler önüne serer.",
    notes:
      "Şaroy kulelerinin çatı ve mazgal restorasyonlarında kullanılan en önemli 19. yüzyıl görsel referansıdır.",
  },
  {
    slug: "abrek-zelimhan-haracoylu-arsiv-fotografi-1913",
    title: "Haraçoylu Abrek Zelimhan Guşmazukayev (1872–1913) ve Ailesine Ait Dönem Arşiv Levhası",
    type: "fotograf",
    year: 1913,
    dateLabel: "Eylül 1913 (Şali – Haraçoy)",
    era: "imparatorluk",
    region: "Çeçenya (Haraçoy – Şali)",
    language: "Rusça Dönem Basın/Jandarma Kaydı",
    author: "Terek Vilayeti Resmi Soruşturma ve Basın Fotoğraf Kaydı",
    source: "1913 Terek Vilayeti Arşiv ve Basın Koleksiyonu (Wikimedia Commons)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Killed_abrek_Zelimkhan_and_his_family.jpg",
    catalogNo: "ZLM-PH-1913-027",
    image: "/images/archive/abrek-zelimhan-haracoylu-arsiv-fotografi-1913.jpg",
    description:
      "Çarlık sömürge idaresinin adaletsizliğine, toprak müsaderelerine ve ağır vergilere karşı on iki yıl boyunca dağlarda direnerek Kafkas halklarının efsanesine dönüşen Haraçoylu Abrek Zelimhan Guşmazukayev'in 26 Eylül 1913'te Şali yakınlarında Dağıstan Atlı Alayı müfrezesiyle girdiği son çarpışma sonrasında ailesiyle birlikte yayımlanan tarihi arşiv fotoğraf levhası.",
    notes:
      "Çarlık yönetiminin tüm Çeçen köylerine ibret amacıyla dağıttığı bu fotoğraf, halk hafızasında tam tersine Zelimhan'ın adalet ve yiğitlik destanını (illi) ölümsüzleştirmiştir.",
  },
  {
    slug: "kafkas-yerli-suvari-tugayi-subaylari-1914",
    title: "Kafkas Yerli Atlı Tümeni ('Vahşi Tümen') Çeçen ve İnguş Alay Subayları (1914–1915)",
    type: "fotograf",
    year: 1914,
    dateLabel: "1914–1915 (Galiçya Cephesi)",
    era: "imparatorluk",
    region: "Kuzey Kafkasya (Çeçen ve İnguş Süvari Alayları)",
    language: "Görsel Askeri Arşiv",
    author: "Rus İmparatorluk Ordusu Cephe Fotoğraf Servisi",
    source: "Kafkas Yerli Atlı Tümeni (Kavkazskaya Tuzemnaya Konnaya Diviziya) Arşivi",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Grand_duke_Michael_Alexandrovich_and_the_Savage_division_officers.jpeg",
    catalogNo: "KTD-PH-1914-030",
    image: "/images/archive/kafkas-yerli-suvari-tugayi-subaylari-1914.jpg",
    description:
      "I. Dünya Savaşı'nda gönüllü Kafkasyalılardan teşkil edilen Kafkas Yerli Atlı Tümeni'nin (2. Tugay bünyesinde Çeçen ve Tatar, 3. Tugay bünyesinde İnguş ve Çerkes Süvari Alayları yer almaktaydı) komuta heyeti ve Kuzey Kafkasyalı subaylarını geleneksel çerkeska, gümüş gazır ve kamalarıyla gösteren arşiv fotoğrafı.",
    notes:
      "Tapa Çermoyev ve pek çok Çeçen-İnguş subay bu tümende görev yapmış, 1917 sonrasında ise Kuzey Kafkasya Dağlıları Cumhuriyeti'nin savunma kadrosunu oluşturmuştur.",
  },
  {
    slug: "targim-savas-kulesi-1917-arsiv-fotografi",
    title: "Targim Vadisi Klasik Savaş ve Konut Kuleleri — 1917 Orijinal Arşiv Fotoğrafı",
    type: "fotograf",
    year: 1917,
    dateLabel: "1917 (Targim, Assa Havzası)",
    era: "imparatorluk",
    region: "İnguşetya (Cerah – Targim Havzası)",
    language: "Görsel Arkeolojik Belge",
    author: "Kafkasya Arkeoloji ve Etnografya Heyeti (1917)",
    source: "1917 Targim Havzası Cam Negatif Arşiv Kaydı (Wikimedia Commons)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Targim,_1917.jpg",
    catalogNo: "TRG-PH-1917-034",
    image: "/images/archive/targim-savas-kulesi-1917-arsiv-fotografi.jpg",
    description:
      "Arşivimize adını veren Assa Nehri kıyısındaki tarihi Targim yerleşiminin 1917 yılında çekilmiş yüksek çözünürlüklü gerçek arşiv fotoğrafı. Piramidal basamaklı taş çatılı görkemli Vaynah savaş kulesini (vov), çevresindeki taş konut kalıntılarını ve sarp dağ yamacını hiçbir modern müdahale olmaksızın belgeler.",
    notes:
      "2150×1572 piksel cam negatif taraması; dijital arşivimizin amblem mekanı olan Targim'in bir asır önceki otantik görünümüdür.",
  },
  {
    slug: "trabzon-konferansi-kuzey-kafkasya-heyeti-1918",
    title: "1918 Trabzon Barış Konferansı'nda Kuzey Kafkasya ve Osmanlı Temsilcileri",
    type: "fotograf",
    year: 1918,
    dateLabel: "Mart–Nisan 1918 (Trabzon)",
    era: "sovyet",
    region: "Kuzey Kafkasya – Trabzon (Osmanlı İmparatorluğu)",
    language: "Görsel Diplomatik Arşiv",
    author: "Trabzon Konferansı Resmi Heyet Fotoğrafçısı",
    source: "Kuzey Kafkasya Cumhuriyeti Diplomatik Fotoğraf Arşivi (Mart–Nisan 1918)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:North_Caucasian_and_Ottoman_representatives_at_Trebizond_Conference,_1918.jpg",
    catalogNo: "TRB-PH-1918-035",
    image: "/images/archive/trabzon-konferansi-kuzey-kafkasya-heyeti-1918.jpg",
    description:
      "11 Mayıs 1918'deki resmi bağımsızlık ilanının hemen öncesinde, Haydar Bammat ve Tapa Çermoyev'in öncülüğündeki Kuzey Kafkasya Dağlı Halkları Birliği murahhas heyetinin Mart–Nisan 1918 Trabzon Konferansı sırasında Rauf Orbay başkanlığındaki Osmanlı heyetiyle bir araya gelişini belgeleyen tarihi fotoğraf. Kuzey Kafkasya delegeleri milli çerkeska ve papahalarıyla ön sırada yer almaktadır.",
    notes:
      "8 Haziran 1918 Batum Dostluk Antlaşması'na ve Osmanlı Devleti'nin Kuzey Kafkasya Cumhuriyeti'ni tanımasına giden diplomatik sürecin temel görsel kaydıdır.",
  },
  {
    slug: "dan-kale-konut-kulesi-1930-kesif-fotografi",
    title: "Çeçenya Dan-Kale Tarihi Konut Kulesi — Erken Sovyet Arkeoloji Keşif Fotoğrafı",
    type: "fotograf",
    year: 1930,
    dateLabel: "1928–1935 (Çeçenya Dağ Kuşağı)",
    era: "sovyet",
    region: "Çeçenya (Şatoy / İtum-Kale – Dan-Kale)",
    language: "Görsel Saha Envanteri",
    author: "Kuzey Kafkasya Arkeoloji ve Etnografya Ekspedisyonu",
    source: "Çeçenya Taş Mimari Envanteri Saha Fotoğrafı (Wikimedia Commons)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%96%D0%B8%D0%BB%D0%B0%D1%8F_%D0%B1%D0%B0%D1%88%D0%BD%D1%8F_%D0%B2_%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8_%D0%94%D0%B0%D0%BD_%D0%BA%D0%B0%D0%BB%D0%B5,_%D0%A7%D0%B5%D1%87%D0%BD%D1%8F.jpg",
    catalogNo: "DNK-PH-1930-037",
    image: "/images/archive/dan-kale-konut-kulesi-1930-kesif-fotografi.jpg",
    description:
      "Çeçenya'nın dağlık kuşağındaki tarihi Dan-Kale yerleşiminde iri kesme taş bloklarla örülmüş klasik Vaynah konut kulesini (gala), kemerli pencere-kapı açıklıklarını ve önünde yerel kıyafetli bir dağlı sakini ölçek referansı olarak belgeleyen 1944 sürgünü öncesi saha fotoğrafı.",
    notes:
      "1944 sürgünü sonrasında bakımsızlık ve askeri yıkımlarla tahrip olan konut kulelerinin özgün duvar örgüsünü gösterir.",
  },
  {
    slug: "yurt-auh-cecenleri-frunze-istasyonu-donus-1957",
    title: "1957 Sürgünden Dönüş: Frunze (Bişkek) Tren İstasyonunda Yurt-Auhlu Çeçenler",
    type: "fotograf",
    year: 1957,
    dateLabel: "1957 (Frunze / Bişkek Garı → Kafkasya)",
    era: "yakin",
    region: "Kırgızistan SSC (Frunze) → Yurt-Auh (Auh / Hasavyurt)",
    language: "Görsel Sözlü Tarih ve Aile Arşivi",
    author: "Auh Çeçenleri Dönüş Kafilesi Aile Arşivi",
    source: "Yurt-Auh Sürgün ve Dönüş Fotoğraf Arşivi (1957, Wikimedia Commons)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%9D%D0%B0_%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB%D0%B5._1957_%D0%B3%D0%BE%D0%B4_%D0%A4%D1%80%D1%83%D0%BD%D0%B7%D0%B5._%D0%96%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D1%81._%D0%AE%D1%80%D1%82-%D0%90%D1%83%D1%85.jpg",
    catalogNo: "AUH-PH-1957-045",
    image: "/images/archive/yurt-auh-cecenleri-frunze-istasyonu-donus-1957.jpg",
    description:
      "9 Ocak 1957 iade kararnamesinin ardından 13 yıllık Orta Asya sürgününü tamamlayarak ata topraklarına dönmek üzere Kırgızistan'ın başkenti Frunze (bugünkü Bişkek) tren istasyonunda bir araya gelen Yurt-Auh (Kalinin-Aul) köylü Akki-Çeçenlerinin tarihi grup fotoğrafı.",
    notes:
      "Auh Çeçenleri 1957'de döndüklerinde tarihi Auh rayonu Çeçen-İnguş ÖSSC'ye dahil edilmeyip Dağıstan sınırlarında bırakılmış, köylüler kendi evlerini yeniden satın almak veya sıfırdan inşa etmek zorunda kalmıştır.",
  },
  {
    slug: "tsotsi-yurt-cecen-latin-sokak-tabelasi-1992",
    title: "Tsotsi-Yurt Köyünde 1992 Çeçen Latin Alfabesiyle Yazılmış Sokak Tabelası ('Malx-ana Uram')",
    type: "fotograf",
    year: 1992,
    dateLabel: "1992 (Tsotsi-Yurt, Kurçaloy)",
    era: "yakin",
    region: "Çeçenya (Tsotsi-Yurt)",
    language: "Çeçence (1992 Latin Alfabesi)",
    author: "Yerel Saha Belgelemesi",
    source: "1992 Çeçen Latin İmlası Kamusal Belgeleme Arşivi (Wikimedia Commons)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Street_name_on_the_Chechen_latin_alphabet,_92_year_(Tsotsi-Yurt).jpg",
    catalogNo: "TSY-PH-1992-050",
    image: "/images/archive/tsotsi-yurt-cecen-latin-sokak-tabelasi-1992.jpg",
    description:
      "Kasım 1991'de Çeçen parlamentosunun 1925 Latin alfabesi geleneğini modernize ederek yeni Çeçen Latin alfabesini kabul etmesinin ardından Tsotsi-Yurt yerleşiminde asılan ve günümüze ulaşan 'Malx-ana Uram' (Güneşli Sokak) yazılı özgün sokak tabelası.",
    transcription:
      "Malx-ana uram (Нохчийн латиница, 1992 шо — Цоци-Юрт).",
    translation:
      "Güneşli Sokak / Güney Yamaç Sokağı (Çeçen Latin Alfabesi, 1992 — Tsotsi-Yurt).",
    notes:
      "Çeçen yazı tarihinde Arap (Acem) → Latin (1925) → Kiril (1938) → Latin (1992) geçişlerinin maddi kültürdeki somut izidir.",
  },
  {
    slug: "grozni-kusatmasi-dua-eden-cecen-evstafiev-1995",
    title: "Ocak 1995 Grozni Kuşatması — Yanan Başkentte Dua Eden Çeçen (Mihail Yevstafyev)",
    type: "fotograf",
    year: 1995,
    dateLabel: "Ocak 1995 (Grozni / Cevherkale)",
    era: "yakin",
    region: "Çeçenya (Grozni Merkez)",
    language: "Uluslararası Foto-Muhabirlik Tanıklığı",
    author: "Mihail Aleksandroviç Yevstafyev (AFP Savaş Foto-Muhabiri)",
    source: "Mihail Yevstafyev Koleksiyonu (Ocak 1995, Grozni — CC BY-SA 2.5)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Evstafiev-chechnya-prayer2.jpg",
    catalogNo: "EVS-PH-1995-052",
    image: "/images/archive/grozni-kusatmasi-dua-eden-cecen-evstafiev-1995.jpg",
    description:
      "Birinci Çeçen Savaşı'nın en yıkıcı evresi olan Ocak 1995 Grozni Kuşatması sırasında foto-muhabir Mihail Yevstafyev tarafından çekilen ikonik belge fotoğraf: Ağır bombardıman altında alevler içindeki şehir merkezinde ellerini semaya kaldırarak dua eden yaşlı bir Çeçen.",
    notes:
      "II. Dünya Savaşı sonrasında Avrupa kıtasında bir kente uygulanan en yoğun topçu ve hava bombardımanlarından biri olarak AGİT ve insan hakları raporlarına geçen Grozni yıkımının insani boyutunu simgeler.",
  },
  {
    slug: "kovalyov-grozni-insan-haklari-basin-toplantisi-1995",
    title: "İnsan Hakları Savunucusu Sergey Kovalyov'un Ocak 1995 Grozni Sivil Kayıplar Raporu ve Basın Toplantısı",
    type: "fotograf",
    year: 1995,
    dateLabel: "Ocak 1995 (Grozni Dönüşü, Moskova)",
    era: "yakin",
    region: "Çeçenya (Grozni) – Moskova",
    language: "Görsel İnsan Hakları Belgesi",
    author: "Memorial / Ocak 1995 Basın Arşivi",
    source: "Sergey Kovalyov İnsan Hakları Heyeti Arşivi (Ocak 1995, Wikimedia Commons)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Kovalev%27s_press-conference_(January_1995).jpg",
    catalogNo: "KVL-PH-1995-053",
    image: "/images/archive/kovalyov-grozni-insan-haklari-basin-toplantisi-1995.jpg",
    description:
      "Aralık 1994 – Ocak 1995 boyunca kuşatma altındaki Grozni sığınaklarından ayrılmayarak bombardıman altındaki sivillerin durumunu dünyaya duyuran insan hakları savunucusu ve milletvekili Sergey Kovalyov'un (1930–2021), Ocak 1995'te sivil kayıpları ve savaş suçlarını belgelendirdiği tarihi basın toplantısı.",
    notes:
      "Yakın dönem Çeçen savaşları araştırmalarında Memorial İnsan Hakları Merkezi raporlarıyla birlikte en önemli bağımsız tanıklık arşivlerindendir.",
  },

  /* ===================== KİTAP, SÖZLÜK VE SÜRELİ YAYINLAR (7) ===================== */
  {
    slug: "dosov-ilk-cecen-elifbasi-1862",
    title: "Kedi Dosov & P. K. Uslar — İlk Basılı Çeçen Elifbası 'Noxçiyn Abat' (Tiflis, 1862)",
    type: "kitap",
    year: 1862,
    dateLabel: "1862 (Tiflis)",
    era: "imparatorluk",
    region: "Çeçenya – Tiflis",
    language: "Çeçence (Uslar-Dosov Alfabesi)",
    author: "Kedi Dosov (Къеди Досов) & Baron Pyotr Karloviç Uslar",
    source: "Tiflis Kafkas Ordusu Kurmay Matbaası, 1862 İlk Baskı",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%9D%D0%BE%D1%85%D1%87%D0%B8%D0%B9%D0%BD_%D0%B0%D0%B1%D0%B0%D1%82_1862_%D1%88%D0%BE._%D0%90%D0%B2%D1%82%D0%BE%D1%80_%D0%9A%D1%8A%D0%B5%D0%B4%D0%B8_%D0%94%D0%BE%D1%81%D0%BE%D0%B2.png",
    catalogNo: "DSV-BK-1862-023",
    image: "/images/archive/dosov-ilk-cecen-elifbasi-1862.png",
    description:
      "Çeçen aydın ve öğretmen Kedi Dosov'un dilbilimci Baron P. K. Uslar ile birlikte Tiflis'te hazırlayıp 1862 yılında bastırdığı tarihî ilk Çeçence okuma kitabı ve elifbası. Fonetik işaretlerle uyarlanmış 37 harflik alfabenin yanı sıra özgün Çeçen atasözlerini ve halk hikâyelerini içerir; aynı yıl Grozni Kalesi'nde açılan ilk Çeçence anaokuma sınıfında ders kitabı olarak okutulmuştur.",
    notes:
      "Çeçen dilinin matbu kitap tarihini başlatan 1862 Tiflis baskısı kapak ve örnek harf tablosu.",
  },
  {
    slug: "umalat-laudayev-cecen-kavmi-1872",
    title: "Umalat Laudayev — 'Çeçen Kavmi' (Чеченское племя, Tiflis 1872) İlk Çeçen Etnografyası",
    type: "kitap",
    year: 1872,
    dateLabel: "1872 (Tiflis — Sbornik Svedeniy o Kavkazskih Gortsah, Cilt VI)",
    era: "imparatorluk",
    region: "Çeçenya (Nohçmahkahoy – İçkeriya – Argun)",
    language: "Rusça (Eski İmla)",
    author: "Umalat Laudayev (1827–1890'lar, İlk Çeçen Etnograf)",
    source: "Сборник сведений о кавказских горцах, Вып. VI (Tiflis, 1872, s. 1–62)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%D0%A3%D0%BC%D0%B0%D0%BB%D0%B0%D1%82_%D0%9B%D0%B0%D1%83%D0%B4%D0%B0%D0%B5%D0%B2.jpg",
    catalogNo: "LUD-BK-1872-025",
    image: "/images/archive/umalat-laudayev-cecen-kavmi-1872.jpg",
    description:
      "Ana dili Çeçence olan bir müellif tarafından kaleme alınmış ilk basılı tarih ve etnografya araştırması. Umalat Laudayev 1872'de Tiflis'te yayımlanan 62 sayfalık bu eserinde; Naşha ocak köken anlatısını, Nohçmahkahoy ve dağ teyplerinin yayılışını, Mehk-Khel (Ülke Meclisi) töre hukukunu, konukseverlik kurumunu ve kan davası uzlaştırma geleneklerini içeriden bir gözle kayıt altına almıştır.",
    notes:
      "Çarlık askeri eğitimi almış bir subay bakışının izlerini taşısa da 19. yüzyıl sözlü teyp şecerelerini yazılı hale getiren vazgeçilmez birincil kaynaktır.",
  },
  {
    slug: "uslar-cecenskiy-yazik-grameri-1888",
    title: "Baron Pyotr Karloviç Uslar — 'Kafkasya Etnografyası: Dilbilim II — Çeçen Dili' (Tiflis, 1888)",
    type: "kitap",
    year: 1888,
    dateLabel: "1888 (Tiflis Baskısı, 1862 Araştırması)",
    era: "imparatorluk",
    region: "Çeçenya – Tiflis",
    language: "Rusça ve Çeçence Metinli",
    author: "Pyotr Karloviç Uslar (1816–1875) & Kedi Dosov (Kaynak Kişi)",
    source: "Этнография Кавказа. Языкознание. II. Чеченский язык (Tiflis, 1888)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Uslar-Chechen_grammar_cover.jpg",
    catalogNo: "USL-BK-1888-026",
    image: "/images/archive/uslar-cecenskiy-yazik-grameri-1888.jpg",
    description:
      "Kafkas dilbiliminin kurucu eserlerinden biri olan ve Kedi Dosov'un katkılarıyla derlenen kapsamlı Çeçence dilbilgisi, sesbilim, sözlük ve özgün Çeçence metinler derlemesi. Nah dillerinin altı cins/sınıf (grammatical gender/noun class) sistemini ve ergatif cümle yapısını bilimsel olarak çözümleyen ilk monografidir.",
    transcription:
      "ЭТНОГРАФІЯ КАВКАЗА. — ЯЗЫКОЗНАНІЕ. II. ЧЕЧЕНСКІЙ ЯЗЫКЪ. Барона П. К. Услара. Тифлисъ, Типографія Канцеляріи Главноначальствующаго гражданскою частію на Кавказѣ, 1888.",
    translation:
      "KAFKASYA ETNOGRAFYASI. — DİLBİLİM. II. ÇEÇEN DİLİ. Baron P. K. Uslar. Tiflis: Kafkasya Mülki İdare Başmüdürlüğü Kalemi Matbaası, 1888.",
    notes:
      "1888 Tiflis orijinal baskı iç kapak sayfası tıpkıbasımı.",
  },
  {
    slug: "baddeley-russian-conquest-of-the-caucasus-1908",
    title: "John F. Baddeley — 'The Russian Conquest of the Caucasus' (Londra: Longmans, Green & Co., 1908)",
    type: "kitap",
    year: 1908,
    dateLabel: "1908 (Londra İlk Baskı — Cornell University Nüshası)",
    era: "imparatorluk",
    region: "Kuzey Kafkasya (Çeçenya – İnguşetya – Dağıstan)",
    language: "İngilizce",
    author: "John Frederick Baddeley (1854–1940)",
    source: "Internet Archive / Cornell University Library (cu31924028754616)",
    sourceUrl: "https://archive.org/details/cu31924028754616",
    catalogNo: "BDD-BK-1908-028",
    image: "/images/archive/baddeley-russian-conquest-of-the-caucasus-1908.jpg",
    description:
      "İngiliz tarihçi ve Kafkasya araştırmacısı John F. Baddeley'nin Çeçenya ve Dağıstan'daki muharebe alanlarını bizzat at sırtında gezerek, yerel yaşlıların sözlü tanıklıklarını ve Tiflis'teki Kafkas Arkeografi Komisyonu tutanaklarını karşılaştırarak kaleme aldığı 1908 Londra ilk baskısı klasik eser. Şeyh Mansur, Beybulat Taymiyev, Valerik, İmam Şamil ve 1845 Dargo seferine dair Batı literatüründeki en kapsamlı birincil sentezdir.",
    transcription:
      "THE RUSSIAN CONQUEST OF THE CAUCASUS — BY JOHN F. BADDELEY. WITH MAPS, PLANS, AND ILLUSTRATIONS. LONGMANS, GREEN AND CO., 39 PATERNOSTER ROW, LONDON; NEW YORK, BOMBAY, AND CALCUTTA. 1908.",
    translation:
      "KAFKASYA'NIN RUSLAR TARAFINDAN İŞGALİ — YAZAN: JOHN F. BADDELEY. HARİTALAR, PLANLAR VE İLLÜSTRASYONLARLA. LONGMANS, GREEN AND CO., LONDRA, 1908.",
    notes:
      "Internet Archive üzerinden 518 sayfalık tam metni ve katlanır cephe haritaları açık erişimlidir.",
  },
  {
    slug: "cecen-latin-alfabesi-abata-1925",
    title: "Halid Oşayev — Resmi Çeçen Latin Alfabesi Tablosu ve İmla Kılavuzu (1925)",
    type: "kitap",
    year: 1925,
    dateLabel: "1925 (Grozni)",
    era: "sovyet",
    region: "Çeçen Özerk Oblastı (Grozni)",
    language: "Çeçence (1925 Latin Alfabesi)",
    author: "Halid Dudayeviç Oşayev (1898–1977)",
    source: "Çeçen Özerk Oblastı Maarif Şubesi Resmi Yayını (Grozni, 1925)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chechen_alphabet-1925.png",
    catalogNo: "OSH-BK-1925-036",
    image: "/images/archive/cecen-latin-alfabesi-abata-1925.png",
    description:
      "Çeçen yazar, sözlükbilimci ve maarifçi Halid Oşayev tarafından hazırlanan ve 1925 yılında Çeçen Özerk Oblastı'nda resmen kabul edilerek 1938'e kadar okullarda, kitaplarda ve basında kullanılan Latin temelli Çeçen alfabesi ('Noxçin Latin Alfavit') harf ve el yazısı eşleştirme tablosu.",
    notes:
      "Gırtlak ünsüzlerini (gh, kh, q, x, ç, ş, ö, ü) yüksek fonetik tutarlılıkla karşılayan 1925 Latin imlası, erken Sovyet dönemi Çeçen edebiyat rönesansının (S. Baduyev, M. Mamakayev, Ş. Aysahanov) yazı aracı olmuştur.",
  },
  {
    slug: "serlo-cecence-gazete-1926",
    title: "Çeçence Ulusal Gazete 'Serlo' (Işık) — 1 Mayıs 1926 Tarihli 20 (63) Sayılı Orijinal Nüsha",
    type: "kitap",
    year: 1926,
    dateLabel: "1 Mayıs 1926 (Yıl 4, Sayı 20 / 63 — Grozni)",
    era: "sovyet",
    region: "Çeçen Özerk Oblastı (Grozni / Sölja-Gala)",
    language: "Çeçence (1925 Latin Alfabesi)",
    author: "Halid Oşayev, Mavsar Muzayev, Halid Yanrov & Aslanbek Şeripov Metni",
    source: "Serlo Gazetesi Arşivi (Grozni, Tip. 'Serlo', 1 Mayıs 1926)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Serlo_1926_%C5%A1o.jpg",
    catalogNo: "SRL-BK-1926-038",
    image: "/images/archive/serlo-cecence-gazete-1926.jpg",
    description:
      "23 Nisan 1923'te yayın hayatına başlayan ilk uzun soluklu Çeçence ulusal gazete 'Serlo'nun (Серло / Işık) 1 Mayıs 1926 tarihli 20 (63) sayılı tam birinci sayfası. Latin harfli Çeçence dizilmiş nüshada Halid Oşayev ('Xalid Ošajev'), Mavsar Muzayev ve Halid Yanrov'un imzalı yazıları ile Aslanbek Şeripov'un 1918'de Buru'da (Vladikavkaz) yaptığı tarihi konuşmanın Çeçence metni yer almaktadır.",
    transcription:
      "SERLO — 4-gha šo. № 20 (63). Subot 1-ra maj 1926 šo.\n1-ra Maj! Derrig duьnenan qieghash bolçu naxan deza die!\n«Proletarij ceghashna t'e h'ovzuo dieza vajn gerz!» (Aslanbek Šaripovs 1918-çu šaran maj battach Buru-ghalaḩ dina q'amel).\nAvtorš: Xalid Ošajev, Mavsar Muzajev, Xalid Janrov.",
    translation:
      "SERLO (IŞIK) — 4. Yıl, Sayı 20 (63). Cumartesi, 1 Mayıs 1926.\n1 Mayıs! Tüm dünya emekçilerinin bayram günü!\nAlt sütun: Aslanbek Şeripov'un Mayıs 1918'de Buru şehrinde (Vladikavkaz) yaptığı konuşmanın Çeçence tam metni ve Halid Oşayev, Mavsar Muzayev ile Halid Yanrov'un makaleleri.",
    notes:
      "2657×3856 piksel çözünürlüklü tam sayfa orijinal gazete taraması; 1920'ler Çeçen dili, basın tarihi ve imlası üzerine çalışan araştırmacılar için paha biçilmez bir birincil kaynaktır.",
  },
  {
    slug: "matsiyev-cecence-rusca-sozluk-1961",
    title: "Ahmet G. Matsiyev — 'Çeçence-Rusça Sözlük / Noxçiyn-Örsiyn Slovar' (Moskova, 1961)",
    type: "kitap",
    year: 1961,
    dateLabel: "1961 (Moskova: Devlet Yabancı ve Ulusal Sözlükler Yayınevi)",
    era: "yakin",
    region: "Çeçen-İnguş ÖSSC – Moskova",
    language: "Çeçence ve Rusça",
    author: "Ahmet Gehayeviç Matsiyev (1902–1968)",
    source: "Гос. изд-во иностранных и национальных словарей (Moskova, 1961 — ~20.000 Madde)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Dczdkfcnmcjdznfvrfhfcmhepdtkmn19771408.jpg",
    catalogNo: "MTS-BK-1961-047",
    image: "/images/archive/matsiyev-cecence-rusca-sozluk-1961.jpg",
    description:
      "Çeçen dilbilimci Ahmet Matsiyev'in sürgün yıllarının ağır koşullarına rağmen yıllarca fişleyerek derlediği ve 1957 dönüşünün ardından 1961'de Moskova'da yayımladığı yaklaşık 20.000 kelimelik anıtsal 'Noxçiyn-Örsiyn Slovar' (Нохчийн-Оьрсийн Словарь). Modern Çeçen sözlükbiliminin ve edebi standart dilinin temel taşı kabul edilir.",
    transcription:
      "А. Г. МАЦИЕВ — НОХЧИЙН-ОЬРСИЙН СЛОВАРЬ / ЧЕЧЕНСКО-РУССКИЙ СЛОВАРЬ. Около 20 000 слов. С приложением краткого грамматического очерка чеченского языка. Москва — 1961.",
    translation:
      "A. G. MATSİYEV — ÇEÇENCE-RUSÇA SÖZLÜK. Yaklaşık 20.000 kelime. Çeçen dilinin muhtasar gramer özeti ekiyle. Moskova — 1961.",
    notes:
      "1944 sürgününde yakılan kütüphanelerin ardından Çeçen dil hazinesini bilimsel koruma altına alan kurucu eserdir.",
  },
];

export const DOC_TYPES: { id: DocType; label: string; count: string }[] = [
  {
    id: "el-yazmasi",
    label: "El Yazmaları",
    count: `${DOCS.filter((d) => d.type === "el-yazmasi").length} belge`,
  },
  {
    id: "fotograf",
    label: "Fotoğraflar",
    count: `${DOCS.filter((d) => d.type === "fotograf").length} fotoğraf`,
  },
  {
    id: "harita",
    label: "Haritalar",
    count: `${DOCS.filter((d) => d.type === "harita").length} harita`,
  },
  {
    id: "resmi-belge",
    label: "Resmi Belgeler",
    count: `${DOCS.filter((d) => d.type === "resmi-belge").length} belge`,
  },
  {
    id: "kitap",
    label: "Kitap ve Yayınlar",
    count: `${DOCS.filter((d) => d.type === "kitap").length} eser`,
  },
];

export const getDoc = (slug: string) => DOCS.find((d) => d.slug === slug);
export const docTypeLabel = (t: DocType) => DOC_TYPES.find((x) => x.id === t)?.label ?? t;

export function formatDocCitation(doc: ArchiveDoc): string {
  const authorPart = doc.author ? `${doc.author}. ` : "";
  return `${authorPart}"${doc.title}" (${doc.dateLabel}). ${doc.source}, Katalog No: ${doc.catalogNo}. Erişim: ${doc.sourceUrl}`;
}

/* ------------------------------------------------------------------ */
/* ZAMAN ÇİZELGESİ (29 Kronolojik Tarihsel Dönüm Noktası)              */
/* ------------------------------------------------------------------ */

export type TimelineEvent = {
  year: number;
  title: string;
  short: string;
  era: Era;
  image: string;
  featuredOnHome?: boolean;
  description: string;
  people?: string[];
  docs?: string[];
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: 1650,
    title: "Kule Vadilerinde Erken Vaynah Epigrafisi ve Mehk-Khel Düzeni",
    short: "Kuleler ve Mehk-Khel",
    era: "imamet",
    image: "/images/archive/zumsoy-epigrafik-tas-yaziti.jpg",
    featuredOnHome: true,
    description:
      "Zumsoy, İtum-Kale, Şaroy ve Targim vadilerindeki taş kule yerleşimleri etrafında şekillenen özgür Vaynah toplulukları; taş bloklara kazınan epigrafik kitabeler ve Mehk-Khel (Ülke Meclisi) töre hukuku aracılığıyla feodal bey tanımayan eşitlikçi düzenini korudu.",
    people: ["seyh-mansur"],
    docs: ["zumsoy-epigrafik-tas-yaziti", "targim-savas-kulesi-1917-arsiv-fotografi"],
  },
  {
    year: 1720,
    title: "Şaroy, Himoy ve Cerah Kule Komplekslerinde Taş Tamga Geleneği",
    short: "Taş kule mimarisi",
    era: "imamet",
    image: "/images/archive/himoy-kule-kemeri-petroglif-yaziti.jpg",
    description:
      "Yüksek dağ vadilerinde beş-altı katlı savunma kuleleri (vov) ile aile konut kulelerinin (gala) kemer taşlarına kazınan güneş çarkı ve tamga petroglifleri, teypler arası dayanışma ve savunma ağının zirvesini simgeledi.",
    docs: ["himoy-kule-kemeri-petroglif-yaziti", "saroy-kule-yerlesimi-19-yuzyil-fotografi"],
  },
  {
    year: 1785,
    title: "Aldılı Şeyh Mansur Kıyamı ve Temmuz 1785 Sunja Zaferi",
    short: "Şeyh Mansur hareketi",
    era: "imamet",
    image: "/images/archive/sheikh-mansur-1787-winkler-harita-gravuru.png",
    featuredOnHome: true,
    description:
      "Aldı köyünde doğan Şeyh Mansur'un (Uşurma) adalet, eşitlik ve birlik çağrısıyla başlayan hareket, Temmuz 1785'te Sunja ormanlarında Albay Pieri müfrezesine karşı kazanılan zaferle Kuzey Kafkasya halklarını ilk kez tek bir direniş cephesinde birleştirdi.",
    people: ["seyh-mansur", "beybulat-taymiyev"],
    docs: ["sheikh-mansur-1787-winkler-harita-gravuru", "spencer-seyh-mansur-evi-gravuru-1838"],
  },
  {
    year: 1818,
    title: "Sunja Tahkimat Hattı ve Groznaya Kalesi'nin Kuruluşu",
    short: "Sunja kale hattı",
    era: "imamet",
    image: "/images/archive/kucuk-cecenya-askeri-topografya-haritasi-1848.jpg",
    description:
      "General Yermolov'un Terek'ten Sunja Nehri'ne inerek Haziran 1818'de tarihi Çeçen köylerinin kavşağında Groznaya Kalesi'ni inşa ettirmesiyle yarım asır sürecek topyekûn Kafkas Savaşı'nın Çeçenya cephesi açıldı.",
    people: ["beybulat-taymiyev", "tasav-haci"],
    docs: ["kucuk-cecenya-askeri-topografya-haritasi-1848"],
  },
  {
    year: 1819,
    title: "15 Eylül 1819 Dadi-Yurt Savunması ve Beybulat Taymiyev'in Liderliği",
    short: "Dadi-Yurt direnişi",
    era: "imamet",
    image: "/images/archive/dubois-kafkasya-genel-haritasi-1843.jpg",
    description:
      "Terek kıyısındaki Dadi-Yurt köyünün Eylül 1819'da kadın ve çocuklarıyla birlikte son evine kadar çarpışarak yok edilişi Çeçen hafızasında derin bir yara bıraktı; Beybulat Taymiyev 1820'ler boyunca Çeçen meclislerini siyasi ve askeri direnişte birleştirdi.",
    people: ["beybulat-taymiyev", "tasav-haci"],
    docs: ["dubois-kafkasya-genel-haritasi-1843"],
  },
  {
    year: 1832,
    title: "Kuzey Kafkasya İmameti Askeri Şûrası ve Gimri Direnişi",
    short: "İmamet şûrası",
    era: "imamet",
    image: "/images/archive/imamet-askeri-surasi-protokolu-1832.jpg",
    description:
      "İmam Gazi Muhammed döneminde toplanan askeri şûra, ordunun ikmal ve idaresini yazılı protokole bağladı; Ekim 1832 Gimri kuşatması ve Çeçenya'da Taşav Hacı Enderiyevski'nin mücadelesi İmamet kurumlarının temelini attı.",
    people: ["tasav-haci", "ahmad-avturinski"],
    docs: ["imamet-askeri-surasi-protokolu-1832"],
  },
  {
    year: 1834,
    title: "İmam Şamil'in Seçilmesi ve Çeçenya–Dağıstan Hukuk Birliği",
    short: "İmam Şamil dönemi",
    era: "imamet",
    image: "/images/archive/imam-samil-kirmizi-dag-sancagi.jpg",
    featuredOnHome: true,
    description:
      "1834'te Şeyh Şamil'in üçüncü imam seçilmesi ve Taşav Hacı ile kurulan ittifak sayesinde Çeçenya ile Dağıstan; naiplikler, Arapça divan yazışmaları, kadı mahkemeleri ve düzenli süvari birlikleriyle tek bir devlet çatısı altında kenetlendi.",
    people: ["tasav-haci", "suayip-molla", "isa-gendargeno", "ahmad-avturinski"],
    docs: ["imam-samil-kirmizi-dag-sancagi", "meyer-dogu-kafkasya-samil-haritasi-1856"],
  },
  {
    year: 1840,
    title: "Mart 1840 Genel Çeçenya Biatı ve 11 Temmuz Valerik Muharebesi",
    short: "Valerik muharebesi",
    era: "imamet",
    image: "/images/archive/lermontov-valerik-muharebesi-suluboya-1840.jpg",
    description:
      "Silahsızlandırma dayatmasına karşı Urus-Martan'da Şuayip Molla, İsa Gendargeno ve Ahverdi Muhammed öncülüğünde bütün Çeçenya ayağa kalktı; 11 Temmuz 1840'ta Valerik Irmağı kıyısındaki çarpışmayı şair Teğmen M. Y. Lermontov el yazması ve suluboyasıyla tarihe geçirdi.",
    people: ["isa-gendargeno", "suayip-molla", "baysangur-benoyski"],
    docs: ["lermontov-valerik-el-yazmasi-1840", "lermontov-valerik-muharebesi-suluboya-1840"],
  },
  {
    year: 1842,
    title: "İçkeriya Orman Zaferi ve İmamet Divanının Çeçen Naiplerle Yazışmaları",
    short: "İçkeriya zaferi",
    era: "imamet",
    image: "/images/archive/imam-samil-naib-isa-mektubu-1842.jpg",
    description:
      "Mayıs–Haziran 1842'de General Grabbe'nin İçkeriya seferinin Şuayip Molla ve Baysangur tarafından ağır yenilgiye uğratılmasının ardından Çeçenya naiplikleri güçlendi; İmam Şamil'in Naib İsa Gendargeno'ya gönderdiği 1842 mektubu istişare ve adalet esaslarını teyit etti.",
    people: ["isa-gendargeno", "suayip-molla", "baysangur-benoyski"],
    docs: ["imam-samil-naib-isa-mektubu-1842"],
  },
  {
    year: 1845,
    title: "Temmuz 1845 Dargo Zaferi ve Başkentin Vedeno'ya Taşınması",
    short: "Dargo ve Vedeno",
    era: "imamet",
    image: "/images/archive/imam-samil-nisanlari-arapca-yazitli.jpg",
    description:
      "Prens Vorontsov'un 18.000 kişilik ordusu Temmuz 1845'te Dargo ormanlarında Çeçen naipler tarafından kuşatılarak ağır kayıpla çekilmeye zorlandı; bu zafer sonrası Vedeno (Dargo-Vedeno) İmamet Devleti'nin resmi başkenti oldu ve liyakat nişanları ihdas edildi.",
    people: ["baysangur-benoyski", "isa-gendargeno", "talhig-salinski", "goytemir-auhovski"],
    docs: ["imam-samil-nisanlari-arapca-yazitli", "baddeley-russian-conquest-of-the-caucasus-1908"],
  },
  {
    year: 1847,
    title: "Şali Ovası Orman Kesim Harekâtları ve Talhig'in Topçu Savunması",
    short: "Şali orman cephesi",
    era: "imamet",
    image: "/images/archive/gagarin-sali-ovasi-orman-kesimi-1847.jpg",
    description:
      "Çarlık ordusunun Çeçen savunmasını kırmak için Şali, Gehi ve Goita ormanlarını sistematik olarak kestirdiği yıllarda Şali Naibi Talhig topçu dökümhaneleri ve seyyar istihkâmlarla Büyük ve Küçük Çeçenya hattını savundu.",
    people: ["talhig-salinski", "goytemir-auhovski", "dada-tsentoroyevski"],
    docs: ["gagarin-sali-ovasi-orman-kesimi-1847", "kucuk-cecenya-askeri-topografya-haritasi-1848"],
  },
  {
    year: 1859,
    title: "Vedeno ve Gunib Savunması — Berje'nin Çeçenya Haritası",
    short: "Gunib savunması",
    era: "imamet",
    image: "/images/archive/berje-cecenya-haritasi-1859.jpg",
    description:
      "Nisan 1859'da Vedeno'nun, Ağustos 1859'da Gunib'in kuşatılmasıyla merkezi İmamet idaresi sona erdi; Benoy Naibi Baysangur Gunib çemberini yararak Çeçenya'ya döndü, aynı yıl Adolf Berje Tiflis'te Çeçen boylarının kapsamlı haritasını yayımladı.",
    people: ["baysangur-benoyski", "talhig-salinski", "uma-duyev"],
    docs: ["berje-cecenya-haritasi-1859", "samil-ve-cecen-dagistan-naibleri-portreleri"],
  },
  {
    year: 1860,
    title: "Benoy ve Argun'da Yeniden Kıyam: Baysangur ve Uma Duyev",
    short: "1860 Benoy kıyamı",
    era: "imparatorluk",
    image: "/images/archive/samil-ve-cecen-dagistan-naibleri-portreleri.jpg",
    description:
      "Mayıs–Haziran 1860'ta İçkeriya köylerinin zorla sürülmesine karşı Baysangur Benoyski, Soltamurad ve Zumsoylu Uma Duyev önderliğinde Benoy, Şatoy ve Argun vadilerinde yeni bir bağımsızlık kıyamı başladı.",
    people: ["baysangur-benoyski", "uma-duyev", "soltamurad-benoyevski", "batuko-satoyski"],
    docs: ["samil-ve-cecen-dagistan-naibleri-portreleri"],
  },
  {
    year: 1861,
    title: "Benoylu Baysangur'un 20 Mart 1861 Divan-ı Harp Kararı ve Şehadeti",
    short: "Baysangur'un şehadeti",
    era: "imparatorluk",
    image: "/images/archive/baysangur-idam-emri-kafkas-ordusu-1861.jpg",
    description:
      "Benoy dağlarındaki son çarpışmada atı vurularak yaralı esir düşen tek gözlü, tek kollu ve tek bacaklı Çeçen Naibi Baysangur Benoyski, Mareşal Baryatinski'nin onayladığı 20 Mart 1861 tarihli Kafkas Ordusu emriyle Hasavyurt meydanında idam edildi.",
    people: ["baysangur-benoyski", "soltamurad-benoyevski"],
    docs: ["baysangur-idam-emri-kafkas-ordusu-1861"],
  },
  {
    year: 1862,
    title: "Kedi Dosov ve P. K. Uslar'ın İlk Basılı Çeçen Elifbası ('Noxçiyn Abat')",
    short: "İlk Çeçen elifbası",
    era: "imparatorluk",
    image: "/images/archive/dosov-ilk-cecen-elifbasi-1862.png",
    description:
      "Çeçen eğitimci Kedi Dosov ile dilbilimci Baron P. K. Uslar tarafından Tiflis'te hazırlanan ilk basılı Çeçence elifba ve atasözleri kitabı yayımlandı; Grozni'de Çeçen çocukları için ilk anadili sınıfı açıldı.",
    docs: ["dosov-ilk-cecen-elifbasi-1862", "uslar-cecenskiy-yazik-grameri-1888"],
  },
  {
    year: 1865,
    title: "1865 Osmanlı Topraklarına Büyük Çeçen–İnguş Muhacereti",
    short: "1865 Muhacereti",
    era: "imparatorluk",
    image: "/images/archive/musa-kunduhov-1865-muhaceret-arsiv-portresi.jpg",
    featuredOnHome: true,
    description:
      "Şeyh Kunta Hacı'nın sürgünü ve Ocak 1864 Şali Hançerler Muharebesi'nin ardından, 1865 baharında 28 kafile halinde yaklaşık 5.000 Çeçen, Orstkhoy ve İnguş ailesi Osmanlı topraklarına (Anadolu, Suriye, Ürdün ve Irak'a) hicret etmek zorunda bırakıldı.",
    people: ["uma-duyev", "alibek-haci"],
    docs: ["musa-kunduhov-1865-muhaceret-arsiv-portresi"],
  },
  {
    year: 1872,
    title: "Umalat Laudayev'in 'Çeçen Kavmi' Etnografyası ve George Kennan Kayıtları",
    short: "İlk yazılı etnografya",
    era: "imparatorluk",
    image: "/images/archive/umalat-laudayev-cecen-kavmi-1872.jpg",
    description:
      "Umalat Laudayev Tiflis'te yayımlanan 'Çeçen Kavmi' monografisiyle Çeçen teyp şecerelerini ve Mehk-Khel törelerini ilk kez içeriden kayda geçirdi; aynı yıllarda Amerikalı seyyah George Kennan Çeçenya'dan erken dönem fotoğrafları Kongre Kütüphanesi'ne kazandırdı.",
    docs: ["umalat-laudayev-cecen-kavmi-1872", "george-kennan-cecenler-fotografi-1870"],
  },
  {
    year: 1877,
    title: "İmam Alibek Hacı Aldamov ve 1877–1878 Bağımsızlık Kıyamı",
    short: "Alibek Hacı kıyamı",
    era: "imparatorluk",
    image: "/images/archive/terskaya-oblast-etnografya-haritasi-1892.jpg",
    description:
      "1877 Osmanlı-Rus Harbi sırasında Zandaklı 27 yaşındaki Alibek Hacı Aldamov, Soltamurad Benoyevski ve Uma Duyev önderliğinde İçkeriya, Şatoy ve Argun'da 47 Çeçen köyünün katıldığı büyük bağımsızlık ayaklanması patlak verdi.",
    people: ["alibek-haci", "soltamurad-benoyevski", "uma-duyev"],
    docs: ["terskaya-oblast-etnografya-haritasi-1892"],
  },
  {
    year: 1913,
    title: "Haraçoylu Abrek Zelimhan'ın Şali Yakınlarındaki Son Direnişi",
    short: "Abrek Zelimhan",
    era: "imparatorluk",
    image: "/images/archive/abrek-zelimhan-haracoylu-arsiv-fotografi-1913.jpg",
    description:
      "Terek Vilayeti'ndeki sömürge baskısına ve cezalandırma müfrezelerine karşı 1901'den 1913'e kadar yoksul köylülerin koruyucusu olarak çarpışan Abrek Zelimhan Guşmazukayev, 26 Eylül 1913 şafağında Şali yakınlarında tek başına kuşatılarak şehit düştü.",
    people: ["zelimhan-haracoyn"],
    docs: ["abrek-zelimhan-haracoylu-arsiv-fotografi-1913", "terskaya-oblast-etnografya-haritasi-1892"],
  },
  {
    year: 1914,
    title: "Kafkas Yerli Atlı Tümeni ve 1917 Targim Mimari Envanteri",
    short: "Kafkas Atlı Tümeni",
    era: "imparatorluk",
    image: "/images/archive/kafkas-yerli-suvari-tugayi-subaylari-1914.jpg",
    description:
      "I. Dünya Savaşı yıllarında gönüllü Çeçen ve İnguş Süvari Alayları savaş meydanlarında cesaretleriyle ün kazandı; 1917'de ise Assa-Targim vadisindeki klasik savaş kuleleri cam negatif fotoğraflarla kayıt altına alındı.",
    people: ["deni-arsanov"],
    docs: ["kafkas-yerli-suvari-tugayi-subaylari-1914", "targim-savas-kulesi-1917-arsiv-fotografi"],
  },
  {
    year: 1918,
    title: "11 Mayıs 1918 Kuzey Kafkasya Dağlıları Cumhuriyeti Bağımsızlık İlanı",
    short: "1918 Dağlılar Cumhuriyeti",
    era: "sovyet",
    image: "/images/archive/daglilar-cumhuriyeti-diplomatik-pasaport-1918.jpg",
    featuredOnHome: true,
    description:
      "Trabzon ve Batum görüşmelerinin ardından Başbakan Tapa Çermoyev ve Dışişleri Bakanı Haydar Bammat öncülüğünde Kuzey Kafkasya Dağlı Halkları Birliği Cumhuriyeti 11 Mayıs 1918'de bağımsızlığını ilan ederek kendi diplomatik pasaportlarını ve dış temsilciliklerini ihdas etti.",
    people: ["deni-arsanov", "hamid-molla"],
    docs: [
      "trabzon-konferansi-kuzey-kafkasya-heyeti-1918",
      "daglilar-cumhuriyeti-diplomatik-pasaport-1918",
      "tapa-cermoyev-resmi-mektubu-1918",
    ],
  },
  {
    year: 1919,
    title: "Paris Antlaşmaları ve Vedeno Başkentli Kuzey Kafkasya Emirliği",
    short: "Kuzey Kafkasya Emirliği",
    era: "sovyet",
    image: "/images/archive/kuzey-kafkasya-emirligi-100-ruble-vedeno-1919.jpg",
    description:
      "Temmuz 1919'da Paris'te Dağlılar Cumhuriyeti egemenlik antlaşmaları imzalarken, Denikin işgaline karşı Eylül 1919'da Vedeno'da Şeyh Uzun Hacı ve Başvezir İnaluk Dışninski tarafından Kuzey Kafkasya Emirliği kurularak kendi resmi banknotları basıldı.",
    people: ["hamid-molla", "sita-istamulov"],
    docs: [
      "daglilar-cumhuriyeti-kuban-dostluk-antlasmasi-1919",
      "kuzey-kafkasya-emirligi-100-ruble-vedeno-1919",
    ],
  },
  {
    year: 1925,
    title: "1925 Çeçen Latin Alfabesi ve 'Serlo' Ulusal Gazetesi",
    short: "Latin alfabesi ve Serlo",
    era: "sovyet",
    image: "/images/archive/serlo-cecence-gazete-1926.jpg",
    description:
      "Halid Oşayev'in hazırladığı Latin temelli Çeçen alfabesi 1925'te yürürlüğe girdi; Grozni'de yayımlanan Çeçence 'Serlo' (Işık) gazetesi ulusal edebiyat, tarih tartışmaları ve halk eğitiminin merkezi haline geldi.",
    docs: ["cecen-latin-alfabesi-abata-1925", "serlo-cecence-gazete-1926"],
  },
  {
    year: 1930,
    title: "Zorla Kolektifleştirmeye Karşı Şita İstamulov Kıyamı ve Dağ Envanterleri",
    short: "Şali-Goytı direnişi",
    era: "sovyet",
    image: "/images/archive/dan-kale-konut-kulesi-1930-kesif-fotografi.jpg",
    description:
      "1929–1930 kışında zorla kolektifleştirme ve dini-geleneksel kurumlara müdahaleye karşı Şali ve Goytı'da Şita İstamulov önderliğinde büyük halk direnişi yükseldi; 1936'da Çeçen-İnguş ÖSSC teşkil edildi.",
    people: ["sita-istamulov", "hasan-israilov"],
    docs: ["dan-kale-konut-kulesi-1930-kesif-fotografi", "cecen-ingus-assc-idari-haritasi-1937"],
  },
  {
    year: 1944,
    title: "23 Şubat 1944 'Mercimek Operasyonu' Topyekûn Sürgünü ve Haybah Faciası",
    short: "23 Şubat 1944 Sürgünü",
    era: "sovyet",
    image: "/images/archive/mercimek-operasyonu-1944-sevk-haritasi.png",
    featuredOnHome: true,
    description:
      "23 Şubat 1944 şafağında 180 yük treni katarıyla 493.269 Çeçen ve İnguş dondurucu kışta Kazakistan ve Kırgızistan'a sürüldü; 27 Şubat'ta Galançoj'un Haybah köyünde taşınamayan yüzlerce sivil ateşe verilen ahırda katledildi ve 7 Mart'ta cumhuriyet haritadan silindi.",
    people: ["hasan-israilov", "mayrbek-seripov", "hasuha-magomadov", "cevher-dudayev"],
    docs: ["mercimek-operasyonu-1944-sevk-haritasi", "grozni-oblasti-1949-tasfiye-haritasi"],
  },
  {
    year: 1957,
    title: "9 Ocak 1957 İade Kararnamesi ve 13 Yıllık Sürgünden Anavatana Dönüş",
    short: "Anavatana dönüş",
    era: "yakin",
    image: "/images/archive/vedomosti-1957-cecen-ingus-assc-iade-kararnamesi.jpg",
    featuredOnHome: true,
    description:
      "SSCB Yüksek Sovyet Prezidyumu'nun 9 Ocak 1957 kararnamesi (Vedomosti No. 4) ile Çeçen-İnguş ÖSSC yeniden kuruldu; Frunze ve Alma-Ata istasyonlarından yola çıkan aileler Prigorodnı, Auh ve Galançoj kısıtlamalarına rağmen ata ocaklarını yeniden ihya etti.",
    people: ["hasuha-magomadov", "cevher-dudayev"],
    docs: [
      "vedomosti-1957-cecen-ingus-assc-iade-kararnamesi",
      "yurt-auh-cecenleri-frunze-istasyonu-donus-1957",
      "grozni-oblasti-1949-tasfiye-haritasi",
    ],
  },
  {
    year: 1961,
    title: "Matsiyev'in 20.000 Kelimelik Çeçence Sözlüğü ve Kule Rölöve Seferleri",
    short: "Dil ve mimari ihyası",
    era: "yakin",
    image: "/images/archive/matsiyev-cecence-rusca-sozluk-1961.jpg",
    description:
      "Sürgün sonrası kültürel yeniden doğuş döneminde arkeoloji heyetleri Guçan-Kale ve Argun kulelerinin rölövelerini çıkarırken, Ahmet Matsiyev 1961'de Moskova'da modern Çeçen dilbiliminin temel eseri olan 'Noxçiyn-Örsiyn Slovar'ı yayımladı.",
    people: ["hasuha-magomadov"],
    docs: ["matsiyev-cecence-rusca-sozluk-1961", "gucan-kale-mimari-rolove-cizimi-1960"],
  },
  {
    year: 1991,
    title: "SSCB'nin Dağılışı, Çeçen Latin İmlası ve Bağımsızlık İlanı",
    short: "1991 Yeni dönem",
    era: "yakin",
    image: "/images/archive/tsotsi-yurt-cecen-latin-sokak-tabelasi-1992.jpg",
    featuredOnHome: true,
    description:
      "1991 sonbaharında Cevher Dudayev liderliğinde Çeçen Cumhuriyeti bağımsızlığını ilan etti ve 1992'de Latin temelli Çeçen alfabesi yeniden yürürlüğe kondu; Haziran 1992'de İnguşetya Cumhuriyeti ayrı bir cumhuriyet olarak yapılandı.",
    people: ["cevher-dudayev", "zelimhan-yandarbiyev", "aslan-mashadov"],
    docs: [
      "tsotsi-yurt-cecen-latin-sokak-tabelasi-1992",
      "cecen-cumhuriyeti-ickeriya-pasaportu-1994",
    ],
  },
  {
    year: 1995,
    title: "Grozni Kuşatması ve Uluslararası İnsan Hakları Tanıklıkları",
    short: "Grozni tanıklıkları",
    era: "yakin",
    image: "/images/archive/grozni-kusatmasi-dua-eden-cecen-evstafiev-1995.jpg",
    description:
      "Aralık 1994'te başlayan Birinci Çeçen Savaşı ve Ocak 1995 Grozni Kuşatması ağır sivil kayıplara ve kentsel yıkıma yol açtı; savaş foto-muhabirleri ile Sergey Kovalyov ve Memorial heyetlerinin raporları yaşanan insani trajediyi dünya arşivlerine kaydetti.",
    people: ["cevher-dudayev", "aslan-mashadov", "imam-alimsultanov"],
    docs: [
      "grozni-kusatmasi-dua-eden-cecen-evstafiev-1995",
      "kovalyov-grozni-insan-haklari-basin-toplantisi-1995",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* HARİTA (26 Doğrulanmış Tarihsel Mekan — Atlas Projeksiyonunda)       */
/* ------------------------------------------------------------------ */

export type PlaceKind = "yerlesim" | "kule" | "koy" | "savas";

export const PLACE_KINDS: { id: PlaceKind; label: string }[] = [
  { id: "yerlesim", label: "Yerleşimler" },
  { id: "kule", label: "Kuleler" },
  { id: "koy", label: "Köyler" },
  { id: "savas", label: "Savaşlar" },
];

export type Place = {
  id: string;
  name: string;
  kind: PlaceKind;
  lat: number;
  lon: number;
  year: number;
  period: string;
  image: string;
  description: string;
  people?: string[];
  docs?: string[];
};

export const PLACES: Place[] = [
  {
    id: "targim",
    name: "Targim Kuleleri",
    kind: "kule",
    lat: 42.83,
    lon: 44.88,
    year: 1400,
    period: "XIII–XIX. yüzyıllar",
    image: "/images/archive/targim-savas-kulesi-1917-arsiv-fotografi.jpg",
    description:
      "İnguşetya'nın Cerah–Assa havzasında yükselen dört büyük klasik savaş kulesi ve konut yapılarından oluşan tarihi kompleks. 1917 cam negatif fotoğraflarıyla belgelenen ve arşivimize adını veren hafıza vadisi.",
    people: ["seyh-mansur", "hasan-israilov"],
    docs: ["targim-savas-kulesi-1917-arsiv-fotografi", "kucuk-cecenya-askeri-topografya-haritasi-1848"],
  },
  {
    id: "vovnuski",
    name: "Vovnuşki",
    kind: "kule",
    lat: 42.79,
    lon: 45.06,
    year: 1500,
    period: "XV–XVIII. yüzyıllar",
    image: "/images/hf-kule-sisli-sirt.jpg",
    description:
      "Guloy-Hi vadisinde sarp kayalık zirvelerin bıçak sırtına kenetlenmiş, taş mazgalları ve piramidal çatılarıyla Vaynah savunma mimarisinin en çarpıcı kule topluluğu.",
    people: ["seyh-mansur", "hasan-israilov"],
    docs: ["targim-savas-kulesi-1917-arsiv-fotografi", "dubois-kafkasya-genel-haritasi-1843"],
  },
  {
    id: "erzi",
    name: "Erzi",
    kind: "kule",
    lat: 42.76,
    lon: 44.95,
    year: 1500,
    period: "XIV–XVIII. yüzyıllar",
    image: "/images/hf-kule-sabah.jpg",
    description:
      "Vaynah dilinde 'Kartal' (Ärzi) anlamına gelen, Armhi vadisine hâkim sekiz savaş kulesi ve çok sayıda konut kulesinden oluşan anıtsal dağ yerleşimi.",
    people: ["seyh-mansur", "batuko-satoyski"],
    docs: ["targim-savas-kulesi-1917-arsiv-fotografi", "kucuk-cecenya-askeri-topografya-haritasi-1848"],
  },
  {
    id: "nikaroy",
    name: "Nikaroy (Terloy)",
    kind: "kule",
    lat: 42.73,
    lon: 45.36,
    year: 1450,
    period: "XIV–XVIII. yüzyıllar",
    image: "/images/archive/gucan-kale-mimari-rolove-cizimi-1960.jpg",
    description:
      "Çeçenya'nın Terloy-Ahk vadisinde basamaklı piramidal çatılı beş katlı savaş kulesi, taş camisi ve yamaç konutlarıyla korunan en önemli Vaynah mimari komplekslerinden biri.",
    people: ["hasan-israilov", "hasuha-magomadov"],
    docs: ["gucan-kale-mimari-rolove-cizimi-1960", "cecen-ingus-assc-idari-haritasi-1937"],
  },
  {
    id: "saroy",
    name: "Şaroy ve Himoy Kuleleri",
    kind: "kule",
    lat: 42.63,
    lon: 45.82,
    year: 1550,
    period: "XIV–XIX. yüzyıllar",
    image: "/images/archive/saroy-kule-yerlesimi-19-yuzyil-fotografi.jpg",
    description:
      "Şaro-Argun vadisinde yükselen yedi savaş kulesi, konut kuleleri ve Himoy kemer taşlarındaki güneş çarkı petroglifleriyle ünlü tarihi Çeçen dağ merkezi.",
    people: ["uma-duyev", "batuko-satoyski"],
    docs: [
      "saroy-kule-yerlesimi-19-yuzyil-fotografi",
      "himoy-kule-kemeri-petroglif-yaziti",
      "berje-cecenya-haritasi-1859",
    ],
  },
  {
    id: "hoy",
    name: "Hoy (Çeberloy)",
    kind: "kule",
    lat: 42.76,
    lon: 46.13,
    year: 1500,
    period: "XIII–XIX. yüzyıllar",
    image: "/images/archive/dan-kale-konut-kulesi-1930-kesif-fotografi.jpg",
    description:
      "Kezenoy-Am gölünün güneyindeki Çeberloy bölgesinde, adını 'Muhafızlar Yerleşimi' (Hoy) kelimesinden alan, sarp kanyon kenarına dizilmiş gözetleme ve konut kuleleri bütünü.",
    people: ["alibek-haci", "zelimhan-haracoyn"],
    docs: ["dan-kale-konut-kulesi-1930-kesif-fotografi", "berje-cecenya-haritasi-1859"],
  },
  {
    id: "itum-kale",
    name: "İtum-Kale ve Zumsoy",
    kind: "koy",
    lat: 42.73,
    lon: 45.58,
    year: 1600,
    period: "Orta Çağ – günümüz",
    image: "/images/archive/zumsoy-epigrafik-tas-yaziti.jpg",
    description:
      "Yukarı Argun Boğazı'nda Phakoç kalesi, Guçan-Kale, Dan-Kale ve Zumsoy epigrafik taş kitabelerini barındıran, Zumsoylu Naib Uma Duyev'in vatanı olan sarp dağ havzası.",
    people: ["uma-duyev", "batuko-satoyski", "hasuha-magomadov", "tarhan-gaziyev"],
    docs: [
      "zumsoy-epigrafik-tas-yaziti",
      "gucan-kale-mimari-rolove-cizimi-1960",
      "dan-kale-konut-kulesi-1930-kesif-fotografi",
    ],
  },
  {
    id: "vladikavkaz",
    name: "Vladikavkaz (Buro)",
    kind: "yerlesim",
    lat: 43.03,
    lon: 44.68,
    year: 1784,
    period: "1784 – günümüz",
    image: "/images/archive/daglilar-cumhuriyeti-diplomatik-pasaport-1918.jpg",
    description:
      "Daryal Boğazı'nın girişinde tarihi İnguş köyü Zaur-Yurt yakınında kurulan idari merkez; 1917–1918'de Kuzey Kafkasya Dağlı Halkları Birliği Cumhuriyeti'nin kurucu meclisine ve hükümetine ev sahipliği yapmıştır.",
    people: ["seyh-mansur", "deni-arsanov"],
    docs: [
      "kucuk-cecenya-askeri-topografya-haritasi-1848",
      "daglilar-cumhuriyeti-diplomatik-pasaport-1918",
      "terskaya-oblast-etnografya-haritasi-1892",
    ],
  },
  {
    id: "nazran",
    name: "Nazran (Nasar-Kort)",
    kind: "yerlesim",
    lat: 43.22,
    lon: 44.77,
    year: 1781,
    period: "XVIII. yüzyıl – günümüz",
    image: "/images/archive/musa-kunduhov-1865-muhaceret-arsiv-portresi.jpg",
    description:
      "Sunja ve Nazranka nehirlerinin kavşağında İnguş ovalık yerleşimlerinin tarihsel kalbi; Mayıs 1858 Nazran Kıyamı'nın, 1865 muhaceret kafilelerinin ve 1992 İnguşetya kuruluş sürecinin kilit merkezidir.",
    people: ["seyh-mansur", "hasan-israilov"],
    docs: [
      "kucuk-cecenya-askeri-topografya-haritasi-1848",
      "musa-kunduhov-1865-muhaceret-arsiv-portresi",
      "mercimek-operasyonu-1944-sevk-haritasi",
    ],
  },
  {
    id: "haybah",
    name: "Haybah (Galançoj)",
    kind: "koy",
    lat: 42.89,
    lon: 45.28,
    year: 1944,
    period: "Orta Çağ – 27 Şubat 1944",
    image: "/images/archive/cecen-ingus-assc-idari-haritasi-1937.png",
    description:
      "Çeçenlerin kadim ata ocağı Naşha–Galançoj bölgesindeki dağ köyü. 27 Şubat 1944 sürgünü sırasında kar yüzünden tren istasyonlarına indirilemeyen yaşlı, kadın ve çocuk yüzlerce sivilin Lavrenti Beria'nın komiseri Gvişiani emriyle kolektif çiftlik ahırında yakılarak katledildiği hafıza mekanı.",
    people: ["hasan-israilov", "mayrbek-seripov", "cevher-dudayev"],
    docs: [
      "cecen-ingus-assc-idari-haritasi-1937",
      "mercimek-operasyonu-1944-sevk-haritasi",
      "grozni-oblasti-1949-tasfiye-haritasi",
    ],
  },
  {
    id: "valerik",
    name: "Valerik Irmağı",
    kind: "savas",
    lat: 43.17,
    lon: 45.41,
    year: 1840,
    period: "11 Temmuz 1840",
    image: "/images/archive/lermontov-valerik-muharebesi-suluboya-1840.jpg",
    description:
      "Küçük Çeçenya'nın Gehi orman kuşağında, Naib Ahverdi Muhammed ve İsa Gendargeno komutasındaki Çeçen savaşçıların 11 Temmuz 1840'ta General Galafeyev kolordusuyla göğüs göğüse çarpıştığı ve M. Y. Lermontov'un dizeleriyle tarihe geçen muharebe alanı.",
    people: ["isa-gendargeno", "suayip-molla"],
    docs: [
      "lermontov-valerik-el-yazmasi-1840",
      "lermontov-valerik-muharebesi-suluboya-1840",
      "kucuk-cecenya-askeri-topografya-haritasi-1848",
    ],
  },
  {
    id: "sunja",
    name: "Sunja Ormanları Zaferi",
    kind: "savas",
    lat: 43.25,
    lon: 45.45,
    year: 1785,
    period: "Temmuz 1785",
    image: "/images/archive/sheikh-mansur-1787-winkler-harita-gravuru.png",
    description:
      "Şeyh Mansur önderliğindeki Çeçen ve Kafkas gönüllülerinin Temmuz 1785'te Aldı üzerine yürüyen Albay Pieri müfrezesini Sunja Nehri geçişinde ağır yenilgiye uğrattığı tarihi dönüm noktası.",
    people: ["seyh-mansur", "beybulat-taymiyev"],
    docs: ["sheikh-mansur-1787-winkler-harita-gravuru", "spencer-seyh-mansur-evi-gravuru-1838"],
  },
  {
    id: "urus-martan",
    name: "Urus-Martan (Halha-Marta)",
    kind: "yerlesim",
    lat: 43.13,
    lon: 45.54,
    year: 1840,
    period: "XVIII. yüzyıl – günümüz",
    image: "/images/archive/imam-samil-naib-isa-mektubu-1842.jpg",
    description:
      "Küçük Çeçenya'nın siyasi ve dini merkezi; Mart 1840'ta Çeçen temsilcilerinin Naib İsa Gendargeno ev sahipliğinde İmam Şamil ile buluşup genel Çeçenya biatını ilan ettiği tarihi yerleşim.",
    people: ["isa-gendargeno", "suayip-molla", "beybulat-taymiyev", "vaha-arsanov"],
    docs: [
      "imam-samil-naib-isa-mektubu-1842",
      "kucuk-cecenya-askeri-topografya-haritasi-1848",
      "berje-cecenya-haritasi-1859",
    ],
  },
  {
    id: "aldi",
    name: "Aldı (Bulhan-Yurt)",
    kind: "koy",
    lat: 43.28,
    lon: 45.65,
    year: 1760,
    period: "XVIII–XX. yüzyıllar",
    image: "/images/archive/spencer-seyh-mansur-evi-gravuru-1838.jpg",
    description:
      "Kuzey Kafkasya'nın ilk imamı Şeyh Mansur'un (Uşurma, 1760–1794) doğduğu ve 1785 birleşme hareketinin ilk kıvılcımının çaktığı tarihi Sunja köyü.",
    people: ["seyh-mansur", "beybulat-taymiyev"],
    docs: ["spencer-seyh-mansur-evi-gravuru-1838", "sheikh-mansur-1787-winkler-harita-gravuru"],
  },
  {
    id: "grozni",
    name: "Grozni (Sölja-Gala / Cevherkale)",
    kind: "yerlesim",
    lat: 43.32,
    lon: 45.69,
    year: 1818,
    period: "1818 – günümüz",
    image: "/images/archive/serlo-cecence-gazete-1926.jpg",
    description:
      "Sunja Nehri kıyısında tarihi Çeçen köylerinin kavşağında kurulan başkent. 1862'de ilk Çeçence okulun açıldığı, 1920'lerde 'Serlo' gazetesinin basıldığı ve 1994–1995 kışında modern Avrupa tarihinin en ağır kuşatmalarından birini yaşayan siyasi-kültürel merkez.",
    people: ["deni-arsanov", "cevher-dudayev", "zelimhan-yandarbiyev", "aslan-mashadov", "imam-alimsultanov"],
    docs: [
      "dosov-ilk-cecen-elifbasi-1862",
      "serlo-cecence-gazete-1926",
      "vedomosti-1957-cecen-ingus-assc-iade-kararnamesi",
      "cecen-cumhuriyeti-ickeriya-pasaportu-1994",
      "grozni-kusatmasi-dua-eden-cecen-evstafiev-1995",
      "kovalyov-grozni-insan-haklari-basin-toplantisi-1995",
    ],
  },
  {
    id: "satoy",
    name: "Şatoy (Şuota)",
    kind: "yerlesim",
    lat: 42.87,
    lon: 45.69,
    year: 1858,
    period: "Orta Çağ – günümüz",
    image: "/images/archive/berje-cecenya-haritasi-1859.jpg",
    description:
      "Argun Boğazı'nın kalbinde Naib Batuko Şatoyski'nin idare merkezi olan, tarihi Hakkoy savunma kulesiyle korunan ve 1858, 1860, 1877 ile 1940–1944 dağ direnişlerinde kilit rol oynayan yayla yerleşimi.",
    people: ["batuko-satoyski", "uma-duyev", "hasan-israilov", "mayrbek-seripov"],
    docs: ["berje-cecenya-haritasi-1859", "cecen-ingus-assc-idari-haritasi-1937"],
  },
  {
    id: "sali",
    name: "Şali",
    kind: "yerlesim",
    lat: 43.15,
    lon: 45.90,
    year: 1847,
    period: "XIX–XX. yüzyıllar",
    image: "/images/archive/gagarin-sali-ovasi-orman-kesimi-1847.jpg",
    description:
      "Büyük Çeçenya ovasının kalbi; İmamet'in topçu komutanı Naib Talhig'in karargâhı, Ocak 1864 Kunta Hacı müridlerinin 'Hançerler Muharebesi' sahası, Eylül 1913'te Abrek Zelimhan'ın şehit düştüğü yer ve 1930 Şita İstamulov direnişinin merkezidir.",
    people: ["talhig-salinski", "zelimhan-haracoyn", "sita-istamulov", "aslan-mashadov"],
    docs: [
      "gagarin-sali-ovasi-orman-kesimi-1847",
      "abrek-zelimhan-haracoylu-arsiv-fotografi-1913",
      "berje-cecenya-haritasi-1859",
    ],
  },
  {
    id: "tsotsi-yurt",
    name: "Tsotsi-Yurt",
    kind: "koy",
    lat: 43.23,
    lon: 46.01,
    year: 1830,
    period: "XIX–XX. yüzyıllar",
    image: "/images/archive/tsotsi-yurt-cecen-latin-sokak-tabelasi-1992.jpg",
    description:
      "Hulhulau Irmağı kıyısında yer alan tarihi Nohçmahkahoy ovalık köyü; 1840'lardaki Kafkas Savaşı tahkimatlarından 1992 Çeçen Latin alfabesi uygulamalarına dek kesintisiz yerleşim hafızasını korumuştur.",
    people: ["ahmad-avturinski", "dada-tsentoroyevski"],
    docs: ["tsotsi-yurt-cecen-latin-sokak-tabelasi-1992", "berje-cecenya-haritasi-1859"],
  },
  {
    id: "vedeno",
    name: "Vedeno",
    kind: "yerlesim",
    lat: 42.97,
    lon: 46.10,
    year: 1845,
    period: "İmamet (1845–1859) ve Emirlik (1919–1920) Başkenti",
    image: "/images/archive/kuzey-kafkasya-emirligi-100-ruble-vedeno-1919.jpg",
    description:
      "1845'ten Nisan 1859'a kadar İmam Şamil'in İmamet Devleti'ne, 1919–1920'de ise Şeyh Uzun Hacı'nın kendi banknotlarını bastırdığı Kuzey Kafkasya Emirliği'ne başkentlik yapan tarihi İçkeriya merkezi.",
    people: ["baysangur-benoyski", "alibek-haci", "zelimhan-haracoyn", "samil-basayev"],
    docs: [
      "imam-samil-nisanlari-arapca-yazitli",
      "imam-samil-kirmizi-dag-sancagi",
      "meyer-dogu-kafkasya-samil-haritasi-1856",
      "kuzey-kafkasya-emirligi-100-ruble-vedeno-1919",
    ],
  },
  {
    id: "harachoy",
    name: "Haraçoy",
    kind: "koy",
    lat: 42.91,
    lon: 46.14,
    year: 1872,
    period: "XIX–XX. yüzyıllar",
    image: "/images/archive/abrek-zelimhan-haracoylu-arsiv-fotografi-1913.jpg",
    description:
      "Vedeno'dan Andi sıradağlarına çıkan Hulhulau geçidinin kapısında yer alan, 'Kızlar Pınarı' ve efsanevi Abrek Zelimhan Guşmazukayev'in (1872–1913) memleketi olmasıyla tanınan dağ köyü.",
    people: ["zelimhan-haracoyn", "alibek-haci"],
    docs: ["abrek-zelimhan-haracoylu-arsiv-fotografi-1913", "george-kennan-cecenler-fotografi-1870"],
  },
  {
    id: "dargo",
    name: "Dargo Muharebesi",
    kind: "savas",
    lat: 42.94,
    lon: 46.18,
    year: 1845,
    period: "Temmuz 1845",
    image: "/images/archive/baddeley-russian-conquest-of-the-caucasus-1908.jpg",
    description:
      "Temmuz 1845'te Kafkasya Genel Valisi Prens Vorontsov komutasındaki kolordunun İçkeriya kayın ormanlarında Baysangur, Şuayip Molla'nın halefleri ve İsa Gendargeno tarafından kuşatılarak üç general ve binlerce asker kaybıyla geri çekildiği tarihi zafer.",
    people: ["tasav-haci", "suayip-molla", "isa-gendargeno", "baysangur-benoyski"],
    docs: [
      "baddeley-russian-conquest-of-the-caucasus-1908",
      "meyer-dogu-kafkasya-samil-haritasi-1856",
      "imam-samil-nisanlari-arapca-yazitli",
    ],
  },
  {
    id: "dadi-yurt",
    name: "Dadi-Yurt Direnişi",
    kind: "savas",
    lat: 43.46,
    lon: 46.23,
    year: 1819,
    period: "15 Eylül 1819",
    image: "/images/archive/dubois-kafkasya-genel-haritasi-1843.jpg",
    description:
      "Terek Nehri'nin sağ kıyısındaki büyük Çeçen yerleşimi Dadi-Yurt'un 15 Eylül 1819'da Yermolov'un emriyle General Sısoyev birliklerince kuşatılıp topa tutularak tamamen yok edildiği, kadınların esir düşmemek için Terek sularına atladığı trajik direniş noktası.",
    people: ["beybulat-taymiyev", "tasav-haci"],
    docs: ["dubois-kafkasya-genel-haritasi-1843", "baddeley-russian-conquest-of-the-caucasus-1908"],
  },
  {
    id: "benoy",
    name: "Benoy",
    kind: "koy",
    lat: 42.99,
    lon: 46.32,
    year: 1860,
    period: "XVIII–XX. yüzyıllar",
    image: "/images/archive/baysangur-idam-emri-kafkas-ordusu-1861.jpg",
    description:
      "Doğu İçkeriya'nın yüksek ormanlık yaylalarında yer alan en büyük Çeçen teyp merkezlerinden biri; Naib Baysangur Benoyski ve Soltamurad Benoyevski'nin 1860–1861 ve 1877 bağımsızlık kıyamlarının kalesi.",
    people: ["baysangur-benoyski", "soltamurad-benoyevski", "alibek-haci", "aydamir-abalayev"],
    docs: ["baysangur-idam-emri-kafkas-ordusu-1861", "samil-ve-cecen-dagistan-naibleri-portreleri"],
  },
  {
    id: "hasavyurt",
    name: "Hasavyurt ve Yurt-Auh",
    kind: "yerlesim",
    lat: 43.25,
    lon: 46.59,
    year: 1846,
    period: "XIX–XX. yüzyıllar",
    image: "/images/archive/yurt-auh-cecenleri-frunze-istasyonu-donus-1957.jpg",
    description:
      "Tarihi Auh (Akki-Çeçen) bölgesi ile Kumuk Ovası'nın birleştiği merkez. Taşav Hacı Enderiyevski ve Goytemir Auhovski'nin mücadele sahası, Mart 1861'de Baysangur Benoyski'nin idam edildiği meydan ve Ağustos 1996 Hasavyurt Ateşkes Antlaşması'nın imzalandığı kent.",
    people: ["tasav-haci", "goytemir-auhovski", "baysangur-benoyski", "aslan-mashadov"],
    docs: [
      "baysangur-idam-emri-kafkas-ordusu-1861",
      "yurt-auh-cecenleri-frunze-istasyonu-donus-1957",
      "grozni-oblasti-1949-tasfiye-haritasi",
    ],
  },
  {
    id: "gimri",
    name: "Gimri",
    kind: "koy",
    lat: 42.75,
    lon: 46.84,
    year: 1832,
    period: "Ekim 1832",
    image: "/images/archive/imamet-askeri-surasi-protokolu-1832.jpg",
    description:
      "Andi ve Avar Koysu nehirlerinin kavşağında Birinci İmam Gazi Muhammed ve Üçüncü İmam Şeyh Şamil'in doğduğu, Ekim 1832 kuşatmasında Gazi Muhammed'in şehit düştüğü sarp dağ köyü.",
    people: ["tasav-haci", "ahmad-avturinski"],
    docs: ["imamet-askeri-surasi-protokolu-1832", "meyer-dogu-kafkasya-samil-haritasi-1856"],
  },
  {
    id: "gunib",
    name: "Gunib Platosu",
    kind: "savas",
    lat: 42.39,
    lon: 46.96,
    year: 1859,
    period: "Ağustos 1859",
    image: "/images/archive/samil-ve-cecen-dagistan-naibleri-portreleri.jpg",
    description:
      "İmam Şamil'in Ağustos 1859'da son savunmasını yaptığı ve Benoy Naibi Baysangur'un teslimiyeti reddederek kuşatma çemberini silahla yarıp Çeçenya'ya çıktığı sarp doğal kale platosu.",
    people: ["baysangur-benoyski", "talhig-salinski", "uma-duyev"],
    docs: ["samil-ve-cecen-dagistan-naibleri-portreleri", "baysangur-idam-emri-kafkas-ordusu-1861"],
  },
];

/* ------------------------------------------------------------------ */
/* SERGİLER (6 Küratöryel Dijital Sergi — Gerçek Belge Sayılarıyla)     */
/* ------------------------------------------------------------------ */

export type Exhibition = {
  slug: string;
  title: string;
  subtitle: string;
  theme: string;
  curator: string;
  period: string;
  count: number;
  image: string;
  summary: string;
  body: string[];
  docs: string[];
  people?: string[];
};

export const EXHIBITION_THEMES = [
  "Kafkasya Direnişi",
  "Kuleler ve Yerleşimler",
  "1918 Devlet Arayışları",
  "Dil, Yazı ve Basın",
  "Sürgün 1944",
  "Kültür ve Günlük Yaşam",
];

const RAW_EXHIBITIONS: Omit<Exhibition, "count">[] = [
  {
    slug: "kafkasyanin-ozgurluk-mucadelesi",
    title: "Kafkasya'nın Özgürlük Mücadelesi",
    subtitle: "Şeyh Mansur'dan İmamet Divanına ve Baysangur'a Bir Asırlık Birincil Evrak",
    theme: "Kafkasya Direnişi",
    curator: "Targim Tarih Araştırmaları Kurulu",
    period: "1785 – 1861",
    image: "/images/archive/imam-samil-naib-isa-mektubu-1842.jpg",
    summary:
      "1787 Şeyh Mansur cephe haritasından 1832 üç mühürlü İmamet şûra protokolüne, İmam Şamil'in Naib İsa Gendargeno'ya yazdığı Arapça mektuptan Baysangur'un 1861 idam emrine uzanan doğrulanmış arşiv seçkisi.",
    body: [
      "Bu küratöryel sergi, 1785'ten 1861'e uzanan dönemde Çeçen ve Kuzey Kafkasya halklarının bağımsızlık ve hukuk birliği mücadelesini Dağıstan Ulusal Müzesi, Puşkin Evi (İRLİ RAN), Devlet Tarih Müzesi (GİM) ve Kafkas Arkeografi Komisyonu yayınlarından derlenen gerçek birincil kaynaklarla sunar.",
      "İmamet dönemi yalnızca askeri bir cephe değil; mühürlü Arapça şûra protokolleri, Çeçen naiplere gönderilen divan mektupları, savatlı gümüş liyakat nişanları ve bölgeler üstü dayanışma bilinciyle Kafkasya'nın siyasal hafızasında derin izler bırakan bir devlet tecrübesiydi.",
      "Araştırmacılar bu sergide Lermontov'un Temmuz 1840 Valerik Muharebesi el yazmasını, Şamil'in 1842 tarihli Naib İsa mektubunu ve Mareşal Baryatinski imzalı 20 Mart 1861 Baysangur kararını orijinal transkripsiyon ve Türkçe çevirileriyle karşılaştırmalı olarak inceleyebilir.",
    ],
    docs: [
      "sheikh-mansur-1787-winkler-harita-gravuru",
      "imamet-askeri-surasi-protokolu-1832",
      "lermontov-valerik-el-yazmasi-1840",
      "lermontov-valerik-muharebesi-suluboya-1840",
      "imam-samil-naib-isa-mektubu-1842",
      "imam-samil-nisanlari-arapca-yazitli",
      "gagarin-sali-ovasi-orman-kesimi-1847",
      "kucuk-cecenya-askeri-topografya-haritasi-1848",
      "meyer-dogu-kafkasya-samil-haritasi-1856",
      "baysangur-idam-emri-kafkas-ordusu-1861",
      "baddeley-russian-conquest-of-the-caucasus-1908",
    ],
    people: [
      "seyh-mansur",
      "beybulat-taymiyev",
      "tasav-haci",
      "isa-gendargeno",
      "suayip-molla",
      "talhig-salinski",
      "baysangur-benoyski",
    ],
  },
  {
    slug: "kuleler-ve-yerlesimler",
    title: "Taştan Yükselen Hafıza: Kuleler ve Epigrafi",
    subtitle: "Zumsoy, Himoy, Şaroy, Dan-Kale ve Targim Vadilerinin Arkeolojik Mirası",
    theme: "Kuleler ve Yerleşimler",
    curator: "Mimari, Arkeoloji ve Epigrafi Bölümü",
    period: "XIII – XX. Yüzyıllar",
    image: "/images/archive/targim-savas-kulesi-1917-arsiv-fotografi.jpg",
    summary:
      "1917 Targim ve 1885 Şaroy cam negatif fotoğrafları, Zumsoy taş yazıtları, Himoy güneş petroglifleri, 1930 Dan-Kale saha fotoğrafları ve 1960 Guçan-Kale mimari rölöve çizimleri.",
    body: [
      "Piramidal basamaklı taş çatılarıyla göğe uzanan savaş kuleleri (vov) ve aile ocağının kalbi olan konut kuleleri (gala); Çeçen ve İnguş toplumunda soyun, misafirperverliğin ve özgürlüğün taşlaşmış anıtlarıdır.",
      "Her kulenin kapı kemerinde yer alan sarmal güneş (çarkıfelek) petroglifleri ve Zumsoy vadisinde olduğu gibi taş bloklara kazınmış erken dönem epigrafik harfler, o vadide kök salan teypin asırlık tapusunu oluşturur.",
      "Sergi; 1944 sürgünü ve 1990'lardaki çatışmalardan önce çekilmiş 19. yüzyıl Şaroy, 1917 Targim ve 1930 Dan-Kale saha fotoğraflarını 1960 tarihli Guçan-Kale arkeolojik rölöve paftasıyla bir araya getirerek genç mimarlık ve tarih araştırmacılarına sağlam bir referans seti sunar.",
    ],
    docs: [
      "zumsoy-epigrafik-tas-yaziti",
      "himoy-kule-kemeri-petroglif-yaziti",
      "spencer-seyh-mansur-evi-gravuru-1838",
      "saroy-kule-yerlesimi-19-yuzyil-fotografi",
      "targim-savas-kulesi-1917-arsiv-fotografi",
      "dan-kale-konut-kulesi-1930-kesif-fotografi",
      "gucan-kale-mimari-rolove-cizimi-1960",
    ],
    people: ["seyh-mansur", "uma-duyev", "batuko-satoyski", "hasuha-magomadov"],
  },
  {
    slug: "bagimsizlik-ve-devlet-arayislari-1918",
    title: "1918–1920 Bağımsızlık ve Devlet Arayışları",
    subtitle: "Dağlılar Cumhuriyeti Diplomasisinden Vedeno Emirliği Banknotlarına",
    theme: "1918 Devlet Arayışları",
    curator: "Modern Siyasi Tarih ve Diplomasi Fonu",
    period: "1914 – 1920",
    image: "/images/archive/kuzey-kafkasya-emirligi-100-ruble-vedeno-1919.jpg",
    summary:
      "Trabzon ve Paris konferanslarındaki Kuzey Kafkasya heyetleri, Haydar Bammat imzalı Fransızca diplomatik pasaport, Tapa Çermoyev'in resmi mektubu ve Vedeno'da basılan 100 Rublelik Kuzey Kafkasya Emirliği parası.",
    body: [
      "Çarlık İmparatorluğu'nun 1917'de çökmesiyle Kuzey Kafkasya halkları, bir asırlık askeri işgalin ardından modern uluslararası hukuk zemini üzerinde bağımsız devletlerini kurmak üzere harekete geçti.",
      "11 Mayıs 1918'de ilan edilen Kuzey Kafkasya Dağlı Halkları Birliği Cumhuriyeti; Trabzon, Batum ve 1919 Paris Barış Konferansı'nda diplomatik pasaportları, ikili dostluk antlaşmaları ve çok dilli dış temsilcilikleriyle Kafkasya'nın ortak demokratik cumhuriyet iradesini temsil etti.",
      "Aynı dönemde Denikin ordularının Çeçenya'yı işgal girişimine karşı Eylül 1919'da Vedeno'da ilan edilen Kuzey Kafkasya Emirliği'nin Arapça, Rusça ve Fransızca bastırdığı 100 Rublelik banknotlar, dağlarda devlet egemenliği fikrinin ne denli güçlü kurumsallaştığını gösterir.",
    ],
    docs: [
      "kafkas-yerli-suvari-tugayi-subaylari-1914",
      "trabzon-konferansi-kuzey-kafkasya-heyeti-1918",
      "daglilar-cumhuriyeti-diplomatik-pasaport-1918",
      "tapa-cermoyev-resmi-mektubu-1918",
      "daglilar-cumhuriyeti-kuban-dostluk-antlasmasi-1919",
      "kuzey-kafkasya-emirligi-100-ruble-vedeno-1919",
    ],
    people: ["deni-arsanov", "hamid-molla", "sita-istamulov"],
  },
  {
    slug: "cecen-dil-yazi-ve-basini",
    title: "Nohçiyn Mott: Çeçen Dil, Yazı ve Basın Tarihi",
    subtitle: "1862 Kedi Dosov Elifbasından 1926 'Serlo' Gazetesine ve Matsiyev Sözlüğüne",
    theme: "Dil, Yazı ve Basın",
    curator: "Kafkas Dilbilimi ve Matbuat Tarihi Birimi",
    period: "1862 – 1992",
    image: "/images/archive/serlo-cecence-gazete-1926.jpg",
    summary:
      "Çeçen dilinin 130 yıllık yazılı serüveni: 1862 Tiflis 'Noxçiyn Abat' baskısı, 1872 Laudayev etnografyası, 1888 Uslar grameri, 1925 Latin alfabesi, 1926 'Serlo' gazetesi, 1961 Matsiyev sözlüğü ve 1992 Latin sokak tabelaları.",
    body: [
      "Nah dil ailesinin en büyük kolu olan Çeçence (Nohçiyn mott), zengin ses envanteri, altı isim sınıfı ve kök-bükün yapısıyla Kafkasya'nın en kadim yerli dillerindendir.",
      "İmamet devrindeki Arap harfli (Acem) yazışmaların ardından 1862'de Kedi Dosov ve P. K. Uslar'ın Tiflis'te bastırdığı ilk Çeçence elifba, 1925'te Halid Oşayev'in Latin alfabesi ve 'Serlo' gazetesiyle büyük bir basın-edebiyat hamlesine dönüştü.",
      "1938 Kiril geçişi ve 1944 sürgünündeki kitap yıkımlarına rağmen Ahmet Matsiyev'in 1961'de yayımladığı 20.000 kelimelik sözlük dilin bilimsel omurgasını kurtardı; 1992'de Tsotsi-Yurt sokaklarına asılan Latin harfli tabelalar ise bu yazı hafızasının sürekliliğini belgeledi.",
    ],
    docs: [
      "dosov-ilk-cecen-elifbasi-1862",
      "umalat-laudayev-cecen-kavmi-1872",
      "uslar-cecenskiy-yazik-grameri-1888",
      "cecen-latin-alfabesi-abata-1925",
      "serlo-cecence-gazete-1926",
      "matsiyev-cecence-rusca-sozluk-1961",
      "tsotsi-yurt-cecen-latin-sokak-tabelasi-1992",
    ],
    people: ["zelimhan-yandarbiyev", "imam-alimsultanov"],
  },
  {
    slug: "surgun-1944",
    title: "1865 Muhaceretinden 23 Şubat 1944'e: Sürgün ve Dönüş",
    subtitle: "GARF Sevkiyat Telgrafları, Tasfiye Haritaları, 1957 Vedomosti Kararnamesi ve Yakın Tarih",
    theme: "Sürgün 1944",
    curator: "Sürgün Araştırmaları ve İnsan Hakları Belgeleme Birimi",
    period: "1865 – 1995",
    image: "/images/archive/mercimek-operasyonu-1944-sevk-haritasi.png",
    summary:
      "1865 Osmanlı muhaceretinden 23 Şubat 1944 'Mercimek Operasyonu'na, 1949 Grozni Oblastı tasfiye haritasından 1957 Yüksek Sovyet iade kararnamesine, Frunze dönüş fotoğraflarından 1995 Grozni insan hakları kayıtlarına.",
    body: [
      "Çeçen ve İnguş yakın tarihi, üç büyük kitlesel kırılma ve her defasında küllerinden doğan bir vatan bağlılığıyla şekillenmiştir: 1865 Osmanlı Muhacereti, 23 Şubat 1944 Orta Asya Sürgünü ve 1994–2000 savaşları.",
      "GARF Fon R-9401'de kayıtlı gizli sevkiyat telgrafları ve 7 Mart 1944 tasfiye kararnamesi haritaları, 493.269 Çeçen ve İnguş'un 180 tren katarıyla sürülmesinin ardından bütün bir ülkenin haritadan nasıl silinmek istendiğini devlet evrakı üzerinden kanıtlar.",
      "Buna karşılık 24 Şubat 1957 tarihli Yüksek Sovyet Resmi Gazetesi (Vedomosti No. 4) ve Frunze tren garında vatan trenini bekleyen Yurt-Auhlu ailelerin vakur bakışları, hiçbir sürgünün toplumsal hafızayı silemediğinin tarihsel tescilidir.",
    ],
    docs: [
      "musa-kunduhov-1865-muhaceret-arsiv-portresi",
      "cecen-ingus-assc-idari-haritasi-1937",
      "mercimek-operasyonu-1944-sevk-haritasi",
      "grozni-oblasti-1949-tasfiye-haritasi",
      "vedomosti-1957-cecen-ingus-assc-iade-kararnamesi",
      "yurt-auh-cecenleri-frunze-istasyonu-donus-1957",
      "cecen-cumhuriyeti-ickeriya-pasaportu-1994",
      "grozni-kusatmasi-dua-eden-cecen-evstafiev-1995",
      "kovalyov-grozni-insan-haklari-basin-toplantisi-1995",
    ],
    people: ["hasan-israilov", "mayrbek-seripov", "hasuha-magomadov", "cevher-dudayev", "aslan-mashadov"],
  },
  {
    slug: "kultur-ve-gunluk-yasam",
    title: "Dağların Ruhu: Etnografya, Töre ve Toplumsal Yaşam",
    subtitle: "Berje ve Laudayev Kayıtlarından George Kennan Fotoğraflarına ve Abrek Destanlarına",
    theme: "Kültür ve Günlük Yaşam",
    curator: "Etnografya ve Toplumsal Bellek Fonu",
    period: "1843 – 1914",
    image: "/images/archive/george-kennan-cecenler-fotografi-1870.jpg",
    summary:
      "ABD Kongre Kütüphanesi George Kennan koleksiyonundaki 1870'ler Çeçen düğün fotoğrafları, Berje ve Terek etnografya haritaları, savatlı gümüş nişanlar, çerkeskalı süvariler ve Abrek Zelimhan hafızası.",
    body: [
      "Kafkas dağ topluluklarında maddi kültür ile ahlaki düzen birbirinden ayrılmaz: bir çerkeskanın ölçülü kesimi, göğüsteki gümüş gazırlar, savatlı kama ve baş üzerindeki papaha; kişinin Nohçalla ve Ezdel ilkelerine bağlılığını simgeler.",
      "1859'da Adolf Berje'nin, 1872'de Umalat Laudayev'in ve 1870'lerde Amerikalı seyyah George Kennan'ın kayıt altına aldığı etnografik belgeler; Çeçen teyp coğrafyasını, düğün at yarışlarını, misafir hukukunu ve töre meclislerini birinci elden gözler önüne serer.",
      "1900'lerin başında Haraçoylu Abrek Zelimhan etrafında doğan halk destanları (illi) ve 1914 Çeçen-İnguş süvari alaylarının fotoğrafları ise geleneksel şeref kodunun modern çağın eşiğindeki yansımalarını belgeler.",
    ],
    docs: [
      "dubois-kafkasya-genel-haritasi-1843",
      "imam-samil-kirmizi-dag-sancagi",
      "berje-cecenya-haritasi-1859",
      "samil-ve-cecen-dagistan-naibleri-portreleri",
      "umalat-laudayev-cecen-kavmi-1872",
      "george-kennan-cecenler-fotografi-1870",
      "terskaya-oblast-etnografya-haritasi-1892",
      "abrek-zelimhan-haracoylu-arsiv-fotografi-1913",
      "kafkas-yerli-suvari-tugayi-subaylari-1914",
    ],
    people: ["seyh-mansur", "baysangur-benoyski", "alibek-haci", "zelimhan-haracoyn", "deni-arsanov"],
  },
];

export const EXHIBITIONS: Exhibition[] = RAW_EXHIBITIONS.map((ex) => ({
  ...ex,
  count: ex.docs.length,
}));

export const getExhibition = (slug: string) => EXHIBITIONS.find((e) => e.slug === slug);

/* ------------------------------------------------------------------ */
/* KÜLTÜR (24 Araştırmacı Düzeyi Etnografik & Dilbilimsel Madde)       */
/* ------------------------------------------------------------------ */

export type CultureCat = "gelenek" | "mimari" | "muzik" | "giyim" | "yemek" | "sozlu";

export type CultureItem = {
  id: string;
  cat: CultureCat;
  title: string;
  nativeTerm?: string;
  text: string;
};

export const CULTURE_ITEMS: CultureItem[] = [
  /* GELENEK VE TÖRE HUKUKU (4) */
  {
    id: "nohcalla",
    cat: "gelenek",
    title: "Nohçalla — Çeçen Ahlak ve Davranış Yasası",
    nativeTerm: "Нохчалла",
    text: "Çeçen kimliğinin yazılı olmayan vicdani ve toplumsal anayasası: özdenetim (sobur), misafire koşulsuz ikram ve can güvenliği (hyeş-da), kadına ve aksakallıya mutlak hürmet, eşitlik ve verilen söze can pahasına sadakat. Kişinin soyundan önce kendi onurlu duruşuyla (yah') tartılmasını esas alır.",
  },
  {
    id: "ezdel",
    cat: "gelenek",
    title: "Ezdel — Ölçülülük ve Asalet Etiği",
    nativeTerm: "Эздел / Гӏиллакх-Оьздангалла",
    text: "Vaynah toplumunda (İnguşçada Ezdel, Çeçencede Gillakh-Özdangalla) içsel asalet, tevazu ve davranış zarafetini tanımlayan temel kavram. Öfke anında dahi ses yükseltmemek, acıyı vakur bir sükûnetle karşılamak ve zayıfın yükünü sessizce omuzlamak bu etiğin özüdür.",
  },
  {
    id: "teip",
    cat: "gelenek",
    title: "Teyp, Tukhum ve Mehk-Khel (Ülke Meclisi)",
    nativeTerm: "Тайп · Тукхум · Мехк-Кхел",
    text: "Ortak ata ocağına bağlı soy birlikleri (teyp), dokuz bölgesel dayanışma federasyonu (tukhum: Nohçmahkahoy, Akki, Orstkhoy, Malkhi, Çeberloy, Şaroy, Şatoy, Terloy, Çantiy) ve bilge temsilcilerin toplandığı yüksek yasama-yargı meclisi Mehk-Khel; tarih boyunca prens veya feodal bey tanımayan eşitlikçi dağ demokrasisinin kurumlarıdır.",
  },
  {
    id: "abrek-gelengi",
    cat: "gelenek",
    title: "Abreklik ve Sömürge Karşıtı Adalet Hafızası",
    nativeTerm: "Обрг (Obrg)",
    text: "19. yüzyıl sonu ve 20. yüzyıl başında Çarlık askeri idaresinin keyfi sürgün, toprak gaspı ve kolektif cezalandırmalarına karşı dağa çekilerek mücadele eden yalnız direnişçi geleneği. Haraçoylu Zelimhan (1872–1913) örneğinde olduğu gibi yoksul köylüye dokunmama ve mazlumu koruma ilkeleriyle halk destanlarına yerleşmiştir.",
  },

  /* MİMARİ VE KULELER (4) */
  {
    id: "savas-kulesi",
    cat: "mimari",
    title: "Savaş Kuleleri (Bov / Vov)",
    nativeTerm: "Бӏов / Вӏов",
    text: "Yüksekliği 25–30 metreye ulaşan, kare tabandan yukarı doğru içe eğimli daralan beş veya altı katlı taş savunma kuleleri. İkinci katta yer alan kemerli giriş kapısı, üst katlardaki taş konsollu tepe mazgalları (maşikuli) ve basamaklı piramidal arduvaz çatının tepesindeki beyaz kilit taşıyla (tsurla) vadiler arası ateş-duman haberleşme ağını kurar.",
  },
  {
    id: "konut-kulesi",
    cat: "mimari",
    title: "Konut Kuleleri (Gala) ve Kutsal Ocak Zinciri",
    nativeTerm: "Гӏала · Пхьегӏа",
    text: "İki veya üç katlı geniş taş aile konutları. Yapının ağırlığını taşıyan merkezi taş sütun (erd-boagӏa) ve üzerindeki dövme demir ocak zinciri (tsov) ailenin sürekliliğini temsil eder; töre hukukuna göre kan davalısı dahi ocak zincirine dokunduğu anda ev sahibinin dokunulmaz koruması altına girer.",
  },
  {
    id: "kasir",
    cat: "mimari",
    title: "Mağl-Kaş (Taş Mezar Yapıları) ve Güneş Petroglifleri",
    nativeTerm: "Малх-каш · Тӏулган йоза",
    text: "Güneşli dağ yamaçlarına inşa edilen basamaklı taş çatılı yer üstü ata mezar anıtları (malh-kaş) ile Himoy, Şaroy, Zumsoy ve Targim kule kemerlerine kazınan döner güneş çarkı, açık el (usta imzası), dağ keçisi boynuzu ve erken epigrafik taş işaretleri.",
  },
  {
    id: "kule-ustaligi",
    cat: "mimari",
    title: "Taş Ustası Ritüeli ve Kireç Harcı Mühendisliği",
    nativeTerm: "Тӏулган пхьар",
    text: "Sarp kayalık zemine temel çukuru açmaksızın ana kayayı yontarak oturtulan kule mimarisi; sönmüş kireç, peynir altı suyu ve yumurta akı katkılı harçla yüzyıllarca depreme dayanmıştır. Usta (p'har), kulenin son tepe taşını (tsurla) dış iskelesiz içeriden sarkarak yerleştirdiğinde aile tarafından ödüllendirilirdi.",
  },

  /* MÜZİK, ZİKİR VE İLLİ (4) */
  {
    id: "illi",
    cat: "muzik",
    title: "İlli — Epik-Tarihsel Kahramanlık Destanları",
    nativeTerm: "Илли · Иллиалархо",
    text: "Halk ozanları (illialarho) tarafından dechig-pondar eşliğinde resitatif makamla seslendirilen tarihsel destanlar. Şeyh Mansur, Taymiyev Beybulat, Benoylu Baysangur ve Abrek Zelimhan üzerine yakılan illiler, resmi Rus askeri raporlarının tek taraflı anlatısına karşı yerli tarihsel hafızayı korumuştur.",
  },
  {
    id: "dechig-pondar",
    cat: "muzik",
    title: "Dechig-Pondar ve Adıuh-Pondar",
    nativeTerm: "Дечиг-пондар · ӏадхьокху-пондар",
    text: "Tek parça ceviz veya dut ağacından oyularak yapılan üç telli mızraplı/parmaklı dechig-pondar ile yaylı adıuh-pondar, Vaynah müzik kültürünün en eski çalgılarıdır. Dörtlü ve beşli aralıklarla tınlayan tok akorları dağ rüzgârını ve at nalının ritmini taşır.",
  },
  {
    id: "lovzar",
    cat: "muzik",
    title: "Lovzar ve Halka Zikri (Nazma)",
    nativeTerm: "Ловзар · Хьехам · Назма",
    text: "Topluluk kutlaması ve dans meydanı olan Lovzar'da eşler birbirine asla temas etmeden vakur bir mesafe ve saygıyla süzülür. Dini-tasavvufi hayatta ise Kadiri (Şeyh Kunta Hacı kolu) halka zikri ve Nakşibendi ilahileri (nazma), 1944 sürgün bozkırlarında bile halkın manevi direncini ayakta tutmuştur.",
  },
  {
    id: "uzam-sarki",
    cat: "muzik",
    title: "Yiş ve Ağıt Geleneği (Kaldam-Yiş)",
    nativeTerm: "Йиш",
    text: "Kadınların söylediği lirik gurbet ezgileri, ninniler ve savaş/sürgün kayıplarının ardından yakılan vakur ağıtlar. 1990'larda ozan İmam Alimsultanov ve Timur Mutsurayev kuşağıyla geleneksel illi formu modern balad geleneğine taşınmıştır.",
  },

  /* GELENEKSEL GİYİM VE ZANAAT (4) */
  {
    id: "cherkeska",
    cat: "giyim",
    title: "Çoa (Çerkeska), Gümüş Gazırlar ve Beşmet",
    nativeTerm: "Чоа · Бустам · Бешмет",
    text: "Ev dokuması koyu yün çuhadan bele oturan kesimiyle dikilen kaftan (çoa), içine giyilen dik yakalı beşmet ve göğsün iki yanında barut ölçüsü tüplerini taşıyan savatlı gümüş başlıklı gazırlar (bustam). Kişinin duruşunu dik tutan ve sade zarafeti öne çıkaran klasik Kafkas kıyafetidir.",
  },
  {
    id: "papaha",
    cat: "giyim",
    title: "Papaha (Holhaz-Kuy) ve Başlık (Başlık)",
    nativeTerm: "Холхаз-куй · Башлакх",
    text: "Karakul veya uzun tüylü dağ koyunu postundan dikilen papaha, Vaynah erkeğinin şeref tacı sayılır; birinden rica için dahi başından çıkarılmaz. Yağmur ve fırtınada omuzları da örten sivri uçlu yün başlık (başlakh) süvari donanımını tamamlar.",
  },
  {
    id: "istang-kece",
    cat: "giyim",
    title: "İstang (Keçe Halı) ve Yapıncak (Burka / Verta)",
    nativeTerm: "Истанг · Верта",
    text: "Kadın ustaların koyun yününü doğal kökboyalarıyla renklendirip koçboynuzu, güneş ve dağ geometrisiyle işlediği geleneksel keçe duvar ve yer yaygısı (istang) ile yağmur-kar geçirmeyen dik omuzlu siyah keçe süvari pelerini (verta / burka).",
  },
  {
    id: "kinjal-gumus",
    cat: "giyim",
    title: "Savatlı Gümüş Kinjal (Şälta) ve Kemer İşçiliği",
    nativeTerm: "Шалта · Дато доьхка",
    text: "Çeçenya'nın Atagi ve Dargo demir ustaları ile Dağıstan savat (niello) kakmacılarının ürettiği çift oluklu çelik kama (şälta) ve ince gümüş plakalı bel kemeri. İmamet döneminde üstün cesaret gösteren savaşçılara gümüş üzerine Arapça beyitler kazınmış nişan ve silahlar tevcih edilirdi.",
  },

  /* YEMEK KÜLTÜRÜ VE SOFRA ADABI (4) */
  {
    id: "jijig-galnash",
    cat: "yemek",
    title: "Jijig-Galnaş ve Beram Sosu",
    nativeTerm: "Жижиг-галнаш · Берам",
    text: "Kemikli koyun veya dana etinin, buğday yahut mısır unundan elde tek tek parmakla yuvarlanıp şekillendirilen hamur lokmaları (galnaş), kâsede sunulan sıcak et suyu (çorpa) ve ezilmiş sarımsaklı sosla (beram) ikram edildiği baş misafir yemeği.",
  },
  {
    id: "chepalgash",
    cat: "yemek",
    title: "Çepalgaş ve Hingalaş",
    nativeTerm: "Чӏепалгаш · Хингалаш",
    text: "Taze köy lor peyniri ve yeşil soğanla incecik açılıp sacda pişirildikten sonra sıcak suya daldırılıp bol eritilmiş köy tereyağıyla yağlanan Çepalgaş ile tatlı bal kabağı harçlı yarım ay şeklindeki Hingalaş; Vaynah sofrasının bereket simgeleridir.",
  },
  {
    id: "honk-siskal",
    cat: "yemek",
    title: "Hönk (Yabani Dağ Sarımsağı) ve Siskal",
    nativeTerm: "Хьонк · Сискал",
    text: "Şubat–Mart aylarında Kafkas kayın ormanlarında kar altından ilk filizlenen yabani ayı sarımsağı sürgünlerinin (hönk / çeremşa) süt veya lor peyniriyle kavrulup mısır ekmeğiyle (siskal) yenmesi; kıştan çıkışın ve dağ doğasıyla bağın asırlık simgesidir.",
  },
  {
    id: "misafir-sofrasi",
    cat: "yemek",
    title: "Misafir Odası (Hyeşiy-Ts'a) ve Sofra Adabı",
    nativeTerm: "Хьешийн цӏа · Шун",
    text: "Her geleneksel Çeçen-İnguş evinde her an temiz ve hazır tutulan ayrı bir misafir odası bulunur. Misafire üç gün boyunca kim olduğu veya niçin geldiği sorulmadan sofranın en seçkin payı sunulur; ev sahibi misafir doyana dek ayakta hizmet etmeyi şeref sayar.",
  },

  /* SÖZLÜ TARİH, DİL VE YAZMA GELENEĞİ (4) */
  {
    id: "nohciyn-mott",
    cat: "sozlu",
    title: "Nohçiyn Mott ve Alfabe Dönüşümleri",
    nativeTerm: "Нохчийн мотт",
    text: "Kuzeydoğu Kafkas (Nah-Dağıstan) dil ailesinin Nah koluna mensup olan Çeçence; yaklaşık 40'tan fazla ünlü/diftong ve ejektif-faringal ünsüz zenginliğine sahiptir. Tarihsel süreçte Arap harfli Acem imlası, 1862 Uslar-Dosov alfabesi, 1925 Oşayev Latin alfabesi, 1938 Kiril alfabesi ve 1992 Latin alfabesiyle yazıya geçirilmiştir.",
  },
  {
    id: "teptar-secereler",
    cat: "sozlu",
    title: "Teptar — Aile Kronikleri ve Yedi Ata Şeceresi",
    nativeTerm: "Тептар · Ворхӏ да",
    text: "Her Vaynah ailesinde kuşaktan kuşağa aktarılan yedi ata ismini (vorh da) ezbere bilme yükümlülüğü ve teyp alimlerinin Arap harfleriyle tuttuğu 'teptar' adı verilen el yazması aile-köy kronikleri; göçleri, kuraklıkları ve antlaşmaları kayıt altına alan yerel tarih kaynaklarıdır.",
  },
  {
    id: "tanikliklar",
    cat: "sozlu",
    title: "23 Şubat 1944 Sürgün ve Haybah Sözlü Tanıklıkları",
    nativeTerm: "Дагалецамаш · Махках дахар",
    text: "1944–1957 Kazakistan ve Kırgızistan sürgününden sağ dönen büyüklerin ses kayıtları ve hatıraları; resmî Sovyet sansürünün on yıllarca yasakladığı vagon ölümlerini, Haybah katliamını ve haritadan silinen dağ köylerinin özgün Çeçence-İnguşça toponimlerini yok olmaktan kurtarmıştır.",
  },
  {
    id: "atasozleri",
    cat: "sozlu",
    title: "Kitsanaş — Dağ Atasözleri ve Hukuk Vecizeleri",
    nativeTerm: "Кицанаш",
    text: "1862'de Kedi Dosov'un ilk elifbada derlemeye başladığı özlü sözler: «Kule taşla, insan sözüyle ayakta durur.» · «Misafirin girmediği eve bereket girmez.» · «Kılıç yarası iyileşir, dil yarası iyileşmez.» Toplumun hukuk ve ahlak hafızasını tek cümlede mühürler.",
  },
];

const RAW_CULTURE_CATS: { id: CultureCat; label: string; sub: string; image: string }[] = [
  {
    id: "gelenek",
    label: "Gelenek ve Töre Hukuku",
    sub: "Nohçalla, Ezdel, Mehk-Khel ve Abreklik",
    image: "/images/c-gelenek.jpg",
  },
  {
    id: "mimari",
    label: "Mimari ve Kuleler",
    sub: "Savaş kuleleri, konut kuleleri ve taş epigrafisi",
    image: "/images/archive/targim-savas-kulesi-1917-arsiv-fotografi.jpg",
  },
  {
    id: "muzik",
    label: "Müzik, Zikir ve İlli",
    sub: "Destanlar, dechig-pondar, lovzar ve nazma",
    image: "/images/c-muzik.jpg",
  },
  {
    id: "giyim",
    label: "Giyim ve Zanaat",
    sub: "Çoa, gümüş gazırlar, papaha, istang ve şälta",
    image: "/images/c-giyim.jpg",
  },
  {
    id: "yemek",
    label: "Mutfak ve Sofra Adabı",
    sub: "Jijig-galnaş, çepalgaş, hönk ve misafir odası",
    image: "/images/c-yemek.jpg",
  },
  {
    id: "sozlu",
    label: "Dil, Teptar ve Sözlü Tarih",
    sub: "Nohçiyn mott, alfabe tarihi ve 1944 tanıklıkları",
    image: "/images/archive/dosov-ilk-cecen-elifbasi-1862.png",
  },
];

export const CULTURE_CATS: {
  id: CultureCat;
  label: string;
  sub: string;
  image: string;
  count: number;
}[] = RAW_CULTURE_CATS.map((c) => ({
  ...c,
  count: CULTURE_ITEMS.filter((i) => i.cat === c.id).length,
}));

/* ------------------------------------------------------------------ */
/* ÇAPRAZ SAYFA BAĞLANTILARI VE ÖNE ÇIKANLAR                           */
/* ------------------------------------------------------------------ */

const FEATURED_SLUGS = [
  "seyh-mansur",
  "beybulat-taymiyev",
  "tasav-haci",
  "baysangur-benoyski",
  "zelimhan-haracoyn",
  "deni-arsanov",
  "cevher-dudayev",
  "aslan-mashadov",
] as const;

export const FEATURED_PEOPLE: Person[] = FEATURED_SLUGS.map((s) => getPerson(s)).filter(
  (p): p is Person => Boolean(p),
);

const parseYearNum = (val?: string): number | null => {
  if (!val) return null;
  const m = val.match(/\d{4}/);
  return m ? Number(m[0]) : null;
};

const GENERIC_PLACES = new Set([
  "çeçenya",
  "çeçenistan",
  "kafkasya",
  "kuzey kafkasya",
  "dağıstan",
  "inguşetya",
]);

export function getRelatedPeople(person: Person, limit = 5): Person[] {
  const seen = new Set<string>([person.slug]);
  const out: Person[] = [];

  const push = (cand?: Person) => {
    if (!cand || seen.has(cand.slug) || out.length >= limit) return;
    seen.add(cand.slug);
    out.push(cand);
  };

  for (const slug of person.related ?? []) {
    push(getPerson(slug));
  }
  if (out.length >= limit) return out;

  const parts = person.name.trim().split(/\s+/);
  const lastName = parts.length > 1 ? parts[parts.length - 1].toLocaleLowerCase("tr") : "";
  const bp = person.birthPlace?.trim().toLocaleLowerCase("tr") ?? "";
  const specificBp = bp.length >= 3 && !GENERIC_PLACES.has(bp);
  const pBorn = parseYearNum(person.born);
  const pYear = parseYearNum(person.died) ?? (pBorn ? pBorn + 30 : 1950);

  const scored = PEOPLE.filter((c) => !seen.has(c.slug)).map((c) => {
    let score = 0;
    const cParts = c.name.trim().split(/\s+/);
    const cLast = cParts.length > 1 ? cParts[cParts.length - 1].toLocaleLowerCase("tr") : "";
    if (lastName.length >= 5 && cLast === lastName) score += 60;
    const cBp = c.birthPlace?.trim().toLocaleLowerCase("tr") ?? "";
    if (specificBp && cBp === bp) score += 45;
    if (c.era === person.era) score += 30;
    const cBorn = parseYearNum(c.born);
    const cYear = parseYearNum(c.died) ?? (cBorn ? cBorn + 30 : 1950);
    const diff = Math.abs(cYear - pYear);
    score += Math.max(0, 24 - Math.min(24, Math.floor(diff / 3)));
    return { c, score };
  });

  scored.sort((a, b) => b.score - a.score);
  for (const item of scored) {
    push(item.c);
    if (out.length >= limit) break;
  }
  return out;
}

const PLACE_KEYWORDS: { id: string; terms: string[] }[] = [
  { id: "aldi", terms: ["aldı", "aldi"] },
  { id: "benoy", terms: ["benoy", "benoyev"] },
  { id: "vedeno", terms: ["vedeno", "içkeriya"] },
  { id: "harachoy", terms: ["harachoy", "haraçoy"] },
  { id: "grozni", terms: ["grozni", "cahar", "cevherkale", "sölja"] },
  { id: "urus-martan", terms: ["urus-martan", "gendargen", "martan", "gehi"] },
  { id: "valerik", terms: ["valerik"] },
  { id: "sali", terms: ["şali", "sali", "goytı", "avturi"] },
  { id: "tsotsi-yurt", terms: ["tsotsi-yurt", "kurçaloy", "tsentoroy"] },
  { id: "satoy", terms: ["şatoy", "satoyski"] },
  { id: "saroy", terms: ["şaroy", "himoy"] },
  { id: "hoy", terms: ["hoy", "çeberloy", "kezenoy"] },
  { id: "nikaroy", terms: ["nikaroy", "terloy"] },
  { id: "haybah", terms: ["haybah", "galançoj", "naşha"] },
  { id: "itum-kale", terms: ["itum-kale", "itum-kali", "argun boğazı", "zumsoy", "dan-kale", "guçan"] },
  { id: "sunja", terms: ["sunja", "sunca"] },
  { id: "dadi-yurt", terms: ["dadi-yurt"] },
  { id: "gunib", terms: ["gunib"] },
  { id: "gimri", terms: ["gimri"] },
  { id: "dargo", terms: ["dargo"] },
  { id: "hasavyurt", terms: ["hasavyurt", "endirey", "kumuk", "auhov", "yurt-auh", "auh"] },
  { id: "vladikavkaz", terms: ["vladikavkaz", "buro", "buru", "prigorodn"] },
  { id: "nazran", terms: ["nazran", "inguş", "ekajevo", "malgobek"] },
  { id: "targim", terms: ["targim", "cerah", "assa", "vovnuşki", "erzi"] },
];

export function getPlacesForPerson(person: Person, limit = 3): Place[] {
  const seen = new Set<string>();
  const out: Place[] = [];

  for (const pl of PLACES) {
    if (pl.people?.includes(person.slug)) {
      seen.add(pl.id);
      out.push(pl);
    }
  }

  const hay = [
    person.birthPlace,
    person.deathPlace,
    person.center ?? "",
    person.region,
    person.summary,
    ...person.bio,
  ]
    .join(" ")
    .toLocaleLowerCase("tr");

  for (const pk of PLACE_KEYWORDS) {
    if (out.length >= limit) break;
    if (seen.has(pk.id)) continue;
    if (pk.terms.some((t) => hay.includes(t))) {
      const pl = PLACES.find((x) => x.id === pk.id);
      if (pl) {
        seen.add(pl.id);
        out.push(pl);
      }
    }
  }

  if (out.length === 0) {
    const fallbackId =
      person.era === "imamet"
        ? "vedeno"
        : person.era === "imparatorluk"
          ? "harachoy"
          : "grozni";
    const pl = PLACES.find((x) => x.id === fallbackId);
    if (pl) out.push(pl);
  }

  return out.slice(0, limit);
}

export function getEventsForPerson(person: Person, limit = 2): TimelineEvent[] {
  const direct = TIMELINE.filter((e) => e.people?.includes(person.slug));
  if (direct.length > 0) return direct.slice(0, limit);

  const b = parseYearNum(person.born);
  const d = parseYearNum(person.died);
  const mid = d ?? (b ? b + 30 : null);

  const eraEvents = TIMELINE.filter((e) => e.era === person.era);
  if (eraEvents.length > 0 && mid !== null) {
    return [...eraEvents]
      .sort((a, c) => Math.abs(a.year - mid) - Math.abs(c.year - mid))
      .slice(0, limit);
  }
  return eraEvents.slice(0, limit);
}

export function getDocsForPerson(person: Person, limit = 3): ArchiveDoc[] {
  const seen = new Set<string>();
  const out: ArchiveDoc[] = [];

  const pushSlug = (s: string) => {
    if (seen.has(s) || out.length >= limit) return;
    const d = getDoc(s);
    if (d) {
      seen.add(s);
      out.push(d);
    }
  };

  for (const s of person.docs ?? []) pushSlug(s);

  for (const ev of getEventsForPerson(person, 2)) {
    for (const s of ev.docs ?? []) pushSlug(s);
  }

  if (out.length === 0) {
    for (const d of DOCS) {
      if (d.era === person.era) pushSlug(d.slug);
      if (out.length >= 2) break;
    }
  }

  return out;
}

export function getExhibitionsForPerson(person: Person): Exhibition[] {
  const direct = EXHIBITIONS.filter((ex) => ex.people?.includes(person.slug));
  if (direct.length > 0) return direct;

  const fallbackSlug =
    person.era === "imamet"
      ? "kafkasyanin-ozgurluk-mucadelesi"
      : person.era === "sovyet"
        ? "bagimsizlik-ve-devlet-arayislari-1918"
        : person.era === "imparatorluk"
          ? "kultur-ve-gunluk-yasam"
          : "surgun-1944";

  const ex = getExhibition(fallbackSlug);
  return ex ? [ex] : [];
}

export function getPeopleForDoc(docSlug: string, limit = 6): Person[] {
  const doc = getDoc(docSlug);
  const seen = new Set<string>();
  const out: Person[] = [];

  const push = (p?: Person) => {
    if (!p || seen.has(p.slug) || out.length >= limit) return;
    seen.add(p.slug);
    out.push(p);
  };

  for (const p of PEOPLE) {
    if (p.docs?.includes(docSlug)) push(p);
  }
  for (const ev of TIMELINE) {
    if (ev.docs?.includes(docSlug)) {
      for (const ps of ev.people ?? []) push(getPerson(ps));
    }
  }
  for (const ex of EXHIBITIONS) {
    if (ex.docs.includes(docSlug)) {
      for (const ps of ex.people ?? []) push(getPerson(ps));
    }
  }
  if (out.length < 3 && doc) {
    for (const p of PEOPLE) {
      if (p.era === doc.era) push(p);
      if (out.length >= 4) break;
    }
  }
  return out;
}

export function getExhibitionsForDoc(docSlug: string): Exhibition[] {
  return EXHIBITIONS.filter((ex) => ex.docs.includes(docSlug));
}

export function getPlacesForDoc(docSlug: string): Place[] {
  return PLACES.filter((pl) => pl.docs?.includes(docSlug));
}

export function getPlacesForEvent(event: TimelineEvent, limit = 3): Place[] {
  const seen = new Set<string>();
  const out: Place[] = [];
  const push = (pl?: Place) => {
    if (!pl || seen.has(pl.id) || out.length >= limit) return;
    seen.add(pl.id);
    out.push(pl);
  };

  const hay = `${event.title} ${event.short} ${event.description}`.toLocaleLowerCase("tr");
  for (const pk of PLACE_KEYWORDS) {
    if (pk.terms.some((t) => hay.includes(t))) {
      push(PLACES.find((x) => x.id === pk.id));
    }
  }
  for (const ds of event.docs ?? []) {
    for (const pl of PLACES) {
      if (pl.docs?.includes(ds)) push(pl);
    }
  }
  for (const pl of PLACES) {
    if (pl.year === event.year) push(pl);
  }
  if (out.length === 0) {
    const fallbackId =
      event.era === "imamet"
        ? "vedeno"
        : event.era === "imparatorluk"
          ? "harachoy"
          : "grozni";
    push(PLACES.find((x) => x.id === fallbackId));
  }
  return out;
}

export function getPlacesForExhibition(ex: Exhibition, limit = 4): Place[] {
  const seen = new Set<string>();
  const out: Place[] = [];
  const push = (pl?: Place) => {
    if (!pl || seen.has(pl.id) || out.length >= limit) return;
    seen.add(pl.id);
    out.push(pl);
  };

  for (const ds of ex.docs) {
    for (const pl of PLACES) {
      if (pl.docs?.includes(ds)) push(pl);
    }
  }
  const hay = `${ex.title} ${ex.subtitle} ${ex.summary} ${ex.body.join(" ")}`.toLocaleLowerCase("tr");
  for (const pk of PLACE_KEYWORDS) {
    if (pk.terms.some((t) => hay.includes(t))) {
      push(PLACES.find((x) => x.id === pk.id));
    }
  }
  return out;
}

export function getEventsForExhibition(ex: Exhibition, limit = 3): TimelineEvent[] {
  const seen = new Set<number>();
  const out: TimelineEvent[] = [];
  const push = (ev?: TimelineEvent) => {
    if (!ev || seen.has(ev.year) || out.length >= limit) return;
    seen.add(ev.year);
    out.push(ev);
  };

  for (const ev of TIMELINE) {
    if (ev.docs?.some((d) => ex.docs.includes(d))) push(ev);
  }
  for (const ev of TIMELINE) {
    if (ev.people?.some((ps) => ex.people?.includes(ps))) push(ev);
  }
  return out;
}

const CULTURE_CATEGORY_LINKS: Record<
  CultureCat,
  { docs: string[]; exhibitions: string[]; places: string[]; people: string[] }
> = {
  gelenek: {
    docs: [
      "umalat-laudayev-cecen-kavmi-1872",
      "imam-samil-naib-isa-mektubu-1842",
      "berje-cecenya-haritasi-1859",
      "abrek-zelimhan-haracoylu-arsiv-fotografi-1913",
    ],
    exhibitions: ["kultur-ve-gunluk-yasam", "kafkasyanin-ozgurluk-mucadelesi"],
    places: ["targim", "vedeno", "harachoy", "nazran"],
    people: ["seyh-mansur", "beybulat-taymiyev", "baysangur-benoyski", "zelimhan-haracoyn"],
  },
  mimari: {
    docs: [
      "targim-savas-kulesi-1917-arsiv-fotografi",
      "saroy-kule-yerlesimi-19-yuzyil-fotografi",
      "himoy-kule-kemeri-petroglif-yaziti",
      "gucan-kale-mimari-rolove-cizimi-1960",
    ],
    exhibitions: ["kuleler-ve-yerlesimler"],
    places: ["targim", "vovnuski", "erzi", "saroy", "itum-kale", "nikaroy"],
    people: ["seyh-mansur", "uma-duyev", "batuko-satoyski"],
  },
  muzik: {
    docs: [
      "george-kennan-cecenler-fotografi-1870",
      "abrek-zelimhan-haracoylu-arsiv-fotografi-1913",
      "baysangur-idam-emri-kafkas-ordusu-1861",
    ],
    exhibitions: ["kultur-ve-gunluk-yasam", "kafkasyanin-ozgurluk-mucadelesi"],
    places: ["harachoy", "benoy", "grozni", "vedeno"],
    people: ["imam-alimsultanov", "zelimhan-haracoyn", "baysangur-benoyski"],
  },
  giyim: {
    docs: [
      "imam-samil-nisanlari-arapca-yazitli",
      "samil-ve-cecen-dagistan-naibleri-portreleri",
      "kafkas-yerli-suvari-tugayi-subaylari-1914",
      "trabzon-konferansi-kuzey-kafkasya-heyeti-1918",
    ],
    exhibitions: ["kultur-ve-gunluk-yasam", "bagimsizlik-ve-devlet-arayislari-1918"],
    places: ["vedeno", "harachoy", "sali", "grozni"],
    people: ["baysangur-benoyski", "soltamurad-benoyevski", "zelimhan-haracoyn"],
  },
  yemek: {
    docs: [
      "umalat-laudayev-cecen-kavmi-1872",
      "george-kennan-cecenler-fotografi-1870",
      "dan-kale-konut-kulesi-1930-kesif-fotografi",
    ],
    exhibitions: ["kultur-ve-gunluk-yasam"],
    places: ["targim", "itum-kale", "grozni", "nazran"],
    people: ["deni-arsanov", "seyh-mansur"],
  },
  sozlu: {
    docs: [
      "dosov-ilk-cecen-elifbasi-1862",
      "uslar-cecenskiy-yazik-grameri-1888",
      "serlo-cecence-gazete-1926",
      "matsiyev-cecence-rusca-sozluk-1961",
      "mercimek-operasyonu-1944-sevk-haritasi",
    ],
    exhibitions: ["cecen-dil-yazi-ve-basini", "surgun-1944"],
    places: ["grozni", "haybah", "tsotsi-yurt", "hasavyurt"],
    people: ["hasan-israilov", "hasuha-magomadov", "cevher-dudayev", "zelimhan-yandarbiyev"],
  },
};

export function getLinksForCultureItem(item: CultureItem) {
  const cfg = CULTURE_CATEGORY_LINKS[item.cat];
  return {
    docs: cfg.docs.map((s) => getDoc(s)).filter((d): d is ArchiveDoc => Boolean(d)),
    exhibitions: cfg.exhibitions
      .map((s) => getExhibition(s))
      .filter((e): e is Exhibition => Boolean(e)),
    places: cfg.places
      .map((id) => PLACES.find((p) => p.id === id))
      .filter((p): p is Place => Boolean(p)),
    people: cfg.people.map((s) => getPerson(s)).filter((p): p is Person => Boolean(p)),
  };
}

export function getCultureForExhibition(ex: Exhibition, limit = 3): CultureItem[] {
  const cats: CultureCat[] =
    ex.slug === "kuleler-ve-yerlesimler"
      ? ["mimari", "gelenek"]
      : ex.slug === "surgun-1944"
        ? ["sozlu", "gelenek"]
        : ex.slug === "cecen-dil-yazi-ve-basini"
          ? ["sozlu", "gelenek"]
          : ex.slug === "kultur-ve-gunluk-yasam"
            ? ["gelenek", "giyim", "muzik", "yemek"]
            : ["gelenek", "muzik"];
  const out: CultureItem[] = [];
  for (const cat of cats) {
    for (const item of CULTURE_ITEMS) {
      if (item.cat === cat && !out.some((x) => x.id === item.id)) {
        out.push(item);
        if (out.length >= limit) return out;
      }
    }
  }
  return out;
}
