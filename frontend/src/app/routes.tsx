import { createBrowserRouter } from 'react-router-dom'
import { RoutesConf } from './core/enums/routes.enums'
import { App } from './App'
import { Registration } from '@/pages/auth/Registration'
import { Authorization } from '@/pages/auth/Authorization'
import { Main } from '@/pages/main/Main'
import { UnderConstruction } from '@/shared/ui/underConstruction/UnderConstruction'
import { UserDeposits } from '@/pages/deposits/userDeposits/UserDeposits'
import { AllDeposits } from '@/pages/deposits/allDeposits/allDeposits'
import { DepositDetails } from '@/pages/deposits/allDeposits/depositDetails/depositDetails'
import { DepositHistory } from '@/pages/deposits/userDeposits/depositHistory/depositHistory'
import { Cards } from '@/pages/cards/Cards'
import { CardDescription } from '@/pages/cards/cardDescription/CardDescription'
import { Currency } from '@/pages/currency/Currency'
import { Contacts } from '@/pages/contacts/Contacts'
import { News } from '@/pages/news/News'

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
      {
        path: RoutesConf.cards,
        element: <Cards />,
        children: [{ path: "card", element: <CardDescription /> }],
      },
      {
        path: RoutesConf.user_deposits,
        children: [
          {
            path: "",
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
        element: <News />,
      },
      {
        path: RoutesConf.under_construction,
        element: <UnderConstruction />,
      },
    ],
  },
])
