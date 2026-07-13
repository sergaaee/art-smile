export type Location = {
  id: string;
  name: string;
  shortName: string;
  address: string;
  hours: string;
  // Определены геокодированием адреса (OpenStreetMap Nominatim).
  lat: number;
  lon: number;
};

export const locations: Location[] = [
  {
    id: "pticnoe",
    name: "Филиал в п. Птичное",
    shortName: "п. Птичное",
    address: "г. Москва, поселение Первомайское, пос. Птичное, ул. Центральная, д. 90",
    hours: "Ежедневно: 09:00–19:00",
    lat: 55.521873,
    lon: 37.220239,
  },
  {
    id: "vatutinki",
    name: "Филиал в Новых Ватутинках",
    shortName: "Новые Ватутинки",
    address: "г. Москва, г. Троицк, поселение Десеновское, ул. 1-я Нововатутинская, д. 5, пом. 54Н",
    hours: "Ежедневно: 09:00–21:00",
    lat: 55.520368,
    lon: 37.355388,
  },
];
