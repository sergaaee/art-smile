import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "../../_components/InfoPage";

export const metadata: Metadata = {
  title: "Фотогалерея — АРТ-СМАИЛ",
  description: "Фотографии клиники «АРТ-СМАИЛ».",
};

export default function GalleryPage() {
  return (
    <InfoPage
      title="Фотогалерея"
      lead="Фотографии кабинетов и оборудования клиники скоро появятся в этом разделе."
    >
      <p>
        Раздел находится в стадии наполнения. Пока фотографии клиники можно
        посмотреть в её профилях в социальных сетях и на картах — ссылки на
        филиалы доступны в разделе{" "}
        <Link href="/#kontakty" className="text-blue-700 hover:underline">
          «Контакты»
        </Link>
        .
      </p>
    </InfoPage>
  );
}
