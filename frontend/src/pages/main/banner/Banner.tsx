import { Box, Typography } from '@mui/material'
import { ContentBox, Cover, SubtitleText, TitleText } from './Banner.style'
import { ButtonGradient } from '@/shared/ui/buttons/buttonGradient/ButtonGradient'
import { RoutesConf } from '@/app/core/enums/routes.enums'
import { useNavigate } from 'react-router-dom'

export const Banner = () => {
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate(`/${RoutesConf.cards}`)
    }
    
    return (
        <Box sx={Cover}>
            <Box sx={ContentBox}>
                <Typography sx={TitleText}>
                    Добро пожаловать в Bank
                </Typography>
                    
                <Typography sx={SubtitleText}>
                    Управляйте своими финансами просто, удобно и безопасно
                </Typography>
                
                <ButtonGradient onClick={handleRedirect} label='Открыть счёт' width="130px"/>
            </Box>
      </Box>
    )
}