import type { SxProps, Theme } from "@mui/material";

export const containerStyle: SxProps<Theme> = {
  maxWidth: "1120px",
  display: "flex",
  fontSize: "14px",
  marginBottom: "12px",
  gap: "12px",
};

export const itemStyle: SxProps<Theme> = (theme) => ({
  flex: 1,
  alignContent: "center",
  minWidth: 0,
  height: "120px",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  padding: "0 20px",
  boxSizing: "border-box",
});

export const blockQuestionStyle: SxProps<Theme> = (theme) => ({
  display: "flex",
  justifyContent: "space-between",
  alignSelf: "center",
  fontSize: "14px",
  borderRadius: "10px",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  padding: "10px",
  marginBottom: "10px",
});

export const questionStyle: SxProps<Theme> = {
  alignSelf: "center",
};

export const answerStyle: SxProps<Theme> = {
  maxWidth: "480px",
  width: "100%",
};
