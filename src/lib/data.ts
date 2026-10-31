// Targim Archive — Zenginleştirilmiş Tarihsel ve Kültürel Veri Katmanı

export type Era = "imamet" | "imparatorluk" | "sovyet" | "yakin";

export const ERAS: { id: Era; label: string; range: string }[] = [
  { id: "imamet", label: "İmamet Çağı", range: "1760–1859" },
  { id: "imparatorluk", label: "İmparatorluk Çağı", range: "1859–1917" },
  { id: "sovyet", label: "Sürgün ve Dönüş", range: "1917–1957" },
  { id: "yakin", label: "Yakın Dönem", range: "1957–2024" },
];

export const eraLabel = (e: Era) => ERAS.find((x) => x.id === e)?.label ?? e;

/* ------------------------------------------------------------------ */
/* KİŞİLER (16 Özgün Portre — Sıfır Tekrar)                            */
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
    slug: "seyh-mansur",
    name: "Şeyh Mansur",
    born: "1760",
    died: "1794",
    title: "Kafkas direnişinin öncüsü",
    era: "imamet",
    region: "Çeçenya",
    birthPlace: "Aldı",
    deathPlace: "Şlisselburg Kalesi",
    center: "Aldı, Sunja Havzası",
    image: "/images/p-mansur.jpg",
    gallery: [
      { src: "/images/p-mansur.jpg", caption: "Şeyh Mansur (Uşurma) temsili arşiv portresi" },
      { src: "/images/kisiler.jpg", caption: "1785 Sunja vadisi Kafkas atlı birlikleri" },
      { src: "/images/doc-map.jpg", caption: "Terek ve Sunja hattını gösteren tarihi Kafkasya haritası" },
      { src: "/images/targim-towers.jpg", caption: "Kuzey Kafkasya dağ geçitleri ve gözetleme kuleleri" },
    ],
    docs: ["kafkas-atlasi", "kafkasya-haritasi-1871"],
    summary:
      "Asıl adı Uşurma. 1785'te başlattığı birlik ve direniş hareketiyle Kuzey Kafkasya halklarını ilk kez ortak bir siyasi ve manevi sancak etrafında topladı.",
    bio: [
      "Çeçenya'nın Sunja kıyısındaki Aldı köyünde doğan Uşurma, adalet, toplumsal dayanışma ve ahlaki yenilenme çağrısıyla kısa sürede Çeçen, İnguş, Kumuk, Kabardey ve Dağıstan toplulukları arasında büyük saygı kazandı ve 'Şeyh Mansur' adıyla anıldı.",
      "Temmuz 1785'te Aldı ve Sunja Nehri yakınlarında Albay Pieri komutasındaki birliğe karşı kazanılan tarihi zafer, hareketin Doğu Kafkasya'dan Batı Çerkesya'ya kadar yayılmasını sağladı.",
      "1791 yazında Anapa Kalesi kuşatması sırasında ağır yaralı olarak esir düştü; Petersburg yakınlarındaki Şlisselburg Kalesi'nde 1794 yılında vefat etti. Kafkasya hafızasında birliğin ilk büyük meşalesi olarak anılır.",
    ],
    related: ["tasav-haci", "beybulat-taymiyev", "seyh-samil"],
  },
  {
    slug: "tasav-haci",
    name: "Taşav Hacı Endireyevski",
    born: "1770",
    died: "1843",
    title: "Çeçen ve Kumuk alimi, komutan",
    era: "imamet",
    region: "Çeçenya – Kumuk Ovası",
    birthPlace: "Endirey",
    deathPlace: "Çeçenya",
    center: "Sayasan, İçkeriya",
    image: "/images/p-tasav.jpg",
    gallery: [
      { src: "/images/p-tasav.jpg", caption: "Taşav Hacı Endireyevski portresi" },
      { src: "/images/imamet.jpg", caption: "İçkeriya dağ geçitlerinde İmamet süvarileri" },
      { src: "/images/doc-letter.jpg", caption: "Naipler arası Arapça yazışma örneği" },
      { src: "/images/c-gelenek.jpg", caption: "Dağ meclisi ve aksakallılar geleneği" },
    ],
    docs: ["samil-donemi-mektup", "imamet-dergisi-notlari"],
    summary:
      "İmamet hareketinin Çeçenya'da kök salmasını sağlayan büyük alim ve stratejist; Şeyh Şamil'in erken dönemdeki en güçlü müttefiki ve baş naibi.",
    bio: [
      "Endirey'de yetişen derin fıkıh bilgisi ve askeri dehasıyla tanınan Taşav Hacı, 1830'lu yılların başında Doğu Çeçenya ve İçkeriya ormanlarında sağlam bir savunma ve idare ağı kurdu.",
      "1834 sonrasında Şeyh Şamil ile ittifak kurarak Çeçenya ile Dağıstan arasındaki birliğin harcını attı; Sayasan ve Benoy çevresindeki harekâtları bizzat yönetti.",
      "1843 yılında vefat edene dek Çeçen meclislerinde sözü kanun sayılan bir bilge ve komutan olarak yaşadı.",
    ],
    related: ["seyh-samil", "gazi-muhammed", "baysangur-benoyski"],
  },
  {
    slug: "beybulat-taymiyev",
    name: "Beybulat Taymiyev",
    born: "1779",
    died: "1831",
    title: "Çeçen siyasi ve askeri önderi",
    era: "imamet",
    region: "Çeçenya",
    birthPlace: "Mayurtup",
    deathPlace: "Çeçenya",
    center: "Şali, Mayurtup",
    image: "/images/p-beybulat.jpg",
    gallery: [
      { src: "/images/p-beybulat.jpg", caption: "Beybulat Taymiyev portresi" },
      { src: "/images/kisiler.jpg", caption: "19. yüzyıl başı Çeçen atlı birliği" },
      { src: "/images/c-giyim.jpg", caption: "Geleneksel çerkeska, gümüş gazırlar ve kama" },
      { src: "/images/atlas.jpg", caption: "Kuzey Kafkasya topografik atlas paftası" },
    ],
    docs: ["kafkas-atlasi"],
    summary:
      "19. yüzyılın ilk çeyreğinde Çeçen toplumunu ortak bir meclis çatısı altında birleştirmeye çalışan mahir komutan ve diplomat.",
    bio: [
      "Beybulat Taymiyev, Kafkas Savaşı'nın erken evresinde yaklaşık otuz yıl boyunca Çeçen teypleri arasında iç barışı ve ortak hareket iradesini tesis etmeye çalıştı.",
      "1825–1826 yıllarında Terek ve Sunja kale hattına karşı yürütülen büyük harekâta öncülük etti; aynı zamanda Tiflis ve Erzurum hattında diplomatik görüşmeler yürüterek halkını yıkımdan korumaya gayret etti.",
      "Aleksandr Puşkin'in 'Erzurum Yolculuğu' hatıratında dahi cesaretiyle andığı Taymiyev, 1831'de bir suikast sonucu hayatını kaybetti.",
    ],
    related: ["seyh-mansur", "gazi-muhammed"],
  },
  {
    slug: "hamzat-bek",
    name: "Hamzat Bek",
    born: "1789",
    died: "1834",
    title: "Kafkasya'nın İkinci İmamı",
    era: "imamet",
    region: "Dağıstan",
    birthPlace: "Gotsatl",
    deathPlace: "Hunzah",
    center: "Gotsatl, Hunzah",
    image: "/images/p-hamzat.jpg",
    gallery: [
      { src: "/images/p-hamzat.jpg", caption: "İkinci İmam Hamzat Bek portresi" },
      { src: "/images/imamet.jpg", caption: "Dağıstan yüksek yaylalarında İmamet atlıları" },
      { src: "/images/doc-letter.jpg", caption: "İmamet divanı yazışma geleneği" },
    ],
    docs: ["samil-donemi-mektup"],
    summary:
      "Gazi Muhammed'in Gimri'de şehit düşmesinin ardından 1832–1834 yılları arasında İmamet sancağını taşıyan ikinci imam.",
    bio: [
      "Avar soylu bir aileden gelen ve iyi bir medrese eğitimi alan Hamzat Bek, Gazi Muhammed'in en yakın komutanlarından biri olarak Çar İskan hattına karşı mücadele etti.",
      "1832 sonbaharında ikinci imam seçilerek Avar platosundaki dağınık hanlıkları İmamet idaresi altında toplamaya yöneldi.",
      "Eylül 1834'te Hunzah'ta düzenlenen bir suikast sonucu hayatını kaybetti; ardından meclis kararıyla imamlık Şeyh Şamil'e tevdi edildi.",
    ],
    related: ["gazi-muhammed", "seyh-samil"],
  },
  {
    slug: "baysangur-benoyski",
    name: "Baysangur Benoyski",
    born: "1794",
    died: "1861",
    title: "Benoy naibi, efsanevi Çeçen komutan",
    era: "imamet",
    region: "Çeçenya",
    birthPlace: "Benoy",
    deathPlace: "Hasavyurt",
    center: "Benoy, Gunib",
    image: "/images/p-naib.jpg",
    gallery: [
      { src: "/images/p-naib.jpg", caption: "Benoy Naibi Baysangur portresi" },
      { src: "/images/imamet.jpg", caption: "Gunib ve İçkeriya savunma hatları" },
      { src: "/images/warrior.jpg", caption: "Şafak vakti Kafkas sırtlarında nöbet" },
      { src: "/images/c-giyim.jpg", caption: "19. yüzyıl Kafkas savaşçı teçhizatı" },
    ],
    docs: ["samil-donemi-mektup", "imamet-dergisi-notlari"],
    summary:
      "Çatışmalarda bir kolunu, bir bacağını ve bir gözünü kaybetmesine rağmen atına bağlanarak cepheye atılan, boyun eğmezliğin Çeçen hafızasındaki simgesi.",
    bio: [
      "Benoy teypinden gelen Baysangur, 1830'lardan itibaren Şeyh Şamil'in en güvenilir naiplerinden biri olarak Dargo (1845) ve Ahulgo çarpışmalarında en ön safta yer aldı.",
      "Ağustos 1859'da Gunib kuşatmasının son gününde teslimiyet kararını reddederek beraberindeki savaşçılarla kuşatmayı yarıp Çeçenya dağlarına döndü ve Benoy merkezli yeni bir direniş başlattı.",
      "1861 başlarında ağır kış şartlarında yaralı olarak esir düştü ve Mart 1861'de Hasavyurt'ta idam edildi. Halk destanlarında (illi) adı ölümsüzleşti.",
    ],
    related: ["seyh-samil", "tasav-haci"],
  },
  {
    slug: "gazi-muhammed",
    name: "Gazi Muhammed",
    born: "1795",
    died: "1832",
    title: "Kafkasya'nın Birinci İmamı",
    era: "imamet",
    region: "Dağıstan",
    birthPlace: "Gimri",
    deathPlace: "Gimri",
    center: "Gimri",
    image: "/images/p-gazi.jpg",
    gallery: [
      { src: "/images/p-gazi.jpg", caption: "Birinci İmam Gazi Muhammed portresi" },
      { src: "/images/doc-letter.jpg", caption: "İmamet dönemi Arapça risale ve mektup geleneği" },
      { src: "/images/imamet.jpg", caption: "Dağıstan ve Çeçenya birliği" },
    ],
    docs: ["samil-donemi-mektup"],
    summary:
      "Dağıstan ve Çeçenya İmameti'nin kurucusu; çocukluk arkadaşı Şeyh Şamil'in yol göstericisi ve Kafkasya'da hukuki-siyasi birliğin mimarı.",
    bio: [
      "Gimri köyünde doğan Gazi Muhammed, derin İslami ilimler tahsilinin ardından halkları örfi kan davalarını bırakıp ortak hukuk ve özgürlük etrafında birleşmeye çağırdı.",
      "1828–1829'da alimler ve cemaat önderlerinin ittifakıyla Birinci İmam ilan edildi; Tarki, Kızlar ve Derbent çevresine uzanan başarılı seferler düzenledi.",
      "Ekim 1832'de doğduğu köy Gimri'nin taş kulelerinde son nefesine kadar savunma yaparken şehit düştü; kuşatmadan ağır yaralı kurtulan iki kişiden biri Şamil'di.",
    ],
    related: ["seyh-samil", "hamzat-bek", "tasav-haci"],
  },
  {
    slug: "haci-murad",
    name: "Hacı Murad",
    born: "1798",
    died: "1852",
    title: "Avar naibi ve süvari komutanı",
    era: "imamet",
    region: "Dağıstan",
    birthPlace: "Hunzah",
    deathPlace: "Nuha yakınları",
    center: "Hunzah, Tselmes",
    image: "/images/p-murad.jpg",
    gallery: [
      { src: "/images/p-murad.jpg", caption: "Avar Naibi Hacı Murad portresi" },
      { src: "/images/imamet.jpg", caption: "Yüksek Kafkas geçitlerinde atlı akıncılar" },
      { src: "/images/kultur.jpg", caption: "Savatlı Kafkas gümüş kama ve kemer işçiliği" },
    ],
    docs: ["imamet-dergisi-notlari"],
    summary:
      "Yıldırım hızındaki süvari baskınlarıyla efsaneleşen Avar naibi; trajik sonu Lev Tolstoy'un ünlü 'Hacı Murat' eserine ilham verdi.",
    bio: [
      "Hunzah'ta büyüyen Hacı Murad, 1840'lı yıllar boyunca Şeyh Şamil'in en cüretkâr süvari komutanlarından biri olarak Dağıstan'ın sarp vadilerinde ün kazandı.",
      "1851 yılında İmamet içindeki siyasi anlaşmazlıklar ve ailesinin rehin tutulması sebebiyle zorlu bir yol ayrımına girdi.",
      "Nisan 1852'de esir tutulan ailesini kurtarmak amacıyla dağlara doğru yola çıktığında Nuha yakınlarında kuşatılarak son mermisine kadar çarpıştı.",
    ],
    related: ["seyh-samil", "hamzat-bek"],
  },
  {
    slug: "seyh-samil",
    name: "Şeyh Şamil",
    born: "1797",
    died: "1871",
    title: "Kafkasya'nın Üçüncü İmamı",
    era: "imamet",
    region: "Dağıstan – Çeçenya",
    birthPlace: "Gimri",
    deathPlace: "Medine",
    center: "Ahulgo, Dargo, Vedeno",
    image: "/images/p-samil.jpg",
    gallery: [
      { src: "/images/p-samil.jpg", caption: "İmam Şeyh Şamil (1797–1871) portresi" },
      { src: "/images/doc-letter.jpg", caption: "1845 (1261 H.) tarihli İmamet divanı Arapça mektubu" },
      { src: "/images/imamet.jpg", caption: "Vedeno ve Dargo hattında İmamet naipleri" },
      { src: "/images/doc-map.jpg", caption: "Büyük Kafkasya askeri topografya haritası" },
    ],
    docs: ["samil-donemi-mektup", "imamet-dergisi-notlari", "kafkas-atlasi"],
    summary:
      "1834'ten 1859'a kadar çeyrek asır boyunca Çeçenya ve Dağıstan'ı düzenli bir devlet, divan, ordu ve naiplik sistemi altında birleştiren efsanevi devlet adamı ve komutan.",
    bio: [
      "1797'de Dağıstan'ın Gimri köyünde dünyaya gelen Şamil, Gazi Muhammed ve Hamzat Bek'in ardından 1834 yılında Kafkasya'nın üçüncü imamı seçildi.",
      "Yalnızca askeri bir direniş değil; 'Nizam' adı verilen hukuk kuralları, naiplik idaresi, top dökümhaneleri, posta teşkilatı ve yazılı arşiv düzeniyle tam teşekküllü bir devlet kurdu. Ahulgo (1839), Dargo (1845) ve başkent Vedeno bu dönemin simgesi oldu.",
      "25 Ağustos 1859'da Gunib'de kuşatmanın ardından sivil kayıpları önlemek için silah bıraktı. Kaluga'daki on yıllık zorunlu ikametin ardından 1870'te Hicaz'a gitmesine izin verildi; Şubat 1871'de Medine'de vefat ederek Cennetü'l-Baki kabristanına defnedildi.",
    ],
    related: ["gazi-muhammed", "tasav-haci", "baysangur-benoyski", "haci-murad"],
  },
  {
    slug: "kunta-haci",
    name: "Kunta Hacı Kişiyev",
    born: "1812",
    died: "1867",
    title: "Mutasavvıf, manevi önder",
    era: "imparatorluk",
    region: "Çeçenya – İnguşetya",
    birthPlace: "Melçuhi (İlsahan-Yurt)",
    deathPlace: "Ustyujna",
    center: "İlsahan-Yurt",
    image: "/images/p-scholar.jpg",
    gallery: [
      { src: "/images/p-scholar.jpg", caption: "Şeyh Kunta Hacı Kişiyev portresi" },
      { src: "/images/c-gelenek.jpg", caption: "Vaynah manevi dayanışma ve meclis kültürü" },
      { src: "/images/targim-towers.jpg", caption: "İnguşetya ve Çeçenya yüksek vadi yerleşimleri" },
      { src: "/images/doc-report.jpg", caption: "1864–1865 dönemi arşiv kayıtları" },
    ],
    docs: ["rus-raporu-1864"],
    summary:
      "On yıllar süren savaşların yaralarını merhamet, sabır, yardımlaşma ve cehri zikir halkalarıyla saran, Çeçen ve İnguş halklarının büyük manevi rehberi.",
    bio: [
      "Uzun yıllar süren Kafkas Savaşı'nın demografik yıkımı karşısında Kunta Hacı, halkın tamamen yok olmasını önlemek için manevi direnişi, yetimlerin gözetilmesini ve toplumsal dayanışmayı öğütledi.",
      "Öğretisi özellikle Çeçenya ve İnguşetya'da on binlerce insanı bir araya getirdi; İnguş halkının gönüllü olarak İslam'ı derinlemesine benimsemesinde belirleyici rol oynadı.",
      "Ocak 1864'te Çarlık makamlarınca tutuklandı, Şali'de kendisine destek için toplanan silahsız halka ateş açıldı ('Hançerler Savaşı'). Novgorod yakınlarındaki Ustyujna sürgününde Mayıs 1867'de vefat etti.",
    ],
    related: ["alibek-haci", "uzun-haci"],
  },
  {
    slug: "uzun-haci",
    name: "Uzun Hacı Saltinski",
    born: "1848",
    died: "1920",
    title: "Kuzey Kafkasya Emirliği'nin kurucusu",
    era: "sovyet",
    region: "Dağıstan – Çeçenya",
    birthPlace: "Salta",
    deathPlace: "Vedeno",
    center: "Salta, Vedeno",
    image: "/images/p-uzun.jpg",
    gallery: [
      { src: "/images/p-uzun.jpg", caption: "Şeyh Uzun Hacı Saltinski portresi" },
      { src: "/images/imamet.jpg", caption: "Vedeno dağ merkezi" },
      { src: "/images/doc-letter.jpg", caption: "Kuzey Kafkasya Emirliği dönemi yazışma geleneği" },
    ],
    docs: ["imamet-dergisi-notlari"],
    summary:
      "1877 ayaklanmasından Sibirya sürgününe, oradan 1919'da Vedeno merkezli Kuzey Kafkasya Emirliği'nin kuruluşuna uzanan ömrüyle bağımsızlık fikrinin simgesi.",
    bio: [
      "Gençliğinde 1877 Dağıstan-Çeçenya ayaklanmasına katıldığı için yıllarca Sibirya'da sürgünde kalan Uzun Hacı, kaçarak Hicaz ve İstanbul üzerinden Kafkasya'ya geri döndü.",
      "1917 İhtilali sonrası Kuzey Kafkasya'yı işgal eden Denikin ordularına karşı Çeçen ve Dağıstan kuvvetlerini birleştirdi ve Eylül 1919'da Vedeno'da kendi parası, meclisi ve ordusu olan Kuzey Kafkasya Emirliği'ni ilan etti.",
      "Mart 1920'de 72 yaşında Vedeno'da hayatını kaybetti.",
    ],
    related: ["alibek-haci", "aslanbek-seripov"],
  },
  {
    slug: "alibek-haci",
    name: "Alibek Hacı Aldamov",
    born: "1850",
    died: "1878",
    title: "1877 Kafkas ayaklanmasının genç imamı",
    era: "imparatorluk",
    region: "Çeçenya",
    birthPlace: "Simsir",
    deathPlace: "Grozni",
    center: "Simsir, Vedeno",
    image: "/images/p-alibek.jpg",
    gallery: [
      { src: "/images/p-alibek.jpg", caption: "Alibek Hacı Aldamov portresi" },
      { src: "/images/doc-map.jpg", caption: "1871 Kuzey Kafkasya askeri haritası" },
      { src: "/images/warrior.jpg", caption: "İçkeriya dağ sırtları" },
    ],
    docs: ["kafkasya-haritasi-1871"],
    summary:
      "Henüz 27 yaşındayken 1877–1878 Osmanlı-Rus Harbi sırasında İçkeriya ormanlarında imam seçilerek Çeçenya ve Dağıstan'daki büyük kıyamı yöneten önder.",
    bio: [
      "Simsir köyünde doğan Alibek Hacı, Nisan 1877'de Sayasan ve Vedeno ormanlarında toplanan halk temsilcileri tarafından imam ilan edildi.",
      "Kısa sürede 47 Çeçen köyü ve Dağıstan yaylalarına yayılan hareket, ağır topçu birliklerine karşı aylar boyunca direndi.",
      "Sivil köylerin yakılmasını ve halkın sürgün edilmesini durdurmak amacıyla komutanlarıyla birlikte teslim oldu; Mart 1878'de Grozni'de on bir silah arkadaşıyla birlikte idam edildi.",
    ],
    related: ["kunta-haci", "uzun-haci"],
  },
  {
    slug: "zelimhan",
    name: "Zelimhan Guşmazukayev",
    born: "1872",
    died: "1913",
    title: "Harachoylu efsanevi abrek",
    era: "imparatorluk",
    region: "Çeçenya",
    birthPlace: "Harachoy",
    deathPlace: "Şali yakınları",
    center: "Harachoy, Assa ve Argun Vadileri",
    image: "/images/p-zelimhan.jpg",
    gallery: [
      { src: "/images/p-zelimhan.jpg", caption: "Harachoylu Zelimhan (1872–1913) arşiv portresi" },
      { src: "/images/doc-tower.jpg", caption: "19. yüzyıl sonu dağ sığınakları ve taş kuleler" },
      { src: "/images/c-giyim.jpg", caption: "Çerkeska, gümüş kemer ve fişeklikler" },
    ],
    docs: ["targim-kuleleri-fotografi", "atli-birlik-fotografi"],
    summary:
      "Çarlık idaresinin keyfi cezalarına karşı on iki yıl boyunca sarp dağlardan meydan okuyan, yoksullara dağıttığı adaletle Kafkas folkloruna geçen abrek.",
    bio: [
      "Vedeno yakınlarındaki Harachoy köyünde doğan Zelimhan, işlemediği bir suçtan ötürü ailesiyle birlikte haksızlığa uğrayınca Grozni hapishanesinden firar ederek dağlara çekildi.",
      "1901'den 1913'e kadar Çeçenya ve İnguşetya dağlarında binlerce kişilik cezalandırma müfrezelerini boşa çıkardı; Kızlar Bankası baskınından elde edilen paraları yoksul köylülere ve ağır vergi altındaki ailelere dağıttı.",
      "İnguş ve Çeçen köyleri onu ele vermektense ağır para cezalarına katlandı. Eylül 1913'te Şali yakınlarında tek başına kuşatıldığı çiftlikte sabaha kadar süren çatışmada hayatını kaybetti.",
    ],
    related: ["aslanbek-seripov"],
  },
  {
    slug: "aslanbek-seripov",
    name: "Aslanbek Şeripov",
    born: "1897",
    died: "1919",
    title: "Siyasi hatip, yazar ve komutan",
    era: "sovyet",
    region: "Çeçenya",
    birthPlace: "Şatoy",
    deathPlace: "Vozdvijenskaya",
    center: "Şatoy, Grozni",
    image: "/images/p-seripov.jpg",
    gallery: [
      { src: "/images/p-seripov.jpg", caption: "Aslanbek Şeripov (1897–1919) arşiv portresi" },
      { src: "/images/atli-birlik-fotografi" === "/images/atli-birlik-fotografi" ? "/images/kisiler.jpg" : "/images/kisiler.jpg", caption: "20. yüzyıl başı Kuzey Kafkasya atlıları" },
      { src: "/images/c-muzik.jpg", caption: "Şeripov'un derlediği Çeçen epik şarkıları (illi)" },
    ],
    docs: ["atli-birlik-fotografi"],
    summary:
      "22 yıllık kısa ömrüne Çeçen halk şarkıları derlemeleri, siyasi makaleler ve iç savaş komutanlığı sığdıran parlak entelektüel.",
    bio: [
      "Şatoylu bir subay ailesinin çocuğu olan Aslanbek Şeripov, genç yaşta Çeçen sözlü edebiyatı ve abrek destanlarını Rusçaya çevirerek yayımladı.",
      "1917 sonrası Kuzey Kafkasya halk kongrelerinde dağlıların toprak haklarını ve kültürel özerkliğini savunan ateşli konuşmalarıyla öne çıktı.",
      "Eylül 1919'da Denikin'in Beyaz Ordu birliklerine karşı Vozdvijenskaya cephesinde savaşırken henüz 22 yaşında hayatını kaybetti.",
    ],
    related: ["uzun-haci", "abdurrahman-avtorhanov"],
  },
  {
    slug: "abdurrahman-avtorhanov",
    name: "Abdurrahman Avtorhanov",
    born: "1908",
    died: "1997",
    title: "Tarihçi, siyaset bilimci ve yazar",
    era: "sovyet",
    region: "Çeçenya",
    birthPlace: "Lakha-Nevre (Nadtereçnoye)",
    deathPlace: "Münih",
    center: "Grozni, Münih",
    image: "/images/p-avtorhanov.jpg",
    gallery: [
      { src: "/images/p-avtorhanov.jpg", caption: "Prof. Abdurrahman Avtorhanov arşiv portresi" },
      { src: "/images/doc-surgun.jpg", caption: "23 Şubat 1944 sürgünü arşiv belgesi" },
      { src: "/images/arsiv.jpg", caption: "Tarih yazımı ve el yazması koleksiyonları" },
    ],
    docs: ["surgun-listeleri-1944"],
    summary:
      "1944 Çeçen-İnguş sürgününü ve Sovyet iktidar mekanizmasını dünya akademisine belgeleyen en önemli Kafkasyalı tarihçi ve siyaset bilimci.",
    bio: [
      "1908'de Çeçenya'da doğan Avtorhanov, Moskova'da Kızıl Profesörler Enstitüsü'nden mezun oldu ve genç yaşta Çeçen tarihi üzerine ilk akademik monografilerden birini kaleme aldı.",
      "1937 tasfiyelerinde yıllarca hapis yattıktan sonra İkinci Dünya Savaşı yıllarında Batı'ya geçerek Münih'e yerleşti; 1944 sürgününün boyutlarını Birleşmiş Milletler ve dünya basınına duyuran çalışmaları yayımladı.",
      "'İktidar Teknolojisi' ve 'Çeçen-İnguş Halkının Katli' başta olmak üzere yirmiden fazla dilde basılan eserler bıraktı ve 1997'de Münih'te vefat etti.",
    ],
    related: ["idris-bazorkin", "mahmud-esambayev"],
  },
  {
    slug: "idris-bazorkin",
    name: "İdris Bazorkin",
    born: "1910",
    died: "1993",
    title: "İnguş edebiyatının kurucu romancısı",
    era: "yakin",
    region: "İnguşetya",
    birthPlace: "Bazorkino (Çermen)",
    deathPlace: "Nazran",
    center: "Cerah Vadisi, Nazran",
    image: "/images/p-bazorkin.jpg",
    gallery: [
      { src: "/images/p-bazorkin.jpg", caption: "İnguş yazar İdris Bazorkin portresi" },
      { src: "/images/targim-towers.jpg", caption: "Romanlarına ilham veren Cerah ve Targim kuleleri" },
      { src: "/images/doc-tower.jpg", caption: "1890 tarihli Targim kuleleri arşiv fotoğrafı" },
      { src: "/images/c-mimari.jpg", caption: "Vaynah taş kule mimarisi ve güneş tamgası" },
    ],
    docs: ["targim-kuleleri-fotografi", "kuleler-albumu"],
    summary:
      "Başyapıtı 'Asırların Karanlığından' (Из тьмы веков) ile İnguş kule kültürünü, Ezdel ahlakını ve dağ yaşamını dünya edebiyatına taşıyan usta kalem.",
    bio: [
      "Tarihi İnguş kule yerleşimlerinin izlerini taşıyan köklü bir ailenin ferdi olan İdris Bazorkin, öğretmenlik, tiyatro yazarlığı ve etnografya araştırmaları yürüttü.",
      "1944 Orta Asya sürgünü yıllarında Kırgızistan'da halkının yaşadığı acılara tanıklık etti; 1957'deki dönüş sürecinde İnguş kültür kurumlarının yeniden inşasına öncülük etti.",
      "1968'de yayımlanan destansı romanı 'Asırların Karanlığından', her İnguş evinde başucu eseri sayılan kültürel bir hafıza anıtına dönüştü.",
    ],
    related: ["abdurrahman-avtorhanov", "mahmud-esambayev"],
  },
  {
    slug: "mahmud-esambayev",
    name: "Mahmud Esambayev",
    born: "1924",
    died: "2000",
    title: "Dünya sahnelerinin Kafkasyalı koreografı",
    era: "yakin",
    region: "Çeçenya",
    birthPlace: "Staryye Atagi",
    deathPlace: "Moskova",
    center: "Staryye Atagi, Bişkek, Grozni",
    image: "/images/p-esambayev.jpg",
    gallery: [
      { src: "/images/p-esambayev.jpg", caption: "Mahmud Esambayev sahne kostümü ve papahasıyla" },
      { src: "/images/c-muzik.jpg", caption: "Geleneksel dechig-pondar ve Kafkas ritmi" },
      { src: "/images/c-giyim.jpg", caption: "Çerkeska ve gümüş kemer geleneği" },
    ],
    docs: ["el-sanatlari-katalogu"],
    summary:
      "Başından hiç çıkarmadığı papahası ve eşsiz sahne diliyle sürgün yıllarının karanlığından dünya bale ve dans sahnelerinin zirvesine yükselen sanat elçisi.",
    bio: [
      "1924'te Argun kıyısındaki Staryye Atagi köyünde doğan Esambayev, çocuk yaşta köy düğünlerinde (lovzar) dans ederek yeteneğini gösterdi; cephede yaralandıktan kısa süre sonra 1944'te ailesiyle birlikte Orta Asya'ya sürgün edildi.",
      "Sürgün yıllarında Kırgız Devlet Opera ve Balesi'nin baş dansçısı oldu; 1957 sonrasında dünya halklarının ritüel danslarını Kafkas zarafetiyle birleştirerek Paris'ten Buenos Aires'e kadar ayakta alkışlandı.",
      "Resmi törenlerde dahi başından çıkarmadığı papahasını 'halkımın tacı' olarak tanımlayan Esambayev, Ocak 2000'de vefat etti.",
    ],
    related: ["idris-bazorkin", "abdurrahman-avtorhanov"],
  },
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
