import type { ResponseData } from '../models';

export const sortCountries = (data: ResponseData, sortType: string) => {
  if (sortType === 'desc') return filteredDesc(data);

  if (sortType === 'population') return filteredPopulation(data);

  return data;
};

const filteredDesc = (data: ResponseData) => {
  const filtered = Object.entries(data).sort(([a], [b]) =>
    b[0].localeCompare(a[0])
  );

  return Object.fromEntries(filtered);
};

const filteredPopulation = (data: ResponseData) => {
  const filtered = Object.entries(data).sort(([, infoA], [, infoB]) => {
    const a = infoA.data.at(-1)?.population ?? 0;
    const b = infoB.data.at(-1)?.population ?? 0;

    return b - a;
  });

  return Object.fromEntries(filtered);
};
