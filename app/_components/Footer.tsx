import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "./icons";
import { locations } from "../_data/locations";
import { legalInfo } from "../_data/legal";

const quickLinks = [
  { href: "/#uslugi", label: "Услуги" },
  { href: "/#vrachi", label: "Врачи" },
  { href: "/#tseny", label: "Цены" },
  { href: "/#o-nas", label: "О нас" },
  { href: "/#dokumenty", label: "Документы" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-slate-900">
              <Image
                src="/logo-artsmile.png"
                alt="АРТ-СМАИЛ Стоматология"
                width={210}
                height={240}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Стоматологическая клиника «АРТ-СМАИЛ» в Новой Москве. Терапия,
              хирургия, имплантация, ортодонтия и детская стоматология в двух
              филиалах.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Навигация</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-blue-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Контакты</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <a href="tel:+79265305003" className="hover:text-blue-700">
                  +7 (926) 530-50-03
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <a href="mailto:nikitina.art-smail@yandex.ru" className="hover:text-blue-700 break-all">
                  nikitina.art-smail@yandex.ru
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Филиалы</h3>
            <ul className="mt-4 space-y-4">
              {locations.map((location) => (
                <li key={location.id} className="text-sm text-slate-600">
                  <p className="flex items-start gap-2.5 font-medium text-slate-800">
                    <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    {location.shortName}
                  </p>
                  <p className="mt-1 flex items-start gap-2.5">
                    <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    {location.hours}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500">
          <p>
            © {year} {legalInfo.shortName}, ИНН {legalInfo.inn}, ОГРН {legalInfo.ogrn}.
            Все права защищены. Информация на сайте не является публичной офертой.
          </p>
          <p className="mt-1">
            Лицензия № {legalInfo.licenseNumber} от {legalInfo.licenseDate}, выдана{" "}
            {legalInfo.licenseIssuer}.
          </p>
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/politika-konfidentsialnosti" className="hover:text-blue-700 hover:underline">
              Политика конфиденциальности
            </Link>
            <Link href="/obrabotka-personalnyh-dannyh" className="hover:text-blue-700 hover:underline">
              Политика обработки персональных данных
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
