import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gradients: {
      primary: string;
    };
  }

  interface PaletteOptions {
    gradients?: {
      primary?: string;
    };
  }
}
