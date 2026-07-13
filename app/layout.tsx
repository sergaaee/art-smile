import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import CookieConsent from "./_components/CookieConsent";
import { SITE_URL } from "./_data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const title = "АРТ-СМАИЛ — стоматология в Новой Москве";
const description =
  "Стоматология «АРТ-СМАИЛ»: лечение, хирургия, имплантация Osstem, ортодонтия, протезирование и детская стоматология. Два филиала в Новой Москве";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  icons: {
    icon: "/logo-artsmile.png",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "АРТ-СМАИЛ",
    title,
    description,
    images: [{ url: "/logo-artsmile.png", width: 210, height: 240, alt: "АРТ-СМАИЛ" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo-artsmile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <p className="bg-slate-900 px-4 py-4 text-center text-sm font-bold text-white">
          Внимание! Возможны противопоказания. Необходима консультация
          специалиста! Фотографии сотрудников/пациентов размещены с их
          письменных согласий
        </p>
        <CookieConsent />
      </body>
    </html>
  );
}
