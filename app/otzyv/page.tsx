import type { Metadata } from "next";
import Link from "next/link";
import ReviewForm from "../_components/ReviewForm";

export const metadata: Metadata = {
  title: "Оставить отзыв — АРТ-СМАИЛ",
  description: "Оставьте отзыв о стоматологии «АРТ-СМАИЛ» — он придёт нам на почту.",
  alternates: { canonical: "/otzyv" },
};

export default function ReviewPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Оставить отзыв
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Нам важна ваша обратная связь. Отзыв придёт нам на почту, и мы
        обязательно его прочитаем.
      </p>

      <div className="mt-10">
        <ReviewForm />
      </div>

      <p className="mt-6 text-sm text-slate-500">
        Также можно написать нам напрямую на{" "}
        <a href="mailto:nikitina.art-smail@yandex.ru" className="text-blue-700 hover:underline">
          nikitina.art-smail@yandex.ru
        </a>{" "}
        или позвонить по телефону{" "}
        <a href="tel:+79265305003" className="text-blue-700 hover:underline">
          +7 (926) 530-50-03
        </a>
        .
      </p>

      <div className="mt-12 border-t border-slate-200 pt-6">
        <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
