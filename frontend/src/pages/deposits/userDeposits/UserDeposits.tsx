import { Box, Typography } from '@mui/material'
import { LayoutWrapper } from '../../../shared/ui/layoutWrapper/LayoutWrapper'
import { EmptyContent } from '../../../shared/ui/emptyContent/EmptyContent'
import { BackgroundStyle, ContainerStyle, DepositsListStyle, DepositsStyle, GridButtonItemStyle, GridButtonsStyle, NavButtonsStyle, BigButtonStyle, ButtonBacksStyle } from './UserDeposits.style'
import { useNavigate } from 'react-router-dom'
import { RoutesConf } from '@/app/core/enums/routes.enums'
import { DepositItem } from './depositsItem/DepositsItem'
import { useState } from 'react'
import { DepositInfo } from './depositInfo/DepositInfo'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import LoopIcon from '@mui/icons-material/Loop'
import TimelineIcon from '@mui/icons-material/Timeline'
import DescriptionIcon from '@mui/icons-material/Description'
import RuleIcon from '@mui/icons-material/Rule'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { mockInfoAboutUserDeposit, mockUserDeposits } from '@/app/core/api/mocks/mockDeposits'
import { DynamicTitle } from '@/shared/ui/dynamicTitle/DynamicTitle'
import { ScrollabarContainer } from '@/shared/ui/scrollConteiner/ScrolabarContainer'
import { ButtonGradient } from '@/shared/ui/buttons/buttonGradient/ButtonGradient'

export const UserDeposits = () => { 
    const navigate = useNavigate()
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [showDetails, setShowDetails] = useState(false);

    const handleItemClick = (index: number) => {
        setSelectedIndex(index);
        setShowDetails(false);
     };
    
    const handleSubmit = () => {
        navigate(`/${RoutesConf.user_deposits}/${RoutesConf.all_deposits}`)
    };

    const selectedDeposit = mockUserDeposits[selectedIndex];
    const selectedDepositInfo = mockInfoAboutUserDeposit.find(info => info.depositId === selectedDeposit.id) ?? null;

    const handleShowDetails = () => {
        if (selectedDeposit) {
        setShowDetails(true);
        }
    };

    const handleBackToMenu = () => {
        setShowDetails(false);
    };

    const handleToDepositHistory = () => {
        navigate(`/${RoutesConf.user_deposits}/${RoutesConf.deposit_history}/${selectedDeposit.id}`)
    }
    
    return (
        <LayoutWrapper>
            <DynamicTitle mainText="Мои " secondaryText="вклады" />

            {mockUserDeposits.length === 0 ? (
                <EmptyContent
                    line1="У вас нет доступных вкладов."
                    line2="Вы можете открыть новый вклад."
                    buttonLabel="Открыть новый вклад"
                    onButtonClick={() => { }}
                />
            ) : (
                <Box sx={ContainerStyle}>
                    <Box sx={DepositsStyle}>
                        <ScrollabarContainer height="480px">
                                <Box
                                    component="ul"
                                    sx={DepositsListStyle}
                                >
                                {mockUserDeposits.map((item, index) => (
                                <DepositItem
                                    key={index}
                                    item={item}
                                    selected={selectedIndex === index}
                                    onClick={() => handleItemClick(index)}
                                />
                                ))}
                            </Box>
                        </ScrollabarContainer>
                        
                        <ButtonGradient
                            onClick={handleSubmit}
                            label='Открыть новый вклад'
                        />
                    </Box>
                    
                    {!showDetails ? (
                    <Box sx={NavButtonsStyle}>
                        <Box sx={BigButtonStyle} onClick={handleShowDetails}>
                            <InfoOutlinedIcon />
                            Подробная информация по вкладу
                        </Box>

                        <Box sx={GridButtonsStyle}>
                            <Box sx={GridButtonItemStyle}>
                            <TrendingUpIcon />
                            Пополнить вклад
                            </Box>

                            <Box sx={GridButtonItemStyle}>
                            <LoopIcon />
                            Автопродление вклада
                            </Box>

                            <Box sx={GridButtonItemStyle} onClick={handleToDepositHistory}>
                            <TimelineIcon />
                            История операций
                            </Box>

                            <Box sx={GridButtonItemStyle}>
                            <DescriptionIcon />
                            Выписка
                            </Box>

                            <Box sx={GridButtonItemStyle}>
                            <RuleIcon />
                            Условия
                            </Box>

                            <Box sx={GridButtonItemStyle}>
                            <HighlightOffIcon />
                            Закрыть вклад
                            </Box>
                        </Box>
                        </Box>
            ) : (
                <Box sx={BackgroundStyle}>
                    <DynamicTitle mainText="Информация по вкладу" style={{ fontSize: '30px' }} />

                    <DepositInfo
                        selectedDepositInfo={selectedDepositInfo}
                        selectedDeposit={selectedDeposit}
                    />
                                    
                    <Box
                        onClick={handleBackToMenu}
                        sx={ButtonBacksStyle}
                    >
                        <Typography>&lt; Назад</Typography>
                    </Box>
                </Box>
            )}
        </Box>
      )}
    </LayoutWrapper>
  );
};