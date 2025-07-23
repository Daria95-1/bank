import type { SxProps, Theme } from '@mui/material';

export const ContentStyle: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: "10px",
    gap: "10px",
};

export const SpanStyle: SxProps<Theme> = {
    fontWeight: 'bold'
};

export const ChartStyle: SxProps<Theme> = {
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};