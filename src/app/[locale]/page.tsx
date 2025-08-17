import MainPage from '../../pageComponents/MainPage';
import fetchCharacters from '../api/characters/fetchCharacters';

export default async function App({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page = '1' } = await searchParams;
  const res = await fetchCharacters(page);

  return <MainPage initialData={res} page={page} />;
}
