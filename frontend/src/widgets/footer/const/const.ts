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
    description: "+7 (999) 999-99-99",
  },
  {
    id: 3,
    icon: LocationOnIcon,
    description: "г. Москва, ул. Большая Никитская, д. 15",
  },
];