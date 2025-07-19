import { usersApi } from '../api/endpoints/api.users'
import { store } from '../redux/store'
import { sessions } from '../sessions'
import type { User } from '../transformers'

type RegisterResponse = {
  error?: string
  res?: {
    id: number
    login: string
    roleId: string
    session: string
  }
}

export const register = async (
  regLogin: string,
  regPassword: string
): Promise<RegisterResponse> => {
  const getUserByLogin = usersApi.endpoints.getUserByLogin.initiate
  const addUser = usersApi.endpoints.addUser.initiate

  const userResult = await store.dispatch(getUserByLogin(regLogin)).unwrap().catch(() => null)

  if (userResult) {
    return {
      error: 'Такой логин уже занят',
      res: undefined,
    }
  }

  // Создание пользователя
  const newUserResultRaw = await store
    .dispatch(addUser({ login: regLogin, password: regPassword }))
    .unwrap()
    .catch(() => null)

  if (!newUserResultRaw) {
    return {
      error: 'Ошибка при создании пользователя',
      res: undefined,
    }
  }

  const newUserResult: User = {
    id: newUserResultRaw.id,
    login: newUserResultRaw.login,
    roleId: newUserResultRaw.role_id,
  }

  const sessionHash = await sessions.create(newUserResult)

  return {
    error: undefined,
    res: {
      id: newUserResult.id,
      login: newUserResult.login,
      roleId: newUserResult.roleId,
      session: sessionHash,
    },
  }
}
