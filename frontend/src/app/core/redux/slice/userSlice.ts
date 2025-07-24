import type { RootState } from '../store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ROLE } from '@/shared/const/role'
import { LocalStorage } from '../../services/localStorage.service'
import type { CreatedUser } from '../../api/endpoints/api.users'

export type User = {
    id: number | string | null
    login: string | null
    roleId: string
    sessionId: string | number | null
}

function mapCreatedUserToUser(user: (CreatedUser & { sessionId?: number }) | null): User | null {
  if (!user) return null
  return {
    id: user.id ?? null,
    login: user.login ?? null,
    roleId: user.role_id !== undefined ? String(user.role_id) : ROLE.GUEST,
    sessionId: user.sessionId !== undefined ? String(user.sessionId) : null,
  }
}

const storedUser = mapCreatedUserToUser(LocalStorage.onGetUser())

const initialState: User = storedUser ?? {
    id: null,
    login: null,
    roleId: ROLE.GUEST,
    sessionId: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id
            state.login = action.payload.login
            state.roleId = action.payload.roleId
            state.sessionId = action.payload.sessionId ?? null

            LocalStorage.onSetUser({
                id: state.id ?? 0,
                login: state.login ?? '',
                role_id: state.roleId,
                sessionId: state.sessionId ? Number(state.sessionId) : undefined,
            })
        },
        logoutUser: (state) => {
            state.id = null
            state.login = null
            state.roleId = ROLE.GUEST
            state.sessionId = null

            LocalStorage.onRemoveUser()
        }
    },
})

export const {
    setUser,
    logoutUser,
} = userSlice.actions

export const userReducer = userSlice.reducer

export const selectUserLogin = (state: RootState): string | null => {
    return state.user.login
}
export const selectUserRole = (state: RootState): string => {
    return state.user.roleId
}
export const selectUserSession = (state: RootState): string | number | null => {
    return state.user.sessionId
}
