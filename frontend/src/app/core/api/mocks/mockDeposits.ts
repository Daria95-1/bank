import { AccountType, Period, Currency, Status } from '@/pages/deposits/const/const';

export const mockUserDeposits = [
    {
    id: 'deposit-1',
    name: "Супер Доход",
    accountType: AccountType.DEPOSIT,
    amount: "75 000 ₽",
    openedAt: "15.07.2024",
    interestRate: "6.2%"
  },
  {
      id: 'deposit-2',
      name: "Безотзывный на 6 месяцев",
      accountType: AccountType.DEPOSIT,
      amount: "180 000 ₽",
      openedAt: "28.06.2024",
      interestRate: "10.5%"
  },
  {
      id: 'deposit-3',
      name: "Прогрессивный вклад",
      accountType: AccountType.DEPOSIT,
      amount: "420 000 ₽",
      openedAt: "5.07.2024",
      interestRate: "12%"
  },
  {
      id: 'deposit-4',
      name: "Бонус Карта+",
      accountType: AccountType.CARD,
      amount: "95 000 ₽",
      openedAt: "12.07.2024",
      interestRate: "17.8%"
  }
];

export const mockInfoAboutUserDeposit = [
    {
        depositId: 'deposit-1',
        accountNumber: "40817810000000014324",
        amount: "50 000 ₽",
        accruedInterest: "2 500 ₽",
        period: Period.MONTH,
        currency: Currency.RUB,
        status: Status.CLOSED,
        openedAt: "10.08.2024 08:45:00",
        closedAt: "10.09.2026 11:45:00",
        accountType: AccountType.DEPOSIT
    },
    {
        depositId: 'deposit-2',
        accountNumber: "40817810000000041356",
        amount: "200 000 ₽",
        accruedInterest: "2 500 ₽",
        period: Period.THREEMONTH,
        currency: Currency.RUB,
        status: Status.BLOCKED,
        openedAt: "10.08.2024 08:45:00",
        closedAt: "10.09.2026 11:45:00",
        accountType: AccountType.DEPOSIT
    },
    {
        depositId: 'deposit-3',
        accountNumber: "40817810000000072238",
        amount: "350 000 ₽",
        accruedInterest: "2 500 ₽",
        period: Period.THREEMONTH,
        currency: Currency.RUB,
        status: Status.ACTIVE,
        openedAt: "10.08.2024 08:45:00",
        closedAt: "10.09.2026 11:45:00",
        accountType: AccountType.DEPOSIT
    },
    {
        depositId: 'deposit-4',
        accountNumber: "40817810000000074249",
        amount: "130 000 ₽",
        accruedInterest: "2 500 ₽",
        period: Period.THREEMONTH,
        currency: Currency.RUB,
        status: Status.ACTIVE,
        openedAt: "10.08.2024 08:45:00",
        closedAt: "10.09.2026 11:45:00",
        accountType: AccountType.CARD
    },
];

export const mockInfoAboutAllDeposits = [
  {
    depositId: '1',
    typeDeposit: 'REPLENISHABLE',
    mainTitle: 'Супер Доход ',
    title: 'на 4 месяца — пополняемый',
    description: 'Вклад с возможностью пополнения и выгодной ставкой, идеально подходит для начинающих инвесторов.',
    period: 'от 4 месяцев',
    amount: 'от 15 000 ₽',
    interestRate: 'до 6.2% годовых'
  },
  {
    depositId: '2',
    typeDeposit: 'REPLENISHABLE',
    mainTitle: 'Безотзывный ',
    title: 'на 6 месяцев — пополняемый',
    description: 'Оптимальный вариант для тех, кто хочет сохранить и приумножить средства за полгода.',
    period: 'от 6 месяцев',
    amount: 'от 20 000 ₽',
    interestRate: 'до 10.5% годовых'
  },
  {
    depositId: '3',
    typeDeposit: 'NON-REPLENISHABLE',
    mainTitle: 'Прогрессивный вклад ',
    title: 'на 12 месяцев — фиксированный',
    description: 'Фиксированный вклад без возможности пополнения, но с повышенной доходностью.',
    period: 'от 12 месяцев',
    amount: 'от 30 000 ₽',
    interestRate: 'до 12% годовых'
  },
  {
    depositId: '4',
    typeDeposit: 'NON-REPLENISHABLE',
    mainTitle: 'Максимум Плюс ',
    title: 'на 9 месяцев — без пополнения',
    description: 'Высокий процент при размещении средств на 9 месяцев. Отличный выбор для стабильного дохода.',
    period: 'от 9 месяцев',
    amount: 'от 50 000 ₽',
    interestRate: 'до 13.2% годовых'
  },
  {
    depositId: '5',
    typeDeposit: 'REPLENISHABLE',
    mainTitle: 'Бонус Онлайн ',
    title: 'на 3 месяца — пополняемый',
    description: 'Краткосрочный вклад с возможностью пополнения и управлением через мобильное приложение.',
    period: 'от 3 месяцев',
    amount: 'от 5 000 ₽',
    interestRate: 'до 5.7% годовых'
  }
]

