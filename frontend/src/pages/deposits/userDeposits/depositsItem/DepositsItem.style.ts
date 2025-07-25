import type { SxProps, Theme } from "@mui/material";

export const ItemStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme => theme.palette.background.paper,
    color: theme => theme.palette.text.primary,
    borderRadius: "16px",
    border: "1px solid transparent",
    boxSizing: "border-box",
    marginRight: "8px",
    padding: "16px 64px",
    gap: "8px",
    cursor: "pointer",
};

export const getSelectedStyle = (theme: Theme): SxProps<Theme> => ({
    border: `1px solid ${theme.palette.text.disabled}`,
});

export const NameStyle: SxProps<Theme> = {
    fontSize: "20px",
    fontWeight: "bold",
    color: theme => theme.palette.primary.main,
};

export const AccountTypeStyle: SxProps<Theme> = {
    fontSize: "16px",
    fontWeight: "light",
};

export const AmountStyle: SxProps<Theme> = {
    fontSize: "18px",
    fontWeight: "bold",
};

export const ContainerStyle: SxProps<Theme> = {
    display: "flex",
    width: "320px",
    justifyContent: "space-between",
    color: theme => theme.palette.text.secondary,
};

export const ContentStyle: SxProps<Theme> = {
    fontSize: "13px",
};
