import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type CreatedUser = {
  id: number | string | null;
  login: string;
  password?: string;
  role_id: string;
};

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUserByLogin: builder.query<CreatedUser | null, string>({
      query: (login) => `users?login=${login}`,
      transformResponse: (response: CreatedUser[]) => response[0] ?? null,
      providesTags: ['Users'],
    }),
    addUser: builder.mutation<CreatedUser, { login: string; password: string }>({
      query: ({ login, password }) => ({
        url: 'users',
        method: 'POST',
        body: { login, password, role_id: 1 },
        headers: { 'Content-Type': 'application/json' },
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useGetUserByLoginQuery, useAddUserMutation } = usersApi;