export const mockDepositsDetails = [
  {
    depositId: '1',
    mainTitle: 'Супер Доход',
    title: 'на 4 месяца — пополняемый',
    currency: Currency.RUB,
    interestRate: 'От 5.5 % до 6.2 %',
    term: 'От 4 месяцев до 6 месяцев',
    minAmount: '15 000 ₽',
    maxAmount: '5 000 000 ₽',
    replenishmentAllowed: 'В течение всего срока',
    interestPayoutAccountSelection: 'Да',
    autoRenewalAvailable: 'Предусмотрено',
    earlyWithdrawalAllowed: 'Отзывной'
  },
  {
    depositId: '2',
    mainTitle: 'Безотзывный',
    title: 'на 6 месяцев — пополняемый',
    currency: Currency.RUB,
    interestRate: 'От 9.5 % до 10.5 %',
    term: 'От 6 месяцев до 9 месяцев',
    minAmount: '20 000 ₽',
    maxAmount: '7 000 000 ₽',
    replenishmentAllowed: 'В первые 60 дней',
    interestPayoutAccountSelection: 'Да',
    autoRenewalAvailable: 'Не предусмотрено',
    earlyWithdrawalAllowed: 'Безотзывной'
  },
  {
    depositId: '3',
    mainTitle: 'Прогрессивный вклад',
    title: 'на 12 месяцев — фиксированный',
    currency: Currency.RUB,
    interestRate: 'До 12 %',
    term: '12 месяцев фиксировано',
    minAmount: '30 000 ₽',
    maxAmount: '3 000 000 ₽',
    replenishmentAllowed: 'Не допускается',
    interestPayoutAccountSelection: 'Да',
    autoRenewalAvailable: 'Предусмотрено',
    earlyWithdrawalAllowed: 'Отзывной с пониженной ставкой'
  },
  {
    depositId: '4',
    mainTitle: 'Максимум Плюс',
    title: 'на 9 месяцев — без пополнения',
    currency: Currency.RUB,
    interestRate: 'До 13.2 %',
    term: 'От 9 месяцев до 12 месяцев',
    minAmount: '50 000 ₽',
    maxAmount: '10 000 000 ₽',
    replenishmentAllowed: 'Не допускается',
    interestPayoutAccountSelection: 'Нет',
    autoRenewalAvailable: 'Не предусмотрено',
    earlyWithdrawalAllowed: 'Безотзывной'
  },
  {
    depositId: '5',
    mainTitle: 'Бонус Онлайн',
    title: 'на 3 месяца — пополняемый',
    currency: Currency.RUB,
    interestRate: 'От 4.5 % до 5.7 %',
    term: 'От 3 месяцев до 4 месяцев',
    minAmount: '5 000 ₽',
    maxAmount: '1 000 000 ₽',
    replenishmentAllowed: 'В течение первых 45 дней',
    interestPayoutAccountSelection: 'Да',
    autoRenewalAvailable: 'Предусмотрено',
    earlyWithdrawalAllowed: 'Отзывной'
  }
];

export const mockDepositTransactions = [
  {
    depositId: 'deposit-1',
    date: '2024-05-31',
    transactions: [
      {
        type: 'DEBIT',
        amount: 5000.00,
        currency: 'RUB',
      },
      {
        type: 'CREDIT',
        amount: -4000.00,
        currency: 'RUB',
      },
      {
        type: 'DEBIT',
        amount: 864.35,
        currency: 'RUB',
      },
    ],
  },
  {
    depositId: 'deposit-1',
    date: '2024-04-30',
    transactions: [
      {
        type: 'DEBIT',
        amount: 10000.00,
        currency: 'RUB',
      },
      {
        type: 'DEBIT',
        amount: 755.57,
        currency: 'RUB',
      },
    ],
  },
  {
    depositId: 'deposit-1',
    date: '2024-04-15',
    transactions: [
      {
        type: 'DEBIT',
        amount: 10000.00,
        currency: 'RUB',
      },
    ],
  },
];
