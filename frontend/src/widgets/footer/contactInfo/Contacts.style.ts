import type { SxProps, Theme } from "@mui/material";

export const ContactsStyle: SxProps<Theme> = (theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "50px",
  background: theme.palette.primary.light,
  gap: "2rem",
});

export const ContactsLinkStyle: SxProps<Theme> = (theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.background.default,
});

export const IconStyle: SxProps<Theme> = (theme) => ({
  color: theme.palette.secondary.main,
  marginRight: "10px"
});