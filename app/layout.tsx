import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "АРТ-СМАИЛ — стоматология в Новой Москве",
  description:
    "Стоматология «АРТ-СМАИЛ»: лечение, хирургия, имплантация Osstem, ортодонтия, протезирование и детская стоматология. Два филиала в Новой Москве, гарантия 5 лет.",
  icons: {
    icon: "/logo-artsmile.png",
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
      </body>
    </html>
  );
}
