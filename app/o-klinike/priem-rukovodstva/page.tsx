import type { Metadata } from "next";
import InfoPage from "../../_components/InfoPage";
import { legalInfo } from "../../_data/legal";

export const metadata: Metadata = {
  title: "Приём граждан руководством — АРТ-СМАИЛ",
  description: "Как обратиться к руководству клиники «АРТ-СМАИЛ» по вопросам качества обслуживания.",
};

export default function ManagementReceptionPage() {
  return (
    <InfoPage
      title="Приём граждан руководством"
      lead="Если вопрос не удалось решить с администратором или лечащим врачом, вы можете обратиться напрямую к руководству клиники."
    >
      <p>
        Приём обращений граждан по вопросам качества и организации оказания
        медицинской помощи осуществляет генеральный директор клиники{" "}
        {legalInfo.generalDirector}.
      </p>
      <h2>Как записаться на приём</h2>
      <ul>
        <li>
          по телефону:{" "}
          <a href="tel:+79265305003" className="text-blue-700 hover:underline">
            +7 (926) 530-50-03
          </a>
          ;
        </li>
        <li>
          письменно — по электронной почте{" "}
          <a href="mailto:nikitina.art-smail@yandex.ru" className="text-blue-700 hover:underline">
            nikitina.art-smail@yandex.ru
          </a>{" "}
          или почтовым отправлением по адресу клиники;
        </li>
        <li>лично на ресепшене любого из филиалов.</li>
      </ul>
      <p>
        Письменное обращение рассматривается в срок, установленный
        законодательством Российской Федерации об обращениях граждан.
      </p>
    </InfoPage>
  );
}
