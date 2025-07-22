import type { SxProps, Theme } from "@mui/material";

export const ContainerStyle: SxProps<Theme> = (theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.text.primary,
  padding: "10px 0",
  gap: "10px",
});

export const ContentStyle: SxProps<Theme> = (theme) => ({
  width: "1120px",
  display: "flex",
  justifyContent: "space-between",
  background: theme.palette.background.paper,
  borderRadius: "8px",
  padding: "12px",
});

export const TextStyle: SxProps<Theme> = {
  fontSize: "18px",
};