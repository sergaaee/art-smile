import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "../../_components/InfoPage";

export const metadata: Metadata = {
  title: "Внутренние документы — АРТ-СМАИЛ",
  description: "Внутренние документы клиники «АРТ-СМАИЛ», размещённые в открытом доступе.",
};

const documents = [
  { href: "/o-klinike/licenziya", label: "Лицензия на медицинскую деятельность" },
  { href: "/politika-konfidentsialnosti", label: "Политика конфиденциальности" },
  { href: "/obrabotka-personalnyh-dannyh", label: "Политика обработки персональных данных" },
  { href: "/pacientam/prava-i-obyazannosti", label: "Права и обязанности пациента" },
  { href: "/pacientam/pravila-vnutrennego-rasporyadka", label: "Правила внутреннего распорядка" },
  { href: "/pacientam/garantii", label: "Гарантии на оказываемые услуги" },
  { href: "/#dokumenty", label: "Документы для подписания пациентом" },
];

export default function InternalDocumentsPage() {
  return (
    <InfoPage
      title="Внутренние документы"
      lead="Локальные документы клиники, регулирующие оказание медицинской помощи и обработку персональных данных."
    >
      <ul>
        {documents.map((doc) => (
          <li key={doc.href}>
            <Link href={doc.href} className="text-blue-700 hover:underline">
              {doc.label}
            </Link>
          </li>
        ))}
      </ul>
    </InfoPage>
  );
}
