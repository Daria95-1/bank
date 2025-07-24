import type { SxProps, Theme } from '@mui/material';

export const cellStyle: SxProps<Theme> = {
  fontWeight: "bold",
  fontSize: "18px"
};

export const buttonStyle: SxProps<Theme> = {
  borderRadius: '20px',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  textTransform: 'none',
  padding: '4px 10px',
  transition: 'background 0.3s ease',

  '&:hover': {
    background: theme => theme.palette.primary.dark,
    color: theme => theme.palette.common.white
  },
};