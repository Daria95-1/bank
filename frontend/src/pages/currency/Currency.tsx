import { DynamicTitle } from '@/shared/ui/dynamicTitle/DynamicTitle';
import { LayoutWrapper } from '@/shared/ui/layoutWrapper/LayoutWrapper';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { currencyData, type CurrencyItem } from './const/const';
import { useState } from 'react';
import { formatDateTime } from '@/shared/utils/formatDateTime';
import { CurrencyModal } from './currencyModal/CurrencyModal';

export const Currency = () => {
  const [open, setOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyItem | null>(null);
  
  const handleOpen = (currency: CurrencyItem) => {
    setSelectedCurrency(currency);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCurrency(null);
  };

  const updated = formatDateTime();

  return (
    <LayoutWrapper>
        <DynamicTitle text="Обмен валют" />

        <TableContainer component={Paper} sx={{ width: '1120px', margin: 'auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Валюта</TableCell>
                    <TableCell>Банк покупает</TableCell>
                    <TableCell>Банк продает</TableCell>
                    <TableCell>Обновлено</TableCell>
                    <TableCell>График</TableCell>
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
                        <Button variant="outlined" size="small" onClick={() => handleOpen({ id, name, buy, sell, icon })}>
                            Показать
                        </Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        <CurrencyModal
            open={open}
            handleClose={handleClose}
            selectedCurrency={selectedCurrency}
        />
    </LayoutWrapper>
  );
};