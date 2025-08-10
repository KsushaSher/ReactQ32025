import type { Item } from '../models';

export interface GetCharacterFn {
  (id: string): Promise<{ data?: Item }>;
}

export const getCharactersData = async (
  ids: string[],
  getCharacter: GetCharacterFn
): Promise<Item[]> => {
  const requests = ids.map((id) => getCharacter(id));
  const results = await Promise.all(requests);

  const data = results.map((item) => ({
    id: item.data?.id || 1,
    name: item.data?.name || '',
    species: item.data?.species || '',
    status: item.data?.status || '',
    gender: item.data?.gender || '',
    image: item.data?.image || '',
    url: item.data?.url || '',
  }));

  return data;
};
