import { Typography } from '@mui/material';
import { TitleStyle, SecondaryTextStyle } from './DynamicTitle.style';

export const DynamicTitle: React.FC<{ mainText?: string; secondaryText?: string; style?: React.CSSProperties }> = ({ mainText, secondaryText, style }) => {
    return (
      <Typography component="h1" sx={TitleStyle} style={style}>
        {mainText}

        {secondaryText && <Typography component="span" sx={SecondaryTextStyle} style={style}>{`${secondaryText}`}</Typography>}
      </Typography>
    );
};
