import type { Item } from '../models';
import { charactersAPI } from '../services/characters-api';

export const getCharactersData = async (ids: string[]): Promise<Item[]> => {
  const requests = ids.map((id) => charactersAPI.fetchCharacterById(id));
  const results = await Promise.all(requests);
  const data = results.map((item) => ({
    id: item.id,
    name: item.name,
    species: item.species,
    status: item.status,
    gender: item.gender,
    image: item.image,
    url: item.url,
  }));

  return data;
};
