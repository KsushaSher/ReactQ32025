import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../shared/constants';
import type { CharacterItem, CharactersApiResponse } from '../../models';

export interface CharactersQueryParams {
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
    getCharacters: builder.query<CharactersApiResponse, CharactersQueryParams>({
      query: ({ page = '1', name = '' }) =>
        `/character/?page=${page}&name=${name}`,
      providesTags: (result) =>
        result
          ? [
              { type: 'Characters', id: 'LIST' },
              ...result.results.map(({ id }) => ({
                type: 'Character' as const,
                id,
              })),
            ]
          : [{ type: 'Characters', id: 'LIST' }],
    }),
    getCharacterById: builder.query<CharacterItem, string>({
      query: (id) => `/character/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Character', id }],
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useLazyGetCharacterByIdQuery,
} = charactersApi;
