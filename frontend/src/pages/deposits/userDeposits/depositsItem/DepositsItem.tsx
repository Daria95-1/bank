import { Box, Typography } from '@mui/material';
import { AccountTypeStyle, AmountStyle, ContainerStyle, ContentStyle, ItemStyle, NameStyle, getSelectedStyle } from './DepositsItem.style';

export type DepositsItem = {
  name: string;
  accountType: string;
  amount: string;
  openedAt: string;
  interestRate: string;
};

type Props = {
  item: DepositsItem;
  selected: boolean;
  onClick: () => void;
};
  
export const DepositItem: React.FC<Props> = ({ item, selected, onClick }) => {
  return (
    <Box
      sx={(theme) => ({
        ...ItemStyle,
        ...(selected ? getSelectedStyle(theme) : {}),
      })}
      onClick={onClick}>
      <Typography sx={NameStyle}>{item.name}</Typography>

      <Box sx={AccountTypeStyle}>{item.accountType}</Box>

      <Box sx={AmountStyle}>{item.amount}</Box>

      <Box sx={ContainerStyle}>
        <Box sx={ContentStyle}>{item.openedAt}</Box>

        <Box sx={ContentStyle}>{item.interestRate}</Box>
      </Box>
    </Box>
  );
};