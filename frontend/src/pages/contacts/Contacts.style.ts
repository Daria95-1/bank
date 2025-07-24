import type { SxProps, Theme } from '@mui/material';

export const containerStyle: SxProps<Theme> = {
  display: 'flex',
  width: '1120px',
  height: '600px',
  marginTop: '32px',
};

export const branchesListStyle: SxProps<Theme> = (theme) => ({
    flexBasis: '360px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    overflowY: 'auto',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
});

export const branchItemStyle: SxProps<Theme> = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  borderBottom: `1px solid ${theme.palette.text.secondary}`,
  paddingBottom: '12px',
  gap: '4px',
});

export const branchNameStyle: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: '16px',
};

export const branchAddressStyle: SxProps<Theme> = (theme) => ({
  fontSize: '14px',
  color: theme.palette.primary.main,
});

export const branchContactStyle: SxProps<Theme> = (theme) => ({
  fontSize: '14px',
  color: theme.palette.text.primary,
});

export const mapContainerStyle: SxProps<Theme> = {
    flexGrow: 1,
    borderTopRightRadius: '12px',
    borderBottomRightRadius: '12px',
    overflow: 'hidden',
    height: '100%',
};