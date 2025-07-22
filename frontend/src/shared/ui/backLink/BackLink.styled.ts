import type { SxProps, Theme } from "@mui/material";

export const StyledLink: SxProps<Theme> = (theme) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  textDecoration: "none",

  "&:hover": {
    textDecoration: "underline",
  },
});