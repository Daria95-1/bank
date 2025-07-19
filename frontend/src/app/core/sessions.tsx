
import { sessionsApi } from './api/endpoints/api.sessions'
import { store } from './redux/store'
import type { User } from './transformers'

export const sessions = {
  create: async (user: User): Promise<string> => {
    const hash = Math.random().toString(36).slice(2) + Date.now().toString(36)
    await store.dispatch(
      sessionsApi.endpoints.addSession.initiate({ hash, user })
    ).unwrap()
    return hash
  },

  remove: async (sessionId: number): Promise<void> => {
    await store.dispatch(
      sessionsApi.endpoints.deleteSession.initiate(sessionId)
    ).unwrap()
  },
}
