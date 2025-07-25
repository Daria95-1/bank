import type { SxProps, Theme } from "@mui/material";

export const ContainerStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    color: theme => theme.palette.text.primary,
    gap: "16px"
};

export const ContentStyle: SxProps<Theme> = {
    width: "480px",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left"
};