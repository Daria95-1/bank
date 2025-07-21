import { STORAGE_KEYS } from '@/shared/const';
import type { CreatedUser } from '../api/endpoints/api.users';

export const LocalStorage = {
  onSetUser: (user: CreatedUser & { sessionId?: number }) => {
    sessionStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user))
  },

  onGetUser: (): (CreatedUser & { sessionId?: number }) | null => {
    const user = sessionStorage.getItem(STORAGE_KEYS.USER_DATA)
    return user ? JSON.parse(user) : null
  },

  onRemoveUser: () => {
    sessionStorage.removeItem(STORAGE_KEYS.USER_DATA)
  },
}
