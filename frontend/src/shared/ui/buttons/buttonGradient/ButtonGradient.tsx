import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { ButtonStyle } from './ButtonGradient.style'

interface ButtonGradientProps {
  to: string
  label: string
  width?: string
}

export const ButtonGradient = ({ to, label, width }: ButtonGradientProps) => {
  return (
    <Box
      component={NavLink}
      to={to}
      width={width}
      sx={ButtonStyle}
    >
      {label}
    </Box>
  )
}
