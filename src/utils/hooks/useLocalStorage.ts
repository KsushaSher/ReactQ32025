type Return = [string, (value: string) => void];

export const useLocalStorage = (key: string): Return => {
  const search = localStorage.getItem(key) || '';

  const handleSetValue = (value: string) => localStorage.setItem(key, value);

  return [search, handleSetValue];
};
