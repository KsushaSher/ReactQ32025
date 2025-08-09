import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'https://rickandmortyapi.com/api/character/',
    async ({ request }) => {
      const url = new URL(request.url);
      const search = url.searchParams.get('name');

      await new Promise((r) => setTimeout(r, 300));

      if (search?.toLowerCase() === 'rick') {
        return HttpResponse.json({
          info: { count: 1, next: null, prev: null, pages: 1 },
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

      return HttpResponse.json({
        info: { count: 2, next: null, prev: null, pages: 1 },
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
          {
            id: 2,
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            url: 'https://rickandmortyapi.com/api/character/2',
          },
        ],
      });
    }
  ),
  http.get(
    'https://rickandmortyapi.com/api/character/:id',
    async ({ params }) => {
      const { id } = params;

      if (id === '1') {
        await new Promise((r) => setTimeout(r, 300));

        if (id === '1') {
          return HttpResponse.json({
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          });
        }
      }

      return new HttpResponse(null, { status: 404 });
    }
  ),
];
