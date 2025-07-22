import type { SxProps, Theme } from "@mui/material";

export const ContainerStyle: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    gap: "1rem"
};

export const ButtonStyle: SxProps<Theme> = {
    color: "var(--color-white)",
    background: "var(--color-main-dark)",
    height: "2.5rem",
    borderRadius: "10rem",

    "&:hover": {
        background: "var(--color-red)",
  },
};