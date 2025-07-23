import '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    gradients: {
      primary: string;
      Optima: string;
      Infinity: string;
      Aurora: string;
      Elite: string;
      Everyday: string;
      Momentum: string;
      TravelLight: string;
    };
  }
  interface PaletteOptions {
    gradients?: {
      primary?: string;
      Optima?: string;
      Infinity?: string;
      Aurora?: string;
      Elite?: string;
      Everyday?: string;
      Momentum?: string;
      TravelLight?: string;
    };
  }
}
