export type SelectedDepositInfo = {
  depositId: string
  accountNumber: string
  amount: string
  accruedInterest: string
  period: Period
  currency: Currency
  status: Status
  openedAt: string
  closedAt: string
  accountType: AccountType
}

export type SelectedDeposit = {
  name: string
  accountType: string
  amount: string
  openedAt: string
  interestRate: string
}

export const enum Currency {
    EUR = 'EUR',
    USD = 'USD',
    BYN = 'BYN',
    CNY = 'CNY',
    KZT = 'KZT',
    RUB = 'RUB'
}

export const enum Status {
  ACTIVE = 'Активен',
  CLOSED = 'Закрыт',
  BLOCKED = 'Заблокирован',
}

export const enum AccountType {
  CARD = 'Карточный счет',
  DEPOSIT = 'Депозитный счет',
}

export const enum Period {
  MONTH = '30 дней',
  THREEMONTH = '90 дней',
}

export const DEPOSIT_TYPES = {
  ALL: "ALL",
  REPLENISHABLE: "REPLENISHABLE",
  NON_REPLENISHABLE: "NON-REPLENISHABLE",
} as const;

export type DepositType = (typeof DEPOSIT_TYPES)[keyof typeof DEPOSIT_TYPES];

export const DEPOSIT_NAVIGATION: Array<{ label: string; value: DepositType }> = [
  { label: "Все", value: DEPOSIT_TYPES.ALL },
  { label: "С поплнением", value: DEPOSIT_TYPES.REPLENISHABLE },
  { label: "Без пополнения", value: DEPOSIT_TYPES.NON_REPLENISHABLE },
];

export const OPERATION_TYPES = {
  ALL: "ALL",
  DEBIT: "DEBIT",
  CREDIT: "CREDIT",
} as const;

export type OperationType = (typeof OPERATION_TYPES)[keyof typeof OPERATION_TYPES];

export const OPERATION_NAVIGATION: Array<{ label: string; value: OperationType }> = [
  { label: "Все", value: OPERATION_TYPES.ALL },
  { label: "Пополнения", value: OPERATION_TYPES.DEBIT },
  { label: "Списания", value: OPERATION_TYPES.CREDIT },
];

export type Transaction = {
  type: string;
  amount: number;
  currency: string;
};

export type TransactionDay = {
  depositId: string;
  date: string;
  transactions: Transaction[];
};

export type TransactionProps = {
  transactions: TransactionDay[];
  onChooseDeposit: (id: string) => void;
};