async function fetchCharacters(page: string = '1') {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );

    if (!response.ok) {
      throw new Error(
        `Network error:${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Failed to retrieve character data:', error);

    return null;
  }
}
export default fetchCharacters;
