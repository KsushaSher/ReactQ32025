import { Section } from '../../components/Section';
import { Search } from '../../components/Search';
import { CardList } from '../../components/CardList';
import { useEffect } from 'react';
import Pagination from '../../components/Pagination';
import { Navigate, Outlet, useSearchParams } from 'react-router';
import s from './MainPage.module.scss';
import { useLocalStorage } from '../../utils/hooks/useLocalStorage';
import { LS_SEARCH_KEY } from '../../shared/constants/ls-keys';
import { ROUTES } from '../../shared/constants/routes';
import FlyoutElement from '../../components/FlyoutElement';
import { useGetCharactersQuery } from '../../store/charactersApi';
import RefreshButton from '../../components/RefreshButton';

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchLS, setSearchLS] = useLocalStorage(LS_SEARCH_KEY);

  const currentPage = searchParams.get('page');
  const search = searchParams.get('search') || searchLS;

  const { data, error, isLoading } = useGetCharactersQuery({
    page: currentPage,
    name: search,
  });
  const { info, results } = data || {};

  const handleSubmit = (value: string) => {
    const search = value.trim();

    setSearchLS(search);
    setSearchParams({ page: '1', ...(search && { search }) });
  };

  useEffect(() => {
    if (!currentPage)
      setSearchParams(
        { page: '1', ...(search && { search }) },
        { replace: true }
      );
  }, [setSearchParams, currentPage, search]);

  if (currentPage && !/^\d+$/.test(currentPage)) {
    return <Navigate to={ROUTES.NOT_FOUND} />;
  }

  return (
    <>
      <main data-testid="main-page">
        <div className={s['option-wrapper']}>
          <RefreshButton />
          <Search search={searchLS} onSubmit={handleSubmit} />
        </div>

        <Section loading={isLoading} error={error}>
          <Pagination pages={info?.pages} />
          <div className={s['content-wrapper']}>
            <CardList items={results} />
            <Outlet />
          </div>
        </Section>
        <FlyoutElement />
      </main>
    </>
  );
};

export default MainPage;
