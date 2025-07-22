import { useDispatch } from 'react-redux'
import { useLayoutEffect } from 'react'
import { STORAGE_KEYS } from '@/shared/const'
import { setUser } from './core/redux/slice/userSlice'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Header } from '@/widgets/header/Header'
import { Footer } from '@/widgets/footer/Footer'
import { Outlet } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { ContainerStyle, OutletStyle } from './App.style'

const FallbackUI: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <Box>
    <Typography>Что-то пошло не так...</Typography>

    <Box>{error.message}</Box>

    <pre>{error.stack}</pre>

    <button onClick={resetErrorBoundary}>Попробовать снова</button>
  </Box>
);

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
  }, [dispatch])

  return (
    <>
      <ErrorBoundary FallbackComponent={FallbackUI}>
        <Box sx={ContainerStyle}>
          <Header />
          
          <Box sx={OutletStyle}>
            <Outlet />
          </Box>

          <Footer />
        </Box>
    </ErrorBoundary>
    </>
  )
}
