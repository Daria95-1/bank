import type { SxProps, Theme } from "@mui/material";

export const Title: SxProps<Theme> = {
  display: "flex",
  gap: "10px"
};

export const MainText: SxProps<Theme> = (theme) => ({
  fontSize: "24px",
  fontWeight: "bold",
  color: theme.palette.secondary.main,
});

export const SecondaryText: SxProps<Theme> = (theme) => ({
  fontSize: "24px",
  fontWeight: "bold",
  color: theme.palette.text.primary,
});
