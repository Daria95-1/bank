import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

type ButtonSubmiteType = ButtonProps & {
  active: boolean;
};

export const ButtonSubmitMain = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<ButtonSubmiteType>(({ theme, active }) => ({
  width: "auto",
  height: "42px",
  backgroundColor: active ? theme.palette.primary.main : theme.palette.text.disabled,
  borderRadius: "100px",
  border: "none",
  color: active ? theme.palette.common.white : theme.palette.text.primary,
  padding: "14px 24px",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: active ? theme.palette.primary.main : theme.palette.primary.light,
    color: theme.palette.common.white,
    border: "none",
  },

  "&:active": {
    cursor: "pointer",
    backgroundColor: active ? theme.palette.primary.main : theme.palette.primary.light,
    color: active ? theme.palette.common.white : theme.palette.secondary.main,
    border: "none",
  },
}));