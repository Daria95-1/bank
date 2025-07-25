import { Box } from '@mui/material'
import { ButtonStyle } from './ButtonGradient.style'

interface ButtonGradientProps {
  label: string
  width?: string
  onClick: () => void
}

export const ButtonGradient = ({ label, width, onClick }: ButtonGradientProps) => {
  return (
    <Box
      onClick={onClick}
      width={width}
      sx={ButtonStyle}
      role="button"
    >
      {label}
    </Box>
  )
}
