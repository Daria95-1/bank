import { Box } from '@mui/material';
import { useState } from 'react';
import { sectionStyle } from './OperationNavigation.style';
import { OPERATION_NAVIGATION, OPERATION_TYPES, type OperationType } from '@/pages/deposits/const/const';
import { ButtonSubmitMain } from '@/shared/ui/buttonSubmitMain/ButtonSubmitMain';

type OperationsNavigationProps = {
  onHandleChange: (type: OperationType) => void;
};

export const OperationNavigation: React.FC<OperationsNavigationProps> = ({ onHandleChange }) => {
  const [activeItem, setActiveItem] = useState<OperationType>(OPERATION_TYPES.ALL);

  const handleItemClick = (item: OperationType) => {
    setActiveItem(item);
    onHandleChange(item);
  };

  return (
    <Box component="section" sx={sectionStyle}>
      {OPERATION_NAVIGATION.map((item) => (
        <ButtonSubmitMain
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