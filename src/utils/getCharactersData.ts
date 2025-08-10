import type { Item } from '../models';
import { charactersApi } from '../store/charactersApi';
import { store } from '../store/store';

export interface GetCharacterFn {
  (id: string): Promise<{ data?: Item }>;
}

export const getCharactersData = async (
  ids: string[],
  getCharacter: GetCharacterFn
): Promise<Item[]> => {
  const result: Item[] = [];

  for (const id of ids) {
    const cached = charactersApi.endpoints.getCharacterById.select(id)(
      store.getState()
    );

    const charData = cached?.data ? cached.data : (await getCharacter(id)).data;

    result.push({
      id: charData?.id ?? 1,
      name: charData?.name ?? '',
      species: charData?.species ?? '',
      status: charData?.status ?? '',
      gender: charData?.gender ?? '',
      image: charData?.image ?? '',
      url: charData?.url ?? '',
    });
  }

  return result;
};
