import type { NavModel } from '@/app/core/models/nav.models';
import { RoutesConf } from "@core/enums/routes.enums";

const nav_header: NavModel[] = [
  {
    id: 1,
    url: RoutesConf.aboutBank,
    name: "О Банке",
  },
  {
    id: 2,
    url: RoutesConf.cards,
    name: "Продукты",
  },
  {
    id: 3,
    url: `/${RoutesConf.user_deposits}/${RoutesConf.all_deposits}`,
    name: "Вклады",
  },
  {
    id: 4,
    url: RoutesConf.currency,
    name: "Обмен валют",
  },
  {
    id: 5,
    url: RoutesConf.contacts,
    name: "Контакты",
  },
  {
    id: 6,
    url: RoutesConf.news,
    name: "Новости",
  },
];

const nav_footer: NavModel[] = [
  {
    id: 1,
    url: RoutesConf.aboutBank,
    name: "О Банке",
  },
  {
    id: 2,
    url: RoutesConf.cards,
    name: "Продукты",
  },
  {
    id: 3,
    url: `/${RoutesConf.user_deposits}/${RoutesConf.all_deposits}`,
    name: "Вклады",
  },
  {
    id: 4,
    url: RoutesConf.currency,
    name: "Обмен валют",
  },
  {
    id: 5,
    url: RoutesConf.contacts,
    name: "Контакты",
  },
  {
    id: 6,
    url: RoutesConf.news,
    name: "Новости",
  },
];

export { nav_header, nav_footer };