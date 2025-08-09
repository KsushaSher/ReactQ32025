import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../shared/constants';
import type { Response } from '../models';

export interface GetCharacters {
  page: string | null;
  name: string;
}

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Response, GetCharacters>({
      query: ({ page = '1', name = '' }) =>
        `/character/?page=${page}&name=${name}`,
    }),
    getCharacterById: builder.query<Response, string>({
      query: (id) => `/character/${id}`,
    }),
  }),
});
export const { useGetCharactersQuery, useGetCharacterByIdQuery } =
  charactersApi;
