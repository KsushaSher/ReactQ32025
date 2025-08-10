import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../shared/constants';
import type { Item, Response } from '../models';

export interface GetCharacters {
  page: string | null;
  name: string;
}

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Characters', 'Character'],
  endpoints: (builder) => ({
    getCharacters: builder.query<Response, GetCharacters>({
      query: ({ page = '1', name = '' }) =>
        `/character/?page=${page}&name=${name}`,
      providesTags: [{ type: 'Characters', id: 'LIST' }],
    }),
    getCharacterById: builder.query<Item, string>({
      query: (id) => `/character/${id}`,
      providesTags: [{ type: 'Character', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useLazyGetCharacterByIdQuery,
} = charactersApi;
