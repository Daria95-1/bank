import type { SxProps, Theme } from '@mui/material'

export const formWrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 350,
  padding: '20px 30px 35px',
  borderRadius: 2,
  backgroundColor: 'background.paper',
}

export const title: SxProps<Theme> = {
  fontSize: 20,
  fontWeight: 600,
  mb: 2,
}

export const errorText: SxProps<Theme> = {
  color: 'error.main',
  fontSize: 14,
  mt: 1,
}

export const submitButton: SxProps<Theme> = {
  mt: 3,
  mb: 2,
}
