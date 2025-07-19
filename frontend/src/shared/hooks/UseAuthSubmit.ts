import { setUser } from '@/app/core/redux/slice.ts/user-slice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { STORAGE_KEYS } from '../const'
import { useAddUserMutation } from '@/app/core/api/endpoints/api.users'
import { store } from '@/app/core/redux/store'  // путь к твоему store
import { usersApi } from '@/app/core/api/endpoints/api.users'  // путь к RTK Query API

type SubmitData = {
  login: string
  password: string
}

type UseAuthSubmitReturn = {
  onSubmit: (data: SubmitData, reset: () => void) => void
  serverError: string | null
  clearServerError: () => void
}

export const useAuthSubmit = (isRegister = false): UseAuthSubmitReturn => {
  const dispatch = useDispatch()
  const [serverError, setServerError] = useState<string | null>(null)

  const [addUser] = useAddUserMutation()

  const clearServerError = () => {
    setServerError(null)
  }

  const onSubmit = async (
    { login, password }: SubmitData,
    reset: () => void
  ): Promise<void> => {
    try {
      if (isRegister) {
        // Регистрация — без изменений
        const result = await addUser({ login, password }).unwrap()
        dispatch(setUser({
          id: result.id,
          login: result.login,
          roleId: result.role_id,
          session: null,
        }))
        sessionStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(result))
        reset()
      } else {
        // Авторизация — вызываем RTK Query через store.dispatch и unwrap
        const user = await store.dispatch(
          usersApi.endpoints.getUserByLogin.initiate(login)
        ).unwrap()

        if (!user) {
          setServerError('Пользователь не найден')
          return
        }

        if (user.password !== password) {
          setServerError('Неверный пароль')
          return
        }

        dispatch(setUser({
          id: user.id,
          login: user.login,
          roleId: user.role_id,
          session: null,
        }))
        sessionStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user))
        reset()
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setServerError('Ошибка сервера: ' + error.message)
      } else {
        setServerError('Неизвестная ошибка сервера')
      }
    }
  }

  return { onSubmit, serverError, clearServerError }
}
