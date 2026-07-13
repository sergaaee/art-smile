import Image from "next/image";
import AppointmentForm from "./_components/AppointmentForm";
import PriceList from "./_components/PriceList";
import LocationMap from "./_components/LocationMap";
import { locations } from "./_data/locations";
import { legalInfo } from "./_data/legal";
import {
  BraceIcon,
  BrushIcon,
  CheckIcon,
  ClockIcon,
  CrownIcon,
  ExtractIcon,
  ImplantIcon,
  KidIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparkleIcon,
  ToothIcon,
  UsersIcon,
} from "./_components/icons";

const advantages = [
  {
    icon: UsersIcon,
    title: "Комфорт без боли",
    description:
      "Широкий выбор обезболивающих средств подбирается индивидуально с учётом возраста и состояния здоровья пациента.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Строгая стерилизация",
    description:
      "Строгое соблюдение норм дезинфекции и стерилизации инструментов на каждом приёме.",
  },
  {
    icon: ImplantIcon,
    title: "Импланты Osstem",
    description:
      "Имплантация «под ключ» на южнокорейских имплантах Osstem — платите один раз, без доплат.",
  },
];

const services = [
  {
    icon: ToothIcon,
    title: "Лечение зубов",
    description: "Диагностика и лечение кариеса и его осложнений на любой стадии.",
  },
  {
    icon: ExtractIcon,
    title: "Хирургия",
    description: "Удаление зубов любой сложности с индивидуальным подбором анестезии.",
  },
  {
    icon: ImplantIcon,
    title: "Имплантация зубов",
    description: "Импланты Osstem (Южная Корея), срок приживления — от 2,5 месяцев.",
  },
  {
    icon: CrownIcon,
    title: "Протезирование зубов",
    description: "Коронки, мосты и съёмные протезы в короткие сроки, с гарантией.",
  },
  {
    icon: BraceIcon,
    title: "Ортодонтия",
    description: "Исправление прикуса у взрослых и детей.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Лечение дёсен",
    description: "В том числе лазерное лечение пародонтита.",
  },
  {
    icon: SparkleIcon,
    title: "Эстетическая стоматология",
    description: "Восстановление формы и цвета зубов.",
  },
  {
    icon: BrushIcon,
    title: "Профессиональная гигиена",
    description: "Профессиональная чистка и профилактика заболеваний полости рта.",
  },
  {
    icon: KidIcon,
    title: "Детская стоматология",
    description: "Лечение зубов у детей в спокойной, доброжелательной обстановке.",
  },
];

const steps = [
  {
    number: "01",
    title: "Запись на приём",
    description: "Оставляете заявку на сайте или звоните — подберём удобное время и филиал.",
  },
  {
    number: "02",
    title: "Диагностика",
    description: "Осмотр и, при необходимости, интраоральный рентген-снимок.",
  },
  {
    number: "03",
    title: "План лечения",
    description: "Врач объясняет варианты лечения и озвучивает стоимость до начала работы.",
  },
  {
    number: "04",
    title: "Лечение и наблюдение",
    description: "Проводим лечение и сопровождаем на всех этапах вплоть до результата.",
  },
];

const doctors = [
  {
    initials: "НЕ",
    name: "Никитина Елена Юрьевна",
    role: "Главный врач, терапевт-хирург",
  },
  {
    initials: "ФА",
    name: "Фомин Александр Михайлович",
    role: "Ортопед, терапевт-хирург",
  },
  {
    initials: "МА",
    name: "Мясников Андрей Михайлович",
    role: "Ортопед, терапевт-хирург",
  },
  {
    initials: "ЛЖ",
    name: "Латыпова Жанна Вячеславовна",
    role: "Терапевт-ортопед",
  },
  {
    initials: "БА",
    name: "Бережная Алевтина Александровна",
    role: "Ортодонт",
  },
  {
    initials: "СС",
    name: "Сагоян Сюзанна Артуровна",
    role: "Детский стоматолог",
  },
  {
    initials: "АЕ",
    name: "Астахова Екатерина Васильевна",
    role: "Терапевт, детский стоматолог",
  },
];

