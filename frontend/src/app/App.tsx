import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header/Header'
import { Box } from '@mui/material'
import { ContainerStyle } from './App.style'
import { Footer } from '@/widgets/footer/Footer'

export const App = () => {
  return (
    <Box sx={ContainerStyle}>
      <Header />
      
      <Outlet />

      <Footer />
    </Box>
  )
}
