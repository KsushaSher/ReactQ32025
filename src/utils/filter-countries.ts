import type { ResponseData } from '../models';

export const filterCountries = (data: ResponseData, search: string) => {
  const filtered: ResponseData = {};

  for (const key in data) {
    if (key.toLowerCase().includes(search.toLowerCase())) {
      filtered[key] = data[key];
    }
  }

  return filtered;
};
