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
      Optima: 'linear-gradient(to right, #515e96ff, #1d2b4dff)',
      Infinity: 'linear-gradient(to right, #7a7a7aff, #0F0F10)', 
      Aurora: 'linear-gradient(to right, #fbc2eb, #6b5896ff)',
      Elite: 'linear-gradient(to right, #006098ff, #002841ff)',
      Everyday: 'linear-gradient(to right, #6A994E, #283e1dff)',
      Momentum: 'linear-gradient(to right, #FFB703, #553a00ff)',
      TravelLight: 'linear-gradient(to right, #43C6AC, #191654)',
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
  },
});