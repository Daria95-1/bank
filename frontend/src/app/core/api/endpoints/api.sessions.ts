import type { User } from '../../transformers';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { sessionTransform, type Session } from '../../transformers';

type CreatedSession = {
  id: number;
  hash: string;
  user: User
};

export const sessionsApi = createApi({
  reducerPath: 'sessionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['Sessions'],
  endpoints: (builder) => ({
    getSessionByHash: builder.query<Session | null, string>({
      query: (hash) => `sessions?hash=${hash}`,
      transformResponse: (response: CreatedSession[]) => {
        const session = response[0];
        return session ? sessionTransform(session) : null;
      },
      providesTags: ['Sessions'],
    }),
    addSession: builder.mutation<CreatedSession, { hash: string; user: User }>({
      query: ({ hash, user }) => ({
        url: 'sessions',
        method: 'POST',
        body: { hash, user },
        headers: { 'Content-Type': 'application/json' },
      }),
      invalidatesTags: ['Sessions'],
    }),
    deleteSession: builder.mutation<void, number>({
      query: (id) => ({
        url: `sessions/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Sessions'],
    }),
  }),
});

export const { useGetSessionByHashQuery, useAddSessionMutation, useDeleteSessionMutation } = sessionsApi;
