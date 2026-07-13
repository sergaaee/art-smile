import type { Metadata } from "next";
import InfoPage from "../_components/InfoPage";

export const metadata: Metadata = {
  title: "Вакансии — АРТ-СМАИЛ",
  description: "Вакансии стоматологии «АРТ-СМАИЛ».",
};

export default function VacanciesPage() {
  return (
    <InfoPage
      title="Вакансии"
      lead="На данный момент открытых вакансий нет, но мы всегда рады знакомству с опытными специалистами."
    >
      <p>
        Если вы врач-стоматолог, ассистент или администратор и хотите
        работать в нашей команде, пришлите резюме на{" "}
        <a href="mailto:nikitina.art-smail@yandex.ru" className="text-blue-700 hover:underline">
          nikitina.art-smail@yandex.ru
        </a>{" "}
        с пометкой «Резюме» — мы свяжемся с вами, если появится подходящая
        позиция.
      </p>
    </InfoPage>
  );
}
