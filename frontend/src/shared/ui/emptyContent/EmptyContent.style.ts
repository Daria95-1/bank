import type { SxProps, Theme } from "@mui/material";


export const EmptyContentWrapperStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "4rem auto 0",
    color: "var(--color-white)",
    fontSize: "1.2rem",
    gap: "1rem",
    textAlign: "center",
};

export const AddButtonStyle: SxProps<Theme> = {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "0.75rem",
    color: "var(--color-white)",
    background: "var(--main-gradient)",
    margin: "1rem auto 0",
    textTransform: "none",

    "&:hover": {
        background: "var(--main-gradient)",
    },
};