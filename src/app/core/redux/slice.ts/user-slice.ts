
import type { RootState } from '../store'
import { createSlice } from '@reduxjs/toolkit'
import { ROLE } from '@/shared/const/role'

export type User = {
    id: number | null
    login: string | null
    roleId: string
    session: string | null
}

export type Session = {
    id: number
    hash: string
    user: User
}

const initialState: User = {
    id: null,
    login: null,
    roleId: ROLE.GUEST,
    session: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id
            state.login = action.payload.login
            state.roleId = action.payload.roleId
            state.session = action.payload.session
        },
        logoutUser: (state) => {
            state.id = null
            state.login = null
            state.roleId = ROLE.GUEST
            state.session = null
        }
    },
})

export const {
    setUser,
    logoutUser,
} = userSlice.actions

export const userReducer = userSlice.reducer

export const selectUserLogin = (state: RootState): string | null => {
    return (state as { user: User }).user.login
}
export const selectUserRole = (state: RootState): string => {
    return (state as { user: User }).user.roleId
}
export const selectUserSession = (state: RootState): string | null => {
    return (state as { user: User }).user.session
}