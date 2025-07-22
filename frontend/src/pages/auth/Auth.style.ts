import type { SxProps, Theme } from '@mui/material'

export const formWrapper: SxProps<Theme> = (theme) => ({
  width: '350px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px 30px 35px',
  borderRadius: '2px',
  backgroundColor: theme.palette.background.paper,
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
