import { NextResponse } from 'next/server';
import { CharacterItem } from '../../../models';
import { convertToCSV } from '../../../utils/convertToCSV';

export async function POST(request: Request) {
  try {
    const { ids } = await request.json();
    const results: CharacterItem[] = [];

    for (const id of ids) {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      if (res.ok) {
        const data = await res.json();

        results.push(data);
      }
    }

    const csv = convertToCSV(results);

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="characters.csv"',
      },
    });
  } catch (e) {
    console.error(e);

    return new NextResponse('Server error', { status: 500 });
  }
}
