import type { SxProps, Theme } from "@mui/material";

export const ContainerStyle: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    gap: "16px"
};

export const ButtonStyle: SxProps<Theme> = {
    color: theme => theme.palette.text.primary,
    background: theme => theme.palette.text.disabled,
    height: "40px",
    borderRadius: "10rem",
    border: "none",

    "&:hover": {
        background: theme => theme.palette.primary.main,
        color: theme => theme.palette.background.paper,
    },
};