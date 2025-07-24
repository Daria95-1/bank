import { Box, Dialog, DialogContent, DialogTitle } from '@mui/material'
import { ContentStyle, ChartStyle, SpanStyle } from './CurrencyModal.style'
import type { CurrencyItem } from '../const/const';
import type { FC } from 'react';
import { CurrencyChart } from '../chart/CurrencyChart';

type Props = {
  open: boolean;
  handleClose: () => void;
  selectedCurrency: CurrencyItem | null;
};

export const CurrencyModal: FC<Props> = ({ open, handleClose, selectedCurrency }) => { 
    if (!selectedCurrency) return null;
    
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>График курса {selectedCurrency?.name}</DialogTitle>

            <DialogContent>
                <Box sx={ContentStyle}>
                    {selectedCurrency?.icon}
                    <Box component="span" sx={SpanStyle}>{selectedCurrency?.name}</Box>
                </Box>

                <Box sx={ChartStyle}>
                    <CurrencyChart currencyId={selectedCurrency.id} />
                </Box>
            </DialogContent>
        </Dialog>
    )
}