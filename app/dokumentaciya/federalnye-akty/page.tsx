import type {Metadata} from "next";
import InfoPage from "../../_components/InfoPage";

export const metadata: Metadata = {
    title: "Федеральные нормативные акты — АРТ-СМАИЛ",
    description: "Федеральные нормативные акты, регулирующие оказание медицинской помощи.",
    alternates: { canonical: "/dokumentaciya/federalnye-akty" },
};

const acts = [
    {
        name: "Федеральный закон от 21.11.2011 № 323-ФЗ «Об основах охраны здоровья граждан в Российской Федерации»",
        href: "/documents/federalnyj-zakon-323-fz.docx",
    },
    {
        name: "Закон РФ от 07.02.1992 № 2300-1 «О защите прав потребителей»",
        href: "/documents/zakon-o-zashite-prav-potrebitelej.docx",
    },
    {name: "Федеральный закон от 27.07.2006 № 152-ФЗ «О персональных данных»"},
    {
        name: "Постановление Правительства РФ от 30.05.26 № 659 «Об утверждении Правил предоставления медицинскими организациями платных медицинских услуг»",
        href: "/documents/659.pdf",
    },
];

export default function FederalActsPage() {
    return (
        <InfoPage
            title="Федеральные нормативные акты"
            lead="Перечень основных федеральных нормативных актов, которыми руководствуется клиника при оказании медицинской помощи. Часть документов доступна для скачивания."
        >
            <ul>
                {acts.map((act) => (
                    <li key={act.name}>
                        {act.href ? (
                            <a
                                href={act.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:underline"
                            >
                                {act.name}
                            </a>
                        ) : (
                            act.name
                        )}
                    </li>
                ))}
            </ul>
            <p>
                Актуальные редакции документов размещены в справочно-правовых
                системах и на официальном интернет-портале правовой информации
                pravo.gov.ru.
            </p>
        </InfoPage>
    );
}
