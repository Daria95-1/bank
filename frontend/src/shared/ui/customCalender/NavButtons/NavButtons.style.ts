import type { SxProps, Theme } from "@mui/material"

export const ContainerStyle: SxProps<Theme> = {
    display: "flex",
    gap: "8px",
    alignItems: "center",
}

export const ButtonStyle: SxProps<Theme> = {
    color: theme => theme.palette.background.paper,
    backgroundColor: theme => theme.palette.primary.main,
    fontSize: '10px',
  
    "&:hover": {
        backgroundColor: theme => theme.palette.secondary.light,
    },
}
