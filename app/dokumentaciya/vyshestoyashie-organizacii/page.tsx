import type { Metadata } from "next";
import InfoPage from "../../_components/InfoPage";
import { partners } from "../../_data/partners";

export const metadata: Metadata = {
  title: "Вышестоящие организации — АРТ-СМАИЛ",
  description: "Контролирующие и вышестоящие организации в сфере здравоохранения.",
  alternates: { canonical: "/dokumentaciya/vyshestoyashie-organizacii" },
};

export default function SupervisoryBodiesPage() {
  return (
    <InfoPage
      title="Вышестоящие организации"
      lead="Организации, осуществляющие лицензирование и контроль в сфере здравоохранения, а также рассматривающие обращения пациентов."
    >
      <ul>
        {partners.map((partner) => (
          <li key={partner.href}>
            <a
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              {partner.name}
            </a>
          </li>
        ))}
      </ul>
      <p>
        Жалобу на качество или условия оказания медицинской помощи можно
        также направить непосредственно руководству клиники — см. раздел{" "}
        <a href="/o-klinike/priem-rukovodstva" className="text-blue-700 hover:underline">
          «Приём граждан руководством»
        </a>
        .
      </p>
    </InfoPage>
  );
}
