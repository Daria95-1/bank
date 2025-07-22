import { Box } from '@mui/material';
import { ItemStyle, ValueStyle } from './DynamicItemInfo.style';

type DynamicItemInfoProps = {
  value: string | number;
  description: string;
};

export const DynamicItemInfo: React.FC<DynamicItemInfoProps> = ({
  value,
  description,
}) => {
  return (
    <Box sx={ItemStyle}>
      <Box sx={ValueStyle}>
        {value}
      </Box>

      <Box>{description}</Box>
    </Box>
  );
};
