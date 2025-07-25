import { createBrowserRouter } from 'react-router-dom'
import { RoutesConf } from '../core/enums/routes.enums'
import { App } from '../App'
import {
  Registration,
  Authorization,
  Main,
  Cards,
  CardDescription,
  UserDeposits,
  AllDeposits,
  DepositDetails,
  DepositHistory,
  Currency,
  Contacts,
  News,
  NewsDetails,
  UnderConstruction,
} from './lazyRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: RoutesConf.sign_up,
        element: <Registration />,
      },
      {
        path: RoutesConf.sign_in,
        element: <Authorization />,
      },
      {
        path: RoutesConf.cards,
        element: <Cards />,
        children: [{ path: 'card', element: <CardDescription /> }],
      },
      {
        path: RoutesConf.user_deposits,
        children: [
          {
            path: '',
            element: <UserDeposits />,
          },
          {
            path: RoutesConf.all_deposits,
            element: <AllDeposits />,
          },
          {
            path: `${RoutesConf.all_deposits}/${RoutesConf.deposit_details}/:id`,
            element: <DepositDetails />,
          },
          {
            path: `${RoutesConf.deposit_history}/:id`,
            element: <DepositHistory />,
          },
        ],
      },
      {
        path: RoutesConf.currency,
        element: <Currency />,
      },
      {
        path: RoutesConf.contacts,
        element: <Contacts />,
      },
      {
        path: RoutesConf.news,
        children: [
          {
            index: true,
            element: <News />,
          },
          {
            path: `${RoutesConf.news_details}/:id`,
            element: <NewsDetails />,
          },
        ],
      },
      {
        path: RoutesConf.under_construction,
        element: <UnderConstruction />,
      },
    ],
  },
])
