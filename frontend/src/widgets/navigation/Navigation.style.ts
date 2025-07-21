import type { SxProps, Theme } from "@mui/material";

export const navListStyle: SxProps<Theme> = {
  display: "flex",
  gap: "30px",

  "& *": {
    fontWeight: "bold",
  },
};

export const navLinkStyle = (
  isActive: boolean,
  linkColor?: string
): SxProps<Theme> => (theme) => ({
  textDecoration: "none",
  color: isActive && linkColor ? linkColor : "inherit",
  fontWeight: isActive ? "bold" : "normal",
  transition: "color 0.3s",

  "&:hover": {
    color: linkColor || theme.palette.secondary.main,
  },
});
