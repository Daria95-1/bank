import type { SxProps, Theme } from "@mui/material";

export const ItemStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "var(--color-dark)",
    color: "var(--color-white)",
    borderRadius: "1rem",
    cursor: "pointer",
    border: "1px solid transparent",
    boxSizing: "border-box",
    marginRight: "0.5rem",
    padding: "1rem 4rem",
    gap: "0.5rem",
};

export const SelectedStyle: SxProps<Theme> = {
    border: "0.06rem solid var(--color-white)",
};

export const NameStyle: SxProps<Theme> = {
    fontSize: "1.2rem",
    fontWeight: "bold"
};

export const AccountTypeStyle: SxProps<Theme> = {
    fontSize: "1rem",
    fontWeight: "light"
};

export const AmountStyle: SxProps<Theme> = {
    fontSize: "1.1rem",
    fontWeight: "bold"
};

export const ContainerStyle: SxProps<Theme> = {
    display: "flex",
    width: "20rem",
    justifyContent: "space-between",
};

export const ContentStyle: SxProps<Theme> = {
    fontSize: "0.8rem",
};

