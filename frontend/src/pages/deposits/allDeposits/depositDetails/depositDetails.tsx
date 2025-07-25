import { LayoutWrapper } from '@/shared/ui/layoutWrapper/LayoutWrapper'
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Currency } from '../../const/const';
import { ContainerStyle, ContentStyle, TextStyle } from './depositDetails.style';
import { mockDepositsDetails } from '@/app/core/api/mocks/mockDeposits';
import { DynamicTitle } from '@/shared/ui/dynamicTitle/DynamicTitle';
import { ScrollabarContainer } from '@/shared/ui/scrollConteiner/ScrolabarContainer';

export const DepositDetails = () => {
    const { id } = useParams();
    
    const deposit = mockDepositsDetails.find((dep) => dep.depositId === id);

    return (
        <LayoutWrapper>
            <DynamicTitle mainText="Подробнее о вкладе " secondaryText={`«${deposit?.mainTitle}»`} />

            <ScrollabarContainer height="512px">
                <Box sx={ContainerStyle}>
                    <Box sx={ContentStyle}>
                        <Box sx={TextStyle}>Валюта</Box>

                        <Box>{Currency.RUB}</Box>
                    </Box>

                    <Box sx={ContentStyle}>
                        <Box sx={TextStyle}>Процентная ставка</Box>

                        <Box>{deposit?.interestRate}</Box>
                    </Box>

                    <Box sx={ContentStyle}>
                        <Box sx={TextStyle}>Срок</Box>

                        <Box>{deposit?.term}</Box>
                    </Box>

                    <Box sx={ContentStyle}>
                        <Box sx={TextStyle}>Минимальная сумма</Box>

                        <Box>{deposit?.minAmount}</Box>
                    </Box>
                    
                    <Box sx={ContentStyle}>
                        <Box sx={TextStyle}>Максимальная сумма</Box>

                        <Box>{deposit?.maxAmount}</Box>
                    </Box>

                    <Box sx={ContentStyle}>
                        <Box sx={TextStyle}>Несгораемый процент при снятии раньше срока</Box>

                        <Box>5,50 %</Box>
                    </Box>

                    <Box sx={ContentStyle}>
                        <Box sx={TextStyle}>Пополнение</Box>

                        <Box>{deposit?.replenishmentAllowed}</Box>
                    </Box>

                    <Box sx={ContentStyle}>
                        <Box sx={TextStyle}>Выбор счёта для выплаты процентов </Box>

                        <Box>{deposit?.interestPayoutAccountSelection}</Box>
                    </Box>

                    <Box sx={ContentStyle}>
                        <Box sx={TextStyle}>Возможность продления депозита</Box>

                        <Box>{deposit?.autoRenewalAvailable}</Box>
                    </Box>

                    <Box sx={ContentStyle}>
                        <Box sx={TextStyle}>Возможность снять депозит раньше срока</Box>

                        <Box>{deposit?.earlyWithdrawalAllowed}</Box>
                    </Box>
                </Box>
            </ScrollabarContainer>
        </LayoutWrapper>
    )
}