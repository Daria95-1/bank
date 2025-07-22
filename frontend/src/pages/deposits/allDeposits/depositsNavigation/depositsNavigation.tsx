import { Box } from '@mui/material';
import { useState } from 'react';
import { DEPOSIT_TYPES, DEPOSIT_NAVIGATION, type DepositType } from '../../const/const';
import { sectionStyle } from './depositsNavigation.style';
import { ButtonSubmitMain } from '@/shared/ui/buttonSubmitMain/ButtonSubmitMain';

type DepositsNavigationProps = {
  onHandleChange: (type: DepositType) => void;
};

export const DepositNavigation: React.FC<DepositsNavigationProps> = ({ onHandleChange }) => {
  const [activeItem, setActiveItem] = useState<DepositType>(DEPOSIT_TYPES.ALL);

  const handleItemClick = (item: DepositType) => {
    setActiveItem(item);
    onHandleChange(item);
  };

  return (
    <Box component="section" sx={sectionStyle}>
      {DEPOSIT_NAVIGATION.map((item) => (
        <ButtonSubmitMain
          data-testid="nav-button-submit"
          key={item.value}
          active={activeItem === item.value}
          onClick={() => handleItemClick(item.value)}
        >
          {item.label}
        </ButtonSubmitMain>
      ))}
    </Box>
  );
};