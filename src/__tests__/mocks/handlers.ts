import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://rickandmortyapi.com/api/character/', ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get('name');

    if (search?.toLowerCase() === 'rick') {
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
  }),
];
