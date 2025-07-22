import { Typography } from '@mui/material';
import { TitleStyle, WhiteTextStyle } from './DynamicTitle.style';

export const DynamicTitle: React.FC<{ text?: string; whiteText?: string; style?: React.CSSProperties }> = ({ text, whiteText, style }) => {
    return (
      <Typography component="h1" sx={TitleStyle} style={style}>
        {text}

        {whiteText && <Typography component="span" sx={WhiteTextStyle} style={style}>{`${whiteText}`}</Typography>}
      </Typography>
    );
};
