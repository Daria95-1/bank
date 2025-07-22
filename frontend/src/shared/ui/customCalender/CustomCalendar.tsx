import styles from "./CustomCalendar.module.scss";
import { useState } from "react";
import { CustomSelect } from "./CustomSelect/CustomSelect";
import { NavButtons } from "./NavButtons/NavButtons";
import { DAYS_OF_WEEK, MONTH_OPTIONS, YEAR_OPTIONS, MONTHS } from './const/const'

type CustomCalendarProps = {
  onSelectDate: (date: Date) => void;
};

export const CustomCalendar = ({ onSelectDate }: CustomCalendarProps) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(currentDate.getDate());

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const formattedDate = `${DAYS_OF_WEEK[currentDate.getDay()]}, ${currentDate.getDate()} ${MONTHS[currentDate.getMonth()].slice(0, 3).toLowerCase()}`;

  // --- Переменные для рендера ---
  const selectedMonth = MONTHS[currentDate.getMonth()];
  const selectedYear = currentDate.getFullYear().toString();

  const handleChangeMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
    setSelectedDay(null);
  };

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setCurrentDate(date);
    onSelectDate(date);
  };

  const handleMonthSelect = (value: string) => {
    const monthIndex = MONTHS.indexOf(value);
    const newDate = new Date(currentDate);
    newDate.setMonth(monthIndex);
    setCurrentDate(newDate);
    setSelectedDay(null);
  };

  const handleYearSelect = (value: string) => {
    const year = parseInt(value);
    const newDate = new Date(currentDate);
    newDate.setFullYear(year);
    setCurrentDate(newDate);
    setSelectedDay(null);
  };

  const emptyDays = Array.from({ length: firstDayOfMonth }).map((_, i) => (
    <div key={`empty-${i}`} className={styles.empty}></div>
  ));

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const isSelected = selectedDay === day;

    return (
      <div
        key={day}
        className={`${styles.day} ${isSelected ? styles.selected : ""}`}
        onClick={() => handleDayClick(day)}
      >
        {day}
      </div>
    );
  });

  const weekdayHeaders = DAYS_OF_WEEK.map((day, index) => (
    <div key={index} className={styles.weekday}>
      {day}
    </div>
  ));

  return (
    <div className={styles.calendar}>
      <div className={styles.headers}>
        <div className={styles.selectDate}>Выберите дату</div>

        <div className={styles.currentDate}>{formattedDate}</div>

        <div className={styles.separator}></div>
      </div>

      <div className={styles.dateAndArrows}>
        <div className={styles.monthYearSelector}>
          <div className={styles.monthYearDropdown}>
            <CustomSelect value={selectedMonth} options={MONTH_OPTIONS} onChange={handleMonthSelect} />

            <CustomSelect value={selectedYear} options={YEAR_OPTIONS} onChange={handleYearSelect} />
          </div>
        </div>

        <NavButtons onPrev={() => handleChangeMonth(-1)} onNext={() => handleChangeMonth(1)} />
      </div>

      <div className={styles.weekdays}>{weekdayHeaders}</div>

      <div className={styles.days}>
        {emptyDays}

        {days}
      </div>
    </div>
  );
};