import type { SxProps, Theme } from '@mui/material'

export const ContainerStyle: SxProps<Theme> = {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

export const OutletStyle: SxProps<Theme> = {
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
}

export const LoaderStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  minHeight: '300px',
}