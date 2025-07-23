import Flag from 'react-world-flags'
import type { ReactNode } from 'react';

export type CurrencyItem = {
  id: string;
  name: string;
  buy: string;
  sell: string;
  icon: ReactNode;
};

export const currencyData: CurrencyItem[] = [
  { id: 'usd', name: 'USD / RUB', buy: '78.50 ₽', sell: '80.00 ₽', icon: <Flag code="US" style={{ width: 24, height: 16 }} /> },
  { id: 'eur', name: 'EUR / RUB', buy: '92.30 ₽', sell: '94.30 ₽', icon: <Flag code="EU" style={{ width: 24, height: 16 }} /> },
  { id: 'cny', name: 'CNY / RUB', buy: '10.95 ₽', sell: '11.50 ₽', icon: <Flag code="CN" style={{ width: 24, height: 16 }} /> },
  { id: 'aed', name: 'AED / RUB', buy: '21.45 ₽', sell: '21.95 ₽', icon: <Flag code="AE" style={{ width: 24, height: 16 }} /> },
  { id: 'thb', name: 'THB / RUB', buy: '2.55 ₽', sell: '2.75 ₽', icon: <Flag code="TH" style={{ width: 24, height: 16 }} /> },
  { id: 'gbp', name: 'GBP / RUB', buy: '104.65 ₽', sell: '113.65 ₽', icon: <Flag code="GB" style={{ width: 24, height: 16 }} /> },
  { id: 'chf', name: 'CHF / RUB', buy: '96.80 ₽', sell: '108.30 ₽', icon: <Flag code="CH" style={{ width: 24, height: 16 }} /> },
  { id: 'kzt', name: 'KZT / RUB', buy: '0.14 ₽', sell: '0.16 ₽', icon: <Flag code="KZ" style={{ width: 24, height: 16 }} /> },
];
