import type { SxProps, Theme } from "@mui/material";

export const DepositOfferStyle: SxProps<Theme> = (theme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "1120px",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: "20px 18px",
    borderRadius: "1rem",
    gap: "1rem",
});

export const InfoAndButtonsStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
};

export const DepositInformationStyle: SxProps<Theme> = {
    display: "flex",
    fontSize: "14px",
};

export const DepositDriverStyle: SxProps<Theme> = {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "15px",
    gap: "15px",
};