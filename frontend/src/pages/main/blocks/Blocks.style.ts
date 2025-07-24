import type { SxProps, Theme } from '@mui/material'

export const Container: SxProps<Theme> = {
  width: '1120px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
  padding: '40px 0',
}

export const CardBox: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: theme => theme.palette.background.paper,
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  height: '200px',
  minWidth: '250px',
  cursor: "pointer"
}

export const CardIcon: SxProps<Theme> = {
  fontSize: '36px',
  color: theme => theme.palette.primary.main,
  marginBottom: '16px',
}

export const CardTitle: SxProps<Theme> = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '8px',
  color: theme => theme.palette.text.primary,
}

export const CardSubtitle: SxProps<Theme> = {
  fontSize: '1rem',
  color: theme => theme.palette.text.secondary,
  marginBottom: '16px',
}

export const CardButton: SxProps<Theme> = {
  width: "110px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  textDecoration: "none",
  backgroundColor: theme => theme.palette.primary.main,
  color: theme => theme.palette.background.paper,
  whiteSpace: 'nowrap',
  borderRadius: "20px",
  textTransform: 'none',

  '&:hover': {
    backgroundColor: theme => theme.palette.secondary.light,
  },
}