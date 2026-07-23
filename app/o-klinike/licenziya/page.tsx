import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "../../_components/InfoPage";
import { legalInfo } from "../../_data/legal";

export const metadata: Metadata = {
  title: "Лицензия — АРТ-СМАИЛ",
  description: "Информация о лицензии на медицинскую деятельность стоматологии «АРТ-СМАИЛ».",
  alternates: { canonical: "/o-klinike/licenziya" },
};

export default function LicensePage() {
  return (
    <InfoPage
      title="Лицензия"
      lead="Стоматология «АРТ-СМАИЛ» оказывает медицинские услуги на основании действующей лицензии на медицинскую деятельность."
    >
      <p>
        Лицензия № {legalInfo.licenseNumber} от {legalInfo.licenseDate}.
        Выдана {legalInfo.licenseIssuer}.
      </p>
      <p>
        Лицензия предоставляет право на оказание первичной,
        специализированной и стоматологической медицинской помощи по месту
        осуществления лицензируемого вида деятельности — по адресам
        филиалов клиники, указанным в разделе{" "}
        <Link href="/#kontakty" className="text-blue-700 hover:underline">
          «Контакты»
        </Link>
        .
      </p>
      <h2>Как проверить лицензию</h2>
      <p>
        Актуальные сведения о лицензии медицинской организации можно
        проверить в реестре лицензий на официальном сайте лицензирующего
        органа — Департамента здравоохранения города Москвы, указав
        наименование организации ({legalInfo.shortName}) или номер лицензии.
      </p>
      <p>
        Оригинал лицензии предоставляется для ознакомления на ресепшене
        клиники по запросу пациента.
      </p>
    </InfoPage>
  );
}
