import type { Metadata } from "next";
import InfoPage from "../../_components/InfoPage";

export const metadata: Metadata = {
  title: "Справка для налогового вычета — АРТ-СМАИЛ",
  description: "Как получить справку об оплате медицинских услуг для оформления налогового вычета.",
};

export default function TaxDeductionPage() {
  return (
    <InfoPage
      title="Справка для налогового вычета"
      lead="Пациент, оплативший лечение официально, вправе получить социальный налоговый вычет по НДФЛ (ст. 219 Налогового кодекса РФ)."
    >
      <h2>Что нужно для оформления вычета</h2>
      <ul>
        <li>справка об оплате медицинских услуг для представления в налоговые органы — установленной формы, выдаётся клиникой;</li>
        <li>копия договора на оказание медицинских услуг;</li>
        <li>копия лицензии клиники (при необходимости — предоставляется по запросу);</li>
        <li>копии платёжных документов (чеков, квитанций).</li>
      </ul>
      <h2>Бланки заявлений</h2>
      <ul>
        <li>
          <a
            href="/documents/zayavlenie-pacient.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Заявление от пациента
          </a>{" "}
          — если справка оформляется на самого пациента;
        </li>
        <li>
          <a
            href="/documents/zayavlenie-drugoe-lico.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Заявление на другое лицо
          </a>{" "}
          — если справка оформляется для налогового вычета другого члена
          семьи.
        </li>
      </ul>
      <h2>Как заказать справку</h2>
      <p>
        Для получения справки обратитесь к администратору клиники лично, по
        телефону{" "}
        <a href="tel:+79265305003" className="text-blue-700 hover:underline">
          +7 (926) 530-50-03
        </a>{" "}
        или по e-mail{" "}
        <a href="mailto:nikitina.art-smail@yandex.ru" className="text-blue-700 hover:underline">
          nikitina.art-smail@yandex.ru
        </a>
        , указав ФИО пациента и период оказания услуг. Справка готовится на
        основании данных об оплате, зафиксированных в клинике.
      </p>
      <p>
        Размер и порядок получения вычета определяются Федеральной налоговой
        службой — актуальные условия уточняйте на официальном сайте
        nalog.gov.ru.
      </p>
    </InfoPage>
  );
}
