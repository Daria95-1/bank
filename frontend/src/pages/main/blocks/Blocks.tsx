import { Box, Button, Typography } from '@mui/material'
import { infoCards } from '../const/const';
import { CardBox, CardButton, CardIcon, CardSubtitle, CardTitle, Container } from './Blocks.style';

export const Blocks = () => {
    return (
    <Box sx={Container}>
      {infoCards.map((card, idx) => {
        const Icon = card.icon
        return (
          <Box key={idx} sx={CardBox}>
            <Icon sx={CardIcon} />
            <Typography sx={CardTitle}>{card.title}</Typography>
            <Typography sx={CardSubtitle}>{card.subtitle}</Typography>
            {card.button && <Button sx={CardButton}>Оформить</Button>}
          </Box>
        )
      })}
    </Box>
  )
}