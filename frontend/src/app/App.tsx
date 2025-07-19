import { useNavigate, Outlet } from 'react-router-dom'
import { RoutesConf } from '@core/enums/routes.enums'
import './App.css'

export const App = () => {
  const navigate = useNavigate()

  const handlerToReg = () => {
    navigate(`/${RoutesConf.sign_up}`)
  }

  return (
    <>
      <div className="card">
        <button onClick={handlerToReg}>Зарегистрироваться</button>
      </div>
      <Outlet />
    </>
  )
}
