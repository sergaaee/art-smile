import type { Metadata } from "next";
import InfoPage from "../../_components/InfoPage";

export const metadata: Metadata = {
  title: "Наши принципы — АРТ-СМАИЛ",
  description: "Принципы работы стоматологии «АРТ-СМАИЛ».",
};

export default function PrinciplesPage() {
  return (
    <InfoPage title="Наши принципы" lead="Чем мы руководствуемся в работе с каждым пациентом.">
      <ul>
        <li>
          <strong className="text-slate-900">Честность в диагностике и цене.</strong>{" "}
          Лечим только то, что действительно нужно, и озвучиваем стоимость до
          начала работы — без скрытых доплат.
        </li>
        <li>
          <strong className="text-slate-900">Комфорт и отсутствие боли.</strong>{" "}
          Подбираем анестезию индивидуально, с учётом возраста и состояния
          здоровья пациента.
        </li>
        <li>
          <strong className="text-slate-900">Безопасность.</strong> Строго
          соблюдаем протоколы стерилизации и дезинфекции на каждом приёме.
        </li>
        <li>
          <strong className="text-slate-900">Качество и гарантия.</strong>{" "}
          Используем материалы и импланты с подтверждённой эффективностью,
          предоставляем официальную гарантию на выполненные работы.
        </li>
        <li>
          <strong className="text-slate-900">Уважение к пациенту.</strong>{" "}
          Объясняем каждый этап лечения понятным языком и отвечаем на
          вопросы столько, сколько нужно.
        </li>
      </ul>
    </InfoPage>
  );
}
