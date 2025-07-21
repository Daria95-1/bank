import { RoutesConf } from '@/app/core/enums/routes.enums';
import type { contactInfoProps } from '@/app/core/models/nav.models';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkunreadIcon from "@mui/icons-material/Markunread";

export const contactInfo: contactInfoProps[] = [
  {
    id: 1,
    icon: MarkunreadIcon,
    description: "bank@mail.com",
  },
  {
    id: 2,
    icon: LocalPhoneIcon,
    description: "+7 (999) 133-44-28",
  },
  {
    id: 3,
    icon: LocationOnIcon,
    description: "г. Москва, Ленинградский Проспект, 49",
  },
];

export type MainMenuItem = {
  label: string;
  link: string;
};

export const menuItems: MainMenuItem[] = [
  {
    label: "О банке",
    link: `/${RoutesConf.aboutBank}`,
  },
  {
    label: "Курсы валют",
    link: `/${RoutesConf.currency}`,
  },
  {
    label: "Контакты",
    link: `/${RoutesConf.contacts}`,
  },
  {
    label: "Новости",
    link: `/${RoutesConf.news}`,
  },
];