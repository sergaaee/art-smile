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
        Директор стоматологической клиники {legalInfo.shortName}{" "}
        {legalInfo.generalDirector} осуществляет приём граждан во второй и
        четвёртый понедельник месяца с 10:00 до 13:00 пос. Птичное, улица Центральна д. 90.
      </p>
      <p>
        Письменное обращение рассматривается в срок, установленный
        законодательством Российской Федерации об обращениях граждан.
      </p>
    </InfoPage>
  );
}
