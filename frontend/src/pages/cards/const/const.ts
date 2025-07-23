export const CARD_TYPES = {
  ALL: "Все карты",
  DEPOSIT: "DEPOSIT",
  CREDIT: "CREDIT",
} as const;

export type CardType = (typeof CARD_TYPES)[keyof typeof CARD_TYPES];

export const NAVIGATION_ITEMS: Array<{ label: string; value: CardType }> = [
  { label: CARD_TYPES.ALL, value: CARD_TYPES.ALL },
  { label: "Дебетовые карты", value: CARD_TYPES.DEPOSIT },
  { label: "Кредитные карты", value: CARD_TYPES.CREDIT },
];