import type { SxProps, Theme } from "@mui/material";

export const MainFooterStyle: SxProps<Theme> = (theme) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.primary.main,
});

export const LogoStyle: SxProps<Theme> = {
  width: "100px",
  textAlign: "center",
  marginTop: "10px"
};

export const MenuStyle: SxProps<Theme> = (theme) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  color: theme.palette.common.white,
  whiteSpace: "nowrap",
  cursor: "pointer",
  gap: "16px",
});

export const ContainerStyle: SxProps<Theme> = (theme) => ({
  width: "100%",
  display: "flex",
  height: "55px",
  color: theme.palette.text.secondary,
  background: theme.palette.primary.dark,
});

export const ContentStyle: SxProps<Theme> = {
  width: "100%",
  maxWidth: "1120px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0 auto",
};