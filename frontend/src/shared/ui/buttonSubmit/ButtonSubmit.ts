import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

type ButtonType = ButtonProps & {
  valid?: boolean;
  width?: string;
};

export const ButtonSubmit = styled(Button, {
  shouldForwardProp: (prop) => prop !== "valid",
})<ButtonType>(({ theme, valid, width }) => ({
  background: valid ? theme.palette.gradients.primary : theme.palette.primary.dark,
  borderRadius: "0.75rem",
  border: "none",
  color: theme.palette.common.white,
  width: width || "auto",
  height: "2.6rem",
  whiteSpace: "nowrap",
  cursor: "pointer",
  textTransform: "none",
  fontFamily: theme.typography.fontFamily,

  "&:focus": {
    outline: "none",
    boxShadow: "none",
    background: valid ? theme.palette.gradients.primary : theme.palette.primary.dark,
  },

  "&:hover": {
    background: valid ? theme.palette.primary.dark : theme.palette.primary.light,
    border: "none",
  },

  "&.Mui-disabled": {
    border: "none",
    cursor: "not-allowed",
  },
}));
