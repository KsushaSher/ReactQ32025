import { useCallback, useState } from 'react';

type Return = [string, (value: string) => void];

export const useLocalStorage = (key: string): Return => {
  const [search, setSearch] = useState(localStorage.getItem(key) || '');

  const handleSetValue = useCallback(
    (value: string) => {
      localStorage.setItem(key, value);
      setSearch(value);
    },
    [key]
  );

  return [search, handleSetValue];
};
