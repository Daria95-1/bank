import type { SxProps, Theme } from "@mui/material";

export const sectionStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "left",
  justifySelf: "left",
  width: "23rem",
  backgroundColor: "var(--color-main-dark)",
  border: "none",
  borderRadius: "6.25rem",
  margin: "3rem 0",
  gap: "1rem",
};