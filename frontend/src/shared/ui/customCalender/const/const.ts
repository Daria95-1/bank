export const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const DAYS_OF_WEEK = ["Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const CURRENT_YEAR = new Date().getFullYear();

export const MONTH_OPTIONS = MONTHS;

export const YEAR_OPTIONS = Array.from({ length: 50 }, (_, i) =>
  (CURRENT_YEAR - 25 + i).toString()
);