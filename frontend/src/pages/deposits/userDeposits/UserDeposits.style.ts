import type { SxProps, Theme } from "@mui/material";

export const ContainerStyle: SxProps<Theme> = {
    display: "flex",
    justifyContent: "space-between"
};

export const DepositsListStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    marginTop: "0.2rem",
    gap: "1rem"
};

export const DepositsStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem"
};

export const ButtonAddStyle: SxProps<Theme> = {
    width: "20rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "0.75rem",
    color: "var(--color-white)",
    background: "var(--main-gradient)",
    cursor: "pointer",
    padding: "0.75rem 1.5rem"
};

export const BackgroundStyle: SxProps<Theme> = {
    background: "var(--color-dark)",
    padding: "0.5rem 1rem",
    borderRadius: "1rem",
    height: "13.5rem"
};

export const NavButtonsStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    color: "var(--color-white)",
    marginTop: "1rem",
    gap: "1rem"
};

export const BigButtonStyle: SxProps<Theme> = {
    backgroundColor: "var(--color-dark)",
    color: "var(--color-white)",
    borderRadius: "1rem",
    padding: "1.2rem",
    textAlign: "center",
    fontWeight: 600,
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    cursor: "pointer",

    "&:hover": {
        backgroundColor: "var(--color-red)"
    },

    svg: {
        fontSize: "3rem"
    }
};

export const GridButtonsStyle: SxProps<Theme> = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem"
};

export const GridButtonItemStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "var(--color-white)",
    backgroundColor: "var(--color-dark)",
    borderRadius: "1rem",
    height: "10rem",
    fontSize: "0.8rem",
    padding: "0.5rem",
    cursor: "pointer",
    transition: "background-color 0.3s",

    "&:hover": {
        backgroundColor: "var(--color-red)"
    },

    svg: {
        fontSize: "3rem",
        marginBottom: "1rem"
    }
};

export const ButtonBacksStyle: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    color: "var(--color-white)",
    gap: "0.5rem",
    cursor: "pointer",
    marginTop: "3rem",
    textDecoration: "underline"
};
