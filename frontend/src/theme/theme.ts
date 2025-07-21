import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000799',
      light: '#00067C',
      dark: '#00045E'
    },
    secondary: {
      main: '#00BCDF',
      light: '#00D3A1'
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
      main: '#008b6e',
    },
    error: {
      main: '#ff002a',
    },
    gradients: {
      primary: 'linear-gradient(90deg, #00bcdf 0%, #00d3a1 100%)',
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
  },
});