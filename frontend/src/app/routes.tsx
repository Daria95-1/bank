import { createBrowserRouter } from 'react-router-dom'
import { RoutesConf } from './core/enums/routes.enums'
import { App } from './App'
import { Registration } from '@/pages/registration/Registration'
import { Authorization } from '@/pages/authorization/Authorization'

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
    ],
  },
])
