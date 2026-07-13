export type Partner = {
  name: string;
  href: string;
  src: string;
};

export const partners: Partner[] = [
  {
    name: "Департамент здравоохранения города Москвы",
    href: "http://new.mosgorzdrav.ru/",
    src: "/partners/departament.png",
  },
  {
    name: "Московский городской фонд обязательного медицинского страхования",
    href: "http://www.mgfoms.ru/",
    src: "/partners/mgfoms.png",
  },
  {
    name: "Территориальное управление Роспотребнадзора по городу Москве",
    href: "http://77.rospotrebnadzor.ru/",
    src: "/partners/rospotreb.png",
  },
  {
    name: "Московская станция скорой и неотложной медицинской помощи",
    href: "http://www.mos03.ru/",
    src: "/partners/skoraya.png",
  },
];
