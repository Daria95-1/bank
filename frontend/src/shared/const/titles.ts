import { RoutesConf } from '../../app/core/enums/routes.enums';

export type RoutesConfValues = `${RoutesConf}`;

export const Titles: Record<RoutesConfValues, string> = {
    [RoutesConf.main]: "Главная",
    [RoutesConf.sign_in]: "Вход",
    [RoutesConf.sign_up]: "Регистрация",
    [RoutesConf.user_deposits]: "Мои вклады",
    [RoutesConf.all_deposits]: "Вклады",
    [RoutesConf.deposit_history]: "История вклада",
    [RoutesConf.under_construction]: "В разработке",
    [RoutesConf.aboutBank]: "О банке",
    [RoutesConf.products]: "Продукты",
    [RoutesConf.currency]: "Курс валют",
    [RoutesConf.contacts]: "Контакты",
    [RoutesConf.news]: "Новости",
    [RoutesConf.cards]: "Карты",
    [RoutesConf.accounts]: "Счета",
    [RoutesConf.profile]: "Профиль",
    [RoutesConf.deposit_details]: "Детали вклада"
} as const;