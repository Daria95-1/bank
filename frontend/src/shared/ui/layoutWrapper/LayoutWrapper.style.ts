import type { SxProps, Theme } from "@mui/material";

export const WrapperStyle: SxProps<Theme> = {
    maxWidth: "1120px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: "80px auto",
    padding: "0 1rem",
};

export const ContentStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
};

export const HeaderRowStyle: SxProps<Theme> = {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "30px",
};

export const BackLinkWrapperStyle: SxProps<Theme> = {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "10px",
};
