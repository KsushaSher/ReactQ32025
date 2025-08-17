import MainPage from '../../pageComponents/MainPage';
import fetchCharacters from '../api/characters/fetchCharacters';

export default async function App({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const { page = '1', search = '' } = await searchParams;

  const res = await fetchCharacters(page, search);

  return <MainPage initialData={res} page={page} name={search} />;
}
