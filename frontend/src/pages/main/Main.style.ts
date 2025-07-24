import { imageApp } from '@/shared/const/image';
import type { SxProps, Theme } from '@mui/material';

export const Cover: SxProps<Theme> = {
    width: '100vw',
    height: '500px',
    backgroundImage: `url(${imageApp.main})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    margin: '-100px',
    padding: 0
};