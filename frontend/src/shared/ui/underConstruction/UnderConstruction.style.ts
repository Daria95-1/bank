import type { SxProps, Theme } from "@mui/material";

export const ContainerStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "var(--color-white)",
    maxWidth: "35rem",
    backgroundColor: "var(--color-dark)",
    borderRadius: "1rem",
    marginTop: "8rem",
    padding: "3rem",
    margin: "6rem auto 1rem auto",
};

export const TextStyle: SxProps<Theme> = {
    marginTop: "1rem",
    fontSize: "1rem",
    textAlign: "center",
    lineHeight: "1.5",
};