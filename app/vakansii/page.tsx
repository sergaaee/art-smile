import type { Metadata } from "next";
import InfoPage from "../_components/InfoPage";

export const metadata: Metadata = {
  title: "Вакансии — АРТ-СМАИЛ",
  description: "Вакансии стоматологии «АРТ-СМАИЛ»: ассистент стоматолога.",
  alternates: { canonical: "/vakansii" },
};

const vacancies = [
  {
    title: "Ассистент стоматолога",
    schedule: "График работы 5/2",
    salary: "от 70 000 до 80 000 руб. в месяц",
  },
];

export default function VacanciesPage() {
  return (
    <InfoPage title="Вакансии" lead="Открытые позиции в клинике «АРТ-СМАИЛ».">
      <div className="space-y-4">
        {vacancies.map((vacancy) => (
          <div key={vacancy.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
            <h3 className="text-base font-semibold text-slate-900">{vacancy.title}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li>{vacancy.schedule}</li>
              <li>Заработная плата: {vacancy.salary}</li>
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-6">
        Чтобы откликнуться, пришлите резюме на{" "}
        <a href="mailto:nikitina.art-smail@yandex.ru" className="text-blue-700 hover:underline">
          nikitina.art-smail@yandex.ru
        </a>{" "}
        с пометкой «Резюме: Ассистент стоматолога» или позвоните по телефону{" "}
        <a href="tel:+79265305003" className="text-blue-700 hover:underline">
          +7 (926) 530-50-03
        </a>
        .
      </p>
      <p>
        Если вы врач-стоматолог или администратор и хотите работать в нашей
        команде — присылайте резюме даже без открытой вакансии, мы свяжемся
        с вами, если появится подходящая позиция.
      </p>
    </InfoPage>
  );
}
