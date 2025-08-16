import { useState, useEffect } from 'react';

type Return = [string, (value: string) => void];

export const useLocalStorage = (key: string): Return => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const search = localStorage.getItem(key) || '';

    setValue(search);
  }, [key]);

  const handleSetValue = (value: string) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  return [value, handleSetValue];
};
