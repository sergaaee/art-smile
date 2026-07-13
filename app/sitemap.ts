import type { MetadataRoute } from "next";
import { SITE_URL } from "./_data/site";
import { serviceDetails } from "./_data/serviceDetails";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/karta-sajta", changeFrequency: "monthly", priority: 0.3 },
  { path: "/akcii", changeFrequency: "weekly", priority: 0.6 },
  { path: "/vakansii", changeFrequency: "monthly", priority: 0.3 },
  { path: "/otzyv", changeFrequency: "monthly", priority: 0.4 },
  { path: "/politika-konfidentsialnosti", changeFrequency: "yearly", priority: 0.2 },
  { path: "/obrabotka-personalnyh-dannyh", changeFrequency: "yearly", priority: 0.2 },
  { path: "/o-klinike/licenziya", changeFrequency: "yearly", priority: 0.5 },
  { path: "/o-klinike/inn-ogrn", changeFrequency: "yearly", priority: 0.3 },
  { path: "/o-klinike/vidy-pomoshi", changeFrequency: "monthly", priority: 0.5 },
  { path: "/o-klinike/priem-rukovodstva", changeFrequency: "yearly", priority: 0.3 },
  { path: "/o-klinike/standarty", changeFrequency: "yearly", priority: 0.3 },
  { path: "/o-klinike/printsipy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/o-klinike/fotogalereya", changeFrequency: "monthly", priority: 0.4 },
  { path: "/pacientam/prava-i-obyazannosti", changeFrequency: "yearly", priority: 0.3 },
  { path: "/pacientam/pravila-vnutrennego-rasporyadka", changeFrequency: "yearly", priority: 0.3 },
  { path: "/pacientam/garantii", changeFrequency: "yearly", priority: 0.5 },
  { path: "/pacientam/podgotovka-k-issledovaniyam", changeFrequency: "yearly", priority: 0.4 },
  { path: "/pacientam/pravila-povedeniya", changeFrequency: "yearly", priority: 0.2 },
  { path: "/pacientam/programma-gosgarantij", changeFrequency: "yearly", priority: 0.2 },
  { path: "/pacientam/nalogovyj-vychet", changeFrequency: "yearly", priority: 0.4 },
  { path: "/informaciya/posle-udaleniya-zuba", changeFrequency: "yearly", priority: 0.4 },
  { path: "/informaciya/pamyatka-pacientam", changeFrequency: "yearly", priority: 0.3 },
  { path: "/informaciya/semnye-protezy-sovety", changeFrequency: "yearly", priority: 0.3 },
  { path: "/informaciya/ortodonticheskoe-lechenie", changeFrequency: "yearly", priority: 0.3 },
  { path: "/informaciya/posle-lecheniya-kariesa", changeFrequency: "yearly", priority: 0.3 },
  { path: "/informaciya/posle-lecheniya-kornevyh-kanalov", changeFrequency: "yearly", priority: 0.3 },
  { path: "/informaciya/pravila-polzovaniya-protezami", changeFrequency: "yearly", priority: 0.3 },
  { path: "/informaciya/posle-otbelivaniya", changeFrequency: "yearly", priority: 0.3 },
  { path: "/informaciya/posle-restavracii", changeFrequency: "yearly", priority: 0.3 },
  { path: "/informaciya/lechenie-molochnyh-zubov", changeFrequency: "yearly", priority: 0.3 },
  { path: "/dokumentaciya/federalnye-akty", changeFrequency: "yearly", priority: 0.2 },
  { path: "/dokumentaciya/vnutrennie-dokumenty", changeFrequency: "yearly", priority: 0.2 },
  { path: "/dokumentaciya/vyshestoyashie-organizacii", changeFrequency: "yearly", priority: 0.2 },
  { path: "/dokumentaciya/territorialnaya-programma", changeFrequency: "yearly", priority: 0.2 },
  { path: "/dokumentaciya/usloviya-okazaniya-uslug", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = serviceDetails.map((service) => ({
    url: `${SITE_URL}/uslugi/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticEntries, ...serviceEntries];
}
