import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'https://rickandmortyapi.com/api/character/',
    async ({ request }) => {
      const url = new URL(request.url);
      const search = url.searchParams.get('name');

      if (search?.toLowerCase() === 'rick') {
        await new Promise((r) => setTimeout(r, 300));

        return HttpResponse.json({
          results: [
            {
              id: 1,
              name: 'Rick Sanchez',
              status: 'Alive',
              species: 'Human',
              gender: 'Male',
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              url: 'https://rickandmortyapi.com/api/character/1',
            },
          ],
        });
      }

      return new HttpResponse(null, { status: 404 });
    }
  ),
];
