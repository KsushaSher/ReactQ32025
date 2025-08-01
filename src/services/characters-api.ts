import { BASE_URL } from '../shared/constants';

class CharactersAPI {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async fetchCharacters(page: string, name: string) {
    const url = `${this.baseUrl}/character/?page=${page}&name=${name}`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('No results found');
      }

      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  public async fetchCharacterById(id: string) {
    const url = `${this.baseUrl}/character/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch character #${id}`);
    }

    return response.json();
  }
}

export const charactersAPI = new CharactersAPI(BASE_URL);
