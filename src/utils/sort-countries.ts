import type { Country, ResponseData } from '../models';

type TransformedData = [string, Country];

export const sortCountries = (data: ResponseData, sortType: string) => {
  const array = Object.entries(data);

  if (sortType === 'desc') return filteredDesc(array);

  if (sortType === 'population') return filteredPopulation(array);

  return array;
};

const filteredDesc = (data: TransformedData[]) => {
  const filtered = data.sort(([a], [b]) => b[0].localeCompare(a[0]));

  return filtered;
};

const filteredPopulation = (data: TransformedData[]) => {
  const filtered = data.sort(([, infoA], [, infoB]) => {
    const a = infoA.data.at(-1)?.population ?? 0;
    const b = infoB.data.at(-1)?.population ?? 0;

    return b - a;
  });

  return filtered;
};
