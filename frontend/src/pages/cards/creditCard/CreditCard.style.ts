import type { SxProps, Theme } from "@mui/material";

export const containerStyle = (background: string): SxProps<Theme> => ({
  minWidth: "245px",
  height: "148px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  fontSize: "10px",
  fontWeight: 400,
  color: (theme) => theme.palette.text.primary,
  background: background,
  borderRadius: "16px",
  boxShadow: "0px 4px 10px rgba(33, 33, 33, 0.15)",
  padding: "16px",
});

export const typeLogoContainerStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
};

export const typeTextStyle: SxProps<Theme> = (theme) => ({
  fontSize: "15px",
  fontWeight: "bold",
  color: theme.palette.background.default,
  textShadow: `
    1px 1px 0 #00000088,
    2px 2px 0 #00000066,
    3px 3px 2px #00000044
  `,
});

export const NumAndDataStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
};

export const accNumStyle: SxProps<Theme> = (theme) => ({
  color: theme.palette.background.default,
  fontSize: "10px",
  marginBottom: "8px",
  textShadow: `
    1px 1px 0 #00000088,
    2px 2px 0 #00000066,
    3px 3px 2px #00000044
  `,
});

export const dateStyle: SxProps<Theme> = (theme) => ({
  color: theme.palette.background.default,
  fontSize: "10px",
  marginBottom: "8px",
  textShadow: `
    1px 1px 0 #00000088,
    2px 2px 0 #00000066,
    3px 3px 2px #00000044
  `,
});

export const NameStyle: SxProps<Theme> = (theme) => ({
  color: theme.palette.background.default,
  fontSize: "12px",
  marginBottom: "8px",
  textShadow: `
    1px 1px 0 #00000088,
    2px 2px 0 #00000066,
    3px 3px 2px #00000044
  `,
});

export const chipStyle: SxProps<Theme> = {
  marginTop: "6px",
};

export const paymentSystemStyle: SxProps<Theme> = {
  marginTop: "-10px",
  textAlign: "end",
};

export const bankLogoStyle: SxProps<Theme> = {
  display: "block",
  width: "22px",
  height: "22px",
};
