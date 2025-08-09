import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/charactersSlice';
import { charactersApi } from './charactersApi';

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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
