import { imageApp } from '@/shared/const/image'
import type { SxProps, Theme } from '@mui/material'

export const Cover: SxProps<Theme> = {
    width: '100vw',
    height: '500px',
    backgroundImage: `url(${imageApp.main})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    marginTop: '-100px',
    marginBottom: '0px',
    padding: '0px',
}

export const ContentBox: SxProps<Theme> = {
    maxWidth: '600px',
    position: 'absolute',
    top: '65%',
    left: '21%',
    transform: 'translateY(-50%)',
    color: theme => theme.palette.common.white,
}

export const TitleText: SxProps<Theme> = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: theme => theme.palette.primary.main,
}

export const SubtitleText: SxProps<Theme> = {
    fontSize: '1.25rem',
    marginBottom: '24px',
    color: theme => theme.palette.common.white,
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)',
}

export const ActionButton: SxProps<Theme> = {
    backgroundColor: theme => theme.palette.secondary.light,
    color: theme => theme.palette.common.white,
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '12px',
    borderRadius: '50px',
    textTransform: 'none',
  
    '&:hover': {
        backgroundColor: theme => theme.palette.primary.dark,
    },
}