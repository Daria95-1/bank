import type { SxProps, Theme } from "@mui/material";

export const OperationStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    color: "var(--color-white)",
    marginTop: "1rem",
    gap: "1rem"
};

export const DateStyle: SxProps<Theme> = {
    fontWeight: "bold",
    fontSize: "1.2rem"
};

export const ItemStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between',
};

export const MoneyStyle = (isDebit: boolean): SxProps<Theme> => ({
  display: 'flex',
  gap: '0.5rem',
  color: isDebit ? 'var(--color-green)' : 'var(--color-red)',
});