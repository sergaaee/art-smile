import type { Metadata } from "next";
import Link from "next/link";
import { legalInfo } from "../_data/legal";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — АРТ-СМАИЛ",
  description:
    "Политика конфиденциальности сайта стоматологии «АРТ-СМАИЛ»: какие данные собираются, для чего используются и как защищаются.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Политика конфиденциальности
      </h1>
      <p className="mt-4 text-sm text-slate-500">
        Действует в отношении сайта стоматологии «{legalInfo.shortName}»
      </p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">1. Общие положения</h2>
          <p className="mt-3">
            Настоящая Политика конфиденциальности определяет порядок обработки
            персональных данных посетителей сайта и действует в отношении всей
            информации, которую оператор сайта может получить о пользователе во
            время использования сайта.
          </p>
          <p className="mt-3">
            Оператор персональных данных — {legalInfo.fullName} ({legalInfo.shortName}),
            ИНН {legalInfo.inn}, ОГРН {legalInfo.ogrn}, адрес: {legalInfo.legalAddress}.
            Контакты: телефон +7 (926) 530-50-03, e-mail{" "}
            <a href="mailto:nikitina.art-smail@yandex.ru" className="text-blue-700 hover:underline">
              nikitina.art-smail@yandex.ru
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            2. Какие данные собираются
          </h2>
          <p className="mt-3">Данные, которые пользователь предоставляет сам:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>имя;</li>
            <li>контактный телефон;</li>
            <li>текст комментария при заполнении формы записи на приём;</li>
            <li>адрес электронной почты — при обращении по e-mail.</li>
          </ul>
          <p className="mt-3">Данные, которые собираются автоматически:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>IP-адрес;</li>
            <li>информация из cookie-файлов браузера;</li>
            <li>сведения о браузере и технических характеристиках устройства;</li>
            <li>дата и время обращения к сайту.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            3. Цели обработки персональных данных
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>обратная связь с пользователем, обработка заявки на приём;</li>
            <li>информирование о работе клиники и оказываемых услугах;</li>
            <li>техническая поддержка и улучшение работы сайта.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            4. Условия обработки и передачи данных
          </h2>
          <p className="mt-3">
            Оператор обрабатывает персональные данные пользователя только в
            случае их заполнения и/или отправки пользователем самостоятельно
            через формы на сайте. Оператор не передаёт данные третьим лицам, за
            исключением случаев, прямо предусмотренных законодательством
            Российской Федерации, либо с явного согласия пользователя.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            5. Права пользователя
          </h2>
          <p className="mt-3">Пользователь вправе:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>получить информацию, касающуюся обработки его персональных данных;</li>
            <li>требовать уточнения, блокирования или уничтожения своих данных, если они неполны, устарели или неточны;</li>
            <li>отозвать согласие на обработку персональных данных, направив письменное обращение оператору.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            6. Защита данных
          </h2>
          <p className="mt-3">
            Оператор принимает необходимые организационные и технические меры
            для защиты персональных данных пользователя от неправомерного или
            случайного доступа, уничтожения, изменения, блокирования,
            копирования, распространения, а также от иных неправомерных
            действий третьих лиц.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            7. Файлы cookie
          </h2>
          <p className="mt-3">
            Сайт использует файлы cookie для корректной работы отдельных
            функций (например, сохранения состояния элементов интерфейса). На
            момент публикации настоящей редакции сайт не использует сервисы
            веб-аналитики и рекламные счётчики; при их подключении в будущем
            эта страница будет обновлена.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">8. Контакты</h2>
          <p className="mt-3">
            По вопросам обработки персональных данных можно обратиться по
            телефону +7 (926) 530-50-03 или e-mail{" "}
            <a href="mailto:nikitina.art-smail@yandex.ru" className="text-blue-700 hover:underline">
              nikitina.art-smail@yandex.ru
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-slate-200 pt-6">
        <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
