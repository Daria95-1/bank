import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header/Header'
import { Box } from '@mui/material'
import { ContainerStyle } from './App.style'
import { Footer } from '@/widgets/footer/Footer'
import { useDispatch } from 'react-redux'
import { useLayoutEffect } from 'react'
import { STORAGE_KEYS } from '@/shared/const'
import { setUser } from './core/redux/slice/userSlice'

export const App = () => {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem(
      STORAGE_KEYS.USER_DATA
    )

    if (currentUserDataJSON) {
      const currentUserData = JSON.parse(currentUserDataJSON)
      dispatch(
        setUser({
          ...currentUserData,
          roleId: Number(currentUserData.roleId),
        })
      )
    }
  })

  return (
    <Box sx={ContainerStyle}>
      <Header />
      
      <Outlet />

      <Footer />
    </Box>
  )
}
