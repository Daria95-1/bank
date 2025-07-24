import type { SxProps, Theme } from '@mui/material';

export const cardStyle: SxProps<Theme> = (theme) => ({
  width: 'calc(33.333% - 16px)',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  cursor: 'pointer'
});

export const imageStyle: SxProps<Theme> = {
  width: '100%',
  height: '180px',
  objectFit: 'cover',
};

export const contentStyle: SxProps<Theme> = {
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

export const titleStyle: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: '18px',
};

export const dateStyle: SxProps<Theme> = (theme) => ({
  fontSize: '14px',
  color: theme.palette.text.secondary,
});

export const descStyle: SxProps<Theme> = (theme) => ({
  fontSize: '14px',
  color: theme.palette.text.primary,
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
});