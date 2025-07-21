import type { SxProps, Theme } from '@mui/material'

export const formWrapper: SxProps<Theme> = {
  width: '350px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px 30px 35px',
  borderRadius: '2px',
  backgroundColor: 'background.paper',
}

export const title: SxProps<Theme> = {
  fontSize: 20,
  fontWeight: 600,
}

export const errorText: SxProps<Theme> = {
  color: 'error.main',
  fontSize: 14,
  mt: 1,
}
