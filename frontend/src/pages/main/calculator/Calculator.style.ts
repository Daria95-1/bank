import type { SxProps, Theme } from '@mui/material'

export const Container: SxProps<Theme> = {
  width: '1120px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px auto 50px auto',
  gap: '40px'
}

export const FirstBlock: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  width: '600px',
  padding: '30px 40px',
  borderRadius: '16px',
  backgroundColor: theme => theme.palette.background.default,
}

export const SecondBlock: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
  padding: '30px 40px',
  borderRadius: '16px',
  backgroundColor: theme => theme.palette.background.paper
}

export const Title: SxProps<Theme> = {
  marginBottom: '16px',
}

export const ToggleGroup: SxProps<Theme> = {
  marginBottom: '32px',
}

export const SliderLabel: SxProps<Theme> = {
  marginBottom: '8px',
}

export const SliderStyle: SxProps<Theme> = {
  marginBottom: '32px',
}

export const TermToggleGroup: SxProps<Theme> = {
  marginBottom: '32px',
}

export const LimitStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  color: theme => theme.palette.text.secondary,
  marginTop: '-25px',
  marginBottom: '20px'
}

export const ResultBlock: SxProps<Theme> = {
  marginTop: '32px',
  marginBottom: '32px',
}

export const FinalAmount: SxProps<Theme> = {
  fontSize: '20px',
}

export const FormBlock: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}

export const SubmitButton: SxProps<Theme> = {
  background: (theme) => theme.palette.gradients.primary,
  color: '#fff',
  '&:hover': {
    background: (theme) => theme.palette.primary.dark,
  },
}
