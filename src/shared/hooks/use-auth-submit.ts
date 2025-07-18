import { setUser } from '@/app/core/redux/slice.ts/user-slice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { STORAGE_KEYS } from '../const'
import { server } from '@/app/core/server'

type SubmitData = {
    login: string
    password: string
}

type ServerResponse = {
    error?: string
    res: {
        hash: string
    }
}

type UseAuthSubmitReturn = {
    onSubmit: (data: SubmitData, reset: () => void) => void
    serverError: string | null
    clearServerError: () => void
}

export const useAuthSubmit = (isRegister = false): UseAuthSubmitReturn => {
    const dispatch = useDispatch()
    const [serverError, setServerError] = useState<string | null>(null)

    const clearServerError = () => {
        setServerError(null)
    }

    const onSubmit = (
        { login, password }: SubmitData,
        reset: () => void
    ): void => {
        const action = isRegister ? server.register : server.authorize
        action(login, password).then(({ error, res }: ServerResponse) => {
            if (error) {
                setServerError(`Ошибка запроса: ${error}`)
                return
            }
            reset()
            dispatch(setUser(res))
            sessionStorage.setItem(
                `${STORAGE_KEYS.USER_DATA}`,
                JSON.stringify(res)
            )
        })
    }

    return { onSubmit, serverError, clearServerError }
}