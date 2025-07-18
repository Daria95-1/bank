import { RoutesConf } from '../../app/core/enums/routes.enums';

export type RoutesConfValues = `${RoutesConf}`;

export const Titles: Record<RoutesConfValues, string> = {
    [RoutesConf.main]: "",
    [RoutesConf.sign_in]: "Вход",
    [RoutesConf.sign_up]: "Регистрация",
} as const;