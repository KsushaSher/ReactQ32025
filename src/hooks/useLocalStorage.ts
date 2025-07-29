import { useCallback } from 'react';

type Return = [string, (value: string) => void];

export const useLocalStorage = (key: string): Return => {
  const search = localStorage.getItem(key) || '';

  const handleSetValue = useCallback(
    (value: string) => localStorage.setItem(key, value),
    [key]
  );

  return [search, handleSetValue];
};
