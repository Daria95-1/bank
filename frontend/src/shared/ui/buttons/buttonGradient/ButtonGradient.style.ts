import type { SxProps, Theme } from "@mui/material";

export const ButtonStyle: SxProps<Theme> = (theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  textDecoration: "none",
  color: theme.palette.common.white,
  background: theme.palette.gradients.primary,
  whiteSpace: 'nowrap',
  textTransform: 'none',
  borderRadius: "20px",
  padding: "8px 15px",

  '&:hover': {
    background: theme.palette.secondary.light,
    color: theme.palette.common.white,
  },
});