const pricingPoints = [
  "Индивидуальный план лечения и расчёт стоимости уже на первой консультации",
  "Имплантация «под ключ» на имплантах Osstem — фиксированная цена без доплат",
  "Протезирование в короткие сроки без потери качества",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28 lg:px-8">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
              Стоматология полного цикла в Новой Москве
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Здоровая улыбка без страха и боли
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              «АРТ-СМАИЛ» — современное оборудование, опытные врачи и доступные
              цены. Принимаем в двух филиалах: п. Птичное и Новые Ватутинки.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#kontakty"
                className="rounded-full bg-blue-600 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-700"
              >
                Записаться на консультацию
              </a>
              <a
                href="tel:+79265305003"
                className="flex items-center justify-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-blue-600 hover:text-blue-700"
              >
                <PhoneIcon className="h-4 w-4" />
                Позвонить нам
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              <div>
                <dt className="text-2xl font-bold text-slate-900 sm:text-3xl">С 2015</dt>
                <dd className="mt-1 text-sm text-slate-600">года работы по лицензии</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-slate-900 sm:text-3xl">2 филиала</dt>
                <dd className="mt-1 text-sm text-slate-600">в Новой Москве</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-slate-900 sm:text-3xl">5 лет</dt>
                <dd className="mt-1 text-sm text-slate-600">гарантии на работы</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-[2.5rem] bg-blue-600/5 lg:max-w-none">
            <div className="flex h-3/4 w-3/4 items-center justify-center rounded-[2rem] bg-white p-10 shadow-xl shadow-blue-600/20 ring-1 ring-blue-100">
              <Image
                src="/logo-artsmile.png"
                alt="АРТ-СМАИЛ Стоматология"
                width={210}
                height={240}
                className="h-full w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="preimushchestva" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Почему выбирают нас
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Заботимся не только о здоровье зубов, но и о вашем комфорте на каждом этапе лечения.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Наши услуги
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Полный спектр стоматологической помощи для взрослых и детей.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="protsess" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Как проходит приём
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Прозрачный и понятный процесс от первой заявки до результата.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-3xl font-bold text-blue-600">{step.number}</span>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="vrachi" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Наши врачи
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Команда специалистов с профильным образованием и большим опытом работы.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <div key={doctor.name} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
                  {doctor.initials}
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{doctor.name}</h3>
                <p className="mt-1 text-sm text-blue-700">{doctor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="tseny" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Стоимость лечения
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Актуальные цены по официальному прайс-листу клиники. Итоговая
                стоимость лечения зависит от диагностики и согласовывается с
                врачом до начала работы.
              </p>
              <ul className="mt-8 space-y-4">
                {pricingPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-blue-600 p-8 text-white sm:p-10">
              <h3 className="text-xl font-semibold">Узнайте стоимость лечения</h3>
              <p className="mt-3 text-sm text-blue-50">
                Позвоните нам или оставьте заявку — рассчитаем стоимость с учётом вашей ситуации.
              </p>
              <a
                href="tel:+79265305003"
                className="mt-6 flex items-center gap-2 text-lg font-semibold hover:underline"
              >
                <PhoneIcon className="h-5 w-5" />
                +7 (926) 530-50-03
              </a>
              <a
                href="#kontakty"
                className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Оставить заявку
              </a>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-sm text-slate-500">
                Нажмите на категорию, чтобы посмотреть полный список услуг и цен.
              </p>
              <a
                href="/price-19052026.xlsx"
                download
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
              >
                Скачать полный прайс-лист (Excel)
              </a>
            </div>
            <div className="mt-4">
              <PriceList />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="o-klinike" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                О клинике
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-600">
                {legalInfo.shortName} работает в Новой Москве с {legalInfo.registrationDate.slice(-4)} года.
                Клинику возглавляет {legalInfo.generalDirector} — врач
                терапевт-хирург с многолетним опытом. Мы принимаем пациентов
                в двух филиалах и специализируемся на лечении, хирургии,
                имплантации, ортодонтии, эстетической и детской стоматологии.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                В работе используем импланты Osstem (Южная Корея) — срок
                приживления от 2,5 месяцев — и строго соблюдаем протоколы
                дезинфекции и стерилизации.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-500 ring-1 ring-slate-200">
                Лицензия № {legalInfo.licenseNumber} от {legalInfo.licenseDate}
              </div>
            </div>

            <div className="flex items-center justify-center rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
              <Image
                src="/logo-artsmile.png"
                alt="АРТ-СМАИЛ Стоматология"
                width={210}
                height={240}
                className="h-48 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="kontakty" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Записаться на приём
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Оставьте заявку, и администратор свяжется с вами для подтверждения времени визита.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6 sm:p-8">
              <AppointmentForm />
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl bg-blue-600 p-6 text-white sm:p-8">
                <h3 className="text-lg font-semibold">Контактная информация</h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0" />
                    <a href="tel:+79265305003" className="hover:underline">
                      +7 (926) 530-50-03
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MailIcon className="mt-0.5 h-5 w-5 shrink-0" />
                    <a href="mailto:nikitina.art-smail@yandex.ru" className="break-all hover:underline">
                      nikitina.art-smail@yandex.ru
                    </a>
                  </li>
                </ul>
              </div>

              {locations.map((location) => (
                <div key={location.id} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                  <h3 className="text-sm font-semibold text-slate-900">{location.name}</h3>
                  <p className="mt-2 flex items-start gap-2.5 text-sm text-slate-600">
                    <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    {location.address}
                  </p>
                  <p className="mt-2 flex items-start gap-2.5 text-sm text-slate-600">
                    <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    {location.hours}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {locations.map((location) => (
              <LocationMap key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
