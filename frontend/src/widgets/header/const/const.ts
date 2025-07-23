import { RoutesConf } from '@/app/core/enums/routes.enums';

type MenuItemType =
  | { label: string; route: RoutesConf; action?: undefined }
  | { label: string; action: 'logout'; route?: undefined };

export const menuItems: MenuItemType[] = [
  { label: 'Мои счета', route: RoutesConf.accounts },
  { label: 'Мои вклады', route: RoutesConf.user_deposits },
  { label: 'Личный кабинет', route: RoutesConf.profile },
  { label: 'Выйти', action: 'logout' },
];
