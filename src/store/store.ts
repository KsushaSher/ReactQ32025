import { configureStore } from '@reduxjs/toolkit';
import charactersReducer, { type InitialState } from './slices/charactersSlice';
import { charactersApi } from './api/charactersApi';

export interface RootStateSchema {
  characters: InitialState;
  [charactersApi.reducerPath]: ReturnType<typeof charactersApi.reducer>;
}

export const createStore = () =>
  configureStore({
    reducer: {
      characters: charactersReducer,
      [charactersApi.reducerPath]: charactersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(charactersApi.middleware),
  });

export const store = createStore();

export type RootState = RootStateSchema;
export type AppDispatch = typeof store.dispatch;
