import type { SxProps, Theme } from "@mui/material";

export const ItemStyle: SxProps<Theme> = {
    maxWidth: "320px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: "48px",
    gap: "5px",
};

export const ValueStyle: SxProps<Theme> = (theme) => ({
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginTop: "5px"
});