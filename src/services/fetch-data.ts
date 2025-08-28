import { BASE_URL } from '../shared/constants';

export const fetchData = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No results found');
    }

    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
