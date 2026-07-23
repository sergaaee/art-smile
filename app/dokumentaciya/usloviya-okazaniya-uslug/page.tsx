import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "../../_components/InfoPage";

export const metadata: Metadata = {
  title: "Условия оказания услуг — АРТ-СМАИЛ",
  description: "Условия оказания платных медицинских услуг в стоматологии «АРТ-СМАИЛ».",
  alternates: { canonical: "/dokumentaciya/usloviya-okazaniya-uslug" },
};

const DOGOVOR_LINK = (
  <Link href="/dokumentaciya/dogovor" className="text-blue-700 hover:underline">
    Договора
  </Link>
);

const SOGLASIE_LINK = (
  <a
    href="/documents/soglasie-na-obrabotku-personalnyh-dannyh.docx"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 hover:underline"
  >
    согласия на обработку персональных данных
  </a>
);

export default function ServiceTermsPage() {
  return (
    <InfoPage title="Условия оказания услуг">
      <ol className="list-decimal space-y-4 pl-5">
        <li>
          Платные медицинские услуги оказываются на основе {DOGOVOR_LINK}{" "}
          сторон и согласия Потребителя приобрести медицинскую услугу на
          возмездной основе.
        </li>
        <li>
          Подробная информация о методах оказания медицинской услуги,
          связанных с ними рисках, их последствиях и ожидаемом результате
          доводится до Потребителя перед её оказанием путём подписания между
          Потребителем и Исполнителем <b>информированного добровольного
          согласия</b> (ИДС) на медицинское вмешательство.
        </li>
        <li>
          Предоставление медицинских услуг без подписанного Потребителем{" "}
          {DOGOVOR_LINK} и ИДС на медицинское вмешательство <b>не допускается</b>.
        </li>
        <li>
          Обработка персональных данных Потребителя осуществляется на
          основании отдельного согласия, <b>для целей</b> исполнения Исполнителем
          обязательств по договору. Обработка персональных данных должна быть
          подтверждена подписанием {SOGLASIE_LINK}.
        </li>
      </ol>
    </InfoPage>
  );
}
