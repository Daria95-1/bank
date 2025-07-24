import CreditCardIcon from '@mui/icons-material/CreditCard'
import SavingsIcon from '@mui/icons-material/Savings'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import CardMembershipIcon from '@mui/icons-material/CardMembership'
import { RoutesConf } from '@/app/core/enums/routes.enums'

export const infoCards = [
  {
    title: 'Оформить кредит',
    subtitle: 'До 30 млн ₽',
    icon: CreditCardIcon,
    url: RoutesConf.cards,
  },
  {
    title: 'До 13.2% годовых',
    subtitle: 'С вкладом «Максимум Плюс»',
    icon: SavingsIcon,
    url: RoutesConf.cards,
  },
  {
    title: 'Ипотечный кредит',
    subtitle: 'До 50 млн ₽',
    icon: HomeWorkIcon,
    url: RoutesConf.cards,
  },
  {
    title: 'Оформить карту «Everyday»',
    subtitle: 'Покупки в рассрочку до 2 лет!',
    icon: CardMembershipIcon,
    button: true,
    url: RoutesConf.cards,
  },
]
