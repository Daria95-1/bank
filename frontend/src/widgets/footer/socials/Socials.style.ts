import type { SxProps, Theme } from "@mui/material";

export const ContactsStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.5rem"
};

export const ContactsLinkStyle: SxProps<Theme> = (theme) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px", 
  height: "40px",
  color: theme.palette.background.default,
  background: theme.palette.gradients.primary,
  borderRadius: "1.5rem",
});
