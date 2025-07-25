import { lazy } from 'react'

export const Registration = lazy(() =>
  import('@/pages/auth/Registration').then((mod) => ({
    default: mod.Registration,
  }))
)
export const Authorization = lazy(() =>
  import('@/pages/auth/Authorization').then((mod) => ({
    default: mod.Authorization,
  }))
)

export const Main = lazy(() =>
  import('@/pages/main/Main').then((mod) => ({
    default: mod.Main,
  }))
)

export const Cards = lazy(() =>
  import('@/pages/cards/Cards').then((mod) => ({
    default: mod.Cards,
  }))
)
export const CardDescription = lazy(() =>
  import('@/pages/cards/cardDescription/CardDescription').then((mod) => ({
    default: mod.CardDescription,
  }))
)

export const UserDeposits = lazy(() =>
  import('@/pages/deposits/userDeposits/UserDeposits').then((mod) => ({
    default: mod.UserDeposits,
  }))
)
export const AllDeposits = lazy(() =>
  import('@/pages/deposits/allDeposits/allDeposits').then((mod) => ({
    default: mod.AllDeposits,
  }))
)
export const DepositDetails = lazy(() =>
  import('@/pages/deposits/allDeposits/depositDetails/depositDetails').then((mod) => ({
    default: mod.DepositDetails,
  }))
)
export const DepositHistory = lazy(() =>
  import('@/pages/deposits/userDeposits/depositHistory/depositHistory').then((mod) => ({
    default: mod.DepositHistory,
  }))
)

export const Currency = lazy(() =>
  import('@/pages/currency/Currency').then((mod) => ({
    default: mod.Currency,
  }))
)

export const Contacts = lazy(() =>
  import('@/pages/contacts/Contacts').then((mod) => ({
    default: mod.Contacts,
  }))
)

export const News = lazy(() =>
  import('@/pages/news/News').then((mod) => ({
    default: mod.News,
  }))
)
export const NewsDetails = lazy(() =>
  import('@/pages/news/newsDetails/NewsDetails').then((mod) => ({
    default: mod.NewsDetails,
  }))
)

export const UnderConstruction = lazy(() =>
  import('@/shared/ui/underConstruction/UnderConstruction').then((mod) => ({
    default: mod.UnderConstruction,
  }))
)
