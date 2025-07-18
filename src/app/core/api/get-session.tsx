
import { SESSIONS } from '@/shared/const'
import { sessionTransform, type Session } from '../transformers'
import { ROUTES } from '@/shared/const/routes'

export const getSession = async (hash: string): Promise<Session | null> => {
    const response = await fetch(
        `${ROUTES.BASE_URL}/${SESSIONS.SESSIONS}?hash=${hash}`
    )

    if (!response.ok) {
        console.error('Ошибка при загрузке сессии')
        return null
    }

    const data = await response.json()
    return data.length > 0 ? sessionTransform(data[0]) : null
}