
import { addUser } from '../api/add-user'
import { getUser } from '../api/get-user'
import { sessions } from '../sessions'

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
    const existedUser = await getUser(regLogin)

    if (existedUser) {
        return {
            error: 'Такой логин уже занят',
            res: undefined,
        }
    }

    const user = await addUser(regLogin, regPassword)

    const { id, login, roleId } = user

    return {
        error: undefined,
        res: {
            id,
            login,
            roleId,
            session: sessions.create(user),
        },
    }
}
