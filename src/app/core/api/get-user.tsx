
import { ROUTES } from '@/shared/const/routes'
import { userTransform, type User } from '../transformers'
import { USERS } from '@/shared/const/users'

export const getUser = async (loginToFind: string): Promise<User | null> =>
    fetch(`${ROUTES.BASE_URL}/${USERS.USERS}?login=${loginToFind}`)
        .then((loadedUser) => loadedUser.json())
        .then(([loadedUser]) => loadedUser && userTransform(loadedUser))
