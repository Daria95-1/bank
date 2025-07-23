import type { SxProps, Theme } from "@mui/material";

export const TitleStyle: SxProps<Theme> = (theme) => ({
    maxWidth: "1120px",
    fontSize: "44px",
    color: theme.palette.primary.dark,
    wordBreak: "break-word",
    justifySelf: "center",
});

export const SecondaryTextStyle: SxProps<Theme> = (theme) => ({
    fontSize: "44px",
    color: theme.palette.secondary.light
});