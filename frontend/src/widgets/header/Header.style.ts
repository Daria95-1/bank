import type { SxProps, Theme } from "@mui/material";

export const HeaderBoxStyle: SxProps<Theme> = (theme) => ({
  position: "absolute",
  top: 0,
  zIndex: 18,
  width: "100%",
  height: "60px",
  display: "flex",
  background: theme.palette.primary.dark,
  color: theme.palette.background.default,
  whiteSpace: "nowrap",
});

export const HeaderContainerStyle: SxProps<Theme> = {
  width: "100%",
  maxWidth: "1120px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
};

export const Logo: SxProps<Theme> = {
  height: "100%",
  maxWidth: "100px",
  marginRight: "50px"
};

export const AuthStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px"
};

export const LinkAvatarStyle: SxProps<Theme> = (theme) => ({
  color: theme.palette.common.white,
  fontSize: "48px",
  cursor: "pointer",
  marginLeft: "8px",
  marginRight: "-16px",
});

export const LinkLogoStyle: SxProps<Theme> = {
  marginLeft: "16px",
  cursor: "pointer",
};

export const LinkEnterStyle: SxProps<Theme> = (theme) => ({
  fontSize: "16px",
  color: theme.palette.common.white,
  textDecoration: "none",
  background: theme.palette.gradients.primary,
  borderRadius: "20px",
  padding: "9px",
  marginLeft: "32px"
});

export function mergeSxProps(
  ...styles: (SxProps<Theme> | false | undefined)[]
): SxProps<Theme> {
  return styles.filter(Boolean) as SxProps<Theme>;
}