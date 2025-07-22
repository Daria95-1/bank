import { Box, Button, Typography } from '@mui/material'
import { LayoutWrapper } from '../../../shared/ui/layoutWrapper/LayoutWrapper'
import { EmptyContent } from '../../../shared/ui/emptyContent/EmptyContent'
import { BackgroundStyle, ButtonAddStyle, ContainerStyle, DepositsListStyle, DepositsStyle, GridButtonItemStyle, GridButtonsStyle, NavButtonsStyle, BigButtonStyle, ButtonBacksStyle } from './UserDeposits.style'
import { useNavigate } from 'react-router-dom'
import { RoutesConf } from '@/app/core/enums/routes.enums'
import { DepositItem } from './depositsItem/DepositsItem'
import { useState } from 'react'
import { DepositInfo } from './depositInfo/DepositInfo'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import HistoryIcon from '@mui/icons-material/History';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import GavelIcon from '@mui/icons-material/Gavel';
import CloseIcon from '@mui/icons-material/Close';
import { mockInfoAboutUserDeposit, mockUserDeposits } from '@/app/core/api/mocks/mockDeposits'
import ScrollableContainer from '@/shared/ui/scrollConteiner/scrolableContainer'
import { DynamicTitle } from '@/shared/ui/dynamicTitle/DynamicTitle'

export const UserDeposits = () => { 
    const navigate = useNavigate()
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [showDetails, setShowDetails] = useState(false);

    const handleItemClick = (index: number) => {
        setSelectedIndex(index);
        setShowDetails(false);
     };
    
    const handleSubmit = () => {
        navigate(`/${RoutesConf.user_deposits}/${RoutesConf.all_deposits}`);
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
            <DynamicTitle text="Мои " whiteText="вклады" />

            {mockUserDeposits.length === 0 ? (
                <EmptyContent
                    data-testid="deposits-empty"
                    line1="У вас нет доступных вкладов."
                    line2="Вы можете открыть новый вклад."
                    buttonLabel="Открыть новый вклад"
                    onButtonClick={() => { }}
                />
            ) : (
                <Box sx={ContainerStyle}>
                    <Box sx={DepositsStyle}>
                        <ScrollableContainer height="30rem">
                                <Box
                                    data-testid="deposits-list"
                                    component="ul"
                                    sx={DepositsListStyle}
                                >
                                {mockUserDeposits.map((item, index) => (
                                <DepositItem
                                    data-testid={`deposit-item-${index}`}
                                    key={index}
                                    item={item}
                                    selected={selectedIndex === index}
                                    onClick={() => handleItemClick(index)}
                                />
                                ))}
                            </Box>
                        </ScrollableContainer>
                        
                        <Button
                            data-testid="deposits-open-button"
                            sx={ButtonAddStyle}
                            onClick={handleSubmit}>Открыть новый вклад
                        </Button>
                    </Box>
                    
                    {!showDetails ? (
                    <Box sx={NavButtonsStyle}>
                        <Box sx={BigButtonStyle} onClick={handleShowDetails}>
                            <InfoOutlinedIcon />
                            Подробная информация по вкладу
                        </Box>

                        <Box sx={GridButtonsStyle}>
                            <Box sx={GridButtonItemStyle}>
                                <AddCircleOutlineIcon />
                                Пополнить вклад
                            </Box>
                                    
                            <Box sx={GridButtonItemStyle}>
                                <AutorenewIcon />
                                Автопродление вклада
                                    </Box>
                                    
                            <Box sx={GridButtonItemStyle} onClick={handleToDepositHistory}>
                                <HistoryIcon />
                                        
                                История операций
                            </Box>
                                    
                            <Box sx={GridButtonItemStyle}>
                                <ReceiptLongIcon />
                                Выписка
                            </Box>
                                    
                            <Box sx={GridButtonItemStyle}>
                                <GavelIcon />
                                Условия
                            </Box>
                                    
                            <Box sx={GridButtonItemStyle}>
                                <CloseIcon />
                                Закрыть вклад
                            </Box>
                        </Box>
                    </Box>
            ) : (
                <Box sx={BackgroundStyle}>

                    <DynamicTitle text="Информация " whiteText="по вкладу" style={{ fontSize: '2rem' }} />

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