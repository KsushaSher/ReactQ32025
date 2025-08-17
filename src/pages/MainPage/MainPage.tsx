'use client';

import { Section } from '../../components/Section';
import { Search } from '../../components/Search';
import { CardList } from '../../components/CardList';
import { useEffect } from 'react';
import Pagination from '../../components/Pagination';
import s from './MainPage.module.scss';
import { useLocalStorage } from '../../utils/hooks/local-storage';
import { LS_SEARCH_KEY } from '../../shared/constants/ls-keys';
import FlyoutElement from '../../components/FlyoutElement';
import { charactersApi } from '../../store/api/charactersApi';
import RefreshButton from '../../components/RefreshButton';
import { useRouter } from '../../i18n/navigation';
import { useSearchParams } from 'next/navigation';
import CardDetail from '../../components/CardDetail';
import { ROUTES } from '../../shared/constants/routes';
import { useAppDispatch } from '../../store/hooks';
import { CharactersApiResponse } from '../../models';

const MainPage = ({
  initialData,
  page,
}: {
  initialData: CharactersApiResponse;
  page: string;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      charactersApi.util.upsertQueryData(
        'getCharacters',
        { page, name: '' },
        initialData
      )
    );
  }, [dispatch, initialData, page]);

  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchLS, setSearchLS] = useLocalStorage(LS_SEARCH_KEY);

  const id = searchParams?.get('details') || null;
  const currentPage = searchParams?.get('page') || '1';
  const search = searchParams?.get('search') || searchLS;

  // const {
  //   data = initialData,
  //   error,
  //   isLoading,
  // } = useGetCharactersQuery(
  //   { page: currentPage, name: search },
  //   { skip: currentPage === page }
  // );
  const { info, results } = initialData || {};

  const handleSubmit = (value: string) => {
    const trimmedSearch = value.trim();

    setSearchLS(trimmedSearch);
    const query: Record<string, string> = { page: '1' };

    if (trimmedSearch) query.search = trimmedSearch;

    router.push(`?${new URLSearchParams(query).toString()}`);
  };

  useEffect(() => {
    if (!currentPage) {
      const query: Record<string, string> = { page: '1' };

      if (search) query.search = search;

      router.replace(`?${new URLSearchParams(query).toString()}`);
    }
  }, [currentPage, search, router]);

  if (currentPage && !/^\d+$/.test(currentPage)) {
    router.replace(ROUTES.NOT_FOUND);
  }

  return (
    <main data-testid="main-page">
      <div className={s['option-wrapper']}>
        <Search search={searchLS} onSubmit={handleSubmit} />
        <RefreshButton />
      </div>

      <Section loading={false}>
        <Pagination pages={info?.pages} />
        <div className={s['content-wrapper']}>
          <CardList items={results} />
          {id && <CardDetail id={id} />}
        </div>
      </Section>
      <FlyoutElement />
    </main>
  );
};

export default MainPage;
