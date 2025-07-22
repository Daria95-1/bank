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
  backgroundColor: active ? theme.palette.secondary.main : theme.palette.primary.main,
  borderRadius: "100px",
  border: "none",
  color: active ? theme.palette.primary.dark : theme.palette.common.white ,
  padding: "14px 24px",

  "&:focus": {
    outline: "none",
    boxShadow: "none",
    backgroundColor: active ? theme.palette.secondary.main : theme.palette.primary.dark,
    color: active ? theme.palette.primary.dark : theme.palette.common.white,
  },

  "&:hover": {
    cursor: "pointer",
    backgroundColor: active ? theme.palette.secondary.main : theme.palette.primary.light,
    color: active ? theme.palette.primary.dark : theme.palette.secondary.main,
    border: "none",
  },

  "&:active": {
    cursor: "pointer",
    backgroundColor: active ? theme.palette.secondary.main : theme.palette.primary.light,
    color: active ? theme.palette.primary.dark : theme.palette.secondary.main,
    border: "none",
  },
}));
