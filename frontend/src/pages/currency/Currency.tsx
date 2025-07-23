import { DynamicTitle } from '@/shared/ui/dynamicTitle/DynamicTitle';
import { LayoutWrapper } from '@/shared/ui/layoutWrapper/LayoutWrapper';
import { type CurrencyItem } from './const/const';
import { useState } from 'react';
import { CurrencyModal } from './currencyModal/CurrencyModal';
import { CurrencyTable } from './table/CurrencyTable';

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

  return (
    <LayoutWrapper>
        <DynamicTitle mainText="Обмен " secondaryText='валют' />

        <CurrencyTable handleOpen={handleOpen} />

        <CurrencyModal
            open={open}
            handleClose={handleClose}
            selectedCurrency={selectedCurrency}
        />
    </LayoutWrapper>
  );
};