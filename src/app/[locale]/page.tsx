import { MainPage } from '../../pages/MainPage';

export default async function App({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page = '1' } = await searchParams;
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  ).then((res) => res.json());

  return <MainPage initialData={res} page={page} />;
}
