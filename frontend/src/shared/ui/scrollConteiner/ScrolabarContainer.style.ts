import type { SxProps, Theme } from "@mui/material";

export const getScrollableContainerStyle = (
  width: string,
  height: string
): SxProps<Theme> => ({
  position: "relative",
  overflow: "auto",
  overflowAnchor: "none",
  width,
  height,
  borderRadius: "1.25rem",
  paddingTop: "0.2rem",
  paddingRight: "0.5rem",

  "&::-webkit-scrollbar": {
    width: "0.5rem",
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: (theme) => theme.palette.background.paper,
    borderRadius: "0.25rem",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: (theme) => theme.palette.text.disabled,
    borderRadius: "0.25rem",
  },

  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: (theme) => theme.palette.text.secondary,
  },
});
