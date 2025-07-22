import { styled } from "@mui/material/styles"; // ← заменили импорт!
import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

type ButtonType = ButtonProps & {
  valid?: boolean;
  width: string;
};

export const ButtonSubmitSecondary = styled(Button, {
  shouldForwardProp: (prop) => prop !== "valid",
})<ButtonType>(({ theme, valid, width }) => ({
  background: theme.palette.text.secondary,
  borderRadius: "12px",
  border: "none",
  color: theme.palette.common.white,
  width: width,
  height: "42px",
  padding: "4px 15px",
  textTransform: "none",

  "&:focus": {
    outline: "none",
    boxShadow: "none",
    backgroundColor: valid ? theme.palette.text.secondary : theme.palette.primary.light,
  },

  "&:hover": {
    cursor: "pointer",
    backgroundColor: valid ? theme.palette.primary.main : theme.palette.primary.light,
    border: "none",
  },

  "&.Mui-disabled": {
    border: "none",
    cursor: "pointer",
  },
}));
