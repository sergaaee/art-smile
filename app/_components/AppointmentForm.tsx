"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckIcon } from "./icons";
import { locations } from "../_data/locations";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState(locations[0]?.id ?? "");
  const [comment, setComment] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isValid = name.trim().length > 1 && phone.trim().length > 5 && consent;

  // No backend is connected yet — submission only updates local UI state.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid) return;
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-blue-50 px-6 py-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
          <CheckIcon className="h-6 w-6" />
        </span>
        <p className="text-lg font-semibold text-slate-900">Заявка отправлена!</p>
        <p className="max-w-xs text-sm text-slate-600">
          Мы перезвоним вам в ближайшее рабочее время, чтобы подобрать удобную дату приёма.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
          Ваше имя
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Иван Иванов"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
          Телефон
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="+7 (___) ___-__-__"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
      </div>

      <div>
        <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-slate-700">
          Филиал
        </label>
        <select
          id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        >
          {locations.map((loc) => (
            <option key={loc.id} value={loc.id}>
              {loc.shortName}, {loc.address.split(", ").slice(-2).join(", ")}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="comment" className="mb-1.5 block text-sm font-medium text-slate-700">
          Комментарий (необязательно)
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Например: болит зуб, нужна консультация ортодонта"
          rows={3}
          className="w-full resize-none rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
      </div>

      <label className="flex items-start gap-2.5 text-xs text-slate-500">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-600/30"
        />
        <span>
          Я согласен(-на) на обработку персональных данных в соответствии с{" "}
          <Link
            href="/politika-konfidentsialnosti"
            onClick={(event) => event.stopPropagation()}
            className="text-blue-700 hover:underline"
          >
            политикой конфиденциальности
          </Link>
        </span>
      </label>

      <button
        type="submit"
        disabled={!isValid}
        className="mt-1 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Записаться на приём
      </button>
    </form>
  );
}
