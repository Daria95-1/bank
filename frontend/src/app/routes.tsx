import { createBrowserRouter } from 'react-router-dom'
import { RoutesConf } from './core/enums/routes.enums'
import { App } from './App'
import { Registration } from '@/pages/auth/Registration'
import { Authorization } from '@/pages/auth/Authorization'
import { Main } from '@/pages/main/Main'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: RoutesConf.sign_up,
        element: <Registration />,
      },
      {
        path: RoutesConf.sign_in,
        element: <Authorization />,
      },
      {
        path: RoutesConf.main,
        element: <Main />,
      },
    ],
  },
])
