import { Box, Typography } from '@mui/material'
import { ContainerStyle, ContentStyle } from './depositInfo.style'
import type { SelectedDeposit, SelectedDepositInfo } from '../../const/const'

type DepositInfoProps = {
  selectedDepositInfo: SelectedDepositInfo | null
  selectedDeposit: SelectedDeposit | null
}

export const DepositInfo = ({ selectedDepositInfo, selectedDeposit }: DepositInfoProps) => { 
    if (!selectedDepositInfo || !selectedDeposit) return null
    
    return (
        <Box sx={ContainerStyle}>
            <Box sx={ContentStyle}>
                <Typography>Номер счета депозита:</Typography>

                <Typography>{selectedDepositInfo.accountNumber}</Typography>
            </Box>

            <Box sx={ContentStyle}>
                <Typography>Сумма:</Typography>

                <Typography>{selectedDeposit.amount}</Typography>
            </Box>

            <Box sx={ContentStyle}>
                <Typography>Сумма начисленного %:</Typography>

                <Typography>{selectedDepositInfo.accruedInterest}</Typography>
            </Box>

            <Box sx={ContentStyle}>
                <Typography>Продолжительность  периода:</Typography>

                <Typography>{selectedDepositInfo.period}</Typography>
            </Box>

            <Box sx={{ ...ContentStyle, marginTop: "1rem" }}>
                <Typography>Валюта:</Typography>

                <Typography>{selectedDepositInfo.currency}</Typography>
            </Box>
            
            <Box sx={ContentStyle}>
                <Typography>Статус:</Typography>

                <Typography>{selectedDepositInfo.status}</Typography>
            </Box>

            <Box sx={ContentStyle}>
                <Typography>Дата и время открытия:</Typography>

                <Typography>{selectedDepositInfo.openedAt}</Typography>
            </Box>

            <Box sx={ContentStyle}>
                <Typography>Дата и время закртытия:</Typography>

                <Typography>{selectedDepositInfo.closedAt}</Typography>
            </Box>

            <Box sx={ContentStyle}>
                <Typography>Тип счета:</Typography>

                <Typography>{selectedDepositInfo.accountType}</Typography>
            </Box>
        </Box>
    )
}