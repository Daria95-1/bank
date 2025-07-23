import type { NavModel } from '@/app/core/models/nav.models';
import { RoutesConf } from "@core/enums/routes.enums";

const nav_menu: NavModel[] = [
  {
    id: 1,
    url: RoutesConf.cards,
    name: "Продукты",
  },
  {
    id: 2,
    url: `/${RoutesConf.user_deposits}/${RoutesConf.all_deposits}`,
    name: "Вклады",
  },
  {
    id: 3,
    url: RoutesConf.currency,
    name: "Обмен валют",
  },
  {
    id: 4,
    url: RoutesConf.contacts,
    name: "Контакты",
  },
  {
    id: 5,
    url: RoutesConf.news,
    name: "Новости",
  },
];

export { nav_menu };