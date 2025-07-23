import type { SxProps, Theme } from "@mui/material";

export const CardOfferStyle: SxProps<Theme> = (theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  maxWidth: "1120px",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: "32px 24px",
  borderRadius: "16px",
  margin: "0 auto 8px auto",
  gap: "32px",
});

export const InfoAndButtonsStyle: SxProps<Theme> = {
  display: "flex",
  padding: "16px 32px",
};

export const CardInformationStyle: SxProps<Theme> = {
  display: "flex",
  fontSize: "14px",
  color: (theme) => theme.palette.text.primary,
};

export const CardDriverStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  marginTop: "16px",
  gap: "10px",
};
