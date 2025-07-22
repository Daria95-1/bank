import type { SxProps, Theme } from "@mui/material";

export const ContainerStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    color: "var(--color-white)",
    gap: "1rem"
};

export const ContentStyle: SxProps<Theme> = {
    width: "30rem",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left"
};