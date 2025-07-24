import { useDispatch } from 'react-redux'
import { setUser } from '@/app/core/redux/slice/userSlice'
import { useState } from 'react'
import { STORAGE_KEYS } from '../const'
import { useAddUserMutation, usersApi } from '@/app/core/api/endpoints/api.users'
import { useAddSessionMutation } from '@/app/core/api/endpoints/api.sessions'
import { store } from '@/app/core/redux/store'

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
  const [addSession] = useAddSessionMutation()

  const clearServerError = () => setServerError(null)

  const onSubmit = async (
    { login, password }: SubmitData,
    reset: () => void
  ): Promise<void> => {
    try {
      if (isRegister) {
        const existingUser = await store.dispatch(
          usersApi.endpoints.getUserByLogin.initiate(login)
        ).unwrap()

        if (existingUser) {
          setServerError('Такой логин уже занят')
          return
        }

        const newUser = await addUser({ login, password }).unwrap()
        const sessionHash = Math.random().toString(36).slice(2) + Date.now().toString(36)

        const createdSession = await addSession({
          hash: sessionHash,
          user: {
            id: newUser.id,
            login: newUser.login,
            roleId: newUser.role_id,
          }
        }).unwrap()

        dispatch(setUser({
          id: newUser.id,
          login: newUser.login,
          roleId: String(newUser.role_id),
          sessionId: createdSession.id,
        }))

        sessionStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify({
          id: newUser.id,
          login: newUser.login,
          roleId: newUser.role_id,
          sessionId: createdSession.id,
        }))

        reset()
      } else {
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

        const sessionHash = Math.random().toString(36).slice(2) + Date.now().toString(36)

        const createdSession = await addSession({
          hash: sessionHash,
          user: {
            id: user.id,
            login: user.login,
            roleId: user.role_id,
          }
        }).unwrap()

        dispatch(setUser({
          id: user.id,
          login: user.login,
          roleId: String(user.role_id),
          sessionId: createdSession.id,
        }))

        sessionStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify({
          id: user.id,
          login: user.login,
          roleId: user.role_id,
          sessionId: createdSession.id,
        }))

        reset()
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setServerError(error.message)
      } else {
        setServerError('Неизвестная ошибка')
      }
    }
  }

  return { onSubmit, serverError, clearServerError }
}
