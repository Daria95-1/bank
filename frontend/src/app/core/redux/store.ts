import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from '../api/endpoints/api.users';
import { sessionsApi } from '../api/endpoints/api.sessions';
import { userReducer } from './slice/userSlice';

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [sessionsApi.reducerPath]: sessionsApi.reducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
        usersApi.middleware,
        sessionsApi.middleware,
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
