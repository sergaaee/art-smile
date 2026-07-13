import type { Metadata } from "next";
import InfoPage from "../../_components/InfoPage";
import { legalInfo } from "../../_data/legal";

export const metadata: Metadata = {
  title: "ИНН/ОГРН — АРТ-СМАИЛ",
  description: "Реквизиты юридического лица стоматологии «АРТ-СМАИЛ».",
};

export default function InnOgrnPage() {
  return (
    <InfoPage title="ИНН / ОГРН" lead="Реквизиты юридического лица клиники.">
      <ul>
        <li>Полное наименование: {legalInfo.fullName}</li>
        <li>Сокращённое наименование: {legalInfo.shortName}</li>
        <li>ИНН: {legalInfo.inn}</li>
        <li>КПП: {legalInfo.kpp}</li>
        <li>ОГРН: {legalInfo.ogrn}</li>
        <li>Дата регистрации: {legalInfo.registrationDate}</li>
        <li>Регистрирующий орган: {legalInfo.registrationAuthority}</li>
        <li>Генеральный директор: {legalInfo.generalDirector}</li>
        <li>Юридический адрес: {legalInfo.legalAddress}</li>
      </ul>
      <p>
        Полную выписку из ЕГРЮЛ можно получить на официальном сайте
        Федеральной налоговой службы (nalog.gov.ru) по указанным ИНН или
        ОГРН.
      </p>
    </InfoPage>
  );
}
