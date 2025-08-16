import CardDetail from '../../../components/CardDetail';

type Params<T> = Promise<T>;
type SearchParams = Promise<{
  [key: string]: string;
}>;

interface PageProps {
  params: Params<{ id: string }>;
  searchParams: SearchParams;
}

export default async function Page({
  params,
  searchParams,
}: PageProps): Promise<React.ReactElement | null> {
  const { id } = await params;
  const awaitedSearchParams = await searchParams;
  const search = awaitedSearchParams.search;

  console.log('id, search ----', { id, search });

  if (!id) return null;

  return <CardDetail id={id} search={search} />;
}
