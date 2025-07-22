import { Box, Typography } from '@mui/material';
import { MainText, SecondaryText, Title } from './ItemTitle.styled';

interface ItemTitleProps {
  mainText: string;
  secondaryText: string;
}

export const ItemTitle: React.FC<ItemTitleProps> = ({ mainText, secondaryText }) => {
  return (
    <Box sx={Title}>
      <Typography sx={MainText}>{mainText}</Typography>
      
      <Typography sx={SecondaryText}>{secondaryText}</Typography>
    </Box>
  );
};
