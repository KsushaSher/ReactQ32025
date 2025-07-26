const BASE_URL = 'https://rickandmortyapi.com/api';

export async function fetchCharacters(page: string, name: string) {
  const response = await fetch(
    `${BASE_URL}/character/?page=${page}&name=${name}`
  );

  if (!response.ok && response.status === 404) {
    throw new Error(`No results found`);
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function fetchCharacterById(id: string) {
  const response = await fetch(`${BASE_URL}/character/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch character #${id}`);
  }

  return response.json();
}
