import { useState } from "react";
import { CustomSelect } from "./CustomSelect/CustomSelect";
import { NavButtons } from "./NavButtons/NavButtons";
import { DAYS_OF_WEEK, MONTH_OPTIONS, YEAR_OPTIONS, MONTHS } from './const/const';
import {
  Box,
  Typography,
  IconButton,
  type SxProps,
  type Theme
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import {
  ContainerStyle,
  HeadersStyle,
  SelectDateStyle,
  CurrentDateStyle,
  SeparatorStyle,
  DateAndArrowsStyle,
  WeekdaysStyle,
  WeekdayStyle,
  DaysStyle,
  DayStyle,
  SelectedDayStyle,
  MonthYearDropdownStyle,
  SelectedStyle,
  CloseStyle,
  CloseIconStyle,
} from "./CustomCalendar.style";

type CustomCalendarProps = {
  onSelectDate: (date: Date) => void;
  initialDate?: Date;
  onClose?: () => void; // 👈 для крестика
};

export const CustomCalendar = ({ onSelectDate, initialDate, onClose }: CustomCalendarProps) => {
  const [currentDate, setCurrentDate] = useState<Date>(initialDate ?? new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(currentDate.getDate());

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const formattedDate = `${DAYS_OF_WEEK[currentDate.getDay()]}, ${currentDate.getDate()} ${MONTHS[currentDate.getMonth()].slice(0, 3).toLowerCase()}`;

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
    <Box key={`empty-${i}`} />
  ));

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;

    return (
      <Box
        key={day}
        sx={
          [DayStyle, selectedDay === day && SelectedDayStyle]
            .filter(Boolean) as SxProps<Theme>
        }
        onClick={() => handleDayClick(day)}
      >
        {day}
      </Box>
    );
  });

  const weekdayHeaders = DAYS_OF_WEEK.map((day, index) => (
    <Typography key={index} sx={WeekdayStyle}>
      {day}
    </Typography>
  ));

  return (
    <Box sx={ContainerStyle}>
      <Box sx={HeadersStyle}>
        <Box sx={CloseStyle}>
          <Typography sx={SelectDateStyle}>Выберите дату</Typography>
          {onClose && (
            <IconButton sx={CloseIconStyle} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          )}
        </Box>
        <Typography sx={CurrentDateStyle}>{formattedDate}</Typography>
        <Box sx={SeparatorStyle} />
      </Box>

      <Box sx={DateAndArrowsStyle}>
        <Box sx={MonthYearDropdownStyle}>
          <CustomSelect
            sx={SelectedStyle}
            value={selectedMonth}
            options={MONTH_OPTIONS}
            onChange={handleMonthSelect}
          />
          <CustomSelect
            value={selectedYear}
            options={YEAR_OPTIONS}
            onChange={handleYearSelect}
          />
        </Box>
        <NavButtons onPrev={() => handleChangeMonth(-1)} onNext={() => handleChangeMonth(1)} />
      </Box>

      <Box sx={WeekdaysStyle}>{weekdayHeaders}</Box>

      <Box sx={DaysStyle}>
        {emptyDays}
        {days}
      </Box>
    </Box>
  );
};
