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
/* KİŞİLER (340 Özgün Portre — Gerçek Arşiv ve Tarihî Referanslar)     */
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
    "image": "/images/people/seyh-mansur.webp",
    "gallery": [
      {
        "src": "/images/people/seyh-mansur.webp",
        "caption": "Şeyh Mansur (Uşurma) dönem gravürü"
      },
      {
        "src": "/images/p-mansur.jpg",
        "caption": "Şeyh Mansur temsili arşiv portresi"
      },
      {
        "src": "/images/kisiler.jpg",
        "caption": "1785 Sunja vadisi Kafkas atlı birlikleri"
      },
      {
        "src": "/images/doc-map.jpg",
        "caption": "Terek ve Sunja hattını gösteren tarihi Kafkasya haritası"
      }
    ],
    "docs": [
      "kafkas-atlasi",
      "kafkasya-haritasi-1871"
    ],
    "summary": "Asıl adı Uşurma. 1785'te başlattığı birlik ve direniş hareketiyle Kuzey Kafkasya halklarını ilk kez ortak bir siyasi ve manevi sancak etrafında topladı.",
    "bio": [
      "Çeçenya'nın Sunja kıyısındaki Aldı köyünde doğan Uşurma, adalet, toplumsal dayanışma ve ahlaki yenilenme çağrısıyla kısa sürede Çeçen, İnguş, Kumuk, Kabardey ve Dağıstan toplulukları arasında büyük saygı kazandı ve 'Şeyh Mansur' adıyla anıldı.",
      "Temmuz 1785'te Aldı ve Sunja Nehri yakınlarında Albay Pieri komutasındaki birliğe karşı kazanılan tarihi zafer, hareketin Doğu Kafkasya'dan Batı Çerkesya'ya kadar yayılmasını sağladı.",
      "1791 yazında Anapa Kalesi kuşatması sırasında ağır yaralı olarak esir düştü; Petersburg yakınlarındaki Şlisselburg Kalesi'nde 1794 yılında vefat etti. Kafkasya hafızasında birliğin ilk büyük meşalesi olarak anılır."
    ],
    "related": [
      "tasav-haci",
      "beybulat-taymiyev",
      "seyh-samil"
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
    "image": "/images/people/tasav-haci.webp",
    "gallery": [
      {
        "src": "/images/people/tasav-haci.webp",
        "caption": "Taşav Hacı Endireyevski dönem gravürü"
      },
      {
        "src": "/images/imamet.jpg",
        "caption": "İçkeriya dağ geçitlerinde İmamet süvarileri"
      },
      {
        "src": "/images/doc-letter.jpg",
        "caption": "Naipler arası Arapça yazışma örneği"
      }
    ],
    "docs": [
      "samil-donemi-mektup",
      "imamet-dergisi-notlari"
    ],
    "summary": "İmamet hareketinin Çeçenya'da kök salmasını sağlayan büyük alim ve stratejist; Şeyh Şamil'in erken dönemdeki en güçlü müttefiki ve baş naibi.",
    "bio": [
      "Endirey'de yetişen derin fıkıh bilgisi ve askeri dehasıyla tanınan Taşav Hacı, 1830'lu yılların başında Doğu Çeçenya ve İçkeriya ormanlarında sağlam bir savunma ve idare ağı kurdu.",
      "1834 sonrasında Şeyh Şamil ile ittifak kurarak Çeçenya ile Dağıstan arasındaki birliğin harcını attı; Sayasan ve Benoy çevresindeki harekâtları bizzat yönetti.",
      "1843 yılında vefat edene dek Çeçen meclislerinde sözü kanun sayılan bir bilge ve komutan olarak yaşadı."
    ],
    "related": [
      "seyh-samil",
      "gazi-muhammed",
      "baysangur-benoyski"
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
    "image": "/images/people/beybulat-taymiyev.webp",
    "gallery": [
      {
        "src": "/images/people/beybulat-taymiyev.webp",
        "caption": "Beybulat Taymiyev portresi"
      },
      {
        "src": "/images/kisiler.jpg",
        "caption": "19. yüzyıl başı Çeçen atlı birliği"
      }
    ],
    "docs": [
      "kafkas-atlasi"
    ],
    "summary": "19. yüzyılın ilk çeyreğinde Çeçen toplumunu ortak bir meclis çatısı altında birleştirmeye çalışan mahir komutan ve diplomat.",
    "bio": [
      "Beybulat Taymiyev, Kafkas Savaşı'nın erken evresinde yaklaşık otuz yıl boyunca Çeçen teypleri arasında iç barışı ve ortak hareket iradesini tesis etmeye çalıştı.",
      "1825–1826 yıllarında Terek ve Sunja kale hattına karşı yürütülen büyük harekâta öncülük etti; aynı zamanda Tiflis ve Erzurum hattında diplomatik görüşmeler yürüterek halkını yıkımdan korumaya gayret etti.",
      "Aleksandr Puşkin'in 'Erzurum Yolculuğu' hatıratında dahi cesaretiyle andığı Taymiyev, 1831'de bir suikast sonucu hayatını kaybetti."
    ],
    "related": [
      "seyh-mansur",
      "gazi-muhammed"
    ]
  },
  {
    "slug": "hamzat-bek",
    "name": "Hamzat Bek",
    "born": "1789",
    "died": "1834",
    "title": "Kafkasya'nın İkinci İmamı",
    "era": "imamet",
    "region": "Dağıstan",
    "birthPlace": "Gotsatl",
    "deathPlace": "Hunzah",
    "center": "Gotsatl, Hunzah",
    "image": "/images/p-hamzat.jpg",
    "gallery": [
      {
        "src": "/images/p-hamzat.jpg",
        "caption": "İkinci İmam Hamzat Bek portresi"
      },
      {
        "src": "/images/imamet.jpg",
        "caption": "Dağıstan yüksek yaylalarında İmamet atlıları"
      }
    ],
    "docs": [
      "samil-donemi-mektup"
    ],
    "summary": "Gazi Muhammed'in Gimri'de şehit düşmesinin ardından 1832–1834 yılları arasında İmamet sancağını taşıyan ikinci imam.",
    "bio": [
      "Avar soylu bir aileden gelen ve iyi bir medrese eğitimi alan Hamzat Bek, Gazi Muhammed'in en yakın komutanlarından biri olarak Çar İskan hattına karşı mücadele etti.",
      "1832 sonbaharında ikinci imam seçilerek Avar platosundaki dağınık hanlıkları İmamet idaresi altında toplamaya yöneldi.",
      "Eylül 1834'te Hunzah'ta düzenlenen bir suikast sonucu hayatını kaybetti; ardından meclis kararıyla imamlık Şeyh Şamil'e tevdi edildi."
    ],
    "related": [
      "gazi-muhammed",
      "seyh-samil"
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
    "image": "/images/people/baysangur-benoyski.webp",
    "gallery": [
      {
        "src": "/images/people/baysangur-benoyski.webp",
        "caption": "Benoy Naibi Baysungur dönem tasviri"
      },
      {
        "src": "/images/imamet.jpg",
        "caption": "Gunib ve İçkeriya savunma hatları"
      }
    ],
    "docs": [
      "samil-donemi-mektup",
      "imamet-dergisi-notlari"
    ],
    "summary": "Çatışmalarda bir kolunu, bir bacağını ve bir gözünü kaybetmesine rağmen atına bağlanarak cepheye atılan, boyun eğmezliğin Çeçen hafızasındaki simgesi.",
    "bio": [
      "Benoy teypinden gelen Baysangur, 1830'lardan itibaren Şeyh Şamil'in en güvenilir naiplerinden biri olarak Dargo (1845) ve Ahulgo çarpışmalarında en ön safta yer aldı.",
      "Ağustos 1859'da Gunib kuşatmasının son gününde teslimiyet kararını reddederek beraberindeki savaşçılarla kuşatmayı yarıp Çeçenya dağlarına döndü ve Benoy merkezli yeni bir direniş başlattı.",
      "1861 başlarında ağır kış şartlarında yaralı olarak esir düştü ve Mart 1861'de Hasavyurt'ta idam edildi. Halk destanlarında (illi) adı ölümsüzleşti."
    ],
    "related": [
      "seyh-samil",
      "tasav-haci"
    ]
  },
  {
    "slug": "gazi-muhammed",
    "name": "Gazi Muhammed",
    "born": "1795",
    "died": "1832",
    "title": "Kafkasya'nın Birinci İmamı",
    "era": "imamet",
    "region": "Dağıstan",
    "birthPlace": "Gimri",
    "deathPlace": "Gimri",
    "center": "Gimri",
    "image": "/images/p-gazi.jpg",
    "gallery": [
      {
        "src": "/images/p-gazi.jpg",
        "caption": "Birinci İmam Gazi Muhammed portresi"
      },
      {
        "src": "/images/doc-letter.jpg",
        "caption": "İmamet dönemi Arapça risale ve mektup geleneği"
      }
    ],
    "docs": [
      "samil-donemi-mektup"
    ],
    "summary": "Dağıstan ve Çeçenya İmameti'nin kurucusu; çocukluk arkadaşı Şeyh Şamil'in yol göstericisi ve Kafkasya'da hukuki-siyasi birliğin mimarı.",
    "bio": [
      "Gimri köyünde doğan Gazi Muhammed, derin İslami ilimler tahsilinin ardından halkları örfi kan davalarını bırakıp ortak hukuk ve özgürlük etrafında birleşmeye çağırdı.",
      "1828–1829'da alimler ve cemaat önderlerinin ittifakıyla Birinci İmam ilan edildi; Tarki, Kızlar ve Derbent çevresine uzanan başarılı seferler düzenledi.",
      "Ekim 1832'de doğduğu köy Gimri'nin taş kulelerinde son nefesine kadar savunma yaparken şehit düştü; kuşatmadan ağır yaralı kurtulan iki kişiden biri Şamil'di."
    ],
    "related": [
      "seyh-samil",
      "hamzat-bek",
      "tasav-haci"
    ]
  },
  {
    "slug": "haci-murad",
    "name": "Hacı Murad",
    "born": "1798",
    "died": "1852",
    "title": "Avar naibi ve süvari komutanı",
    "era": "imamet",
    "region": "Dağıstan",
    "birthPlace": "Hunzah",
    "deathPlace": "Nuha yakınları",
    "center": "Hunzah, Tselmes",
    "image": "/images/p-murad.jpg",
    "gallery": [
      {
        "src": "/images/p-murad.jpg",
        "caption": "Avar Naibi Hacı Murad portresi"
      },
      {
        "src": "/images/imamet.jpg",
        "caption": "Yüksek Kafkas geçitlerinde atlı akıncılar"
      }
    ],
    "docs": [
      "imamet-dergisi-notlari"
    ],
    "summary": "Yıldırım hızındaki süvari baskınlarıyla efsaneleşen Avar naibi; trajik sonu Lev Tolstoy'un ünlü 'Hacı Murat' eserine ilham verdi.",
    "bio": [
      "Hunzah'ta büyüyen Hacı Murad, 1840'lı yıllar boyunca Şeyh Şamil'in en cüretkâr süvari komutanlarından biri olarak Dağıstan'ın sarp vadilerinde ün kazandı.",
      "1851 yılında İmamet içindeki siyasi anlaşmazlıklar ve ailesinin rehin tutulması sebebiyle zorlu bir yol ayrımına girdi.",
      "Nisan 1852'de esir tutulan ailesini kurtarmak amacıyla dağlara doğru yola çıktığında Nuha yakınlarında kuşatılarak son mermisine kadar çarpıştı."
    ],
    "related": [
      "seyh-samil",
      "hamzat-bek"
    ]
  },
  {
    "slug": "seyh-samil",
    "name": "Şeyh Şamil",
    "born": "1797",
    "died": "1871",
    "title": "Kafkasya'nın Üçüncü İmamı",
    "era": "imamet",
    "region": "Dağıstan – Çeçenya",
    "birthPlace": "Gimri",
    "deathPlace": "Medine",
    "center": "Ahulgo, Dargo, Vedeno",
    "image": "/images/people/seyh-samil.webp",
    "gallery": [
      {
        "src": "/images/people/seyh-samil.webp",
        "caption": "İmam Şeyh Şamil (1797–1871) arşiv portresi"
      },
      {
        "src": "/images/p-samil.jpg",
        "caption": "Şeyh Şamil portresi"
      },
      {
        "src": "/images/doc-letter.jpg",
        "caption": "1845 (1261 H.) tarihli İmamet divanı Arapça mektubu"
      }
    ],
    "docs": [
      "samil-donemi-mektup",
      "imamet-dergisi-notlari",
      "kafkas-atlasi"
    ],
    "summary": "1834'ten 1859'a kadar çeyrek asır boyunca Çeçenya ve Dağıstan'ı düzenli bir devlet, divan, ordu ve naiplik sistemi altında birleştiren efsanevi devlet adamı ve komutan.",
    "bio": [
      "1797'de Dağıstan'ın Gimri köyünde dünyaya gelen Şamil, Gazi Muhammed ve Hamzat Bek'in ardından 1834 yılında Kafkasya'nın üçüncü imamı seçildi.",
      "Yalnızca askeri bir direniş değil; 'Nizam' adı verilen hukuk kuralları, naiplik idaresi, top dökümhaneleri, posta teşkilatı ve yazılı arşiv düzeniyle tam teşekküllü bir devlet kurdu. Ahulgo (1839), Dargo (1845) ve başkent Vedeno bu dönemin simgesi oldu.",
      "25 Ağustos 1859'da Gunib'de kuşatmanın ardından sivil kayıpları önlemek için silah bıraktı. Kaluga'daki on yıllık zorunlu ikametin ardından 1870'te Hicaz'a gitmesine izin verildi; Şubat 1871'de Medine'de vefat ederek Cennetü'l-Baki kabristanına defnedildi."
    ],
    "related": [
      "gazi-muhammed",
      "tasav-haci",
      "baysangur-benoyski",
      "haci-murad"
    ]
  },
  {
    "slug": "kunta-haci",
    "name": "Kunta Hacı Kişiyev",
    "born": "1812",
    "died": "1867",
    "title": "Mutasavvıf, manevi önder",
    "era": "imparatorluk",
    "region": "Çeçenya – İnguşetya",
    "birthPlace": "Melçuhi (İlsahan-Yurt)",
    "deathPlace": "Ustyujna",
    "center": "İlsahan-Yurt",
    "image": "/images/p-scholar.jpg",
    "gallery": [
      {
        "src": "/images/p-scholar.jpg",
        "caption": "Şeyh Kunta Hacı Kişiyev portresi"
      },
      {
        "src": "/images/doc-report.jpg",
        "caption": "1864–1865 dönemi arşiv kayıtları"
      }
    ],
    "docs": [
      "rus-raporu-1864"
    ],
    "summary": "On yıllar süren savaşların yaralarını merhamet, sabır, yardımlaşma ve cehri zikir halkalarıyla saran, Çeçen ve İnguş halklarının büyük manevi rehberi.",
    "bio": [
      "Uzun yıllar süren Kafkas Savaşı'nın demografik yıkımı karşısında Kunta Hacı, halkın tamamen yok olmasını önlemek için manevi direnişi, yetimlerin gözetilmesini ve toplumsal dayanışmayı öğütledi.",
      "Öğretisi özellikle Çeçenya ve İnguşetya'da on binlerce insanı bir araya getirdi; İnguş halkının gönüllü olarak İslam'ı derinlemesine benimsemesinde belirleyici rol oynadı.",
      "Ocak 1864'te Çarlık makamlarınca tutuklandı, Şali'de kendisine destek için toplanan silahsız halka ateş açıldı ('Hançerler Savaşı'). Novgorod yakınlarındaki Ustyujna sürgününde Mayıs 1867'de vefat etti."
    ],
    "related": [
      "alibek-haci",
      "uzun-haci"
    ]
  },
  {
    "slug": "uzun-haci",
    "name": "Uzun Hacı Saltinski",
    "born": "1848",
    "died": "1920",
    "title": "Kuzey Kafkasya Emirliği'nin kurucusu",
    "era": "sovyet",
    "region": "Dağıstan – Çeçenya",
    "birthPlace": "Salta",
    "deathPlace": "Vedeno",
    "center": "Salta, Vedeno",
    "image": "/images/p-uzun.jpg",
    "gallery": [
      {
        "src": "/images/p-uzun.jpg",
        "caption": "Şeyh Uzun Hacı Saltinski portresi"
      },
      {
        "src": "/images/imamet.jpg",
        "caption": "Vedeno dağ merkezi"
      }
    ],
    "docs": [
      "imamet-dergisi-notlari"
    ],
    "summary": "1877 ayaklanmasından Sibirya sürgününe, oradan 1919'da Vedeno merkezli Kuzey Kafkasya Emirliği'nin kuruluşuna uzanan ömrüyle bağımsızlık fikrinin simgesi.",
    "bio": [
      "Gençliğinde 1877 Dağıstan-Çeçenya ayaklanmasına katıldığı için yıllarca Sibirya'da sürgünde kalan Uzun Hacı, kaçarak Hicaz ve İstanbul üzerinden Kafkasya'ya geri döndü.",
      "1917 İhtilali sonrası Kuzey Kafkasya'yı işgal eden Denikin ordularına karşı Çeçen ve Dağıstan kuvvetlerini birleştirdi ve Eylül 1919'da Vedeno'da kendi parası, meclisi ve ordusu olan Kuzey Kafkasya Emirliği'ni ilan etti.",
      "Mart 1920'de 72 yaşında Vedeno'da hayatını kaybetti."
    ],
    "related": [
      "alibek-haci",
      "aslanbek-seripov"
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
    "image": "/images/people/alibek-haci.webp",
    "gallery": [
      {
        "src": "/images/people/alibek-haci.webp",
        "caption": "Alibek Hacı Aldamov dönem gravürü"
      },
      {
        "src": "/images/doc-map.jpg",
        "caption": "1871 Kuzey Kafkasya askeri haritası"
      }
    ],
    "docs": [
      "kafkasya-haritasi-1871"
    ],
    "summary": "Henüz 27 yaşındayken 1877–1878 Osmanlı-Rus Harbi sırasında İçkeriya ormanlarında imam seçilerek Çeçenya ve Dağıstan'daki büyük kıyamı yöneten önder.",
    "bio": [
      "Simsir köyünde doğan Alibek Hacı, Nisan 1877'de Sayasan ve Vedeno ormanlarında toplanan halk temsilcileri tarafından imam ilan edildi.",
      "Kısa sürede 47 Çeçen köyü ve Dağıstan yaylalarına yayılan hareket, ağır topçu birliklerine karşı aylar boyunca direndi.",
      "Sivil köylerin yakılmasını ve halkın sürgün edilmesini durdurmak amacıyla komutanlarıyla birlikte teslim oldu; Mart 1878'de Grozni'de on bir silah arkadaşıyla birlikte idam edildi."
    ],
    "related": [
      "kunta-haci",
      "uzun-haci"
    ]
  },
  {
    "slug": "zelimhan",
    "name": "Zelimhan Guşmazukayev (Harachoyski)",
    "born": "1872",
    "died": "1913",
    "title": "Harachoylu efsanevi abrek",
    "era": "imparatorluk",
    "region": "Çeçenya",
    "birthPlace": "Harachoy",
    "deathPlace": "Şali yakınları",
    "center": "Harachoy, Assa ve Argun Vadileri",
    "image": "/images/people/zelimhan.webp",
    "gallery": [
      {
        "src": "/images/people/zelimhan.webp",
        "caption": "Harachoylu Zelimhan (1872–1913) arşiv fotoğrafı"
      },
      {
        "src": "/images/doc-tower.jpg",
        "caption": "19. yüzyıl sonu dağ sığınakları ve taş kuleler"
      }
    ],
    "docs": [
      "targim-kuleleri-fotografi",
      "atli-birlik-fotografi"
    ],
    "summary": "Çarlık idaresinin keyfi cezalarına karşı on iki yıl boyunca sarp dağlardan meydan okuyan, yoksullara dağıttığı adaletle Kafkas folkloruna geçen abrek.",
    "bio": [
      "Vedeno yakınlarındaki Harachoy köyünde doğan Zelimhan, işlemediği bir suçtan ötürü ailesiyle birlikte haksızlığa uğrayınca Grozni hapishanesinden firar ederek dağlara çekildi.",
      "1901'den 1913'e kadar Çeçenya ve İnguşetya dağlarında binlerce kişilik cezalandırma müfrezelerini boşa çıkardı; Kızlar Bankası baskınından elde edilen paraları yoksul köylülere ve ağır vergi altındaki ailelere dağıttı.",
      "İnguş ve Çeçen köyleri onu ele vermektense ağır para cezalarına katlandı. Eylül 1913'te Şali yakınlarında tek başına kuşatıldığı çiftlikte sabaha kadar süren çatışmada hayatını kaybetti."
    ],
    "related": [
      "aslanbek-seripov"
    ]
  },
  {
    "slug": "aslanbek-seripov",
    "name": "Aslanbek Şeripov",
    "born": "1897",
    "died": "1919",
    "title": "Siyasi hatip, yazar ve komutan",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Şatoy",
    "deathPlace": "Vozdvijenskaya",
    "center": "Şatoy, Grozni",
    "image": "/images/p-seripov.jpg",
    "gallery": [
      {
        "src": "/images/p-seripov.jpg",
        "caption": "Aslanbek Şeripov (1897–1919) arşiv portresi"
      },
      {
        "src": "/images/kisiler.jpg",
        "caption": "20. yüzyıl başı Kuzey Kafkasya atlıları"
      }
    ],
    "docs": [
      "atli-birlik-fotografi"
    ],
    "summary": "22 yıllık kısa ömrüne Çeçen halk şarkıları derlemeleri, siyasi makaleler ve iç savaş komutanlığı sığdıran parlak entelektüel.",
    "bio": [
      "Şatoylu bir subay ailesinin çocuğu olan Aslanbek Şeripov, genç yaşta Çeçen sözlü edebiyatı ve abrek destanlarını Rusçaya çevirerek yayımladı.",
      "1917 sonrası Kuzey Kafkasya halk kongrelerinde dağlıların toprak haklarını ve kültürel özerkliğini savunan ateşli konuşmalarıyla öne çıktı.",
      "Eylül 1919'da Denikin'in Beyaz Ordu birliklerine karşı Vozdvijenskaya cephesinde savaşırken henüz 22 yaşında hayatını kaybetti."
    ],
    "related": [
      "uzun-haci",
      "abdurrahman-avtorhanov"
    ]
  },
  {
    "slug": "abdurrahman-avtorhanov",
    "name": "Abdurrahman Avtorhanov",
    "born": "1908",
    "died": "1997",
    "title": "Tarihçi, siyaset bilimci ve yazar",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Lakha-Nevre (Nadtereçnoye)",
    "deathPlace": "Münih",
    "center": "Grozni, Münih",
    "image": "/images/p-avtorhanov.jpg",
    "gallery": [
      {
        "src": "/images/p-avtorhanov.jpg",
        "caption": "Prof. Abdurrahman Avtorhanov arşiv portresi"
      },
      {
        "src": "/images/doc-surgun.jpg",
        "caption": "23 Şubat 1944 sürgünü arşiv belgesi"
      }
    ],
    "docs": [
      "surgun-listeleri-1944"
    ],
    "summary": "1944 Çeçen-İnguş sürgününü ve Sovyet iktidar mekanizmasını dünya akademisine belgeleyen en önemli Kafkasyalı tarihçi ve siyaset bilimci.",
    "bio": [
      "1908'de Çeçenya'da doğan Avtorhanov, Moskova'da Kızıl Profesörler Enstitüsü'nden mezun oldu ve genç yaşta Çeçen tarihi üzerine ilk akademik monografilerden birini kaleme aldı.",
      "1937 tasfiyelerinde yıllarca hapis yattıktan sonra İkinci Dünya Savaşı yıllarında Batı'ya geçerek Münih'e yerleşti; 1944 sürgününün boyutlarını Birleşmiş Milletler ve dünya basınına duyuran çalışmaları yayımladı.",
      "'İktidar Teknolojisi' ve 'Çeçen-İnguş Halkının Katli' başta olmak üzere yirmiden fazla dilde basılan eserler bıraktı ve 1997'de Münih'te vefat etti."
    ],
    "related": [
      "idris-bazorkin",
      "mahmud-esambayev"
    ]
  },
  {
    "slug": "idris-bazorkin",
    "name": "İdris Bazorkin",
    "born": "1910",
    "died": "1993",
    "title": "İnguş edebiyatının kurucu romancısı",
    "era": "yakin",
    "region": "İnguşetya",
    "birthPlace": "Bazorkino (Çermen)",
    "deathPlace": "Nazran",
    "center": "Cerah Vadisi, Nazran",
    "image": "/images/p-bazorkin.jpg",
    "gallery": [
      {
        "src": "/images/p-bazorkin.jpg",
        "caption": "İnguş yazar İdris Bazorkin portresi"
      },
      {
        "src": "/images/targim-towers.jpg",
        "caption": "Romanlarına ilham veren Cerah ve Targim kuleleri"
      }
    ],
    "docs": [
      "targim-kuleleri-fotografi",
      "kuleler-albumu"
    ],
    "summary": "Başyapıtı 'Asırların Karanlığından' (Из тьмы веков) ile İnguş kule kültürünü, Ezdel ahlakını ve dağ yaşamını dünya edebiyatına taşıyan usta kalem.",
    "bio": [
      "Tarihi İnguş kule yerleşimlerinin izlerini taşıyan köklü bir ailenin ferdi olan İdris Bazorkin, öğretmenlik, tiyatro yazarlığı ve etnografya araştırmaları yürüttü.",
      "1944 Orta Asya sürgünü yıllarında Kırgızistan'da halkının yaşadığı acılara tanıklık etti; 1957'deki dönüş sürecinde İnguş kültür kurumlarının yeniden inşasına öncülük etti.",
      "1968'de yayımlanan destansı romanı 'Asırların Karanlığından', her İnguş evinde başucu eseri sayılan kültürel bir hafıza anıtına dönüştü."
    ],
    "related": [
      "abdurrahman-avtorhanov",
      "mahmud-esambayev"
    ]
  },
  {
    "slug": "mahmud-esambayev",
    "name": "Mahmud Esambayev",
    "born": "1924",
    "died": "2000",
    "title": "Dünya sahnelerinin Kafkasyalı koreografı",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Staryye Atagi",
    "deathPlace": "Moskova",
    "center": "Staryye Atagi, Bişkek, Grozni",
    "image": "/images/p-esambayev.jpg",
    "gallery": [
      {
        "src": "/images/p-esambayev.jpg",
        "caption": "Mahmud Esambayev sahne kostümü ve papahasıyla"
      },
      {
        "src": "/images/c-muzik.jpg",
        "caption": "Geleneksel dechig-pondar ve Kafkas ritmi"
      }
    ],
    "docs": [
      "el-sanatlari-katalogu"
    ],
    "summary": "Başından hiç çıkarmadığı papahası ve eşsiz sahne diliyle sürgün yıllarının karanlığından dünya bale ve dans sahnelerinin zirvesine yükselen sanat elçisi.",
    "bio": [
      "1924'te Argun kıyısındaki Staryye Atagi köyünde doğan Esambayev, çocuk yaşta köy düğünlerinde (lovzar) dans ederek yeteneğini gösterdi; cephede yaralandıktan kısa süre sonra 1944'te ailesiyle birlikte Orta Asya'ya sürgün edildi.",
      "Sürgün yıllarında Kırgız Devlet Opera ve Balesi'nin baş dansçısı oldu; 1957 sonrasında dünya halklarının ritüel danslarını Kafkas zarafetiyle birleştirerek Paris'ten Buenos Aires'e kadar ayakta alkışlandı.",
      "Resmi törenlerde dahi başından çıkarmadığı papahasını 'halkımın tacı' olarak tanımlayan Esambayev, Ocak 2000'de vefat etti."
    ],
    "related": [
      "idris-bazorkin",
      "abdurrahman-avtorhanov"
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
    "image": "/images/people/suayip-molla.webp",
    "gallery": [
      {
        "src": "/images/people/suayip-molla.webp",
        "caption": "Şuayip Molla Tsentoroyevski (1805–1844) — Temsilî portre. Yapay zekâ ile canlandırılmıştır; özgün fotoğraf değildir."
      }
    ],
    "summary": "1805 yılında Tsentoroy köyünde doğan Şuayip Molla, genç yaşta İslami ilimlerde derinleşmiş ve İmam Şamil’in Çeçenistan’daki en güvendiği askeri dehalardan biri olarak Miçik ve İçkerya Naibliği görevini üstlenmiştir.",
    "bio": [
      "1805 yılında Tsentoroy köyünde doğan Şuayip Molla, genç yaşta İslami ilimlerde derinleşmiş ve İmam Şamil’in Çeçenistan’daki en güvendiği askeri dehalardan biri olarak Miçik ve İçkerya Naibliği görevini üstlenmiştir.",
      "Mayıs 1842’de gerçekleşen tarihi İtçkeri (İçkerya) Ormanları Muharebesi’nde General Grabbe komutasındaki Çarlık ordusunu ağır bir bozguna uğratarak yüzlerce Rus askerini ve topçu bataryalarını etkisiz hale getirmiştir. Kafkasya İmamlığı’nın en parlak taktik zekâlarından biri olarak tarihe geçen Şuayip Molla, Mart 1844’te vatan müdafaası yolunda şehit düşmüştür."
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
    "image": "/images/people/isa-gendargeno.webp",
    "gallery": [
      {
        "src": "/images/people/isa-gendargeno.webp",
        "caption": "İsa Gendargeno (1795–1845) — Temsilî portre. Yapay zekâ ile canlandırılmıştır; özgün fotoğraf değildir."
      }
    ],
    "summary": "1795 yılında Gendargen teypinde dünyaya gelen İsa Gendargeno, 1840 yılında Çeçen halkının İmam Şamil’e biat ederek Kafkasya İmamlığı bayrağı altında birleşmesinde başrol oynayan büyük Çeçen komutanıdır.",
    "bio": [
      "1795 yılında Gendargen teypinde dünyaya gelen İsa Gendargeno, 1840 yılında Çeçen halkının İmam Şamil’e biat ederek Kafkasya İmamlığı bayrağı altında birleşmesinde başrol oynayan büyük Çeçen komutanıdır.",
      "Büyük Çeçenistan Naibi olarak Valerik ve İtçkeri muharebelerinde ön saflarda çarpışmış; Temmuz 1845’te Kont Vorontsov’un 20 bin kişilik ordusunun imha edildiği ünlü Dargo Seferi’nde Çeçen birliklerine komuta etmiştir. Dargo zaferinin hemen ardından Temmuz 1845’te vatan topraklarını savunurken şehadet mertebesine ulaşan İsa Gendargeno, cesaretiyle kuşaklar boyu anılmıştır."
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
    "image": "/images/people/ahmad-avturinski.webp",
    "gallery": [
      {
        "src": "/images/people/ahmad-avturinski.webp",
        "caption": "Ahmad Avturinski (1824–1852) — Dönem gravürü / tarihî tasvir."
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
    "image": "/images/people/dada-tsentoroyevski.webp",
    "gallery": [
      {
        "src": "/images/people/dada-tsentoroyevski.webp",
        "caption": "Dada Tsentoroyevski (1800–1852) — Temsilî portre. Yapay zekâ ile canlandırılmıştır; özgün fotoğraf değildir."
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
    "image": "/images/people/goytemir-auhovski.webp",
    "gallery": [
      {
        "src": "/images/people/goytemir-auhovski.webp",
        "caption": "Goytemir Auhovski (1810–1853) — Temsilî portre. Yapay zekâ ile canlandırılmıştır; özgün fotoğraf değildir."
      }
    ],
    "summary": "1810 yılında doğan ve Tsentoroy teypinden olan Goytemir Auhovski, İmam Şamil’in Auh Naibi ve Kafkasya İmamlığı Süvari Kuvvetleri Başkomutanı olarak görev yapmış efsanevi bir askeri liderdir.",
    "bio": [
      "1810 yılında doğan ve Tsentoroy teypinden olan Goytemir Auhovski, İmam Şamil’in Auh Naibi ve Kafkasya İmamlığı Süvari Kuvvetleri Başkomutanı olarak görev yapmış efsanevi bir askeri liderdir.",
      "Yamansu ve Yarıksı nehirleri arasında inşa ettirdiği ünlü ‘Goytemir Kapıları’ tahkimatıyla Çarlık ordularına geçit vermemiş; Kumuk düzlüğü ve Hasavyurt hattında düzenlediği yıldırım süvari akınlarıyla büyük zaferler kazanmıştır. İmam Şamil’in en güvendiği uç beylerinden biri olan Goytemir Auhovski, 1853 yılında Çarlık ordularına karşı cephede en ön safta çarpışırken şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/bokka-deyski.webp",
    "gallery": [
      {
        "src": "/images/people/bokka-deyski.webp",
        "caption": "Bokka Deyski (1810–1858) — Temsilî portre. Yapay zekâ ile canlandırılmıştır; özgün fotoğraf değildir."
      }
    ],
    "summary": "1810 yılında Çeçenistan’ın dağlık Dey köyünde dünyaya gelen Bokka Deyski, Kafkasya İmamlığı’nın en stratejik geçitlerinden biri olan Çanti-Argun ve Şatoy bölgesinin Naibi olarak görev yapmıştır.",
    "bio": [
      "1810 yılında Çeçenistan’ın dağlık Dey köyünde dünyaya gelen Bokka Deyski, Kafkasya İmamlığı’nın en stratejik geçitlerinden biri olan Çanti-Argun ve Şatoy bölgesinin Naibi olarak görev yapmıştır.",
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
    "image": "/images/people/batuko-satoyski.webp",
    "gallery": [
      {
        "src": "/images/people/batuko-satoyski.webp",
        "caption": "Batuko Şatoyski (1802–1859) — Temsilî portre. Yapay zekâ ile canlandırılmıştır; özgün fotoğraf değildir."
      }
    ],
    "summary": "1802 yılında doğan Batuko Şatoyski, dağlık Çeçenistan’ın merkezi olan Şatoy bölgesinin Naibi, bilge devlet adamı ve Kafkasya İmamlığı’nın en tecrübeli komutanlarından biridir.",
    "bio": [
      "1802 yılında doğan Batuko Şatoyski, dağlık Çeçenistan’ın merkezi olan Şatoy bölgesinin Naibi, bilge devlet adamı ve Kafkasya İmamlığı’nın en tecrübeli komutanlarından biridir.",
      "İmam Şamil’in devlet divanında Çeçen halkını temsil etmiş; yirmi yılı aşkın süre boyunca Güney Çeçenistan dağlarındaki savunma hatlarını ve kale tahkimatlarını bizzat yönetmiştir. Kafkas Savaşları’nın en çetin evresi olan 1859 yılında vatan topraklarını savunurken şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/talhig-salinski.webp",
    "gallery": [
      {
        "src": "/images/people/talhig-salinski.webp",
        "caption": "Talhig Şalinski (1800–1861) — Dönem gravürü / tarihî tasvir."
      }
    ],
    "summary": "1800 yılında doğan Talhig Şalinski, İmam Şamil’in Büyük Çeçenistan ve Şali Naibi olarak yirmi yılı aşkın süre Kafkasya İmamlığı’nın en geniş cephesini savunmuş büyük komutandır.",
    "bio": [
      "1800 yılında doğan Talhig Şalinski, İmam Şamil’in Büyük Çeçenistan ve Şali Naibi olarak yirmi yılı aşkın süre Kafkasya İmamlığı’nın en geniş cephesini savunmuş büyük komutandır.",
      "Kafkasya İmamlığı’nda modern topçu birliklerinin kurulmasına öncülük etmiş; savaşlarda aldığı ağır yaralara rağmen Grozni ve Şali arasındaki Rus kalelerine karşı yüzlerce harekât yönetmiştir. Ömrünü Kafkasya’nın hürriyetine adayan Talhig Şalinski, 1861 yılında vatan mücadelesinin sönmeyen meşalesi olarak hayata gözlerini yummuştur."
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
    "image": "/images/people/soltamurad-benoyevski.webp",
    "gallery": [
      {
        "src": "/images/people/soltamurad-benoyevski.webp",
        "caption": "Soltamurad Benoyevski (1807–1878) — Temsilî portre. Yapay zekâ ile canlandırılmıştır; özgün fotoğraf değildir."
      }
    ],
    "summary": "1807 yılında Benoy’da doğan Soltamurad Benoyevski, 1859 sonrasında Baysangur Benoyski ile birlikte Çeçenistan dağlarında direniş sancağını yeniden yükselten en önemli askeri önderlerden biridir.",
    "bio": [
      "1807 yılında Benoy’da doğan Soltamurad Benoyevski, 1859 sonrasında Baysangur Benoyski ile birlikte Çeçenistan dağlarında direniş sancağını yeniden yükselten en önemli askeri önderlerden biridir.",
      "1860–1861 Benoy ayaklanmasında ve 1877 Büyük Çeçen-Dağıstan Kıyamı’nda Alibek-Hacı Aldamov ve Uma Duyev ile omuz omuza çarpışarak Çarlık garnizonlarına ağır darbeler indirmiştir. 70 yaşını aşmış olmasına rağmen 1877–1878 kışında karlı Kafkas dağlarında Rus kuşatmasına teslim olmayarak son nefesine kadar çarpışmış ve şehit düşmüştür."
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
    "image": "/images/people/uma-duyev.webp",
    "gallery": [
      {
        "src": "/images/people/uma-duyev.webp",
        "caption": "Uma Duyev (1809–1878) — Dönem gravürü / tarihî tasvir."
      }
    ],
    "summary": "1809 yılında Argun vadisinin sarp Zumsoy bölgesinde doğan Uma Duyev, İmam Şamil’in Zumsoy Naibi olarak görev yapmış ve Şamil sonrasında da Baysangur ile birlikte direnişi sürdürmüştür.",
    "bio": [
      "1809 yılında Argun vadisinin sarp Zumsoy bölgesinde doğan Uma Duyev, İmam Şamil’in Zumsoy Naibi olarak görev yapmış ve Şamil sonrasında da Baysangur ile birlikte direnişi sürdürmüştür.",
      "Sürgünden döndükten sonra, 70 yaşına yaklaşmışken 1877 Büyük Çeçen Kıyamı’na katılarak Argun ve Şatoy dağlarındaki halk güçlerine yeniden komuta etmiştir. 9 Mart 1878 tarihinde Grozni’de oğlu Dadaş ve silah arkadaşlarıyla birlikte Çarlık mahkemesinin idam sehpasında boyun eğmeden şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/deni-arsanov.webp",
    "gallery": [
      {
        "src": "/images/people/deni-arsanov.webp",
        "caption": "Şeyh Deni Arsanov (1851–1917) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1851 yılında Çeçenistan’ın Nadtereçni bölgesindeki Zandak-Ara köyünde, köklü Nohçi Enganoy taypına mensup bir ailede doğan Şeyh Deni Arsanov, Kuzey Kafkasya’nın en büyük Nakşibendi şeyhi ve manevi önderlerindendir.",
    "bio": [
      "1851 yılında Çeçenistan’ın Nadtereçni bölgesindeki Zandak-Ara köyünde, köklü Nohçi Enganoy taypına mensup bir ailede doğan Şeyh Deni Arsanov, Kuzey Kafkasya’nın en büyük Nakşibendi şeyhi ve manevi önderlerindendir.",
      "Çarlık Rusyası’nın baskılarına boyun eğmeyerek Çeçen ve İnguş halklarının dinî, millî ve toplumsal birliğini sağlamış; binlerce müridiyle Kafkasya dağlılarının hukukunu tavizsiz biçimde korumuştur. 1917 ihtilali sonrasında baş gösteren Rus Kazak saldırılarına karşı halkını korumak için gittiği Grozni’de, 27 Aralık 1917 tarihinde kurulan hain pusuda müritleriyle birlikte çatışarak şehit düşmüştür."
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
    "image": "/images/people/hamid-molla.webp",
    "gallery": [
      {
        "src": "/images/people/hamid-molla.webp",
        "caption": "Hamid-Molla Mustapayev (1897–1929) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1897 yılında Çeçenistan’ın dağlık bölgesinde doğan İslam âlimi Hamid-Molla Mustapayev, Bolşevik rejiminin camileri kapatma, âlimleri tutuklama ve zorla kolektifleştirme politikalarına karşı halk direnişinin başına geçmiştir.",
    "bio": [
      "1897 yılında Çeçenistan’ın dağlık bölgesinde doğan İslam âlimi Hamid-Molla Mustapayev, Bolşevik rejiminin camileri kapatma, âlimleri tutuklama ve zorla kolektifleştirme politikalarına karşı halk direnişinin başına geçmiştir.",
      "1929 yılında Şali, Goity ve Benoy bölgelerinde başlayan büyük Çeçen ayaklanmasına liderlik ederek Kızıl Ordu ve OGPU tümenlerine karşı vatanını ve inancını savunmuştur. 18 Aralık 1929 tarihinde Sovyet birlikleriyle girilen çetin muharebede silah arkadaşlarıyla birlikte son mermisine kadar çarpışarak şehit düşmüştür."
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
    "image": "/images/people/sita-istamulov.webp",
    "gallery": [
      {
        "src": "/images/people/sita-istamulov.webp",
        "caption": "Şita İstamulov (1887–1931) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1887 yılında Şali’de doğan Şita İstamulov, Kuzey Kafkasya Emirliği’nde Uzun Hacı’nın komutanlarından biri olarak görev yapmış ve 1929–1930 yıllarında Sovyet zulmüne karşı en büyük Çeçen kıyamını başlatmıştır.",
    "bio": [
      "1887 yılında Şali’de doğan Şita İstamulov, Kuzey Kafkasya Emirliği’nde Uzun Hacı’nın komutanlarından biri olarak görev yapmış ve 1929–1930 yıllarında Sovyet zulmüne karşı en büyük Çeçen kıyamını başlatmıştır.",
      "Şali’yi ele geçirip Kızıl Ordu’nun 28. Dağ Tümeni’ni geri püskürttükten sonra, Moskova yönetimine Çeçen halkının dinî ve millî özerkliğinin tanınmasını şart koşan tarihi ültimatomu göndermiştir. Sovyet yönetiminin barış ve af vaadiyle imzaladığı anlaşmaya rağmen, 1931 sonbaharında GPU tarafından kurulan hain pusuda tek başına çarpışarak şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/mayrbek-seripov.webp",
    "gallery": [
      {
        "src": "/images/people/mayrbek-seripov.webp",
        "caption": "Mayrbek Şeripov (1905–1942) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1905 yılında Şatoy’da köklü bir Çeçen ailesinde doğan hukukçu Mayrbek Şeripov (efsanevi komutan Aslanbek Şeripov’un kardeşi), Stalin rejiminin Çeçen halkına yönelik NKVD terörüne karşı 1941’de dağlara çıkmıştır.",
    "bio": [
      "1905 yılında Şatoy’da köklü bir Çeçen ailesinde doğan hukukçu Mayrbek Şeripov (efsanevi komutan Aslanbek Şeripov’un kardeşi), Stalin rejiminin Çeçen halkına yönelik NKVD terörüne karşı 1941’de dağlara çıkmıştır.",
      "Hasan İsrailov ile güçlerini birleştirerek Çeçen-İnguş Milli Kurtuluş Hareketi’ni yönetmiş; Şatoy, İtum-Kale ve Хimoy bölgelerinde Sovyet iktidarını devirerek dağlık Çeçenistan’ı özgürleştirmiştir. 7 Kasım 1942’de NKVD özel birliklerinin ağır kuşatmasında teslim olmayı reddederek son nefesine kadar çarpışmış ve şehit düşmüştür."
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
    "image": "/images/people/hasan-israilov.webp",
    "gallery": [
      {
        "src": "/images/people/hasan-israilov.webp",
        "caption": "Hasan İsrailov (1910–1944) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1910 yılında Çeçenistan’ın dağlık Galançoj bölgesindeki Naşha köyünde doğan şair, gazeteci ve hukukçu Hasan İsrailov, Sovyet rejiminin Kafkasya’daki zulmünü belgeledikten sonra Şubat 1940’ta Galançoj dağlarında büyük Çeçen direnişini başlatmıştır.",
    "bio": [
      "1910 yılında Çeçenistan’ın dağlık Galançoj bölgesindeki Naşha köyünde doğan şair, gazeteci ve hukukçu Hasan İsrailov, Sovyet rejiminin Kafkasya’daki zulmünü belgeledikten sonra Şubat 1940’ta Galançoj dağlarında büyük Çeçen direnişini başlatmıştır.",
      "Beş yıl boyunca Kafkas dağlarında Geçici Halk Devrimci Hükümeti’ni kurarak Sovyet ordularına ve NKVD tümenlerine karşı 5 binden fazla savaşçıyla bağımsızlık mücadelesi yürütmüştür. Şubat 1944 Sürgünü sonrasında da dağları terk etmeyen Hasan İsrailov, 25 Aralık 1944’te kuşatıldığı mağarada asla teslim olmayarak çatışmada şehit düşmüştür."
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
    "image": "/images/people/hasuha-magomadov.webp",
    "gallery": [
      {
        "src": "/images/people/hasuha-magomadov.webp",
        "caption": "Hasuha Magomadov (1907–1976) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1907 yılında Şatoy’un Gaten-Kale köyünde doğan Hasuha Magomadov, 1939 yılında dağlara çıkarak tam 37 yıl boyunca Sovyet İmparatorluğu’nun ordularına, NKVD ve KGB birliklerine tek başına meydan okuyan ‘Son Abrek’tir.",
    "bio": [
      "1907 yılında Şatoy’un Gaten-Kale köyünde doğan Hasuha Magomadov, 1939 yılında dağlara çıkarak tam 37 yıl boyunca Sovyet İmparatorluğu’nun ordularına, NKVD ve KGB birliklerine tek başına meydan okuyan ‘Son Abrek’tir.",
      "1940–1944 yıllarında Hasan İsrailov’un saflarında çarpışmış, 1944 Çeçen sürgünü sırasında ıssız kalan anavatan dağlarını 13 yıl boyunca terk etmeyerek işgalcilerden hesap sormuştur. 28 Mart 1976’da, 69 yaşında ağır hasta haldeyken Benoy dağlarında yüzlerce KGB ve Sovyet askerinin kuşatmasında tabancasıyla çarpışarak şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/hamzat-hankara.webp",
    "gallery": [
      {
        "src": "/images/people/hamzat-hankara.webp",
        "caption": "Hamzat Hankarov (1964–1994) — Arşiv fotoğrafı."
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
    "image": "/images/people/umalat-dasayev.webp",
    "gallery": [
      {
        "src": "/images/people/umalat-dasayev.webp",
        "caption": "Umalat Daşayev (1956–1994) — Arşiv fotoğrafı."
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
    "image": "/images/people/apti-tokayev.webp",
    "gallery": [
      {
        "src": "/images/people/apti-tokayev.webp",
        "caption": "Apti Tokayev (1960–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1960 yılında Çeçenistan’da doğan Apti Tokayev, Aralık 1994’te başlayan Rus işgaline karşı Başkent Grozni savunmasının en kritik noktalarından birini üstlenen kahraman müfreze komutanıdır.",
    "bio": [
      "1960 yılında Çeçenistan’da doğan Apti Tokayev, Aralık 1994’te başlayan Rus işgaline karşı Başkent Grozni savunmasının en kritik noktalarından birini üstlenen kahraman müfreze komutanıdır.",
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
    "image": "/images/people/cevher-dudayev.webp",
    "gallery": [
      {
        "src": "/images/people/cevher-dudayev.webp",
        "caption": "Cevher Dudayev (1944–1996) — Arşiv fotoğrafı."
      }
    ],
    "summary": "15 Şubat 1944’te, Çeçen sürgününden yalnızca birkaç gün önce Yalhoj köyünde doğan ve çocukluğu Kazakistan bozkırlarında sürgünde geçen Cevher Dudayev, Sovyet Hava Kuvvetleri’nde stratejik bombardıman tümeni komutanlığına yükselmiş ilk Müslüman Çeçen tümgeneraldir.",
    "bio": [
      "15 Şubat 1944’te, Çeçen sürgününden yalnızca birkaç gün önce Yalhoj köyünde doğan ve çocukluğu Kazakistan bozkırlarında sürgünde geçen Cevher Dudayev, Sovyet Hava Kuvvetleri’nde stratejik bombardıman tümeni komutanlığına yükselmiş ilk Müslüman Çeçen tümgeneraldir.",
      "1990’da Estonya halkının bağımsızlık hareketini bastırma emrini reddederek vatanına dönmüş ve 1991’de Çeçen İçkerya Cumhuriyeti’nin ilk Cumhurbaşkanı seçilerek bağımsızlığı ilan etmiştir. 1994–1996 Birinci Çeçen-Rus Savaşı’nda milletine başkomutanlık yapan Cevher Dudayev, 21 Nisan 1996’da Gekhi-Çu köyünde uydu telefonu sinyali üzerinden düzenlenen füze saldırısında şehit düşmüştür."
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
    "image": "/images/people/dokka-mahayev.webp",
    "gallery": [
      {
        "src": "/images/people/dokka-mahayev.webp",
        "caption": "Dokka Mahayev (1955–1996) — Arşiv fotoğrafı."
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
    "image": "/images/people/nurdi-bajiyev.webp",
    "gallery": [
      {
        "src": "/images/people/nurdi-bajiyev.webp",
        "caption": "Nurdi Bajiyev (1964–1997) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1964 yılında Çeçenistan’da doğan Nurdi Bajiyev, Nohçi bağımsızlık mücadelesinin ilk yıllarından itibaren ön saflarda yer almış ve Birinci Çeçen Savaşı’nda Grozni savunması ile güney cephesi operasyonlarında alay komutanı olarak çarpışmıştır.",
    "bio": [
      "1964 yılında Çeçenistan’da doğan Nurdi Bajiyev, Nohçi bağımsızlık mücadelesinin ilk yıllarından itibaren ön saflarda yer almış ve Birinci Çeçen Savaşı’nda Grozni savunması ile güney cephesi operasyonlarında alay komutanı olarak çarpışmıştır.",
      "Aslan Mashadov ve Şamil Basayev ile birlikte 1995–1996 yıllarındaki stratejik cephe harekâtlarının planlanmasında görev almış; üstün komutanlık vasfıyla Çeçen İçkerya Cumhuriyeti Tuğgenerali rütbesine terfi ettirilmiştir. 1997 yılında vatan savunmasında aldığı ağır yaralar ve savaşın bıraktığı etkiler sonucu henüz 33 yaşında şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/leca-hultigov.webp",
    "gallery": [
      {
        "src": "/images/people/leca-hultigov.webp",
        "caption": "Leça Hultıgov (1972–1998) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1972 yılında doğan Leça Hultıgov, Birinci Çeçen Savaşı’nda (1994–1996) gösterdiği üstün cesaret ve askeri başarılarla genç yaşta Çeçen İçkerya Cumhuriyeti Tuğgenerali rütbesine yükselmiştir.",
    "bio": [
      "1972 yılında doğan Leça Hultıgov, Birinci Çeçen Savaşı’nda (1994–1996) gösterdiği üstün cesaret ve askeri başarılarla genç yaşta Çeçen İçkerya Cumhuriyeti Tuğgenerali rütbesine yükselmiştir.",
      "Savaş sonrasında Cumhurbaşkanı Aslan Mashadov tarafından İçkerya Ulusal Güvenlik Servisi (NSB) Başkanlığına atanarak genç Çeçen devletinin iç güvenliğini, kamu düzenini ve bağımsızlığını korumak için mücadele etmiştir. 21 Haziran 1998 tarihinde Başkent Grozni’de devlet düzenini koruma görevi sırasında yaşanan çatışmada henüz 26 yaşında şehit düşmüştür."
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
    "image": "/images/people/huta-ahmadov.webp",
    "gallery": [
      {
        "src": "/images/people/huta-ahmadov.webp",
        "caption": "Huta Ahmadov (1972–1999) — Arşiv fotoğrafı."
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
    "image": "/images/people/magomed-yutayev.webp",
    "gallery": [
      {
        "src": "/images/people/magomed-yutayev.webp",
        "caption": "Magomed Yutayev (Malış) (1980–1999) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1980 yılında Çeçenistan’ın Urus-Martan bölgesindeki Şalaji köyünde doğan Magomed Yutayev, henüz 14 yaşındayken Rus işgaline karşı Çeçen direniş saflarına katılmış ve cephede ‘Malış’ (Küçük Savaşçı) lakabıyla tanınmıştır.",
    "bio": [
      "1980 yılında Çeçenistan’ın Urus-Martan bölgesindeki Şalaji köyünde doğan Magomed Yutayev, henüz 14 yaşındayken Rus işgaline karşı Çeçen direniş saflarına katılmış ve cephede ‘Malış’ (Küçük Savaşçı) lakabıyla tanınmıştır.",
      "Birinci Çeçen Savaşı’nda (1994–1996) Budyonnovsk harekâtında ve 1996 Grozni kurtuluş muharebelerinde en ön saflarda çarpışmış; genç yaşına rağmen olgun bakışları ve cesaretiyle direnişin sembol simalarından biri olmuştur. 1999 yılında İkinci Çeçen Savaşı’nın başlamasıyla yeniden cepheye koşan Magomed Yutayev, Rus güçleriyle girilen çatışmada henüz 19 yaşında şehit düşmüştür."
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
    "image": "/images/people/ruslan-hayhoroyev.webp",
    "gallery": [
      {
        "src": "/images/people/ruslan-hayhoroyev.webp",
        "caption": "Ruslan Hayhoroyev (1963–1999) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1963 yılında Çeçenistan’ın Açhoy-Martan bölgesindeki tarihi Bamut köyünde dünyaya gelen Tuğgeneral Ruslan Hayhoroyev, 1995–1996 yıllarında dünya askeri tarihine geçen ‘Bamut Savunması’nın başkomutanıdır.",
    "bio": [
      "1963 yılında Çeçenistan’ın Açhoy-Martan bölgesindeki tarihi Bamut köyünde dünyaya gelen Tuğgeneral Ruslan Hayhoroyev, 1995–1996 yıllarında dünya askeri tarihine geçen ‘Bamut Savunması’nın başkomutanıdır.",
      "Bir yılı aşkın süre boyunca Rus ordusunun ağır topçu, uçak bombardımanı ve zırhlı taarruzlarına karşı Bamut’u düşürmeden savunmuş; yirmiyi aşkın büyük Rus taarruzunu geri püskürtmüştür. İkinci Çeçen Savaşı’nın başlangıcında aldığı ağır yaralar sonucu 8 Eylül 1999 tarihinde şehit düşen Ruslan Hayhoroyev’in adı, eğilmeyen Bamut kalesiyle özdeşleşmiştir."
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
    "image": "/images/people/abusupyan-movsayev.webp",
    "gallery": [
      {
        "src": "/images/people/abusupyan-movsayev.webp",
        "caption": "Abusupyan Movsayev (1959–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1959 yılında doğan Tuğgeneral Abusupyan Movsayev, Cevher Dudayev ve Aslan Mashadov dönemlerinde Çeçen İçkerya Cumhuriyeti Devlet Güvenlik Dairesi Başkanlığı ve Emniyet Genel Müdürlüğü görevlerini yürütmüştür.",
    "bio": [
      "1959 yılında doğan Tuğgeneral Abusupyan Movsayev, Cevher Dudayev ve Aslan Mashadov dönemlerinde Çeçen İçkerya Cumhuriyeti Devlet Güvenlik Dairesi Başkanlığı ve Emniyet Genel Müdürlüğü görevlerini yürütmüştür.",
      "Şamil Basayev’in en yakın dava arkadaşlarından biri olarak Abhazya Savaşı’nda ve Birinci Çeçen Savaşı’nın tüm stratejik cephelerinde kritik istihbarat ve saha operasyonlarını yönetmiştir. 23 Mayıs 2000 tarihinde Çeçenistan’ın dağlık bölgesinde Rus özel kuvvetlerinin pususunda son mermisine kadar çarpışarak şehit düşmüştür."
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
    "image": "/images/people/apti-ahmadov.webp",
    "gallery": [
      {
        "src": "/images/people/apti-ahmadov.webp",
        "caption": "Apti Ahmadov (1961–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1961 yılında Urus-Martan’da doğan Apti Ahmadov, Çeçen direnişinin sembol ailesi Gendargenoy Ahmadov kardeşlerin büyüklerinden ve en tecrübeli alay komutanlarından biridir.",
    "bio": [
      "1961 yılında Urus-Martan’da doğan Apti Ahmadov, Çeçen direnişinin sembol ailesi Gendargenoy Ahmadov kardeşlerin büyüklerinden ve en tecrübeli alay komutanlarından biridir.",
      "Birinci Çeçen Savaşı’nda Bamut, Urus-Martan ve Grozni muharebelerinde Rus zırhlı birliklerine karşı üstün başarılar kazanmış; İkinci Çeçen Savaşı’nda Grozni’den çekilen birliklerin dağlık Şatoy hattında yeniden tertiplenmesini sağlamıştır. Şubat 2000 sonunda Şatoy ve Argun vadisi savunmasında Rus hava ve kara kuşatmasına karşı son mermisine kadar çarpışarak şehit düşmüştür."
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
    "image": "/images/people/aslambek-ismayilov.webp",
    "gallery": [
      {
        "src": "/images/people/aslambek-ismayilov.webp",
        "caption": "Aslambek İsmayilov (1962–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1962 yılında doğan Tuğgeneral Aslambek İsmayilov (‘Küçük Aslambek’), Ağustos 1996’da Grozni’nin Rus işgalinden kurtarıldığı efsanevi ‘Cihad Operasyonu’nun askeri planlayıcılarından ve saha komutanlarından biridir.",
    "bio": [
      "1962 yılında doğan Tuğgeneral Aslambek İsmayilov (‘Küçük Aslambek’), Ağustos 1996’da Grozni’nin Rus işgalinden kurtarıldığı efsanevi ‘Cihad Operasyonu’nun askeri planlayıcılarından ve saha komutanlarından biridir.",
      "Eylül 1999’da başlayan İkinci Çeçen Savaşı’nda Cumhurbaşkanı Aslan Mashadov tarafından Başkent Grozni Savunma Karargâhı Komutanlığına atanarak aylarca Rus ordusunu şehir kapılarında durdurmuştur. 1 Şubat 2000’de Grozni’den çıkış harekâtı sırasında Alhan-Kala geçişinde askerlerinin hayatını kurtarmak için mayınlı araziye en önde girerek şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "dalhan-hojayev",
    "name": "Dalhan Hojayev",
    "born": "1961",
    "died": "2000",
    "title": "Kafkasya İmameti naibi ve komutan",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Grozni",
    "deathPlace": "Valerik",
    "center": "Grozni",
    "image": "/images/people/dalhan-hojayev.webp",
    "gallery": [
      {
        "src": "/images/people/dalhan-hojayev.webp",
        "caption": "Dalhan Hojayev (1961–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "18 Nisan 1961’de Grozni’de doğan Dalhan Hojayev, Çeçen Devlet Üniversitesi Tarih Bölümü mezunu bir tarihçi ve müze araştırmacısı olarak 19. yüzyıl Kafkas Savaşları ve Çeçen Naibleri üzerine en kapsamlı arşiv eserlerini kaleme almıştır.",
    "bio": [
      "18 Nisan 1961’de Grozni’de doğan Dalhan Hojayev, Çeçen Devlet Üniversitesi Tarih Bölümü mezunu bir tarihçi ve müze araştırmacısı olarak 19. yüzyıl Kafkas Savaşları ve Çeçen Naibleri üzerine en kapsamlı arşiv eserlerini kaleme almıştır.",
      "Rus işgali başladığında kaleminin yanına silahını da alarak Ruslan Gelayev’in ‘Borz’ (Kurt) Özel Kuvvetler Alayı’nda kurmay komutan olmuş, Devlet Savunma Konseyi Sekreterliği ve Tuğgenerallik görevlerini üstlenmiştir. 26 Temmuz 2000 tarihinde Valerik köyünde Rus özel kuvvetlerinin saldırısında şehit düşen Dalhan Hojayev, Çeçen direnişinin hem hafızası hem de kahraman komutanı olarak tarihe geçmiştir."
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
    "image": "/images/people/hunkarpasa-israpilov.webp",
    "gallery": [
      {
        "src": "/images/people/hunkarpasa-israpilov.webp",
        "caption": "Hünkarpaşa İsrapilov (1967–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "26 Kasım 1967’de tarihi Auh bölgesinde dünyaya gelen Tuğgeneral Hünkarpaşa İsrapilov, Birinci Çeçen-Rus Savaşı’nda Güneydoğu Cephesi Komutanı ve Kizlyar-Pervomayskoye harekâtının sarsılmaz lideri olarak destan yazmıştır.",
    "bio": [
      "26 Kasım 1967’de tarihi Auh bölgesinde dünyaya gelen Tuğgeneral Hünkarpaşa İsrapilov, Birinci Çeçen-Rus Savaşı’nda Güneydoğu Cephesi Komutanı ve Kizlyar-Pervomayskoye harekâtının sarsılmaz lideri olarak destan yazmıştır.",
      "Üstün cesareti sebebiyle İçkerya’nın en yüksek devlet nişanı olan ‘Koman Siy’ ile ödüllendirilmiş; 1999–2000 kışında Grozni savunmasının en çetin doğu hatlarına komuta etmiştir. 1 Şubat 2000’de Alhan-Kala’da birliklerine geçiş yolu açarken Leça Dudayev ve Aslambek İsmayilov ile birlikte en önde savaşarak şehit düşmüştür."
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
    "image": "/images/people/leca-dudayev.webp",
    "gallery": [
      {
        "src": "/images/people/leca-dudayev.webp",
        "caption": "Leça Dudayev (1961–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1961 yılında Grozni’de doğan ve Şehit Cumhurbaşkanı Cevher Dudayev’in yeğeni olan Albay Leça Dudayev, Birinci Çeçen Savaşı’nda gösterdiği kahramanlıkların ardından Başkent Grozni Belediye Başkanlığı görevini üstlenmiştir.",
    "bio": [
      "1961 yılında Grozni’de doğan ve Şehit Cumhurbaşkanı Cevher Dudayev’in yeğeni olan Albay Leça Dudayev, Birinci Çeçen Savaşı’nda gösterdiği kahramanlıkların ardından Başkent Grozni Belediye Başkanlığı görevini üstlenmiştir.",
      "1999–2000 kışında ağır Rus bombardımanı altındaki Grozni’den bir gün bile ayrılmayarak hem şehrin savunmasını hem de sivillerin korunmasını yönetmiştir. 1 Şubat 2000 gecesi Grozni kuşatmasını yarma harekâtı sırasında Alhan-Kala mayın tarlalarında silah arkadaşlarına güvenli geçiş yolu açarken en önde yürüyerek şehit düşmüştür."
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
    "image": "/images/people/ruslan-alihaciyev.webp",
    "gallery": [
      {
        "src": "/images/people/ruslan-alihaciyev.webp",
        "caption": "Ruslan Alihaciyev (1961–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1961 yılında Şali şehrinde doğan Tuğgeneral Ruslan Alihaciyev, Birinci Çeçen Savaşı’nda (1994–1996) Şali Alayı ve Güney Cephesi Komutanı olarak kazandığı zaferlerle ‘Koman Siy’ nişanıyla taltif edilmiştir.",
    "bio": [
      "1961 yılında Şali şehrinde doğan Tuğgeneral Ruslan Alihaciyev, Birinci Çeçen Savaşı’nda (1994–1996) Şali Alayı ve Güney Cephesi Komutanı olarak kazandığı zaferlerle ‘Koman Siy’ nişanıyla taltif edilmiştir.",
      "1997–2000 yılları arasında Çeçen İçkerya Cumhuriyeti Parlamentosu’nun 4. Başkanı olarak görev yapmış; hem cephede hem de diplomaside Çeçen milletinin meşru iradesini temsil etmiştir. Mayıs 2000’de Şali’deki evinden Rus güçlerince kaçırılan Ruslan Alihaciyev, Moskova’daki Lefortovo zindanında ağır işkenceler altında tek bir taviz dahi vermeden şehit düşmüştür."
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
    "image": "/images/people/taus-bagurayev.webp",
    "gallery": [
      {
        "src": "/images/people/taus-bagurayev.webp",
        "caption": "Taus Bagurayev (1964–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1964 yılında doğan Tuğgeneral Taus Bagurayev, Birinci Çeçen Savaşı’nda Güneybatı Cephesi’nde gösterdiği üstün yararlılıklarla Çeçen Silahlı Kuvvetleri’nin önde gelen komutanları arasında yer almıştır.",
    "bio": [
      "1964 yılında doğan Tuğgeneral Taus Bagurayev, Birinci Çeçen Savaşı’nda Güneybatı Cephesi’nde gösterdiği üstün yararlılıklarla Çeçen Silahlı Kuvvetleri’nin önde gelen komutanları arasında yer almıştır.",
      "İkinci Çeçen Savaşı’nın en kanlı muharebelerinden biri olan Mart 2000 Komsomolskoye (Saadi-Kotar) savunmasında Rus ordusunun ağır kuşatmasına karşı haftalarca direnmiştir. Mart 2000’de Komsomolskoye’de silah arkadaşlarını kuşatmadan çıkarmak için artçı birlik olarak çarpışırken şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/isa-astamirov.webp",
    "gallery": [
      {
        "src": "/images/people/isa-astamirov.webp",
        "caption": "İsa Astamirov (1952–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1952 yılında doğan Tuğgeneral İsa Astamirov, hem Birinci hem de İkinci Çeçen Savaşı’nda Başkent Grozni’nin en zorlu savunma sektörlerine komuta eden tecrübeli bir kurmay ve saha komutanıdır.",
    "bio": [
      "1952 yılında doğan Tuğgeneral İsa Astamirov, hem Birinci hem de İkinci Çeçen Savaşı’nda Başkent Grozni’nin en zorlu savunma sektörlerine komuta eden tecrübeli bir kurmay ve saha komutanıdır.",
      "1999–2000 kışında yüz bin kişilik Rus ordusunun Grozni’yi kuşattığı günlerde, Staropromıslovski ve Minutka hatlarında haftalarca süren göğüs göğüse şehir muharebelerini yönetmiştir. 24 Ocak 2000 tarihinde kuşatma altındaki Grozni’de mevzilerini terk etmeyerek son nefesine kadar çarpışmış ve şehit düşmüştür."
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
    "image": "/images/people/adam-umalatov.webp",
    "gallery": [
      {
        "src": "/images/people/adam-umalatov.webp",
        "caption": "Adam Umalatov (Aba) (1975–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 yılında doğan ve cephede ‘Aba’ lakabıyla tanınan Adam Umalatov, 1994 yılında başlayan Birinci Çeçen Savaşı’ndan itibaren vatan savunmasının en ön saflarında yer almıştır.",
    "bio": [
      "1975 yılında doğan ve cephede ‘Aba’ lakabıyla tanınan Adam Umalatov, 1994 yılında başlayan Birinci Çeçen Savaşı’ndan itibaren vatan savunmasının en ön saflarında yer almıştır.",
      "1996 Grozni kurtuluş harekâtında ve İkinci Çeçen Savaşı’nın Argun, Şali ve Germençuk muharebelerinde özel taarruz gruplarına komuta ederek Rus zırhlı birliklerine ağır darbeler vurmuştur. Kasım 2001’de Rus işgal güçlerinin kuşatmasında son mermisine kadar çarpışarak 26 yaşında şehit düşmüştür."
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
    "image": "/images/people/arbi-barayev.webp",
    "gallery": [
      {
        "src": "/images/people/arbi-barayev.webp",
        "caption": "Arbi Barayev (1973–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "27 Mayıs 1973’te Alhan-Kala’da doğan Arbi Barayev, Birinci Çeçen Savaşı sırasında Sultan Gelishanov ve Hünkarpaşa İsrapilov’un saflarında çarpışmış, ardından Özel Amaçlı İslam Alayı’nı (İPON) kurarak Tuğgeneral rütbesine yükselmiştir.",
    "bio": [
      "27 Mayıs 1973’te Alhan-Kala’da doğan Arbi Barayev, Birinci Çeçen Savaşı sırasında Sultan Gelishanov ve Hünkarpaşa İsrapilov’un saflarında çarpışmış, ardından Özel Amaçlı İslam Alayı’nı (İPON) kurarak Tuğgeneral rütbesine yükselmiştir.",
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
    "image": "/images/people/magomed-tsagarayev.webp",
    "gallery": [
      {
        "src": "/images/people/magomed-tsagarayev.webp",
        "caption": "Magomed Tsagarayev (1975–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 yılında Çeçenistan’da doğan Magomed Tsagarayev, genç yaşta Birinci Çeçen Savaşı’na katılarak cesareti ve askeri disipliniyle kısa sürede müfreze komutanlığına yükselmiştir.",
    "bio": [
      "1975 yılında Çeçenistan’da doğan Magomed Tsagarayev, genç yaşta Birinci Çeçen Savaşı’na katılarak cesareti ve askeri disipliniyle kısa sürede müfreze komutanlığına yükselmiştir.",
      "İkinci Çeçen Savaşı’nda Urus-Martan, Grozni ve Alhan-Kala sektörlerinde Ramzan Ahmadov ve Arbi Barayev ile birlikte Rus işgal kuvvetlerine karşı en kritik şehir ve saha operasyonlarını yönetmiştir. Temmuz 2001’de Çeçenistan’da Rus özel kuvvetleriyle girilen silahlı çatışmada 26 yaşında şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/ramzan-ahmadov.webp",
    "gallery": [
      {
        "src": "/images/people/ramzan-ahmadov.webp",
        "caption": "Ramzan Ahmadov (1970–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "4 Şubat 1970’te doğan Tuğgeneral Ramzan Ahmadov, Abhazya ve Birinci Çeçen Savaşı’ndan itibaren gösterdiği üstün cesaretle İçkerya Silahlı Kuvvetleri’nin en genç ve en atılgan generallerinden biri olmuştur.",
    "bio": [
      "4 Şubat 1970’te doğan Tuğgeneral Ramzan Ahmadov, Abhazya ve Birinci Çeçen Savaşı’ndan itibaren gösterdiği üstün cesaretle İçkerya Silahlı Kuvvetleri’nin en genç ve en atılgan generallerinden biri olmuştur.",
      "İkinci Çeçen Savaşı’nda Urus-Martan, Argun ve Batı Grozni cephelerine komuta etmiş; Rus zırhlı konvoylarına karşı düzenlediği yıldırım baskınlarla işgal güçlerine ağır kayıplar verdirmiştir. Şubat 2001’de Grozni yakınlarındaki Starye Atagi geçişinde Rus özel kuvvetlerinin pususunda silah arkadaşlarını koruyarak son mermisine kadar çarpışmış ve şehit düşmüştür."
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
    "image": "/images/people/aslambek-abdulhaciyev.webp",
    "gallery": [
      {
        "src": "/images/people/aslambek-abdulhaciyev.webp",
        "caption": "Aslambek Abdulhaciyev (1962–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "12 Nisan 1962’de doğan ve devasa fiziği ile korkusuzluğu sebebiyle ‘Büyük Aslambek’ olarak tanınan Tuğgeneral Aslambek Abdulhaciyev, Abhazya Savaşı ve Birinci Çeçen Savaşı’nda Şamil Basayev’in en yakın saha komutanı olmuştur.",
    "bio": [
      "12 Nisan 1962’de doğan ve devasa fiziği ile korkusuzluğu sebebiyle ‘Büyük Aslambek’ olarak tanınan Tuğgeneral Aslambek Abdulhaciyev, Abhazya Savaşı ve Birinci Çeçen Savaşı’nda Şamil Basayev’in en yakın saha komutanı olmuştur.",
      "Grozni savunmasında, Budyonnovsk harekâtında ve 1996 Grozni kurtuluşunda en ön saflarda çarpışarak İçkerya’nın en yüksek madalyası olan ‘Koman Siy’ nişanıyla ödüllendirilmiş, savaş sonrasında Şali Kaymakamlığı ve Milletvekilliği yapmıştır. 26 Ağustos 2002 tarihinde Şali’de kuşatıldığı evde Rus güçlerine teslim olmayı reddederek son nefesine kadar çarpışmış ve şehit düşmüştür."
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
    "image": "/images/people/aydamir-abalayev.webp",
    "gallery": [
      {
        "src": "/images/people/aydamir-abalayev.webp",
        "caption": "Aydamir Abalayev (1964–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1964 yılında doğan Tuğgeneral Aydamir Abalayev, Birinci ve İkinci Çeçen Savaşları boyunca Doğu Cephesi’nde Nojay-Yurt ve Gudermes dağlık sektörlerinin en dirayetli komutanlarından biri olmuştur.",
    "bio": [
      "1964 yılında doğan Tuğgeneral Aydamir Abalayev, Birinci ve İkinci Çeçen Savaşları boyunca Doğu Cephesi’nde Nojay-Yurt ve Gudermes dağlık sektörlerinin en dirayetli komutanlarından biri olmuştur.",
      "Cumhurbaşkanı Aslan Mashadov’a bağlı düzenli İçkerya Silahlı Kuvvetleri bünyesinde doğu sınır hattındaki savunma ve gerilla harekâtlarını yıllarca başarıyla yönetmiştir. 1 Mayıs 2002 tarihinde Çeçenistan’ın doğu bölgesinde Rus kuvvetleriyle girilen şiddetli çatışmada şehit düşmüştür."
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
    "image": "/images/people/emir-hattab.webp",
    "gallery": [
      {
        "src": "/images/people/emir-hattab.webp",
        "caption": "Emir Hattab (1969–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1969 yılında doğan ve genç yaşta İslam coğrafyasındaki direniş saflarına katılan Emir Hattab, 1995 kışında Çeçenistan’a gelerek hayatının sonuna kadar Kafkasya’nın hürriyet mücadelesine omuz vermiştir.",
    "bio": [
      "1969 yılında doğan ve genç yaşta İslam coğrafyasındaki direniş saflarına katılan Emir Hattab, 1995 kışında Çeçenistan’a gelerek hayatının sonuna kadar Kafkasya’nın hürriyet mücadelesine omuz vermiştir.",
      "16 Nisan 1996’da Şatoy yakınlarındaki Yaryşmardy (Şatoy) pususunda Rus 245. Motorize Alayı’nı tamamen imha ederek Birinci Çeçen Savaşı’nın kaderini değiştirmiş; Cumhurbaşkanı Cevher Dudayev ve Aslan Mashadov tarafından ‘Koman Siy’ (Milletin Onuru) nişanıyla ödüllendirilmiştir. Açık cephede kendisini yenemeyen Rus istihbaratının zehirli bir mektupla düzenlediği suikast sonucu 20 Mart 2002’de 33 yaşında şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/huseyin-isabayev.webp",
    "gallery": [
      {
        "src": "/images/people/huseyin-isabayev.webp",
        "caption": "Hüseyin İsabayev (1960–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1960 yılında doğan Hüseyin İsabayev, 1992 Abhazya Savaşı’ndan itibaren Şamil Basayev’in en yakın silah arkadaşlarından biri olarak Çeçen bağımsızlık mücadelesinin çekirdek kadrosunda yer almıştır.",
    "bio": [
      "1960 yılında doğan Hüseyin İsabayev, 1992 Abhazya Savaşı’ndan itibaren Şamil Basayev’in en yakın silah arkadaşlarından biri olarak Çeçen bağımsızlık mücadelesinin çekirdek kadrosunda yer almıştır.",
      "Birinci Çeçen Savaşı’nda Vedeno taburunda ve Budyonnovsk harekâtında çarpışmış; İkinci Çeçen Savaşı’nda ise Güney Çeçenistan dağlarında ikmal ve savunma hatlarını yönetmiştir. Temmuz 2002’de İtum-Kale ve Gürcistan sınır hattındaki dağlık geçitlerde Rus hava indirme birlikleriyle girilen çatışmada şehit düşmüştür."
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
    "image": "/images/people/movsar-barayev.webp",
    "gallery": [
      {
        "src": "/images/people/movsar-barayev.webp",
        "caption": "Movsar Barayev (1979–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "26 Ekim 1979 tarihinde Argun şehrinde Nohçi direnişçi bir ailenin evladı olarak dünyaya gelen Movsar Barayev, genç yaşta Çeçen bağımsızlık mücadelesine katılarak amcası Arbi Barayev’in komutasında çarpışmıştır.",
    "bio": [
      "26 Ekim 1979 tarihinde Argun şehrinde Nohçi direnişçi bir ailenin evladı olarak dünyaya gelen Movsar Barayev, genç yaşta Çeçen bağımsızlık mücadelesine katılarak amcası Arbi Barayev’in komutasında çarpışmıştır.",
      "Haziran 2001’de amcasının şehadetinin ardından ‘Emir Süleyman’ adıyla Özel Amaçlı İslam Alayı (İPON) Komutanlığına geçmiş; Argun, Gudermes ve Grozni sektörlerinde çok sayıda cephe operasyonunu yönetmiştir. 26 Ekim 2002 tarihinde, 23. doğum gününde Rus özel kuvvetleriyle girilen silahlı çatışmada arkadaşlarıyla birlikte şehit düşmüştür."
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
    "image": "/images/people/muhammed-argunski.webp",
    "gallery": [
      {
        "src": "/images/people/muhammed-argunski.webp",
        "caption": "Muhammed Argunski (Magomed Şovhalov) (1977–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1977 yılında Çeçenistan’ın Argun şehrinde doğan ve gerçek adı Magomed Şovhalov olan Muhammed Argunski, genç yaşta İslami ilimlerde derinleşmiş Nohçi İslam âlimi ve mücahittir.",
    "bio": [
      "1977 yılında Çeçenistan’ın Argun şehrinde doğan ve gerçek adı Magomed Şovhalov olan Muhammed Argunski, genç yaşta İslami ilimlerde derinleşmiş Nohçi İslam âlimi ve mücahittir.",
      "Birinci ve İkinci Çeçen Savaşları yıllarında etkileyici hitabeti ve samimiyetiyle Çeçen gençliğinin manevi rehberlerinden biri olmuş; cephedeki direnişçilere cihad ahlakını, sabrı ve istikameti anlatmıştır. Hem ilmiyle hem de silahıyla Argun ve dağlık bölgelerdeki direniş saflarında bizzat çarpışan Muhammed Argunski, 2002 yılında Rus işgal güçleriyle girilen çatışmada 25 yaşında şehit düşmüştür."
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
    "image": "/images/people/rizvan-ahmadov.webp",
    "gallery": [
      {
        "src": "/images/people/rizvan-ahmadov.webp",
        "caption": "Rizvan Ahmadov (1957–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "6 Eylül 1957’de Kazakistan sürgününde doğan Rizvan Ahmadov, vatanı için yedi oğlunu şehit veren Gendargenoy Ahmadov ailesinin ağabeyi ve en tecrübeli saha komutanlarından biridir.",
    "bio": [
      "6 Eylül 1957’de Kazakistan sürgününde doğan Rizvan Ahmadov, vatanı için yedi oğlunu şehit veren Gendargenoy Ahmadov ailesinin ağabeyi ve en tecrübeli saha komutanlarından biridir.",
      "Birinci Çeçen Savaşı’nda Grozni, Bamut ve Urus-Martan muharebelerinde ağır yaralar almasına rağmen cepheden ayrılmamış; 2001’de kardeşi Ramzan Ahmadov’un şehadetinin ardından Merkez ve Grozni Cephesi Komutanlığını devralmıştır. 27 Haziran 2002 tarihinde Grozni’nin Mesker-Yurt bölgesinde Rus özel kuvvetleriyle girilen çatışmada şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/salman-raduyev.webp",
    "gallery": [
      {
        "src": "/images/people/salman-raduyev.webp",
        "caption": "Salman Raduyev (1967–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "13 Şubat 1967’de Gudermes şehrinde Gordali taypına mensup bir ailede doğan Tuğgeneral Salman Raduyev, 1992’de Gudermes Valisi olmuş ve Şehit Cumhurbaşkanı Cevher Dudayev’e bağlı ‘Başkanlık Berelileri’ muhafız alayını kurmuştur.",
    "bio": [
      "13 Şubat 1967’de Gudermes şehrinde Gordali taypına mensup bir ailede doğan Tuğgeneral Salman Raduyev, 1992’de Gudermes Valisi olmuş ve Şehit Cumhurbaşkanı Cevher Dudayev’e bağlı ‘Başkanlık Berelileri’ muhafız alayını kurmuştur.",
      "Birinci Çeçen Savaşı’nda Kuzeydoğu Cephesi ve ‘General Dudayev Ordusu’ komutanı olarak savaşmış; Mart 1996’da uğradığı ağır suikasttan sağ kurtularak yüzündeki ağır yaralara rağmen mücadelesini sürdürmüştür. Mart 2000’de esir düşen Salman Raduyev, Rus mahkemelerinde asla af dilememiş ve 14 Aralık 2002’de Solikamsk ‘Beyaz Kuğu’ cezaevinde işkence altında boyun eğmeden şehit olmuştur."
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
    "image": "/images/people/turpal-ali-atgeriyev.webp",
    "gallery": [
      {
        "src": "/images/people/turpal-ali-atgeriyev.webp",
        "caption": "Turpal-Ali Atgeriyev (1969–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "8 Mayıs 1969’da Alleroy köyünde dünyaya gelen ve hukuk-tarih eğitimi alan Turpal-Ali Atgeriyev, Birinci Çeçen-Rus Savaşı’nda Novogroznenski Alayı ve Cephe Komutanı olarak büyük zaferler kazanmıştır.",
    "bio": [
      "8 Mayıs 1969’da Alleroy köyünde dünyaya gelen ve hukuk-tarih eğitimi alan Turpal-Ali Atgeriyev, Birinci Çeçen-Rus Savaşı’nda Novogroznenski Alayı ve Cephe Komutanı olarak büyük zaferler kazanmıştır.",
      "Savaş sonrasında Cumhurbaşkanı Aslan Mashadov hükümetinde Çeçen İçkerya Cumhuriyeti Başbakan Yardımcılığı ve Milli Güvenlik Bakanlığı görevlerini başarıyla yürütmüştür. İkinci savaşta esir düşmesine rağmen Rus mahkemelerinde davasından asla taviz vermeyen Turpal-Ali Atgeriyev, 2002 yılında Yekaterinburg cezaevinde ağır işkenceler altında boyun eğmeden şehit düşmüştür."
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
    "image": "/images/people/zelimhan-ahmadov.webp",
    "gallery": [
      {
        "src": "/images/people/zelimhan-ahmadov.webp",
        "caption": "Zelimhan Ahmadov (1975–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 yılında Urus-Martan’da doğan Zelimhan Ahmadov, altı ağabeyiyle birlikte Çeçen bağımsızlık savaşına katılan Gendargenoy Ahmadov kardeşlerin genç ve gözü pek komutanıdır.",
    "bio": [
      "1975 yılında Urus-Martan’da doğan Zelimhan Ahmadov, altı ağabeyiyle birlikte Çeçen bağımsızlık savaşına katılan Gendargenoy Ahmadov kardeşlerin genç ve gözü pek komutanıdır.",
      "Haziran 2002’de ağabeyi Rizvan Ahmadov’un şehadetinin ardından Grozni ve Urus-Martan sektörlerindeki direniş birliklerinin komutasını devralarak mücadeleyi kesintisiz sürdürmüştür. 14 Eylül 2002 tarihinde Başkent Grozni yakınlarında Rus işgal kuvvetleriyle girilen çatışmada 27 yaşında şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/baudi-bakuyev.webp",
    "gallery": [
      {
        "src": "/images/people/baudi-bakuyev.webp",
        "caption": "Baudi Bakuyev (1965–2003) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1965 yılında doğan Tuğgeneral Baudi Bakuyev, Birinci Çeçen Savaşı’nda (1994–1996) Grozni savunmasında ve batı cephesi muharebelerinde gösterdiği üstün cesaretle İçkerya’nın en saygın komutanlarından biri olmuştur.",
    "bio": [
      "1965 yılında doğan Tuğgeneral Baudi Bakuyev, Birinci Çeçen Savaşı’nda (1994–1996) Grozni savunmasında ve batı cephesi muharebelerinde gösterdiği üstün cesaretle İçkerya’nın en saygın komutanlarından biri olmuştur.",
      "1999–2000 Grozni Savunması’nda başkentin en kritik savunma sektörlerini yönetmiş ve savaş sonrasında dağlık bölgelerde Rus işgal kuvvetlerine karşı gerilla harbini sürdürmüştür. Ekim 2003’te Çeçenistan’da Rus özel kuvvetleriyle girilen çatışmada son nefesine kadar savaşarak şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/ebu-el-velid.webp",
    "gallery": [
      {
        "src": "/images/people/ebu-el-velid.webp",
        "caption": "Ebu el-Velid (1967–2004) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1967 yılında doğan ve gençliğinde Kafkasya’ya gelerek Çeçen direnişine katılan Ebu el-Velid, Emir Hattab’ın en yakın silah arkadaşı ve yardımcısı olarak Doğu Cephesi’nde omuz omuza savaşmıştır.",
    "bio": [
      "1967 yılında doğan ve gençliğinde Kafkasya’ya gelerek Çeçen direnişine katılan Ebu el-Velid, Emir Hattab’ın en yakın silah arkadaşı ve yardımcısı olarak Doğu Cephesi’nde omuz omuza savaşmıştır.",
      "Nisan 1996 Yaryşmardy pususunda ve 1999–2004 yılları arasında Vedeno, Serjen-Yurt ve Nojay-Yurt dağlarındaki cephe harekâtlarında kritik zaferlere imza atmış; 2002’de Hattab’ın şehadetinin ardından komutanlığı devralmıştır. 16 Nisan 2004 tarihinde Çeçenistan’ın dağlık bölgesinde Rus kuvvetleriyle girdiği çatışmada şehit düşmüştür."
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
    "image": "/images/people/hamzat-tazabayev.webp",
    "gallery": [
      {
        "src": "/images/people/hamzat-tazabayev.webp",
        "caption": "Hamzat Tazabayev (1978–2004) — Arşiv fotoğrafı."
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
    "image": "/images/people/ruslan-gelayev.webp",
    "gallery": [
      {
        "src": "/images/people/ruslan-gelayev.webp",
        "caption": "Ruslan (Hamzat) Gelayev (1964–2004) — Arşiv fotoğrafı."
      }
    ],
    "summary": "16 Nisan 1964’te Komsomolskoye (Saadi-Kotar) köyünde doğan Tümg. Ruslan (Hamzat) Gelayev, Abhazya Savaşı ve iki Çeçen-Rus Savaşı boyunca efsanevi ‘Borz’ (Kurt) Özel Kuvvetler Alayı’na komuta etmiş, İçkerya Savunma Bakanlığı ve Başbakan Yardımcılığı yapmıştır.",
    "bio": [
      "16 Nisan 1964’te Komsomolskoye (Saadi-Kotar) köyünde doğan Tümg. Ruslan (Hamzat) Gelayev, Abhazya Savaşı ve iki Çeçen-Rus Savaşı boyunca efsanevi ‘Borz’ (Kurt) Özel Kuvvetler Alayı’na komuta etmiş, İçkerya Savunma Bakanlığı ve Başbakan Yardımcılığı yapmıştır.",
      "1995–1996’da Şatoy ve Grozni muharebelerinde, Mart 2000’de Komsomolskoye savunmasında ve 2001–2002’de Kodori-Galashki harekâtlarında yüzlerce kilometrelik dağ yürüyüşleriyle Rus ordusunun kuşatmalarını yarmıştır. 28 Şubat 2004’te Dağıstan’ın karlı Bezhta dağ geçidinde tek başına sınır muhafızlarıyla çarpışırken ağır yaralanan Hamzat Gelayev, kangren olan kolunu kendi hançeriyle kesip son nefesine kadar ilerleyerek şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/zelimhan-yandarbiyev.webp",
    "gallery": [
      {
        "src": "/images/people/zelimhan-yandarbiyev.webp",
        "caption": "Zelimhan Yandarbiyev (1952–2004) — Arşiv fotoğrafı."
      }
    ],
    "summary": "12 Eylül 1952’de Kazakistan sürgününde doğan şair, edebiyatçı ve fikir adamı Zelimhan Yandarbiyev, 1989’dan itibaren Çeçen milli uyanış hareketinin öncülüğünü yapmış ve Cevher Dudayev’in Devlet Başkan Yardımcısı olmuştur.",
    "bio": [
      "12 Eylül 1952’de Kazakistan sürgününde doğan şair, edebiyatçı ve fikir adamı Zelimhan Yandarbiyev, 1989’dan itibaren Çeçen milli uyanış hareketinin öncülüğünü yapmış ve Cevher Dudayev’in Devlet Başkan Yardımcısı olmuştur.",
      "Nisan 1996’da Dudayev’in şehadetinin ardından Çeçen İçkerya Cumhuriyeti Cumhurbaşkanlığı görevini üstlenmiş; Mayıs 1996’da Kremlin’de Yeltsin’in karşısına oturup eşit bir devlet başkanı vakarıyla ateşkesi kabul ettirmiş ve Ağustos 1996 Grozni zaferine başkomutanlık yapmıştır. 13 Şubat 2004’te Cuma namazı dönüşünde Katar’ın başkenti Doha’da Rus istihbarat ajanlarının aracına yerleştirdiği bombayla düzenlenen suikast sonucu şehit düşmüştür."
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
    "image": "/images/people/ahmed-avdorhanov.webp",
    "gallery": [
      {
        "src": "/images/people/ahmed-avdorhanov.webp",
        "caption": "Ahmed Avdorhanov (1971–2005) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1971 yılında Alleroy köyünde doğan Ahmed Avdorhanov, iki Çeçen savaşı boyunca vatan savunmasında yer alan kahraman Avdorhanov kardeşlerin büyüğü ve Cumhurbaşkanı Aslan Mashadov’un Cumhurbaşkanlığı Muhafız Alayı Komutanıdır.",
    "bio": [
      "1971 yılında Alleroy köyünde doğan Ahmed Avdorhanov, iki Çeçen savaşı boyunca vatan savunmasında yer alan kahraman Avdorhanov kardeşlerin büyüğü ve Cumhurbaşkanı Aslan Mashadov’un Cumhurbaşkanlığı Muhafız Alayı Komutanıdır.",
      "Yıllarca dağlarda Cumhurbaşkanı Mashadov’un yakın güvenliğini sağlamış, Doğu Cephesi’nde Gudermes ve Kurchaloy sektörlerinde çok sayıda başarılı askeri harekâtı yönetmiştir. 12 Eylül 2005 tarihinde Çeçenistan’ın doğu dağlarında Rus işgal birlikleriyle girilen çatışmada şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/aslan-mashadov.webp",
    "gallery": [
      {
        "src": "/images/people/aslan-mashadov.webp",
        "caption": "Aslan (Halid) Mashadov (1951–2005) — Arşiv fotoğrafı."
      }
    ],
    "summary": "21 Eylül 1951’de Kazakistan sürgününde doğan ve Sovyet Ordusu’nda albay rütbesiyle en seçkin topçu alaylarına komuta eden Aslan Mashadov, 1992’de vatanına dönerek Çeçen Silahlı Kuvvetleri Genelkurmay Başkanı olmuştur.",
    "bio": [
      "21 Eylül 1951’de Kazakistan sürgününde doğan ve Sovyet Ordusu’nda albay rütbesiyle en seçkin topçu alaylarına komuta eden Aslan Mashadov, 1992’de vatanına dönerek Çeçen Silahlı Kuvvetleri Genelkurmay Başkanı olmuştur.",
      "1994–1996 Birinci Çeçen-Rus Savaşı’nda Grozni savunmasının ve Ağustos 1996 Cihad Operasyonu’nun kurmay mimarı olmuş, Hasavyurt Barış Anlaşması’nı imzalamış ve Ocak 1997’de AGİT gözlemcileri eşliğinde yapılan demokratik seçimle Cumhurbaşkanı seçilmiştir. İkinci savaş boyunca dağlardan ve cepheden ayrılmayan Cumhurbaşkanı Aslan Mashadov, 8 Mart 2005’te Tolstoy-Yurt’ta kuşatıldığı sığınakta esir düşmemek için son nefesine kadar direnerek şehit olmuştur."
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
    "image": "/images/people/rizvan-citigov.webp",
    "gallery": [
      {
        "src": "/images/people/rizvan-citigov.webp",
        "caption": "Rizvan Çitigov (1964–2005) — Arşiv fotoğrafı."
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
    "image": "/images/people/vaha-arsanov.webp",
    "gallery": [
      {
        "src": "/images/people/vaha-arsanov.webp",
        "caption": "Vaha Arsanov (1950–2005) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1950 yılında Kazakistan sürgününde, büyük Nakşibendi şeyhi Deni Arsanov’un soyundan gelen köklü bir ailede doğan Vaha Arsanov, Birinci Çeçen Savaşı’nda Kuzeybatı Cephesi ve Grozni muharebelerinde kolordu komutanı olarak çarpışmıştır.",
    "bio": [
      "1950 yılında Kazakistan sürgününde, büyük Nakşibendi şeyhi Deni Arsanov’un soyundan gelen köklü bir ailede doğan Vaha Arsanov, Birinci Çeçen Savaşı’nda Kuzeybatı Cephesi ve Grozni muharebelerinde kolordu komutanı olarak çarpışmıştır.",
      "1997 seçimlerinde Cumhurbaşkanı Aslan Mashadov’un yanında Çeçen İçkerya Cumhuriyeti Cumhurbaşkanı Yardımcısı seçilmiş ve 1999’da başlayan İkinci Çeçen Savaşı’nda yeniden cepheye koşmuştur. 15 Mayıs 2005 tarihinde Grozni yakınlarındaki İvanovo yerleşiminde kuşatıldığı evde Rus güçlerine teslim olmayarak son nefesine kadar çatışmış ve şehit düşmüştür."
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
    "image": "/images/people/yunadi-turcayev.webp",
    "gallery": [
      {
        "src": "/images/people/yunadi-turcayev.webp",
        "caption": "Yunadi Turçayev (1972–2005) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1972 yılında Çeçenistan’ın Urus-Martan şehrinde doğan Yunadi Turçayev, Birinci Çeçen Savaşı’nda (1994–1996) Urus-Martan ve Grozni muharebelerinde yetişmiş en dirayetli Nohçi saha komutanlarındandır.",
    "bio": [
      "1972 yılında Çeçenistan’ın Urus-Martan şehrinde doğan Yunadi Turçayev, Birinci Çeçen Savaşı’nda (1994–1996) Urus-Martan ve Grozni muharebelerinde yetişmiş en dirayetli Nohçi saha komutanlarındandır.",
      "İkinci Çeçen Savaşı’nda Dokka Umarov ve Abdul-Halim Sadulayev ile birlikte Grozni Sektörü ve Merkez Cephesi Komutanlığını yürütmüş; Başkent Grozni içinde Rus askeri konvoylarına yönelik en kapsamlı şehir gerillası operasyonlarını organize etmiştir. 18 Şubat 2005 tarihinde Grozni’de Rus özel kuvvetlerinin kuşatmasına karşı son mermisine kadar çatışarak 33 yaşında şehit düşmüştür."
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
    "image": "/images/people/samil-basayev.webp",
    "gallery": [
      {
        "src": "/images/people/samil-basayev.webp",
        "caption": "Şamil Basayev (1965–2006) — Arşiv fotoğrafı."
      }
    ],
    "summary": "14 Ocak 1965’te Vedeno’nun Dışne-Vedeno köyünde doğan Şamil Basayev, 1991 Çeçen Devrimi, 1992 Abhazya Savaşı ve 1994–1996 Birinci Çeçen Savaşı’nda Grozni savunmasından Budyonnovsk harekâtına ve Ağustos 1996 Grozni kurtuluşuna kadar en kritik zaferlere komuta etmiştir.",
    "bio": [
      "14 Ocak 1965’te Vedeno’nun Dışne-Vedeno köyünde doğan Şamil Basayev, 1991 Çeçen Devrimi, 1992 Abhazya Savaşı ve 1994–1996 Birinci Çeçen Savaşı’nda Grozni savunmasından Budyonnovsk harekâtına ve Ağustos 1996 Grozni kurtuluşuna kadar en kritik zaferlere komuta etmiştir.",
      "Ocak 2000’de Grozni kuşatmasını yararken askerlerinin önünde mayın tarlasına girerek bir bacağını kaybetmiş; buna rağmen protez bacağıyla dağlara dönerek yıllarca direnişin askeri liderliğini sürdürmüştür. 10 Temmuz 2006 tarihinde İnguşetya’nın Ekajevo köyü yakınlarında mühimmat konvoyunda meydana gelen patlama sonucu 41 yaşında şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/abdul-halim-sadulayev.webp",
    "gallery": [
      {
        "src": "/images/people/abdul-halim-sadulayev.webp",
        "caption": "Şeyh Abdul-Halim Sadulayev (1966–2006) — Arşiv fotoğrafı."
      }
    ],
    "summary": "2 Haziran 1966’da Argun şehrinde doğan İslam âlimi ve fakih Şeyh Abdul-Halim Sadulayev, Birinci ve İkinci Çeçen Savaşlarında Argun direniş birliklerine komuta etmiş ve İçkerya Şeriat Mahkemesi ile Devlet Şurası’nda görev yapmıştır.",
    "bio": [
      "2 Haziran 1966’da Argun şehrinde doğan İslam âlimi ve fakih Şeyh Abdul-Halim Sadulayev, Birinci ve İkinci Çeçen Savaşlarında Argun direniş birliklerine komuta etmiş ve İçkerya Şeriat Mahkemesi ile Devlet Şurası’nda görev yapmıştır.",
      "Mart 2005’te Aslan Mashadov’un şehadetinin ardından Çeçen İçkerya Cumhuriyeti’nin 4. Cumhurbaşkanı ve Silahlı Kuvvetler Başkomutanı olmuş; direnişin sivillere zarar vermeyen meşru askeri hedeflere odaklanması emrini yayınlamıştır. Hiçbir zaman Çeçenistan topraklarını terk etmeyen Cumhurbaşkanı Abdul-Halim Sadulayev, 17 Haziran 2006’da doğduğu şehir olan Argun’da kuşatmaya karşı elinde silahıyla çarpışarak şehit düşmüştür."
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
    "image": "/images/people/rustam-basayev.webp",
    "gallery": [
      {
        "src": "/images/people/rustam-basayev.webp",
        "caption": "Rustam Basayev (Emir Ebu Bekir) (1975–2007) — Arşiv fotoğrafı."
      }
    ],
    "summary": "20 Mart 1975’te Dzhalka köyünde doğan Rustam Basayev (‘Emir Ebu Bekir’), henüz 19 yaşındayken Birinci Çeçen Savaşı’na katılmış, savaşlarda üç kez ağır yaralanmasına rağmen cepheden bir gün bile ayrılmamıştır.",
    "bio": [
      "20 Mart 1975’te Dzhalka köyünde doğan Rustam Basayev (‘Emir Ebu Bekir’), henüz 19 yaşındayken Birinci Çeçen Savaşı’na katılmış, savaşlarda üç kez ağır yaralanmasına rağmen cepheden bir gün bile ayrılmamıştır.",
      "Ağustos 2006’da Cumhurbaşkanı Dokka Umarov tarafından Tuğgeneral rütbesiyle Çeçen İçkerya Silahlı Kuvvetleri Merkez Cephesi Komutanlığına atanarak Grozni ve Argun hattındaki operasyonları yönetmiştir. 24 Ağustos 2007 tarihinde Başkent Grozni’de kuşatıldığı evde yüzlerce işgal askerine karşı saatlerce tek başına çarpışarak 32 yaşında şehit düşmüştür."
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
    "image": "/images/people/suleyman-elmurzayev.webp",
    "gallery": [
      {
        "src": "/images/people/suleyman-elmurzayev.webp",
        "caption": "Süleyman Elmurzayev (Emir Hayrullah) (1974–2007) — Arşiv fotoğrafı."
      }
    ],
    "summary": "22 Haziran 1974’te Vedeno’nun Agişbatoy köyünde doğan Süleyman Elmurzayev (‘Emir Hayrullah’), iki savaş boyunca Vedeno dağlarındaki direnişin en sarsılmaz saha komutanlarından biri olmuştur.",
    "bio": [
      "22 Haziran 1974’te Vedeno’nun Agişbatoy köyünde doğan Süleyman Elmurzayev (‘Emir Hayrullah’), iki savaş boyunca Vedeno dağlarındaki direnişin en sarsılmaz saha komutanlarından biri olmuştur.",
      "Temmuz 2006’da Şamil Basayev’in şehadetinin ardından Vedeno cephesinin komutasını ve Çeçen İçkerya Cumhuriyeti Cumhurbaşkanı Yardımcılığı (Naibliği) görevini üstlenmiştir. 4 Nisan 2007 tarihinde doğduğu Agişbatoy köyü yakınlarında kurulan pusuda son mermisine kadar çarpışarak 32 yaşında şehit düşmüştür."
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
    "image": "/images/people/usman-muntsigov.webp",
    "gallery": [
      {
        "src": "/images/people/usman-muntsigov.webp",
        "caption": "Usman Muntsigov (Emir Usman) (1975–2010) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 yılında Çeçenistan’da doğan ve Nohçi direnişinde ‘Emir Usman’ ile ‘Şatral’ lakaplarıyla tanınan Usman Muntsigov, Birinci ve İkinci Çeçen Savaşlarında kesintisiz 15 yıl boyunca dağlarda ve cephede çarpışmıştır.",
    "bio": [
      "1975 yılında Çeçenistan’da doğan ve Nohçi direnişinde ‘Emir Usman’ ile ‘Şatral’ lakaplarıyla tanınan Usman Muntsigov, Birinci ve İkinci Çeçen Savaşlarında kesintisiz 15 yıl boyunca dağlarda ve cephede çarpışmıştır.",
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
    "image": "/images/people/supyan-abdullayev.webp",
    "gallery": [
      {
        "src": "/images/people/supyan-abdullayev.webp",
        "caption": "Supyan Abdullayev (1956–2011) — Arşiv fotoğrafı."
      }
    ],
    "summary": "8 Kasım 1956’da Kazakistan sürgününde, Hatuni köyünden Tsadahar (Tsa-Vedeno) kökenli bir ailede doğan İslam âlimi ve eğitimci Supyan Abdullayev, 1991’den itibaren bağımsızlık saflarında yer alarak ‘İslam Taburu’ (Risale) komutanı olarak savaşmıştır.",
    "bio": [
      "8 Kasım 1956’da Kazakistan sürgününde, Hatuni köyünden Tsadahar (Tsa-Vedeno) kökenli bir ailede doğan İslam âlimi ve eğitimci Supyan Abdullayev, 1991’den itibaren bağımsızlık saflarında yer alarak ‘İslam Taburu’ (Risale) komutanı olarak savaşmıştır.",
      "Çeçen İçkerya Cumhuriyeti’nde Tuğgeneral rütbesine yükselmiş, Maliye Bakanlığı ve Başbakan Yardımcılığı görevlerini yürütmüş; Dokka Umarov’un birinci naibi olarak yıllarca Kafkas dağlarında direnişe rehberlik etmiştir. 28 Mart 2011 tarihinde İnguşetya dağlarındaki kamplarına düzenlenen ağır hava bombardımanı ve kara çatışmasında 54 yaşında şehit düşmüştür."
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
    "image": "/images/people/zaurbek-avdorhanov.webp",
    "gallery": [
      {
        "src": "/images/people/zaurbek-avdorhanov.webp",
        "caption": "Zaurbek Avdorhanov (1976–2012) — Arşiv fotoğrafı."
      }
    ],
    "summary": "8 Ekim 1976’da Alleroy köyünde doğan Zaurbek Avdorhanov, Cumhurbaşkanı Aslan Mashadov’un Muhafız Komutanı Şehit Ahmed Avdorhanov’un kardeşi olarak genç yaşta direniş saflarına katılmıştır.",
    "bio": [
      "8 Ekim 1976’da Alleroy köyünde doğan Zaurbek Avdorhanov, Cumhurbaşkanı Aslan Mashadov’un Muhafız Komutanı Şehit Ahmed Avdorhanov’un kardeşi olarak genç yaşta direniş saflarına katılmıştır.",
      "2005 yılında ağabeyi Ahmed Avdorhanov’un şehadetinin ardından Doğu Cephesi’nde Gudermes ve Kurchaloy sektörlerinin komutasını devralarak yedi yıl daha dağlarda savaşı sürdürmüştür. 28 Temmuz 2012 tarihinde kardeşi İbrahimbek ve silah arkadaşı Ayub Haladov ile birlikte Galaytı köyünde kuşatmaya karşı son mermisine kadar çarpışarak şehit düşmüştür."
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
    "image": "/images/people/abdul-malik-mejidov.webp",
    "gallery": [
      {
        "src": "/images/people/abdul-malik-mejidov.webp",
        "caption": "Abdul-Malik Mejidov (1961–2013) — Arşiv fotoğrafı."
      }
    ],
    "summary": "19 Haziran 1961 tarihinde Çeçenistan’ın Urus-Martan şehrinde doğan Abdul-Malik Mejidov, Nohçi bağımsızlık hareketinin ilk yıllarından itibaren ön saflarda yer alan kıdemli komutanlarındandır.",
    "bio": [
      "19 Haziran 1961 tarihinde Çeçenistan’ın Urus-Martan şehrinde doğan Abdul-Malik Mejidov, Nohçi bağımsızlık hareketinin ilk yıllarından itibaren ön saflarda yer alan kıdemli komutanlarındandır.",
      "Birinci Çeçen Savaşı’nda (1994–1996) Urus-Martan ve Grozni cephelerinde Rus ordusuna karşı savaşarak Tuğgeneral rütbesine yükselmiş; iki savaş arası dönemde Çeçen İçkerya Cumhuriyeti Şeriat Muhafızları Komutanı olarak görev yapmıştır. İkinci Çeçen Savaşı’nda da direniş saflarını terk etmeyen Abdul-Malik Mejidov, 2013 yılında 52 yaşında hak ve hürriyet mücadelesi yolunda şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/doku-umarov.webp",
    "gallery": [
      {
        "src": "/images/people/doku-umarov.webp",
        "caption": "Dokka (Doku) Umarov (1964–2013) — Arşiv fotoğrafı."
      }
    ],
    "summary": "13 Nisan 1964’te Şatoy’un Harsenoy köyünde doğan Dokka Umarov, 1994’ten itibaren Ruslan Gelayev ile birlikte ‘Borz’ (Kurt) Özel Kuvvetler Alayı’nda savaşmış, Tuğgeneral rütbesiyle İçkerya Güvenlik Konseyi Sekreterliği ve Güneybatı Cephesi Komutanlığı yapmıştır.",
    "bio": [
      "13 Nisan 1964’te Şatoy’un Harsenoy köyünde doğan Dokka Umarov, 1994’ten itibaren Ruslan Gelayev ile birlikte ‘Borz’ (Kurt) Özel Kuvvetler Alayı’nda savaşmış, Tuğgeneral rütbesiyle İçkerya Güvenlik Konseyi Sekreterliği ve Güneybatı Cephesi Komutanlığı yapmıştır.",
      "2000 Grozni yarma harekâtında çenesinden ağır yaralanmasına ve ailesinin birçok ferdi Rus güçlerince rehin alınıp şehit edilmesine rağmen, tam 20 yıl boyunca bir gün bile Kafkas dağlarını terk etmemiştir. Haziran 2006’da Abdul-Halim Sadulayev’in şehadetinin ardından Cumhurbaşkanlığı ve direniş liderliğini üstlenen Dokka Umarov, 7 Eylül 2013’te dağlarda zehirlenerek düzenlenen suikast sonucu şehit düşmüştür."
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
    "image": "/images/people/huseyin-gakayev.webp",
    "gallery": [
      {
        "src": "/images/people/huseyin-gakayev.webp",
        "caption": "Hüseyin Gakayev (1970–2013) — Arşiv fotoğrafı."
      }
    ],
    "summary": "8 Temmuz 1970’te Vedeno bölgesindeki Elistanji köyünde doğan Hüseyin Gakayev, Birinci ve İkinci Çeçen savaşlarında neredeyse yirmi yıl boyunca doğu dağlarından bir gün bile inmeyen sarsılmaz bir komutandır.",
    "bio": [
      "8 Temmuz 1970’te Vedeno bölgesindeki Elistanji köyünde doğan Hüseyin Gakayev, Birinci ve İkinci Çeçen savaşlarında neredeyse yirmi yıl boyunca doğu dağlarından bir gün bile inmeyen sarsılmaz bir komutandır.",
      "2006 yılında Çeçen İçkerya Cumhuriyeti Doğu Cephesi Komutanlığına, 2007’de ise İçişleri Bakanlığı ve Başbakan Yardımcılığı görevlerine atanarak Vedeno ve Şali dağlarındaki tüm birlikleri yönetmiştir. 24 Ocak 2013 tarihinde Vedeno’nun Elistanji ve Haraçoy dağlarında kardeşi Müslim Gakayev ile birlikte binlerce kişilik kuşatmaya karşı son mermisine kadar çarpışarak şehit düşmüştür."
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
    "image": "/images/people/medet-onlu.webp",
    "gallery": [
      {
        "src": "/images/people/medet-onlu.webp",
        "caption": "Medet Önlü (1965–2013) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1965 yılında Kahramanmaraş’ın Göksun ilçesine bağlı Çardak beldesinde, Türkiye’deki köklü bir Nohçi ailesinde dünyaya gelen Medet Önlü, hayatı boyunca anavatanı Çeçenistan’ın hürriyet davasına hizmet etmiştir.",
    "bio": [
      "1965 yılında Kahramanmaraş’ın Göksun ilçesine bağlı Çardak beldesinde, Türkiye’deki köklü bir Nohçi ailesinde dünyaya gelen Medet Önlü, hayatı boyunca anavatanı Çeçenistan’ın hürriyet davasına hizmet etmiştir.",
      "Birinci ve İkinci Çeçen Savaşları boyunca binlerce Çeçen yaralı, gazî, yetim ve muhacirin tedavi edilmesi ve barınması için kurulan Kafkas-Çeçen dayanışma ağlarına öncülük etmiş; Cumhurbaşkanı Aslan Mashadov ve Dokka Umarov dönemlerinde Çeçen İçkerya Cumhuriyeti Türkiye Fahri Konsolosu olarak görev yapmıştır. 22 Mayıs 2013 tarihinde Ankara Balgat’taki makam ofisinde Rus istihbarat bağlantılı tetikçilerin düzenlediği hain suikast sonucu şehit düşmüştür."
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
    "image": "/images/people/muslim-gakayev.webp",
    "gallery": [
      {
        "src": "/images/people/muslim-gakayev.webp",
        "caption": "Müslim Gakayev (1973–2013) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1973 yılında Vedeno’nun Elistanji köyünde, vatan savunmasında dört kardeşini (Cemalela, Said-Usman, Hasan ve Hüseyin) şehit veren kahraman Gakayev ailesinin en küçüğü olarak dünyaya gelmiştir.",
    "bio": [
      "1973 yılında Vedeno’nun Elistanji köyünde, vatan savunmasında dört kardeşini (Cemalela, Said-Usman, Hasan ve Hüseyin) şehit veren kahraman Gakayev ailesinin en küçüğü olarak dünyaya gelmiştir.",
      "Şamil Basayev’in Cundullah birliğinde yetişmiş, ‘Emir Mansur’ adıyla Şali Sektörü Komutanlığını üstlenerek cesareti ve askeri stratejisiyle dağlardaki genç mücahit birliklerini eğitmiştir. 24 Ocak 2013 tarihinde Vedeno dağlarında ağabeyi Hüseyin Gakayev ile omuz omuza son nefesine kadar savaşarak şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/isa-munayev.webp",
    "gallery": [
      {
        "src": "/images/people/isa-munayev.webp",
        "caption": "İsa Munayev (1965–2015) — Arşiv fotoğrafı."
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
    "image": "/images/people/zelimhan-hangosvili.webp",
    "gallery": [
      {
        "src": "/images/people/zelimhan-hangosvili.webp",
        "caption": "Zelimhan Hangoşvili (1979–2019) — Arşiv fotoğrafı."
      }
    ],
    "summary": "15 Ağustos 1979 tarihinde Pankisi Vadisi’ndeki Duisi köyünde, Nohçi Dişniy taypına mensup bir ailede dünyaya gelen Zelimhan Hangoşvili, İkinci Çeçen Savaşı’nda anavatanı Çeçenistan’a geçerek Cumhurbaşkanı Aslan Mashadov ve Şamil Basayev’in komutasında çarpışmıştır.",
    "bio": [
      "15 Ağustos 1979 tarihinde Pankisi Vadisi’ndeki Duisi köyünde, Nohçi Dişniy taypına mensup bir ailede dünyaya gelen Zelimhan Hangoşvili, İkinci Çeçen Savaşı’nda anavatanı Çeçenistan’a geçerek Cumhurbaşkanı Aslan Mashadov ve Şamil Basayev’in komutasında çarpışmıştır.",
      "Grozni, Vedeno ve İnguşetya cephelerinde müfreze komutanı olarak Rus işgal ordusuna karşı en kritik harekâtlarda görev almış; savaştan sonra da Kafkasya halklarının bağımsızlık davasına hizmet etmeyi sürdürmüştür. Daha önce Tiflis’te uğradığı suikast girişiminden yaralı kurtulan Zelimhan Hangoşvili, 23 Ağustos 2019 tarihinde Almanya’nın başkenti Berlin’de Cuma namazına giderken Rus istihbarat (FSB) tetikçisinin düzenlediği suikast sonucu 40 yaşında şehit düşmüştür."
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
    "image": "/images/people/aslan-butukayev.webp",
    "gallery": [
      {
        "src": "/images/people/aslan-butukayev.webp",
        "caption": "Aslan Bütükayev (Emir Hamzat) (1974–2021) — Arşiv fotoğrafı."
      }
    ],
    "summary": "22 Ekim 1974’te doğan ve Açhoy-Martan bölgesinde yetişen Aslan Bütükayev (‘Emir Hamzat’), 1994’ten itibaren Birinci ve İkinci Çeçen Savaşları’nda Güneybatı Cephesi’nde çarpışmıştır.",
    "bio": [
      "22 Ekim 1974’te doğan ve Açhoy-Martan bölgesinde yetişen Aslan Bütükayev (‘Emir Hamzat’), 1994’ten itibaren Birinci ve İkinci Çeçen Savaşları’nda Güneybatı Cephesi’nde çarpışmıştır.",
      "Dokka Umarov döneminde Riyad-us Salihin Şehitler Tugayı Komutanı, Doğu-Batı cephelerinin birleştirici emiri ve Çeçenistan Vilayeti (Nohçiyço) Emir Yardımcısı olarak görev yapmış; yirmi beş yılı aşkın bir süre boyunca Çeçenistan dağlarını terk etmemiştir. 20 Ocak 2021 tarihinde Başkent Grozni’nin Katayama bölgesinde beş silah arkadaşıyla birlikte kuşatmayı reddedip son mermisine kadar savaşarak şehit düşmüş; Çeçenistan dağlarındaki çeyrek asırlık direnişin son kalesi olarak tarihe geçmiştir."
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
    "image": "/images/people/ali-mitayev.webp",
    "gallery": [
      {
        "src": "/images/people/ali-mitayev.webp",
        "caption": "Şeyh Ali Mitayev (1881–1925) — Arşiv fotoğrafı."
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
    "image": "/images/people/ibrahim-culikov.webp",
    "gallery": [
      {
        "src": "/images/people/ibrahim-culikov.webp",
        "caption": "İbrahim Çulikov (1891–1938) — Arşiv fotoğrafı."
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
    "image": "/images/people/cavadhan-murtazaliyev.webp",
    "gallery": [
      {
        "src": "/images/people/cavadhan-murtazaliyev.webp",
        "caption": "Cavadhan Murtazaliyev (1879–1944) — Arşiv fotoğrafı."
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
    "image": "/images/people/imam-alimsultanov.webp",
    "gallery": [
      {
        "src": "/images/people/imam-alimsultanov.webp",
        "caption": "İmam Alimsultanov (1957–1996) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1957 yılında Kırgızistan sürgününde doğan ve Hasavyurt’ta yetişen İmam Alimsultanov, geleneksel Çeçen destanlarını (‘İlli’) modern direniş ruhuyla birleştirerek Çeçen halkının unutulmaz milli ozanı ve direniş sesi olmuştur.",
    "bio": [
      "1957 yılında Kırgızistan sürgününde doğan ve Hasavyurt’ta yetişen İmam Alimsultanov, geleneksel Çeçen destanlarını (‘İlli’) modern direniş ruhuyla birleştirerek Çeçen halkının unutulmaz milli ozanı ve direniş sesi olmuştur.",
      "Birinci Çeçen-Rus Savaşı’nda (1994–1996) hem silahıyla hem de ‘Gazavat’, ‘Çeçenistan’ ve ‘Dağlılar’ marşlarıyla cepheden cepheye koşarak ateş hattındaki mücahitlere sarsılmaz bir moral aşılamış; Şehit Cumhurbaşkanı Cevher Dudayev tarafından ‘Koman Siy’ (Milletin Onuru) nişanıyla ödüllendirilmiştir. İstanbul’da yaralı Çeçen gazileri için verdiği konserlerden dönüşünde, 10 Kasım 1996 tarihinde Ukrayna’nın Odessa kentinde Rus istihbaratının düzenlediği suikast sonucu 39 yaşında şehit düşmüştür."
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
    "image": "/images/people/ali-itayev.webp",
    "gallery": [
      {
        "src": "/images/people/ali-itayev.webp",
        "caption": "Ali İtayev (1968–1998) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1968 yılında Çeçenistan’ın Urus-Martan bölgesinde dünyaya gelen Ali İtayev, Çeçen bağımsızlık hareketinin ilk yıllarından itibaren vatan savunmasında yer alan gözü pek saha komutanlarındandır.",
    "bio": [
      "1968 yılında Çeçenistan’ın Urus-Martan bölgesinde dünyaya gelen Ali İtayev, Çeçen bağımsızlık hareketinin ilk yıllarından itibaren vatan savunmasında yer alan gözü pek saha komutanlarındandır.",
      "Birinci Çeçen-Rus Savaşı’nda (1994–1996) Urus-Martan ve Başkent Grozni cephelerinde Rus işgal ordusuna karşı en ön saflarda çarpışmış; cesareti ve saha komutanlığındaki atılganlığıyla tanınmıştır. İçkerya’nın bağımsızlığı ve onuru uğrunda ömrünü adayan Ali İtayev, 1998 yılında Çeçenistan’da bağımsızlık davası yolunda şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/leci-islamov.webp",
    "gallery": [
      {
        "src": "/images/people/leci-islamov.webp",
        "caption": "Leci İslamov (‘Sakal’ / Boroda) (1962–2004) — Arşiv fotoğrafı."
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
    "image": "/images/people/daud-ahmadov.webp",
    "gallery": [
      {
        "src": "/images/people/daud-ahmadov.webp",
        "caption": "Daud Ahmadov (1944–2004) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1944 Çeçen sürgünü yılında dünyaya gelen Tuğgeneral Daud Ahmadov, Şehit Cumhurbaşkanı Cevher Dudayev’in en yakın dava ve silah arkadaşlarından biri olarak Çeçen Cumhuriyeti İçkerya hükümetinde Sanayi Bakanı ve devlet yöneticisi olarak görev yapmıştır.",
    "bio": [
      "1944 Çeçen sürgünü yılında dünyaya gelen Tuğgeneral Daud Ahmadov, Şehit Cumhurbaşkanı Cevher Dudayev’in en yakın dava ve silah arkadaşlarından biri olarak Çeçen Cumhuriyeti İçkerya hükümetinde Sanayi Bakanı ve devlet yöneticisi olarak görev yapmıştır.",
      "1994 yılında Rus işgalinin başlamasıyla birlikte makamını bırakıp cepheye koşarak Tuğgeneral rütbesiyle Şali Sektörü Komutanlığını üstlenmiş; hem Birinci hem de İkinci Çeçen Savaşı’nda dağlardan ve cepheden bir gün bile ayrılmamıştır. Koman Siy’ (Milletin Onuru) nişanı sahibi olan Daud Ahmadov, 2004 yılında Çeçenistan’ın bağımsızlığı uğrunda şehadet mertebesine ulaşmıştır."
    ]
  },
  {
    "slug": "mahran-saidov",
    "name": "Mahran Saidov (Emir Mahran)",
    "born": "?",
    "died": "1975",
    "title": "Çeçen direniş komutanı",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/mahran-saidov.webp",
    "gallery": [
      {
        "src": "/images/people/mahran-saidov.webp",
        "caption": "Mahran Saidov (Emir Mahran) (?–1975) — Arşiv fotoğrafı."
      }
    ],
    "summary": "22 Ocak 1975 tarihinde Çeçenistan’ın Nojay-Yurt bölgesindeki Gordali köyünde dünyaya gelen Mahran Saidov, genç yaşta katıldığı Çeçen bağımsızlık mücadelesinde Doğu Cephesi’nin en sarp dağlarında yıllarca gerilla savaşı yürütmüştür.",
    "bio": [
      "22 Ocak 1975 tarihinde Çeçenistan’ın Nojay-Yurt bölgesindeki Gordali köyünde dünyaya gelen Mahran Saidov, genç yaşta katıldığı Çeçen bağımsızlık mücadelesinde Doğu Cephesi’nin en sarp dağlarında yıllarca gerilla savaşı yürütmüştür.",
      "Emir Mahran’ ve ‘Kızıl Sakal’ lakaplarıyla Gudermes ve Nojay-Yurt sektörlerini yönetmiş; 2010 Tsentoroy harekâtı dahil en kritik cephe operasyonlarında ön saflarda çarpışmıştır. Rus medyasının defalarca ortaya attığı ölüm iddialarına rağmen cepheden sağ çıkan ve vatan mücadelesinin yaşayan şahitlerinden olan gazi komutandır."
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
    "image": "/images/people/tahir-batayev.webp",
    "gallery": [
      {
        "src": "/images/people/tahir-batayev.webp",
        "caption": "Tahir Batayev (Emir Timur) (1973–2007) — Arşiv fotoğrafı."
      }
    ],
    "summary": "30 Haziran 1973’te Çeçenistan’ın Şelkovskaya bölgesindeki Sarı-Su köyünde doğan Tuğgeneral Tahir Batayev, Birinci ve İkinci Çeçen Savaşları’nda gösterdiği üstün yararlılıkla Çeçen Cumhuriyeti İçkerya Silahlı Kuvvetleri Kuzeydoğu Cephesi Komutanlığına yükselmiştir.",
    "bio": [
      "30 Haziran 1973’te Çeçenistan’ın Şelkovskaya bölgesindeki Sarı-Su köyünde doğan Tuğgeneral Tahir Batayev, Birinci ve İkinci Çeçen Savaşları’nda gösterdiği üstün yararlılıkla Çeçen Cumhuriyeti İçkerya Silahlı Kuvvetleri Kuzeydoğu Cephesi Komutanlığına yükselmiştir.",
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
    "image": "/images/people/aslan-izrailov.webp",
    "gallery": [
      {
        "src": "/images/people/aslan-izrailov.webp",
        "caption": "Aslan İzrailov (Emir Sawab) (1977–2009) — Arşiv fotoğrafı."
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
    "image": "/images/people/islam-uspahaciyev.webp",
    "gallery": [
      {
        "src": "/images/people/islam-uspahaciyev.webp",
        "caption": "İslam Uspahaciyev (1973–2009) — Arşiv fotoğrafı."
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
    "image": "/images/people/amina-okuyeva.webp",
    "gallery": [
      {
        "src": "/images/people/amina-okuyeva.webp",
        "caption": "Amina Okuyeva (1983–2017) — Arşiv fotoğrafı."
      }
    ],
    "summary": "5 Haziran 1983’te doğan cerrah ve askeri doktor Amina Okuyeva, Çeçen özgürlük mücadelesinin sembol kadın savaşçısı olarak İkinci Çeçen Savaşı’nda Başkent Grozni’de yaralı direnişçileri ateş altında tedavi etmiş ve cephede bizzat yer almıştır.",
    "bio": [
      "5 Haziran 1983’te doğan cerrah ve askeri doktor Amina Okuyeva, Çeçen özgürlük mücadelesinin sembol kadın savaşçısı olarak İkinci Çeçen Savaşı’nda Başkent Grozni’de yaralı direnişçileri ateş altında tedavi etmiş ve cephede bizzat yer almıştır.",
      "2014 sonrasında eşi Adem Osmayev ve Tuğgeneral İsa Munayev ile birlikte Uluslararası Cevher Dudayev Barış Gücü Taburu’nda Rus emperyalizmine karşı cephede görev yapmıştır. Haziran 2017’de Kiev’de Rus istihbarat suikastçısının saldırısını kendi tabancasıyla karşılık vererek püskürten Amina Okuyeva, 30 Ekim 2017 tarihinde Kiev yakınlarında kurulan silahlı pusuda şehit düşmüştür."
    ]
  },
  {
    "slug": "aslambek-vadalov",
    "name": "Aslambek Vadalov (Emir Aslambek)",
    "born": "?",
    "died": "1971",
    "title": "Çeçen direniş komutanı",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/aslambek-vadalov.webp",
    "gallery": [
      {
        "src": "/images/people/aslambek-vadalov.webp",
        "caption": "Aslambek Vadalov (Emir Aslambek) (?–1971) — Arşiv fotoğrafı."
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
    "born": "?",
    "died": "1965",
    "title": "Çeçen direniş komutanı",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/tarhan-gaziyev.webp",
    "gallery": [
      {
        "src": "/images/people/tarhan-gaziyev.webp",
        "caption": "Tarhan Gaziyev (Emir Tarhan) (?–1965) — Arşiv fotoğrafı."
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
    "image": "/images/people/seyh-ahmed-edilov.webp",
    "gallery": [
      {
        "src": "/images/people/seyh-ahmed-edilov.webp",
        "caption": "Şeyh-Ahmed Edilov (1965–2000) — Arşiv fotoğrafı."
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
    "born": "?",
    "died": "1958",
    "title": "Çeçen direniş komutanı",
    "era": "sovyet",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/huseyin-ishanov.webp",
    "gallery": [
      {
        "src": "/images/people/huseyin-ishanov.webp",
        "caption": "Hüseyin İshanov (?–1958) — Arşiv fotoğrafı."
      }
    ],
    "summary": "22 Temmuz 1958 tarihinde dünyaya gelen Tuğgeneral Hüseyin İshanov, Çeçen milli bağımsızlık hareketinin ilk yıllarından itibaren devlet inşasında ve vatan savunmasında yer almıştır.",
    "bio": [
      "22 Temmuz 1958 tarihinde dünyaya gelen Tuğgeneral Hüseyin İshanov, Çeçen milli bağımsızlık hareketinin ilk yıllarından itibaren devlet inşasında ve vatan savunmasında yer almıştır.",
      "1994–1996 Birinci Çeçen-Rus Savaşı’nda Başkent Grozni ve Argun cephelerinde komutanlık yaparak Tuğgeneral rütbesine yükselmiş; 1997’de Çeçen İçkerya Cumhuriyeti Parlamentosu milletvekili seçilerek Cumhurbaşkanı Aslan Mashadov’un yanında görev yapmıştır. Sürgünde de Çeçen halkının bağımsızlık mücadelesini kararlılıkla sürdüren gazi generaldir."
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
    "image": "/images/people/isa-muskiyev.webp",
    "gallery": [
      {
        "src": "/images/people/isa-muskiyev.webp",
        "caption": "İsa Muskiyev (Emir Halid) (1974–2006) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1974 yılında Tsotsin-Yurt’ta doğan ve beş oğlunu bağımsızlık savaşına uğurlayan kahraman Muskiyev ailesinin komutan evladı olan İsa Muskiyev (‘Emir Halid’), Cumhurbaşkanı Aslan Mashadov’un koruma ekibinde ve Şehit Cumhurbaşkanı Abdul-Halim Sadulayev’in yakın karargâhında görev yapmıştır.",
    "bio": [
      "1974 yılında Tsotsin-Yurt’ta doğan ve beş oğlunu bağımsızlık savaşına uğurlayan kahraman Muskiyev ailesinin komutan evladı olan İsa Muskiyev (‘Emir Halid’), Cumhurbaşkanı Aslan Mashadov’un koruma ekibinde ve Şehit Cumhurbaşkanı Abdul-Halim Sadulayev’in yakın karargâhında görev yapmıştır.",
      "Kورتçaloy ve Şali sektörleri komutanı olarak 2004–2005 yıllarında Şali, Tsotsin-Yurt, Argun ve Tambov GRU özel kuvvetlerine karşı düzenlenen en ağır cephe operasyonlarını bizzat yönetmiş; çatışmalarda daima askerlerinin en önünde ilerlemesiyle tanınmıştır. 18 Eylül 2006 tarihinde en küçük kardeşi Ali Muskiyev ile aynı gün Rus kuşatmasında son mermisine kadar çarpışarak 32 yaşında şehit düşmüştür."
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
    "image": "/images/people/komutan-abdulmalik.webp",
    "gallery": [
      {
        "src": "/images/people/komutan-abdulmalik.webp",
        "caption": "Komutan Abdulmalik (1975–2008) — Arşiv fotoğrafı."
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
    "image": "/images/people/ali-muskiyev.webp",
    "gallery": [
      {
        "src": "/images/people/ali-muskiyev.webp",
        "caption": "Ali Muskiyev (1987–2006) — Arşiv fotoğrafı."
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
    "image": "/images/people/ebu-hafs.webp",
    "gallery": [
      {
        "src": "/images/people/ebu-hafs.webp",
        "caption": "Emir Ebu Hafs el-Ürdüni (1973–2006) — Arşiv fotoğrafı."
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
    "image": "/images/people/emir-muhenned.webp",
    "gallery": [
      {
        "src": "/images/people/emir-muhenned.webp",
        "caption": "Emir Mühenned (Halid Yusuf) (1969–2011) — Arşiv fotoğrafı."
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
    "image": "/images/people/vaha-canaraliyev.webp",
    "gallery": [
      {
        "src": "/images/people/vaha-canaraliyev.webp",
        "caption": "Vaha Canaraliyev (Emir Velid) (1981–2008) — Arşiv fotoğrafı."
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
    "image": "/images/people/sultan-hadisov.webp",
    "gallery": [
      {
        "src": "/images/people/sultan-hadisov.webp",
        "caption": "Sultan Hadisov (Emir Musa) (1968–2006) — Arşiv fotoğrafı."
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
    "image": "/images/people/ilman-estamirov.webp",
    "gallery": [
      {
        "src": "/images/people/ilman-estamirov.webp",
        "caption": "İlman Estamirov (1977–2011) — Arşiv fotoğrafı."
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
    "image": "/images/people/ahmad-tevzaninski.webp",
    "gallery": [
      {
        "src": "/images/people/ahmad-tevzaninski.webp",
        "caption": "Ahmad Tevzaninski (Ebu-Cafar) (1983–2008) — Arşiv fotoğrafı."
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
    "image": "/images/people/saydi-tevzaninski.webp",
    "gallery": [
      {
        "src": "/images/people/saydi-tevzaninski.webp",
        "caption": "Saydi Tevzaninski (1985–2011) — Arşiv fotoğrafı."
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
    "image": "/images/people/isa-izerhanov.webp",
    "gallery": [
      {
        "src": "/images/people/isa-izerhanov.webp",
        "caption": "İsa İzerhanov (Kara İsa) (1968–2009) — Arşiv fotoğrafı."
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
    "image": "/images/people/musa-muskiyev.webp",
    "gallery": [
      {
        "src": "/images/people/musa-muskiyev.webp",
        "caption": "Musa Muskiyev (1980–1999) — Arşiv fotoğrafı."
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
    "image": "/images/people/soyip-muskiyev.webp",
    "gallery": [
      {
        "src": "/images/people/soyip-muskiyev.webp",
        "caption": "Şoyip Muskiyev (1967–2002) — Arşiv fotoğrafı."
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
    "image": "/images/people/samil-muskiyev.webp",
    "gallery": [
      {
        "src": "/images/people/samil-muskiyev.webp",
        "caption": "Şamil Muskiyev (1976–2005) — Arşiv fotoğrafı."
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
    "image": "/images/people/murad-yusuphaciyev.webp",
    "gallery": [
      {
        "src": "/images/people/murad-yusuphaciyev.webp",
        "caption": "Murad Yusuphaciyev (Emir Ebu Sayaf) (1978–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1978 doğumlu Murad Yusuphaciyev, Grozni direnişinde “Emir Ebu Sayaf” künyesiyle tanınan gözüpek bir cemaat emiridir.",
    "bio": [
      "1978 doğumlu Murad Yusuphaciyev, Grozni direnişinde “Emir Ebu Sayaf” künyesiyle tanınan gözüpek bir cemaat emiridir.",
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
    "image": "/images/people/rabbani-halilov.webp",
    "gallery": [
      {
        "src": "/images/people/rabbani-halilov.webp",
        "caption": "Rabbani Halilov (1969–2007) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1969 doğumlu Rabbani Halilov, Dağıstan cephesi emiri ve İçkerya Çeçen Cumhuriyeti Silahlı Kuvvetleri Tuğgeneralidir.",
    "bio": [
      "1969 doğumlu Rabbani Halilov, Dağıstan cephesi emiri ve İçkerya Çeçen Cumhuriyeti Silahlı Kuvvetleri Tuğgeneralidir.",
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
    "image": "/images/people/aldili-ali.webp",
    "gallery": [
      {
        "src": "/images/people/aldili-ali.webp",
        "caption": "Aldılı Ali (1980–1996) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1980 yılında Grozni’nin Aldı kasabasında dünyaya gelen Ali, henüz 15 yaşındayken Birinci Rus-Çeçen Savaşı’nda vatan savunmasına katılan genç bir Çeçen kahramanıdır.",
    "bio": [
      "1980 yılında Grozni’nin Aldı kasabasında dünyaya gelen Ali, henüz 15 yaşındayken Birinci Rus-Çeçen Savaşı’nda vatan savunmasına katılan genç bir Çeçen kahramanıdır.",
      "Ocak 1996’da Komutan Hüseyin İsabayev’in Özel Amaçlı Taburunda makineli tüfekçi olarak görev almış; Mart 1996 Grozni taarruzunda ve Goyskoye köyü savunmasında en ön siperde çarpışmıştır. Bin mermilik makineli tüfek şeridini son fişeğine kadar boşaltmadan mevzisini terk etmemeye ant içen Aldılı Ali, 16 Nisan 1996 tarihinde henüz 16 yaşındayken Goyskoye’de Rus Hava İndirme birliklerine karşı çarpışarak şehit düşmüştür."
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
    "image": "/images/people/abubakar-hamurzayev.webp",
    "gallery": [
      {
        "src": "/images/people/abubakar-hamurzayev.webp",
        "caption": "Abubakar Hamurzayev (1975–2000) — Arşiv fotoğrafı."
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
    "image": "/images/people/ilyas-pasayev.webp",
    "gallery": [
      {
        "src": "/images/people/ilyas-pasayev.webp",
        "caption": "İlyas Paşayev (1973–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1973 yılında Alhan-Yurt’ta dünyaya gelen ve Dişni taypına mensup olan İlyas Paşayev, “Cihad” Taburu Emiri ve Çeçen direnişinin seçkin komutanlarındandır.",
    "bio": [
      "1973 yılında Alhan-Yurt’ta dünyaya gelen ve Dişni taypına mensup olan İlyas Paşayev, “Cihad” Taburu Emiri ve Çeçen direnişinin seçkin komutanlarındandır.",
      "1994’teki Birinci Rus-Çeçen Savaşı’ndan itibaren Tuğgeneral Ramzan Tsakayev ile omuz omuza çarpışmış; Tsakayev’in şehadetinin ardından “Cihad” Taburunun komutasını devralarak İçkerya devlet nişanlarına layık görülmüştür. 1 Mart 2000 tarihinde Ulus-Kert 776 rakımlı tepede Rus Pskov Hava İndirme Tümenine karşı yürütülen tarihi muharebede şehit düşmüştür."
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
    "image": "/images/people/halid-yandurkayev.webp",
    "gallery": [
      {
        "src": "/images/people/halid-yandurkayev.webp",
        "caption": "Halid Yandurkayev (1974–2000) — Arşiv fotoğrafı."
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
    "image": "/images/people/has-muhammed-hatuyev.webp",
    "gallery": [
      {
        "src": "/images/people/has-muhammed-hatuyev.webp",
        "caption": "Has-Muhammed Hatuyev (Kaboj) (1968–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1968 yılında Goyti köyünde dünyaya gelen ve “Kaboj” künyesiyle efsaneleşen Has-Muhammed Hatuyev, savaştan önce Dünya ve Olimpiyat Şampiyonasına hazırlanan milli güreşçi ve antrenördü.",
    "bio": [
      "1968 yılında Goyti köyünde dünyaya gelen ve “Kaboj” künyesiyle efsaneleşen Has-Muhammed Hatuyev, savaştan önce Dünya ve Olimpiyat Şampiyonasına hazırlanan milli güreşçi ve antrenördü.",
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
    "image": "/images/people/bay-ali-kasumov.webp",
    "gallery": [
      {
        "src": "/images/people/bay-ali-kasumov.webp",
        "caption": "Bay-Ali Kasumov (1977–2016) — Arşiv fotoğrafı."
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
    "image": "/images/people/ali-adayev.webp",
    "gallery": [
      {
        "src": "/images/people/ali-adayev.webp",
        "caption": "Ali Adayev (Lambada) (1966–1995) — Arşiv fotoğrafı."
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
    "image": "/images/people/kuri-batsiyev.webp",
    "gallery": [
      {
        "src": "/images/people/kuri-batsiyev.webp",
        "caption": "Küri Batsiyev (Gözüpek Küra) (1972–2005) — Arşiv fotoğrafı."
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
    "image": "/images/people/huseyin-ahmadov.webp",
    "gallery": [
      {
        "src": "/images/people/huseyin-ahmadov.webp",
        "caption": "Hüseyin Ahmadov (1962–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Goyti köyü doğumlu, soylu Benoy taypına mensup öncü direniş savaşçısıdır. Bağımsızlığın ilk günlerinden itibaren İçkerya devletini savunan saflarda yer Aldı.",
    "bio": [
      "Goyti köyü doğumlu, soylu Benoy taypına mensup öncü direniş savaşçısıdır. Bağımsızlığın ilk günlerinden itibaren İçkerya devletini savunan saflarda yer Aldı.",
      "14 Ocak 1995’te Grozni’de şehit düşen zulay ahmadova’nın ağabeyi ve silah arkadaşıdır. Ocak 1995 Grozni kuşatmasında düşman zırhlılarına karşı en ön cephe de çarpıştı. 18 Ocak 1995’te rpg ile zirhlı hedefi vurmak için doğrulduğu anda şehit düştü."
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
    "image": "/images/people/zulay-ahmadova.webp",
    "gallery": [
      {
        "src": "/images/people/zulay-ahmadova.webp",
        "caption": "Zulay Ahmadova (1971–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Ulusun çiçeği’ olarak anılan, Goyti köyü ve Benoy taypı mensubu kadın mücahidedir. Aralık 1994 işgalinde yirmi dört yaşında gönüllü olarak vatan savunmasına katıldı.",
    "bio": [
      "Ulusun çiçeği’ olarak anılan, Goyti köyü ve Benoy taypı mensubu kadın mücahidedir. Aralık 1994 işgalinde yirmi dört yaşında gönüllü olarak vatan savunmasına katıldı.",
      "Grozni direnişinde ağabeyi hüseyin ahmadov ile omuz omuza cephe de görev yaptı. Üstün fedakarlığı nedeniyle İçkerya’nın en yüksek devlet nişanıyla onurlandırıldı. 14 Ocak 1995’te Grozni çarpışmalarında yirmi dört yaşında şehit düştü."
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
    "image": "/images/people/musa-hacimuradov.webp",
    "gallery": [
      {
        "src": "/images/people/musa-hacimuradov.webp",
        "caption": "Musa Hacımuradov (1956–1994) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Birinci rus-çeçen savaşı’nda başkent Grozni savunmasının öncü mücahitlerindendir. Aralık 1994’te vatan toprağına yönelen işgal ordusuna karşı gönüllü silah kuşandı.",
    "bio": [
      "Birinci rus-çeçen savaşı’nda başkent Grozni savunmasının öncü mücahitlerindendir. Aralık 1994’te vatan toprağına yönelen işgal ordusuna karşı gönüllü silah kuşandı.",
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
    "image": "/images/people/emir-iles-musafir.webp",
    "gallery": [
      {
        "src": "/images/people/emir-iles-musafir.webp",
        "caption": "Emir İles Musafir (1970–1999) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Musafir’ künyesiyle tanınan, şelkovskoy Cemaati kurucusu ve Kuzey cephesi Komutanıdır. 1994–1996 Birinci Çeçen savaşı’nda Emir hattab ile omuz omuza pek çok operasyona katıldı.",
    "bio": [
      "Musafir’ künyesiyle tanınan, şelkovskoy Cemaati kurucusu ve Kuzey cephesi Komutanıdır. 1994–1996 Birinci Çeçen savaşı’nda Emir hattab ile omuz omuza pek çok operasyona katıldı.",
      "Şelkovskoy Cemaati Emir yardımcılığı ve Kuzey cephesi komuta kademesinde görev yaptı. İkinci savaşın başında Kuzey cephesi savunma hatlarını bizzat organize etti. 4 Ekim 1999’da Kuzey cephesi’ndeki şiddetli muharebelerde ön safta şehit düştü."
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
    "image": "/images/people/hoj-ahmed-dusayev.webp",
    "gallery": [
      {
        "src": "/images/people/hoj-ahmed-dusayev.webp",
        "caption": "Hoj-Ahmed Duşayev (1975–2006) — Arşiv fotoğrafı."
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
    "image": "/images/people/kazbek-ibragimov.webp",
    "gallery": [
      {
        "src": "/images/people/kazbek-ibragimov.webp",
        "caption": "Kazbek İbragimov (1982–2008) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Seyfullah’ künyesiyle tanınan, Gehi köyü mensubu Emir İslam Cemaati mücahididir. Kış şartlarında kendi elleriyle sığınaklar kazarak dağlarda yıllarca cihad etti.",
    "bio": [
      "Seyfullah’ künyesiyle tanınan, Gehi köyü mensubu Emir İslam Cemaati mücahididir. Kış şartlarında kendi elleriyle sığınaklar kazarak dağlarda yıllarca cihad etti.",
      "Şehadetinden bir hafta önce küçük kardeşi elbrus’u yanına alarak direnişe kazandırdı. 25 Temmuz 2008’de Zavodskoy karargahında tek başına dört saat boyunca çarpıştı. Teslimiyet çağrılarını reddedip kur’an-ı kerim okuyarak son nefesine kadar şehit düştü."
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
    "image": "/images/people/elbrus-ibragimov.webp",
    "gallery": [
      {
        "src": "/images/people/elbrus-ibragimov.webp",
        "caption": "Elbrus İbragimov (1985–2010) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Genç seyfullah’ künyesiyle bilinen, şehit kazbek İbragimov’un küçük kardeşidir. Ağabeyinin şehadetinden sonra onun silahını, günlüğünü ve ‘Seyfullah’ künyesini devraldı.",
    "bio": [
      "Genç seyfullah’ künyesiyle bilinen, şehit kazbek İbragimov’un küçük kardeşidir. Ağabeyinin şehadetinden sonra onun silahını, günlüğünü ve ‘Seyfullah’ künyesini devraldı.",
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
    "image": "/images/people/ahmad-canti-halifat.webp",
    "gallery": [
      {
        "src": "/images/people/ahmad-canti-halifat.webp",
        "caption": "Ahmad Çanti (1968–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Halifat’ künyesiyle efsaneleşen ve marşlara konu olan Şatoylu cephe Komutanıdır. 31 Ocak 2000 Grozni çıkışında geride kalan mücahitleri beklerken şarapnelle yaralandı.",
    "bio": [
      "Halifat’ künyesiyle efsaneleşen ve marşlara konu olan Şatoylu cephe Komutanıdır. 31 Ocak 2000 Grozni çıkışında geride kalan mücahitleri beklerken şarapnelle yaralandı.",
      "Tüm sargı bezlerini yarağı askerlerine dağıttığı için kendi yarasını sardırmadı. Alhan-Kala sahra hastanesinde ‘Başkalarının daha çok ihtiyacı var’ diyerek tedaviyi reddetti. 1 Şubat 2000’de zakan-yurt camii’nde şehadet parmağını kaldırarak ruhunu teslim etti."
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
    "image": "/images/people/hasan-dolguyev.webp",
    "gallery": [
      {
        "src": "/images/people/hasan-dolguyev.webp",
        "caption": "Hasan Dolguyev (1963–1999) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Şelkovskaya doğumlu, Birinci ve İkinci rus-çeçen savaşlarının tecrübeli gazisidir. Ocak 1996’da Kizlyar seferi ve Pervomayskoye kuşatma yarması muharebelerinde çarpıştı.",
    "bio": [
      "Şelkovskaya doğumlu, Birinci ve İkinci rus-çeçen savaşlarının tecrübeli gazisidir. Ocak 1996’da Kizlyar seferi ve Pervomayskoye kuşatma yarması muharebelerinde çarpıştı.",
      "Birinci savaşta iki kardeşini, İkinci savaşta ise üçüncü kardeşini vatan uğruna şehit verdi. Koman siy onuruyla tanınan ailesinin son ferdi olarak cepheden bir an olsun ayrılmadı. Kasım 1999’da İkinci Çeçen savaşı muharebelerinde ön safta çarpışarak şehit düştü."
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
    "image": "/images/people/rizvan-osmayev.webp",
    "gallery": [
      {
        "src": "/images/people/rizvan-osmayev.webp",
        "caption": "Rizvan Osmayev (1976–2009) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Emir İmam’ künyesiyle tanınan, mesker-yurtlu ve şirdiy taypı mensubu cemaat emirlidir. Ova cephesinin en zorlu şartlarında operasyonlar yürüten sarsılmaz bir Komutandı.",
    "bio": [
      "Emir İmam’ künyesiyle tanınan, mesker-yurtlu ve şirdiy taypı mensubu cemaat emirlidir. Ova cephesinin en zorlu şartlarında operasyonlar yürüten sarsılmaz bir Komutandı.",
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
    "image": "/images/people/hasan-ozdamirov.webp",
    "gallery": [
      {
        "src": "/images/people/hasan-ozdamirov.webp",
        "caption": "Hasan Ozdamirov (Gerat) (1983–2009) — Arşiv fotoğrafı."
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
    "image": "/images/people/emir-mohmad-avturinski.webp",
    "gallery": [
      {
        "src": "/images/people/emir-mohmad-avturinski.webp",
        "caption": "Emir Mohmad Avturinski (Kırk Üçüncü) (1971–2003) — Arşiv fotoğrafı."
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
    "image": "/images/people/bislan-turgayev.webp",
    "gallery": [
      {
        "src": "/images/people/bislan-turgayev.webp",
        "caption": "Bislan Turgayev (1972–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Açhoy-Martan doğumlu olan Emir Bislan Turgayev, Çeçen İçkerya Cumhuriyeti Batı Cephesi ve Açhoy-Martan Cemaati’nin önde gelen direniş komutanlarındandır.",
    "bio": [
      "Açhoy-Martan doğumlu olan Emir Bislan Turgayev, Çeçen İçkerya Cumhuriyeti Batı Cephesi ve Açhoy-Martan Cemaati’nin önde gelen direniş komutanlarındandır.",
      "Her iki Rus-Çeçen savaşında işgalci güçlere karşı yıllarca ön saflarda çarpışan Bislan Turgayev, sarsılmaz imanı, fedakârlığı ve en ağır kuşatma şartlarında bile sancağı yere düşürmeyen cesaretiyle mücahidlere örnek olmuştur. Özgür İçkerya ve İslam davası uğrunda son nefesine kadar çarpışan Emir Bislan Turgayev, şehadet mertebesine ulaşarak adını Kafkasya direniş tarihine yazdırmıştır."
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
    "image": "/images/people/umar-boltukayev.webp",
    "gallery": [
      {
        "src": "/images/people/umar-boltukayev.webp",
        "caption": "Umar Boltukayev (1966–2000) — Arşiv fotoğrafı."
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
    "image": "/images/people/usman-imayev.webp",
    "gallery": [
      {
        "src": "/images/people/usman-imayev.webp",
        "caption": "Usman İmayev (1957–1996) — Arşiv fotoğrafı."
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
    "image": "/images/people/arbi-sigauri.webp",
    "gallery": [
      {
        "src": "/images/people/arbi-sigauri.webp",
        "caption": "Arbi Sigauri (1982–2011) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Huzeyfe’ künyesiyle tanınan, sunja sektörü ve cevherkale mücahidi. Genç yaşında direniş saflarına katılarak işgalcilere karşı korkusuzca çarpıştı.",
    "bio": [
      "Huzeyfe’ künyesiyle tanınan, sunja sektörü ve cevherkale mücahidi. Genç yaşında direniş saflarına katılarak işgalcilere karşı korkusuzca çarpıştı.",
      "Şehir içi Özel operasyonlarda ve dağ kampanyalarında üstün cesaret gösterdi. Teslimiyet çağrılarını reddederek son kurşununa kadar direnişi sürdürdü. 2 Mart 2011’de cevherkale’de esitsiz çatışmada şehitlik mertebesine ulaştı."
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
    "image": "/images/people/aslanbek-didiyev.webp",
    "gallery": [
      {
        "src": "/images/people/aslanbek-didiyev.webp",
        "caption": "Aslanbek Didiyev (1972–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçen İçkerya Cumhuriyeti merkez cephesi operasyon grubu emiri. Urus-Martan sektöründe işgalcilere ve işbirlikçilere karşı amansızca çarpıştı.",
    "bio": [
      "Çeçen İçkerya Cumhuriyeti merkez cephesi operasyon grubu emiri. Urus-Martan sektöründe işgalcilere ve işbirlikçilere karşı amansızca çarpıştı.",
      "Ahmadov Cemaati bünyesinde en zorlu cephe operasyonlarına komuta etti. Sarsılmaz imanı, atılganlığı ve vatan sevgisiyle mücahitlere öncülük etti. 25 Aralık 2000’de Urus-Martan’da esitsiz çatışmada şehitlik mertebesine ulaştı."
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
    "image": "/images/people/amin-ibragimov.webp",
    "gallery": [
      {
        "src": "/images/people/amin-ibragimov.webp",
        "caption": "Amin İbragimov (Ebu Darr) (1972–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "21 Mayıs 1972’de Goytı köyünde Kurşloy taypına mensup bir ailede doğan ve Cevherkale’de (Grozni) yetişen Amin İbragimov (‘Emir Ebu Darr’), 1994’te başlayan Birinci Rus-Çeçen Savaşı’nın ilk günlerinden itibaren Emir Hattab’ın yanında yer almış ve ‘Gerat’ Grubu Emiri olarak görev yapmıştır.",
    "bio": [
      "21 Mayıs 1972’de Goytı köyünde Kurşloy taypına mensup bir ailede doğan ve Cevherkale’de (Grozni) yetişen Amin İbragimov (‘Emir Ebu Darr’), 1994’te başlayan Birinci Rus-Çeçen Savaşı’nın ilk günlerinden itibaren Emir Hattab’ın yanında yer almış ve ‘Gerat’ Grubu Emiri olarak görev yapmıştır.",
      "1999 yılında İkinci Rus-Çeçen Savaşı’nın başında Cumhurbaşkanı Aslan Mashadov tarafından Tuğgeneral rütbesine terfi ettirilen Amin İbragimov, 2000 yılındaki Cevherkale kuşatmasını yarma harekâtında ve birçok cephede defalarca ağır yaralanmasına rağmen her seferinde savaş safına geri dönmüştür. Düşman hatlarının tam kalbinde gerçekleştirdiği soğukkanlı operasyonlarla tanınan Tuğgeneral Amin İbragimov, 17 Mayıs 2001 tarihinde Tsotsin-Yurt köyünde kurulan pusuda 29 yaşında şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/muhammed-besir-dobriyev.webp",
    "gallery": [
      {
        "src": "/images/people/muhammed-besir-dobriyev.webp",
        "caption": "Muhammed-Beşir Dobriyev (1964–2008) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Bereket’ künyesiyle tanınan, İnguşetya neskorkort köyü mensubu mücahittir. Efsanevi Bamut savunmasının ilk gününden son gününe kadar en ön safta çarpıştı.",
    "bio": [
      "Bereket’ künyesiyle tanınan, İnguşetya neskorkort köyü mensubu mücahittir. Efsanevi Bamut savunmasının ilk gününden son gününe kadar en ön safta çarpıştı.",
      "Her iki rus-çeçen savaşında Kafkasya halklarının kardeşliğini cephe de temsil etti. Ondört yıl boyunca dağlarda ve ovalarda silahını bırakmadan direnişi sürdürdü. 15 Eylül 2008’de seyfül-islam aziyev ile birlikte çarpışarak şehit düştü."
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
    "image": "/images/people/ilyas-talhadov.webp",
    "gallery": [
      {
        "src": "/images/people/ilyas-talhadov.webp",
        "caption": "İlyas Talhadov (1967–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Kurçaloy bölgesinin Alleroy-Yurt köyünde dünyaya gelen Tuğgeneral İlyas Talhadov, 1992–1995 yıllarında İlk Cumhurbaşkanı Cevher Dudayev’in Cumhurbaşkanlığı Muhafız Alayı’nda görev yapmış ve Çeçen İçkerya Cumhuriyeti’nin en yüksek devlet nişanı olan ‘Qoman Siy’ (Ulusun Onuru) ile taltif edilmiştir.",
    "bio": [
      "Kurçaloy bölgesinin Alleroy-Yurt köyünde dünyaya gelen Tuğgeneral İlyas Talhadov, 1992–1995 yıllarında İlk Cumhurbaşkanı Cevher Dudayev’in Cumhurbaşkanlığı Muhafız Alayı’nda görev yapmış ve Çeçen İçkerya Cumhuriyeti’nin en yüksek devlet nişanı olan ‘Qoman Siy’ (Ulusun Onuru) ile taltif edilmiştir.",
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
    "image": "/images/people/vahid-bamatgiriyev.webp",
    "gallery": [
      {
        "src": "/images/people/vahid-bamatgiriyev.webp",
        "caption": "Vahid Bamatgiriyev (1956–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "İtum-Kale bölgesinin Dişni-Mohk yöresine ve Dişni boyuna mensup olan Vahid Bamatgiriyev, Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri Tuğgenerali ve İçkerya Parlamentosu Milletvekilidir.",
    "bio": [
      "İtum-Kale bölgesinin Dişni-Mohk yöresine ve Dişni boyuna mensup olan Vahid Bamatgiriyev, Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri Tuğgenerali ve İçkerya Parlamentosu Milletvekilidir.",
      "1997 yılından şehadetine kadar Çeçen İçkerya Cumhuriyeti Parlamentosu’nda milletini temsil eden ve Parlamento Şeriat ve Devlet Hukuku Komitesi Başkanlığı görevini yürüten Vahid Bamatgiriyev, her iki Rus-Çeçen savaşında da cephenin en ön safında yer almıştır. 2000 yılı kışında kuşatma altındaki başkentten dağlara uzanan zorlu yürüyüşte birliğinin başında çarpışan Tuğgeneral Vahid Bamatgiriyev, Mart 2000’de Saadi-Kotar (Komsomolskoye) direnişinde oğlu Hamzat Bamatgiriyev ile omuz omuza çarpışarak şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/aynudin-aygumov.webp",
    "gallery": [
      {
        "src": "/images/people/aynudin-aygumov.webp",
        "caption": "Aynudin Aygumov (Çibuş) (1977–1997) — Arşiv fotoğrafı."
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
    "image": "/images/people/imran-zaytimirov.webp",
    "gallery": [
      {
        "src": "/images/people/imran-zaytimirov.webp",
        "caption": "İmran Zaytimirov (1971–2000) — Arşiv fotoğrafı."
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
    "image": "/images/people/borza-abdurazakov.webp",
    "gallery": [
      {
        "src": "/images/people/borza-abdurazakov.webp",
        "caption": "Borza Abdurazakov (1975–2000) — Arşiv fotoğrafı."
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
    "image": "/images/people/ismail-muhmadiyev.webp",
    "gallery": [
      {
        "src": "/images/people/ismail-muhmadiyev.webp",
        "caption": "İsmail Muhmadiyev (1971–1994) — Arşiv fotoğrafı."
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
    "image": "/images/people/imam-zaytayev.webp",
    "gallery": [
      {
        "src": "/images/people/imam-zaytayev.webp",
        "caption": "İmam Zaytayev (1989–2008) — Arşiv fotoğrafı."
      }
    ],
    "summary": "3 Kasım 1989 tarihinde başkent Caharkale’de (Grozni) dünyaya gelen ve Haçaroy boyuna mensup olan İmam Zaytayev, 13 yaşındayken ailesiyle birlikte Fransa’ya göç etmiş ve eğitimini Avrupa’da sürdürmüştür.",
    "bio": [
      "3 Kasım 1989 tarihinde başkent Caharkale’de (Grozni) dünyaya gelen ve Haçaroy boyuna mensup olan İmam Zaytayev, 13 yaşındayken ailesiyle birlikte Fransa’ya göç etmiş ve eğitimini Avrupa’da sürdürmüştür.",
      "Avrupa’daki güvenli ve rahat hayatına rağmen işgal altındaki vatanının acısını yüreğinde taşıyan genç İmam, 2008 yılı sonbaharında her şeyi geride bırakarak Kafkasya’ya dönmüş ve Çeçen Silahlı Direniş saflarına katılmıştır. 27 Ekim 2008 tarihinde mücahid kardeşleriyle birlikte işgalci güçlerin çemberine düşen İmam Zaytayev, son nefesine kadar çarpışarak henüz 18 yaşında şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/islam-takanayev.webp",
    "gallery": [
      {
        "src": "/images/people/islam-takanayev.webp",
        "caption": "İslam Takanayev (1984–2003) — Arşiv fotoğrafı."
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
    "image": "/images/people/umar-labazanov.webp",
    "gallery": [
      {
        "src": "/images/people/umar-labazanov.webp",
        "caption": "Umar Labazanov (Emir Şadid) (1975–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Zakan-Yurt kökenli, Haçaroy boyuna mensup olan ve başkent Caharkale’nin (Grozni) Zavodskoy bölgesinde yetişen Umar Labazanov, direniş saflarında ‘Emir Şadid’ künyesiyle tanınan seçkin bir cemaat emiridir.",
    "bio": [
      "Zakan-Yurt kökenli, Haçaroy boyuna mensup olan ve başkent Caharkale’nin (Grozni) Zavodskoy bölgesinde yetişen Umar Labazanov, direniş saflarında ‘Emir Şadid’ künyesiyle tanınan seçkin bir cemaat emiridir.",
      "Her iki Rus-Çeçen savaşında da genç mücahidlere komuta eden Emir Şadid, 1999–2000 kışında başkent Caharkale savunmasında ve kuşatma yarma harekâtında birliğinin başında çarpışmıştır. Mart 2000’de Saadi-Kotar (Komsomolskoye) direnişinde son mermisine kadar çarpışan Emir Şadid (Umar Labazanov), silah arkadaşlarıyla birlikte şehadet mertebesine ulaşmıştır."
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
    "image": "/images/people/ramzan-kudayev.webp",
    "gallery": [
      {
        "src": "/images/people/ramzan-kudayev.webp",
        "caption": "Ramzan Kudayev (1960–1995) — Arşiv fotoğrafı."
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
    "image": "/images/people/said-muhammed-visayev.webp",
    "gallery": [
      {
        "src": "/images/people/said-muhammed-visayev.webp",
        "caption": "Said-Muhammed Visayev (1974–2000) — Arşiv fotoğrafı."
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
    "image": "/images/people/emir-abdurrahman.webp",
    "gallery": [
      {
        "src": "/images/people/emir-abdurrahman.webp",
        "caption": "Abdurrahman Şişani (1971–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Gilyanı köyü kökenli, bitro boyuna mensup seçkin direniş Komutanıdır. Ürdün’deki ailesinin yanından ata toprağı Çeçenistan’a geri döndü.",
    "bio": [
      "Gilyanı köyü kökenli, bitro boyuna mensup seçkin direniş Komutanıdır. Ürdün’deki ailesinin yanından ata toprağı Çeçenistan’a geri döndü.",
      "Her iki rus-çeçen savaşında Caharkale, Serjen-Yurt ve Duba-Yurt’ta çarpıştı. Şeyh ebu ömer’den ilim tahsil eden, cesareti ve nasihatleriyle tanınan bir mücahitti. Haziran 2002’de cephe hattında coşkun dağ nehrini geçerken şehit düştü."
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
    "image": "/images/people/aslan-cabayev.webp",
    "gallery": [
      {
        "src": "/images/people/aslan-cabayev.webp",
        "caption": "Aslan Cabayev (Abdus-Samad) (1985–2004) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Abdus-Samad’ künyesiyle tanınan, Açhoy-Martan doğumlu genç mücahiddir. İkinci rus-çeçen savaşı yıllarında henüz genç yaşta direniş saflarına katıldı.",
    "bio": [
      "Abdus-Samad’ künyesiyle tanınan, Açhoy-Martan doğumlu genç mücahiddir. İkinci rus-çeçen savaşı yıllarında henüz genç yaşta direniş saflarına katıldı.",
      "Batı cephesi ve Açhoy-Martan direniş hatlarında işgalcilere karşı görev yaptı. Güler yüzü, cesareti ve imanıyla silah arkadaşlarının sevgisini kazandı. 5 Mayıs 2004’te henüz ondokuz yaşındayken vatan savunmasında şehit düştü."
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
    "image": "/images/people/islam-saraliyev.webp",
    "gallery": [
      {
        "src": "/images/people/islam-saraliyev.webp",
        "caption": "İslam Saraliyev (Emir Sayhan) (1978–2003) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Emir Sayhan’ künyesiyle tanınan, nihaloy boyu mensubu direniş Komutanıdır. Her iki rus-çeçen savaşında vatan toprağının bağımsızlığı için çarpıştı.",
    "bio": [
      "Emir Sayhan’ künyesiyle tanınan, nihaloy boyu mensubu direniş Komutanıdır. Her iki rus-çeçen savaşında vatan toprağının bağımsızlığı için çarpıştı.",
      "2000 kışı Saadi-Kotar yarma harekatı ve dağ cephelerinde ön safta yer Aldı. Kardeşi salavat ile birlikte ömrünü İslam ve özgürlük davasına adadı. 2003 yılında İnguşetya cephesindeki çarpışmada şehitlik mertebesine ulaştı."
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
    "image": "/images/people/aslambek-borcasvili.webp",
    "gallery": [
      {
        "src": "/images/people/aslambek-borcasvili.webp",
        "caption": "Aslambek Borçaşvili (1979–2000) — Arşiv fotoğrafı."
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
    "image": "/images/people/lom-ali-gubayev.webp",
    "gallery": [
      {
        "src": "/images/people/lom-ali-gubayev.webp",
        "caption": "Lom-Ali Gubayev (1974–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Naurskaya doğumlu, hakmado boyuna mensup yiğit Çeçen direniş mücahididir. Vatan toprağını Rus işgalinden korumak için direniş birliklerine katıldı.",
    "bio": [
      "Naurskaya doğumlu, hakmado boyuna mensup yiğit Çeçen direniş mücahididir. Vatan toprağını Rus işgalinden korumak için direniş birliklerine katıldı.",
      "Caharkale savunması ve Güney dağ cephesindeki çarpışmalarda görev yaptı. Mart 2000’de Saadi-Kotar’da kuşatmayı yaran artçı birlikler arasında yer Aldı. Saadi-Kotar’daki surat dağı çarpışmalarında kahramanca direnerek şehit düştü."
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
    "image": "/images/people/hasan-amriyev.webp",
    "gallery": [
      {
        "src": "/images/people/hasan-amriyev.webp",
        "caption": "Hasan Amriyev (1966–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Melhi boyuna mensup, Birinci rus-çeçen savaşı’nın öncü mücahitlerindendir. Aralık 1994’te Rus ordusunun işgal saldırısı başladığında cepheye koştu.",
    "bio": [
      "Melhi boyuna mensup, Birinci rus-çeçen savaşı’nın öncü mücahitlerindendir. Aralık 1994’te Rus ordusunun işgal saldırısı başladığında cepheye koştu.",
      "Güneybatı cephesinde stratejik Bamut kalesinin savunmasında görev Aldı. Ağır topçu ve hava bombardımanı altında siperlerini terk etmeden direndi. 1995 yılında Bamut cephesindeki destansı çarpışmalarda şehit düştü."
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
    "image": "/images/people/haron-babuyev.webp",
    "gallery": [
      {
        "src": "/images/people/haron-babuyev.webp",
        "caption": "Haron Babuyev (1969–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Haçaroy boyuna mensup, vatanına ve inancına bağlı direniş mücahididir. Rus işgal Kuvvetlerine karşı bağımsızlık mücadelesinde ön safta yer Aldı.",
    "bio": [
      "Haçaroy boyuna mensup, vatanına ve inancına bağlı direniş mücahididir. Rus işgal Kuvvetlerine karşı bağımsızlık mücadelesinde ön safta yer Aldı.",
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
    "image": "/images/people/movldi-kagarmanov.webp",
    "gallery": [
      {
        "src": "/images/people/movldi-kagarmanov.webp",
        "caption": "Movldi Kagarmanov (1973–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Naurskaya doğumlu, hakmado boyuna mensup yiğit direniş mücahididir. Ağabeyleri salaudin ve balaudi ile birlikte naurski Taburu’nda görev Aldı.",
    "bio": [
      "Naurskaya doğumlu, hakmado boyuna mensup yiğit direniş mücahididir. Ağabeyleri salaudin ve balaudi ile birlikte naurski Taburu’nda görev Aldı.",
      "Birinci ve İkinci rus-çeçen savaşlarında vatan savunmasında omuz omuza çarpıştı. Üç kardeş olarak bağımsızlık sancağını son nefeslerine dek taşıdılar. Mart 2000’de Saadi-Kotar direnişinde ağabeyleriyle birlikte şehit düştü."
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
    "image": "/images/people/musa-uspanov.webp",
    "gallery": [
      {
        "src": "/images/people/musa-uspanov.webp",
        "caption": "Musa Uspanov (1971–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Haçaroy boyuna mensup, cesur ve fedakar Çeçen direniş mücahididir. Ağabeyi mohmad-tahir Uspanov ile birlikte vatan savunmasına katıldı.",
    "bio": [
      "Haçaroy boyuna mensup, cesur ve fedakar Çeçen direniş mücahididir. Ağabeyi mohmad-tahir Uspanov ile birlikte vatan savunmasına katıldı.",
      "Caharkale savunması ve 2000 kışı kuşatma yarma harekatında görev yaptı. Ağır kış şartlarında dağ yürüyüşü boyunca silah arkadaşlarını yalnız bırakmadı. Mart 2000’de Saadi-Kotar destanında ağabeyiyle birlikte şehit düştü."
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
    "image": "/images/people/isa-saykilayev.webp",
    "gallery": [
      {
        "src": "/images/people/isa-saykilayev.webp",
        "caption": "İsa Şaykilayev (1980–1999) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Haçaroy boyuna mensup, ondokuz yaşındaki genç Çeçen direniş yiğididir. 1999 sonbaharında Rus ordusu yeniden saldırdığında ilk saflarda cepheye koştu.",
    "bio": [
      "Haçaroy boyuna mensup, ondokuz yaşındaki genç Çeçen direniş yiğididir. 1999 sonbaharında Rus ordusu yeniden saldırdığında ilk saflarda cepheye koştu.",
      "Kuzey cephesinde terek sırtları ve kalaus hattının savunmasında görev Aldı. Üstün zırhlı kuvvetlere karşı siperini terk etmeden cesaretle direndi. 4 Ekim 1999’da terek sırtları savunmasında çarpışarak şehit düştü."
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
    "image": "/images/people/sayd-huseyin-makaziyev.webp",
    "gallery": [
      {
        "src": "/images/people/sayd-huseyin-makaziyev.webp",
        "caption": "Sayd-Hüseyin Makaziyev (1971–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1971 doğumlu, Çeçen direnişinin cesur ve fedakar mücahitlerindendir. Rus işgal ordusuna karşı vatan toprağının savunmasında ön saflarda yer Aldı.",
    "bio": [
      "1971 doğumlu, Çeçen direnişinin cesur ve fedakar mücahitlerindendir. Rus işgal ordusuna karşı vatan toprağının savunmasında ön saflarda yer Aldı.",
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
    "image": "/images/people/magomed-taverdiyev.webp",
    "gallery": [
      {
        "src": "/images/people/magomed-taverdiyev.webp",
        "caption": "Magomed Taverdiyev (Kurbaş) (1976–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Kurbaş’ künyesiyle tanınan, Çeçen direnişinin yiğit savaşçılarındandır. İkinci rus-çeçen savaşı’nda vatanın bağımsızlığı için cepheye koştu.",
    "bio": [
      "Kurbaş’ künyesiyle tanınan, Çeçen direnişinin yiğit savaşçılarındandır. İkinci rus-çeçen savaşı’nda vatanın bağımsızlığı için cepheye koştu.",
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
    "image": "/images/people/islam-tasuyev.webp",
    "gallery": [
      {
        "src": "/images/people/islam-tasuyev.webp",
        "caption": "İslam Tasuyev (1975–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 doğumlu, Çeçen direniş saflarının imanlı ve vakıf mücahididir. Rus işgaline karşı başkentten dağ cephelerine uzanan direnişte yer Aldı.",
    "bio": [
      "1975 doğumlu, Çeçen direniş saflarının imanlı ve vakıf mücahididir. Rus işgaline karşı başkentten dağ cephelerine uzanan direnişte yer Aldı.",
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
    "image": "/images/people/zayndi-gatsayev.webp",
    "gallery": [
      {
        "src": "/images/people/zayndi-gatsayev.webp",
        "caption": "Zayndi Gatsayev (1974–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1974 doğumlu, Çeçen Milli direnişinin sarsılmaz savaşçılarındandır. Vatan topraklarının işgalcilere karşı müdafaasında ön saflarda çarpıştı.",
    "bio": [
      "1974 doğumlu, Çeçen Milli direnişinin sarsılmaz savaşçılarındandır. Vatan topraklarının işgalcilere karşı müdafaasında ön saflarda çarpıştı.",
      "2000 kışında Güney cephesi ve Saadi-Kotar hattındaki muharebelere katıldı. Zorlu kuşatma şartlarında silah arkadaşlarıyla omuz omuza direndi. Mart 2000’de Saadi-Kotar çarpışmalarında yirmi altı yaşında şehit düştü."
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
    "image": "/images/people/mohmad-saralapov.webp",
    "gallery": [
      {
        "src": "/images/people/mohmad-saralapov.webp",
        "caption": "Mohmad Saralapov (1981–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1981 doğumlu, genç yaşta direniş sancağını omuzlayan yiğit mücahiddir. İkinci rus-çeçen savaşı başladığında tereddüt etmeden cepheye katıldı.",
    "bio": [
      "1981 doğumlu, genç yaşta direniş sancağını omuzlayan yiğit mücahiddir. İkinci rus-çeçen savaşı başladığında tereddüt etmeden cepheye katıldı.",
      "Kış yürüyüşü ve Saadi-Kotar’daki ağır kuşatma çarpışmalarında görev yaptı. Genç yaşına rağmen cesareti, sadakati ve metanetiyle örnek oldu. Mart 2000’de Saadi-Kotar direnişinde henüz ondokuz yaşında şehit düştü."
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
    "image": "/images/people/ramzan-darayev.webp",
    "gallery": [
      {
        "src": "/images/people/ramzan-darayev.webp",
        "caption": "Ramzan Darayev (1974–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1974 doğumlu, Çeçen direnişinin kararlı ve fedakar mücahitlerindendir. Rus işgal Kuvvetlerine karşı vatan savunmasında aktif görev üstlendi.",
    "bio": [
      "1974 doğumlu, Çeçen direnişinin kararlı ve fedakar mücahitlerindendir. Rus işgal Kuvvetlerine karşı vatan savunmasında aktif görev üstlendi.",
      "Mart 2000’de Saadi-Kotar’da kuşatmaya karşı verilen destansı direnişte yer Aldı. İmanı, ağırbaşlılığı ve cephedeki sarsılmaz duruşuyla iz bıraktı. Mart 2000’de Saadi-Kotar çarpışmalarında yirmi altı yaşında şehit düştü."
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
    "image": "/images/people/magomed-bahtarisev.webp",
    "gallery": [
      {
        "src": "/images/people/magomed-bahtarisev.webp",
        "caption": "Magomed Bahtarişev (1975–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 doğumlu, Çeçen direniş saflarının cesur ve ihlaslı mücahididir. Vatanın özgürlüğü ve İslam sancağının yücelmesi için cepheye koştu.",
    "bio": [
      "1975 doğumlu, Çeçen direniş saflarının cesur ve ihlaslı mücahididir. Vatanın özgürlüğü ve İslam sancağının yücelmesi için cepheye koştu.",
      "2000 kışı boyunca kuşatma ve yarma harekatlarında ön hatlarda çarpıştı. En çetin şartlarda bile silah arkadaşlarına moral ve güç kaynağı oldu. Mart 2000’de Saadi-Kotar direnişinde yirmi beş yaşında şehitlik mertebesine ulaştı."
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
    "image": "/images/people/ayndi-kaplanov.webp",
    "gallery": [
      {
        "src": "/images/people/ayndi-kaplanov.webp",
        "caption": "Ayndi Kaplanov (1973–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1973 doğumlu, Çeçen direnişinin tecrübeli ve yiğit savaşçılarındandır. Rus işgaline karşı yürütülen bağımsızlık mücadelesinde ön safta yer Aldı.",
    "bio": [
      "1973 doğumlu, Çeçen direnişinin tecrübeli ve yiğit savaşçılarındandır. Rus işgaline karşı yürütülen bağımsızlık mücadelesinde ön safta yer Aldı.",
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
    "image": "/images/people/islam-ediyev.webp",
    "gallery": [
      {
        "src": "/images/people/islam-ediyev.webp",
        "caption": "İslam Ediyev (Sahrabi) (1969–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Sahrabi’ künyesiyle tanınan, Çeçen direnişinin kıdemli mücahitlerindendir. Her iki rus-çeçen savaşında vatan toprağının müdafaasına katıldı.",
    "bio": [
      "Sahrabi’ künyesiyle tanınan, Çeçen direnişinin kıdemli mücahitlerindendir. Her iki rus-çeçen savaşında vatan toprağının müdafaasına katıldı.",
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
    "image": "/images/people/rustam-haciyev.webp",
    "gallery": [
      {
        "src": "/images/people/rustam-haciyev.webp",
        "caption": "Rustam Haciyev (1976–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1976 doğumlu, Çeçen direniş saflarının fedakar ve cesur savaşçısıdır. Rus işgal ordusuna karşı vatanın bağımsızlığı uğrunda silah kuşandı.",
    "bio": [
      "1976 doğumlu, Çeçen direniş saflarının fedakar ve cesur savaşçısıdır. Rus işgal ordusuna karşı vatanın bağımsızlığı uğrunda silah kuşandı.",
      "2000 kışında başkentten Güney dağlarına uzanan direniş hattında görev yaptı. Saadi-Kotar kuşatmasında son nefesine kadar iman ve azimle direndi. Mart 2000’de Saadi-Kotar muharebesinde yirmi dört yaşında şehit düştü."
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
    "image": "/images/people/kazbek-amayev.webp",
    "gallery": [
      {
        "src": "/images/people/kazbek-amayev.webp",
        "caption": "Kazbek Amayev (1971–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1971 yılında Urus-Martan’ın Goytı köyünde doğmuş yiğit Çeçen direniş mücahididir. Aralık 1994’te Rus işgaline karşı vatanını ve imanını savunmak için cepheye çıktı.",
    "bio": [
      "1971 yılında Urus-Martan’ın Goytı köyünde doğmuş yiğit Çeçen direniş mücahididir. Aralık 1994’te Rus işgaline karşı vatanını ve imanını savunmak için cepheye çıktı.",
      "Ocak 1995’te Cahar’daki Başkanlık Sarayı savunmasında en ön saflarda yer Aldı. Ağır topçu ateşi altında yeminine ve milletine son nefesine kadar sadık kaldı. 18 Ocak 1995’te Başkanlık Sarayı direnişinde yirmi dört yaşında şehitlik mertebesine ulaştı."
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
    "image": "/images/people/tarhan-terhoyev.webp",
    "gallery": [
      {
        "src": "/images/people/tarhan-terhoyev.webp",
        "caption": "Tarhan Terhoyev (1974–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "20 Eylül 1974 doğumlu, dadi lakabıyla tanınan cesur Çeçen Komutanıdır. Birinci rus-çeçen savaşı’nda Güney-Batı cephesi’nde müfreze Komutanlığı üstlendi.",
    "bio": [
      "20 Eylül 1974 doğumlu, dadi lakabıyla tanınan cesur Çeçen Komutanıdır. Birinci rus-çeçen savaşı’nda Güney-Batı cephesi’nde müfreze Komutanlığı üstlendi.",
      "Üstün cesaretiyle İçkerya’nın en yüksek nişanı qoman turpal ile taltif edildi. Bamut direnişinde Rus zırhlı birliklerine karşı destansı bir mücadele verdi. 7 Haziran 1995’te Bamut savunmasında yirmi yaşında kahramanca şehit düştü."
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
    "image": "/images/people/mohmad-salah-arsamekov.webp",
    "gallery": [
      {
        "src": "/images/people/mohmad-salah-arsamekov.webp",
        "caption": "Mohmad-Salah Arsamekov (1977–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1977 doğumlu, sultan lakabıyla bilinen Haçaro boyuna mensup Çeçen savaşçısıdır. İkinci rus-çeçen savaşı’nda İçkerya Silahlı Kuvvetleri saflarında cepheye koştu.",
    "bio": [
      "1977 doğumlu, sultan lakabıyla bilinen Haçaro boyuna mensup Çeçen savaşçısıdır. İkinci rus-çeçen savaşı’nda İçkerya Silahlı Kuvvetleri saflarında cepheye koştu.",
      "2000 kışı kuşatma ve yarma harekatlarında sarsılmaz iradesiyle çarpıştı. Saadi-Kotar direnişinde silah arkadaşlarıyla omuz omuza sonuna dek direndi. Mart 2000’de Saadi-Kotar muharebesinde yirmi üç yaşında şehit düştü."
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
    "image": "/images/people/denis-dudurkayev.webp",
    "gallery": [
      {
        "src": "/images/people/denis-dudurkayev.webp",
        "caption": "Denis Dudurkayev (1965–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1965 yılında Cahar’ın Aldı kasabasında doğan mulko boyuna mensup mücahittir. Vatan toprağını Rus işgal ordusuna karşı savunmak için silah kuşandı.",
    "bio": [
      "1965 yılında Cahar’ın Aldı kasabasında doğan mulko boyuna mensup mücahittir. Vatan toprağını Rus işgal ordusuna karşı savunmak için silah kuşandı.",
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
    "image": "/images/people/musa-iznaurov.webp",
    "gallery": [
      {
        "src": "/images/people/musa-iznaurov.webp",
        "caption": "Musa İznaurov (1972–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1972 yılında Cahar’ın Aldı kasabasında doğmuş mulko boyuna mensup savaşçıdır. İkinci rus-çeçen savaşı’nda vatanın bağımsızlığı uğrunda direniş saflarına katıldı.",
    "bio": [
      "1972 yılında Cahar’ın Aldı kasabasında doğmuş mulko boyuna mensup savaşçıdır. İkinci rus-çeçen savaşı’nda vatanın bağımsızlığı uğrunda direniş saflarına katıldı.",
      "Başkent kuşatması ve Güney cephesine geçiş harekatında ağır şartlara göğüs gerdi. Saadi-Kotar’da kendilerinden katbekat üstün işgal güçlerine karşı direndi. Mart 2000’de Saadi-Kotar direnişinde yirmi sekiz yaşında şehit düştü."
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
    "image": "/images/people/adam-aspiyev.webp",
    "gallery": [
      {
        "src": "/images/people/adam-aspiyev.webp",
        "caption": "Adam Aspiyev (1973–2000) — Arşiv fotoğrafı."
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
    "image": "/images/people/anzor-batalov.webp",
    "gallery": [
      {
        "src": "/images/people/anzor-batalov.webp",
        "caption": "Anzor Batalov (1976–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1976 yılında Sernovodskoye’de doğan, sayfullah lakaplı mulko boyu mücahididir. Ağabeyi İslam Batalov ile birlikte vatan savunması için cepheye çıktı.",
    "bio": [
      "1976 yılında Sernovodskoye’de doğan, sayfullah lakaplı mulko boyu mücahididir. Ağabeyi İslam Batalov ile birlikte vatan savunması için cepheye çıktı.",
      "2000 kışında kuşatma yarma harekatı ve Güney cephesi çarpışmalarında yer Aldı. Saadi-Kotar’da ağabeyiyle omuz omuza son nefesine kadar direndi. Mart 2000’de Saadi-Kotar direnişinde ağabeyiyle birlikte şehitlik mertebesine ulaştı."
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
    "image": "/images/people/ramzan-cukayev.webp",
    "gallery": [
      {
        "src": "/images/people/ramzan-cukayev.webp",
        "caption": "Ramzan Çukayev (1976–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1976 yılında Cahar’ın Aldı kasabasında doğan mulko boyuna mensup savaşçıdır. Komutan bati’nin müfrezesinde Rus işgal Kuvvetlerine karşı cephede görev yaptı.",
    "bio": [
      "1976 yılında Cahar’ın Aldı kasabasında doğan mulko boyuna mensup savaşçıdır. Komutan bati’nin müfrezesinde Rus işgal Kuvvetlerine karşı cephede görev yaptı.",
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
    "image": "/images/people/mohmad-hamzatov.webp",
    "gallery": [
      {
        "src": "/images/people/mohmad-hamzatov.webp",
        "caption": "Mohmad Hamzatov (1975–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 yılında Aldı kasabasında doğan, mamişk lakaplı guho boyu mücahididir. Dayısı Komutan bati’nin müfrezesinde vatan savunması için silah kuşandı.",
    "bio": [
      "1975 yılında Aldı kasabasında doğan, mamişk lakaplı guho boyu mücahididir. Dayısı Komutan bati’nin müfrezesinde vatan savunması için silah kuşandı.",
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
    "image": "/images/people/mayrbek-maltsagov.webp",
    "gallery": [
      {
        "src": "/images/people/mayrbek-maltsagov.webp",
        "caption": "Mayrbek Maltsagov (1973–2000) — Arşiv fotoğrafı."
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
    "image": "/images/people/visa-idigov.webp",
    "gallery": [
      {
        "src": "/images/people/visa-idigov.webp",
        "caption": "Visa İdigov (1966–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1966 yılında Şatoy’da (Şüytara) doğan, adam oğlu yiğit Çeçen direniş mücahididir. Birinci rus-çeçen savaşı başladığında vatan toprağını savunmak için cepheye koştu.",
    "bio": [
      "1966 yılında Şatoy’da (Şüytara) doğan, adam oğlu yiğit Çeçen direniş mücahididir. Birinci rus-çeçen savaşı başladığında vatan toprağını savunmak için cepheye koştu.",
      "1995 kışı boyunca başkent Cahar savunmasında ön hatlarda çarpıştı. Cesareti, fedakarlığı ve sarsılmaz imanıyla silah arkadaşlarına örnek oldu. 6 Şubat 1995’te şinasüyra-yuke mevkiindeki çarpışmalarda kahramanca şehit düştü."
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
    "image": "/images/people/mohmad-salah-adamov.webp",
    "gallery": [
      {
        "src": "/images/people/mohmad-salah-adamov.webp",
        "caption": "Mohmad-Salah Adamov (1960–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1960 yılında Şali’de (Şelara) doğan, hasmohmad oğlu Çeçen direniş mücahididir. Aralık 1994’te Rus işgal ordusunun saldırısına karşı vatan savunmasına katıldı.",
    "bio": [
      "1960 yılında Şali’de (Şelara) doğan, hasmohmad oğlu Çeçen direniş mücahididir. Aralık 1994’te Rus işgal ordusunun saldırısına karşı vatan savunmasına katıldı.",
      "Başkent Cahar kuşatmasında en çetin sokak çarpışmalarında görev Aldı. Olgunluğu, metaneti ve imanıyla genç mücahitlere moral kaynağı oldu. 6 Şubat 1995’te Cahar savunmasında otuz beş yaşında şehitlik mertebesine ulaştı."
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
    "image": "/images/people/hamzat-sagayev.webp",
    "gallery": [
      {
        "src": "/images/people/hamzat-sagayev.webp",
        "caption": "Hamzat Sagayev (1965–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1965 yılında Urus-Martan’da doğan, umar oğlu cesur Çeçen savaşçısıdır. Birinci rus-çeçen savaşı’nda İçkerya’nın bağımsızlığı için silah kuşandı.",
    "bio": [
      "1965 yılında Urus-Martan’da doğan, umar oğlu cesur Çeçen savaşçısıdır. Birinci rus-çeçen savaşı’nda İçkerya’nın bağımsızlığı için silah kuşandı.",
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
    "image": "/images/people/semal-tabuyev.webp",
    "gallery": [
      {
        "src": "/images/people/semal-tabuyev.webp",
        "caption": "Şemal Tabuyev (1975–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 yılında belgatoy köyünde doğmuş genç ve yiğit Çeçen direniş mücahididir. Henüz ondokuz yaşındayken Rus işgaline karşı vatan savunmasına koştu.",
    "bio": [
      "1975 yılında belgatoy köyünde doğmuş genç ve yiğit Çeçen direniş mücahididir. Henüz ondokuz yaşındayken Rus işgaline karşı vatan savunmasına koştu.",
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
    "image": "/images/people/ruslan-arsahanov.webp",
    "gallery": [
      {
        "src": "/images/people/ruslan-arsahanov.webp",
        "caption": "Ruslan Arsahanov (1972–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1972 yılında şami-yurt’ta doğan, ahmad oğlu fedakar Çeçen mücahididir. Birinci rus-çeçen savaşı’nda vatan toprağını korumak için direniş saflarına katıldı.",
    "bio": [
      "1972 yılında şami-yurt’ta doğan, ahmad oğlu fedakar Çeçen mücahididir. Birinci rus-çeçen savaşı’nda vatan toprağını korumak için direniş saflarına katıldı.",
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
    "image": "/images/people/muhadi-macidov.webp",
    "gallery": [
      {
        "src": "/images/people/muhadi-macidov.webp",
        "caption": "Muhadi Macidov (1963–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1963 yılında Vedeno’nun mahkety köyünde doğmuş yiğit Çeçen direniş mücahididir. Aralık 1994’te Rus ordusunun İçkerya’yı işgal girişimine karşı cepheye çıktı.",
    "bio": [
      "1963 yılında Vedeno’nun mahkety köyünde doğmuş yiğit Çeçen direniş mücahididir. Aralık 1994’te Rus ordusunun İçkerya’yı işgal girişimine karşı cepheye çıktı.",
      "Başkent Cahar’a yönelik yılbaşı taarruzunda stratejik hatlarda direndi. Rus zırhlı kollarının püskürtüldüğü en çetin çarpışmalarda ön safta yer Aldı. 3 Ocak 1995’te Cahar savunmasında otuz bir yaşında şehitlik mertebesine ulaştı."
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
    "image": "/images/people/muhammed-akbulatov.webp",
    "gallery": [
      {
        "src": "/images/people/muhammed-akbulatov.webp",
        "caption": "Muhammed Akbulatov (1975–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 yılında yandi-kotar köyünde doğmuş genç Çeçen direniş savaşçısıdır. Birinci rus-çeçen savaşı başladığında ondokuz yaşında gönüllü olarak cepheye koştu.",
    "bio": [
      "1975 yılında yandi-kotar köyünde doğmuş genç Çeçen direniş savaşçısıdır. Birinci rus-çeçen savaşı başladığında ondokuz yaşında gönüllü olarak cepheye koştu.",
      "31 Aralık 1994 yılbaşı gecesi başkent Cahar’ı savunan birliklerde yer Aldı. İşgal ordusunun ağır saldırısına karşı son nefesine kadar cesaretle çarpıştı. 2 Ocak 1995’te Cahar direnişinde genç yaşta kahramanca şehit düştü."
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
    "image": "/images/people/sayd-muhammed-elderhanov.webp",
    "gallery": [
      {
        "src": "/images/people/sayd-muhammed-elderhanov.webp",
        "caption": "Sayd-Muhammed Elderhanov (1968–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1968 yılında Şali’nin avturı köyünde doğmuş vakur Çeçen direniş mücahididir. Vatanın bağımsızlığı ve milletinin onuru için direniş saflarında silah kuşandı.",
    "bio": [
      "1968 yılında Şali’nin avturı köyünde doğmuş vakur Çeçen direniş mücahididir. Vatanın bağımsızlığı ve milletinin onuru için direniş saflarında silah kuşandı.",
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
    "image": "/images/people/islam-batalov.webp",
    "gallery": [
      {
        "src": "/images/people/islam-batalov.webp",
        "caption": "İslam Batalov (1972–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1972 yılında Sernovodskoye’de doğan, rihard adıyla da bilinen mulko boyu mücahididir. Kardeşi anzor Batalov ile birlikte Rus işgaline karşı vatan savunmasına katıldı.",
    "bio": [
      "1972 yılında Sernovodskoye’de doğan, rihard adıyla da bilinen mulko boyu mücahididir. Kardeşi anzor Batalov ile birlikte Rus işgaline karşı vatan savunmasına katıldı.",
      "2000 kışında başkent kuşatmasını yararak Güney dağ cephesine ulaştı. Saadi-Kotar’da kardeşiyle omuz omuza vererek son mermisine kadar direndi. Mart 2000’de Saadi-Kotar direnişinde kardeşiyle birlikte şehitlik mertebesine ulaştı."
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
    "image": "/images/people/daud-arsamakov.webp",
    "gallery": [
      {
        "src": "/images/people/daud-arsamakov.webp",
        "caption": "Daud Arsamakov (1974–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1974 doğumlu, Çeçen direniş saflarının cesur ve ihlaslı mücahitlerindendir. İkinci rus-çeçen savaşı’nda İçkerya Silahlı Kuvvetleri saflarında cepheye çıktı.",
    "bio": [
      "1974 doğumlu, Çeçen direniş saflarının cesur ve ihlaslı mücahitlerindendir. İkinci rus-çeçen savaşı’nda İçkerya Silahlı Kuvvetleri saflarında cepheye çıktı.",
      "1999-2000 kışı başkent savunması ve dağ yürüyüşü harekatında çarpıştı. Saadi-Kotar’da kendilerinden katbekat üstün işgal güçlerine karşı direndi. Mart 2000’de Saadi-Kotar muharebesinde yirmi altı yaşında şehit düştü."
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
    "image": "/images/people/hamzat-cadayev.webp",
    "gallery": [
      {
        "src": "/images/people/hamzat-cadayev.webp",
        "caption": "Hamzat Çadayev (1958–1994) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1958 yılında Şalaji köyünde doğan, abbaz oğlu yiğit Çeçen direniş mücahididir. Birinci rus-çeçen savaşı başladığında vatan toprağını savunmak için cepheye koştu.",
    "bio": [
      "1958 yılında Şalaji köyünde doğan, abbaz oğlu yiğit Çeçen direniş mücahididir. Birinci rus-çeçen savaşı başladığında vatan toprağını savunmak için cepheye koştu.",
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
    "image": "/images/people/nasho-sugaipov.webp",
    "gallery": [
      {
        "src": "/images/people/nasho-sugaipov.webp",
        "caption": "Naşho Sugaipov (1975–2004) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 doğumlu, hamzat oğlu; Açhoy-Martan sektörü emiri ve cephe Komutanlarındandır. 1994 yılından itibaren on yıl boyunca İçkerya’nın bağımsızlığı için kesintisiz savaştı.",
    "bio": [
      "1975 doğumlu, hamzat oğlu; Açhoy-Martan sektörü emiri ve cephe Komutanlarındandır. 1994 yılından itibaren on yıl boyunca İçkerya’nın bağımsızlığı için kesintisiz savaştı.",
      "Güneybatı cephesi Komutanı doku umarov’un yardımcılığını üstlenerek operasyonlar yönetti. Sarsılmaz cesareti ve liderliğiyle direniş saflarında örnek bir Emir olarak tanındı. 2004 yılında yirmi dokuz yaşındayken çarpışmada şehitlik mertebesine ulaştı."
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
    "image": "/images/people/musa-elmurzayev.webp",
    "gallery": [
      {
        "src": "/images/people/musa-elmurzayev.webp",
        "caption": "Musa Elmurzayev (1977–1999) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1977 doğumlu, haraçoy kökenli ve Argunlu genç Çeçen direniş mücahididir. İkinci rus-çeçen savaşı başladığında vatan savunması için direniş saflarına katıldı.",
    "bio": [
      "1977 doğumlu, haraçoy kökenli ve Argunlu genç Çeçen direniş mücahididir. İkinci rus-çeçen savaşı başladığında vatan savunması için direniş saflarına katıldı.",
      "1999 sonbaharı ve kışında başkent Cahar’ın Güney savunma hatlarında çarpıştı. Kuşatma altındaki mevzilerde silah arkadaşlarıyla omuz omuza direndi. 17 Aralık 1999’da Aldı bölgesindeki çarpışmalarda yirmi iki yaşında şehit düştü."
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
    "image": "/images/people/mohmad-tahir-uspanov.webp",
    "gallery": [
      {
        "src": "/images/people/mohmad-tahir-uspanov.webp",
        "caption": "Mohmad-Tahir Uspanov (1965–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1965 doğumlu, Haçaroy boyuna mensup sapiyula oğlu yiğit Çeçen mücahididir. Şehit kardeşi musa Uspanov ile birlikte Rus işgaline karşı cepheye çıktı.",
    "bio": [
      "1965 doğumlu, Haçaroy boyuna mensup sapiyula oğlu yiğit Çeçen mücahididir. Şehit kardeşi musa Uspanov ile birlikte Rus işgaline karşı cepheye çıktı.",
      "1999-2000 kışı başkent Cahar savunmasında ve yarma harekatında çarpıştı. Saadi-Kotar’da kuşatma altında son mermisine kadar korkusuzca direndi. Mart 2000’de Saadi-Kotar direnişinde otuz beş yaşında şehitlik mertebesine ulaştı."
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
    "image": "/images/people/imran-tangiyev.webp",
    "gallery": [
      {
        "src": "/images/people/imran-tangiyev.webp",
        "caption": "İmran Tangiyev (1970–1996) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1970 doğumlu, melhi boyuna mensup keskin nişancı Çeçen direniş savaşçısıdır. Birinci rus-çeçen savaşı’nda vatan toprağını korumak için direniş saflarına katıldı.",
    "bio": [
      "1970 doğumlu, melhi boyuna mensup keskin nişancı Çeçen direniş savaşçısıdır. Birinci rus-çeçen savaşı’nda vatan toprağını korumak için direniş saflarına katıldı.",
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
    "image": "/images/people/aslan-astamirov.webp",
    "gallery": [
      {
        "src": "/images/people/aslan-astamirov.webp",
        "caption": "Aslan Astamirov (1975–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 yılında başkent Cahar’da doğan, abdul-hamid (Homa) lakaplı Çeçen mücahididir. İkinci rus-çeçen savaşı’nda başkenti savunan direniş birliklerinde yer Aldı.",
    "bio": [
      "1975 yılında başkent Cahar’da doğan, abdul-hamid (Homa) lakaplı Çeçen mücahididir. İkinci rus-çeçen savaşı’nda başkenti savunan direniş birliklerinde yer Aldı.",
      "2000 kışında kuşatmayı yararak Güney dağlarına yürüyen kolda çarpıştı. Saadi-Kotar’da Rus ordusunun ağır kuşatmasına karşı mevzisini terk etmedi. Mart 2000’de Saadi-Kotar muharebesinde yirmi beş yaşında şehit düştü."
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
    "image": "/images/people/muhammed-emin-magomadov.webp",
    "gallery": [
      {
        "src": "/images/people/muhammed-emin-magomadov.webp",
        "caption": "Muhammed-Emin Magomadov (1975–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 doğumlu, himo boyuna mensup dört şehit kardeşin İkincisi olan mücahittir. Üç kardeşiyle birlikte vatanın özgürlüğü için Çeçen direniş saflarına katıldı.",
    "bio": [
      "1975 doğumlu, himo boyuna mensup dört şehit kardeşin İkincisi olan mücahittir. Üç kardeşiyle birlikte vatanın özgürlüğü için Çeçen direniş saflarına katıldı.",
      "2000 yılı kışında Cahar kuşatmasını yararak Güney cephesine ulaştı. Saadi-Kotar’da kardeşleriyle omuz omuza vererek işgal güçlerine karşı çarpıştı. Mart 2000’de Saadi-Kotar’da dört kardeş birlikte şehitlik mertebesine ulaştı."
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
    "image": "/images/people/alishan-amayev.webp",
    "gallery": [
      {
        "src": "/images/people/alishan-amayev.webp",
        "caption": "Alishan Amayev (1976–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1976 doğumlu, mulko boyuna mensup lom-ali oğlu genç Çeçen mücahididir. Komutan doku umarov’un Özel Taburunda görev yapan seçkin savaşçılardandır.",
    "bio": [
      "1976 doğumlu, mulko boyuna mensup lom-ali oğlu genç Çeçen mücahididir. Komutan doku umarov’un Özel Taburunda görev yapan seçkin savaşçılardandır.",
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
    "image": "/images/people/aslan-baysangurov.webp",
    "gallery": [
      {
        "src": "/images/people/aslan-baysangurov.webp",
        "caption": "Aslan Baysangurov (1973–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1973 yılında Sernovodskoye’de doğan, terlo boyuna mensup Çeçen direniş mücahididir. Kardeşleri aslanbek ve İslam ile birlikte vatan savunması için silah kuşandı.",
    "bio": [
      "1973 yılında Sernovodskoye’de doğan, terlo boyuna mensup Çeçen direniş mücahididir. Kardeşleri aslanbek ve İslam ile birlikte vatan savunması için silah kuşandı.",
      "2000 kışında başkentten Güney dağlarına uzanan yarma harekatına katıldı. Saadi-Kotar’da iki kardeşiyle omuz omuza vererek son nefesine kadar çarpıştı. 6 Mart 2000’de Saadi-Kotar’da kardeşleriyle birlikte şehitlik mertebesine ulaştı."
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
    "image": "/images/people/ramzan-hasanov.webp",
    "gallery": [
      {
        "src": "/images/people/ramzan-hasanov.webp",
        "caption": "Ramzan Hasanov (1970–1999) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1970 yılında başkent Cahar’da doğmuş, ihlaslı ve cesur Çeçen direniş mücahididir. Ünlü Komutan ahmadov kardeşlerin Cemaati saflarında vatan savunmasına katıldı.",
    "bio": [
      "1970 yılında başkent Cahar’da doğmuş, ihlaslı ve cesur Çeçen direniş mücahididir. Ünlü Komutan ahmadov kardeşlerin Cemaati saflarında vatan savunmasına katıldı.",
      "İkinci rus-çeçen savaşı’nda Argun boğazı girişindeki stratejik hatları korudu. Aralık 1999’da Duba-Yurt çevresindeki çetin kış muharebelerinde çarpıştı. 31 Aralık 1999’da Duba-Yurt savunmasında yirmi dokuz yaşında şehit düştü."
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
    "image": "/images/people/islam-yakubov.webp",
    "gallery": [
      {
        "src": "/images/people/islam-yakubov.webp",
        "caption": "İslam Yakubov (1987–2010) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1987 yılında Hasavyurt’ta doğan, abdul-malik lakaplı genç Çeçen direniş mücahididir. 2008 yılında vatan savunması için dağlara çıkarak direniş saflarına katıldı.",
    "bio": [
      "1987 yılında Hasavyurt’ta doğan, abdul-malik lakaplı genç Çeçen direniş mücahididir. 2008 yılında vatan savunması için dağlara çıkarak direniş saflarına katıldı.",
      "Komutan hüseyin gakayev’in emrindeki birliklerde aktif operasyonlarda görev Aldı. İhlası, tevazusu ve çetin dağ şartlarındaki sabrıyla silah arkadaşlarına örnek oldu. 8 Mayıs 2010’da petropavlovskoye yakınlarındaki çarpışmada yirmi üç yaşında şehit düştü."
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
    "image": "/images/people/abubakar-basayev.webp",
    "gallery": [
      {
        "src": "/images/people/abubakar-basayev.webp",
        "caption": "Abubakar Basayev (1981–2007) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1981 yılında Prigorodnoye’de doğan, Haçaroy boyuna mensup Tuğgeneral ve cephe emiridir. Serbest güreşte spor ustası adayı olup genç yaşta Çeçen direniş saflarına katıldı.",
    "bio": [
      "1981 yılında Prigorodnoye’de doğan, Haçaroy boyuna mensup Tuğgeneral ve cephe emiridir. Serbest güreşte spor ustası adayı olup genç yaşta Çeçen direniş saflarına katıldı.",
      "İçkerya Silahlı Kuvvetleri merkez cephesi Komutanlığı görevini üstlenerek savaşı yönetti. İşgal güçlerine karşı düzenlenen birçok stratejik operasyona bizzat komuta etti. 23 Ağustos 2007 gecesi çarpışmada yirmi altı yaşında şehitlik mertebesine ulaştı."
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
    "image": "/images/people/movlat-magomadov.webp",
    "gallery": [
      {
        "src": "/images/people/movlat-magomadov.webp",
        "caption": "Movlat Magomadov (1980–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1980 doğumlu, Haçaroy boyuna mensup genç ve yiğit Çeçen direniş mücahididir. İkinci rus-çeçen savaşı başladığında vatan toprağını savunmak için cepheye koştu.",
    "bio": [
      "1980 doğumlu, Haçaroy boyuna mensup genç ve yiğit Çeçen direniş mücahididir. İkinci rus-çeçen savaşı başladığında vatan toprağını savunmak için cepheye koştu.",
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
    "image": "/images/people/sayd-huseyin-magomadov.webp",
    "gallery": [
      {
        "src": "/images/people/sayd-huseyin-magomadov.webp",
        "caption": "Sayd-Hüseyin Magomadov (1981–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1981 yılında naur bölgesi alpatovo’da doğan, çeyroy boyu mensubu Çeçen mücahididir. Henüz on sekiz yaşındayken Rus işgaline karşı direniş saflarında yer Aldı.",
    "bio": [
      "1981 yılında naur bölgesi alpatovo’da doğan, çeyroy boyu mensubu Çeçen mücahididir. Henüz on sekiz yaşındayken Rus işgaline karşı direniş saflarında yer Aldı.",
      "2000 kışında başkent Cahar’ı savunan birliklerle omuz omuza mücadele etti. Kuşatmayı yararak Güney dağlarına yürüyen savaşçı koluyla Saadi-Kotar’a ulaştı. Mart 2000’de Saadi-Kotar direnişinde on dokuz yaşında şehitlik mertebesine ulaştı."
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
    "image": "/images/people/balaudi-kagarmanov.webp",
    "gallery": [
      {
        "src": "/images/people/balaudi-kagarmanov.webp",
        "caption": "Balaudi Kagarmanov (1968–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1968 yılında naurskaya’da doğan, hakmadoy boyuna mensup Çeçen direniş savaşçısıdır. Her iki rus-çeçen savaşı’nda vatanın bağımsızlığı için cephelerde görev yaptı.",
    "bio": [
      "1968 yılında naurskaya’da doğan, hakmadoy boyuna mensup Çeçen direniş savaşçısıdır. Her iki rus-çeçen savaşı’nda vatanın bağımsızlığı için cephelerde görev yaptı.",
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
    "image": "/images/people/aslanbek-baysangurov.webp",
    "gallery": [
      {
        "src": "/images/people/aslanbek-baysangurov.webp",
        "caption": "Aslanbek Baysangurov (1975–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 yılında Sernovodskoye’de doğan, terlo boyuna mensup Çeçen direniş mücahididir. Şehit Baysangurov kardeşlerin ortancası olup ağabeyi aslan ve kardeşi İslam ile cepheye çıktı.",
    "bio": [
      "1975 yılında Sernovodskoye’de doğan, terlo boyuna mensup Çeçen direniş mücahididir. Şehit Baysangurov kardeşlerin ortancası olup ağabeyi aslan ve kardeşi İslam ile cepheye çıktı.",
      "2000 kışında başkentten Güney dağlarına uzanan yarma harekatına katıldı. Saadi-Kotar’da iki kardeşiyle aynı siperde omuz omuza işgalcilere karşı direndi. Mart 2000’de Saadi-Kotar’da üç kardeş birlikte şehitlik mertebesine ulaştı."
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
    "image": "/images/people/ruslan-sardalov.webp",
    "gallery": [
      {
        "src": "/images/people/ruslan-sardalov.webp",
        "caption": "Ruslan Sardalov (1965–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "10 Mart 1965’te zakan-yurt’ta doğan, Haçaroy boyuna mensup ibrahim lakaplı gazidir. Birinci savaşta gelayev Özel birliklerinde ve Ağustos 1996 cihad operasyonunda çarpıştı.",
    "bio": [
      "10 Mart 1965’te zakan-yurt’ta doğan, Haçaroy boyuna mensup ibrahim lakaplı gazidir. Birinci savaşta gelayev Özel birliklerinde ve Ağustos 1996 cihad operasyonunda çarpıştı.",
      "İkinci savaşta Cahar yarma harekatında mayın tarlalarını aşarak Güneye ulaştı. Saadi-Kotar’da kuşatma altındaki mevzilerde son mermisine kadar korkusuzca savaştı. 8 Mart 2000’de Saadi-Kotar direnişinde otuz beş yaşında kahramanca şehit düştü."
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
    "image": "/images/people/muhammed-magomadov.webp",
    "gallery": [
      {
        "src": "/images/people/muhammed-magomadov.webp",
        "caption": "Muhammed Magomadov (1973–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1973 doğumlu, himo boyuna mensup muhlig lakaplı yiğit Çeçen direniş savaşçısıdır. Saadi-Kotar’da şehit düşen dört Magomadov kardeşin en büyüğü ve öncüsüdür.",
    "bio": [
      "1973 doğumlu, himo boyuna mensup muhlig lakaplı yiğit Çeçen direniş savaşçısıdır. Saadi-Kotar’da şehit düşen dört Magomadov kardeşin en büyüğü ve öncüsüdür.",
      "Üç kardeşiyle birlikte Cahar savunmasında ve kuşatmayı yarma harekatında çarpıştı. Saadi-Kotar köyünde kardeşleriyle omuz omuza vererek işgal ordusuna karşı direndi. Mart 2000’de Saadi-Kotar’da yirmi yedi yaşında kardeşleriyle birlikte şehit düştü."
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
    "image": "/images/people/arbi-yevmirzayev.webp",
    "gallery": [
      {
        "src": "/images/people/arbi-yevmirzayev.webp",
        "caption": "Arbi Yevmirzayev (1972–2010) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1972 yılında Samaşki’de doğan, Emir mansur lakaplı alim ve Çeçen direniş Komutanıdır. Medine’de İslami ilimler tahsil edip Ağustos 1996 Cahar operasyonunda çarpıştı.",
    "bio": [
      "1972 yılında Samaşki’de doğan, Emir mansur lakaplı alim ve Çeçen direniş Komutanıdır. Medine’de İslami ilimler tahsil edip Ağustos 1996 Cahar operasyonunda çarpıştı.",
      "İçkerya yüksek Şeriat mahkemesi başkanlığı ve askeri emirlik görevlerini üstlendi. Yıllarca dağlarda hem ilim öğretti hem de ön saflarda mücahidlere komuta etti. 4 Şubat 2010’da İçkerya dağlarındaki çarpışmada otuz sekiz yaşında şehit düştü."
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
    "image": "/images/people/umar-magomadov.webp",
    "gallery": [
      {
        "src": "/images/people/umar-magomadov.webp",
        "caption": "Umar Magomadov (1977–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1977 doğumlu, şikaroy boyuna mensup ihlas telsiz çağrı kodlu Emir ve Komutandır. 1994-1996 savaşı’nda gelayev Özel birliklerinde çarpışıp koman turpal nişanına aday oldu.",
    "bio": [
      "1977 doğumlu, şikaroy boyuna mensup ihlas telsiz çağrı kodlu Emir ve Komutandır. 1994-1996 savaşı’nda gelayev Özel birliklerinde çarpışıp koman turpal nişanına aday oldu.",
      "İkinci savaşta genç mücahidlere emirlik yaparak dağ cephesinde ön saflarda savaştı. Ulus-Kert yakınlarındaki 776 rakımlı tepe muharebesinde kardeşi ali ile göğüs göğüse vuruştu. 1 Mart 2000 sabahı Ulus-Kert’te kardeşi ali ile birlikte yirmi üç yaşında şehit düştü."
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
    "image": "/images/people/abu-ahmadov.webp",
    "gallery": [
      {
        "src": "/images/people/abu-ahmadov.webp",
        "caption": "Abu Ahmadov (1966–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1966 yılında Urus-Martan’da doğan, Gendargenoy boyuna mensup direniş savaşçısıdır. Efsanevi Ahmadov kardeşlerin büyüğü olarak 1994 yılında vatan savunmasına katıldı.",
    "bio": [
      "1966 yılında Urus-Martan’da doğan, Gendargenoy boyuna mensup direniş savaşçısıdır. Efsanevi Ahmadov kardeşlerin büyüğü olarak 1994 yılında vatan savunmasına katıldı.",
      "Her iki rus-çeçen savaşı’nda kardeşleriyle omuz omuza ön cephelerde çarpıştı. Tsotsin-Yurt köyünde kuşatma altında tek başına son mermisine kadar direndi. 28 Ağustos 2001’de tsotsin-yurt çarpışmasında otuz beş yaşında kahramanca şehit düştü."
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
    "image": "/images/people/muslim-tsagarayev.webp",
    "gallery": [
      {
        "src": "/images/people/muslim-tsagarayev.webp",
        "caption": "Müslim Tsagarayev (1982–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1982 yılında Urus-Martan’da doğan, nihlo boyuna mensup genç Çeçen mücahididir. Komutan muhammed Tsagarayev’in kardeşi olup altı şehit veren ailenin yiğit evladıdır.",
    "bio": [
      "1982 yılında Urus-Martan’da doğan, nihlo boyuna mensup genç Çeçen mücahididir. Komutan muhammed Tsagarayev’in kardeşi olup altı şehit veren ailenin yiğit evladıdır.",
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
    "image": "/images/people/abu-tsagarayev.webp",
    "gallery": [
      {
        "src": "/images/people/abu-tsagarayev.webp",
        "caption": "Abu Tsagarayev (1984–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1984 yılında Urus-Martan’da doğan, nihlo boyuna mensup en genç Çeçen mücahididir. On bir yaşındayken çatışma alanından ele geçirdiği silahı yaralı ağabeyine getirdi.",
    "bio": [
      "1984 yılında Urus-Martan’da doğan, nihlo boyuna mensup en genç Çeçen mücahididir. On bir yaşındayken çatışma alanından ele geçirdiği silahı yaralı ağabeyine getirdi.",
      "1997 yılında Komutan huta ahmadov’un himayesinde direniş birliğine katıldı. Cesareti ve sarsılmaz iradesiyle kıdemli savaşçıların takdirini ve sevgisini kazandı. 12 Şubat 2000’de Şatoy’da henüz on altı yaşındayken kahramanca şehit düştü."
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
    "image": "/images/people/isa-ahmadov.webp",
    "gallery": [
      {
        "src": "/images/people/isa-ahmadov.webp",
        "caption": "İsa Ahmadov (1978–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1978 yılında Urus-Martan’da doğan, muhadis lakaplı genç Emir ve direniş savaşçısıdır. Urus-Martan İslam Cemaati saflarında vatan savunmasında aktif görev üstlendi.",
    "bio": [
      "1978 yılında Urus-Martan’da doğan, muhadis lakaplı genç Emir ve direniş savaşçısıdır. Urus-Martan İslam Cemaati saflarında vatan savunmasında aktif görev üstlendi.",
      "1999-2000 kışında başkent Cahar savunması ve dağ cephesi çarpışmalarına katıldı. Ulus-Kert yakınlarında pskov hava indirme birliklerine karşı en ön safta vuruştu. Mart 2000’de Ulus-Kert muharebesinde yirmi iki yaşında şehitlik mertebesine ulaştı."
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
    "image": "/images/people/adlan-gazuyev.webp",
    "gallery": [
      {
        "src": "/images/people/adlan-gazuyev.webp",
        "caption": "Adlan Gazuyev (1977–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1977 yılında Urus-Martan’da doğan, panşer lakaplı yiğit Çeçen direniş mücahididir. Urus-Martan direniş birlikleri içinde cesur baskın ve operasyonlarda yer Aldı.",
    "bio": [
      "1977 yılında Urus-Martan’da doğan, panşer lakaplı yiğit Çeçen direniş mücahididir. Urus-Martan direniş birlikleri içinde cesur baskın ve operasyonlarda yer Aldı.",
      "İkinci rus-çeçen savaşı’nda Komutan isa ahmadov ile omuz omuza çarpıştı. Ulus-Kert tepelerinde işgal ordusunun kuşatma hatlarına karşı göğüs göğüse savaştı. Mart 2000’de Ulus-Kert direnişinde yirmi üç yaşında kahramanca şehit düştü."
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
    "image": "/images/people/valid-kagarmanov.webp",
    "gallery": [
      {
        "src": "/images/people/valid-kagarmanov.webp",
        "caption": "Valid Kagarmanov (1964–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1964 yılında naurskaya’da doğan, hakmado boyuna mensup ağa lakaplı direnişçidir. Her iki rus-çeçen savaşı’nda Kafkasya’nın bağımsızlığı için cephede silah kuşandı.",
    "bio": [
      "1964 yılında naurskaya’da doğan, hakmado boyuna mensup ağa lakaplı direnişçidir. Her iki rus-çeçen savaşı’nda Kafkasya’nın bağımsızlığı için cephede silah kuşandı.",
      "2000 kışında başkent Cahar kuşatmasını yararak Güney dağlarına yürüyüşe katıldı. Saadi-Kotar köyünde ağır kuşatma altında silah arkadaşlarıyla omuz omuza direndi. Mart 2000’de Saadi-Kotar muharebesinde otuz altı yaşında şehitlik mertebesine ulaştı."
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
    "image": "/images/people/salaudin-kagarmanov.webp",
    "gallery": [
      {
        "src": "/images/people/salaudin-kagarmanov.webp",
        "caption": "Salaudin Kagarmanov (1961–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1961 yılında naurskaya’da doğan, hakmado boyuna mensup tecrübeli Çeçen savaşçısıdır. Doksanlı yıllardan itibaren İçkerya’nın Milli bağımsızlık mücadelesinde yer Aldı.",
    "bio": [
      "1961 yılında naurskaya’da doğan, hakmado boyuna mensup tecrübeli Çeçen savaşçısıdır. Doksanlı yıllardan itibaren İçkerya’nın Milli bağımsızlık mücadelesinde yer Aldı.",
      "İkinci savaşta başkent Cahar savunmasında ve stratejik yarma harekatında çarpıştı. Saadi-Kotar direnişinde Kagarmanov ailesinin yiğitleri ile aynı siperde vuruştu. Mart 2000’de Saadi-Kotar muharebesinde otuz dokuz yaşında kahramanca şehit düştü."
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
    "image": "/images/people/ruhmad-hadisov.webp",
    "gallery": [
      {
        "src": "/images/people/ruhmad-hadisov.webp",
        "caption": "Ruhmad Hadisov (1974–1999) — Arşiv fotoğrafı."
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
    "image": "/images/people/ahmed-mediyev.webp",
    "gallery": [
      {
        "src": "/images/people/ahmed-mediyev.webp",
        "caption": "Ahmed Mediyev (1977–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1977 doğumlu, Urus-Martan İslam Cemaati mensubu genç Çeçen direniş savaşçısıdır. Komutan ramzan ahmadov’un birliklerinde cesur ve sadık bir mücahid olarak tanındı.",
    "bio": [
      "1977 doğumlu, Urus-Martan İslam Cemaati mensubu genç Çeçen direniş savaşçısıdır. Komutan ramzan ahmadov’un birliklerinde cesur ve sadık bir mücahid olarak tanındı.",
      "1999-2000 kışında başkent Cahar savunması ve Güneye çekiliş harekatına katıldı. Ulus-Kert’te pskov hava indirme Alayına karşı yapılan hücumda ön safta çarpıştı. Mart 2000’de Ulus-Kert muharebesinde yirmi üç yaşında şehitlik mertebesine ulaştı."
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
    "image": "/images/people/zaurbek-gaysumov.webp",
    "gallery": [
      {
        "src": "/images/people/zaurbek-gaysumov.webp",
        "caption": "Zaurbek Gaysumov (1986–2008) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1986 yılında Roşni-Çu köyünde doğan, abdurrahman lakaplı genç Çeçen mücahididir. Genç yaşta işgalcilere boyun eğmeyerek dağlardaki direniş saflarına katıldı.",
    "bio": [
      "1986 yılında Roşni-Çu köyünde doğan, abdurrahman lakaplı genç Çeçen mücahididir. Genç yaşta işgalcilere boyun eğmeyerek dağlardaki direniş saflarına katıldı.",
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
    "image": "/images/people/cambulat-sadayev.webp",
    "gallery": [
      {
        "src": "/images/people/cambulat-sadayev.webp",
        "caption": "Cambulat Sadayev (1973–2006) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın umalt-yurt (Prigorodnoye) köyünde doğdu ve serbest güreşte spor ustası oldu. 1994 yılında başlayan Birinci rus-çeçen savaşı’ndan itibaren bağımsızlık mücadelesine katıldı.",
    "bio": [
      "Çeçenistan’ın umalt-yurt (Prigorodnoye) köyünde doğdu ve serbest güreşte spor ustası oldu. 1994 yılında başlayan Birinci rus-çeçen savaşı’ndan itibaren bağımsızlık mücadelesine katıldı.",
      "Cephede ‘Burka’ künyesiyle tanındı ve merkez cephesi Komutan yardımcısı olarak görev üstlendi. On iki yıl boyunca dağlarda ve başkent Cahar’da işgalci güçlere karşı ön saflarda çarpıştı. 16 Ağustos 2006 tarihinde başkent Cahar’da girdiği eşitsiz çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/arbi-naduyev.webp",
    "gallery": [
      {
        "src": "/images/people/arbi-naduyev.webp",
        "caption": "Arbi Naduyev (1966–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "20 Aralık 1966 tarihinde Nojay-Yurt bölgesine bağlı Zandak köyünde dünyaya geldi. 1994 yılı başından itibaren Rus işgalcilere karşı vatan savunmasının ilk saflarında yer Aldı.",
    "bio": [
      "20 Aralık 1966 tarihinde Nojay-Yurt bölgesine bağlı Zandak köyünde dünyaya geldi. 1994 yılı başından itibaren Rus işgalcilere karşı vatan savunmasının ilk saflarında yer Aldı.",
      "Komutan aydamir abalayev’in birliğinde Komutan yardımcısı olarak Cahar ve Gudermes’te çarpıştı. 1995 Gudermes operasyonu ile doğduğu Zandak köyünün savunmasında önemli rol oynadı. İkinci rus-çeçen savaşı’nda vatan topraklarını savunurken çatışmada şehit düştü."
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
    "image": "/images/people/abdul-vahid-gapurayev.webp",
    "gallery": [
      {
        "src": "/images/people/abdul-vahid-gapurayev.webp",
        "caption": "Abdul-Vahid Gapurayev (1972–1999) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Urus-Martan bölgesine bağlı tengi-çu köyünde dünyaya geldi. Genç yaşından itibaren imani ahlakı, cesareti ve fedakârlığıyla kardeşleri arasında örnek oldu.",
    "bio": [
      "Çeçenistan’ın Urus-Martan bölgesine bağlı tengi-çu köyünde dünyaya geldi. Genç yaşından itibaren imani ahlakı, cesareti ve fedakârlığıyla kardeşleri arasında örnek oldu.",
      "Birinci rus-çeçen savaşı’nda tengi-çu ve Urus-Martan cephelerinde işgalcilere karşı çarpıştı. Direniş saflarında cemaat emiri olarak mücahit kardeşlerine cephede öncülük etti. Ekim 1999’da İkinci rus-çeçen savaşı’nın ilk çarpışmalarında şehit düştü."
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
    "image": "/images/people/mohmad-baysultanov.webp",
    "gallery": [
      {
        "src": "/images/people/mohmad-baysultanov.webp",
        "caption": "Mohmad Baysultanov (1975–2005) — Arşiv fotoğrafı."
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
    "image": "/images/people/aslambek-tuguzov.webp",
    "gallery": [
      {
        "src": "/images/people/aslambek-tuguzov.webp",
        "caption": "Aslambek Tuguzov (1972–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi ve cephede silah arkadaşları arasında ‘Buka’ künyesiyle tanındı. İçkerya Silahlı Kuvvetleri’nin seçkin ‘Borz’ Özel amaçlı birliği saflarında görev yaptı.",
    "bio": [
      "Çeçenistan’da dünyaya geldi ve cephede silah arkadaşları arasında ‘Buka’ künyesiyle tanındı. İçkerya Silahlı Kuvvetleri’nin seçkin ‘Borz’ Özel amaçlı birliği saflarında görev yaptı.",
      "Birinci ve İkinci rus-çeçen savaşlarının her ikisinde de en ön cephelerde çarpıştı. Başkent Cahar ve Güney dağ hatlarındaki stratejik savunma muharebelerinde yer Aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) direnişinde kahramanca şehit düştü."
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
    "image": "/images/people/mikail-kurbanov.webp",
    "gallery": [
      {
        "src": "/images/people/mikail-kurbanov.webp",
        "caption": "Mikail Kurbanov (1962–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın köklü hacaroy taypına mensup yiğit bir özgürlük savaşçısıydı. 1994 yılından itibaren Çeçenistan’ın bağımsızlığı için cephede Silahlı mücadeleye katıldı.",
    "bio": [
      "Çeçenistan’ın köklü hacaroy taypına mensup yiğit bir özgürlük savaşçısıydı. 1994 yılından itibaren Çeçenistan’ın bağımsızlığı için cephede Silahlı mücadeleye katıldı.",
      "Komutan badruddi ganatov’un liderliğindeki direniş birliğinde ön saflarda görev yaptı. İkinci rus-çeçen savaşı’nda başkent Cahar ve dağ geçitlerinin savunmasında çarpıştı. Mart 2000’de Saadi-Kotar (Komsomolskoye) kuşatmasında çarpışarak şehit düştü."
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
    "image": "/images/people/isa-baharciyev.webp",
    "gallery": [
      {
        "src": "/images/people/isa-baharciyev.webp",
        "caption": "İsa Baharçiyev (1974–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1974 yılında Prigorodnoye köyünde dünyaya geldi ve Çeçenistan’ın mulkoy taypına mensuptu. Genç yaşında vatan savunmasına katılarak Rus işgalcilere karşı ön cephelerde çarpıştı.",
    "bio": [
      "1974 yılında Prigorodnoye köyünde dünyaya geldi ve Çeçenistan’ın mulkoy taypına mensuptu. Genç yaşında vatan savunmasına katılarak Rus işgalcilere karşı ön cephelerde çarpıştı.",
      "Mart 2000’de Saadi-Kotar köyünde ağır kuşatma altında son kalan mücahitler arasında yer Aldı. Çatışmada iki kez yaralanıp omurgası kırılmasına rağmen ‘Teslim ol’ çağrılarına ateşle karşılık verdi. Makineli tüfeğiyle son nefesine kadar vuruşarak 26 yaşında Saadi-Kotar’da şehit düştü."
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
    "image": "/images/people/zelimhan-musayev.webp",
    "gallery": [
      {
        "src": "/images/people/zelimhan-musayev.webp",
        "caption": "Zelimhan Musayev (1975–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın direniş merkezlerinden Urus-Martan şehrinde dünyaya geldi. Samimiyeti, güler yüzü ve sarsılmaz cesaretiyle silah arkadaşlarının gönlünde yer edindi.",
    "bio": [
      "Çeçenistan’ın direniş merkezlerinden Urus-Martan şehrinde dünyaya geldi. Samimiyeti, güler yüzü ve sarsılmaz cesaretiyle silah arkadaşlarının gönlünde yer edindi.",
      "Rus işgaline karşı vatan toprağını savunmak üzere mücahit birliklerine katıldı. İkinci rus-çeçen savaşı’nda Cahar ve Güney cephesindeki ağır çarpışmalarda yer Aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) muharebesinde kahramanca şehit düştü."
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
    "image": "/images/people/said-sabayev.webp",
    "gallery": [
      {
        "src": "/images/people/said-sabayev.webp",
        "caption": "Said Şabayev (1973–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Urus-Martan bölgesine bağlı Gehi köyünde dünyaya geldi. Vatansever ailesinin terbiyesiyle yetişerek genç yaşta bağımsızlık mücadelesine katıldı.",
    "bio": [
      "Çeçenistan’ın Urus-Martan bölgesine bağlı Gehi köyünde dünyaya geldi. Vatansever ailesinin terbiyesiyle yetişerek genç yaşta bağımsızlık mücadelesine katıldı.",
      "Birinci ve İkinci rus-çeçen savaşlarında Gehi ve Urus-Martan hatlarında ön safta çarpıştı. Kuşatma altındaki silah arkadaşlarını yalnız bırakmayarak sonuna kadar direndi. Mart 2000’de Saadi-Kotar (Komsomolskoye) direnişinde çarpışarak şehit düştü."
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
    "image": "/images/people/badruddi-ganatov.webp",
    "gallery": [
      {
        "src": "/images/people/badruddi-ganatov.webp",
        "caption": "Badruddi Ganatov (1965–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Prigorodnoye köyünde doğdu, hacaroy taypına mensup olup cephede ‘Tano’ künyesiyle tanındı. Birinci rus-çeçen savaşı’nda birlik Komutanı olarak başkent Cahar savunmasında çarpıştı.",
    "bio": [
      "Prigorodnoye köyünde doğdu, hacaroy taypına mensup olup cephede ‘Tano’ künyesiyle tanındı. Birinci rus-çeçen savaşı’nda birlik Komutanı olarak başkent Cahar savunmasında çarpıştı.",
      "1997–1999 yılları arasında başkent Cahar’ın Leninski bölgesi kaymakamı olarak görev yaptı. İkinci rus-çeçen savaşı başlayınca yeniden mücahit birliğinin başına geçerek cepheye koştu. Mart 2000’de Saadi-Kotar (Komsomolskoye) muharebesinde kahramanca şehit düştü."
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
    "image": "/images/people/ilyas-mikayev.webp",
    "gallery": [
      {
        "src": "/images/people/ilyas-mikayev.webp",
        "caption": "İlyas Mikayev (1970–1996) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi ve genç yaşından itibaren vatansever duruşuyla çevresinde tanındı. 1994 yılında başlayan Birinci rus-çeçen savaşı’nda gönüllü olarak cepheye koştu.",
    "bio": [
      "Çeçenistan’da dünyaya geldi ve genç yaşından itibaren vatansever duruşuyla çevresinde tanındı. 1994 yılında başlayan Birinci rus-çeçen savaşı’nda gönüllü olarak cepheye koştu.",
      "İçkerya direniş birliklerinde ön hatlarda haberleşme ve taarruz görevlerinde yer Aldı. Ağustos 1996’daki başkent Cahar’ı (Grozni) kurtarma operasyonunda en ön saflarda çarpıştı. 13 Ağustos 1996 tarihinde zaferin eşiğinde Cahar muharebelerinde kahramanca şehit düştü."
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
    "image": "/images/people/bekhan-abastov.webp",
    "gallery": [
      {
        "src": "/images/people/bekhan-abastov.webp",
        "caption": "Bekhan Abastov (1974–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın direniş kalesi Urus-Martan şehrinde dünyaya geldi. Birinci rus-çeçen savaşı’nda Emir hattab ve ramzan ahmadov’un saflarında cephede çarpıştı.",
    "bio": [
      "Çeçenistan’ın direniş kalesi Urus-Martan şehrinde dünyaya geldi. Birinci rus-çeçen savaşı’nda Emir hattab ve ramzan ahmadov’un saflarında cephede çarpıştı.",
      "Urus-Martan Cemaati bünyesinde muhammed tsagarayev ve silah arkadaşlarıyla omuz omuza savaştı. İkinci rus-çeçen savaşı başlayınca yeniden silah kuşanarak vatan savunmasına katıldı. Rus işgalcilere karşı yürütülen çarpışmalarda son nefesine kadar vuruşarak şehit düştü."
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
    "image": "/images/people/rustam-timarov.webp",
    "gallery": [
      {
        "src": "/images/people/rustam-timarov.webp",
        "caption": "Rustam Timarov (1975–1999) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Urus-Martan şehrinde doğdu ve Çeçenlerin köklü peşhoy taypına mensuptu. Direniş saflarında ve kardeşleri arasında ‘Muhammed-Salah’ ismiyle tanındı.",
    "bio": [
      "Çeçenistan’ın Urus-Martan şehrinde doğdu ve Çeçenlerin köklü peşhoy taypına mensuptu. Direniş saflarında ve kardeşleri arasında ‘Muhammed-Salah’ ismiyle tanındı.",
      "Genç yaşta imani bilinci ve cesaretiyle Urus-Martan mücahit birliklerinde yer Aldı. 1999 sonbaharında başlayan İkinci rus-çeçen savaşı’nda vatan savunmasının ön hattına koştu. 19 Aralık 1999’da mübarek ramazan ayında işgalcilere karşı çarpışırken şehit düştü."
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
    "image": "/images/people/isa-tusayev.webp",
    "gallery": [
      {
        "src": "/images/people/isa-tusayev.webp",
        "caption": "İsa Tuşayev (1974–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın stratejik geçidi Duba-Yurt köyünde doğdu ve cephede ‘Arab’ künyesiyle tanındı. Birinci ve İkinci rus-çeçen savaşlarında Argun boğazı girişindeki cephelerde savaştı.",
    "bio": [
      "Çeçenistan’ın stratejik geçidi Duba-Yurt köyünde doğdu ve cephede ‘Arab’ künyesiyle tanındı. Birinci ve İkinci rus-çeçen savaşlarında Argun boğazı girişindeki cephelerde savaştı.",
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
    "image": "/images/people/hizar-irishanov.webp",
    "gallery": [
      {
        "src": "/images/people/hizar-irishanov.webp",
        "caption": "Hizar İrishanov (1971–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Vedeno bölgesine bağlı Agişbatoy (Egaşbeta) köyünde dünyaya geldi. Dağlık Vedeno cephesinde yetişerek bağımsızlık mücadelesinin ilk saflarında yer Aldı.",
    "bio": [
      "Çeçenistan’ın Vedeno bölgesine bağlı Agişbatoy (Egaşbeta) köyünde dünyaya geldi. Dağlık Vedeno cephesinde yetişerek bağımsızlık mücadelesinin ilk saflarında yer Aldı.",
      "Birinci ve İkinci rus-çeçen savaşlarında Güneydoğu dağ sektöründe cesurca çarpıştı. Agişbatoy ve Vedeno ormanlarındaki savunma ve pusu operasyonlarında önemli görevler üstlendi. 13 Ağustos 2001 tarihinde işgalci kuvvetlerle girdiği çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/emi-yunusov.webp",
    "gallery": [
      {
        "src": "/images/people/emi-yunusov.webp",
        "caption": "Emi Yunusov (1976–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın köklü ve direnişçi elistanjhoy taypına mensup bir mücahit olarak yetişti. Genç yaşından itibaren Rus işgaline boyun eğmeyerek bağımsızlık saflarına katıldı.",
    "bio": [
      "Çeçenistan’ın köklü ve direnişçi elistanjhoy taypına mensup bir mücahit olarak yetişti. Genç yaşından itibaren Rus işgaline boyun eğmeyerek bağımsızlık saflarına katıldı.",
      "İkinci rus-çeçen savaşı’nda stratejik Argun şehrindeki direniş gruplarından birinin emiri oldu. Argun ve çevresinde işgalci birliklere karşı düzenlenen şehir operasyonlarına liderlik etti. 2001 yılında Argun şehrinde girdiği çatışmada son kurşununa kadar vuruşarak şehit düştü."
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
    "image": "/images/people/abdul-vahid-dibirov.webp",
    "gallery": [
      {
        "src": "/images/people/abdul-vahid-dibirov.webp",
        "caption": "Abdul-Vahid Dibirov (1968–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Kuzeyindeki naurskaya bölgesinde dünyaya geldi. Vatanseverliği ve ağırbaşlı kişiliğiyle naurskaya halkı ve mücahitler arasında sevildi.",
    "bio": [
      "Çeçenistan’ın Kuzeyindeki naurskaya bölgesinde dünyaya geldi. Vatanseverliği ve ağırbaşlı kişiliğiyle naurskaya halkı ve mücahitler arasında sevildi.",
      "Birinci ve İkinci rus-çeçen savaşlarında naurskaya mücahitleriyle omuz omuza cephede savaştı. 2000 yılı başında başkent Cahar yarma harekâtı ve Güney yürüyüşünde yer Aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) direnişinde kahramanca şehit düştü."
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
    "image": "/images/people/ismail-gayrbekov.webp",
    "gallery": [
      {
        "src": "/images/people/ismail-gayrbekov.webp",
        "caption": "İsmail Gayrbekov (1975–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Urus-Martan şehrinde dünyaya geldi ve genç yaşta direniş saflarına katıldı. Her iki rus-çeçen savaşı’nda da vatan topraklarını savunan tecrübeli bir mücahitti.",
    "bio": [
      "Çeçenistan’ın Urus-Martan şehrinde dünyaya geldi ve genç yaşta direniş saflarına katıldı. Her iki rus-çeçen savaşı’nda da vatan topraklarını savunan tecrübeli bir mücahitti.",
      "Birinci savaşta Komutan şamil basayev’in emrindeki birliklerde ön cephelerde çarpıştı. İkinci savaşta Komutan arbi barayev’in Özel amaçlı İslam Alayı saflarında görev yaptı. 2000 yılında dağlık Şatoy bölgesindeki muharebelerde çarpışarak şehit düştü."
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
    "image": "/images/people/bislan-zakriyev.webp",
    "gallery": [
      {
        "src": "/images/people/bislan-zakriyev.webp",
        "caption": "Bislan Zakriyev (1974–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Urus-Martan şehrinde doğdu ve cephede ‘Hayrullah’ künyesiyle tanındı. Meşhur ahmadov kardeşlerin liderliğindeki Urus-Martan Cemaati saflarında ön hatlarda savaştı.",
    "bio": [
      "Çeçenistan’ın Urus-Martan şehrinde doğdu ve cephede ‘Hayrullah’ künyesiyle tanındı. Meşhur ahmadov kardeşlerin liderliğindeki Urus-Martan Cemaati saflarında ön hatlarda savaştı.",
      "Şubat 2000’de Ulus-Kert’te pskov hava indirme tümeni’ne karşı verilen muharebede yer Aldı. İşgalcilere ve işbirlikçilere karşı düzenlenen cesur operasyonların korkusuz savaşçılarından oldu. Vatanının bağımsızlığı uğruna verdiği mücadelede çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/zayndi-elgiriyev.webp",
    "gallery": [
      {
        "src": "/images/people/zayndi-elgiriyev.webp",
        "caption": "Zayndi Elgiriyev (1977–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Gudermes şehrinde dünyaya geldi ve genç yaşta istiklal mücadelesine katıldı. Gudermes’te Emir abdur-rahman’ın liderliğindeki cemaat saflarında omuz omuza çarpıştı.",
    "bio": [
      "Çeçenistan’ın Gudermes şehrinde dünyaya geldi ve genç yaşta istiklal mücadelesine katıldı. Gudermes’te Emir abdur-rahman’ın liderliğindeki cemaat saflarında omuz omuza çarpıştı.",
      "İkinci rus-çeçen savaşı’nda Gudermes ve Doğu cephesindeki direniş faaliyetlerinde yer Aldı. İşgalci konvoylarına karşı yürütülen mayınlama ve pusu operasyonlarında görev üstlendi. Şubat 2001’de bir mayınlama operasyonu sırasında meydana gelen patlamada şehit düştü."
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
    "image": "/images/people/ayub-caharov.webp",
    "gallery": [
      {
        "src": "/images/people/ayub-caharov.webp",
        "caption": "Ayub Caharov (1964–1994) — Arşiv fotoğrafı."
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
    "image": "/images/people/ramazan-saritov.webp",
    "gallery": [
      {
        "src": "/images/people/ramazan-saritov.webp",
        "caption": "Ramazan Saritov (1983–2012) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Kafkasya’nın bamat-yurt köyünde doğdu ve genç yaşta başarılı bir serbest güreşçi olarak tanındı. Spor kariyerindeki başarılarını geride bırakarak Kafkasya direniş saflarına katıldı.",
    "bio": [
      "Kafkasya’nın bamat-yurt köyünde doğdu ve genç yaşta başarılı bir serbest güreşçi olarak tanındı. Spor kariyerindeki başarılarını geride bırakarak Kafkasya direniş saflarına katıldı.",
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
    "image": "/images/people/murad-gisayev.webp",
    "gallery": [
      {
        "src": "/images/people/murad-gisayev.webp",
        "caption": "Murad Gişayev (1978–2004) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi ve genç yaşından itibaren İslami kimliğiyle çevresinde tanındı. İkinci rus-çeçen savaşı’nda işgalcilere karşı dağ birliklerinde silah kuşandı.",
    "bio": [
      "Çeçenistan’da dünyaya geldi ve genç yaşından itibaren İslami kimliğiyle çevresinde tanındı. İkinci rus-çeçen savaşı’nda işgalcilere karşı dağ birliklerinde silah kuşandı.",
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
    "image": "/images/people/hadid-dadayev.webp",
    "gallery": [
      {
        "src": "/images/people/hadid-dadayev.webp",
        "caption": "Hadid Dadayev (1963–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın köklü tundakho taypına mensup bir vatansever olarak dünyaya geldi. Birinci rus-çeçen savaşı’nda üstün komuta başarısı göstererek Tuğgeneral rütbesine yükseldi.",
    "bio": [
      "Çeçenistan’ın köklü tundakho taypına mensup bir vatansever olarak dünyaya geldi. Birinci rus-çeçen savaşı’nda üstün komuta başarısı göstererek Tuğgeneral rütbesine yükseldi.",
      "Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri bünyesinde kritik savunma hatlarını yönetti. İkinci rus-çeçen savaşı’nda kardeşi dires Dadayev ile birlikte direniş saflarında yer Aldı. 2001 yılında Rus işgalcilerin çernokozovo kampında işkenceye boyun eğmeyerek şehit düştü."
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
    "image": "/images/people/leci-haciyev.webp",
    "gallery": [
      {
        "src": "/images/people/leci-haciyev.webp",
        "caption": "Leçi Haciyev (1976–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Kuzeyindeki naurskaya bölgesinde doğdu ve şaro taypına mensuptu. Genç yaşından itibaren vatan savunmasına katılarak naurskaya mücahitleriyle omuz omuza durdu.",
    "bio": [
      "Çeçenistan’ın Kuzeyindeki naurskaya bölgesinde doğdu ve şaro taypına mensuptu. Genç yaşından itibaren vatan savunmasına katılarak naurskaya mücahitleriyle omuz omuza durdu.",
      "İkinci rus-çeçen savaşı’nda başkent Cahar savunması ve Güney yürüyüşünde yer Aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki tarihi direniş hattında çarpıştı. Saadi-Kotar kuşatmasında son kurşununa kadar vuruşarak kahramanca şehit düştü."
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
    "image": "/images/people/sultan-hortsayev.webp",
    "gallery": [
      {
        "src": "/images/people/sultan-hortsayev.webp",
        "caption": "Sultan Hortsayev (1973–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın zakan-yurt köyünde dünyaya geldi ve Haçaro taypına mensuptu. Birinci ve İkinci rus-çeçen savaşlarında vatan topraklarını savunmak için cepheye koştu.",
    "bio": [
      "Çeçenistan’ın zakan-yurt köyünde dünyaya geldi ve Haçaro taypına mensuptu. Birinci ve İkinci rus-çeçen savaşlarında vatan topraklarını savunmak için cepheye koştu.",
      "2000 yılı başında başkent Cahar yarma harekâtı ve dağ yürüyüşüne katıldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde kurulan savunma mevziilerinde savaştı. Ağır Rus bombardımanı altında Saadi-Kotar muharebesinde çarpışarak şehit düştü."
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
    "image": "/images/people/ilyas-husparov.webp",
    "gallery": [
      {
        "src": "/images/people/ilyas-husparov.webp",
        "caption": "İlyas Huşparov (1972–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın köklü ve savaşçı terlo taypına mensup bir mücahit olarak yetişti. İmani bilinci, cesareti ve fedakârlığıyla direniş birlikleri arasında saygı kazandı.",
    "bio": [
      "Çeçenistan’ın köklü ve savaşçı terlo taypına mensup bir mücahit olarak yetişti. İmani bilinci, cesareti ve fedakârlığıyla direniş birlikleri arasında saygı kazandı.",
      "İkinci rus-çeçen savaşı’nda başkent Cahar ve Güney cephesi muharebelerinde yer Aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) kuşatmasında silah arkadaşlarıyla omuz omuza durdu. Saadi-Kotar direnişinde işgalci ordulara karşı çarpışırken kahramanca şehit düştü."
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
    "image": "/images/people/imran-oysayev.webp",
    "gallery": [
      {
        "src": "/images/people/imran-oysayev.webp",
        "caption": "İmran Oysayev (1966–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Roşni-Çu köyünde doğdu, Çinhoy taypına mensuptu ve cephede ‘Ebu-Ahmed’ künyesiyle tanındı. Urus-Martan’da ahmadov kardeşlerin komşusu ve yakın silah arkadaşı olarak mücadele etti.",
    "bio": [
      "Roşni-Çu köyünde doğdu, Çinhoy taypına mensuptu ve cephede ‘Ebu-Ahmed’ künyesiyle tanındı. Urus-Martan’da ahmadov kardeşlerin komşusu ve yakın silah arkadaşı olarak mücadele etti.",
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
    "image": "/images/people/samhan-avdadayev.webp",
    "gallery": [
      {
        "src": "/images/people/samhan-avdadayev.webp",
        "caption": "Şamhan Avdadayev (1984–2009) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Vedeno bölgesinde dünyaya geldi ve direnişte ‘El-Bara’ künyesiyle tanındı. Öz kardeşi şamil Avdadayev ile birlikte genç yaşta dağ birliklerine katıldı.",
    "bio": [
      "Çeçenistan’ın Vedeno bölgesinde dünyaya geldi ve direnişte ‘El-Bara’ künyesiyle tanındı. Öz kardeşi şamil Avdadayev ile birlikte genç yaşta dağ birliklerine katıldı.",
      "Vedeno sektöründe Emir mahran saidov’un komutasındaki mücahit birliğinde görev yaptı. Güney dağ cephesinde işgalci kuvvetlere karşı düzenlenen operasyonlarda cesurca savaştı. Vedeno dağlarında işgal güçleriyle girdiği çatışmada kardeşiyle aynı yolda şehit düştü."
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
    "image": "/images/people/hamzat-guloyev.webp",
    "gallery": [
      {
        "src": "/images/people/hamzat-guloyev.webp",
        "caption": "Hamzat Guloyev (1983–2012) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Kafkasya’da dünyaya geldi ve direniş saflarında ‘Salman’ künyesiyle tanındı. Sunca Cemaati bünyesinde İnguşetya ve Çeçenistan sınır ormanlarında mücadele etti.",
    "bio": [
      "Kafkasya’da dünyaya geldi ve direniş saflarında ‘Salman’ künyesiyle tanındı. Sunca Cemaati bünyesinde İnguşetya ve Çeçenistan sınır ormanlarında mücadele etti.",
      "Mayıs 2012’de nesterovskaya ormanlarında Rus Gru Özel Kuvvetleriyle karşı karşıya geldi. Şafak vakti başlayan baskında makineli tüfeğiyle düşman hattının üzerine yürüdü. Yirmi dakika süren yakın çatışmada silah arkadaşı müslim ile birlikte şehit düştü."
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
    "image": "/images/people/cingishan-temerkayev.webp",
    "gallery": [
      {
        "src": "/images/people/cingishan-temerkayev.webp",
        "caption": "Çingishan Temerkayev (1985–2009) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Şali şehrinde dünyaya geldi ve Çeçenlerin şuono taypına mensuptu. Genç yaşında Şali sektöründeki direniş birliklerine katılarak vatan savunmasında saf tuttu.",
    "bio": [
      "Çeçenistan’ın Şali şehrinde dünyaya geldi ve Çeçenlerin şuono taypına mensuptu. Genç yaşında Şali sektöründeki direniş birliklerine katılarak vatan savunmasında saf tuttu.",
      "Silah arkadaşı rizvan mihaylov ile birlikte işgalci güçlere karşı omuz omuza çarpıştı. Ağır kuşatma şartlarında Şali ve çevresindeki operasyonlarda üstün cesaret gösterdi. 2009 yılında işgal Kuvvetleriyle girdiği çatışmada silah arkadaşıyla birlikte şehit düştü."
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
    "image": "/images/people/muhammed-yaricev.webp",
    "gallery": [
      {
        "src": "/images/people/muhammed-yaricev.webp",
        "caption": "Muhammed Yarıçev (1976–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Kulary köyünde dünyaya geldi ve yalkhoy taypına mensuptu. İkinci rus-çeçen savaşı’nda Kulary mücahitleriyle birlikte başkent Cahar savunmasına katıldı.",
    "bio": [
      "Çeçenistan’ın Kulary köyünde dünyaya geldi ve yalkhoy taypına mensuptu. İkinci rus-çeçen savaşı’nda Kulary mücahitleriyle birlikte başkent Cahar savunmasına katıldı.",
      "Şubat 2000’deki Cahar yarma harekâtı ve Güney dağ yürüyüşünde ön saflarda yer Aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki tarihi direniş hattında savaştı. Saadi-Kotar kuşatmasında son nefesine kadar çarpışarak kahramanca şehit düştü."
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
    "image": "/images/people/aslan-aslahanov.webp",
    "gallery": [
      {
        "src": "/images/people/aslan-aslahanov.webp",
        "caption": "Aslan Aslahanov (1977–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi, aki taypına mensuptu ve cephede ‘Mansur’ künyesiyle tanındı. Genç yaşından itibaren İslami ahlakı ve cesaretiyle silah arkadaşları arasında sevildi.",
    "bio": [
      "Çeçenistan’da dünyaya geldi, aki taypına mensuptu ve cephede ‘Mansur’ künyesiyle tanındı. Genç yaşından itibaren İslami ahlakı ve cesaretiyle silah arkadaşları arasında sevildi.",
      "İkinci rus-çeçen savaşı’nda işgal ordularına karşı direniş saflarında silah kuşandı. Başkent Cahar ve Argun boğazı hattındaki çetin savunma muharebelerinde görev Aldı. 2000 yılında vatan topraklarını savunurken girdiği çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/anzor-tsurayev.webp",
    "gallery": [
      {
        "src": "/images/people/anzor-tsurayev.webp",
        "caption": "Anzor Tsurayev (1988–2014) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Bamut köyünde doğdu, ‘Abdul-Hakim’ künyesini Aldı ve Bamutlu musa’nın yeğeniydi. Tarihi Bamut direnişinin ruhuyla büyüyerek genç yaşta dağ birliklerine katıldı.",
    "bio": [
      "Çeçenistan’ın Bamut köyünde doğdu, ‘Abdul-Hakim’ künyesini Aldı ve Bamutlu musa’nın yeğeniydi. Tarihi Bamut direnişinin ruhuyla büyüyerek genç yaşta dağ birliklerine katıldı.",
      "Açhoy-Martan ve sunca ormanlarında mücahit gruplarıyla birlikte yıllarca mücadele etti. Zorlu kış ve kuşatma şartlarında sarsılmaz iradesiyle kardeşlerine örnek bir mücahit oldu. 2014 yılında işgal güçleriyle girdiği çatışmada Bamutlu amcası gibi şehit düştü."
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
    "image": "/images/people/aslan-dukuzov.webp",
    "gallery": [
      {
        "src": "/images/people/aslan-dukuzov.webp",
        "caption": "Aslan Dukuzov (1973–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Urus-Martan şehrinde dünyaya geldi ve Çinhoy taypına mensuptu. Direniş saflarında ‘Emir halid’ künyesiyle tanınarak Urus-Martan birliklerine komuta etti.",
    "bio": [
      "Çeçenistan’ın Urus-Martan şehrinde dünyaya geldi ve Çinhoy taypına mensuptu. Direniş saflarında ‘Emir halid’ künyesiyle tanınarak Urus-Martan birliklerine komuta etti.",
      "Birinci ve İkinci rus-çeçen savaşlarında işgalcilere karşı sayısız operasyonu yönetti. Cesareti, askeri dehası ve fedakârlığıyla Urus-Martan cephesinin öncü isimlerinden oldu. Nisan 2002’de Urus-Martan’da Rus güçleriyle girdiği çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/muhammed-salah-abubakarov.webp",
    "gallery": [
      {
        "src": "/images/people/muhammed-salah-abubakarov.webp",
        "caption": "Muhammed-Salah Abubakarov (1975–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Şali şehrinde dünyaya geldi ve Çeçenlerin şuono taypına mensuptu. Birinci ve İkinci rus-çeçen savaşlarında vatan savunmasında aktif olarak yer Aldı.",
    "bio": [
      "Çeçenistan’ın Şali şehrinde dünyaya geldi ve Çeçenlerin şuono taypına mensuptu. Birinci ve İkinci rus-çeçen savaşlarında vatan savunmasında aktif olarak yer Aldı.",
      "Şali ve Doğu cephesi sektöründeki mücahit birlikleriyle omuz omuza çarpıştı. Ağır kuşatma altında dahi memleketi Şali’deki direniş hattını terk etmedi. 2002 yılında Rus işgal güçleriyle girdiği Silahlı çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/salman-aspanov.webp",
    "gallery": [
      {
        "src": "/images/people/salman-aspanov.webp",
        "caption": "Salman Aspanov (1980–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın başkenti Cahar’ın (Grozni) Çernoreçye beldesinde dünyaya geldi. Genç yaşında başkent Cahar savunmasına katılarak silah arkadaşlarıyla saf tuttu.",
    "bio": [
      "Çeçenistan’ın başkenti Cahar’ın (Grozni) Çernoreçye beldesinde dünyaya geldi. Genç yaşında başkent Cahar savunmasına katılarak silah arkadaşlarıyla saf tuttu.",
      "İkinci rus-çeçen savaşı’nda şehir içi direniş ve gerilla operasyonlarında görev Aldı. Samimiyeti, cesareti ve kardeşlik ruhuyla Çernoreçye mücahitleri arasında çok sevildi. 2002 yılında başkent Cahar’da işgal Kuvvetleriyle çarpışarak kahramanca şehit düştü."
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
    "image": "/images/people/yunus-vagapov.webp",
    "gallery": [
      {
        "src": "/images/people/yunus-vagapov.webp",
        "caption": "Yunus Vagapov (1975–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Şali şehrinde dünyaya geldi ve Kurchaloy taypına mensuptu. Vatanseverliği ve dindar kişiliğiyle genç yaşta Çeçen direniş saflarına katıldı.",
    "bio": [
      "Çeçenistan’ın Şali şehrinde dünyaya geldi ve Kurchaloy taypına mensuptu. Vatanseverliği ve dindar kişiliğiyle genç yaşta Çeçen direniş saflarına katıldı.",
      "İkinci rus-çeçen savaşı’nda Şali ve Güney dağ cephesi birliklerinde mücadele etti. Zorlu cephe şartlarında silah arkadaşlarına her zaman destek ve moral kaynağı oldu. 2001 yılında işgalci Rus birlikleriyle girdiği çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/rustam-betalgeriyev.webp",
    "gallery": [
      {
        "src": "/images/people/rustam-betalgeriyev.webp",
        "caption": "Rustam Betalgeriyev (1976–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Gudermes şehrinde dünyaya geldi ve cephede ‘Klyaks’ lâkabıyla tanındı. Birinci ve İkinci rus-çeçen savaşlarında Doğu cephesi birliklerinde silah kuşandı.",
    "bio": [
      "Çeçenistan’ın Gudermes şehrinde dünyaya geldi ve cephede ‘Klyaks’ lâkabıyla tanındı. Birinci ve İkinci rus-çeçen savaşlarında Doğu cephesi birliklerinde silah kuşandı.",
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
    "image": "/images/people/ibrahim-canhotov.webp",
    "gallery": [
      {
        "src": "/images/people/ibrahim-canhotov.webp",
        "caption": "İbrahim Canhotov (1978–2003) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Kafkasya’da dünyaya geldi ve gençlik yıllarında direniş saflarında yerini Aldı. İkinci rus-çeçen savaşı’nda dağ ve şehir birliklerinde işgalcilere karşı savaştı.",
    "bio": [
      "Kafkasya’da dünyaya geldi ve gençlik yıllarında direniş saflarında yerini Aldı. İkinci rus-çeçen savaşı’nda dağ ve şehir birliklerinde işgalcilere karşı savaştı.",
      "Soğukkanlılığı, cesareti ve fedakârlığıyla Komutanlarının güvenini kazandı. Ağır kuşatma ve takip altında dahi direniş mevziilerini asla terk etmedi. 2003 yılında işgal Kuvvetleriyle girdiği Silahlı çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/gilani-susuyev.webp",
    "gallery": [
      {
        "src": "/images/people/gilani-susuyev.webp",
        "caption": "Gilani Susuyev (1965–1996) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi ve istiklal mücadelesinde ‘Emir Gilani’ künyesiyle tanındı. Birinci rus-çeçen savaşı’nda mücahit birliklerine komuta ederek ön cephelerde savaştı.",
    "bio": [
      "Çeçenistan’da dünyaya geldi ve istiklal mücadelesinde ‘Emir Gilani’ künyesiyle tanındı. Birinci rus-çeçen savaşı’nda mücahit birliklerine komuta ederek ön cephelerde savaştı.",
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
    "image": "/images/people/dalambek-bahayev.webp",
    "gallery": [
      {
        "src": "/images/people/dalambek-bahayev.webp",
        "caption": "Dalambek Bahayev (1968–1996) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Alleroy köyünde dünyaya geldi ve Çeçenlerin Alleroy taypına mensuptu. Savaş öncesinde hamzat gelayev’in Özel kuvvetler birliğinde, savaşta hunkar-paşa’nın emrinde görev yaptı.",
    "bio": [
      "Çeçenistan’ın Alleroy köyünde dünyaya geldi ve Çeçenlerin Alleroy taypına mensuptu. Savaş öncesinde hamzat gelayev’in Özel kuvvetler birliğinde, savaşta hunkar-paşa’nın emrinde görev yaptı.",
      "31 Aralık 1994 Cahar savunmasında ve tarihi Bamut direnişinde yaklaşık on Rus tankını imha etti. Her muharebe öncesi roketatar mühimmatını bizzat hazırlayan usta bir zırhlı avcısıydı. 6 Ağustos 1996’da Cahar’daki ‘Cihad’ Operasyonunda Hunkar-Paşa ile Çarpışırken Şehit Düştü."
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
    "image": "/images/people/rizvan-daayev.webp",
    "gallery": [
      {
        "src": "/images/people/rizvan-daayev.webp",
        "caption": "Rizvan Daayev (1964–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi ve Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetlerinde Komutanlık yaptı. Üstün komuta başarısıyla Güneybatı cephesi 1. sektör Komutanlığı ve Tuğgeneral rütbesine yükseldi.",
    "bio": [
      "Çeçenistan’da dünyaya geldi ve Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetlerinde Komutanlık yaptı. Üstün komuta başarısıyla Güneybatı cephesi 1. sektör Komutanlığı ve Tuğgeneral rütbesine yükseldi.",
      "Nurullah’ Tugayı bünyesinde Birinci ve İkinci rus-çeçen savaşlarında ön safta çarpıştı. Ocak-Şubat 2000’de kuşatma altındaki başkent Cahar’ın savunması ve yarma harekâtına katıldı. 8 Şubat 2000 tarihinde Rus işgal Kuvvetleriyle girdiği çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/hamzat-gaurgasvili.webp",
    "gallery": [
      {
        "src": "/images/people/hamzat-gaurgasvili.webp",
        "caption": "Hamzat Gaurgaşvili (1971–1995) — Arşiv fotoğrafı."
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
    "image": "/images/people/ruslan-elmurzayev.webp",
    "gallery": [
      {
        "src": "/images/people/ruslan-elmurzayev.webp",
        "caption": "Ruslan Elmurzayev (1968–1999) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Gudermes ve enhallo bölgesinde dünyaya geldi ve İslami kimliğiyle tanındı. Birinci ve İkinci rus-çeçen savaşlarında vatan topraklarını savunmak için silah kuşandı.",
    "bio": [
      "Çeçenistan’ın Gudermes ve enhallo bölgesinde dünyaya geldi ve İslami kimliğiyle tanındı. Birinci ve İkinci rus-çeçen savaşlarında vatan topraklarını savunmak için silah kuşandı.",
      "1999 sonbaharında Rus ordusunun yeniden başlattığı işgale karşı Doğu ve Güney cephelerinde savaştı. Vedeno dağlarında kış şartlarında yürütülen savunma harekâtlarında büyük fedakârlık gösterdi. 31 Aralık 1999 tarihinde Vedeno bölgesinde Rus güçleriyle girdiği çatışmada şehit düştü."
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
    "image": "/images/people/muhammed-nauzov.webp",
    "gallery": [
      {
        "src": "/images/people/muhammed-nauzov.webp",
        "caption": "Muhammed Nauzov (1978–2006) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi, bilto taypına mensuptu ve cephede ‘Halid’ künyesiyle tanındı. İlim sevgisi, takvası ve cesaretiyle direniş saflarındaki kardeşleri arasında örnek oldu.",
    "bio": [
      "Çeçenistan’da dünyaya geldi, bilto taypına mensuptu ve cephede ‘Halid’ künyesiyle tanındı. İlim sevgisi, takvası ve cesaretiyle direniş saflarındaki kardeşleri arasında örnek oldu.",
      "İkinci rus-çeçen savaşı’nda işgalci kuvvetlere karşı gerilla operasyonlarında yer Aldı. Yıllarca süren ağır kuşatma şartlarında imanından ve mücadelesinden taviz vermedi. 31 Ocak 2006 tarihinde Rus işgal güçleriyle girdiği çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/adam-husalayev.webp",
    "gallery": [
      {
        "src": "/images/people/adam-husalayev.webp",
        "caption": "Adam Huşalayev (1982–2013) — Arşiv fotoğrafı."
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
    "title": "Kafkasya İmameti naibi ve komutan",
    "era": "yakin",
    "region": "Çeçenya",
    "birthPlace": "Çeçenya",
    "deathPlace": "Çeçenya",
    "center": "Çeçenya",
    "image": "/images/people/yunus-ahmadov.webp",
    "gallery": [
      {
        "src": "/images/people/yunus-ahmadov.webp",
        "caption": "Yunus Ahmadov (1978–2007) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1 Ağustos 1978’de dünyaya geldi, phamtoy taypına mensuptu ve Cahar’da direnişe katıldı. Başkent Cahar’ın (Grozni) Oktyabrski bölgesi emiri olarak şehir içi operasyonları yönetti.",
    "bio": [
      "1 Ağustos 1978’de dünyaya geldi, phamtoy taypına mensuptu ve Cahar’da direnişe katıldı. Başkent Cahar’ın (Grozni) Oktyabrski bölgesi emiri olarak şehir içi operasyonları yönetti.",
      "Merkez cephesi Komutanı ebubekir basayev’in Birinci naibi (Yardımcısı) olarak görev yaptı. Son çatışmasında halkına zulmeden üst düzey bir işbirlikçiyi bizzat cezalandırdı. 7 Temmuz 2007 gecesi başkent Cahar’da eşitsiz çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/dires-dadayev.webp",
    "gallery": [
      {
        "src": "/images/people/dires-dadayev.webp",
        "caption": "Dires Dadayev (1976–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın zakan-yurt köyünde doğdu ve Çeçenlerin köklü tundakho taypına mensuptu. İçkerya Tuğgenerali hadid Dadayev’in küçük kardeşi olarak genç yaşta vatan savunmasına katıldı.",
    "bio": [
      "Çeçenistan’ın zakan-yurt köyünde doğdu ve Çeçenlerin köklü tundakho taypına mensuptu. İçkerya Tuğgenerali hadid Dadayev’in küçük kardeşi olarak genç yaşta vatan savunmasına katıldı.",
      "Birinci ve İkinci rus-çeçen savaşlarında ağabeyiyle omuz omuza cephede çarpıştı. Zakan-Yurt ve başkent Cahar hattındaki çetin savunma muharebelerinde cesaret gösterdi. 2001 yılında işgalci Rus Kuvvetlerine karşı yürüttüğü mücadelede şehit düştü."
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
    "image": "/images/people/uvays-ahmadov.webp",
    "gallery": [
      {
        "src": "/images/people/uvays-ahmadov.webp",
        "caption": "Uvays Ahmadov (1975–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Argun şehrinde boksör olarak yetişti ve Türkiye’deki tedavisinin ardından cepheye döndü. Argun’da bir mücahit grubuna komuta ederek işgalcilere karşı başarılı operasyonlar düzenledi.",
    "bio": [
      "Çeçenistan’ın Argun şehrinde boksör olarak yetişti ve Türkiye’deki tedavisinin ardından cepheye döndü. Argun’da bir mücahit grubuna komuta ederek işgalcilere karşı başarılı operasyonlar düzenledi.",
      "Rusların babasını rehin alması üzerine halkına zarar gelmemesi için düşmanı tek başına üzerine çekti. Moskovski mevkisinde beş ural, iki zırhlı ve üç uaz’dan oluşan Rus konvoyuna tek başına pusu kurdu. 16 Haziran 2001’de 18 işgalciyi imha edip elinde steçkin tabancasıyla çarpışarak şehit düştü."
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
    "image": "/images/people/movladi-magamadov.webp",
    "gallery": [
      {
        "src": "/images/people/movladi-magamadov.webp",
        "caption": "Movladi Magamadov (1974–2006) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın hattuni köyünde dünyaya geldi ve Çeçenlerin tsadaharo taypına mensuptu. Birinci ve İkinci rus-çeçen savaşlarında Çeçen İçkerya Silahlı Kuvvetleri saflarında çarpıştı.",
    "bio": [
      "Çeçenistan’ın hattuni köyünde dünyaya geldi ve Çeçenlerin tsadaharo taypına mensuptu. Birinci ve İkinci rus-çeçen savaşlarında Çeçen İçkerya Silahlı Kuvvetleri saflarında çarpıştı.",
      "Güney dağ cephesi ve Vedeno ormanlarında yıllarca süren gerilla direnişinde yer Aldı. Zorlu kış ve kuşatma şartlarında sarsılmaz imanı ve sabrıyla kardeşlerine örnek oldu. 2006 yılında Rus işgal güçleriyle girdiği Silahlı çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/yunus-emri.webp",
    "gallery": [
      {
        "src": "/images/people/yunus-emri.webp",
        "caption": "Yunus Emri (1978–2003) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Türkiye’de dünyaya geldi ve Kafkasya’daki müslüman kardeşlerinin cihadına gönüllü olarak katıldı. Çeçenistan dağlarındaki mücahit birliklerinde ağır makineli tüfek nişancısı olarak görev yaptı.",
    "bio": [
      "Türkiye’de dünyaya geldi ve Kafkasya’daki müslüman kardeşlerinin cihadına gönüllü olarak katıldı. Çeçenistan dağlarındaki mücahit birliklerinde ağır makineli tüfek nişancısı olarak görev yaptı.",
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
    "image": "/images/people/ruslan-bibulatov.webp",
    "gallery": [
      {
        "src": "/images/people/ruslan-bibulatov.webp",
        "caption": "Ruslan Bibulatov (1977–1999) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın katır-yurt köyünde dünyaya geldi ve Çeçenlerin naşho taypına mensuptu. Katır-Yurt Komutanı olhazar Bibulatov’un oğlu olarak genç yaşta vatan savunmasına katıldı.",
    "bio": [
      "Çeçenistan’ın katır-yurt köyünde dünyaya geldi ve Çeçenlerin naşho taypına mensuptu. Katır-Yurt Komutanı olhazar Bibulatov’un oğlu olarak genç yaşta vatan savunmasına katıldı.",
      "İkinci rus-çeçen savaşı başında başkent Cahar’ı (Grozni) savunan birliklerde görev Aldı. Süra-Kort bölgesinde Komutan dokka umarov’un karargâhını koruyan mücahitler arasında yer Aldı. 19 Aralık 1999’da başkent Cahar’da Rus füze saldırısı sonucunda kahramanca şehit düştü."
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
    "image": "/images/people/zayndi-ibayev.webp",
    "gallery": [
      {
        "src": "/images/people/zayndi-ibayev.webp",
        "caption": "Zayndi İbayev (1968–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Prigorodnoye köyünde doğdu, çinho taypına mensuptu ve ‘Patriot-1’ çağrı adıyla tanındı. Birinci ve İkinci rus-çeçen savaşlarında mücahit birliklerine Komutanlık yaptı.",
    "bio": [
      "Çeçenistan’ın Prigorodnoye köyünde doğdu, çinho taypına mensuptu ve ‘Patriot-1’ çağrı adıyla tanındı. Birinci ve İkinci rus-çeçen savaşlarında mücahit birliklerine Komutanlık yaptı.",
      "Ağustos 1996 cihad harekâtı’ndaki üstün cesaretinden dolayı ‘Qoman siy’ ve ‘Qoman turpal’ nişanlarını Aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki tarihi direniş hattında çarpıştı. Saadi-Kotar muharebesinde son kurşununa kadar vuruşarak kahramanca şehit düştü."
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
    "image": "/images/people/adam-movsarov.webp",
    "gallery": [
      {
        "src": "/images/people/adam-movsarov.webp",
        "caption": "Adam Movsarov (1976–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Sernovodsk köyünde dünyaya geldi ve Çeçenlerin Dişni taypına mensuptu. Genç yaşından itibaren vatan savunmasına katılarak direniş birliklerinde silah kuşandı.",
    "bio": [
      "Çeçenistan’ın Sernovodsk köyünde dünyaya geldi ve Çeçenlerin Dişni taypına mensuptu. Genç yaşından itibaren vatan savunmasına katılarak direniş birliklerinde silah kuşandı.",
      "İkinci rus-çeçen savaşı’nda başkent Cahar savunması ve Güney yarma harekâtında yer Aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki kuşatma hattında omuz omuza savaştı. Saadi-Kotar direnişinde işgalci ordulara karşı çarpışarak kahramanca şehit düştü."
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
    "image": "/images/people/muhammed-batsiyev.webp",
    "gallery": [
      {
        "src": "/images/people/muhammed-batsiyev.webp",
        "caption": "Muhammed Batsiyev (1974–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın novoterskoye köyünde doğdu, himo taypına mensuptu ve ‘Mada’ lâkabıyla tanındı. Birinci ve İkinci rus-çeçen savaşlarında naurski Taburu saflarında ön cephede savaştı.",
    "bio": [
      "Çeçenistan’ın novoterskoye köyünde doğdu, himo taypına mensuptu ve ‘Mada’ lâkabıyla tanındı. Birinci ve İkinci rus-çeçen savaşlarında naurski Taburu saflarında ön cephede savaştı.",
      "2000 yılı başında başkent Cahar kuşatmasını yararak Güneye yürüyen birliklerde yer Aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde kurulan savunma siperlerinde çarpıştı. Saadi-Kotar muharebesinde naurski kardeşleriyle birlikte vuruşarak kahramanca şehit düştü."
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
    "image": "/images/people/timur-batalov.webp",
    "gallery": [
      {
        "src": "/images/people/timur-batalov.webp",
        "caption": "Timur Batalov (1979–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1979 yılında Sernovodsk köyünde doğdu, mulko taypına mensuptu ve ‘Abdul-Malik’ künyesini Aldı. Genç yaşta İkinci rus-çeçen savaşı’na katılarak başkent Cahar savunmasında görev yaptı.",
    "bio": [
      "1979 yılında Sernovodsk köyünde doğdu, mulko taypına mensuptu ve ‘Abdul-Malik’ künyesini Aldı. Genç yaşta İkinci rus-çeçen savaşı’na katılarak başkent Cahar savunmasında görev yaptı.",
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
    "image": "/images/people/ahmed-haciyev.webp",
    "gallery": [
      {
        "src": "/images/people/ahmed-haciyev.webp",
        "caption": "Ahmed Haciyev (1977–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın naurski bölgesi rubejnoye köyünde doğdu ve hakmado taypına mensuptu. İkinci rus-çeçen savaşı’nda naurski mücahitleriyle birlikte vatan savunmasına koştu.",
    "bio": [
      "Çeçenistan’ın naurski bölgesi rubejnoye köyünde doğdu ve hakmado taypına mensuptu. İkinci rus-çeçen savaşı’nda naurski mücahitleriyle birlikte vatan savunmasına koştu.",
      "Başkent Cahar (Grozni) savunması ve ardından gerçekleşen Güney yarma harekâtında çarpıştı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde Rus ordusunun kuşatmasına karşı direndi. Saadi-Kotar muharebesinde son nefesine kadar vuruşarak kahramanca şehit düştü."
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
    "image": "/images/people/sayd-hasan-sabayev.webp",
    "gallery": [
      {
        "src": "/images/people/sayd-hasan-sabayev.webp",
        "caption": "Sayd-Hasan Şabayev (1975–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Gehi köyünde dünyaya geldi ve İslami ahlakıyla çevresinde sevildi. İkinci rus-çeçen savaşı’nda Komutan ebu el-valid’in Cemaati bünyesinde cepheye katıldı.",
    "bio": [
      "Çeçenistan’ın Gehi köyünde dünyaya geldi ve İslami ahlakıyla çevresinde sevildi. İkinci rus-çeçen savaşı’nda Komutan ebu el-valid’in Cemaati bünyesinde cepheye katıldı.",
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
    "image": "/images/people/rizvan-akuyev.webp",
    "gallery": [
      {
        "src": "/images/people/rizvan-akuyev.webp",
        "caption": "Rizvan Akuyev (1983–2009) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’da dünyaya geldi ve genç yaşta Açhoy-Martan sektöründeki direnişe katıldı. Batı cephesi ormanlarında mücahit birlikleriyle birlikte işgalcilere karşı mücadele etti.",
    "bio": [
      "Çeçenistan’da dünyaya geldi ve genç yaşta Açhoy-Martan sektöründeki direnişe katıldı. Batı cephesi ormanlarında mücahit birlikleriyle birlikte işgalcilere karşı mücadele etti.",
      "Ağır kış ve kuşatma şartlarında Açhoy-Martan dağlarındaki savunma hatlarını terk etmedi. Cesareti, ihlası ve fedakârlığıyla silah arkadaşları arasında örnek bir mücahit oldu. 11 Kasım 2009 tarihinde Rus işgal Kuvvetleriyle girdiği çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/hamzat-batayev.webp",
    "gallery": [
      {
        "src": "/images/people/hamzat-batayev.webp",
        "caption": "Hamzat Batayev (1966–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Batı cephesinde yetişti ve efsanevi Bamut Taburu’nun Komutanlığını üstlendi. Birinci rus-çeçen savaşı’nda Bamut kalesi’ni aylarca işgalci ordulara karşı kahramanca savundu.",
    "bio": [
      "Çeçenistan’ın Batı cephesinde yetişti ve efsanevi Bamut Taburu’nun Komutanlığını üstlendi. Birinci rus-çeçen savaşı’nda Bamut kalesi’ni aylarca işgalci ordulara karşı kahramanca savundu.",
      "Üstün cesareti ve liderliğiyle Çeçen İçkerya Cumhuriyeti’nin Milli kahramanları arasına girdi. İkinci savaşta başkent Cahar savunması ve Mart 2000’deki Saadi-Kotar direnişinde çarpıştı. Mart 2000’de Saadi-Kotar (Komsomolskoye) muharebesinde kahramanca şehit düştü."
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
    "image": "/images/people/ahmed-labazanov.webp",
    "gallery": [
      {
        "src": "/images/people/ahmed-labazanov.webp",
        "caption": "Ahmed Labazanov (1968–1999) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1991’den itibaren cumhurbaşkanı Cahar dudayev’in Muhafız birliği saflarında bağımsızlık yoluna çıktı. Birinci rus-çeçen savaşı’nda ön cephede çarpıştı, yaralanmasına rağmen mücadelesinden dönmedi.",
    "bio": [
      "1991’den itibaren cumhurbaşkanı Cahar dudayev’in Muhafız birliği saflarında bağımsızlık yoluna çıktı. Birinci rus-çeçen savaşı’nda ön cephede çarpıştı, yaralanmasına rağmen mücadelesinden dönmedi.",
      "İkinci rus-çeçen savaşı başında ‘33’ çağrı adlı mücahit grubunun Komutanlığını yaptı. 20 Kasım 1999’da Alleroy hattında seçkin Rus Özel Kuvvetleri ve t-90 tanklarına karşı savaştı. Kasım 1999’da düşman kuşatmasına karşı son nefesine kadar vuruşarak kahramanca şehit düştü."
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
    "image": "/images/people/yusi-hantiyev.webp",
    "gallery": [
      {
        "src": "/images/people/yusi-hantiyev.webp",
        "caption": "Yusi Hantiyev (1954–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçen halkının yetiştirdiği değerli şair, aydın ve vaynah demokratik partisi’nin kıdemli Muhafızıydı. Bağımsız Çeçen İçkerya Cumhuriyeti parlamentosu’nda milletvekili olarak halkının iradesini temsil etti.",
    "bio": [
      "Çeçen halkının yetiştirdiği değerli şair, aydın ve vaynah demokratik partisi’nin kıdemli Muhafızıydı. Bağımsız Çeçen İçkerya Cumhuriyeti parlamentosu’nda milletvekili olarak halkının iradesini temsil etti.",
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
    "image": "/images/people/deni-sultanov.webp",
    "gallery": [
      {
        "src": "/images/people/deni-sultanov.webp",
        "caption": "Deni Sultanov (1977–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Gudermes şehrinde dünyaya geldi ve Komutan abdurrahman’ın Cemaatine katıldı. İkinci rus-çeçen savaşı’nda Duba-Yurt yakınlarındaki stratejik 825 rakımlı tepe hücumunda savaştı.",
    "bio": [
      "Çeçenistan’ın Gudermes şehrinde dünyaya geldi ve Komutan abdurrahman’ın Cemaatine katıldı. İkinci rus-çeçen savaşı’nda Duba-Yurt yakınlarındaki stratejik 825 rakımlı tepe hücumunda savaştı.",
      "825 rakımlı tepe’deki son Rus sığınağına tek başına atlayıp keskin nişancıyı etkisiz bıraktı. Sığınaktan otuz saniye sonra ele geçirdiği svd tüfeğiyle çıkıp kardeşlerine büyük moral kazandırdı. Mart 2000 başında duts-hote köyünde yaralı haldeyken kahramanca şehit düştü."
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
    "image": "/images/people/islam-zalautdinov.webp",
    "gallery": [
      {
        "src": "/images/people/islam-zalautdinov.webp",
        "caption": "İslam Zalautdinov (1978–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın Çeçen-Aul köyünde doğdu, yalho taypına mensuptu ve ‘Spartak’ çağrı adıyla tanındı. Savaş öncesinde ‘Nizam’ televizyon kanalında kameraman olarak çalışıp hakikatin sesini kayda geçirdi.",
    "bio": [
      "Çeçenistan’ın Çeçen-Aul köyünde doğdu, yalho taypına mensuptu ve ‘Spartak’ çağrı adıyla tanındı. Savaş öncesinde ‘Nizam’ televizyon kanalında kameraman olarak çalışıp hakikatin sesini kayda geçirdi.",
      "İkinci rus-çeçen savaşı’nda ahmadov Cemaati saflarında silah kuşanarak cepheye katıldı. Rizvan ahmadov ve hayrullah zakriyev gibi Komutanlarla birlikte ön cephe operasyonlarında çarpıştı. Tsotsi-Yurt’taki çatışmada şehit düştü (İnşallah) ve köyün merkez kabristanına defnedildi."
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
    "image": "/images/people/turpal-ali-camalhanov.webp",
    "gallery": [
      {
        "src": "/images/people/turpal-ali-camalhanov.webp",
        "caption": "Turpal-Ali Camalhanov (1990–2009) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1990 yılında Vedeno bölgesinin tsa-vedeno köyünde doğdu ve inançlı bir ailede yetişti. 2004 yılında henüz on dört yaşındayken işgale boyun eğmeyip dağlardaki mücahitlere katıldı.",
    "bio": [
      "1990 yılında Vedeno bölgesinin tsa-vedeno köyünde doğdu ve inançlı bir ailede yetişti. 2004 yılında henüz on dört yaşındayken işgale boyun eğmeyip dağlardaki mücahitlere katıldı.",
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
    "image": "/images/people/aslambek-bacayev.webp",
    "gallery": [
      {
        "src": "/images/people/aslambek-bacayev.webp",
        "caption": "Aslambek Baçayev (1978–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Çeçenistan’ın novıye-atagi (Cim-Atagi) köyünde doğdu ve genç yaşta direnişe katıldı. İkinci rus-çeçen savaşı’nda Şali ve Argun boğazı hattındaki mücahit birliklerinde görev yaptı.",
    "bio": [
      "Çeçenistan’ın novıye-atagi (Cim-Atagi) köyünde doğdu ve genç yaşta direnişe katıldı. İkinci rus-çeçen savaşı’nda Şali ve Argun boğazı hattındaki mücahit birliklerinde görev yaptı.",
      "Ağır kuşatma ve takip şartlarında işgalci Rus birliklerine karşı cesaretle mücadele etti. Vatanına bağlılığı, ihlası ve fedakârlığıyla köy halkı ve kardeşleri arasında sevildi. 2002 yılında novıye-atagi’de uğradığı hain saldırı sonucu şehit düştü."
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
    "image": "/images/people/hamid-mahamasev.webp",
    "gallery": [
      {
        "src": "/images/people/hamid-mahamasev.webp",
        "caption": "Hamid Mahamaşev (1965–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1965 yılında naurski bölgesi rubejnoye köyünde doğdu ve hakmado taypına mensuptu. Çeçenistan’ın özgürlük ve bağımsızlık mücadelesinde naurski mücahitleriyle birlikte saf tuttu.",
    "bio": [
      "1965 yılında naurski bölgesi rubejnoye köyünde doğdu ve hakmado taypına mensuptu. Çeçenistan’ın özgürlük ve bağımsızlık mücadelesinde naurski mücahitleriyle birlikte saf tuttu.",
      "İkinci rus-çeçen savaşı’nda başkent Cahar (Grozni) savunması ve kış yarma harekâtına katıldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki tarihi direniş mevzilerinde çarpıştı. Saadi-Kotar muharebesinde son kurşununa kadar vuruşarak kahramanca şehit düştü."
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
    "image": "/images/people/isa-canaraliyev.webp",
    "gallery": [
      {
        "src": "/images/people/isa-canaraliyev.webp",
        "caption": "İsa Canaraliyev (1980–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "20 Mayıs 1980’de Urus-Martan’da dünyaya geldi ve Çeçenlerin köklü beno taypına mensuptu. Gençliğinin baharında İkinci rus-çeçen savaşı başlayınca vatan savunmasına koştu.",
    "bio": [
      "20 Mayıs 1980’de Urus-Martan’da dünyaya geldi ve Çeçenlerin köklü beno taypına mensuptu. Gençliğinin baharında İkinci rus-çeçen savaşı başlayınca vatan savunmasına koştu.",
      "Kuşatma altındaki başkent Cahar savunmasında ve Şubat 2000’deki zorlu kış yürüyüşünde yer Aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde Rus ordusuna karşı omuz omuza direndi. Henüz on dokuz yaşında Saadi-Kotar muharebesinde kahramanca şehit düştü."
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
    "image": "/images/people/musa-magomadov.webp",
    "gallery": [
      {
        "src": "/images/people/musa-magomadov.webp",
        "caption": "Musa Magomadov (1980–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1980 yılında Çeçenistan’da doğdu, dört kahraman Magomadov kardeşin en küçüğüydü. Ağabeyleri muhammed, ebubekir ve muhammed-emin ile birlikte vatan savunmasında silah kuşandı.",
    "bio": [
      "1980 yılında Çeçenistan’da doğdu, dört kahraman Magomadov kardeşin en küçüğüydü. Ağabeyleri muhammed, ebubekir ve muhammed-emin ile birlikte vatan savunmasında silah kuşandı.",
      "İkinci rus-çeçen savaşı’nda başkent Cahar savunması ve Güney yarma harekâtında görev Aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde üç ağabeyiyle aynı siperde savaştı. Yirmi yaşında üç ağabeyiyle birlikte Saadi-Kotar’da çarpışarak kahramanca şehit düştü."
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
    "image": "/images/people/movldi-islamov.webp",
    "gallery": [
      {
        "src": "/images/people/movldi-islamov.webp",
        "caption": "Movldi İslamov (1958–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "Her iki rus-çeçen savaşı’nda da ön cephede çarpışan kıdemli İçkerya mücahitlerindendi. Ocak 1996’daki tarihi pervomaysk harekâtı’na katılarak kuşatmayı yaran gaziler arasında yer Aldı.",
    "bio": [
      "Her iki rus-çeçen savaşı’nda da ön cephede çarpışan kıdemli İçkerya mücahitlerindendi. Ocak 1996’daki tarihi pervomaysk harekâtı’na katılarak kuşatmayı yaran gaziler arasında yer Aldı.",
      "Birinci savaş zaferinin ardından şelkovskoy bölgesi çervlyonnaya idare başkanlığı görevini yürüttü. 1999’da Rus işgali yeniden başlayınca makamını bırakıp tekrar cephe saflarına koştu. İkinci rus-çeçen savaşı’nda vatan topraklarını savunurken kahramanca şehit düştü."
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
    "image": "/images/people/arbi-visayev.webp",
    "gallery": [
      {
        "src": "/images/people/arbi-visayev.webp",
        "caption": "Arbi Visayev (1973–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1973 yılında Urus-Martan’ın goyskoye köyünde doğdu ve köklü terlo taypına mensuptu. Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri’ne bağlı Şatoy Alayı saflarında görev yaptı.",
    "bio": [
      "1973 yılında Urus-Martan’ın goyskoye köyünde doğdu ve köklü terlo taypına mensuptu. Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri’ne bağlı Şatoy Alayı saflarında görev yaptı.",
      "İkinci rus-çeçen savaşı’nda başkent Cahar ve Güney dağ geçitlerindeki çatışmalara katıldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki tarihi direniş mevzilerinde savaştı. Mart 2000’de Saadi-Kotar muharebesinde son nefesine dek çarpışarak şehit düştü."
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
    "image": "/images/people/vahid-visayev.webp",
    "gallery": [
      {
        "src": "/images/people/vahid-visayev.webp",
        "caption": "Vahid Visayev (1974–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1974 yılında Çeçenistan’da dünyaya geldi ve Çeçenlerin terlo taypına mensuptu. İkinci rus-çeçen savaşı’nda Komutan abu elmurzayev’in birliği saflarında cepheye katıldı.",
    "bio": [
      "1974 yılında Çeçenistan’da dünyaya geldi ve Çeçenlerin terlo taypına mensuptu. İkinci rus-çeçen savaşı’nda Komutan abu elmurzayev’in birliği saflarında cepheye katıldı.",
      "Kuşatma altındaki başkent Cahar (Grozni) savunmasında en ön hatlarda görev Aldı. Süra-Kort tepeleri ve otuzuncu bölge mevzilerinde ağır Rus saldırılarına karşı direndi. Ocak 2000 başında süra-kort hattındaki yoğun topçu ateşinde kahramanca şehit düştü."
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
    "image": "/images/people/hamzat-bamatgiriyev.webp",
    "gallery": [
      {
        "src": "/images/people/hamzat-bamatgiriyev.webp",
        "caption": "Hamzat Bamatgiriyev (1981–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1981 yılında doğdu, Dişni taypına mensuptu ve İçkerya Tuğgenerali vahid Bamatgiriyev’in oğluydu. Gençliğinin baharında babası vahid Bamatgiriyev’in yanında vatan savunması saflarına katıldı.",
    "bio": [
      "1981 yılında doğdu, Dişni taypına mensuptu ve İçkerya Tuğgenerali vahid Bamatgiriyev’in oğluydu. Gençliğinin baharında babası vahid Bamatgiriyev’in yanında vatan savunması saflarına katıldı.",
      "İkinci rus-çeçen savaşı’nda başkent Cahar savunması ve kış yarma harekâtında yer Aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde babasıyla omuz omuza işgalcilere direndi. Henüz on dokuz yaşında babasıyla birlikte Saadi-Kotar’da vuruşarak kahramanca şehit düştü."
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
    "image": "/images/people/ebubekir-magomadov.webp",
    "gallery": [
      {
        "src": "/images/people/ebubekir-magomadov.webp",
        "caption": "Ebubekir Magomadov (1971–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1971 yılında doğdu, vatan yolunda can veren dört kahraman Magomadov kardeşten biriydi. Kardeşleri muhammed, musa ve muhammed-emin ile birlikte Çeçen direnişi saflarında savaştı.",
    "bio": [
      "1971 yılında doğdu, vatan yolunda can veren dört kahraman Magomadov kardeşten biriydi. Kardeşleri muhammed, musa ve muhammed-emin ile birlikte Çeçen direnişi saflarında savaştı.",
      "İkinci rus-çeçen savaşı’nda başkent Cahar kuşatması ve zorlu kış yürüyüşüne katıldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde üç kardeşiyle aynı cephede vuruştu. Mart 2000’de üç kardeşiyle birlikte Saadi-Kotar direnişinde kahramanca şehit düştü."
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
    "image": "/images/people/apti-cukayev.webp",
    "gallery": [
      {
        "src": "/images/people/apti-cukayev.webp",
        "caption": "Apti Çukayev (1978–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1978 yılında Gudermes şehrinde doğdu ve genç yaşta Komutan abdurrahman’ın Cemaatine katıldı. İkinci rus-çeçen savaşı’nda Argun boğazı girişindeki kritik savunma hatlarında görev Aldı.",
    "bio": [
      "1978 yılında Gudermes şehrinde doğdu ve genç yaşta Komutan abdurrahman’ın Cemaatine katıldı. İkinci rus-çeçen savaşı’nda Argun boğazı girişindeki kritik savunma hatlarında görev Aldı.",
      "Ocak 2000’de Duba-Yurt civarındaki stratejik 825 rakımlı tepe hücumunda en önde yürüdü. Dondurucu kış şartlarında Rus mevzilerine karşı sarsılmaz bir cesaret ve imanla çarpıştı. 15 Ocak 2000’de 825 rakımlı tepe’yi ele geçirme harekâtında kahramanca şehit düştü."
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
    "image": "/images/people/ilyas-umhayev.webp",
    "gallery": [
      {
        "src": "/images/people/ilyas-umhayev.webp",
        "caption": "İlyas Umhayev (1977–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1977 yılında Gudermes şehrinde dünyaya geldi ve Komutan abdurrahman’ın Cemaatinde yer Aldı. İkinci rus-çeçen savaşı’nda Gudermesli kardeşleriyle birlikte ön cephe muharebelerine katıldı.",
    "bio": [
      "1977 yılında Gudermes şehrinde dünyaya geldi ve Komutan abdurrahman’ın Cemaatinde yer Aldı. İkinci rus-çeçen savaşı’nda Gudermesli kardeşleriyle birlikte ön cephe muharebelerine katıldı.",
      "Ocak 2000’deki Duba-Yurt ve Güney dağ hattı çatışmalarında büyük fedakârlık gösterdi. Ağır kış ve kuşatma altında yaralı silah arkadaşlarını asla yalnız bırakmadı. Mart 2000 başında duts-hote köyüne düzenlenen Rus füze saldırısında şehit düştü."
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
    "image": "/images/people/idris-amayev.webp",
    "gallery": [
      {
        "src": "/images/people/idris-amayev.webp",
        "caption": "İdris Amayev (1975–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 yılında naurski bölgesi novoterskoye köyünde doğdu ve himo taypına mensuptu. İkinci rus-çeçen savaşı’nda İçkerya ordusu’nun naurski Taburu saflarında silah kuşandı.",
    "bio": [
      "1975 yılında naurski bölgesi novoterskoye köyünde doğdu ve himo taypına mensuptu. İkinci rus-çeçen savaşı’nda İçkerya ordusu’nun naurski Taburu saflarında silah kuşandı.",
      "Kuşatma altındaki başkent Cahar savunmasında silah arkadaşı aslanbek murtsaliyev ile savaştı. Şubat 2000 yarma harekâtıyla Saadi-Kotar (Komsomolskoye) direniş mevzilerine ulaştı. Mart 2000’de Saadi-Kotar muharebesinde işgalcilere karşı çarpışarak şehit düştü."
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
    "image": "/images/people/umar-borcasvili.webp",
    "gallery": [
      {
        "src": "/images/people/umar-borcasvili.webp",
        "caption": "Umar Borçaşvili (1967–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1967 yılında dünyaya geldi ve Çeçenistan’ın batısındaki Assinovskaya beldesinde yaşadı. Vatanseverliği, cesareti ve sarsılmaz imanıyla çevresinde saygı gören bir mücahitti.",
    "bio": [
      "1967 yılında dünyaya geldi ve Çeçenistan’ın batısındaki Assinovskaya beldesinde yaşadı. Vatanseverliği, cesareti ve sarsılmaz imanıyla çevresinde saygı gören bir mücahitti.",
      "İkinci rus-çeçen savaşı’nda başkent Cahar’dan Güney dağ eteklerine kadar cephede vuruştu. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki çetin kuşatma hattında görev yaptı. Mart 2000’de Saadi-Kotar direnişinde son kurşununa kadar savaşarak şehit düştü."
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
    "image": "/images/people/has-muhammed-edilsultanov.webp",
    "gallery": [
      {
        "src": "/images/people/has-muhammed-edilsultanov.webp",
        "caption": "Has-Muhammed Edilsultanov (1976–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1976 yılında Kurçaloy bölgesinin Geldagan köyünde doğdu ve şono taypına mensuptu. Genç yaşta Çeçen İçkerya Cumhuriyeti’nin bağımsızlığını korumak için direnişe katıldı.",
    "bio": [
      "1976 yılında Kurçaloy bölgesinin Geldagan köyünde doğdu ve şono taypına mensuptu. Genç yaşta Çeçen İçkerya Cumhuriyeti’nin bağımsızlığını korumak için direnişe katıldı.",
      "İkinci rus-çeçen savaşı’nda başkent Cahar kuşatması ve kış yarma harekâtında çarpıştı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde ezici Rus güçlerine karşı direndi. Yirmi dört yaşında Saadi-Kotar muharebesinde vatanı uğruna kahramanca şehit düştü."
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
    "image": "/images/people/saaman-magomadov.webp",
    "gallery": [
      {
        "src": "/images/people/saaman-magomadov.webp",
        "caption": "Şaaman Magomadov (1973–1994) — Arşiv fotoğrafı."
      }
    ],
    "summary": "17 Mart 1973’te Urus-Martan’ın tangi-çu köyünde doğdu ve belgato taypına mensuptu. Genç yaşta Çeçen halkının özgürlük ve bağımsızlık mücadelesi saflarında yer Aldı.",
    "bio": [
      "17 Mart 1973’te Urus-Martan’ın tangi-çu köyünde doğdu ve belgato taypına mensuptu. Genç yaşta Çeçen halkının özgürlük ve bağımsızlık mücadelesi saflarında yer Aldı.",
      "Ekim 1994’te Rus istihbaratı destekli gantemirov paralı güçlerine karşı harekete geçti. Altı silah arkadaşıyla Gehi’deki işgal edilmiş füze üssünü kurtarma baskınına öncülük etti. Ekim 1994’te Gehi füze üssü çatışmasında yirmi bir yaşında kahramanca şehit düştü."
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
    "image": "/images/people/zambek-isayev.webp",
    "gallery": [
      {
        "src": "/images/people/zambek-isayev.webp",
        "caption": "Zambek İsayev (1960–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1960 yılında dünyaya geldi, Sernovodsk beldesindendi ve köklü Dişni taypına mensuptu. Silah arkadaşları arasında ‘Kaga’ lakabıyla tanınan cesur ve tecrübeli bir mücahitti.",
    "bio": [
      "1960 yılında dünyaya geldi, Sernovodsk beldesindendi ve köklü Dişni taypına mensuptu. Silah arkadaşları arasında ‘Kaga’ lakabıyla tanınan cesur ve tecrübeli bir mücahitti.",
      "İkinci rus-çeçen savaşı’nda vatan topraklarını Rus işgaline karşı ön cephede savundu. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyüne açılan stratejik vadi girişini tuttu. Mart 2000’de Saadi-Kotar vadisi girişinde işgalcilerle çarpışarak kahramanca şehit düştü."
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
    "image": "/images/people/islam-baysangurov.webp",
    "gallery": [
      {
        "src": "/images/people/islam-baysangurov.webp",
        "caption": "İslam Baysangurov (1978–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1978 yılında Çeçenistan’ın batısındaki Sernovodskoye’de doğdu ve terlo taypına mensuptu. Gençliğinin baharında Çeçen İçkerya Cumhuriyeti’ni savunmak için direniş saflarına katıldı.",
    "bio": [
      "1978 yılında Çeçenistan’ın batısındaki Sernovodskoye’de doğdu ve terlo taypına mensuptu. Gençliğinin baharında Çeçen İçkerya Cumhuriyeti’ni savunmak için direniş saflarına katıldı.",
      "İkinci rus-çeçen savaşı’nda ağır kış kuşatması ve cephe muharebelerinde görev Aldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyünde ezici Rus kuşatmasına karşı direndi. Mart 2000’de henüz yirmi iki yaşındayken Saadi-Kotar’da kahramanca şehit düştü."
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
    "image": "/images/people/balavdi-movsarov.webp",
    "gallery": [
      {
        "src": "/images/people/balavdi-movsarov.webp",
        "caption": "Balavdi Movsarov (1974–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1974 yılında doğdu, savaş öncesinden itibaren gelayev’in Özel ‘Borz’ birliğinde görev Aldı. Birinci rus-çeçen savaşı’nda Komutan hamzat gelayev ile birçok ağır cephede çarpıştı.",
    "bio": [
      "1974 yılında doğdu, savaş öncesinden itibaren gelayev’in Özel ‘Borz’ birliğinde görev Aldı. Birinci rus-çeçen savaşı’nda Komutan hamzat gelayev ile birçok ağır cephede çarpıştı.",
      "Şubat 2000’de başkent Cahar’dan mayın tarlasını hamzat gelayev ile omuz omuza yürüyerek aştı. Saadi-Kotar’da mahzendeki gelayev ve mücahitleri ezmek isteyen Rus tankını imha etti. Mart 2000’de Saadi-Kotar’da başını eğmeden son nefesine dek vuruşarak şehit düştü."
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
    "image": "/images/people/yusuf-gobi.webp",
    "gallery": [
      {
        "src": "/images/people/yusuf-gobi.webp",
        "caption": "Yusuf Gobi (1972–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1972 yılında başkent Cahar’ın karpinka semtinde doğdu ve phamto taypına mensuptu. Çeçen direnişi saflarında Emir şadid komutasındaki birlikte ön cephe mücahidi olarak savaştı.",
    "bio": [
      "1972 yılında başkent Cahar’ın karpinka semtinde doğdu ve phamto taypına mensuptu. Çeçen direnişi saflarında Emir şadid komutasındaki birlikte ön cephe mücahidi olarak savaştı.",
      "İkinci rus-çeçen savaşı’nda başkent Cahar savunması ve kış yarma harekâtına katıldı. Mart 2000’de Saadi-Kotar (Komsomolskoye) köyündeki çetin savunma mevzilerinde vuruştu. Mart 2000’de Saadi-Kotar direnişinde vatanı ve inancı uğruna şehit düştü."
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
    "image": "/images/people/ismail-razakov.webp",
    "gallery": [
      {
        "src": "/images/people/ismail-razakov.webp",
        "caption": "İsmail Razakov (1969–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1969 yılında Grozni bölgesinin ilinovka köyünde doğdu ve ‘Emir bagram’ lakabıyla tanındı. Birinci rus-çeçen savaşı’ndan itibaren ön cephede birliklere komuta eden cesur bir emirdi.",
    "bio": [
      "1969 yılında Grozni bölgesinin ilinovka köyünde doğdu ve ‘Emir bagram’ lakabıyla tanındı. Birinci rus-çeçen savaşı’ndan itibaren ön cephede birliklere komuta eden cesur bir emirdi.",
      "Çatışmalarda bir gözünü kaybetmesine rağmen cepheden ayrılmayıp mücadeleyi sürdürdü. İkinci rus-çeçen savaşı’nın en ağır kış muharebelerinde mücahitlere öncülük etti. Şubat 2000’de Rus işgalcilere karşı yürütülen kış direnişinde kahramanca şehit düştü."
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
    "image": "/images/people/rasid-molayev.webp",
    "gallery": [
      {
        "src": "/images/people/rasid-molayev.webp",
        "caption": "Raşid Molayev (1960–2021) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1960 yılında doğdu, özgürlük yoluna baş koyan köklü Molayev ailesinin mensubuydu. Her iki rus-çeçen savaşı’na da ilk günden itibaren kardeşleriyle birlikte ön cephede katıldı.",
    "bio": [
      "1960 yılında doğdu, özgürlük yoluna baş koyan köklü Molayev ailesinin mensubuydu. Her iki rus-çeçen savaşı’na da ilk günden itibaren kardeşleriyle birlikte ön cephede katıldı.",
      "Kardeşinin 2004’teki şehadetinin ardından da yıllarca dağlarda direniş sancağını bırakmadı. Çeçen mücahitlerin emiri hamzat (Aslan bütükayev) ile birlikte zorlu kış şartlarında direndi. 20 Ocak 2021’de katar-yurt yakınlarında düşmanın hain pususunda şehit düştü."
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
    "image": "/images/people/isa-bazurkayev.webp",
    "gallery": [
      {
        "src": "/images/people/isa-bazurkayev.webp",
        "caption": "İsa Bazurkayev (1979–2021) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1979 yılında Çeçenistan’da dünyaya geldi ve direnişte ‘İsak’ lakabıyla tanındı. 2006 yılından itibaren Rus işgal güçlerinin on beş yıl boyunca yakalayamadığı bir mücahitti.",
    "bio": [
      "1979 yılında Çeçenistan’da dünyaya geldi ve direnişte ‘İsak’ lakabıyla tanındı. 2006 yılından itibaren Rus işgal güçlerinin on beş yıl boyunca yakalayamadığı bir mücahitti.",
      "Dağlardaki dondurucu kışlara ve tam kuşatmaya rağmen sarsılmaz bir imanla yaşadı. Emir hamzat (Aslan bütükayev) komutasındaki son direniş birliğinde omuz omuza görev Aldı. 20 Ocak 2021’de katar-yurt bölgesinde silah arkadaşlarıyla birlikte şehit düştü."
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
    "image": "/images/people/vahit-darsayev.webp",
    "gallery": [
      {
        "src": "/images/people/vahit-darsayev.webp",
        "caption": "Vahit Darşayev (1987–2021) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1987 yılında Çeçenistan’da doğdu ve mücahitler arasında ‘Basri’ lakabıyla bilindi. Genç yaşta işgalcilerin zulmüne boyun eğmeyerek Çeçenistan dağlarındaki direnişe katıldı.",
    "bio": [
      "1987 yılında Çeçenistan’da doğdu ve mücahitler arasında ‘Basri’ lakabıyla bilindi. Genç yaşta işgalcilerin zulmüne boyun eğmeyerek Çeçenistan dağlarındaki direnişe katıldı.",
      "Yıllar süren ağır mahrumiyet, soğuk ve takibe karşı ahdi ve imanından taviz vermedi. Emir hamzat (Aslan bütükayev) ve dört sadık yoldaşıyla son nefesine kadar birlikte kaldı. 20 Ocak 2021’de katar-yurt civarındaki gizli üste hain komployla şehit düştü."
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
    "image": "/images/people/samhan-saraliyev.webp",
    "gallery": [
      {
        "src": "/images/people/samhan-saraliyev.webp",
        "caption": "Şamhan Saraliyev (1996–2021) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1996 yılında Çeçenistan’da dünyaya geldi, aslambek Saraliyev’in kahraman oğluydu. Henüz gençliğinin ilk yıllarında dünya rahatını terk ederek özgürlük mücadelesine katıldı.",
    "bio": [
      "1996 yılında Çeçenistan’da dünyaya geldi, aslambek Saraliyev’in kahraman oğluydu. Henüz gençliğinin ilk yıllarında dünya rahatını terk ederek özgürlük mücadelesine katıldı.",
      "Kuşatma altındaki dağlarda açlık ve dondurucu soğukta yalnızca Allah’a tevekkül etti. Emir hamzat (Aslan bütükayev) yanında kıdemli gazilerle aynı siperi ve kaderi paylaştı. 20 Ocak 2021’de katar-yurt yakınlarında yirmi beş yaşında kahramanca şehit düştü."
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
    "image": "/images/people/turpal-ali-mejidov.webp",
    "gallery": [
      {
        "src": "/images/people/turpal-ali-mejidov.webp",
        "caption": "Turpal-Ali Mejidov (1990–2026) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1990 yılında Gudermes’te doğdu, ihlası ve cesaretiyle tanınan yiğit bir Çeçen Konah’ıydı. İnsanları tedavi etti, kutsal topraklara ziyaretler düzenledi ve İslami davet çalışmaları yaptı.",
    "bio": [
      "1990 yılında Gudermes’te doğdu, ihlası ve cesaretiyle tanınan yiğit bir Çeçen Konah’ıydı. İnsanları tedavi etti, kutsal topraklara ziyaretler düzenledi ve İslami davet çalışmaları yaptı.",
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
    "image": "/images/people/leca-cemnigov.webp",
    "gallery": [
      {
        "src": "/images/people/leca-cemnigov.webp",
        "caption": "Leça Cemnigov (1972–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1972 yılında Çeçenistan’ın oyshara beldesinde sayd-muhammed Cemnigov’un oğlu olarak doğdu. Genç yaşta Çeçen halkının özgürlük ve bağımsızlık mücadelesi saflarında yer Aldı.",
    "bio": [
      "1972 yılında Çeçenistan’ın oyshara beldesinde sayd-muhammed Cemnigov’un oğlu olarak doğdu. Genç yaşta Çeçen halkının özgürlük ve bağımsızlık mücadelesi saflarında yer Aldı.",
      "Her iki rus-çeçen savaşı’nda da vatan topraklarını Rus işgal ordularına karşı cesurca savundu. 1999–2000 kışında kuşatma altındaki başkent Cahar-Kala savunma mevzilerinde çarpıştı. 13 Ocak 2000’de başkent Cahar savunmasında yirmi sekiz yaşında kahramanca şehit düştü."
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
    "image": "/images/people/yusuf-temirhanov.webp",
    "gallery": [
      {
        "src": "/images/people/yusuf-temirhanov.webp",
        "caption": "Yusuf Temirhanov (1972–2018) — Arşiv fotoğrafı."
      }
    ],
    "summary": "6 Mayıs 1972’de Geldagan köyünde doğdu ve Çeçen halkı arasında ‘Milletin onuru’ olarak anıldı. Masum Çeçen kızı elza kungayeva’yı katleden Rus Albay budanov’dan milletin intikamını almaya and içti.",
    "bio": [
      "6 Mayıs 1972’de Geldagan köyünde doğdu ve Çeçen halkı arasında ‘Milletin onuru’ olarak anıldı. Masum Çeçen kızı elza kungayeva’yı katleden Rus Albay budanov’dan milletin intikamını almaya and içti.",
      "10 Haziran 2011’de Moskova’da savaş suçlusu Albay budanov’u cezalandırarak adaleti sağladı. Yıllarca Rus cezaevlerindeki ağır işkencelere rağmen vakarıyla asla boyun eğmeden direndi. 3 Ağustos 2018’de Rus esaretinde halkının onur sembolü olarak kahramanca şehit düştü."
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
    "image": "/images/people/apti-cabrailov.webp",
    "gallery": [
      {
        "src": "/images/people/apti-cabrailov.webp",
        "caption": "Apti Cabrailov (1975–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1975 yılında Şali’de doğdu, direnişte ‘Emir cundullah’ ismiyle tanınan cesur bir Komutandı. 1997’de Şeriat Muhafızlarında emirlik yaptı ve muhammed tsagarayev’in sağ kolu oldu.",
    "bio": [
      "1975 yılında Şali’de doğdu, direnişte ‘Emir cundullah’ ismiyle tanınan cesur bir Komutandı. 1997’de Şeriat Muhafızlarında emirlik yaptı ve muhammed tsagarayev’in sağ kolu oldu.",
      "1999’da ağır yaralanmasına rağmen iyileşip Şali ve Hasavyurt sektörlerinden sorumlu Emir oldu. Başkent Cahar’daki Rus işgal güçlerine ve işbirlikçilere karşı sayısız başarılı baskın yönetti. 22 Ocak 2002’de Cahar 56. bölgede şarjörünü son mermisine dek boşaltarak şehit düştü."
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
    "image": "/images/people/rustam-labazanov.webp",
    "gallery": [
      {
        "src": "/images/people/rustam-labazanov.webp",
        "caption": "Rustam Labazanov (1976–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1976 yılında başkent Cahar’da doğdu, Galay taypına mensuptu ve umar Labazanov’un kuzeniydi. Kuzeni umar’ın Mart 2000’deki şehadetinin ardından ‘Emir şadid’ lakabını devralarak sancak tuttu.",
    "bio": [
      "1976 yılında başkent Cahar’da doğdu, Galay taypına mensuptu ve umar Labazanov’un kuzeniydi. Kuzeni umar’ın Mart 2000’deki şehadetinin ardından ‘Emir şadid’ lakabını devralarak sancak tuttu.",
      "Cahar Cemaati Emir yardımcısı olarak başkentteki Özel direniş hücrelerini ve operasyonları yönetti. 22 Ocak 2002’de kuşatıldığında cemaat emaneti düşmana kalmasın diye paraları tek tek yırttı. 22 Ocak 2002’de Cahar 56. bölgede esir düşmemek için bombasını patlatarak şehit düştü."
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
    "image": "/images/people/ilyas-zakriyev.webp",
    "gallery": [
      {
        "src": "/images/people/ilyas-zakriyev.webp",
        "caption": "İlyas Zakriyev (1980–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1980 yılında Çeçenistan’ın Prigorodnoye köyünde doğdu ve genç yaşta direnişe katıldı. Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri bünyesinde Prigorodnoye Cemaati emiri olarak görev yaptı.",
    "bio": [
      "1980 yılında Çeçenistan’ın Prigorodnoye köyünde doğdu ve genç yaşta direnişe katıldı. Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri bünyesinde Prigorodnoye Cemaati emiri olarak görev yaptı.",
      "İkinci rus-çeçen savaşı’nda başkent Cahar ve çevresindeki stratejik hatlarda cihad yürüttü. İPON emiri murad yusufhaciyev ile omuz omuza işgalci Rus birliklerine ağır kayıplar verdirdi. 2 Ekim 2002 şafağında Cahar’da eşitsiz çatışmada yirmi iki yaşında kahramanca şehit düştü."
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
    "image": "/images/people/emir-abuzar.webp",
    "gallery": [
      {
        "src": "/images/people/emir-abuzar.webp",
        "caption": "Emir Abuzar (1978–2004) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1978 yılında Argun şehrinde dünyaya geldi ve direnişte ‘Gerat’ savaş lakabıyla tanındı. Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri Argun sektörü cemaat emiri olarak birliklere komuta etti.",
    "bio": [
      "1978 yılında Argun şehrinde dünyaya geldi ve direnişte ‘Gerat’ savaş lakabıyla tanındı. Çeçen İçkerya Cumhuriyeti Silahlı Kuvvetleri Argun sektörü cemaat emiri olarak birliklere komuta etti.",
      "Temmuz 2004’te Emir hamas ile birlikte Argun’daki işgalci güçlere hedefli harekât başlattı. İki gün süren çarpışmalarda iki Rus zırhlısını imha edip onlarca işgalciyi etkisiz kıldı. 29 Temmuz 2004’te Argun’daki eşitsiz çatışmada yirmi altı yaşında kahramanca şehit düştü."
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
    "image": "/images/people/olhazar-bibulatov.webp",
    "gallery": [
      {
        "src": "/images/people/olhazar-bibulatov.webp",
        "caption": "Olhazar Bibulatov (1955–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "8 Mart 1955’te katır-yurt köyünde doğdu, naşho taypına mensuptu ve şehit ruslan Bibulatov’un babasıydı. Birinci rus-çeçen savaşı’nda katır-yurt müfrezesi Komutanı ve bölge Komutanı olarak görev yaptı.",
    "bio": [
      "8 Mart 1955’te katır-yurt köyünde doğdu, naşho taypına mensuptu ve şehit ruslan Bibulatov’un babasıydı. Birinci rus-çeçen savaşı’nda katır-yurt müfrezesi Komutanı ve bölge Komutanı olarak görev yaptı.",
      "31 Aralık 1994 yılbaşı hücumunda başkent Cahar’da Başkanlık Sarayı ve kavkaz oteli’ni savundu. Bamut, yandi-kotar ve aşhoy-kotar cephelerinde Güneybatı direniş hattının ön saflarında çarpıştı. 11 Haziran 1995’te zonah köyü yakınlarında Rus zırhlı kolonunu imha ederken şehit düştü."
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
    "image": "/images/people/arsen-mejidov.webp",
    "gallery": [
      {
        "src": "/images/people/arsen-mejidov.webp",
        "caption": "Arsen Mejidov (1984–2004) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1984 yılında Çeçenistan’ın Açhoy-Martan şehrinde doğdu ve imanlı bir ailede yetişti. İkinci rus-çeçen savaşı başladığında henüz on altı yaşındayken silahlanarak cepheye çıktı.",
    "bio": [
      "1984 yılında Çeçenistan’ın Açhoy-Martan şehrinde doğdu ve imanlı bir ailede yetişti. İkinci rus-çeçen savaşı başladığında henüz on altı yaşındayken silahlanarak cepheye çıktı.",
      "Dört yıl boyunca Açhoy-Martan ve Batı cephesi dağlarında Rus işgalcilere karşı savaştı. Genç yaşına rağmen çetin kış şartlarında ve kuşatmalarda büyük bir cesaret örneği sergiledi. 23 Şubat 2004 sürgün yıl dönümünde yirmi yaşında çarpışarak kahramanca şehit düştü."
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
    "image": "/images/people/kazbek-gisnurkayev.webp",
    "gallery": [
      {
        "src": "/images/people/kazbek-gisnurkayev.webp",
        "caption": "Kazbek Gişnurkayev (1982–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1982 yılında Çeçenistan’ın direniş kalesi Açhoy-Martan’da dünyaya geldi ve büyüdü. İkinci rus-çeçen savaşı’nın ilk günlerinden itibaren genç yoldaşlarıyla cihad saflarına katıldı.",
    "bio": [
      "1982 yılında Çeçenistan’ın direniş kalesi Açhoy-Martan’da dünyaya geldi ve büyüdü. İkinci rus-çeçen savaşı’nın ilk günlerinden itibaren genç yoldaşlarıyla cihad saflarına katıldı.",
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
    "image": "/images/people/muhammed-guluyev.webp",
    "gallery": [
      {
        "src": "/images/people/muhammed-guluyev.webp",
        "caption": "Muhammed Guluyev (1977–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1977 yılında tsa-vedeno’da doğdu, dokuz yaşında hafız oldu ve ‘Ustaz Muhammed’ lakabıyla tanındı. 1994’te on yedi yaşında cepheye çıktı, şehit cumhurbaşkanı abdul-halim sadulayev’in talebesiydi.",
    "bio": [
      "1977 yılında tsa-vedeno’da doğdu, dokuz yaşında hafız oldu ve ‘Ustaz Muhammed’ lakabıyla tanındı. 1994’te on yedi yaşında cepheye çıktı, şehit cumhurbaşkanı abdul-halim sadulayev’in talebesiydi.",
      "1997–1998 yıllarında Şeriat mahkemelerinde görev yaptı, vaazları ve kur’an tilavetiyle gençleri eğitti. 2000’de ağır yaralanıp tedavi görmesine rağmen rahatı seçmeyip Argun Cemaati saflarına geri döndü. 7 Ocak 2002’de Argun’da yoldaşlarını korumak için el bombasıyla geride kalarak şehit düştü."
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
    "image": "/images/people/ismail-eskiyev.webp",
    "gallery": [
      {
        "src": "/images/people/ismail-eskiyev.webp",
        "caption": "İsmail Eskiyev (1973–2003) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1973 yılında Argun’da doğdu, çermoy taypına mensuptu ve direnişte ‘Emir salah’ diye tanındı. Ağustos 1996 cihad harekâtı’nda ve cundullah İslam Tugayı bünyesinde Rus işgalcilere karşı çarpıştı.",
    "bio": [
      "1973 yılında Argun’da doğdu, çermoy taypına mensuptu ve direnişte ‘Emir salah’ diye tanındı. Ağustos 1996 cihad harekâtı’nda ve cundullah İslam Tugayı bünyesinde Rus işgalcilere karşı çarpıştı.",
      "Şubat 2000 Cahar çıkışında eşi meryem’i bombardımana karşı siper ederken bir elini kaybetti. Ocak 2002’de başından vurulup geçici körlük yaşasa da iyileşip Argun sektörü Komutanlığını üstlendi. 30 Temmuz 2003’te Argun’da kuşatıldığı evde teslim olmayıp çarpışarak şehit düştü."
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
    "image": "/images/people/apti-takayev.webp",
    "gallery": [
      {
        "src": "/images/people/apti-takayev.webp",
        "caption": "Apti Takayev (1968–1995) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1968 yılında Urus-Martan’da doğdu, Gendargenoy taypına mensup yiğit bir Çeçen Komutan olarak yetişti. Çeçen İçkerya Cumhuriyeti Başkanlık Muhafızları Özel kuvvetler birliği Komutanlığı görevini yürüttü.",
    "bio": [
      "1968 yılında Urus-Martan’da doğdu, Gendargenoy taypına mensup yiğit bir Çeçen Komutan olarak yetişti. Çeçen İçkerya Cumhuriyeti Başkanlık Muhafızları Özel kuvvetler birliği Komutanlığı görevini yürüttü.",
      "İlk cumhurbaşkanı Cahar dudayev’in sadık bir silah arkadaşı olarak başkent Cahar savunmasına katıldı. 1994–1995 kışında başkent Cahar’ın en tehlikeli cephe hatlarında savaşçılarına bizzat öncülük etti. 1 Ocak 1995’te Cahar sokaklarında Rus zırhlılarına karşı çarpışırken kahramanca şehit düştü."
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
    "image": "/images/people/idris-bakarov.webp",
    "gallery": [
      {
        "src": "/images/people/idris-bakarov.webp",
        "caption": "İdris Bakarov (1964–1999) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1964 yılında Vedeno’nun mahketı köyünde doğdu ve Çeçenistan’ın köklü haraçoy taypına mensuptu. İslami ahlakı, cesareti ve bilgeliğiyle halkı arasında büyük bir saygı ve itibar kazandı.",
    "bio": [
      "1964 yılında Vedeno’nun mahketı köyünde doğdu ve Çeçenistan’ın köklü haraçoy taypına mensuptu. İslami ahlakı, cesareti ve bilgeliğiyle halkı arasında büyük bir saygı ve itibar kazandı.",
      "Belgatoy köyü emiri olarak toplumun manevi birliğini ve kardeşlik hukukunu omuzladı. Rus işgaline karşı Çeçen halkının özgürlük ve iman mücadelesinde öncü bir lider olarak yer Aldı. 1999 yılında vatan ve iman uğrunda yürüttüğü cihadda kahramanca şehit düştü."
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
    "image": "/images/people/timur-aslambekov.webp",
    "gallery": [
      {
        "src": "/images/people/timur-aslambekov.webp",
        "caption": "Timur Aslambekov (1981–2005) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1981 yılında başkent Cahar’da büyüdü ve direniş saflarında ‘Kartal’ savaş lakabıyla tanındı. On yedi yaşında direnişe katıldı, Emir hattab’ın eğitim kampında uzman rpg nişancısı olarak yetişti.",
    "bio": [
      "1981 yılında başkent Cahar’da büyüdü ve direniş saflarında ‘Kartal’ savaş lakabıyla tanındı. On yedi yaşında direnişe katıldı, Emir hattab’ın eğitim kampında uzman rpg nişancısı olarak yetişti.",
      "İki kez yakalanıp ağır işkenceler görmesine rağmen üçüncü kez canlı yakalanmamaya yemin etti. Emir musa madayev Cemaati saflarında başkent Cahar’daki işgalcilere karşı operasyonlara katıldı. 11 Ekim 2005’te Cahar mayakovski’de eşiyle birlikte son nefesine dek çarpışarak şehit düştü."
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
    "image": "/images/people/muhammed-tagirov.webp",
    "gallery": [
      {
        "src": "/images/people/muhammed-tagirov.webp",
        "caption": "Muhammed Tagirov (1977–2001) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1977 yılında başkent Cahar’ın staraya sunja beldesinde doğdu ve imanlı bir genç olarak yetişti. İkinci rus-çeçen savaşı başladığında vatan topraklarını savunmak üzere cihad saflarına katıldı.",
    "bio": [
      "1977 yılında başkent Cahar’ın staraya sunja beldesinde doğdu ve imanlı bir genç olarak yetişti. İkinci rus-çeçen savaşı başladığında vatan topraklarını savunmak üzere cihad saflarına katıldı.",
      "Staraya sunja ve Argun direniş hatlarında mücahid kardeşleriyle omuz omuza işgalcilere karşı vuruştu. Kuşatma altındaki şehirlerde yürüttüğü cesur baskınlarla Rus birliklerine kayıplar verdirdi. 8 Kasım 2001’de Argun’da Rus işgal güçleriyle çıkan çatışmada kahramanca şehit düştü."
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
    "image": "/images/people/zelim-elmurzayev.webp",
    "gallery": [
      {
        "src": "/images/people/zelim-elmurzayev.webp",
        "caption": "Zelim Elmurzayev (1979–2004) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1979 yılında Urus-Martan şehrinde doğdu, gözü pek cesareti ve atılgan karakteriyle tanındı. İkinci rus-çeçen savaşı’nda halkını ve vatan topraklarını savunmak için silaha sarıldı.",
    "bio": [
      "1979 yılında Urus-Martan şehrinde doğdu, gözü pek cesareti ve atılgan karakteriyle tanındı. İkinci rus-çeçen savaşı’nda halkını ve vatan topraklarını savunmak için silaha sarıldı.",
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
    "image": "/images/people/islam-lecayev.webp",
    "gallery": [
      {
        "src": "/images/people/islam-lecayev.webp",
        "caption": "İslam Leçayev (1984–2002) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1984 yılında Çeçenistan’da doğdu, direniş saflarında ‘Sayf-İslam’ savaş lakabıyla tanındı. Henüz on sekiz yaşındayken muhammed-said cansayev ve bilal halidov ile omuz omuza savaştı.",
    "bio": [
      "1984 yılında Çeçenistan’da doğdu, direniş saflarında ‘Sayf-İslam’ savaş lakabıyla tanındı. Henüz on sekiz yaşındayken muhammed-said cansayev ve bilal halidov ile omuz omuza savaştı.",
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
    "image": "/images/people/muhammed-denilhanov.webp",
    "gallery": [
      {
        "src": "/images/people/muhammed-denilhanov.webp",
        "caption": "Muhammed Denilhanov (1974–2000) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1974 yılında Alhan-Yurt köyünde doğdu, kurşlo taypına mensuptu ve ‘Madi’ lakabıyla tanındı. Her iki rus-çeçen savaşı’nda da vatan topraklarını işgalcilere karşı savunan yiğitlerdendi.",
    "bio": [
      "1974 yılında Alhan-Yurt köyünde doğdu, kurşlo taypına mensuptu ve ‘Madi’ lakabıyla tanındı. Her iki rus-çeçen savaşı’nda da vatan topraklarını işgalcilere karşı savunan yiğitlerdendi.",
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
    "image": "/images/people/arsen-tsumayev.webp",
    "gallery": [
      {
        "src": "/images/people/arsen-tsumayev.webp",
        "caption": "Arsen Tsumayev (1981–2004) — Arşiv fotoğrafı."
      }
    ],
    "summary": "1981 yılında Çeçenistan’ın Açhoy-Martan bölgesinde doğdu ve yurtsever bir ailede yetişti. İkinci rus-çeçen savaşı’nda genç yaşta direniş saflarına katılarak Silahlı mücadeleye başladı.",
    "bio": [
      "1981 yılında Çeçenistan’ın Açhoy-Martan bölgesinde doğdu ve yurtsever bir ailede yetişti. İkinci rus-çeçen savaşı’nda genç yaşta direniş saflarına katılarak Silahlı mücadeleye başladı.",
      "Açhoy-Martan ve Batı cephesi birimlerinde mücahid kardeşleriyle omuz omuza işgalcilere karşı vuruştu. Zorlu kuşatma ve kış şartlarında sarsılmaz imanı ve tebessümüyle yoldaşlarına moral kaynağı oldu. 2004 yılında Açhoy-Martan’da Rus işgal güçleriyle çatışmada kahramanca şehit düştü."
    ]
  }
];

export const getPerson = (slug: string) => PEOPLE.find((p) => p.slug === slug);

/* ------------------------------------------------------------------ */
/* ARŞİV                                                               */
/* ------------------------------------------------------------------ */

export type DocType = "el-yazmasi" | "fotograf" | "harita" | "resmi-belge" | "kitap";

export const DOC_TYPES: { id: DocType; label: string; count: string }[] = [
  { id: "el-yazmasi", label: "El Yazmaları", count: "1.340 belge" },
  { id: "fotograf", label: "Fotoğraflar", count: "2.850 fotoğraf" },
  { id: "harita", label: "Haritalar", count: "420 harita" },
  { id: "resmi-belge", label: "Resmi Belgeler", count: "860 belge" },
  { id: "kitap", label: "Kitap ve Yayınlar", count: "310 eser" },
];

export type ArchiveDoc = {
  slug: string;
  title: string;
  type: DocType;
  year: number;
  dateLabel: string;
  era: Era;
  region: string;
  language: string;
  source: string;
  catalogNo: string;
  image: string;
  description: string;
  transcription?: string;
  translation?: string;
  notes?: string;
};

export const DOCS: ArchiveDoc[] = [
  {
    slug: "kule-ici-yazma-kodeks",
    title: "Vaynah Kule İçi El Yazması Kodeksi ve Mühürlü Ahitname",
    type: "el-yazmasi",
    year: 1848,
    dateLabel: "1848 (1264 H.)",
    era: "imamet",
    region: "İnguşetya – Çeçenya (Targim – Vedeno)",
    language: "Arapça (Kafkas Neshi) ve Vaynah Notları",
    source: "Targim Kule Mahzeni Özel Fonu",
    catalogNo: "TRG-MS-1848-019",
    image: "/images/hf-ic-arsiv-yazmalar.jpg",
    description:
      "Taş savaş kulesinin üst mahzen odasında gaz lambası ve meşe raflar arasında asırlarca korunan deri ciltli yazma kodeksler, açık parşömen varaklar ve kırmızı mum mühürlü teyp ahitnamesi.",
    transcription:
      "بسم الله الرحمن الرحيم\nهذا كتاب العهد والأمانة المحفوظ في برج تارغيم الأعلى بين قبائل الجبال، شهادةً على حدود المراعي وحقوق الضيف وصيانة الديار...\nسنة ١٢٦٤ هـ",
    translation:
      "Rahman ve Rahim olan Allah'ın adıyla.\nBu belge; yayla sınırları, misafir dokunulmazlığı ve ata ocaklarının müşterek muhafazası üzerine dağ teypleri arasında akdedilip Yukarı Targim Kulesi'nde emanete alınan ahitname ve vakfiye kaydıdır...\nHicri 1264 (Miladi 1848).",
    notes:
      "Kayış tokalı kalın dana derisi ciltler, el yapımı parşömen varaklar ve sağ alt yaprakta kabartma kırmızı mum mühür baskısı; kule mazgal penceresinden süzülen doğal ışık altında belgelenmiştir.",
  },
  {
    slug: "samil-donemi-mektup",
    title: "İmamet Divanı Mektubu (1261 H. / 1845)",
    type: "el-yazmasi",
    year: 1845,
    dateLabel: "1845 (1261 H.)",
    era: "imamet",
    region: "Dağıstan – Çeçenya",
    language: "Arapça (Kafkas Neshi)",
    source: "Targim El Yazmaları Fonu",
    catalogNo: "TRG-MS-1845-014",
    image: "/images/doc-letter.jpg",
    description:
      "Dargo ve Vedeno hattındaki naiplere hitaben kaleme alınmış, kırmızı mum mühürlü İmamet dönemi resmi mektubu. Kuzey Kafkasya'da Arapçanın bölgeler üstü resmi yazışma dili olarak kullanımını belgeler.",
    transcription:
      "بسم الله الرحمن الرحيم\nمن جبال القوقاز إلى إخواننا النواب والمجاهدين في ولايات شيشان وداغستان، السلام عليكم ورحمة الله وبركاته.\nأما بعد، فأوصيكم بتقوى الله والعدل بين الرعية وحفظ الثغور في الأودية والجبال...\nحرر في سنة ١٢٦١ هـ",
    translation:
      "Rahman ve Rahim olan Allah'ın adıyla.\nKafkas dağlarından Çeçenya ve Dağıstan vilayetlerindeki naip kardeşlerimize ve mücahitlere; Allah'ın selâmı, rahmeti ve bereketi üzerinize olsun.\nBundan sonra; sizlere Allah'tan sakınmayı, ahali arasında tam adaletle hükmetmeyi ve vadiler ile dağ geçitlerindeki nöbet noktalarını muhafaza etmeyi vasiyet ederim...\nHicri 1261 (Miladi 1845) senesinde kaleme alındı.",
    notes:
      "El yapımı pamuklu paçavra kâğıt üzerine kamış kalem ve is mürekkebi. Sağ alt köşede İmamet divanına mahsus kırmızı mum mühür baskısı yer almaktadır.",
  },
  {
    slug: "kafkasya-haritasi-1871",
    title: "Büyük Kafkasya Dağlık Bölge Haritası",
    type: "harita",
    year: 1871,
    dateLabel: "1871",
    era: "imparatorluk",
    region: "Kuzey Kafkasya",
    language: "Rusça (Eski İmla)",
    source: "Tarihi Kartografya Koleksiyonu",
    catalogNo: "TRG-MP-1871-003",
    image: "/images/doc-map.jpg",
    description:
      "Karadeniz'den Hazar Denizi'ne uzanan Büyük Kafkas sıradağlarını, Vladikavkaz, Temir-Han-Şura, Derbent ve Tiflis bağlantılarıyla gösteren 1871 tarihli askeri topografya haritası.",
    transcription:
      "КАРТА ГОРНОЙ ЧАСТИ ВЕЛИКОГО КАВКАЗА\nСоставлена по съемкамъ военныхъ топографовъ 1871 года.\nМасштабъ въ 40 верстъ въ дюймѣ.",
    translation:
      "BÜYÜK KAFKASYA DAĞLIK KISIM HARİTASI\n1871 yılı askeri topograflarının saha ölçümlerine dayanılarak hazırlanmıştır.\nÖlçek: İnç başına 40 verst.",
    notes:
      "Sırt taramalı rölyef tekniğiyle basılmış katlanır keten sırtlı harita paftası; sağ üst lejantta kale, istihkâm, kervan yolu ve dağ geçidi işaretleri gösterilmiştir.",
  },
  {
    slug: "surgun-listeleri-1944",
    title: "23 Şubat 1944 Sürgün Sevk Fotoğrafı ve Kayıtları",
    type: "resmi-belge",
    year: 1944,
    dateLabel: "Şubat 1944",
    era: "sovyet",
    region: "Çeçen-İnguş ÖSSC",
    language: "Rusça / Sözlü Tanıklık",
    source: "Sürgün Hafıza ve Tanıklık Fonu",
    catalogNo: "TRG-EX-1944-089",
    image: "/images/doc-surgun.jpg",
    description:
      "23 Şubat 1944 sabahı ağır kış koşullarında yük vagonlarına bindirilerek Orta Asya ve Kazakistan bozkırlarına sevk edilen Çeçen ve İnguş ailelerin yola çıkışını belgeleyen arşiv kaydı.",
    translation:
      "Kayıt Özeti — İstasyon Sevk Tutanağı (Şubat 1944):\nDağ köylerinden indirilen hanelerin hane reisleri, yaşlılar ve çocuklarla birlikte kışlık erzak alamadan vagonlara nakli. Tanıklık notu: 'Kar altında yürürken yaşlılarımız yanlarına yalnızca Kur'an-ı Kerim ve bir avuç vatan toprağı alabildi.'",
    notes:
      "Aile mahremiyeti ilkeleri gereğince şahıs listelerinin tam dökümü yalnızca birinci derece yakınların ve akredite araştırmacıların erişimine açıktır.",
  },
  {
    slug: "targim-kuleleri-fotografi",
    title: "Targim Vadi Kuleleri Erken Dönem Cam Negatif Baskısı",
    type: "fotograf",
    year: 1890,
    dateLabel: "1890 civarı",
    era: "imparatorluk",
    region: "İnguşetya (Cerah – Assa Havzası)",
    language: "Görsel Materyal",
    source: "Kafkasya Fotoğraf Arşivi",
    catalogNo: "TRG-PH-1890-021",
    image: "/images/doc-tower.jpg",
    description:
      "Assa ve Cerah vadilerinin sarp kayalıklarında yükselen Vaynah gözetleme kuleleri, tonozlu taş yapılar ve kashi (ata mezar anıtları) bütününü belgeleyen 19. yüzyıl sonu albümin baskı fotoğraf.",
    notes:
      "Albümin kart baskı, 18×24 cm cam negatiften çoğaltılmıştır. Kule çatı silmelerindeki taş işçiliği 1944 öncesi özgün durumu yansıtır.",
  },
  {
    slug: "rus-raporu-1864",
    title: "Bab-ı Âli Muhacirîn-i Kafkasya Defteri (1281 / 1865)",
    type: "resmi-belge",
    year: 1865,
    dateLabel: "1865 (1281 H.)",
    era: "imparatorluk",
    region: "Kuzey Kafkasya – Osmanlı Toprakları",
    language: "Osmanlı Türkçesi",
    source: "Muhacirîn Komisyonu Arşiv Kopyaları",
    catalogNo: "TRG-OT-1865-042",
    image: "/images/doc-report.jpg",
    description:
      "1864–1865 büyük göç (muhaceret) dalgasında Kuzey Kafkasya'dan Anadolu, Balkanlar ve Bilâd-ı Şam'a hicret eden Çeçen, İnguş ve Çerkes kafilelerinin iskân ve iaşe kayıtlarını içeren defter ve ferman sureti.",
    transcription:
      "باب عالی — مهاجرین قفقاسیه دفتری ١٢٨١\nحضرت همایونی\nقفقاسیه اهالیسندن ممالک محروسه شاهانه یه هجرت ایدن قبائل و عائلاتك اسکان و اعاشه لری خصوصنده...",
    translation:
      "BÂB-I ÂLİ — KAFKASYA MUHACİRLERİ DEFTERİ (1281 / 1865)\nKafkasya ahalisinden Osmanlı memleketlerine hicret etmek zorunda kalan kabile ve ailelerin uygun kazalara iskânları, tohumluk ve mesken yardımlarının temini hususunda irade sureti.",
    notes:
      "Ebru kaplı deri ciltli kayıt defteri ve kırmızı mum mühürlü berat nüshası bir arada görüntülenmiştir.",
  },
  {
    slug: "imamet-dergisi-notlari",
    title: "İçkeriya Naiplik Divanı ve Zekât Kaydı",
    type: "el-yazmasi",
    year: 1850,
    dateLabel: "1850 civarı",
    era: "imamet",
    region: "Çeçenya (Vedeno)",
    language: "Arapça",
    source: "Özel Aile Koleksiyonu",
    catalogNo: "TRG-MS-1850-031",
    image: "/images/arsiv.jpg",
    description:
      "Vedeno merkezli İmamet idaresinde naipliklerin süvari teçhizatı, Beytü'l-mal gelirleri ve şehit ailelerine ayrılan payları kaydettiği deri ciltli divan defteri.",
    notes:
      "Ciltli yazma mecmua yaprakları ve bronz mühür kalıbıyla birlikte korunmuştur.",
  },
  {
    slug: "kafkas-atlasi",
    title: "Kuzey Kafkasya Topografik Rölyef Paftası",
    type: "harita",
    year: 1840,
    dateLabel: "1840 civarı",
    era: "imamet",
    region: "Kuzey Kafkasya",
    language: "Fransızca / Rusça",
    source: "Tarihi Kartografya Koleksiyonu",
    catalogNo: "TRG-MP-1840-009",
    image: "/images/atlas.jpg",
    description:
      "Daryal Boğazı, Argun Vadisi, Assa Havzası ve Dağıstan yüksek platolarındaki kule geçitlerini kabartma gölgeleme tekniğiyle betimleyen 19. yüzyıl ortası atlas paftası.",
  },
  {
    slug: "kuleler-albumu",
    title: "Cerah ve Targim Taş Kuleleri Etnografya Albümü",
    type: "kitap",
    year: 1928,
    dateLabel: "1928",
    era: "sovyet",
    region: "İnguşetya – Çeçenya",
    language: "Rusça / İnguşça",
    source: "Kafkasya Araştırmaları Kütüphanesi",
    catalogNo: "TRG-BK-1928-012",
    image: "/images/targim-towers.jpg",
    description:
      "1920'li yıllarda dağ köylerinde yürütülen arkeolojik ve etnografik keşif gezilerinde ölçülen savaş kulelerinin (vov) mimari oranlarını ve petroglyph tamgalarını derleyen monografi.",
  },
  {
    slug: "atli-birlik-fotografi",
    title: "Kafkas Süvari Alayı Arşiv Kaydı",
    type: "fotograf",
    year: 1914,
    dateLabel: "1914",
    era: "imparatorluk",
    region: "Kuzey Kafkasya",
    language: "Görsel Materyal",
    source: "Fotoğraf Arşivi",
    catalogNo: "TRG-PH-1914-055",
    image: "/images/kisiler.jpg",
    description:
      "Geleneksel çerkeska, papaha, başlık ve sancaklarıyla Kafkas atlı birliklerini dağ geçidinde gösteren tarihi fotoğraf kaydı.",
  },
  {
    slug: "el-sanatlari-katalogu",
    title: "Savatlı Gümüş, Kama ve Kemer İşçiliği Kataloğu",
    type: "kitap",
    year: 1965,
    dateLabel: "1965",
    era: "yakin",
    region: "Kuzey Kafkasya",
    language: "Rusça / Türkçe Özetli",
    source: "Maddi Kültür Kütüphanesi",
    catalogNo: "TRG-BK-1965-074",
    image: "/images/kultur.jpg",
    description:
      "Kafkas ustalarının kuşaktan kuşağa aktardığı savatlı (niello) gümüş kama (kinjal), kadın göğüslük ve kemer tokaları ile geometrik yün halı motiflerini belgeleyen müze kataloğu.",
  },
  {
    slug: "oymali-vaynah-kule-kapisi",
    title: "Oymalı Vaynah Kule Kapısı ve Demir Halkalı Kemer",
    type: "fotograf",
    year: 1740,
    dateLabel: "XVIII. Yüzyıl (1740 civarı)",
    era: "imamet",
    region: "İnguşetya (Cerah – Targim Vadisi)",
    language: "Mimari Tamga ve Petroglif",
    source: "Vaynah Mimari Miras Envanteri",
    catalogNo: "TRG-AR-1740-007",
    image: "/images/hf-oymali-kapi.jpg",
    description:
      "Yontma kireçtaşı kemer söveleri arasına oturtulmuş, Kafkas dağ silsilesi ve geometrik güneş tamgalarıyla derin oymalı, kökboyası kırmızı pigment izli ve dövme demir halkalı asırlık meşe kule kapısı.",
    notes:
      "Kapı kanadındaki üçgen dağ kabartmaları ile eşmerkezli kare tamgalar kulenin ait olduğu teypin koruyucu ocağını simgeler; dövme demir tokmak halkası özgün halindedir.",
  },
  {
    slug: "muhurlu-arsiv-sicili-1924",
    title: "Dağlık Özerk Bölge Mühürlü Köy ve Arazi Sicili (1924)",
    type: "resmi-belge",
    year: 1924,
    dateLabel: "1924",
    era: "sovyet",
    region: "Çeçen – İnguş Dağ Köyleri",
    language: "Rusça / Yerel Yer Adları Dökümü",
    source: "Kuzey Kafkasya İdari Sicil Fonu",
    catalogNo: "TRG-RG-1924-063",
    image: "/images/hf-muhurlu-evrak.jpg",
    description:
      "Ahşap arşiv masası üzerinde muhafaza edilen, mor dairevi resmi mühürlü ve çapraz kırmızı kontrol şeritli daktilo arazi tutanağı ile el cetvelli köy hane kayıt defteri.",
    translation:
      "Kayıt Özeti — Dağlık Bölge Arazi ve Kule Yerleşimleri Tasnif Tutanağı (1924):\nYukarı Assa, Armhi ve Argun havzalarındaki tarihi taş kule köylerinin mera sınırları, değirmen hakları ve hane sayılarını teyit eden mühürlü sicil yaprağı.",
    notes:
      "Sararmış 1920'ler evrak kâğıdı üzerinde mor mürekkepli resmi daire mührü, sağda el cetvelli defter fasikülü ve arka planda kilitli ahşap evrak sandığı.",
  },
  {
    slug: "targim-safak-kulesi-ve-istang",
    title: "Şafak Vakti Vaynah Savaş Kulesi ve Geometrik İstang",
    type: "fotograf",
    year: 1885,
    dateLabel: "1885 / Modern Yüksek Çözünürlüklü Belgeleme",
    era: "imparatorluk",
    region: "İnguşetya – Çeçenya Yüksek Sırtları",
    language: "Görsel ve Etnografik Materyal",
    source: "Kafkasya Mimari ve Tekstil Koleksiyonu",
    catalogNo: "TRG-PH-1885-034",
    image: "/images/hf-kule-gunbatimi.jpg",
    description:
      "Basamaklı piramidal arduvaz çatılı ve üst mazgal konsollu klasik Vaynah savaş kulesi (vov); ön plandaki kuru taş duvarda geleneksel kırmızı Kafkas geometrik şeritli koyu yün keçe/pelerin (istang) yer alır.",
    notes:
      "Kule mimarisi ile geleneksel Vaynah yün/keçe dokuma sanatının (kırmızı koçboynuzu ve basamaklı dağ bordürü) aynı tarihsel peyzaj içerisindeki bütünlüğünü gösterir.",
  },
  {
    slug: "kule-arsivi-sinematik-storyboard",
    title: "Vaynah Taş Kulesi ve İç Arşiv — 6 Sahnelik Belgeleme Paftası",
    type: "kitap",
    year: 2024,
    dateLabel: "2024 Dijital Rekonstrüksiyon",
    era: "yakin",
    region: "Kuzey Kafkasya (Targim – Argun)",
    language: "Görsel Anlatı / Mimari Kesit",
    source: "Targim Görsel-İşitsel Bellek Stüdyosu",
    catalogNo: "TRG-AV-2024-101",
    image: "/images/hf-kule-storyboard.jpg",
    description:
      "15 saniyelik sinematik kule yürüyüşünün 6 temel sahnesini bir araya getiren belgeleme paftası: (1) Sırttaki kule, (2) Taş kemerli kapı, (3) Kandilli yazma rafı, (4) Kafkas dokuması, (5) Taş koridor, (6) Mazgaldan karlı zirveler.",
    notes:
      "2688×1520 piksel çözünürlüklü 6'lı sinematik sekans paftası; 'Tanıtım Filmi İzle' bölümündeki 15 saniyelik MP4 belgeselin sahne anahtarıdır.",
  },
];

export const getDoc = (slug: string) => DOCS.find((d) => d.slug === slug);
export const docTypeLabel = (t: DocType) => DOC_TYPES.find((x) => x.id === t)?.label ?? t;

/* ------------------------------------------------------------------ */
/* ZAMAN ÇİZELGESİ                                                     */
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
    year: 1700,
    title: "Kuleler, Teypler ve Dağ Meclisleri",
    short: "Kafkasya'da direniş",
    era: "imamet",
    image: "/images/targim-towers.jpg",
    featuredOnHome: true,
    description:
      "Targim, Erzi, Vovnuşki ve Argun vadilerindeki taş kule yerleşimleri etrafında şekillenen özgür Vaynah toplulukları; Mehk-Khel (Ülke Meclisi) aracılığıyla kendi hukukunu ve bağımsızlığını korudu.",
    people: ["idris-bazorkin"],
    docs: ["targim-kuleleri-fotografi", "kuleler-albumu"],
  },
  {
    year: 1785,
    title: "Şeyh Mansur ve İlk Birlik Hareketi",
    short: "İmamet hareketi",
    era: "imamet",
    image: "/images/kisiler.jpg",
    featuredOnHome: true,
    description:
      "Aldılı Şeyh Mansur'un (Uşurma) çağrısıyla başlayan hareket, Temmuz 1785'te Sunja Nehri kıyısında kazanılan zaferle Kuzey Kafkasya halklarını ilk kez ortak bir direniş cephesinde birleştirdi.",
    people: ["seyh-mansur", "beybulat-taymiyev"],
    docs: ["kafkas-atlasi"],
  },
  {
    year: 1817,
    title: "Kale Hattı ve Uzun Kafkas Savaşı",
    short: "Kale hattı ve savaş",
    era: "imamet",
    image: "/images/sergiler.jpg",
    description:
      "Sunja ve Terek boyunca askeri tahkimatların güneye kaydırılmasıyla yarım asır sürecek çetin Kafkas Savaşı başladı; Beybulat Taymiyev ve Taşav Hacı Çeçenya savunmasına öncülük etti.",
    people: ["beybulat-taymiyev", "tasav-haci"],
  },
  {
    year: 1834,
    title: "Şeyh Şamil ve İmamet Devleti",
    short: "Şeyh Şamil dönemi",
    era: "imamet",
    image: "/images/imamet.jpg",
    featuredOnHome: true,
    description:
      "Gazi Muhammed ve Hamzat Bek'in ardından 1834'te Şeyh Şamil'in imam seçilmesiyle Çeçenya ve Dağıstan; naiplikler, divan ve yazılı hukuk düzeniyle tek bir yönetim altında birleşti.",
    people: ["seyh-samil", "gazi-muhammed", "hamzat-bek", "tasav-haci", "haci-murad"],
    docs: ["samil-donemi-mektup", "imamet-dergisi-notlari"],
  },
  {
    year: 1859,
    title: "Gunib Savunması ve Baysangur'un Yarma Harekâtı",
    short: "Gunib savunması",
    era: "imamet",
    image: "/images/yerlesimler.jpg",
    description:
      "Ağustos 1859'da Gunib kuşatmasıyla merkezi İmamet idaresi sona erdi; ancak Benoy Naibi Baysangur kuşatmayı yararak Çeçenya dağlarında 1861'e dek mücadeleyi sürdürdü.",
    people: ["seyh-samil", "baysangur-benoyski"],
  },
  {
    year: 1864,
    title: "Büyük Göç, Sürgün ve Yıkım",
    short: "Sürgün ve yıkım",
    era: "imparatorluk",
    image: "/images/doc-report.jpg",
    featuredOnHome: true,
    description:
      "1864–1865 yıllarında Kafkas Savaşı'nın bitimiyle yüz binlerce Kafkasyalı Anadolu, Balkanlar ve Orta Doğu'ya zorunlu göçe (muhaceret) tabi tutuldu; Şeyh Kunta Hacı sürgüne gönderildi.",
    people: ["kunta-haci"],
    docs: ["rus-raporu-1864", "kafkasya-haritasi-1871"],
  },
  {
    year: 1877,
    title: "Alibek Hacı Kıyamı",
    short: "Yeniden başkaldırı",
    era: "imparatorluk",
    image: "/images/warrior.jpg",
    description:
      "1877–1878 Osmanlı-Rus Harbi sırasında genç imam Alibek Hacı Aldamov önderliğinde Vedeno ve Dağıstan yaylalarında büyük bir bağımsızlık ayaklanması patlak verdi.",
    people: ["alibek-haci", "uzun-haci"],
  },
  {
    year: 1917,
    title: "Kuzey Kafkasya Cumhuriyeti ve Yeni Arayışlar",
    short: "Yeni arayışlar",
    era: "sovyet",
    image: "/images/p-seripov.jpg",
    featuredOnHome: true,
    description:
      "Çarlığın çöküşüyle Mayıs 1918'de Kuzey Kafkasya Dağlıları Cumhuriyeti, 1919'da ise Vedeno merkezli Kuzey Kafkasya Emirliği kurularak bağımsız devlet arayışları canlandı.",
    people: ["uzun-haci", "aslanbek-seripov"],
    docs: ["atli-birlik-fotografi"],
  },
  {
    year: 1944,
    title: "23 Şubat 1944 Topyekûn Sürgün",
    short: "Sürgün",
    era: "sovyet",
    image: "/images/doc-surgun.jpg",
    featuredOnHome: true,
    description:
      "23 Şubat 1944 sabahı ('Mercimek Operasyonu') Çeçen ve İnguş halkının tamamı bir gecede vatanlarından koparılarak Kazakistan ve Kırgızistan'a sürgün edildi; nüfusun üçte birinden fazlası hayatını kaybetti.",
    people: ["abdurrahman-avtorhanov", "mahmud-esambayev", "idris-bazorkin"],
    docs: ["surgun-listeleri-1944"],
  },
  {
    year: 1957,
    title: "13 Yıllık Sürgünden Anavatana Dönüş",
    short: "Anavatana dönüş",
    era: "yakin",
    image: "/images/c-gelenek.jpg",
    description:
      "1957 kararnamesiyle sürgündeki aileler ata topraklarına dönmeye başladı; dağ köyleri, edebi hafıza ve kültürel kurumlar büyük bir azimle yeniden ayağa kaldırıldı.",
    people: ["idris-bazorkin", "mahmud-esambayev"],
  },
  {
    year: 1991,
    title: "Sovyetlerin Dağılışı ve Bağımsızlık Mücadelesi",
    short: "Bağımsızlık mücadelesi",
    era: "yakin",
    image: "/images/ex-kuleler.jpg",
    featuredOnHome: true,
    description:
      "1991 sonrasında Kuzey Kafkasya'da ağır sınavlarla dolu yeni bir dönem başladı; 1992'de İnguşetya Cumhuriyeti kuruldu, Çeçenya ise yıkıcı savaşların ortasında kimlik mücadelesi verdi.",
    people: ["abdurrahman-avtorhanov"],
  },
  {
    year: 2000,
    title: "Dijital Çağda Hafızanın Korunması",
    short: "Günümüz",
    era: "yakin",
    image: "/images/hero.jpg",
    featuredOnHome: true,
    description:
      "Tarihi kuleler belgeleniyor, dünya diasporalarına dağılmış aile evrakları, el yazmaları ve sözlü tarih kayıtları Targim Archive çatısı altında gelecek kuşaklar için bir araya getiriliyor.",
    docs: ["el-sanatlari-katalogu"],
  },
];

/* ------------------------------------------------------------------ */
/* HARİTA                                                              */
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
};

export const PLACES: Place[] = [
  {
    id: "targim",
    name: "Targim Kuleleri",
    kind: "kule",
    lat: 42.83,
    lon: 44.88,
    year: 1400,
    period: "XIII–XVII. yüzyıllar",
    image: "/images/hf-kule-gunbatimi.jpg",
    description:
      "İnguşetya'nın Cerah–Assa havzasında yükselen dört büyük klasik savaş kulesi ve konut yapılarından oluşan tarihi kompleks. Arşivimize adını veren hafıza vadisi.",
  },
  {
    id: "vovnuski",
    name: "Vovnuşki",
    kind: "kule",
    lat: 42.79,
    lon: 45.06,
    year: 1500,
    period: "XV–XVII. yüzyıllar",
    image: "/images/hf-kule-sisli-sirt.jpg",
    description:
      "Sarp kayalık zirvelerin bıçak sırtına harçla kenetlenmiş, Vaynah savunma mimarisinin en çarpıcı kule topluluğu.",
  },
  {
    id: "erzi",
    name: "Erzi",
    kind: "kule",
    lat: 42.76,
    lon: 44.95,
    year: 1500,
    period: "XIV–XVII. yüzyıllar",
    image: "/images/hf-kule-sabah.jpg",
    description:
      "İnguşçada 'Kartal' anlamına gelen, Armhi vadisine hâkim sekiz savaş kulesi ve çok sayıda konut kulesinden oluşan anıtsal yerleşim.",
  },
  {
    id: "itum-kale",
    name: "İtum-Kale",
    kind: "koy",
    lat: 42.73,
    lon: 45.58,
    year: 1600,
    period: "Orta Çağ – günümüz",
    image: "/images/doc-tower.jpg",
    description:
      "Argun Boğazı'nın yukarı kesimlerinde Phakoç kale kompleksi, gözetleme kuleleri ve taş mezar anıtlarıyla ünlü tarihi Çeçen yerleşimi.",
  },
  {
    id: "aldi",
    name: "Aldı",
    kind: "koy",
    lat: 43.28,
    lon: 45.65,
    year: 1760,
    period: "XVIII. yüzyıl",
    image: "/images/p-mansur.jpg",
    description:
      "Şeyh Mansur'un (Uşurma) doğduğu ve 1785 birleşme hareketinin ilk kıvılcımının çaktığı tarihi Sunja köyü.",
  },
  {
    id: "vedeno",
    name: "Vedeno",
    kind: "yerlesim",
    lat: 42.97,
    lon: 46.1,
    year: 1845,
    period: "İmamet Başkenti (1845–1859)",
    image: "/images/imamet.jpg",
    description:
      "1845'ten 1859'a kadar Şeyh Şamil'in başkenti, 1919'da ise Uzun Hacı'nın Kuzey Kafkasya Emirliği'nin merkezi olan tarihi İçkeriya yerleşimi.",
  },
  {
    id: "dargo",
    name: "Dargo Muharebesi",
    kind: "savas",
    lat: 42.94,
    lon: 46.18,
    year: 1845,
    period: "Temmuz 1845",
    image: "/images/sergiler.jpg",
    description:
      "1845 yazında Prens Vorontsov komutasındaki büyük ordunun İçkeriya ormanlarında ağır yenilgiyle geri çekilmek zorunda kaldığı tarihi direniş zaferi.",
  },
  {
    id: "gimri",
    name: "Gimri",
    kind: "koy",
    lat: 42.75,
    lon: 46.84,
    year: 1832,
    period: "Ekim 1832",
    image: "/images/p-gazi.jpg",
    description:
      "Birinci İmam Gazi Muhammed ve Üçüncü İmam Şeyh Şamil'in doğduğu, 1832 kuşatmasında Gazi Muhammed'in şehit düştüğü sarp Avar köyü.",
  },
  {
    id: "gunib",
    name: "Gunib Platosu",
    kind: "savas",
    lat: 42.39,
    lon: 46.96,
    year: 1859,
    period: "Ağustos 1859",
    image: "/images/p-samil.jpg",
    description:
      "Şeyh Şamil'in son savunmasını yaptığı ve Baysangur Benoyski'nin kuşatmayı yararak Çeçenya'ya çıktığı doğal kale görünümlü yüksek plato.",
  },
  {
    id: "sunja",
    name: "Sunja Zaferi",
    kind: "savas",
    lat: 43.25,
    lon: 45.45,
    year: 1785,
    period: "Temmuz 1785",
    image: "/images/kisiler.jpg",
    description:
      "Şeyh Mansur önderliğindeki Kafkas gönüllülerinin Sunja ormanlarında Albay Pieri müfrezesini mağlup ettiği dönüm noktası.",
  },
  {
    id: "harachoy",
    name: "Harachoy",
    kind: "koy",
    lat: 42.91,
    lon: 46.14,
    year: 1872,
    period: "XIX–XX. yüzyıllar",
    image: "/images/p-zelimhan.jpg",
    description:
      "Vedeno geçidinin kapısında yer alan, kaynak suları ve Abrek Zelimhan Guşmazukayev'in memleketi olmasıyla tanınan dağ köyü.",
  },
  {
    id: "grozni",
    name: "Grozni (Sölja-Gala)",
    kind: "yerlesim",
    lat: 43.32,
    lon: 45.69,
    year: 1818,
    period: "1818 – günümüz",
    image: "/images/doc-map.jpg",
    description:
      "Sunja Nehri kıyısında tarihi Çeçen köylerinin kavşağında kurulan, bugün Çeçenya'nın siyasi ve kültürel merkezi olan başkent.",
  },
  {
    id: "nazran",
    name: "Nazran (Nasar-Kort)",
    kind: "yerlesim",
    lat: 43.22,
    lon: 44.77,
    year: 1781,
    period: "XVIII. yüzyıl – günümüz",
    image: "/images/p-bazorkin.jpg",
    description:
      "İnguş ovalık yerleşimlerinin tarihsel kalbi ve kültürel-edebi yaşamın en önemli merkezlerinden biri.",
  },
  {
    id: "hasavyurt",
    name: "Hasavyurt",
    kind: "yerlesim",
    lat: 43.25,
    lon: 46.59,
    year: 1846,
    period: "1846 – günümüz",
    image: "/images/p-naib.jpg",
    description:
      "Çeçenya ile Kumuk Ovası arasındaki geçiş noktasında yer alan yerleşim; Benoy Naibi Baysangur Mart 1861'de burada idam edilmiştir.",
  },
];

/* ------------------------------------------------------------------ */
/* SERGİLER                                                            */
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
  "Sürgün 1944",
  "Kültür ve Günlük Yaşam",
];

export const EXHIBITIONS: Exhibition[] = [
  {
    slug: "kafkasyanin-ozgurluk-mucadelesi",
    title: "Kafkasya'nın Özgürlük Mücadelesi",
    subtitle: "Şeyh Mansur'dan Gunib'e Bir Asırlık İrade",
    theme: "Kafkasya Direnişi",
    curator: "Targim Tarih Araştırmaları Kurulu",
    period: "1785 – 1861",
    count: 32,
    image: "/images/imamet.jpg",
    summary:
      "1785 Sunja direnişinden Şeyh Şamil'in İmamet Devleti'ne ve Baysangur'un son savunmasına uzanan dönemin el yazmaları, mühürleri ve haritaları.",
    body: [
      "Bu dijital sergi, 1785'ten 1861'e uzanan dönemde Kuzey Kafkasya halklarının bağımsızlık ve hukuk birliği mücadelesini orijinal Arapça divan mektupları, askeri topografya haritaları ve sözlü tarih kayıtları üzerinden gözler önüne seriyor.",
      "İmamet dönemi yalnızca askeri bir cephe değil; kadı mahkemeleri, naiplik meclisleri, Beytü'l-mal kayıtları ve bölgeler üstü dayanışma bilinciyle Kafkasya'nın siyasal hafızasında derin izler bırakan bir devlet tecrübesiydi.",
      "Sergide Şeyh Mansur, Beybulat Taymiyev, Gazi Muhammed, Taşav Hacı, Şeyh Şamil ve Baysangur Benoyski'nin izlerini taşıyan nadir arşiv belgelerini inceleyebilirsiniz.",
    ],
    docs: ["samil-donemi-mektup", "imamet-dergisi-notlari", "kafkas-atlasi"],
    people: ["seyh-mansur", "seyh-samil", "baysangur-benoyski", "tasav-haci"],
  },
  {
    slug: "kuleler-ve-yerlesimler",
    title: "Taştan Yükselen Hafıza: Kuleler",
    subtitle: "Cerah, Targim ve Argun Vadilerinin Mimari ve Yazılı Mirası",
    theme: "Kuleler ve Yerleşimler",
    curator: "Mimari ve Etnografya Bölümü",
    period: "XIII – XIX. Yüzyıllar",
    count: 29,
    image: "/images/hf-kule-gunbatimi.jpg",
    summary:
      "Vaynah savaş ve konut kulelerinin taş işçiliği, oymalı meşe kapıları, kule içi el yazması mahzenleri ve sarp vadilerdeki savunma ağları.",
    body: [
      "Piramidal basamaklı taş çatılarıyla göğe uzanan savaş kuleleri (vov) ve aile ocağının kalbi olan konut kuleleri (gala); Çeçen ve İnguş toplumunda soyun, misafirperverliğin ve özgürlüğün taşlaşmış anıtlarıdır.",
      "Her kulenin kapı kemerinde yer alan dağ oymaları, sarmal güneş petroglyphleri ve iç mahzenlerde korunan deri ciltli el yazmaları, o vadide kök salan teypin sessiz imzasını taşır.",
      "Sergi; Targim, Vovnuşki, Erzi ve İtum-Kale komplekslerini yüksek çözünürlüklü kule içi arşiv belgeleri, oymalı kapı detayları ve sinematik yürüyüş sekansıyla bir araya getiriyor.",
    ],
    docs: [
      "kule-ici-yazma-kodeks",
      "oymali-vaynah-kule-kapisi",
      "targim-safak-kulesi-ve-istang",
      "targim-kuleleri-fotografi",
      "kuleler-albumu",
    ],
    people: ["idris-bazorkin"],
  },
  {
    slug: "surgun-1944",
    title: "23 Şubat 1944: Kışta Koparılan Vatan",
    subtitle: "Sürgün, Dayanışma ve 1957 Dönüş Yolculuğu",
    theme: "Sürgün 1944",
    curator: "Sözlü Tarih ve Tanıklık Birimi",
    period: "1944 – 1957",
    count: 18,
    image: "/images/doc-surgun.jpg",
    summary:
      "Bir halkın tek bir Şubat sabahında yük vagonlarıyla Orta Asya bozkırlarına sürülüşü, hayatta kalma iradesi ve on üç yıl sonraki dönüş destanı.",
    body: [
      "23 Şubat 1944 şafağında başlayan topyekûn sürgün, bebeklerden asırlık aksakallılara kadar bütün Çeçen ve İnguş nüfusunu dondurucu kış ortasında binlerce kilometre ötedeki Kazakistan ve Kırgızistan bozkırlarına savurdu.",
      "Haritalardan isimleri silinen, kuleleri ve mezar taşları tahrip edilen bir halk; sürgünde dilini, Nohçalla ve Ezdel ahlakını, zikir halkalarını ve dayanışmasını koruyarak kimliğini yaşattı.",
      "Bu sergi; istatistiklerin ardındaki insan yüzlerini, tren istasyonu kayıtlarını ve 1957'de ata ocaklarına dönüşün sarsıcı tanıklıklarını belgeliyor.",
    ],
    docs: ["surgun-listeleri-1944", "rus-raporu-1864"],
    people: ["abdurrahman-avtorhanov", "idris-bazorkin", "mahmud-esambayev"],
  },
  {
    slug: "kultur-ve-gunluk-yasam",
    title: "Dağların Ruhu: Kültür ve Zanaat",
    subtitle: "Nohçalla, Ezdel, Savatlı Gümüş ve İlli Geleneği",
    theme: "Kültür ve Günlük Yaşam",
    curator: "Maddi ve Somut Olmayan Miras Fonu",
    period: "XVIII – XX. Yüzyıllar",
    count: 27,
    image: "/images/kultur.jpg",
    summary:
      "Savatlı gümüş kama işçiliğinden keçe halılara, üç telli dechig-pondar ezgilerinden dağ misafirperverliğine yaşayan Kafkas mirası.",
    body: [
      "Kafkas dağ topluluklarında maddi kültür ile ahlaki düzen birbirinden ayrılmaz: bir çerkeskanın ölçülü kesimi, beldeki savatlı gümüş kemer ve baş üzerindeki papaha; kişinin sözüne bağlılığını ve topluma karşı sorumluluğunu simgeler.",
      "Ocak ateşinin başında yaşlıların anlattığı atasözleri ve dechig-pondar eşliğinde söylenen epik 'illi' destanları, yazılı arşivlerin yakıldığı dönemlerde dahi tarihi canlı tutan birer hafıza hazinesi işlevi görmüştür.",
    ],
    docs: ["el-sanatlari-katalogu", "atli-birlik-fotografi"],
    people: ["mahmud-esambayev", "kunta-haci"],
  },
];

export const getExhibition = (slug: string) => EXHIBITIONS.find((e) => e.slug === slug);

/* ------------------------------------------------------------------ */
/* KÜLTÜR                                                              */
/* ------------------------------------------------------------------ */

export type CultureCat = "gelenek" | "mimari" | "muzik" | "giyim" | "yemek" | "sozlu";

export const CULTURE_CATS: { id: CultureCat; label: string; sub: string; image: string; count: number }[] = [
  { id: "gelenek", label: "Gelenek ve Adetler", sub: "Nohçalla, Ezdel ve meclis hukuku", image: "/images/c-gelenek.jpg", count: 12 },
  { id: "mimari", label: "Mimari ve Kuleler", sub: "Savaş kuleleri, oymalı kapılar ve tamgalar", image: "/images/hf-oymali-kapi.jpg", count: 18 },
  { id: "muzik", label: "Müzik ve İlli", sub: "Dechig-pondar, destanlar ve lovzar", image: "/images/c-muzik.jpg", count: 14 },
  { id: "giyim", label: "Geleneksel Giyim", sub: "Çerkeska, gümüş gazırlar ve papaha", image: "/images/c-giyim.jpg", count: 11 },
  { id: "yemek", label: "Yemek Kültürü", sub: "Jijig-galnaş, çepalgaş ve misafir sofrası", image: "/images/c-yemek.jpg", count: 9 },
  { id: "sozlu", label: "Sözlü Tarih", sub: "Sürgün tanıklıkları ve dağ atasözleri", image: "/images/warrior.jpg", count: 21 },
];

export type CultureItem = {
  id: string;
  cat: CultureCat;
  title: string;
  nativeTerm?: string;
  text: string;
};

export const CULTURE_ITEMS: CultureItem[] = [
  {
    id: "nohcalla",
    cat: "gelenek",
    title: "Nohçalla",
    nativeTerm: "Нохчалла",
    text: "Çeçen kimliğinin ahlaki ve vicdani pusulası: özdenetim, misafire koşulsuz ikram ve koruma, kadına ve aksakallıya hürmet, verilen söze can pahasına sadakat. Yazılı bir kanun metni değil, her bireyin kendi onuruyla koruduğu yaşayan bir toplumsal düzendir.",
  },
  {
    id: "ezdel",
    cat: "gelenek",
    title: "Ezdel",
    nativeTerm: "Эздел",
    text: "İnguş toplumunun asalet, ölçülülük ve davranış etiğini tanımlayan temel kavram. Öfkeye kapılmamak, büyüğün yanında ses yükseltmemek, zor zamanlarda komşusunun yükünü sessizce omuzlamak Ezdel'in özünü oluşturur.",
  },
  {
    id: "teip",
    cat: "gelenek",
    title: "Teyp, Tukhum ve Mehk-Khel",
    nativeTerm: "Тайп · Мехк-Кхел",
    text: "Ortak ata ocağına ve kule vadisine bağlı soy birlikleri (teyp), bölgesel dayanışma federasyonları (tukhum) ve bilge temsilcilerin toplandığı Ülke Meclisi (Mehk-Khel), feodal bey veya hükümdar tanımayan eşitlikçi dağ demokrasisinin temel taşlarıdır.",
  },
  {
    id: "savas-kulesi",
    cat: "mimari",
    title: "Savaş Kuleleri (Vov)",
    nativeTerm: "Бӏов / Вӏов",
    text: "Yüksekliği 25–30 metreye ulaşan, yukarı doğru zarifçe daralan beş veya altı katlı taş savunma kuleleri. Basamaklı piramidal arduvaz çatısı ve beyaz tepe taşıyla (tsurla) vadiler arası duman ve ateş haberleşme zincirinin halkalarını oluşturur.",
  },
  {
    id: "konut-kulesi",
    cat: "mimari",
    title: "Konut Kuleleri ve Ocak Zinciri",
    nativeTerm: "Гӏала",
    text: "İki veya üç katlı geniş taş aile konutları. Ortasında binayı taşıyan merkezi taş sütun (erd-boagӏa) ve üzerinde kutsal sayılan demir ocak zinciri yer alır; ocak zincirine dokunan bir yabancı dahi o ailenin dokunulmaz misafiri kabul edilir.",
  },
  {
    id: "kasir",
    cat: "mimari",
    title: "Kashi ve Güneş Tamgaları",
    nativeTerm: "Каш · Тамга",
    text: "Dağ yamaçlarında kurulan taş çatılı ata mezar yapıları (kashi) ve kule kemerlerine kazınan sarmal güneş, el ve boynuz petroglyphleri; ailenin o topraklardaki binlerce yıllık sürekliliğini belgeler.",
  },
  {
    id: "illi",
    cat: "muzik",
    title: "İlli — Epik Kahramanlık Destanları",
    nativeTerm: "Илли",
    text: "Yüzyıllar boyunca halk ozanları (illançi) tarafından üç telli pondar eşliğinde seslendirilen tarihsel destanlar. Yalnızca zaferleri değil, adaleti, fedakârlığı ve mazlumu koruma ahlakını gelecek kuşaklara taşır.",
  },
  {
    id: "dechig-pondar",
    cat: "muzik",
    title: "Dechig-Pondar",
    nativeTerm: "Дечиг-пондар",
    text: "Tek parça ceviz veya dut ağacından oyularak yapılan, üç telli geleneksel Vaynah telli çalgısı. Tok ve vakur tınısı, dağ rüzgârını ve at nalının ritmini andıran akorlarla epik anlatılara eşlik eder.",
  },
  {
    id: "lovzar",
    cat: "muzik",
    title: "Lovzar ve Kafkas Dansı",
    nativeTerm: "Ловзар",
    text: "Müzik, söz ve dansın sıkı görgü kurallarıyla buluştuğu topluluk meydanı. Erkeğin kartal bakışlı dik duruşu ile kadının su üzerinde süzülür gibi vakur adımları arasındaki mesafe, karşılıklı saygının estetik ifadesidir.",
  },
  {
    id: "cherkeska",
    cat: "giyim",
    title: "Çerkeska, Gazırlar ve Kinjal",
    nativeTerm: "Чоа · Газыр",
    text: "Koyu yün çuhadan dikilen, göğsünün iki yanında savatlı gümüş barut tüpleri (gazır) dizili geleneksel kaftan. Beldeki ince işçilikli gümüş kemer ve savatlı kama (kinjal), dağlı erkeğin vakur siluetini tamamlar.",
  },
  {
    id: "papaha",
    cat: "giyim",
    title: "Papaha (Holhaz-Kuy)",
    nativeTerm: "Холхаз-куй",
    text: "Karakul kuzu postundan hazırlanan geleneksel başlık. Kafkasya'da papaha yalnızca soğuktan korunmak için değil, onurun tacı olarak taşınır; başın eğilmemesi için dik durmayı hatırlatır.",
  },
  {
    id: "jijig-galnash",
    cat: "yemek",
    title: "Jijig-Galnaş",
    nativeTerm: "Жижиг-галнаш",
    text: "Kemikli koyun veya dana etinin, elde tek tek yuvarlanıp şekillendirilen buğday veya mısır hamuru lokmaları (galnaş), sıcak et suyu ve taze ezilmiş sarımsaklı sosla (beram) sunulduğu baş misafir yemeği.",
  },
  {
    id: "chepalgash",
    cat: "yemek",
    title: "Çepalgaş ve Hingalaş",
    nativeTerm: "Чӏепалгаш · Хингалаш",
    text: "Taze köy lor peyniriyle hazırlanan incecik Çepalgaş ile tatlı bal kabağı harcıyla yarım ay şeklinde kapatılıp eritilmiş tereyağına batırılan Hingalaş; Vaynah mutfağının bereket ve misafirperverlik simgesidir.",
  },
  {
    id: "tanikliklar",
    cat: "sozlu",
    title: "1944 Sürgün Tanıklıkları",
    nativeTerm: "Дагалецамаш",
    text: "Sürgün vagonlarından sağ çıkan büyüklerimizin ses kayıtları ve el yazısı hatıraları; kayıp köylerin yer adlarını, su pınarlarını ve aile şecerelerini yok olmaktan kurtaran canlı arşiv belgeleridir.",
  },
  {
    id: "atasozleri",
    cat: "sozlu",
    title: "Dağ Atasözleri ve Öğütler",
    nativeTerm: "Кицанаш",
    text: "“Toprak unutmaz, insan bazen unutur.” · “Kule taşla, insan sözüyle ayakta durur.” Asırların süzgecinden geçmiş bu özlü sözler, toplumun tarihsel belleğini birkaç kelimede özetler.",
  },
];
