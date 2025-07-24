import { LayoutWrapper } from '@/shared/ui/layoutWrapper/LayoutWrapper'
import { OperationNavigation } from './operationNavigation/OperationNavigation'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutesConf } from '@/app/core/enums/routes.enums'
import { DepositTransactions } from './depositTransactions/DepositTransactions'
import { Box, Button, ClickAwayListener, Popper } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ButtonStyle, ContainerStyle } from './depositHistory.style'
import { mockDepositTransactions } from '@/app/core/api/mocks/mockDeposits'
import { CustomCalendar } from '@/shared/ui/customCalender/CustomCalendar'
import { DynamicTitle } from '@/shared/ui/dynamicTitle/DynamicTitle'

export const DepositHistory = () => {
    const [calendarAnchor, setCalendarAnchor] = useState<null | HTMLElement>(null)
    const [data, setData] = useState(mockDepositTransactions)
    const navigate = useNavigate()

    const handleClick = (type: string) => {
        if (type === 'ALL') {
            setData(mockDepositTransactions);
        } else {
            const filtered = mockDepositTransactions
            .map((deposit) => ({
                ...deposit,
                transactions: deposit.transactions.filter(tx => tx.type === type),
            }))
            .filter(deposit => deposit.transactions.length > 0);

            setData(filtered);
        }
    };

    const handleCalendarToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCalendarAnchor(calendarAnchor ? null : event.currentTarget)
    }

    const handleCalendarClose = () => {
        setCalendarAnchor(null)
    }

    const open = Boolean(calendarAnchor)

    const handleDateSelect = () => {
        handleCalendarClose()
    }

    const handleGetInfo = (depositId: string) => {
        navigate(`${RoutesConf.deposit_history}/${depositId}`)
    }

    return (
        <LayoutWrapper>
            <DynamicTitle mainText="История " secondaryText="операций по вкладу" />

             <Box sx={ContainerStyle}>
                <ClickAwayListener onClickAway={handleCalendarClose}>
                    <Box>
                        <Button
                            sx={ButtonStyle}
                            variant="outlined"
                            endIcon={<ExpandMoreIcon />}
                            onClick={handleCalendarToggle}
                            >
                            Даты
                        </Button>

                        <Popper
                            open={open}
                            anchorEl={calendarAnchor}
                            placement="bottom-end"
                        >
                            <CustomCalendar onSelectDate={handleDateSelect} />
                        </Popper>
                    </Box>
                </ClickAwayListener>

                <OperationNavigation onHandleChange={handleClick} />
            </Box>

            <DepositTransactions transactions={data} onChooseDeposit={handleGetInfo} />
        </LayoutWrapper>
    )
}