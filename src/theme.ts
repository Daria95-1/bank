import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1A237E',
    },
    secondary: {
      main: '#00BCD4',
    },
    background: {
      default: '#ECEFF1',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    success: {
      main: '#4CAF50',
    },
    error: {
      main: '#E53935',
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
  },
});