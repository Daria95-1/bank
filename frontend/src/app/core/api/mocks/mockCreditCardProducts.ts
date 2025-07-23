import { theme } from '@/theme/theme';
import type { PersonalCard } from '../../models/cards.models';

export const mockCreditCardProducts: PersonalCard[] = [
  {
    cardId: "1",
    numberCard: "5412987654321980",
    dateExpire: "2027-05-15T00:00:00",
    accountBalance: 75000,
    accountCurrency: "RUB",
    productType: "CREDIT",
    productName: "Optima",
    paymentSystem: "MIR",
  },
  {
    cardId: "2",
    numberCard: "4231987645312876",
    dateExpire: "2026-11-23T00:00:00",
    accountBalance: 150000,
    accountCurrency: "RUB",
    productType: "CREDIT",
    productName: "Infinity",
    paymentSystem: "VISA",
  },
  {
    cardId: "3",
    numberCard: "3712985500921123",
    dateExpire: "2028-03-10T00:00:00",
    accountBalance: 30000,
    accountCurrency: "RUB",
    productType: "DEPOSIT",
    productName: "Aurora",
    paymentSystem: "VISA",
  },
  {
    cardId: "4",
    numberCard: "5532109876543210",
    dateExpire: "2029-01-01T00:00:00",
    accountBalance: 120000,
    accountCurrency: "RUB",
    productType: "DEPOSIT",
    productName: "Elite",
    paymentSystem: "MIR",
  },
  {
    cardId: "5",
    numberCard: "4276123412341234",
    dateExpire: "2026-07-30T00:00:00",
    accountBalance: 48000,
    accountCurrency: "RUB",
    productType: "DEPOSIT",
    productName: "Everyday",
    paymentSystem: "VISA",
  },
  {
    cardId: "6",
    numberCard: "4890654312876543",
    dateExpire: "2027-09-14T00:00:00",
    accountBalance: 10200,
    accountCurrency: "RUB",
    productType: "DEPOSIT",
    productName: "Momentum",
    paymentSystem: "VISA",
  },
  {
    cardId: "7",
    numberCard: "4012765432109876",
    dateExpire: "2025-12-20T00:00:00",
    accountBalance: 21500,
    accountCurrency: "RUB",
    productType: "CREDIT",
    productName: "Travel Light",
    paymentSystem: "MIR",
  },
];

type CardColor = { [key: string]: string };

export const cardColor: CardColor = {
  Optima: theme.palette.gradients.Optima,
  Infinity: theme.palette.gradients.Infinity,
  Aurora: theme.palette.gradients.Aurora,
  Elite: theme.palette.gradients.Elite,
  Everyday: theme.palette.gradients.Everyday,
  Momentum: theme.palette.gradients.Momentum,
  "Travel Light": theme.palette.gradients.TravelLight,
};

export type ProductInformation = {
    id: string | number;
    question: string;
    answer: string;
}

export const dataInfoProduct: Array<string> = [
    "0₽ за обслуживание первые 2 месяца",
    "Снятие наличных без комиссии",
    "До 20% кэшбека в любимых категориях",
    "Лимит по карте — до 1,5 млн. ₽",
    "Получите карту онлайн за 3 минуты",
];
  
export const mockProductInfo: ProductInformation[] = [
  {
    id: 1,
    question: "Когда я получу бонусы?",
    answer: "Бонусы за покупки поступят на счёт до 5 числа следующего месяца.",
  },
  {
    id: 2,
    question: "Как восстановить пин-код?",
    answer: "Пин-код можно обновить в разделе «Карты» мобильного приложения.",
  },
  {
    id: 3,
    question: "Что делать при утере карты?",
    answer: "Заблокируйте карту через приложение и закажите новую в пару кликов.",
  },
  {
    id: 4,
    question: "Нужна помощь?",
    answer: "Свяжитесь с нами по номеру: 8 800 108 00 00.",
  },
  {
    id: 5,
    question: "Стоимость выпуска карты",
    answer: "Выпуск карты — совершенно бесплатно.",
  },
  {
    id: 6,
    question: "Программа лояльности",
    answer: "Получайте до 30% бонусами у партнёров и до 10% в выбранной категории.",
  },
  {
    id: 7,
    question: "Сколько бонусов можно накопить?",
    answer: "Максимальный бонус в месяц — 5 000 ₽.",
  },
  {
    id: 8,
    question: "На какой срок выдается карта?",
    answer: "Срок действия карты составляет 3 года.",
  },
  {
    id: 9,
    question: "Какая это карта?",
    answer: "Это полноценная кредитная карта с гибкими условиями.",
  },
  {
    id: 10,
    question: "Какой процент по карте?",
    answer: "Процентная ставка — от 3% до 30% в зависимости от условий.",
  },
  {
    id: 11,
    question: "Какие категории с повышенным кэшбэком?",
    answer:
      "До 30% у партнёров, 10% на выбранную категорию и 3% на все остальные покупки, кроме ЖКХ.",
  },
  {
    id: 12,
    question: "Когда приходят начисления?",
    answer: "Начисления происходят до 5 числа каждого месяца.",
  },
];

export type UserCardType = {
  numberCard: string;
  dateExpire: string;
  isMain: boolean;
  statusCard: "Active" | "Blocked" | "Closed";
  firstName: string;
  lastName: string;
  middleName?: string;
  accountNumber: string;
  accountCurrency: "RUB" | "USD" | "EUR" | "CNY" | "BYN" | "KZT";
  productType: "DEBIT" | "CREDIT";
  productName: "Optima" | "Infinity" | "Aurora" | "Elite" | "Everyday" | "Momentum" | "Travel Light";
  paymentSystem: string;
  dateValidFrom: string;
  maintenanceFee: number;
  limitPerMonth: number;
};

export const mockCards: UserCardType[] = [
  {
    numberCard: "5400123498761234",
    dateExpire: "2027-05-20",
    isMain: true,
    statusCard: "Active",
    firstName: "Алексей",
    lastName: "Смирнов",
    middleName: "Владимирович",
    accountNumber: "40817810000000098765",
    accountCurrency: "RUB",
    productType: "DEBIT",
    productName: "Momentum",
    paymentSystem: "MIR",
    dateValidFrom: "2024-05-20",
    maintenanceFee: 350.0,
    limitPerMonth: 150000.0,
  },
];

export const mockCardAPI = {
  getCardById: (cardId: string) => {
    const foundCard = mockCards.find((card) => card.numberCard === cardId);
    if (!foundCard) {
      throw new Error(`Карточка с номером ${cardId} не найдена.`);
    }
    return foundCard;
  },
};
