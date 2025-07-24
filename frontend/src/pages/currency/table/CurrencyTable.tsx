import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { currencyData, type CurrencyItem } from '../const/const'
import { formatDateTime } from '@/shared/utils/formatDateTime';
import { buttonStyle, cellStyle } from './CurrencyTable.style';

type CurrencyTableProps = {
  handleOpen: (currency: CurrencyItem) => void;
};

export const CurrencyTable = ({ handleOpen }: CurrencyTableProps) => {
    const updated = formatDateTime();

    return (
        <TableContainer component={Paper} sx={{ width: '1120px', margin: 'auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={cellStyle}>Валюта</TableCell>
                        <TableCell sx={cellStyle}>Банк покупает</TableCell>
                        <TableCell sx={cellStyle}>Банк продает</TableCell>
                        <TableCell sx={cellStyle}>Обновлено</TableCell>
                        <TableCell sx={cellStyle}>График</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {currencyData.map(({ id, name, buy, sell, icon }) => (
                    <TableRow key={id} hover>
                        <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {icon}
                            {name}
                        </Box>
                        </TableCell>
                        <TableCell>{buy}</TableCell>
                        <TableCell>{sell}</TableCell>
                        <TableCell>{updated}</TableCell>
                        <TableCell>
                                
                        <Button sx={buttonStyle} variant="outlined" size="small" onClick={() => handleOpen({ id, name, buy, sell, icon })}>
                            Показать
                        </Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}