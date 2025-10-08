import type { CharacterItem } from '../models';
import { charactersApi } from '../store/api/charactersApi';
import { store } from '../store/store';

export type GetCharacterFn = (id: string) => Promise<UseLazyQueryStateResult>;

export interface UseLazyQueryStateResult {
  data?: CharacterItem;
  error?: unknown;
}

export const getCharactersData = async (
  ids: string[],
  getCharacter: GetCharacterFn
): Promise<CharacterItem[]> => {
  const result: CharacterItem[] = [];
  const idsForRequest: string[] = [];

  const createDefaultCharacter = () => ({
    id: result.length + 1,
    name: '',
    species: '',
    status: '',
    gender: '',
    image: '',
    url: '',
  });

  for (const id of ids) {
    const cached = charactersApi.endpoints.getCharacterById.select(id)(
      store.getState()
    );

    if (cached?.data) {
      result.push(cached?.data);
    } else {
      idsForRequest.push(id);
    }
  }

  try {
    const responses = await Promise.allSettled(
      idsForRequest.map((id) => getCharacter(id))
    );

    for (const response of responses) {
      if (response.status === 'fulfilled') {
        if (response.value.data) {
          result.push(response.value.data);
        } else {
          result.push(createDefaultCharacter());
        }
      } else {
        console.error('Error retrieving character data:', response.reason);
        result.push(createDefaultCharacter());
      }
    }
  } catch (err) {
    console.error('Unexpected error loading characters:', err);
  }

  return result;
};
