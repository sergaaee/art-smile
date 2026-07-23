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
      // www — зеркало, дублирующее контент без редиректа на основной домен.
      // Склеиваем на non-www, чтобы не плодить дубли для Яндекса/Google.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.art-smile-nikitina.ru" }],
        destination: "https://art-smile-nikitina.ru/:path*",
        permanent: true,
      },
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
  async headers() {
    return [
      // Файлы из /public не хешируются со сборкой, поэтому без явного
      // Cache-Control браузер их не кеширует вовсе (max-age=0 по умолчанию).
      {
        source: "/:path*.(jpg|jpeg|png|webp|avif|svg|pdf|docx|xlsx)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
