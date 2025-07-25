import type { SxProps, Theme } from "@mui/material";

export const ContainerStyle: SxProps<Theme> = {
    display: "grid",
    justifyItems: "center",
    width: "544px",
    height: "auto",
    backgroundColor: theme => theme.palette.background.paper,
    color: theme => theme.palette.text.primary,
    borderRadius: "12px",
};

export const HeadersStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    fontSize: "20px",
    padding: "24px 16px",
    gap: "16px",
};

export const SelectDateStyle: SxProps<Theme> = {
    fontSize: "12px",
};

export const CurrentDateStyle: SxProps<Theme> = {
    fontSize: "16px",
};

export const SeparatorStyle: SxProps<Theme> = {
    width: "496px",
    height: "1px",
    backgroundColor: theme => theme.palette.primary.main,
};

export const DateAndArrowsStyle: SxProps<Theme> = {
  width: "544px",
  maxWidth: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
};

export const WeekdaysStyle: SxProps<Theme> = {
  width: "544px",
  maxWidth: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  fontSize: "14px",
  color: theme => theme.palette.primary.main,
  justifyItems: "center",
};

export const WeekdayStyle: SxProps<Theme> = {
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
};

export const DaysStyle: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "8px",
  padding: "10px",
  justifyItems: "center",
  width: "100%",
};

export const DayStyle: SxProps<Theme> = (theme) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "50%",
  cursor: "pointer",
    transition: "background-color 0.3s",
  
  '&:hover': {
    backgroundColor: theme => theme.palette.primary.main,
    color: theme => theme.palette.background.paper,
  },
});

export const SelectedDayStyle: SxProps<Theme> = {
  backgroundColor: theme => theme.palette.primary.main,
  color: theme => theme.palette.background.paper,
};

export const MonthYearDropdownStyle: SxProps<Theme> = {
  display: "flex",
  gap: "16px",

  select: {
    color: theme => theme.palette.primary.main,
    padding: "8px",
    fontSize: "16px",
    paddingRight: "32px",
        
    '&:focus': {
      backgroundColor: theme => theme.palette.background.paper,
      color: theme => theme.palette.primary.main,
    },
  },

  option: {
    backgroundColor: theme => theme.palette.background.paper,
    color: theme => theme.palette.primary.main,
    padding: "8px",
  },
};

export const SelectedStyle: SxProps<Theme> = {
  borderRadius: '8px',
};

export const CloseStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%' 
};

export const CloseIconStyle: SxProps<Theme> = {
  color: theme => theme.palette.primary.main,
};

