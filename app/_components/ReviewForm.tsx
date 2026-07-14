"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "./icons";

function randomInt(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

function makeCaptcha() {
  return { a: randomInt(9), b: randomInt(9) };
}

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [text, setText] = useState("");
  const [consent, setConsent] = useState(false);
  const [captcha, setCaptcha] = useState(makeCaptcha);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isValid =
    name.trim().length > 1 &&
    text.trim().length > 5 &&
    consent &&
    captchaAnswer.trim().length > 0;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid || status === "sending") return;

    if (Number(captchaAnswer) !== captcha.a + captcha.b) {
      setErrorMessage("Неверный ответ на вопрос ниже. Попробуйте ещё раз.");
      setStatus("error");
      setCaptcha(makeCaptcha());
      setCaptchaAnswer("");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/otzyv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          text,
          consent,
          captchaA: captcha.a,
          captchaB: captcha.b,
          captchaAnswer,
        }),
      });

      if (!response.ok) throw new Error("request failed");

      setStatus("sent");
    } catch {
      setErrorMessage("Не удалось отправить отзыв. Попробуйте ещё раз или напишите нам на nikitina.art-smail@yandex.ru.");
      setStatus("error");
      setCaptcha(makeCaptcha());
      setCaptchaAnswer("");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-blue-50 px-6 py-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
          <CheckIcon className="h-6 w-6" />
        </span>
        <p className="text-lg font-semibold text-slate-900">Спасибо за отзыв!</p>
        <p className="max-w-sm text-sm text-slate-600">
          Мы получили ваше сообщение и обязательно его прочитаем.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-6 sm:p-8">
      <div>
        <label htmlFor="review-name" className="mb-1.5 block text-sm font-medium text-slate-700">
          Ваше имя
        </label>
        <input
          id="review-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Иван Иванов"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
      </div>

      <div>
        <label htmlFor="review-contact" className="mb-1.5 block text-sm font-medium text-slate-700">
          Телефон или e-mail (необязательно)
        </label>
        <input
          id="review-contact"
          type="text"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          placeholder="Чтобы мы могли ответить"
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
      </div>

      <div>
        <label htmlFor="review-text" className="mb-1.5 block text-sm font-medium text-slate-700">
          Отзыв
        </label>
        <textarea
          id="review-text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Расскажите о вашем визите в клинику"
          rows={5}
          required
          className="w-full resize-none rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
      </div>

      <div>
        <label htmlFor="review-captcha" className="mb-1.5 block text-sm font-medium text-slate-700">
          Сколько будет {captcha.a} + {captcha.b}?
        </label>
        <input
          id="review-captcha"
          type="text"
          inputMode="numeric"
          value={captchaAnswer}
          onChange={(event) => setCaptchaAnswer(event.target.value)}
          placeholder="Ваш ответ"
          required
          className="w-full max-w-[10rem] rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
      </div>

      <label className="flex items-start gap-2.5 text-sm text-slate-600">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-600/20"
        />
        <span>
          Я согласен(на) с{" "}
          <a
            href="/documents/soglasie-na-obrabotku-personalnyh-dannyh.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            обработкой персональных данных
          </a>
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={!isValid || status === "sending"}
        className="mt-1 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {status === "sending" ? "Отправляем…" : "Отправить отзыв"}
      </button>
    </form>
  );
}
