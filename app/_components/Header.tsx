"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, MenuIcon, XIcon } from "./icons";

const navLinks = [
  { href: "/#uslugi", label: "Услуги" },
  { href: "/#vrachi", label: "Врачи" },
  { href: "/#tseny", label: "Цены" },
  { href: "/#o-nas", label: "О нас" },
  { href: "/#dokumenty", label: "Документы" },
  { href: "/#kontakty", label: "Контакты" },
  { href: "/karta-sajta", label: "Карта сайта" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-slate-900">
          <Image
            src="/logo-artsmile.png"
            alt="АРТ-СМАИЛ Стоматология"
            width={210}
            height={240}
            priority
            className="h-16 w-auto py-1"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+79265305003"
            className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-700"
          >
            <PhoneIcon className="h-4 w-4 text-blue-600" />
            +7 (926) 530-50-03
          </a>
          <Link
            href="/#kontakty"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-700"
          >
            Записаться на приём
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-3 border-t border-slate-100 pt-4">
            <a
              href="tel:+79265305003"
              className="flex items-center gap-2 text-sm font-semibold text-slate-900"
            >
              <PhoneIcon className="h-4 w-4 text-blue-600" />
              +7 (926) 530-50-03
            </a>
            <Link
              href="/#kontakty"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Записаться на приём
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
