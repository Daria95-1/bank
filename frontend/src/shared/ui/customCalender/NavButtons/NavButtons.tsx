import { IconButton, Box } from "@mui/material"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { ContainerStyle, ButtonStyle } from "./NavButtons.style"

type NavButtonsProps = {
  onPrev: () => void
  onNext: () => void
}

export const NavButtons = ({ onPrev, onNext }: NavButtonsProps) => {
  return (
    <Box sx={ContainerStyle}>
      <IconButton sx={ButtonStyle} onClick={onPrev}>
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <IconButton sx={ButtonStyle} onClick={onNext}>
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  )
}
