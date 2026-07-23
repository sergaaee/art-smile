import type { NextConfig } from "next";

// Разделы главной страницы, доступные только как /#id — Яндекс проиндексировал
// их как отдельные страницы /id.html (со старой версии сайта), из-за чего
// пользователи из поиска попадают на 404. Возвращаем их на нужный якорь.
const legacyHomeSections = [
  "o-nas",
  "preimushchestva",
  "uslugi",
  "protsess",
  "vrachi",
  "tseny",
  "dokumenty",
  "kontakty",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...legacyHomeSections.map((id) => ({
        source: `/${id}.html`,
        destination: `/#${id}`,
        permanent: true,
      })),
      // Остальные унаследованные ссылки вида /path.html — на случай, если у
      // страницы есть точный аналог без расширения (например /akcii.html).
      {
        source: "/:path*.html",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
