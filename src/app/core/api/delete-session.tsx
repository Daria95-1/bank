import { SESSIONS } from '@/shared/const'
import { ROUTES } from '@/shared/const/routes'

export const deleteSession = async (sessionId: string): Promise<Response> => {
    const response = await fetch(
        `${ROUTES.BASE_URL}/${SESSIONS.SESSIONS}/${sessionId}`,
        {
            method: 'DELETE',
        }
    )

    if (!response.ok) {
        throw new Error('Ошибка при удалении сессии')
    }

    return response
}