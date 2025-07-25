import type { SxProps, Theme } from "@mui/material";

export const ContainerStyle: SxProps<Theme> = {
    display: "flex",
    justifyContent: "space-between"
};

export const DepositsListStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    marginTop: "3px",
    gap: "16px"
};

export const DepositsStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px"
};

export const NavButtonsStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    color: theme => theme.palette.text.primary,
    marginTop: "16px",
    gap: "16px",
    marginLeft: "20px",
};

export const BigButtonStyle: SxProps<Theme> = {
    backgroundColor: theme => theme.palette.secondary.light,
    color: theme => theme.palette.text.primary,
    borderRadius: "16px",
    padding: "19px",
    textAlign: "center",
    fontWeight: 600,
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",

    "&:hover": {
        backgroundColor: theme => theme.palette.primary.main,
        color: theme => theme.palette.background.paper
    },
  svg: {
    fontSize: "48px"
  }
};

export const GridButtonsStyle: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px"
};

export const GridButtonItemStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: theme => theme.palette.secondary.light,
    color: theme => theme.palette.text.primary,
    borderRadius: "16px",
    height: "160px",
    fontSize: "13px",
    padding: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",

    "&:hover": {
        backgroundColor: theme => theme.palette.primary.main,
        color: theme => theme.palette.background.paper
    },

    svg: {
        fontSize: "48px",
        marginBottom: "16px"
    }
};

export const BackgroundStyle: SxProps<Theme> = {
    background: theme => theme.palette.secondary.main,
    padding: "8px 16px",
    borderRadius: "16px",
    height: "216px",
    marginLeft: "10px"
};

export const ButtonBacksStyle: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    color: theme => theme.palette.primary.main,
    gap: "8px",
    cursor: "pointer",
    marginTop: "48px",
  
    "&:hover": {
        textDecoration: "underline",
    },
};
