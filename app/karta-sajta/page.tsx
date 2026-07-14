import type { Metadata } from "next";
import Link from "next/link";
import { serviceDetails } from "../_data/serviceDetails";

export const metadata: Metadata = {
  title: "Карта сайта — АРТ-СМАИЛ",
  description: "Карта сайта стоматологии «АРТ-СМАИЛ»: все страницы и разделы.",
};

const sections = [
  {
    title: "Основные разделы",
    links: [
      { href: "/", label: "Главная" },
      { href: "/#o-nas", label: "О нас" },
      { href: "/#uslugi", label: "Услуги" },
      { href: "/#vrachi", label: "Врачи" },
      { href: "/#tseny", label: "Цены" },
      { href: "/#dokumenty", label: "Документы" },
      { href: "/#kontakty", label: "Контакты" },
    ],
  },
  {
    title: "О клинике",
    links: [
      { href: "/o-klinike/licenziya", label: "Лицензия" },
      { href: "/o-klinike/inn-ogrn", label: "ИНН/ОГРН" },
      { href: "/o-klinike/vidy-pomoshi", label: "Виды оказываемой помощи" },
      { href: "/o-klinike/priem-rukovodstva", label: "Приём граждан руководством" },
      { href: "/o-klinike/standarty", label: "Стандарты, протоколы и клинические рекомендации" },
      { href: "/o-klinike/printsipy", label: "Наши принципы" },
      { href: "/#o-nas", label: "Фотогалерея" },
    ],
  },
  {
    title: "Пациентам",
    links: [
      { href: "/pacientam/prava-i-obyazannosti", label: "Права и обязанности пациента" },
      { href: "/pacientam/pravila-vnutrennego-rasporyadka", label: "Правила внутреннего распорядка" },
      { href: "/pacientam/garantii", label: "Гарантии на оказываемые услуги" },
      { href: "/pacientam/podgotovka-k-issledovaniyam", label: "Подготовка к диагностическим исследованиям" },
      { href: "/pacientam/pravila-povedeniya", label: "Правила поведения пациентов" },
      { href: "/politika-konfidentsialnosti", label: "Политика конфиденциальности" },
      { href: "/obrabotka-personalnyh-dannyh", label: "Политика обработки персональных данных" },
      { href: "/pacientam/nalogovyj-vychet", label: "Справка для налогового вычета" },
    ],
  },
  {
    title: "Наши услуги",
    links: serviceDetails.map((service) => ({
      href: `/uslugi/${service.slug}`,
      label: service.title,
    })),
  },
  {
    title: "Полезная информация",
    links: [
      { href: "/informaciya/posle-udaleniya-zuba", label: "Памятка после удаления зуба" },
      { href: "/informaciya/pamyatka-pacientam", label: "Памятка пациентам" },
      { href: "/informaciya/semnye-protezy-sovety", label: "Советы пользующимся съёмными протезами" },
      { href: "/informaciya/ortodonticheskoe-lechenie", label: "Памятка при ортодонтическом лечении" },
      { href: "/informaciya/posle-lecheniya-kariesa", label: "После лечения кариеса" },
      { href: "/informaciya/posle-lecheniya-kornevyh-kanalov", label: "После лечения корневых каналов" },
      { href: "/informaciya/pravila-polzovaniya-protezami", label: "Правила пользования съёмными протезами" },
      { href: "/informaciya/posle-otbelivaniya", label: "После отбеливания зубов" },
      { href: "/informaciya/posle-restavracii", label: "После реставрации зубов" },
      { href: "/informaciya/lechenie-molochnyh-zubov", label: "Почему важно лечить молочные зубы" },
    ],
  },
  {
    title: "Нормативная документация",
    links: [
      { href: "/dokumentaciya/federalnye-akty", label: "Федеральные нормативные акты" },
      { href: "/dokumentaciya/vyshestoyashie-organizacii", label: "Вышестоящие организации" },
    ],
  },
  {
    title: "Документы для скачивания",
    links: [
      {
        href: "/documents/soglasie-na-obrabotku-personalnyh-dannyh.docx",
        label: "Согласие на обработку персональных данных (DOCX)",
        external: true,
      },
      {
        href: "/documents/659.pdf",
        label: "Постановление Правительства РФ о правилах предоставления медицинскими организациями платных медицинских услуг (PDF)",
        external: true,
      },
      {
        href: "/documents/dogovor.docx",
        label: "Договор оказания медицинских услуг (DOCX)",
        external: true,
      },
      {
        href: "/documents/prava-i-obuazannosti-v-sfere-zdorovya.pdf",
        label: "Права и обязанности граждан в сфере охраны здоровья (PDF)",
        external: true,
      },
      {
        href: "/documents/pravila-povedenia-pacientov.pdf",
        label: "Правила поведения пациентов (PDF)",
        external: true,
      },
      {
        href: "/documents/federalnyj-zakon-323-fz.docx",
        label: "Федеральный закон № 323-ФЗ (DOCX)",
        external: true,
      },
      {
        href: "/documents/zakon-o-zashite-prav-potrebitelej.docx",
        label: "Закон «О защите прав потребителей» (DOCX)",
        external: true,
      },
    ],
  },
  {
    title: "Дополнительно",
    links: [
      { href: "/akcii", label: "Акции и скидки" },
      { href: "/vakansii", label: "Вакансии" },
      { href: "/otzyv", label: "Оставить отзыв" },
      { href: "/karta-sajta", label: "Карта сайта" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Карта сайта
      </h1>
      <p className="mt-4 text-lg text-slate-600">Все страницы и разделы сайта в одном месте.</p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {section.links.map((link, index) =>
                "external" in link && link.external ? (
                  <li key={`${link.href}-${link.label}-${index}`}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-700 hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={`${link.href}-${link.label}-${index}`}>
                    <Link href={link.href} className="text-sm text-blue-700 hover:underline">
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-slate-200 pt-6">
        <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
