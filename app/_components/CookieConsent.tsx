"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const consent = window.localStorage.getItem(STORAGE_KEY);
      if (!cancelled && !consent) setIsVisible(true);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white px-4 py-4 shadow-[0_-4px_16px_rgba(15,23,42,0.08)] sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-600">
          Мы используем файлы cookie, чтобы сайт работал корректно. Продолжая
          пользоваться сайтом, вы соглашаетесь с{" "}
          <Link href="/politika-konfidentsialnosti" className="text-blue-700 hover:underline">
            политикой конфиденциальности
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Принять
        </button>
      </div>
    </div>
  );
}
