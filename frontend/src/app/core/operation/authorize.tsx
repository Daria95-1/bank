import { usersApi } from '../api/endpoints/api.users'
import { sessions } from '../sessions'
import { store } from '../redux/store'

type AuthorizeResponse = {
  error?: string
  res?: {
    id: number
    login: string
    roleId: string
    session: string
  }
}

export const authorize = async (
    authLogin: string,
    authPassword: string
): Promise<AuthorizeResponse> => {
    const getUserByLogin = usersApi.endpoints.getUserByLogin.initiate

    const user = await store
        .dispatch(getUserByLogin(authLogin))
        .unwrap()
        .catch(() => null)

    if (!user) {
        return {
            error: 'Такой пользователь не найден',
            res: undefined,
        }
    }

    const { id, login, password, role_id } = user

    if (authPassword !== password) {
        return {
            error: 'Неверный пароль',
            res: undefined,
        }
    }

    const sessionHash = await sessions.create({
        id,
        login,
        roleId: role_id,
    })

    return {
        error: undefined,
        res: {
            id,
            login,
            roleId: role_id,
            session: sessionHash,
        },
    }
}