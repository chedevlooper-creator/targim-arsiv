import type { Metadata } from "next";
import PeoplePortraitHero from "@/components/PeoplePortraitHero";
import PeopleGrid from "@/components/PeopleGrid";
import { PEOPLE } from "@/lib/data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Kişiler",
  description:
    "Kafkasya tarihine yön veren imamlar, komutanlar, mutasavvıflar, yazarlar ve sanatçılar.",
  path: "/kisiler",
  image: "/images/kisiler.jpg",
});

export default function KisilerPage() {
  return (
    <>
      <PeoplePortraitHero
        people={PEOPLE.map(({ slug, name, image, born, died }) => ({
          slug,
          name,
          image,
          born,
          died,
        }))}
      />
      <section
        id="kisi-katalogu"
        className="mx-auto max-w-[1500px] scroll-mt-24 px-5 pb-20 pt-10 md:px-12"
      >
        <PeopleGrid />
      </section>
    </>
  );
}
