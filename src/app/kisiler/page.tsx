import type { Metadata } from "next";
import PeoplePortraitHero from "@/components/PeoplePortraitHero";
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
    <PeoplePortraitHero
      people={PEOPLE.map(
        ({ slug, name, image, born, died, era, region, title, summary }) => ({
          slug,
          name,
          image,
          born,
          died,
          era,
          region,
          title,
          summary,
        }),
      )}
    />
  );
}
