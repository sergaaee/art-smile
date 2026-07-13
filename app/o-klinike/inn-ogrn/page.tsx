import type { Metadata } from "next";
import Image from "next/image";
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

      <h2>Свидетельства ФНС</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <a href="/documents/ogrn.jpeg" target="_blank" rel="noopener noreferrer" className="block">
          <Image
            src="/documents/ogrn.jpeg"
            alt="Свидетельство о государственной регистрации юридического лица (ОГРН)"
            width={783}
            height={1122}
            className="w-full rounded-lg ring-1 ring-slate-200 transition-opacity hover:opacity-90"
          />
        </a>
        <a href="/documents/inn.jpeg" target="_blank" rel="noopener noreferrer" className="block">
          <Image
            src="/documents/inn.jpeg"
            alt="Свидетельство о постановке на учёт российской организации в налоговом органе (ИНН/КПП)"
            width={794}
            height={1122}
            className="w-full rounded-lg ring-1 ring-slate-200 transition-opacity hover:opacity-90"
          />
        </a>
      </div>
      <p className="text-xs text-slate-500">Нажмите на изображение, чтобы открыть в полном размере.</p>
    </InfoPage>
  );
}
