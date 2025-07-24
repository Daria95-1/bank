import { Box, Typography } from '@mui/material'
import { ContentBox, Cover, SubtitleText, TitleText } from './Banner.style'
import { ButtonGradient } from '@/shared/ui/buttons/buttonGradient/ButtonGradient'
import { RoutesConf } from '@/app/core/enums/routes.enums'

export const Banner = () => {
    return (
        <Box sx={Cover}>
            <Box sx={ContentBox}>
                <Typography sx={TitleText}>
                    Добро пожаловать в Bank
                </Typography>
                    
                <Typography sx={SubtitleText}>
                    Управляйте своими финансами просто, удобно и безопасно
                </Typography>
                
                <ButtonGradient to={RoutesConf.cards} label='Открыть счёт' width="130px"/>
            </Box>
      </Box>
    )
}