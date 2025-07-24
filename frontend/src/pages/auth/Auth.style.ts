import type { SxProps, Theme } from '@mui/material'

export const WrapperStyle: SxProps<Theme> = {
    maxWidth: "1120px",
    display: "flex",
    margin: "auto",
    padding: "0 1rem",
};

export const formWrapper: SxProps<Theme> = (theme) => ({
  width: '350px',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '2px',
  padding: '20px 30px 35px',
})

export const title: SxProps<Theme> = {
  fontSize: 20,
  fontWeight: 600,
}

export const errorText: SxProps<Theme> = (theme) => ({
  color: theme.palette.error.main,
  fontSize: 14,
})

export const LinkStyle: SxProps<Theme> = (theme) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  marginTop: '20px',

  "&:hover": {
    textDecoration: 'underline'
  },
})
