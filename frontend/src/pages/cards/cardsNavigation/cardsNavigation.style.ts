import type { SxProps, Theme } from "@mui/material";

export const sectionStyle: SxProps<Theme> = (theme) => ({
  width: "500px",
  display: "flex",
  justifyContent: "left",
  justifySelf: "left",
  backgroundColor: theme.palette.background.default,
  border: "none",
  borderRadius: "100px",
  whiteSpace: "nowrap",
  margin: "10px 0",
  gap: "10px",
});