import type { SxProps, Theme } from "@mui/material";

export const OperationStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    color: theme => theme.palette.text.primary,
    marginTop: "16px",
    gap: "16px"
};

export const DateStyle: SxProps<Theme> = {
    fontWeight: "bold",
    fontSize: "20px"
};

export const ItemStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between',
};

export const MoneyStyle = (isDebit: boolean): SxProps<Theme> => ({
  display: 'flex',
  gap: '10px',
  color: isDebit ? theme => theme.palette.success.main : theme => theme.palette.error.main,
});